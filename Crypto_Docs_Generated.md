# Crypto (Encryption Plugin) Reference

Generated Documentation

## CryptoCertificate

**Description:** A scripting object representing a X.509 certificate

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `serialNumber` | Serial Number of the Certificate | `String` | Yes |
| `encodedBase64` | Encoded form of the certificate encoded as a Base64 string. Hashing this can create a fingerprint | `String` | Yes |
| `publicKeyPem` | The RSA Public Key in PEM format found in the certificate | `String` | Yes |
| `issuedToMap` | issuedToDN parsed into key/value pairs | `java.util.Map` | Yes |
| `issuedByDN` | Distinguished Name the certificate was issued by | `String` | Yes |
| `issuedToDN` | Distinguished Name the certificate was issued to | `String` | Yes |
| `pemEncoded` | PEM Encoding of the certificate | `String` | Yes |
| `issuedByMap` | issuedByDN parsed into key/value pairs | `java.util.Map` | Yes |
| `signatureAlgorithm` | Signature algorithm used by the certificate signer | `String` | Yes |
| `sha1Fingerprint` | SHA1 fingerprint of the certificate | `String` | Yes |
| `signatureBase64` | Base64 encoded signature of the certificate | `String` | Yes |
| `sha256Fingerprint` | SHA256 fingerprint of the certificate | `String` | Yes |
| `subjectAlternativeNames` | A list of subject alternative names found in the certificate. Each will have a colon delimited prefix for the type of SAN found. ex: "dns:" | `Array/String` | Yes |

### Methods

#### `CryptoCertificate`
A X.509 Certificate Object

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `certString` | `String` | PEM encoded certificate |

**Returns:** `void`

---

#### `verify`
Verifies the Certificate was signed by a signing certificates private key

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `pemKey` | `String` | PEM encoded PublicKey of the signing Certificate |

**Returns:** `boolean`

---

#### `getValidBefore`
The certificate is valid before this date

**Returns:** `Date`

---

#### `getValidAfter`
The certificate is valid after this date

**Returns:** `Date`

---

#### `isValidOn`
Is the certificate valid based on a provided date

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `date` | `Date` | Date to check certificate validity on |

**Returns:** `boolean`

---

## CryptoCertificateManager

**Description:** Provides methods to parse or fetch certificates

### Methods

#### `parseCertificatePem`
parses a PEM encoded X.509 Certificate

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `pemCertString` | `String` | PEM encoded Certificate |

**Returns:** `CryptoCertificate`

---

#### `getHttpsCertificate`
Returns array of certificates presented by an https server

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `urlString` | `String` | HTTPS URL to get certificate chain of |

**Returns:** `Array/CryptoCertificate`

---

## CryptoDigest

**Description:** Provides methods to hash data with different digests

### Methods

#### `sha1Base64`
Returns a Base64 encoded 160 bit SHA-1 hash

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `dataB64` | `String` | Base64 encoded data to hash with SHA1 |

**Returns:** `String`

---

#### `sha1`
Returns a Base64 encoded 160 bit SHA-1 hash

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `data` | `String` | Plain String to hash with SHA1 |

**Returns:** `String`

---

#### `md5`
Returns a Base64 encoded 128 bit MD5 hash

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `data` | `String` | Plain String to hash with MD5 |

**Returns:** `String`

---

#### `md5Base64`
Returns a Base64 encoded 128 bit MD5 hash

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `dataB64` | `String` | Base64 encoded data to hash with MD5 |

**Returns:** `String`

---

#### `sha384Base64`
Returns a Base64 encoded 384 bit SHA384 hash

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `dataB64` | `String` | Base64 encoded data to hash with SHA384 |

**Returns:** `String`

---

#### `hmacSha512`
Returns HmacSHA512 MAC for the given key and data Base64 encoded

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `keyB64` | `String` | Secret Key Base64 encoded |
| `dataB64` | `String` | Data to sign Base64 encoded |

**Returns:** `String`

---

#### `hmacMd5`
Returns HmacMD5 MAC for the given key and data Base64 encoded

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `keyB64` | `String` | Secret Key Base64 encoded |
| `dataB64` | `String` | Data to sign Base64 encoded |

**Returns:** `String`

---

#### `hmacSha384`
Returns HmacSHA384 MAC for the given key and data Base64 encoded

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `keyB64` | `String` | Secret Key Base64 encoded |
| `dataB64` | `String` | Data to sign Base64 encoded |

**Returns:** `String`

---

#### `sha256`
Returns a Base64 encoded 256 bit SHA256 hash

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `data` | `String` | Plain String to hash with SHA256 |

**Returns:** `String`

---

#### `hmacSha256`
Returns HmacSHA256 MAC for the given key and data Base64 encoded

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `keyB64` | `String` | Secret Key Base64 encoded |
| `dataB64` | `String` | Data to sign Base64 encoded |

**Returns:** `String`

---

#### `hmacSha1`
Returns HmacSHA1 MAC for the given key and data Base64 encoded

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `keyB64` | `String` | Secret Key Base64 encoded |
| `dataB64` | `String` | Data to sign Base64 encoded |

**Returns:** `String`

---

#### `sha384`
Returns a Base64 encoded 384 bit SHA384 hash

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `data` | `String` | Plain String to hash with SHA384 |

**Returns:** `String`

---

#### `sha256Base64`
Returns a Base64 encoded 256 bit SHA256 hash

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `dataB64` | `String` | Base64 encoded data to hash with SHA256 |

**Returns:** `String`

---

