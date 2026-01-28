# API Reference

Generated Documentation

## XMLDocument

**Description:** XML document

### Methods

#### `getDocumentElement`
This is a convenience attribute that allows direct access to the child node that is the root element of the document.

**Returns:** `XMLElement`

---

#### `createElement`
Create a new element with the given name

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `String` | Element's name |

**Returns:** `XMLElement`

---

#### `createComment`
Create a new comment node

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `String` | Comment's value |

**Returns:** `XMLNode`

---

#### `createTextNode`
Create a text node

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `String` | Text's value |

**Returns:** `XMLNode`

---

#### `createCDATASection`
Create a new CDATA node

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `Object` | CDATA value |

**Returns:** `XMLNode`

---

#### `createProcessingInstruction`
Create a ProcessingInstruction node given the specified name and data strings.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `target` | `String` | The target part of the processing instruction. |
| `data` | `String` | The data for the node. |

**Returns:** `XMLNode`

---

#### `normalize`
Normalize the document

**Returns:** `Object`

---

#### `getElementsByTagName`
Returns a XMLNodeList of all the Elements with a given tag name in the order in which they are encountered in a preorder traversal of the XMLDocument tree.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `String` | Element's name to find |

**Returns:** `Object`

---

#### `appendChild`
Adds the node newChild to the end of the list of children of this node. If the newChild is already in the tree, it is first removed.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `child` | `XMLNode` | The node to insert |

**Returns:** `Object`

---

#### `removeChild`
Removes the child node indicated by oldChild from the list of children, and returns it

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `oldChild` | `XMLNode` | The node to remove |

**Returns:** `Object`

---

#### `replaceChild`
Replaces the child node oldChild with newChild in the list of children, and returns the oldChild node. If the newChild is already in the tree, it is first removed.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `newNode` | `XMLNode` | The replacement node |
| `oldNode` | `XMLNode` | The node to replace |

**Returns:** `Object`

---

#### `insertBefore`
Inserts the node newChild before the existing child node refChild. If refChild is null, insert newChild at the end of the list of children. If the newChild is already in the tree, it is first removed.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `newNode` | `XMLNode` | Node to insert |
| `refNode` | `XMLNode` | Reference node |

**Returns:** `Object`

---

#### `cloneNode`
Clone the node

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `deep` | `boolean` | Is a deep copy |

**Returns:** `Object`

---

#### `getChildNodes`
Get all children

**Returns:** `Object`

---

## XMLElement

**Description:** Main Element

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `textContent` |  | `string` | No |
| `tagName` |  | `string` | Yes |

### Methods

#### `getAttributes`
A XMLNamedNodeMap containing the attributes of this Element.

**Returns:** `Object`

---

#### `setAttribute`
Set a new attribute

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `String` | Attribute's name |
| `value` | `String` | Attribute's value |

**Returns:** `Object`

---

#### `removeAttribute`
Remove atrribute with the given name

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `String` | Attribute's name |

**Returns:** `Object`

---

#### `hasAttribute`
Returns true if the attribute exists

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `String` | Attribute's name |

**Returns:** `boolean`

---

#### `getElementsByTagName`
Returns a XMLNodeList of all the Elements with a given tag name in the order in which they are encountered in a preorder traversal of the current element tree.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `String` | Element's name to find |

**Returns:** `Object`

---

#### `appendChild`
Adds the node newChild to the end of the list of children of this node. If the newChild is already in the tree, it is first removed.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `child` | `XMLNode` | The node to insert |

**Returns:** `Object`

---

#### `removeChild`
Removes the child node indicated by oldChild from the list of children, and returns it

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `oldChild` | `XMLNode` | The node to remove |

**Returns:** `Object`

---

#### `replaceChild`
Replaces the child node oldChild with newChild in the list of children, and returns the oldChild node. If the newChild is already in the tree, it is first removed.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `newNode` | `XMLNode` | The replacement node |
| `oldNode` | `XMLNode` | The node to replace |

**Returns:** `Object`

---

#### `insertBefore`
Inserts the node newChild before the existing child node refChild. If refChild is null, insert newChild at the end of the list of children. If the newChild is already in the tree, it is first removed.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `newNode` | `XMLNode` | Node to insert |
| `refNode` | `XMLNode` | Reference node |

**Returns:** `Object`

---

#### `cloneNode`
Clone the node

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `deep` | `boolean` | Is a deep copy |

**Returns:** `Object`

---

