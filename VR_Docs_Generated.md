# vSphere Replication Reference

Generated Documentation

## VRConfigurationSettings

**Description:** Represents the connection settings for the HMS plugin

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Display name of this Object | `String` | No |
| `maxConnections` |  | `Integer` | No |
| `sessionTimeout` |  | `Integer` | No |
| `connectTimeout` |  | `Integer` | No |

## VRDiskType

**Description:** DiskType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Display name of this Object | `String` | No |

## VRFactoryLifecycleManager

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Display name of this Object | `String` | No |

## VRPluginConfig

**Description:** Handles plugin connection configuration

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Display name of this Object | `String` | No |

### Methods

#### `getSites`


**Returns:** `Array/VRSite`

---

#### `registerRemoteVcSite`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `remoteSite` | `VRVcRemoteSite` |  |
| `username` | `String` |  |
| `password` | `String` |  |

**Returns:** `void`

---

#### `unregisterRemoteVcSite`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `remoteSite` | `VRVcRemoteSite` |  |

**Returns:** `void`

---

#### `listVCsForRemoteLS`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `lsAddress` | `String` |  |

**Returns:** `Array/VRVcEndpoint`

---

#### `getSupportedDiskFormats`


**Returns:** `Array/VRDiskType`

---

#### `refreshCache`


**Returns:** `void`

---

#### `getConfigurationSettings`
Retrieves the current configuration settings

**Returns:** `VRConfigurationSettings`

---

#### `saveConfigurationSettings`
Saves the new configuration settings

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `newConfigurationSettings` | `VRConfigurationSettings` |  |

**Returns:** `void`

---

## VRRemoteDatastore

**Description:** Represents Remote Datastore

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Display name of this Object | `String` | No |
| `path` | Path to this Scripting Object | `String` | No |
| `morType` | Type of this Scripting Object | `String` | No |
| `vcUriHost` | VC of this Scripting Object | `String` | No |

## VRReplicationIssue

**Description:** Represents Replication Issue details

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Display name of this Object | `String` | No |

### Methods

#### `getSeverity`


**Returns:** `String`

---

#### `setFault`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `fault` | `java.lang.Exception` |  |

**Returns:** `void`

---

#### `getFault`


**Returns:** `java.lang.Exception`

---

#### `setSeverity`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `severity` | `String` |  |

**Returns:** `void`

---

#### `setTargetObject`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `targetObject` | `com.vmware.vim.binding.vmodl.ManagedObjectReference` |  |

**Returns:** `void`

---

#### `setTargetObjectName`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `targetObjectName` | `String` |  |

**Returns:** `void`

---

#### `setTriggeredTime`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `triggeredTime` | `java.util.Calendar` |  |

**Returns:** `void`

---

#### `getIssueType`


**Returns:** `String`

---

#### `setIssueType`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `issueType` | `String` |  |

**Returns:** `void`

---

#### `setSourceSiteUuid`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `sourceSiteUuid` | `String` |  |

**Returns:** `void`

---

#### `setDestinationSiteUuid`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `destinationSiteUuid` | `String` |  |

**Returns:** `void`

---

#### `getTargetObject`


**Returns:** `com.vmware.vim.binding.vmodl.ManagedObjectReference`

---

#### `getTargetObjectName`


**Returns:** `String`

---

#### `getTriggeredTime`


**Returns:** `java.util.Calendar`

---

#### `getSourceSiteUuid`


**Returns:** `String`

---

#### `getDestinationSiteUuid`


**Returns:** `String`

---

## VRReplicationSettings

