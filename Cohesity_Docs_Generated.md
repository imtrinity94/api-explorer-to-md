# Cohesity Reference

Generated Documentation

## CSAagGroup

**Description:** Provides POJO for AagGroup

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `fciClusters` |  | `Array/CSFciCluster` | No |
| `resourceInfo` |  | `CSResourceInfo` | No |
| `servers` |  | `Array/CSSQLServer` | No |
| `name` |  | `String` | No |
| `id` |  | `String` | No |

## CSAAGNodesAndDatabases

**Description:** Provides POJO for AAGNodesAndDatabases

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `applicationNode` |  | `CSNode` | No |
| `aagDatabases` |  | `Array/com.cohesity.plugin.model.AAGDatabases` | No |

## CSAgentInfo

**Description:** Provides POJO for AgentInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `connectionStatus` |  | `String` | No |
| `supportStatus` |  | `String` | No |
| `agentSwVersion` |  | `String` | No |
| `lastFetchedTimeInUsecs` |  | `Long` | No |

## CSAgentInformation

**Description:** Provides POJO for AgentInformation.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `upgradability` | Agent upgradability | `String` | No |
| `upgradeStatus` | Agent upgradeStatus | `String` | No |
| `upgradeStatusMessage` | Agent upgradeStatusMessage | `String` | No |
| `status` | Agent Status | `String` | No |
| `version` | Agent Version | `String` | No |
| `name` | Agent Name | `String` | No |
| `id` | Agent Id | `long` | No |

## CSAlertingConfig

**Description:** Provides POJO for AlertingConfig.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `emailAddresses` | emailAddresses | `Array/String` | No |
| `raiseObjectLevelFailureAlert` | raiseObjectLevelFailureAlert | `Boolean` | No |

## CSAlertPolicy

**Description:** Provides POJO for AlertPolicy.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `backupRunStatus` |  | `Array/String` | No |
| `alertTargets` |  | `Array/CSAlertTarget` | No |

### Methods

#### `CSAlertPolicy`


**Returns:** `void`

---

#### `addAlertTarget`
Add an alert target

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `alertTarget` | `CSAlertTarget` |  |

**Returns:** `void`

---

## CSAlertTarget

**Description:** Provides POJO for AlertTarget.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `emailAddress` |  | `String` | No |
| `recipientType` |  | `String` | No |
| `language` |  | `String` | No |

## CSAlternateLocationParams

**Description:** Provides POJO for AlternateLocationParams

## CSAppEntity

**Description:** Provides POJO for AppEntity

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `parentId` |  | `Long` | No |
| `id` |  | `Long` | No |
| `type` |  | `Long` | No |

## CSApplicationParameters

**Description:** Provides POJO for ApplicationParameters.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `truncateExchangeLog` |  | `Boolean` | No |

## CSApplicationRestoreObjects

**Description:** Provides POJO for ApplicationRestoreObjects

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `sqlRestoreParameters` |  | `CSSqlRestoreParameters` | No |
| `targetHostId` |  | `Long` | No |
| `applicationServerId` |  | `Long` | No |

## CSArchivalTarget

**Description:** Provides POJO for ArchivalTarget.

## CSBGMappingConfigManager

**Description:** Provides operations to manage business group config.

### Methods

#### `getConfigForBGAndTenant`
Return the configuration for a BG in a vRA tenant.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `bgName` | `String` |  |
| `tenantMappingConfigId` | `String` |  |

**Returns:** `CSBGMappingConfiguration`

---

#### `getAllBGMappings`
Return all the business group mapping information

**Returns:** `Array/CSBGMappingConfiguration`

---

#### `deleteConfiguration`
Delete a bg mapping configuration.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `config` | `CSBGMappingConfiguration` |  |

**Returns:** `void`

---

#### `getAllMappingsForTenantConfig`
For a given tenant mapping config, fetch the BG meta's mapped.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `tenantMappingConfigId` | `String` |  |

**Returns:** `Array/CSBGMappingConfiguration`

---

#### `addBGMappingConfiguration`
Add Business Group mapping.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `config` | `CSBGMappingConfiguration` |  |

**Returns:** `CSBGMappingConfiguration`

---

## CSBGMappingConfigManager

**Description:** Provides operations to manage business group config.

### Methods

#### `getConfigForBGAndTenant`
Return the configuration for a BG in a vRA tenant.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `bgName` | `String` |  |
| `tenantMappingConfigId` | `String` |  |

**Returns:** `CSBGMappingConfiguration`

---

#### `getAllBGMappings`
Return all the business group mapping information

**Returns:** `Array/CSBGMappingConfiguration`

---

#### `deleteConfiguration`
Delete a bg mapping configuration.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `config` | `CSBGMappingConfiguration` |  |

**Returns:** `void`

---

#### `getAllMappingsForTenantConfig`
For a given tenant mapping config, fetch the BG meta's mapped.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `tenantMappingConfigId` | `String` |  |

**Returns:** `Array/CSBGMappingConfiguration`

---

#### `addBGMappingConfiguration`
Add Business Group mapping.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `config` | `CSBGMappingConfiguration` |  |

**Returns:** `CSBGMappingConfiguration`

---

## CSBifrostConnection

**Description:** Provides POJO for Bifrost Connection instance.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `connectors` |  | `Array/Long` | No |
| `displayName` |  | `String` | No |
| `id` |  | `Long` | No |

## CSCloneTaskRequest

**Description:** Provides POJO for CloneTaskRequest objects.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `jobRunId` | Job Run Id | `Long` | No |
| `startedTimeUsecs` | Started Time Usecs | `Long` | No |
| `protectionSourceId` | Protection Source Id | `Long` | No |
| `vmName` | Virtual Machine name | `String` | No |
| `networkId` | Network Id | `Long` | No |
| `newParentId` | vCenter Id | `Long` | No |
| `resourcePoolId` | Resource Pool Id | `Long` | No |
| `targetViewName` | Target View Name | `String` | No |
| `prefix` | Prefix | `String` | No |
| `type` | Type | `String` | No |
| `suffix` | Suffix | `String` | No |

## CSClusterComputeResource

**Description:** Provides Object for clusters in a dataCenter.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `environment` | environment | `String` | No |
| `parentId` | parentId | `Long` | No |
| `morItem` | morItem | `String` | No |
| `morType` | morType | `String` | No |
| `connectionConfigId` | connectionConfigId | `String` | No |
| `displayName` | Name | `String` | No |
| `id` | id | `Long` | No |
| `type` | type | `String` | No |

## CSClusterInfo

**Description:** Provides POJO for Cluster info

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `clusterType` | Cohesity Cluster type | `String` | No |
| `languageLocale` | Cohesity Cluster language | `String` | No |
| `authenticationType` | Cohesity Cluster authentication type | `String` | No |
| `domains` | Cohesity Cluster domains | `Array/String` | No |
| `mcmMode` | Cohesity Cluster MCM mode | `Boolean` | No |
| `clusterSoftwareVersion` | Cohesity Cluster software version | `String` | No |
| `displayName` | Cohesity Cluster name | `String` | No |

## CSClusterPartition

**Description:** Provides POJO on ViewBox

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `nodeIds` | nodeIds | `Array/Long` | No |
| `removalState` | removalState | `String` | No |
| `displayName` | Name | `String` | No |
| `id` | id | `Long` | No |
| `hostName` | hostName | `String` | No |

## CSClusterResource

**Description:** Provides basic operations for Root Resource.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `displayName` | Object name | `String` | No |
| `id` | Object Id | `String` | No |

## CSClusterResource

**Description:** Provides basic operations for Root Resource.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `displayName` | Object name | `String` | No |
| `id` | Object Id | `String` | No |

## CSCohesityConnectionFolder

**Description:** Virtual Folder for endpoint configurations in inventory.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `displayName` | Cohesity Endpoint connections | `String` | Yes |

## CSCohesityConnectionManager

**Description:** Provides CRUD operations for CohesityConnection objects.

### Methods

#### `getCohesityConnection`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `String` |  |

**Returns:** `CSCohesityConnection`

---

#### `addCohesityConnection`
Adds a new Cohesity connection instance.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |

**Returns:** `CSCohesityConnection`

---

#### `updateCohesityConnection`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `String` |  |
| `connection` | `CSCohesityConnection` |  |

**Returns:** `CSCohesityConnection`

---

#### `removeCohesityConnection`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `String` |  |

**Returns:** `void`

---

#### `getCohesityConnections`
Fetch all the cohesity connection instances

**Returns:** `Array/CSCohesityConnection`

---

#### `getAllChildConnections`
Fetch list of all Connection instances which are child of the given connection (Tenant/BGUser instances)

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `parentConnectionConfigId` | `String` |  |

**Returns:** `Array/CSCohesityConnection`

---

#### `removeConfiguration`
Delete a configuration instance.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |

**Returns:** `void`

---

#### `getParentConnectionInstance`
Returns the parent connection instance (ORG_USER-> ADMIN, BG_USER -> TENANT CONFIG)

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |

**Returns:** `CSCohesityConnection`

---

#### `getCohesityConnectionById`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connectionId` | `String` |  |

**Returns:** `CSCohesityConnection`

---

## CSCopyRun

**Description:** Provides POJO for CopyRun.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `expiryTimeUsecs` |  | `Long` | No |
| `runStartTimeUsecs` |  | `Long` | No |

### Methods

#### `getExpiryTimeAsString`
Returns the expiry time of the run

**Returns:** `String`

---

## CSCredentials

**Description:** Provides POJO for Credentials

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `username` |  | `String` | No |
| `password` |  | `String` | No |

## CSDataCenterResource

**Description:** Provides basic operations for Root Resource.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `displayName` | Object name | `String` | No |
| `id` | Object Id | `String` | No |

## CSDatastore

**Description:** Provides POJO for Datastore

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `parentId` | Parent Id | `Long` | No |
| `vmwareEntity` | VMware Entity | `com.cohesity.plugin.model.VmwareEntity` | No |
| `id` | Id | `Long` | No |
| `type` | Type | `Long` | No |
| `displayName` | Display Name | `String` | No |

### Methods

#### `CSDatastore`


**Returns:** `void`

---

#### `getCapacity`
Returns the capacity of the Datastore.

**Returns:** `Long`

---

#### `getFreeSpace`
Returns the free space in the Datastore.

**Returns:** `Long`

---

## CSDiskLocation

**Description:** Provides POJO for DiskLocation

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `environment` |  | `String` | No |
| `parentId` |  | `Long` | No |
| `name` |  | `String` | No |
| `id` |  | `Long` | No |

## CSDiskToOverwrite

**Description:** Provides POJO for DiskToOverwrite.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `diskId` |  | `String` | No |
| `unitNumber` |  | `Long` | No |
| `controllerBusNumber` |  | `Long` | No |
| `controllerType` |  | `String` | No |

## CSEmailConfiguration

**Description:** Provides CRUD operations for EmailConfiguration objects.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `fromName` | From (User Name) | `String` | No |
| `smtpHost` | SMTP Host | `String` | No |
| `smtpPort` | SMTP Port | `String` | No |
| `fromAddress` | From Address | `String` | No |
| `userName` | User name | `String` | No |
| `displayName` | Cohesity Email Configuration Name | `String` | No |

## CSEmailConfigurationFolder

**Description:** Virtual Folder for Email configurations in inventory.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `displayName` | Email Configurations | `String` | Yes |

## CSEmailConfigurationManager

**Description:** Provides CRUD operations for EMail Configuration objects.

### Methods

#### `addEmailConfiguration`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `config` | `CSEmailConfiguration` |  |

