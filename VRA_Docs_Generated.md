# VRA (Aria Automation) Reference

Generated Documentation

## VraBlockDevice

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `owner` | Email of the user that owns the entity. | `String` | No |
| `cloudAccountIdsExtension` |  | `String` | No |
| `linksExtension` |  | `String` | No |
| `externalZoneId` | The external zoneId of the resource. | `String` | No |
| `externalRegionId` | The external regionId of the resource. | `String` | No |
| `externalId` | External entity Id on the provider side. | `String` | No |
| `description` | A human-friendly description. | `String` | No |
| `orgId` | The id of the organization this entity belongs to. | `String` | No |
| `tags` | A set of tag keys and optional values that were set on this resource. | `Array/Object` | No |
| `capacityInGB` | Capacity of the block device in GB. | `Number` | No |
| `cloudAccountIds` | Set of ids of the cloud accounts this resource belongs to. | `Array/Object` | No |
| `createdAt` | Date when the entity was created. The date is in ISO 8601 and UTC. | `String` | No |
| `provisioningStatus` | The provisioning status of the resource. One of three provisioning statuses. `PROVISIONING`: The resource is being provisioned. `READY`: The resource is already provisioned. `SUSPEND`: The resource is being destroyed. | `String` | No |
| `deploymentId` | Deployment id that is associated with this resource. | `String` | No |
| `internalIdString` |  | `String` | Yes |
| `name` | A human-friendly name used as an identifier in APIs that support this option. | `String` | No |
| `host` |  | `VraHost` | No |
| `tagsExtension` |  | `String` | No |
| `blockDeviceStatus` |  | `String` | No |
| `id` | The id of this resource instance | `String` | No |
| `persistent` | Indicates whether the block device survives a delete action. | `Boolean` | No |
| `projectId` | The id of the project this resource belongs to. | `String` | No |
| `updatedAt` | Date when the entity was last updated. The date is ISO 8601 and UTC. | `String` | No |
| `customPropertiesExtension` |  | `String` | No |

### Methods

#### `VraBlockDevice`


**Returns:** `void`

---

#### `putCustomPropertiesItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `customPropertiesItem` | `String` |  |

**Returns:** `VraBlockDevice`

---

#### `addTagsItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `tagsItem` | `VraTag` |  |

**Returns:** `VraBlockDevice`

---

#### `addCloudAccountIdsItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `cloudAccountIdsItem` | `String` |  |

**Returns:** `VraBlockDevice`

---

#### `putLinksItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `linksItem` | `VraHref` |  |

**Returns:** `VraBlockDevice`

---

## VraBlockDeviceResult

**Description:** State object representing a query result of block device.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `numberOfElements` | Number of elements in the current page | `Number` | Yes |
| `content` | List of content items | `Array/Object` | Yes |
| `totalElements` | Total number of elements. In some cases the field may not be populated | `Number` | Yes |

## VraBlockDeviceSpecification

**Description:** BlockDeviceSpecification

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `capacityInGB` | Capacity of the block device in GB. | `Number` | No |
| `sourceReference` | Reference to URI using which the block device has to be created. | `String` | No |
| `encrypted` | Indicates whether the block device should be encrypted or not. | `Boolean` | No |
| `deploymentId` | The id of the deployment that is associated with this resource | `String` | No |
| `name` | A human-friendly name used as an identifier in APIs that support this option. | `String` | No |
| `description` | A human-friendly description. | `String` | No |
| `diskContentBase64` | Content of a disk, base64 encoded. | `String` | No |
| `persistent` | Indicates whether the block device survives a delete action. | `Boolean` | No |
| `constraints` | Constraints that are used to drive placement policies for the block device that is produced from this specification. Constraint expressions are matched against tags on existing placement targets. | `Array/Object` | No |
| `projectId` | The id of the project the current user belongs to. | `String` | No |
| `tags` | A set of tag keys and optional values that should be set on any resource that is produced from this specification. | `Array/Object` | No |

### Methods

#### `VraBlockDeviceSpecification`


**Returns:** `void`

---

#### `addConstraintsItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `constraintsItem` | `VraConstraint` |  |

**Returns:** `VraBlockDeviceSpecification`

---

#### `addTagsItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `tagsItem` | `VraTag` |  |

**Returns:** `VraBlockDeviceSpecification`

---

#### `putCustomPropertiesItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `customPropertiesItem` | `String` |  |

**Returns:** `VraBlockDeviceSpecification`

---

## VraChangeSecurityGroupSpecification

**Description:** Specification for a second day change security groups operation for a vsphere machine

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `owner` | Email of the user that owns the entity. | `String` | No |
| `createdAt` | Date when the entity was created. The date is in ISO 8601 and UTC. | `String` | No |
| `networkInterfaceSpecifications` | A set of network interface controller specifications for this machine. If not specified, then no reconfiguration will be performed. | `Array/Object` | No |
| `name` | A human-friendly name used as an identifier in APIs that support this option. | `String` | No |
| `description` | A human-friendly description. | `String` | No |
| `id` | The id of this resource instance | `String` | No |
| `orgId` | The id of the organization this entity belongs to. | `String` | No |
| `updatedAt` | Date when the entity was last updated. The date is ISO 8601 and UTC. | `String` | No |

### Methods

#### `VraChangeSecurityGroupSpecification`


**Returns:** `void`

---

#### `addNetworkInterfaceSpecificationsItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `networkInterfaceSpecificationsItem` | `VraNetworkInterfaceSpecification` |  |

**Returns:** `VraChangeSecurityGroupSpecification`

---

#### `putLinksItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `linksItem` | `VraHref` |  |

**Returns:** `VraChangeSecurityGroupSpecification`

---

## VraCloudAccount

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `owner` | Email of the user that owns the entity. | `String` | No |
| `linksExtension` | JSON String containing Links for the CloudAccount | `String` | No |
| `cloudAccountType` | Cloud account type | `String` | No |
| `description` | A human-friendly description. | `String` | No |
| `enabledRegionIdsExtension` | JSON String containing a set of region names to enable provisioning on. | `String` | No |
| `orgId` | The id of the organization this entity belongs to. | `String` | No |
| `tags` | A set of tag keys and optional values that were set on the Cloud Account | `Array/Object` | No |
| `createdAt` | Date when the entity was created. The date is in ISO 8601 and UTC. | `String` | No |
| `enabledRegions` | A list of regions that are enabled for provisioning on this cloud account | `Array/Object` | No |
| `internalIdString` |  | `String` | Yes |
| `name` | A human-friendly name used as an identifier in APIs that support this option. | `String` | No |
| `host` |  | `VraHost` | No |
| `tagsExtension` | JSON String containing a set of tag keys and optional values that were set on the Cloud Account | `String` | No |
| `id` | The id of this resource instance | `String` | No |
| `updatedAt` | Date when the entity was last updated. The date is ISO 8601 and UTC. | `String` | No |
| `customPropertiesExtension` | JSON String containing key value pair of properties that will be used | `String` | No |

### Methods

#### `VraCloudAccount`


**Returns:** `void`

---

#### `addEnabledRegionsItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `enabledRegionsItem` | `VraRegion` |  |

**Returns:** `VraCloudAccount`

---

#### `putCloudAccountPropertiesItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `cloudAccountPropertiesItem` | `String` |  |

**Returns:** `VraCloudAccount`

---

#### `putLinksItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `linksItem` | `VraHref` |  |

**Returns:** `VraCloudAccount`

---

#### `addTagsItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `tagsItem` | `VraTag` |  |

**Returns:** `VraCloudAccount`

---

#### `putCustomPropertiesItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `customPropertiesItem` | `String` |  |

**Returns:** `VraCloudAccount`

---

## VraCloudAccountNsxT

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `owner` | Email of the user that owns the entity. | `String` | No |
| `hostName` | Host name for the NSX-T cloud account | `String` | No |
| `managerMode` | Indicates whether NSX-T cloud account was created in Manager (legacy) mode. | `Boolean` | No |
| `description` | A human-friendly description. | `String` | No |
| `orgId` | The id of the organization this entity belongs to. | `String` | No |
| `tags` | A set of tag keys and optional values that were set on the Cloud Account | `Array/Object` | No |
| `createdAt` | Date when the entity was created. The date is in ISO 8601 and UTC. | `String` | No |
| `dcid` | Identifier of a data collector vm deployed in the on premise infrastructure. | `String` | No |
| `internalIdString` |  | `String` | Yes |
| `name` | A human-friendly name used as an identifier in APIs that support this option. | `String` | No |
| `host` |  | `VraHost` | No |
| `id` | The id of this resource instance | `String` | No |
| `isGlobalManager` | Indicates whether this is an NSX-T Global Manager cloud account. NSX-T global manager cloud account can be associated with NSX-T local manager cloud accounts. It cannot be associated with vSphere cloud accounts. Default value: false. | `Boolean` | No |
| `updatedAt` | Date when the entity was last updated. The date is ISO 8601 and UTC. | `String` | No |
| `username` | Username to authenticate with the cloud account | `String` | No |

### Methods

#### `VraCloudAccountNsxT`


**Returns:** `void`

---

#### `putLinksItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `linksItem` | `VraHref` |  |

**Returns:** `VraCloudAccountNsxT`

---

#### `putCustomPropertiesItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `customPropertiesItem` | `String` |  |

**Returns:** `VraCloudAccountNsxT`

---

#### `addTagsItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `tagsItem` | `VraTag` |  |

**Returns:** `VraCloudAccountNsxT`

---

## VraCloudAccountNsxTResult

**Description:** State object representing a query result of Nsx-T cloud accounts.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `numberOfElements` | Number of elements in the current page | `Number` | Yes |
| `content` | List of content items | `Array/Object` | Yes |
| `totalElements` | Total number of elements. In some cases the field may not be populated | `Number` | Yes |

## VraCloudAccountNsxV

**Description:** State object representing an Nsx-V cloud account.<br><br>A cloud account identifies a cloud account type and an account-specific deployment region or data center where the associated cloud account resources are hosted.<br>**HATEOAS** links:<br>**self** - CloudAccountNsxV - Self link to this cloud account

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `owner` | Email of the user that owns the entity. | `String` | No |
| `hostName` | Host name for the Nsx-V cloud account | `String` | No |
| `description` | A human-friendly description. | `String` | No |
| `orgId` | The id of the organization this entity belongs to. | `String` | No |
| `tags` | A set of tag keys and optional values that were set on the Cloud Account | `Array/Object` | No |
| `createdAt` | Date when the entity was created. The date is in ISO 8601 and UTC. | `String` | No |
| `dcid` | Identifier of a data collector vm deployed in the on premise infrastructure. | `String` | No |
| `internalIdString` |  | `String` | Yes |
| `name` | A human-friendly name used as an identifier in APIs that support this option. | `String` | No |
| `host` |  | `VraHost` | No |
| `id` | The id of this resource instance | `String` | No |
| `updatedAt` | Date when the entity was last updated. The date is ISO 8601 and UTC. | `String` | No |
| `username` | Username to authenticate with the cloud account | `String` | No |

### Methods

#### `VraCloudAccountNsxV`


**Returns:** `void`

---

#### `addTagsItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `tagsItem` | `VraTag` |  |

**Returns:** `VraCloudAccountNsxV`

---

#### `putCustomPropertiesItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `customPropertiesItem` | `String` |  |

**Returns:** `VraCloudAccountNsxV`

---

#### `putLinksItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `linksItem` | `VraHref` |  |

**Returns:** `VraCloudAccountNsxV`

---

## VraCloudAccountNsxVResult

**Description:** State object representing a query result of Nsx-V cloud accounts.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `numberOfElements` | Number of elements in the current page | `Number` | Yes |
| `content` | List of content items | `Array/Object` | Yes |
| `totalElements` | Total number of elements. In some cases the field may not be populated | `Number` | Yes |

## VraCloudAccountRegions

**Description:** State object representing cloud account region.<br><br>**externalRegions** - array[RegionSpecification] - Set of regions that can be enabled for this cloud account.<br>**externalRegionIds** - array[String] - Set of ids of regions that can be enabled for this cloud account.<br>

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `externalRegions` | A set of regions that can be enabled for this cloud account. | `Array/Object` | No |

### Methods

#### `VraCloudAccountRegions`


**Returns:** `void`

---

#### `addExternalRegionsItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `externalRegionsItem` | `VraRegionSpecification` |  |

**Returns:** `VraCloudAccountRegions`

---

## VraCloudAccountResult

**Description:** State object representing a query result of cloud accounts.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `numberOfElements` | Number of elements in the current page | `Number` | Yes |
| `content` | List of content items | `Array/Object` | Yes |
| `totalElements` | Total number of elements. In some cases the field may not be populated | `Number` | Yes |

