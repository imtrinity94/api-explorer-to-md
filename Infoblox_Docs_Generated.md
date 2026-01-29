# Infoblox IPAM Reference

Generated Documentation

## DhcpPropertiesManager

### Methods

#### `getMemberDhcpProperties`
Gets Member DHCP Properties

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `address` | `string` | The IP Address of the member |
| `isIPv4Network` | `boolean` | IPv4 or IPv6 DHCP options |

**Returns:** `IpamMemberDhcpProperties`

---

#### `getGridDhcpProperties`
Gets Grid DHCP Properties

**Returns:** `IpamGridDhcpProperties`

---

## IpamAddressRecord

**Description:** Infoblox A/AAAA Record

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `address` | IPv4/IPv6 address | `string` | No |
| `name` | Name in FQDN format | `string` | No |
| `view` | DNS view | `string` | No |
| `dnsZone` | DNS zone | `string` | No |
| `comment` | Comment | `string` | No |
| `extensibleAttributes` | Extensible attributes | `Array/IpamExtensibleAttribute` | No |

## IpamApiType

**Description:** Infoblox IPAM API Type

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `WAPI` | WAPI | `IpamApiType` | Yes |
| `CLOUD_API` | Cloud API | `IpamApiType` | Yes |

## IpamAuthZone

**Description:** The DNS Auth Zone

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `fqdn` | The FQDN of the Auth Zone. | `string` | No |
| `networkView` | The Network View name. | `string` | No |
| `dnsView` | The DNS View name. | `string` | No |

## IpamCnameRecord

**Description:** Infoblox CNAME Record

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `alias` | Alias in FQDN format | `string` | No |
| `canonical` | Canonical name in FQDN format | `string` | No |
| `view` | DNS view | `string` | No |
| `dnsZone` | DNS zone | `string` | No |
| `comment` | Comment | `string` | No |
| `extensibleAttributes` | Extensible attributes | `Array/IpamExtensibleAttribute` | No |

## IpamConnection

**Description:** Infoblox IPAM connection

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `id` | Connection ID | `string` | Yes |
| `hostName` | Host name | `string` | Yes |
| `apiType` | API type | `IpamApiType` | Yes |
| `configDefaultNetworkView` | Config Default Network View | `string` | Yes |
| `configDefaultDnsView` | Config Default DNS View | `string` | Yes |
| `defaultConnection` | Default connection | `boolean` | Yes |
| `connectionPriority` | Connection Priority | `number` | Yes |

### Methods