#### `normalize`
Normalize the node

**Returns:** `Object`

---

#### `getChildNodes`
Get all children

**Returns:** `XMLNodeList`

---

## XMLManager

**Description:** Main class to create xml document parser

### Methods

#### `newDocument`
(Static) Create a new Empty XML document

**Returns:** `XMLDocument`

---

#### `loadDocument`
(Static) Deprecated. Use XMLManager.fromString instead. Get the document for a given path using the default character encoding

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `path` | `String` | XML file path |
| `validate` | `boolean` | Should validate the document |

**Returns:** `XMLDocument`

---

#### `loadDocumentWithEncoding`
(Static) Deprecated. Use XMLManager.fromString instead. Get the document for a given path using the specified character encoding

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `path` | `String` | XML file path |
| `encoding` | `String` | Character encoding |
| `validate` | `boolean` | Should validate the document |

**Returns:** `XMLDocument`

---

#### `fromString`
(Static) Get the document for a given string content

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `stringContext` | `String` | Xml Content |

**Returns:** `XMLDocument`

---

#### `saveDocument`
(Static) Deprecated. Return the content as string instead using getDocumentContent. Save the document to a given path using the default character encoding

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `document` | `XMLDocument` | The document |
| `path` | `String` | XML file path |
| `systemDtD` | `String` | DTD System DOCTYPE (optional) |
| `publicDtD` | `String` | DTD Public DOCTYPE (optional) |

**Returns:** `Object`

---

#### `saveDocumentWithEncoding`
(Static) Deprecated. Return the content as string instead using getDocumentContent. Save the document to a given path using the default character encoding

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `document` | `XMLDocument` | The document |
| `path` | `String` | XML file path |
| `encoding` | `String` | Character encoding |
| `systemDtD` | `String` | DTD System DOCTYPE (optional) |
| `publicDtD` | `String` | DTD Public DOCTYPE (optional) |

**Returns:** `Object`

---

#### `validateDocument`
(Static) Validate a document without saving it

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `document` | `XMLDocument` | The document |
| `systemDtD` | `String` | DTD System DOCTYPE (optional) |
| `publicDtD` | `String` | DTD Public DOCTYPE (optional) |

**Returns:** `Object`

---

#### `getDocumentContent`
(Static) Get the document as string

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `document` | `XMLDocument` | The document |

**Returns:** `string`

---

## XMLNamedNodeMap

**Description:** Node map, usually used for attributes of an element

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `length` | list's length | `number` | Yes |

### Methods

#### `item`
Get child at index

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `index` | `number` | Index |

**Returns:** `XMLNode`

---

#### `getNamedItem`
Retrieves a node specified by name.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `string` | item name |

**Returns:** `XMLNode`

---

## XMLNode

**Description:** Node Element

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `nodeValue` | The node value | `string` | No |
| `nodeName` | The node name | `string` | Yes |
| `parentNode` | The parent node (XMLNode) | `Object` | Yes |

### Methods

#### `appendChild`
Adds the node newChild to the end of the list of children of this node. If the newChild is already in the tree, it is first removed.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `child` | `XMLNode` | The node to insert |

**Returns:** `Object`

---

#### `removeChild`
Removes the child node indicated by oldChild from the list of children, and returns it

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `oldChild` | `XMLNode` | The node to remove |

**Returns:** `Object`

---

#### `replaceChild`
Replaces the child node oldChild with newChild in the list of children, and returns the oldChild node. If the newChild is already in the tree, it is first removed.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `newNode` | `XMLNode` | The replacement node |
| `oldNode` | `XMLNode` | The node to replace |

**Returns:** `Object`

---

#### `insertBefore`
Inserts the node newChild before the existing child node refChild. If refChild is null, insert newChild at the end of the list of children. If the newChild is already in the tree, it is first removed.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `newNode` | `XMLNode` | Node to insert |
| `refNode` | `XMLNode` | Reference node |

**Returns:** `Object`

---

#### `cloneNode`
Clone the node

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `deep` | `boolean` | Is a deep copy |

**Returns:** `Object`

---

#### `normalize`
Normalize the node

**Returns:** `Object`

---

#### `getChildNodes`
Get all children

**Returns:** `XMLNodeList`

---

## XMLNodeList

**Description:** NodeList Element

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `length` | list's length | `number` | Yes |

### Methods

#### `item`
Get child at index

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `index` | `number` | Index |

**Returns:** `Object`

---

