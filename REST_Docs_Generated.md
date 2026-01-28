# API Reference

Generated Documentation

## AuthorizationValue

**Description:** Authorization value util

### Methods

#### `setKeyName`
**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `keyName` | `String` | Converts java script Numbers to XSD integral type |

**Returns:** `void`

---

#### `setType`
**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `type` | `String` | Converts java script Numbers to XSD integral type |

**Returns:** `void`

---

#### `setValue`
**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `value` | `String` | Converts java script Numbers to XSD integral type |

**Returns:** `void`

---

#### `getKeyName`
**Returns:** `String`

---

#### `getValue`
**Returns:** `String`

---

#### `getType`
**Returns:** `String`

---

#### `keyName`
**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `keyName` | `String` | Converts java script Numbers to XSD integral type |

**Returns:** `AuthorizationValue`

---

#### `value`
**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `value` | `String` | Converts java script Numbers to XSD integral type |

**Returns:** `AuthorizationValue`

---

#### `type`
**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `type` | `String` | Converts java script Numbers to XSD integral type |

**Returns:** `AuthorizationValue`

---

## HTTPBasicAuthentication

**Description:** Contains server authentication properties.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `type` | Type of this authentication object | `String` | Yes |
| `rawAuthProperties` | The authentication properties returned as array | `Array/String` | Yes |

### Methods

#### `getRawAuthProperty`
Retrieves an authentication property by specified index.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `index` | `Number` | The index of the property to return |

**Returns:** `String`

---

#### `getBasicAuthHeaderValue`
(Static) get Basic Auth Header Value

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `username` | `String` | username |
| `password` | `String` | pasword |

**Returns:** `String`

---

## RESTAuthentication

**Description:** Contains server authentication properties.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `type` | Type of this authentication object | `String` | Yes |
| `rawAuthProperties` | The authentication properties returned as array | `Array/String` | Yes |

### Methods

#### `getRawAuthProperty`
Retrieves an authentication property by specified index.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `index` | `Number` | The index of the property to return |

**Returns:** `String`

---

## RESTAuthenticationManager

**Description:** Provides authentication types listing and creation.

### Methods

#### `getRESTAuthentications`
Returns all available authentication types.

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
| `type` | `String` | The authentication type |
| `params` | `Array/String` | The authentication parameters |

**Returns:** `Authentication`

---

## RESTCookie

**Description:** Wrapper around http cookie. RESTCookie objects are read-only.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Cookie name. | `String` | Yes |
| `value` | Cookie value. | `String` | Yes |
| `domain` | Cookie domain. | `String` | Yes |
| `path` | Cookie path. | `String` | Yes |
| `expiryDate` | Cookie expiry date. | `Date` | Yes |

## RESTHost

**Description:** REST plug-in host object

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `id` | id | `String` | Yes |
| `name` | name | `String` | No |
| `url` | url | `String` | No |
| `authentication` | authentication | `Authentication` | No |
| `proxyAuthentication` | proxyAuthentication | `Authentication` | No |
| `connectionTimeout` | connectionTimeout | `Number` | No |
| `operationTimeout` | operationTimeout | `Number` | No |
| `hostVerification` | hostVerification | `Boolean` | No |
| `proxyHost` | Proxy host | `String` | No |
| `proxyPort` | Proxy port | `number` | No |
| `privateKeyId` | The Id of the PrivateKeyEntry to use for client cerificate authentication. | `String` | No |
| `cookies` | Cookies | `Array/RESTCookie` | Yes |

### Methods

#### `getCookies`
Retrieves cookies associated with this RESTHost.

**Returns:** `Array/RESTCookie`

---

#### `clearCookies`
Clears the cookies associated with this RESTHost.

**Returns:** `Void`

---

#### `clearExpired`
Clears cookies associated with this RESTHost expired by the given date.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `date` | `Date` |  |

**Returns:** `Boolean`

---

#### `clone`
Creates a copy of the REST host.

**Returns:** `RESTHost`

---

#### `newHostFromThis`
Creates a new host from this REST host.

**Returns:** `RESTHost`

---

#### `addOperation`
Adds a new operation to the host.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `operation` | `RESTOperation` | The operation to add |

**Returns:** `RESTOperation`

---

#### `updateOperation`
Updates a REST operation.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `operation` | `RESTOperation` | New update data |

**Returns:** `RESTOperation`

---

#### `getOperation`
Retrieves an operation by id.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `id` | `String` | Id of the operation to retrieve |

**Returns:** `RESTOperation`

---

#### `removeOperation`
Removes a REST operation from this host.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `id` | `String` | Id of the operation to be removed |

**Returns:** `RESTOperation`