**Description:** Replication settings

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` |  | `String` | No |
| `newDisksDatastoreId` |  | `String` | No |
| `remoteDatastore` |  | `VRRemoteDatastore` | No |
| `rpo` |  | `long` | No |
| `quiesceGuestEnabled` |  | `boolean` | No |
| `networkCompressionEnabled` |  | `boolean` | No |
| `encryptionEnabled` |  | `boolean` | No |
| `perDiskEnabled` |  | `boolean` | No |
| `includedDisks` |  | `Array/Lcom.vmware.hms.o11n.model.VmDisk;` | No |
| `includeAllDisks` | Whether to retrieve and include all existing disks. Ignores existingDisks property | `boolean` | No |
| `useDefaultSeed` | Whether to use existing disk seeds or create a new folder for replicated disk. | `boolean` | No |
| `excludedDisks` |  | `Array/Lcom.vmware.hms.o11n.model.VmDisk;` | No |
| `retentionPolicyTiers` |  | `Array/VRRetentionPolicyTier` | No |
| `diskType` |  | `VRDiskType` | No |
| `diskTypes` |  | `Array/Lcom.vmware.hms.o11n.model.DiskType;` | No |
| `storageProfile` |  | `VRStorageProfile` | No |
| `storageProfiles` |  | `Array/Lcom.vmware.hms.o11n.model.StorageProfile;` | No |
| `remoteDatastores` |  | `Array/Lcom.vmware.hms.o11n.model.RemoteDatastore;` | No |
| `autoReplicateNewDisks` |  | `boolean` | No |
| `dataSetsReplicationEnabled` |  | `boolean` | No |

### Methods

#### `isDataSetsReplicationEnabled`


**Returns:** `boolean`

---

#### `setDataSetsReplicationEnabled`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `dataSetsReplicationEnabled` | `boolean` |  |

**Returns:** `void`

---

#### `getDiskType`


**Returns:** `VRDiskType`

---

#### `setDiskType`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `diskType` | `VRDiskType` |  |

**Returns:** `void`

---

#### `getStorageProfile`


**Returns:** `VRStorageProfile`

---

#### `setStorageProfile`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `storageProfile` | `VRStorageProfile` |  |

**Returns:** `void`

---

#### `getStorageProfiles`


**Returns:** `Array/VRStorageProfile`

---

#### `isPerDiskEnabled`


**Returns:** `boolean`

---

#### `getIncludedDisks`


**Returns:** `Array/VRVmDisk`

---

#### `getDiskTypes`


**Returns:** `Array/VRDiskType`

---

#### `getRemoteDatastores`


**Returns:** `Array/VRRemoteDatastore`

---

#### `getRemoteDatastore`


**Returns:** `VRRemoteDatastore`

---

#### `setReplicationRef`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `replicationRef` | `com.vmware.vim.binding.vmodl.ManagedObjectReference` |  |

**Returns:** `void`

---

#### `getReplicationRef`


**Returns:** `com.vmware.vim.binding.vmodl.ManagedObjectReference`

---

#### `setIncludedDisks`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `includedDisks` | `Array/VRVmDisk` |  |

**Returns:** `void`

---

#### `getExcludedDisks`


**Returns:** `Array/VRVmDisk`

---

#### `setExcludedDisks`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `excludedDisks` | `Array/VRVmDisk` |  |

**Returns:** `void`

---

#### `isUseDefaultSeed`


**Returns:** `boolean`

---

#### `setUseDefaultSeed`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `useDefaultSeed` | `boolean` |  |

**Returns:** `void`

---

#### `isEncryptionEnabled`


**Returns:** `boolean`

---

#### `setEncryptionEnabled`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `encryptionEnabled` | `boolean` |  |

**Returns:** `void`

---

#### `isMpitEnabled`


**Returns:** `boolean`

---

#### `setMpitEnabled`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `mpitEnabled` | `boolean` |  |

**Returns:** `void`

---

#### `getMpitInstances`


**Returns:** `int`

---

#### `setMpitInstances`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `mpitInstances` | `int` |  |

**Returns:** `void`

---

#### `getMpitDays`


**Returns:** `int`

---

#### `setMpitDays`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `mpitDays` | `int` |  |

**Returns:** `void`

---

#### `getNewDisksDatastoreId`


**Returns:** `String`

---

#### `setNewDisksDatastoreId`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `newDisksDatastoreId` | `String` |  |

**Returns:** `void`

---

#### `setPerDiskEnabled`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `perDiskEnabled` | `boolean` |  |

**Returns:** `void`

---

#### `setDiskTypes`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `diskTypes` | `Array/VRDiskType` |  |

**Returns:** `void`

---

#### `setStorageProfiles`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `storageProfiles` | `Array/VRStorageProfile` |  |

**Returns:** `void`

---

#### `setRemoteDatastores`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `remoteDatastores` | `Array/VRRemoteDatastore` |  |

**Returns:** `void`

---

#### `setRemoteDatastore`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `remoteDatastore` | `VRRemoteDatastore` |  |

**Returns:** `void`

---

#### `isAutoReplicateNewDisks`


**Returns:** `boolean`

---

#### `setAutoReplicateNewDisks`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `autoReplicateNewDisks` | `boolean` |  |

**Returns:** `void`

---

## VRRetentionPolicyTier

**Description:** Rettention policy for the replication

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `granularityMinutes` |  | `int` | No |
| `numSlots` |  | `int` | No |

## VRSite

**Description:** Represents HMS Site object

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Display name of this Object | `String` | No |
| `vcInstanceUuid` |  | `String` | Yes |

### Methods

#### `getVcRemoteSites`


**Returns:** `Array/VRVcRemoteSite`

---

#### `pairWithVcRemoteSite`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vcUuid` | `String` |  |
| `username` | `String` |  |
| `password` | `String` |  |
| `remoteLsAddress` | `String` |  |
| `localLsAddress` | `String` |  |

