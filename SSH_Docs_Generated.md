# API Reference

Generated Documentation

## KeyPairManager

**Description:** Set of functions to manage private/public keys.

### Methods

#### `generateKeyPair`
(Static) Generate a pair of public/private key. Returns the generated key fingerprint.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `type` | `string` | Key type, must be "rsa", "dsa" or "ecdsa" |
| `path` | `Path` | filename used to store public/private keys (i.e. /tmp/mykey will generate /tmp/mykey and /tmp/mykey.pub) |
| `passphrase` | `SecureString` | (Optional)Passphrase used to encrypt the private key. |
| `keySize` | `number` | (Optional)Generated key size. Defaults to 2048. |
| `comment` | `string` | (Optional)Comment added to the public key. |

**Returns:** `string`

---

#### `changePassphrase`
(Static) Change the passphrase of a private key.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `path` | `Path` | Filename of the private key |
| `oldPasspharse` | `SecureString` | Old passphare. |
| `newPassphrase` | `SecureString` | New passphare. |

**Returns:** `Object`

---

## SSHCommand

**Description:** SSH Command

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `exitCode` | The exit code of the last command (execution channel). Values are 0 if successful, -1 for initializing, and positive number for an error. | `number` | Yes |
| `cmd` | Command to execute | `string` | No |
| `output` | Command output if any | `string` | Yes |
| `error` | Command error if any | `string` | Yes |
| `state` | Execution state | `string` | Yes |

### Methods

#### `SSHCommand`
Create a new SSHCommand

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `host` | `string` | Target host |
| `username` | `string` | Connection username |
| `password` | `SecureString` | Connection password |

**Returns:** `void`

---

#### `SSHCommand`
Create a new SSHCommand

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `host` | `string` | Target host |
| `username` | `string` | Connection username |
| `password` | `string` | Connection password |
| `port` | `number` | Target port |

**Returns:** `void`

---

#### `execute`
Execute a single command and return immediately. This command will connect the session, request an execution channel, execute the command and close the execution channel. The session is open automatically if not opened yet, but will remain open after the command execution. Use disconnect to close the session. Value of the exitCode property is changed to -1 for initializing, 0 if successful, and positive number if an error occured.

**Returns:** `Object`

---

#### `executeAndLog`
Execute a single command and wait until end. Value of the exitCode property is changed to -1 for initializing, 0 if successful, and positive number if an error occured.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `file` | `string` | Target File to log stdout of the command |

**Returns:** `Object`

---

#### `executeCommand`
Execute a single command and wait until completed, return the stdout result if sychronous. This command will connect the session, request an execution channel, execute the command and close the execution channel. The session is open automatically if not opened yet, but will remain open after the command execution. Use disconnect to close the session. Value of the exitCode property is changed to -1 for initializing, 0 if successful, and positive number if an error occured.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `cmd` | `string` | SSH command |
| `wait` | `boolean` | synchronous if true, asynchronous otherwise |

**Returns:** `string`

---

#### `setEncoding`
Sets the encoding that will be used to process the results from executeCommand method.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `encoding` | `string` | Encoding name. Leave this empty or null in order to use the default system encoding. Example values: "UTF-8", "ISO-8859-1", etc. |

**Returns:** `Object`

---

#### `getEncoding`
Returns the encoding used by this SSHCommand

**Returns:** `object`

---

#### `getFile`
Copy a file from a remote host to Automation Orchestrator Server. This command will connect the session, request an execution channel, execute the command and close the execution channel. The session is open automatically if not opened yet, but will remain open after the command execution. Use disconnect to close the session. Returns 0 if successful, or -1 if an error has occurred.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `remoteFile` | `string` | Remote file name |
| `localFile` | `string` | Local File name |

**Returns:** `number`

---

#### `putFile`
Copy a file to a remote host from Automation Orchestrator Server. Returns 0 if successful, or -1 if an error has occurred. If a remote file name is provided, the destination file name will use it. If only the destination directory is specified, then the destination file will use the source file name. The destination directory must exist.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `localFile` | `string` | Local file name |
| `remoteFile` | `string` | Remote File name or Directory |

**Returns:** `number`

---

#### `findAll`
Recursively search and return matching pattern file and directory. This command will connect the session, request an execution channel, execute the command and close the execution channel. The session is open automatically if not opened yet, but will remain open after the command execution. Use disconnect to close the session.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `basePath` | `string` | Base path to search |
| `pattern` | `string` | matching pattern (i.e. *.vmdk) |

**Returns:** `Array/string`

---

