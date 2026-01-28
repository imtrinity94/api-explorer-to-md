# API Reference

Generated Documentation

## Config

**Description:** Insert your description for PluginInventory here

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `id` | Unique identifier of this PluginInventory | `String` | Yes |
| `displayName` | Display name of this PluginInventory | `String` | Yes |

### Methods

#### `getKeystores`
Gets the list of Keystores.

**Returns:** `_ConfiguratorKeystores`

---

## ConfigConnectionValidator

**Description:** Generic Connection Validator

### Methods

#### `validateConnectionUrl`
Validate connection

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `url` | `java.net.URL` |  |

**Returns:** `String`

---

#### `validateConnectionWithProxy`
Validate connection

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `url` | `java.net.URL` |  |
| `proxy` | `java.net.Proxy` |  |

**Returns:** `String`

---

#### `validateConnection`
Validate connection

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `host` | `String` |  |
| `port` | `int` |  |
| `ssl` | `boolean` |  |

**Returns:** `String`

---

#### `createHttpProxy`
Create HTTP proxy connection

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `host` | `String` |  |
| `port` | `int` |  |

**Returns:** `java.net.Proxy`

---

## ConfiguratorCertificate

**Description:** Insert your description for CA here

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `notBefore` |  | `java.util.Date` | Yes |
| `notAfter` |  | `java.util.Date` | Yes |
| `sigAlgName` |  | `String` | Yes |
| `sigAlgOID` |  | `String` | Yes |
| `id` | Unique identifier of this CA | `String` | Yes |
| `version` |  | `int` | Yes |
| `displayName` | Display name of this CA | `String` | Yes |
| `issuerCn` |  | `String` | Yes |
| `issuerOU` |  | `String` | Yes |
| `issuerO` |  | `String` | Yes |
| `subjectO` |  | `String` | Yes |
| `subjectCn` |  | `String` | Yes |
| `subjectOU` |  | `String` | Yes |

## ConfiguratorDeleteCAAction

**Description:** Delete Certificate Action

## ConfiguratorGeneratePackageSigningCertificateAction

**Description:** Generate a new Package Signing Certificate Action

### Methods

#### `setOrganization`
Set the Organisation for the new certificate

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `organization` | `String` |  |

**Returns:** `void`

---

#### `setCommonName`
Set CN for the new certificate

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `commonName` | `String` |  |

**Returns:** `void`

---

#### `setOrganizationalUnit`
Set the Organizational Unit for the new certificate

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `organizationalUnit` | `String` |  |

**Returns:** `void`

---

#### `setCountryCode`
Set the Country code for the new certificate

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `countryCode` | `String` |  |

**Returns:** `void`

---

#### `setSignatureAlgorithm`
Set the Signature Algorithm for the new certificate

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `signatureAlgorithm` | `String` |  |

**Returns:** `void`

---

## ConfiguratorImportCAFromUrlAction

**Description:** Import from Certificate Action

### Methods

#### `validate`
Validates connection to the host

**Returns:** `String`

---

#### `execute`
Imports certificate chain in trusted key store

**Returns:** `String`

---

#### `getModel`
**Returns:** `ch.dunes.util.Holder`

---

#### `getProxyHost`
**Returns:** `ch.dunes.util.Holder`

---

#### `getProxyPort`
**Returns:** `ch.dunes.util.Holder`

---

#### `getCertInfo`
Returns certificate info

**Returns:** `String`

---

#### `setCertificateAlias`
Sets the alias which the root certificate must be associated with

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `certAlias` | `String` |  |

**Returns:** `void`

---

#### `validateCertificates`
Returns results of certificate validation

**Returns:** `ch.dunes.crypto.validation.CertChainValidatorResult`

---

#### `getCertificateChainInfo`
Returns certificate chain info

**Returns:** `String`

---

#### `getProxyUsername`
**Returns:** `ch.dunes.util.Holder`

---

#### `getProxyPassword`
**Returns:** `ch.dunes.util.Holder`

---

## ConfiguratorImportFromCerAction

**Description:** Import from Certificate Action

### Methods

#### `validate`
**Returns:** `String`

---

#### `execute`
**Returns:** `String`

---

#### `getModel`
**Returns:** `ch.dunes.model.fileattachment.MimeAttachment`

---

## ConfiguratorKey

**Description:** Represents private key with the associated certificate chain.

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `notBefore` |  | `java.util.Date` | Yes |
| `notAfter` |  | `java.util.Date` | Yes |
| `sigAlgName` |  | `String` | Yes |
| `sigAlgOID` |  | `String` | Yes |
| `id` | Unique identifier of this Key | `String` | Yes |
| `version` |  | `int` | Yes |
| `displayName` | Display name of this Key | `String` | Yes |
| `issuerCn` |  | `String` | Yes |
| `issuerOU` |  | `String` | Yes |
| `issuerO` |  | `String` | Yes |
| `subjectO` |  | `String` | Yes |
| `subjectCn` |  | `String` | Yes |
| `subjectOU` |  | `String` | Yes |

## ConfiguratorKeystore

**Description:** Keystore

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `id` | Unique identifier of this Keystore | `String` | Yes |
| `displayName` | Display name of this PrivateKeys | `String` | Yes |

### Methods

#### `getKeys`
Gets the list of Keystores.

**Returns:** `Array/ConfiguratorKey`

---

#### `getCAs`
Gets the list of Certificates.

**Returns:** `Array/ConfiguratorCertificate`

---

#### `getAddEntryToKeystoreAction`
Add key pair to keystore

**Returns:** `com.vmware.o11n.plugins.configurator.actions.AddEntryToKeystoreAction`

---

#### `getAddCertificateToKeystoreAction`
Add certificate to keystore

**Returns:** `com.vmware.o11n.plugins.configurator.actions.AddCertificateToKeystoreAction`

---

#### `getDeleteEntryFromKeystoreAction`
Delete certificate/key from keystore

**Returns:** `com.vmware.o11n.plugins.configurator.actions.DeleteEntryFromKeystoreAction`

---

## ConfiguratorKeystores

**Description:** List of keystores

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `id` | Unique identifier of this Keystores | `String` | Yes |
| `displayName` | Display name of this Keystores | `String` | Yes |

### Methods

#### `getCreateKeystoreAction`
Create an empty keystore

**Returns:** `com.vmware.o11n.plugins.configurator.actions.CreateKeystoreAction`

---

#### `getDeleteKeystoreAction`
Delete keystore

**Returns:** `com.vmware.o11n.plugins.configurator.actions.DeleteKeystoreAction`

---

#### `getDeleteCAAction`
**Returns:** `ConfiguratorDeleteCAAction`

---

#### `getImportFromCerAction`
**Returns:** `ConfiguratorImportFromCerAction`

---

#### `getImportCAFromUrlAction`
**Returns:** `ConfiguratorImportCAFromUrlAction`

---

#### `getKeystores`
Gets the list of Keystores.

**Returns:** `Array/ConfiguratorKeystore`

---