**Returns:** `VRTask`

---

#### `reconnectVcToVcPair`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `pairVcUuid` | `String` |  |
| `username` | `String` |  |
| `password` | `String` |  |
| `remoteLsAddress` | `String` |  |
| `localLsAddress` | `String` |  |

**Returns:** `VRTask`

---

#### `getReplicationIssues`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `isOutgoing` | `boolean` |  |
| `remoteSite` | `VRVcRemoteSite` |  |

**Returns:** `Array/VRReplicationIssue`

---

#### `getReplicationIds`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vmName` | `String` |  |

**Returns:** `Array/String`

---

#### `getVmDisks`
Gets VirtualMachine disks

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vmId` | `String` |  |

**Returns:** `Array/VRVmDisk`

---

## VRStorageProfile

**Description:** StorageProfile

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Display name of this Object | `String` | No |

## VRTask

**Description:** Represents HMS Task

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Display name of this Object | `String` | No |

### Methods

#### `getState`


**Returns:** `String`

---

#### `getProgress`


**Returns:** `Integer`

---

#### `getErrotMessage`


**Returns:** `String`

---

## VRVcEndpoint

**Description:** Service Endpoint description for a vCenter server

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Display name of this Object | `String` | No |
| `uri` |  | `java.net.URI` | Yes |
| `lsUri` | Lookup Service URI | `java.net.URI` | Yes |
| `uuid` |  | `String` | Yes |
| `sslTrust` |  | `Array/Ljava.lang.String;` | Yes |

## VRVcRemoteSite

**Description:** Represents VSphere Remote Site object

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Display name of this Object | `String` | No |
| `uri` | URI of the remote VC server | `java.net.URI` | No |
| `lsUri` | URI of the remote Lookup Service | `java.net.URI` | No |
| `localSiteUri` | URI of the local VC server | `java.net.URI` | No |

### Methods

#### `getDatastores`
Retrieve datastores at this site

**Returns:** `Array/VRRemoteDatastore`

---

#### `loginSpbmServer`
Login remote Spbm server

**Returns:** `void`

---

#### `loginRemoteSite`
Login remote VSphere site

**Returns:** `void`

---

#### `loginRemoteSiteWithCredentials`
Login remote vSphere site with user name and password

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `userName` | `String` |  |
| `password` | `String` |  |

**Returns:** `void`

---

#### `logoutRemoteSite`
Logout remote VC Site

**Returns:** `void`

---

#### `getReplicationsTo`
Retrieve replication groups targeting this site

**Returns:** `Array/VRVcToVcSourceGroup`

---

#### `getReplicationsFrom`
Retrieve replication groups originating from this site

**Returns:** `Array/VRVcToVcTargetGroup`

---

#### `getDatastoresFilteredByProfile`
Retrieve datastores at this site which support the provided storage profile

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `storageProfile` | `VRStorageProfile` |  |

**Returns:** `Array/VRRemoteDatastore`

---

#### `getStorageProfiles`
Retrieve storage profiles for this site

**Returns:** `Array/VRStorageProfile`

---

#### `configureReplicationTo`
Create a new host based replication group

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vmId` | `String` |  |
| `settings` | `VRReplicationSettings` |  |

