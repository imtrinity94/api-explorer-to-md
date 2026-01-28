# API Reference

Generated Documentation

## ConnectionManager

### Methods

#### `save`
Creates a new Connection for the provided parameters.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `smtpHost` | `String` |  |
| `smtpPort` | `Number` |  |
| `username` | `String` |  |
| `password` | `String` |  |
| `fromAddress` | `String` |  |
| `fromName` | `String` |  |

**Returns:** `String`

---

## EmailMessage

**Description:** Main class to create mail messages

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `smtpHost` | Mail sender SMTP host name or IP address | `string` | No |
| `smtpPort` | Mail sender SMTP port (the default is 25) | `number` | No |
| `toAddress` | Comma-separated list of destination email addresses | `string` | No |
| `fromAddress` | Email address of the sender | `string` | No |
| `fromName` | Display name of the sender (optional) | `string` | No |
| `ccAddress` | Comma-separated list of Carbon copy email addresses | `string` | No |
| `bccAddress` | Comma-separated list of Blank Carbon copy email addresses | `string` | No |
| `subject` | Email subject | `string` | No |
| `username` | Username to connect to the SNMP host | `string` | No |
| `password` | Password to connect to the SNMP host | `Object` | No |
| `useSsl` | Whether or not using smtp or smtps (SMTP over Ssl) protocol | `boolean` | No |
| `useStartTls` | Whether or not to enable STARTTLS command | `boolean` | No |

### Methods

#### `sendMessage`
Send the message.

**Returns:** `void`

---

#### `addMimePart`
Add a mime part to the message.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `content` | `Object` | Mime part content |
| `mimetype` | `String` | (Optional)Forced mime part type |

**Returns:** `void`

---

#### `setSessionProperty`
Set a session property.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` | Name of the property |
| `value` | `String` | Value for the property |

**Returns:** `void`

---

#### `getSessionProperty`
Get the value of the specified session property.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` | Name of the property |

**Returns:** `String`

---

## MailClient

**Description:** Mail client that can be used to retrieve messages from a mail server. The default protocol is IMAP but POP3 protocol can also be used.

### Methods

#### `MailClient`
**Returns:** `void`

---

#### `enableSSL`
Enable SSL connection.

**Returns:** `void`

---

#### `setConnectionTimeout`
Set connection timeout.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `timeout` | `Number` | Connection timeout |

**Returns:** `void`

---

#### `setSocketTimeout`
Set socket timeout.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `timeout` | `Number` | Socket timeout |

**Returns:** `void`

---

#### `setProtocol`
Set a mail protocol to use.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `protocol` | `String` | Protocol to use. It can be 'pop3' or 'imap'. |

**Returns:** `void`

---

#### `connect`
Connect the client to a mail server.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `host` | `String` | Host name or IP address of the mail server |
| `port` | `number` | Port number |
| `username` | `String` | User name used to connect |
| `password` | `String` | Password used to connect |

**Returns:** `void`

---

#### `enableImapCompatibilityMode`
Enables the IMAP Compatibility mode. It allows the client to avoid all sorts of parsing and protocol bugs in many IMAP servers, but of course it comes at the cost of being less efficient because it is not taking advantage of the IMAP protocol's ability to fetch only the parts of the message that are needed. For complete reference - http://www.oracle.com/technetwork/java/javamail/faq/index.html#imapserverbug

**Returns:** `void`

---

#### `disableImapCompatibilityMode`
Disables the IMAP Compatibility mode.

**Returns:** `void`

---

#### `getDefaultFolder`
Returns the name of the root folder of the default namespace presented to the user.

**Returns:** `void`

---

#### `openFolder`
Opens a folder on the mail server.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `folderName` | `String` | Message folder to open |

**Returns:** `Object`

---

#### `openDefaultFolder`
Opens the root folder of the default namespace presented to the user.

**Returns:** `Object`

---

#### `getSubFolders`
Returns a list of subfolders of the current folder.

**Returns:** `Array/String`

---

#### `getSubscribedSubFolders`
Returns a list of subfolders of the current folder.

**Returns:** `Array/String`

---

#### `getUserNamespaces`
Returns a set of folders representing the namespaces for a user.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `userName` | `String` | User name of the user |

**Returns:** `Array/String`

---

#### `closeFolder`
Closes the current folder.

**Returns:** `Object`

---

#### `getMessage`
Returns a message from the mail server.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `msgNumber` | `String` | Number of the message |

**Returns:** `Array/ReceivedMessage`

---

#### `getMessagesBetween`
Returns a list of messages from the mail server which have message numbers within a certain range.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `startMsgNumber` | `String` | Start message number |
| `endMsgNumber` | `String` | End message number |

**Returns:** `Array/ReceivedMessage`

---

#### `getMessages`
Returns all messages in the current folder.

**Returns:** `Array/ReceivedMessage`

---

#### `getUnseenMessages`
Returns all unread messages in the current folder.

**Returns:** `Array/ReceivedMessage`

---

#### `getRecentMessages`
Returns all recent messages of the current folder.

**Returns:** `Array/ReceivedMessage`

---

#### `getDeletedMessages`
Returns all deleted messages from the current folder.

**Returns:** `Array/ReceivedMessage`

---