#### `findFile`
Recursively search and return matching pattern file ONLY. This command will connect the session, request an execution channel, execute the command and close the execution channel. The session is open automatically if not opened yet, but will remain open after the command execution. Use disconnect to close the session.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `basePath` | `string` | Base path to search |
| `pattern` | `string` | matching pattern (i.e. *.vmdk) |

**Returns:** `Array/string`

---

#### `findDir`
Recursively search and return matching pattern directory ONLY. This command will connect the session, request an execution channel, execute the command and close the execution channel. The session is open automatically if not opened yet, but will remain open after the command execution. Use disconnect to close the session.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `basePath` | `string` | Base path to search |
| `pattern` | `string` | matching pattern (i.e. *.vmdk) |

**Returns:** `Array/string`

---

#### `listAll`
List files and directories in path. This command will connect the session, request an execution channel, execute the command and close the execution channel. The session is open automatically if not opened yet, but will remain open after the command execution. Use disconnect to close the session.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `basePath` | `string` | Base path to list |

**Returns:** `Array/string`

---

#### `listFile`
List files ONLY in path. This command will connect the session, request an execution channel, execute the command and close the execution channel. The session is open automatically if not opened yet, but will remain open after the command execution. Use disconnect to close the session.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `basePath` | `string` | Base path to list |

**Returns:** `Array/string`

---

#### `listDir`
List directories ONLY in path. This command will connect the session, request an execution channel, execute the command and close the execution channel. The session is open automatically if not opened yet, but will remain open after the command execution. Use disconnect to close the session.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `basePath` | `string` | Base path to list |

**Returns:** `Array/string`

---

#### `disconnect`
Disconnects the current session if open. The session parameters are given in the object constructor (host, username, password); a session is opened automatically when any method is called that requires a session (like execute). Once open, the session remains open; any method uses the same session but opens a new channel and the closes it when done. You need to use this disconnect method to close the session.

**Returns:** `Object`

---

## SSHFile

**Description:** File on a remote file system using SSH to access it

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | File name | `string` | Yes |
| `fileName` | File name | `string` | Yes |
| `port` | SSH port to access this file or folder | `number` | Yes |
| `path` | File full path | `string` | Yes |
| `hostname` | SSH Hostname to access this file or folder | `string` | Yes |

## SSHFolder

**Description:** Folder on a remote file system using SSH to access it

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Folder name | `string` | Yes |
| `folderName` | Folder name | `string` | Yes |
| `port` | SSH port to access this file or folder | `number` | Yes |
| `path` | File full path | `string` | Yes |
| `hostname` | SSH Hostname to access this file or folder | `string` | Yes |

## SSHHost

**Description:** SSH Host object

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `id` | The id of the host | `String` | Yes |
| `displayName` | The display name | `String` | Yes |
| `port` | The target port | `number` | Yes |
| `hostname` | The hostname | `String` | Yes |
| `username` | The username | `String` | Yes |
| `rootFolders` | The Root Folders | `Array/String` | Yes |
| `sshHostConfiguration` | The whole SshHostConfiguration | `SSHHostConfiguration` | Yes |

## SSHHostConfiguration

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `hostname` | The hostname | `String` | No |
| `port` | The target port | `number` | No |
| `username` | The username | `String` | No |
| `password` | The password | `SecureString` | No |
| `passphrase` | The passphrase | `SecureString` | No |
| `certificatePath` | The path to the certificate | `String` | No |
| `passwordAuthentication` | If set to true it will use password authenticatoin, otherwise a certificate will be used. | `boolean` | No |
| `rootFolders` | The Root Folders | `Array/String` | No |
| `id` | The id of the configuration. Note: could not be manually set! | `String` | Yes |

## SSHHostManager

**Description:** SSHHostManager provides CRUD operations for the SSHHost objects

### Methods

#### `addSshHost`
Adds a SSH Host

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `config` | `SSHHostConfiguration` |  |

**Returns:** `SSHHost`

---

#### `removeSshHost`
Removes a SSH Host

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `host` | `SSHHost` |  |

**Returns:** `void`

---

#### `updateSshHost`
Updates a SSH Host

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `sshHost` | `SSHHost` |  |
| `sourceConfig` | `SSHHostConfiguration` |  |

**Returns:** `SSHHost`

---

#### `getSshHost`
Gets a SSH Host

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `id` | `String` |  |

**Returns:** `SSHHost`

---

#### `getSshHosts`
Gets all SSH Hosts

**Returns:** `Array/SSHHost`

---

#### `addRootFolderToHost`
Adds a Root Folder to SSH Host

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `sshHost` | `SSHHost` |  |
| `rootFolder` | `String` |  |

**Returns:** `SSHHost`

---

