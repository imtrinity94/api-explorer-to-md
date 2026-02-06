const fs = require('fs');
const puppeteer = require('puppeteer-core');
const os = require('os');
const path = require('path');

function findBrowser() {
    const commonPaths = [
        'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
        'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
        'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
    ];
    for (const p of commonPaths) {
        if (fs.existsSync(p)) return p;
    }
    return null;
}

// Configuration
const TARGET_URL = 'https://vra1.vcf.lab/orchestration-ui/#/explorer'; // Base URL
const OUTPUT_FILE = 'Cohesity_Docs_Generated.md';
const INPUT_LIST_FILE = 'cohesity_list.txt';

// Read classes from file
let classesToScrape = [];
try {
    if (fs.existsSync(INPUT_LIST_FILE)) {
        const fileContent = fs.readFileSync(INPUT_LIST_FILE, 'utf-8');
        const allLines = fileContent.split(/\r?\n/).map(l => l.trim());
        const filteredLines = allLines.filter(l => l);

        // Find where "Objects" starts (case insensitive)
        const startIdx = allLines.findIndex(l => l.toLowerCase() === 'objects');
        if (startIdx !== -1) {
            // Take all non-empty lines after "Objects"
            classesToScrape = allLines.slice(startIdx + 1).filter(l => l);
        } else {
            classesToScrape = filteredLines;
        }
        console.log(`Loaded ${classesToScrape.length} classes from ${INPUT_LIST_FILE}.`);
    } else {
        console.error(`Input file ${INPUT_LIST_FILE} not found!`);
        process.exit(1);
    }
} catch (e) {
    console.error("Error reading list file:", e);
    process.exit(1);
}