**Returns:** `VRTask`

---

#### `getConfigureReplicationTaskResult`
Get the group created as a result of executing the task

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `task` | `VRTask` |  |

**Returns:** `VRVcToVcSourceGroup`

---

#### `getVMReplicationData`
Collects all replication data for given vm

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vmId` | `String` |  |

**Returns:** `VRVrReplicationDetailsData`

---

#### `getVMGroup`
Gets VirtualMachine replication group

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vmId` | `String` |  |

**Returns:** `com.vmware.vim.binding.vmodl.ManagedObjectReference`

---

## VRVcToVcSourceGroup

**Description:** Represents VSphere Replication Group object

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Display name of this Object | `String` | No |
| `rpo` |  | `long` | Yes |

### Methods

#### `unconfigure`
Stop replication

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `leaveReplicaDisks` | `boolean` |  |

**Returns:** `VRTask`

---

#### `getDatastores`
Retrieve datastores at this site

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `storageProfile` | `VRStorageProfile` |  |

**Returns:** `Array/VRRemoteDatastore`

---

#### `getTargetDatastoreVmHome`
Retrieve VM home datastore

**Returns:** `VRRemoteDatastore`

---

#### `getCommonDiskType`
Retrieve the common disk type.

**Returns:** `VRDiskType`

---

#### `getCommonStorageProfile`
Retrieve the common storage profile.

**Returns:** `VRStorageProfile`

---

#### `getRecoverySolution`
Retrieve the recovery solution of this replication.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `userName` | `String` |  |
| `password` | `String` |  |

**Returns:** `String`

---

#### `getReplicationTestBubbleStatus`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `userName` | `String` |  |
| `password` | `String` |  |

**Returns:** `String`

---

#### `reConfigureReplicationTo`
Reconfigures a replication group

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `settings` | `VRReplicationSettings` |  |

**Returns:** `VRTask`

---

#### `getReplicationData`
Collects all data for given replication

**Returns:** `VRVrReplicationDetailsData`

---

#### `getConfigureReplicationTaskResult`
Get the group created as a result of executing the task

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `task` | `VRTask` |  |

**Returns:** `VRVcToVcSourceGroup`

---

#### `resume`
Resume replication

**Returns:** `VRTask`

---

#### `getStatus`
Get replication status

**Returns:** `String`

---

#### `fullSync`
Full sync

**Returns:** `VRTask`

---

#### `pause`
Pause replication

**Returns:** `VRTask`

---

#### `getReplicationError`
Get replication error

**Returns:** `String`

---

#### `getRecoveryState`
Get recovery state

**Returns:** `String`

---

#### `getRecoveryError`
Get recovery error

**Returns:** `String`

---

#### `getTestRecoveryState`
Get test recovery state

**Returns:** `String`

---

#### `getTestRecoveryError`
Get test recovery error

**Returns:** `String`

---

#### `getCurrentRpoViolation`
Get current RPO violation in minutes

**Returns:** `long`

---

#### `onlineSync`
Online sync

**Returns:** `VRTask`

---