## VraCloudAccountService

### Methods

#### `VraCloudAccountService`


**Returns:** `void`

---

#### `setGenericRestClient`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `genericRestClient` | `VraGenericRestClient` |  |

**Returns:** `void`

---

#### `deleteVSphereCloudAccountById`
Delete a vSphere Cloud Account with a given id

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `cloudAccountVsphereId` | `String` |  |

**Returns:** `void`

---

#### `deleteVSphereCloudAccount`
Delete a vSphere Cloud Account with a given cloudAccountVsphere object

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `cloudAccountVsphere` | `VraCloudAccountVsphere` |  |

**Returns:** `void`

---

#### `createVSphereCloudAccount`
Create a vSphere cloud account

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `body` | `VraCloudAccountVsphereSpecification` |  |

**Returns:** `VraCloudAccountVsphere`

---

#### `createVSphereCloudAccountAsync`
Create a vSphere cloud account in an asynchronous manner

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `body` | `VraCloudAccountVsphereSpecification` |  |

**Returns:** `VraRequestTracker`

---

#### `updateVSphereCloudAccountAsync`
Update vSphere cloud account in an asynchronous manner

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `cloudAccountVsphere` | `VraCloudAccountVsphere` |  |
| `body` | `VraUpdateCloudAccountVsphereSpecification` |  |

**Returns:** `VraRequestTracker`

---

#### `updateVSphereCloudAccount`
Update vSphere cloud account

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `cloudAccountVsphere` | `VraCloudAccountVsphere` |  |
| `body` | `VraUpdateCloudAccountVsphereSpecification` |  |

**Returns:** `VraCloudAccountVsphere`

---

## VraCloudAccountVsphere

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `owner` | Email of the user that owns the entity. | `String` | No |
| `hostName` | Host name for the vSphere cloud account | `String` | No |
| `linksExtension` | JSON String containing Links for the CloudAccountVsphere | `String` | No |
| `enabledRegionIdsExtension` | JSON String containing a set of region names to enable provisioning on. | `String` | No |
| `description` | A human-friendly description. | `String` | No |
| `orgId` | The id of the organization this entity belongs to. | `String` | No |
| `tags` | A set of tag keys and optional values that were set on the Cloud Account | `Array/Object` | No |
| `createdAt` | Date when the entity was created. The date is in ISO 8601 and UTC. | `String` | No |
| `enabledRegions` | A list of regions that are enabled for provisioning on this cloud account | `Array/Object` | No |
| `dcid` | Identifier of a data collector vm deployed in the on premise infrastructure. | `String` | No |
| `internalIdString` |  | `String` | Yes |
| `name` | A human-friendly name used as an identifier in APIs that support this option. | `String` | No |
| `host` |  | `VraHost` | No |
| `tagsExtension` | JSON String containing a set of tag keys and optional values that were set on the Cloud Account | `String` | No |
| `id` | The id of this resource instance | `String` | No |
| `updatedAt` | Date when the entity was last updated. The date is ISO 8601 and UTC. | `String` | No |
| `username` | Username to authenticate with the cloud account | `String` | No |
| `customPropertiesExtension` | JSON String containing key value pair of properties that will be used | `String` | No |

### Methods

#### `VraCloudAccountVsphere`


**Returns:** `void`

---

#### `putLinksItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `linksItem` | `VraHref` |  |

**Returns:** `VraCloudAccountVsphere`

---

#### `putCustomPropertiesItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `customPropertiesItem` | `String` |  |

**Returns:** `VraCloudAccountVsphere`

---

#### `addEnabledRegionsItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `enabledRegionsItem` | `VraRegion` |  |

**Returns:** `VraCloudAccountVsphere`

---

#### `addTagsItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `tagsItem` | `VraTag` |  |

**Returns:** `VraCloudAccountVsphere`

---

## VraCloudAccountVsphereRegionEnumerationSpecification

**Description:** Specification for a region enumeration of vshpere cloud account.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `acceptSelfSignedCertificate` | Accept self signed certificate when connecting to vSphere | `Boolean` | No |
| `hostName` | Host name for the vSphere endpoint. Either provide hostName or provide a cloudAccountId of an existing account. | `String` | No |
| `password` | Password for the user used to authenticate with the cloud Account. Either provide password or provide a cloudAccountId of an existing account. | `String` | No |
| `dcid` | Identifier of a data collector vm deployed in the on premise infrastructure. Refer to the data-collector API to create or list data collectors. Note: Data collector endpoints are not available in VMware Aria Automation(on-prem) release. | `String` | No |
| `cloudAccountId` | Existing cloud account id. Either provide existing cloud account Id, or hostName, username, password. | `String` | No |
| `username` | Username to authenticate with the cloud account. Either provide username or provide a cloudAccountId of an existing account. | `String` | No |

## VraCloudAccountVsphereResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `numberOfElements` | Number of elements in the current page | `Number` | Yes |
| `content` | List of content items | `Array/Object` | Yes |
| `totalElements` | Total number of elements. In some cases the field may not be populated | `Number` | Yes |

## VraCloudAccountVsphereSpecification

**Description:** Specification for a vSphere cloud account.<br><br>A cloud account identifies a cloud account type and an account-specific deployment region or data center where the associated cloud account resources are hosted.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `hostName` | Host name for the vSphere endpoint | `String` | No |
| `acceptSelfSignedCertificate` | Accept self signed certificate when connecting to vSphere | `Boolean` | No |
| `createDefaultZones` | Create default cloud zones for the enabled regions. | `Boolean` | No |
| `password` | Password for the user used to authenticate with the cloud Account | `String` | No |
| `associatedCloudAccountIds` | NSX-V or NSX-T account to associate with this vSphere cloud account. vSphere cloud account can be a single NSX-V cloud account or a single NSX-T cloud account. | `Array/Object` | No |
| `regions` | A set of regions to enable provisioning on.Refer to /iaas/api/cloud-accounts/region-enumeration. | `Array/Object` | No |
| `dcid` | Identifier of a data collector vm deployed in the on premise infrastructure. Refer to the data-collector API to create or list data collectors. Note: Data collector endpoints are not available in VMware Aria Automation(on-prem) release. | `String` | No |
| `name` | A human-friendly name used as an identifier in APIs that support this option. | `String` | No |
| `description` | A human-friendly description. | `String` | No |
| `username` | Username to authenticate with the cloud account | `String` | No |
| `tags` | A set of tag keys and optional values to set on the Cloud Account | `Array/Object` | No |

### Methods

#### `VraCloudAccountVsphereSpecification`


**Returns:** `void`

---

#### `addRegionsItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `regionsItem` | `VraRegionSpecification` |  |

**Returns:** `VraCloudAccountVsphereSpecification`

---

#### `addAssociatedCloudAccountIdsItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `associatedCloudAccountIdsItem` | `String` |  |

**Returns:** `VraCloudAccountVsphereSpecification`

---

#### `addTagsItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `tagsItem` | `VraTag` |  |

**Returns:** `VraCloudAccountVsphereSpecification`

---

## VraCloudZoneService

### Methods

#### `VraCloudZoneService`


**Returns:** `void`

---

#### `setGenericRestClient`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `genericRestClient` | `VraGenericRestClient` |  |

**Returns:** `void`

---

#### `deleteZoneById`
This method deletes Zone based on given zoneId

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `zoneId` | `String` |  |

**Returns:** `void`

---

#### `deleteZone`
This method deletes Zone based on given zone.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `zone` | `VraZone` |  |

**Returns:** `void`

---

#### `updateZone`
This method updates the Zone based on zoneId & ZoneSpecification.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `id` | `String` |  |
| `body` | `VraZoneSpecification` |  |

**Returns:** `VraZone`

---

#### `createZone`
This method creates Zone based on ZoneSpecification details.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `body` | `VraZoneSpecification` |  |

**Returns:** `VraZone`

---

## VraConstraint

**Description:** A constraint that is conveyed to the policy engine.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `expression` | An expression of the form \"[!]tag-key[:[tag-value]]\", used to indicate a constraint match on keys and values of tags. | `String` | No |
| `mandatory` | Indicates whether this constraint should be strictly enforced or not. | `Boolean` | No |

## VraDataCollector

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `hostName` | Data collector host name | `String` | No |
| `dcId` | Data collector identifier | `String` | No |
| `internalIdString` |  | `String` | Yes |
| `ipAddress` | Ip Address of the data collector VM | `String` | No |
| `host` |  | `VraHost` | No |
| `name` | Data collector name | `String` | No |
| `status` | Current status of the data collector | `String` | No |

## VraDataCollectorResult

**Description:** State object representing a query result of data collectors.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `numberOfElements` | Number of elements in the current page | `Number` | Yes |
| `content` | List of content items | `Array/Object` | Yes |
| `totalElements` | Total number of elements. In some cases the field may not be populated | `Number` | Yes |

## VraDataCollectorService

### Methods

#### `VraDataCollectorService`


**Returns:** `void`

---

#### `setGenericRestClient`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `genericRestClient` | `VraGenericRestClient` |  |

**Returns:** `void`

---

## VraDiskAttachmentSpecification

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `blockDeviceId` | The id of the existing block device | `String` | No |
| `scsiController` | Deprecated: The SCSI controller to be assigned | `String` | No |
| `name` | A human-friendly name used as an identifier in APIs that support this option. | `String` | No |
| `description` | A human-friendly description. | `String` | No |
| `unitNumber` | Deprecated: The Unit Number to be assigned | `String` | No |

### Methods

#### `VraDiskAttachmentSpecification`


**Returns:** `void`

---

#### `putDiskAttachmentPropertiesItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `diskAttachmentPropertiesItem` | `String` |  |

**Returns:** `VraDiskAttachmentSpecification`

---

## VraDiskService

### Methods

#### `VraDiskService`


**Returns:** `void`

---

#### `setGenericRestClient`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `genericRestClient` | `VraGenericRestClient` |  |

**Returns:** `void`

---

#### `createBlockDevice`
Create a BlockDevice in Synchronous manner

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `blockDeviceSpecification` | `VraBlockDeviceSpecification` |  |

**Returns:** `VraBlockDevice`

---

#### `resizeBlockDevice`
Resize a BlockDevice in an asynchronous manner.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `diskId` | `String` |  |
| `capacityInGB` | `Number` |  |

**Returns:** `VraRequestTracker`

---

#### `deleteBlockDevice`
Delete a BlockDevice in an asynchronous manner.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `diskId` | `String` |  |
| `purge` | `Boolean` |  |
| `forceDelete` | `Boolean` |  |

**Returns:** `VraRequestTracker`

---

#### `createBlockDeviceAsync`
Create a BlockDevice in an asynchronous manner

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `blockDeviceSpecification` | `VraBlockDeviceSpecification` |  |

**Returns:** `VraRequestTracker`

---

#### `createBlockDeviceSnapshot`
Create a BlockDevice Snapshot in an asynchronous manner.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `diskId` | `String` |  |
| `diskSnapshotSpecification` | `VraDiskSnapshotSpecification` |  |

**Returns:** `VraRequestTracker`

---

#### `revertBlockDeviceSnapshot`
Revert a BlockDevice Snapshot in an asynchronous manner.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `diskId` | `String` |  |
| `snapshotId` | `String` |  |

**Returns:** `VraRequestTracker`

---

#### `promoteBlockDevice`
Promote a BlockDevice in an asynchronous manner. Second day promote operation on disk. Applicable for vSphere Block Devices only

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `diskId` | `String` |  |

**Returns:** `VraRequestTracker`

---

#### `deleteBlockDeviceSnapshot`
Delete a BlockDevice Snapshot in an asynchronous manner.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `diskId` | `String` |  |
| `snapshotId` | `String` |  |

**Returns:** `VraRequestTracker`

---

## VraDiskSnapshot

**Description:** Represents a disk snapshot

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `owner` | Email of the user that owns the entity. | `String` | No |
| `createdAt` | Date when the entity was created. The date is in ISO 8601 and UTC. | `String` | No |
| `linksExtension` |  | `String` | No |
| `internalIdString` |  | `String` | Yes |
| `name` | A human-friendly name used as an identifier in APIs that support this option. | `String` | No |
| `snapshotPropertiesExtension` |  | `String` | No |
| `host` |  | `VraHost` | No |
| `id` | The id of this resource instance | `String` | No |
| `orgId` | The id of the organization this entity belongs to. | `String` | No |
| `updatedAt` | Date when the entity was last updated. The date is ISO 8601 and UTC. | `String` | No |
| `desc` | A human-friendly description. | `String` | No |
| `tags` | A set of tag keys and optional values that have to be set on the snapshot in the cloud. Currently supported for Azure Snapshots | `Array/Object` | No |

### Methods

#### `VraDiskSnapshot`


**Returns:** `void`

---

