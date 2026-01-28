# Redis Reference

Generated Documentation

## RedisBitPosParams

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `params` |  | `Array/Object` | Yes |

## RedisConnection

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `databases` |  | `Array/Object` | Yes |
| `port` |  | `Number` | Yes |
| `displayName` |  | `String` | Yes |
| `name` |  | `String` | Yes |
| `host` |  | `String` | Yes |
| `defaultDatabase` |  | `RedisDatabase` | Yes |

### Methods

#### `getDatabase`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `index` | `Number` |  |

**Returns:** `RedisDatabase`

---

#### `destroy`


**Returns:** `void`

---

## RedisConnectionManager

### Methods

#### `save`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connectionName` | `String` |  |
| `redisHost` | `String` |  |
| `redisPort` | `Number` |  |

**Returns:** `String`

---

## RedisDatabase

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `displayName` |  | `String` | Yes |
| `index` |  | `Number` | Yes |

### Methods

#### `RedisDatabase`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connection` | `RedisConnection` |  |
| `index` | `Number` |  |

**Returns:** `void`

---

#### `append`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `value` | `String` |  |

**Returns:** `Number`

---

#### `geodist`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `member1` | `String` |  |
| `member2` | `String` |  |
| `unit` | `RedisGeoUnit` |  |

**Returns:** `Number`

---

#### `bitcount`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `start` | `Number` |  |
| `end` | `Number` |  |

**Returns:** `Number`

---

#### `psetex`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `milliseconds` | `Number` |  |
| `value` | `String` |  |

**Returns:** `String`

---

#### `decrBy`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `integer` | `Number` |  |

**Returns:** `Number`

---

#### `hvals`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |

**Returns:** `Array/String`

---

#### `geopos`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `members` | `Array/String` |  |

**Returns:** `Array/RedisGeoCoordinate`

---

#### `scriptFlush`


**Returns:** `String`

---

#### `incrByFloat`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `value` | `Number` |  |

**Returns:** `Number`

---

#### `setex`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `seconds` | `Number` |  |
| `value` | `String` |  |

**Returns:** `String`

---

#### `strlen`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |

**Returns:** `Number`

---

#### `setnx`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `value` | `String` |  |

**Returns:** `Number`

---

#### `lset`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `lindex` | `Number` |  |
| `value` | `String` |  |

**Returns:** `String`

---

#### `srandmember`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |

**Returns:** `String`

---

#### `setrange`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `offset` | `Number` |  |
| `value` | `String` |  |

**Returns:** `Number`

---

#### `pfcount`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |

**Returns:** `Number`

---

#### `scriptLoad`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `script` | `String` |  |

**Returns:** `String`

---

#### `incr`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |

**Returns:** `Number`

---

#### `incrBy`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `integer` | `Number` |  |

**Returns:** `Number`

---

#### `zrevrangeByScore`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `max` | `Number` |  |
| `min` | `Number` |  |
| `offset` | `Number` |  |
| `count` | `Number` |  |

**Returns:** `Array/String`

---

#### `zcard`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |

**Returns:** `Number`

---

#### `lindex`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `lindex` | `Number` |  |

**Returns:** `String`

---

#### `substr`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `start` | `Number` |  |
| `end` | `Number` |  |

**Returns:** `String`

---

#### `zrangeByScore`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `min` | `Number` |  |
| `max` | `Number` |  |
| `offset` | `Number` |  |
| `count` | `Number` |  |

**Returns:** `Array/String`

---

#### `pttl`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |

**Returns:** `Number`

---

#### `hmset`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `hash` | `Properties` |  |

**Returns:** `String`

---

#### `zrange`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `start` | `Number` |  |
| `end` | `Number` |  |

**Returns:** `Array/String`

---

#### `echo`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `string` | `String` |  |

**Returns:** `String`

---

#### `rpush`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `strings` | `Array/String` |  |

**Returns:** `Number`

---

#### `lpushx`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `strings` | `Array/String` |  |

**Returns:** `Number`

---

#### `getrange`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `startOffset` | `Number` |  |
| `endOffset` | `Number` |  |

**Returns:** `String`

---

#### `srem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `members` | `Array/String` |  |

**Returns:** `Number`

---

#### `zrangeWithScores`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `start` | `Number` |  |
| `end` | `Number` |  |

**Returns:** `Array/RedisTuple`

---

#### `hmget`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `fields` | `Array/String` |  |

**Returns:** `Array/String`

---

#### `zrangeByScoreWithScores`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `min` | `Number` |  |
| `max` | `Number` |  |
| `offset` | `Number` |  |
| `count` | `Number` |  |

**Returns:** `Array/RedisTuple`

---

#### `scard`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |

**Returns:** `Number`

---

#### `exists`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |

**Returns:** `Boolean`

---

#### `zrevrangeByLex`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `max` | `String` |  |
| `min` | `String` |  |
| `offset` | `Number` |  |
| `count` | `Number` |  |

**Returns:** `Array/String`

---

#### `move`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `dbIndex` | `Number` |  |

**Returns:** `Number`

---

