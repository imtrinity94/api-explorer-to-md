# API Reference

Generated Documentation

## FTPClient

**Description:** Jakarta Commons Net FTP client wrapper

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `output` | Command output if any | `string` | Yes |
| `replyCode` | Last reply code | `number` | Yes |
| `state` | Execution state | `string` | Yes |
| `cwd` | Current working directory | `string` | No |
| `connectTimeout` | Socket connect timeout | `number` | No |
| `timeout` | Socket timeout | `number` | No |
| `tcpNoDelay` | Socket TCP NO DELAY | `boolean` | No |
| `soLinger` | Socket SO Linger , null if disabled | `number` | No |

### Methods

#### `FTPClient`
**Returns:** `void`

---

#### `enableSSL`
Enable SSL

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `on` | `boolean` | SSL on/off |

**Returns:** `Object`

---

#### `connect`
Connect the client to an host

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `host` | `String` | Hostname or IP |
| `port` | `number` | Port number (default 21) |

**Returns:** `Object`

---

#### `login`
Login on the ftp server

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `username` | `String` | Username |
| `password` | `String` | Password |
| `account` | `String` | Optional Account name |

**Returns:** `boolean`

---

#### `executeCommand`
Execute command

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `cmd` | `String` | Command to execute |
| `args` | `String` | Arguments |

**Returns:** `number`

---

#### `getFile`
Copy a file FROM a remote host TO the Automation Orchestrator Server.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `remoteFile` | `String` | Remote file name |
| `localFile` | `String` | Local File name |

**Returns:** `Number`

---

#### `getString`
Get the content of a remote file.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `remoteFile` | `String` | Remote file name |

**Returns:** `String`

---

#### `putFile`
Copy a file TO a remote host FROM the Automation Orchestrator Server.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `localFile` | `String` | Local file name |
| `remoteFile` | `String` | Remote File name |

**Returns:** `Number`

---

#### `putString`
Put a string content to a remote file.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `content` | `String` | String representation of content to put on the FTP Server |
| `remoteFile` | `String` | Remote File name |

**Returns:** `Number`

---

#### `listAll`
List files and directories in path.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `basePath` | `String` | Base path to list |

**Returns:** `Array/String`

---

#### `listFile`
List files ONLY in path.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `basePath` | `String` | Base path to list |

**Returns:** `Array/String`

---

#### `listDir`
List directories ONLY in path.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `basePath` | `String` | Base path to list |

**Returns:** `Array/String`

---

#### `disconnect`
Logout and disconnects the current session if open.

**Returns:** `Object`

---

#### `getStatus`
The status information returned by the server.

**Returns:** `String`

---

#### `isAvailable`
Make various checks on the socket to test if it is available for use

**Returns:** `boolean`

---

#### `isConnected`
Returns true if the client is currently connected to a server

**Returns:** `boolean`

---

## IMAPClient

**Description:** Jakarta Commons Net IMAP client wrapper

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `connectTimeout` | Socket connect timeout | `number` | No |
| `timeout` | Socket timeout | `number` | No |
| `tcpNoDelay` | Socket TCP NO DELAY | `boolean` | No |
| `soLinger` | Socket SO Linger , null if disabled | `number` | No |

### Methods

#### `IMAPClient`
**Returns:** `void`

---

#### `enableSSL`
Enable SSL

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `on` | `boolean` | True if SSL is enabled |

**Returns:** `Object`

---

#### `connect`
Connect the client to an host

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `host` | `String` | Hostname or IP |
| `port` | `number` | Port number default 110 |

**Returns:** `Object`

---

#### `login`
Login to the IMAP server with the given username and password. You must first connect to the server with 'connect()' before attempting to login.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `username` | `String` | The account name being logged in to |
| `password` | `String` | The plain text password of the account |

**Returns:** `boolean`

---

#### `logout`
Logout of the IMAP server. To fully disconnect from the server you must call 'disconnect()'

**Returns:** `boolean`

---

#### `close`
Send a CLOSE command to the server.

**Returns:** `boolean`

---

#### `disconnect`
Disconnects the client from the server.

**Returns:** `Object`

---

#### `noop`
Send a NOOP command to the IMAP server. This is useful for keeping connection alive.

**Returns:** `boolean`

---

#### `isAvailable`
Make various checks on the socket to test if it is available for use.

**Returns:** `boolean`

---