#### `putLinksItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `linksItem` | `VraHref` |  |

**Returns:** `VraDiskSnapshot`

---

#### `addTagsItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `tagsItem` | `VraTag` |  |

**Returns:** `VraDiskSnapshot`

---

#### `putSnapshotPropertiesItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `snapshotPropertiesItem` | `String` |  |

**Returns:** `VraDiskSnapshot`

---

## VraDiskSnapshotSpecification

**Description:** Specification for Disk Snapshot creation request.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | A human-friendly name used as an identifier in APIs that support this option. | `String` | No |
| `description` | A human-friendly description. | `String` | No |
| `tags` | A set of tag keys and optional values that have to be set on the snapshot in the cloud. Currently supported for Azure Snapshots | `Array/Object` | No |

### Methods

#### `VraDiskSnapshotSpecification`


**Returns:** `void`

---

#### `putSnapshotPropertiesItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `snapshotPropertiesItem` | `String` |  |

**Returns:** `VraDiskSnapshotSpecification`

---

#### `addTagsItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `tagsItem` | `VraTag` |  |

**Returns:** `VraDiskSnapshotSpecification`

---

## VraEntitiesFinder

**Description:** VMware Aria Automation Entity finder to search for an entity

### Methods

#### `getTags`
Get all tags.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vRAHost` | `VraHost` |  |
| `filter` | `String` |  |

**Returns:** `Array/VraTag`

---

#### `getCloudZone`
Get CloudZone for a given zone id.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vRAHost` | `VraHost` |  |
| `zoneId` | `String` |  |

**Returns:** `VraZone`

---

#### `getFabricNetworks`
Get all FabricNetwork for a given Host.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vRAHost` | `VraHost` |  |
| `filter` | `String` |  |

**Returns:** `Array/VraFabricNetwork`

---

#### `getCloudZones`
Get all CloudZones for the given Host.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vRAHost` | `VraHost` |  |
| `filter` | `String` |  |

**Returns:** `Array/VraZone`

---

#### `getFlavorProfiles`
Get all FlavorProfile objects for a given Host.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vRAHost` | `VraHost` |  |

**Returns:** `Array/VraFlavorProfile`

---

#### `getStorageProfile`
Get StorageProfile by ID.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vRAHost` | `VraHost` |  |
| `id` | `String` |  |

**Returns:** `VraStorageProfile`

---

#### `getVsphereCloudAccount`
Get vSphere Cloud Account By Id.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vRAHost` | `VraHost` |  |
| `vsphereCloudAccountId` | `String` |  |

**Returns:** `VraCloudAccountVsphere`

---

#### `getProject`
Retrieves a project by id for the given Host.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vRAHost` | `VraHost` |  |
| `id` | `String` |  |

**Returns:** `VraProject`

---

#### `getFabricNetwork`
Get FabricNetwork by ID.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vRAHost` | `VraHost` |  |
| `id` | `String` |  |
| `select` | `String` |  |

**Returns:** `VraFabricNetwork`

---

#### `getProjectResourceMetadata`
Get project resource metadata by a given project id.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vRAHost` | `VraHost` |  |
| `id` | `String` |  |

**Returns:** `VraProjectResourceMetadata`

---

#### `getDataCollectors`
Get all Data Collectors/Cloud Proxies.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vRAHost` | `VraHost` |  |
| `isDisabledDataCollector` | `Boolean` |  |

**Returns:** `Array/VraDataCollector`

---

#### `getAllImageMapping`
Get all image mapping keys for a given Host.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vRAHost` | `VraHost` |  |

**Returns:** `Array/String`

---

#### `getNsxVCloudAccount`
Get NSX-V Cloud Account by Id.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vRAHost` | `VraHost` |  |
| `id` | `String` |  |

**Returns:** `VraCloudAccountNsxV`

---

#### `getImageProfile`
Get ImageProfile by ID.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vRAHost` | `VraHost` |  |
| `id` | `String` |  |

**Returns:** `VraImageProfile`

---

#### `getAllImageReferencesByImage`
Get all image reference keys for a given Host and Image.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vRAHost` | `VraHost` |  |
| `image` | `String` |  |

**Returns:** `Array/String`

---

#### `getRequestTrackers`
Get all RequestTracker objects.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vRAHost` | `VraHost` |  |

**Returns:** `Array/VraRequestTracker`

---

#### `getNsxVCloudAccounts`
Get all NSX-V Cloud Account.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vRAHost` | `VraHost` |  |

**Returns:** `Array/VraCloudAccountNsxV`

---

#### `getVsphereCloudAccountRegions`
Get vSphere Cloud Account Regions/DataCenter.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vRAHost` | `VraHost` |  |
| `cloudAccountVsphereSpecification` | `VraCloudAccountVsphereSpecification` |  |

**Returns:** `VraCloudAccountRegions`

---

#### `getBlockDeviceSnapshots`
Get all BlockDevice/Disk snapshots for a given BlockDevice/Disk Id.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vRAHost` | `VraHost` |  |
| `blockDeviceId` | `String` |  |

**Returns:** `Array/VraDiskSnapshot`

---

#### `getImageProfiles`
Get all ImageProfile objects for a given Host.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vRAHost` | `VraHost` |  |

**Returns:** `Array/VraImageProfile`

---

#### `getBlockDeviceSnapshot`
Get Block Device/Disk Snapshot details for given Block Device Id.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vRAHost` | `VraHost` |  |
| `blockDeviceId` | `String` |  |
| `snapshotId` | `String` |  |

**Returns:** `VraDiskSnapshot`

---

#### `getMachineSnapshot`
Get Machine Snapshot details for given Machine ID and Snapshot ID.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vRAHost` | `VraHost` |  |
| `machineId` | `String` |  |
| `snapshotId` | `String` |  |

**Returns:** `VraSnapshot`

---

#### `getNetworkProfile`
Get NetworkProfile by ID.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vRAHost` | `VraHost` |  |
| `id` | `String` |  |

**Returns:** `VraNetworkProfile`

---

#### `getMachineDisksByMachineId`
Get all Machine Disks for a given machine.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vRAHost` | `VraHost` |  |
| `machineId` | `String` |  |

**Returns:** `Array/VraBlockDevice`

---

#### `getAvailableBlockDevices`
Get Available BlockDevices for a given Host.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vRAHost` | `VraHost` |  |
| `filter` | `String` |  |

**Returns:** `Array/VraBlockDevice`

---

#### `getNetworks`
Get all Networks.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vRAHost` | `VraHost` |  |

**Returns:** `Array/VraNetwork`

---

#### `getMachineDisk`
Get Machine Disk by ID for a specific machine.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vRAHost` | `VraHost` |  |
| `machineId` | `String` |  |
| `diskId` | `String` |  |

**Returns:** `VraBlockDevice`

---

#### `getTagsByKey`
Get tags by key.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vRAHost` | `VraHost` |  |
| `key` | `String` |  |
| `filter` | `String` |  |

**Returns:** `Array/VraTag`

---

#### `getVsphereCloudAccounts`
Get all vSphere Cloud Accounts.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vRAHost` | `VraHost` |  |

**Returns:** `Array/VraCloudAccountVsphere`

---

#### `getAllFlavorMapping`
Get all flavor mapping keys for a given Host.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vRAHost` | `VraHost` |  |

**Returns:** `Array/String`

---

#### `getMachineNetworkInterface`
Get Machine Network Interface details for given Machine ID and Network Interface ID.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vRAHost` | `VraHost` |  |
| `machineId` | `String` |  |
| `networkInterfaceId` | `String` |  |

**Returns:** `VraNetworkInterface`

---

#### `getMachine`
Get machine by ID.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vRAHost` | `VraHost` |  |
| `id` | `String` |  |
| `select` | `String` |  |

**Returns:** `VraMachine`

---

#### `getMachineSnapshots`
Get all Snapshots for a given Machine.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vRAHost` | `VraHost` |  |
| `machineId` | `String` |  |

**Returns:** `Array/VraSnapshot`

---

#### `getCloudAccount`
Get Cloud Account - Vsphere, NSXT, NXTV, AWS, Azure, GCP etc by ID.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vRAHost` | `VraHost` |  |
| `id` | `String` |  |
| `select` | `String` |  |

**Returns:** `VraCloudAccount`

---

#### `getMachines`
Get all Machines for a given Host.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vRAHost` | `VraHost` |  |
| `filter` | `String` |  |

**Returns:** `Array/VraMachine`

---

#### `getRequestTracker`
Get RequestTracker object for a given request id.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vRAHost` | `VraHost` |  |
| `requestTrackerId` | `String` |  |

**Returns:** `VraRequestTracker`

---

#### `getNsxTCloudAccounts`
Get all NSX-T Cloud Account.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vRAHost` | `VraHost` |  |

**Returns:** `Array/VraCloudAccountNsxT`

---

#### `getProjects`
Get all projects with specified paging parameters for the given Host.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vRAHost` | `VraHost` |  |
| `filter` | `String` |  |

**Returns:** `Array/VraProject`

---

#### `getMachineNetworkInterfaces`
Get all Network Interfaces for a given Machine.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vRAHost` | `VraHost` |  |
| `machineId` | `String` |  |

**Returns:** `Array/VraNetworkInterface`

---

#### `getNsxTCloudAccount`
Get NSX-T Cloud Account by Id.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vRAHost` | `VraHost` |  |
| `id` | `String` |  |

**Returns:** `VraCloudAccountNsxT`

---

#### `getCloudZoneRegionByZone`
Get CloudZone Region by given Zone.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vRAHost` | `VraHost` |  |
| `zone` | `VraZone` |  |

**Returns:** `VraRegion`

---

#### `getNetworkProfiles`
Get all NetworkProfile objects for a given Host.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vRAHost` | `VraHost` |  |

**Returns:** `Array/VraNetworkProfile`

---

#### `getCloudZoneRegion`
Get CloudZone Region by given region Id.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vRAHost` | `VraHost` |  |
| `regionId` | `String` |  |

**Returns:** `VraRegion`

---

#### `getTag`
Get Tag Object by String Key and value.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vRAHost` | `VraHost` |  |
| `key` | `String` |  |
| `value` | `String` |  |

**Returns:** `VraTag`

---

#### `getStorageProfiles`
Get all StorageProfile objects for a given Host.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vRAHost` | `VraHost` |  |

**Returns:** `Array/VraStorageProfile`

---

#### `getCloudZoneRegions`
Get all Cloud zone Region.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vRAHost` | `VraHost` |  |

**Returns:** `Array/VraRegion`

---

#### `getDataCollector`
Get Data Collector/Cloud Proxy by Id.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vRAHost` | `VraHost` |  |
| `dataCollectorId` | `String` |  |

**Returns:** `VraDataCollector`

---

#### `getAllFlavorReferencesByFlavor`
Get all flavor references for a given Host and flavor.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vRAHost` | `VraHost` |  |
| `flavor` | `String` |  |

**Returns:** `Array/String`

---

#### `getBlockDevice`
Get BlockDevice by ID.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vRAHost` | `VraHost` |  |
| `id` | `String` |  |

**Returns:** `VraBlockDevice`

---

#### `getCloudAccounts`
Get all Cloud Accounts - Vsphere, NSXT, NXTV, AWS, Azure, GCP etc.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vRAHost` | `VraHost` |  |
| `filter` | `String` |  |

**Returns:** `Array/VraCloudAccount`

---

#### `getBlockDevices`
Get all BlockDevice for a given Host.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vRAHost` | `VraHost` |  |
| `filter` | `String` |  |

**Returns:** `Array/VraBlockDevice`

---

#### `getFlavorProfile`
Get FlavorProfile by ID.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vRAHost` | `VraHost` |  |
| `id` | `String` |  |

**Returns:** `VraFlavorProfile`

---

