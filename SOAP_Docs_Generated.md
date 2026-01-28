# API Reference

Generated Documentation

## SOAPAuthentication

**Description:** Represents authentication information for a SOAP host.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `type` | Authentication type | `String` | Yes |
| `rawAuthProperties` | Authetication attributes | `Array/String` | Yes |

### Methods

#### `getRawAuthProperty`
Gets the specified authentication attribute.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `index` | `number` | Index of the attribute |

**Returns:** `String`

---

## SOAPAuthenticationManager

**Description:** Manages SOAP host authentication objects.

### Methods

#### `getSOAPAuthentications`
Returns all the available authentication types.

**Returns:** `Array/String`

---

#### `getSessionModes`
Returns the supported session modes.

**Returns:** `Array/String`

---

#### `createAuthentication`
Creates an authentication instance.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `type` | `String` | Authentication type |
| `params` | `Array/String` | Authentication parameters |

**Returns:** `Authentication`

---

## SOAPDynamicInParameter

**Description:** Represents a dynamic input parameter object to be used from scripting.

## SOAPDynamicOutParameter

**Description:** Represents a dynamic output parameter object to be used from scripting.

## SOAPHost

**Description:** Represents an external system as its Web Service interface.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `id` | Identifier of the host | `String` | Yes |
| `preferredEndpointURL` | Preferred endpoint address. If set will be used with higher priority than the endpoint address defined within the WSDL. | `String` | No |
| `name` | Name of the host | `String` | No |
| `wsdlUri` | URI to the WSDL file of the external service | `String` | No |
| `wsdlFileContent` | WSDL file content | `String` | No |
| `wsdlLocal` | True if the WSDL content is locally provided, false if it is derived from URL | `boolean` | No |
| `connectionTimeout` | Connection timeout in seconds | `number` | No |
| `requestTimeout` | Request timeout in seconds | `number` | No |
| `authentication` | Authentication information | `SOAPAuthentication` | No |
| `proxyHost` | Proxy host | `String` | No |
| `keyId` | Key Id | `String` | No |
| `proxyPort` | Proxy port | `number` | No |

### Methods

#### `getOperation`
Gets a SOAP operation by name.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `operationName` | `String` | Name of the operation |

**Returns:** `SOAPOperation`

---

#### `getOperations`
Gets all the SOAP operation names.

**Returns:** `Array/String`

---

#### `createWorkflow`
Creates a new workflow for a SOAP operation.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `operationName` | `String` | Name of the SOAP operation |
| `workflowName` | `String` | Name of the workflow |
| `category` | `WorkflowCategory` | Category of the workflow |
| `options` | `Properties` | Workflow generation options. Supported options : datetime.format = ["RFC822", "ISO8601"] |

**Returns:** `Workflow`

---

## SOAPHostManager

**Description:** Provides CRUD operations for SOAP hosts.

### Methods

#### `addHost`
Adds a SOAP host to the plug-in's inventory.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `host` | `SOAPHost` | SOAP host to add |

**Returns:** `SOAPHost`

---

#### `updateHost`
Updates the specified SOAP host in the plug-in's inventory.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `host` | `SOAPHost` | SOAP host with the updated data |

**Returns:** `SOAPHost`

---

#### `removeHost`
Removes a SOAP host from the plug-in's inventory.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `id` | `String` | Identifier of the SOAP host to remove |

**Returns:** `SOAPHost`

---

#### `getHosts`
Returns the list of SOAP host ids from the plug-in's inventory.

**Returns:** `Array/String`

---

#### `getHost`
Returns the SOAP host with the specified name from the plug-in's inventory.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `id` | `String` | Identifier of the SOAP host to get |

**Returns:** `SOAPHost`

---

#### `reloadConfiguration`
Reloads the plug-in configuration.

**Returns:** `Object`

---

## SOAPInterceptor

**Description:** Holds javascript handler functions that intercept the SOAP requests and SOAP responses.

### Methods

#### `setRequestHeaderInterceptor`
Sets a handler function to intercept the SOAP request header.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `requestHeaderInterceptor` | `InterceptorHandler` | Handler function which takes the XML content as input parameter and returns a modified XML content. |

**Returns:** `Object`

---

#### `setRequestBodyInterceptor`
Sets a handler function to intercept the SOAP request body.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `requestBodyInterceptor` | `InterceptorHandler` | Handler function which takes the XML content as input parameter and returns a modified XML content. |

**Returns:** `Object`

---

#### `setResponseHeaderInterceptor`
Sets a handler function to intercept the SOAP response header.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `responseHeaderInterceptor` | `InterceptorHandler` | Handler function which takes the XML content as input parameter and returns a modified XML content. |

