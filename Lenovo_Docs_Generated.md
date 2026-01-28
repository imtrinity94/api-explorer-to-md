# Lenovo XClarity Reference

Generated Documentation

## XClarityAdministrator

**Description:** XClarity System Server

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `ip` | ip of the XClarityAdministrator | `string` | No |
| `name` | Name of the XClarityAdministrator | `string` | No |

### Methods

#### `deployOSDHCP`
Deploy OS

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `xclarityServer` | `com.lenovo.xclarity.XClarityServer` | A XClarity Server |
| `selectedImageProfileFullName` | `String` | selectedImageProfileFullName |
| `selectedStorage` | `String` | selectedStorage |
| `selectHostMac` | `String` | selectHostMac |
| `dns1` | `String` | dns1 |
| `dns2` | `String` | dns2 |
| `vLanId` | `Long` | vLanId |

**Returns:** `com.lenovo.xclarity.XClarityTask`

---

#### `performPowerAction`
Perform power action

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `xclarityServer` | `com.lenovo.xclarity.XClarityServer` | A XClarity Server |
| `action` | `String` | Power action string, is one of "powerOn", "powerOffSoftGraceful", "powerOff", "powerCycleSoftGrace", and "powerCycleSoft". |

**Returns:** `com.lenovo.xclarity.XClarityTask`

---

#### `deployOSStatic`
Deploy OS

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `xclarityServer` | `com.lenovo.xclarity.XClarityServer` | A XClarity Server |
| `selectedImageProfileFullName` | `String` | selectedImageProfileFullName |
| `selectedStorage` | `String` | selectedStorage |
| `selectHostMac` | `String` | selectHostMac |
| `dns1` | `String` | dns1 |
| `dns2` | `String` | dns2 |
| `ipAddress` | `String` | ipAddress |
| `subnetMask` | `String` | subnetMask |
| `gateway` | `String` | gateway |
| `vLanId` | `Long` | vLanId |

**Returns:** `com.lenovo.xclarity.XClarityTask`

---

#### `getManagedServers`
Get managed servers of this XClarityAdministrator

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `param0` | `number` |  |
| `param1` | `number` |  |

**Returns:** `Array/com.lenovo.xclarity.XClarityServer`

---

#### `getAvailableOSImages`
Get OS Images that are available to be used to deploy of this XClarityAdministrator

**Returns:** `Array/com.lenovo.xclarity.XClarityOSImage`

---

#### `getAvailableOSImageProfiles`
Get OS Image Profiles that are available to be used to deploy of this XClarityAdministrator

**Returns:** `Array/com.lenovo.xclarity.XClarityOSImage$Profile`

---

#### `getAvailableOSImageProfileIds`
Get OS Image Profile Id List that are available to be used to deploy of this XClarityAdministrator

**Returns:** `Array/String`

---

#### `getServerPatterns`
Get all configuration pattern related to a LXCA

**Returns:** `Array/com.lenovo.xclarity.XClarityServerPattern`

---

#### `deployServerPattern`
Deploy a server pattern to a server

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `xclarityServer` | `com.lenovo.xclarity.XClarityServer` | A XClarityServer |
| `serverPattern` | `String` | A server pattern |
| `restartPolicy` | `String` | Determine when to restart your server |

**Returns:** `com.lenovo.xclarity.XClarityTask`

---

#### `deactivateServerPattern`
Deactivate a server pattern from a xclarityServer

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `xclarityServer` | `com.lenovo.xclarity.XClarityServer` | A XClarityServer |

**Returns:** `String`

---

#### `getCompatibleOSImagesOfAServer`
Get OS images that are compatible to the server, i.e. are supported to deploy to the server

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `xclarityServer` | `com.lenovo.xclarity.XClarityServer` | A XClarityServer |

**Returns:** `Array/String`

---

#### `changeGlobalSettings`
Change settings in LXCA's deploy OS global settings. The invocation of this method succeeds if no exception is raised, if it fails an Exception will be thrown.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `user` | `String` | User to set in LXCA's deploy OS global settings, currently only the value of the literal string "root" is permitted |
| `password` | `String` | Password to set in LXCA's deploy OS global settings, ""(empty string) or null means not to change the existing password set in LXCA |
| `isStaticIP` | `String` | To use static ip or DHCP, permitted values are "true","false", ""(empty string) and null. Empty string and null mean not to change the existing value in LXCA |
| `isVLAN` | `String` | To use VLAN tagging or not to use VLAN tagging, permitted values are "true","false", ""(empty string) and null. Empty string and null mean not to change the existing value in LXCA |

