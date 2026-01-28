# API Reference

Generated Documentation

## ActiveDirectory

**Description:** Represents the Active Directory base.

### Methods

#### `search`
Search the active directory for a certain type of object

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `type` | `string` | May be one of this: ComputerAD, User, UserGroup, OrganizationalUnit or Group |
| `query` | `string` | The query. You don't have to place * before and after your query. |
| `adServer` | `AD_Host` | If not provided default Active Directory server will be used. |

**Returns:** `Array/Any`

---

#### `searchExactMatch`
Search the active directory for a certain type of object. Object will be returned only if the there is exact match.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `type` | `string` | May be one of this: ComputerAD, User, UserGroup, OrganizationalUnit or Group |
| `objectName` | `string` | Object name to search for |
| `limit` | `number` | Maximum number of returned results |
| `adServer` | `AD_Host` | If not provided default Active Directory server will be searched. |

**Returns:** `Array/Any`

---

#### `getComputerAD`
Returns a computer when his exact name is given. If no computer found, returns null

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `computerName` | `string` | The exact name of the computer |
| `adServer` | `AD_Host` | If not provided default Active Directory server will be used. |

**Returns:** `AD_Computer`

---

#### `getDC`
Return the AD_Computer representing the Domain Conroller

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `adServer` | `AD_Host` | If not provided default Active Directory server will be used. |

**Returns:** `AD_Computer`

---

#### `getEntry`
Retrieves the entry with the specified DN.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `baseDN` | `string` |  |
| `attributes` | `Array/string` |  |
| `host` | `AD_Host` |  |

**Returns:** `Object`

---

#### `rename`
Allows a client to change the leftmost (least significant) component of the name of an entry in the directory, or to move a subtree of entries to a new location in the directory. For example, to rename "cn=SomeUser, ou=People, dc=demo, dc=org" to "cn=AnotherUser, ou=People, dc=demo, dc=org" you must provide from as "cn=SomeUser, ou=People, dc=demo, dc=org" and to as "cn=AnotherUser". To move the entry under different tree node new_parent "cn=NewName, ou=NewParent, dc=demo, dc=org" must be provided.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `from` | `string` |  |
| `to` | `string` |  |
| `new_parent` | `string` |  |
| `param3` | `AD_Host` |  |

**Returns:** `void`

---

#### `searchForEntry`
Processes a search operation with the provided information. It is expected that at most one entry will be returned from the search, and that no additional content from the successful search result (e.g., diagnostic message or response controls) are needed.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `baseDN` | `string` |  |
| `searchScope` | `LdapSearchScope` |  |
| `timeLimit` | `number` |  |
| `filter` | `string` |  |
| `attributes` | `Array/string` |  |
| `host` | `AD_Host` |  |

**Returns:** `Object`

---

#### `searchRecursively`
Search recursively the whole domain tree of Active Directory for a certain type of objects.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `type` | `string` |  |
| `query` | `string` |  |
| `adServer` | `AD_Host` |  |

**Returns:** `Array/Object`

---

#### `getComputerADRecursively`
Gets computers recursively for the whole domain tree

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `computerName` | `string` |  |
| `adServer` | `AD_Host` |  |

**Returns:** `Array/Object`

---

#### `getAllDomainControllerComputers`
Retrieves all AD_Computer instances for the domain and all sub-domain Domain Controllers.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `param0` | `AD_Host` |  |

**Returns:** `Array/Object`

---

## AD_Computer

**Description:** Computer on the AD

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `id` | The unique Id of the element | `string` | Yes |
| `name` | The node name | `string` | Yes |
| `hostname` | The remote host name | `string` | Yes |
| `enabled` | Activate or deactivate a computer | `boolean` | No |
| `distinguishedName` | Return the DN of the item | `string` | Yes |
| `allAttributes` | Returns all attributes | `Array/Object` | Yes |
| `gUID` | Return object GUID formatted as dashed string | `string` | Yes |

### Methods

#### `removeAttribute`
Removes an attribute as specified by the attribName parameter

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `attribName` | `string` |  |

**Returns:** `void`

---

#### `destroy`
Destroy this element from the AD. Take care, this action PERMANENTLY DESTROY the element

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `param0` | `boolean` |  |

**Returns:** `void`

---

#### `rename`
Allows a client to change the leftmost (least significant) component of the name of an entry in the directory. Тo rename the entry you must provide it with the attribute as prefix - e.g. "cn=newName".

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `string` |  |

**Returns:** `void`

---

#### `setAttribute`
Change the value of an existing attribute

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `attribName` | `string` |  |
| `newValue` | `Object` |  |

**Returns:** `void`

---

#### `getAttribute`
Get an AD attribute

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `attibName` | `string` |  |

**Returns:** `string`

---

#### `addAttribute`
Adds an attribute

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `attribName` | `string` |  |
| `newValue` | `Object` |  |

**Returns:** `void`

---

#### `getArrayAttribute`
Get an AD attribute for an array of values

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `attibName` | `string` |  |

**Returns:** `Array/string`

---

#### `getAttributeValueBytes`
Get an AD attribute value as byte array.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `attibName` | `string` |  |

**Returns:** `Array/Object`

---

## AD_Group

**Description:** Group

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `id` | the unique Id of the element | `string` | Yes |
| `users` | List of all users (read-only) | `Array/Object` | Yes |
| `computers` | List of all computers (read-only) | `Array/Object` | Yes |
| `userGroups` | List of all user groups (read-only) | `Array/Object` | Yes |
| `containers` | List of all Group (read-only) | `Array/Object` | Yes |
| `organizationalUnits` | List of all OU (read-only) | `Array/Object` | Yes |
| `distinguishedName` | Return the DN of the item | `string` | Yes |
| `allAttributes` | Returns all attributes | `Array/Object` | Yes |
| `gUID` | Return object GUID formatted as dashed string | `string` | Yes |

### Methods

#### `createUser`
Creates a new user and adds it to this container

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `accountName` | `string` |  |
| `domainName` | `string` |  |
| `displayName` | `string` |  |

**Returns:** `void`

---

#### `createUserWithPassword`
Creates a new user, sets its password and adds it to this container

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `accountName` | `string` |  |
| `password` | `string` |  |
| `domainName` | `string` |  |
| `displayName` | `string` |  |

**Returns:** `void`

---

#### `createUserWithDetails`
Creates a new user, sets its password and adds it to this container

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `accountName` | `string` |  |
| `password` | `string` |  |
| `domainName` | `string` |  |
| `displayName` | `string` |  |
| `firstName` | `string` |  |
| `lastName` | `string` |  |

**Returns:** `void`

---

#### `createUserGroup`
Creates a new user group and adds it to this container

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `groupName` | `string` |  |

**Returns:** `void`

---

#### `createOrganizationalUnit`
Creates a new organizational unit and adds it to this container

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `ouName` | `string` |  |

**Returns:** `void`

---

#### `createComputer`
Create a new computer and add it to this container

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `computerName` | `string` |  |
| `domainName` | `string` |  |
| `computerNamePreWin2K` | `string` |  |

**Returns:** `void`

---

#### `createComputerWithPassword`
Create a new computer with password and add it to this container

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `computerName` | `string` |  |
| `domainName` | `string` |  |
| `password` | `string` |  |
| `computerNamePreWin2K` | `string` |  |

**Returns:** `void`

---

#### `removeAttribute`
Removes an attribute as specified by the attribName parameter

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `attribName` | `string` |  |

**Returns:** `void`

---

#### `setAttribute`
Change the value of an existing attribute

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `attribName` | `string` |  |
| `newValue` | `Object` |  |