**Returns:** `CSEmailConfiguration`

---

#### `updateEmailConfiguration`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `currentName` | `String` |  |
| `newConf` | `CSEmailConfiguration` |  |

**Returns:** `CSEmailConfiguration`

---

#### `deleteConfiguration`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `config` | `CSEmailConfiguration` |  |

**Returns:** `void`

---

#### `getConfigurationByName`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `configName` | `String` |  |

**Returns:** `CSEmailConfiguration`

---

#### `getAllEmailConfigurations`


**Returns:** `Array/CSEmailConfiguration`

---

## CSEndpoint

**Description:** Provides POJO for Endpoint

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `ipv4addr` |  | `String` | No |
| `ipv6addr` |  | `String` | No |
| `subnetIp4addr` |  | `String` | No |
| `preferredAddress` |  | `String` | No |
| `isPreferredEndpoint` |  | `Boolean` | No |
| `fqdn` |  | `String` | No |

## CSEndpointSelectionConfiguration

**Description:** Provides POJO for endpoint selection config

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `morItem` | Mor Item | `String` | No |
| `clusterComputeName` | Cluster Name | `String` | No |
| `clusterConfigMetaDataId` | Admin CohesityConnection instance | `String` | No |
| `displayName` | Name (Id) | `String` | Yes |
| `id` | Id | `String` | No |

## CSEndpointSelectionManager

**Description:** Provides operations to manage the endpoint selection.

### Methods

#### `getEndpointSelectionConfigForComputeCluster`
Find the configuration entity for a cluster compute

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `clusterName` | `String` |  |
| `morItem` | `String` |  |

**Returns:** `CSEndpointSelectionConfiguration`

---

#### `getConfigById`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `configId` | `String` |  |

**Returns:** `CSEndpointSelectionConfiguration`

---

#### `deleteConfiguration`
Delete a endpoint selection configuration.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `config` | `CSEndpointSelectionConfiguration` |  |

**Returns:** `void`

---

#### `addEndpointSelectionConfig`
Define a new endpoint selection configuration.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `config` | `CSEndpointSelectionConfiguration` |  |

**Returns:** `CSEndpointSelectionConfiguration`

---

#### `getAllEndpointSelectionConfigs`
Return all the selection configs

**Returns:** `Array/CSEndpointSelectionConfiguration`

---

## CSEntity

**Description:** Provides POJO for Entity.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `parentId` |  | `Long` | No |
| `id` |  | `Long` | No |
| `type` |  | `Long` | No |
| `displayName` |  | `String` | No |

## CSEnvironmentParameters

**Description:** Provides POJO for EnvironmentParameters.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `sqlParameters` |  | `CSSqlParameters` | No |

## CSExcludedDisk

**Description:** Provides POJO for ExcludedDisk.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `unitNumber` |  | `Long` | No |
| `controllerType` |  | `String` | No |
| `busNumber` |  | `Long` | No |

## CSFciCluster

**Description:** Provides POJO for FciCluster

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `resourceInfo` |  | `CSResourceInfo` | No |
| `isSelectedByDefault` |  | `Boolean` | No |
| `servers` |  | `Array/CSSQLServer` | No |
| `error` |  | `CSSQLError` | No |
| `name` |  | `String` | No |
| `id` |  | `String` | No |

## CSFilePaths

**Description:** Provides POJO for filePath objects.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `backupFilePath` | Backup file path. | `String` | No |
| `excludedFilePaths` | Excluded file paths. | `Array/String` | No |
| `skipNestedVolumes` | Skip nested volume? | `Boolean` | No |

## CSFilesOrFoldersResource

**Description:** Provides basic operations for Root Resource.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `internalID` | End point property | `String` | Yes |
| `jobId` | Job Id | `Long` | No |
| `displayName` | File name | `String` | No |

## CSGlobalId

**Description:** Provides POJO for Global Id.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `clusterId` | Cluster Id | `long` | No |
| `clusterIncarnationId` | Cluster Incarnation Id | `long` | No |
| `id` | Global ID | `int` | No |

## CSHost

**Description:** Provides POJO for Host.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Specifies the name of the object. | `String` | No |
| `id` | Specifies the id of the object. | `Long` | No |

## CSHostingProtectionSource

**Description:** Provides POJO for HostingProtectionSource

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `environment` |  | `String` | No |
| `jobRunId` |  | `Long` | No |
| `startedTimeUsecs` |  | `Long` | No |
| `jobUid` |  | `CSJobUid` | No |
| `protectionSourceId` |  | `Long` | No |
| `jobId` |  | `Long` | No |

## CSIncrementalProtectionStartTime

**Description:** Provides POJO for IncrementalProtectionStartTime.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `hour` | Hour | `int` | No |
| `minute` | Minute | `int` | No |

## CSIndexingPolicy

**Description:** Provides POJO for IndexingPolicy.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `disableIndexing` | disableIndexing | `boolean` | No |
| `allowPrefixes` | allowPrefixes | `Array/String` | No |
| `denyPrefixes` | denyPrefixes | `Array/String` | No |

## CSIndexingPolicy

**Description:** Provides POJO for IndexingPolicy.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `disableIndexing` | disableIndexing | `boolean` | No |
| `allowPrefixes` | allowPrefixes | `Array/String` | No |
| `denyPrefixes` | denyPrefixes | `Array/String` | No |

## CSInstance

**Description:** Provides POJO for Instance

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `endpoints` |  | `Array/CSEndpoint` | No |
| `isOnline` |  | `String` | No |
| `isPartofFCI` |  | `Boolean` | No |
| `name` |  | `String` | No |
| `id` |  | `String` | No |

## CSJobUid

**Description:** Provides POJO for JobUid objects.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `clusterId` | Cluster Id | `Long` | No |
| `clusterIncarnationId` | Cluster Incarnation Id | `Long` | No |
| `id` | Id | `Long` | No |

## CSMssqlConnectionResponseParams

**Description:** Provides POJO for MssqlConnectionResponseParams

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `hostIdentifier` |  | `String` | No |
| `fciClusters` |  | `Array/CSFciCluster` | No |
| `aagGroups` |  | `Array/CSAagGroup` | No |
| `servers` |  | `Array/CSSQLServer` | No |
| `error` |  | `java.lang.Error` | No |
| `skipConnectionDiscovery` |  | `Boolean` | No |

## CSMTManager

**Description:** Provides operations to manage MT workFlows.

### Methods

#### `deleteClusterMeta`
Delete a cluster config & all associated connections/meta info

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |

**Returns:** `void`

---

#### `deleteSelectionMeta`
Delete a selection configuration.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `clusterConfigMetaDataId` | `String` |  |

**Returns:** `void`

---

#### `createOrgForVRATenant`
Create a CS Org for a vRA tenant

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `vRATenantId` | `String` |  |
| `vRATenantName` | `String` |  |

**Returns:** `CSTenant`

---

#### `getBGEndpointForTheVM`
Return the default endpoint for the business group request.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `tenantId` | `String` |  |
| `bgName` | `String` |  |
| `computeClusterName` | `String` |  |
| `computeClusterMorItemName` | `String` |  |

**Returns:** `CSCohesityConnection`

---

#### `createBGUserForTenant`
Randomly create a user for BG.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `tenantMappingConfigId` | `String` |  |
| `bgName` | `String` |  |

**Returns:** `CSCohesityConnection`

---

#### `createLocalUserForTenant`
Create a new LOCAL account for the cohesity tenant.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `cohesityTenant` | `CSTenant` |  |

**Returns:** `CSCohesityConnection`

---

#### `createBGMappingMetaData`
Create a business group mapping meta data.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `businessGroupName` | `String` |  |
| `tenantMappingConfigId` | `String` |  |
| `bgUserConfiguration` | `CSCohesityConnection` |  |

**Returns:** `CSBGMappingConfiguration`

---

#### `deleteTenantMappingConfiguration`
Delete a tenant meta & all associated configurations

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `tenantMapConf` | `CSTenantMappingConfiguration` |  |

**Returns:** `void`

---

#### `deleteBGMappingConfiguration`
Delete a BG Mapping metadata configuration.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `bgConfig` | `CSBGMappingConfiguration` |  |

**Returns:** `void`

---

