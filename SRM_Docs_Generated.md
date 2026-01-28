# SRM Reference

Generated Documentation

## SRMCommand

**Description:** Represents SRM Callout object

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Display name of this Object | `String` | No |
| `isPrePowerOnStep` | Pre- or post-power on step | `boolean` | No |
| `command` | Command to run while running a recovery | `String` | No |
| `timeout` | Timeout | `long` | No |
| `runInRecoveredVm` | Execution target: SRM server or in-guest | `boolean` | No |

## SRMConfigurationSettings

**Description:** Represents the connection settings for the SRM plugin

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Display name of this Object | `String` | No |
| `deploymentId` | Extension of the SRM server | `String` | No |
| `maxConnections` |  | `Integer` | No |
| `sessionTimeout` |  | `Integer` | No |
| `connectTimeout` |  | `Integer` | No |

## SRMFactoryLifecycleManager

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Display name of this Object | `String` | No |

## SRMFaultDomain

**Description:** Represents a vVol fault domain

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Display name of this Object | `String` | No |
| `deploymentId` | Extension of the SRM server | `String` | No |

## SRMInventory

**Description:** Represents root of the inventory tree

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Display name of this Object | `String` | No |
| `deploymentId` | Extension of the SRM server | `String` | No |

## SRMIpv4Spec

**Description:** IPv4 address definitions

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Display name of this Object | `String` | No |
| `address` | Contains static address | `String` | No |
| `gateways` | Contains a list of gateways | `Array/Ljava.lang.String;` | No |
| `subnetMask` | Subnet mask | `String` | No |

## SRMIpv6Spec

**Description:** IPv6 address definitions

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Display name of this Object | `String` | No |
| `address` | Contains static address | `String` | No |
| `gateways` | Contains a list of gateways | `Array/Ljava.lang.String;` | No |
| `subnetPrefixLength` | Subnet Prefix Length | `int` | No |

## SRMLocalDatacenter

**Description:** Represents Local Datacenter

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Display name of this Object | `String` | No |
| `path` | Path to this Scripting Object | `String` | No |
| `morType` | Type of this Scripting Object | `String` | No |
| `vcUriHost` | VC of this Scripting Object | `String` | No |

## SRMLocalNetwork

**Description:** Represents Local Network

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Display name of this Object | `String` | No |
| `path` | Path to this Scripting Object | `String` | No |
| `morType` | Type of this Scripting Object | `String` | No |
| `vcUriHost` | VC of this Scripting Object | `String` | No |

## SRMLocalResourcePool

**Description:** Represents Local ResourcePool

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Display name of this Object | `String` | No |
| `path` | Path to this Scripting Object | `String` | No |
| `morType` | Type of this Scripting Object | `String` | No |
| `vcUriHost` | VC of this Scripting Object | `String` | No |

## SRMNetworkDevice

**Description:** Represents a VM network device

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Display name of this Object | `String` | No |
| `deploymentId` | Extension of the SRM server | `String` | No |

## SRMNetworkIPCustomizationSpec

**Description:** Contains all data, needed to perform IP customization for a network mapping

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Display name of this Object | `String` | No |
| `localSubnet` | Local subnet IP address | `String` | No |
| `remoteSubnet` | Remote subnet IP address | `String` | No |
| `subnetPrefix` | Subnet prefix number | `int` | No |
| `gateway` | Gateway IP address | `String` | No |
| `dnsAddresses` | List of DNS addresses separated by semicolon | `String` | No |
| `dnsSuffixes` | List of DNS suffixes separated by semicolon | `String` | No |
| `primaryWinsServer` | Primary WINS server IP address | `String` | No |
| `secondaryWinsServer` | Secondary WINS server IP address | `String` | No |

## SRMNicSpec

**Description:** Contains IP customization info for a specific network adapter

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Display name of this Object | `String` | No |
| `deviceId` | Identifier of the virtual network device | `int` | No |
| `ipv4Spec` | IP customization information for IPv4 address | `SRMIpv4Spec` | No |
| `ipv6Spec` | IP customization information for IPv6 address | `SRMIpv6Spec` | No |
| `dns` | List of server IP addresses to use for DNS lookup | `Array/Ljava.lang.String;` | No |
| `dnsSufix` | DNS suffixes | `Array/Ljava.lang.String;` | No |
| `wins` | IP addresses of the primary and secondary WINS servers | `Array/Ljava.lang.String;` | No |

