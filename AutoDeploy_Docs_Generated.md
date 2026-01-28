# API Reference

Generated Documentation

## ADAnswerFile

**Description:** Represents an answer file associated with a specific ESXi host.

### Methods

#### `getContentAsXml`
Gets the content of an answer file as XML.

**Returns:** `String`

---

#### `addUserInputParameter`
Adds a user input parameter to the answer file.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `inputParameter` | `UserInputParameter` | User input parameter |

**Returns:** `Object`

---

#### `getUserInputParameters`
Gets a list with all user input parameters of the answer file.

**Returns:** `Array/UserInputParameter`

---

#### `getId`
Returns the ID of the answer file.

**Returns:** `String`

---

#### `getMultiAdId`
Returns the multi ID of the answer file.

**Returns:** `String`

---

## ADHostProfile

**Description:** Wrapper of the VC host profile

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Name of the host profile | `String` | No |

### Methods

#### `getName`
Returns the name of the host profile.

**Returns:** `String`

---

## AutoDeploy

**Description:** Auto Deploy host

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Name of the Auto Deploy host | `String` | No |
| `adUri` | URI of the Auto Deploy host | `String` | No |

### Methods

#### `getVcUri`
Returns a URI of the associated vCenter Server host.

**Returns:** `String`

---

#### `getHostProfile`
Returns a host profile with a specific name.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `hostProfileName` | `String` | Name of the host profile |

**Returns:** `ADHostProfile`

---

#### `createDeployRule`
Creates a deploy rule on a specific Auto Deploy host.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `ruleName` | `String` | Name of the rule |
| `imageProfile` | `SoftwareImageProfile` | Image profile to use |
| `hostProfile` | `ADHostProfile` | Host profile to use |
| `location` | `AutoDeployItem` | VC inventory location where the ESXi host will be registered. |
| `pattern` | `String` | Rule pattern to use |

**Returns:** `DeployRule`

---

#### `editDeployRule`
Updates an editable deploy rule on a specific Auto Deploy host.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `rule` | `DeployRule` | Deploy rule to update. |
| `ruleName` | `String` | New name of the rule |
| `changedPxeProfile` | `boolean` | Shows if the Pxe profile will be changed. |
| `imageProfile` | `SoftwareImageProfile` | Image profile used to update the rule. |
| `changedHostProfile` | `boolean` | Shows if the host profile will be changed. |
| `hostProfile` | `ADHostProfile` | Host profile used to update the rule. |
| `changedLocation` | `boolean` | Shows if the location will be changed. |
| `location` | `AutoDeployItem` | VC inventory location where the ESXi host will be registered. |
| `pattern` | `String` | Rule pattern to use. |

**Returns:** `DeployRule`

---

#### `copyDeployRule`
Updates a non editable deploy rule by making a copy of it.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `rule` | `DeployRule` | Deploy rule to update. |
| `ruleName` | `String` | New name of the rule |
| `changedPxeProfile` | `boolean` | Shows if the Pxe profile will be changed. |
| `imageProfile` | `SoftwareImageProfile` | Image profile used to update the rule. |
| `changedHostProfile` | `boolean` | Shows if the host profile will be changed. |
| `hostProfile` | `ADHostProfile` | Host profile used to update the rule. |
| `changedLocation` | `boolean` | Shows if the location will be changed. |
| `location` | `AutoDeployItem` | VC inventory location where the ESXi host will be registered. |
| `pattern` | `String` | Rule pattern to use. |
| `updateSets` | `boolean` | Shows if the rule sets will be updated. |
| `activate` | `boolean` | Shows if the new rule will be activated. |

**Returns:** `DeployRule`

---

#### `activateWorkingSet`
Activates all rules from the working rule set.

**Returns:** `Object`

---

#### `activateDeployRule`
Activates a deploy rule with all rules from the working rule set.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `deployRule` | `DeployRule` | Delpoy rule to activate. |
| `position` | `number` | Position in the rule set where the rule will be inserted. |

**Returns:** `Object`

---

#### `addToWorkingSet`
Adds a specific deploy rule to the working rule set.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `deployRule` | `DeployRule` | Delpoy rule to add. |
| `position` | `number` | Position in the rule set where the rule will be inserted. |