#### `isConnected`
Returns true if the client is currently connected to a server.

**Returns:** `boolean`

---

#### `append`
Send an APPEND command to the server.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `mailboxName` | `String` | The mailbox name |

**Returns:** `boolean`

---

#### `appendWithOptions`
Send an APPEND command to the server.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `mailboxName` | `String` | The mailbox name |
| `flags` | `String` | The flag parenthesized list (optional) |
| `datetime` | `String` | The date/time string (optional) |

**Returns:** `boolean`

---

#### `capability`
Send a CAPABILITY command to the server.

**Returns:** `boolean`

---

#### `check`
Send a CHECK command to the server

**Returns:** `boolean`

---

#### `copy`
Send a COPY command to the server.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `sequenceSet` | `String` | The sequence set to fetch |
| `mailboxName` | `String` | The mailbox name |

**Returns:** `boolean`

---

#### `create`
Send a CREATE command to the server.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `mailboxName` | `String` | The mailbox name |

**Returns:** `boolean`

---

#### `delete`
Send a DELETE command to the server.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `mailboxName` | `String` | The mailbox name |

**Returns:** `boolean`

---

#### `examine`
Send a EXAMINE command to the server.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `mailboxName` | `String` | The mailbox name |

**Returns:** `boolean`

---

#### `expunge`
Send a EXPUNGE command to the server.

**Returns:** `boolean`

---

#### `fetch`
Send a FETCH command to the server.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `sequenceSet` | `String` | The sequence set to fetch |
| `itemNames` | `String` | The item names for the FETCH command |

**Returns:** `boolean`

---

#### `list`
Send a LIST command to the server.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `refName` | `String` | The reference name |
| `mailboxName` | `String` | The mailbox name |

**Returns:** `boolean`

---

#### `lsub`
Send a LSUB command to the server.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `refName` | `String` | The reference name |
| `mailboxName` | `String` | The mailbox name |

**Returns:** `boolean`

---

#### `rename`
Send a RENAME command to the server.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `oldMailboxName` | `String` | The existing mailbox name to rename |
| `newMailboxName` | `String` | The new mailbox name |

**Returns:** `boolean`

---

#### `search`
Send a SEARCH command to the server.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `criteria` | `String` | The search criteria |

**Returns:** `boolean`

---

#### `searchCharset`
Send a SEARCH command to the server.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `charset` | `String` | The charset (optional) |
| `criteria` | `String` | The search criteria |

**Returns:** `boolean`

---

#### `status`
Send a STATUS command to the server.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `mailboxName` | `String` | The mailbox name |
| `itemNames` | `Array/String` | The status data item names |

**Returns:** `boolean`

---

#### `select`
Send a SELECT command to the server.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `mailboxName` | `String` | The mailbox name to select |

**Returns:** `boolean`

---

#### `store`
Send a STORE command to the server.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `sequenceSet` | `String` | The sequence set to store |
| `itemNames` | `String` | The item names for the STORE command |
| `itemValues` | `String` | The item values for the STORE command |

**Returns:** `boolean`

---

#### `subscribe`
Send a SUBSCRIBE command to the server.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `mailboxName` | `String` | The mailbox name to subscribe to |

**Returns:** `boolean`

---

#### `unsubscribe`
Send a UNSUBSCRIBE command to the server.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `mailboxName` | `String` | The mailbox name to unsubscribe from |

**Returns:** `boolean`

---

#### `uid`
Send a UID command to the server.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `command` | `String` | The command for UID |
| `command` | `String` | The arguments for the command |

**Returns:** `boolean`

---

#### `getReply`
Returns the reply to the last command sent to the server. The value is a single string containing all the reply lines including newlines.

**Returns:** `String`

---

#### `getReplyLines`
Returns an array of lines received as a reply to the last command sent to the server. The lines have end of lines truncated.

**Returns:** `Array/String`

---

## POP3Client

**Description:** Jakarta Commons Net POP3 client wrapper

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `output` | Command output if any | `string` | Yes |
| `state` | Connection state | `number` | Yes |
| `connectTimeout` | Socket connect timeout | `number` | No |
| `timeout` | Socket timeout | `number` | No |
| `tcpNoDelay` | Socket TCP NO DELAY | `boolean` | No |
| `soLinger` | Socket SO Linger , null if disabled | `number` | No |

### Methods

#### `POP3Client`
**Returns:** `void`