#### `offlineSync`
Offline sync

**Returns:** `VRTask`

---

## VRVcToVcTargetGroup

**Description:** Represents VSphere Replication Group object

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Display name of this Object | `String` | No |
| `rpo` |  | `long` | Yes |

### Methods

#### `resume`
Resume replication

**Returns:** `VRTask`

---

#### `getStatus`
Get replication status

**Returns:** `String`

---

#### `fullSync`
Full sync

**Returns:** `VRTask`

---

#### `pause`
Pause replication

**Returns:** `VRTask`

---

#### `getReplicationError`
Get replication error

**Returns:** `String`

---

#### `getRecoveryState`
Get recovery state

**Returns:** `String`

---

#### `getRecoveryError`
Get recovery error

**Returns:** `String`

---

#### `getTestRecoveryState`
Get test recovery state

**Returns:** `String`

---

#### `getTestRecoveryError`
Get test recovery error

**Returns:** `String`

---

#### `getCurrentRpoViolation`
Get current RPO violation in minutes

**Returns:** `long`

---

#### `onlineSync`
Online sync

**Returns:** `VRTask`

---

#### `offlineSync`
Offline sync

**Returns:** `VRTask`

---

## VRVmDisk

**Description:** Represents virtual machine replication disks

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Display name of this Object | `String` | No |

### Methods

#### `getLabel`


**Returns:** `String`

---

#### `setLabel`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `label` | `String` |  |

**Returns:** `void`

---

#### `getDeviceKey`


**Returns:** `int`

---

#### `setDeviceKey`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `deviceKey` | `int` |  |

**Returns:** `void`

---

#### `getCapacityInKB`


**Returns:** `long`

---

#### `setCapacityInKB`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `capacityInKB` | `long` |  |

**Returns:** `void`

---

#### `getVmRef`


**Returns:** `com.vmware.vim.binding.vmodl.ManagedObjectReference`

---

#### `setVmRef`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vmRef` | `com.vmware.vim.binding.vmodl.ManagedObjectReference` |  |

**Returns:** `void`

---

#### `setDestinationPath`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `destinationPath` | `String` |  |

**Returns:** `void`

---

#### `getDestinationPath`


**Returns:** `String`

---

#### `isReplicated`


**Returns:** `boolean`

---

#### `setReplicated`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `replicated` | `boolean` |  |

**Returns:** `void`

---

#### `isVmHome`


**Returns:** `boolean`

---

#### `setVmHome`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vmHome` | `boolean` |  |

**Returns:** `void`

---

#### `getFoundSeeds`


**Returns:** `Array/String`

---

#### `setFoundSeeds`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `foundSeeds` | `Array/String` |  |

**Returns:** `void`

---

#### `getSourceDiskFormat`


**Returns:** `com.vmware.hms.o11n.model.VirtualDiskFormat`

---

#### `getSourceStoragePolicyName`


**Returns:** `String`

---

#### `getSourceStoragePolicyId`


**Returns:** `String`

---

#### `isEnabledForReplication`


**Returns:** `boolean`

---

#### `setEnabledForReplication`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `enabledForReplication` | `boolean` |  |

**Returns:** `void`

---

#### `isUseSeed`


**Returns:** `boolean`

---

#### `setUseSeed`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `useSeed` | `boolean` |  |

**Returns:** `void`

---

#### `getDestinationStoragePolicyId`


**Returns:** `String`

---

#### `setDestinationStoragePolicyId`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `destinationStoragePolicyId` | `String` |  |

**Returns:** `void`

---

#### `getDestinationStoragePolicyName`


**Returns:** `String`

---

#### `setDestinationStoragePolicyName`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `destinationStoragePolicyName` | `String` |  |

**Returns:** `void`

---

#### `getDestinationDatastoreRef`


**Returns:** `com.vmware.vim.binding.vmodl.ManagedObjectReference`

---