#### `searchFromAddress`
Returns all messages that contain a specific string in the "From" address attribute.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `pattern` | `String` | String pattern used in the search |

**Returns:** `Array/ReceivedMessage`

---

#### `searchRecipientAddress`
Returns all messages that contain a specific string in the "To", "Cc" or "Bcc" address attributes.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `pattern` | `String` | String pattern used in the search |

**Returns:** `Array/ReceivedMessage`

---

#### `searchBodyMessage`
Returns all messages that contain a specific string in the message body.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `pattern` | `String` | String that must appear as a substring in the message body. |

**Returns:** `Array/ReceivedMessage`

---

#### `searchSubjectMessage`
Returns all messages that contain a specific string in the message subject.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `pattern` | `String` | String that must appear as a substring in the message subject. |

**Returns:** `Array/ReceivedMessage`

---

#### `getMessageCount`
Returns the total number of messages in the current folder.

**Returns:** `number`

---

#### `getNewMessageSize`
Returns the number of the new messages in the current folder.

**Returns:** `number`

---

#### `deleteMessage`
Mark a message for deletion. Messages marked for deletion are deleted by the server only when the folder is closed or by explicitly invoking an 'expunge' method.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `msgNumber` | `String` | Number of message to delete |

**Returns:** `void`

---

#### `deleteMessages`
Mark messages for deletion. Messages marked for deletion are deleted by the server only when the folder is closed or by explicitly invoking an 'expunge' method.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `msgNumbers` | `Array/String` | Numbers of messages to delete |

**Returns:** `void`

---

#### `expungeMessages`
Expunge (permanently remove) all messages marked for deletion.

**Returns:** `Array/ReceivedMessage`

---

#### `setMaxBodyPartSize`
Set MAX allowed body part size in MB

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `size` | `Number` | Max body part size in MB |

**Returns:** `void`

---

#### `setSessionProperty`
Set a session property.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` | Name of the property |
| `value` | `String` | Value for the property |

**Returns:** `void`

---

#### `getSessionProperty`
Get the value of the specified session property.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` | Name of the property |

**Returns:** `String`

---

#### `close`
Disconnects the client from the mail server. Expunges all messages marked for deletion.

**Returns:** `void`

---

## MessageBodyPart

**Description:** Part of the message that contains a set of attributes and a content

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `contentType` | Content-Type of the content of this part. Returns null if the Content-Type could not be determined. | `string` | Yes |
| `disposition` | Disposition of this part. The disposition describes how the part should be presented to the user. | `string` | Yes |
| `fileName` | Filename associated with this part, if possible. | `string` | Yes |

### Methods

#### `getContent`
Returns the content of this body part as a raw string.

**Returns:** `String`

---

#### `getMultiPartContent`
Returns the content as MessageMultiPart if the body part is of a multipart type.

**Returns:** `MessageMultiPart`

---

#### `isContentMultiPart`
Shows whether the content is a multipart object.

**Returns:** `Boolean`

---

#### `getSize`
Return the size of the content of this part in bytes.

**Returns:** `number`

---

#### `isAttachment`
Returns true if this part is an attachment.

**Returns:** `Boolean`

---

#### `getAsMimeAttachment`
Returns the content as MimeAttachment object.

**Returns:** `MimeAttachment`

---

## MessageMultiPart

**Description:** Container that holds multiple body parts

### Methods

#### `getPartsCount`
Returns the number of the body parts.

**Returns:** `number`

---

#### `getBodyPart`
Returns a specific body part from the multipart message.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `index` | `number` | Index of the body part |

**Returns:** `MessageBodyPart`

---

## ReceivedMessage

**Description:** Represents a received email message from a mail server.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `from` | "From" attribute of the message as array of strings | `Array/String` | Yes |
| `to` | "To" attribute of the message as array of strings | `Array/String` | Yes |
| `subject` | "Subject" attribute of the message | `string` | Yes |
| `cc` | "Cc" attribute of the message as array of strings | `Array/String` | Yes |
| `bcc` | "Bcc" attribute of the message as array of strings | `Array/String` | Yes |
| `replyTo` | "ReplyTo" attribute of the message as array of strings | `Array/String` | Yes |
| `id` | Number of the message | `number` | Yes |
| `contentType` | Content type of the message | `string` | Yes |

### Methods

#### `getHeaders`
Returns all message headers as properties.

**Returns:** `Properties`

---

#### `getHeader`
Returns a value of a specific header key.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` | Key of the header |

**Returns:** `String`

---

#### `getFolder`
Returns the folder from which this message was obtained.

**Returns:** `String`

---

#### `getContent`
Returns the content of the message as a raw string.

**Returns:** `String`

---

#### `getMultiPartContent`
Returns the content of the message as MessageMultiPart if the content is of a multipart type.

**Returns:** `MessageMultiPart`

---

#### `isContentMultiPart`
Shows whether the content is a multipart object.

**Returns:** `Boolean`

---

#### `getReceivedDate`
Returns the date on which this message was received.

**Returns:** `Date`

---

#### `getSentDate`
Returns the date on which this message was sent.

**Returns:** `Date`

---

#### `isExpunged`
Checks whether this message is expunged.

**Returns:** `Boolean`

---

#### `delete`
Marks this message for deletion

**Returns:** `void`

---