---

#### `getOperations`
Retrieves all operation names.

**Returns:** `Array/String`

---

#### `addSchemaFromUrl`
Adds an XSD schema from a given URL.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `url` | `String` | URL to get schema from |

**Returns:** `Array/String`

---

#### `addSchemaFromXmlString`
Adds an XSD schema provided as a string.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `xml` | `String` | XSD schema's content |

**Returns:** `Array/String`

---

#### `removeAllSchemas`
Removes all associated XSD schemas from this host.

**Returns:** `void`

---

#### `getSchemaElements`
Retrieves all XML elements for a given namespace, from XSD files for this host.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `namespace` | `String` | Namespace for which to return XML elements |

**Returns:** `Array/Any`

---

#### `getSchemaNamespaces`
Retrieves all namespaces from XSD files for this host.

**Returns:** `Array/String`

---

#### `supportParallelRequests`
Check if the current REST host instance supports parallel request executions

**Returns:** `boolean`

---

#### `createRequest`
Creates a RESTRequest using the host data.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `method` | `String` | HTTP method to be used for request creation |
| `url` | `String` | URL to extend the host's base URL |
| `content` | `Any` | Content the request should send |

**Returns:** `Request`

---

#### `createRequestWithOptions`
Creates a RESTRequest using the host data.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `method` | `String` | HTTP method to be used for request creation |
| `url` | `String` | URL to extend the host's base URL |
| `content` | `Any` | Content the request should send |
| `options` | `RESTRequestOptions` | Options for the request |

**Returns:** `Request`

---

#### `setAutoUrlRedirect`
(DEPRECATED) Set automatic URL redirection. If set to true, the generated HTTP request will automatically follow the URL redirects (upon HTTP response status 301, 302 and 307). Return true if the value is propagated. setRedirectStrategy method is to be used.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `autoRedirectEnabled` | `boolean` | Set if the generated request atomatically follow the URL redirects. |

**Returns:** `void`

---

#### `getAutoUrlRedirectEnabled`
(DEPRECATED) Check if the automatically redirection is enabled. getRedirectStrategy method is to be used.

**Returns:** `boolean`

---

#### `setRedirectStrategy`
The chosen redirect strategy. Possible values are defaultRedirect, neverRedirect, alwaysRedirect.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `redirectStrategy` | `string` | Redirect strategy |

**Returns:** `Object`

---

#### `getRedirectStrategy`
Returns which redirect strategy is used

**Returns:** `String`

---

#### `executeRequestWithCredentials`
Executes a request with provided credentials. Supported only for hosts created with RESTHostManager.createTransientHostFrom() with HTTP Basic Authentication.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `method` | `String` | HTTP method to be used for request creation. |
| `url` | `String` | URL to extend the host's base URL. |
| `content` | `Any` | Content the request should send. |
| `user` | `String` | Username to use for the HTTP basic authentication. |
| `pass` | `String` | Password to use for the HTTP basic authentication. |

**Returns:** `Response`

---

## RESTHostManager

**Description:** Provides CRUD operations for RootElement objects.

### Methods

#### `createHost`
Creates a RESTHost object.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `String` | Name of the RESTHost object. |

**Returns:** `RESTHost`

---

#### `createHostSupportingParallelRequests`
Creates a RESTHost object with option to use new Http Context per request. With that setup the Rest Host supports parallel requests.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `String` | Name of the RESTHost object. |

**Returns:** `RESTHost`

---

#### `addHost`
Adds a RESTHost object to the plug-in's inventory.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `host` | `RESTHost` | RESTHost object to add |

**Returns:** `RESTHost`

---

#### `updateHost`
Updates the specified RESTHost in the plug-in's inventory.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `host` | `RESTHost` | RESTHost object with the update data |

**Returns:** `RESTHost`

---

#### `removeHost`
Removes a RESTHost object from the plug-in's inventory.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `id` | `String` | The RESTHost id which should be removed |

**Returns:** `RESTHost`

---

#### `getHost`
Retrieves a RESTHost object by name.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `id` | `String` | The id of the RESTHost to be returned |

**Returns:** `RESTHost`

---

#### `getHosts`
Retrieves an array of available host names.

**Returns:** `Array/String`

---

#### `reloadConfiguration`
Reloads the plug-in configuration.

**Returns:** `Object`

---

#### `createWorkflow`
Generates a workflow from a REST operation.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `operation` | `RESTOperation` | The REST operation that should be used by the generated workflow |
| `workflowName` | `String` | The new workflow name |
| `category` | `WorkflowCategory` | The new workflow category |
| `defaultContentType` | `String` | The content type of the operation input |