#### `setDestinationDatastoreRef`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `destinationDatastoreRef` | `com.vmware.vim.binding.vmodl.ManagedObjectReference` |  |

**Returns:** `void`

---

#### `getDestinationDiskFormat`


**Returns:** `com.vmware.hms.o11n.model.VirtualDiskFormat`

---

#### `setDestinationDiskFormat`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `destinationDiskFormat` | `com.vmware.hms.o11n.model.VirtualDiskFormat` |  |

**Returns:** `void`

---

#### `isSeedsAreConfigured`


**Returns:** `boolean`

---

#### `setSeedsAreConfigured`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `seedsAreConfigured` | `boolean` |  |

**Returns:** `void`

---

#### `isNewDisk`


**Returns:** `boolean`

---

#### `setNewDisk`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `newDisk` | `boolean` |  |

**Returns:** `void`

---

#### `setSourceDiskFormat`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `sourceDiskFormat` | `com.vmware.hms.o11n.model.VirtualDiskFormat` |  |

**Returns:** `void`

---

#### `setSourceStoragePolicyId`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `sourceStoragePolicyId` | `String` |  |

**Returns:** `void`

---

#### `setSourceStoragePolicyName`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `sourceStoragePolicyName` | `String` |  |

**Returns:** `void`

---

## VRVrReplicationDetailsData

**Description:** Represents consolidated Replication information

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Display name of this Object | `String` | No |

### Methods

#### `getVmRef`
getter for VM ref

**Returns:** `com.vmware.vim.binding.vmodl.ManagedObjectReference`

---

#### `setVmRef`
Getter for vmRef

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vmRef` | `com.vmware.vim.binding.vmodl.ManagedObjectReference` |  |

**Returns:** `void`

---

#### `getLastSyncTime`


**Returns:** `String`

---

#### `setLastSyncTime`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `_lastSyncTime` | `String` |  |

**Returns:** `void`

---

#### `isDataSetsReplicationEnabled`
Getter for isDataSetsReplicationEnabled

**Returns:** `boolean`

---

#### `setDataSetsReplicationEnabled`
Setter for isDataSetsReplicationEnabled

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `isDataSetsReplicationEnabled` | `boolean` |  |

**Returns:** `void`

---

#### `getDatastores`


**Returns:** `Array/VRRemoteDatastore`

---

#### `setDatastores`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `_datastores` | `Array/VRRemoteDatastore` |  |

**Returns:** `void`

---

#### `getVmDisks`
Getter for all the VM disks configured in the replication

**Returns:** `Array/VRVmDisk`

---

#### `getStorageProfiles`


**Returns:** `Array/VRStorageProfile`

---

#### `getDiskTypes`


**Returns:** `Array/VRDiskType`

---

#### `setTargetHmsRef`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `targetHmsRef` | `com.vmware.vim.binding.vmodl.ManagedObjectReference` |  |

**Returns:** `void`

---

#### `setHbrServerUuid`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `hbrServerUuid` | `String` |  |

**Returns:** `void`

---

#### `setHbrInternallyManaged`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `hbrInternallyManaged` | `boolean` |  |

**Returns:** `void`

---

#### `setVmDisks`
Setter for all the VM disks configured in the replication

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vmDisks` | `Array/VRVmDisk` |  |

**Returns:** `void`

---

#### `setOriginalVmDisks`
Setter for all VM disks taken from the VC

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `originalVmDisks` | `Array/VRVmDisk` |  |

**Returns:** `void`

---

#### `getOriginalVmDisks`
Getter for all VM disks taken from the VC

**Returns:** `Array/VRVmDisk`

---

#### `getTargetVcRef`
Getter for target VC ref

**Returns:** `com.vmware.vim.binding.vmodl.ManagedObjectReference`

---

#### `setTargetVcRef`
Setter for target VC ref

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `targetVcRef` | `com.vmware.vim.binding.vmodl.ManagedObjectReference` |  |

**Returns:** `void`

---