#### `removeRootFolderFromHost`
Removes a Root Folder from SSH Host

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `sshHost` | `SSHHost` |  |
| `rootFolder` | `String` |  |

**Returns:** `SSHHost`

---

## SSHSession

**Description:** SSH Session to username@host:port. This object replace the old 'SSHCommand' object.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `exitCode` | The exit code of the last command (execution channel). Values are 0 if successful, -1 for initializing, and positive number for an error. | `number` | Yes |
| `cmd` | Command to execute | `string` | No |
| `pty` | RFC4254 6.2. Requesting a Pseudo-Terminal | `boolean` | No |
| `terminal` | Set the terminal type, for example vt100 | `string` | No |
| `output` | Command output if any | `string` | Yes |
| `error` | Command error if any | `string` | Yes |
| `state` | Execution state | `string` | Yes |
| `soTimeout` | Socket timeout | `number` | No |

### Methods

#### `SSHSession`
Create a new SSHSession

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `host` | `string` | Target host |
| `username` | `string` | Connection username |

**Returns:** `void`

---

#### `SSHSession`
Create a new SSHSession

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `host` | `string` | Target host |
| `username` | `string` | Connection username |
| `port` | `number` | Target port |

**Returns:** `void`

---

#### `connectWithPassword`
Connect the session using simple username/password authentification.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `password` | `SecureString` | Connection password |

**Returns:** `Object`

---

#### `connectWithIdentidy`
Deprecated use connectWithIdentity(). Connect the session using Public key Authentication.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `privateKeyPath` | `Path` | Identity file path containing the private key. |
| `passphrase` | `SecureString` | (Optional)Passphrase use to decrypt the private key |

**Returns:** `Object`

---

#### `connectWithIdentity`
Connect the session using Public key Authentication.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `privateKeyPath` | `Path` | Identity file path containing the private key. |
| `passphrase` | `SecureString` | (Optional)Passphrase use to decrypt the private key |

**Returns:** `Object`

---

#### `connectWithPasswordOrIdentity`
Connect the session using either password or Public key Authentication.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `isPassword` | `boolean` | If true: uses password authentication, if false: public key |
| `password` | `SecureString` | If isPassword is true: the connection password, if isPassword is false: the passphrase use to decrypt the private key |
| `privateKeyPath` | `Path` | Identity file path containing the private key. (Ignored if isPassword is true) |

**Returns:** `Object`

---