#### `IpamConnection`
Creates an instance of Infoblox IPAM connection

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` |  |
| `hostName` | `string` |  |
| `userName` | `string` |  |
| `password` | `string` |  |
| `apiType` | `IpamApiType` |  |

**Returns:** `void`

---

#### `getNetworkManager`
Gets network manager

**Returns:** `IpamNetworkManager`

---

#### `getDnsRecordManager`
Gets DNS record manager

**Returns:** `IpamDnsRecordManager`

---

#### `getHostManager`
Gets host manager

**Returns:** `IpamHostManager`

---

#### `getFixedAddressManager`
Gets fixed address manager

**Returns:** `IpamFixedAddressManager`

---

#### `getViewManager`
Gets view manager

**Returns:** `IpamViewManager`

---

#### `getTenantManager`
Gets tenant manager

**Returns:** `TenantManager`

---

#### `getDhcpPropertiesManager`
Gets DHCP Properties Manager

**Returns:** `DhcpPropertiesManager`

---

#### `getZoneManager`
Gets DNS Zone Manager

**Returns:** `IpamZoneManager`

---

#### `checkConnectivity`
Check connectivity

**Returns:** `void`

---

#### `restartServices`
Restart Grid services

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `restartOptions` | `IpamRestartOptions` | The restart options |

**Returns:** `void`

---

#### `getExtensibleAttributeDefinitions`
Gets extensible attribute definitions

**Returns:** `Array/IpamExtensibleAttributeDefinition`

---

#### `getExtensibleAttributeDefinition`
Gets extensible attribute definition

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `string` | The name of extensible attribute |

**Returns:** `IpamExtensibleAttributeDefinition`

---

#### `reloadExtensibleAttributeDefinitions`
Reloads extensible attribute definitions

**Returns:** `void`

---

#### `isEqual`
Checks if specified IPAM connection is equal to the current one

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `other` | `IpamConnection` | The IPAM connection to check |

**Returns:** `boolean`

---

## IpamConnectionManager

### Methods

#### `getConnectionById`
Gets IPAM connection by id

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | The connection id |

**Returns:** `IpamConnection`

---

#### `saveConnection`
Saves IPAM connection in the plug-in cache

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `IpamConnection` | The IPAM connection to save |

**Returns:** `IpamConnection`

---

#### `refreshSslContext`
(Static) Refreshes SSL context

**Returns:** `void`

---

## IpamDhcpOptions

**Description:** Infoblox IPAM DHCP Options

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `routers` | The IP addresses of the routers. Applicable only for IPv4 networks. | `Array/string` | No |
| `domainName` | The domain name (DNS suffix) | `string` | No |
| `domainNameServers` | The IP addresses of the DNS servers | `Array/string` | No |
| `domainSearch` | The DNS suffixes for search | `Array/string` | No |
| `netbiosNameServers` | The IP addresses of the NetBIOS name servers. Applicable only for IPv4 networks. | `Array/string` | No |

## IpamDhcpRange

**Description:** Infoblox IPAM DHCP Range

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `reference` | The reference of range | `string` | No |
| `startAddress` | The start address of range | `string` | No |
| `endAddress` | The end address of range | `string` | No |
| `networkAddress` | The address of network to which this range belongs | `string` | No |
| `networkCidr` | The CIDR of network to which this range belongs | `string` | No |
| `networkView` | The network view name | `string` | No |
| `dhcpOptions` | The IPAM DHCP options | `IpamDhcpOptions` | No |
| `members` | The member that will provide service for this range | `IpamMembers` | No |
| `restartIfNeeded` | Flag to restart DHCP service if needed | `boolean` | No |
| `comment` | The comment about the DHCP range | `string` | No |
| `extensibleAttributes` | The extensible attributes | `Array/IpamExtensibleAttribute` | No |

## IpamDnsRecordManager

### Methods

#### `addCnameRecord`
Add CNAME record

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `ipamCnameRecord` | `IpamCnameRecord` | The CNAME record to add |

**Returns:** `Object`

---

#### `removeCnameRecord`
Remove CNAME record

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `alias` | `string` | Alias of the CNAME record |
| `dnsView` | `string` | Name of the DNS View, in which CNAME record resides |

**Returns:** `Object`

---

#### `findCnameRecordsByAlias`
Find CNAME records matching the specified alias(name)

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `alias` | `string` | Alias(name) of the CNAME records |
| `dnsView` | `string` | Name of the DNS View, in which CNAME records reside |

**Returns:** `Array/IpamCnameRecord`

---

#### `findCnameRecordsByCanonicalName`
Find CNAME records matching the specified canonical name

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `canonicalName` | `string` | Canonical name of the CNAME records |
| `dnsView` | `string` | Name of the DNS View, in which CNAME records reside |

**Returns:** `Array/IpamCnameRecord`

---

#### `findCnameRecordsByEA`
Find CNAME records matching all the IPAM Extensible Attributes

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `extensibleAttributes` | `Array/IpamSearchableExtensibleAttribute` | Extensible Attributes |
| `dnsView` | `string` | Name of the DNS View, in which CNAME records reside |
| `defaultDnsView` | `boolean` | Use default DNS view |

**Returns:** `Array/IpamCnameRecord`

---

#### `isAddressRecordExists`
Checks if A/AAAA record exists in IPAM

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `string` | Name of the A/AAAA record |
| `dnsView` | `string` | Name of the DNS view in which A/AAAA record resides |

**Returns:** `boolean`

---

#### `addAddressRecord`
Add A/AAAA record

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `ipamAddressRecord` | `IpamAddressRecord` | The A/AAAA record to add |

**Returns:** `Object`

---

#### `addAddressRecordInNetwork`
Add A/AAAA record in a Network

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `ipamAddressRecord` | `IpamAddressRecord` | The A/AAAA record to add |
| `ipamNetwork` | `IpamNetwork` | The network to which the A/AAAA record is added |

**Returns:** `string`

---

#### `addAddressRecordInRange`
Add A/AAAA record in a Network Range

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `ipamAddressRecord` | `IpamAddressRecord` | The A/AAAA record to add |
| `ipamDhcpRange` | `IpamDhcpRange` | The DHCP network range to which the A/AAAA record is added |

**Returns:** `string`

---

#### `removeAddressRecord`
Remove A/AAAA record

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `string` | Name of the A/AAAA record |
| `ipAddress` | `string` | IP address of the A/AAAA record. If null, all A/AAAA records with the specified name will be removed. |
| `dnsView` | `string` | Name of the DNS view in which A/AAAA record resides |

**Returns:** `Object`

---

#### `findAddressRecordsByEA`
Find A/AAAA Records matching all the IPAM Extensible Attributes

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `extensibleAttributes` | `Array/IpamSearchableExtensibleAttribute` | Extensible Attributes |
| `dnsView` | `string` | The DNS view |
| `defaultDnsView` | `boolean` | Use default DNS view |

**Returns:** `Array/IpamAddressRecord`

---

#### `isPtrRecordExists`
Checks if PTR record exists in IPAM

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `domainName` | `string` | Domain name of the PTR record |
| `dnsView` | `string` | Name of the DNS View in which PTR record resides |

**Returns:** `boolean`

---

#### `addPtrRecord`
Add PTR record

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `ipamPtrRecord` | `IpamPtrRecord` | The PTR record to add |

**Returns:** `Object`

---

#### `removePtrRecord`
Remove PTR record

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `domainName` | `string` | Domain name of the PTR record |
| `ipAddress` | `string` | IP address of the PTR record. If null, all PTR records with the specified name will be removed. |
| `dnsView` | `string` | Name of the DNS View in which PTR record resides |

**Returns:** `Object`

---

#### `findPtrRecordsByEA`
Find PTR Records matching all the IPAM Extensible Attributes

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `extensibleAttributes` | `Array/IpamSearchableExtensibleAttribute` | Extensible Attributes |
| `dnsView` | `string` | The DNS view |
| `defaultDnsView` | `boolean` | Use default DNS view |

**Returns:** `Array/IpamPtrRecord`

---

#### `changeIpAddress`
Change the IP address of A/AAAA/PTR DNS records with specified name

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `string` | Name of the existing DNS records |
| `dnsView` | `string` | Name of the DNS View in which DNS records reside |
| `newIpAddress` | `string` | New IP address |

**Returns:** `Object`

---

#### `changeDnsName`
Changes the name of A/AAAA/PTR/CNAME DNS records with specified old name

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `oldName` | `string` | Name of the existing DNS records |
| `dnsView` | `string` | Name of the DNS View in which DNS records reside |
| `newName` | `string` | New name of DNS records |

**Returns:** `Object`

---

#### `changeDnsNameByEa`
Searches for A/AAAA/PTR/CNAME records by EAs and updates host name of the found records

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `extensibleAttributes` | `Array/IpamSearchableExtensibleAttribute` | Extensible attributes |
| `newName` | `string` | New name |

**Returns:** `number`

---

## IpamExtensibleAttribute

**Description:** Infoblox IPAM Extensible Attribute

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Name of extensible attribute | `string` | No |
| `type` | Type of extensible attribute | `IpamExtensibleAttributeType` | No |
| `value` | Value of extensible attribute | `string` | No |

## IpamExtensibleAttributeDefinition

**Description:** Infoblox IPAM Extensible Attribute Definition

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Name | `string` | Yes |
| `type` | Type | `IpamExtensibleAttributeDefinitionType` | Yes |
| `defaultValue` | Default value | `string` | Yes |
| `comment` | Comment | `string` | Yes |

### Methods

#### `getConnection`
Gets the IPAM connection, this object belongs to.

**Returns:** `IpamConnection`

---

## IpamExtensibleAttributeDefinitionType

**Description:** Infoblox IPAM Extensible Attribute Definition Type

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `STRING` | String extensible attribute type of Infoblox IPAM | `IpamExtensibleAttributeType` | Yes |
| `INTEGER` | Integer extensible attribute type of Infoblox IPAM | `IpamExtensibleAttributeType` | Yes |
| `DATE` | Date extensible attribute type of Infoblox IPAM | `IpamExtensibleAttributeType` | Yes |
| `EMAIL` | Email extensible attribute type of Infoblox IPAM | `IpamExtensibleAttributeType` | Yes |
| `LIST` | List extensible attribute type of Infoblox IPAM | `IpamExtensibleAttributeType` | Yes |
| `URL` | URL extensible attribute type of Infoblox IPAM | `IpamExtensibleAttributeType` | Yes |

## IpamExtensibleAttributeType

**Description:** Infoblox IPAM Extensible Attribute Type

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `STRING` | String, List, Email, URL, Date extensible attribute types of Infoblox IPAM | `IpamExtensibleAttributeType` | Yes |
| `INTEGER` | Integer extensible attribute type of Infoblox IPAM | `IpamExtensibleAttributeType` | Yes |

## IpamFixedAddress

**Description:** Infoblox IPAM Fixed Address

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `reference` | Reference to the fixed address | `string` | No |
| `address` | The IPv4/IPv6 address | `string` | No |
| `mac` | The MAC address/DUID | `string` | No |
| `name` | The name for the fixed address. This field is required if the network is served by a Microsoft server. This field accepts the name of the fixed address in the native character set. | `string` | No |
| `networkView` | The network view | `string` | No |
| `comment` | The comment | `string` | No |
| `msServerIpAddress` | The IPv4 address of the MS DHCP server associated with this fixed address (applicable for IPv4 fixed address only) | `string` | No |
| `extensibleAttributes` | The extensible attributes | `Array/IpamExtensibleAttribute` | No |
| `restartIfNeeded` | Flag to restart DHCP service if needed | `boolean` | No |

## IpamFixedAddressManager

### Methods

#### `addFixedAddress`
Add fixed address to the IPAM

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `fixedAddress` | `IpamFixedAddress` | Fixed address to add |

**Returns:** `Object`

---

#### `addFixedAddressInNetwork`
Add fixed address in network to the IPAM

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `fixedAddress` | `IpamFixedAddress` | Fixed address to add |
| `network` | `IpamNetwork` | Network |

**Returns:** `string`

---

#### `addFixedAddressInRange`
Add fixed address in DHCP range to the IPAM

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `fixedAddress` | `IpamFixedAddress` | Fixed address to add |
| `dhcpRange` | `IpamDhcpRange` | DHCP range |

**Returns:** `string`

---

#### `getFixedAddressByIP`
Get fixed address by IP address

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `ipAddress` | `string` | The IP address |
| `networkView` | `string` | The network view |

**Returns:** `IpamFixedAddress`

---

#### `removeFixedAddress`
Remove fixed address

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `reference` | `string` | The reference to the fixed address |

**Returns:** `Object`

---

#### `findFixedAddressesByEA`
Find the list of fixed addresses which match the query by Extensible attributes

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `extensibleAttributes` | `Array/IpamSearchableExtensibleAttribute` | Extensible attributes |
| `networkView` | `string` | Network view |
| `defaultNetworkView` | `boolean` | Use default network view |

**Returns:** `Array/IpamFixedAddress`

---

#### `updateFixedAddress`
Update fixed address

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `fixedAddress` | `IpamFixedAddress` | The fixed address to update |

**Returns:** `Object`

---

## IpamGridDhcpProperties

**Description:** The Infoblox Grid DHCP Properties

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dhcpOptions` | The IPAM DHCP options. | `IpamDhcpOptions` | No |

