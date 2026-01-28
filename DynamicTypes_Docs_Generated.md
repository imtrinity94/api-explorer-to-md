# API Reference

Generated Documentation

## DynamicTypesDynamicNamespaceDefinition

**Description:** Provides operations for DynamicNamespaceDefinition objects.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Dynamic Type's name | `String` | No |
| `id` | Dynamic Type's ID | `String` | Yes |
| `type` | Dynamic Type's type | `String` | Yes |

## DynamicTypesDynamicObject

**Description:** Provides operations for DynamicObject objects.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Dynamic Object's name | `String` | Yes |
| `type` | Dynamic Object's type | `String` | Yes |
| `namespace` | Dynamic Object's namespace | `String` | Yes |
| `id` | Dynamic Object's ID | `String` | Yes |
| `properties` | Dynamic Object's custom properties | `java.util.HashMap` | Yes |
| `cachedProperties` | Dynamic Object's custom properties in cache | `java.util.HashMap` | Yes |

### Methods

#### `getProperty`
Get the value of a given property. Throws an exception if no property with such name exist.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `property` | `String` |  |

**Returns:** `Any`

---

#### `setProperty`
Set the value of a given property. Will create a new property if no property with such name exist.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `property` | `String` |  |
| `value` | `Any` |  |

**Returns:** `void`

---

#### `getPropertyInCache`
Get the value of a given property from the cache. Throws an exception if no property with such name exists.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `property` | `String` |  |

**Returns:** `Any`

---

#### `setPropertyInCache`
Set the value of a given property in the cache with expire time limit. Will create a new property if no property with such name exists.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `property` | `String` |  |
| `value` | `Any` |  |
| `seconds` | `Long` |  |

**Returns:** `void`

---

#### `getOrderedPropertyNames`
Get the insertion-ordered list of property names.

**Returns:** `Array/String`

---

#### `getOrderedPropertyNamesInCache`
Get the inserted-ordered list of property names in cache.

**Returns:** `Array/String`

---

## DynamicTypesDynamicObjectProxy

**Description:** Provides operations for DynamicObjectProxy objects.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Dynamic Object's name | `String` | Yes |
| `type` | Dynamic Object's type | `String` | Yes |
| `namespace` | Dynamic Object's namespace | `String` | Yes |
| `id` | Dynamic Object's ID | `String` | Yes |
| `properties` | Dynamic Object's custom properties | `java.util.Map` | Yes |

### Methods

#### `getProperty`
Get the value of a given property. Throws an exception if no property with such name exist.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `property` | `String` |  |

**Returns:** `Any`

---

#### `setProperty`
Set the value of a given property. Will create a new property if no property with such name exist.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `property` | `String` |  |
| `value` | `Any` |  |

**Returns:** `void`

---

#### `exists`
Check if the proxied object can be resolved.

**Returns:** `boolean`

---

#### `getOrderedPropertyNames`
Get the insertion-ordered list of property names.

**Returns:** `Array/String`

---

## DynamicTypesDynamicTypeDefinition

**Description:** Provides operations for DynamicTypeDefinition objects.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Dynamic Type's name | `String` | No |
| `properties` | Dynamic Type's properties | `Array/String` | No |
| `id` | Dynamic Type's ID | `String` | Yes |
| `type` | Dynamic Type's type | `String` | Yes |
| `namespace` | Dynamic Type's namespace | `String` | No |
| `findAllBinding` |  | `String` | Yes |
| `findByIdBinding` |  | `String` | Yes |
| `findRelationBinding` |  | `String` | Yes |
| `hasChildrenInRelationBinding` |  | `String` | Yes |
| `iconResource` | Dynamic Type's icon | `String` | No |

## DynamicTypesManager

**Description:** Provides operations for all dynamic objects.

### Methods

#### `getFromCache`
Get object from cache. This method should not be used in finders, because the cache is limited to the current session and is not shared among nodes

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |

**Returns:** `Any`

---

#### `getType`
Get dynamic type given its namesapce and name.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `namespace` | `String` |  |
| `type` | `String` |  |

**Returns:** `DynamicTypesDynamicTypeDefinition`

---

#### `getObject`
Get a reference to an instance of a given dynamic type.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `namespace` | `String` |  |
| `type` | `String` |  |
| `id` | `String` |  |

**Returns:** `DynamicTypesDynamicObjectProxy`

---

#### `removeAll`
Remove all dynamic namespaces/types/relations.

**Returns:** `void`

---

#### `putInCache`
Put object in cache. This cache is limited to the current session and is not shared among nodes

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `value` | `Any` |  |

**Returns:** `void`

---

#### `getNamespace`
Get a dynamic namespace with a given name.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `namespace` | `String` |  |

**Returns:** `DynamicTypesDynamicNamespaceDefinition`

---

#### `invalidate`
Notify the system that an object has changed.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `namespace` | `String` |  |
| `type` | `String` |  |
| `id` | `String` |  |

**Returns:** `void`

---

#### `makeObject`
Create new instance of a given dynamic type.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `namespace` | `String` |  |
| `type` | `String` |  |
| `id` | `String` |  |
| `name` | `String` |  |
| `props` | `Array/String` |  |