**Returns:** `void`

---

#### `getAttribute`
Get an AD attribute

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `attibName` | `string` |  |

**Returns:** `string`

---

#### `addAttribute`
Adds an attribute

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `attribName` | `string` |  |
| `newValue` | `Object` |  |

**Returns:** `void`

---

#### `getArrayAttribute`
Get an AD attribute for an array of values

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `attibName` | `string` |  |

**Returns:** `Array/string`

---

#### `getAttributeValueBytes`
Get an AD attribute value as byte array.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `attibName` | `string` |  |

**Returns:** `Array/Object`

---

## AD_Host

**Description:** Represents Active directory server connection.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Active directory configuration name | `string` | Yes |
| `Url` | Active Directory host connection URL. Actual URL used for connection with Active Directory server. It might differ from configured values when current object represents sub-domain entity. | `String` | Yes |
| `hostConfiguration` | Active Directory host configuration settings for current AD_Host connection. | `AD_ServerConfiguration` | Yes |

### Methods

#### `getLdapClient`
Retrieve LdapClient based on current host configuration settings.

**Returns:** `LdapClient`

---

## AD_HostManager

**Description:** Manage Active Directory hosts

### Methods

#### `findHost`
Return Active Directory hosts by it's configuration id.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `param0` | `string` |  |

**Returns:** `AD_Host`

---

#### `findAllHosts`
Return all Active Directory hosts.

**Returns:** `Array/Object`

---

## AD_OrganizationalUnit

**Description:** Represents an Organizational Unit

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `id` | the unique Id of the element | `string` | Yes |
| `users` | List of all users (read-only) | `Array/Object` | Yes |
| `computers` | List of all computers (read-only) | `Array/Object` | Yes |
| `userGroups` | List of all user groups (read-only) | `Array/Object` | Yes |
| `containers` | List of all Group (read-only) | `Array/Object` | Yes |
| `organizationalUnits` | List of all OU (read-only) | `Array/Object` | Yes |
| `distinguishedName` | Return the DN of the item | `string` | Yes |
| `allAttributes` | Returns all attributes | `Array/Object` | Yes |
| `gUID` | Return object GUID formatted as dashed string | `string` | Yes |

### Methods

#### `searchComputer`
Get a computer by name

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `computerName` | `string` |  |

**Returns:** `AD_Computer`

---

#### `createUser`
Creates a new user and adds it to this container

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `accountName` | `string` |  |
| `domainName` | `string` |  |
| `displayName` | `string` |  |

**Returns:** `void`

---

#### `createUserWithPassword`
Creates a new user, sets its password and adds it to this container

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `accountName` | `string` |  |
| `password` | `string` |  |
| `domainName` | `string` |  |
| `displayName` | `string` |  |

**Returns:** `void`

---

#### `createUserWithDetails`
Creates a new user, sets its password and adds it to this container

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `accountName` | `string` |  |
| `password` | `string` |  |
| `domainName` | `string` |  |
| `displayName` | `string` |  |
| `firstName` | `string` |  |
| `lastName` | `string` |  |

**Returns:** `void`

---

#### `createUserGroup`
Creates a new user group and adds it to this container

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `groupName` | `string` |  |

**Returns:** `void`

---

#### `createOrganizationalUnit`
Creates a new organizational unit and adds it to this container

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `ouName` | `string` |  |

**Returns:** `void`

---

#### `createComputer`
Create a new computer and add it to this container

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `computerName` | `string` |  |
| `domainName` | `string` |  |
| `computerNamePreWin2K` | `string` |  |

**Returns:** `void`

---

#### `createComputerWithPassword`
Create a new computer with password and add it to this container

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `computerName` | `string` |  |
| `domainName` | `string` |  |
| `password` | `string` |  |
| `computerNamePreWin2K` | `string` |  |

**Returns:** `void`

---

#### `removeAttribute`
Removes an attribute as specified by the attribName parameter

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `attribName` | `string` |  |

**Returns:** `void`

---

#### `destroy`
Destroy this element from the AD. Take care, this action PERMANENTLY DESTROY the element

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `param0` | `boolean` |  |

**Returns:** `void`

---

#### `setAttribute`
Change the value of an existing attribute

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `attribName` | `string` |  |
| `newValue` | `Object` |  |

**Returns:** `void`

---

#### `getAttribute`
Get an AD attribute

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `attibName` | `string` |  |

**Returns:** `string`

---

#### `addAttribute`
Adds an attribute

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `attribName` | `string` |  |
| `newValue` | `Object` |  |

**Returns:** `void`

---

#### `getArrayAttribute`
Get an AD attribute for an array of values

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `attibName` | `string` |  |

**Returns:** `Array/string`

---

#### `getAttributeValueBytes`
Get an AD attribute value as byte array.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `attibName` | `string` |  |

**Returns:** `Array/Object`

---

## AD_PluginOptions

**Description:** Active Directory Plug-in options

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `defaultAdServerId` | Default Active Directory end point id. | `string` | Yes |
| `searchSizeLimit` | Maximum number of items that will be returned by a search. | `number` | Yes |
| `searchSizeLimitPerServer` | Maximum number of items that will be returned by a search from single Active Directory server. | `number` | Yes |

## AD_ServerConfiguration

**Description:** Represents single Active Directory service end point configuration.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `id` | Id | `String` | No |
| `name` | Name | `String` | No |
| `host` | Active Directory host | `String` | No |
| `port` | Active Directory port | `number` | No |
| `ldapBase` | Root | `String` | No |
| `useSSL` | Use SSL | `boolean` | No |
| `defaultDomain` | Default domain | `string` | No |
| `useSharedSession` | Use a shared session (deprecated) | `boolean` | No |
| `sharedUserName` | User name for shared session | `String` | No |
| `sharedUserPassword` | Password for shared session | `String` | No |
| `followReferrals` | Follow refferals | `boolean` | No |
| `alternativeHosts` | Alternative host adresses | `Array/String` | No |
| `loadBalancingMode` | Strategy for load balancing between configured alternative hosts. | `LdapLoadBalancingMode` | No |
| `bindType` | Bind Type. Supported bind types are 'Simple' and 'Digest'. | `LdapBindType` | No |

## AD_Unknown

**Description:** Unknown type of object

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `id` | the unique Id of the element | `string` | Yes |
| `distinguishedName` | Return the DN of the item | `string` | Yes |
| `allAttributes` | Returns all attributes | `Array/Object` | Yes |
| `gUID` | Return object GUID formatted as dashed string | `string` | Yes |

### Methods

#### `removeAttribute`
Removes an attribute as specified by the attribName parameter

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `attribName` | `string` |  |

**Returns:** `void`

---

#### `destroy`
Destroy this element from the AD. Take care, this action PERMANENTLY DESTROY the element

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `param0` | `boolean` |  |

**Returns:** `void`

---

#### `rename`
Allows a client to change the leftmost (least significant) component of the name of an entry in the directory. Тo rename the entry you must provide it with the attribute as prefix - e.g. "cn=newName".

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `string` |  |

**Returns:** `void`

---

#### `setAttribute`
Change the value of an existing attribute

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `attribName` | `string` |  |
| `newValue` | `Object` |  |

**Returns:** `void`

---

#### `getAttribute`
Get an AD attribute

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `attibName` | `string` |  |

**Returns:** `string`

---

#### `addAttribute`
Adds an attribute

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `attribName` | `string` |  |
| `newValue` | `Object` |  |

**Returns:** `void`

---