## IpamHost

**Description:** Infoblox IPAM Host

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `reference` | Reference to the WAPI host record | `string` | No |
| `fqdn` | Name in FQDN format | `string` | No |
| `addresses` | Host addresses | `Array/IpamHostAddress` | No |
| `comment` | Comment | `string` | No |
| `extensibleAttributes` | Extensible attributes | `Array/IpamExtensibleAttribute` | No |
| `aliases` | Aliases in FQDN format | `Array/string` | No |
| `dnsView` | DNS view | `string` | No |
| `dnsZone` | DNS zone | `string` | No |

## IpamHostAddress

**Description:** Infoblox IPAM Host Address

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `ip` | The IPv4 or IPv6 address | `string` | No |
| `mac` | The MAC address or DUID | `string` | No |
| `enableDhcp` | Flag to enable DHCP configuration | `boolean` | No |

## IpamHostInfo

**Description:** Infoblox IPAM Host Info

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `fqdn` | Name in FQDN format | `string` | No |
| `comment` | Comment | `string` | No |
| `extensibleAttributes` | Extensible attributes | `Array/IpamExtensibleAttribute` | No |
| `aliases` | Aliases in FQDN format | `Array/string` | No |
| `dnsView` | DNS view | `string` | No |
| `enableDns` | Enable DNS configuration | `boolean` | No |
| `restartIfNeeded` | Restart DHCP service if needed | `boolean` | No |

## IpamHostManager
*Link not found in tree*

## IpamIpVersion
*Link not found in tree*

## IpamMemberDhcpProperties
*Link not found in tree*

## IpamMembers

**Description:** The Infoblox Grid members

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `type` | The type of Grid members. | `IpamMemberType` | No |
| `addresses` | The addresses of Grid members. | `Array/string` | No |

## IpamMemberType

**Description:** The type of member

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `INFOBLOX` | The Infoblox Grid member serving DHCP. | `IpamMemberType` | Yes |
| `MICROSOFT` | The Microsoft (r) server serving DHCP. | `IpamMemberType` | Yes |

## IpamNetwork

**Description:** Infoblox IPAM network

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `reference` | The reference of network | `string` | No |
| `address` | The address of network | `string` | No |
| `cidr` | The cidr of network | `number` | No |
| `networkContainerAddress` | The address of parent network container | `string` | No |
| `networkContainerCidr` | The cidr of parent network container | `number` | No |
| `comment` | The comment about the network | `string` | No |
| `networkView` | The network view name | `string` | No |
| `extensibleAttributes` | The extensible attributes | `Array/IpamExtensibleAttribute` | No |
| `dhcpOptions` | The IPAM DHCP options | `IpamDhcpOptions` | No |
| `members` | The list of members or Microsoft(r) servers that serve DHCP for this network | `IpamMembers` | No |
| `restartIfNeeded` | Flag to restart DHCP service if needed | `boolean` | No |

## IpamNetworkContainer

**Description:** Infoblox IPAM network container

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `reference` | The reference of network container | `string` | No |
| `address` | The address of network container | `string` | No |
| `cidr` | The cidr of network container | `number` | No |
| `networkContainerAddress` | The address of parent network container | `string` | No |
| `networkContainerCidr` | The cidr of parent network container | `number` | No |
| `networkView` | The network view name | `string` | No |
| `comment` | The comment | `string` | No |
| `dhcpOptions` | The IPAM DHCP options | `IpamDhcpOptions` | No |
| `extensibleAttributes` | The extensible attributes | `Array/IpamExtensibleAttribute` | No |

## IpamNetworkFilter

**Description:** Filter to search for networks

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `networkView` | Network view name | `string` | No |
| `ipVersion` | IPv4 or IPv6 network | `IpamIpVersion` | No |
| `extensibleAttributes` | Extensible attributes | `Array/IpamSearchableExtensibleAttribute` | No |
| `maxResults` | Maximum number of results | `number` | No |
| `network` | Regular expression for searching for networks | `string` | No |
| `networkSearchComparison` | Network search comparison | `IpamSearchComparisonType` | No |

## IpamNetworkManager
*Error scraping: Attempted to use detached Frame 'C4A87A150A479BE500B6C034B31A05B1'.*

## IpamNetworkView
*Error scraping: Attempted to use detached Frame 'C4A87A150A479BE500B6C034B31A05B1'.*

## IpamPtrRecord
*Error scraping: Attempted to use detached Frame 'C4A87A150A479BE500B6C034B31A05B1'.*

## IpamRangeFilter
*Error scraping: Attempted to use detached Frame 'C4A87A150A479BE500B6C034B31A05B1'.*

## IpamRestartMemberOrder
*Error scraping: Attempted to use detached Frame 'C4A87A150A479BE500B6C034B31A05B1'.*

## IpamRestartOptions
*Error scraping: Attempted to use detached Frame 'C4A87A150A479BE500B6C034B31A05B1'.*

## IpamRestartRequestType
*Error scraping: Attempted to use detached Frame 'C4A87A150A479BE500B6C034B31A05B1'.*

## IpamRestartServiceOption
*Error scraping: Attempted to use detached Frame 'C4A87A150A479BE500B6C034B31A05B1'.*

## IpamSearchableExtensibleAttribute
*Error scraping: Attempted to use detached Frame 'C4A87A150A479BE500B6C034B31A05B1'.*

## IpamSearchComparisonType
*Error scraping: Attempted to use detached Frame 'C4A87A150A479BE500B6C034B31A05B1'.*

## IpamUpdateArrayStrategy
*Error scraping: Attempted to use detached Frame 'C4A87A150A479BE500B6C034B31A05B1'.*

## IpamUpdateFixedAddressInfo
*Error scraping: Attempted to use detached Frame 'C4A87A150A479BE500B6C034B31A05B1'.*

## IpamUpdateHostInfo
*Error scraping: Attempted to use detached Frame 'C4A87A150A479BE500B6C034B31A05B1'.*

## IpamUpdateNetworkInfo
*Error scraping: Attempted to use detached Frame 'C4A87A150A479BE500B6C034B31A05B1'.*

## IpamUpdateRangeInfo
*Error scraping: Attempted to use detached Frame 'C4A87A150A479BE500B6C034B31A05B1'.*

## IpamViewManager
*Error scraping: Attempted to use detached Frame 'C4A87A150A479BE500B6C034B31A05B1'.*

## IpamZoneManager
*Error scraping: Attempted to use detached Frame 'C4A87A150A479BE500B6C034B31A05B1'.*