#### `createTenantMappingMetaData`
Create a tenant mapping meta data.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vRATenantId` | `String` |  |
| `cohesityTenantId` | `String` |  |
| `clusterConnection` | `CSCohesityConnection` |  |
| `tenantConnection` | `CSCohesityConnection` |  |

**Returns:** `CSTenantMappingConfiguration`

---

#### `updateServiceUserPassword`
Update service user password

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `tenantId` | `String` |  |
| `userName` | `String` |  |
| `newPassword` | `String` |  |

**Returns:** `com.cohesity.plugin.model.User`

---

## CSNetworkEntities

**Description:** Provides POJO for Network Entities

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `parentId` | Parent Id | `Long` | No |
| `id` | Id | `Long` | No |
| `type` | Type | `Long` | No |
| `displayName` | Display Name | `String` | No |

## CSNetworkResource

**Description:** Provides basic operations for Root Resource.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `displayName` | Object name | `String` | No |
| `id` | Object Id | `String` | No |

## CSNewSourceConfig

**Description:** Provides POJO for New Source Config.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `recoveryTarget` |  | `String` | No |
| `recoverDatabaseParams` |  | `CSRecoverDatabaseParams` | No |
| `host` |  | `CSHost` | No |

## CSNewUserParam

**Description:** Provides POJO for creation on new user in cohesity.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `restricted` | Is Restricted | `Boolean` | No |
| `emailAddress` | Email | `String` | No |
| `passwordConfirm` | PasswordConfirm | `String` | No |
| `username` | Username | `String` | No |
| `password` | Password | `String` | No |
| `roles` | Roles | `Array/String` | No |
| `type` | Type | `String` | No |
| `domain` | Domain name | `String` | No |

## CSNode

**Description:** Provides POJO for Node objects.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `applicationNodes` | applicationNodes | `Array/CSNode` | No |
| `protectionSource` | protectionSource | `CSProtectionSource` | No |
| `logicalSize` | logicalSize | `Long` | No |
| `protectedSourcesSummary` | protectedSourcesSummary | `Array/com.cohesity.plugin.model.ProtectedSourcesSummary` | No |
| `unprotectedSourcesSummary` | unprotectedSourcesSummary | `Array/com.cohesity.plugin.model.UnprotectedSourcesSummary` | No |
| `displayName` | Name of the Node | `String` | No |

## CSNotificationMailData

**Description:** Provides POJO for NotificationMailData objects.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `fromName` | fromName | `String` | No |
| `smtpHost` | Name | `String` | No |
| `smtpPort` | smtpPort | `Integer` | No |
| `fromAddress` | Job Id | `String` | No |
| `vmName` | Target Source Id | `String` | No |
| `jobStatus` | jobStatus | `String` | No |
| `mailUserName` | mailUserName | `String` | No |
| `toAddressList` | toAddressList | `String` | Yes |
| `mailPassword` | Job Run Id | `String` | No |
| `filesOrFoldersType` | Started Time Usecs | `String` | No |
| `filesOrFoldersName` | filesOrFoldersName | `String` | No |
| `recoverToLocation` | recoverToLocation | `String` | No |
| `userName` | userName | `String` | No |
| `snapshot` | snapshot | `String` | No |
| `content` | Target Parent Source Id | `String` | No |
| `subject` | Protection Source Id | `String` | No |

## CSObjectResource

**Description:** Provides basic operations for Root Resource.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `environment` | Type of system (kVMWare/kPhysical/kPhysicalFiles) | `String` | No |
| `parentId` | ParentId | `Long` | No |
| `dbAagEntityId` |  | `Long` | No |
| `dbAagName` |  | `String` | No |
| `protectionJobs` | protectionJobs | `Array/CSProtectionJobNameResource` | No |
| `displayName` | Object name | `String` | No |
| `id` | Object Id | `String` | No |

## CSObjectSnapshot

**Description:** Provides POJO for Snapshot information (v2).

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `snapshotTargetType` | snapshotTargetType | `String` | No |
| `ownershipContext` | ownershipContext | `String` | No |
| `protectionGroupId` |  | `String` | No |
| `snapshotTimestampUsecs` |  | `Long` | No |
| `objectId` |  | `Long` | No |
| `displayName` | snapshot time | `String` | No |
| `id` | id | `String` | No |

## CSObjectSnapshots

**Description:** Provides POJO for Snapshot information (v2).

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `snapshots` | snapshots | `Array/CSObjectSnapshot` | No |

## CSOracleManager

**Description:** Provides basic operations for Oracle workflows

### Methods

#### `restoreOracleDatabase`
Recover a Oracle application Database

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `requestParam` | `CSRecoverRequestParamsV2` |  |

**Returns:** `String`

---

#### `getAllOracleDatabases`
Get all the Oracle databases in a Oracle instance.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `rootNodeId` | `Long` |  |

**Returns:** `Array/CSNode`

---

## CSOracleProtectionGroupDatabaseParams

**Description:** Provides POJO for OracleProtectionGroupDatabaseParams

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `databaseName` | Specifies the name of the Oracle database. | `String` | No |
| `databaseId` | Specifies the id of the Oracle database. | `Long` | No |

## CSOracleProtectionGroupObject

**Description:** Provides POJO for OracleProtectionGroupObject

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `sourceId` | Specifies the id of the host on which databases are hosted. | `Long` | No |
| `dbParams` | Specifies the properties of the Oracle databases. | `Array/CSOracleProtectionGroupDatabaseParams` | No |

### Methods

#### `addDbParams`
Add a SLA path instance.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `object` | `CSOracleProtectionGroupDatabaseParams` |  |

**Returns:** `void`

---

## CSOracleProtectionGroupParams

**Description:** Provides POJO for OracleProtectionGroupParams

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `persistMountpoints` |  | `Boolean` | No |
| `objects` |  | `Array/CSOracleProtectionGroupObject` | No |

### Methods

#### `addObject`
Add an object instance

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `object` | `CSOracleProtectionGroupObject` |  |

**Returns:** `void`

---

## CSOracleProtectionSource

**Description:** Provides POJO for OracleProtectionSource.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dbType` | dbType | `String` | No |
| `databaseUniqueName` | databaseUniqueName | `String` | No |
| `archiveLogEnabled` | archiveLogEnabled | `Boolean` | No |
| `bctEnabled` | bctEnabled | `Boolean` | No |
| `tempFilesCount` | tempFilesCount | `Long` | No |
| `fraSize` | fraSize | `Long` | No |
| `tdeEncryptedTsCount` | tdeEncryptedTsCount | `Long` | No |
| `sgaTargetSize` | sgaTargetSize | `String` | No |
| `sharedPoolSize` | sharedPoolSize | `String` | No |
| `ownerId` | ownerId | `Long` | No |
| `uuid` | uuid | `String` | No |
| `version` | version | `String` | No |
| `name` | Protection Source Name | `String` | No |
| `type` | Protection Source Type | `String` | No |
| `size` | size | `Long` | No |
| `domain` | domain | `String` | No |

## CSOracleSource

**Description:** Provides POJO for Oracle Source.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `environment` | Environment | `String` | No |
| `oracleProtectionSource` | Oracle Protection Source | `CSOracleProtectionSource` | No |
| `displayName` | Oracle Source Name | `String` | No |
| `id` | Oracle Source ID | `Long` | No |

## CSOracleSpecialParameters

**Description:** Provides POJO for OracleSpecialParameters.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `persistMountpoints` |  | `Boolean` | No |
| `applicationEntityIds` |  | `Array/Long` | No |

### Methods

#### `addApplicationEntityIds`
Add an application entity ids.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `applicationEntityIds` | `Long` |  |

**Returns:** `void`

---

#### `removeApplicationEntityId`
Remove an application entity id.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `id` | `Long` |  |

**Returns:** `void`

---

## CSOracleTargetParams

**Description:** Provides POJO for Oracle Target Params.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `recoverToNewSource` |  | `Boolean` | No |
| `newSourceConfig` |  | `CSNewSourceConfig` | No |
| `originalSourceConfig` |  | `CSOriginalSourceConfig` | No |

## CSOriginalSourceConfig

**Description:** Provides POJO for Original Source Config.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `restoreTimeUsecs` |  | `Long` | No |

## CSOwnerObject

**Description:** Provides POJO for OwnerObject

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `jobUid` |  | `CSRestoreRequestJobUid` | No |
| `jobInstanceId` |  | `Long` | No |
| `startTimeUsecs` |  | `Long` | No |
| `entity` |  | `CSEntity` | No |
| `jobId` |  | `Long` | No |

## CSOwnerRestoreInfo

**Description:** Provides POJO for OwnerRestoreInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `ownerObject` |  | `CSOwnerObject` | No |
| `ownerRestoreParams` |  | `CSOwnerRestoreParams` | No |
| `performRestore` |  | `Boolean` | No |

## CSOwnerRestoreParams

**Description:** Provides POJO for OwnerRestoreParams

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `powerStateConfig` |  | `com.cohesity.plugin.model.PowerStateConfig` | No |
| `action` |  | `String` | No |

## CSPhysicalFileBackupPathParams

**Description:** Provides POJO for PhysicalFileBackupPathParams

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `includedPath` |  | `String` | No |
| `excludedPaths` |  | `Array/String` | No |
| `skipNestedVolumes` |  | `Boolean` | No |

## CSPhysicalFileProtectionGroupObjectParams

**Description:** Provides POJO for PhysicalFileProtectionGroupObjectParams

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `metadataFilePath` |  | `String` | No |
| `filePaths` |  | `Array/CSPhysicalFileBackupPathParams` | No |
| `usesPathLevelSkipNestedVolumeSetting` |  | `Boolean` | No |
| `nestedVolumeTypesToSkip` |  | `Array/String` | No |
| `followNasSymlinkTarget` |  | `Boolean` | No |
| `name` |  | `String` | No |
| `id` |  | `Long` | No |

### Methods

#### `CSPhysicalFileProtectionGroupObjectParams`


**Returns:** `void`

---

#### `addFilePath`
Add a SLA path instance.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `object` | `CSPhysicalFileBackupPathParams` |  |

**Returns:** `void`

---

## CSPhysicalFileProtectionGroupParams

**Description:** Provides POJO for PhysicalFileProtectionGroupParams

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `indexingPolicy` |  | `CSIndexingPolicyV2` | No |
| `quiesce` |  | `Boolean` | No |
| `globalExcludePaths` |  | `Array/String` | No |
| `globalExcludeFS` |  | `Array/String` | No |
| `ignorableErrors` |  | `Array/String` | No |
| `objects` |  | `Array/CSPhysicalFileProtectionGroupObjectParams` | No |
| `performSourceSideDeduplication` |  | `Boolean` | No |
| `performBrickBasedDeduplication` |  | `Boolean` | No |
| `continueOnQuiesceFailure` |  | `Boolean` | No |
| `dedupExclusionSourceIds` |  | `Array/Long` | No |

### Methods

#### `CSPhysicalFileProtectionGroupParams`


**Returns:** `void`

---

#### `addObject`
Add an object instance

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `object` | `CSPhysicalFileProtectionGroupObjectParams` |  |

**Returns:** `void`

---

#### `addDedupExclusionSourceId`
Add a dedup sourceId to exclude

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `id` | `Long` |  |

**Returns:** `void`

---

## CSPhysicalMachine

**Description:** Provides POJO for Physical Machines.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `environment` | Environment | `String` | No |
| `physicalProtectionSource` | Physical Protection Source | `CSPhysicalProtectionSource` | No |
| `displayName` | Physical Machine Name | `String` | No |
| `id` | Physical Machine ID | `Long` | No |

## CSPhysicalParams

**Description:** Provides POJO for PhysicalParams

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `applications` |  | `Array/String` | No |
| `username` |  | `String` | No |
| `password` |  | `String` | No |

### Methods

#### `CSPhysicalParams`


**Returns:** `void`

---

#### `addApplication`
Add a new application type.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `applicationType` | `String` |  |

**Returns:** `void`

---

## CSPhysicalProtectionGroupParams

**Description:** Provides POJO for PhysicalProtectionGroupParams

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `protectionType` |  | `String` | No |
| `volumeProtectionTypeParams` |  | `CSPhysicalVolumeProtectionGroupParams` | No |
| `fileProtectionTypeParams` |  | `CSPhysicalFileProtectionGroupParams` | No |

## CSPhysicalProtectionSource

**Description:** Provides POJO for PhysicalProtectionSource.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `hostType` | Protection Source hostType | `String` | No |
| `osName` | Protection Source osName | `String` | No |
| `volumes` | Protection Source volumes | `Array/com.cohesity.plugin.model.PhysicalServerVolume` | No |
| `agents` | Protection Source agents | `Array/CSAgentInformation` | Yes |
| `name` | Protection Source Name | `String` | No |
| `id` | Protection Source Id | `com.cohesity.plugin.model.Id` | No |
| `type` | Protection Source Type | `String` | No |

## CSPhysicalSpecialParameters

**Description:** Provides POJO for PhysicalSpecialParameters.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `filePaths` |  | `Array/CSFilePaths` | No |

### Methods

#### `addFilePatch`
Add a file path instance.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `filePath` | `CSFilePaths` |  |

**Returns:** `void`

---

## CSPhysicalVolumeProtectionGroupObjectParams

**Description:** Provides POJO for PhysicalVolumeProtectionGroupObjectParams

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `volumeGuids` |  | `Array/String` | No |
| `enableSystemBackup` |  | `Boolean` | No |
| `name` |  | `String` | No |
| `id` |  | `Long` | No |

## CSPhysicalVolumeProtectionGroupParams

**Description:** Provides POJO for PhysicalVolumeProtectionGroupParams

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `excludedVssWriters` |  | `Array/String` | No |
| `indexingPolicy` |  | `CSIndexingPolicyV2` | No |
| `quiesce` |  | `Boolean` | No |
| `objects` |  | `Array/CSPhysicalVolumeProtectionGroupObjectParams` | No |
| `performSourceSideDeduplication` |  | `Boolean` | No |
| `continueOnQuiesceFailure` |  | `Boolean` | No |
| `dedupExclusionSourceIds` |  | `Array/Long` | No |
| `incrementalBackupAfterRestart` |  | `Boolean` | No |

### Methods

#### `CSPhysicalVolumeProtectionGroupParams`


**Returns:** `void`

---

#### `addObject`
Add an object instance

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `object` | `CSPhysicalVolumeProtectionGroupObjectParams` |  |

**Returns:** `void`

---

#### `addDedupExclusionSourceId`
Add a dedup sourceId to exclude

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `id` | `Long` |  |

**Returns:** `void`

---

## CSPrincipalManager

**Description:** Provides operations to manage users in Cohesity.

### Methods

#### `assignVMObjectToUser`
Assign a VM object to a user. (Restricted User)

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `username` | `String` |  |
| `objectId` | `Long` |  |

**Returns:** `void`

---

#### `deleteUser`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `userNames` | `Array/String` |  |
| `domain` | `String` |  |
| `tenantId` | `String` |  |