## SRMPlaceholderDatastore

**Description:** Represents a Placeholder Datastore

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Display name of this Object | `String` | No |
| `deploymentId` | Extension of the SRM server | `String` | No |

## SRMPluginConfig

**Description:** Handles plugin connection configuration

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Display name of this Object | `String` | No |

### Methods

#### `refresh`
Refreshes cached information so the other workflow can see the new configuration

**Returns:** `void`

---

#### `listUnassignedReplicatedDatastores`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `deploymentId` | `String` |  |

**Returns:** `Array/com.vmware.srm.o11n.model.ScriptingObject`

---

#### `listUnassignedReplicatedVms`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `deploymentId` | `String` |  |

**Returns:** `Array/com.vmware.srm.o11n.model.ScriptingObject`

---

#### `getSrmUrls`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `host` | `String` |  |
| `port` | `int` |  |
| `path` | `String` |  |

**Returns:** `Array/String`

---

#### `validateConnection`
Validate credetials for local site

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `host` | `String` | IP or host name of the local site |
| `port` | `int` | Port of the local site |
| `path` | `String` | Path to the Lookup Service |
| `username` | `String` | User name for the local site |
| `password` | `String` | Password for the local site |

**Returns:** `void`

---

#### `registerLocalSites`
Register local site information in SRM plugin configuration

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `host` | `String` | IP or host name of the local site |
| `port` | `int` | Port of the local site |
| `path` | `String` | Path to the Lookup Service |
| `username` | `String` | User name for the local site |
| `password` | `String` | Password for the local site |

**Returns:** `void`

---

#### `unregisterLocalSites`
Unregister local site information from SRM plugin configuration

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `host` | `String` | IP or host name of the local site |

**Returns:** `void`

---

#### `getAllRegisteredInstances`


**Returns:** `Array/String`

---

#### `listFaultDomains`
List Fault Domains

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `deploymentId` | `String` |  |

**Returns:** `Array/SRMFaultDomain`

---

#### `listUnprotectedReplicationGroupsInFaultDomain`
List Replication Groups within a Fault Domain

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `deploymentId` | `String` |  |
| `faultDomainId` | `String` |  |

**Returns:** `Array/SRMReplicationGroup`

---

#### `listVMsInVvolReplicationGroup`
List VMs in a vVol replication group

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `replicationGroup` | `SRMReplicationGroup` |  |

**Returns:** `Array/SRMUnassignedReplicatedVm`

---

#### `getConfigurationSettings`
Retrieves the current configuration settings

**Returns:** `SRMConfigurationSettings`

---

#### `saveConfigurationSettings`
Saves the new configuration settings

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `newConfigurationSettings` | `SRMConfigurationSettings` |  |

**Returns:** `void`

---

## SRMPrompt

**Description:** Represents SRM Callout object

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Display name of this Object | `String` | No |
| `isPrePowerOnStep` | Pre- or post-power on step | `boolean` | No |
| `promptText` | Message of the Callout | `String` | No |

## SRMProtectedDatastore

**Description:** Represents Datastores that are part of a ProtectionGroup

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Display name of this Object | `String` | No |
| `deploymentId` | Extension of the SRM server | `String` | No |

## SRMProtectedVm

**Description:** Represents VMs that are part of a ProtectionGroup

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Display name of this Object | `String` | No |
| `deploymentId` | Extension of the SRM server | `String` | No |

## SRMProtectionFolder

**Description:** Represents SRM ProtectionFolder object

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Display name of this Object | `String` | No |
| `deploymentId` | Extension of the SRM server | `String` | No |

### Methods

#### `createAbrGroup`
Create ABR protection group

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `String` |  |
| `description` | `String` |  |
| `datastores` | `Array/SRMUnassignedReplicatedDatastore` |  |

**Returns:** `SRMProtectionGroup`

---

#### `createHbrGroup`
Create HBR protection group

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `String` |  |
| `description` | `String` |  |
| `vms` | `Array/SRMUnassignedReplicatedVm` |  |

**Returns:** `SRMProtectionGroup`

---