## ReferenceInfo
*Error scraping: Attempted to use detached Frame 'C4A87A150A479BE500B6C034B31A05B1'.*

## TenantManager
*Error scraping: Attempted to use detached Frame 'C4A87A150A479BE500B6C034B31A05B1'.*

## DhcpPropertiesManager

### Methods

#### `getMemberDhcpProperties`
Gets Member DHCP Properties

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `address` | `string` | The IP Address of the member |
| `isIPv4Network` | `boolean` | IPv4 or IPv6 DHCP options |

**Returns:** `IpamMemberDhcpProperties`

---

#### `getGridDhcpProperties`
Gets Grid DHCP Properties

**Returns:** `IpamGridDhcpProperties`

---

## IpamAddressRecord

**Description:** Infoblox A/AAAA Record

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `address` | IPv4/IPv6 address | `string` | No |
| `name` | Name in FQDN format | `string` | No |
| `view` | DNS view | `string` | No |
| `dnsZone` | DNS zone | `string` | No |
| `comment` | Comment | `string` | No |
| `extensibleAttributes` | Extensible attributes | `Array/IpamExtensibleAttribute` | No |

## IpamApiType

**Description:** Infoblox IPAM API Type

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `WAPI` | WAPI | `IpamApiType` | Yes |
| `CLOUD_API` | Cloud API | `IpamApiType` | Yes |

## IpamAuthZone

**Description:** The DNS Auth Zone

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `fqdn` | The FQDN of the Auth Zone. | `string` | No |
| `networkView` | The Network View name. | `string` | No |
| `dnsView` | The DNS View name. | `string` | No |

## IpamCnameRecord

**Description:** Infoblox CNAME Record

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `alias` | Alias in FQDN format | `string` | No |
| `canonical` | Canonical name in FQDN format | `string` | No |
| `view` | DNS view | `string` | No |
| `dnsZone` | DNS zone | `string` | No |
| `comment` | Comment | `string` | No |
| `extensibleAttributes` | Extensible attributes | `Array/IpamExtensibleAttribute` | No |

## IpamConnection

**Description:** Infoblox IPAM connection

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `id` | Connection ID | `string` | Yes |
| `hostName` | Host name | `string` | Yes |
| `apiType` | API type | `IpamApiType` | Yes |
| `configDefaultNetworkView` | Config Default Network View | `string` | Yes |
| `configDefaultDnsView` | Config Default DNS View | `string` | Yes |
| `defaultConnection` | Default connection | `boolean` | Yes |
| `connectionPriority` | Connection Priority | `number` | Yes |

### Methods