**Returns:** `void`

---

## XClarityOSImage

**Description:** XClarity System OS Image

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `id` | ID of the XClarityOSImage | `string` | No |
| `description` | Description of the XClarityOSImage | `string` | No |
| `name` | Name of the XClarityOSImage | `string` | No |

## XClarityOSImageProfile

**Description:** XClarity System OS Image Profile

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `id` | ID of the XClarityOSImage Profile | `string` | No |
| `description` | Description of the XClarityOSImage Profile | `string` | No |
| `name` | Name of the XClarityOSImage Profile | `string` | No |

## XClarityRepository

**Description:** XClarity Repository

### Methods

#### `getXClarityOSImageFromXClarityServer`
(Static) Get supported XClarityOSImage From an xClarity managed Server

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `xClarityServer` | `com.lenovo.xclarity.XClarityServer` | x Clarity managed Server instance |

**Returns:** `Array/String`

---

#### `registerLXCA`
(Static) Register LXCA

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `userName` | `String` | User to set in LXCA's |
| `password` | `String` | Password to set in LXCA |
| `host` | `String` | To IP address. |

**Returns:** `Array/com.lenovo.xclarity.XClarityAdministrator`

---

#### `unRegisterLXCA`
(Static) Unregister LXCA

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `XClarityAdministrator` | `com.lenovo.xclarity.XClarityAdministrator` | LXCA's |

**Returns:** `boolean`

---

#### `getAllInstancesAssociatedToSinglevCenter`
(Static) Get all XClarity systems associated to a single vCenter

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `serviceUrl` | `String` | Service Url |
| `uusUsr` | `String` | UUS username |
| `uusPwd` | `String` | UUS password |

**Returns:** `Array/com.lenovo.xclarity.XClarityAdministrator`

---

#### `getLxcaList`
(Static) Get all XClarity Administrators

**Returns:** `Array/com.lenovo.xclarity.XClarityAdministrator`

---

#### `getAvailableServers`
(Static) Get all available servers that have not been allocated to a vCenter

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `XClarityAdministrator` | `com.lenovo.xclarity.XClarityAdministrator` | A XClarity system |
| `param1` | `Array/string` |  |

**Returns:** `Array/com.lenovo.xclarity.XClarityServer`

---

#### `getTask`
(Static) test task

**Returns:** `com.lenovo.xclarity.XClarityTask`

---

## XClarityServer

**Description:** XClarity System Managed Server

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `UUID` | UUID of the XClarityServer | `string` | No |
| `name` | Name of the XClarityServer | `string` | No |
| `ip` | ip of the XClarityServer | `string` | No |
| `type` | shows type:flex or rack | `string` | No |
| `machineModel` | machine model | `string` | No |

### Methods

#### `getXClarityAdministrator`
Get its associated XClarity Administrator

**Returns:** `com.lenovo.xclarity.XClarityAdministrator`

---

#### `getHostMacAddressList`
get Host Mac Address List

**Returns:** `Array/String`

---

## XClarityServerPattern

**Description:** XClarity System Configuration pattern

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `id` | ID of the XClarityServerPattern | `string` | No |
| `description` | Description of the XClarityServerPattern | `string` | No |
| `inUse` | Server pattern usage status | `string` | No |
| `name` | Name of the XClarityServerPattern | `string` | No |

## XClarityTask

**Description:** XClarity Task

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `id` | ID of the XClarityTask | `string` | No |
| `info` | XClarityTaskInfo | `com.lenovo.xclarity.XClarityTaskInfo` | Yes |

### Methods

#### `getInfo`
Get task information

**Returns:** `com.lenovo.xclarity.XClarityTaskInfo`

---

## XClarityTaskInfo

**Description:** XClarity TaskInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `taskId` | ID of the XClarityTaskInfo(Jobid) | `string` | No |
| `name` | Name of the XClarityTaskInfo | `string` | No |
| `category` | Category of the XClarityTaskInfo | `string` | No |
| `percentage` | percentage of the XClarityTaskInfo | `string` | No |
| `state` | State of the XClarityTaskInfo | `string` | No |
| `message` | Message of the XClarityTaskInfo | `string` | No |
| `shortMessage` | Short Message of the XClarityTaskInfo | `string` | No |

### Methods

#### `getResult`
Get Result

**Returns:** `com.lenovo.xclarity.ManagedObject`

---