#### `sort`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `sortingParams` | `RedisSortingParams` |  |

**Returns:** `Array/String`

---

#### `hset`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `field` | `String` |  |
| `value` | `String` |  |

**Returns:** `Number`

---

#### `pexpireAt`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `millisecondsTimestamp` | `Number` |  |

**Returns:** `Number`

---

#### `ltrim`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `start` | `Number` |  |
| `end` | `Number` |  |

**Returns:** `String`

---

#### `del`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |

**Returns:** `Number`

---

#### `zremrangeByRank`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `start` | `Number` |  |
| `end` | `Number` |  |

**Returns:** `Number`

---

#### `hlen`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |

**Returns:** `Number`

---

#### `set`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `value` | `String` |  |

**Returns:** `String`

---

#### `linsert`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `where` | `RedisListPosition` |  |
| `pivot` | `String` |  |
| `value` | `String` |  |

**Returns:** `Number`

---

#### `decr`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |

**Returns:** `Number`

---

#### `spop`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |

**Returns:** `String`

---

#### `zcount`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `min` | `Number` |  |
| `max` | `Number` |  |

**Returns:** `Number`

---

#### `hdel`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `fields` | `Array/String` |  |

**Returns:** `Number`

---

#### `zrevrangeByScoreWithScores`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `max` | `Number` |  |
| `min` | `Number` |  |
| `offset` | `Number` |  |
| `count` | `Number` |  |

**Returns:** `Array/RedisTuple`

---

#### `hexists`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `field` | `String` |  |

**Returns:** `Boolean`

---

#### `evalsha`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `sha1` | `String` |  |
| `keys` | `Array/String` |  |
| `args` | `Array/String` |  |

**Returns:** `Object`

---

#### `geoadd`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `longitude` | `Number` |  |
| `latitude` | `Number` |  |
| `member` | `String` |  |

**Returns:** `Number`

---

#### `llen`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |

**Returns:** `Number`

---

#### `zadd`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `scoreMembers` | `Properties` |  |
| `params` | `RedisZAddParams` |  |

**Returns:** `Number`

---

#### `lrem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `count` | `Number` |  |
| `value` | `String` |  |

**Returns:** `Number`

---

#### `zscore`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `member` | `String` |  |

**Returns:** `Number`

---

#### `hgetAll`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |

**Returns:** `Properties`

---

#### `hget`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `field` | `String` |  |

**Returns:** `String`

---

#### `geohash`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `members` | `Array/String` |  |

**Returns:** `Array/String`

---

#### `getSet`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `value` | `String` |  |

**Returns:** `String`

---

#### `lpush`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `strings` | `Array/String` |  |

**Returns:** `Number`

---

#### `zremrangeByLex`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `min` | `String` |  |
| `max` | `String` |  |

**Returns:** `Number`

---

#### `ping`


**Returns:** `String`

---

#### `eval`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `script` | `String` |  |
| `keys` | `Array/String` |  |
| `args` | `Array/String` |  |

**Returns:** `Object`

---

#### `sismember`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `member` | `String` |  |

**Returns:** `Boolean`

---

#### `smembers`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |

**Returns:** `Array/String`

---

#### `zremrangeByScore`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `start` | `Number` |  |
| `end` | `Number` |  |

**Returns:** `Number`

---

#### `scriptKill`


**Returns:** `void`

---

#### `lpop`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |

**Returns:** `String`

---

#### `bitpos`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `value` | `Boolean` |  |
| `params` | `RedisBitPosParams` |  |

**Returns:** `Number`

---

#### `scriptExists`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `sha1` | `String` |  |

**Returns:** `Boolean`

---

#### `pexpire`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `milliseconds` | `Number` |  |

**Returns:** `Number`

---

#### `hkeys`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |

**Returns:** `Array/String`

---

#### `expire`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `seconds` | `Number` |  |

**Returns:** `Number`

---

#### `zrevrangeWithScores`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `start` | `Number` |  |
| `end` | `Number` |  |

**Returns:** `Array/RedisTuple`

---

#### `rpushx`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `strings` | `Array/String` |  |

**Returns:** `Number`

---

#### `type`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |

**Returns:** `String`

---

#### `expireAt`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `unixTime` | `Number` |  |

**Returns:** `Number`

---

#### `hsetnx`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `field` | `String` |  |
| `value` | `String` |  |

**Returns:** `Number`

---

#### `persist`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |

**Returns:** `Number`

---

#### `rpop`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |

**Returns:** `String`

---

#### `get`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |

**Returns:** `String`

---

#### `zincrby`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `score` | `Number` |  |
| `member` | `String` |  |
| `params` | `RedisZIncrByParams` |  |

**Returns:** `Number`

---

#### `zscan`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `cursor` | `String` |  |
| `params` | `RedisScanParams` |  |

**Returns:** `RedisScanResult`

---

#### `lrange`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `start` | `Number` |  |
| `end` | `Number` |  |

**Returns:** `Array/String`

---

#### `zrevrange`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `start` | `Number` |  |
| `end` | `Number` |  |