#### `IpamConnection`
Creates an instance of Infoblox IPAM connection

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` |  |
| `hostName` | `string` |  |
| `userName` | `string` |  |
| `password` | `string` |  |
| `apiType` | `IpamApiType` |  |

**Returns:** `void`

---

#### `getNetworkManager`
Gets network manager

**Returns:** `IpamNetworkManager`

---

#### `getDnsRecordManager`
Gets DNS record manager

**Returns:** `IpamDnsRecordManager`

---

#### `getHostManager`
Gets host manager

**Returns:** `IpamHostManager`

---

#### `getFixedAddressManager`
Gets fixed address manager

**Returns:** `IpamFixedAddressManager`

---

#### `getViewManager`
Gets view manager

**Returns:** `IpamViewManager`

---

#### `getTenantManager`
Gets tenant manager

**Returns:** `TenantManager`

---

#### `getDhcpPropertiesManager`
Gets DHCP Properties Manager

**Returns:** `DhcpPropertiesManager`

---

#### `getZoneManager`
Gets DNS Zone Manager

**Returns:** `IpamZoneManager`

---

#### `checkConnectivity`
Check connectivity

**Returns:** `void`

---

#### `restartServices`
Restart Grid services

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `restartOptions` | `IpamRestartOptions` | The restart options |

**Returns:** `void`

---

#### `getExtensibleAttributeDefinitions`
Gets extensible attribute definitions

**Returns:** `Array/IpamExtensibleAttributeDefinition`

---

#### `getExtensibleAttributeDefinition`
Gets extensible attribute definition

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `string` | The name of extensible attribute |

**Returns:** `IpamExtensibleAttributeDefinition`

---

#### `reloadExtensibleAttributeDefinitions`
Reloads extensible attribute definitions

**Returns:** `void`

---

#### `isEqual`
Checks if specified IPAM connection is equal to the current one

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `other` | `IpamConnection` | The IPAM connection to check |

**Returns:** `boolean`

---

## IpamConnectionManager

### Methods

#### `getConnectionById`
Gets IPAM connection by id

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | The connection id |

**Returns:** `IpamConnection`

---

#### `saveConnection`
Saves IPAM connection in the plug-in cache

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `IpamConnection` | The IPAM connection to save |

**Returns:** `IpamConnection`

---

#### `refreshSslContext`
(Static) Refreshes SSL context

**Returns:** `void`

---

## IpamDhcpOptions

**Description:** Infoblox IPAM DHCP Options

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `routers` | The IP addresses of the routers. Applicable only for IPv4 networks. | `Array/string` | No |
| `domainName` | The domain name (DNS suffix) | `string` | No |
| `domainNameServers` | The IP addresses of the DNS servers | `Array/string` | No |
| `domainSearch` | The DNS suffixes for search | `Array/string` | No |
| `netbiosNameServers` | The IP addresses of the NetBIOS name servers. Applicable only for IPv4 networks. | `Array/string` | No |

## IpamDhcpRange

**Description:** Infoblox IPAM DHCP Range

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `reference` | The reference of range | `string` | No |
| `startAddress` | The start address of range | `string` | No |
| `endAddress` | The end address of range | `string` | No |
| `networkAddress` | The address of network to which this range belongs | `string` | No |
| `networkCidr` | The CIDR of network to which this range belongs | `string` | No |
| `networkView` | The network view name | `string` | No |
| `dhcpOptions` | The IPAM DHCP options | `IpamDhcpOptions` | No |
| `members` | The member that will provide service for this range | `IpamMembers` | No |
| `restartIfNeeded` | Flag to restart DHCP service if needed | `boolean` | No |
| `comment` | The comment about the DHCP range | `string` | No |
| `extensibleAttributes` | The extensible attributes | `Array/IpamExtensibleAttribute` | No |

## IpamDnsRecordManager

### Methods

#### `addCnameRecord`
Add CNAME record

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `ipamCnameRecord` | `IpamCnameRecord` | The CNAME record to add |

**Returns:** `Object`

---

#### `removeCnameRecord`
Remove CNAME record

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `alias` | `string` | Alias of the CNAME record |
| `dnsView` | `string` | Name of the DNS View, in which CNAME record resides |

**Returns:** `Object`

---

#### `findCnameRecordsByAlias`
Find CNAME records matching the specified alias(name)

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `alias` | `string` | Alias(name) of the CNAME records |
| `dnsView` | `string` | Name of the DNS View, in which CNAME records reside |

**Returns:** `Array/IpamCnameRecord`

---

#### `findCnameRecordsByCanonicalName`
Find CNAME records matching the specified canonical name

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `canonicalName` | `string` | Canonical name of the CNAME records |
| `dnsView` | `string` | Name of the DNS View, in which CNAME records reside |

**Returns:** `Array/IpamCnameRecord`

---

#### `findCnameRecordsByEA`
Find CNAME records matching all the IPAM Extensible Attributes

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `extensibleAttributes` | `Array/IpamSearchableExtensibleAttribute` | Extensible Attributes |
| `dnsView` | `string` | Name of the DNS View, in which CNAME records reside |
| `defaultDnsView` | `boolean` | Use default DNS view |

**Returns:** `Array/IpamCnameRecord`

---

#### `isAddressRecordExists`
Checks if A/AAAA record exists in IPAM

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `string` | Name of the A/AAAA record |
| `dnsView` | `string` | Name of the DNS view in which A/AAAA record resides |

**Returns:** `boolean`

---

#### `addAddressRecord`
Add A/AAAA record

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `ipamAddressRecord` | `IpamAddressRecord` | The A/AAAA record to add |

**Returns:** `Object`

---

#### `addAddressRecordInNetwork`
Add A/AAAA record in a Network

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `ipamAddressRecord` | `IpamAddressRecord` | The A/AAAA record to add |
| `ipamNetwork` | `IpamNetwork` | The network to which the A/AAAA record is added |

**Returns:** `string`

---

#### `addAddressRecordInRange`
Add A/AAAA record in a Network Range

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `ipamAddressRecord` | `IpamAddressRecord` | The A/AAAA record to add |
| `ipamDhcpRange` | `IpamDhcpRange` | The DHCP network range to which the A/AAAA record is added |

**Returns:** `string`

---

#### `removeAddressRecord`
Remove A/AAAA record

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `string` | Name of the A/AAAA record |
| `ipAddress` | `string` | IP address of the A/AAAA record. If null, all A/AAAA records with the specified name will be removed. |
| `dnsView` | `string` | Name of the DNS view in which A/AAAA record resides |

**Returns:** `Object`

---

#### `findAddressRecordsByEA`
Find A/AAAA Records matching all the IPAM Extensible Attributes

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `extensibleAttributes` | `Array/IpamSearchableExtensibleAttribute` | Extensible Attributes |
| `dnsView` | `string` | The DNS view |
| `defaultDnsView` | `boolean` | Use default DNS view |

**Returns:** `Array/IpamAddressRecord`

---

#### `isPtrRecordExists`
Checks if PTR record exists in IPAM

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `domainName` | `string` | Domain name of the PTR record |
| `dnsView` | `string` | Name of the DNS View in which PTR record resides |

**Returns:** `boolean`

---

#### `addPtrRecord`
Add PTR record

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `ipamPtrRecord` | `IpamPtrRecord` | The PTR record to add |

**Returns:** `Object`

---

#### `removePtrRecord`
Remove PTR record

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `domainName` | `string` | Domain name of the PTR record |
| `ipAddress` | `string` | IP address of the PTR record. If null, all PTR records with the specified name will be removed. |
| `dnsView` | `string` | Name of the DNS View in which PTR record resides |

**Returns:** `Object`

---

#### `findPtrRecordsByEA`
Find PTR Records matching all the IPAM Extensible Attributes

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `extensibleAttributes` | `Array/IpamSearchableExtensibleAttribute` | Extensible Attributes |
| `dnsView` | `string` | The DNS view |
| `defaultDnsView` | `boolean` | Use default DNS view |

**Returns:** `Array/IpamPtrRecord`

---

#### `changeIpAddress`
Change the IP address of A/AAAA/PTR DNS records with specified name

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `string` | Name of the existing DNS records |
| `dnsView` | `string` | Name of the DNS View in which DNS records reside |
| `newIpAddress` | `string` | New IP address |

**Returns:** `Object`

---

#### `changeDnsName`
Changes the name of A/AAAA/PTR/CNAME DNS records with specified old name

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `oldName` | `string` | Name of the existing DNS records |
| `dnsView` | `string` | Name of the DNS View in which DNS records reside |
| `newName` | `string` | New name of DNS records |

**Returns:** `Object`

---

#### `changeDnsNameByEa`
Searches for A/AAAA/PTR/CNAME records by EAs and updates host name of the found records

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `extensibleAttributes` | `Array/IpamSearchableExtensibleAttribute` | Extensible attributes |
| `newName` | `string` | New name |

**Returns:** `number`

---

## IpamExtensibleAttribute

**Description:** Infoblox IPAM Extensible Attribute

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Name of extensible attribute | `string` | No |
| `type` | Type of extensible attribute | `IpamExtensibleAttributeType` | No |
| `value` | Value of extensible attribute | `string` | No |

## IpamExtensibleAttributeDefinition

**Description:** Infoblox IPAM Extensible Attribute Definition

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Name | `string` | Yes |
| `type` | Type | `IpamExtensibleAttributeDefinitionType` | Yes |
| `defaultValue` | Default value | `string` | Yes |
| `comment` | Comment | `string` | Yes |

### Methods

#### `getConnection`
Gets the IPAM connection, this object belongs to.

**Returns:** `IpamConnection`

---

## IpamExtensibleAttributeDefinitionType

**Description:** Infoblox IPAM Extensible Attribute Definition Type

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `STRING` | String extensible attribute type of Infoblox IPAM | `IpamExtensibleAttributeType` | Yes |
| `INTEGER` | Integer extensible attribute type of Infoblox IPAM | `IpamExtensibleAttributeType` | Yes |
| `DATE` | Date extensible attribute type of Infoblox IPAM | `IpamExtensibleAttributeType` | Yes |
| `EMAIL` | Email extensible attribute type of Infoblox IPAM | `IpamExtensibleAttributeType` | Yes |
| `LIST` | List extensible attribute type of Infoblox IPAM | `IpamExtensibleAttributeType` | Yes |
| `URL` | URL extensible attribute type of Infoblox IPAM | `IpamExtensibleAttributeType` | Yes |

## IpamExtensibleAttributeType

**Description:** Infoblox IPAM Extensible Attribute Type

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `STRING` | String, List, Email, URL, Date extensible attribute types of Infoblox IPAM | `IpamExtensibleAttributeType` | Yes |
| `INTEGER` | Integer extensible attribute type of Infoblox IPAM | `IpamExtensibleAttributeType` | Yes |

## IpamFixedAddress

**Description:** Infoblox IPAM Fixed Address

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `reference` | Reference to the fixed address | `string` | No |
| `address` | The IPv4/IPv6 address | `string` | No |
| `mac` | The MAC address/DUID | `string` | No |
| `name` | The name for the fixed address. This field is required if the network is served by a Microsoft server. This field accepts the name of the fixed address in the native character set. | `string` | No |
| `networkView` | The network view | `string` | No |
| `comment` | The comment | `string` | No |
| `msServerIpAddress` | The IPv4 address of the MS DHCP server associated with this fixed address (applicable for IPv4 fixed address only) | `string` | No |
| `extensibleAttributes` | The extensible attributes | `Array/IpamExtensibleAttribute` | No |
| `restartIfNeeded` | Flag to restart DHCP service if needed | `boolean` | No |

## IpamFixedAddressManager

### Methods

#### `addFixedAddress`
Add fixed address to the IPAM

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `fixedAddress` | `IpamFixedAddress` | Fixed address to add |

**Returns:** `Object`

---

#### `addFixedAddressInNetwork`
Add fixed address in network to the IPAM

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `fixedAddress` | `IpamFixedAddress` | Fixed address to add |
| `network` | `IpamNetwork` | Network |

**Returns:** `string`

---

#### `addFixedAddressInRange`
Add fixed address in DHCP range to the IPAM

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `fixedAddress` | `IpamFixedAddress` | Fixed address to add |
| `dhcpRange` | `IpamDhcpRange` | DHCP range |

**Returns:** `string`

---

#### `getFixedAddressByIP`
Get fixed address by IP address

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `ipAddress` | `string` | The IP address |
| `networkView` | `string` | The network view |

**Returns:** `IpamFixedAddress`

---

#### `removeFixedAddress`
Remove fixed address

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `reference` | `string` | The reference to the fixed address |

**Returns:** `Object`

---

#### `findFixedAddressesByEA`
Find the list of fixed addresses which match the query by Extensible attributes

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `extensibleAttributes` | `Array/IpamSearchableExtensibleAttribute` | Extensible attributes |
| `networkView` | `string` | Network view |
| `defaultNetworkView` | `boolean` | Use default network view |

**Returns:** `Array/IpamFixedAddress`

---

#### `updateFixedAddress`
Update fixed address

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `fixedAddress` | `IpamFixedAddress` | The fixed address to update |

**Returns:** `Object`

---

## IpamGridDhcpProperties

**Description:** The Infoblox Grid DHCP Properties

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dhcpOptions` | The IPAM DHCP options. | `IpamDhcpOptions` | No |