**Returns:** `Object`

---

#### `setResponseBodyInterceptor`
Sets a handler function to intercept the SOAP response body.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `responseBodyInterceptor` | `InterceptorHandler` | Handler function which takes the XML content as input parameter and returns a modified XML content. |

**Returns:** `Object`

---

## SOAPOperation

**Description:** Represents a SOAP operation template generated from WSDL definition.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Name of the SOAP operation | `String` | Yes |

### Methods

#### `getHost`
Gets the parent SOAP host of the SOAP operation.

**Returns:** `SOAPHost`

---

#### `getInHeaders`
Gets a flat representation of the SOAP operation's input headers.

**Returns:** `Array/String`

---

#### `getInParameters`
Gets a flat representation of the SOAP operation's input parameters.

**Returns:** `Array/String`

---

#### `getOutParameters`
Gets a flat representation of the SOAP operation's output parameters.

**Returns:** `Array/String`

---

#### `createSOAPRequest`
Creates a new SOAP request for the SOAP operation.

**Returns:** `SOAPRequest`

---

#### `invoke`
Invokes the SOAP operation.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `request` | `SOAPRequest` | SOAP request containing the input parameters |

**Returns:** `SOAPResponse`

---

#### `invokeWithInterceptor`
Invokes the SOAP operation with message interceptor.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `request` | `SOAPRequest` | SOAP request containing the input parameters |
| `interceptor` | `SOAPInterceptor` | Holder of Javascript interceptor functions |

**Returns:** `SOAPResponse`

---

## SOAPRequest

**Description:** Represents a SOAP request to pass when a SOAP operation is invoked.

### Methods

#### `setInParameter`
Sets an input parameter in the request.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `String` | Name of the input parameter |
| `value` | `Any` | Value of the input parameter |

**Returns:** `Object`

---

#### `addInParameterAttribute`
Adds an attribute to the input parameter in the request.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `parameterName` | `String` | Name of the input parameter |
| `attributeName` | `String` | Name of attribute |
| `attributeValue` | `Any` | Value of the attribute |

**Returns:** `Object`

---

#### `addRawHeader`
Adds an raw XML header to the request.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `rawHeader` | `String` | Raw header as XML |

**Returns:** `Object`

---

#### `setInHeader`
Sets an input header in the request.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `headerName` | `String` | Name of the input header |
| `headerValue` | `Any` | Value of the input header |

**Returns:** `Object`

---

#### `addInHeaderAttribute`
Adds an attribute to the input header.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `headerName` | `String` | Name of the input header |
| `attributeName` | `String` | Name of attribute |
| `attributeValue` | `Any` | Value of the attribute |

**Returns:** `Object`

---

#### `setHttpHeader`
Adds a single HTTP header to the SOAP request. Any already existing HTTP header that has the same key will be overwritten.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` | Key/Name of the HTTP header. |
| `value` | `String` | Value of the HTTP header. |

**Returns:** `Object`

---

#### `setHttpHeaders`
Adds HTTP headers to the SOAP request. All already existing HTTP headers that have the same keys will be overwritten.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `httpHeaders` | `Properties` | HTTP headers as Properties. |

**Returns:** `Object`

---

## SOAPResponse

**Description:** Represents a SOAP response received when a SOAP operation is invoked.

### Methods

#### `getOutParameters`
Gets the full names of all output parameters.

**Returns:** `Array/String`

---

#### `getOutParameter`
Gets an output parameter value from the response.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `parameterName` | `String` | Full name of the parameter |

**Returns:** `Any`

---

#### `getOutParameterAttributes`
Gets the attribute names from the given output parameter.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `parameterName` | `String` | Full name of the parameter |

**Returns:** `Array/String`

---

#### `getOutParameterAttribute`
Gets the attribute value from the given output parameter and attribute name.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `parameterName` | `String` | Full name of the parameter |
| `attributeName` | `String` | Name of the attribute |

**Returns:** `Any`

---

#### `getOutHeaders`
Gets the full names of all output headers.

**Returns:** `Array/String`

---

#### `getOutHeader`
Gets an output header value from the response.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `headerName` | `String` | Full name of the header |

**Returns:** `Any`

---

#### `getOutHeaderAttributes`
Gets the attribute names from the given output header.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `headerName` | `String` | Full name of the header |

**Returns:** `Array/String`

---

#### `getOutHeaderAttribute`
Gets the attribute value from the given output header and attribute name.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `headerName` | `String` | Full name of the header |
| `attributeName` | `String` | Name of the attribute |

**Returns:** `Any`

---