#### `getNetwork`
Get Network for a given Network Id.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vRAHost` | `VraHost` |  |
| `networkId` | `String` |  |

**Returns:** `VraNetwork`

---

## VraFabricFlavor

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `bootDiskSizeInMB` | Size of the boot disk (in megabytes). Not populated when inapplicable. | `Number` | No |
| `memoryInMB` | Total amount of memory (in megabytes). Not populated when inapplicable. | `Number` | No |
| `name` | The value of the instance type in the corresponding cloud. | `String` | No |
| `storageType` | The type of storage supported by this instance type. Not populated when inapplicable. | `String` | No |
| `dataDiskMaxCount` | Number of data disks. Not populated when inapplicable. | `Number` | No |
| `id` | The internal identification used by the corresponding cloud end-point | `String` | No |
| `dataDiskSizeInMB` | Size of the data disks (in megabytes). Not populated when inapplicable. | `Number` | No |
| `networkType` | The type of network supported by this instance type. Not populated when inapplicable. | `String` | No |
| `cpuCount` | Number of CPU cores. Not populated when inapplicable. | `Number` | No |

## VraFabricNetwork

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `owner` | Email of the user that owns the entity. | `String` | No |
| `cloudAccountIdsExtension` |  | `String` | No |
| `linksExtension` |  | `String` | No |
| `externalRegionId` | The id of the region for which this network is defined | `String` | No |
| `externalId` | External entity Id on the provider side. | `String` | No |
| `description` | A human-friendly description. | `String` | No |
| `orgId` | The id of the organization this entity belongs to. | `String` | No |
| `tags` | A set of tag keys and optional values that were set on this resource instance. | `Array/Object` | No |
| `cloudAccountIds` | Set of ids of the cloud accounts this entity belongs to. | `Array/Object` | No |
| `ipv6Cidr` | Network IPv6 CIDR to be used. | `String` | No |
| `createdAt` | Date when the entity was created. The date is in ISO 8601 and UTC. | `String` | No |
| `isDefault` | Indicates whether this is the default subnet for the zone. | `Boolean` | No |
| `internalIdString` |  | `String` | Yes |
| `name` | A human-friendly name used as an identifier in APIs that support this option. | `String` | No |
| `host` |  | `VraHost` | No |
| `tagsExtension` |  | `String` | No |
| `isPublic` | Indicates whether the sub-network supports public IP assignment. | `Boolean` | No |
| `cidr` | Network CIDR to be used. | `String` | No |
| `id` | The id of this resource instance | `String` | No |
| `updatedAt` | Date when the entity was last updated. The date is ISO 8601 and UTC. | `String` | No |
| `customPropertiesExtension` |  | `String` | No |

### Methods

#### `VraFabricNetwork`


**Returns:** `void`

---

#### `putCustomPropertiesItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `customPropertiesItem` | `String` |  |

**Returns:** `VraFabricNetwork`

---

#### `addTagsItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `tagsItem` | `VraTag` |  |

**Returns:** `VraFabricNetwork`

---

#### `addCloudAccountIdsItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `cloudAccountIdsItem` | `String` |  |

**Returns:** `VraFabricNetwork`

---

#### `putLinksItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `linksItem` | `VraHref` |  |

**Returns:** `VraFabricNetwork`

---

## VraFabricNetworkResult

**Description:** State object representing a query result of fabric networks.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `numberOfElements` | Number of elements in the current page | `Number` | Yes |
| `content` | List of content items | `Array/Object` | Yes |
| `totalElements` | Total number of elements. In some cases the field may not be populated | `Number` | Yes |

## VraFlavorMapping

**Description:** Describes a flavor mapping between a global fabric flavor key and fabric flavor.<br>**HATEOAS** links:<br>**region** - Region - Region for the mapping.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `externalRegionId` | The id of the region for which this mapping is defined. | `String` | No |

### Methods

#### `VraFlavorMapping`


**Returns:** `void`

---

#### `putMappingItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `mappingItem` | `VraFabricFlavor` |  |

**Returns:** `VraFlavorMapping`

---

#### `putLinksItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `linksItem` | `VraHref` |  |

**Returns:** `VraFlavorMapping`

---

## VraFlavorProfile

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `owner` | Email of the user that owns the entity. | `String` | No |
| `flavorMappings` | A list of the flavor mappings defined for the corresponding cloud end-point region | `VraFlavorMapping` | No |
| `linksExtension` |  | `String` | No |
| `externalRegionId` | The id of the region for which this profile is defined | `String` | No |
| `flavorMappingsExtension` |  | `String` | No |
| `displayName` |  | `String` | Yes |
| `cloudAccountId` | Id of the cloud account this flavor profile belongs to. | `String` | No |
| `description` | A human-friendly description. | `String` | No |
| `orgId` | The id of the organization this entity belongs to. | `String` | No |
| `createdAt` | Date when the entity was created. The date is in ISO 8601 and UTC. | `String` | No |
| `internalIdString` |  | `String` | Yes |
| `name` | A human-friendly name used as an identifier in APIs that support this option. | `String` | No |
| `host` |  | `VraHost` | No |
| `id` | The id of this resource instance | `String` | No |
| `updatedAt` | Date when the entity was last updated. The date is ISO 8601 and UTC. | `String` | No |

### Methods

#### `VraFlavorProfile`


**Returns:** `void`

---

#### `putLinksItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `linksItem` | `VraHref` |  |

**Returns:** `VraFlavorProfile`

---

## VraFlavorProfileResult

**Description:** State object representing a query result of flavor profiles.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `numberOfElements` | Number of elements in the current page | `Number` | Yes |
| `content` | List of content items | `Array/Object` | Yes |
| `totalElements` | Total number of elements. In some cases the field may not be populated | `Number` | Yes |

## VraFlavorProfileService

### Methods

#### `VraFlavorProfileService`


**Returns:** `void`

---

#### `setGenericRestClient`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `genericRestClient` | `VraGenericRestClient` |  |

**Returns:** `void`

---

## VraGenericRestClient

**Description:** A generic VMware Aria Automation Rest client for executing REST operations

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `host` |  | `VraHost` | No |

### Methods

#### `VraGenericRestClient`
Automation GenericRestClient No Argument Constructor.

**Returns:** `void`

---

#### `get`
Get Method to execute rest operation by setting Request object. Request object can hold information (http method, resource url, request payload)

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `request` | `VraRestRequest` |  |

**Returns:** `VraRestResponse`

---

#### `execute`
Method to execute rest operation by setting Request object. Request object can hold information (http method, resource url, request payload)

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `restRequest` | `VraRestRequest` |  |

**Returns:** `VraRestResponse`

---

#### `put`
Put Method to execute rest operation by setting Request object. Request object can hold information (http method, resource url, request payload)

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `request` | `VraRestRequest` |  |

**Returns:** `VraRestResponse`

---

#### `delete`
Delete Method (Http Delete) to execute rest operation by setting Request object. Request object can hold information (http method, resource url, request payload)

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `request` | `VraRestRequest` |  |

**Returns:** `VraRestResponse`

---

#### `post`
Post Method to execute rest operation by setting Request object. Request object can hold information (http method, resource url, request payload)

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `request` | `VraRestRequest` |  |

**Returns:** `VraRestResponse`

---

#### `createRequest`
Method to create HTTP rest Request. It holds parameter (HTTP Method (GET/PUT/POST/DELETE/PATCH), Resource Path URI, Request Payload (Stringified JSON)).

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `method` | `String` |  |
| `path` | `String` |  |
| `requestPayload` | `String` |  |

**Returns:** `VraRestRequest`

---

#### `patch`
Patch Method (Http Patch) to execute rest operation by setting Request object. Request object can hold information (http method, resource url, request payload)

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `request` | `VraRestRequest` |  |

**Returns:** `VraRestResponse`

---

## VraHost

**Description:** VMware Aria Automation Host provides access to connection host properties & validation access.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `displayName` | DisplayName for the Connection Host. | `String` | Yes |
| `name` | Host Connection Name | `String` | Yes |
| `cloudHost` | Cloud Host URL for the Host Connection. | `String` | Yes |
| `id` | Host Id. | `String` | Yes |
| `vraHost` | Host URL for the Automation Host Connection. | `String` | Yes |
| `sessionMode` | Session Mode of the Automation Host Connection (Shared Session or Per User Session). | `String` | Yes |
| `connectionType` | Connection type of the Automation Host Connection. | `String` | Yes |
| `user` | User associated with the Automation Host Connection (applicable for Shared Session Connections). | `String` | Yes |

### Methods

#### `VraHost`
Automation Host No Argument Constructor.

**Returns:** `void`

---

#### `createInfrastructureClient`


**Returns:** `VraInfrastructureClient`

---

#### `validate`
Validates the Host Connection

**Returns:** `Boolean`

---

#### `destroy`
Destroys the connection object

**Returns:** `void`

---

#### `createRestClient`
Creates a generic REST client for Automation Host

**Returns:** `VraGenericRestClient`

---

## VraHostManager

**Description:** HostManager provides all the CRUD operations for VMware Aria Automation Plugin along with Generic Rest Client support.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `defaultHostData` | Default Host Connection. | `VraHost` | Yes |

### Methods

#### `save`
Save Automation Host object.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `props` | `Object` |  |

**Returns:** `String`

---

#### `update`
Update Automation Host object.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `props` | `Object` |  |
| `host` | `VraHost` |  |

**Returns:** `void`

---

#### `createHost`
Creates a dynamic Automation Host.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `properties` | `Object` |  |

**Returns:** `VraHost`

---

#### `createHostForCurrentUser`
Creates a temporary host with the current user host and credentials.

**Returns:** `VraHost`

---

#### `findHostsByType`
Get All Automation Host by ConnectionType.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connectionType` | `String` |  |

**Returns:** `Array/VraHost`

---

#### `delete`
Delete Automation Host.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `host` | `VraHost` |  |

**Returns:** `void`

---

#### `validate`
Validate Automation Host.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `host` | `VraHost` |  |

**Returns:** `Boolean`

---

#### `getHostBySid`
Get Automation Host by Sid.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `sid` | `String` |  |

**Returns:** `VraHost`

---

## VraHref

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `hrefs` | Get hrefs | `Array/Object` | No |
| `href` | Get href | `String` | No |

### Methods

#### `VraHref`


**Returns:** `void`

---

#### `addHrefsItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `hrefsItem` | `String` |  |

**Returns:** `VraHref`

---

## VraImageMapping

**Description:** Describes an image mapping between image key and fabric image.<br>**HATEOAS** links:<br>**region** - Region - Region for the mapping.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `externalRegionId` | The id of the region for which this mapping is defined. | `String` | No |

### Methods

#### `VraImageMapping`


**Returns:** `void`

---

#### `putLinksItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `linksItem` | `VraHref` |  |

**Returns:** `VraImageMapping`

---

#### `putMappingItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `mappingItem` | `VraImageMappingDescription` |  |

**Returns:** `VraImageMapping`

---

## VraImageMappingDescription

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `owner` | Email of the user that owns the entity. | `String` | No |
| `cloudConfig` | Cloud config for this image. This cloud config will be merged during provisioning with other cloud configurations such as the bootConfig provided in MachineSpecification. | `String` | No |
| `osFamily` | Operating System family of the image. | `String` | No |
| `externalRegionId` | The regionId of the image | `String` | No |
| `description` | A human-friendly description. | `String` | No |
| `externalId` | External entity Id on the provider side. | `String` | No |
| `isPrivate` | Indicates whether this fabric image is private. For vSphere, private images are considered to be templates and snapshots and public are Content Library Items | `Boolean` | No |
| `constraints` | Constraints that are used to drive placement policies for the image that is produced from this mapping.Constraint expressions are matched against tags on existing placement targets. | `Array/Object` | No |
| `orgId` | The id of the organization this entity belongs to. | `String` | No |
| `cloudAccountIds` | Set of ids of the cloud accounts this entity belongs to. | `Array/Object` | No |
| `createdAt` | Date when the entity was created. The date is in ISO 8601 and UTC. | `String` | No |
| `name` | A human-friendly name used as an identifier in APIs that support this option. | `String` | No |
| `id` | The id of this resource instance | `String` | No |
| `updatedAt` | Date when the entity was last updated. The date is ISO 8601 and UTC. | `String` | No |

### Methods

#### `VraImageMappingDescription`


**Returns:** `void`

---

#### `addConstraintsItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `constraintsItem` | `VraConstraint` |  |

**Returns:** `VraImageMappingDescription`

---

#### `putLinksItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `linksItem` | `VraHref` |  |

**Returns:** `VraImageMappingDescription`

---

#### `putCustomPropertiesItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `customPropertiesItem` | `String` |  |

**Returns:** `VraImageMappingDescription`

---

#### `addCloudAccountIdsItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `cloudAccountIdsItem` | `String` |  |

**Returns:** `VraImageMappingDescription`

---

## VraImageProfile

**Description:** Represents a structure that holds a list of image mappings defined for the particular region.<br>**HATEOAS** links:<br>**region** - Region - Region for the profile.<br>**self** - ImageProfile - Self link to this image profile

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `owner` | Email of the user that owns the entity. | `String` | No |
| `linksExtension` |  | `String` | No |
| `externalRegionId` | The id of the region for which this profile is defined | `String` | No |
| `imageMappings` | A list of the image mappings defined for the particular region | `VraImageMapping` | No |
| `displayName` |  | `String` | Yes |
| `cloudAccountId` | Id of the cloud account this image profile belongs to. | `String` | No |
| `description` | A human-friendly description. | `String` | No |
| `orgId` | The id of the organization this entity belongs to. | `String` | No |
| `imageMappingsExtension` |  | `String` | No |
| `createdAt` | Date when the entity was created. The date is in ISO 8601 and UTC. | `String` | No |
| `internalIdString` |  | `String` | Yes |
| `name` | A human-friendly name used as an identifier in APIs that support this option. | `String` | No |
| `host` |  | `VraHost` | No |
| `id` | The id of this resource instance | `String` | No |
| `updatedAt` | Date when the entity was last updated. The date is ISO 8601 and UTC. | `String` | No |

