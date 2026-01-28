# API Reference

Generated Documentation

## AMQPBroker

**Description:** AMQP Broker

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | User-friendly name of this broker | `String` | Yes |
| `id` | Unique identifier of this broker | `String` | Yes |
| `host` | Host address of this broker | `String` | Yes |
| `port` | Port number of this broker | `int` | Yes |
| `displayName` | Display name of this broker, an extended version of the name property | `String` | Yes |
| `username` | User name for this broker | `String` | Yes |
| `virtualHost` | Virtual host of this broker | `String` | Yes |
| `useSSL` | Whether this broker uses SSL | `boolean` | Yes |
| `acceptAllCertificates` | Whether this broker accepts all certificates | `boolean` | Yes |

### Methods

#### `remove`
Removes this broker.

**Returns:** `void`

---

#### `update`
Updates this broker properties.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `props` | `Any` | New properties to update with |

**Returns:** `AMQPBroker`

---

#### `validate`
Validate connection for this broker

**Returns:** `void`

---

#### `bind`
Bind a queue to an exchanges with specified properties.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `queue` | `String` | Name of the queue to bind |
| `exchange` | `String` | Name of the exchange to bind |
| `props` | `Any` | Properties of the binding (ex. {routingKey: "my routing key"}) |

**Returns:** `void`

---

#### `receive`
Receives a messages from a specified queue.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `queue` | `String` | The name of the queue to read a message from |

**Returns:** `AMQPMessage`

---

#### `send`
Sends a message.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `exchange` | `String` | Name of the exchange to use as message destination |
| `routingKey` | `String` | Message routing key |
| `message` | `AMQPMessage` | Message to send |

**Returns:** `void`

---

#### `subscribe`
Subscribes to one or more queues.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `queues` | `Array/String` | Array of the queue names to which you want to subscribe |
| `props` | `Any` | Properties for the subscription |

**Returns:** `AMQPSubscription`

---

#### `retrieveMessage`
Retrieves a trigger properties

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `trigger` | `Trigger` | Trigger to make a AMQPMessage from |

**Returns:** `AMQPMessage`

---

#### `declareExchange`
Declares an exchange.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `exchange` | `String` | The name of the exchange to declare |
| `props` | `Any` | Properties of the exchange |

**Returns:** `void`

---

#### `declareQueue`
Declares a new queue.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `String` | The name of the queue to be declared |
| `props` | `Any` | Properties of the queue |

**Returns:** `void`

---

#### `sendAndReceive`
Sends a message to a specified destination and waits for the replay

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `exchange` | `String` | The exchange to send a message |
| `routingKey` | `String` | Routing key for the send message |
| `requestMessage` | `AMQPMessage` | The message to send |
| `timeoutSeconds` | `int` | Timeout to wait for response |

**Returns:** `AMQPMessage`

---

#### `receiveAsync`
Receives a message asynchronously.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `queue` | `String` | Name of the queue to use for a message source |
| `timeoutSeconds` | `int` | Timeout to wait for message |

**Returns:** `Trigger`

---

#### `unbind`
Unbinds a queue from an exchange.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `queue` | `String` | Name of the queue to unbind |
| `exchange` | `String` | Name of the exchange to unbind |
| `props` | `Any` | Same properties that are used to make the binding |

**Returns:** `void`

---

#### `deleteQueue`
Deletes a queue.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `queue` | `String` | The name of the queue to delete |

**Returns:** `void`

---

#### `declareQueueAndReceiveAsync`
Receives a message asynchronously without interacting with the queue.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `exchange` | `String` | The exchange name to receive message from |
| `routingKey` | `String` | Routing key for the message, a temporary queue will be bind with this key to the exchange |
| `timeoutSeconds` | `int` | Timeout to wait for message |

**Returns:** `Trigger`

---

#### `deleteExchange`
Deletes an exchange.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `exchange` | `String` | The name of the exchange to delete |

**Returns:** `void`

---

#### `retrieveTriggerProperties`
Retrieves a trigger properties

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `trigger` | `Trigger` | Trigger which properties to return |

**Returns:** `Properties`

---

## AMQPBrokerManager

**Description:** Manager that enables AMQP broker creation and configuration reload.

### Methods

#### `addBroker`
Creates a new broker.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `props` | `Any` | Properties of the new broker |

**Returns:** `AMQPBroker`

---

## AMQPMessage

**Description:** AMQP Message

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `properties` | Message properties | `Properties` | No |
| `encoding` | Message encoding | `String` | No |
| `body` | Message body as byte array | `Array/byte` | No |
| `bodyAsText` | Message body as string | `String` | No |
| `headers` | Message headers | `Properties` | No |

## AMQPSubscription

**Description:** AMQP Subscription

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` | User-friendly name of this subscription | `String` | Yes |
| `id` | Unique identifier of this subscription | `String` | Yes |
| `displayName` | Display name of this subscription, an extended version of the name property | `String` | Yes |
| `queues` | Array of the queue names to which this subscription is subscribed | `Array/String` | Yes |

### Methods

#### `OnMessage`
---

#### `remove`
Removes this subscription

**Returns:** `void`

---

#### `retrieveMessage`
Constructs new message object from a policy trigger event.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `trigger` | `EventTrigger` | Event to make a message from. Usually this is the 'event' var in a policy callback. |

**Returns:** `AMQPMessage`

---

#### `removeAndDeleteQueues`
Removes this subscription and deletes the associated queues.

**Returns:** `void`

---

#### `retrieveLastOnMessageTrigger`
Returns the last properties that triggered this subscription.

**Returns:** `Properties`

---

