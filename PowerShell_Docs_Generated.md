# API Reference

Generated Documentation

## PowerShellActionGenerator

**Description:** Generates actions for PowerShell Cmdlets and Scripts

### Methods

#### `createActionForScript`
Generates Automation Orchestrator action for provided PowerShell script.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `actionName` | `String` |  |
| `script` | `String` |  |
| `moduleName` | `String` |  |
| `generateWorkflow` | `boolean` |  |
| `targetFolder` | `ch.dunes.model.workflow.WorkflowCategory` |  |

**Returns:** `void`

---

## PowerShellAuthorizationMode

**Description:** Enumeration for the supported authorization modes. The modes are "Shared Session" and "Session per User".

### Methods

#### `fromString`
(Static) Converts a string to an instance of this class. If String is not possible to be converted an IllegalArgumentException is thrown.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `text` | `String` |  |

**Returns:** `PowerShellAuthorizationMode`

---

## PowerShellAutorizationMode

**Description:** Deprecated. Use AuthorizationModeinstead.
Enumeration for the supported authorization modes. The modes are "Shared Session" and "Session per User".

### Methods

#### `fromString`
(Static) Converts a string to an instance of this class. If String is not possible to be converted an IllegalArgumentException is thrown.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `text` | `String` |  |

**Returns:** `PowerShellAutorizationMode`

---

#### `getAuthorizationMode`
(Static) Converts a string to an instance of AuthorizationMode class. If String is not possible to be converted an IllegalArgumentException is thrown.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `mode` | `PowerShellAutorizationMode` |  |

**Returns:** `PowerShellAuthorizationMode`

---

## PowerShellCmdlet

**Description:** Wrapper of a PowerShell cmdlet that resides on the remote Windows machine

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | The name of the cmdlet | `String` | Yes |
| `definition` | The definition of the cmdlet | `String` | Yes |
| `psSnapin` | The name of snap-in that this cmdlet belongs to | `String` | Yes |
| `commandType` | The cmdlet command type | `String` | Yes |

## PowerShellCommand

**Description:** Represents a PowerShell command that can be run on the remote PowerShell host.

### Methods

#### `PowerShellCommand`
Creates a PowerShellCommand instance that encapsulates the command.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `command` | `String` | The command as a String |

**Returns:** `void`

---

#### `addParameter`
Adds a new parameter to the list of params for this PowerShellCommand instance.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `paramName` | `String` |  |
| `value` | `Any` |  |

**Returns:** `PowerShellCommand`

---

#### `getParams`
Returns all Parameters as a Map.

**Returns:** `java.util.Map`

---

#### `getCommand`
Returns the String that this Command object was initialy created.

**Returns:** `String`

---

## PowerShellConfigurationParameters

**Description:** Advanced configuration parameters.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `shellCodePage` | Get Shell Code Page | `PowerShellShellCodePage` | No |
| `idleTimeout` | Get Idle Timeout | `Integer` | No |
| `readTimeout` | Get Read Timeout | `Integer` | No |

## PowerShellHost

**Description:** Represents a remote host with PowerShell installed on it.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Logical name given to the remote PowerShell host | `String` | Yes |
| `id` | The unique ID of this object | `String` | Yes |
| `type` | The type of the communication protocol i.e. WinRM or SSH | `String` | Yes |
| `port` | The port on which to connect in case of WinRM type of communication. | `String` | Yes |
| `username` | The username of the user that logs to the remote PowerShell Machine | `String` | Yes |
| `transportProtocol` | The transport protocol in case of WinRM type of communication. Can be either HTTPS or HTTP | `String` | Yes |
| `connectionURL` | The IP/Hostname of the remote host | `String` | Yes |

### Methods

#### `startPipeline`
Starts a pipeline in the context of the session identified by sessionId

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `sessionId` | `String` |  |

**Returns:** `void`

---

#### `getSession`
Returns Session for the given sessionId. Exception is thrown if session does not exist or has been closed.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `sessionId` | `String` |  |

**Returns:** `PowerShellSession`

---

#### `getHostConfig`
Returns the PowerShellHostConfig instance for this PowerShellHost

**Returns:** `PowerShellHostConfig`

---

#### `openSession`
Opens a new PowerShellSession, which can be used to run PowerShell scrits and cmdlets

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `idleTimeout` | `Integer` |  |

**Returns:** `PowerShellSession`

---

#### `closeSession`
Closes the session with the given sessionId

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `sessionId` | `String` |  |

**Returns:** `void`

---

#### `invokeScript`
Invokes powershell script without adding it to pipeline.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `script` | `String` |  |

**Returns:** `PowerShellInvocationResult`

---

#### `inPipeline`
Returns the inPipeline flag of the session identified by sessionId

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `sessionId` | `String` |  |

**Returns:** `boolean`

---

#### `endPipeline`
Executes the pipeline associated with the session with id==sessionId and clears the pipeline, removing all commands from it.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `sessionId` | `String` |  |

**Returns:** `void`

---

#### `openSessionAs`
Opens a new PowerShellSession with provided credentials, which can be used to run PowerShell scrits and cmdlets

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `String` |  |
| `password` | `String` |  |
| `idleTimeout` | `Integer` |  |

**Returns:** `PowerShellSession`

---

## PowerShellHostConfig