**Returns:** `DynamicTypesDynamicObject`

---

#### `updateNamespace`
**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `String` |  |
| `newName` | `String` |  |

**Returns:** `DynamicTypesDynamicNamespaceDefinition`

---

#### `getAllTypes`
Get all defined dynamic types.

**Returns:** `Array/DynamicTypesDynamicTypeDefinition`

---

#### `removeType`
Remove dynamic type definition.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `namespace` | `String` |  |
| `type` | `String` |  |

**Returns:** `void`

---

#### `removeNamespace`
Remove a dynamic namespace. All dynamic types that belong to this namespace are also removed.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `namespace` | `String` |  |

**Returns:** `void`

---

#### `updateType`
**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `namespace` | `String` |  |
| `type` | `String` |  |
| `newNamespace` | `String` |  |
| `newType` | `String` |  |
| `newIcon` | `String` |  |
| `newProperties` | `Array/String` |  |

**Returns:** `DynamicTypesDynamicTypeDefinition`

---

#### `exportConfigurationAsPackage`
Export configuration to package.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `namespacesToExport` | `java.util.List` |  |

**Returns:** `ch.dunes.model.pkg.Package`

---

#### `importConfigurationFromPackage`
Import configuration from package.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `namespacesToImport` | `java.util.List` |  |
| `packageContent` | `ch.dunes.model.fileattachment.MimeAttachment` |  |

**Returns:** `boolean`

---

#### `defineNamespace`
Define a new dynamic namespace.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `namespace` | `String` |  |

**Returns:** `DynamicTypesDynamicNamespaceDefinition`

---

#### `bindTypeFinderMethods`
Assign workflow/action bindings for a type.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `namespace` | `String` |  |
| `type` | `String` |  |
| `findByIdBinding` | `String` |  |
| `findAllBinding` | `String` |  |
| `hasChildrenInRelationBinding` | `String` |  |
| `findRelationBinding` | `String` |  |

**Returns:** `void`

---

#### `defineRelation`
**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `parentType` | `String` |  |
| `childType` | `String` |  |
| `relationName` | `String` |  |

**Returns:** `void`

---

#### `getAllNamespaces`
Get all defined dynamic namespaces.

**Returns:** `Array/DynamicTypesDynamicNamespaceDefinition`

---

#### `generateTypeFinderMethods`
Generate workflow bindings for a type and return their IDs.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `namespace` | `String` |  |
| `type` | `String` |  |
| `category` | `ch.dunes.model.workflow.WorkflowCategory` |  |

**Returns:** `Array/String`

---

#### `getAllNamespacesByPackage`
Get all defined dynamic namespaces in the configuration package.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `packageContent` | `ch.dunes.model.fileattachment.MimeAttachment` |  |

**Returns:** `Array/String`

---

#### `defineType`
Define a new dynamic type within a given namespace.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `namespace` | `String` |  |
| `type` | `String` |  |
| `icon` | `String` |  |
| `properties` | `Array/String` |  |
| `actions` | `Array/ch.dunes.model.dunes.ScriptModule` |  |

**Returns:** `DynamicTypesDynamicTypeDefinition`

---

#### `setTypeCustomProperty`
Add custom property to dynamic type.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `namespace` | `String` |  |
| `type` | `String` |  |
| `key` | `String` |  |
| `value` | `Any` |  |

**Returns:** `void`

---

#### `getTypeCustomProperty`
Get custom property by key.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `namespace` | `String` |  |
| `type` | `String` |  |
| `key` | `String` |  |

**Returns:** `Any`

---

#### `removeTypeCustomProperty`
Remove dynamic type's custom property by key

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `namespace` | `String` |  |
| `type` | `String` |  |
| `key` | `String` |  |

**Returns:** `void`

---

#### `removeRelation`
**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `parentType` | `String` |  |
| `childType` | `String` |  |

**Returns:** `void`

---

#### `getAllRelations`
**Returns:** `Array/DynamicTypesRelationDefinition`

---

#### `validateConfigurationPackage`
Validate configuration package.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `packageContent` | `ch.dunes.model.fileattachment.MimeAttachment` |  |

**Returns:** `boolean`

---

#### `importTypesFromXSD`
Generate dynamic type definitions for complex types defined in a XSD schema.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `xsdUri` | `String` |  |
| `namespace` | `String` |  |
| `category` | `ch.dunes.model.workflow.WorkflowCategory` |  |

**Returns:** `void`

---

#### `removeFromCache`
Remove object from cache.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |

**Returns:** `Any`

---

#### `getCacheKeys`
Get a list of all keys in cache.

**Returns:** `Array/String`

---

## DynamicTypesRelationDefinition

**Description:** Provides operations for RelationDefinition objects.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | Relation's name | `String` | Yes |
| `id` | Relation's ID | `String` | Yes |
| `childType` | Relation's child type | `String` | Yes |
| `parentType` | Relation's parent type | `String` | Yes |

## DynamicTypesTypeHierarchyRootFolder