### Methods

#### `VraImageProfile`


**Returns:** `void`

---

#### `putLinksItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `linksItem` | `VraHref` |  |

**Returns:** `VraImageProfile`

---

## VraImageProfileResult

**Description:** State object representing a query result of image profiles.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `numberOfElements` | Number of elements in the current page | `Number` | Yes |
| `content` | List of content items | `Array/Object` | Yes |
| `totalElements` | Total number of elements. In some cases the field may not be populated | `Number` | Yes |

## VraImageProfileService

### Methods

#### `VraImageProfileService`


**Returns:** `void`

---

#### `setGenericRestClient`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `genericRestClient` | `VraGenericRestClient` |  |

**Returns:** `void`

---

## VraInfrastructure

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `displayName` |  | `String` | Yes |
| `name` |  | `String` | No |

## VraInfrastructureClient

### Methods

#### `VraInfrastructureClient`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `genericRestClient` | `VraGenericRestClient` |  |

**Returns:** `void`

---

#### `createDataCollectorService`
Create Data Collector service to invoke APIs.

**Returns:** `VraDataCollectorService`

---

#### `createRequestService`
Create a Request service to invoke APIs.

**Returns:** `VraRequestService`

---

#### `createCloudZoneService`
Create Cloud Zone service to invoke APIs.

**Returns:** `VraCloudZoneService`

---

#### `createCloudAccountService`
Create a Cloud Account service to invoke APIs.

**Returns:** `VraCloudAccountService`

---

#### `createNetworkService`
Create a Network service to invoke APIs.

**Returns:** `VraNetworkService`

---

#### `createFlavorProfileService`
Create a FlavorProfile service to invoke APIs.

**Returns:** `VraFlavorProfileService`

---

#### `createStorageProfileService`
Create a StorageProfile service to invoke APIs.

**Returns:** `VraStorageProfileService`

---

#### `createTagsService`
Create Tags service to invoke APIs.

**Returns:** `VraTagsService`

---

#### `createDiskService`
Create a Disk service to invoke APIs.

**Returns:** `VraDiskService`

---

#### `createMachineService`
Create a Machine service to invoke APIs.

**Returns:** `VraMachineService`

---

#### `createProjectService`
Create a Project service to invoke APIs.

**Returns:** `VraProjectService`

---

#### `createNetworkProfileService`
Create a NetworkProfile service to invoke APIs.

**Returns:** `VraNetworkProfileService`

---

#### `createImageProfileService`
Create a ImageProfile service to invoke APIs.

**Returns:** `VraImageProfileService`

---

## VraMachine

**Description:** Represents a cloud agnostic machine.<br>**HATEOAS** links:<br>**operations** - array[String] - Supported operations for the machine.<br>**network-interfaces** - array[NetworkInterface] - Network interfaces for the machine.<br>**disks** - array[MachineDisk] - disks for the machine.<br>**deployment** - Deployment - Deployment that this machine is part of.<br>**cloud-accounts** - array[CloudAccount] - Cloud accounts where this machine is provisioned.<br>**self** - Machine - Self link to this machine

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `externalZoneId` | The external zoneId of the resource. | `String` | No |
| `externalRegionId` | The external regionId of the resource. | `String` | No |
| `description` | A human-friendly description. | `String` | No |
| `orgId` | The id of the organization this entity belongs to. | `String` | No |
| `cloudAccountIds` | Set of ids of the cloud accounts this resource belongs to. | `Array/Object` | No |
| `createdAt` | Date when the entity was created. The date is in ISO 8601 and UTC. | `String` | No |
| `hostname` | Hostname associated with this machine instance. | `String` | No |
| `provisioningStatus` | The provisioning status of the resource. One of three provisioning statuses. `PROVISIONING`: The resource is being provisioned. `READY`: The resource is already provisioned. `SUSPEND`: The resource is being destroyed. | `String` | No |
| `deploymentId` | Deployment id that is associated with this resource. | `String` | No |
| `internalIdString` |  | `String` | Yes |
| `host` |  | `VraHost` | No |
| `id` | The id of this resource instance | `String` | No |
| `updatedAt` | Date when the entity was last updated. The date is ISO 8601 and UTC. | `String` | No |
| `owner` | Email of the user that owns the entity. | `String` | No |
| `cloudAccountIdsExtension` | JSON String containing a list of Cloud account ids. | `String` | No |
| `linksExtension` | JSON String containing Links for the Machines | `String` | No |
| `address` | Primary address allocated or in use by this machine. The actual type of the address depends on the adapter type. Typically it is either the public or the external IP address. | `String` | No |
| `externalId` | External entity Id on the provider side. | `String` | No |
| `tags` | A set of tag keys and optional values that were set on this resource. | `Array/Object` | No |
| `saltConfiguration` | Salt configuration on the machine | `VraSaltConfiguration` | No |
| `bootConfig` | The cloud config data in json-escaped yaml syntax | `VraMachineBootConfig` | No |
| `name` | A human-friendly name used as an identifier in APIs that support this option. | `String` | No |
| `machinePowerState` | Power state of machine. | `String` | No |
| `tagsExtension` | JSON String containing a set of tag keys and optional values that were set on the Machine | `String` | No |
| `projectId` | The id of the project this resource belongs to. | `String` | No |
| `customPropertiesExtension` | JSON String containing key value pair of properties that will be used | `String` | No |

### Methods

#### `VraMachine`


**Returns:** `void`

---

#### `putLinksItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `linksItem` | `VraHref` |  |

**Returns:** `VraMachine`

---

#### `putCustomPropertiesItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `customPropertiesItem` | `String` |  |

**Returns:** `VraMachine`

---

#### `addTagsItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `tagsItem` | `VraTag` |  |

**Returns:** `VraMachine`

---

#### `addCloudAccountIdsItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `cloudAccountIdsItem` | `String` |  |

**Returns:** `VraMachine`

---

## VraMachineBootConfig

**Description:** Machine boot config that will be passed to the instance that can be used to perform common automated configuration tasks and even run scripts after the instance starts.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `content` | A valid cloud config data in json-escaped yaml syntax | `String` | No |

## VraMachineBootConfigSettings

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `phoneHomeShouldWait` | A phone_home module will be added to the Cloud Config and the provisioning will wait on a callback prior proceeding | `Boolean` | No |
| `phoneHomeFailOnTimeout` | In case a timeout occurs whether the provisioning process should fail or continue. | `Boolean` | No |
| `phoneHomeTimeoutSeconds` | The period of time to wait for the phone_home module callback to occur | `Number` | No |

## VraMachineResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `numberOfElements` | Number of elements in the current page | `Number` | Yes |
| `content` | List of content items | `Array/Object` | Yes |
| `totalElements` | Total number of elements. In some cases the field may not be populated | `Number` | Yes |

## VraMachineService

### Methods

#### `VraMachineService`


**Returns:** `void`

---

#### `setGenericRestClient`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `genericRestClient` | `VraGenericRestClient` |  |

**Returns:** `void`

---

#### `createMachine`
Create a Machine in Synchronous manner

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `machineSpecification` | `VraMachineSpecification` |  |

**Returns:** `VraMachine`

---

#### `shutDown`
Shutdown a Machine

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `id` | `String` |  |

**Returns:** `VraRequestTracker`

---

#### `deleteMachine`
Delete a Machine in an asynchronous manner

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `machine` | `VraMachine` |  |
| `forceDelete` | `Boolean` |  |

**Returns:** `VraRequestTracker`

---

#### `reset`
Resets a Machine

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `id` | `String` |  |

**Returns:** `VraRequestTracker`

---

#### `resize`
Resize a Machine.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `id` | `String` |  |
| `name` | `String` |  |
| `cpuCount` | `String` |  |
| `memoryInMB` | `String` |  |
| `coreCount` | `String` |  |
| `rebootMachine` | `Boolean` |  |

**Returns:** `VraRequestTracker`

---

#### `reboot`
Reboot a Machine

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `id` | `String` |  |

**Returns:** `VraRequestTracker`

---

#### `powerOn`
Power-on a Machine

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `id` | `String` |  |

**Returns:** `VraRequestTracker`

---

#### `revertMachineSnapshot`
Revert Machine Snapshot.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `machineId` | `String` |  |
| `snapshotId` | `String` |  |

**Returns:** `VraRequestTracker`

---

#### `powerOff`
Power-off a Machine

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `id` | `String` |  |

**Returns:** `VraRequestTracker`

---

#### `createMachineAsync`
Create a Machine in an asynchronous manner

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `machineSpecification` | `VraMachineSpecification` |  |

**Returns:** `VraRequestTracker`

---

#### `createMachineSnapshot`
Create Machine Snapshot.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `machineId` | `String` |  |
| `snapshotSpecification` | `VraSnapshotSpecification` |  |

**Returns:** `VraRequestTracker`

---

#### `updateMachine`
Update a Machine

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `machine` | `VraMachine` |  |
| `updateMachineSpecification` | `VraUpdateMachineSpecification` |  |

**Returns:** `VraMachine`

---

#### `detachMachineDisk`
Detach Disk from machine

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `machineId` | `String` |  |
| `diskId` | `String` |  |

**Returns:** `VraRequestTracker`

---

#### `attachMachineDisk`
Attach machine disk to a machine.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `attachmentSpecification` | `VraDiskAttachmentSpecification` |  |
| `machineId` | `String` |  |

**Returns:** `VraRequestTracker`

---

#### `deleteMachineSnapshot`
Delete Machine Snapshot.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `machineId` | `String` |  |
| `snapshotId` | `String` |  |

**Returns:** `VraRequestTracker`

---

## VraMachinesFolder

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` |  | `String` | No |

## VraMachineSpecification

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `image` | Type of image used for this machine. | `String` | No |
| `disks` | A set of disk specifications for this machine. | `Array/Object` | No |
| `imageDiskConstraints` | Constraints that are used to drive placement policies for the image disk. Constraint expressions are matched against tags on existing placement targets. | `Array/Object` | No |
| `description` | Describes machine within the scope of your organization and is not propagated to the cloud | `String` | No |
| `constraints` | Constraints that are used to drive placement policies for the virtual machine that is produced from this specification. Constraint expressions are matched against tags on existing placement targets. | `Array/Object` | No |
| `machineCount` | Number of machines to provision - default 1. | `Number` | No |
| `tags` | A set of tag keys and optional values that should be set on any resource that is produced from this specification. | `Array/Object` | No |
| `flavor` | Flavor of machine instance. | `String` | No |
| `saltConfiguration` | Settings to apply salt configuration on the provisioned machine. | `VraSaltConfiguration` | No |
| `bootConfigSettings` | A set of settings that specify how the provided Boot Config should be handled | `VraMachineBootConfigSettings` | No |
| `deploymentId` | The id of the deployment that is associated with this resource | `String` | No |
| `bootConfig` | A valid cloud config data in json-escaped yaml syntax | `VraMachineBootConfig` | No |
| `nics` | A set of network interface controller specifications for this machine. If not specified, then a default network connection will be created. | `Array/Object` | No |
| `name` | A human-friendly name used as an identifier in APIs that support this option. | `String` | No |
| `flavorRef` | Provider specific flavor reference. Valid if no flavor property is provided | `String` | No |
| `remoteAccess` | Settings to remotely connect to the provisioned machine, by public/private key pair or username/password authentication. AWS and vSphere support key pair. Azure supports key pair or username/password. | `VraRemoteAccessSpecification` | No |
| `imageRef` | Direct image reference used for this machine (name, path, location, uri, etc.). Valid if no image property is provided | `String` | No |
| `projectId` | The id of the project the current user belongs to. | `String` | No |

### Methods

#### `VraMachineSpecification`


**Returns:** `void`

---

#### `addNicsItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `nicsItem` | `VraNetworkInterfaceSpecification` |  |

**Returns:** `VraMachineSpecification`

---

#### `addImageDiskConstraintsItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `imageDiskConstraintsItem` | `VraConstraint` |  |

**Returns:** `VraMachineSpecification`

---

#### `addConstraintsItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `constraintsItem` | `VraConstraint` |  |

**Returns:** `VraMachineSpecification`

---

#### `addTagsItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `tagsItem` | `VraTag` |  |

**Returns:** `VraMachineSpecification`

---

#### `addDisksItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `disksItem` | `VraDiskAttachmentSpecification` |  |

**Returns:** `VraMachineSpecification`

---

#### `putCustomPropertiesItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `customPropertiesItem` | `String` |  |