#### `sha512`
Returns a Base64 encoded 512 bit SHA512 hash

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `data` | `String` | Plain String to hash with SHA512 |

**Returns:** `String`

---

#### `sha512Base64`
Returns a Base64 encoded 512 bit SHA512 hash

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `dataB64` | `String` | Base64 encoded data to hash with SHA512 |

**Returns:** `String`

---

## CryptoEncoding

**Description:** Provides methods to encode/decode strings between different encodings

### Methods

#### `binaryConcatBase64`
Decodes two Base64 strings and concatenates the binary data. Returns base64 encoded result

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `b64data1` | `String` | First Base64 encoded data |
| `b64data2` | `String` | Second Base64 encoded data to append |

**Returns:** `String`

---

#### `base64EncodeBytes`
Base64 Encoder

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `data` | `Array/byte` | Data to encode |

**Returns:** `String`

---

#### `base64Encode`
Base64 Encoder

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `data` | `String` | Data to encode |

**Returns:** `String`

---

#### `hexToBase64`
Hex to Base64 Encoder

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `hex` | `String` | Hex data to convert to Base64 |

**Returns:** `String`

---

#### `mimeToBase64`
Extracts data from MimeAttachment as Base64

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `mime` | `MimeAttachment` |  |

**Returns:** `String`

---

#### `base64ToMime`
Base64 to MimeAttachment

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `b64data` | `String` | Base64 encoded data |
| `mimeType` | `String` | Mime type of data |
| `fileName` | `String` | Filename of MimeAttachment |

**Returns:** `MimeAttachment`

---

#### `base64Decode`
Base64 Decoder

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `b64data` | `String` | Base64 data to decode |

**Returns:** `String`

---

#### `getSubsetBase64`
Returns a subset of bytes from a Base64 encoded string

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `b64data` | `String` | Base64 data |
| `start` | `Number` | Starting byte index to get subset of data (inclusive). Starts at 0 |
| `length` | `Number` | number of bytes to return. Must be 1 or greater |

**Returns:** `String`

---

#### `base64toHex`
Base64 to Hex Encoder

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `b64data` | `String` | Base64 data to convert to Hex |

**Returns:** `String`

---

#### `getLengthBase64`
Decodes a Base64 String and returns the number of bytes that were encoded.

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `b64data` | `String` | Base64 data |

**Returns:** `Number`

---

## CryptoEncryption

**Description:** Provides static methods to encrypt/decrypt data with different ciphers. All ciphers use CBC mode with PKCS5 padding

### Methods

#### `generateRandomBytes`
Returns a number of random bytes encoded as a Base64 string

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `numberOfBytes` | `Number` | Number of random bytes |

**Returns:** `String`

---

#### `tripleDesEncrypt`
3DES Encryption. Returns encrypted data Base64 encoded

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `dataB64` | `String` | Data to encrypt Base64 encoded |
| `secretB64` | `String` | Encryption secret Base64 encoded. 192 bits (24 bytes) long. If longer, only the first 24 bytes will be used. |
| `ivB64` | `String` | Base64 encoded initialization vector. 8 bytes long |

**Returns:** `String`

---

#### `aesEncrypt`
AES Encryption. Returns encrypted data Base64 encoded

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `dataB64` | `String` | Data to encrypt Base64 encoded |
| `secretB64` | `String` | Encryption secret Base64 encoded. For AES128 this should be 128 bits (16 bytes) long. For AES256 this should be 256 bits (32 bytes) long. |
| `ivB64` | `String` | Initialization Vector Base64 encoded. 16 bytes long |

**Returns:** `String`

---

#### `aesDecrypt`
AES Decryption. Returns data Base64 encoded

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `encryptedB64` | `String` | Data to decrypt Base64 encoded. |
| `secretB64` | `String` | Encryption secret Base64 encoded. For AES128 this should be 128 bits (16 bytes) long. For AES256 this should be 256 bits (32 bytes) long. |
| `ivB64` | `String` | Initialization vector Base64 encoded. 16 bytes long |

**Returns:** `String`

---

#### `tripleDesDecrypt`
3DES Decryption. Returns data Base64 encoded

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `encryptedB64` | `String` | Data to decrypt Base64 encoded. |
| `secretB64` | `String` | Encryption secret Base64 encoded. 192 bits (24 bytes) long. If longer, only the first 24 bytes will be used. |
| `ivB64` | `String` | Base64 encoded initialization vector. 8 bytes long |

**Returns:** `String`

---

#### `generateRandomIv`
Returns 16 random bytes encoded as a Base64 string suitable for an AES Initialization Vector

**Returns:** `String`

---

## CryptoRSA

**Description:** Provides static methods to encrypt / decrypt / sign data with RSA style encryption

### Methods

#### `encrypt`
Asymmetric RSA Encryption. Result is Base64 encoded

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` | PEM encoded Public or Private Key |
| `dataB64` | `String` | Base64 encoded data to encrypt |

**Returns:** `String`

---

#### `decrypt`
Asymmetric RSA Decryption. Result is Base64 encoded

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` | PEM encoded Private Key |
| `encryptedB64` | `String` | Base64 encoded encrypted data |

**Returns:** `String`

---

#### `createSignature`
Creates a RSA Signature

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` | PEM encoded Private Key |
| `dataB64` | `String` | Base64 encoded message to sign |

**Returns:** `String`

---

#### `verifySignature`
Verifies a RSA Signature

**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` | PEM encoded Public or Private Key |
| `dataB64` | `String` | Base64 encoded signed message |
| `signatureB64` | `String` | Base64 encoded RSA signature to verify |

**Returns:** `boolean`

---

