# VCO (Multi-Node Plug-in) Reference

Generated Documentation

## VCODeploymentManager

**Description:** Provides the core set of functions for deploying and deleting Automation Orchestrator packages and workflows.

### Methods

#### `deletePackageWithContent`
Deletes a package on a remote Automation Orchestrator server.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `pckg` | `VCORemotePackage` |  |
| `keepShared` | `boolean` |  |

**Returns:** `void`

---

#### `deletePackageWithContentByName`
Deletes a package on a remote Automation Orchestrator server by package name.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `server` | `VCORemoteServer` |  |
| `name` | `String` |  |
| `keepShared` | `boolean` |  |

**Returns:** `void`

---

#### `deleteWorkflow`
Deletes a workflow on a remote server.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `rmtWorkflow` | `VCORemoteWorkflow` |  |
| `force` | `boolean` |  |

**Returns:** `void`

---

#### `deployPackage`
Deploy specified package on list of target servers.Package information is exported from local server.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `pkg` | `ch.dunes.model.pkg.Package` |  |
| `servers` | `Array/VCORemoteServer` |  |
| `override` | `boolean` |  |

**Returns:** `Array/VCODeploymentStatus`

---

#### `deployRemotePackage`
Deploys a specified package on s list of target servers. The package information is exported from the provided remote package.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `pkg` | `VCORemotePackage` |  |
| `targets` | `Array/VCORemoteServer` |  |
| `override` | `boolean` |  |

**Returns:** `Array/VCODeploymentStatus`

---

#### `deployWorkflow`
Deploys a specified workflow on target servers. The workflow information is exported from the local Automation Orchestrator server.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `server` | `VCORemoteServer` |  |
| `source` | `ch.dunes.model.workflow.Workflow` |  |
| `path` | `String` |  |
| `override` | `boolean` |  |

**Returns:** `void`

---

#### `deployRemoteWorkflow`
Deploys a specified workflow on target servers. The workflow information is exported from a remote Automation Orchestrator server.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `server` | `VCORemoteServer` |  |
| `source` | `VCORemoteWorkflow` |  |
| `path` | `String` |  |
| `override` | `boolean` |  |

**Returns:** `void`

---

## VCODeploymentStatus

**Description:** Provides information about the progress status of a deployment action.

### Methods

#### `getStatusAsString`
Retrieves the status with possible values SUCCESSFULL or FAILED>.

**Returns:** `String`

---

#### `getMessages`
Retrieves any additional information about the status of the deployment.

**Returns:** `Array/com.vmware.o11n.plugin.vcoconn.model.deploy.Message`

---

#### `getTargetName`
Retrieves the target machine name for the deployment.

**Returns:** `String`

---

#### `getElementName`
Retrieves the element name for the event.

**Returns:** `String`

---

## VCOHostValidator

**Description:** Provides functionality for validating hosts and retrieving certification info.

### Methods

#### `VCOHostValidator`
Initializes a HostValidator instance for validating URL and certificate info.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `host` | `String` |  |
| `port` | `int` |  |

**Returns:** `void`

---

#### `VCOHostValidator`
Initializes a HostValidator instance for validating URL and certificate info.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `scheme` | `String` |  |
| `host` | `String` |  |
| `port` | `int` |  |

**Returns:** `void`

---

#### `getCertificateInfo`
Retrieves the server's certificate info as a string.

**Returns:** `Properties`

---

#### `installCertificates`
Install the server's certificate into the JSSE keystore (only the server's specific certificate, not the whole chain).

**Returns:** `void`

---

## VCOPlugin

**Description:** Provides the core set of functions for accessing information about configured remote servers.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Item name | `String` | Yes |
| `id` | Item ID | `String` | Yes |

### Methods

#### `getRemoteServers`
Retrieves a list of configured remote servers.

**Returns:** `Array/VCORemoteServer`

---

#### `getAvailableRemoteServers`
Retrieves a list of accessible remote servers.

**Returns:** `Array/VCORemoteServer`

---

#### `findRemoteServersByHost`
Retrieves a remote server by host.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `host` | `String` |  |

**Returns:** `Array/VCORemoteServer`

---

#### `findRemoteServerByName`
Retrieves a remote server by name.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `String` |  |

**Returns:** `VCORemoteServer`

---

## VCOProxyWorkflowManager

**Description:** Manages the creation and execution of the proxies for the remote workflows.

### Methods

#### `createAllProxies`
Creates a workflow to make calls to a remote workflow for all workflows available on remote server.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `server` | `VCORemoteServer` |  |
| `synchronos` | `boolean` |  |

**Returns:** `void`

---

#### `createProxies`
Creates a workflow to make calls to a remote workflow for all workflows under a specified remote folder.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `remotePathId` | `String` |  |
| `recursive` | `boolean` |  |
| `synchronos` | `boolean` |  |

**Returns:** `void`

---