#### `createVvolGroup`
Create VVol protection group

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `String` |  |
| `description` | `String` |  |
| `replicationGroups` | `Array/SRMReplicationGroup` |  |

**Returns:** `SRMProtectionGroup`

---

#### `createProtectionFolder`
Create a new folder with @this as root

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `newFolderName` | `String` |  |

**Returns:** `void`

---

#### `moveProtectionFolder`
Moves this folder to the destination folder

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `destinationFolder` | `SRMProtectionFolder` |  |

**Returns:** `void`

---

#### `destroyProtectionFolder`
Destroys this folder

**Returns:** `void`

---

## SRMProtectionGroup

**Description:** Represents SRM ProtectionGroup object

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Display name of this Object | `String` | No |
| `deploymentId` | Extension of the SRM server | `String` | No |
| `replicationType` | This protection group's replication type | `String` | Yes |

### Methods

#### `getRemoteDatacenters`
Return remote Datacenters in this protection group's Site

**Returns:** `Array/com.vmware.srm.o11n.model.ScriptingObject`

---

#### `getRemoteNetworks`
Return remote Networks in this protection group's Site

**Returns:** `Array/com.vmware.srm.o11n.model.ScriptingObject`

---

#### `getRemoteResourcePools`
Return remote Resource Pools in this protection group's Site

**Returns:** `Array/com.vmware.srm.o11n.model.ScriptingObject`

---

#### `getVMNetworkDevices`
Return network devices for this VM

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vmId` | `String` |  |

**Returns:** `Array/com.vmware.srm.o11n.model.ScriptingObject`

---

#### `removeProtectionGroup`
Remove this ProtectionGroup

**Returns:** `void`

---

#### `protectVm`
Protect VM

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vmId` | `String` |  |

**Returns:** `void`

---

#### `protectVmWithCustomInventoryMappings`
Protect VM with custom inventory mappings

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vmId` | `String` |  |
| `remoteFolder` | `SRMRemoteDatacenter` |  |
| `remoteNetwork` | `SRMRemoteNetwork` |  |
| `remoteResourcePool` | `SRMRemoteResourcePool` |  |
| `protectPerNetworkDevice` | `boolean` |  |
| `networkDevices` | `Array/SRMNetworkDevice` |  |
| `remoteNetworks` | `Array/SRMRemoteNetwork` |  |

**Returns:** `void`

---

#### `protectAllVms`
Protect all VMs inside the group which can be protected

**Returns:** `void`

---

#### `unprotectVm`
Unprotect VM

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vms` | `Array/SRMProtectedVm` |  |

**Returns:** `void`

---

#### `getProtectedVm`
Return all ProtectedVms in this ProtectionGroup

**Returns:** `Array/SRMProtectedVm`

---

#### `getProtectedDatastore`
Return all ProtectedDatastores in this ProtectionGroup

**Returns:** `Array/SRMProtectedDatastore`

---

#### `updateGroupDatastore`
Update ProtectionGroup Datastore

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `datastoresToRemove` | `Array/SRMProtectedDatastore` |  |
| `datastoresToAdd` | `Array/SRMUnassignedReplicatedDatastore` |  |

**Returns:** `void`

---

#### `addReplicatedVmToVrGroup`
Add Replicated VM to this ProtectionGroup

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vm` | `SRMUnassignedReplicatedVm` |  |

**Returns:** `void`

---

#### `removeReplicatedVmFromVrGroup`
Remove Replicated VM From VR Group

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vmId` | `String` |  |

**Returns:** `void`

---

#### `getReplicationGroupsInVvolGroup`
Return all vVol protection groups in this ProtectionGroup

**Returns:** `Array/SRMReplicationGroup`

---

#### `moveProtectionGroup`
Move this group to the destination folder

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `destinationFolder` | `SRMProtectionFolder` |  |

**Returns:** `void`

---

## SRMRecoveryFolder

**Description:** Represents SRM RecoveryFolder object

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Display name of this Object | `String` | No |
| `deploymentId` | Extension of the SRM server | `String` | No |

### Methods

#### `createRecoveryPlan`
Create recovery plan

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `String` |  |
| `description` | `String` |  |
| `groups` | `Array/SRMProtectionGroup` |  |

**Returns:** `SRMRecoveryPlan`

---