**Returns:** `Object`

---

#### `deleteDeployRule`
Deletes a deploy rule from the Auto Deploy host.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `deployRule` | `DeployRule` | Delpoy rule to delete. |

**Returns:** `String`

---

#### `removeFromRuleSet`
Removes a rule from a rule set without deleting the rule.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `deployRule` | `DeployRule` | Delpoy rule to remove. |
| `activate` | `Boolean` | Shows whether to remove the rule from the active set. |

**Returns:** `Object`

---

#### `getDeployRules`
Returns deploy rules from the Rule Engine.

**Returns:** `Array/DeployRule`

---

#### `getHiddenRules`
Returns all hidden rules from the rule engine.

**Returns:** `Array/DeployRule`

---

#### `getDeployRule`
Retrieves a deploy rule by name from a specific Auto Deploy host.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `ruleName` | `String` | Name of the deploy rule |

**Returns:** `DeployRule`

---

#### `getWorkingDeployRules`
Returns the deploy rules from the working rule set.

**Returns:** `Array/DeployRule`

---

#### `getActiveDeployRules`
Returns deploy rules from the active rule set.

**Returns:** `Array/DeployRule`

---

#### `getActiveRuleSetSize`
Returns a number of deploy rules from the active rule set.

**Returns:** `number`

---

#### `getWorkingRuleSetSize`
Returns a number of deploy rules in a working rule set.

**Returns:** `number`

---

#### `isActiveRule`
Shows if the deploy rule is active.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `deployRule` | `DeployRule` | Deploy rule to check. |

**Returns:** `Boolean`

---

#### `isWorkingRule`
Shows if the deploy rule is added to the working rule set.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `deployRule` | `DeployRule` | Deploy rule to check. |

**Returns:** `Boolean`

---

#### `getAnswerFileStatus`
Gets the status of an answer file for a specific ESXi host.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `esxHost` | `AutoDeployItem` | Representation of an ESXi host |

**Returns:** `String`

---

#### `clearAnswerFile`
Clears the answer file of a specific ESXi host.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `targetHost` | `AutoDeployItem` | Representation of an ESXi host |

**Returns:** `Object`

---

#### `updateAnswerFile`
Updates an answer file for a specific ESXi host.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `targetHost` | `AutoDeployItem` | Representation of an ESXi host |
| `xmlAnswerFile` | `String` | Representation of an ESXi host |

**Returns:** `ADAnswerFile`

---

#### `getXmlAnswerFile`
Gets an answer file as XML.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `esxHost` | `AutoDeployItem` | Representation of an ESXi host |

**Returns:** `String`

---

#### `updateAnswerFileFromFile`
Updates an answer file for a specific ESXi host.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `targetHost` | `AutoDeployItem` | Representation of an ESXi host |
| `fileAttachment` | `MimeAttachment` | Representation of an ESXi host |

**Returns:** `ADAnswerFile`

---

#### `retrieveAnswerFile`
Retrieves the answer file associated with a specific ESXi host.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `targetHost` | `AutoDeployItem` | Representation of an ESXi host |

**Returns:** `ADAnswerFile`

---

#### `retrieveHostAttributes`
Retrieves the attributes of a specific ESXi host.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `esxHost` | `AutoDeployItem` | Representation of an ESXi host |

**Returns:** `Properties`

---

#### `getHostMatchingRules`
Retrieves all rules that apply to an ESXi host for a specific rule set.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `esxHost` | `AutoDeployItem` | Representation of an ESXi host |
| `ruleSetType` | `String` | Type of rule set |

**Returns:** `Array/DelpoyRule`

---

#### `testRuleSetCompliance`
Checks whether the items associated with a specified ESXi host are in compliance with a specified rule set.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `esxHost` | `AutoDeployItem` | Representation of an ESXi host |
| `ruleSetType` | `String` | Type of rule set |

**Returns:** `Array/CheckItemResult`

---

#### `repairRuleSetCompliance`
Repairs rule set compliance for a specified ESXi host.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `esxHost` | `AutoDeployItem` | Representation of an ESXi host |

**Returns:** `Object`

---