## IpamHost

**Description:** Infoblox IPAM Host

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `reference` | Reference to the WAPI host record | `string` | No |
| `fqdn` | Name in FQDN format | `string` | No |
| `addresses` | Host addresses | `Array/IpamHostAddress` | No |
| `comment` | Comment | `string` | No |
| `extensibleAttributes` | Extensible attributes | `Array/IpamExtensibleAttribute` | No |
| `aliases` | Aliases in FQDN format | `Array/string` | No |
| `dnsView` | DNS view | `string` | No |
| `dnsZone` | DNS zone | `string` | No |

## IpamHostAddress

**Description:** Infoblox IPAM Host Address

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `ip` | The IPv4 or IPv6 address | `string` | No |
| `mac` | The MAC address or DUID | `string` | No |
| `enableDhcp` | Flag to enable DHCP configuration | `boolean` | No |

## IpamHostInfo

**Description:** Infoblox IPAM Host Info

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `fqdn` | Name in FQDN format | `string` | No |
| `comment` | Comment | `string` | No |
| `extensibleAttributes` | Extensible attributes | `Array/IpamExtensibleAttribute` | No |
| `aliases` | Aliases in FQDN format | `Array/string` | No |
| `dnsView` | DNS view | `string` | No |
| `enableDns` | Enable DNS configuration | `boolean` | No |
| `restartIfNeeded` | Restart DHCP service if needed | `boolean` | No |

## IpamHostManager

### Methods

#### `addHost`
Adds host record with specified IP address.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `host` | `IpamHostInfo` | The host information |
| `hostAddress` | `IpamHostAddress` | The host address |

**Returns:** `Object`

---

#### `addHostInNetwork`
Adds host record in a network.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `host` | `IpamHostInfo` | The host information |
| `hostAddress` | `IpamHostAddress` | The host address |
| `network` | `IpamNetwork` | The network to which the host is added |

**Returns:** `string`

---

#### `addHostInRange`
Adds host record in a network range.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `host` | `IpamHostInfo` | The host information |
| `hostAddress` | `IpamHostAddress` | The host address |
| `dhcpRange` | `IpamDhcpRange` | The DHCP network range to which the host is added |

**Returns:** `string`

---

#### `addHostAddress`
Adds a host address with specified IP address to the existing host record in IPAM.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `hostName` | `string` | The name of the existing host record |
| `dnsView` | `string` | The name of the DNS view in which host record resides |
| `hostAddress` | `IpamHostAddress` | The host address to add |
| `restartIfNeeded` | `boolean` | Restart DHCP service if needed |

**Returns:** `Object`

---

#### `addHostAddressInNetwork`
Adds a host address to the existing host record in IPAM using specified network to get next available IP address.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `hostName` | `string` | The name of the existing host record |
| `dnsView` | `string` | The name of the DNS view in which host record resides |
| `hostAddress` | `IpamHostAddress` | The host address to add |
| `network` | `IpamNetwork` | The network for getting next available IP address for the new host address |
| `restartIfNeeded` | `boolean` | Restart DHCP service if needed |

**Returns:** `string`

---

#### `addHostAddressInRange`
Adds a host address to the existing host record in IPAM using specified DHCP network range to get next available IP address.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `hostName` | `string` | The name of the existing host record |
| `dnsView` | `string` | The name of the DNS view in which host record resides |
| `hostAddress` | `IpamHostAddress` | The host address to add |
| `dhcpRange` | `IpamDhcpRange` | The DHCP range for getting next available IP address for the new host address |
| `restartIfNeeded` | `boolean` | Restart DHCP service if needed |

**Returns:** `string`

---

#### `findHostsByName`
Finds host records by name. If DNS view is not specified, then default DNS view will be used.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `hostName` | `string` | The host name |
| `dnsView` | `string` | The DNS view |

**Returns:** `Array/IpamHost`

---

#### `findHostsByIP`
Finds host records by IP address. If network view is not specified, then default network view will be used.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `ipAddress` | `string` | The IP address |
| `networkView` | `string` | The network view |

**Returns:** `Array/IpamHost`

---

#### `findHostsByEA`
Find host records matching all the IPAM extensible attributes.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `extensibleAttributes` | `Array/IpamSearchableExtensibleAttribute` | The extensible attributes for searching |

**Returns:** `Array/IpamHost`

---

#### `updateHost`
Updates host record.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `reference` | `string` | The reference to the host record |
| `updateInfo` | `IpamUpdateHostInfo` | The update information |
| `restartIfNeeded` | `boolean` | Restart DHCP service if needed |

**Returns:** `Object`

---

#### `removeHost`
Removes host record.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `reference` | `string` | The reference to the host record |

**Returns:** `Object`

---

## IpamIpVersion

**Description:** Version of IP protocol

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `IP_V4` | IPv4 protocol | `IpamIpVersion` | Yes |
| `IP_V6` | IPv6 protocol | `IpamIpVersion` | Yes |

## IpamMemberDhcpProperties