**Returns:** `void`

---

## CSProtectedNode

**Description:** Provides POJO for ProtectedNode

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `protectionSource` |  | `CSProtectionSource` | No |
| `protectionJobs` |  | `Array/CSProtectionJob` | No |
| `protectionPolicies` |  | `Array/CSProtectionPolicy` | No |

## CSProtectionGroup

**Description:** Provides POJO for Protection Group.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `alertPolicy` |  | `CSAlertPolicy` | No |
| `qosPolicy` |  | `String` | No |
| `abortInBlackouts` |  | `Boolean` | No |
| `isPaused` |  | `Boolean` | No |
| `udaParams` |  | `CSUdaParamsInfo` | No |
| `regionId` |  | `String` | No |
| `pauseInBlackouts` |  | `Boolean` | No |
| `isActive` |  | `Boolean` | No |
| `isDeleted` |  | `Boolean` | No |
| `environment` |  | `String` | No |
| `clusterId` |  | `String` | No |
| `policyId` | Policy Id | `String` | No |
| `physicalParams` |  | `CSPhysicalProtectionGroupParams` | No |
| `oracleParams` |  | `CSOracleProtectionGroupParams` | No |
| `storageDomainId` |  | `Long` | No |
| `endTimeUsecs` |  | `Long` | No |
| `description` |  | `String` | No |
| `startTime` |  | `CSStartTime` | No |
| `sla` |  | `Array/CSSla` | No |
| `displayName` | Protection Group Name | `String` | No |
| `priority` | Priority | `String` | No |
| `id` |  | `String` | No |

### Methods

#### `CSProtectionGroup`


**Returns:** `void`

---

#### `addSlaObject`
Add an SLA object

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `slaObj` | `CSSla` |  |

**Returns:** `void`

---

## CSProtectionGroupManager

**Description:** Provides basic operations for Protection Groups (v2).

### Methods

#### `getSnapshotsForInstance`
Get snapshots for a given object instance.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `objectName` | `String` |  |
| `objectId` | `Long` |  |
| `protectionJobId` | `String` |  |

**Returns:** `Array/CSSnapshotVersion`

---

#### `createProtectionGroup`
Creates a new protection group and protects instances using v2 APIs.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `pGroup` | `CSProtectionGroup` |  |

**Returns:** `CSProtectionGroup`

---

#### `getAllProtectionGroups`
Get all protection groups.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |

**Returns:** `Array/CSProtectionGroup`

---

#### `getProtectionGroupById`
Get protection group instance identified by its id.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `protectionGroupId` | `String` |  |

**Returns:** `CSProtectionGroup`

---

#### `patchProtectionGroup`
Update a protection group (v2)

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `protectionGroupId` | `String` |  |
| `payload` | `CSProtectionGroup` |  |

**Returns:** `CSProtectionGroup`

---

#### `addOracleDBsToGroup`
Add oracle dbs to protection group(v2).

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `protectionGroupId` | `String` |  |
| `sourceId` | `Long` |  |
| `oracleDbParams` | `Array/CSOracleProtectionGroupDatabaseParams` |  |

**Returns:** `CSProtectionGroup`

---

#### `deleteProtectionGroup`
Delete a protection group(v2).

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `protectionGroupId` | `String` |  |
| `deleteSnapshots` | `Boolean` |  |

**Returns:** `void`

---

#### `getObjectSnapshots`
Get list of snapshots for a given object.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `objectId` | `String` |  |
| `protectionGroupId` | `String` |  |

**Returns:** `Array/CSObjectSnapshot`

---

#### `removePhysicalSourceFromProtectionGroup`
Remove physical source from protection (v2)

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `machine` | `CSPhysicalMachine` |  |
| `protectionGroupId` | `String` |  |

**Returns:** `CSProtectionGroup`

---

#### `addMachineToVolumeBasedGroup`
Add physical machine to volume based protection group(v2).

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `machine` | `CSPhysicalMachine` |  |
| `protectionGroupId` | `String` |  |
| `volumeObjectInstance` | `CSPhysicalVolumeProtectionGroupObjectParams` |  |

**Returns:** `CSProtectionGroup`

---

#### `addMachineToFileBasedGroup`
Add physical machine to file based protection group(v2).

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `machine` | `CSPhysicalMachine` |  |
| `protectionGroupId` | `String` |  |
| `fileObjectInstance` | `CSPhysicalFileProtectionGroupObjectParams` |  |

**Returns:** `CSProtectionGroup`

---

## CSProtectionJob

**Description:** Provides POJO for Protection Job.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `isDeleted` | Is Deleted | `Boolean` | No |
| `environment` | Environment | `String` | No |
| `sourceIds` | Source Ids | `Array/Long` | No |
| `parentSourceId` | Parent Source Id | `Long` | No |
| `indexingPolicy` | Indexing Policy | `CSIndexingPolicy` | No |
| `quiesce` | Quiesce | `Boolean` | No |
| `policyId` | Policy Id | `String` | No |
| `viewBoxId` | ViewBox Id | `Long` | No |
| `alertingPolicy` | Alerting Policy | `Array/String` | No |
| `modificationTimeUsecs` | Modification TimeUsecs | `Long` | No |
| `modifiedByUser` | Modified By User | `String` | No |
| `creationTimeUsecs` | Creation TimeUsecs | `Long` | No |
| `isActive` | Is Active | `Boolean` | No |
| `qosType` | qosType | `String` | No |
| `alertingConfig` | alertingConfig | `CSAlertingConfig` | No |
| `lastRun` | Last Run | `CSProtectionRun` | No |
| `environmentParameters` | SQL Env Parameters | `CSEnvironmentParameters` | No |
| `endTimeUsecs` | End Time Usec | `Long` | No |
| `description` | PJob Description | `String` | No |
| `startTime` | Start Time | `CSIncrementalProtectionStartTime` | No |
| `timezone` | Timezone | `String` | No |
| `uid` | UID | `CSJobUid` | No |
| `sourceSpecialParameters` | sourceSpecialParameters | `Array/CSSourceSpecialParameters` | No |
| `incrementalProtectionSlaTimeMins` | Incremental Protection SlaTimeMins | `Integer` | No |
| `fullProtectionSlaTimeMins` | Full Protection SlaTimeMins | `Integer` | No |
| `policyAppliedTimeMsecs` | Policy Applied TimeMsecs | `Long` | No |
| `performSourceSideDedup` | performSourceSideDedup | `Boolean` | No |
| `displayName` | Protection Job Name | `String` | No |
| `priority` | Priority | `String` | No |
| `id` | Protection Job ID | `Long` | No |

### Methods

#### `CSProtectionJob`


**Returns:** `void`

---

#### `addSourceIds`
Add a source to protection job. (Used in scripting obj to overcome typecast issue)

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `sourceId` | `Long` |  |

**Returns:** `void`

---

#### `removeSourceIds`
Remove a source id. (Used in scripting obj to overcome typecast issue)

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `sourceId` | `Long` |  |

**Returns:** `void`

---

#### `addSourceSpecialParameter`
Add a source special param.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `ssParam` | `CSSourceSpecialParameters` |  |

**Returns:** `void`

---

## CSProtectionJobFolder

**Description:** Virtual Folder Protection Job object.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `displayName` | Protection Job | `String` | Yes |

## CSProtectionJobManager

**Description:** Provides basic operations for Protection Jobs.

### Methods

#### `removePhyMachineFromFileBasedProtectionJob`
Remove a physical server from file based protection job.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `machine` | `CSPhysicalMachine` |  |
| `pJob` | `CSProtectionJob` |  |

**Returns:** `CSProtectionJob`

---

#### `getProtectionJobList`
Lists all Protection Jobs

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `includeLastRunAndStats` | `Boolean` |  |

**Returns:** `Array/CSProtectionJob`

---

#### `getProtectionJobById`
Get a protection job instance by its ID.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `id` | `Long` |  |

**Returns:** `CSProtectionJob`

---

#### `runProtectionJob`
Runs a protection job instance.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `protectionJobId` | `Long` |  |
| `runRequest` | `com.cohesity.plugin.model.InstantRunRequest` |  |

**Returns:** `boolean`

---

#### `addVMToProtectionJob`
Adds Virtual Machine to the Protection Job

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `vms` | `Array/CSVirtualMachine` |  |
| `pJob` | `CSProtectionJob` |  |

**Returns:** `CSProtectionJob`

---

#### `addTagsToProtectionJob`
Add VMTags to Protection Job

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `pJob` | `CSProtectionJob` |  |
| `nodeObj` | `Array/CSNode` |  |

**Returns:** `CSProtectionJob`

---

#### `addSQLDbToProtectionJob`
Add a SQL database to a protection job

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `job` | `CSProtectionJob` |  |
| `sqlHost` | `CSSourceRootNode` |  |
| `sqlDbs` | `Array/CSNode` |  |

**Returns:** `CSProtectionJob`

---

#### `createNewProtectionJob`
Create a new protection job with the input variables.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `jobInput` | `CSProtectionJob` |  |
| `tagNodes` | `Array/CSNode` |  |

**Returns:** `CSProtectionJob`

---

#### `patchProtectionJob`
Update a protection job object instance.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `pJob` | `CSProtectionJob` |  |

**Returns:** `CSProtectionJob`

---

#### `deleteProtectionJob`
Delete a protection job.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `jobId` | `Integer` |  |
| `deleteSnapshots` | `Boolean` |  |

**Returns:** `boolean`

---

#### `runProtectionJobForSources`
Run the Protection Job for given sources.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `job` | `CSProtectionJob` |  |
| `runType` | `String` |  |
| `vms` | `Array/CSVirtualMachine` |  |

**Returns:** `boolean`

---

#### `runProtectionJobForSQLSources`
Run the Protection job for the SQL sources.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `job` | `CSProtectionJob` |  |
| `runType` | `String` |  |
| `runNowList` | `Array/CSRunNowParameter` |  |

**Returns:** `boolean`

---

#### `runProtectionJobForOracleDatabases`
Run the Protection job for the oracle databases.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `job` | `CSProtectionJob` |  |
| `runType` | `String` |  |
| `runNowList` | `Array/CSRunNowParameter` |  |

**Returns:** `boolean`

---

#### `removeVMFromProtectionJob`
Removes Virtual Machine from the Protection Job

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `vm` | `CSVirtualMachine` |  |
| `pJob` | `CSProtectionJob` |  |

**Returns:** `CSProtectionJob`

---

#### `removeTagsFromProtectionJob`
Remove VMTags from Protection Job

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `pJob` | `CSProtectionJob` |  |
| `nodeObj` | `Array/CSNode` |  |

**Returns:** `CSProtectionJob`

---

#### `updateSourceForProtectionJob`
Update source for a given protection job.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `sourceIds` | `Array/Long` |  |
| `pJob` | `CSProtectionJob` |  |

**Returns:** `CSProtectionJob`

---

#### `addPhyMachineToFileBasedProtectionJob`
Add a physical server to file based protection job.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `machine` | `CSPhysicalMachine` |  |
| `paths` | `Array/CSFilePaths` |  |
| `pJob` | `CSProtectionJob` |  |

**Returns:** `CSProtectionJob`

---

#### `addSQLDBIdsToProtectionJob`
Add SQL databases identified by its ID to a job.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `job` | `CSProtectionJob` |  |
| `sqlHost` | `CSSourceRootNode` |  |
| `sqlDbIds` | `Array/String` |  |

**Returns:** `CSProtectionJob`

---