**Returns:** `Workflow`

---

#### `createWorkflowWithXsdInput`
Generates a workflow from a REST operation.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `operation` | `RESTOperation` | The REST operation that must be used by the generated workflow |
| `workflowName` | `String` | The new workflow name |
| `category` | `WorkflowCategory` | The new workflow category |
| `namespace` | `String` | The namespace of the XML input |
| `elementName` | `String` | The name of the input XML element |
| `defaultContentType` | `String` | The content type of the operation input |

**Returns:** `Workflow`

---

#### `createTransientHostFrom`
Creates a new transient (not persisted) host.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `restHostPrototype` | `RESTHost` | RESTHost definition to use. |

**Returns:** `RESTHost`

---

#### `createTransientOperationFrom`
Creates a new transient RESTOperation. If Tthe base URL of operation's host is changed, all subsequent requests to the operation will be executed against the new base URL (new host).

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `restOperationPrototype` | `RESTOperation` | RESTOperation definition to use. |

**Returns:** `RESTOperation`

---

#### `getOpenApiServiceUrl`
Get the OpenAPI service URL from OpenAPI spec and the preferred protocol

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `openApiSpec` | `String` | OpenAPI spec as a string |
| `preferredUrl` | `String` | Preferred OpenAPI url |

**Returns:** `String`

---

#### `createRESTHostFromOpenApiSpecString`
Creates rest host from OpenAPI spec provided as string

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `hostName` | `String` | Host name specified by the user |
| `openApiSpec` | `String` | OpenAPI spec as a string |
| `preferredUrl` | `String` | Preferred OpenAPI url |
| `params` | `java.util.Map` | Additional parameters to tune the OpenAPI parsing |

**Returns:** `RESTHost`

---

#### `createRESTHostFromOpenApiUrl`
Creates rest host from OpenAPI url provided as string

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `hostName` | `String` | Host name specified by the user |
| `url` | `String` | The url for the OpenAPI spec |
| `auths` | `Array/AuthorizationValue` | Authorization values |
| `preferredUrl` | `String` | Preferred OpenAPI url |
| `params` | `java.util.Map` | Additional parameters to tune the OpenAPI parsing |

**Returns:** `RESTHost`

---

#### `getSwaggerServiceUrl`
Get the Swagger service URL from Swagger spec and the preferred protocol

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `swaggerSpec` | `String` | Swagger spec as a string |
| `host` | `String` | Host name specified by the user |
| `basePath` | `String` | Base path specified by the user |
| `preferredCommunicationProtocol` | `String` | Preferred communcation protocol - HTTP or HTTPS |

**Returns:** `String`

---

#### `createRESTHostFromSwaggerSpecUrl`
Adds a new operation from a URL.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `hostName` | `String` | The name of the new REST host |
| `swaggerSpecUrl` | `String` | The URL of the Swagger spec web resource |
| `auths` | `Array/AuthorizationValue` | Authorization values |
| `preferredCommunicationProtocol` | `String` | Preferred protocol - HTTP or HTTPS |
| `params` | `java.util.Map` |  |

**Returns:** `RESTHost`

---

#### `createRESTHostFromSwaggerSpecString`
Adds a new operation from string definition

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `hostName` | `String` | The name of the new REST host |
| `swaggerSpec` | `String` | The URL of the Swagger spec |
| `host` | `String` | Host name specified by the user |
| `basePath` | `String` | user specified basepath |
| `preferredCommunicationProtocol` | `String` | Preferred protocol - HTTP or HTTPS |
| `params` | `java.util.Map` |  |

**Returns:** `RESTHost`

---

## RESTOperation

**Description:** REST plug-in operation object

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `id` | id | `String` | Yes |
| `name` | Unique identifier of the operation | `string` | No |
| `host` | Parent RESTHost of this operation | `RESTHost` | No |
| `inParametersCount` | The count of the input parameters (all parameters defined in the URL template) for this operation | `number` | Yes |
| `method` | HTTP method of this operation (GET, HEAD, PATCH, POST, PUT, OPTIONS, TRACE or DELETE) | `string` | No |
| `urlTemplate` | The URL template for this operation (ex. /operation/{param1}?param2={param2}) | `string` | No |
| `defaultContentType` | The default content type of the content input for this operation (meaningful for operations with method PUT or POST) | `string` | No |

### Methods

#### `clone`
Creates a copy of the REST operation.

**Returns:** `RESTOperation`

---

#### `newOperationFromThis`
Creates a new operation from this REST operation.

**Returns:** `RESTOperation`

---