---

#### `enableSSL`
Enable SSL

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `on` | `boolean` | SSL on/off |

**Returns:** `Object`

---

#### `connect`
Connect the client to an host

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `host` | `String` | Hostname or IP |
| `port` | `number` | Port number default 110 |

**Returns:** `Object`

---

#### `login`
Login to the POP3 server with the given username and password. You must first connect to the server with 'connect()' before attempting to login.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `username` | `String` | The account name being logged in to. |
| `password` | `String` | The plain text password of the account. |

**Returns:** `boolean`

---

#### `loginWithSecret`
Login to the POP3 server with the given username and authentication information. Use this method when connecting to a server requiring authentication using the APOP command. Because the timestamp produced in the greeting banner varies from server to server, it is not possible to consistently extract the information. Therefore, after connecting to the server, you must get the 'output' sttribute and parse out the timestamp information yourself.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `username` | `String` | The account name being logged in to. |
| `timestamp` | `String` | The timestamp string to combine with the secret. |
| `secret` | `String` | The shared secret which produces the MD5 digest when combined with the timestamp. |

**Returns:** `boolean`

---

#### `listMessages`
List all messages. If there are no messages, this method returns a zero length array. If the list attempt fails, it returns null.

**Returns:** `Array/POP3Message`

---

#### `logout`
Logout of the POP3 server. To fully disconnect from the server you must call 'disconnect()'

**Returns:** `Object`

---

#### `disconnect`
Disconnects the client from the server.

**Returns:** `Object`

---

#### `noop`
Send a NOOP command to the POP3 server. This is useful for keeping connection alive.

**Returns:** `Object`

---

#### `reset`
Reset the POP3 session. This is useful for undoing any message deletions that may have been performed.

**Returns:** `Object`

---

#### `isAvailable`
Make various checks on the socket to test if it is available for use

**Returns:** `boolean`

---

#### `isConnected`
Returns true if the client is currently connected to a server

**Returns:** `boolean`

---

## POP3Message

**Description:** POP3 Message

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `id` | return message id in current session | `number` | Yes |
| `from` | return message "from" | `string` | Yes |
| `to` | return message "to" | `string` | Yes |
| `subject` | return message subject | `string` | Yes |
| `body` | return message body | `string` | Yes |

### Methods

#### `getHeader`
Get the header value i.e. ("Subject","Date","From",...)

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` | Header key |

**Returns:** `string`

---

#### `deleteFromServer`
Delete a message from the POP3 server. The message is only marked for deletion by the server. If you decide to unmark the message, you must issues a 'reset()' command on POP3Client. Messages marked for deletion are only deleted by the server on POP3Client 'logout()'.

**Returns:** `Object`

---

## TelnetClient

**Description:** Telnet client Wrapper

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `connectTimeout` | Socket connect timeout | `number` | No |
| `timeout` | Socket timeout | `number` | No |
| `tcpNoDelay` | Socket TCP NO DELAY | `boolean` | No |
| `soLinger` | Socket SO Linger , null if disabled | `number` | No |

### Methods

#### `TelnetClient`
**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `terminal` | `String` | Terminal type VT100 by default |

**Returns:** `void`

---

#### `enableSSL`
Enable SSL

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `on` | `boolean` | SSL on/off |

**Returns:** `Object`

---

#### `connect`
Connect the client to an host

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `host` | `String` | Hostname or IP |
| `port` | `number` | Port number default 23 |

**Returns:** `Object`

---

#### `disconnect`
Disconnect the client

**Returns:** `Object`

---

#### `sendBinary`
Get an OID value in the current session

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `val` | `Array/Object` | Send a binary information as array of numbers |

**Returns:** `Object`

---

#### `sendString`
Get an OID value in the current session

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `oid` | `String` | Send a string command |

**Returns:** `Object`

---

#### `waitForData`
return true if data are available or false if timeout

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `timeout` | `Number` | Time to wait in milliseconds |

**Returns:** `boolean`

---

#### `receiveAsString`
Get a response as string

**Returns:** `string`

---

#### `receiveAsBinary`
Get a response as an arrayof number

**Returns:** `Array/Object`

---

#### `isAvailable`
Make various checks on the socket to test if it is available for use

**Returns:** `boolean`

---

#### `isConnected`
Returns true if the client is currently connected to a server

**Returns:** `boolean`

---