#### `changeImageProfile`
Changes the image profile of a deploy rule.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `deployRule` | `DeployRule` | Deploy rule to edit. |
| `imageProfile` | `SoftwareImageProfile` | The new image profile to use. |

**Returns:** `Object`

---

#### `changeHostProfile`
Changes the host profile of a deploy rule.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `deployRule` | `DeployRule` | Deploy rule to edit. |
| `hostProfile` | `ADHostProfile` | The new host profile to use. |

**Returns:** `Object`

---

#### `changeRuleLocation`
Changes the ESXi location of a deploy rule.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `deployRule` | `DeployRule` | Deploy rule to edit. |
| `locationItem` | `AutoDeployItem` | The new location of the ESXi host |

**Returns:** `Object`

---

#### `getDeployOptions`
Get Auto Deploy global configuration options.

**Returns:** `Properties`

---

#### `setDeployOption`
Set value for an Auto Deploy global configuration option.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` | Auto Deploy configuration key |
| `value` | `String` | Auto Deploy configuration value |

**Returns:** `Object`

---

#### `applyImageProfile`
Associates the specified image profile with the specified ESXi hosts.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `esxHosts` | `Array/AutoDeployItem` | Representation of an ESXi hosts |
| `imageProfile` | `SoftwareImageProfile` | The new image profile to use. |

**Returns:** `Object`

---

## AutoDeployItem

**Description:** Holder of the Auto Deploy object item

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `type` | Type of the Auto Deploy object item | `String` | No |
| `value` | Value of the Auto Deploy object item | `String` | No |

### Methods

#### `getItemRepresentation`
Returns the item representation.

**Returns:** `String`

---

## autoDeployManager

**Description:** Provides CRUD operations for the Auto Deploy objects.

### Methods

#### `getAutoDeploys`
Returns a list of Auto Deploy hosts from the plug-in's repository.

**Returns:** `Array/AutoDeploy`

---

#### `getAutoDeploy`
Returns the Auto Deploy host from the plug-in's repository with a specified name.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `String` | Name of the Auto Deploy host to retrieve. |

**Returns:** `AutoDeploy`

---

#### `reloadConfiguration`
Reloads the plug-in configuration.

**Returns:** `Object`

---

#### `addSoftwareDepot`
Adds a new public depot.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `depotName` | `String` | Depot's Name |
| `depotURL` | `String` | Depot's URL |

**Returns:** `SoftwareDepot`

---

#### `removeSoftwareDepot`
Removes a public depot.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `depot` | `SoftwareDepot` | Public depot to remove. |

**Returns:** `String`

---

#### `updateSoftwareDepot`
Updates a public depot.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `depot` | `SoftwareDepot` | Public depot to update. |
| `depotName` | `String` | Depot's new name |
| `depotURL` | `String` | Depot's new URL |

**Returns:** `SoftwareDepot`

---

#### `isAnswerFileContentValid`
Checks if the XML content of an answer file is valid.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `xmlAnswerFileContent` | `String` | Answer file content as XML |

**Returns:** `Boolean`

---

#### `isAnswerFileValid`
Checks if the answer file is valid.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `xmlAnswerFile` | `MimeAttachment` | Answer file as XML |

**Returns:** `Boolean`

---

#### `getAnswerFileTemplate`
Returns an XML template of the answer file.

**Returns:** `String`

---

#### `addAutoDeployHost`
Adds a new Auto Deploy host.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `vcURI` | `String` | URI of the vCenter Server |

**Returns:** `AutoDeploy`

---

#### `removeAutoDeployHost`
Removes an Auto Deploy host.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `adHost` | `AutoDeploy` | Auto Deploy host to remove. |

**Returns:** `Object`

---

#### `findAutoDeployHostUri`
Returns an Auto Deploy host URI.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `vcHostUri` | `String` | vCenter Server host URI |

**Returns:** `String`

---

## CheckItemResult

**Description:** Pair of current and expected rule item

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `currentItem` | Current rule item | `AutoDeployItem` | No |
| `expectedItem` | Expected rule item | `AutoDeployItem` | No |

## DeployRule

**Description:** Deploy rule as defined within the rule engine.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `id` | ID of the rule | `String` | No |
| `type` | Type of the rule | `String` | No |
| `name` | Name of the rule | `String` | No |
| `pattern` | Pattern of the rule | `String` | No |
| `pxeProfileName` | PXE profile name of the rule | `String` | No |
| `pxeProfilePackages` | PXE profile packages of the rule | `Array/String` | No |
| `hostProfile` | Host profile of the rule | `String` | No |
| `location` | Inventory location of the rule | `String` | No |
| `editable` | Shows if the rule is editable. | `Boolean` | No |

### Methods

#### `getHostUri`
Returns the URI of the parent host.

**Returns:** `String`

---

## SoftwareChannel

**Description:** Software channel as defined in the depot.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Name of the software channel | `String` | No |
| `imageProfiles` | Image profiles of the software channel | `Array/SoftwareImageProfile` | No |

### Methods

#### `getImageProfile`
Returns an image profile with a specific name.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `profileId` | `String` | ID of the image profile to retrieve. |

**Returns:** `SoftwareImageProfile`

---

## SoftwareDepot

**Description:** A public depot containing all the software packages.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `depotName` | Name of the software depot | `String` | No |
| `depotURL` | URI of the software depot | `String` | No |
| `vendors` | Software vendors defined by the software depot. | `Array/SoftwareVendor` | No |

### Methods

#### `getVendor`
Returns a software vendor with a specific name.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `depotName` | `String` | Name of the software depot retrieve |

**Returns:** `SoftwareVendor`

---

## SoftwareImageProfile

**Description:** Software image profile defined in the depot.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Name of the image profile | `String` | No |
| `profileId` | ID of the image profile | `String` | No |
| `serialNo` | Serial number of the image profile | `String` | No |
| `description` | Description of the image profile | `String` | No |
| `vibs` | List of VIBs of the image profile | `Array/Vib` | No |

## SoftwareVendor

**Description:** Software vendor as defined within the depot.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Name of the software vendor | `String` | Yes |
| `code` | Code of the software vendor | `String` | Yes |
| `channels` | Software channels defined by the software vendor. | `Array/SoftwareChannel` | No |

### Methods

#### `getChannel`
Returns a software channel with a specific name.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `channelName` | `String` | Name of the software channel to retrieve. |

**Returns:** `SoftwareChannel`

---

## UserInputParameter

**Description:** Represents a user input parameter that is part of the answer file.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `profilePath` | Profile path of the user input parameter | `String` | No |
| `policyId` | Policy ID of the user input parameter | `String` | No |
| `parameterId` | Parameter ID of the user input parameter | `String` | No |

### Methods

#### `UserInputParameter`
**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `profilePath` | `String` | Profile path of the user input parameter |
| `policyId` | `String` | Policy ID of the user input parameter |
| `parameterId` | `String` | Parameter ID of the user input parameter |

**Returns:** `void`

---

#### `addKeyValueParameter`
Adds a key value pair to the user input parameter.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` | The key of the key-value pair |
| `value` | `Object` | The value of the key-value pair |

**Returns:** `Object`

---

#### `getParameterKeys`
Returns all the keys of the user input parameter.

**Returns:** `Array/String`

---

#### `getKeyValue`
Returns the value for a specific key of the user input parameter.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` | The key of the key-value pair |

**Returns:** `Object`

---

#### `getKey`
Returns the parameter key at a specified index.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `index` | `number` | The key of the key-value pair |

**Returns:** `String`

---

#### `getValue`
Returns the parameter object at a specified index.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `index` | `number` | The value of the key-value pair |

**Returns:** `Object`

---

## Vib

**Description:** Virtual infrastructure bundle defined in the depot.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Name of the VIB | `String` | No |
| `type` | Type of the VIB | `String` | No |
| `version` | Version of the VIB | `String` | No |
| `vendor` | Vendor of the VIB | `String` | No |
| `summary` | Summary of the VIB | `String` | No |
| `description` | Description of the VIB | `String` | No |
| `releaseDdate` | Released date of the VIB | `String` | No |
| `relativePath` | Relative path of the VIB | `String` | No |
| `baseUrl` | Base URL of the VIB | `String` | No |