(async () => {
    console.log('Launching browser...');
    const executablePath = findBrowser();
    if (!executablePath) {
        console.error("Could not find browser executable.");
        process.exit(1);
    }

    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        executablePath: executablePath,
        userDataDir: './chrome_profile',
        ignoreHTTPSErrors: true
    });
    const page = await browser.newPage();

    try {
        console.log(`Navigating to ${TARGET_URL}...`);
        await page.goto(TARGET_URL);

        console.log('--------------------------------------------------------------------------------');
        console.log('MANUAL PREPARATION REQUIRED:');
        console.log('1. Log in to the application.');
        console.log('2. Navigate to the plugin (Cohesity) in the tree.');
        console.log('3. Manually expand all nodes (click "Load more" until all items are visible).');
        console.log('   (The user has indicated they will do this manually).');
        console.log(`4. When you are ready to start scraping, create a file named "ready.txt" in:`);
        console.log(`   ${__dirname}`);
        console.log('--------------------------------------------------------------------------------');
        console.log('Waiting for "ready.txt" to appear...');

        // Wait loop for ready.txt
        const readyFilePath = path.join(__dirname, 'ready.txt');
        // Clean up previous run
        if (fs.existsSync(readyFilePath)) fs.unlinkSync(readyFilePath);

        while (!fs.existsSync(readyFilePath)) {
            await new Promise(r => setTimeout(r, 2000));
        }
        console.log('Found "ready.txt"! Starting scrape...');

        // Initialize output file
        if (!fs.existsSync(OUTPUT_FILE)) {
            fs.writeFileSync(OUTPUT_FILE, "# Cohesity Reference\n\nGenerated Documentation\n\n");
        }

        // 2. Scrape Loop
        for (let i = 0; i < classesToScrape.length; i++) {
            const className = classesToScrape[i];
            console.log(`[${i + 1}/${classesToScrape.length}] Processing: ${className}...`);

            try {
                // Try XPath first - precise match
                let linkHandlers = await page.$$(`xpath///a[contains(@class, 'clr-treenode-link') and contains(text(), '${className}')]`);

                // Filter logic fallback only if not found immediately
                if (linkHandlers.length === 0) {
                    // Check if maybe it's text-content exact match
                    linkHandlers = await page.$$(`xpath///a[contains(@class, 'clr-treenode-link')][text()='${className}']`);
                }

                // If still not found, try using the UI Search Box
                if (linkHandlers.length === 0) {
                    const searchInputs = await page.$$('input[placeholder*="Filter"], input[placeholder*="Search"]');
                    if (searchInputs.length > 0) {
                        const searchBox = searchInputs[0];
                        await searchBox.click({ clickCount: 3 });
                        await searchBox.press('Backspace');
                        await searchBox.type(className);
                        await new Promise(r => setTimeout(r, 1500));

                        linkHandlers = await page.$$(`xpath///a[contains(@class, 'clr-treenode-link') and contains(text(), '${className}')]`);
                    }
                }

                if (linkHandlers.length > 0) {
                    await linkHandlers[0].click();

                    // Wait for H2 to update
                    await page.waitForFunction(
                        (name) => {
                            const h2 = document.querySelector('.apiContent h2');
                            return h2 && h2.innerText.includes(name);
                        },
                        { timeout: 5000 },
                        className
                    ).catch(() => console.log('Timeout waiting for Title update, scraping anyway...'));

                    await new Promise(r => setTimeout(r, 500));

                    // Scrape Content logic
                    const classMarkdown = await page.evaluate((cName) => {
                        const container = document.querySelector('.apiContent');
                        if (!container) return `\n## ${cName}\n*Could not find content container*\n`;

                        let searchMd = "";
                        const title = container.querySelector('h2')?.innerText || cName;
                        let description = "";
                        const h2Node = container.querySelector('h2');
                        if (h2Node && h2Node.nextElementSibling) {
                            description = h2Node.nextElementSibling.innerText;
                        }

                        searchMd += `## ${title}\n\n`;
                        if (description) searchMd += `**Description:** ${description}\n\n`;

                        // Attributes
                        const attributesHeader = Array.from(container.querySelectorAll('h3')).find(h => h.innerText.trim() === 'Attributes');
                        if (attributesHeader) {
                            searchMd += `### Attributes\n\n`;
                            searchMd += `| Name | Description | Type | Read-only |\n| :--- | :--- | :--- | :--- |\n`;
                            let sibling = attributesHeader.nextElementSibling;
                            let table = null;
                            while (sibling) {
                                if (sibling.tagName === 'TABLE') { table = sibling; break; }
                                if (sibling.querySelector('table')) { table = sibling.querySelector('table'); break; }
                                if (sibling.tagName === 'H3') break;
                                sibling = sibling.nextElementSibling;
                            }
                            if (table) {
                                table.querySelectorAll('tbody tr').forEach(tr => {
                                    const cols = tr.querySelectorAll('td');
                                    if (cols.length >= 3) {
                                        searchMd += `| \`${cols[0]?.innerText.trim()}\` | ${cols[1]?.innerText.trim()} | \`${cols[2]?.innerText.trim()}\` | ${cols[3]?.innerText.trim()} |\n`;
                                    }
                                });
                            } else { searchMd += `*Attributes table not found*\n`; }
                            searchMd += `\n`;
                        }

                        // Methods
                        const methodsHeader = Array.from(container.querySelectorAll('h3')).find(h => h.innerText.trim() === 'Methods');
                        if (methodsHeader) {
                            searchMd += `### Methods\n\n`;
                            container.querySelectorAll('.method').forEach(mDiv => {
                                const mName = mDiv.querySelector('h4')?.innerText.trim() || "Unknown";
                                const mDesc = mDiv.querySelector('h4')?.nextElementSibling?.innerText.trim() || "";
                                searchMd += `#### \`${mName}\`\n${mDesc}\n\n`;

                                const paramHeader = mDiv.querySelector('.detail b');
                                if (paramHeader && paramHeader.innerText.includes('Parameters')) {
                                    searchMd += `**Parameters:**\n| Name | Type | Description |\n| :--- | :--- | :--- |\n`;
                                    mDiv.querySelectorAll('table.params tbody tr').forEach(tr => {
                                        const cols = tr.querySelectorAll('td');
                                        if (cols.length >= 2) {
                                            searchMd += `| \`${cols[0].innerText.trim()}\` | \`${cols[1].innerText.trim()}\` | ${cols[2]?.innerText.trim() || ""} |\n`;
                                        }
                                    });
                                    searchMd += `\n`;
                                }
                                const returnHeader = Array.from(mDiv.querySelectorAll('b')).find(b => b.innerText.includes('Returns'));
                                if (returnHeader) searchMd += `**Returns:** \`${returnHeader.nextElementSibling?.innerText.trim() || "void"}\`\n`;
                                searchMd += `\n---\n\n`;
                            });
                        }
                        return searchMd;
                    }, className);

                    // Append to file immediately
                    fs.appendFileSync(OUTPUT_FILE, classMarkdown);

                } else {
                    console.warn(`Could not find tree link for ${className}`);
                    fs.appendFileSync(OUTPUT_FILE, `## ${className}\n*Link not found in tree*\n\n`);
                }

            } catch (err) {
                console.error(`Error processing ${className}:`, err);
                fs.appendFileSync(OUTPUT_FILE, `## ${className}\n*Error scraping: ${err.message}*\n\n`);
            }
        }

        console.log(`\nDone! Documentation saved to ${OUTPUT_FILE}`);

    } catch (e) {
        console.error("Script failed:", e);
    } finally {
        console.log("Browser left open for inspection. Close manually or Ctrl+C.");
    }
})();