**Description:** Encapsulates the configuration for a remote PowerShell host

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Logical name given to the remote PowerShell Machine | `String` | No |
| `type` | The type of the communication protocol i.e. WinRM or SSH | `String` | No |
| `port` | The port on which to connect in case of WinRM type of communication. | `String` | No |
| `authentication` | Specifies authentication mechanism used when communicating with PowerShell host. WinRM protocol supported Basic and Kerberos. | `String` | No |
| `username` | The username of the user that logs to the remote PowerShell Machine | `String` | No |
| `password` | The password to use to log into the remote PowerShell Machine | `ch.dunes.model.dunes.EncryptedString` | No |
| `configurationParameters` | get Configuration parameres | `PowerShellConfigurationParameters` | No |
| `authorizationMode` | The authorization mode for this configuration | `PowerShellAuthorizationMode` | No |
| `transportProtocol` | The transport protocol in case of WinRM type of communication. Can be either HTTPS or HTTP | `String` | No |
| `autorizationMode` | The authorization mode for this configuration | `PowerShellAutorizationMode` | No |
| `connectionURL` | The IP/Hostname of the remote machine | `String` | No |

## PowerShellHostManager

**Description:** Manager for configuring the PowerShell hosts

### Methods

#### `remove`
Removes the PowerShellHostConfig with the passed in as argument id from the configuration of the plugin.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `id` | `String` |  |

**Returns:** `void`

---

#### `update`
Creates a PowerShellHost for the passed in as argument PowerShellHostConfig if it doesn't already exist. In case it already exists the PowerShellHost is updated.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `hostConfig` | `PowerShellHostConfig` |  |

**Returns:** `PowerShellHost`

---

#### `validatePowerShellHost`
Checks if the provided hostConfig parameter contains settings that the plugin can use to successfully connect to a remote PowerShell machine. In case the configurations are not valid the method throws appropriate exception.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `hostConfig` | `PowerShellHostConfig` |  |

**Returns:** `void`

---

## PowerShellInvocationResult

**Description:** Represents the result from an execution fo PowerShell script

### Methods

#### `getErrors`
Returns list of errors reported by powershell engine during script invocation.

**Returns:** `Array/String`

---

#### `getResults`
Returns list of objects returned by PowerShell engine after successfull invocation.

**Returns:** `PowerShellRemotePSObject`

---

#### `getInvocationState`
Status of execution of the script. Possible values are (Completed, Failed).

**Returns:** `com.vmware.o11n.plugin.powershell.model.InvocationState`

---

#### `getHostOutput`
Returns output of script execution as it appears on the powershell console.

**Returns:** `String`

---

## PowerShellPSObject

**Description:** Represents an object on the remote PowerShell machine

### Methods

#### `getProperty`
Returns value of specific object property. Tha returned value itself can be of primitive type, ArrayList, Hashtable or another PowerShellPSObject

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `propName` | `String` |  |

**Returns:** `Any`

---

#### `instanceOf`
Checks if this instance is of specific type

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `type` | `String` | The full name of the PowerShell Type |

**Returns:** `boolean`

---

#### `getTypes`
Returns an array containing Types representing all the public classes and interfaces that object implements

**Returns:** `Array/String`

---

#### `getToString`
Returns the object converted to String.

**Returns:** `String`

---

#### `getPropertyAsString`
Returns calue of the provided property converting it to string.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `propName` | `String` |  |

**Returns:** `String`

---

#### `getPropertyAsPSObject`
Returns the value of propName property.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `propName` | `String` |  |

**Returns:** `PowerShellPSObject`

---

#### `getPropertyAsPSObjectList`
Returns the value of propName property as a list of PowerShellPSObject

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `propName` | `String` |  |

**Returns:** `Array/Any`

---

## PowerShellRemotePSObject

**Description:** Wrapper for the result from an execution fo PowerShell script

### Methods

#### `getXml`
Returns the object as String that is XML formated

**Returns:** `String`

---

#### `getRootObject`
Returns result of PowerShell script invocation converted in corresponding Automation Orchestrator type. The result can be simple type, ArrayList, Properties or PowerShellPSObject

**Returns:** `Any`

---

#### `getAsJson`
Returns the object as String that is JSON formated

**Returns:** `String`

---

## PowerShellSession

**Description:** Represents a session to the remote PowerShell machine, that can be used to run scripts and Cmdlets. Also users can benefit from the pipeline concept by demarcating pipeline boundaries with startPipeline() and endPipeline()

### Methods

#### `invokeScript`
Invokes powershell script without adding it to pipeline.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `script` | `String` |  |

**Returns:** `PowerShellInvocationResult`

---

#### `invokePipeline`
Invokes commands currently in pipeline, and remove them from the pipeline.

**Returns:** `PowerShellInvocationResult`

---

#### `addCommand`
Adds command to pipeline

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `command` | `PowerShellCommand` |  |

**Returns:** `void`

---

#### `addCommandFromString`
Creates command from provided string and adds it to pipeline.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `command` | `String` |  |

**Returns:** `PowerShellCommand`

---

#### `getSessionId`
Returns the session id

**Returns:** `String`

---

## PowerShellShellCodePage

**Description:** Enumeration for the supported shell code encodings.

### Methods

#### `fromString`
(Static) Converts a string to an instance of this class. If String is not possible to be converted an IllegalArgumentException is thrown.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `text` | `String` |  |

**Returns:** `PowerShellShellCodePage`

---

## PowerShellSnapIn

**Description:** PowerShell SnapIn wrapper object

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | The name of the SnapIn | `String` | Yes |
| `moduleName` | The module name that this SnapIn belongs to | `String` | Yes |
| `version` | The version of the SnapIn | `String` | Yes |
| `description` | The description of the SnapIn | `String` | Yes |

## PowerShellSnapInRoot

**Description:** The root of the SnapIns

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` |  | `String` | Yes |