**Returns:** `VraMachineSpecification`

---

## VraNetwork

**Description:** The network object is an opaque reference to a logical network that network interfaces are attached to.<br> Based on settings specified by your cloud administrator, it may be a reference to an existing network, or be backed by an on-demand network created for isolation, or a security group that will be attached to machines as part of provisioning.<br> Networks are a limited resource, when it is not needed it should be deleted.<br>**HATEOAS** links:<br>**self** - Network - Self link to this network

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `owner` | Email of the user that owns the entity. | `String` | No |
| `cloudAccountIdsExtension` |  | `String` | No |
| `linksExtension` |  | `String` | No |
| `externalZoneId` | The external zoneId of the resource. | `String` | No |
| `externalRegionId` | The external regionId of the resource. | `String` | No |
| `externalId` | External entity Id on the provider side. | `String` | No |
| `description` | A human-friendly description. | `String` | No |
| `orgId` | The id of the organization this entity belongs to. | `String` | No |
| `tags` | A set of tag keys and optional values that were set on this resource. | `Array/Object` | No |
| `cloudAccountIds` | Set of ids of the cloud accounts this resource belongs to. | `Array/Object` | No |
| `createdAt` | Date when the entity was created. The date is in ISO 8601 and UTC. | `String` | No |
| `provisioningStatus` | The provisioning status of the resource. One of three provisioning statuses. `PROVISIONING`: The resource is being provisioned. `READY`: The resource is already provisioned. `SUSPEND`: The resource is being destroyed. | `String` | No |
| `deploymentId` | Deployment id that is associated with this resource. | `String` | No |
| `internalIdString` |  | `String` | Yes |
| `name` | A human-friendly name used as an identifier in APIs that support this option. | `String` | No |
| `host` |  | `VraHost` | No |
| `tagsExtension` |  | `String` | No |
| `cidr` | IPv4 address range of the network in CIDR format | `String` | No |
| `id` | The id of this resource instance | `String` | No |
| `projectId` | The id of the project this resource belongs to. | `String` | No |
| `updatedAt` | Date when the entity was last updated. The date is ISO 8601 and UTC. | `String` | No |
| `customPropertiesExtension` |  | `String` | No |

### Methods

#### `VraNetwork`


**Returns:** `void`

---

#### `putCustomPropertiesItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `customPropertiesItem` | `String` |  |

**Returns:** `VraNetwork`

---

#### `putLinksItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `linksItem` | `VraHref` |  |

**Returns:** `VraNetwork`

---

#### `addCloudAccountIdsItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `cloudAccountIdsItem` | `String` |  |

**Returns:** `VraNetwork`

---

#### `addTagsItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `tagsItem` | `VraTag` |  |

**Returns:** `VraNetwork`

---

## VraNetworkInterface

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `owner` | Email of the user that owns the entity. | `String` | No |
| `addresses` | A list of IP addresses allocated or in use by this network interface. | `Array/Object` | No |
| `externalRegionId` | The external regionId of the network interface. | `String` | No |
| `externalId` | External entity Id on the provider side. | `String` | No |
| `description` | A human-friendly description. | `String` | No |
| `deviceIndex` | The device index of this network interface. | `Number` | No |
| `orgId` | The id of the organization this entity belongs to. | `String` | No |
| `tags` | A set of tag keys and optional values that were set on this network interface. | `Array/Object` | No |
| `cloudAccountIds` | Set of ids of the cloud accounts this entity belongs to. | `Array/Object` | No |
| `createdAt` | Date when the entity was created. The date is in ISO 8601 and UTC. | `String` | No |
| `securityGroupIds` | A list of security group ids this network interface is associated with | `Array/Object` | No |
| `internalIdString` |  | `String` | Yes |
| `name` | A human-friendly name used as an identifier in APIs that support this option. | `String` | No |
| `host` |  | `VraHost` | No |
| `id` | The id of this resource instance | `String` | No |
| `updatedAt` | Date when the entity was last updated. The date is ISO 8601 and UTC. | `String` | No |

### Methods

#### `VraNetworkInterface`


**Returns:** `void`

---

#### `addTagsItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `tagsItem` | `VraTag` |  |

**Returns:** `VraNetworkInterface`

---

#### `addAddressesItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `addressesItem` | `String` |  |

**Returns:** `VraNetworkInterface`

---

#### `addCloudAccountIdsItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `cloudAccountIdsItem` | `String` |  |

**Returns:** `VraNetworkInterface`

---

#### `putLinksItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `linksItem` | `VraHref` |  |

**Returns:** `VraNetworkInterface`

---

#### `addSecurityGroupIdsItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `securityGroupIdsItem` | `String` |  |

**Returns:** `VraNetworkInterface`

---

#### `putCustomPropertiesItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `customPropertiesItem` | `String` |  |

**Returns:** `VraNetworkInterface`

---

## VraNetworkInterfaceSpecification

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `addresses` | A list of IP addresses allocated or in use by this network interface. | `Array/Object` | No |
| `macAddress` | MAC address of the network interface. | `String` | No |
| `securityGroupIds` | A list of security group ids which this network interface will be assigned to. | `Array/Object` | No |
| `fabricNetworkId` | Id of the fabric network for the network interface. Either networkId or fabricNetworkId can be specified, not both. | `String` | No |
| `name` | A human-friendly name used as an identifier in APIs that support this option. | `String` | No |
| `description` | A human-friendly description. | `String` | No |
| `networkId` | Id of the network for the network interface. Either networkId or fabricNetworkId can be specified, not both. | `String` | No |
| `deviceIndex` | The device index of this network interface. | `Number` | No |

### Methods

#### `VraNetworkInterfaceSpecification`


**Returns:** `void`

---

#### `putCustomPropertiesItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `customPropertiesItem` | `String` |  |

**Returns:** `VraNetworkInterfaceSpecification`

---

#### `addSecurityGroupIdsItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `securityGroupIdsItem` | `String` |  |

**Returns:** `VraNetworkInterfaceSpecification`

---

#### `addAddressesItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `addressesItem` | `String` |  |

**Returns:** `VraNetworkInterfaceSpecification`

---

## VraNetworkProfile

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `owner` | Email of the user that owns the entity. | `String` | No |
| `linksExtension` |  | `String` | No |
| `externalRegionId` | The id of the region for which this profile is defined | `String` | No |
| `cloudAccountId` | Id of the cloud account this profile belongs to. | `String` | No |
| `description` | A human-friendly description. | `String` | No |
| `isolationNetworkDomainCIDR` | CIDR of the isolation network domain. | `String` | No |
| `orgId` | The id of the organization this entity belongs to. | `String` | No |
| `tags` | A set of tag keys and optional values that were set on this Network Profile. | `Array/Object` | No |
| `createdAt` | Date when the entity was created. The date is in ISO 8601 and UTC. | `String` | No |
| `internalIdString` |  | `String` | Yes |
| `name` | A human-friendly name used as an identifier in APIs that support this option. | `String` | No |
| `host` |  | `VraHost` | No |
| `tagsExtension` |  | `String` | No |
| `id` | The id of this resource instance | `String` | No |
| `isolatedNetworkCIDRPrefix` | The CIDR prefix length to be used for the isolated networks that are created with the network profile. | `Number` | No |
| `updatedAt` | Date when the entity was last updated. The date is ISO 8601 and UTC. | `String` | No |
| `customPropertiesExtension` |  | `String` | No |

### Methods

#### `VraNetworkProfile`


**Returns:** `void`

---

#### `addTagsItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `tagsItem` | `VraTag` |  |

**Returns:** `VraNetworkProfile`

---

#### `putCustomPropertiesItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `customPropertiesItem` | `String` |  |

**Returns:** `VraNetworkProfile`

---

#### `putLinksItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `linksItem` | `VraHref` |  |

**Returns:** `VraNetworkProfile`

---

## VraNetworkProfileResult

**Description:** State object representing a query result of network profiles.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `numberOfElements` | Number of elements in the current page | `Number` | Yes |
| `content` | List of content items | `Array/Object` | Yes |
| `totalElements` | Total number of elements. In some cases the field may not be populated | `Number` | Yes |

## VraNetworkProfileService

### Methods

#### `VraNetworkProfileService`


**Returns:** `void`

---

#### `setGenericRestClient`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `genericRestClient` | `VraGenericRestClient` |  |

**Returns:** `void`

---

## VraNetworkService

### Methods

#### `VraNetworkService`


**Returns:** `void`

---

#### `setGenericRestClient`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `genericRestClient` | `VraGenericRestClient` |  |

**Returns:** `void`

---

#### `deleteNetwork`
Delete a network in an asynchronous manner.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `networkId` | `String` |  |
| `forceDelete` | `Boolean` |  |

**Returns:** `VraRequestTracker`

---

#### `createNetwork`
Create a network Provision a new network based on the passed in constraints. The network should be destroyed after the machine is destroyed to free up resources.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `networkSpecification` | `VraNetworkSpecification` |  |

**Returns:** `VraRequestTracker`

---

## VraNetworkSpecification

**Description:** Specification for a cloud network

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `deploymentId` | The id of the deployment that is associated with this resource | `String` | No |
| `outboundAccess` | Flag to indicate if the network needs to have outbound access or not. Default is true. This field will be ignored if there is proper input for networkType customProperty | `Boolean` | No |
| `name` | A human-friendly name used as an identifier in APIs that support this option. | `String` | No |
| `description` | A human-friendly description. | `String` | No |
| `createGateway` | Flag to indicate if the network creation should create a gateway. Default is true. | `Boolean` | No |
| `constraints` | Constraints that are used to drive placement policies for the network that is produced from this specification, related with the network profile. Constraint expressions are matched against tags on existing placement targets. | `Array/Object` | No |
| `projectId` | The id of the project the current user belongs to. | `String` | No |
| `tags` | A set of tag keys and optional values that should be set on any resource that is produced from this specification. | `Array/Object` | No |

### Methods

#### `VraNetworkSpecification`


**Returns:** `void`

---

#### `addConstraintsItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `constraintsItem` | `VraConstraint` |  |

**Returns:** `VraNetworkSpecification`

---

#### `addTagsItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `tagsItem` | `VraTag` |  |

**Returns:** `VraNetworkSpecification`

---

#### `putCustomPropertiesItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `customPropertiesItem` | `String` |  |

**Returns:** `VraNetworkSpecification`

---

## VraProject

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `owner` | Email of the user that owns the entity. | `String` | No |
| `viewersExtension` | JSON String containing List of viewer users associated with the project. | `String` | No |
| `linksExtension` | JSON String containing Links for the Project | `String` | No |
| `constraintsExtension` | JSON String containing List of storage, network and extensibility constraints to be applied when provisioning through this project. | `String` | No |
| `zonesExtension` | JSON String containing List of Cloud Zones assigned to this project. You can limit deployment to a single region or allow multi-region placement by adding more than one cloud zone to a project. A cloud zone lists available resources. Use tags on resources to control workload placement. | `String` | No |
| `operationTimeout` | The timeout that should be used for Blueprint operations and Provisioning tasks. The timeout is in seconds | `Number` | No |
| `description` | A human-friendly description. | `String` | No |
| `zones` | List of Cloud Zones assigned to this project. You can limit deployment to a single region or allow multi-region placement by adding more than one cloud zone to a project. A cloud zone lists available resources. Use tags on resources to control workload placement. | `Array/Object` | No |
| `orgId` | The id of the organization this entity belongs to. | `String` | No |
| `memberExtension` | JSON String containing List of member users associated with the project. | `String` | No |
| `createdAt` | Date when the entity was created. The date is in ISO 8601 and UTC. | `String` | No |
| `viewers` | List of viewer users associated with the project. | `Array/Object` | No |
| `machineNamingTemplate` | The naming template to be used for machines provisioned in this project | `String` | No |
| `sharedResources` | Specifies whether the resources in this projects are shared or not. | `Boolean` | No |
| `members` | List of member users associated with the project. | `Array/Object` | No |
| `internalIdString` |  | `String` | Yes |
| `name` | A human-friendly name used as an identifier in APIs that support this option. | `String` | No |
| `host` |  | `VraHost` | No |
| `placementPolicy` | Placement policy for the project. Determines how a zone will be selected for provisioning. DEFAULT or SPREAD. | `String` | No |
| `id` | The id of this resource instance | `String` | No |
| `administratorsExtension` | JSON String containing List of administrator users associated with the project. Only administrators can manage project's configuration. | `String` | No |
| `administrators` | List of administrator users associated with the project. Only administrators can manage project's configuration. | `Array/Object` | No |
| `updatedAt` | Date when the entity was last updated. The date is ISO 8601 and UTC. | `String` | No |
| `customPropertiesExtension` | JSON String containing the project custom properties which are added to all requests in this project | `String` | No |