#### `removeSQLDbFromProtectionJob`
Remove a SQL instance from protection job

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `job` | `CSProtectionJob` |  |
| `sqlHost` | `CSSourceRootNode` |  |
| `sqlDb` | `CSNode` |  |

**Returns:** `CSProtectionJob`

---

#### `getProtectionJobsProtectingVM`
Returns list of all protection jobs protecting a given VM.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `vm` | `CSVirtualMachine` |  |
| `includeLastRunAndStats` | `Boolean` |  |

**Returns:** `Array/CSProtectionJob`

---

#### `fetchProtectionSummaryForVM`
Fetch the Protection Job Summary for the VM.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `vm` | `CSVirtualMachine` |  |

**Returns:** `Array/CSProtectionJobSummary`

---

#### `getAllVirtualMachinesFromProtectionJob`
Returns All Virtual Machines from the Protection Job

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `pJob` | `CSProtectionJob` |  |

**Returns:** `Array/CSVirtualMachine`

---

## CSProtectionJobNameResource

**Description:** Provides basic operations for Root Resource.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `jobUid` | Job UId | `CSJobUid` | No |
| `parentSourceId` | Parent Id | `Long` | No |
| `objectId` | Object Id | `Long` | No |
| `displayName` | Object name | `String` | No |
| `id` | Job Id | `String` | No |

### Methods

#### `CSProtectionJobNameResource`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `String` |  |
| `id` | `String` |  |
| `objectId` | `Long` |  |

**Returns:** `void`

---

#### `setInternalID`


**Returns:** `void`

---

## CSProtectionJobSummary

**Description:** Provides POJO for Protection Job Summary.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `jobName` |  | `String` | No |
| `clusterId` |  | `Long` | No |
| `clusterIncarnationId` |  | `Long` | No |
| `policyId` |  | `String` | No |
| `isRpoJob` |  | `Boolean` | No |
| `jobId` |  | `Long` | No |
| `lastProtectionJobRunStatus` |  | `String` | No |

## CSProtectionPolicy

**Description:** Provides POJO for protection policies.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `displayName` | Name | `String` | No |
| `daysToKeep` | DaysToKeep | `Integer` | No |
| `retries` | Retries | `Integer` | No |
| `retryIntervalMins` | RetryIntervalMins | `Integer` | No |
| `snapshotReplicationCopyPolicies` |  | `Array/CSSnapshotReplicationCopyPolicies` | No |
| `snapshotArchivalCopyPolicies` |  | `Array/com.cohesity.plugin.model.SnapshotArchivalCopyPolicies` | No |
| `incrementalSchedulingPolicy` | IncrementalSchedulingPolicy | `com.cohesity.plugin.model.IncrementalSchedulingPolicy` | No |
| `name` | Name of the policy | `String` | No |
| `id` | Id | `String` | No |

## CSProtectionPolicyManager

**Description:** Provides basic operations on Protection Policy.

### Methods

#### `getProtectionPolicies`
Get list of protection policies

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |

**Returns:** `Array/CSProtectionPolicy`

---

#### `getProtectionPolicyById`
Get a protection policy by its ID.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `id` | `String` |  |

**Returns:** `CSProtectionPolicy`

---

## CSProtectionRun

**Description:** Provides POJO for Protection Run.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `jobName` |  | `String` | No |
| `jobUid` |  | `CSJobUid` | No |
| `copyRun` |  | `Array/CSCopyRun` | No |
| `viewBoxId` |  | `Long` | No |
| `backupRun` |  | `com.cohesity.plugin.model.BackupRun` | No |
| `jobId` |  | `Long` | No |

## CSProtectionSource

**Description:** Provides POJO for Protection Source objects.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `environment` |  | `String` | No |
| `parentId` |  | `Long` | No |
| `name` |  | `String` | No |
| `id` |  | `Long` | No |

## CSProtectionSourceManager

**Description:** Provides basic operations for Protection Source.

### Methods

#### `getAllSourceNodes`
Return all the registration sources node object.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `environments` | `Array/String` |  |

**Returns:** `Array/CSSourceRootNode`

---

#### `getProtectedNodes`
Get all the protected nodes in Cohesity cluster.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `environment` | `String` |  |
| `sourceId` | `Long` |  |

**Returns:** `Array/CSProtectedNode`

---

#### `getAAGHostsAndDatabases`
Get AAG Hosts

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `sourceId` | `Long` |  |

**Returns:** `Array/CSAAGNodesAndDatabases`

---

#### `getAllVirtualMachines`
Returns all the virtual machines in a cluster filtered by vcenterId and protection status.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `vCenterId` | `Long` |  |
| `getProtected` | `Boolean` |  |

**Returns:** `Array/CSVirtualMachine`

---

#### `getVirtualMachineByUUID`
Get CSVirtualMachine instance by UUID.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `vmName` | `String` |  |
| `uuid` | `String` |  |
| `getProtected` | `Boolean` |  |
| `vCenterId` | `Long` |  |
| `refreshProtectionSourceIfRequired` | `Boolean` |  |

**Returns:** `CSVirtualMachine`

---

#### `getVirtualMachinesByUUID`
Returns list of virtual machines identified by its UUID.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `uuids` | `Array/String` |  |
| `getProtected` | `Boolean` |  |
| `vCenterId` | `Long` |  |

**Returns:** `Array/CSVirtualMachine`

---

#### `getPhysicalMachineById`
Get physical machine instance by its id.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `id` | `String` |  |

**Returns:** `CSPhysicalMachine`

---

#### `refreshProtectionSources`
Refresh all protection sources.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |

**Returns:** `void`

---

#### `refreshProtectionSource`
Refresh a protection source.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `protectionSourceId` | `Long` |  |

**Returns:** `boolean`

---

#### `getClusterNetwork`
Get the available networks for the cluster

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `protectionSourceId` | `String` |  |
| `dataCenterId` | `String` |  |
| `clusterId` | `String` |  |

**Returns:** `Array/CSNetworkResource`

---

#### `getViewNames`
Get available Cohesity Views

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |

**Returns:** `Array/String`

---

#### `getSnapshotsForInstance`
Get snapshots for a given object instance.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `objectName` | `String` |  |
| `objectId` | `Long` |  |
| `protectionJobId` | `String` |  |

**Returns:** `Array/CSSnapshotVersion`

---

#### `getArchivalData`
Get agetVirtualDisksrchival data for a given snapshot

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `snapShotVersion` | `CSSnapshotVersion` |  |

**Returns:** `CSArchivalTarget`

---

#### `getVCenterNamesAndIDs`
method to get vCenter Names and IDs

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |

**Returns:** `Array/CSVCenterResource`

---

#### `cloneVirtualMachine`
Clones a VM of a given connection

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `cohesityConnection` | `CSCohesityConnection` |  |
| `cloneTaskRequest` | `CSCloneTaskRequest` |  |

**Returns:** `com.cohesity.plugin.model.RestoreTask`

---

#### `searchVMRestoreObject`
Search VM Restore Objects

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `query` | `String` |  |
| `sourceIds` | `Array/String` |  |
| `environments` | `Array/String` |  |
| `ownerEntityId` | `Long` |  |

**Returns:** `Array/CSObjectResource`

---

#### `restoreFilesOrFolders`
Restores a File of a given connection

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `cohesityConnection` | `CSCohesityConnection` |  |
| `restoreFileRequest` | `CSRestoreFileRequest` |  |

**Returns:** `com.cohesity.plugin.model.RestoreTask`

---

#### `restoreVirtualMachine`
Restores a VM of a given connection

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `cohesityConnection` | `CSCohesityConnection` |  |
| `restoreTaskRequest` | `CSRestoreTaskRequest` |  |

**Returns:** `com.cohesity.plugin.model.RestoreTask`

---

#### `sendMailNotification`
send a notification mail to user

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `jobStatus` | `String` |  |
| `emailConfig` | `CSEmailConfiguration` |  |
| `recipients` | `String` |  |
| `content` | `String` |  |
| `vmName` | `String` |  |
| `filesOrFoldersType` | `String` |  |
| `snapshot` | `String` |  |
| `userName` | `String` |  |
| `filesOrFoldersName` | `String` |  |
| `recoverToLocation` | `String` |  |
| `subject` | `String` |  |
| `error` | `String` |  |

**Returns:** `com.cohesity.plugin.model.RestoreError`

---

#### `watchRestoreStatus`
Gets status of a restore job

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `cohesityConnection` | `CSCohesityConnection` |  |
| `restoreJobId` | `int` |  |

**Returns:** `String`

---

#### `registerProtectionSource`
Register a new protection source.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `protectionSourceParams` | `CSProtectionSourceParameter` |  |

**Returns:** `CSSourceRootNode`

---

#### `upgradeAgents`
Upgrade cohesity agents.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `agentIds` | `Array/String` |  |

**Returns:** `void`

---

#### `registerUDASource`
Register UDA Source

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `params` | `CSUDASourceRegistrationParams` |  |

**Returns:** `void`

---

#### `getServerTimezone`
Returns the current server timezone.

**Returns:** `String`

---

#### `recoverVirtualDisk`
Recover Virtual Disks in cohesity.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `request` | `CSRecoverDiskRequest` |  |

**Returns:** `Long`

---

#### `getVirtualDisks`
Fetch all the virtual disks.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `clusterId` | `String` |  |
| `clusterIncarnationId` | `String` |  |
| `jobId` | `Long` |  |
| `jobRunId` | `Long` |  |
| `sourceId` | `Long` |  |
| `startTimeUsecs` | `String` |  |

**Returns:** `Array/CSVirtualDiskInformation`

---

#### `deleteProtectionRun`
Deletes a protection run instance.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `protectionJobId` | `Integer` |  |
| `startedTimeUsecs` | `Long` |  |
| `deleteArchivalSnapshots` | `Boolean` |  |

**Returns:** `void`

---

#### `getAllTimezones`
Fetch all the timezones.

**Returns:** `Array/String`

---

#### `getDatastores`
Return all the datastores.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `vCenterId` | `Integer` |  |
| `resourcePoolId` | `Integer` |  |

**Returns:** `Array/CSDatastore`

---

#### `getResourcePools`
Return all the resource pools in a vCenter.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `vCenterId` | `Integer` |  |

**Returns:** `Array/CSResourcePool`

---

#### `getNetworkEntities`
Return all the port groups in a vcenter & rp.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `vCenterId` | `Integer` |  |
| `resourcePoolId` | `Integer` |  |

**Returns:** `Array/CSNetworkEntities`

---

#### `getCurrentTime`
Get current time in a timezone.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `timezone` | `String` |  |

**Returns:** `String`

---

#### `getProtectionRuns`
Get recent protection runs.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `startedTimeUsecs` | `Long` |  |
| `jobId` | `Integer` |  |
| `sourceId` | `Integer` |  |
| `startTimeUsecs` | `Long` |  |
| `endTimeUsecs` | `Long` |  |
| `runTypes` | `Array/String` |  |
| `numRuns` | `Long` |  |

**Returns:** `Array/CSProtectionRun`

---

#### `getBifrostConnections`
Fetch all the Bifrost connection information.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `fetchDefaults` | `Boolean` |  |

**Returns:** `Array/CSBifrostConnection`

---

#### `getAllProtectionSourcePhysicalMachines`
Get all registered physical machines in a given cluster.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |

**Returns:** `Array/CSPhysicalMachine`

---

#### `getAllProtectionSourceRootNodes`
Get all the protection source root nodes.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |

**Returns:** `Array/CSRootNode`

---

#### `getSnapshotForSelectedFile`
Get the snapshots from the selected files and folders

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `filesOrFoldersName` | `String` |  |
| `clusterIncarnationId` | `Long` |  |
| `clusterId` | `Long` |  |
| `jobId` | `Integer` |  |
| `sourceId` | `Integer` |  |