#### `executeAsynchronousProxy`
Starts an asynchronous run of the remote workflow. Validates that the remote workflow and the parameters are from the same remote Automation Orchestrator server, and ensures that the arguments are of the correct type.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connectionId` | `String` |  |
| `workflowId` | `String` |  |
| `parameters` | `java.util.Map` |  |

**Returns:** `VCORemoteWorkflowToken`

---

#### `deleteProxies`
Deletes the proxy workflows generated for a remote server.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `server` | `VCORemoteServer` |  |
| `alsoFolders` | `boolean` |  |

**Returns:** `void`

---

#### `executeSynchronousProxy`
Used for running a synchronous workflow proxies.Starts a synchronous run of the remote workflow. Validates that the remote workflow and the parameters are from the same remote Automation Orchestrator server, and ensures that the arguments are of the correct type.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connectionId` | `String` |  |
| `workflowId` | `String` |  |
| `parameters` | `java.util.Map` |  |

**Returns:** `Properties`

---

#### `executeAsynchronousProxies`
Used for running an asynchronous workflow proxies. Starts an asynchronous run of the remote workflow. Validates that the remote workflow and the parameters are from the same remote Automation Orchestrator server, and ensures that the arguments are of the correct type.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `workflowId` | `String` |  |
| `params` | `java.util.Map` |  |

**Returns:** `Array/VCORemoteWorkflowToken`

---

#### `createProxyActionForRemote`
Generates a proxy action for a running remote workflow.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `actionName` | `String` |  |
| `moduleName` | `String` |  |
| `workflow` | `VCORemoteWorkflow` |  |

**Returns:** `void`

---

#### `createProxyActionForLocal`
Generates a proxy action for a running remote workflow based on the local workflow definition.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `actionName` | `String` |  |
| `moduleName` | `String` |  |
| `workflow` | `ch.dunes.model.workflow.Workflow` |  |

**Returns:** `void`

---

#### `processStaleProxyWorkflowExecutions`
Process the workflow runs in waiting-state to reflect the remote workflow state.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `remoteServer` | `VCORemoteServer` |  |

**Returns:** `void`

---

#### `createProxy`
Creates a workflow to make calls to a remote workflow.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `remoteWorkflowId` | `String` |  |
| `synchronous` | `boolean` |  |

**Returns:** `void`

---

## VCORemoteAction

**Description:** Object representing an instance of remote objects of type Action.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `id` | Item ID | `String` | Yes |
| `name` |  | `String` | Yes |

## VCORemoteActionCategory

**Description:** Object representing an instance of remote objects of type ActionCategory.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Item name | `String` | Yes |
| `id` | Item ID | `String` | Yes |

## VCORemoteActionsFolder

**Description:** Object representing the root folder containing remote objects of type Action.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Item name | `String` | Yes |
| `id` | Item ID | `String` | Yes |

## VCORemoteAny

**Description:** Object representing an instance of remote objects of type Any.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Item name | `String` | Yes |
| `id` | Item ID | `String` | Yes |

## VCORemoteConfigurationElement

**Description:** Object representing an instance of remote objects of type ConfigurationElementCategory.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `id` | Item ID | `String` | Yes |
| `name` |  | `String` | Yes |

## VCORemoteConfigurationElementCategory

**Description:** Object representing an instance of remote objects of type ConfigurationElementCategory.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Item name | `String` | Yes |
| `id` | Item ID | `String` | Yes |

## VCORemoteConfigurationsFolder

**Description:** Object representing the root folder for the remote objects of type Configuration.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Item name | `String` | Yes |
| `id` | Item ID | `String` | Yes |

## VCORemotePackage

**Description:** Object representing an instance of remote objects of type Package.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `id` | Item ID | `String` | Yes |
| `name` |  | `String` | Yes |

## VCORemotePackagesFolder

**Description:** Object representing the root folder for the remote objects of type Package.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Item name | `String` | Yes |
| `id` | Item ID | `String` | Yes |

## VCORemotePlugin

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Item name | `String` | Yes |
| `id` | Item ID | `String` | Yes |

## VCORemotePluginObject

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `id` | Item ID | `String` | Yes |
| `name` |  | `String` | Yes |

## VCORemoteResourceElement

**Description:** Object representing an instance of remote objects of type ResourceElement.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `id` | Item ID | `String` | Yes |
| `name` |  | `String` | Yes |

## VCORemoteResourceElementCategory

**Description:** Object representing an instance of remote objects of type ResourceElementCategory.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Item name | `String` | Yes |
| `id` | Item ID | `String` | Yes |

## VCORemoteResourcesFolder

**Description:** Object representing the root folder for the remote objects of type Resource.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Item name | `String` | Yes |
| `id` | Item ID | `String` | Yes |

## VCORemoteServer

**Description:** Object representing the connection info for remote Automation Orchestrator server.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `id` | Item ID | `String` | Yes |
| `connectionId` |  | `String` | Yes |
| `ssoScheme` |  | `String` | Yes |
| `ssoHost` |  | `String` | Yes |
| `ssoPort` |  | `int` | Yes |
| `retryTimeout` |  | `String` | Yes |
| `shared` |  | `boolean` | Yes |
| `ssoEnabled` |  | `boolean` | Yes |
| `name` |  | `String` | Yes |
| `simpleName` |  | `String` | Yes |
| `scheme` |  | `String` | Yes |
| `host` |  | `String` | Yes |
| `port` |  | `int` | Yes |
| `status` |  | `String` | Yes |
| `connectionTimeout` |  | `int` | Yes |
| `socketTimeout` |  | `String` | Yes |

