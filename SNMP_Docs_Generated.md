# API Reference

Generated Documentation

## SnmpService

**Description:** SNMP Service

### Methods

#### `removeQuery`
**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `query` | `SNMPSnmpQuery` |  |

**Returns:** `SNMPSnmpDevice`

---

#### `removeSnmpDevice`
**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `device` | `SNMPSnmpDevice` |  |

**Returns:** `SNMPSnmpDevice`

---

#### `createSnmpDeviceV3`
**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `address` | `String` |  |
| `name` | `String` |  |
| `port` | `int` |  |
| `user` | `String` |  |
| `password` | `String` |  |

**Returns:** `SNMPSnmpDevice`

---

#### `createSnmpDeviceV1V2c`
**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `address` | `String` |  |
| `name` | `String` |  |
| `port` | `int` |  |
| `community` | `String` |  |
| `version` | `String` |  |

**Returns:** `SNMPSnmpDevice`

---

#### `addQuery`
**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `device` | `SNMPSnmpDevice` |  |
| `query` | `SNMPSnmpQuery` |  |

**Returns:** `SNMPSnmpQuery`

---

#### `updateQuery`
**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `query` | `SNMPSnmpQuery` |  |
| `type` | `String` |  |
| `oid` | `String` |  |
| `name` | `String` |  |

**Returns:** `SNMPSnmpQuery`

---

#### `retrieveTriggerData`
**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `trigger` | `Trigger` |  |

**Returns:** `SNMPSnmpResult`

---

#### `retrievePolicyData`
**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |

**Returns:** `SNMPSnmpResult`

---

#### `sendTrap`
**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `targetAddress` | `String` |  |
| `port` | `int` |  |
| `enterprise` | `String` |  |
| `type` | `String` |  |
| `oid` | `String` |  |
| `value` | `String` |  |
| `agentAddress` | `String` |  |

**Returns:** `void`

---

#### `editSnmpDevice`
**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `device` | `SNMPSnmpDevice` |  |
| `address` | `String` |  |
| `name` | `String` |  |
| `port` | `int` |  |
| `community` | `String` |  |
| `user` | `String` |  |
| `password` | `String` |  |
| `version` | `String` |  |

**Returns:** `SNMPSnmpDevice`

---

#### `snmpGet`
**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `device` | `SNMPSnmpDevice` |  |
| `oid` | `String` |  |

**Returns:** `SNMPSnmpResult`

---

#### `snmpGetNext`
**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `device` | `SNMPSnmpDevice` |  |
| `oid` | `String` |  |

**Returns:** `SNMPSnmpResult`

---

#### `snmpGetBulk`
**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `device` | `SNMPSnmpDevice` |  |
| `oid` | `String` |  |
| `number` | `int` |  |

**Returns:** `SNMPSnmpResult`

---

#### `runQuery`
**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `query` | `SNMPSnmpQuery` |  |

**Returns:** `SNMPSnmpResult`

---

#### `createTriggerForAllDevices`
**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `oid` | `String` |  |

**Returns:** `Trigger`

---

#### `createTrigger`
**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `device` | `SNMPSnmpDevice` |  |
| `oid` | `String` |  |

**Returns:** `Trigger`

---

## SNMPSnmpDevice

**Description:** SNMP Device

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` |  | `String` | No |
| `address` |  | `String` | No |
| `port` |  | `int` | No |
| `version` |  | `String` | No |
| `display name` |  | `String` | Yes |
| `credentials` |  | `String` | No |
| `queries` |  | `Array/SNMPSnmpQuery` | No |

### Methods

#### `OnTrap`
---

#### `get`
**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `oid` | `String` |  |

**Returns:** `SNMPSnmpResult`

---

#### `getNext`
**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `oid` | `String` |  |

**Returns:** `SNMPSnmpResult`

---

#### `getBulk`
**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `oid` | `String` |  |
| `number` | `int` |  |

**Returns:** `SNMPSnmpResult`

---

#### `validateAndSetName`
**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `String` |  |

**Returns:** `void`

---

#### `validateAndSetAddress`
**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `address` | `String` |  |

**Returns:** `void`

---

#### `validateAnsSetPort`
**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `port` | `int` |  |

**Returns:** `void`

---

## SNMPSnmpQuery

**Description:** SNMP Query

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `oid` |  | `String` | No |
| `name` |  | `String` | No |
| `type` |  | `String` | No |
| `displayName` |  | `String` | Yes |

### Methods

#### `validateAndSetType`
**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `type` | `String` |  |

**Returns:** `void`

---

#### `validateAndSetOid`
**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `oid` | `String` |  |

**Returns:** `void`

---

#### `validateAndSetName`
**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `String` |  |

**Returns:** `void`

---

## SNMPSnmpResult

**Description:** SNMP Query Result

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `type` |  | `String` | No |
| `oid` |  | `String` | No |
| `enterprise` |  | `String` | No |
| `stringValue` |  | `String` | No |
| `numberValue` |  | `java.lang.Number` | No |
| `arrayValue` |  | `Array/Lcom.vmware.o11n.plugin.snmp.model.SnmpResult;` | No |
| `snmpType` |  | `String` | No |

## SNMPTrapHost

**Description:** SNMP Trap Host

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `port` |  | `int` | Yes |
| `display name` |  | `String` | Yes |

### Methods

#### `OnTrapAll`
---

#### `start`
**Returns:** `void`

---

#### `stop`
**Returns:** `void`

---

#### `changePort`
**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `port` | `int` |  |

**Returns:** `void`

---