#### `createRecoveryFolder`
Create a new folder with @this as root

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `newFolderName` | `String` |  |

**Returns:** `void`

---

#### `moveRecoveryFolder`
Moves this folder to the destination folder

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `destinationFolder` | `SRMRecoveryFolder` |  |

**Returns:** `void`

---

#### `destroyRecoveryFolder`
Destroys this folder

**Returns:** `void`

---

## SRMRecoveryPlan

**Description:** Represents SRM RecoveryPlan object

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Display name of this Object | `String` | No |
| `deploymentId` | Extension of the SRM server | `String` | No |

### Methods

#### `getRemoteNetworks`
Return remote Networks in this Site

**Returns:** `Array/com.vmware.srm.o11n.model.ScriptingObject`

---

#### `getRecoverySettings`
Return RecoverySettings of this RecoveryPlan

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vmId` | `String` |  |

**Returns:** `SRMRecoverySettings`

---

#### `setRecoverySettings`
Set RecoverySettings of this RecoveryPlan

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vmId` | `String` |  |
| `settings` | `SRMRecoverySettings` |  |

**Returns:** `void`

---

#### `deleteRecoveryPlan`
Delete this Recovery Plan

**Returns:** `void`

---

#### `addProtectionGroup`
Add ProtectionGroups to this RecoveryPlan

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `protectionGroup` | `SRMProtectionGroup` |  |

**Returns:** `void`

---