**Description:** The Infoblox Member DHCP Properties

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dhcpOptions` | The IPAM DHCP options. | `IpamDhcpOptions` | No |
| `ipv6Address` | The IPv6 Address of the member. | `string` | No |
| `ipv4Address` | The IPv4 Address of the member. | `string` | No |
| `hostName` | The Host Name of the member. | `string` | No |

## IpamMembers

**Description:** The Infoblox Grid members

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `type` | The type of Grid members. | `IpamMemberType` | No |
| `addresses` | The addresses of Grid members. | `Array/string` | No |

## IpamMemberType

**Description:** The type of member

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `INFOBLOX` | The Infoblox Grid member serving DHCP. | `IpamMemberType` | Yes |
| `MICROSOFT` | The Microsoft (r) server serving DHCP. | `IpamMemberType` | Yes |

## IpamNetwork

**Description:** Infoblox IPAM network

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `reference` | The reference of network | `string` | No |
| `address` | The address of network | `string` | No |
| `cidr` | The cidr of network | `number` | No |
| `networkContainerAddress` | The address of parent network container | `string` | No |
| `networkContainerCidr` | The cidr of parent network container | `number` | No |
| `comment` | The comment about the network | `string` | No |
| `networkView` | The network view name | `string` | No |
| `extensibleAttributes` | The extensible attributes | `Array/IpamExtensibleAttribute` | No |
| `dhcpOptions` | The IPAM DHCP options | `IpamDhcpOptions` | No |
| `members` | The list of members or Microsoft(r) servers that serve DHCP for this network | `IpamMembers` | No |
| `restartIfNeeded` | Flag to restart DHCP service if needed | `boolean` | No |

## IpamNetworkContainer

**Description:** Infoblox IPAM network container

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `reference` | The reference of network container | `string` | No |
| `address` | The address of network container | `string` | No |
| `cidr` | The cidr of network container | `number` | No |
| `networkContainerAddress` | The address of parent network container | `string` | No |
| `networkContainerCidr` | The cidr of parent network container | `number` | No |
| `networkView` | The network view name | `string` | No |
| `comment` | The comment | `string` | No |
| `dhcpOptions` | The IPAM DHCP options | `IpamDhcpOptions` | No |
| `extensibleAttributes` | The extensible attributes | `Array/IpamExtensibleAttribute` | No |

## IpamNetworkFilter

**Description:** Filter to search for networks

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `networkView` | Network view name | `string` | No |
| `ipVersion` | IPv4 or IPv6 network | `IpamIpVersion` | No |
| `extensibleAttributes` | Extensible attributes | `Array/IpamSearchableExtensibleAttribute` | No |
| `maxResults` | Maximum number of results | `number` | No |
| `network` | Regular expression for searching for networks | `string` | No |
| `networkSearchComparison` | Network search comparison | `IpamSearchComparisonType` | No |

## IpamNetworkManager

### Methods

#### `getNextAvailableIP`
Get next available IP address from given network

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `network` | `IpamNetwork` | The network to get IP address |

**Returns:** `string`

---

#### `getNextAvailableIPFromRange`
Get next available IP address from given DHCP range

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `dhcpRange` | `IpamDhcpRange` | The DHCP range to get IP address |

**Returns:** `string`

---

#### `addNetwork`
Add Network

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `network` | `IpamNetwork` | The network to add |
| `template` | `string` | The name of the Network template |
| `members` | `IpamMembers` | The Infoblox Grid members |

**Returns:** `Object`

---

#### `addNextAvailableNetworkByRef`
Add next available network in parent network

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `network` | `IpamNetwork` | The network to add |
| `parentRef` | `string` | The reference to parent network |
| `cidr` | `string` | The network CIDR |

**Returns:** `string`

---

#### `addNextAvailableNetworkByNetaddr`
Add next available network in parent network

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `network` | `IpamNetwork` | The network to add |
| `parentAddress` | `string` | The parent network address |
| `parentNetworkView` | `string` | The parent network view |
| `cidr` | `string` | The network CIDR |

**Returns:** `string`

---

#### `addNextAvailableNetworkFromContainer`
Add next available network in parent network

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `parentAddress` | `string` | The parent network address |
| `networkView` | `string` | The parent network view |
| `cidr` | `string` | The network CIDR |
| `eaName` | `IpamExtensibleAttributeDefinition` | The external attribute Definition of the network |
| `eaValue` | `string` | The external attribute value of the network |
| `comment` | `string` | The comment for the network |
| `param6` | `string` |  |

**Returns:** `string`

---

#### `findNetworks`
Find list of networks by filter

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `filter` | `IpamNetworkFilter` | Filter to search for networks |

**Returns:** `Array/IpamNetwork`

---

#### `findNetworkContainers`
Find list of network containers by filter

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `filter` | `IpamNetworkFilter` | Filter to search for network containers |

**Returns:** `Array/IpamNetworkContainer`

---

#### `findRanges`
Find list of ranges by filter

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `filter` | `IpamRangeFilter` | Filter to search for ranges |

**Returns:** `Array/IpamDhcpRange`

---

#### `removeNetwork`
Remove network

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `ipAddress` | `string` | The IP address of network to remove |
| `cidr` | `number` | The CIDR of network to remove |
| `networkView` | `string` | The network view name |

**Returns:** `Object`

---

#### `removeNetworkByRef`
Remove network by network reference

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `reference` | `string` | Network reference of the network to remove |

**Returns:** `Object`

---

#### `removeRangeByRef`
Remove range by range reference

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `reference` | `string` | Range reference of the range to remove |

**Returns:** `Object`

---

#### `updateNetwork`
Update network

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `reference` | `string` | The reference to the network |
| `updateInfo` | `IpamUpdateNetworkInfo` | The update information |
| `restartIfNeeded` | `boolean` | Restart DHCP service if needed |

**Returns:** `Object`

---

#### `updateRange`
Update range

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `reference` | `string` | The reference to the range |
| `updateInfo` | `IpamUpdateRangeInfo` | The update information |
| `restartIfNeeded` | `boolean` | Restart DHCP service if needed |

**Returns:** `Object`

---

#### `getNetwork`
Get network

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `ipAddress` | `string` | The IP address of network to get |
| `cidr` | `number` | The CIDR of network to get |
| `networkView` | `string` | The network view name |

**Returns:** `IpamNetwork`

---

#### `getNetworkByRef`
Get network by network reference

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `reference` | `string` | Network reference of the network to get |

**Returns:** `IpamNetwork`

---

#### `getNetworkContainerByRef`
Get network container by network reference

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `reference` | `string` | Network reference of the network container to get |

**Returns:** `IpamNetworkContainer`

---

#### `getNetworkContainer`
Get network container

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `ipAddress` | `string` | The IP address of network container to get |
| `cidr` | `number` | The CIDR of network container to get |
| `networkView` | `string` | The network view name |

**Returns:** `IpamNetworkContainer`

---

#### `getNetworkContainerInheritedDhcpOptions`
Get Merged Network Container DHCP Options

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `ipAddress` | `string` | The IP address of network container to get |
| `cidr` | `number` | The CIDR of network container to get |
| `networkView` | `string` | The network view name |

**Returns:** `IpamDhcpOptions`

---

#### `getDhcpRange`
Get DHCP range

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `startAddress` | `string` | Start IPv4/IPv6 address of the DHCP range |
| `endAddress` | `string` | End IPv4/IPv6 address of the DHCP range |
| `networkView` | `string` | The network view name |

**Returns:** `IpamDhcpRange`

---

#### `getRangeByRef`
Get DHCP range by range reference

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `reference` | `string` | Range reference of the range to get |

**Returns:** `IpamDhcpRange`

---

#### `addExclusionRange`
Add exclusion range in the specified IPAM network

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `startAddress` | `string` | Start IPv4/IPv6 address of the exclusion range |
| `endAddress` | `string` | End IPv4/IPv6 address of the exclusion range |
| `network` | `IpamNetwork` | IPv4/IPv6 network, to which the specified exclusion range will be added |
| `restartIfNeeded` | `boolean` | Restart DHCP service if needed |

**Returns:** `Object`

---

#### `addDhcpRange`
Add DHCP range

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `range` | `IpamDhcpRange` | The range to add |

**Returns:** `Object`

---

#### `removeDhcpRange`
Removed the specified DHCP range

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `startAddress` | `string` | Start IPv4/IPv6 address of the DHCP range |
| `endAddress` | `string` | End IPv4/IPv6 address of the DHCP range |
| `networkView` | `string` | The network view name |

**Returns:** `Object`

---

## IpamNetworkView

**Description:** Infoblox Network View

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `reference` | Reference | `string` | Yes |
| `name` | Name | `string` | No |
| `comment` | Comment | `string` | No |
| `defaultNetworkView` | Is default | `boolean` | Yes |
| `extensibleAttributes` | Extensible attributes | `Array/IpamExtensibleAttribute` | No |

## IpamPtrRecord

**Description:** Infoblox PTR Record

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `domainName` | Domain name in FQDN format | `string` | No |
| `dnsView` | DNS view | `string` | No |
| `address` | IPv4/IPv6 address | `string` | No |
| `comment` | Comment | `string` | No |
| `extensibleAttributes` | Extensible attributes | `Array/IpamExtensibleAttribute` | No |

## IpamRangeFilter

**Description:** Filter to search for ranges

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `networkView` | Network view name | `string` | No |
| `ipVersion` | IPv4 or IPv6 network | `IpamIpVersion` | No |
| `extensibleAttributes` | Extensible attributes | `Array/IpamSearchableExtensibleAttribute` | No |
| `maxResults` | Maximum number of results | `number` | No |
| `network` | Regular expression for searching for networks | `string` | No |
| `networkSearchComparison` | Network search comparison | `IpamSearchComparisonType` | No |

## IpamRestartMemberOrder

**Description:** The order in which Grid members are being restarted

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `SIMULTANEOUSLY` | Simultaneously order | `IpamRestartMemberOrder` | Yes |
| `SEQUENTIALLY` | Sequentially order | `IpamRestartMemberOrder` | Yes |

## IpamRestartOptions

**Description:** The options of request to restart Grid services

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `memberOrder` | The restart member order | `IpamRestartMemberOrder` | No |
| `requestType` | The restart request type | `IpamRestartRequestType` | No |
| `serviceOption` | The restart service option | `IpamRestartServiceOption` | No |
| `sequentialDelay` | The delayed time, in seconds, between Grid member restarts | `number` | No |

## IpamRestartRequestType

**Description:** The type of restart request

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `FORCE_RESTART` | Force restart | `IpamRestartRequestType` | Yes |
| `RESTART_IF_NEEDED` | Restart if needed | `IpamRestartRequestType` | Yes |

## IpamRestartServiceOption

**Description:** Grid services to restart

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `ALL` | All services | `IpamRestartServiceOption` | Yes |
| `DHCP` | DHCP service | `IpamRestartServiceOption` | Yes |
| `DNS` | DNS service | `IpamRestartServiceOption` | Yes |

## IpamSearchableExtensibleAttribute

**Description:** Infoblox IPAM Searchable Extensible Attribute

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `extensibleAttribute` | Extensible attribute | `IpamExtensibleAttribute` | No |
| `comparison` | Comparation type | `IpamSearchComparisonType` | No |

## IpamSearchComparisonType

**Description:** Infoblox IPAM Search Comparison Type

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `EQUAL` | Exact match | `IpamSearchComparisonType` | Yes |
| `EQUAL_CASE_INSENSITIVE` | Makes string matching case insensitive | `IpamSearchComparisonType` | Yes |
| `NOT_EQUAL` | Negates the condition | `IpamSearchComparisonType` | Yes |
| `REGULAR_EXPRESSION` | Regular expression search. Expressions are unanchored | `IpamSearchComparisonType` | Yes |
| `LESS_OR_EQUAL` | Less than or equal | `IpamSearchComparisonType` | Yes |
| `GREATER_OR_EQUAL` | Greater than or equal | `IpamSearchComparisonType` | Yes |

## IpamUpdateArrayStrategy

**Description:** Update array strategy

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `MERGE` | Update existing items or add new items if absent | `IpamUpdateArrayStrategy` | Yes |
| `OVERWRITE` | Overwrite existing items with the new ones | `IpamUpdateArrayStrategy` | Yes |

## IpamUpdateFixedAddressInfo

**Description:** Information for updating fixed address

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | The name | `string` | No |
| `mac` | The MAC address or DUID | `string` | No |

## IpamUpdateHostInfo

**Description:** Infoblox IPAM Host Info required for updating

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `newHostName` | The new host name | `string` | No |
| `additionalAliases` | The additional aliases of the host. These will be appended to existing list of aliases. | `Array/string` | No |
| `updateHostAddress` | Flag which indicates whether to update host address or not | `boolean` | No |
| `oldIp` | The IP address to update | `string` | No |
| `newIp` | The new IP address | `string` | No |
| `newMac` | The new MAC address | `string` | No |
| `newEnableDhcp` | The new Enable for DHCP flag | `boolean` | No |
| `newEnableDns` | The new Enable for DNS flag | `boolean` | No |

## IpamUpdateNetworkInfo

**Description:** Information for updating network

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dhcpOptions` | The IPAM DHCP options | `IpamDhcpOptions` | No |
| `updateDhcpOptionsStrategy` | The update DHCP options strategy (MERGE by default) | `IpamUpdateArrayStrategy` | No |