**Returns:** `Array/String`

---

#### `hscan`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `cursor` | `String` |  |
| `params` | `RedisScanParams` |  |

**Returns:** `RedisScanResult`

---

#### `zrevrank`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `member` | `String` |  |

**Returns:** `Number`

---

#### `zrangeByLex`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `min` | `String` |  |
| `max` | `String` |  |
| `offset` | `Number` |  |
| `count` | `Number` |  |

**Returns:** `Array/String`

---

#### `pfadd`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `elements` | `Array/String` |  |

**Returns:** `Number`

---

#### `zrank`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `member` | `String` |  |

**Returns:** `Number`

---

#### `randomKey`


**Returns:** `String`

---

#### `zrem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `members` | `Array/String` |  |

**Returns:** `Number`

---

#### `ttl`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |

**Returns:** `Number`

---

#### `zlexcount`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `min` | `String` |  |
| `max` | `String` |  |

**Returns:** `Number`

---

#### `sadd`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `String` |  |
| `members` | `Array/String` |  |

**Returns:** `Number`

---

#### `brpop`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `timeout` | `Number` |  |
| `key` | `String` |  |

**Returns:** `Array/String`

---

## RedisGeoCoordinate

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `latitude` |  | `Number` | Yes |
| `longitude` |  | `Number` | Yes |

## RedisGeoUnit

### Methods

#### `values`


**Returns:** `Array/RedisGeoUnit`

---

#### `name`


**Returns:** `String`

---

#### `valueOf`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `String` |  |

**Returns:** `RedisGeoUnit`

---

#### `ordinal`


**Returns:** `Number`

---

## RedisListPosition

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `BEFORE` |  | `RedisListPosition` | Yes |
| `AFTER` |  | `RedisListPosition` | Yes |

## RedisScanParams

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `params` |  | `Array/Object` | Yes |

### Methods

#### `RedisScanParams`


**Returns:** `void`

---

#### `match`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `pattern` | `Array/Number` |  |

**Returns:** `RedisScanParams`

---

#### `count`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `count` | `Number` |  |

**Returns:** `RedisScanParams`

---

## RedisScanResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `cursor` |  | `String` | Yes |
| `result` |  | `Array/Object` | Yes |
| `cursorAsBytes` |  | `Array/Number` | Yes |
| `completeIteration` |  | `Boolean` | Yes |

## RedisSortingParams

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `params` |  | `Array/Object` | Yes |

### Methods

#### `RedisSortingParams`


**Returns:** `void`

---

#### `by`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `pattern` | `String` |  |

**Returns:** `RedisSortingParams`

---

#### `limit`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `start` | `Number` |  |
| `count` | `Number` |  |

**Returns:** `RedisSortingParams`

---

#### `alpha`


**Returns:** `RedisSortingParams`

---

#### `nosort`


**Returns:** `RedisSortingParams`

---

#### `get`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `patterns` | `Array/String` |  |

**Returns:** `RedisSortingParams`

---

#### `asc`


**Returns:** `RedisSortingParams`

---

#### `desc`


**Returns:** `RedisSortingParams`

---

## RedisTuple

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `score` |  | `Number` | Yes |
| `element` |  | `String` | Yes |

### Methods

#### `RedisTuple`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `element` | `String` |  |
| `score` | `Number` |  |

**Returns:** `void`

---

#### `RedisTuple`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `element` | `Array/Number` |  |
| `score` | `Number` |  |

**Returns:** `void`

---

#### `compareTo`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `other` | `RedisTuple` |  |

**Returns:** `Number`

---

#### `compare`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `t1` | `RedisTuple` |  |
| `t2` | `RedisTuple` |  |

**Returns:** `Number`

---

## RedisZAddParams

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `byteParams` |  | `Array/[Number` | Yes |

### Methods

#### `RedisZAddParams`


**Returns:** `void`

---

#### `ch`


**Returns:** `RedisZAddParams`

---

#### `nx`


**Returns:** `RedisZAddParams`

---

#### `xx`


**Returns:** `RedisZAddParams`

---

#### `getByteParams`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `Array/Number` |  |
| `args` | `Array/[Number` |  |

**Returns:** `Array/[Number`

---

#### `getParam`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `String` |  |

**Returns:** `Object`

---

#### `lt`


**Returns:** `RedisZAddParams`

---

#### `gt`


**Returns:** `RedisZAddParams`

---

#### `zAddParams`


**Returns:** `RedisZAddParams`

---

## RedisZIncrByParams

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `byteParams` |  | `Array/[Number` | Yes |

### Methods

#### `RedisZIncrByParams`


**Returns:** `void`

---

#### `zIncrByParams`


**Returns:** `RedisZIncrByParams`

---

#### `getByteParams`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `key` | `Array/Number` |  |
| `args` | `Array/[Number` |  |

**Returns:** `Array/[Number`

---

#### `getParam`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `String` |  |

**Returns:** `Object`

---

#### `xx`


**Returns:** `RedisZIncrByParams`

---

#### `nx`


**Returns:** `RedisZIncrByParams`

---