#### `deleteCallouts`
Delete Callouts of this RecoveryPlan

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vmId` | `String` |  |
| `commands` | `Array/SRMCommand` |  |
| `prompts` | `Array/SRMPrompt` |  |

**Returns:** `void`

---

#### `getCurrentState`
Return the current state of this RecoveryPlan

**Returns:** `String`

---

#### `testRecoveryPlan`
Run test recovery for this RecoveryPlan

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `syncData` | `boolean` |  |

**Returns:** `void`

---

#### `migrateRecoveryPlan`
Run planned migration for this RecoveryPlan

**Returns:** `void`

---

#### `failoverRecoveryPlan`
Run failover recovery for this RecoveryPlan

**Returns:** `void`

---

#### `cleanupRecoveryPlan`
Run cleanup for this RecoveryPlan

**Returns:** `void`

---

#### `reprotectRecoveryPlan`
Run reprotect for this RecoveryPlan

**Returns:** `void`

---

#### `cancelRecoveryPlan`
Run cancel for this RecoveryPlan

**Returns:** `void`

---

#### `addTestNetworkMappingToPlan`
Add TestNetworkMapping to this RecoveryPlan

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `remote` | `SRMRemoteNetwork` |  |
| `testNetwork` | `SRMRemoteNetwork` |  |

**Returns:** `void`

---

#### `removeTestNetworkMappingFromPlan`
Remove TestNetworkMapping from this RecoveryPlan

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `remote` | `SRMRemoteNetwork` |  |

**Returns:** `void`

---

#### `moveRecoveryPlan`
Move this plan to the destination folder

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `destinationFolder` | `SRMRecoveryFolder` |  |

**Returns:** `void`

---

#### `getProtectionGroups`
Return all ProtectionGroups in this RecoveryPlan

**Returns:** `Array/SRMProtectionGroup`

---

#### `removeProtectionGroup`
Remove ProtectionGroup from this RecoveryPlan

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `protectionGroup` | `SRMProtectionGroup` |  |

**Returns:** `void`

---

#### `getProtectedVm`
Return all ProtectedVms in this RecoveryPlan

**Returns:** `Array/SRMProtectedVm`

---

## SRMRecoveryPriority

**Description:** Represents PriorityGroup

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Display name of this Object | `String` | No |

### Methods

#### `get`
(Static) null

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `id` | `String` |  |

**Returns:** `SRMRecoveryPriority`

---

## SRMRecoverySettings

**Description:** Represents SRM RecoverySettings object

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `priorityGroup` |  | `SRMRecoveryPriority` | No |
| `powerState` |  | `SRMVirtualMachinePowerState` | No |
| `command` |  | `Array/Lcom.vmware.srm.o11n.model.Command;` | No |
| `prompt` |  | `Array/Lcom.vmware.srm.o11n.model.Prompt;` | No |
| `vmIpCustomizationData` |  | `SRMVmIpCustomizationSpec` | No |

## SRMRemoteDatacenter

**Description:** Represents Remote Datacenter

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Display name of this Object | `String` | No |
| `path` | Path to this Scripting Object | `String` | No |
| `morType` | Type of this Scripting Object | `String` | No |
| `vcUriHost` | VC of this Scripting Object | `String` | No |

## SRMRemoteNetwork

**Description:** Represents Local Network

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Display name of this Object | `String` | No |
| `path` | Path to this Scripting Object | `String` | No |
| `morType` | Type of this Scripting Object | `String` | No |
| `vcUriHost` | VC of this Scripting Object | `String` | No |

## SRMRemoteResourcePool

**Description:** Represents Remote ResourcePool

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Display name of this Object | `String` | No |
| `path` | Path to this Scripting Object | `String` | No |
| `morType` | Type of this Scripting Object | `String` | No |
| `vcUriHost` | VC of this Scripting Object | `String` | No |

## SRMReplicationGroup

**Description:** Represents a replication group within a fault domain

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Display name of this Object | `String` | No |
| `deploymentId` | Extension of the SRM server | `String` | No |

## SRMScriptingObjectTask

**Description:** Represents Scripting Object Task

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Display name of this Object | `String` | No |

### Methods

#### `getState`


**Returns:** `String`

---

#### `getErrorMessage`


**Returns:** `String`

---

## SRMSite

**Description:** Represents SRM Site object

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Display name of this Object | `String` | No |
| `deploymentId` | Extension of the SRM server | `String` | No |

### Methods

#### `login`
Login SRM site via user and password

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `username` | `String` |  |
| `password` | `String` |  |

**Returns:** `void`

---

#### `discoverDevices`
Discover Replicated Devices

**Returns:** `SRMScriptingObjectTask`

---

#### `addFolderMapping`
Create folder mapping

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `local` | `SRMLocalDatacenter` |  |
| `remote` | `SRMRemoteDatacenter` |  |

**Returns:** `void`

---

#### `addNetworkMapping`
Create network mapping

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `local` | `SRMLocalNetwork` |  |
| `remote` | `SRMRemoteNetwork` |  |

**Returns:** `void`

---

#### `addTestNetworkMapping`
Create test network mapping

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `remote` | `SRMRemoteNetwork` |  |
| `testNetwork` | `SRMRemoteNetwork` |  |

**Returns:** `void`

---

#### `removeFolderMapping`
Remove folder mapping

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `local` | `SRMLocalDatacenter` |  |

**Returns:** `void`

---

#### `removeNetworkMapping`
Remove network mapping

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `local` | `SRMLocalNetwork` |  |

**Returns:** `void`

---

#### `removeTestNetworkMapping`
Remove test network mapping

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `remote` | `SRMRemoteNetwork` |  |

**Returns:** `void`

---

#### `getNetworkMappings`
Returns all NetworkMappings in this Site

**Returns:** `Array/SRMLocalNetwork`

---

#### `getTestNetworkMappings`
Returns all TestNetworkMappings in this Site

**Returns:** `Array/SRMRemoteNetwork`

---

#### `getResourcePoolMappings`
Returns all ResourcePoolMappings in this Site

**Returns:** `Array/SRMLocalResourcePool`

---

#### `getLocalDatacenters`
Return local Datacenters in this Site

**Returns:** `Array/com.vmware.srm.o11n.model.ScriptingObject`

---

#### `getRemoteDatacenters`
Return remote Datacenters in this Site

**Returns:** `Array/com.vmware.srm.o11n.model.ScriptingObject`

---

#### `getLocalNetworks`
Return local Networks in this Site

**Returns:** `Array/com.vmware.srm.o11n.model.ScriptingObject`

---

#### `getRemoteNetworks`
Return remote Networks in this Site

**Returns:** `Array/com.vmware.srm.o11n.model.ScriptingObject`

---

#### `getLocalResourcePools`
Return local Resource Pools in this Site

**Returns:** `Array/com.vmware.srm.o11n.model.ScriptingObject`

---

#### `getRemoteResourcePools`
Return remote Resource Pools in this Site

**Returns:** `Array/com.vmware.srm.o11n.model.ScriptingObject`

---

#### `getPlaceholderDatastores`
Get all Placeholder Datastores

**Returns:** `Array/com.vmware.srm.o11n.model.ScriptingObject`

---

#### `getRemoteLsUrl`
URL of the remote lookup service

**Returns:** `String`

---

#### `getRemoteVcUrl`
URL of the remote VC

**Returns:** `String`

---

#### `addResourceMapping`
Create resource mapping

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `local` | `SRMLocalResourcePool` |  |
| `remote` | `SRMRemoteResourcePool` |  |

**Returns:** `void`

---

#### `removeResourceMapping`
Remove resource mapping

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `local` | `SRMLocalResourcePool` |  |

**Returns:** `void`

---

#### `getProtectionGroups`
Returns all ProtectionGroups in this Site

**Returns:** `Array/SRMProtectionGroup`

---

#### `getRecoveryPlans`
Returns all RecoveryPlans in this Site

**Returns:** `Array/SRMRecoveryPlan`

---

#### `getNetworkMappingPairs`
Returns all NetworkMapping pairs in this Site

**Returns:** `Array/java.util.List`

---

#### `getTestNetworkMappingPairs`
Returns all TestNetworkMapping pairs in this Site

**Returns:** `Array/java.util.List`

---

#### `getResourcePoolMappingPairs`
Returns all ResourcePoolMapping pairs in this Site

**Returns:** `Array/java.util.List`

---

#### `getDatacenterMappings`
Returns all DatacenterMappings in this Site

**Returns:** `Array/SRMLocalDatacenter`

---

#### `getDatacenterMappingPairs`
Returns all DatacenterMapping pairs in this Site

**Returns:** `Array/java.util.List`

---

#### `getProtectionRootFolder`
Return protection root folder in this Site

**Returns:** `SRMProtectionFolder`

---

#### `getRecoveryRootFolder`
Return recovery root folder in this Site

**Returns:** `SRMRecoveryFolder`

---

#### `addIpCustomization`
Add IP customization

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `local` | `SRMLocalNetwork` |  |
| `ipCustomizationSpec` | `SRMNetworkIPCustomizationSpec` |  |

**Returns:** `void`

---

#### `removeIpCustomization`
Remove IP customization

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `local` | `SRMLocalNetwork` |  |

**Returns:** `void`

---

#### `addPlaceHolderDatastores`
Assigns the supplied datastores as Placeholder Datastores

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `datastores` | `java.util.List` |  |

**Returns:** `void`

---

#### `getUnreplicatedDatastores`
Get all datastores suitable for Placeholder Datastores

**Returns:** `Array/com.vmware.srm.o11n.model.ScriptingObject`

---

#### `removePlaceHolderDatastores`
Removes the supplied datastores from the placeholder datastores pool

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `datastores` | `java.util.List` |  |

**Returns:** `void`

---

## SRMUnassignedReplicatedDatastore

**Description:** Represents Unassigned Replicated Datastore

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Display name of this Object | `String` | No |
| `deploymentId` | Extension of the SRM server | `String` | No |

## SRMUnassignedReplicatedVm

**Description:** Represents Unassigned Replicated Vm

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Display name of this Object | `String` | No |
| `deploymentId` | Extension of the SRM server | `String` | No |

## SRMUnreplicatedDatastore

**Description:** Represents an Unreplicated Datastore

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Display name of this Object | `String` | No |
| `deploymentId` | Extension of the SRM server | `String` | No |

## SRMVirtualMachinePowerState

**Description:** Represents final power state for this VirtualMachine after recovery

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Display name of this Object | `String` | No |

### Methods

#### `get`
(Static) null

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `id` | `String` |  |

**Returns:** `SRMVirtualMachinePowerState`

---

## SRMVmIpCustomizationSpec

**Description:** Contains all data, needed to perform IP customization for a virtual machine

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Display name of this Object | `String` | No |
| `ipCustomizationMode` | IP customization mode | `String` | No |
| `protNic` | IP customization data for protection site | `Array/Lcom.vmware.srm.o11n.model.NicSpec;` | No |
| `recNic` | IP customization data for recovery site | `Array/Lcom.vmware.srm.o11n.model.NicSpec;` | No |
| `isWindowsOs` | If VM OS is windows or not | `boolean` | No |