#### `setHbrServerName`
Setter for HBR server name

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `hbrServerName` | `String` |  |

**Returns:** `void`

---

#### `setConfigurationError`
Setter for configuration error

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `configurationError` | `java.lang.Exception` |  |

**Returns:** `void`

---

#### `setLastGroupError`
Setter for last group error

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `lastGroupError` | `java.lang.Exception` |  |

**Returns:** `void`

---

#### `getTargetSiteName`
Getter for Target Site Name

**Returns:** `String`

---

#### `setTargetSiteName`
Setter for Target Site Name

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `targetSiteName` | `String` |  |

**Returns:** `void`

---

#### `setRPO`
Setter for RPO

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `RPO` | `long` |  |

**Returns:** `void`

---

#### `getRPO`


**Returns:** `long`

---

#### `setQuiescingEnabled`
Setter for Quiescing Enabled

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `quiescingEnabled` | `boolean` |  |

**Returns:** `void`

---

#### `isQuiescingEnabled`


**Returns:** `boolean`

---

#### `setReplicationRef`
Setter for replication ref

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `replicationRef` | `com.vmware.vim.binding.vmodl.ManagedObjectReference` |  |

**Returns:** `void`

---

#### `getReplicationRef`
Getter for replication ref

**Returns:** `com.vmware.vim.binding.vmodl.ManagedObjectReference`

---

#### `setNetworkCompressionEnabled`
Getter for isNetworkCompressionEnabled

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `networkCompressionEnabled` | `boolean` |  |

**Returns:** `void`

---

#### `isEncryptionEnabled`


**Returns:** `boolean`

---

#### `setEncryptionEnabled`
Getter for encryptionEnabled

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `encryptionEnabled` | `boolean` |  |

**Returns:** `void`

---

#### `isMpitEnabled`
Getter for isMpitEnabled

**Returns:** `boolean`

---

#### `setMpitEnabled`
Setter for isMpitEnabled

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `mpitEnabled` | `boolean` |  |

**Returns:** `void`

---

#### `getMpitInstances`


**Returns:** `int`

---

#### `setMpitInstances`
Getter for mpitInstances

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `mpitInstances` | `int` |  |

**Returns:** `void`

---

#### `getMpitDays`


**Returns:** `int`

---

#### `setMpitDays`
Getter for mpitDays

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `mpitDays` | `int` |  |

**Returns:** `void`

---

#### `setDiskTypes`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `_diskTypes` | `Array/VRDiskType` |  |

**Returns:** `void`

---

#### `setStorageProfiles`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `_storageProfiles` | `Array/VRStorageProfile` |  |

**Returns:** `void`

---

#### `isAutoReplicateNewDisks`


**Returns:** `boolean`

---

#### `setAutoReplicateNewDisks`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `_autoReplicateNewDisks` | `boolean` |  |

**Returns:** `void`

---

#### `isNetworkCompressionEnabled`


**Returns:** `boolean`

---

#### `setRecoveryError`
Setter for RecoveryError

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `recoveryError` | `String` |  |

**Returns:** `void`

---

#### `isPerDisk`


**Returns:** `boolean`

---

#### `setPerDisk`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `_perDisk` | `boolean` |  |

**Returns:** `void`

---

#### `getLastSyncSize`


**Returns:** `long`

---

#### `setLastSyncSize`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `_lastSyncSize` | `long` |  |

**Returns:** `void`

---

#### `getLastSyncDuration`


**Returns:** `long`

---

#### `setLastSyncDuration`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `_lastSyncDuration` | `long` |  |

**Returns:** `void`

---

#### `getLastSyncDate`


**Returns:** `java.util.Date`

---

#### `setLastSyncDate`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `_lastSyncDate` | `java.util.Date` |  |

**Returns:** `void`

---

#### `setRpoViolationMinutes`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `rpoViolationMinutes` | `long` |  |

**Returns:** `void`

---

#### `getRpoViolationMinutes`


**Returns:** `long`

---

