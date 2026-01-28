# API Reference

Generated Documentation

## PluginsUtil

**Description:** Utility methods for plugin configurations troubleshooting.

### Methods

#### `dumpAllPluginsConfigurations`
Dump configuration for all installed plugins which store their bits in IEndpointService

**Returns:** `boolean`

---

#### `exception`
This method will throw NPE. Useful for debugging purposes.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `msg` | `String` |  |

**Returns:** `void`

---

#### `createTrigger`
This method will create plugin trigger. Useful for debugging purposes.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `timeout` | `Number` |  |
| `id` | `String` |  |

**Returns:** `Trigger`

---

#### `pushTrigger`
This method will push plugin trigger notification. Useful for debugging purposes.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `id` | `String` |  |

**Returns:** `void`

---

#### `getPrincipal`
Get current user token from ICredential service and return its principal field

**Returns:** `String`

---