**Returns:** `Array/CSSnapshotVersion`

---

#### `getRecoverySourcesTypeForSnapshot`
Returns the types of recovery targets supported for a snapshot.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `snapShotVersion` | `CSSnapshotVersion` |  |

**Returns:** `Array/String`

---

#### `getDatacenterByVCenterName`
method to get Datacenters for a specific vCenter protection source

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `protectionSourceId` | `int` |  |

**Returns:** `Array/CSDataCenterResource`

---

#### `getAllComputeClustersInCohesityCluster`
Get all VM-Clusters registered as source in Cohesity

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |

**Returns:** `Array/CSClusterComputeResource`

---

#### `getClustersByDatacenterVCenter`
method to get Clusters for a specific dataCenter and vCenter protection source

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `protectionSourceId` | `int` |  |
| `dataCenterId` | `String` |  |

**Returns:** `Array/CSClusterResource`

---

#### `getResourcePoolsForCluster`
method to get resource pools for clusters

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `protectionSourceId` | `int` |  |
| `dataCenterId` | `String` |  |
| `clusterId` | `String` |  |

**Returns:** `Array/CSResourcePoolResource`

---

#### `filesOrFoldersSearchFindByName`
Get files or folders by name

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `cohesityConnection` | `CSCohesityConnection` |  |
| `filesOrFoldersName` | `String` |  |
| `protectionJobId` | `String` |  |
| `sourceId` | `Integer` |  |
| `folderOnly` | `String` |  |

**Returns:** `Array/CSFilesOrFoldersResource`

---

#### `restoreVirtualMachineToAlternateLocation`
Restores a VM to an alternate location.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `cohesityConnection` | `CSCohesityConnection` |  |
| `restoreTaskRequest` | `CSRestoreTaskRequest` |  |
| `vCenterResource` | `CSVCenterResource` |  |
| `resourcePool` | `CSResourcePool` |  |
| `datastore` | `CSDatastore` |  |
| `networkEntity` | `CSNetworkEntities` |  |

**Returns:** `Long`

---

#### `watchRestoreStatusForFilesorFolders`
Gets status of a restore job for files or folders

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `cohesityConnection` | `CSCohesityConnection` |  |
| `restoreJobId` | `int` |  |

**Returns:** `com.cohesity.plugin.model.RestoreTask`

---

#### `unRegisterProtectionSource`
Remove/unregister a protection source.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `sourceId` | `int` |  |

**Returns:** `boolean`

---

## CSProtectionSourceParameter

**Description:** Provides POJO for Protection Source Registration Parameters.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `connectionId` | Specifies the Bifrost realm to be associated with the source root. | `Long` | No |
| `hostType` | Protection source hostType. | `String` | No |
| `vmwareType` | Protection source vmwareType. | `String` | No |
| `forceRegister` | Force Register | `Boolean` | No |
| `environment` | Protection source environment. | `String` | No |
| `endpoint` | Protection source endpoint. | `String` | No |
| `physicalParams` |  | `CSPhysicalParams` | No |
| `userName` | Protection source userName. | `String` | No |
| `password` | Protection source password. | `String` | No |

## CSRecoverDatabaseParams

**Description:** Provides POJO for Recover Database Params.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `databaseName` |  | `String` | No |
| `oracleBaseFolder` |  | `String` | No |
| `oracleHomeFolder` |  | `String` | No |
| `dbFilesDestination` |  | `String` | No |
| `dbConfigFilePath` |  | `String` | No |
| `enableArchiveLogMode` |  | `Boolean` | No |
| `bctFilePath` |  | `String` | No |
| `numTempfiles` |  | `Long` | No |
| `redoLogConfig` |  | `CSRedoLogConfig` | No |
| `noFilenameCheck` |  | `Boolean` | No |
| `recoveryMode` |  | `Boolean` | No |

## CSRecoverDiskRequest

**Description:** Provides POJO for RecoverDiskRequests.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `objects` |  | `Array/CSRecoveryObject` | No |
| `recoverVirtualDiskParams` |  | `CSRecoverVirtualDiskParams` | No |
| `continueRestoreOnError` |  | `Boolean` | No |
| `name` |  | `String` | No |

## CSRecoverOracleDatabaseSnapshotParams

**Description:** Provides POJO for Recover Oracle Database Snapshot Params.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `snapshotId` |  | `String` | No |
| `pointInTimeUsecs` |  | `Long` | No |
| `protectionGroupName` |  | `String` | No |
| `protectionGroupId` |  | `String` | No |
| `snapshotCreationTimeUsecs` |  | `Long` | No |

## CSRecoverOracleDbParams

**Description:** Provides POJO for Recover Oracle Database Params.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `targetEnvironment` |  | `String` | No |
| `oracleTargetParams` |  | `CSOracleTargetParams` | No |
| `vlanConfig` |  | `String` | No |

## CSRecoverOracleEnvironmentParams

**Description:** Provides POJO for Recover Oracle Environment Params.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `recoveryAction` |  | `String` | No |
| `recoverAppParams` |  | `CSRecoverOracleDbParams` | No |
| `objects` |  | `Array/CSRecoverOracleDatabaseSnapshotParams` | No |

### Methods

#### `CSRecoverOracleEnvironmentParams`


**Returns:** `void`

---

#### `addObjects`
Add a list of objects to be recovered.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `object` | `CSRecoverOracleDatabaseSnapshotParams` |  |

**Returns:** `void`

---

## CSRecoverRequestParamsV2

**Description:** Provides POJO for RecoverRequestParamsV2

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `oracleParams` |  | `CSRecoverOracleEnvironmentParams` | No |
| `snapshotEnvironment` |  | `String` | No |
| `name` |  | `String` | No |

## CSRecoverSQLApplicationRequest

**Description:** Provides POJO for RecoverApplicationRequest

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `restoreAppParams` |  | `CSRestoreAppParams` | No |
| `action` |  | `String` | No |
| `name` |  | `String` | No |

## CSRecoverSQLDatabaseRequest

**Description:** Provides POJO for RecoverSQLDatabaseRequest

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `applicationEnvironment` |  | `String` | No |
| `applicationRestoreObjects` |  | `Array/CSApplicationRestoreObjects` | No |
| `hostingProtectionSource` |  | `CSHostingProtectionSource` | No |
| `name` |  | `String` | No |

### Methods

#### `CSRecoverSQLDatabaseRequest`


**Returns:** `void`

---

#### `addApplicationRestoreObjects`
Add an instance of application restore object.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `applicationRestoreObjects` | `CSApplicationRestoreObjects` |  |

**Returns:** `void`

---

## CSRecoverVirtualDiskParams

**Description:** Provides POJO for RecoverVirtualDiskParams.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `targetEntity` |  | `CSTargetEntity` | No |
| `virtualDiskMappings` |  | `Array/CSVirtualDiskMapping` | No |
| `powerOffVmBeforeRecovery` |  | `Boolean` | No |
| `powerOnVmAfterRecovery` |  | `Boolean` | No |

## CSRecoveryObject

**Description:** Provides POJO for RecoveryObject.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `archivalTarget` |  | `CSArchivalTarget` | No |
| `jobUid` |  | `CSRestoreRequestJobUid` | No |
| `jobInstanceId` |  | `Long` | No |
| `attemptNum` |  | `Long` | No |
| `startTimeUsecs` |  | `Long` | No |
| `entity` |  | `CSEntity` | No |
| `jobId` |  | `Long` | No |

## CSRecoveryObject

**Description:** Provides POJO for RecoveryObject.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `archivalTarget` |  | `CSArchivalTarget` | No |
| `jobUid` |  | `CSRestoreRequestJobUid` | No |
| `jobInstanceId` |  | `Long` | No |
| `attemptNum` |  | `Long` | No |
| `startTimeUsecs` |  | `Long` | No |
| `entity` |  | `CSEntity` | No |
| `jobId` |  | `Long` | No |

## CSReplicaInfoList

**Description:** Provides POJO for ReplicaInfoList

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `expiryTimeUsecs` |  | `Long` | No |
| `snapshotTargetSettings` |  | `CSSnapshotTargetSettings` | No |

### Methods

#### `getExpiryTimeAsString`
Returns the expiry time as string.

**Returns:** `String`

---

## CSReplicationTarget

**Description:** Provides POJO for ReplicationTarget.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `clusterId` |  | `Long` | No |
| `clusterName` |  | `String` | No |

## CSReport

**Description:** Provides POJO for Report objects.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `outputFormat` | outputFormat | `String` | No |
| `type` | type | `String` | No |
| `parameters` | parameters | `CSReportParameters` | No |

## CSReportJobParameter

**Description:** Provides POJO for ReportJobParameter objects.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `receiverEmails` | receiverEmails | `Array/String` | No |
| `reports` | reports | `Array/CSReport` | No |

## CSReportManager

**Description:** Provides basic operations for ReportManager

### Methods

#### `generateReport`
Generate a report request.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `reportRequest` | `CSReportRequest` |  |
| `sourceIds` | `Array/String` |  |

**Returns:** `void`

---

## CSReportParameters

**Description:** Provides POJO for ReportParameters objects.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `lastNDays` | lastNDays | `Integer` | No |
| `registeredSourceIds` | registeredSourceIds | `Array/Integer` | No |
| `runStatus` | runStatus | `Array/String` | No |
| `allUnderHierarchy` | allUnderHierarchy | `boolean` | No |
| `timezone` | timezone | `String` | No |
| `jobId` | jobId | `Long` | No |

## CSReportRequest

**Description:** Provides POJO for ReportRequest objects.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `scheduleJobParameters` | scheduleJobParameters | `CSScheduleJobParameters` | No |
| `enableRecurringEmail` | enableRecurringEmail | `boolean` | No |
| `type` | type | `String` | No |

## CSResourceInfo

**Description:** Provides POJO for ResourceInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `endpoints` |  | `Array/CSEndpoint` | No |
| `id` |  | `String` | No |
| `type` |  | `String` | No |

## CSResourcePool

**Description:** Provides POJO for ResourcePool

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `parentId` | Parent Id | `Long` | No |
| `clusterName` | Cluster Name | `String` | No |
| `name` | Resource Pool Name | `String` | No |
| `id` | Id | `Long` | No |
| `type` | Type | `Long` | No |
| `displayName` | Display Name | `String` | Yes |

## CSResourcePoolResource

**Description:** Provides basic operations for Root Resource.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `displayName` | Object name | `String` | No |
| `id` | Object Id | `String` | No |

## CSRestoreAppObjectVec

**Description:** Provides POJO for RestoreAppObjectVec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `appEntity` |  | `CSAppEntity` | No |
| `restoreParams` |  | `CSRestoreParams` | No |

## CSRestoreAppParams

**Description:** Provides POJO for RestoreAppParams

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `ownerRestoreInfo` |  | `CSOwnerRestoreInfo` | No |
| `restoreAppObjectVec` |  | `Array/CSRestoreAppObjectVec` | No |
| `type` |  | `Long` | No |

### Methods

#### `CSRestoreAppParams`


**Returns:** `void`

---