### Methods

#### `VraProject`


**Returns:** `void`

---

#### `putCustomPropertiesItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `customPropertiesItem` | `String` |  |

**Returns:** `VraProject`

---

#### `addMembersItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `membersItem` | `VraUser` |  |

**Returns:** `VraProject`

---

#### `addViewersItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `viewersItem` | `VraUser` |  |

**Returns:** `VraProject`

---

#### `addZonesItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `zonesItem` | `VraZoneAssignment` |  |

**Returns:** `VraProject`

---

#### `addAdministratorsItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `administratorsItem` | `VraUser` |  |

**Returns:** `VraProject`

---

#### `putLinksItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `linksItem` | `VraHref` |  |

**Returns:** `VraProject`

---

#### `putConstraintsItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `constraintsItem` | `Array/VraConstraint` |  |

**Returns:** `VraProject`

---

## VraProjectResourceMetadata

**Description:** Represents the resource metadata associated with a project

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `internalIdString` |  | `String` | Yes |
| `host` |  | `VraHost` | No |
| `tags` | A list of keys and optional values to be applied to compute resources provisioned in a project | `Array/Object` | No |

### Methods

#### `VraProjectResourceMetadata`


**Returns:** `void`

---

#### `addTagsItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `tagsItem` | `VraTag` |  |

**Returns:** `VraProjectResourceMetadata`

---

## VraProjectResourceMetadataSpecification

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `tags` | A list of keys and optional values to be applied to compute resources provisioned in a project | `Array/Object` | No |

### Methods

#### `VraProjectResourceMetadataSpecification`


**Returns:** `void`

---

#### `addTagsItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `tagsItem` | `VraTag` |  |

**Returns:** `VraProjectResourceMetadataSpecification`

---

## VraProjectResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `numberOfElements` | Number of elements in the current page | `Number` | Yes |
| `content` | List of content items | `Array/Object` | Yes |
| `totalElements` | Total number of elements. In some cases the field may not be populated | `Number` | Yes |

## VraProjectService

### Methods

#### `VraProjectService`


**Returns:** `void`

---

#### `setGenericRestClient`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `genericRestClient` | `VraGenericRestClient` |  |

**Returns:** `void`

---

#### `updateProjectResourceMetadata`
Update project resource metadata by a given project id.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `id` | `String` |  |
| `projectResourceMetadataSpecification` | `VraProjectResourceMetadataSpecification` |  |

**Returns:** `VraProject`

---

#### `updateProject`
Updates a project by id.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `id` | `String` |  |
| `projectSpecification` | `VraProjectSpecification` |  |

**Returns:** `VraProject`

---

#### `deleteProject`
Deletes a project with a given Project object.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `project` | `VraProject` |  |

**Returns:** `void`

---

#### `createProject`
Creates a project.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `request` | `VraProjectSpecification` |  |

**Returns:** `VraProject`

---

#### `deleteProjectById`
Deletes a project with a given id.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `id` | `String` |  |

**Returns:** `void`

---

## VraProjectSpecification

**Description:** Represents a specification for a project.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `viewers` | List of viewer users associated with the project. | `Array/Object` | No |
| `machineNamingTemplate` | The naming template to be used for machines provisioned in this project | `String` | No |
| `sharedResources` | Specifies whether the resources in this projects are shared or not. If not set default will be used. | `Boolean` | No |
| `operationTimeout` | The timeout that should be used for Blueprint operations and Provisioning tasks. The timeout is in seconds | `Number` | No |
| `members` | List of member users associated with the project. | `Array/Object` | No |
| `zoneAssignmentConfigurations` | List of configurations for zone assignment to a project. | `Array/Object` | No |
| `name` | A human-friendly name used as an identifier in APIs that support this option. | `String` | No |
| `placementPolicy` | Placement policy for the project. Determines how a zone will be selected for provisioning. DEFAULT or SPREAD. | `String` | No |
| `description` | A human-friendly description. | `String` | No |
| `administrators` | List of administrator users associated with the project. Only administrators can manage project's configuration. | `Array/Object` | No |

### Methods

#### `VraProjectSpecification`


**Returns:** `void`

---

#### `putConstraintsItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `constraintsItem` | `Array/VraConstraint` |  |

**Returns:** `VraProjectSpecification`

---

#### `addZoneAssignmentConfigurationsItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `zoneAssignmentConfigurationsItem` | `VraZoneAssignmentSpecification` |  |

**Returns:** `VraProjectSpecification`

---

#### `addMembersItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `membersItem` | `VraUser` |  |

**Returns:** `VraProjectSpecification`

---

#### `addViewersItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `viewersItem` | `VraUser` |  |

**Returns:** `VraProjectSpecification`

---

#### `addAdministratorsItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `administratorsItem` | `VraUser` |  |

**Returns:** `VraProjectSpecification`

---

#### `putCustomPropertiesItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `customPropertiesItem` | `String` |  |

**Returns:** `VraProjectSpecification`

---

## VraRegion

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `owner` | Email of the user that owns the entity. | `String` | No |
| `createdAt` | Date when the entity was created. The date is in ISO 8601 and UTC. | `String` | No |
| `externalRegionId` | Unique identifier of region on the provider side. | `String` | No |
| `internalIdString` |  | `String` | Yes |
| `cloudAccountId` | The id of the cloud account this region belongs to. | `String` | No |
| `name` | Name of region on the provider side. In vSphere, the name of the region is different from its id. | `String` | No |
| `host` |  | `VraHost` | No |
| `id` | The id of this resource instance | `String` | No |
| `orgId` | The id of the organization this entity belongs to. | `String` | No |
| `updatedAt` | Date when the entity was last updated. The date is ISO 8601 and UTC. | `String` | No |

### Methods

#### `VraRegion`


**Returns:** `void`

---

#### `putLinksItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `linksItem` | `VraHref` |  |

**Returns:** `VraRegion`

---

## VraRegionResult

**Description:** State object representing a query result of regions.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `numberOfElements` | Number of elements in the current page | `Number` | Yes |
| `content` | List of content items | `Array/Object` | Yes |
| `totalElements` | Total number of elements. In some cases the field may not be populated | `Number` | Yes |

## VraRegionSpecification

**Description:** Specification for a region in a cloud account.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `externalRegionId` | Unique identifier of region on the provider side. | `String` | No |
| `name` | Name of region on the provider side. In vSphere, the name of the region is different from its id. | `String` | No |

## VraRemoteAccessSpecification

**Description:** Represents a specification for machine's remote access settings.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `password` | Remote access password for the Azure machine. | `String` | No |
| `sshKey` | In key pair authentication, the public key on the provisioned machine. Users are expected to log in with their private key and a default username from the cloud provider. An AWS Ubuntu image comes with default user ubuntu, and Azure comes with default user azureuser. To log in by SSH: `ssh -i <private-key-path> ubuntu@52.90.80.153` `ssh -i <private-key-path> azureuser@40.76.14.255` | `String` | No |
| `keyPair` | Key Pair Name. | `String` | No |
| `authentication` | One of four authentication types. `generatedPublicPrivateKey`: The provisioned machine generates the public/private key pair and enables SSH to use them without user input. `publicPrivateKey`: The user enters the private key in the SSH command. See remoteAccess.sshKey. `usernamePassword`: The user enters a username and password for remote access. `keyPairName`: The user enters an already existing keyPair name. See remoteAccess.keyPair | `String` | No |
| `username` | Remote access username for the Azure machine. | `String` | No |

## VraRequestService

### Methods

#### `VraRequestService`


**Returns:** `void`

---

#### `setGenericRestClient`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `genericRestClient` | `VraGenericRestClient` |  |

**Returns:** `void`

---

#### `awaitRequestTrackerResponse`
Awaits successfully completed RequestTracker Response.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `requestTracker` | `VraRequestTracker` |  |

**Returns:** `VraRequestTracker`

---

#### `deleteRequestTracker`
Delete a request tracker object for a given request id.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `requestTrackerId` | `String` |  |

**Returns:** `void`

---

## VraRequestTracker

**Description:** An object used to track long-running operations.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `deploymentId` | ID of the deployment, this request is connected to. | `String` | No |
| `internalIdString` |  | `String` | Yes |
| `name` | Name of the operation. | `String` | No |
| `host` |  | `VraHost` | No |
| `resources` | Collection of resources. | `Array/Object` | No |
| `progress` | Progress of the request as percentage. | `Number` | No |
| `id` | ID of this request. | `String` | No |
| `requestTrackerStatus` | Status of the request. | `String` | No |
| `message` | Status message of the request. | `String` | No |
| `selfLink` | Self link of this request. | `String` | No |

### Methods

#### `VraRequestTracker`


**Returns:** `void`

---

#### `addResourcesItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `resourcesItem` | `String` |  |

**Returns:** `VraRequestTracker`

---

## VraRequestTrackerResult

**Description:** State object representing a query result of request tracker objects.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `numberOfElements` | Number of elements in the current page | `Number` | Yes |
| `internalIdString` |  | `String` | Yes |
| `host` |  | `VraHost` | No |
| `content` | List of content items | `Array/Object` | Yes |
| `totalElements` | Total number of elements. In some cases the field may not be populated | `Number` | Yes |

## VraRestRequest

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `path` | Path parameter for the Request URL. | `String` | No |
| `method` | HTTP Method type for the Request URL. | `String` | No |
| `payload` | Request Payload for the Http Request. | `String` | No |

### Methods

#### `setHeader`
Sets Headers to the Http Request Object.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `value` | `String` |  |

**Returns:** `void`

---

#### `getHeader`
Gets Http Header value for the key from the Http Request.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `header` | `String` |  |

**Returns:** `String`

---

## VraRestResponse

**Description:** Utility class used for VMware Aria Automation API server response.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `contentAsString` | The Server's response body as string. | `String` | Yes |
| `allHeaders` | Retrieves the server's response headers as a Properties object. | `Properties` | Yes |
| `contentLength` | The Server's response content length. | `Number` | Yes |
| `statusMessage` | The Server's response status message. | `String` | Yes |
| `statusCode` | The Server's response status code. | `Number` | Yes |

### Methods

#### `getHeaderValues`
Retrieves the server's response header values per header with specific name.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `headerName` | `String` |  |

**Returns:** `Array/String`

---

## VraSaltConfiguration

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `installerFileName` | Salt minion installer file name on the master. | `String` | No |
| `masterId` | Salt master id to which the Salt minion will be connected to. | `String` | No |
| `saltEnvironment` | Salt environment to use when running state files. | `String` | No |
| `pillarEnvironment` | Pillar environment to use when running state files. | `String` | No |
| `stateFiles` | List of state files to run on the deployed minion. | `Array/Object` | No |
| `minionId` | Salt minion ID to be assigned to the deployed minion. | `String` | No |

### Methods

#### `VraSaltConfiguration`


**Returns:** `void`

---

#### `putAdditionalAuthParamsItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `additionalAuthParamsItem` | `String` |  |

**Returns:** `VraSaltConfiguration`

---

#### `addStateFilesItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `stateFilesItem` | `String` |  |

**Returns:** `VraSaltConfiguration`

---

#### `putAdditionalMinionParamsItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `additionalMinionParamsItem` | `String` |  |

**Returns:** `VraSaltConfiguration`

---

#### `putVariablesItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `variablesItem` | `String` |  |

**Returns:** `VraSaltConfiguration`

---

## VraSnapshot

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `owner` | Email of the user that owns the entity. | `String` | No |
| `createdAt` | Date when the entity was created. The date is in ISO 8601 and UTC. | `String` | No |
| `linksExtension` |  | `String` | No |
| `isCurrent` | Indicates if the snapshot is the current snapshot for machine | `Boolean` | No |
| `displayName` |  | `String` | Yes |
| `internalIdString` |  | `String` | Yes |
| `name` | A human-friendly name used as an identifier in APIs that support this option. | `String` | No |
| `host` |  | `VraHost` | No |
| `description` | A human-friendly description. | `String` | No |
| `id` | The id of this resource instance | `String` | No |
| `orgId` | The id of the organization this entity belongs to. | `String` | No |
| `updatedAt` | Date when the entity was last updated. The date is ISO 8601 and UTC. | `String` | No |

### Methods

#### `VraSnapshot`


**Returns:** `void`

---

#### `putLinksItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `linksItem` | `VraHref` |  |

**Returns:** `VraSnapshot`

---

## VraSnapshotSpecification

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `owner` | Email of the user that owns the entity. | `String` | No |
| `createdAt` | Date when the entity was created. The date is in ISO 8601 and UTC. | `String` | No |
| `snapshotMemory` | Captures the full state of a running virtual machine, including the memory. | `Boolean` | No |
| `name` | A human-friendly name used as an identifier in APIs that support this option. | `String` | No |
| `description` | A human-friendly description. | `String` | No |
| `id` | The id of this resource instance | `String` | No |
| `orgId` | The id of the organization this entity belongs to. | `String` | No |
| `updatedAt` | Date when the entity was last updated. The date is ISO 8601 and UTC. | `String` | No |