#### `createRequest`
Creates a RESTRequest by using the information contained in this operation and its parent host.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `params` | `Array/String` | Values for the URL template parameters |
| `content` | `Any` | The content input for this operation (for POST or PUT) or null |

**Returns:** `Request`

---

#### `createRequestWithOptions`
Creates a RESTRequest by using the information contained in this operation and its parent host.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `params` | `Array/String` | Values for the URL template parameters |
| `content` | `Any` | The content input for this operation (for POST or PUT) or null |
| `options` | `RESTRequestOptions` | Options for the request |

**Returns:** `Request`

---

#### `getInParameters`
Retrieves the names of URL template input parameters.

**Returns:** `Array/String`

---

#### `getHeaderParameters`
Retrieves the names of HTTP request headers.

**Returns:** `Array/String`

---

#### `getPathParamsCount`
The path parameters count.

**Returns:** `Number`

---

#### `getDefaultContentType`
Get the default content type

**Returns:** `String`

---

#### `getSupportedContentTypes`
Get the supported request body content type

**Returns:** `Set`

---

#### `addSupportedContentType`
Add a supported content type

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `supportedContentType` | `String` | media type |

**Returns:** `void`

---

#### `getSupportedAcceptHeaderMediaTypes`
Get supportet Accept header media types

**Returns:** `Array/String`

---

#### `addPreferredAcceptHeaderMediaType`
Add preferred media type for the Accept header

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `mediaType` | `String` | media type |

**Returns:** `void`

---

#### `addSupportedAcceptHeaderMediaType`
Add supported media type for the Accept header]

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `mediaType` | `String` | media type |

**Returns:** `void`

---

#### `isPathParamMandatory`
Is a mandatory path parameter.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `pathParamName` | `String` | path parameter name |

**Returns:** `boolean`

---

#### `addMandatoryPathParameter`
Marks an existing path parameter as mandatory.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `mandatoryPathParamName` | `String` | path parameter |

**Returns:** `void`

---

#### `isQueryParamMandatory`
Check if query param is mandatory]

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `queryParamName` | `String` | query parameter name |

**Returns:** `boolean`

---

#### `addMandatoryQueryParameter`
Marks an existing query parameter as mandatory.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `mandatoryQueryParamName` | `String` | query parameter name |

**Returns:** `void`

---

#### `isHeaderParamMandatory`
Is a mandatory header parameter.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `headerParamName` | `String` | header parameter name |

**Returns:** `boolean`

---

#### `addMandatoryHeaderParameter`
Marks an existing header parameter as mandatory.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `mandatoryHeaderParamName` | `String` | header parameter name |

**Returns:** `void`

---

## RESTRequest

**Description:** Utility class created from REST operation (or host), used to make the actual HTTP request.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `fullUrl` | Retrieves the full request URL - the one combining the host base URL and operation URL template with filled in input parameters | `String` | Yes |
| `contentType` | The content type of the request | `String` | No |

### Methods

#### `execute`
Runs the HTTP request.

**Returns:** `Response`

---

#### `executeWithCredentials`
Runs the HTTP request with provided Basic HTTP Authentication credentials. This operation is supported only for requests executed against RESTHost that supports Basic HTTP Authentication.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `user` | `String` | The username to use when executing the request. |
| `pass` | `String` | The password to use when executing the request. |

**Returns:** `Response`

---

#### `setHeader`
Sets an additional HTTP header to this request.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `header` | `String` | Header name |
| `value` | `String` | Header value |

**Returns:** `Response`

---

#### `getMethod`
Get HTTP method of the request.

**Returns:** `String`

---

## RESTRequestOptions

**Description:** Options for a request

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `operationTimeout` | The operation timeout | `Number` | No |
| `connectionTimeout` | The connection timeout | `Number` | No |

## RESTResponse

**Description:** Utility class used for HTTP server response.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `contentAsString` | The server's response content as a string | `string` | Yes |
| `statusCode` | The server's response status code | `number` | Yes |
| `contentLength` | The server's response content length | `number` | Yes |

### Methods

#### `getHeaderValues`
Retrieves the server's response header values per header with specified name

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `headerName` | `String` | header name |

**Returns:** `Array/String`

---

#### `getAllHeaders`
Retrieves the server's response headers as a Properties object.

**Returns:** `Properties`

---

## RESTUtils

**Description:** Various utility functions.

### Methods

#### `xml2json`
**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `xmlString` | `String` | An XML literal string |

**Returns:** `String`

---

#### `xmlDate`
**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `date` | `Date` | Converts java script Date object to xsd:dateTime string |

**Returns:** `String`

---

#### `xmlInt`
**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `number` | `Number` | Converts java script Numbers to XSD integral type |

**Returns:** `String`

---

