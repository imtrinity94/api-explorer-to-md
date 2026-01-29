# API Explorer to Markdown Scrapper

This tool automates the extraction of object documentation from the VMware Aria Automation Orchestrator API Explorer.

## Setup

1.  **Install dependencies**:
    ```bash
    npm install puppeteer-core
    ```
2.  **Configuration**:
    The scraper configuration is located at the top of `scrape_api_docs.js`. You can modify the following:
    - `TARGET_URL`: The URL of the Orchestrator UI Explorer.
    - `OUTPUT_FILE`: The name of the Markdown file to generate.
    - `INPUT_LIST_FILE`: The text file containing the list of objects to scrape.

## Usage

1.  **Run the script**:
    ```bash
    node scrape_api_docs.js
    ```
2.  **Manual Preparation**:
    - The script will launch a browser. **Log in** to the Orchestrator interface.
    - Navigate to the **API Explorer** and find the plugin you want to scrape.
    - Expand the tree and ensure all target objects are visible (click "Load more" if necessary).
3.  **Trigger Scrape**:
    - Once the UI is ready, create an empty file named `ready.txt` in the project root.
    - The script will detect the file and begin processing each object in your input list.
4.  **Results**:
    - The documentation is appended to the configured output file in Markdown format.

## Implementation Details

- **Puppeteer**: Uses Puppeteer to drive the browser and interact with the shadow DOM elements usually found in the Orchestrator UI.
- **Batched Processing**: Processes objects one by one to ensure the UI remains responsive and captures all details including Properties, Methods, and Descriptions.