### Methods

#### `VraSnapshotSpecification`


**Returns:** `void`

---

#### `putCustomPropertiesItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `customPropertiesItem` | `String` |  |

**Returns:** `VraSnapshotSpecification`

---

#### `putLinksItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `linksItem` | `VraHref` |  |

**Returns:** `VraSnapshotSpecification`

---

## VraStorageProfile

**Description:** Represents a structure that holds details of storage profile linked to a cloud zone / region.**HATEOAS** links:<br>**region** - Region - Region for the profile.<br>**self** - StorageProfile - Self link to this storage profile.<br>**datastore** - FabricVsphereDatastore - Datastore of this storage profile.<br>**storage-policy** - FabricVsphereStoragePolicy - vSphere storage policy for this profile.<br> **storage-account** - FabricAzureStorageAccount - Azure storage account for this profile.<br>

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `owner` | Email of the user that owns the entity. | `String` | No |
| `linksExtension` |  | `String` | No |
| `supportsEncryption` |  | `Boolean` | No |
| `externalRegionId` | The id of the region for which this profile is defined | `String` | No |
| `cloudAccountId` | Id of the cloud account this storage profile belongs to. | `String` | No |
| `description` | A human-friendly description. | `String` | No |
| `orgId` | The id of the organization this entity belongs to. | `String` | No |
| `tags` | A list of tags that represent the capabilities of this storage profile | `Array/Object` | No |
| `createdAt` | Date when the entity was created. The date is in ISO 8601 and UTC. | `String` | No |
| `diskPropertiesExtension` |  | `String` | No |
| `internalIdString` |  | `String` | Yes |
| `name` | A human-friendly name used as an identifier in APIs that support this option. | `String` | No |
| `host` |  | `VraHost` | No |
| `tagsExtension` |  | `String` | No |
| `defaultItem` |  | `Boolean` | No |
| `id` | The id of this resource instance | `String` | No |
| `updatedAt` | Date when the entity was last updated. The date is ISO 8601 and UTC. | `String` | No |

### Methods

#### `VraStorageProfile`


**Returns:** `void`

---

#### `addTagsItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `tagsItem` | `VraTag` |  |

**Returns:** `VraStorageProfile`

---

#### `isDefaultItem`
Indicates if a storage profile is default profile or not.

**Returns:** `Boolean`

---

#### `isSupportsEncryption`
Indicates whether this storage profile supports encryption or not.

**Returns:** `Boolean`

---

#### `putLinksItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `linksItem` | `VraHref` |  |

**Returns:** `VraStorageProfile`

---

#### `putDiskPropertiesItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `diskPropertiesItem` | `String` |  |

**Returns:** `VraStorageProfile`

---

## VraStorageProfileResult

**Description:** State object representing a query result of storage profiles.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `numberOfElements` | Number of elements in the current page | `Number` | Yes |
| `content` | List of content items | `Array/Object` | Yes |
| `totalElements` | Total number of elements. In some cases the field may not be populated | `Number` | Yes |

## VraStorageProfileService

### Methods

#### `VraStorageProfileService`


**Returns:** `void`

---

#### `setGenericRestClient`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `genericRestClient` | `VraGenericRestClient` |  |

**Returns:** `void`

---

## VraTag

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `displayName` |  | `String` | Yes |
| `internalIdString` |  | `String` | Yes |
| `host` |  | `VraHost` | No |
| `value` | Tag's value. | `String` | No |
| `key` | Tag's key. | `String` | No |

## VraTagResult

**Description:** State object representing a query result of tags.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `numberOfElements` | Number of elements in the current page | `Number` | Yes |
| `content` | List of content items | `Array/Object` | Yes |
| `totalElements` | Total number of elements. In some cases the field may not be populated | `Number` | Yes |

## VraTagsService

### Methods

#### `VraTagsService`


**Returns:** `void`

---

#### `setGenericRestClient`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `genericRestClient` | `VraGenericRestClient` |  |

**Returns:** `void`

---

## VraUpdateCloudAccountVsphereSpecification

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `hostName` | Host name for the vSphere endpoint | `String` | No |
| `acceptSelfSignedCertificate` | Accept self signed certificate when connecting to vSphere | `Boolean` | No |
| `createDefaultZones` | Create default cloud zones for the enabled regions. | `Boolean` | No |
| `password` | Password for the user used to authenticate with the cloud Account | `String` | No |
| `associatedCloudAccountIds` | NSX-V or NSX-T account to associate with this vSphere cloud account. vSphere cloud account can be a single NSX-V cloud account or a single NSX-T cloud account. | `Array/Object` | No |
| `regions` | A set of regions to enable provisioning on.Refer to /iaas/api/cloud-accounts/region-enumeration. | `Array/Object` | No |
| `dcid` | Identifier of a data collector vm deployed in the on premise infrastructure. Refer to the data-collector API to create or list data collectors. Note: Data collector endpoints are not available in VMware Aria Automation(on-prem) release. | `String` | No |
| `name` | A human-friendly name used as an identifier in APIs that support this option. | `String` | No |
| `description` | A human-friendly description. | `String` | No |
| `username` | Username to authenticate with the cloud account | `String` | No |
| `tags` | A set of tag keys and optional values to set on the Cloud Account | `Array/Object` | No |

### Methods

#### `VraUpdateCloudAccountVsphereSpecification`


**Returns:** `void`

---

#### `addAssociatedCloudAccountIdsItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `associatedCloudAccountIdsItem` | `String` |  |

**Returns:** `VraUpdateCloudAccountVsphereSpecification`

---

#### `addTagsItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `tagsItem` | `VraTag` |  |

**Returns:** `VraUpdateCloudAccountVsphereSpecification`

---

#### `addRegionsItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `regionsItem` | `VraRegionSpecification` |  |

**Returns:** `VraUpdateCloudAccountVsphereSpecification`

---

## VraUpdateMachineSpecification

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `description` | Describes machine within the scope of your organization and is not propagated to the cloud | `String` | No |
| `tags` | A set of tag keys and optional values that should be set on any resource that is produced from this specification. | `Array/Object` | No |

### Methods

#### `VraUpdateMachineSpecification`


**Returns:** `void`

---

#### `addTagsItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `tagsItem` | `VraTag` |  |

**Returns:** `VraUpdateMachineSpecification`

---

#### `putCustomPropertiesItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `customPropertiesItem` | `String` |  |

**Returns:** `VraUpdateMachineSpecification`

---

## VraUser

**Description:** A representation of a user.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `type` | Type of the principal. Currently supported 'user' (default) and 'group'. | `String` | No |
| `email` | The email of the user or name of the group. | `String` | No |

## VraZone

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `owner` | Email of the user that owns the entity. | `String` | No |
| `linksExtension` | JSON String containing Links for the Zone | `String` | No |
| `externalRegionId` | The id of the region for which this zone is defined | `String` | No |
| `cloudAccountId` | Cloud account this zone belongs to. | `String` | No |
| `description` | A human-friendly description. | `String` | No |
| `orgId` | The id of the organization this entity belongs to. | `String` | No |
| `tags` | A set of tag keys and optional values that were set on this placement. | `Array/Object` | No |
| `createdAt` | Date when the entity was created. The date is in ISO 8601 and UTC. | `String` | No |
| `folder` | The folder relative path to the datacenter where resources are deployed to. (only applicable for vSphere cloud zones) | `String` | No |
| `tagsToMatch` | A set of tag keys and optional values for compute resource filtering. | `Array/Object` | No |
| `internalIdString` |  | `String` | Yes |
| `name` | A human-friendly name used as an identifier in APIs that support this option. | `String` | No |
| `host` |  | `VraHost` | No |
| `placementPolicy` | The placement policy for the zone. | `String` | No |
| `tagsExtension` | JSON String containing a set of tag keys and optional values that were set on this placement. | `String` | No |
| `tagsToMatchExtension` | JSON String containing A set of tag keys and optional values for compute resource filtering. | `String` | No |
| `id` | The id of this resource instance | `String` | No |
| `updatedAt` | Date when the entity was last updated. The date is ISO 8601 and UTC. | `String` | No |
| `customPropertiesExtension` | JSON String containing key value pair of properties that will be used | `String` | No |

### Methods

#### `VraZone`


**Returns:** `void`

---

#### `addTagsToMatchItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `tagsToMatchItem` | `VraTag` |  |

**Returns:** `VraZone`

---

#### `putLinksItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `linksItem` | `VraHref` |  |

**Returns:** `VraZone`

---

#### `addTagsItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `tagsItem` | `VraTag` |  |

**Returns:** `VraZone`

---

#### `putCustomPropertiesItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `customPropertiesItem` | `String` |  |

**Returns:** `VraZone`

---

## VraZoneAssignment

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `allocatedCpu` | The amount of CPUs currently allocated. | `Number` | No |
| `storageLimitGB` | Defines an upper limit on storage that can be requested from a cloud zone which is part of this project. Default is 0 (unlimited storage). Please note that this feature is supported only for vSphere cloud zones. Not valid for other cloud zone types. | `Number` | No |
| `allocatedStorageGB` | The amount of storage currently allocated. | `Number` | No |
| `allocatedInstancesCount` | The number of resource instances currently allocated | `Number` | No |
| `cpuLimit` | The maximum amount of cpus that can be used by this cloud zone. Default is 0 (unlimited cpu). | `Number` | No |
| `memoryLimitMB` | The maximum amount of memory that can be used by this cloud zone. Default is 0 (unlimited memory). | `Number` | No |
| `allocatedMemoryMB` | The amount of memory currently allocated. | `Number` | No |
| `zoneId` | The Cloud Zone Id | `String` | No |
| `maxNumberInstances` | The maximum number of instances that can be provisioned in this cloud zone. Default is 0 (unlimited instances). | `Number` | No |
| `priority` | The priority of this zone in the current project. Lower numbers mean higher priority. Default is 0 (highest) | `Number` | No |

## VraZoneAssignmentSpecification

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `storageLimitGB` | Defines an upper limit on storage that can be requested from a cloud zone which is part of this project. Default is 0 (unlimited storage). Please note that this feature is supported only for vSphere cloud zones. Not valid for other cloud zone types. | `Number` | No |
| `cpuLimit` | The maximum amount of cpus that can be used by this cloud zone. Default is 0 (unlimited cpu). | `Number` | No |
| `memoryLimitMB` | The maximum amount of memory that can be used by this cloud zone. Default is 0 (unlimited memory). | `Number` | No |
| `zoneId` | The Cloud Zone Id | `String` | No |
| `maxNumberInstances` | The maximum number of instances that can be provisioned in this cloud zone. Default is 0 (unlimited instances). | `Number` | No |
| `priority` | The priority of this zone in the current project. Lower numbers mean higher priority. Default is 0 (highest) | `Number` | No |

## VraZoneResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `numberOfElements` | Number of elements in the current page | `Number` | Yes |
| `content` | List of content items | `Array/Object` | Yes |
| `totalElements` | Total number of elements. In some cases the field may not be populated | `Number` | Yes |

## VraZoneSpecification

**Description:** Specification for a zone.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `folder` | The folder relative path to the datacenter where resources are deployed to. (only applicable for vSphere cloud zones) | `String` | No |
| `computeIds` | The ids of the compute resources that will be explicitly assigned to this zone | `Array/Object` | No |
| `tagsToMatch` | A set of tag keys and optional values that will be used | `Array/Object` | No |
| `regionId` | The id of the region for which this profile is created | `String` | No |
| `name` | A human-friendly name used as an identifier in APIs that support this option. | `String` | No |
| `placementPolicy` | Placement policy for the zone. One of DEFAULT, SPREAD or BINPACK. | `String` | No |
| `description` | A human-friendly description. | `String` | No |
| `tags` | A set of tag keys and optional values that are effectively applied to all compute resources in this zone, but only in the context of this zone. | `Array/Object` | No |

### Methods

#### `VraZoneSpecification`


**Returns:** `void`

---

#### `addTagsToMatchItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `tagsToMatchItem` | `VraTag` |  |

**Returns:** `VraZoneSpecification`

---

#### `putCustomPropertiesItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `customPropertiesItem` | `String` |  |

**Returns:** `VraZoneSpecification`

---

#### `addComputeIdsItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `computeIdsItem` | `String` |  |

**Returns:** `VraZoneSpecification`

---

#### `addTagsItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `tagsItem` | `VraTag` |  |

**Returns:** `VraZoneSpecification`

---