### Methods

#### `findAllWorkflows`
Retrieves a list of available remote workflows.

**Returns:** `Array/VCORemoteWorkflow`

---

#### `findAllPackages`
Retrieves a list of available remote packages.

**Returns:** `Array/VCORemotePackage`

---

## VCORemoteSystem

**Description:** Object representing the root folder for the remote system objects.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Item name | `String` | Yes |
| `id` | Item ID | `String` | Yes |

## VCORemoteTask

**Description:** Object representing an instance of remote objects of type Task.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Item name | `String` | Yes |
| `id` | Item ID | `String` | Yes |

## VCORemoteWorkflow

**Description:** Object representing an instance of remote objects of type Workflow.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `id` | Item ID | `String` | Yes |
| `name` |  | `String` | Yes |
| `description` |  | `String` | Yes |

### Methods

#### `deleteCompletedWorkflowTokens`
Deletes the completed workflow tokens.

**Returns:** `void`

---

## VCORemoteWorkflowCategory

**Description:** Object representing an instance of remote objects of type WorkflowCategory.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `id` | Item ID | `String` | Yes |
| `name` | Item name | `String` | Yes |

## VCORemoteWorkflowsFolder

**Description:** Object representing the root folder for the remote workflows.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Item name | `String` | Yes |
| `id` | Item ID | `String` | Yes |

## VCORemoteWorkflowToken

**Description:** Object representing an instance of a remote workflow, either running or finished.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `id` | Item ID | `String` | Yes |
| `name` |  | `String` | Yes |
| `state` |  | `String` | Yes |

### Methods

#### `getOutputParameters`
Retrieves the output parameters of the target workflow after completion.

**Returns:** `Properties`

---

#### `getException`
Retrieves the exception raised while running the target workflow after the workflow has completed.

**Returns:** `String`

---

#### `getAttributes`
Retrieves the attributes of the target workflow after completion.

**Returns:** `Properties`

---

#### `cancel`
Requests a cancellation of the token.

**Returns:** `void`

---

#### `getInputParameters`
Retrieves the input parameters of the target workflow after completion.

**Returns:** `Properties`

---

## VCOServerConfiguration

**Description:** A configuration data object class for the Automation Orchestrator server objects.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `retryTimeout` | The retry timeout (in minutes). | `int` | No |
| `host` | The host of the remote Automation Orchestrator server. | `String` | No |
| `port` | The port of the remote Automation Orchestrator server. | `int` | No |
| `password` | The password. | `String` | No |
| `connectionTimeout` | The connection timeout (in seconds). | `int` | No |
| `socketTimeout` | The socket timeout (in seconds). | `int` | No |
| `user` | The username. | `String` | No |
| `shared` | Whether the connection to the remote Automation Orchestrator uses shared account or session per user. | `boolean` | No |

## VCOServerManager

**Description:** Provides the core set of functions for adding,updating, and deleting remote Automation Orchestrator servers.

### Methods

#### `addOrchestrator`
Adds a remote Automation Orchestrator server.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `config` | `VCOServerConfiguration` |  |

**Returns:** `VCORemoteServer`

---

#### `updateOrchestrator`
Updates a remote Automation Orchestrator server.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `src` | `VCORemoteServer` |  |
| `config` | `VCOServerConfiguration` |  |

**Returns:** `VCORemoteServer`

---

#### `updateServer`
Updates a remote Automation Orchestrator server.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `src` | `VCORemoteServer` |  |
| `host` | `String` |  |
| `port` | `int` |  |
| `isShared` | `boolean` |  |
| `user` | `String` |  |
| `password` | `String` |  |
| `connectionTimeout` | `int` |  |
| `socketTimeout` | `int` |  |
| `retryTimeout` | `int` |  |
| `ssoEnabled` | `boolean` |  |
| `ssoScheme` | `String` |  |
| `ssoHost` | `String` |  |
| `ssoPort` | `int` |  |
| `ssoSameAsVco` | `boolean` |  |

**Returns:** `VCORemoteServer`

---

#### `deleteOrchestrator`
Deletes a remote Automation Orchestrator server.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `srv` | `VCORemoteServer` |  |

**Returns:** `void`

---

#### `deleteServer`
Deletes a remote Automation Orchestrator server.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `srv` | `VCORemoteServer` |  |

**Returns:** `void`

---

#### `addServer`
Adds a remote Automation Orchestrator server.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `host` | `String` |  |
| `port` | `int` |  |
| `isShared` | `boolean` |  |
| `user` | `String` |  |
| `password` | `String` |  |
| `connectionTimeout` | `int` |  |
| `socketTimeout` | `int` |  |
| `retryTimeout` | `int` |  |
| `ssoEnabled` | `boolean` |  |
| `ssoScheme` | `String` |  |
| `ssoHost` | `String` |  |
| `ssoPort` | `int` |  |
| `ssoSameAsVco` | `boolean` |  |

**Returns:** `VCORemoteServer`

---