#### `setUserInfo`
The provided userInfo object is used for callback for the keyboard-interactive authentication and for the other types of messages send from the remote server during authentication. The function signatures should be: * getPassphrase() : String * getPassword() : String * promptKeyboardInteractive(String destination, String name, String instruction, String[] prompt, boolean[] echo) : String[] * promptPassphrase(String message) : boolean * promptPassword(String message) : boolean * promptYesNo(String message) : boolean * showMessage(String message) : void Example: var session = new SSHSession("myhost","myuser"); session.setUserInfo({ promptKeyboardInteractive: function(destination, name, instruction, prompt, echo){ if (typeof prompt != "undefined" && prompt.length == 1 && !echo[0] && prompt[0].match(/password:|passwort:|kennwort:|mot de passe:/i) { return "secretPasswd"; } else { throw "do not know how to handle " + prompt; } }, showMessage : function(msg){ System.log("msg " + msg); } }) ;

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `userInfo` | `Object` | This is the JS object that contains the callback methods. |

**Returns:** `Object`

---

#### `addEnvironment`
Fills a property list of environment variables that will be set prior to opening a channel.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `string` | A name for environment variable |
| `value` | `string` | A value for environment variable |

**Returns:** `Object`

---

#### `setConnectTimeout`
Set connection timeout, in milliseconds

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `timeout` | `number` | Connection timeout |

**Returns:** `void`

---

#### `getConnectTimeout`
Get connection timeout

**Returns:** `number`

---

#### `setTimeout`
Set socket timeout, in milliseconds

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `timeout` | `number` | Connection timeout |

**Returns:** `void`

---

#### `getTimeout`
Get socket timeout

**Returns:** `number`

---

#### `setKeepAliveInterval`
Set an interval, in milliseconds, to send keep-alive message. If zero, keep-alive message will not be sent.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `interval` | `number` | Keep-alive interval |

**Returns:** `void`

---

#### `getKeepAliveInterval`
Get keep-alive interval

**Returns:** `number`

---

#### `setKeepAliveCountMax`
Sets the number of keep-alive messages which may be sent without receiving any messages back from the server. If this threshold is reached while keep-alive messages are being sent, the connection will be disconnected. The default value is 1.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `count` | `number` | Keep-alive messages count threshold |

**Returns:** `void`

---

#### `getKeepAliveCountMax`
Get keep-alive messages count threshold

**Returns:** `number`

---

#### `setEncoding`
Sets the encoding that will be used to process the results from executeCommand method

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `encoding` | `string` | Encoding name. Leave this empty or null in order to use the default system encoding. Example values: "UTF-8", "ISO-8859-1", etc. |

**Returns:** `Object`

---

#### `getEncoding`
Returns the encoding used by this SSHSession

**Returns:** `object`

---

#### `execute`
Execute a single command and return immediately. This command will connect the session, request an execution channel, execute the command and close the execution channel. The session is open automatically if not opened yet, but will remain open after the command execution. Use disconnect to close the session. Value of the exitCode property is changed to -1 for initializing, 0 if successful, and positive number if an error occured.

**Returns:** `Object`

---

#### `executeAndLog`
Execute a single command and wait until end. Value of the exitCode property is changed to -1 for initializing, 0 if successful, and positive number if an error occured.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `file` | `Path` | Target File to log stdout of the command |

**Returns:** `Object`

---

#### `executeCommand`
Execute a single command and wait until completed, return the stdout result if sychronous. This command will connect the session, request an execution channel, execute the command and close the execution channel. The session is open automatically if not opened yet, but will remain open after the command execution. Use disconnect to close the session. Value of the exitCode property is changed to -1 for initializing, 0 if successful, and positive number if an error occured.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `cmd` | `string` | SSH command |
| `wait` | `boolean` | synchronous if true, asynchronous otherwise |

**Returns:** `string`

---

#### `getFile`
Copy a file from a remote host to Automation Orchestrator Server. This command will connect the session, request an execution channel, execute the command and close the execution channel. The session is open automatically if not opened yet, but will remain open after the command execution. Use disconnect to close the session. Returns 0 if successful, or -1 if an error has occurred.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `remoteFile` | `Path` | Remote file name |
| `localFile` | `Path` | Local File name |

**Returns:** `number`

---

#### `putFile`
Copy a file to a remote host from Automation Orchestrator Server. Returns 0 if successful, or -1 if an error has occurred. If a remote file name is provided, the destination file name will use it. If only the destination directory is specified, then the destination file will use the source file name. The destination directory must exist.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `localFile` | `Path` | Local file name |
| `remoteFile` | `Path` | Remote File name or Directory |

**Returns:** `number`

---

#### `findAll`
Recursively search and return matching pattern file and directory. This command will connect the session, request an execution channel, execute the command and close the execution channel. The session is open automatically if not opened yet, but will remain open after the command execution. Use disconnect to close the session.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `basePath` | `Path` | Base path to search |
| `pattern` | `string` | matching pattern (i.e. *.vmdk) |

**Returns:** `Array/string`

---

#### `findFile`
Recursively search and return matching pattern file ONLY. This command will connect the session, request an execution channel, execute the command and close the execution channel. The session is open automatically if not opened yet, but will remain open after the command execution. Use disconnect to close the session.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `basePath` | `Path` | Base path to search |
| `pattern` | `string` | matching pattern (i.e. *.vmdk) |

**Returns:** `Array/string`

---

#### `findDir`
Recursively search and return matching pattern directory ONLY. This command will connect the session, request an execution channel, execute the command and close the execution channel. The session is open automatically if not opened yet, but will remain open after the command execution. Use disconnect to close the session.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `basePath` | `Path` | Base path to search |
| `pattern` | `string` | matching pattern (i.e. *.vmdk) |

**Returns:** `Array/string`

---

#### `listAll`
List files and directories in path. This command will connect the session, request an execution channel, execute the command and close the execution channel. The session is open automatically if not opened yet, but will remain open after the command execution. Use disconnect to close the session.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `basePath` | `Path` | Base path to list |

**Returns:** `Array/string`

---

#### `listFile`
List files ONLY in path. This command will connect the session, request an execution channel, execute the command and close the execution channel. The session is open automatically if not opened yet, but will remain open after the command execution. Use disconnect to close the session.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `basePath` | `Path` | Base path to list |

**Returns:** `Array/string`

---

#### `listDir`
List directories ONLY in path. This command will connect the session, request an execution channel, execute the command and close the execution channel. The session is open automatically if not opened yet, but will remain open after the command execution. Use disconnect to close the session.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `basePath` | `Path` | Base path to list |

**Returns:** `Array/string`

---

#### `disconnect`
Disconnects the current session if open. The session parameters are given in the object constructor (host, username, password); a session is opened automatically when any method is called that requires a session (like execute). Once open, the session remains open; any method uses the same session but opens a new channel and the closes it when done. You need to use this disconnect method to close the session.

**Returns:** `Object`

---