## IpamUpdateRangeInfo

**Description:** Information for updating range

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dhcpOptions` | The IPAM DHCP options | `IpamDhcpOptions` | No |
| `extensibleAttributes` | The extensible attributes | `Array/IpamExtensibleAttribute` | No |
| `updateDhcpOptionsStrategy` | The update DHCP options strategy (MERGE by default) | `IpamUpdateArrayStrategy` | No |
| `updateExtensibleAttributesStrategy` | The update extensible attributes strategy (MERGE by default) | `IpamUpdateArrayStrategy` | No |

## IpamViewManager

### Methods

#### `addNetworkView`
Adds network view

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `networkView` | `IpamNetworkView` | The network view to add |

**Returns:** `Object`

---

#### `findNetworkViewsByEA`
Find network views matching all the IPAM extensible attributes

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `extensibleAttributes` | `Array/IpamSearchableExtensibleAttribute` | The extensible attributes for searching |

**Returns:** `Array/IpamNetworkView`

---

#### `getAllNetworkViews`
Gets all network views

**Returns:** `Array/IpamNetworkView`

---

#### `getAllDnsViews`
Gets all DNS views

**Returns:** `Array/string`

---

#### `getDefaultNetworkView`
Gets default network view

**Returns:** `string`

---

#### `getDefaultDnsView`
Gets default DNS view

**Returns:** `string`

---

#### `getDnsViewsForNetworkView`
Gets list of DNS views for specified network view

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `networkView` | `string` | The network view |

**Returns:** `Array/string`

---

#### `getNetworkView`
Gets the network view

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `networkView` | `string` | The network view name |

**Returns:** `IpamNetworkView`

---

#### `isDnsViewOwnedByNetworkView`
Checks if DNS view is owned by network view

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `dnsView` | `string` | The DNS view |
| `networkView` | `string` | The network view |

**Returns:** `boolean`

---

#### `removeNetworkView`
Removes network view

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `reference` | `string` | The reference to the network view |

**Returns:** `Object`

---

## IpamZoneManager

### Methods

#### `getAuthZone`
Gets DNS Auth Zone

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `fqdn` | `string` | The FQDN of the Auth Zone |
| `networkView` | `string` | Network View name |
| `dnsView` | `string` | DNS View name |

**Returns:** `IpamAuthZone`

---

## ReferenceInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `reference` | Reference to the fixed address | `string` | Yes |
| `wapiType` | Reference to the fixed address | `string` | Yes |
| `refData` | Reference to the fixed address | `string` | Yes |
| `description` | Reference to the fixed address | `string` | Yes |

### Methods

#### `parse`
(Static) Parses the reference to IPAM object

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `reference` | `string` | The reference to IPAM object |

**Returns:** `ReferenceInfo`

---

## TenantManager

### Methods

#### `updateTenantName`
Updates the name of a tenant object

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `tenantId` | `string` | The tenant ID |
| `newTenantName` | `string` | The tenant name |

**Returns:** `Object`

---