#### `getArrayAttribute`
Get an AD attribute for an array of values

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `attibName` | `string` |  |

**Returns:** `Array/string`

---

#### `getAttributeValueBytes`
Get an AD attribute value as byte array.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `attibName` | `string` |  |

**Returns:** `Array/Object`

---

## AD_User

**Description:** User

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `id` | the unique Id of the element | `string` | Yes |
| `enabled` | Activate or deactivate a user | `boolean` | No |
| `userPrincipalName` | The user principal name | `string` | No |
| `sID` | The SID represented as a character string with following format 'S-1-IdentifierAuthority-SubAuthority1-SubAuthority2-...-SubAuthorityn' | `string` | Yes |
| `accountName` | Return the SAM Account Name | `string` | Yes |
| `memberOf` | Return groups that contains the user | `Array/AD_UserGroup` | Yes |
| `distinguishedName` | Return the DN of the item | `string` | Yes |
| `allAttributes` | Returns all attributes | `Array/Object` | Yes |
| `gUID` | Return object GUID formatted as dashed string | `string` | Yes |

### Methods

#### `setPassword`
Sets the passed in String value as a password of this user.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `The new password to set` | `string` |  |

**Returns:** `void`

---

#### `setChangePasswordAtNextLogon`
Sets the user account to change or not change the password at next logon.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `Set this value to true if you want to enforce the user to change his password at next logon` | `boolean` |  |

**Returns:** `void`

---

#### `removeAttribute`
Removes an attribute as specified by the attribName parameter

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `attribName` | `string` |  |

**Returns:** `void`

---

#### `destroy`
Destroy this element from the AD. Take care, this action PERMANENTLY DESTROY the element

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `param0` | `boolean` |  |

**Returns:** `void`

---

#### `rename`
Allows a client to change the leftmost (least significant) component of the name of an entry in the directory. Тo rename the entry you must provide it with the attribute as prefix - e.g. "cn=newName".

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `string` |  |

**Returns:** `void`

---

#### `setAttribute`
Change the value of an existing attribute

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `attribName` | `string` |  |
| `newValue` | `Object` |  |

**Returns:** `void`

---

#### `getAttribute`
Get an AD attribute

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `attibName` | `string` |  |

**Returns:** `string`

---

#### `addAttribute`
Adds an attribute

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `attribName` | `string` |  |
| `newValue` | `Object` |  |

**Returns:** `void`

---

#### `getArrayAttribute`
Get an AD attribute for an array of values

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `attibName` | `string` |  |

**Returns:** `Array/string`

---

#### `getAttributeValueBytes`
Get an AD attribute value as byte array.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `attibName` | `string` |  |

**Returns:** `Array/Object`

---

## AD_UserGroup

**Description:** UserGroup

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `id` | the unique Id of the element | `string` | Yes |
| `sID` | The SID represented as a character string with following format 'S-1-IdentifierAuthority-SubAuthority1-SubAuthority2-...-SubAuthorityn' | `string` | Yes |
| `computerMembers` | Gets the computers that are members of the current group | `Array/AD_Computer` | Yes |
| `memberOf` | Get the group of which current group is member | `Array/AD_UserGroup` | Yes |
| `userMembers` | Gets the users that are members of the current group | `Array/AD_User` | Yes |
| `groupMembers` | Gets the groups that are members of the current group | `Array/AD_UserGroup` | Yes |
| `distinguishedName` | Return the DN of the item | `string` | Yes |
| `allAttributes` | Returns all attributes | `Array/Object` | Yes |
| `gUID` | Return object GUID formatted as dashed string | `string` | Yes |

### Methods

#### `addElements`
Adds elements to the group

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `elements: all elements to add to the group` | `Array/Object` |  |

**Returns:** `void`

---

#### `removeElements`
Removes elements from the group

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `elements: all elements to remove from the group` | `Array/Object` |  |

**Returns:** `void`

---

#### `removeAttribute`
Removes an attribute as specified by the attribName parameter

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `attribName` | `string` |  |

**Returns:** `void`

---

#### `destroy`
Destroy this element from the AD. Take care, this action PERMANENTLY DESTROY the element

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `param0` | `boolean` |  |

**Returns:** `void`

---

#### `rename`
Allows a client to change the leftmost (least significant) component of the name of an entry in the directory. Тo rename the entry you must provide it with the attribute as prefix - e.g. "cn=newName".

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `string` |  |

**Returns:** `void`

---

#### `setAttribute`
Change the value of an existing attribute

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `attribName` | `string` |  |
| `newValue` | `Object` |  |

**Returns:** `void`

---

#### `getAttribute`
Get an AD attribute

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `attibName` | `string` |  |

**Returns:** `string`

---

#### `addAttribute`
Adds an attribute

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `attribName` | `string` |  |
| `newValue` | `Object` |  |

**Returns:** `void`

---

#### `getArrayAttribute`
Get an AD attribute for an array of values

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `attibName` | `string` |  |

**Returns:** `Array/string`

---

#### `getAttributeValueBytes`
Get an AD attribute value as byte array.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `attibName` | `string` |  |

**Returns:** `Array/Object`

---

## ConfigurationManager

**Description:** Manage Active Directory plug-in configuration

### Methods

#### `reset`
Delete Active Directory server configuration. Since version 2.0.0 of the plug-in multiple Active Directory servers can be configured. This method will delete default Active Directory server configuration.

**Returns:** `void`

---

#### `findAll`
Return available Active Directory server configurations.

**Returns:** `Array/Object`

---

#### `updateConfiguration`
Configure Active Directory server. Since version 2.0.0 of Active Directory plug-in multiple Active Directory servers can be configured.This method will update default Active Directory configuration if exists otherwise new configuration will be created.Deprecated use saveConfiguration(ServerConfiguration).

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `param0` | `AD_ServerConfiguration` |  |

**Returns:** `void`

---

#### `deleteConfiguration`
Delete Active Directory server configuration with specified id.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `param0` | `string` |  |

**Returns:** `void`

---

#### `validateConfiguration`
Validate Active Directory configuration.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `param0` | `AD_ServerConfiguration` |  |

**Returns:** `void`

---

#### `saveConfiguration`
Save Active Directory server configuration. If provided configuration id is not set new configuration will be created otherwise existing configuration will be updated.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `param0` | `AD_ServerConfiguration` |  |

**Returns:** `string`

---

#### `savePluginOptions`
Save ActiveDirectory plugin options.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `param0` | `Object` |  |

**Returns:** `void`

---

#### `getPluginOptions`
Get global ActiveDirectory plugin options.

**Returns:** `AD_PluginOptions`

---

#### `getConfigurationById`
Return Active Directory server configuration with specified id. If id is not provided default Active Directory server will be returned.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `param0` | `string` |  |

**Returns:** `AD_ServerConfiguration`

---

## LdapAttribute

**Description:** This class provides a data structure for holding information about an LDAP attribute, which includes an attribute name (which may include a set of attribute options) and zero or more values.

### Methods

#### `LdapAttribute`
Creates a new LDAP attribute with the specified name and no values.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `String` | The name for this attribute. It must not be null. |

**Returns:** `void`

---

#### `LdapAttribute`
Creates a new LDAP attribute with the specified name and no values.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `String` | The name for this attribute. It must not be null. |
| `values` | `Array/String` | The set of values for this attribute. It must not be null. |

**Returns:** `void`

---

#### `getName`
Retrieves the name for this attribute (i.e., the attribute description), which may include zero or more attribute options.

**Returns:** `string`

---

#### `getValue`
Retrieves the value for this attribute as a string.

**Returns:** `string`