#### `addRestoreAppObjectVec`
Add RestoreAppObjectVec

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vector` | `CSRestoreAppObjectVec` |  |

**Returns:** `void`

---

## CSRestoreFileRequest

**Description:** Provides POJO for RestoreFileRequest objects.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `newBaseDirectory` | Base Directory | `String` | No |
| `filenames` | filenames | `Array/String` | No |
| `targetHostType` | targetHostType | `String` | No |
| `targetParentSourceId` | Target Parent Source Id | `Long` | No |
| `targetSourceId` | Target Source Id | `Long` | No |
| `overwrite` | overwrite | `Boolean` | No |
| `sourceObjectInfo` | Restore Object | `CSRestoreObject` | No |
| `fileRecoveryMethod` | Recovery Method | `String` | No |
| `username` | username | `String` | No |
| `password` | password | `String` | No |
| `name` | Name | `String` | No |

## CSRestoreObject

**Description:** Provides POJO for RestoreObject Properties.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `sourceName` | sourceName | `String` | No |
| `environment` | Environment | `String` | No |
| `jobRunId` | Job Run ID | `Long` | No |
| `startedTimeUsecs` | startedTimeUsecs | `Long` | No |
| `archivalTarget` | archivalTarget | `CSArchivalTarget` | No |
| `jobUid` | Job UID | `CSJobUid` | No |
| `protectionSourceId` | protectionSourceId | `Long` | No |
| `jobId` | Job ID | `Long` | No |

## CSRestoreParams

**Description:** Provides POJO for RestoreParams

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `sqlRestoreParams` |  | `CSSqlRestoreParams` | No |

## CSRestoreRequestJobUid

**Description:** Provides POJO for JobUid objects in Restore Request.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `clusterId` | Cluster Id | `Long` | No |
| `clusterIncarnationId` | Cluster Incarnation Id | `Long` | No |
| `objectId` | objectId | `Long` | No |

## CSRestoreTaskRequest

**Description:** Provides POJO for RestoreTaskRequest objects.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `jobRunId` | Job Run Id | `Long` | No |
| `startedTimeUsecs` | Started Time Usecs | `Long` | No |
| `poweredOn` | Powered On | `Boolean` | No |
| `protectionSourceId` | Protection Source Id | `Long` | No |
| `prefix` | Prefix | `String` | No |
| `name` | Name | `String` | No |
| `suffix` | Suffix | `String` | No |

## CSRootNode

**Description:** Provides POJO for RootNode

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `protectionSource` | Protection Source | `CSSourceRootNode` | No |
| `displayName` | Name of the protection source | `String` | No |

## CSRunNowParameter

**Description:** Provides POJO for RunNowParameter

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `sourceId` |  | `Long` | No |
| `databaseIds` |  | `Array/Long` | No |

### Methods

#### `CSRunNowParameter`


**Returns:** `void`

---

#### `addDatabaseId`
Add dbIds to the list.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `dbId` | `Long` |  |

**Returns:** `void`

---

## CSScheduleJobParameters

**Description:** Provides POJO for ScheduleJobParameters objects.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `reportJobParameter` | reportJobParameter | `CSReportJobParameter` | No |

## CSSla

**Description:** Provides POJO for Sla.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `backupRunType` |  | `String` | No |
| `slaMinutes` |  | `Long` | No |

## CSSnapshotReplicationCopyPolicies

**Description:** Provides POJO for SnapshotReplicationCopyPolicies.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `periodicity` |  | `String` | No |
| `daysToKeep` |  | `Long` | No |
| `copyPartial` |  | `Boolean` | No |
| `multiplier` |  | `Long` | No |
| `id` |  | `String` | No |
| `target` |  | `CSReplicationTarget` | No |

## CSSnapshotResource

**Description:** Provides basic operations for Root Resource.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `displayName` | Object name | `String` | No |
| `id` | Object Id | `String` | No |

## CSSnapshotTargetSettings

**Description:** Provides POJO for SnapshotTargetSettings

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `archivalTarget` |  | `CSArchivalTarget` | No |
| `type` |  | `String` | No |

## CSSnapshotVersion

**Description:** Provides POJO for Snapshot information.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `jobRunId` | jobRunId | `Long` | No |
| `startedTimeUsecs` | startedTimeUsecs | `Long` | No |
| `logicalSizeBytes` | logicalSizeBytes | `Long` | No |
| `replicaInfoList` |  | `Array/CSReplicaInfoList` | No |
| `isFullBackup` | isFullBackup | `Boolean` | No |
| `displayName` | snapshot time | `String` | No |

### Methods

#### `CSSnapshotVersion`


**Returns:** `void`

---

#### `getHumanReadableByteCountBin`
Returns the Logical size in readable format.

**Returns:** `String`

---

## CSSourceBackupstatus

**Description:** Provides POJO for SourceBackupStatus.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `isFullBackup` |  | `Boolean` | No |
| `parentSourceId` |  | `Long` | No |
| `numRestarts` |  | `Long` | No |
| `slaViolated` |  | `Boolean` | No |
| `quiesced` |  | `Boolean` | No |
| `source` |  | `CSProtectionSource` | No |
| `status` |  | `String` | No |
| `stats` |  | `com.cohesity.plugin.model.Stats` | No |
| `error` |  | `String` | No |
| `progressMonitorTaskPath` |  | `Any` | No |

## CSSourceRootNode

**Description:** Provides POJO for RootNode objects.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `environment` | Source node environment | `String` | No |
| `oracleProtectionSource` | Source node oracleProtectionSource | `CSOracleProtectionSource` | No |
| `physicalProtectionSource` | Source node physicalProtectionSource | `CSPhysicalProtectionSource` | No |
| `vmWareProtectionSource` | Source node vmWareProtectionSource | `CSVmWareProtectionSource` | Yes |
| `displayName` | Source node name | `String` | No |
| `id` | ID | `Long` | No |

## CSSourceSpecialParameters

**Description:** Provides POJO for SourceSpecialParameters.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `sourceId` |  | `Long` | No |
| `sqlSpecialParameters` |  | `CSSQLSpecialParameters` | No |
| `oracleSpecialParameters` |  | `CSOracleSpecialParameters` | No |
| `physicalSpecialParameters` |  | `CSPhysicalSpecialParameters` | No |

## CSSQLError

**Description:** Provides POJO for SQLError

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `errorCode` |  | `String` | No |
| `message` |  | `String` | No |

## CSSQLManager

**Description:** Provides basic operations for MS-SQL workflows

### Methods

#### `registerSQLApplication`
Register a physical server as MSSQL application instance

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `physicalServerId` | `Long` |  |

**Returns:** `void`

---

#### `restoreSQLDatabase`
Recover a MSSQL application Database

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `requestParam` | `CSRecoverSQLDatabaseRequest` |  |

**Returns:** `Long`

---

#### `restoreSQL`
Recover a MSSQL application (DB/instance)

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `requestParam` | `CSRecoverSQLApplicationRequest` |  |

**Returns:** `Long`

---

#### `getAllSQLInstances`
Returns all the SQL instances in a SQL host

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `rootNodeId` | `Long` |  |

**Returns:** `Array/CSNode`

---

#### `getAllSQLDatabases`
Get all the SQL databases in a SQL instance.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `rootNodeId` | `Long` |  |
| `instanceId` | `Long` |  |

**Returns:** `Array/CSNode`

---

#### `getTopology`
Fetch the MSSQL topology for the input host.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `connectionIp` | `String` |  |

**Returns:** `CSTestConnectionResponse`

---

## CSSqlParameters

**Description:** Provides POJO for SqlParameters.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `aagPreference` |  | `String` | No |
| `backupSystemDatabases` |  | `Boolean` | No |
| `backupVolumesOnly` |  | `Boolean` | No |
| `backupType` |  | `String` | No |
| `numStreams` |  | `Long` | No |
| `isCopyOnlyFull` |  | `Boolean` | No |
| `userDatabasePreference` |  | `String` | No |
| `aagPreferenceFromSqlServer` |  | `Boolean` | No |
| `incrementalSnapshotUponRestart` |  | `Boolean` | No |

## CSSQLProtectionSource

**Description:** Provides POJO for SQLProtectionSource object.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `databaseName` |  | `String` | No |
| `dbAagEntityId` |  | `Long` | No |
| `dbAagName` |  | `String` | No |
| `recoveryModel` |  | `String` | No |
| `createdTimestamp` |  | `String` | No |
| `sqlServerDbState` |  | `String` | No |
| `dbFileGroups` |  | `Array/String` | No |
| `dbOwnerUsername` |  | `String` | No |
| `dbCompatibilityLevel` |  | `Long` | No |
| `isAvailableForVssBackup` |  | `Boolean` | No |
| `ownerId` |  | `Long` | No |
| `name` |  | `String` | No |
| `id` |  | `com.cohesity.plugin.model.SQLId` | No |
| `type` |  | `String` | No |

## CSSqlRestoreParameters

**Description:** Provides POJO for SqlRestoreParameters

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `captureTailLogs` |  | `Boolean` | No |
| `keepOffline` |  | `Boolean` | No |
| `newDatabaseName` |  | `String` | No |
| `newInstanceName` |  | `String` | No |
| `restoreTimeSecs` |  | `Long` | No |
| `keepCdc` |  | `Boolean` | No |
| `overwritePolicy` |  | `String` | No |
| `targetDataFilesDirectory` |  | `String` | No |
| `targetLogFilesDirectory` |  | `String` | No |

## CSSqlRestoreParams

**Description:** Provides POJO for SqlRestoreParams

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `isMultiStageRestore` |  | `Boolean` | No |
| `dataFileDestination` |  | `String` | No |
| `logFileDestination` |  | `String` | No |
| `withNoRecovery` |  | `Boolean` | No |
| `captureTailLogs` |  | `Boolean` | No |
| `newDatabaseName` |  | `String` | No |
| `keepCdc` |  | `Boolean` | No |
| `secondaryDataFileDestinationVec` |  | `Array/Any` | No |
| `alternateLocationParams` |  | `CSAlternateLocationParams` | No |

## CSSQLServer

**Description:** Provides POJO for SQLServer

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `agentInfo` |  | `CSAgentInfo` | No |
| `isPrimary` |  | `Boolean` | No |
| `instances` |  | `Array/CSInstance` | No |
| `resourceInfo` |  | `CSResourceInfo` | No |
| `isSelectedByDefault` |  | `Boolean` | No |
| `error` |  | `CSSQLError` | No |
| `id` |  | `String` | No |

## CSSQLSpecialParameters

**Description:** Provides POJO for SQLSpecialParameters.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `applicationEntityIds` |  | `Array/Long` | No |

### Methods

#### `CSSQLSpecialParameters`


**Returns:** `void`

---

#### `addApplicationEntityId`
Add an Application entity id.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `id` | `Long` |  |

**Returns:** `void`

---

#### `removeApplicationEntityId`
Remove an application entity id.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `id` | `Long` |  |

**Returns:** `void`

---

## CSSrcDisk

**Description:** Provides POJO for SrcDisk.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `diskId` |  | `String` | No |
| `unitNumber` |  | `Long` | No |
| `controllerBusNumber` |  | `Long` | No |
| `controllerType` |  | `String` | No |

## CSStartTime

**Description:** Provides POJO for StartTime.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `timezone` | Timezone | `String` | No |
| `hour` | Hour | `Long` | No |
| `minute` | Minute | `Long` | No |

## CSStorageDomainManager

**Description:** Provides basic operations on storage domains.

### Methods

#### `getAllViewBoxes`
Get all the viewBoxes/storeDomains in the cluster.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |

**Returns:** `Array/_CSViewBox`

---

#### `getViewBoxById`
Get the view box entity by its ID

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `id` | `String` |  |

**Returns:** `_CSViewBox`

---

#### `createStorageDomain`
Create a storage domain.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `requestParam` | `CSViewBoxCreate` |  |

**Returns:** `_CSViewBox`

---

#### `getAllPartitions`
Get all the cluster partitions.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |

**Returns:** `Array/_CSClusterPartition`

---

## CSStoragePolicy

**Description:** Provides POJO for StoragePolicy

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `deduplicationEnabled` | Is deduplicationEnabled? | `Boolean` | No |
| `inlineDeduplicate` | Is inlineDeduplicate enabled? | `Boolean` | No |
| `compressionPolicy` | compressionPolicy | `String` | No |
| `inlineCompress` | inlineCompress | `Boolean` | No |
| `encryptionPolicy` | encryptionPolicy | `String` | No |
| `numFailuresTolerated` | numFailuresTolerated | `Integer` | No |
| `erasureCodingInfo` | erasureCodingInfo | `com.cohesity.plugin.model.ErasureCodingInfo` | No |
| `numNodeFailuresTolerated` | numNodeFailuresTolerated | `Integer` | No |

## CSTagManager

**Description:** Provides basic operations for VMware Tags

### Methods

#### `getAllProtectionTagsForSource`
Returns all kTag type node objects.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `parentSourceId` | `Integer` |  |

**Returns:** `Array/CSNode`

---

## CSTargetEntity

**Description:** Provides POJO for TargetEntity.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `parentId` |  | `Long` | No |
| `id` |  | `Long` | No |
| `type` |  | `Long` | No |
| `displayName` |  | `String` | No |

## CSTargetLocation

**Description:** Provides POJO for TargetLocation.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `id` |  | `Long` | No |

## CSTenant

**Description:** Provides Object for Tenants.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `viewBoxIds` | Tenant viewBoxIds | `Array/Long` | No |
| `policyIds` | Tenant policyIds | `Array/String` | No |
| `entityIds` | Tenant Entities | `Array/Long` | No |
| `createdTimeMsecs` | createdTimeMsecs | `Long` | No |
| `lastUpdatedTimeMsecs` | lastUpdatedTimeMsecs | `Long` | No |
| `tenantId` | Tenant Id | `String` | No |
| `description` | Tenant Description | `String` | No |
| `displayName` | Tenant Name | `String` | No |

## CSTenantCreateParameters

**Description:** Provides Object for Tenant creation.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `orgSuffix` | Org Suffix | `String` | No |
| `description` | Description | `String` | No |
| `name` | Tenant Name | `String` | No |

## CSTenantManager

**Description:** Provides basic operations for Tenant Management

### Methods

#### `getAllTenants`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `ids` | `Array/String` |  |
| `properties` | `Array/String` |  |
| `status` | `Array/String` |  |

**Returns:** `Array/CSTenant`

---

#### `createTenant`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `parameters` | `CSTenantCreateParameters` |  |

**Returns:** `CSTenant`

---

#### `updateTenantUser`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `tenantId` | `String` |  |
| `sids` | `Array/String` |  |

**Returns:** `void`

---

#### `updateTenantViewBoxId`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `tenantId` | `String` |  |
| `viewBoxIds` | `Array/String` |  |

**Returns:** `void`

---

#### `deleteTenant`
Delete a tenant in Cohesity.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `tenantId` | `String` |  |

**Returns:** `void`

---

#### `updateTenantSource`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `tenantId` | `String` |  |
| `sSourceIds` | `Array/String` |  |

**Returns:** `void`

---

#### `updateTenantProtectionPolicies`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `CSCohesityConnection` |  |
| `tenantId` | `String` |  |
| `policyIds` | `Array/String` |  |

**Returns:** `void`

---

## CSTenantMappingConfigManager

**Description:** Provides operations to manage tenant mapping config data.

### Methods

#### `getAllTenantMappings`
Return all the mapping meta information

**Returns:** `Array/CSTenantMappingConfiguration`

---

#### `getTenantMappingById`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `id` | `String` |  |

**Returns:** `CSTenantMappingConfiguration`

---

#### `deleteConfiguration`
Delete a tenant mapping configuration.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `config` | `CSTenantMappingConfiguration` |  |

**Returns:** `void`

---

#### `getAllMappingsForVRATenant`
For a given vRA Tenant return all the tenant mapping meta data.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vraTenantId` | `String` |  |