---

#### `size`
Retrieves the number of values for this attribute.

**Returns:** `number`

---

#### `hasValue`
Indicates whether this attribute contains the specified value.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `param0` | `string` |  |

**Returns:** `boolean`

---

#### `getBaseName`
Retrieves the base name for this attribute, which is the name or OID of the attribute type, without any attribute options.

**Returns:** `string`

---

#### `getValueAsLong`
Retrieves the value for this attribute as a long.

**Returns:** `number`

---

#### `getValues`
Retrieves the set of values for this attribute as strings.

**Returns:** `Array/string`

---

#### `getValueByteArray`
Retrieves the value for this attribute as a byte array.

**Returns:** `Array/Object`

---

#### `getValueAsDate`
Retrieves the value for this attribute as a Date.

**Returns:** `Object`

---

#### `getValueByteArrays`
Retrieves the set of values for this attribute as byte arrays.

**Returns:** `Array/Object`

---

#### `hasValueAsByte`
Indicates whether this attribute contains the specified value.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `param0` | `Array/Object` |  |

**Returns:** `boolean`

---

#### `getOptions`
Retrieves the set of options for this attribute.

**Returns:** `Array/Object`

---

## LdapBindType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `Simple` | Use Simple bind | `LdapBindType` | Yes |
| `Digest` | Use Digest. | `LdapBindType` | Yes |

### Methods

#### `getValue`
Returns Bind Type as string.

**Returns:** `String`

---

#### `getValuesAsString`
(Static) Returns supported bind types .

**Returns:** `String[`

---

#### `fromString`
(Static) Create BindType object from it's string representation.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `value` | `string` | Bind type string representation. |

**Returns:** `LdapBindType`

---

## LdapClient

**Description:** Connection to ldap server.

### Methods

#### `LdapClient`
Creates a new LDAP connection that is established to the specified server and is authenticated as the specified user (via LDAP simple authentication).

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `param0` | `Object` |  |
| `param1` | `string` |  |
| `param2` | `number` |  |
| `param3` | `string` |  |
| `param4` | `string` |  |

**Returns:** `void`

---

#### `isConnected`
Indicates whether this connection is currently established.

**Returns:** `boolean`

---

#### `delete`
Deletes the entry with the specified DN.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `dn` | `string` |  |

**Returns:** `LdapResult`

---

#### `connect`
Establishes an unauthenticated connection to the directory server using the provided information.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `host` | `string` |  |
| `port` | `number` |  |
| `timeout` | `number` |  |

**Returns:** `void`

---

#### `close`
If this method is invoked while any operations are in progress on this connection, then the directory server may or may not abort processing for those operations, depending on the type of operation and how far along the server has already gotten while processing that operation. It is recommended that all active operations be abandoned, canceled, or allowed to complete before attempting to close an active connection.

**Returns:** `void`

---

#### `addEntry`
Processes an add operation with the provided information.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `entry` | `LdapEntry` |  |

**Returns:** `LdapResult`

---

#### `search`
Processes a search operation with the provided information. The search result entries and references will be collected internally and included in the SearchResult object that is returned.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `baseDN` | `string` |  |
| `searchScope` | `LdapSearchScope` |  |
| `derefPolicy` | `LdapDereferencePolicy` |  |
| `sizeLimit` | `number` |  |
| `timeLimit` | `number` |  |
| `filter` | `string` |  |
| `attributes` | `Array/string` |  |

**Returns:** `LdapSearchResult`

---

#### `bind`
The LDAP protocol specification forbids clients from attempting to perform a bind on a connection in which one or more other operations are already in progress. If a bind is attempted while any operations are in progress, then the directory server may or may not abort processing for those operations.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `bindDN` | `string` |  |
| `password` | `string` |  |

**Returns:** `LdapResult`

---

#### `getEntry`
Retrieves the entry with the specified DN. The requested entry, or null if the target entry does not exist or no entry was returned (e.g., if the authenticated user does not have permission to read the target entry).

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `dn` | `string` |  |
| `attributes` | `Array/string` |  |

**Returns:** `LdapEntry`

---

#### `addAttribute`
Processes an add operation with the provided information.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `dn` | `string` |  |
| `attributes` | `Array/Object` |  |

**Returns:** `LdapResult`

---

#### `setConnectionName`
Specifies the user-friendly name that should be used for this connection. This name may be used in debugging to help identify the purpose of this connection.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `connectionName` | `string` |  |

**Returns:** `void`

---

#### `modify`
Applies the provided modification to the specified entry.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `dn` | `string` |  |
| `modificaitons` | `Array/Object` |  |

**Returns:** `Object`

---

#### `reconnect`
Attempts to re-establish a connection to the server and re-authenticate if appropriate.

**Returns:** `void`

---

#### `getConnectionName`
Retrieves the user-friendly name that has been assigned to this connection.

**Returns:** `string`

---

#### `getDisconnectMessage`
Retrieves the disconnect message for this connection, which may provide additional information about the reason for the disconnect, if available.

**Returns:** `string`

---

#### `getLastCommunicationTime`
Retrieves the time that this connection was last used to send or receive an LDAP message. The value will represent the number of milliseconds since January 1, 1970 UTC (the same format used by System.currentTimeMillis.

**Returns:** `number`

---

#### `deleteByDeleteRequest`
Deletes the entry with the specified DN.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `param0` | `LdapDeleteRequest` |  |

**Returns:** `LdapResult`

---

#### `searchBySearchRequest`
Processes a search operation with the provided information. The search result entries and references will be collected internally and included in the SearchResult object that is returned.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `searchRequest` | `LdapSearchRequest` |  |

**Returns:** `LdapSearchResult`

---

#### `modifyDN`
Applies the provided modification to the specified entry.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `dn` | `string` |  |
| `newRDN` | `string` |  |
| `deleteOldRDN` | `boolean` |  |
| `newSuperiorDN` | `string` |  |

**Returns:** `LdapResult`

---

#### `getConnectTime`
Retrieves the time that this connection was established in the number of milliseconds since January 1, 1970 UTC (the same format used by System.currentTimeMillis.

**Returns:** `number`

---

#### `searchForEntry`
Processes a search operation with the provided information. It is expected that at most one entry will be returned from the search, and that no additional content from the successful search result (e.g., diagnostic message or response controls) are needed.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `dn` | `string` |  |
| `searchScope` | `LdapSearchScope` |  |
| `timeLimit` | `number` |  |
| `filter` | `string` |  |
| `attributes` | `Array/string` |  |

**Returns:** `LdapEntry`

---

## LdapClientFactory

**Description:** Create new non persisted ldap connections.

### Methods

#### `newLdapClient`
Creates a new LDAP connection that is established to the specified server and is authenticated as the specified user (via LDAP simple authentication).

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `host` | `string` |  |
| `port` | `number` |  |
| `bindDN` | `string` |  |
| `password` | `string` |  |
| `useSSL` | `boolean` |  |

**Returns:** `LdapClient`

---

## LdapDeleteRequest

**Description:** This class implements the processing necessary to perform an LDAPv3 search operation, which can be used to retrieve entries that match a given set of criteria.

### Methods

#### `duplicate`
Creates a new instance of this LDAP request that may be modified without impacting this request. The provided controls will be used for the new request instead of duplicating the controls from this request.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `controls` | `Array/Object` |  |

**Returns:** `LdapDeleteRequest`

---

#### `createRequest`
(Static) Factory method for creating new LdapDeleteRequest instances from provided info.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `param0` | `string` |  |
| `param1` | `Array/Object` |  |

**Returns:** `LdapDeleteRequest`

---

#### `getDN`
Retrieves the DN of the entry to delete.

**Returns:** `string`

---

#### `setDN`
Specifies the DN of the entry to delete.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `dn` | `string` |  |

**Returns:** `void`

---

#### `getControl`
Retrieves the control with the specified OID from this request. If this request has multiple controls with the specified OID, then the first will be returned.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `oid` | `string` |  |

**Returns:** `void`

---

#### `getOperationType`
Retrieves the type of operation that is represented by this request.

**Returns:** `Object`

---

#### `getControls`
Retrieves the set of controls for this request. The caller must not alter this set of controls.

**Returns:** `Array/Object`

---

#### `hasControl`
Indicates whether this request contains at least one control.

**Returns:** `boolean`

---

#### `getResponseTimeoutMillis`
Retrieves the maximum length of time in milliseconds that processing on this operation should be allowed to block while waiting for a response from the server.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `client` | `LdapClient` |  |

**Returns:** `number`

---

#### `setResponseTimeoutMillis`
Specifies the maximum length of time in milliseconds that processing on this operation should be allowed to block while waiting for a response from the server. A value of zero indicates that no timeout should be enforced. A value that is less than zero indicates that the default response timeout for the underlying connection should be used.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `responseTimeout` | `number` |  |

**Returns:** `void`

---

#### `getLastMessageID`
Retrieves the message ID for the last LDAP message sent using this request.

**Returns:** `number`

---

#### `setFollowReferrals`
Specifies whether to automatically follow any referrals encountered while processing this request. This may be used to override the default behavior defined in the connection options for the connection used to process the request.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `followReferrals` | `boolean` |  |

**Returns:** `void`

---

#### `followReferrals`
Indicates whether to automatically follow any referrals encountered while processing this request. If a value has been set for this request, then it will be returned. Otherwise, the default from the connection options for the provided connection will be used.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `client` | `LdapClient` |  |

**Returns:** `boolean`

---

#### `replaceControl`
Replaces the control with the same OID as the provided control with the provided control. If no control with the same OID exists in the request, then the control will be added to the request. If the request has multiple controls with the same OID as the new control, then only the first will be replaced.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `control` | `Object` |  |

**Returns:** `Object`

---

#### `clearControls`
Removes all controls from this request.

**Returns:** `void`

---

#### `addControl`
Adds the provided control to the set of controls for this request.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `control` | `Object` |  |

**Returns:** `void`

---

#### `replaceControlByOid`
Replaces the control with the specified OID with the provided control. If no control with the given OID exists in the request, then a new control will be added. If this request has multiple controls with the specified OID, then only the first will be replaced.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `oid` | `string` |  |
| `control` | `Object` |  |

**Returns:** `void`

---

#### `hasControlByOid`
Indicates whether this request contains at least one control with the specified OID.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `oid` | `string` |  |

**Returns:** `boolean`

---

#### `removeControlByOid`
Removes the control with the specified OID from the set of controls for this request. If this request has multiple controls with the same OID, then only the first will be removed.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `oid` | `string` |  |

**Returns:** `Object`

---

## LdapDereferencePolicy

**Description:** This class defines a data type for dereference policy values. Clients should generally use one of the {@code NEVER}, {@code SEARCHING}, {@code FINDING}, {@code ALWAYS} values.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `NEVER` | A predefined dereference policy value which indicates that the server should not dereference any aliases that it encounters. | `LdapDereferencePolicy` | Yes |
| `SEARCHING` | A predefined dereference policy value which indicates that the server should dereference any aliases that it may encounter while examining candidate entries, but it should not dereference the base entry if it happens to be an alias entry. | `LdapDereferencePolicy` | Yes |
| `FINDING` | A predefined dereference policy value which indicates that the server should dereference the base entry if it happens to be an alias entry, but it should not dereference any alias entries that may be encountered while examining candidate entries. | `LdapDereferencePolicy` | Yes |
| `ALWAYS` | A predefined dereference policy value which indicates that the server should dereference the base entry if it happens to be an alias entry, and should also dereference any entries that may be encountered while examining candidates. | `LdapDereferencePolicy` | Yes |

## LdapDN

**Description:** This class provides a data structure for holding information about an LDAP distinguished name (DN). A DN consists of a comma-delimited list of zero or more RDN components.

### Methods

#### `fromString`
(Static) Creates a new DN from the provided string representation.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `dnString` | `String` | The string representation to use to create this DN. It must not be null. |

**Returns:** `LdapRDN`

---

#### `fromRdns`
(Static) Creates a new DN with the provided set of RDNs.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `rdns` | `Array/LdapRDN` | The RDN components for this DN. It must not be null. |

**Returns:** `LdapRDN`

---

#### `fromParentDn`
(Static) Creates a new DN below the provided parent DN with the given RDN.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `rdn` | `LdapRDN` | The RDN for the new DN. It must not be null. |
| `parentDN` | `LdapDN` | The parent DN for the new DN to create. It must not be null. |

**Returns:** `LdapRDN`

---

#### `getRDN`
Retrieves the leftmost (i.e., furthest from the naming context) RDN component for this DN.

**Returns:** `LdapRDN`

---

#### `getRDNString`
Retrieves the string representation of the leftmost (i.e., furthest from the naming context) RDN component for this DN.

**Returns:** `String`

---

#### `getRDNs`
Retrieves the set of RDNs that comprise this DN.

**Returns:** `Array/LdapRDN`

---

#### `getRDNStrings`
Retrieves the set of string representations of the RDNs that comprise this DN.

**Returns:** `Array/Strings`

---

#### `isNullDN`
Indicates whether this DN represents the null DN, which does not have any RDN components.

**Returns:** `boolean`

---

#### `getParent`
Retrieves the DN that is the parent for this DN. Note that neither the null DN nor DNs consisting of a single RDN component will be considered to have parent DNs.

**Returns:** `LdapDN`

---

#### `getParentString`
Retrieves the string representation of the DN that is the parent for this DN. Note that neither the null DN nor DNs consisting of a single RDN component will be considered to have parent DNs.

**Returns:** `String`

---

#### `isAncestorOf`
Indicates whether this DN is an ancestor of the provided DN. It will be considered an ancestor of the provided DN if the array of RDN components for the provided DN ends with the elements that comprise the array of RDN components for this DN (i.e., if the provided DN is subordinate to, or optionally equal to, this DN). The null DN will be considered an ancestor for all other DNs (with the exception of the null DN if allowEquals is false).

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `param0` | `LdapDN` |  |
| `param1` | `boolean` |  |

**Returns:** `boolean`

---

#### `equals`
Indicates whether the provided object is equal to this DN. In order for the provided object to be considered equal, it must be a non-null DN with the same set of RDN components.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `dn` | `LdapDN` | DN |

**Returns:** `boolean`

---

#### `toString`
Retrieves a string representation of this DN.

**Returns:** `String`

---

#### `toNormalizedString`
Retrieves a normalized string representation of this DN.

**Returns:** `String`

---

## LdapEntry

**Description:** This class provides a data structure for holding information about an LDAP entry. An entry contains a distinguished name (DN) and a set of attributes. An entry can be created from these components, and it can also be created from its LDIF representation as described in RFC 2849.

### Methods

#### `LdapEntry`
Creates a new entry with the provided DN and set of attributes.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `dn` | `String` | The DN for this entry. It must not be |
| `values` | `Array/LdapAttribute` | The set of attributes for this entry. It must not be null |

**Returns:** `void`

---

#### `LdapEntry`
Creates a new entry from the provided LDIF representation.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `entryLines` | `Array/String` | The set of lines that comprise an LDIF representation of the entry. It must not be {@code null} or empty.parameter" |

**Returns:** `void`

---

#### `removeAttribute`
Removes the specified attribute from this entry.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `param0` | `string` |  |

**Returns:** `boolean`

---

#### `hasAttribute`
Indicates whether this entry contains the specified attribute.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `param0` | `LdapAttribute` |  |

**Returns:** `boolean`

---

#### `getAttributes`
Retrieves the set of attributes contained in this entry

**Returns:** `Array/Object`

---

#### `getAttribute`
Retrieves the attribute with the specified name.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `param0` | `string` |  |

**Returns:** `LdapAttribute`

---

#### `addAttribute`
Adds the specified attribute to this entry, if it is not already present.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `param0` | `LdapAttribute` |  |

**Returns:** `boolean`

---

#### `getAttributeValue`
Retrieves the value for the specified attribute, if available. If the attribute has more than one value, then the first value will be returned.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `param0` | `string` |  |

**Returns:** `string`

---

#### `removeAttributeValue`
Removes the specified attribute value from this entry if it is present. If it is the last value for the attribute, then the entire attribute will be removed. If the specified value is not present, then no change will be made.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `param0` | `string` |  |
| `param1` | `string` |  |

**Returns:** `boolean`

---

#### `getAttributeValues`
Retrieves the set of values for the specified attribute, if available

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `param0` | `string` |  |

**Returns:** `Array/string`

---

#### `getDN`
Retrieves the DN for this entry.

**Returns:** `string`

---

#### `hasAttributeWithName`
Indicates whether this entry contains the specified attribute.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `param0` | `string` |  |

**Returns:** `boolean`

---

#### `hasAttributeValueBytes`
Indicates whether this entry contains an attribute with the given name and value.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `param0` | `string` |  |
| `param1` | `Array/Object` |  |

**Returns:** `boolean`

---

#### `getAttributeValueAsBytes`
Retrieves the value for the specified attribute, if available. If the attribute has more than one value, then the first value will be returned.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `param0` | `string` |  |

**Returns:** `Array/Object`

---

#### `addAttributeValue`
Adds the specified attribute value to this entry, if it is not already present.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `param0` | `string` |  |
| `param1` | `string` |  |

**Returns:** `boolean`

---

#### `addAttributeValueAsByte`
Adds the specified attribute value to this entry, if it is not already present.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `param0` | `string` |  |
| `param1` | `Array/Object` |  |

**Returns:** `boolean`

---

#### `addAttributeValues`
Adds the provided attribute to this entry. If this entry already contains an attribute with the same name, then their values will be merged.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `param0` | `string` |  |
| `param1` | `Array/Object` |  |

**Returns:** `boolean`

---

#### `removeAttributeValueAsBytes`
Removes the specified attribute value from this entry if it is present. If it is the last value for the attribute, then the entire attribute will be removed. If the specified value is not present, then no change will be made.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `param0` | `string` |  |
| `param1` | `Array/Object` |  |

**Returns:** `boolean`

---

#### `setAttributeValue`
Adds the provided attribute to this entry, replacing any existing set of values for the associated attribute.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `param0` | `string` |  |
| `param1` | `string` |  |

**Returns:** `void`

---

#### `setAttributeValueAsBytes`
Adds the provided attribute to this entry, replacing any existing set of values for the associated attribute.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `param0` | `string` |  |
| `param1` | `Array/Object` |  |

**Returns:** `void`

---

#### `setAttributeValues`
Adds the provided attribute to this entry, replacing any existing set of values for the associated attribute.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `param0` | `string` |  |
| `param1` | `Array/Object` |  |

**Returns:** `void`

---

#### `setDN`
Specifies the DN for this entry.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `param0` | `string` |  |

**Returns:** `void`

---

#### `getParsedDN`
Retrieves the parsed DN for this entry.

**Returns:** `LdapDN`

---

#### `getParentDNString`
Retrieves the parent DN for this entry as a string.

**Returns:** `string`

---

#### `hasAttributeValue`
Indicates whether this entry contains an attribute with the given name and value.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `param0` | `string` |  |
| `param1` | `string` |  |

**Returns:** `boolean`

---

#### `hasObjectClass`
Indicates whether this entry contains the specified object class.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `param0` | `string` |  |

**Returns:** `boolean`

---

#### `getAttributeValueAsBoolean`
Retrieves the value for the specified attribute, if available. If the attribute has more than one value, then the first value will be returned.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `param0` | `string` |  |

**Returns:** `boolean`

---

#### `getAttributeValueAsDate`
Retrieves the value for the specified attribute, if available. If the attribute has more than one value, then the first value will be returned.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `param0` | `string` |  |

**Returns:** `Object`

---

#### `getAttributeValueAsInteger`
Retrieves the value for the specified attribute, if available. If the attribute has more than one value, then the first value will be returned.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `param0` | `string` |  |

**Returns:** `number`

---

#### `getAttributeValueAsLong`
Retrieves the value for the specified attribute, if available. If the attribute has more than one value, then the first value will be returned.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `param0` | `string` |  |

**Returns:** `number`

---

#### `getAttributeValueByteArrays`
Retrieves the set of values for the specified attribute, if available

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `param0` | `string` |  |

**Returns:** `Array/Object`

---

#### `getObjectClassValues`
Retrieves the values of the "objectClass" attribute from the entry, if available.

**Returns:** `Array/string`

---

#### `toLDIF`
Retrieves an LDIF representation of this entry, with each attribute value on a separate line. Long lines will not be wrapped.

**Returns:** `Array/string`

---

#### `toLDIFString`
Retrieves an LDIF-formatted string representation of this entry. No wrapping will be performed, and no extra blank lines will be added.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `param0` | `number` |  |

**Returns:** `string`

---

## LdapFilter

**Description:** This class provides a data structure that represents an LDAP search filter. It provides methods for as parsing a filter from a string. See RFC 4515 for more information about representing search filters as strings.

### Methods

#### `create`
(Static) Creates a new search filter from the provided string representation.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `filterString` | `string` | The string representation of the filter to create. It must not be null. |

**Returns:** `LdapFilter`

---

#### `encodeValue`
(Static) Encodes the provided value into a form suitable for use as the assertion value in the string representation of a search filter. Parentheses, asterisks, backslashes, null characters, and any non-ASCII characters will be escaped using a backslash before the hexadecimal representation of each byte in the character to escape.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `value` | `string` | The value to be encoded. It must not be null. |

**Returns:** `string`

---

#### `encodeValueBytes`
(Static) Encodes the provided value into a form suitable for use as the assertion value in the string representation of a search filter. Parentheses, asterisks, backslashes, null characters, and any non-ASCII characters will be escaped using a backslash before the hexadecimal representation of each byte in the character to escape.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `value` | `byte[` | The value to be encoded. It must not be null. |

**Returns:** `String`

---

## LdapLoadBalancingMode

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `SingleServer` | Connect to a single server | `LdapLoadBalancingMode` | Yes |
| `RoundRobin` | Use a round-robin algorithm to select the server to which the connection should be established. Any number of servers may be included in this server set, and each request will attempt to retrieve a connection to the next server in the list. | `LdapLoadBalancingMode` | Yes |
| `Failover` | Establish connections to servers in the order they are provided. If the first server is unavailable, then it will attempt to connect to the second, then to the third. | `LdapLoadBalancingMode` | Yes |

### Methods

#### `getValue`
Returns load balancing mode as string.

**Returns:** `String`

---

#### `getValuesAsString`
(Static) Returns supported load balancing modes .

**Returns:** `String[`

---

#### `fromString`
(Static) Create LdapLoadBalancingMode object from it's string representation.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `value` | `string` | Load balancing mode string representation. |

**Returns:** `LdapLoadBalancingMode`

---

## LdapModification

### Methods

#### `LdapModification`
Creates a new LDAP modification with the provided information.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `modificationType` | `ModificationTypeWrapper` | The modification type for this modification. |
| `attributeName` | `String` | The name of the attribute to target with this modification. It must not be. |

**Returns:** `void`

---

#### `LdapModification`
Creates a new LDAP modification with the provided information.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `modificationType` | `ModificationTypeWrapper` | The modification type for this modification. |
| `attributeName` | `String` | The name of the attribute to target with this modification. It must not be. |
| `attributeValue` | `String` | The attribute value for this modification. It must not be |

**Returns:** `void`

---

#### `LdapModification`
Creates a new LDAP modification with the provided information.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `modificationType` | `ModificationTypeWrapper` | The modification type for this modification. |
| `attributeName` | `String` | The name of the attribute to target with this modification. It must not be. |
| `attributeValues` | `Array/String` | The attribute value for this modification. It must not be |

**Returns:** `void`

---

#### `getAttributeName`
Retrieves the name of the attribute to target with this modification.

**Returns:** `String`

---

#### `getValues`
the set of values for this modification as an array of strings.

**Returns:** `Array/String`

---

#### `getValueByteArrays`
Retrieves the set of values for this modification as an array of byte arrays

**Returns:** `any`

---

## LdapModificationType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `ADD` |  | `LdapModificationType` | Yes |
| `DELETE` |  | `LdapModificationType` | Yes |
| `REPLACE` |  | `LdapModificationType` | Yes |
| `INCREMENT` |  | `LdapModificationType` | Yes |

## LdapRDN

**Description:** This class provides a data structure for holding information about an LDAP relative distinguished name (RDN). An RDN consists of one or more attribute name-value pairs.

### Methods

#### `fromString`
(Static) Creates a new RDN from the provided string representation.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `rdnString` | `String` | Creates a new RDN from the provided string representation. |

**Returns:** `LdapRDN`

---

#### `fromNameValue`
(Static) Creates a new single-valued RDN with the provided information.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `attributeName` | `String` | The attribute name for this RDN. It must not be |
| `attributeValue` | `String` | The attribute value for this RDN. It must not be |

**Returns:** `LdapRDN`

---

#### `getAttributeNames`
Retrieves the set of attribute names for this RDN.

**Returns:** `Array/String`

---

#### `getAttributeValues`
Retrieves the set of attribute values for this RDN.

**Returns:** `Array/String`

---

#### `toString`
Retrieves a string representation of this RDN.

**Returns:** `String`

---

#### `toNormalizedString`
Retrieves a normalized string representation of this RDN.

**Returns:** `String`

---

#### `equals`
Indicates whether the provided object is equal to this RDN. The given object will only be considered equal to this RDN if it is also an RDN with the same set of names and values.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `rdn` | `LdapRDN` | RDN |

**Returns:** `boolean`

---

## LdapResult

**Description:** This class provides a data structure for holding the elements that are common to most types of LDAP responses.

### Methods

#### `getResultCode`
Retrieves the result code from the response.

**Returns:** `Object`

---

#### `getMatchedDN`
Retrieves the matched DN from the response, if available.

**Returns:** `string`

---

#### `getReferralURLs`
Retrieves the set of referral URLs from the response, if available.

**Returns:** `Array/string`

---

#### `getDiagnosticMessage`
Retrieves the diagnostic message from the response, if available.

**Returns:** `string`

---

#### `getResultString`
Retrieves a string representation of this LDAP result, consisting of the result code, diagnostic message (if present), matched DN (if present), and referral URLs (if present).

**Returns:** `string`

---

## LdapSearchRequest

**Description:** This class implements the processing necessary to perform an LDAPv3 search operation, which can be used to retrieve entries that match a given set of criteria.

### Methods

#### `duplicate`
Creates a new instance of this LDAP request that may be modified without impacting this request. The provided controls will be used for the new request instead of duplicating the controls from this request.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `controls` | `Array/Object` |  |

**Returns:** `LdapSearchRequest`

---

#### `setFilter`
Specifies the filter that should be used to identify matching entries.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `filter` | `string` |  |

**Returns:** `void`

---

#### `createRequest`
(Static) Factory method for creating new LdapSearchRequest instances from provided info.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `param0` | `string` |  |
| `param1` | `string` |  |
| `param2` | `LdapSearchScope` |  |
| `param3` | `Array/string` |  |
| `param4` | `LdapDereferencePolicy` |  |
| `param5` | `number` |  |
| `param6` | `number` |  |
| `param7` | `boolean` |  |

**Returns:** `LdapSearchRequest`

---

#### `setScope`
Specifies the scope for this search request.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `param0` | `LdapSearchScope` |  |

**Returns:** `void`

---

#### `typesOnly`
Indicates whether the server should return only attribute names in matching entries, rather than both names and values.

**Returns:** `boolean`

---

#### `getSizeLimit`
Retrieves the maximum number of entries that should be returned by the server when processing this search request.

**Returns:** `number`

---

#### `getBaseDN`
Retrieves the base DN for this search request

**Returns:** `string`

---

#### `getTimeLimitSeconds`
Retrieves the maximum length of time in seconds that the server should spend processing this search request.

**Returns:** `number`

---

#### `setBaseDN`
Specifies the base DN for this search request.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `baseDN` | `string` |  |

**Returns:** `void`

---

#### `setSizeLimit`
Specifies the maximum number of entries that should be returned by the server when processing this search request. A value of zero indicates that there should be no limit.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `sizeLimit` | `number` |  |

**Returns:** `void`

---

#### `setDerefPolicy`
Specifies the dereference policy that should be used by the server for any aliases encountered during search processing.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `param0` | `LdapDereferencePolicy` |  |

**Returns:** `void`

---

#### `setTypesOnly`
Specifies whether the server should return only attribute names in matching entries, rather than both names and values.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `typesOnly` | `boolean` |  |

**Returns:** `void`

---

#### `getAttributeList`
Retrieves the set of requested attributes to include in matching entries.

**Returns:** `Array/Object`

---

#### `setTimeLimitSeconds`
Specifies the maximum length of time in seconds that the server should spend processing this search request. A value of zero indicates that there should be no limit.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `timeLimit` | `number` |  |

**Returns:** `void`

---

#### `setAttributes`
Specifies the set of requested attributes to include in matching entries.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `attributes` | `Array/Object` |  |

**Returns:** `void`

---

#### `getScope`
Retrieves the scope for this search request.

**Returns:** `LdapSearchScope`

---

#### `getControl`
Retrieves the control with the specified OID from this request. If this request has multiple controls with the specified OID, then the first will be returned.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `oid` | `string` |  |

**Returns:** `void`

---

#### `getOperationType`
Retrieves the type of operation that is represented by this request.

**Returns:** `Object`

---

#### `getControls`
Retrieves the set of controls for this request. The caller must not alter this set of controls.

**Returns:** `Array/Object`

---

#### `hasControl`
Indicates whether this request contains at least one control.

**Returns:** `boolean`

---

#### `getResponseTimeoutMillis`
Retrieves the maximum length of time in milliseconds that processing on this operation should be allowed to block while waiting for a response from the server.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `client` | `LdapClient` |  |

**Returns:** `number`

---

#### `setResponseTimeoutMillis`
Specifies the maximum length of time in milliseconds that processing on this operation should be allowed to block while waiting for a response from the server. A value of zero indicates that no timeout should be enforced. A value that is less than zero indicates that the default response timeout for the underlying connection should be used.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `responseTimeout` | `number` |  |

**Returns:** `void`

---

#### `getLastMessageID`
Retrieves the message ID for the last LDAP message sent using this request.

**Returns:** `number`

---

#### `setFollowReferrals`
Specifies whether to automatically follow any referrals encountered while processing this request. This may be used to override the default behavior defined in the connection options for the connection used to process the request.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `followReferrals` | `boolean` |  |

**Returns:** `void`

---

#### `followReferrals`
Indicates whether to automatically follow any referrals encountered while processing this request. If a value has been set for this request, then it will be returned. Otherwise, the default from the connection options for the provided connection will be used.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `client` | `LdapClient` |  |

**Returns:** `boolean`

---

#### `replaceControl`
Replaces the control with the same OID as the provided control with the provided control. If no control with the same OID exists in the request, then the control will be added to the request. If the request has multiple controls with the same OID as the new control, then only the first will be replaced.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `control` | `Object` |  |

**Returns:** `Object`

---

#### `clearControls`
Removes all controls from this request.

**Returns:** `void`

---

#### `addControl`
Adds the provided control to the set of controls for this request.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `control` | `Object` |  |

**Returns:** `void`

---

#### `replaceControlByOid`
Replaces the control with the specified OID with the provided control. If no control with the given OID exists in the request, then a new control will be added. If this request has multiple controls with the specified OID, then only the first will be replaced.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `oid` | `string` |  |
| `control` | `Object` |  |

**Returns:** `void`

---

#### `hasControlByOid`
Indicates whether this request contains at least one control with the specified OID.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `oid` | `string` |  |

**Returns:** `boolean`

---

#### `removeControlByOid`
Removes the control with the specified OID from the set of controls for this request. If this request has multiple controls with the same OID, then only the first will be removed.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `oid` | `string` |  |

**Returns:** `Object`

---

## LdapSearchResult

**Description:** This class provides a data structure for holding information about the result of processing a search request.

### Methods

#### `getEntryCount`
Retrieves the number of matching entries returned for the search operation.

**Returns:** `number`

---

#### `getResultCode`
Retrieves the result code from the response.

**Returns:** `Object`

---

#### `getMatchedDN`
Retrieves the matched DN from the response, if available.

**Returns:** `string`

---

#### `getDiagnosticMessage`
Retrieves the diagnostic message from the response, if available.

**Returns:** `string`

---

#### `getSearchEntries`
Retrieves the search result entry with the specified DN from the set of entries returned. This will only be available if a SearchResultListener was not used during the search.

**Returns:** `Array/Object`

---

#### `getReferenceCount`
Retrieves the number of search references returned for the search operation. This may be zero even if search references were received if the connection used when processing the search was configured to automatically follow referrals.

**Returns:** `number`

---

#### `getSearchEntry`
Retrieves the search result entry with the specified DN from the set of entries returned. This will only be available if a SearchResultListener was not used during the search.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `dn` | `string` |  |

**Returns:** `LdapEntry`

---

#### `getSearchReferences`
Retrieves a list containing the search references returned from the search operation. May be empty even if search references were received if the connection used when processing the search was configured to automatically follow referrals.

**Returns:** `Array/Object`

---

## LdapSearchResultReference

**Description:** This class provides a data structure for representing an LDAP search result reference. A search result reference consists of a set of referral URLs and may also include zero or more controls. It describes an alternate location in which additional results for the search may be found. If there are multiple referral URLs, then they should all be considered equivalent ways to access the information (e.g., referrals referencing different servers that may be contacted).

### Methods

#### `getReferralURLs`
Retrieves the set of referral URLs for this search result reference.

**Returns:** `Array/string`

---

## LdapSearchScope

**Description:** Ldap search scope

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `BASE` | indicates that only the entry specified by the base DN should be considered. | `LdapSearchScope` | Yes |
| `ONE` | indicates that only entries that are immediate subordinates of the entry specified by the base DN (but not the base entry itself) should be considered | `LdapSearchScope` | Yes |
| `SUB` | which indicates that the base entry itself and any subordinate entries (to any depth) should be considered | `LdapSearchScope` | Yes |
| `SUBORDINATE_SUBTREE` | indicates that any subordinate entries (to any depth) below the entry specified by the base DN should be considered, but the base entry itself should not be considered | `LdapSearchScope` | Yes |

## LdapSimplePagedResultsControl

**Description:** This class provides an implementation of the simple paged results control as defined in RFC 2696. It allows the client to iterate through a potentially large set of search results in subsets of a specified number of entries (i.e., "pages")."

### Methods

#### `LdapSimplePagedResultsControl`
Creates a new paged results control with the specified page size and the provided cookie. This version of the constructor should be used to continue iterating through an existing set of results, but potentially using a different page size.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `pageSize` | `number` | The maximum number of entries that the server should return in the first page. |
| `cookie` | `byte[` | The cookie provided by the server after returning the previous page of results, or null if this request will retrieve the first page of results. |
| `isCritical` | `boolean` | Indicates whether this control should be marked critical. |

**Returns:** `void`

---

#### `get`
(Static) Extracts a simple paged results response control from the provided result.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `param0` | `LdapSearchResult` |  |

**Returns:** `LdapSimplePagedResultsControl`

---

#### `getSize`
Retrieves the size for this paged results control. For a request control, it may be used to specify the number of entries that should be included in the next page of results. For a response control, it may be used to specify the estimated number of entries in the complete result set.

**Returns:** `number`

---

#### `moreResultsToReturn`
Indicates whether there are more results to return as part of this search

**Returns:** `boolean`

---

#### `getCookieBytes`
Retrieves the cookie for this control, which may be used in a subsequent request to resume reading entries from the next page of results. The value should have a length of zero when used to retrieve the first page of results for a given search, and also in the response from the server when there are no more entries to send. It should be non-empty for all other conditions.

**Returns:** `Array/Object`

---

#### `getCookie`
Retrieves the cookie for this control, which may be used in a subsequent request to resume reading entries from the next page of results. The value should have a length of zero when used to retrieve the first page of results for a given search, and also in the response from the server when there are no more entries to send. It should be non-empty for all other conditions.

**Returns:** `Object`

---

#### `getOID`
@ScriptingFunction("Retrieves the user-friendly name for this control, if available. If no user-friendly name has been defined, then the OID will be returned.")

**Returns:** `string`

---

#### `isCritical`
Indicates whether this control should be considered critical.

**Returns:** `boolean`

---

#### `getControlName`
Retrieves the user-friendly name for this control, if available. If no user-friendly name has been defined, then the OID will be returned.

**Returns:** `string`

---

## LdapSubtreeDeleteRequestControl

**Description:** TThis class provides an implementation of the subtree delete request control as defined in draft-armijo-ldap-treedelete. This can be used to delete an entry and all subordinate entries in a single operation."

### Methods

#### `getOID`
@ScriptingFunction("Retrieves the user-friendly name for this control, if available. If no user-friendly name has been defined, then the OID will be returned.")

**Returns:** `string`

---

#### `isCritical`
Indicates whether this control should be considered critical.

**Returns:** `boolean`

---

#### `getControlName`
Retrieves the user-friendly name for this control, if available. If no user-friendly name has been defined, then the OID will be returned.

**Returns:** `string`

---