**Returns:** `Array/CSTenantMappingConfiguration`

---

#### `getAllMappingsForCSTenantAndConfigId`
For all a CSTenantId in a cluster, return the configs

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `csTenantId` | `String` |  |
| `clusterConfigMetaDataId` | `String` |  |

**Returns:** `Array/CSTenantMappingConfiguration`

---

#### `getAllMappingsForACluster`
For a given cohesity cluster, find all the tenant mappings.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `clusterConfigMetaDataId` | `String` |  |

**Returns:** `Array/CSTenantMappingConfiguration`

---

#### `getAllMappingsForVRATenantAndConfigId`
For a given vRA Tenant + cluster return all the tenant mapping meta data.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vraTenantId` | `String` |  |
| `clusterConfigMetaDataId` | `String` |  |

**Returns:** `Array/CSTenantMappingConfiguration`

---

#### `addTenantMappingConfiguration`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `config` | `CSTenantMappingConfiguration` |  |

**Returns:** `CSTenantMappingConfiguration`

---

## CSTenantMappingConfiguration

**Description:** Provides POJO for tenant configs

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `vraTenantId` | VRA Tenant Id | `String` | No |
| `tenantConnectionId` | Connection Id | `String` | No |
| `cohesityTenantId` | CS Org Id | `String` | No |
| `clusterConfigMetaDataId` | Cluster MetaData Id (ADMIN-CohesityConnection) Instance | `String` | No |
| `displayName` | Config Name | `String` | Yes |
| `id` | Config ID | `String` | No |
| `type` | Config Type | `String` | Yes |

## CSTestConnectionResponse

**Description:** Provides POJO for TestConnectionResponse.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `connectionId` |  | `Long` | No |
| `environment` |  | `String` | No |
| `mssqlConnectionResponseParams` |  | `CSMssqlConnectionResponseParams` | No |

## CSUdaParams

**Description:** Provides POJO for UdaParams

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `sourceType` |  | `String` | No |
| `osType` |  | `String` | No |
| `scriptDir` |  | `String` | No |
| `mountView` |  | `Boolean` | No |
| `viewParams` |  | `CSViewParams` | No |
| `credentials` |  | `CSCredentials` | No |
| `hosts` |  | `Array/String` | No |
| `sourceRegistrationArgs` |  | `String` | No |

## CSUdaParamsInfo

**Description:** Provides POJO for UdaParams.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `sourceId` |  | `Long` | No |
| `fullBackupArgs` |  | `String` | No |
| `incrBackupArgs` |  | `String` | No |
| `logBackupArgs` |  | `String` | No |
| `concurrency` |  | `Long` | No |
| `mounts` |  | `Long` | No |
| `objects` |  | `Array/CSUdaParamsObject` | No |

### Methods

#### `CSUdaParamsInfo`


**Returns:** `void`

---

#### `addUdaParamObject`
Add an instance of UDA source

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `obj` | `CSUdaParamsObject` |  |

**Returns:** `void`

---

## CSUdaParamsObject

**Description:** Provides POJO for Protection Group.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` |  | `String` | No |

## CSUDASourceRegistrationParams

**Description:** Provides POJO for UDASourceRegistrationParams

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `udaParams` |  | `CSUdaParams` | No |
| `environment` |  | `String` | No |

## CSUDASourceRegistrationResp

**Description:** Provides POJO for UDASourceRegistrationParams

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `udaParams` |  | `CSUdaParams` | No |
| `connectionId` |  | `Long` | No |
| `environment` |  | `String` | No |
| `sourceId` |  | `Long` | No |
| `id` |  | `Long` | No |

## CSUnprotectedSourcesFolder

**Description:** Virtual Folder Protection Job object.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `displayName` | Protection Job | `String` | Yes |

## CSVCenterResource

**Description:** Provides basic operations for Root Resource.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `displayEndpoint` | Object endpoint | `String` | No |
| `displayName` | Object name | `String` | No |
| `id` | Object Id | `String` | No |

## CSViewBox

**Description:** Provides POJO on ViewBox

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `clusterPartitionName` | clusterPartitionName | `String` | No |
| `storagePolicy` | storagePolicy | `CSStoragePolicy` | No |
| `clusterPartitionId` | clusterPartitionId | `Long` | No |
| `s3BucketsAllowed` | s3BucketsAllowed | `Boolean` | No |
| `adDomainName` | adDomainName | `String` | No |
| `ldapProviderId` | ldapProviderId | `Long` | No |
| `removalState` | removalState | `String` | No |
| `displayName` | Name | `String` | No |
| `id` | Id | `Long` | No |

## CSViewBoxCreate

**Description:** Provides POJO for StoreDomainCreate Req

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `storagePolicy` | storagePolicy | `CSStoragePolicy` | No |
| `clusterPartitionId` | Cluster Partition Id | `Long` | No |
| `name` | Storage Domain name | `String` | No |

## CSViewParams

**Description:** Provides POJO for ViewParams

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `mountDir` |  | `String` | No |

## CSVirtualDisk

**Description:** Provides POJO for VirtualDisks

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `unitNumber` |  | `Long` | No |
| `controllerType` |  | `String` | No |
| `displayName` |  | `String` | No |
| `busNumber` |  | `Long` | No |

### Methods

#### `CSVirtualDisk`


**Returns:** `void`

---

#### `setInternalId`
Set the internal id for presentation.

**Returns:** `void`

---

## CSVirtualDiskInformation

**Description:** Provides POJO for VirtualDiskInformation

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `diskId` |  | `String` | No |
| `unitNumber` |  | `Long` | No |
| `controllerType` |  | `String` | No |
| `filePath` |  | `String` | No |
| `mountPoints` |  | `Array/String` | No |
| `busNumber` |  | `Long` | No |
| `diskSizeInBytes` |  | `Long` | No |
| `diskLocation` |  | `CSDiskLocation` | No |
| `displayName` | File path name | `String` | Yes |

## CSVirtualDiskMapping

**Description:** Provides POJO for VirtualDiskMapping.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `srcDisk` |  | `CSSrcDisk` | No |
| `targetLocation` |  | `CSTargetLocation` | No |
| `diskToOverwrite` |  | `CSDiskToOverwrite` | No |

## CSVirtualMachine

**Description:** Provides POJO for Virtual Machines.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `environment` | Environment | `String` | No |
| `parentId` | Virtual Machine Parent ID | `int` | No |
| `vmWareProtectionSource` | VMWare Protection Source | `CSVmWareProtectionSource` | No |
| `displayName` | Virtual Machine Name | `String` | No |
| `id` | Virtual Machine ID | `int` | No |

## CSVirtualMachineManager

**Description:** Provides basic operations on Virtual Machine objects.

## CSVmWareProtectionSource

**Description:** Provides POJO for VmWareProtectionSource.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `hostType` |  | `String` | No |
| `virtualDisks` |  | `Array/CSVirtualDisk` | No |
| `connectionState` |  | `String` | No |
| `toolsRunningStatus` |  | `String` | No |
| `name` |  | `String` | No |
| `id` |  | `com.cohesity.plugin.model.Id` | No |
| `type` |  | `String` | No |

## CSVmwareSpecialParameters

**Description:** Provides POJO for VmwareSpecialParameters.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `applicationParameters` |  | `CSApplicationParameters` | No |
| `excludedDisks` |  | `Array/CSExcludedDisk` | No |
| `vmCredentials` |  | `com.cohesity.plugin.model.VmCredentials` | No |

### Methods

#### `addExcludedDisk`
Add excluded disk for a VM.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `disk` | `CSExcludedDisk` |  |

**Returns:** `void`

---

