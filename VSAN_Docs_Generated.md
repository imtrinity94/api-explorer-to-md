# vSAN Reference

Generated Documentation

## VsanActiveVsanDirectoryServerConfig

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `activeDirectoryDomainName` |  | `String` | No |
| `preferredADServers` |  | `Array/String` | No |
| `password` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `username` |  | `String` | No |
| `organizationalUnit` |  | `String` | No |

## VsanClusterPowerContext

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `orderedClusterPowerStatus` |  | `Array/String` | No |
| `lastErrorMOs` |  | `Array/VsanManagedObjectReference` | No |
| `trackingTask` |  | `VsanManagedObjectReference` | No |
| `currentClusterPowerStatus` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanClusterPowerState

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `poweredOn` |  | `VsanClusterPowerState` | Yes |
| `ClusterPowerState_Unknown` |  | `VsanClusterPowerState` | Yes |
| `poweredOff` |  | `VsanClusterPowerState` | Yes |
| `poweringOn` |  | `VsanClusterPowerState` | Yes |
| `poweringOff` |  | `VsanClusterPowerState` | Yes |

## VsanClusterPowerStatus

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `hostsInfraVMsPoweredoff` |  | `VsanClusterPowerStatus` | Yes |
| `vcVMPoweredOn` |  | `VsanClusterPowerStatus` | Yes |
| `vsanDOMPauseAllCCPsUnset` |  | `VsanClusterPowerStatus` | Yes |
| `supportedVMsPoweredOn` |  | `VsanClusterPowerStatus` | Yes |
| `supportedVMsPoweredOff` |  | `VsanClusterPowerStatus` | Yes |
| `ClusterPowerStatus_Unknown` |  | `VsanClusterPowerStatus` | Yes |
| `vcVMPoweredOff` |  | `VsanClusterPowerStatus` | Yes |
| `hostsOutOfMM` |  | `VsanClusterPowerStatus` | Yes |
| `vsanMemberShipUpdateDisabled` |  | `VsanClusterPowerStatus` | Yes |
| `haEnabled` |  | `VsanClusterPowerStatus` | Yes |
| `vsanMemberShipUpdateEnabled` |  | `VsanClusterPowerStatus` | Yes |
| `haDisabled` |  | `VsanClusterPowerStatus` | Yes |
| `clusterPoweredOff` |  | `VsanClusterPowerStatus` | Yes |
| `clusterPoweredOn` |  | `VsanClusterPowerStatus` | Yes |
| `vsanDOMPauseAllCCPsSet` |  | `VsanClusterPowerStatus` | Yes |
| `hostsInfraVMsPoweredon` |  | `VsanClusterPowerStatus` | Yes |
| `hostsInMM` |  | `VsanClusterPowerStatus` | Yes |
| `hostsPoweredOff` |  | `VsanClusterPowerStatus` | Yes |
| `infraVMsRecorded` |  | `VsanClusterPowerStatus` | Yes |

## VsanClusterRuntimeInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `clusterUuid` |  | `String` | No |
| `cluster` |  | `VsanManagedObjectReference` | No |
| `totalComponentsCount` |  | `Number` | No |
| `dynamicType` |  | `String` | No |

## VsanCnsAccessControlSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |

## VsanCnsAlreadyRegisteredFault

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `reason` |  | `String` | No |
| `localizedMessage` | Creates a localized description of this throwable. Subclasses may override this method in order to produce a locale-specific message. For subclasses that do not override this method, the default implementation returns the same result as {@code getMessage()}. | `String` | Yes |
| `volumeId` |  | `VsanCnsVolumeId` | No |
| `message` |  | `String` | No |

### Methods

#### `VsanCnsAlreadyRegisteredFault`


**Returns:** `void`

---

#### `VsanCnsAlreadyRegisteredFault`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `reason` | `String` |  |
| `volumeId` | `VsanCnsVolumeId` |  |

**Returns:** `void`

---

#### `printStackTrace`
Prints this throwable and its backtrace to the standard error stream. This method prints a stack trace for this {@code Throwable} object on the error output stream that is the value of the field {@code System.err}. The first line of output contains the result of the {@link #toString()} method for this object. Remaining lines represent data previously recorded by the method {@link #fillInStackTrace()}. The format of this information depends on the implementation, but the following example may be regarded as typical:
java.lang.NullPointerException
        at MyClass.mash(MyClass.java:9)
        at MyClass.crunch(MyClass.java:6)
        at MyClass.main(MyClass.java:3)

This example was produced by running the program:
class MyClass {
    public static void main(String[] args) {
        crunch(null);
    }
    static void crunch(int[] a) {
        mash(a);
    }
    static void mash(int[] b) {
        System.out.println(b[0]);
    }
}

The backtrace for a throwable with an initialized, non-null cause should generally include the backtrace for the cause. The format of this information depends on the implementation, but the following example may be regarded as typical:
HighLevelException: MidLevelException: LowLevelException
        at Junk.a(Junk.java:13)
        at Junk.main(Junk.java:4)
Caused by: MidLevelException: LowLevelException
        at Junk.c(Junk.java:23)
        at Junk.b(Junk.java:17)
        at Junk.a(Junk.java:11)
        ... 1 more
Caused by: LowLevelException
        at Junk.e(Junk.java:30)
        at Junk.d(Junk.java:27)
        at Junk.c(Junk.java:21)
        ... 3 more

Note the presence of lines containing the characters {@code "..."}. These lines indicate that the remainder of the stack trace for this exception matches the indicated number of frames from the bottom of the stack trace of the exception that was caused by this exception (the "enclosing" exception). This shorthand can greatly reduce the length of the output in the common case where a wrapped exception is thrown from same method as the "causative exception" is caught. The above example was produced by running the program:
public class Junk {
    public static void main(String args[]) {
        try {
            a();
        } catch(HighLevelException e) {
            e.printStackTrace();
        }
    }
    static void a() throws HighLevelException {
        try {
            b();
        } catch(MidLevelException e) {
            throw new HighLevelException(e);
        }
    }
    static void b() throws MidLevelException {
        c();
    }
    static void c() throws MidLevelException {
        try {
            d();
        } catch(LowLevelException e) {
            throw new MidLevelException(e);
        }
    }
    static void d() throws LowLevelException {
       e();
    }
    static void e() throws LowLevelException {
        throw new LowLevelException();
    }
}

class HighLevelException extends Exception {
    HighLevelException(Throwable cause) { super(cause); }
}

class MidLevelException extends Exception {
    MidLevelException(Throwable cause)  { super(cause); }
}

class LowLevelException extends Exception {
}

As of release 7, the platform supports the notion of suppressed exceptions (in conjunction with the {@code try}-with-resources statement). Any exceptions that were suppressed in order to deliver an exception are printed out beneath the stack trace. The format of this information depends on the implementation, but the following example may be regarded as typical:
Exception in thread "main" java.lang.Exception: Something happened
 at Foo.bar(Foo.java:10)
 at Foo.main(Foo.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 0
         at Resource.close(Resource.java:26)
         at Foo.bar(Foo.java:9)
         ... 1 more

Note that the "... n more" notation is used on suppressed exceptions just at it is used on causes. Unlike causes, suppressed exceptions are indented beyond their "containing exceptions."

An exception can have both a cause and one or more suppressed exceptions:

Exception in thread "main" java.lang.Exception: Main block
 at Foo3.main(Foo3.java:7)
 Suppressed: Resource$CloseFailException: Resource ID = 2
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 1
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
Caused by: java.lang.Exception: I did it
 at Foo3.main(Foo3.java:8)

Likewise, a suppressed exception can have a cause:
Exception in thread "main" java.lang.Exception: Main block
 at Foo4.main(Foo4.java:6)
 Suppressed: Resource2$CloseFailException: Resource ID = 1
         at Resource2.close(Resource2.java:20)
         at Foo4.main(Foo4.java:5)
 Caused by: java.lang.Exception: Rats, you caught me
         at Resource2$CloseFailException.<init>(Resource2.java:45)
         ... 2 more

**Returns:** `void`

---

## VsanCnsAsyncQueryResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `volumeId` |  | `VsanCnsVolumeId` | No |
| `queryResult` |  | `VsanCnsQueryResult` | No |
| `dynamicType` |  | `String` | No |

## VsanCnsBackingObjectDetails

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |
| `capacityInMb` |  | `Number` | No |

## VsanCnsBaseCreateSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |

## VsanCnsBlockBackingDetails

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `backingDiskPath` |  | `String` | No |
| `usedCapacityInMb` |  | `Number` | No |
| `backingDiskObjectId` |  | `String` | No |
| `backingDiskUrlPath` |  | `String` | No |
| `backingDiskId` |  | `String` | No |
| `aggregatedSnapshotCapacityInMb` |  | `Number` | No |
| `dynamicType` |  | `String` | No |
| `capacityInMb` |  | `Number` | No |

## VsanCnsBlockVolumeInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |

## VsanCnsBlockVolumeRelocateSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `datastore` |  | `VsanManagedObjectReference` | No |
| `profile` |  | `Array/VsanVirtualMachineProfileSpec` | No |
| `volumeId` |  | `VsanCnsVolumeId` | No |
| `dynamicType` |  | `String` | No |

## VsanCnsClusterFlavor

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `GUEST_CLUSTER` |  | `VsanCnsClusterFlavor` | Yes |
| `WORKLOAD` |  | `VsanCnsClusterFlavor` | Yes |
| `ClusterFlavor_Unknown` |  | `VsanCnsClusterFlavor` | Yes |
| `VANILLA` |  | `VsanCnsClusterFlavor` | Yes |

## VsanCnsClusterType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `KUBERNETES` |  | `VsanCnsClusterType` | Yes |
| `ClusterType_Unknown` |  | `VsanCnsClusterType` | Yes |

## VsanCnsContainerCluster

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `clusterType` |  | `String` | No |
| `vSphereUser` |  | `String` | No |
| `clusterId` |  | `String` | No |
| `clusterFlavor` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `delete` |  | `Boolean` | No |
| `clusterDistribution` |  | `String` | No |

### Methods

#### `VsanCnsContainerCluster`


**Returns:** `void`

---

#### `VsanCnsContainerCluster`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `clusterType` | `String` |  |
| `clusterId` | `String` |  |
| `vSphereUser` | `String` |  |
| `clusterFlavor` | `String` |  |
| `clusterDistribution` | `String` |  |
| `delete` | `Boolean` |  |

**Returns:** `void`

---

#### `isDelete`


**Returns:** `Boolean`

---

## VsanCnsCursor

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `totalRecords` |  | `Number` | No |
| `offset` |  | `Number` | No |
| `limit` |  | `Number` | No |
| `dynamicType` |  | `String` | No |

## VsanCnsDebugManager

### Methods

#### `_getRef`


**Returns:** `VsanManagedObjectReference`

---

#### `cnsSyncDatastore`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |
| `arg1` | `Boolean` |  |

**Returns:** `VsanManagedObjectReference`

---

## VsanCnsEntityMetadata

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `entityName` |  | `String` | No |
| `clusterId` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `delete` |  | `Boolean` | No |

### Methods

#### `VsanCnsEntityMetadata`


**Returns:** `void`

---

#### `isDelete`


**Returns:** `Boolean`

---

## VsanCnsFault

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `reason` |  | `String` | No |
| `localizedMessage` | Creates a localized description of this throwable. Subclasses may override this method in order to produce a locale-specific message. For subclasses that do not override this method, the default implementation returns the same result as {@code getMessage()}. | `String` | Yes |
| `message` |  | `String` | No |

### Methods

#### `VsanCnsFault`


**Returns:** `void`

---

#### `VsanCnsFault`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `reason` | `String` |  |

**Returns:** `void`

---

#### `printStackTrace`
Prints this throwable and its backtrace to the standard error stream. This method prints a stack trace for this {@code Throwable} object on the error output stream that is the value of the field {@code System.err}. The first line of output contains the result of the {@link #toString()} method for this object. Remaining lines represent data previously recorded by the method {@link #fillInStackTrace()}. The format of this information depends on the implementation, but the following example may be regarded as typical:
java.lang.NullPointerException
        at MyClass.mash(MyClass.java:9)
        at MyClass.crunch(MyClass.java:6)
        at MyClass.main(MyClass.java:3)

This example was produced by running the program:
class MyClass {
    public static void main(String[] args) {
        crunch(null);
    }
    static void crunch(int[] a) {
        mash(a);
    }
    static void mash(int[] b) {
        System.out.println(b[0]);
    }
}

The backtrace for a throwable with an initialized, non-null cause should generally include the backtrace for the cause. The format of this information depends on the implementation, but the following example may be regarded as typical:
HighLevelException: MidLevelException: LowLevelException
        at Junk.a(Junk.java:13)
        at Junk.main(Junk.java:4)
Caused by: MidLevelException: LowLevelException
        at Junk.c(Junk.java:23)
        at Junk.b(Junk.java:17)
        at Junk.a(Junk.java:11)
        ... 1 more
Caused by: LowLevelException
        at Junk.e(Junk.java:30)
        at Junk.d(Junk.java:27)
        at Junk.c(Junk.java:21)
        ... 3 more

Note the presence of lines containing the characters {@code "..."}. These lines indicate that the remainder of the stack trace for this exception matches the indicated number of frames from the bottom of the stack trace of the exception that was caused by this exception (the "enclosing" exception). This shorthand can greatly reduce the length of the output in the common case where a wrapped exception is thrown from same method as the "causative exception" is caught. The above example was produced by running the program:
public class Junk {
    public static void main(String args[]) {
        try {
            a();
        } catch(HighLevelException e) {
            e.printStackTrace();
        }
    }
    static void a() throws HighLevelException {
        try {
            b();
        } catch(MidLevelException e) {
            throw new HighLevelException(e);
        }
    }
    static void b() throws MidLevelException {
        c();
    }
    static void c() throws MidLevelException {
        try {
            d();
        } catch(LowLevelException e) {
            throw new MidLevelException(e);
        }
    }
    static void d() throws LowLevelException {
       e();
    }
    static void e() throws LowLevelException {
        throw new LowLevelException();
    }
}

class HighLevelException extends Exception {
    HighLevelException(Throwable cause) { super(cause); }
}

class MidLevelException extends Exception {
    MidLevelException(Throwable cause)  { super(cause); }
}

class LowLevelException extends Exception {
}

As of release 7, the platform supports the notion of suppressed exceptions (in conjunction with the {@code try}-with-resources statement). Any exceptions that were suppressed in order to deliver an exception are printed out beneath the stack trace. The format of this information depends on the implementation, but the following example may be regarded as typical:
Exception in thread "main" java.lang.Exception: Something happened
 at Foo.bar(Foo.java:10)
 at Foo.main(Foo.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 0
         at Resource.close(Resource.java:26)
         at Foo.bar(Foo.java:9)
         ... 1 more

Note that the "... n more" notation is used on suppressed exceptions just at it is used on causes. Unlike causes, suppressed exceptions are indented beyond their "containing exceptions."

An exception can have both a cause and one or more suppressed exceptions:

Exception in thread "main" java.lang.Exception: Main block
 at Foo3.main(Foo3.java:7)
 Suppressed: Resource$CloseFailException: Resource ID = 2
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 1
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
Caused by: java.lang.Exception: I did it
 at Foo3.main(Foo3.java:8)

Likewise, a suppressed exception can have a cause:
Exception in thread "main" java.lang.Exception: Main block
 at Foo4.main(Foo4.java:6)
 Suppressed: Resource2$CloseFailException: Resource ID = 1
         at Resource2.close(Resource2.java:20)
         at Foo4.main(Foo4.java:5)
 Caused by: java.lang.Exception: Rats, you caught me
         at Resource2$CloseFailException.<init>(Resource2.java:45)
         ... 2 more

**Returns:** `void`

---

## VsanCnsFileBackingDetails

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |
| `capacityInMb` |  | `Number` | No |
| `backingFileId` |  | `String` | No |

## VsanCnsFileCreateSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |

## VsanCnsInCompatibleFault

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `reason` |  | `String` | No |
| `localizedMessage` | Creates a localized description of this throwable. Subclasses may override this method in order to produce a locale-specific message. For subclasses that do not override this method, the default implementation returns the same result as {@code getMessage()}. | `String` | Yes |
| `message` |  | `String` | No |

### Methods

#### `VsanCnsInCompatibleFault`


**Returns:** `void`

---

#### `printStackTrace`
Prints this throwable and its backtrace to the standard error stream. This method prints a stack trace for this {@code Throwable} object on the error output stream that is the value of the field {@code System.err}. The first line of output contains the result of the {@link #toString()} method for this object. Remaining lines represent data previously recorded by the method {@link #fillInStackTrace()}. The format of this information depends on the implementation, but the following example may be regarded as typical:
java.lang.NullPointerException
        at MyClass.mash(MyClass.java:9)
        at MyClass.crunch(MyClass.java:6)
        at MyClass.main(MyClass.java:3)

This example was produced by running the program:
class MyClass {
    public static void main(String[] args) {
        crunch(null);
    }
    static void crunch(int[] a) {
        mash(a);
    }
    static void mash(int[] b) {
        System.out.println(b[0]);
    }
}

The backtrace for a throwable with an initialized, non-null cause should generally include the backtrace for the cause. The format of this information depends on the implementation, but the following example may be regarded as typical:
HighLevelException: MidLevelException: LowLevelException
        at Junk.a(Junk.java:13)
        at Junk.main(Junk.java:4)
Caused by: MidLevelException: LowLevelException
        at Junk.c(Junk.java:23)
        at Junk.b(Junk.java:17)
        at Junk.a(Junk.java:11)
        ... 1 more
Caused by: LowLevelException
        at Junk.e(Junk.java:30)
        at Junk.d(Junk.java:27)
        at Junk.c(Junk.java:21)
        ... 3 more

Note the presence of lines containing the characters {@code "..."}. These lines indicate that the remainder of the stack trace for this exception matches the indicated number of frames from the bottom of the stack trace of the exception that was caused by this exception (the "enclosing" exception). This shorthand can greatly reduce the length of the output in the common case where a wrapped exception is thrown from same method as the "causative exception" is caught. The above example was produced by running the program:
public class Junk {
    public static void main(String args[]) {
        try {
            a();
        } catch(HighLevelException e) {
            e.printStackTrace();
        }
    }
    static void a() throws HighLevelException {
        try {
            b();
        } catch(MidLevelException e) {
            throw new HighLevelException(e);
        }
    }
    static void b() throws MidLevelException {
        c();
    }
    static void c() throws MidLevelException {
        try {
            d();
        } catch(LowLevelException e) {
            throw new MidLevelException(e);
        }
    }
    static void d() throws LowLevelException {
       e();
    }
    static void e() throws LowLevelException {
        throw new LowLevelException();
    }
}

class HighLevelException extends Exception {
    HighLevelException(Throwable cause) { super(cause); }
}

class MidLevelException extends Exception {
    MidLevelException(Throwable cause)  { super(cause); }
}

class LowLevelException extends Exception {
}

As of release 7, the platform supports the notion of suppressed exceptions (in conjunction with the {@code try}-with-resources statement). Any exceptions that were suppressed in order to deliver an exception are printed out beneath the stack trace. The format of this information depends on the implementation, but the following example may be regarded as typical:
Exception in thread "main" java.lang.Exception: Something happened
 at Foo.bar(Foo.java:10)
 at Foo.main(Foo.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 0
         at Resource.close(Resource.java:26)
         at Foo.bar(Foo.java:9)
         ... 1 more

Note that the "... n more" notation is used on suppressed exceptions just at it is used on causes. Unlike causes, suppressed exceptions are indented beyond their "containing exceptions."

An exception can have both a cause and one or more suppressed exceptions:

Exception in thread "main" java.lang.Exception: Main block
 at Foo3.main(Foo3.java:7)
 Suppressed: Resource$CloseFailException: Resource ID = 2
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 1
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
Caused by: java.lang.Exception: I did it
 at Foo3.main(Foo3.java:8)

Likewise, a suppressed exception can have a cause:
Exception in thread "main" java.lang.Exception: Main block
 at Foo4.main(Foo4.java:6)
 Suppressed: Resource2$CloseFailException: Resource ID = 1
         at Resource2.close(Resource2.java:20)
         at Foo4.main(Foo4.java:5)
 Caused by: java.lang.Exception: Rats, you caught me
         at Resource2$CloseFailException.<init>(Resource2.java:45)
         ... 2 more

**Returns:** `void`

---

## VsanCnsKubernetesEntityMetadata

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `entityName` |  | `String` | No |
| `entityType` |  | `String` | No |
| `namespace` |  | `String` | No |
| `referredEntity` |  | `Array/VsanCnsKubernetesEntityReference` | No |
| `clusterId` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `delete` |  | `Boolean` | No |

### Methods

#### `VsanCnsKubernetesEntityMetadata`


**Returns:** `void`

---

#### `isDelete`


**Returns:** `Boolean`

---

## VsanCnsKubernetesEntityReference

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `entityName` |  | `String` | No |
| `entityType` |  | `String` | No |
| `namespace` |  | `String` | No |
| `clusterId` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanCnsKubernetesEntityType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `POD` |  | `VsanCnsKubernetesEntityType` | Yes |
| `KubernetesEntityType_Unknown` |  | `VsanCnsKubernetesEntityType` | Yes |
| `PERSISTENT_VOLUME` |  | `VsanCnsKubernetesEntityType` | Yes |
| `PERSISTENT_VOLUME_CLAIM` |  | `VsanCnsKubernetesEntityType` | Yes |

## VsanCnsKubernetesQueryFilter

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `pvcNames` |  | `Array/String` | No |
| `cursor` |  | `VsanCnsCursor` | No |
| `datastoreAccessibilityStatus` |  | `String` | No |
| `complianceStatus` |  | `String` | No |
| `datastores` |  | `Array/VsanManagedObjectReference` | No |
| `containerClusterIds` |  | `Array/String` | No |
| `storagePolicyId` |  | `String` | No |
| `pvNames` |  | `Array/String` | No |
| `dynamicType` |  | `String` | No |
| `names` |  | `Array/String` | No |
| `healthStatus` |  | `String` | No |
| `podNames` |  | `Array/String` | No |
| `volumeIds` |  | `Array/VsanCnsVolumeId` | No |
| `namespaces` |  | `Array/String` | No |

## VsanCnsMissingControllerFault

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `reason` |  | `String` | No |
| `localizedMessage` | Creates a localized description of this throwable. Subclasses may override this method in order to produce a locale-specific message. For subclasses that do not override this method, the default implementation returns the same result as {@code getMessage()}. | `String` | Yes |
| `message` |  | `String` | No |

### Methods

#### `VsanCnsMissingControllerFault`


**Returns:** `void`

---

#### `VsanCnsMissingControllerFault`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `reason` | `String` |  |

**Returns:** `void`

---

#### `printStackTrace`
Prints this throwable and its backtrace to the standard error stream. This method prints a stack trace for this {@code Throwable} object on the error output stream that is the value of the field {@code System.err}. The first line of output contains the result of the {@link #toString()} method for this object. Remaining lines represent data previously recorded by the method {@link #fillInStackTrace()}. The format of this information depends on the implementation, but the following example may be regarded as typical:
java.lang.NullPointerException
        at MyClass.mash(MyClass.java:9)
        at MyClass.crunch(MyClass.java:6)
        at MyClass.main(MyClass.java:3)

This example was produced by running the program:
class MyClass {
    public static void main(String[] args) {
        crunch(null);
    }
    static void crunch(int[] a) {
        mash(a);
    }
    static void mash(int[] b) {
        System.out.println(b[0]);
    }
}

The backtrace for a throwable with an initialized, non-null cause should generally include the backtrace for the cause. The format of this information depends on the implementation, but the following example may be regarded as typical:
HighLevelException: MidLevelException: LowLevelException
        at Junk.a(Junk.java:13)
        at Junk.main(Junk.java:4)
Caused by: MidLevelException: LowLevelException
        at Junk.c(Junk.java:23)
        at Junk.b(Junk.java:17)
        at Junk.a(Junk.java:11)
        ... 1 more
Caused by: LowLevelException
        at Junk.e(Junk.java:30)
        at Junk.d(Junk.java:27)
        at Junk.c(Junk.java:21)
        ... 3 more

Note the presence of lines containing the characters {@code "..."}. These lines indicate that the remainder of the stack trace for this exception matches the indicated number of frames from the bottom of the stack trace of the exception that was caused by this exception (the "enclosing" exception). This shorthand can greatly reduce the length of the output in the common case where a wrapped exception is thrown from same method as the "causative exception" is caught. The above example was produced by running the program:
public class Junk {
    public static void main(String args[]) {
        try {
            a();
        } catch(HighLevelException e) {
            e.printStackTrace();
        }
    }
    static void a() throws HighLevelException {
        try {
            b();
        } catch(MidLevelException e) {
            throw new HighLevelException(e);
        }
    }
    static void b() throws MidLevelException {
        c();
    }
    static void c() throws MidLevelException {
        try {
            d();
        } catch(LowLevelException e) {
            throw new MidLevelException(e);
        }
    }
    static void d() throws LowLevelException {
       e();
    }
    static void e() throws LowLevelException {
        throw new LowLevelException();
    }
}

class HighLevelException extends Exception {
    HighLevelException(Throwable cause) { super(cause); }
}

class MidLevelException extends Exception {
    MidLevelException(Throwable cause)  { super(cause); }
}

class LowLevelException extends Exception {
}

As of release 7, the platform supports the notion of suppressed exceptions (in conjunction with the {@code try}-with-resources statement). Any exceptions that were suppressed in order to deliver an exception are printed out beneath the stack trace. The format of this information depends on the implementation, but the following example may be regarded as typical:
Exception in thread "main" java.lang.Exception: Something happened
 at Foo.bar(Foo.java:10)
 at Foo.main(Foo.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 0
         at Resource.close(Resource.java:26)
         at Foo.bar(Foo.java:9)
         ... 1 more

Note that the "... n more" notation is used on suppressed exceptions just at it is used on causes. Unlike causes, suppressed exceptions are indented beyond their "containing exceptions."

An exception can have both a cause and one or more suppressed exceptions:

Exception in thread "main" java.lang.Exception: Main block
 at Foo3.main(Foo3.java:7)
 Suppressed: Resource$CloseFailException: Resource ID = 2
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 1
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
Caused by: java.lang.Exception: I did it
 at Foo3.main(Foo3.java:8)

Likewise, a suppressed exception can have a cause:
Exception in thread "main" java.lang.Exception: Main block
 at Foo4.main(Foo4.java:6)
 Suppressed: Resource2$CloseFailException: Resource ID = 1
         at Resource2.close(Resource2.java:20)
         at Foo4.main(Foo4.java:5)
 Caused by: java.lang.Exception: Rats, you caught me
         at Resource2$CloseFailException.<init>(Resource2.java:45)
         ... 2 more

**Returns:** `void`

---

## VsanCnsMissingPrivilegeFault

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `privileges` |  | `Array/String` | No |
| `reason` |  | `String` | No |
| `localizedMessage` | Creates a localized description of this throwable. Subclasses may override this method in order to produce a locale-specific message. For subclasses that do not override this method, the default implementation returns the same result as {@code getMessage()}. | `String` | Yes |
| `message` |  | `String` | No |

### Methods

#### `VsanCnsMissingPrivilegeFault`


**Returns:** `void`

---

#### `VsanCnsMissingPrivilegeFault`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `reason` | `String` |  |
| `privileges` | `Array/String` |  |

**Returns:** `void`

---

#### `printStackTrace`
Prints this throwable and its backtrace to the standard error stream. This method prints a stack trace for this {@code Throwable} object on the error output stream that is the value of the field {@code System.err}. The first line of output contains the result of the {@link #toString()} method for this object. Remaining lines represent data previously recorded by the method {@link #fillInStackTrace()}. The format of this information depends on the implementation, but the following example may be regarded as typical:
java.lang.NullPointerException
        at MyClass.mash(MyClass.java:9)
        at MyClass.crunch(MyClass.java:6)
        at MyClass.main(MyClass.java:3)

This example was produced by running the program:
class MyClass {
    public static void main(String[] args) {
        crunch(null);
    }
    static void crunch(int[] a) {
        mash(a);
    }
    static void mash(int[] b) {
        System.out.println(b[0]);
    }
}

The backtrace for a throwable with an initialized, non-null cause should generally include the backtrace for the cause. The format of this information depends on the implementation, but the following example may be regarded as typical:
HighLevelException: MidLevelException: LowLevelException
        at Junk.a(Junk.java:13)
        at Junk.main(Junk.java:4)
Caused by: MidLevelException: LowLevelException
        at Junk.c(Junk.java:23)
        at Junk.b(Junk.java:17)
        at Junk.a(Junk.java:11)
        ... 1 more
Caused by: LowLevelException
        at Junk.e(Junk.java:30)
        at Junk.d(Junk.java:27)
        at Junk.c(Junk.java:21)
        ... 3 more

Note the presence of lines containing the characters {@code "..."}. These lines indicate that the remainder of the stack trace for this exception matches the indicated number of frames from the bottom of the stack trace of the exception that was caused by this exception (the "enclosing" exception). This shorthand can greatly reduce the length of the output in the common case where a wrapped exception is thrown from same method as the "causative exception" is caught. The above example was produced by running the program:
public class Junk {
    public static void main(String args[]) {
        try {
            a();
        } catch(HighLevelException e) {
            e.printStackTrace();
        }
    }
    static void a() throws HighLevelException {
        try {
            b();
        } catch(MidLevelException e) {
            throw new HighLevelException(e);
        }
    }
    static void b() throws MidLevelException {
        c();
    }
    static void c() throws MidLevelException {
        try {
            d();
        } catch(LowLevelException e) {
            throw new MidLevelException(e);
        }
    }
    static void d() throws LowLevelException {
       e();
    }
    static void e() throws LowLevelException {
        throw new LowLevelException();
    }
}

class HighLevelException extends Exception {
    HighLevelException(Throwable cause) { super(cause); }
}

class MidLevelException extends Exception {
    MidLevelException(Throwable cause)  { super(cause); }
}

class LowLevelException extends Exception {
}

As of release 7, the platform supports the notion of suppressed exceptions (in conjunction with the {@code try}-with-resources statement). Any exceptions that were suppressed in order to deliver an exception are printed out beneath the stack trace. The format of this information depends on the implementation, but the following example may be regarded as typical:
Exception in thread "main" java.lang.Exception: Something happened
 at Foo.bar(Foo.java:10)
 at Foo.main(Foo.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 0
         at Resource.close(Resource.java:26)
         at Foo.bar(Foo.java:9)
         ... 1 more

Note that the "... n more" notation is used on suppressed exceptions just at it is used on causes. Unlike causes, suppressed exceptions are indented beyond their "containing exceptions."

An exception can have both a cause and one or more suppressed exceptions:

Exception in thread "main" java.lang.Exception: Main block
 at Foo3.main(Foo3.java:7)
 Suppressed: Resource$CloseFailException: Resource ID = 2
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 1
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
Caused by: java.lang.Exception: I did it
 at Foo3.main(Foo3.java:8)

Likewise, a suppressed exception can have a cause:
Exception in thread "main" java.lang.Exception: Main block
 at Foo4.main(Foo4.java:6)
 Suppressed: Resource2$CloseFailException: Resource ID = 1
         at Resource2.close(Resource2.java:20)
         at Foo4.main(Foo4.java:5)
 Caused by: java.lang.Exception: Rats, you caught me
         at Resource2$CloseFailException.<init>(Resource2.java:45)
         ... 2 more

**Returns:** `void`

---

## VsanCnsNFSAccessControlSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `netPermission` |  | `VsanVsanFileShareNetPermission` | No |
| `dynamicType` |  | `String` | No |
| `delete` |  | `Boolean` | No |

### Methods

#### `VsanCnsNFSAccessControlSpec`


**Returns:** `void`

---

#### `VsanCnsNFSAccessControlSpec`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `netPermission` | `VsanVsanFileShareNetPermission` |  |
| `delete` | `Boolean` |  |

**Returns:** `void`

---

#### `isDelete`


**Returns:** `Boolean`

---

## VsanCnsNotRegisteredFault

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `reason` |  | `String` | No |
| `localizedMessage` | Creates a localized description of this throwable. Subclasses may override this method in order to produce a locale-specific message. For subclasses that do not override this method, the default implementation returns the same result as {@code getMessage()}. | `String` | Yes |
| `volumeId` |  | `VsanCnsVolumeId` | No |
| `message` |  | `String` | No |

### Methods

#### `VsanCnsNotRegisteredFault`


**Returns:** `void`

---

#### `VsanCnsNotRegisteredFault`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `reason` | `String` |  |
| `volumeId` | `VsanCnsVolumeId` |  |

**Returns:** `void`

---

#### `printStackTrace`
Prints this throwable and its backtrace to the standard error stream. This method prints a stack trace for this {@code Throwable} object on the error output stream that is the value of the field {@code System.err}. The first line of output contains the result of the {@link #toString()} method for this object. Remaining lines represent data previously recorded by the method {@link #fillInStackTrace()}. The format of this information depends on the implementation, but the following example may be regarded as typical:
java.lang.NullPointerException
        at MyClass.mash(MyClass.java:9)
        at MyClass.crunch(MyClass.java:6)
        at MyClass.main(MyClass.java:3)

This example was produced by running the program:
class MyClass {
    public static void main(String[] args) {
        crunch(null);
    }
    static void crunch(int[] a) {
        mash(a);
    }
    static void mash(int[] b) {
        System.out.println(b[0]);
    }
}

The backtrace for a throwable with an initialized, non-null cause should generally include the backtrace for the cause. The format of this information depends on the implementation, but the following example may be regarded as typical:
HighLevelException: MidLevelException: LowLevelException
        at Junk.a(Junk.java:13)
        at Junk.main(Junk.java:4)
Caused by: MidLevelException: LowLevelException
        at Junk.c(Junk.java:23)
        at Junk.b(Junk.java:17)
        at Junk.a(Junk.java:11)
        ... 1 more
Caused by: LowLevelException
        at Junk.e(Junk.java:30)
        at Junk.d(Junk.java:27)
        at Junk.c(Junk.java:21)
        ... 3 more

Note the presence of lines containing the characters {@code "..."}. These lines indicate that the remainder of the stack trace for this exception matches the indicated number of frames from the bottom of the stack trace of the exception that was caused by this exception (the "enclosing" exception). This shorthand can greatly reduce the length of the output in the common case where a wrapped exception is thrown from same method as the "causative exception" is caught. The above example was produced by running the program:
public class Junk {
    public static void main(String args[]) {
        try {
            a();
        } catch(HighLevelException e) {
            e.printStackTrace();
        }
    }
    static void a() throws HighLevelException {
        try {
            b();
        } catch(MidLevelException e) {
            throw new HighLevelException(e);
        }
    }
    static void b() throws MidLevelException {
        c();
    }
    static void c() throws MidLevelException {
        try {
            d();
        } catch(LowLevelException e) {
            throw new MidLevelException(e);
        }
    }
    static void d() throws LowLevelException {
       e();
    }
    static void e() throws LowLevelException {
        throw new LowLevelException();
    }
}

class HighLevelException extends Exception {
    HighLevelException(Throwable cause) { super(cause); }
}

class MidLevelException extends Exception {
    MidLevelException(Throwable cause)  { super(cause); }
}

class LowLevelException extends Exception {
}

As of release 7, the platform supports the notion of suppressed exceptions (in conjunction with the {@code try}-with-resources statement). Any exceptions that were suppressed in order to deliver an exception are printed out beneath the stack trace. The format of this information depends on the implementation, but the following example may be regarded as typical:
Exception in thread "main" java.lang.Exception: Something happened
 at Foo.bar(Foo.java:10)
 at Foo.main(Foo.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 0
         at Resource.close(Resource.java:26)
         at Foo.bar(Foo.java:9)
         ... 1 more

Note that the "... n more" notation is used on suppressed exceptions just at it is used on causes. Unlike causes, suppressed exceptions are indented beyond their "containing exceptions."

An exception can have both a cause and one or more suppressed exceptions:

Exception in thread "main" java.lang.Exception: Main block
 at Foo3.main(Foo3.java:7)
 Suppressed: Resource$CloseFailException: Resource ID = 2
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 1
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
Caused by: java.lang.Exception: I did it
 at Foo3.main(Foo3.java:8)

Likewise, a suppressed exception can have a cause:
Exception in thread "main" java.lang.Exception: Main block
 at Foo4.main(Foo4.java:6)
 Suppressed: Resource2$CloseFailException: Resource ID = 1
         at Resource2.close(Resource2.java:20)
         at Foo4.main(Foo4.java:5)
 Caused by: java.lang.Exception: Rats, you caught me
         at Resource2$CloseFailException.<init>(Resource2.java:45)
         ... 2 more

**Returns:** `void`

---

## VsanCnsPlacementFault

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `reason` |  | `String` | No |
| `localizedMessage` | Creates a localized description of this throwable. Subclasses may override this method in order to produce a locale-specific message. For subclasses that do not override this method, the default implementation returns the same result as {@code getMessage()}. | `String` | Yes |
| `message` |  | `String` | No |

### Methods

#### `VsanCnsPlacementFault`


**Returns:** `void`

---

#### `VsanCnsPlacementFault`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `reason` | `String` |  |

**Returns:** `void`

---

#### `printStackTrace`
Prints this throwable and its backtrace to the standard error stream. This method prints a stack trace for this {@code Throwable} object on the error output stream that is the value of the field {@code System.err}. The first line of output contains the result of the {@link #toString()} method for this object. Remaining lines represent data previously recorded by the method {@link #fillInStackTrace()}. The format of this information depends on the implementation, but the following example may be regarded as typical:
java.lang.NullPointerException
        at MyClass.mash(MyClass.java:9)
        at MyClass.crunch(MyClass.java:6)
        at MyClass.main(MyClass.java:3)

This example was produced by running the program:
class MyClass {
    public static void main(String[] args) {
        crunch(null);
    }
    static void crunch(int[] a) {
        mash(a);
    }
    static void mash(int[] b) {
        System.out.println(b[0]);
    }
}

The backtrace for a throwable with an initialized, non-null cause should generally include the backtrace for the cause. The format of this information depends on the implementation, but the following example may be regarded as typical:
HighLevelException: MidLevelException: LowLevelException
        at Junk.a(Junk.java:13)
        at Junk.main(Junk.java:4)
Caused by: MidLevelException: LowLevelException
        at Junk.c(Junk.java:23)
        at Junk.b(Junk.java:17)
        at Junk.a(Junk.java:11)
        ... 1 more
Caused by: LowLevelException
        at Junk.e(Junk.java:30)
        at Junk.d(Junk.java:27)
        at Junk.c(Junk.java:21)
        ... 3 more

Note the presence of lines containing the characters {@code "..."}. These lines indicate that the remainder of the stack trace for this exception matches the indicated number of frames from the bottom of the stack trace of the exception that was caused by this exception (the "enclosing" exception). This shorthand can greatly reduce the length of the output in the common case where a wrapped exception is thrown from same method as the "causative exception" is caught. The above example was produced by running the program:
public class Junk {
    public static void main(String args[]) {
        try {
            a();
        } catch(HighLevelException e) {
            e.printStackTrace();
        }
    }
    static void a() throws HighLevelException {
        try {
            b();
        } catch(MidLevelException e) {
            throw new HighLevelException(e);
        }
    }
    static void b() throws MidLevelException {
        c();
    }
    static void c() throws MidLevelException {
        try {
            d();
        } catch(LowLevelException e) {
            throw new MidLevelException(e);
        }
    }
    static void d() throws LowLevelException {
       e();
    }
    static void e() throws LowLevelException {
        throw new LowLevelException();
    }
}

class HighLevelException extends Exception {
    HighLevelException(Throwable cause) { super(cause); }
}

class MidLevelException extends Exception {
    MidLevelException(Throwable cause)  { super(cause); }
}

class LowLevelException extends Exception {
}

As of release 7, the platform supports the notion of suppressed exceptions (in conjunction with the {@code try}-with-resources statement). Any exceptions that were suppressed in order to deliver an exception are printed out beneath the stack trace. The format of this information depends on the implementation, but the following example may be regarded as typical:
Exception in thread "main" java.lang.Exception: Something happened
 at Foo.bar(Foo.java:10)
 at Foo.main(Foo.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 0
         at Resource.close(Resource.java:26)
         at Foo.bar(Foo.java:9)
         ... 1 more

Note that the "... n more" notation is used on suppressed exceptions just at it is used on causes. Unlike causes, suppressed exceptions are indented beyond their "containing exceptions."

An exception can have both a cause and one or more suppressed exceptions:

Exception in thread "main" java.lang.Exception: Main block
 at Foo3.main(Foo3.java:7)
 Suppressed: Resource$CloseFailException: Resource ID = 2
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 1
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
Caused by: java.lang.Exception: I did it
 at Foo3.main(Foo3.java:8)

Likewise, a suppressed exception can have a cause:
Exception in thread "main" java.lang.Exception: Main block
 at Foo4.main(Foo4.java:6)
 Suppressed: Resource2$CloseFailException: Resource ID = 1
         at Resource2.close(Resource2.java:20)
         at Foo4.main(Foo4.java:5)
 Caused by: java.lang.Exception: Rats, you caught me
         at Resource2$CloseFailException.<init>(Resource2.java:45)
         ... 2 more

**Returns:** `void`

---

## VsanCnsPlacementResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `datastore` |  | `VsanManagedObjectReference` | No |
| `dynamicType` |  | `String` | No |

## VsanCnsQueryFilter

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `cursor` |  | `VsanCnsCursor` | No |
| `datastoreAccessibilityStatus` |  | `String` | No |
| `names` |  | `Array/String` | No |
| `healthStatus` |  | `String` | No |
| `complianceStatus` |  | `String` | No |
| `volumeIds` |  | `Array/VsanCnsVolumeId` | No |
| `containerClusterIds` |  | `Array/String` | No |
| `datastores` |  | `Array/VsanManagedObjectReference` | No |
| `storagePolicyId` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanCnsQueryMetricFilter

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `metricType` |  | `Array/String` | No |
| `dynamicType` |  | `String` | No |

## VsanCnsQueryResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `cursor` |  | `VsanCnsCursor` | No |
| `volumes` |  | `Array/VsanCnsVolume` | No |
| `dynamicType` |  | `String` | No |

## VsanCnsQuerySelection

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `names` |  | `Array/String` | No |
| `dynamicType` |  | `String` | No |

## VsanCnsQueryVolumeInfoResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `volumeId` |  | `VsanCnsVolumeId` | No |
| `volumeInfo` |  | `VsanCnsVolumeInfo` | No |
| `dynamicType` |  | `String` | No |

## VsanCnsRankedLowerFault

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `reason` |  | `String` | No |
| `localizedMessage` | Creates a localized description of this throwable. Subclasses may override this method in order to produce a locale-specific message. For subclasses that do not override this method, the default implementation returns the same result as {@code getMessage()}. | `String` | Yes |
| `message` |  | `String` | No |

### Methods

#### `VsanCnsRankedLowerFault`


**Returns:** `void`

---

#### `VsanCnsRankedLowerFault`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `reason` | `String` |  |

**Returns:** `void`

---

#### `printStackTrace`
Prints this throwable and its backtrace to the standard error stream. This method prints a stack trace for this {@code Throwable} object on the error output stream that is the value of the field {@code System.err}. The first line of output contains the result of the {@link #toString()} method for this object. Remaining lines represent data previously recorded by the method {@link #fillInStackTrace()}. The format of this information depends on the implementation, but the following example may be regarded as typical:
java.lang.NullPointerException
        at MyClass.mash(MyClass.java:9)
        at MyClass.crunch(MyClass.java:6)
        at MyClass.main(MyClass.java:3)

This example was produced by running the program:
class MyClass {
    public static void main(String[] args) {
        crunch(null);
    }
    static void crunch(int[] a) {
        mash(a);
    }
    static void mash(int[] b) {
        System.out.println(b[0]);
    }
}

The backtrace for a throwable with an initialized, non-null cause should generally include the backtrace for the cause. The format of this information depends on the implementation, but the following example may be regarded as typical:
HighLevelException: MidLevelException: LowLevelException
        at Junk.a(Junk.java:13)
        at Junk.main(Junk.java:4)
Caused by: MidLevelException: LowLevelException
        at Junk.c(Junk.java:23)
        at Junk.b(Junk.java:17)
        at Junk.a(Junk.java:11)
        ... 1 more
Caused by: LowLevelException
        at Junk.e(Junk.java:30)
        at Junk.d(Junk.java:27)
        at Junk.c(Junk.java:21)
        ... 3 more

Note the presence of lines containing the characters {@code "..."}. These lines indicate that the remainder of the stack trace for this exception matches the indicated number of frames from the bottom of the stack trace of the exception that was caused by this exception (the "enclosing" exception). This shorthand can greatly reduce the length of the output in the common case where a wrapped exception is thrown from same method as the "causative exception" is caught. The above example was produced by running the program:
public class Junk {
    public static void main(String args[]) {
        try {
            a();
        } catch(HighLevelException e) {
            e.printStackTrace();
        }
    }
    static void a() throws HighLevelException {
        try {
            b();
        } catch(MidLevelException e) {
            throw new HighLevelException(e);
        }
    }
    static void b() throws MidLevelException {
        c();
    }
    static void c() throws MidLevelException {
        try {
            d();
        } catch(LowLevelException e) {
            throw new MidLevelException(e);
        }
    }
    static void d() throws LowLevelException {
       e();
    }
    static void e() throws LowLevelException {
        throw new LowLevelException();
    }
}

class HighLevelException extends Exception {
    HighLevelException(Throwable cause) { super(cause); }
}

class MidLevelException extends Exception {
    MidLevelException(Throwable cause)  { super(cause); }
}

class LowLevelException extends Exception {
}

As of release 7, the platform supports the notion of suppressed exceptions (in conjunction with the {@code try}-with-resources statement). Any exceptions that were suppressed in order to deliver an exception are printed out beneath the stack trace. The format of this information depends on the implementation, but the following example may be regarded as typical:
Exception in thread "main" java.lang.Exception: Something happened
 at Foo.bar(Foo.java:10)
 at Foo.main(Foo.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 0
         at Resource.close(Resource.java:26)
         at Foo.bar(Foo.java:9)
         ... 1 more

Note that the "... n more" notation is used on suppressed exceptions just at it is used on causes. Unlike causes, suppressed exceptions are indented beyond their "containing exceptions."

An exception can have both a cause and one or more suppressed exceptions:

Exception in thread "main" java.lang.Exception: Main block
 at Foo3.main(Foo3.java:7)
 Suppressed: Resource$CloseFailException: Resource ID = 2
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 1
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
Caused by: java.lang.Exception: I did it
 at Foo3.main(Foo3.java:8)

Likewise, a suppressed exception can have a cause:
Exception in thread "main" java.lang.Exception: Main block
 at Foo4.main(Foo4.java:6)
 Suppressed: Resource2$CloseFailException: Resource ID = 1
         at Resource2.close(Resource2.java:20)
         at Foo4.main(Foo4.java:5)
 Caused by: java.lang.Exception: Rats, you caught me
         at Resource2$CloseFailException.<init>(Resource2.java:45)
         ... 2 more

**Returns:** `void`

---

## VsanCnsSearchLabelResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `hasMoreResults` |  | `Boolean` | No |
| `dynamicType` |  | `String` | No |

## VsanCnsSearchLabelSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `valuePrefix` |  | `String` | No |
| `maxNumberOfResults` |  | `Number` | No |
| `dynamicType` |  | `String` | No |
| `keyPrefix` |  | `String` | No |

## VsanCnsSnapshot

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `backingObjectId` |  | `String` | No |
| `snapshotId` |  | `VsanCnsSnapshotId` | No |
| `createTime` |  | `Date` | No |
| `volumeId` |  | `VsanCnsVolumeId` | No |
| `description` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanCnsSnapshotCreatedFault

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `reason` |  | `String` | No |
| `snapshotId` |  | `VsanCnsSnapshotId` | No |
| `localizedMessage` | Creates a localized description of this throwable. Subclasses may override this method in order to produce a locale-specific message. For subclasses that do not override this method, the default implementation returns the same result as {@code getMessage()}. | `String` | Yes |
| `datastore` |  | `VsanManagedObjectReference` | No |
| `volumeId` |  | `VsanCnsVolumeId` | No |
| `message` |  | `String` | No |

### Methods

#### `VsanCnsSnapshotCreatedFault`


**Returns:** `void`

---

#### `VsanCnsSnapshotCreatedFault`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `reason` | `String` |  |
| `volumeId` | `VsanCnsVolumeId` |  |
| `datastore` | `VsanManagedObjectReference` |  |
| `SnapshotId` | `VsanCnsSnapshotId` |  |

**Returns:** `void`

---

#### `printStackTrace`
Prints this throwable and its backtrace to the standard error stream. This method prints a stack trace for this {@code Throwable} object on the error output stream that is the value of the field {@code System.err}. The first line of output contains the result of the {@link #toString()} method for this object. Remaining lines represent data previously recorded by the method {@link #fillInStackTrace()}. The format of this information depends on the implementation, but the following example may be regarded as typical:
java.lang.NullPointerException
        at MyClass.mash(MyClass.java:9)
        at MyClass.crunch(MyClass.java:6)
        at MyClass.main(MyClass.java:3)

This example was produced by running the program:
class MyClass {
    public static void main(String[] args) {
        crunch(null);
    }
    static void crunch(int[] a) {
        mash(a);
    }
    static void mash(int[] b) {
        System.out.println(b[0]);
    }
}

The backtrace for a throwable with an initialized, non-null cause should generally include the backtrace for the cause. The format of this information depends on the implementation, but the following example may be regarded as typical:
HighLevelException: MidLevelException: LowLevelException
        at Junk.a(Junk.java:13)
        at Junk.main(Junk.java:4)
Caused by: MidLevelException: LowLevelException
        at Junk.c(Junk.java:23)
        at Junk.b(Junk.java:17)
        at Junk.a(Junk.java:11)
        ... 1 more
Caused by: LowLevelException
        at Junk.e(Junk.java:30)
        at Junk.d(Junk.java:27)
        at Junk.c(Junk.java:21)
        ... 3 more

Note the presence of lines containing the characters {@code "..."}. These lines indicate that the remainder of the stack trace for this exception matches the indicated number of frames from the bottom of the stack trace of the exception that was caused by this exception (the "enclosing" exception). This shorthand can greatly reduce the length of the output in the common case where a wrapped exception is thrown from same method as the "causative exception" is caught. The above example was produced by running the program:
public class Junk {
    public static void main(String args[]) {
        try {
            a();
        } catch(HighLevelException e) {
            e.printStackTrace();
        }
    }
    static void a() throws HighLevelException {
        try {
            b();
        } catch(MidLevelException e) {
            throw new HighLevelException(e);
        }
    }
    static void b() throws MidLevelException {
        c();
    }
    static void c() throws MidLevelException {
        try {
            d();
        } catch(LowLevelException e) {
            throw new MidLevelException(e);
        }
    }
    static void d() throws LowLevelException {
       e();
    }
    static void e() throws LowLevelException {
        throw new LowLevelException();
    }
}

class HighLevelException extends Exception {
    HighLevelException(Throwable cause) { super(cause); }
}

class MidLevelException extends Exception {
    MidLevelException(Throwable cause)  { super(cause); }
}

class LowLevelException extends Exception {
}

As of release 7, the platform supports the notion of suppressed exceptions (in conjunction with the {@code try}-with-resources statement). Any exceptions that were suppressed in order to deliver an exception are printed out beneath the stack trace. The format of this information depends on the implementation, but the following example may be regarded as typical:
Exception in thread "main" java.lang.Exception: Something happened
 at Foo.bar(Foo.java:10)
 at Foo.main(Foo.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 0
         at Resource.close(Resource.java:26)
         at Foo.bar(Foo.java:9)
         ... 1 more

Note that the "... n more" notation is used on suppressed exceptions just at it is used on causes. Unlike causes, suppressed exceptions are indented beyond their "containing exceptions."

An exception can have both a cause and one or more suppressed exceptions:

Exception in thread "main" java.lang.Exception: Main block
 at Foo3.main(Foo3.java:7)
 Suppressed: Resource$CloseFailException: Resource ID = 2
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 1
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
Caused by: java.lang.Exception: I did it
 at Foo3.main(Foo3.java:8)

Likewise, a suppressed exception can have a cause:
Exception in thread "main" java.lang.Exception: Main block
 at Foo4.main(Foo4.java:6)
 Suppressed: Resource2$CloseFailException: Resource ID = 1
         at Resource2.close(Resource2.java:20)
         at Foo4.main(Foo4.java:5)
 Caused by: java.lang.Exception: Rats, you caught me
         at Resource2$CloseFailException.<init>(Resource2.java:45)
         ... 2 more

**Returns:** `void`

---

## VsanCnsSnapshotCreateResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `aggregatedSnapshotCapacityInMb` |  | `Number` | No |
| `volumeId` |  | `VsanCnsVolumeId` | No |
| `dynamicType` |  | `String` | No |
| `snapshot` |  | `VsanCnsSnapshot` | No |

## VsanCnsSnapshotCreateSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `volumeId` |  | `VsanCnsVolumeId` | No |
| `description` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanCnsSnapshotDeleteResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `snapshotId` |  | `VsanCnsSnapshotId` | No |
| `aggregatedSnapshotCapacityInMb` |  | `Number` | No |
| `volumeId` |  | `VsanCnsVolumeId` | No |
| `dynamicType` |  | `String` | No |

## VsanCnsSnapshotDeleteSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `snapshotId` |  | `VsanCnsSnapshotId` | No |
| `volumeId` |  | `VsanCnsVolumeId` | No |
| `dynamicType` |  | `String` | No |

## VsanCnsSnapshotId

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `id` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanCnsSnapshotNotFoundFault

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `reason` |  | `String` | No |
| `snapshotId` |  | `VsanCnsSnapshotId` | No |
| `localizedMessage` | Creates a localized description of this throwable. Subclasses may override this method in order to produce a locale-specific message. For subclasses that do not override this method, the default implementation returns the same result as {@code getMessage()}. | `String` | Yes |
| `volumeId` |  | `VsanCnsVolumeId` | No |
| `message` |  | `String` | No |

### Methods

#### `VsanCnsSnapshotNotFoundFault`


**Returns:** `void`

---

#### `VsanCnsSnapshotNotFoundFault`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `reason` | `String` |  |
| `volumeId` | `VsanCnsVolumeId` |  |
| `SnapshotId` | `VsanCnsSnapshotId` |  |

**Returns:** `void`

---

#### `printStackTrace`
Prints this throwable and its backtrace to the standard error stream. This method prints a stack trace for this {@code Throwable} object on the error output stream that is the value of the field {@code System.err}. The first line of output contains the result of the {@link #toString()} method for this object. Remaining lines represent data previously recorded by the method {@link #fillInStackTrace()}. The format of this information depends on the implementation, but the following example may be regarded as typical:
java.lang.NullPointerException
        at MyClass.mash(MyClass.java:9)
        at MyClass.crunch(MyClass.java:6)
        at MyClass.main(MyClass.java:3)

This example was produced by running the program:
class MyClass {
    public static void main(String[] args) {
        crunch(null);
    }
    static void crunch(int[] a) {
        mash(a);
    }
    static void mash(int[] b) {
        System.out.println(b[0]);
    }
}

The backtrace for a throwable with an initialized, non-null cause should generally include the backtrace for the cause. The format of this information depends on the implementation, but the following example may be regarded as typical:
HighLevelException: MidLevelException: LowLevelException
        at Junk.a(Junk.java:13)
        at Junk.main(Junk.java:4)
Caused by: MidLevelException: LowLevelException
        at Junk.c(Junk.java:23)
        at Junk.b(Junk.java:17)
        at Junk.a(Junk.java:11)
        ... 1 more
Caused by: LowLevelException
        at Junk.e(Junk.java:30)
        at Junk.d(Junk.java:27)
        at Junk.c(Junk.java:21)
        ... 3 more

Note the presence of lines containing the characters {@code "..."}. These lines indicate that the remainder of the stack trace for this exception matches the indicated number of frames from the bottom of the stack trace of the exception that was caused by this exception (the "enclosing" exception). This shorthand can greatly reduce the length of the output in the common case where a wrapped exception is thrown from same method as the "causative exception" is caught. The above example was produced by running the program:
public class Junk {
    public static void main(String args[]) {
        try {
            a();
        } catch(HighLevelException e) {
            e.printStackTrace();
        }
    }
    static void a() throws HighLevelException {
        try {
            b();
        } catch(MidLevelException e) {
            throw new HighLevelException(e);
        }
    }
    static void b() throws MidLevelException {
        c();
    }
    static void c() throws MidLevelException {
        try {
            d();
        } catch(LowLevelException e) {
            throw new MidLevelException(e);
        }
    }
    static void d() throws LowLevelException {
       e();
    }
    static void e() throws LowLevelException {
        throw new LowLevelException();
    }
}

class HighLevelException extends Exception {
    HighLevelException(Throwable cause) { super(cause); }
}

class MidLevelException extends Exception {
    MidLevelException(Throwable cause)  { super(cause); }
}

class LowLevelException extends Exception {
}

As of release 7, the platform supports the notion of suppressed exceptions (in conjunction with the {@code try}-with-resources statement). Any exceptions that were suppressed in order to deliver an exception are printed out beneath the stack trace. The format of this information depends on the implementation, but the following example may be regarded as typical:
Exception in thread "main" java.lang.Exception: Something happened
 at Foo.bar(Foo.java:10)
 at Foo.main(Foo.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 0
         at Resource.close(Resource.java:26)
         at Foo.bar(Foo.java:9)
         ... 1 more

Note that the "... n more" notation is used on suppressed exceptions just at it is used on causes. Unlike causes, suppressed exceptions are indented beyond their "containing exceptions."

An exception can have both a cause and one or more suppressed exceptions:

Exception in thread "main" java.lang.Exception: Main block
 at Foo3.main(Foo3.java:7)
 Suppressed: Resource$CloseFailException: Resource ID = 2
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 1
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
Caused by: java.lang.Exception: I did it
 at Foo3.main(Foo3.java:8)

Likewise, a suppressed exception can have a cause:
Exception in thread "main" java.lang.Exception: Main block
 at Foo4.main(Foo4.java:6)
 Suppressed: Resource2$CloseFailException: Resource ID = 1
         at Resource2.close(Resource2.java:20)
         at Foo4.main(Foo4.java:5)
 Caused by: java.lang.Exception: Rats, you caught me
         at Resource2$CloseFailException.<init>(Resource2.java:45)
         ... 2 more

**Returns:** `void`

---

## VsanCnsSnapshotOperationResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `volumeId` |  | `VsanCnsVolumeId` | No |
| `dynamicType` |  | `String` | No |

## VsanCnsSnapshotQueryFilter

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `cursor` |  | `VsanCnsCursor` | No |
| `snapshotQuerySpecs` |  | `Array/VsanCnsSnapshotQuerySpec` | No |
| `dynamicType` |  | `String` | No |

## VsanCnsSnapshotQueryResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `cursor` |  | `VsanCnsCursor` | No |
| `entries` |  | `Array/VsanCnsSnapshotQueryResultEntry` | No |
| `dynamicType` |  | `String` | No |

## VsanCnsSnapshotQueryResultEntry

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |
| `snapshot` |  | `VsanCnsSnapshot` | No |

## VsanCnsSnapshotQuerySpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `snapshotId` |  | `VsanCnsSnapshotId` | No |
| `volumeId` |  | `VsanCnsVolumeId` | No |
| `dynamicType` |  | `String` | No |

## VsanCnsSnapshotVolumeSource

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `snapshotId` |  | `VsanCnsSnapshotId` | No |
| `volumeId` |  | `VsanCnsVolumeId` | No |
| `dynamicType` |  | `String` | No |

## VsanCnsStoreFault

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `reason` |  | `String` | No |
| `localizedMessage` | Creates a localized description of this throwable. Subclasses may override this method in order to produce a locale-specific message. For subclasses that do not override this method, the default implementation returns the same result as {@code getMessage()}. | `String` | Yes |
| `message` |  | `String` | No |

### Methods

#### `VsanCnsStoreFault`


**Returns:** `void`

---

#### `VsanCnsStoreFault`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `reason` | `String` |  |

**Returns:** `void`

---

#### `printStackTrace`
Prints this throwable and its backtrace to the standard error stream. This method prints a stack trace for this {@code Throwable} object on the error output stream that is the value of the field {@code System.err}. The first line of output contains the result of the {@link #toString()} method for this object. Remaining lines represent data previously recorded by the method {@link #fillInStackTrace()}. The format of this information depends on the implementation, but the following example may be regarded as typical:
java.lang.NullPointerException
        at MyClass.mash(MyClass.java:9)
        at MyClass.crunch(MyClass.java:6)
        at MyClass.main(MyClass.java:3)

This example was produced by running the program:
class MyClass {
    public static void main(String[] args) {
        crunch(null);
    }
    static void crunch(int[] a) {
        mash(a);
    }
    static void mash(int[] b) {
        System.out.println(b[0]);
    }
}

The backtrace for a throwable with an initialized, non-null cause should generally include the backtrace for the cause. The format of this information depends on the implementation, but the following example may be regarded as typical:
HighLevelException: MidLevelException: LowLevelException
        at Junk.a(Junk.java:13)
        at Junk.main(Junk.java:4)
Caused by: MidLevelException: LowLevelException
        at Junk.c(Junk.java:23)
        at Junk.b(Junk.java:17)
        at Junk.a(Junk.java:11)
        ... 1 more
Caused by: LowLevelException
        at Junk.e(Junk.java:30)
        at Junk.d(Junk.java:27)
        at Junk.c(Junk.java:21)
        ... 3 more

Note the presence of lines containing the characters {@code "..."}. These lines indicate that the remainder of the stack trace for this exception matches the indicated number of frames from the bottom of the stack trace of the exception that was caused by this exception (the "enclosing" exception). This shorthand can greatly reduce the length of the output in the common case where a wrapped exception is thrown from same method as the "causative exception" is caught. The above example was produced by running the program:
public class Junk {
    public static void main(String args[]) {
        try {
            a();
        } catch(HighLevelException e) {
            e.printStackTrace();
        }
    }
    static void a() throws HighLevelException {
        try {
            b();
        } catch(MidLevelException e) {
            throw new HighLevelException(e);
        }
    }
    static void b() throws MidLevelException {
        c();
    }
    static void c() throws MidLevelException {
        try {
            d();
        } catch(LowLevelException e) {
            throw new MidLevelException(e);
        }
    }
    static void d() throws LowLevelException {
       e();
    }
    static void e() throws LowLevelException {
        throw new LowLevelException();
    }
}

class HighLevelException extends Exception {
    HighLevelException(Throwable cause) { super(cause); }
}

class MidLevelException extends Exception {
    MidLevelException(Throwable cause)  { super(cause); }
}

class LowLevelException extends Exception {
}

As of release 7, the platform supports the notion of suppressed exceptions (in conjunction with the {@code try}-with-resources statement). Any exceptions that were suppressed in order to deliver an exception are printed out beneath the stack trace. The format of this information depends on the implementation, but the following example may be regarded as typical:
Exception in thread "main" java.lang.Exception: Something happened
 at Foo.bar(Foo.java:10)
 at Foo.main(Foo.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 0
         at Resource.close(Resource.java:26)
         at Foo.bar(Foo.java:9)
         ... 1 more

Note that the "... n more" notation is used on suppressed exceptions just at it is used on causes. Unlike causes, suppressed exceptions are indented beyond their "containing exceptions."

An exception can have both a cause and one or more suppressed exceptions:

Exception in thread "main" java.lang.Exception: Main block
 at Foo3.main(Foo3.java:7)
 Suppressed: Resource$CloseFailException: Resource ID = 2
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 1
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
Caused by: java.lang.Exception: I did it
 at Foo3.main(Foo3.java:8)

Likewise, a suppressed exception can have a cause:
Exception in thread "main" java.lang.Exception: Main block
 at Foo4.main(Foo4.java:6)
 Suppressed: Resource2$CloseFailException: Resource ID = 1
         at Resource2.close(Resource2.java:20)
         at Foo4.main(Foo4.java:5)
 Caused by: java.lang.Exception: Rats, you caught me
         at Resource2$CloseFailException.<init>(Resource2.java:45)
         ... 2 more

**Returns:** `void`

---

## VsanCnsVolume

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `volumeType` |  | `String` | No |
| `datastoreAccessibilityStatus` |  | `String` | No |
| `metadata` |  | `VsanCnsVolumeMetadata` | No |
| `datastoreUrl` |  | `String` | No |
| `healthStatus` |  | `String` | No |
| `name` |  | `String` | No |
| `volumeId` |  | `VsanCnsVolumeId` | No |
| `complianceStatus` |  | `String` | No |
| `backingObjectDetails` |  | `VsanCnsBackingObjectDetails` | No |
| `storagePolicyId` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanCnsVolumeACLConfigureSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `volumeId` |  | `VsanCnsVolumeId` | No |
| `dynamicType` |  | `String` | No |
| `accessControlSpecList` |  | `Array/VsanCnsAccessControlSpec` | No |

## VsanCnsVolumeAttachDetachSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `vm` |  | `VsanManagedObjectReference` | No |
| `volumeId` |  | `VsanCnsVolumeId` | No |
| `dynamicType` |  | `String` | No |

## VsanCnsVolumeAttachResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `diskUUID` |  | `String` | No |
| `volumeId` |  | `VsanCnsVolumeId` | No |
| `dynamicType` |  | `String` | No |

## VsanCnsVolumeCreateResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` |  | `String` | No |
| `volumeId` |  | `VsanCnsVolumeId` | No |
| `placementResults` |  | `Array/VsanCnsPlacementResult` | No |
| `dynamicType` |  | `String` | No |

## VsanCnsVolumeCreateSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `volumeType` |  | `String` | No |
| `metadata` |  | `VsanCnsVolumeMetadata` | No |
| `profile` |  | `Array/VsanVirtualMachineProfileSpec` | No |
| `name` |  | `String` | No |
| `backingObjectDetails` |  | `VsanCnsBackingObjectDetails` | No |
| `datastores` |  | `Array/VsanManagedObjectReference` | No |
| `createSpec` |  | `VsanCnsBaseCreateSpec` | No |
| `dynamicType` |  | `String` | No |
| `volumeSource` |  | `VsanCnsVolumeSource` | No |

## VsanCnsVolumeExtendSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `volumeId` |  | `VsanCnsVolumeId` | No |
| `dynamicType` |  | `String` | No |
| `capacityInMb` |  | `Number` | No |

## VsanCnsVolumeId

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `id` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanCnsVolumeInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |

## VsanCnsVolumeManager

### Methods

#### `cnsGetLastFullSyncTime`


**Returns:** `Date`

---

#### `cnsSearchLabels`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanCnsSearchLabelSpec` |  |

**Returns:** `VsanCnsSearchLabelResult`

---

#### `_getRef`


**Returns:** `VsanManagedObjectReference`

---

#### `cnsAttachVolume`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/VsanCnsVolumeAttachDetachSpec` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `cnsQueryMetrics`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanCnsQueryMetricFilter` |  |
| `arg1` | `String` |  |

**Returns:** `String`

---

#### `cnsQuerySnapshots`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanCnsSnapshotQueryFilter` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `cnsExtendVolume`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/VsanCnsVolumeExtendSpec` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `cnsUpdateVolumeMetadata`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/VsanCnsVolumeMetadataUpdateSpec` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `cnsQueryVolumeInfo`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/VsanCnsVolumeId` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `cnsQueryAsync`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanCnsQueryFilter` |  |
| `arg1` | `VsanCnsQuerySelection` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `cnsQueryVolume`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanCnsQueryFilter` |  |
| `arg1` | `VsanCnsQuerySelection` |  |

**Returns:** `VsanCnsQueryResult`

---

#### `cnsDetachVolume`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/VsanCnsVolumeAttachDetachSpec` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `cnsTriggerFullSync`


**Returns:** `void`

---

#### `cnsCreateVolume`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/VsanCnsVolumeCreateSpec` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `cnsDeleteVolume`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/VsanCnsVolumeId` |  |
| `arg1` | `Boolean` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `cnsRelocateVolume`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/VsanCnsVolumeRelocateSpec` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `cnsDeleteSnapshots`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/VsanCnsSnapshotDeleteSpec` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `cnsReconfigVolumePolicy`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/VsanCnsVolumePolicyReconfigSpec` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `cnsConfigureVolumeACLs`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/VsanCnsVolumeACLConfigureSpec` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `cnsCreateSnapshots`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/VsanCnsSnapshotCreateSpec` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `cnsQueryAllAsync`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanCnsQueryFilter` |  |
| `arg1` | `VsanCnsQuerySelection` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `cnsQueryAllVolume`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanCnsQueryFilter` |  |
| `arg1` | `VsanCnsQuerySelection` |  |

**Returns:** `VsanCnsQueryResult`

---

## VsanCnsVolumeMetadata

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `entityMetadata` |  | `Array/VsanCnsEntityMetadata` | No |
| `containerCluster` |  | `VsanCnsContainerCluster` | No |
| `dynamicType` |  | `String` | No |
| `containerClusterArray` |  | `Array/VsanCnsContainerCluster` | No |

## VsanCnsVolumeMetadataUpdateSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `metadata` |  | `VsanCnsVolumeMetadata` | No |
| `volumeId` |  | `VsanCnsVolumeId` | No |
| `dynamicType` |  | `String` | No |

## VsanCnsVolumeNotFoundFault

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `reason` |  | `String` | No |
| `localizedMessage` | Creates a localized description of this throwable. Subclasses may override this method in order to produce a locale-specific message. For subclasses that do not override this method, the default implementation returns the same result as {@code getMessage()}. | `String` | Yes |
| `volumeId` |  | `VsanCnsVolumeId` | No |
| `message` |  | `String` | No |

### Methods

#### `VsanCnsVolumeNotFoundFault`


**Returns:** `void`

---

#### `VsanCnsVolumeNotFoundFault`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `reason` | `String` |  |
| `volumeId` | `VsanCnsVolumeId` |  |

**Returns:** `void`

---

#### `printStackTrace`
Prints this throwable and its backtrace to the standard error stream. This method prints a stack trace for this {@code Throwable} object on the error output stream that is the value of the field {@code System.err}. The first line of output contains the result of the {@link #toString()} method for this object. Remaining lines represent data previously recorded by the method {@link #fillInStackTrace()}. The format of this information depends on the implementation, but the following example may be regarded as typical:
java.lang.NullPointerException
        at MyClass.mash(MyClass.java:9)
        at MyClass.crunch(MyClass.java:6)
        at MyClass.main(MyClass.java:3)

This example was produced by running the program:
class MyClass {
    public static void main(String[] args) {
        crunch(null);
    }
    static void crunch(int[] a) {
        mash(a);
    }
    static void mash(int[] b) {
        System.out.println(b[0]);
    }
}

The backtrace for a throwable with an initialized, non-null cause should generally include the backtrace for the cause. The format of this information depends on the implementation, but the following example may be regarded as typical:
HighLevelException: MidLevelException: LowLevelException
        at Junk.a(Junk.java:13)
        at Junk.main(Junk.java:4)
Caused by: MidLevelException: LowLevelException
        at Junk.c(Junk.java:23)
        at Junk.b(Junk.java:17)
        at Junk.a(Junk.java:11)
        ... 1 more
Caused by: LowLevelException
        at Junk.e(Junk.java:30)
        at Junk.d(Junk.java:27)
        at Junk.c(Junk.java:21)
        ... 3 more

Note the presence of lines containing the characters {@code "..."}. These lines indicate that the remainder of the stack trace for this exception matches the indicated number of frames from the bottom of the stack trace of the exception that was caused by this exception (the "enclosing" exception). This shorthand can greatly reduce the length of the output in the common case where a wrapped exception is thrown from same method as the "causative exception" is caught. The above example was produced by running the program:
public class Junk {
    public static void main(String args[]) {
        try {
            a();
        } catch(HighLevelException e) {
            e.printStackTrace();
        }
    }
    static void a() throws HighLevelException {
        try {
            b();
        } catch(MidLevelException e) {
            throw new HighLevelException(e);
        }
    }
    static void b() throws MidLevelException {
        c();
    }
    static void c() throws MidLevelException {
        try {
            d();
        } catch(LowLevelException e) {
            throw new MidLevelException(e);
        }
    }
    static void d() throws LowLevelException {
       e();
    }
    static void e() throws LowLevelException {
        throw new LowLevelException();
    }
}

class HighLevelException extends Exception {
    HighLevelException(Throwable cause) { super(cause); }
}

class MidLevelException extends Exception {
    MidLevelException(Throwable cause)  { super(cause); }
}

class LowLevelException extends Exception {
}

As of release 7, the platform supports the notion of suppressed exceptions (in conjunction with the {@code try}-with-resources statement). Any exceptions that were suppressed in order to deliver an exception are printed out beneath the stack trace. The format of this information depends on the implementation, but the following example may be regarded as typical:
Exception in thread "main" java.lang.Exception: Something happened
 at Foo.bar(Foo.java:10)
 at Foo.main(Foo.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 0
         at Resource.close(Resource.java:26)
         at Foo.bar(Foo.java:9)
         ... 1 more

Note that the "... n more" notation is used on suppressed exceptions just at it is used on causes. Unlike causes, suppressed exceptions are indented beyond their "containing exceptions."

An exception can have both a cause and one or more suppressed exceptions:

Exception in thread "main" java.lang.Exception: Main block
 at Foo3.main(Foo3.java:7)
 Suppressed: Resource$CloseFailException: Resource ID = 2
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 1
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
Caused by: java.lang.Exception: I did it
 at Foo3.main(Foo3.java:8)

Likewise, a suppressed exception can have a cause:
Exception in thread "main" java.lang.Exception: Main block
 at Foo4.main(Foo4.java:6)
 Suppressed: Resource2$CloseFailException: Resource ID = 1
         at Resource2.close(Resource2.java:20)
         at Foo4.main(Foo4.java:5)
 Caused by: java.lang.Exception: Rats, you caught me
         at Resource2$CloseFailException.<init>(Resource2.java:45)
         ... 2 more

**Returns:** `void`

---

## VsanCnsVolumeOperationBatchResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `volumeResults` |  | `Array/VsanCnsVolumeOperationResult` | No |
| `dynamicType` |  | `String` | No |

## VsanCnsVolumeOperationResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `volumeId` |  | `VsanCnsVolumeId` | No |
| `dynamicType` |  | `String` | No |

## VsanCnsVolumePolicyReconfigSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `profile` |  | `Array/VsanVirtualMachineProfileSpec` | No |
| `volumeId` |  | `VsanCnsVolumeId` | No |
| `dynamicType` |  | `String` | No |

## VsanCnsVolumeRelocateSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `datastore` |  | `VsanManagedObjectReference` | No |
| `profile` |  | `Array/VsanVirtualMachineProfileSpec` | No |
| `volumeId` |  | `VsanCnsVolumeId` | No |
| `dynamicType` |  | `String` | No |

## VsanCnsVolumeSource

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |

## VsanCnsVolumeType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `VolumeType_Unknown` |  | `VsanCnsVolumeType` | Yes |
| `BLOCK` |  | `VsanCnsVolumeType` | Yes |
| `FILE` |  | `VsanCnsVolumeType` | Yes |

## VsanCnsVSANFileCreateSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `softQuotaInMb` |  | `Number` | No |
| `permission` |  | `Array/VsanVsanFileShareNetPermission` | No |
| `dynamicType` |  | `String` | No |

## VsanCnsVsanFileShareBackingDetails

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` |  | `String` | No |
| `permission` |  | `Array/VsanVsanFileShareNetPermission` | No |
| `dynamicType` |  | `String` | No |
| `capacityInMb` |  | `Number` | No |
| `backingFileId` |  | `String` | No |

## VsanConnection

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `hostName` |  | `String` | Yes |
| `vsanVcDiskManagementSystem` |  | `VsanVimClusterVsanVcDiskManagementSystem` | Yes |
| `vsanSpaceReportSystem` |  | `VsanVsanSpaceReportSystem` | Yes |
| `vsanPerformanceManager` |  | `VsanVsanPerformanceManager` | Yes |
| `vsanCapabilitySystem` |  | `VsanVsanCapabilitySystem` | Yes |
| `url` |  | `String` | Yes |
| `vsanVcClusterConfigSystem` |  | `VsanVsanVcClusterConfigSystem` | Yes |
| `vsanVcStretchedClusterSystem` |  | `VsanVimClusterVsanVcStretchedClusterSystem` | Yes |
| `vsanRemoteDatastoreSystem` |  | `VsanVsanRemoteDatastoreSystem` | Yes |
| `name` |  | `String` | Yes |
| `vsanVcClusterHealthSystem` |  | `VsanVsanVcClusterHealthSystem` | Yes |
| `vsanIscsiTargetSystem` |  | `VsanVsanIscsiTargetSystem` | Yes |
| `username` |  | `String` | Yes |

### Methods

#### `destroy`


**Returns:** `void`

---

## VsanDataProtectionLoadBalancerBasicInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `hostUuid` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanDataProtectionLoadBalancerDetailedInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `hostUuid` |  | `String` | No |
| `thumbprint` |  | `String` | No |
| `publicKey` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `url` |  | `String` | No |

## VsanDataProtectionLoadBalancersInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `detailedLoadBalancerInfo` |  | `Array/VsanDataProtectionLoadBalancerDetailedInfo` | No |
| `dynamicType` |  | `String` | No |
| `basicLoadBalancerInfo` |  | `Array/VsanDataProtectionLoadBalancerBasicInfo` | No |

## VsanDataProtectionPeerSiteInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` |  | `String` | No |
| `siteId` |  | `String` | No |
| `lookupServiceUrl` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `nodeId` |  | `String` | No |
| `lookupServiceThumbprint` |  | `String` | No |

## VsanDataProtectionService

### Methods

#### `_getRef`


**Returns:** `VsanManagedObjectReference`

---

#### `dpSync`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanDpSyncOpSpec` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `dpSnapshot`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanDpSnapshotOpSpec` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `dpQueryProtectionSupport`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `VsanDpQueryProtectionSupportResult`

---

#### `dpPrepareRestore`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanDpPrepareRestoreOpSpec` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `dpQueryProtectionPolicyState`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanDpQueryProtectionPolicyStateOpSpec` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `dpSetProtection`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanDpProtectOpSpec` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `dpSetProtectionPolicy`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanDpProtectionPolicyOpSpec` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `dpEnableProtectionServices`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `String` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `dpGetProtectionPolicy`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanDpGetProtectionPolicyOpSpec` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `dpRetireSnapshot`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanDpRetireSnapshotOpSpec` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `dpQueryProtection`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanDpQueryProtectedEntityInfoOpSpec` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `dpCancelSnapshot`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanDpCancelSnapshotOpSpec` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `dpCommitRestore`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanDpCommitRestoreOpSpec` |  |

**Returns:** `VsanManagedObjectReference`

---

## VsanDefaultDatastorePolicySelectionInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `lastPolicySelectionTime` |  | `Date` | No |
| `dynamicType` |  | `String` | No |
| `enabled` |  | `Boolean` | No |
| `defaultPolicyId` |  | `String` | No |

## VsanDevicePciId

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `subDeviceId` |  | `Number` | No |
| `subVendorId` |  | `Number` | No |
| `vendorId` |  | `Number` | No |
| `dynamicType` |  | `String` | No |
| `deviceId` |  | `Number` | No |

## VsanDiskClaimConfiguration

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `vendor` |  | `String` | No |
| `diskModel` |  | `String` | No |
| `diskNamePrefix` |  | `String` | No |
| `diskType` |  | `String` | No |
| `numberOfDisks` |  | `Number` | No |
| `dynamicType` |  | `String` | No |
| `diskCapacity` |  | `Number` | No |

## VsanDpAddProtectionPolicyOpSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `pe` |  | `VsanDpProtectedEntity` | No |
| `policySets` |  | `Array/VsanDpProtectionPolicySet` | No |
| `dynamicType` |  | `String` | No |

## VsanDpCancelSnapshotOpResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |

## VsanDpCancelSnapshotOpSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `peSnapshotOptions` |  | `Array/VsanDpProtectedEntitySnapshotOptions` | No |
| `pe` |  | `VsanDpProtectedEntity` | No |
| `snapshotUuid` |  | `String` | No |
| `vendorId` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanDpCapabilitySupportLevel

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `CapabilitySupportLevel_unknown` |  | `VsanDpCapabilitySupportLevel` | Yes |
| `not_supported` |  | `VsanDpCapabilitySupportLevel` | Yes |
| `partially_supported` |  | `VsanDpCapabilitySupportLevel` | Yes |
| `supported` |  | `VsanDpCapabilitySupportLevel` | Yes |

## VsanDpClaimedPe

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `pe` |  | `VsanDpProtectedEntity` | No |
| `vendorId` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `isProtectedByLwd` |  | `Boolean` | No |

## VsanDpCommitRestoreOpResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |

## VsanDpCommitRestoreOpSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `snapshotUuid` |  | `String` | No |
| `pe` |  | `VsanDpProtectedEntity` | No |
| `peRestoreOptions` |  | `Array/VsanDpProtectedEntityRestoreOptions` | No |
| `userIds` |  | `VsanDpUserIdBinding` | No |
| `vendorId` |  | `String` | No |
| `transportProvider` |  | `String` | No |
| `initiatorId` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanDpDiskBinding

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `diskKey` |  | `Number` | No |
| `id` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanDpDrConfigOpsProxy

### Methods

#### `dpDrConfigureHms`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanDpDrHmsConfigSpec` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `dpDrUnconfigureSrm`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `dpDrConfigureSrm`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanDpDrSrmConfigSpec` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `_getRef`


**Returns:** `VsanManagedObjectReference`

---

#### `dpDrUnconfigureHms`


**Returns:** `VsanManagedObjectReference`

---

## VsanDpDrConfigSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `fqdn` |  | `String` | No |
| `dpxUuid` |  | `String` | No |
| `certificate` |  | `String` | No |
| `drBackupUuid` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `extensionId` |  | `String` | No |
| `version` |  | `String` | No |
| `uuid` |  | `String` | No |

## VsanDpDrConfigurationResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `serviceAccount` |  | `VsanDpDrServiceAccountData` | No |
| `dynamicType` |  | `String` | No |

## VsanDpDrHmsConfigSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `fqdn` |  | `String` | No |
| `dpxUuid` |  | `String` | No |
| `certificate` |  | `String` | No |
| `drBackupUuid` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `extensionId` |  | `String` | No |
| `version` |  | `String` | No |
| `uuid` |  | `String` | No |

## VsanDpDrHmsConfigurationResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `serviceAccount` |  | `VsanDpDrServiceAccountData` | No |
| `dynamicType` |  | `String` | No |

## VsanDpDrHostSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `hosts` |  | `Array/VsanManagedObjectReference` | No |
| `srmWorkflow` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanDpDrLicenseInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |
| `editionKey` |  | `String` | No |

## VsanDpDrOpsProxy

### Methods

#### `dpDrReconfigurePlaceholderVms`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/VsanManagedObjectReference` |  |
| `arg1` | `String` |  |
| `arg2` | `Boolean` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `_getRef`


**Returns:** `VsanManagedObjectReference`

---

#### `dpDrPrepareHostForSrmWorkflow`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanDpDrHostSpec` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `dpDrCleanupHostsAfterSrmWorkflow`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanDpDrHostSpec` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `dpDrUpdateSrmAssetMetadata`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanDpDrSrmAssetMetadata` |  |

**Returns:** `void`

---

#### `dpDrCreateProgressTracker`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanDpDrProgressTrackerSpec` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `dpDrGetSRMLicenses`


**Returns:** `Array/VsanDpDrLicenseInfo`

---

#### `dpDrUpdateProgressTracker`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `VsanDpDrProgressTrackerUpdateSpec` |  |

**Returns:** `void`

---

#### `dpDrGetHbrAgentVersion`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `String`

---

#### `dpDrReconfigureSourceVms`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/VsanManagedObjectReference` |  |
| `arg1` | `String` |  |
| `arg2` | `Boolean` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `dpDrPrepareHbrsrvuw`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/VsanManagedObjectReference` |  |
| `arg1` | `Boolean` |  |

**Returns:** `VsanManagedObjectReference`

---

## VsanDpDrPrepareResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |

## VsanDpDrProgressTrackerSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `taskTypeId` |  | `String` | No |
| `owningEntity` |  | `VsanManagedObjectReference` | No |
| `isCancelable` |  | `Boolean` | No |
| `dynamicType` |  | `String` | No |

## VsanDpDrProgressTrackerUpdateSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `percentage` |  | `Number` | No |
| `state` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanDpDrServiceAccountData

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `accountName` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `accountPassword` |  | `String` | No |
| `key` |  | `String` | No |

## VsanDpDrSrmAssetMetadata

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `assetId` |  | `String` | No |
| `siteName` |  | `String` | No |
| `vmCount` |  | `Number` | No |
| `dynamicType` |  | `String` | No |
| `cpuCount` |  | `Number` | No |

## VsanDpDrSrmConfigSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `fqdn` |  | `String` | No |
| `dpxUuid` |  | `String` | No |
| `certificate` |  | `String` | No |
| `drBackupUuid` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `extensionId` |  | `String` | No |
| `version` |  | `String` | No |
| `uuid` |  | `String` | No |

## VsanDpDrSrmConfigurationResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `applianceServiceAccount` |  | `Array/VsanDpDrServiceAccountData` | No |
| `serviceAccount` |  | `VsanDpDrServiceAccountData` | No |
| `dynamicType` |  | `String` | No |
| `remoteServiceAccount` |  | `Array/VsanDpDrServiceAccountData` | No |

## VsanDpDrSrmWorkflow

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `srmWorkflowUnknown` |  | `VsanDpDrSrmWorkflow` | Yes |
| `failover` |  | `VsanDpDrSrmWorkflow` | Yes |
| `reprotect` |  | `VsanDpDrSrmWorkflow` | Yes |
| `test_failover` |  | `VsanDpDrSrmWorkflow` | Yes |
| `cleanup_test` |  | `VsanDpDrSrmWorkflow` | Yes |

## VsanDpDrTestFailoverPrepareResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |
| `network` |  | `VsanManagedObjectReference` | No |

## VsanDpDrTestFailoverSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `hosts` |  | `Array/VsanManagedObjectReference` | No |
| `switchName` |  | `String` | No |
| `srmWorkflow` |  | `String` | No |
| `portGroupName` |  | `String` | No |
| `numPorts` |  | `Number` | No |
| `dynamicType` |  | `String` | No |

## VsanDpEnableProtectionServicesFault

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `reason` |  | `String` | No |
| `localizedMessage` | Creates a localized description of this throwable. Subclasses may override this method in order to produce a locale-specific message. For subclasses that do not override this method, the default implementation returns the same result as {@code getMessage()}. | `String` | Yes |
| `hostFaults` |  | `Array/VsanDpEnableProtectionServicesHostFailure` | No |
| `message` |  | `String` | No |

### Methods

#### `VsanDpEnableProtectionServicesFault`


**Returns:** `void`

---

#### `VsanDpEnableProtectionServicesFault`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `reason` | `String` |  |
| `hostFaults` | `Array/VsanDpEnableProtectionServicesHostFailure` |  |

**Returns:** `void`

---

#### `printStackTrace`
Prints this throwable and its backtrace to the standard error stream. This method prints a stack trace for this {@code Throwable} object on the error output stream that is the value of the field {@code System.err}. The first line of output contains the result of the {@link #toString()} method for this object. Remaining lines represent data previously recorded by the method {@link #fillInStackTrace()}. The format of this information depends on the implementation, but the following example may be regarded as typical:
java.lang.NullPointerException
        at MyClass.mash(MyClass.java:9)
        at MyClass.crunch(MyClass.java:6)
        at MyClass.main(MyClass.java:3)

This example was produced by running the program:
class MyClass {
    public static void main(String[] args) {
        crunch(null);
    }
    static void crunch(int[] a) {
        mash(a);
    }
    static void mash(int[] b) {
        System.out.println(b[0]);
    }
}

The backtrace for a throwable with an initialized, non-null cause should generally include the backtrace for the cause. The format of this information depends on the implementation, but the following example may be regarded as typical:
HighLevelException: MidLevelException: LowLevelException
        at Junk.a(Junk.java:13)
        at Junk.main(Junk.java:4)
Caused by: MidLevelException: LowLevelException
        at Junk.c(Junk.java:23)
        at Junk.b(Junk.java:17)
        at Junk.a(Junk.java:11)
        ... 1 more
Caused by: LowLevelException
        at Junk.e(Junk.java:30)
        at Junk.d(Junk.java:27)
        at Junk.c(Junk.java:21)
        ... 3 more

Note the presence of lines containing the characters {@code "..."}. These lines indicate that the remainder of the stack trace for this exception matches the indicated number of frames from the bottom of the stack trace of the exception that was caused by this exception (the "enclosing" exception). This shorthand can greatly reduce the length of the output in the common case where a wrapped exception is thrown from same method as the "causative exception" is caught. The above example was produced by running the program:
public class Junk {
    public static void main(String args[]) {
        try {
            a();
        } catch(HighLevelException e) {
            e.printStackTrace();
        }
    }
    static void a() throws HighLevelException {
        try {
            b();
        } catch(MidLevelException e) {
            throw new HighLevelException(e);
        }
    }
    static void b() throws MidLevelException {
        c();
    }
    static void c() throws MidLevelException {
        try {
            d();
        } catch(LowLevelException e) {
            throw new MidLevelException(e);
        }
    }
    static void d() throws LowLevelException {
       e();
    }
    static void e() throws LowLevelException {
        throw new LowLevelException();
    }
}

class HighLevelException extends Exception {
    HighLevelException(Throwable cause) { super(cause); }
}

class MidLevelException extends Exception {
    MidLevelException(Throwable cause)  { super(cause); }
}

class LowLevelException extends Exception {
}

As of release 7, the platform supports the notion of suppressed exceptions (in conjunction with the {@code try}-with-resources statement). Any exceptions that were suppressed in order to deliver an exception are printed out beneath the stack trace. The format of this information depends on the implementation, but the following example may be regarded as typical:
Exception in thread "main" java.lang.Exception: Something happened
 at Foo.bar(Foo.java:10)
 at Foo.main(Foo.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 0
         at Resource.close(Resource.java:26)
         at Foo.bar(Foo.java:9)
         ... 1 more

Note that the "... n more" notation is used on suppressed exceptions just at it is used on causes. Unlike causes, suppressed exceptions are indented beyond their "containing exceptions."

An exception can have both a cause and one or more suppressed exceptions:

Exception in thread "main" java.lang.Exception: Main block
 at Foo3.main(Foo3.java:7)
 Suppressed: Resource$CloseFailException: Resource ID = 2
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 1
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
Caused by: java.lang.Exception: I did it
 at Foo3.main(Foo3.java:8)

Likewise, a suppressed exception can have a cause:
Exception in thread "main" java.lang.Exception: Main block
 at Foo4.main(Foo4.java:6)
 Suppressed: Resource2$CloseFailException: Resource ID = 1
         at Resource2.close(Resource2.java:20)
         at Foo4.main(Foo4.java:5)
 Caused by: java.lang.Exception: Rats, you caught me
         at Resource2$CloseFailException.<init>(Resource2.java:45)
         ... 2 more

**Returns:** `void`

---

## VsanDpEnableProtectionServicesHostFailure

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `serviceNotPresent` |  | `Array/String` | No |
| `host` |  | `VsanManagedObjectReference` | No |
| `serviceFailed` |  | `Array/String` | No |
| `dynamicType` |  | `String` | No |

## VsanDpFaultBaseSnapshotMismatch

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `reason` |  | `String` | No |
| `localizedMessage` | Creates a localized description of this throwable. Subclasses may override this method in order to produce a locale-specific message. For subclasses that do not override this method, the default implementation returns the same result as {@code getMessage()}. | `String` | Yes |
| `message` |  | `String` | No |
| `pes` |  | `Array/VsanDpProtectedEntity` | No |

### Methods

#### `VsanDpFaultBaseSnapshotMismatch`


**Returns:** `void`

---

#### `VsanDpFaultBaseSnapshotMismatch`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `reason` | `String` |  |
| `pes` | `Array/VsanDpProtectedEntity` |  |

**Returns:** `void`

---

#### `printStackTrace`
Prints this throwable and its backtrace to the standard error stream. This method prints a stack trace for this {@code Throwable} object on the error output stream that is the value of the field {@code System.err}. The first line of output contains the result of the {@link #toString()} method for this object. Remaining lines represent data previously recorded by the method {@link #fillInStackTrace()}. The format of this information depends on the implementation, but the following example may be regarded as typical:
java.lang.NullPointerException
        at MyClass.mash(MyClass.java:9)
        at MyClass.crunch(MyClass.java:6)
        at MyClass.main(MyClass.java:3)

This example was produced by running the program:
class MyClass {
    public static void main(String[] args) {
        crunch(null);
    }
    static void crunch(int[] a) {
        mash(a);
    }
    static void mash(int[] b) {
        System.out.println(b[0]);
    }
}

The backtrace for a throwable with an initialized, non-null cause should generally include the backtrace for the cause. The format of this information depends on the implementation, but the following example may be regarded as typical:
HighLevelException: MidLevelException: LowLevelException
        at Junk.a(Junk.java:13)
        at Junk.main(Junk.java:4)
Caused by: MidLevelException: LowLevelException
        at Junk.c(Junk.java:23)
        at Junk.b(Junk.java:17)
        at Junk.a(Junk.java:11)
        ... 1 more
Caused by: LowLevelException
        at Junk.e(Junk.java:30)
        at Junk.d(Junk.java:27)
        at Junk.c(Junk.java:21)
        ... 3 more

Note the presence of lines containing the characters {@code "..."}. These lines indicate that the remainder of the stack trace for this exception matches the indicated number of frames from the bottom of the stack trace of the exception that was caused by this exception (the "enclosing" exception). This shorthand can greatly reduce the length of the output in the common case where a wrapped exception is thrown from same method as the "causative exception" is caught. The above example was produced by running the program:
public class Junk {
    public static void main(String args[]) {
        try {
            a();
        } catch(HighLevelException e) {
            e.printStackTrace();
        }
    }
    static void a() throws HighLevelException {
        try {
            b();
        } catch(MidLevelException e) {
            throw new HighLevelException(e);
        }
    }
    static void b() throws MidLevelException {
        c();
    }
    static void c() throws MidLevelException {
        try {
            d();
        } catch(LowLevelException e) {
            throw new MidLevelException(e);
        }
    }
    static void d() throws LowLevelException {
       e();
    }
    static void e() throws LowLevelException {
        throw new LowLevelException();
    }
}

class HighLevelException extends Exception {
    HighLevelException(Throwable cause) { super(cause); }
}

class MidLevelException extends Exception {
    MidLevelException(Throwable cause)  { super(cause); }
}

class LowLevelException extends Exception {
}

As of release 7, the platform supports the notion of suppressed exceptions (in conjunction with the {@code try}-with-resources statement). Any exceptions that were suppressed in order to deliver an exception are printed out beneath the stack trace. The format of this information depends on the implementation, but the following example may be regarded as typical:
Exception in thread "main" java.lang.Exception: Something happened
 at Foo.bar(Foo.java:10)
 at Foo.main(Foo.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 0
         at Resource.close(Resource.java:26)
         at Foo.bar(Foo.java:9)
         ... 1 more

Note that the "... n more" notation is used on suppressed exceptions just at it is used on causes. Unlike causes, suppressed exceptions are indented beyond their "containing exceptions."

An exception can have both a cause and one or more suppressed exceptions:

Exception in thread "main" java.lang.Exception: Main block
 at Foo3.main(Foo3.java:7)
 Suppressed: Resource$CloseFailException: Resource ID = 2
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 1
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
Caused by: java.lang.Exception: I did it
 at Foo3.main(Foo3.java:8)

Likewise, a suppressed exception can have a cause:
Exception in thread "main" java.lang.Exception: Main block
 at Foo4.main(Foo4.java:6)
 Suppressed: Resource2$CloseFailException: Resource ID = 1
         at Resource2.close(Resource2.java:20)
         at Foo4.main(Foo4.java:5)
 Caused by: java.lang.Exception: Rats, you caught me
         at Resource2$CloseFailException.<init>(Resource2.java:45)
         ... 2 more

**Returns:** `void`

---

## VsanDpFaultCancelSnapshotRequired

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `reason` |  | `String` | No |
| `localizedMessage` | Creates a localized description of this throwable. Subclasses may override this method in order to produce a locale-specific message. For subclasses that do not override this method, the default implementation returns the same result as {@code getMessage()}. | `String` | Yes |
| `message` |  | `String` | No |

### Methods

#### `VsanDpFaultCancelSnapshotRequired`


**Returns:** `void`

---

#### `VsanDpFaultCancelSnapshotRequired`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `reason` | `String` |  |

**Returns:** `void`

---

#### `printStackTrace`
Prints this throwable and its backtrace to the standard error stream. This method prints a stack trace for this {@code Throwable} object on the error output stream that is the value of the field {@code System.err}. The first line of output contains the result of the {@link #toString()} method for this object. Remaining lines represent data previously recorded by the method {@link #fillInStackTrace()}. The format of this information depends on the implementation, but the following example may be regarded as typical:
java.lang.NullPointerException
        at MyClass.mash(MyClass.java:9)
        at MyClass.crunch(MyClass.java:6)
        at MyClass.main(MyClass.java:3)

This example was produced by running the program:
class MyClass {
    public static void main(String[] args) {
        crunch(null);
    }
    static void crunch(int[] a) {
        mash(a);
    }
    static void mash(int[] b) {
        System.out.println(b[0]);
    }
}

The backtrace for a throwable with an initialized, non-null cause should generally include the backtrace for the cause. The format of this information depends on the implementation, but the following example may be regarded as typical:
HighLevelException: MidLevelException: LowLevelException
        at Junk.a(Junk.java:13)
        at Junk.main(Junk.java:4)
Caused by: MidLevelException: LowLevelException
        at Junk.c(Junk.java:23)
        at Junk.b(Junk.java:17)
        at Junk.a(Junk.java:11)
        ... 1 more
Caused by: LowLevelException
        at Junk.e(Junk.java:30)
        at Junk.d(Junk.java:27)
        at Junk.c(Junk.java:21)
        ... 3 more

Note the presence of lines containing the characters {@code "..."}. These lines indicate that the remainder of the stack trace for this exception matches the indicated number of frames from the bottom of the stack trace of the exception that was caused by this exception (the "enclosing" exception). This shorthand can greatly reduce the length of the output in the common case where a wrapped exception is thrown from same method as the "causative exception" is caught. The above example was produced by running the program:
public class Junk {
    public static void main(String args[]) {
        try {
            a();
        } catch(HighLevelException e) {
            e.printStackTrace();
        }
    }
    static void a() throws HighLevelException {
        try {
            b();
        } catch(MidLevelException e) {
            throw new HighLevelException(e);
        }
    }
    static void b() throws MidLevelException {
        c();
    }
    static void c() throws MidLevelException {
        try {
            d();
        } catch(LowLevelException e) {
            throw new MidLevelException(e);
        }
    }
    static void d() throws LowLevelException {
       e();
    }
    static void e() throws LowLevelException {
        throw new LowLevelException();
    }
}

class HighLevelException extends Exception {
    HighLevelException(Throwable cause) { super(cause); }
}

class MidLevelException extends Exception {
    MidLevelException(Throwable cause)  { super(cause); }
}

class LowLevelException extends Exception {
}

As of release 7, the platform supports the notion of suppressed exceptions (in conjunction with the {@code try}-with-resources statement). Any exceptions that were suppressed in order to deliver an exception are printed out beneath the stack trace. The format of this information depends on the implementation, but the following example may be regarded as typical:
Exception in thread "main" java.lang.Exception: Something happened
 at Foo.bar(Foo.java:10)
 at Foo.main(Foo.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 0
         at Resource.close(Resource.java:26)
         at Foo.bar(Foo.java:9)
         ... 1 more

Note that the "... n more" notation is used on suppressed exceptions just at it is used on causes. Unlike causes, suppressed exceptions are indented beyond their "containing exceptions."

An exception can have both a cause and one or more suppressed exceptions:

Exception in thread "main" java.lang.Exception: Main block
 at Foo3.main(Foo3.java:7)
 Suppressed: Resource$CloseFailException: Resource ID = 2
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 1
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
Caused by: java.lang.Exception: I did it
 at Foo3.main(Foo3.java:8)

Likewise, a suppressed exception can have a cause:
Exception in thread "main" java.lang.Exception: Main block
 at Foo4.main(Foo4.java:6)
 Suppressed: Resource2$CloseFailException: Resource ID = 1
         at Resource2.close(Resource2.java:20)
         at Foo4.main(Foo4.java:5)
 Caused by: java.lang.Exception: Rats, you caught me
         at Resource2$CloseFailException.<init>(Resource2.java:45)
         ... 2 more

**Returns:** `void`

---

## VsanDpFaultColdMigrationInProgress

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `taskRef` |  | `VsanManagedObjectReference` | No |
| `reason` |  | `String` | No |
| `localizedMessage` | Creates a localized description of this throwable. Subclasses may override this method in order to produce a locale-specific message. For subclasses that do not override this method, the default implementation returns the same result as {@code getMessage()}. | `String` | Yes |
| `message` |  | `String` | No |

### Methods

#### `VsanDpFaultColdMigrationInProgress`


**Returns:** `void`

---

#### `VsanDpFaultColdMigrationInProgress`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `reason` | `String` |  |
| `taskRef` | `VsanManagedObjectReference` |  |

**Returns:** `void`

---

#### `printStackTrace`
Prints this throwable and its backtrace to the standard error stream. This method prints a stack trace for this {@code Throwable} object on the error output stream that is the value of the field {@code System.err}. The first line of output contains the result of the {@link #toString()} method for this object. Remaining lines represent data previously recorded by the method {@link #fillInStackTrace()}. The format of this information depends on the implementation, but the following example may be regarded as typical:
java.lang.NullPointerException
        at MyClass.mash(MyClass.java:9)
        at MyClass.crunch(MyClass.java:6)
        at MyClass.main(MyClass.java:3)

This example was produced by running the program:
class MyClass {
    public static void main(String[] args) {
        crunch(null);
    }
    static void crunch(int[] a) {
        mash(a);
    }
    static void mash(int[] b) {
        System.out.println(b[0]);
    }
}

The backtrace for a throwable with an initialized, non-null cause should generally include the backtrace for the cause. The format of this information depends on the implementation, but the following example may be regarded as typical:
HighLevelException: MidLevelException: LowLevelException
        at Junk.a(Junk.java:13)
        at Junk.main(Junk.java:4)
Caused by: MidLevelException: LowLevelException
        at Junk.c(Junk.java:23)
        at Junk.b(Junk.java:17)
        at Junk.a(Junk.java:11)
        ... 1 more
Caused by: LowLevelException
        at Junk.e(Junk.java:30)
        at Junk.d(Junk.java:27)
        at Junk.c(Junk.java:21)
        ... 3 more

Note the presence of lines containing the characters {@code "..."}. These lines indicate that the remainder of the stack trace for this exception matches the indicated number of frames from the bottom of the stack trace of the exception that was caused by this exception (the "enclosing" exception). This shorthand can greatly reduce the length of the output in the common case where a wrapped exception is thrown from same method as the "causative exception" is caught. The above example was produced by running the program:
public class Junk {
    public static void main(String args[]) {
        try {
            a();
        } catch(HighLevelException e) {
            e.printStackTrace();
        }
    }
    static void a() throws HighLevelException {
        try {
            b();
        } catch(MidLevelException e) {
            throw new HighLevelException(e);
        }
    }
    static void b() throws MidLevelException {
        c();
    }
    static void c() throws MidLevelException {
        try {
            d();
        } catch(LowLevelException e) {
            throw new MidLevelException(e);
        }
    }
    static void d() throws LowLevelException {
       e();
    }
    static void e() throws LowLevelException {
        throw new LowLevelException();
    }
}

class HighLevelException extends Exception {
    HighLevelException(Throwable cause) { super(cause); }
}

class MidLevelException extends Exception {
    MidLevelException(Throwable cause)  { super(cause); }
}

class LowLevelException extends Exception {
}

As of release 7, the platform supports the notion of suppressed exceptions (in conjunction with the {@code try}-with-resources statement). Any exceptions that were suppressed in order to deliver an exception are printed out beneath the stack trace. The format of this information depends on the implementation, but the following example may be regarded as typical:
Exception in thread "main" java.lang.Exception: Something happened
 at Foo.bar(Foo.java:10)
 at Foo.main(Foo.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 0
         at Resource.close(Resource.java:26)
         at Foo.bar(Foo.java:9)
         ... 1 more

Note that the "... n more" notation is used on suppressed exceptions just at it is used on causes. Unlike causes, suppressed exceptions are indented beyond their "containing exceptions."

An exception can have both a cause and one or more suppressed exceptions:

Exception in thread "main" java.lang.Exception: Main block
 at Foo3.main(Foo3.java:7)
 Suppressed: Resource$CloseFailException: Resource ID = 2
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 1
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
Caused by: java.lang.Exception: I did it
 at Foo3.main(Foo3.java:8)

Likewise, a suppressed exception can have a cause:
Exception in thread "main" java.lang.Exception: Main block
 at Foo4.main(Foo4.java:6)
 Suppressed: Resource2$CloseFailException: Resource ID = 1
         at Resource2.close(Resource2.java:20)
         at Foo4.main(Foo4.java:5)
 Caused by: java.lang.Exception: Rats, you caught me
         at Resource2$CloseFailException.<init>(Resource2.java:45)
         ... 2 more

**Returns:** `void`

---

## VsanDpFaultCrossHostFailure

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `reason` |  | `String` | No |
| `localizedMessage` | Creates a localized description of this throwable. Subclasses may override this method in order to produce a locale-specific message. For subclasses that do not override this method, the default implementation returns the same result as {@code getMessage()}. | `String` | Yes |
| `message` |  | `String` | No |

### Methods

#### `VsanDpFaultCrossHostFailure`


**Returns:** `void`

---

#### `VsanDpFaultCrossHostFailure`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `reason` | `String` |  |

**Returns:** `void`

---

#### `printStackTrace`
Prints this throwable and its backtrace to the standard error stream. This method prints a stack trace for this {@code Throwable} object on the error output stream that is the value of the field {@code System.err}. The first line of output contains the result of the {@link #toString()} method for this object. Remaining lines represent data previously recorded by the method {@link #fillInStackTrace()}. The format of this information depends on the implementation, but the following example may be regarded as typical:
java.lang.NullPointerException
        at MyClass.mash(MyClass.java:9)
        at MyClass.crunch(MyClass.java:6)
        at MyClass.main(MyClass.java:3)

This example was produced by running the program:
class MyClass {
    public static void main(String[] args) {
        crunch(null);
    }
    static void crunch(int[] a) {
        mash(a);
    }
    static void mash(int[] b) {
        System.out.println(b[0]);
    }
}

The backtrace for a throwable with an initialized, non-null cause should generally include the backtrace for the cause. The format of this information depends on the implementation, but the following example may be regarded as typical:
HighLevelException: MidLevelException: LowLevelException
        at Junk.a(Junk.java:13)
        at Junk.main(Junk.java:4)
Caused by: MidLevelException: LowLevelException
        at Junk.c(Junk.java:23)
        at Junk.b(Junk.java:17)
        at Junk.a(Junk.java:11)
        ... 1 more
Caused by: LowLevelException
        at Junk.e(Junk.java:30)
        at Junk.d(Junk.java:27)
        at Junk.c(Junk.java:21)
        ... 3 more

Note the presence of lines containing the characters {@code "..."}. These lines indicate that the remainder of the stack trace for this exception matches the indicated number of frames from the bottom of the stack trace of the exception that was caused by this exception (the "enclosing" exception). This shorthand can greatly reduce the length of the output in the common case where a wrapped exception is thrown from same method as the "causative exception" is caught. The above example was produced by running the program:
public class Junk {
    public static void main(String args[]) {
        try {
            a();
        } catch(HighLevelException e) {
            e.printStackTrace();
        }
    }
    static void a() throws HighLevelException {
        try {
            b();
        } catch(MidLevelException e) {
            throw new HighLevelException(e);
        }
    }
    static void b() throws MidLevelException {
        c();
    }
    static void c() throws MidLevelException {
        try {
            d();
        } catch(LowLevelException e) {
            throw new MidLevelException(e);
        }
    }
    static void d() throws LowLevelException {
       e();
    }
    static void e() throws LowLevelException {
        throw new LowLevelException();
    }
}

class HighLevelException extends Exception {
    HighLevelException(Throwable cause) { super(cause); }
}

class MidLevelException extends Exception {
    MidLevelException(Throwable cause)  { super(cause); }
}

class LowLevelException extends Exception {
}

As of release 7, the platform supports the notion of suppressed exceptions (in conjunction with the {@code try}-with-resources statement). Any exceptions that were suppressed in order to deliver an exception are printed out beneath the stack trace. The format of this information depends on the implementation, but the following example may be regarded as typical:
Exception in thread "main" java.lang.Exception: Something happened
 at Foo.bar(Foo.java:10)
 at Foo.main(Foo.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 0
         at Resource.close(Resource.java:26)
         at Foo.bar(Foo.java:9)
         ... 1 more

Note that the "... n more" notation is used on suppressed exceptions just at it is used on causes. Unlike causes, suppressed exceptions are indented beyond their "containing exceptions."

An exception can have both a cause and one or more suppressed exceptions:

Exception in thread "main" java.lang.Exception: Main block
 at Foo3.main(Foo3.java:7)
 Suppressed: Resource$CloseFailException: Resource ID = 2
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 1
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
Caused by: java.lang.Exception: I did it
 at Foo3.main(Foo3.java:8)

Likewise, a suppressed exception can have a cause:
Exception in thread "main" java.lang.Exception: Main block
 at Foo4.main(Foo4.java:6)
 Suppressed: Resource2$CloseFailException: Resource ID = 1
         at Resource2.close(Resource2.java:20)
         at Foo4.main(Foo4.java:5)
 Caused by: java.lang.Exception: Rats, you caught me
         at Resource2$CloseFailException.<init>(Resource2.java:45)
         ... 2 more

**Returns:** `void`

---

## VsanDpFaultDiskClosing

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `reason` |  | `String` | No |
| `localizedMessage` | Creates a localized description of this throwable. Subclasses may override this method in order to produce a locale-specific message. For subclasses that do not override this method, the default implementation returns the same result as {@code getMessage()}. | `String` | Yes |
| `message` |  | `String` | No |

### Methods

#### `VsanDpFaultDiskClosing`


**Returns:** `void`

---

#### `VsanDpFaultDiskClosing`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `reason` | `String` |  |

**Returns:** `void`

---

#### `printStackTrace`
Prints this throwable and its backtrace to the standard error stream. This method prints a stack trace for this {@code Throwable} object on the error output stream that is the value of the field {@code System.err}. The first line of output contains the result of the {@link #toString()} method for this object. Remaining lines represent data previously recorded by the method {@link #fillInStackTrace()}. The format of this information depends on the implementation, but the following example may be regarded as typical:
java.lang.NullPointerException
        at MyClass.mash(MyClass.java:9)
        at MyClass.crunch(MyClass.java:6)
        at MyClass.main(MyClass.java:3)

This example was produced by running the program:
class MyClass {
    public static void main(String[] args) {
        crunch(null);
    }
    static void crunch(int[] a) {
        mash(a);
    }
    static void mash(int[] b) {
        System.out.println(b[0]);
    }
}

The backtrace for a throwable with an initialized, non-null cause should generally include the backtrace for the cause. The format of this information depends on the implementation, but the following example may be regarded as typical:
HighLevelException: MidLevelException: LowLevelException
        at Junk.a(Junk.java:13)
        at Junk.main(Junk.java:4)
Caused by: MidLevelException: LowLevelException
        at Junk.c(Junk.java:23)
        at Junk.b(Junk.java:17)
        at Junk.a(Junk.java:11)
        ... 1 more
Caused by: LowLevelException
        at Junk.e(Junk.java:30)
        at Junk.d(Junk.java:27)
        at Junk.c(Junk.java:21)
        ... 3 more

Note the presence of lines containing the characters {@code "..."}. These lines indicate that the remainder of the stack trace for this exception matches the indicated number of frames from the bottom of the stack trace of the exception that was caused by this exception (the "enclosing" exception). This shorthand can greatly reduce the length of the output in the common case where a wrapped exception is thrown from same method as the "causative exception" is caught. The above example was produced by running the program:
public class Junk {
    public static void main(String args[]) {
        try {
            a();
        } catch(HighLevelException e) {
            e.printStackTrace();
        }
    }
    static void a() throws HighLevelException {
        try {
            b();
        } catch(MidLevelException e) {
            throw new HighLevelException(e);
        }
    }
    static void b() throws MidLevelException {
        c();
    }
    static void c() throws MidLevelException {
        try {
            d();
        } catch(LowLevelException e) {
            throw new MidLevelException(e);
        }
    }
    static void d() throws LowLevelException {
       e();
    }
    static void e() throws LowLevelException {
        throw new LowLevelException();
    }
}

class HighLevelException extends Exception {
    HighLevelException(Throwable cause) { super(cause); }
}

class MidLevelException extends Exception {
    MidLevelException(Throwable cause)  { super(cause); }
}

class LowLevelException extends Exception {
}

As of release 7, the platform supports the notion of suppressed exceptions (in conjunction with the {@code try}-with-resources statement). Any exceptions that were suppressed in order to deliver an exception are printed out beneath the stack trace. The format of this information depends on the implementation, but the following example may be regarded as typical:
Exception in thread "main" java.lang.Exception: Something happened
 at Foo.bar(Foo.java:10)
 at Foo.main(Foo.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 0
         at Resource.close(Resource.java:26)
         at Foo.bar(Foo.java:9)
         ... 1 more

Note that the "... n more" notation is used on suppressed exceptions just at it is used on causes. Unlike causes, suppressed exceptions are indented beyond their "containing exceptions."

An exception can have both a cause and one or more suppressed exceptions:

Exception in thread "main" java.lang.Exception: Main block
 at Foo3.main(Foo3.java:7)
 Suppressed: Resource$CloseFailException: Resource ID = 2
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 1
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
Caused by: java.lang.Exception: I did it
 at Foo3.main(Foo3.java:8)

Likewise, a suppressed exception can have a cause:
Exception in thread "main" java.lang.Exception: Main block
 at Foo4.main(Foo4.java:6)
 Suppressed: Resource2$CloseFailException: Resource ID = 1
         at Resource2.close(Resource2.java:20)
         at Foo4.main(Foo4.java:5)
 Caused by: java.lang.Exception: Rats, you caught me
         at Resource2$CloseFailException.<init>(Resource2.java:45)
         ... 2 more

**Returns:** `void`

---

## VsanDpFaultDpdConnectionLost

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `reason` |  | `String` | No |
| `hostname` |  | `String` | No |
| `localizedMessage` | Creates a localized description of this throwable. Subclasses may override this method in order to produce a locale-specific message. For subclasses that do not override this method, the default implementation returns the same result as {@code getMessage()}. | `String` | Yes |
| `message` |  | `String` | No |

### Methods

#### `VsanDpFaultDpdConnectionLost`


**Returns:** `void`

---

#### `VsanDpFaultDpdConnectionLost`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `reason` | `String` |  |
| `hostname` | `String` |  |

**Returns:** `void`

---

#### `printStackTrace`
Prints this throwable and its backtrace to the standard error stream. This method prints a stack trace for this {@code Throwable} object on the error output stream that is the value of the field {@code System.err}. The first line of output contains the result of the {@link #toString()} method for this object. Remaining lines represent data previously recorded by the method {@link #fillInStackTrace()}. The format of this information depends on the implementation, but the following example may be regarded as typical:
java.lang.NullPointerException
        at MyClass.mash(MyClass.java:9)
        at MyClass.crunch(MyClass.java:6)
        at MyClass.main(MyClass.java:3)

This example was produced by running the program:
class MyClass {
    public static void main(String[] args) {
        crunch(null);
    }
    static void crunch(int[] a) {
        mash(a);
    }
    static void mash(int[] b) {
        System.out.println(b[0]);
    }
}

The backtrace for a throwable with an initialized, non-null cause should generally include the backtrace for the cause. The format of this information depends on the implementation, but the following example may be regarded as typical:
HighLevelException: MidLevelException: LowLevelException
        at Junk.a(Junk.java:13)
        at Junk.main(Junk.java:4)
Caused by: MidLevelException: LowLevelException
        at Junk.c(Junk.java:23)
        at Junk.b(Junk.java:17)
        at Junk.a(Junk.java:11)
        ... 1 more
Caused by: LowLevelException
        at Junk.e(Junk.java:30)
        at Junk.d(Junk.java:27)
        at Junk.c(Junk.java:21)
        ... 3 more

Note the presence of lines containing the characters {@code "..."}. These lines indicate that the remainder of the stack trace for this exception matches the indicated number of frames from the bottom of the stack trace of the exception that was caused by this exception (the "enclosing" exception). This shorthand can greatly reduce the length of the output in the common case where a wrapped exception is thrown from same method as the "causative exception" is caught. The above example was produced by running the program:
public class Junk {
    public static void main(String args[]) {
        try {
            a();
        } catch(HighLevelException e) {
            e.printStackTrace();
        }
    }
    static void a() throws HighLevelException {
        try {
            b();
        } catch(MidLevelException e) {
            throw new HighLevelException(e);
        }
    }
    static void b() throws MidLevelException {
        c();
    }
    static void c() throws MidLevelException {
        try {
            d();
        } catch(LowLevelException e) {
            throw new MidLevelException(e);
        }
    }
    static void d() throws LowLevelException {
       e();
    }
    static void e() throws LowLevelException {
        throw new LowLevelException();
    }
}

class HighLevelException extends Exception {
    HighLevelException(Throwable cause) { super(cause); }
}

class MidLevelException extends Exception {
    MidLevelException(Throwable cause)  { super(cause); }
}

class LowLevelException extends Exception {
}

As of release 7, the platform supports the notion of suppressed exceptions (in conjunction with the {@code try}-with-resources statement). Any exceptions that were suppressed in order to deliver an exception are printed out beneath the stack trace. The format of this information depends on the implementation, but the following example may be regarded as typical:
Exception in thread "main" java.lang.Exception: Something happened
 at Foo.bar(Foo.java:10)
 at Foo.main(Foo.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 0
         at Resource.close(Resource.java:26)
         at Foo.bar(Foo.java:9)
         ... 1 more

Note that the "... n more" notation is used on suppressed exceptions just at it is used on causes. Unlike causes, suppressed exceptions are indented beyond their "containing exceptions."

An exception can have both a cause and one or more suppressed exceptions:

Exception in thread "main" java.lang.Exception: Main block
 at Foo3.main(Foo3.java:7)
 Suppressed: Resource$CloseFailException: Resource ID = 2
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 1
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
Caused by: java.lang.Exception: I did it
 at Foo3.main(Foo3.java:8)

Likewise, a suppressed exception can have a cause:
Exception in thread "main" java.lang.Exception: Main block
 at Foo4.main(Foo4.java:6)
 Suppressed: Resource2$CloseFailException: Resource ID = 1
         at Resource2.close(Resource2.java:20)
         at Foo4.main(Foo4.java:5)
 Caused by: java.lang.Exception: Rats, you caught me
         at Resource2$CloseFailException.<init>(Resource2.java:45)
         ... 2 more

**Returns:** `void`

---

## VsanDpFaultDpdThrottleLimitExceeded

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `reason` |  | `String` | No |
| `localizedMessage` | Creates a localized description of this throwable. Subclasses may override this method in order to produce a locale-specific message. For subclasses that do not override this method, the default implementation returns the same result as {@code getMessage()}. | `String` | Yes |
| `message` |  | `String` | No |

### Methods

#### `VsanDpFaultDpdThrottleLimitExceeded`


**Returns:** `void`

---

#### `VsanDpFaultDpdThrottleLimitExceeded`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `reason` | `String` |  |

**Returns:** `void`

---

#### `printStackTrace`
Prints this throwable and its backtrace to the standard error stream. This method prints a stack trace for this {@code Throwable} object on the error output stream that is the value of the field {@code System.err}. The first line of output contains the result of the {@link #toString()} method for this object. Remaining lines represent data previously recorded by the method {@link #fillInStackTrace()}. The format of this information depends on the implementation, but the following example may be regarded as typical:
java.lang.NullPointerException
        at MyClass.mash(MyClass.java:9)
        at MyClass.crunch(MyClass.java:6)
        at MyClass.main(MyClass.java:3)

This example was produced by running the program:
class MyClass {
    public static void main(String[] args) {
        crunch(null);
    }
    static void crunch(int[] a) {
        mash(a);
    }
    static void mash(int[] b) {
        System.out.println(b[0]);
    }
}

The backtrace for a throwable with an initialized, non-null cause should generally include the backtrace for the cause. The format of this information depends on the implementation, but the following example may be regarded as typical:
HighLevelException: MidLevelException: LowLevelException
        at Junk.a(Junk.java:13)
        at Junk.main(Junk.java:4)
Caused by: MidLevelException: LowLevelException
        at Junk.c(Junk.java:23)
        at Junk.b(Junk.java:17)
        at Junk.a(Junk.java:11)
        ... 1 more
Caused by: LowLevelException
        at Junk.e(Junk.java:30)
        at Junk.d(Junk.java:27)
        at Junk.c(Junk.java:21)
        ... 3 more

Note the presence of lines containing the characters {@code "..."}. These lines indicate that the remainder of the stack trace for this exception matches the indicated number of frames from the bottom of the stack trace of the exception that was caused by this exception (the "enclosing" exception). This shorthand can greatly reduce the length of the output in the common case where a wrapped exception is thrown from same method as the "causative exception" is caught. The above example was produced by running the program:
public class Junk {
    public static void main(String args[]) {
        try {
            a();
        } catch(HighLevelException e) {
            e.printStackTrace();
        }
    }
    static void a() throws HighLevelException {
        try {
            b();
        } catch(MidLevelException e) {
            throw new HighLevelException(e);
        }
    }
    static void b() throws MidLevelException {
        c();
    }
    static void c() throws MidLevelException {
        try {
            d();
        } catch(LowLevelException e) {
            throw new MidLevelException(e);
        }
    }
    static void d() throws LowLevelException {
       e();
    }
    static void e() throws LowLevelException {
        throw new LowLevelException();
    }
}

class HighLevelException extends Exception {
    HighLevelException(Throwable cause) { super(cause); }
}

class MidLevelException extends Exception {
    MidLevelException(Throwable cause)  { super(cause); }
}

class LowLevelException extends Exception {
}

As of release 7, the platform supports the notion of suppressed exceptions (in conjunction with the {@code try}-with-resources statement). Any exceptions that were suppressed in order to deliver an exception are printed out beneath the stack trace. The format of this information depends on the implementation, but the following example may be regarded as typical:
Exception in thread "main" java.lang.Exception: Something happened
 at Foo.bar(Foo.java:10)
 at Foo.main(Foo.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 0
         at Resource.close(Resource.java:26)
         at Foo.bar(Foo.java:9)
         ... 1 more

Note that the "... n more" notation is used on suppressed exceptions just at it is used on causes. Unlike causes, suppressed exceptions are indented beyond their "containing exceptions."

An exception can have both a cause and one or more suppressed exceptions:

Exception in thread "main" java.lang.Exception: Main block
 at Foo3.main(Foo3.java:7)
 Suppressed: Resource$CloseFailException: Resource ID = 2
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 1
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
Caused by: java.lang.Exception: I did it
 at Foo3.main(Foo3.java:8)

Likewise, a suppressed exception can have a cause:
Exception in thread "main" java.lang.Exception: Main block
 at Foo4.main(Foo4.java:6)
 Suppressed: Resource2$CloseFailException: Resource ID = 1
         at Resource2.close(Resource2.java:20)
         at Foo4.main(Foo4.java:5)
 Caused by: java.lang.Exception: Rats, you caught me
         at Resource2$CloseFailException.<init>(Resource2.java:45)
         ... 2 more

**Returns:** `void`

---

## VsanDpFaultDpsBusy

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `reason` |  | `String` | No |
| `localizedMessage` | Creates a localized description of this throwable. Subclasses may override this method in order to produce a locale-specific message. For subclasses that do not override this method, the default implementation returns the same result as {@code getMessage()}. | `String` | Yes |
| `message` |  | `String` | No |

### Methods

#### `VsanDpFaultDpsBusy`


**Returns:** `void`

---

#### `VsanDpFaultDpsBusy`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `reason` | `String` |  |

**Returns:** `void`

---

#### `printStackTrace`
Prints this throwable and its backtrace to the standard error stream. This method prints a stack trace for this {@code Throwable} object on the error output stream that is the value of the field {@code System.err}. The first line of output contains the result of the {@link #toString()} method for this object. Remaining lines represent data previously recorded by the method {@link #fillInStackTrace()}. The format of this information depends on the implementation, but the following example may be regarded as typical:
java.lang.NullPointerException
        at MyClass.mash(MyClass.java:9)
        at MyClass.crunch(MyClass.java:6)
        at MyClass.main(MyClass.java:3)

This example was produced by running the program:
class MyClass {
    public static void main(String[] args) {
        crunch(null);
    }
    static void crunch(int[] a) {
        mash(a);
    }
    static void mash(int[] b) {
        System.out.println(b[0]);
    }
}

The backtrace for a throwable with an initialized, non-null cause should generally include the backtrace for the cause. The format of this information depends on the implementation, but the following example may be regarded as typical:
HighLevelException: MidLevelException: LowLevelException
        at Junk.a(Junk.java:13)
        at Junk.main(Junk.java:4)
Caused by: MidLevelException: LowLevelException
        at Junk.c(Junk.java:23)
        at Junk.b(Junk.java:17)
        at Junk.a(Junk.java:11)
        ... 1 more
Caused by: LowLevelException
        at Junk.e(Junk.java:30)
        at Junk.d(Junk.java:27)
        at Junk.c(Junk.java:21)
        ... 3 more

Note the presence of lines containing the characters {@code "..."}. These lines indicate that the remainder of the stack trace for this exception matches the indicated number of frames from the bottom of the stack trace of the exception that was caused by this exception (the "enclosing" exception). This shorthand can greatly reduce the length of the output in the common case where a wrapped exception is thrown from same method as the "causative exception" is caught. The above example was produced by running the program:
public class Junk {
    public static void main(String args[]) {
        try {
            a();
        } catch(HighLevelException e) {
            e.printStackTrace();
        }
    }
    static void a() throws HighLevelException {
        try {
            b();
        } catch(MidLevelException e) {
            throw new HighLevelException(e);
        }
    }
    static void b() throws MidLevelException {
        c();
    }
    static void c() throws MidLevelException {
        try {
            d();
        } catch(LowLevelException e) {
            throw new MidLevelException(e);
        }
    }
    static void d() throws LowLevelException {
       e();
    }
    static void e() throws LowLevelException {
        throw new LowLevelException();
    }
}

class HighLevelException extends Exception {
    HighLevelException(Throwable cause) { super(cause); }
}

class MidLevelException extends Exception {
    MidLevelException(Throwable cause)  { super(cause); }
}

class LowLevelException extends Exception {
}

As of release 7, the platform supports the notion of suppressed exceptions (in conjunction with the {@code try}-with-resources statement). Any exceptions that were suppressed in order to deliver an exception are printed out beneath the stack trace. The format of this information depends on the implementation, but the following example may be regarded as typical:
Exception in thread "main" java.lang.Exception: Something happened
 at Foo.bar(Foo.java:10)
 at Foo.main(Foo.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 0
         at Resource.close(Resource.java:26)
         at Foo.bar(Foo.java:9)
         ... 1 more

Note that the "... n more" notation is used on suppressed exceptions just at it is used on causes. Unlike causes, suppressed exceptions are indented beyond their "containing exceptions."

An exception can have both a cause and one or more suppressed exceptions:

Exception in thread "main" java.lang.Exception: Main block
 at Foo3.main(Foo3.java:7)
 Suppressed: Resource$CloseFailException: Resource ID = 2
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 1
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
Caused by: java.lang.Exception: I did it
 at Foo3.main(Foo3.java:8)

Likewise, a suppressed exception can have a cause:
Exception in thread "main" java.lang.Exception: Main block
 at Foo4.main(Foo4.java:6)
 Suppressed: Resource2$CloseFailException: Resource ID = 1
         at Resource2.close(Resource2.java:20)
         at Foo4.main(Foo4.java:5)
 Caused by: java.lang.Exception: Rats, you caught me
         at Resource2$CloseFailException.<init>(Resource2.java:45)
         ... 2 more

**Returns:** `void`

---

## VsanDpFaultDpsFault

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `reason` |  | `String` | No |
| `localizedMessage` | Creates a localized description of this throwable. Subclasses may override this method in order to produce a locale-specific message. For subclasses that do not override this method, the default implementation returns the same result as {@code getMessage()}. | `String` | Yes |
| `message` |  | `String` | No |

### Methods

#### `VsanDpFaultDpsFault`


**Returns:** `void`

---

#### `VsanDpFaultDpsFault`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `reason` | `String` |  |

**Returns:** `void`

---

#### `printStackTrace`
Prints this throwable and its backtrace to the standard error stream. This method prints a stack trace for this {@code Throwable} object on the error output stream that is the value of the field {@code System.err}. The first line of output contains the result of the {@link #toString()} method for this object. Remaining lines represent data previously recorded by the method {@link #fillInStackTrace()}. The format of this information depends on the implementation, but the following example may be regarded as typical:
java.lang.NullPointerException
        at MyClass.mash(MyClass.java:9)
        at MyClass.crunch(MyClass.java:6)
        at MyClass.main(MyClass.java:3)

This example was produced by running the program:
class MyClass {
    public static void main(String[] args) {
        crunch(null);
    }
    static void crunch(int[] a) {
        mash(a);
    }
    static void mash(int[] b) {
        System.out.println(b[0]);
    }
}

The backtrace for a throwable with an initialized, non-null cause should generally include the backtrace for the cause. The format of this information depends on the implementation, but the following example may be regarded as typical:
HighLevelException: MidLevelException: LowLevelException
        at Junk.a(Junk.java:13)
        at Junk.main(Junk.java:4)
Caused by: MidLevelException: LowLevelException
        at Junk.c(Junk.java:23)
        at Junk.b(Junk.java:17)
        at Junk.a(Junk.java:11)
        ... 1 more
Caused by: LowLevelException
        at Junk.e(Junk.java:30)
        at Junk.d(Junk.java:27)
        at Junk.c(Junk.java:21)
        ... 3 more

Note the presence of lines containing the characters {@code "..."}. These lines indicate that the remainder of the stack trace for this exception matches the indicated number of frames from the bottom of the stack trace of the exception that was caused by this exception (the "enclosing" exception). This shorthand can greatly reduce the length of the output in the common case where a wrapped exception is thrown from same method as the "causative exception" is caught. The above example was produced by running the program:
public class Junk {
    public static void main(String args[]) {
        try {
            a();
        } catch(HighLevelException e) {
            e.printStackTrace();
        }
    }
    static void a() throws HighLevelException {
        try {
            b();
        } catch(MidLevelException e) {
            throw new HighLevelException(e);
        }
    }
    static void b() throws MidLevelException {
        c();
    }
    static void c() throws MidLevelException {
        try {
            d();
        } catch(LowLevelException e) {
            throw new MidLevelException(e);
        }
    }
    static void d() throws LowLevelException {
       e();
    }
    static void e() throws LowLevelException {
        throw new LowLevelException();
    }
}

class HighLevelException extends Exception {
    HighLevelException(Throwable cause) { super(cause); }
}

class MidLevelException extends Exception {
    MidLevelException(Throwable cause)  { super(cause); }
}

class LowLevelException extends Exception {
}

As of release 7, the platform supports the notion of suppressed exceptions (in conjunction with the {@code try}-with-resources statement). Any exceptions that were suppressed in order to deliver an exception are printed out beneath the stack trace. The format of this information depends on the implementation, but the following example may be regarded as typical:
Exception in thread "main" java.lang.Exception: Something happened
 at Foo.bar(Foo.java:10)
 at Foo.main(Foo.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 0
         at Resource.close(Resource.java:26)
         at Foo.bar(Foo.java:9)
         ... 1 more

Note that the "... n more" notation is used on suppressed exceptions just at it is used on causes. Unlike causes, suppressed exceptions are indented beyond their "containing exceptions."

An exception can have both a cause and one or more suppressed exceptions:

Exception in thread "main" java.lang.Exception: Main block
 at Foo3.main(Foo3.java:7)
 Suppressed: Resource$CloseFailException: Resource ID = 2
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 1
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
Caused by: java.lang.Exception: I did it
 at Foo3.main(Foo3.java:8)

Likewise, a suppressed exception can have a cause:
Exception in thread "main" java.lang.Exception: Main block
 at Foo4.main(Foo4.java:6)
 Suppressed: Resource2$CloseFailException: Resource ID = 1
         at Resource2.close(Resource2.java:20)
         at Foo4.main(Foo4.java:5)
 Caused by: java.lang.Exception: Rats, you caught me
         at Resource2$CloseFailException.<init>(Resource2.java:45)
         ... 2 more

**Returns:** `void`

---

## VsanDpFaultDpsRestarted

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `reason` |  | `String` | No |
| `localizedMessage` | Creates a localized description of this throwable. Subclasses may override this method in order to produce a locale-specific message. For subclasses that do not override this method, the default implementation returns the same result as {@code getMessage()}. | `String` | Yes |
| `message` |  | `String` | No |

### Methods

#### `VsanDpFaultDpsRestarted`


**Returns:** `void`

---

#### `VsanDpFaultDpsRestarted`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `reason` | `String` |  |

**Returns:** `void`

---

#### `printStackTrace`
Prints this throwable and its backtrace to the standard error stream. This method prints a stack trace for this {@code Throwable} object on the error output stream that is the value of the field {@code System.err}. The first line of output contains the result of the {@link #toString()} method for this object. Remaining lines represent data previously recorded by the method {@link #fillInStackTrace()}. The format of this information depends on the implementation, but the following example may be regarded as typical:
java.lang.NullPointerException
        at MyClass.mash(MyClass.java:9)
        at MyClass.crunch(MyClass.java:6)
        at MyClass.main(MyClass.java:3)

This example was produced by running the program:
class MyClass {
    public static void main(String[] args) {
        crunch(null);
    }
    static void crunch(int[] a) {
        mash(a);
    }
    static void mash(int[] b) {
        System.out.println(b[0]);
    }
}

The backtrace for a throwable with an initialized, non-null cause should generally include the backtrace for the cause. The format of this information depends on the implementation, but the following example may be regarded as typical:
HighLevelException: MidLevelException: LowLevelException
        at Junk.a(Junk.java:13)
        at Junk.main(Junk.java:4)
Caused by: MidLevelException: LowLevelException
        at Junk.c(Junk.java:23)
        at Junk.b(Junk.java:17)
        at Junk.a(Junk.java:11)
        ... 1 more
Caused by: LowLevelException
        at Junk.e(Junk.java:30)
        at Junk.d(Junk.java:27)
        at Junk.c(Junk.java:21)
        ... 3 more

Note the presence of lines containing the characters {@code "..."}. These lines indicate that the remainder of the stack trace for this exception matches the indicated number of frames from the bottom of the stack trace of the exception that was caused by this exception (the "enclosing" exception). This shorthand can greatly reduce the length of the output in the common case where a wrapped exception is thrown from same method as the "causative exception" is caught. The above example was produced by running the program:
public class Junk {
    public static void main(String args[]) {
        try {
            a();
        } catch(HighLevelException e) {
            e.printStackTrace();
        }
    }
    static void a() throws HighLevelException {
        try {
            b();
        } catch(MidLevelException e) {
            throw new HighLevelException(e);
        }
    }
    static void b() throws MidLevelException {
        c();
    }
    static void c() throws MidLevelException {
        try {
            d();
        } catch(LowLevelException e) {
            throw new MidLevelException(e);
        }
    }
    static void d() throws LowLevelException {
       e();
    }
    static void e() throws LowLevelException {
        throw new LowLevelException();
    }
}

class HighLevelException extends Exception {
    HighLevelException(Throwable cause) { super(cause); }
}

class MidLevelException extends Exception {
    MidLevelException(Throwable cause)  { super(cause); }
}

class LowLevelException extends Exception {
}

As of release 7, the platform supports the notion of suppressed exceptions (in conjunction with the {@code try}-with-resources statement). Any exceptions that were suppressed in order to deliver an exception are printed out beneath the stack trace. The format of this information depends on the implementation, but the following example may be regarded as typical:
Exception in thread "main" java.lang.Exception: Something happened
 at Foo.bar(Foo.java:10)
 at Foo.main(Foo.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 0
         at Resource.close(Resource.java:26)
         at Foo.bar(Foo.java:9)
         ... 1 more

Note that the "... n more" notation is used on suppressed exceptions just at it is used on causes. Unlike causes, suppressed exceptions are indented beyond their "containing exceptions."

An exception can have both a cause and one or more suppressed exceptions:

Exception in thread "main" java.lang.Exception: Main block
 at Foo3.main(Foo3.java:7)
 Suppressed: Resource$CloseFailException: Resource ID = 2
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 1
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
Caused by: java.lang.Exception: I did it
 at Foo3.main(Foo3.java:8)

Likewise, a suppressed exception can have a cause:
Exception in thread "main" java.lang.Exception: Main block
 at Foo4.main(Foo4.java:6)
 Suppressed: Resource2$CloseFailException: Resource ID = 1
         at Resource2.close(Resource2.java:20)
         at Foo4.main(Foo4.java:5)
 Caused by: java.lang.Exception: Rats, you caught me
         at Resource2$CloseFailException.<init>(Resource2.java:45)
         ... 2 more

**Returns:** `void`

---

## VsanDpFaultFullSyncRequired

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `reason` |  | `String` | No |
| `localizedMessage` | Creates a localized description of this throwable. Subclasses may override this method in order to produce a locale-specific message. For subclasses that do not override this method, the default implementation returns the same result as {@code getMessage()}. | `String` | Yes |
| `message` |  | `String` | No |
| `pes` |  | `Array/VsanDpProtectedEntity` | No |

### Methods

#### `VsanDpFaultFullSyncRequired`


**Returns:** `void`

---

#### `VsanDpFaultFullSyncRequired`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `reason` | `String` |  |
| `pes` | `Array/VsanDpProtectedEntity` |  |

**Returns:** `void`

---

#### `printStackTrace`
Prints this throwable and its backtrace to the standard error stream. This method prints a stack trace for this {@code Throwable} object on the error output stream that is the value of the field {@code System.err}. The first line of output contains the result of the {@link #toString()} method for this object. Remaining lines represent data previously recorded by the method {@link #fillInStackTrace()}. The format of this information depends on the implementation, but the following example may be regarded as typical:
java.lang.NullPointerException
        at MyClass.mash(MyClass.java:9)
        at MyClass.crunch(MyClass.java:6)
        at MyClass.main(MyClass.java:3)

This example was produced by running the program:
class MyClass {
    public static void main(String[] args) {
        crunch(null);
    }
    static void crunch(int[] a) {
        mash(a);
    }
    static void mash(int[] b) {
        System.out.println(b[0]);
    }
}

The backtrace for a throwable with an initialized, non-null cause should generally include the backtrace for the cause. The format of this information depends on the implementation, but the following example may be regarded as typical:
HighLevelException: MidLevelException: LowLevelException
        at Junk.a(Junk.java:13)
        at Junk.main(Junk.java:4)
Caused by: MidLevelException: LowLevelException
        at Junk.c(Junk.java:23)
        at Junk.b(Junk.java:17)
        at Junk.a(Junk.java:11)
        ... 1 more
Caused by: LowLevelException
        at Junk.e(Junk.java:30)
        at Junk.d(Junk.java:27)
        at Junk.c(Junk.java:21)
        ... 3 more

Note the presence of lines containing the characters {@code "..."}. These lines indicate that the remainder of the stack trace for this exception matches the indicated number of frames from the bottom of the stack trace of the exception that was caused by this exception (the "enclosing" exception). This shorthand can greatly reduce the length of the output in the common case where a wrapped exception is thrown from same method as the "causative exception" is caught. The above example was produced by running the program:
public class Junk {
    public static void main(String args[]) {
        try {
            a();
        } catch(HighLevelException e) {
            e.printStackTrace();
        }
    }
    static void a() throws HighLevelException {
        try {
            b();
        } catch(MidLevelException e) {
            throw new HighLevelException(e);
        }
    }
    static void b() throws MidLevelException {
        c();
    }
    static void c() throws MidLevelException {
        try {
            d();
        } catch(LowLevelException e) {
            throw new MidLevelException(e);
        }
    }
    static void d() throws LowLevelException {
       e();
    }
    static void e() throws LowLevelException {
        throw new LowLevelException();
    }
}

class HighLevelException extends Exception {
    HighLevelException(Throwable cause) { super(cause); }
}

class MidLevelException extends Exception {
    MidLevelException(Throwable cause)  { super(cause); }
}

class LowLevelException extends Exception {
}

As of release 7, the platform supports the notion of suppressed exceptions (in conjunction with the {@code try}-with-resources statement). Any exceptions that were suppressed in order to deliver an exception are printed out beneath the stack trace. The format of this information depends on the implementation, but the following example may be regarded as typical:
Exception in thread "main" java.lang.Exception: Something happened
 at Foo.bar(Foo.java:10)
 at Foo.main(Foo.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 0
         at Resource.close(Resource.java:26)
         at Foo.bar(Foo.java:9)
         ... 1 more

Note that the "... n more" notation is used on suppressed exceptions just at it is used on causes. Unlike causes, suppressed exceptions are indented beyond their "containing exceptions."

An exception can have both a cause and one or more suppressed exceptions:

Exception in thread "main" java.lang.Exception: Main block
 at Foo3.main(Foo3.java:7)
 Suppressed: Resource$CloseFailException: Resource ID = 2
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 1
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
Caused by: java.lang.Exception: I did it
 at Foo3.main(Foo3.java:8)

Likewise, a suppressed exception can have a cause:
Exception in thread "main" java.lang.Exception: Main block
 at Foo4.main(Foo4.java:6)
 Suppressed: Resource2$CloseFailException: Resource ID = 1
         at Resource2.close(Resource2.java:20)
         at Foo4.main(Foo4.java:5)
 Caused by: java.lang.Exception: Rats, you caught me
         at Resource2$CloseFailException.<init>(Resource2.java:45)
         ... 2 more

**Returns:** `void`

---

## VsanDpFaultIncompatibleHost

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `reason` |  | `String` | No |
| `localizedMessage` | Creates a localized description of this throwable. Subclasses may override this method in order to produce a locale-specific message. For subclasses that do not override this method, the default implementation returns the same result as {@code getMessage()}. | `String` | Yes |
| `hosts` |  | `Array/VsanManagedObjectReference` | No |
| `message` |  | `String` | No |

### Methods

#### `VsanDpFaultIncompatibleHost`


**Returns:** `void`

---

#### `VsanDpFaultIncompatibleHost`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `reason` | `String` |  |
| `hosts` | `Array/VsanManagedObjectReference` |  |

**Returns:** `void`

---

#### `printStackTrace`
Prints this throwable and its backtrace to the standard error stream. This method prints a stack trace for this {@code Throwable} object on the error output stream that is the value of the field {@code System.err}. The first line of output contains the result of the {@link #toString()} method for this object. Remaining lines represent data previously recorded by the method {@link #fillInStackTrace()}. The format of this information depends on the implementation, but the following example may be regarded as typical:
java.lang.NullPointerException
        at MyClass.mash(MyClass.java:9)
        at MyClass.crunch(MyClass.java:6)
        at MyClass.main(MyClass.java:3)

This example was produced by running the program:
class MyClass {
    public static void main(String[] args) {
        crunch(null);
    }
    static void crunch(int[] a) {
        mash(a);
    }
    static void mash(int[] b) {
        System.out.println(b[0]);
    }
}

The backtrace for a throwable with an initialized, non-null cause should generally include the backtrace for the cause. The format of this information depends on the implementation, but the following example may be regarded as typical:
HighLevelException: MidLevelException: LowLevelException
        at Junk.a(Junk.java:13)
        at Junk.main(Junk.java:4)
Caused by: MidLevelException: LowLevelException
        at Junk.c(Junk.java:23)
        at Junk.b(Junk.java:17)
        at Junk.a(Junk.java:11)
        ... 1 more
Caused by: LowLevelException
        at Junk.e(Junk.java:30)
        at Junk.d(Junk.java:27)
        at Junk.c(Junk.java:21)
        ... 3 more

Note the presence of lines containing the characters {@code "..."}. These lines indicate that the remainder of the stack trace for this exception matches the indicated number of frames from the bottom of the stack trace of the exception that was caused by this exception (the "enclosing" exception). This shorthand can greatly reduce the length of the output in the common case where a wrapped exception is thrown from same method as the "causative exception" is caught. The above example was produced by running the program:
public class Junk {
    public static void main(String args[]) {
        try {
            a();
        } catch(HighLevelException e) {
            e.printStackTrace();
        }
    }
    static void a() throws HighLevelException {
        try {
            b();
        } catch(MidLevelException e) {
            throw new HighLevelException(e);
        }
    }
    static void b() throws MidLevelException {
        c();
    }
    static void c() throws MidLevelException {
        try {
            d();
        } catch(LowLevelException e) {
            throw new MidLevelException(e);
        }
    }
    static void d() throws LowLevelException {
       e();
    }
    static void e() throws LowLevelException {
        throw new LowLevelException();
    }
}

class HighLevelException extends Exception {
    HighLevelException(Throwable cause) { super(cause); }
}

class MidLevelException extends Exception {
    MidLevelException(Throwable cause)  { super(cause); }
}

class LowLevelException extends Exception {
}

As of release 7, the platform supports the notion of suppressed exceptions (in conjunction with the {@code try}-with-resources statement). Any exceptions that were suppressed in order to deliver an exception are printed out beneath the stack trace. The format of this information depends on the implementation, but the following example may be regarded as typical:
Exception in thread "main" java.lang.Exception: Something happened
 at Foo.bar(Foo.java:10)
 at Foo.main(Foo.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 0
         at Resource.close(Resource.java:26)
         at Foo.bar(Foo.java:9)
         ... 1 more

Note that the "... n more" notation is used on suppressed exceptions just at it is used on causes. Unlike causes, suppressed exceptions are indented beyond their "containing exceptions."

An exception can have both a cause and one or more suppressed exceptions:

Exception in thread "main" java.lang.Exception: Main block
 at Foo3.main(Foo3.java:7)
 Suppressed: Resource$CloseFailException: Resource ID = 2
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 1
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
Caused by: java.lang.Exception: I did it
 at Foo3.main(Foo3.java:8)

Likewise, a suppressed exception can have a cause:
Exception in thread "main" java.lang.Exception: Main block
 at Foo4.main(Foo4.java:6)
 Suppressed: Resource2$CloseFailException: Resource ID = 1
         at Resource2.close(Resource2.java:20)
         at Foo4.main(Foo4.java:5)
 Caused by: java.lang.Exception: Rats, you caught me
         at Resource2$CloseFailException.<init>(Resource2.java:45)
         ... 2 more

**Returns:** `void`

---

## VsanDpFaultInvalidDisk

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `reason` |  | `String` | No |
| `localizedMessage` | Creates a localized description of this throwable. Subclasses may override this method in order to produce a locale-specific message. For subclasses that do not override this method, the default implementation returns the same result as {@code getMessage()}. | `String` | Yes |
| `message` |  | `String` | No |

### Methods

#### `VsanDpFaultInvalidDisk`


**Returns:** `void`

---

#### `VsanDpFaultInvalidDisk`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `reason` | `String` |  |

**Returns:** `void`

---

#### `printStackTrace`
Prints this throwable and its backtrace to the standard error stream. This method prints a stack trace for this {@code Throwable} object on the error output stream that is the value of the field {@code System.err}. The first line of output contains the result of the {@link #toString()} method for this object. Remaining lines represent data previously recorded by the method {@link #fillInStackTrace()}. The format of this information depends on the implementation, but the following example may be regarded as typical:
java.lang.NullPointerException
        at MyClass.mash(MyClass.java:9)
        at MyClass.crunch(MyClass.java:6)
        at MyClass.main(MyClass.java:3)

This example was produced by running the program:
class MyClass {
    public static void main(String[] args) {
        crunch(null);
    }
    static void crunch(int[] a) {
        mash(a);
    }
    static void mash(int[] b) {
        System.out.println(b[0]);
    }
}

The backtrace for a throwable with an initialized, non-null cause should generally include the backtrace for the cause. The format of this information depends on the implementation, but the following example may be regarded as typical:
HighLevelException: MidLevelException: LowLevelException
        at Junk.a(Junk.java:13)
        at Junk.main(Junk.java:4)
Caused by: MidLevelException: LowLevelException
        at Junk.c(Junk.java:23)
        at Junk.b(Junk.java:17)
        at Junk.a(Junk.java:11)
        ... 1 more
Caused by: LowLevelException
        at Junk.e(Junk.java:30)
        at Junk.d(Junk.java:27)
        at Junk.c(Junk.java:21)
        ... 3 more

Note the presence of lines containing the characters {@code "..."}. These lines indicate that the remainder of the stack trace for this exception matches the indicated number of frames from the bottom of the stack trace of the exception that was caused by this exception (the "enclosing" exception). This shorthand can greatly reduce the length of the output in the common case where a wrapped exception is thrown from same method as the "causative exception" is caught. The above example was produced by running the program:
public class Junk {
    public static void main(String args[]) {
        try {
            a();
        } catch(HighLevelException e) {
            e.printStackTrace();
        }
    }
    static void a() throws HighLevelException {
        try {
            b();
        } catch(MidLevelException e) {
            throw new HighLevelException(e);
        }
    }
    static void b() throws MidLevelException {
        c();
    }
    static void c() throws MidLevelException {
        try {
            d();
        } catch(LowLevelException e) {
            throw new MidLevelException(e);
        }
    }
    static void d() throws LowLevelException {
       e();
    }
    static void e() throws LowLevelException {
        throw new LowLevelException();
    }
}

class HighLevelException extends Exception {
    HighLevelException(Throwable cause) { super(cause); }
}

class MidLevelException extends Exception {
    MidLevelException(Throwable cause)  { super(cause); }
}

class LowLevelException extends Exception {
}

As of release 7, the platform supports the notion of suppressed exceptions (in conjunction with the {@code try}-with-resources statement). Any exceptions that were suppressed in order to deliver an exception are printed out beneath the stack trace. The format of this information depends on the implementation, but the following example may be regarded as typical:
Exception in thread "main" java.lang.Exception: Something happened
 at Foo.bar(Foo.java:10)
 at Foo.main(Foo.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 0
         at Resource.close(Resource.java:26)
         at Foo.bar(Foo.java:9)
         ... 1 more

Note that the "... n more" notation is used on suppressed exceptions just at it is used on causes. Unlike causes, suppressed exceptions are indented beyond their "containing exceptions."

An exception can have both a cause and one or more suppressed exceptions:

Exception in thread "main" java.lang.Exception: Main block
 at Foo3.main(Foo3.java:7)
 Suppressed: Resource$CloseFailException: Resource ID = 2
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 1
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
Caused by: java.lang.Exception: I did it
 at Foo3.main(Foo3.java:8)

Likewise, a suppressed exception can have a cause:
Exception in thread "main" java.lang.Exception: Main block
 at Foo4.main(Foo4.java:6)
 Suppressed: Resource2$CloseFailException: Resource ID = 1
         at Resource2.close(Resource2.java:20)
         at Foo4.main(Foo4.java:5)
 Caused by: java.lang.Exception: Rats, you caught me
         at Resource2$CloseFailException.<init>(Resource2.java:45)
         ... 2 more

**Returns:** `void`

---

## VsanDpFaultInvalidProtectionState

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `reason` |  | `String` | No |
| `localizedMessage` | Creates a localized description of this throwable. Subclasses may override this method in order to produce a locale-specific message. For subclasses that do not override this method, the default implementation returns the same result as {@code getMessage()}. | `String` | Yes |
| `invalidProtectionReason` |  | `String` | No |
| `message` |  | `String` | No |
| `pes` |  | `Array/VsanDpProtectedEntity` | No |

### Methods

#### `VsanDpFaultInvalidProtectionState`


**Returns:** `void`

---

#### `VsanDpFaultInvalidProtectionState`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `reason` | `String` |  |
| `invalidProtectionReason` | `String` |  |
| `pes` | `Array/VsanDpProtectedEntity` |  |

**Returns:** `void`

---

#### `printStackTrace`
Prints this throwable and its backtrace to the standard error stream. This method prints a stack trace for this {@code Throwable} object on the error output stream that is the value of the field {@code System.err}. The first line of output contains the result of the {@link #toString()} method for this object. Remaining lines represent data previously recorded by the method {@link #fillInStackTrace()}. The format of this information depends on the implementation, but the following example may be regarded as typical:
java.lang.NullPointerException
        at MyClass.mash(MyClass.java:9)
        at MyClass.crunch(MyClass.java:6)
        at MyClass.main(MyClass.java:3)

This example was produced by running the program:
class MyClass {
    public static void main(String[] args) {
        crunch(null);
    }
    static void crunch(int[] a) {
        mash(a);
    }
    static void mash(int[] b) {
        System.out.println(b[0]);
    }
}

The backtrace for a throwable with an initialized, non-null cause should generally include the backtrace for the cause. The format of this information depends on the implementation, but the following example may be regarded as typical:
HighLevelException: MidLevelException: LowLevelException
        at Junk.a(Junk.java:13)
        at Junk.main(Junk.java:4)
Caused by: MidLevelException: LowLevelException
        at Junk.c(Junk.java:23)
        at Junk.b(Junk.java:17)
        at Junk.a(Junk.java:11)
        ... 1 more
Caused by: LowLevelException
        at Junk.e(Junk.java:30)
        at Junk.d(Junk.java:27)
        at Junk.c(Junk.java:21)
        ... 3 more

Note the presence of lines containing the characters {@code "..."}. These lines indicate that the remainder of the stack trace for this exception matches the indicated number of frames from the bottom of the stack trace of the exception that was caused by this exception (the "enclosing" exception). This shorthand can greatly reduce the length of the output in the common case where a wrapped exception is thrown from same method as the "causative exception" is caught. The above example was produced by running the program:
public class Junk {
    public static void main(String args[]) {
        try {
            a();
        } catch(HighLevelException e) {
            e.printStackTrace();
        }
    }
    static void a() throws HighLevelException {
        try {
            b();
        } catch(MidLevelException e) {
            throw new HighLevelException(e);
        }
    }
    static void b() throws MidLevelException {
        c();
    }
    static void c() throws MidLevelException {
        try {
            d();
        } catch(LowLevelException e) {
            throw new MidLevelException(e);
        }
    }
    static void d() throws LowLevelException {
       e();
    }
    static void e() throws LowLevelException {
        throw new LowLevelException();
    }
}

class HighLevelException extends Exception {
    HighLevelException(Throwable cause) { super(cause); }
}

class MidLevelException extends Exception {
    MidLevelException(Throwable cause)  { super(cause); }
}

class LowLevelException extends Exception {
}

As of release 7, the platform supports the notion of suppressed exceptions (in conjunction with the {@code try}-with-resources statement). Any exceptions that were suppressed in order to deliver an exception are printed out beneath the stack trace. The format of this information depends on the implementation, but the following example may be regarded as typical:
Exception in thread "main" java.lang.Exception: Something happened
 at Foo.bar(Foo.java:10)
 at Foo.main(Foo.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 0
         at Resource.close(Resource.java:26)
         at Foo.bar(Foo.java:9)
         ... 1 more

Note that the "... n more" notation is used on suppressed exceptions just at it is used on causes. Unlike causes, suppressed exceptions are indented beyond their "containing exceptions."

An exception can have both a cause and one or more suppressed exceptions:

Exception in thread "main" java.lang.Exception: Main block
 at Foo3.main(Foo3.java:7)
 Suppressed: Resource$CloseFailException: Resource ID = 2
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 1
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
Caused by: java.lang.Exception: I did it
 at Foo3.main(Foo3.java:8)

Likewise, a suppressed exception can have a cause:
Exception in thread "main" java.lang.Exception: Main block
 at Foo4.main(Foo4.java:6)
 Suppressed: Resource2$CloseFailException: Resource ID = 1
         at Resource2.close(Resource2.java:20)
         at Foo4.main(Foo4.java:5)
 Caused by: java.lang.Exception: Rats, you caught me
         at Resource2$CloseFailException.<init>(Resource2.java:45)
         ... 2 more

**Returns:** `void`

---

## VsanDpFaultInvalidSnapshot

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `reason` |  | `String` | No |
| `localizedMessage` | Creates a localized description of this throwable. Subclasses may override this method in order to produce a locale-specific message. For subclasses that do not override this method, the default implementation returns the same result as {@code getMessage()}. | `String` | Yes |
| `message` |  | `String` | No |

### Methods

#### `VsanDpFaultInvalidSnapshot`


**Returns:** `void`

---

#### `VsanDpFaultInvalidSnapshot`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `reason` | `String` |  |

**Returns:** `void`

---

#### `printStackTrace`
Prints this throwable and its backtrace to the standard error stream. This method prints a stack trace for this {@code Throwable} object on the error output stream that is the value of the field {@code System.err}. The first line of output contains the result of the {@link #toString()} method for this object. Remaining lines represent data previously recorded by the method {@link #fillInStackTrace()}. The format of this information depends on the implementation, but the following example may be regarded as typical:
java.lang.NullPointerException
        at MyClass.mash(MyClass.java:9)
        at MyClass.crunch(MyClass.java:6)
        at MyClass.main(MyClass.java:3)

This example was produced by running the program:
class MyClass {
    public static void main(String[] args) {
        crunch(null);
    }
    static void crunch(int[] a) {
        mash(a);
    }
    static void mash(int[] b) {
        System.out.println(b[0]);
    }
}

The backtrace for a throwable with an initialized, non-null cause should generally include the backtrace for the cause. The format of this information depends on the implementation, but the following example may be regarded as typical:
HighLevelException: MidLevelException: LowLevelException
        at Junk.a(Junk.java:13)
        at Junk.main(Junk.java:4)
Caused by: MidLevelException: LowLevelException
        at Junk.c(Junk.java:23)
        at Junk.b(Junk.java:17)
        at Junk.a(Junk.java:11)
        ... 1 more
Caused by: LowLevelException
        at Junk.e(Junk.java:30)
        at Junk.d(Junk.java:27)
        at Junk.c(Junk.java:21)
        ... 3 more

Note the presence of lines containing the characters {@code "..."}. These lines indicate that the remainder of the stack trace for this exception matches the indicated number of frames from the bottom of the stack trace of the exception that was caused by this exception (the "enclosing" exception). This shorthand can greatly reduce the length of the output in the common case where a wrapped exception is thrown from same method as the "causative exception" is caught. The above example was produced by running the program:
public class Junk {
    public static void main(String args[]) {
        try {
            a();
        } catch(HighLevelException e) {
            e.printStackTrace();
        }
    }
    static void a() throws HighLevelException {
        try {
            b();
        } catch(MidLevelException e) {
            throw new HighLevelException(e);
        }
    }
    static void b() throws MidLevelException {
        c();
    }
    static void c() throws MidLevelException {
        try {
            d();
        } catch(LowLevelException e) {
            throw new MidLevelException(e);
        }
    }
    static void d() throws LowLevelException {
       e();
    }
    static void e() throws LowLevelException {
        throw new LowLevelException();
    }
}

class HighLevelException extends Exception {
    HighLevelException(Throwable cause) { super(cause); }
}

class MidLevelException extends Exception {
    MidLevelException(Throwable cause)  { super(cause); }
}

class LowLevelException extends Exception {
}

As of release 7, the platform supports the notion of suppressed exceptions (in conjunction with the {@code try}-with-resources statement). Any exceptions that were suppressed in order to deliver an exception are printed out beneath the stack trace. The format of this information depends on the implementation, but the following example may be regarded as typical:
Exception in thread "main" java.lang.Exception: Something happened
 at Foo.bar(Foo.java:10)
 at Foo.main(Foo.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 0
         at Resource.close(Resource.java:26)
         at Foo.bar(Foo.java:9)
         ... 1 more

Note that the "... n more" notation is used on suppressed exceptions just at it is used on causes. Unlike causes, suppressed exceptions are indented beyond their "containing exceptions."

An exception can have both a cause and one or more suppressed exceptions:

Exception in thread "main" java.lang.Exception: Main block
 at Foo3.main(Foo3.java:7)
 Suppressed: Resource$CloseFailException: Resource ID = 2
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 1
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
Caused by: java.lang.Exception: I did it
 at Foo3.main(Foo3.java:8)

Likewise, a suppressed exception can have a cause:
Exception in thread "main" java.lang.Exception: Main block
 at Foo4.main(Foo4.java:6)
 Suppressed: Resource2$CloseFailException: Resource ID = 1
         at Resource2.close(Resource2.java:20)
         at Foo4.main(Foo4.java:5)
 Caused by: java.lang.Exception: Rats, you caught me
         at Resource2$CloseFailException.<init>(Resource2.java:45)
         ... 2 more

**Returns:** `void`

---

## VsanDpFaultInvalidSnapshotType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `reason` |  | `String` | No |
| `localizedMessage` | Creates a localized description of this throwable. Subclasses may override this method in order to produce a locale-specific message. For subclasses that do not override this method, the default implementation returns the same result as {@code getMessage()}. | `String` | Yes |
| `message` |  | `String` | No |

### Methods

#### `VsanDpFaultInvalidSnapshotType`


**Returns:** `void`

---

#### `VsanDpFaultInvalidSnapshotType`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `reason` | `String` |  |

**Returns:** `void`

---

#### `printStackTrace`
Prints this throwable and its backtrace to the standard error stream. This method prints a stack trace for this {@code Throwable} object on the error output stream that is the value of the field {@code System.err}. The first line of output contains the result of the {@link #toString()} method for this object. Remaining lines represent data previously recorded by the method {@link #fillInStackTrace()}. The format of this information depends on the implementation, but the following example may be regarded as typical:
java.lang.NullPointerException
        at MyClass.mash(MyClass.java:9)
        at MyClass.crunch(MyClass.java:6)
        at MyClass.main(MyClass.java:3)

This example was produced by running the program:
class MyClass {
    public static void main(String[] args) {
        crunch(null);
    }
    static void crunch(int[] a) {
        mash(a);
    }
    static void mash(int[] b) {
        System.out.println(b[0]);
    }
}

The backtrace for a throwable with an initialized, non-null cause should generally include the backtrace for the cause. The format of this information depends on the implementation, but the following example may be regarded as typical:
HighLevelException: MidLevelException: LowLevelException
        at Junk.a(Junk.java:13)
        at Junk.main(Junk.java:4)
Caused by: MidLevelException: LowLevelException
        at Junk.c(Junk.java:23)
        at Junk.b(Junk.java:17)
        at Junk.a(Junk.java:11)
        ... 1 more
Caused by: LowLevelException
        at Junk.e(Junk.java:30)
        at Junk.d(Junk.java:27)
        at Junk.c(Junk.java:21)
        ... 3 more

Note the presence of lines containing the characters {@code "..."}. These lines indicate that the remainder of the stack trace for this exception matches the indicated number of frames from the bottom of the stack trace of the exception that was caused by this exception (the "enclosing" exception). This shorthand can greatly reduce the length of the output in the common case where a wrapped exception is thrown from same method as the "causative exception" is caught. The above example was produced by running the program:
public class Junk {
    public static void main(String args[]) {
        try {
            a();
        } catch(HighLevelException e) {
            e.printStackTrace();
        }
    }
    static void a() throws HighLevelException {
        try {
            b();
        } catch(MidLevelException e) {
            throw new HighLevelException(e);
        }
    }
    static void b() throws MidLevelException {
        c();
    }
    static void c() throws MidLevelException {
        try {
            d();
        } catch(LowLevelException e) {
            throw new MidLevelException(e);
        }
    }
    static void d() throws LowLevelException {
       e();
    }
    static void e() throws LowLevelException {
        throw new LowLevelException();
    }
}

class HighLevelException extends Exception {
    HighLevelException(Throwable cause) { super(cause); }
}

class MidLevelException extends Exception {
    MidLevelException(Throwable cause)  { super(cause); }
}

class LowLevelException extends Exception {
}

As of release 7, the platform supports the notion of suppressed exceptions (in conjunction with the {@code try}-with-resources statement). Any exceptions that were suppressed in order to deliver an exception are printed out beneath the stack trace. The format of this information depends on the implementation, but the following example may be regarded as typical:
Exception in thread "main" java.lang.Exception: Something happened
 at Foo.bar(Foo.java:10)
 at Foo.main(Foo.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 0
         at Resource.close(Resource.java:26)
         at Foo.bar(Foo.java:9)
         ... 1 more

Note that the "... n more" notation is used on suppressed exceptions just at it is used on causes. Unlike causes, suppressed exceptions are indented beyond their "containing exceptions."

An exception can have both a cause and one or more suppressed exceptions:

Exception in thread "main" java.lang.Exception: Main block
 at Foo3.main(Foo3.java:7)
 Suppressed: Resource$CloseFailException: Resource ID = 2
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 1
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
Caused by: java.lang.Exception: I did it
 at Foo3.main(Foo3.java:8)

Likewise, a suppressed exception can have a cause:
Exception in thread "main" java.lang.Exception: Main block
 at Foo4.main(Foo4.java:6)
 Suppressed: Resource2$CloseFailException: Resource ID = 1
         at Resource2.close(Resource2.java:20)
         at Foo4.main(Foo4.java:5)
 Caused by: java.lang.Exception: Rats, you caught me
         at Resource2$CloseFailException.<init>(Resource2.java:45)
         ... 2 more

**Returns:** `void`

---

## VsanDpFaultInvalidSource

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `reason` |  | `String` | No |
| `localizedMessage` | Creates a localized description of this throwable. Subclasses may override this method in order to produce a locale-specific message. For subclasses that do not override this method, the default implementation returns the same result as {@code getMessage()}. | `String` | Yes |
| `message` |  | `String` | No |

### Methods

#### `VsanDpFaultInvalidSource`


**Returns:** `void`

---

#### `VsanDpFaultInvalidSource`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `reason` | `String` |  |

**Returns:** `void`

---

#### `printStackTrace`
Prints this throwable and its backtrace to the standard error stream. This method prints a stack trace for this {@code Throwable} object on the error output stream that is the value of the field {@code System.err}. The first line of output contains the result of the {@link #toString()} method for this object. Remaining lines represent data previously recorded by the method {@link #fillInStackTrace()}. The format of this information depends on the implementation, but the following example may be regarded as typical:
java.lang.NullPointerException
        at MyClass.mash(MyClass.java:9)
        at MyClass.crunch(MyClass.java:6)
        at MyClass.main(MyClass.java:3)

This example was produced by running the program:
class MyClass {
    public static void main(String[] args) {
        crunch(null);
    }
    static void crunch(int[] a) {
        mash(a);
    }
    static void mash(int[] b) {
        System.out.println(b[0]);
    }
}

The backtrace for a throwable with an initialized, non-null cause should generally include the backtrace for the cause. The format of this information depends on the implementation, but the following example may be regarded as typical:
HighLevelException: MidLevelException: LowLevelException
        at Junk.a(Junk.java:13)
        at Junk.main(Junk.java:4)
Caused by: MidLevelException: LowLevelException
        at Junk.c(Junk.java:23)
        at Junk.b(Junk.java:17)
        at Junk.a(Junk.java:11)
        ... 1 more
Caused by: LowLevelException
        at Junk.e(Junk.java:30)
        at Junk.d(Junk.java:27)
        at Junk.c(Junk.java:21)
        ... 3 more

Note the presence of lines containing the characters {@code "..."}. These lines indicate that the remainder of the stack trace for this exception matches the indicated number of frames from the bottom of the stack trace of the exception that was caused by this exception (the "enclosing" exception). This shorthand can greatly reduce the length of the output in the common case where a wrapped exception is thrown from same method as the "causative exception" is caught. The above example was produced by running the program:
public class Junk {
    public static void main(String args[]) {
        try {
            a();
        } catch(HighLevelException e) {
            e.printStackTrace();
        }
    }
    static void a() throws HighLevelException {
        try {
            b();
        } catch(MidLevelException e) {
            throw new HighLevelException(e);
        }
    }
    static void b() throws MidLevelException {
        c();
    }
    static void c() throws MidLevelException {
        try {
            d();
        } catch(LowLevelException e) {
            throw new MidLevelException(e);
        }
    }
    static void d() throws LowLevelException {
       e();
    }
    static void e() throws LowLevelException {
        throw new LowLevelException();
    }
}

class HighLevelException extends Exception {
    HighLevelException(Throwable cause) { super(cause); }
}

class MidLevelException extends Exception {
    MidLevelException(Throwable cause)  { super(cause); }
}

class LowLevelException extends Exception {
}

As of release 7, the platform supports the notion of suppressed exceptions (in conjunction with the {@code try}-with-resources statement). Any exceptions that were suppressed in order to deliver an exception are printed out beneath the stack trace. The format of this information depends on the implementation, but the following example may be regarded as typical:
Exception in thread "main" java.lang.Exception: Something happened
 at Foo.bar(Foo.java:10)
 at Foo.main(Foo.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 0
         at Resource.close(Resource.java:26)
         at Foo.bar(Foo.java:9)
         ... 1 more

Note that the "... n more" notation is used on suppressed exceptions just at it is used on causes. Unlike causes, suppressed exceptions are indented beyond their "containing exceptions."

An exception can have both a cause and one or more suppressed exceptions:

Exception in thread "main" java.lang.Exception: Main block
 at Foo3.main(Foo3.java:7)
 Suppressed: Resource$CloseFailException: Resource ID = 2
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 1
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
Caused by: java.lang.Exception: I did it
 at Foo3.main(Foo3.java:8)

Likewise, a suppressed exception can have a cause:
Exception in thread "main" java.lang.Exception: Main block
 at Foo4.main(Foo4.java:6)
 Suppressed: Resource2$CloseFailException: Resource ID = 1
         at Resource2.close(Resource2.java:20)
         at Foo4.main(Foo4.java:5)
 Caused by: java.lang.Exception: Rats, you caught me
         at Resource2$CloseFailException.<init>(Resource2.java:45)
         ... 2 more

**Returns:** `void`

---

## VsanDpFaultInvalidSyncType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `reason` |  | `String` | No |
| `localizedMessage` | Creates a localized description of this throwable. Subclasses may override this method in order to produce a locale-specific message. For subclasses that do not override this method, the default implementation returns the same result as {@code getMessage()}. | `String` | Yes |
| `message` |  | `String` | No |

### Methods

#### `VsanDpFaultInvalidSyncType`


**Returns:** `void`

---

#### `VsanDpFaultInvalidSyncType`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `reason` | `String` |  |

**Returns:** `void`

---

#### `printStackTrace`
Prints this throwable and its backtrace to the standard error stream. This method prints a stack trace for this {@code Throwable} object on the error output stream that is the value of the field {@code System.err}. The first line of output contains the result of the {@link #toString()} method for this object. Remaining lines represent data previously recorded by the method {@link #fillInStackTrace()}. The format of this information depends on the implementation, but the following example may be regarded as typical:
java.lang.NullPointerException
        at MyClass.mash(MyClass.java:9)
        at MyClass.crunch(MyClass.java:6)
        at MyClass.main(MyClass.java:3)

This example was produced by running the program:
class MyClass {
    public static void main(String[] args) {
        crunch(null);
    }
    static void crunch(int[] a) {
        mash(a);
    }
    static void mash(int[] b) {
        System.out.println(b[0]);
    }
}

The backtrace for a throwable with an initialized, non-null cause should generally include the backtrace for the cause. The format of this information depends on the implementation, but the following example may be regarded as typical:
HighLevelException: MidLevelException: LowLevelException
        at Junk.a(Junk.java:13)
        at Junk.main(Junk.java:4)
Caused by: MidLevelException: LowLevelException
        at Junk.c(Junk.java:23)
        at Junk.b(Junk.java:17)
        at Junk.a(Junk.java:11)
        ... 1 more
Caused by: LowLevelException
        at Junk.e(Junk.java:30)
        at Junk.d(Junk.java:27)
        at Junk.c(Junk.java:21)
        ... 3 more

Note the presence of lines containing the characters {@code "..."}. These lines indicate that the remainder of the stack trace for this exception matches the indicated number of frames from the bottom of the stack trace of the exception that was caused by this exception (the "enclosing" exception). This shorthand can greatly reduce the length of the output in the common case where a wrapped exception is thrown from same method as the "causative exception" is caught. The above example was produced by running the program:
public class Junk {
    public static void main(String args[]) {
        try {
            a();
        } catch(HighLevelException e) {
            e.printStackTrace();
        }
    }
    static void a() throws HighLevelException {
        try {
            b();
        } catch(MidLevelException e) {
            throw new HighLevelException(e);
        }
    }
    static void b() throws MidLevelException {
        c();
    }
    static void c() throws MidLevelException {
        try {
            d();
        } catch(LowLevelException e) {
            throw new MidLevelException(e);
        }
    }
    static void d() throws LowLevelException {
       e();
    }
    static void e() throws LowLevelException {
        throw new LowLevelException();
    }
}

class HighLevelException extends Exception {
    HighLevelException(Throwable cause) { super(cause); }
}

class MidLevelException extends Exception {
    MidLevelException(Throwable cause)  { super(cause); }
}

class LowLevelException extends Exception {
}

As of release 7, the platform supports the notion of suppressed exceptions (in conjunction with the {@code try}-with-resources statement). Any exceptions that were suppressed in order to deliver an exception are printed out beneath the stack trace. The format of this information depends on the implementation, but the following example may be regarded as typical:
Exception in thread "main" java.lang.Exception: Something happened
 at Foo.bar(Foo.java:10)
 at Foo.main(Foo.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 0
         at Resource.close(Resource.java:26)
         at Foo.bar(Foo.java:9)
         ... 1 more

Note that the "... n more" notation is used on suppressed exceptions just at it is used on causes. Unlike causes, suppressed exceptions are indented beyond their "containing exceptions."

An exception can have both a cause and one or more suppressed exceptions:

Exception in thread "main" java.lang.Exception: Main block
 at Foo3.main(Foo3.java:7)
 Suppressed: Resource$CloseFailException: Resource ID = 2
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 1
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
Caused by: java.lang.Exception: I did it
 at Foo3.main(Foo3.java:8)

Likewise, a suppressed exception can have a cause:
Exception in thread "main" java.lang.Exception: Main block
 at Foo4.main(Foo4.java:6)
 Suppressed: Resource2$CloseFailException: Resource ID = 1
         at Resource2.close(Resource2.java:20)
         at Foo4.main(Foo4.java:5)
 Caused by: java.lang.Exception: Rats, you caught me
         at Resource2$CloseFailException.<init>(Resource2.java:45)
         ... 2 more

**Returns:** `void`

---

## VsanDpFaultMigrationInProgress

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `taskRef` |  | `VsanManagedObjectReference` | No |
| `reason` |  | `String` | No |
| `localizedMessage` | Creates a localized description of this throwable. Subclasses may override this method in order to produce a locale-specific message. For subclasses that do not override this method, the default implementation returns the same result as {@code getMessage()}. | `String` | Yes |
| `isStorageMigration` |  | `Boolean` | No |
| `migrationType` |  | `String` | No |
| `message` |  | `String` | No |

### Methods

#### `VsanDpFaultMigrationInProgress`


**Returns:** `void`

---

#### `VsanDpFaultMigrationInProgress`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `reason` | `String` |  |
| `taskRef` | `VsanManagedObjectReference` |  |
| `migrationType` | `String` |  |
| `isStorageMigration` | `Boolean` |  |

**Returns:** `void`

---

#### `printStackTrace`
Prints this throwable and its backtrace to the standard error stream. This method prints a stack trace for this {@code Throwable} object on the error output stream that is the value of the field {@code System.err}. The first line of output contains the result of the {@link #toString()} method for this object. Remaining lines represent data previously recorded by the method {@link #fillInStackTrace()}. The format of this information depends on the implementation, but the following example may be regarded as typical:
java.lang.NullPointerException
        at MyClass.mash(MyClass.java:9)
        at MyClass.crunch(MyClass.java:6)
        at MyClass.main(MyClass.java:3)

This example was produced by running the program:
class MyClass {
    public static void main(String[] args) {
        crunch(null);
    }
    static void crunch(int[] a) {
        mash(a);
    }
    static void mash(int[] b) {
        System.out.println(b[0]);
    }
}

The backtrace for a throwable with an initialized, non-null cause should generally include the backtrace for the cause. The format of this information depends on the implementation, but the following example may be regarded as typical:
HighLevelException: MidLevelException: LowLevelException
        at Junk.a(Junk.java:13)
        at Junk.main(Junk.java:4)
Caused by: MidLevelException: LowLevelException
        at Junk.c(Junk.java:23)
        at Junk.b(Junk.java:17)
        at Junk.a(Junk.java:11)
        ... 1 more
Caused by: LowLevelException
        at Junk.e(Junk.java:30)
        at Junk.d(Junk.java:27)
        at Junk.c(Junk.java:21)
        ... 3 more

Note the presence of lines containing the characters {@code "..."}. These lines indicate that the remainder of the stack trace for this exception matches the indicated number of frames from the bottom of the stack trace of the exception that was caused by this exception (the "enclosing" exception). This shorthand can greatly reduce the length of the output in the common case where a wrapped exception is thrown from same method as the "causative exception" is caught. The above example was produced by running the program:
public class Junk {
    public static void main(String args[]) {
        try {
            a();
        } catch(HighLevelException e) {
            e.printStackTrace();
        }
    }
    static void a() throws HighLevelException {
        try {
            b();
        } catch(MidLevelException e) {
            throw new HighLevelException(e);
        }
    }
    static void b() throws MidLevelException {
        c();
    }
    static void c() throws MidLevelException {
        try {
            d();
        } catch(LowLevelException e) {
            throw new MidLevelException(e);
        }
    }
    static void d() throws LowLevelException {
       e();
    }
    static void e() throws LowLevelException {
        throw new LowLevelException();
    }
}

class HighLevelException extends Exception {
    HighLevelException(Throwable cause) { super(cause); }
}

class MidLevelException extends Exception {
    MidLevelException(Throwable cause)  { super(cause); }
}

class LowLevelException extends Exception {
}

As of release 7, the platform supports the notion of suppressed exceptions (in conjunction with the {@code try}-with-resources statement). Any exceptions that were suppressed in order to deliver an exception are printed out beneath the stack trace. The format of this information depends on the implementation, but the following example may be regarded as typical:
Exception in thread "main" java.lang.Exception: Something happened
 at Foo.bar(Foo.java:10)
 at Foo.main(Foo.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 0
         at Resource.close(Resource.java:26)
         at Foo.bar(Foo.java:9)
         ... 1 more

Note that the "... n more" notation is used on suppressed exceptions just at it is used on causes. Unlike causes, suppressed exceptions are indented beyond their "containing exceptions."

An exception can have both a cause and one or more suppressed exceptions:

Exception in thread "main" java.lang.Exception: Main block
 at Foo3.main(Foo3.java:7)
 Suppressed: Resource$CloseFailException: Resource ID = 2
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 1
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
Caused by: java.lang.Exception: I did it
 at Foo3.main(Foo3.java:8)

Likewise, a suppressed exception can have a cause:
Exception in thread "main" java.lang.Exception: Main block
 at Foo4.main(Foo4.java:6)
 Suppressed: Resource2$CloseFailException: Resource ID = 1
         at Resource2.close(Resource2.java:20)
         at Foo4.main(Foo4.java:5)
 Caused by: java.lang.Exception: Rats, you caught me
         at Resource2$CloseFailException.<init>(Resource2.java:45)
         ... 2 more

**Returns:** `void`

---

## VsanDpFaultMultipleHostFailure

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `reason` |  | `String` | No |
| `localizedMessage` | Creates a localized description of this throwable. Subclasses may override this method in order to produce a locale-specific message. For subclasses that do not override this method, the default implementation returns the same result as {@code getMessage()}. | `String` | Yes |
| `hostFailures` |  | `Array/VsanDpHostFailure` | No |
| `message` |  | `String` | No |

### Methods

#### `VsanDpFaultMultipleHostFailure`


**Returns:** `void`

---

#### `VsanDpFaultMultipleHostFailure`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `reason` | `String` |  |
| `hostFailures` | `Array/VsanDpHostFailure` |  |

**Returns:** `void`

---

#### `printStackTrace`
Prints this throwable and its backtrace to the standard error stream. This method prints a stack trace for this {@code Throwable} object on the error output stream that is the value of the field {@code System.err}. The first line of output contains the result of the {@link #toString()} method for this object. Remaining lines represent data previously recorded by the method {@link #fillInStackTrace()}. The format of this information depends on the implementation, but the following example may be regarded as typical:
java.lang.NullPointerException
        at MyClass.mash(MyClass.java:9)
        at MyClass.crunch(MyClass.java:6)
        at MyClass.main(MyClass.java:3)

This example was produced by running the program:
class MyClass {
    public static void main(String[] args) {
        crunch(null);
    }
    static void crunch(int[] a) {
        mash(a);
    }
    static void mash(int[] b) {
        System.out.println(b[0]);
    }
}

The backtrace for a throwable with an initialized, non-null cause should generally include the backtrace for the cause. The format of this information depends on the implementation, but the following example may be regarded as typical:
HighLevelException: MidLevelException: LowLevelException
        at Junk.a(Junk.java:13)
        at Junk.main(Junk.java:4)
Caused by: MidLevelException: LowLevelException
        at Junk.c(Junk.java:23)
        at Junk.b(Junk.java:17)
        at Junk.a(Junk.java:11)
        ... 1 more
Caused by: LowLevelException
        at Junk.e(Junk.java:30)
        at Junk.d(Junk.java:27)
        at Junk.c(Junk.java:21)
        ... 3 more

Note the presence of lines containing the characters {@code "..."}. These lines indicate that the remainder of the stack trace for this exception matches the indicated number of frames from the bottom of the stack trace of the exception that was caused by this exception (the "enclosing" exception). This shorthand can greatly reduce the length of the output in the common case where a wrapped exception is thrown from same method as the "causative exception" is caught. The above example was produced by running the program:
public class Junk {
    public static void main(String args[]) {
        try {
            a();
        } catch(HighLevelException e) {
            e.printStackTrace();
        }
    }
    static void a() throws HighLevelException {
        try {
            b();
        } catch(MidLevelException e) {
            throw new HighLevelException(e);
        }
    }
    static void b() throws MidLevelException {
        c();
    }
    static void c() throws MidLevelException {
        try {
            d();
        } catch(LowLevelException e) {
            throw new MidLevelException(e);
        }
    }
    static void d() throws LowLevelException {
       e();
    }
    static void e() throws LowLevelException {
        throw new LowLevelException();
    }
}

class HighLevelException extends Exception {
    HighLevelException(Throwable cause) { super(cause); }
}

class MidLevelException extends Exception {
    MidLevelException(Throwable cause)  { super(cause); }
}

class LowLevelException extends Exception {
}

As of release 7, the platform supports the notion of suppressed exceptions (in conjunction with the {@code try}-with-resources statement). Any exceptions that were suppressed in order to deliver an exception are printed out beneath the stack trace. The format of this information depends on the implementation, but the following example may be regarded as typical:
Exception in thread "main" java.lang.Exception: Something happened
 at Foo.bar(Foo.java:10)
 at Foo.main(Foo.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 0
         at Resource.close(Resource.java:26)
         at Foo.bar(Foo.java:9)
         ... 1 more

Note that the "... n more" notation is used on suppressed exceptions just at it is used on causes. Unlike causes, suppressed exceptions are indented beyond their "containing exceptions."

An exception can have both a cause and one or more suppressed exceptions:

Exception in thread "main" java.lang.Exception: Main block
 at Foo3.main(Foo3.java:7)
 Suppressed: Resource$CloseFailException: Resource ID = 2
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 1
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
Caused by: java.lang.Exception: I did it
 at Foo3.main(Foo3.java:8)

Likewise, a suppressed exception can have a cause:
Exception in thread "main" java.lang.Exception: Main block
 at Foo4.main(Foo4.java:6)
 Suppressed: Resource2$CloseFailException: Resource ID = 1
         at Resource2.close(Resource2.java:20)
         at Foo4.main(Foo4.java:5)
 Caused by: java.lang.Exception: Rats, you caught me
         at Resource2$CloseFailException.<init>(Resource2.java:45)
         ... 2 more

**Returns:** `void`

---

## VsanDpFaultMultiplePeFailure

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `reason` |  | `String` | No |
| `localizedMessage` | Creates a localized description of this throwable. Subclasses may override this method in order to produce a locale-specific message. For subclasses that do not override this method, the default implementation returns the same result as {@code getMessage()}. | `String` | Yes |
| `peFailures` |  | `Array/VsanDpPeFailure` | No |
| `message` |  | `String` | No |

### Methods

#### `VsanDpFaultMultiplePeFailure`


**Returns:** `void`

---

#### `VsanDpFaultMultiplePeFailure`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `reason` | `String` |  |
| `peFailures` | `Array/VsanDpPeFailure` |  |

**Returns:** `void`

---

#### `printStackTrace`
Prints this throwable and its backtrace to the standard error stream. This method prints a stack trace for this {@code Throwable} object on the error output stream that is the value of the field {@code System.err}. The first line of output contains the result of the {@link #toString()} method for this object. Remaining lines represent data previously recorded by the method {@link #fillInStackTrace()}. The format of this information depends on the implementation, but the following example may be regarded as typical:
java.lang.NullPointerException
        at MyClass.mash(MyClass.java:9)
        at MyClass.crunch(MyClass.java:6)
        at MyClass.main(MyClass.java:3)

This example was produced by running the program:
class MyClass {
    public static void main(String[] args) {
        crunch(null);
    }
    static void crunch(int[] a) {
        mash(a);
    }
    static void mash(int[] b) {
        System.out.println(b[0]);
    }
}

The backtrace for a throwable with an initialized, non-null cause should generally include the backtrace for the cause. The format of this information depends on the implementation, but the following example may be regarded as typical:
HighLevelException: MidLevelException: LowLevelException
        at Junk.a(Junk.java:13)
        at Junk.main(Junk.java:4)
Caused by: MidLevelException: LowLevelException
        at Junk.c(Junk.java:23)
        at Junk.b(Junk.java:17)
        at Junk.a(Junk.java:11)
        ... 1 more
Caused by: LowLevelException
        at Junk.e(Junk.java:30)
        at Junk.d(Junk.java:27)
        at Junk.c(Junk.java:21)
        ... 3 more

Note the presence of lines containing the characters {@code "..."}. These lines indicate that the remainder of the stack trace for this exception matches the indicated number of frames from the bottom of the stack trace of the exception that was caused by this exception (the "enclosing" exception). This shorthand can greatly reduce the length of the output in the common case where a wrapped exception is thrown from same method as the "causative exception" is caught. The above example was produced by running the program:
public class Junk {
    public static void main(String args[]) {
        try {
            a();
        } catch(HighLevelException e) {
            e.printStackTrace();
        }
    }
    static void a() throws HighLevelException {
        try {
            b();
        } catch(MidLevelException e) {
            throw new HighLevelException(e);
        }
    }
    static void b() throws MidLevelException {
        c();
    }
    static void c() throws MidLevelException {
        try {
            d();
        } catch(LowLevelException e) {
            throw new MidLevelException(e);
        }
    }
    static void d() throws LowLevelException {
       e();
    }
    static void e() throws LowLevelException {
        throw new LowLevelException();
    }
}

class HighLevelException extends Exception {
    HighLevelException(Throwable cause) { super(cause); }
}

class MidLevelException extends Exception {
    MidLevelException(Throwable cause)  { super(cause); }
}

class LowLevelException extends Exception {
}

As of release 7, the platform supports the notion of suppressed exceptions (in conjunction with the {@code try}-with-resources statement). Any exceptions that were suppressed in order to deliver an exception are printed out beneath the stack trace. The format of this information depends on the implementation, but the following example may be regarded as typical:
Exception in thread "main" java.lang.Exception: Something happened
 at Foo.bar(Foo.java:10)
 at Foo.main(Foo.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 0
         at Resource.close(Resource.java:26)
         at Foo.bar(Foo.java:9)
         ... 1 more

Note that the "... n more" notation is used on suppressed exceptions just at it is used on causes. Unlike causes, suppressed exceptions are indented beyond their "containing exceptions."

An exception can have both a cause and one or more suppressed exceptions:

Exception in thread "main" java.lang.Exception: Main block
 at Foo3.main(Foo3.java:7)
 Suppressed: Resource$CloseFailException: Resource ID = 2
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 1
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
Caused by: java.lang.Exception: I did it
 at Foo3.main(Foo3.java:8)

Likewise, a suppressed exception can have a cause:
Exception in thread "main" java.lang.Exception: Main block
 at Foo4.main(Foo4.java:6)
 Suppressed: Resource2$CloseFailException: Resource ID = 1
         at Resource2.close(Resource2.java:20)
         at Foo4.main(Foo4.java:5)
 Caused by: java.lang.Exception: Rats, you caught me
         at Resource2$CloseFailException.<init>(Resource2.java:45)
         ... 2 more

**Returns:** `void`

---

## VsanDpFaultOperationInterrupted

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `reason` |  | `String` | No |
| `localizedMessage` | Creates a localized description of this throwable. Subclasses may override this method in order to produce a locale-specific message. For subclasses that do not override this method, the default implementation returns the same result as {@code getMessage()}. | `String` | Yes |
| `message` |  | `String` | No |

### Methods

#### `VsanDpFaultOperationInterrupted`


**Returns:** `void`

---

#### `VsanDpFaultOperationInterrupted`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `reason` | `String` |  |

**Returns:** `void`

---

#### `printStackTrace`
Prints this throwable and its backtrace to the standard error stream. This method prints a stack trace for this {@code Throwable} object on the error output stream that is the value of the field {@code System.err}. The first line of output contains the result of the {@link #toString()} method for this object. Remaining lines represent data previously recorded by the method {@link #fillInStackTrace()}. The format of this information depends on the implementation, but the following example may be regarded as typical:
java.lang.NullPointerException
        at MyClass.mash(MyClass.java:9)
        at MyClass.crunch(MyClass.java:6)
        at MyClass.main(MyClass.java:3)

This example was produced by running the program:
class MyClass {
    public static void main(String[] args) {
        crunch(null);
    }
    static void crunch(int[] a) {
        mash(a);
    }
    static void mash(int[] b) {
        System.out.println(b[0]);
    }
}

The backtrace for a throwable with an initialized, non-null cause should generally include the backtrace for the cause. The format of this information depends on the implementation, but the following example may be regarded as typical:
HighLevelException: MidLevelException: LowLevelException
        at Junk.a(Junk.java:13)
        at Junk.main(Junk.java:4)
Caused by: MidLevelException: LowLevelException
        at Junk.c(Junk.java:23)
        at Junk.b(Junk.java:17)
        at Junk.a(Junk.java:11)
        ... 1 more
Caused by: LowLevelException
        at Junk.e(Junk.java:30)
        at Junk.d(Junk.java:27)
        at Junk.c(Junk.java:21)
        ... 3 more

Note the presence of lines containing the characters {@code "..."}. These lines indicate that the remainder of the stack trace for this exception matches the indicated number of frames from the bottom of the stack trace of the exception that was caused by this exception (the "enclosing" exception). This shorthand can greatly reduce the length of the output in the common case where a wrapped exception is thrown from same method as the "causative exception" is caught. The above example was produced by running the program:
public class Junk {
    public static void main(String args[]) {
        try {
            a();
        } catch(HighLevelException e) {
            e.printStackTrace();
        }
    }
    static void a() throws HighLevelException {
        try {
            b();
        } catch(MidLevelException e) {
            throw new HighLevelException(e);
        }
    }
    static void b() throws MidLevelException {
        c();
    }
    static void c() throws MidLevelException {
        try {
            d();
        } catch(LowLevelException e) {
            throw new MidLevelException(e);
        }
    }
    static void d() throws LowLevelException {
       e();
    }
    static void e() throws LowLevelException {
        throw new LowLevelException();
    }
}

class HighLevelException extends Exception {
    HighLevelException(Throwable cause) { super(cause); }
}

class MidLevelException extends Exception {
    MidLevelException(Throwable cause)  { super(cause); }
}

class LowLevelException extends Exception {
}

As of release 7, the platform supports the notion of suppressed exceptions (in conjunction with the {@code try}-with-resources statement). Any exceptions that were suppressed in order to deliver an exception are printed out beneath the stack trace. The format of this information depends on the implementation, but the following example may be regarded as typical:
Exception in thread "main" java.lang.Exception: Something happened
 at Foo.bar(Foo.java:10)
 at Foo.main(Foo.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 0
         at Resource.close(Resource.java:26)
         at Foo.bar(Foo.java:9)
         ... 1 more

Note that the "... n more" notation is used on suppressed exceptions just at it is used on causes. Unlike causes, suppressed exceptions are indented beyond their "containing exceptions."

An exception can have both a cause and one or more suppressed exceptions:

Exception in thread "main" java.lang.Exception: Main block
 at Foo3.main(Foo3.java:7)
 Suppressed: Resource$CloseFailException: Resource ID = 2
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 1
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
Caused by: java.lang.Exception: I did it
 at Foo3.main(Foo3.java:8)

Likewise, a suppressed exception can have a cause:
Exception in thread "main" java.lang.Exception: Main block
 at Foo4.main(Foo4.java:6)
 Suppressed: Resource2$CloseFailException: Resource ID = 1
         at Resource2.close(Resource2.java:20)
         at Foo4.main(Foo4.java:5)
 Caused by: java.lang.Exception: Rats, you caught me
         at Resource2$CloseFailException.<init>(Resource2.java:45)
         ... 2 more

**Returns:** `void`

---

## VsanDpFaultPeAlreadyClaimed

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `reason` |  | `String` | No |
| `localizedMessage` | Creates a localized description of this throwable. Subclasses may override this method in order to produce a locale-specific message. For subclasses that do not override this method, the default implementation returns the same result as {@code getMessage()}. | `String` | Yes |
| `vendorId` |  | `String` | No |
| `message` |  | `String` | No |
| `isProtectedByLwd` |  | `Boolean` | No |
| `pes` |  | `Array/VsanDpClaimedPe` | No |

### Methods

#### `VsanDpFaultPeAlreadyClaimed`


**Returns:** `void`

---

#### `VsanDpFaultPeAlreadyClaimed`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `reason` | `String` |  |
| `isProtectedByLwd` | `Boolean` |  |
| `vendorId` | `String` |  |
| `pes` | `Array/VsanDpClaimedPe` |  |

**Returns:** `void`

---

#### `printStackTrace`
Prints this throwable and its backtrace to the standard error stream. This method prints a stack trace for this {@code Throwable} object on the error output stream that is the value of the field {@code System.err}. The first line of output contains the result of the {@link #toString()} method for this object. Remaining lines represent data previously recorded by the method {@link #fillInStackTrace()}. The format of this information depends on the implementation, but the following example may be regarded as typical:
java.lang.NullPointerException
        at MyClass.mash(MyClass.java:9)
        at MyClass.crunch(MyClass.java:6)
        at MyClass.main(MyClass.java:3)

This example was produced by running the program:
class MyClass {
    public static void main(String[] args) {
        crunch(null);
    }
    static void crunch(int[] a) {
        mash(a);
    }
    static void mash(int[] b) {
        System.out.println(b[0]);
    }
}

The backtrace for a throwable with an initialized, non-null cause should generally include the backtrace for the cause. The format of this information depends on the implementation, but the following example may be regarded as typical:
HighLevelException: MidLevelException: LowLevelException
        at Junk.a(Junk.java:13)
        at Junk.main(Junk.java:4)
Caused by: MidLevelException: LowLevelException
        at Junk.c(Junk.java:23)
        at Junk.b(Junk.java:17)
        at Junk.a(Junk.java:11)
        ... 1 more
Caused by: LowLevelException
        at Junk.e(Junk.java:30)
        at Junk.d(Junk.java:27)
        at Junk.c(Junk.java:21)
        ... 3 more

Note the presence of lines containing the characters {@code "..."}. These lines indicate that the remainder of the stack trace for this exception matches the indicated number of frames from the bottom of the stack trace of the exception that was caused by this exception (the "enclosing" exception). This shorthand can greatly reduce the length of the output in the common case where a wrapped exception is thrown from same method as the "causative exception" is caught. The above example was produced by running the program:
public class Junk {
    public static void main(String args[]) {
        try {
            a();
        } catch(HighLevelException e) {
            e.printStackTrace();
        }
    }
    static void a() throws HighLevelException {
        try {
            b();
        } catch(MidLevelException e) {
            throw new HighLevelException(e);
        }
    }
    static void b() throws MidLevelException {
        c();
    }
    static void c() throws MidLevelException {
        try {
            d();
        } catch(LowLevelException e) {
            throw new MidLevelException(e);
        }
    }
    static void d() throws LowLevelException {
       e();
    }
    static void e() throws LowLevelException {
        throw new LowLevelException();
    }
}

class HighLevelException extends Exception {
    HighLevelException(Throwable cause) { super(cause); }
}

class MidLevelException extends Exception {
    MidLevelException(Throwable cause)  { super(cause); }
}

class LowLevelException extends Exception {
}

As of release 7, the platform supports the notion of suppressed exceptions (in conjunction with the {@code try}-with-resources statement). Any exceptions that were suppressed in order to deliver an exception are printed out beneath the stack trace. The format of this information depends on the implementation, but the following example may be regarded as typical:
Exception in thread "main" java.lang.Exception: Something happened
 at Foo.bar(Foo.java:10)
 at Foo.main(Foo.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 0
         at Resource.close(Resource.java:26)
         at Foo.bar(Foo.java:9)
         ... 1 more

Note that the "... n more" notation is used on suppressed exceptions just at it is used on causes. Unlike causes, suppressed exceptions are indented beyond their "containing exceptions."

An exception can have both a cause and one or more suppressed exceptions:

Exception in thread "main" java.lang.Exception: Main block
 at Foo3.main(Foo3.java:7)
 Suppressed: Resource$CloseFailException: Resource ID = 2
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 1
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
Caused by: java.lang.Exception: I did it
 at Foo3.main(Foo3.java:8)

Likewise, a suppressed exception can have a cause:
Exception in thread "main" java.lang.Exception: Main block
 at Foo4.main(Foo4.java:6)
 Suppressed: Resource2$CloseFailException: Resource ID = 1
         at Resource2.close(Resource2.java:20)
         at Foo4.main(Foo4.java:5)
 Caused by: java.lang.Exception: Rats, you caught me
         at Resource2$CloseFailException.<init>(Resource2.java:45)
         ... 2 more

**Returns:** `void`

---

## VsanDpFaultPeBusy

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `taskRef` |  | `VsanManagedObjectReference` | No |
| `reason` |  | `String` | No |
| `localizedMessage` | Creates a localized description of this throwable. Subclasses may override this method in order to produce a locale-specific message. For subclasses that do not override this method, the default implementation returns the same result as {@code getMessage()}. | `String` | Yes |
| `message` |  | `String` | No |

### Methods

#### `VsanDpFaultPeBusy`


**Returns:** `void`

---

#### `VsanDpFaultPeBusy`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `reason` | `String` |  |
| `taskRef` | `VsanManagedObjectReference` |  |

**Returns:** `void`

---

#### `printStackTrace`
Prints this throwable and its backtrace to the standard error stream. This method prints a stack trace for this {@code Throwable} object on the error output stream that is the value of the field {@code System.err}. The first line of output contains the result of the {@link #toString()} method for this object. Remaining lines represent data previously recorded by the method {@link #fillInStackTrace()}. The format of this information depends on the implementation, but the following example may be regarded as typical:
java.lang.NullPointerException
        at MyClass.mash(MyClass.java:9)
        at MyClass.crunch(MyClass.java:6)
        at MyClass.main(MyClass.java:3)

This example was produced by running the program:
class MyClass {
    public static void main(String[] args) {
        crunch(null);
    }
    static void crunch(int[] a) {
        mash(a);
    }
    static void mash(int[] b) {
        System.out.println(b[0]);
    }
}

The backtrace for a throwable with an initialized, non-null cause should generally include the backtrace for the cause. The format of this information depends on the implementation, but the following example may be regarded as typical:
HighLevelException: MidLevelException: LowLevelException
        at Junk.a(Junk.java:13)
        at Junk.main(Junk.java:4)
Caused by: MidLevelException: LowLevelException
        at Junk.c(Junk.java:23)
        at Junk.b(Junk.java:17)
        at Junk.a(Junk.java:11)
        ... 1 more
Caused by: LowLevelException
        at Junk.e(Junk.java:30)
        at Junk.d(Junk.java:27)
        at Junk.c(Junk.java:21)
        ... 3 more

Note the presence of lines containing the characters {@code "..."}. These lines indicate that the remainder of the stack trace for this exception matches the indicated number of frames from the bottom of the stack trace of the exception that was caused by this exception (the "enclosing" exception). This shorthand can greatly reduce the length of the output in the common case where a wrapped exception is thrown from same method as the "causative exception" is caught. The above example was produced by running the program:
public class Junk {
    public static void main(String args[]) {
        try {
            a();
        } catch(HighLevelException e) {
            e.printStackTrace();
        }
    }
    static void a() throws HighLevelException {
        try {
            b();
        } catch(MidLevelException e) {
            throw new HighLevelException(e);
        }
    }
    static void b() throws MidLevelException {
        c();
    }
    static void c() throws MidLevelException {
        try {
            d();
        } catch(LowLevelException e) {
            throw new MidLevelException(e);
        }
    }
    static void d() throws LowLevelException {
       e();
    }
    static void e() throws LowLevelException {
        throw new LowLevelException();
    }
}

class HighLevelException extends Exception {
    HighLevelException(Throwable cause) { super(cause); }
}

class MidLevelException extends Exception {
    MidLevelException(Throwable cause)  { super(cause); }
}

class LowLevelException extends Exception {
}

As of release 7, the platform supports the notion of suppressed exceptions (in conjunction with the {@code try}-with-resources statement). Any exceptions that were suppressed in order to deliver an exception are printed out beneath the stack trace. The format of this information depends on the implementation, but the following example may be regarded as typical:
Exception in thread "main" java.lang.Exception: Something happened
 at Foo.bar(Foo.java:10)
 at Foo.main(Foo.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 0
         at Resource.close(Resource.java:26)
         at Foo.bar(Foo.java:9)
         ... 1 more

Note that the "... n more" notation is used on suppressed exceptions just at it is used on causes. Unlike causes, suppressed exceptions are indented beyond their "containing exceptions."

An exception can have both a cause and one or more suppressed exceptions:

Exception in thread "main" java.lang.Exception: Main block
 at Foo3.main(Foo3.java:7)
 Suppressed: Resource$CloseFailException: Resource ID = 2
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 1
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
Caused by: java.lang.Exception: I did it
 at Foo3.main(Foo3.java:8)

Likewise, a suppressed exception can have a cause:
Exception in thread "main" java.lang.Exception: Main block
 at Foo4.main(Foo4.java:6)
 Suppressed: Resource2$CloseFailException: Resource ID = 1
         at Resource2.close(Resource2.java:20)
         at Foo4.main(Foo4.java:5)
 Caused by: java.lang.Exception: Rats, you caught me
         at Resource2$CloseFailException.<init>(Resource2.java:45)
         ... 2 more

**Returns:** `void`

---

## VsanDpFaultPeIncompleteRequest

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `reason` |  | `String` | No |
| `localizedMessage` | Creates a localized description of this throwable. Subclasses may override this method in order to produce a locale-specific message. For subclasses that do not override this method, the default implementation returns the same result as {@code getMessage()}. | `String` | Yes |
| `message` |  | `String` | No |

### Methods

#### `VsanDpFaultPeIncompleteRequest`


**Returns:** `void`

---

#### `VsanDpFaultPeIncompleteRequest`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `reason` | `String` |  |

**Returns:** `void`

---

#### `printStackTrace`
Prints this throwable and its backtrace to the standard error stream. This method prints a stack trace for this {@code Throwable} object on the error output stream that is the value of the field {@code System.err}. The first line of output contains the result of the {@link #toString()} method for this object. Remaining lines represent data previously recorded by the method {@link #fillInStackTrace()}. The format of this information depends on the implementation, but the following example may be regarded as typical:
java.lang.NullPointerException
        at MyClass.mash(MyClass.java:9)
        at MyClass.crunch(MyClass.java:6)
        at MyClass.main(MyClass.java:3)

This example was produced by running the program:
class MyClass {
    public static void main(String[] args) {
        crunch(null);
    }
    static void crunch(int[] a) {
        mash(a);
    }
    static void mash(int[] b) {
        System.out.println(b[0]);
    }
}

The backtrace for a throwable with an initialized, non-null cause should generally include the backtrace for the cause. The format of this information depends on the implementation, but the following example may be regarded as typical:
HighLevelException: MidLevelException: LowLevelException
        at Junk.a(Junk.java:13)
        at Junk.main(Junk.java:4)
Caused by: MidLevelException: LowLevelException
        at Junk.c(Junk.java:23)
        at Junk.b(Junk.java:17)
        at Junk.a(Junk.java:11)
        ... 1 more
Caused by: LowLevelException
        at Junk.e(Junk.java:30)
        at Junk.d(Junk.java:27)
        at Junk.c(Junk.java:21)
        ... 3 more

Note the presence of lines containing the characters {@code "..."}. These lines indicate that the remainder of the stack trace for this exception matches the indicated number of frames from the bottom of the stack trace of the exception that was caused by this exception (the "enclosing" exception). This shorthand can greatly reduce the length of the output in the common case where a wrapped exception is thrown from same method as the "causative exception" is caught. The above example was produced by running the program:
public class Junk {
    public static void main(String args[]) {
        try {
            a();
        } catch(HighLevelException e) {
            e.printStackTrace();
        }
    }
    static void a() throws HighLevelException {
        try {
            b();
        } catch(MidLevelException e) {
            throw new HighLevelException(e);
        }
    }
    static void b() throws MidLevelException {
        c();
    }
    static void c() throws MidLevelException {
        try {
            d();
        } catch(LowLevelException e) {
            throw new MidLevelException(e);
        }
    }
    static void d() throws LowLevelException {
       e();
    }
    static void e() throws LowLevelException {
        throw new LowLevelException();
    }
}

class HighLevelException extends Exception {
    HighLevelException(Throwable cause) { super(cause); }
}

class MidLevelException extends Exception {
    MidLevelException(Throwable cause)  { super(cause); }
}

class LowLevelException extends Exception {
}

As of release 7, the platform supports the notion of suppressed exceptions (in conjunction with the {@code try}-with-resources statement). Any exceptions that were suppressed in order to deliver an exception are printed out beneath the stack trace. The format of this information depends on the implementation, but the following example may be regarded as typical:
Exception in thread "main" java.lang.Exception: Something happened
 at Foo.bar(Foo.java:10)
 at Foo.main(Foo.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 0
         at Resource.close(Resource.java:26)
         at Foo.bar(Foo.java:9)
         ... 1 more

Note that the "... n more" notation is used on suppressed exceptions just at it is used on causes. Unlike causes, suppressed exceptions are indented beyond their "containing exceptions."

An exception can have both a cause and one or more suppressed exceptions:

Exception in thread "main" java.lang.Exception: Main block
 at Foo3.main(Foo3.java:7)
 Suppressed: Resource$CloseFailException: Resource ID = 2
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 1
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
Caused by: java.lang.Exception: I did it
 at Foo3.main(Foo3.java:8)

Likewise, a suppressed exception can have a cause:
Exception in thread "main" java.lang.Exception: Main block
 at Foo4.main(Foo4.java:6)
 Suppressed: Resource2$CloseFailException: Resource ID = 1
         at Resource2.close(Resource2.java:20)
         at Foo4.main(Foo4.java:5)
 Caused by: java.lang.Exception: Rats, you caught me
         at Resource2$CloseFailException.<init>(Resource2.java:45)
         ... 2 more

**Returns:** `void`

---

## VsanDpFaultPePartiallyProtected

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `reason` |  | `String` | No |
| `localizedMessage` | Creates a localized description of this throwable. Subclasses may override this method in order to produce a locale-specific message. For subclasses that do not override this method, the default implementation returns the same result as {@code getMessage()}. | `String` | Yes |
| `message` |  | `String` | No |

### Methods

#### `VsanDpFaultPePartiallyProtected`


**Returns:** `void`

---

#### `VsanDpFaultPePartiallyProtected`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `reason` | `String` |  |

**Returns:** `void`

---

#### `printStackTrace`
Prints this throwable and its backtrace to the standard error stream. This method prints a stack trace for this {@code Throwable} object on the error output stream that is the value of the field {@code System.err}. The first line of output contains the result of the {@link #toString()} method for this object. Remaining lines represent data previously recorded by the method {@link #fillInStackTrace()}. The format of this information depends on the implementation, but the following example may be regarded as typical:
java.lang.NullPointerException
        at MyClass.mash(MyClass.java:9)
        at MyClass.crunch(MyClass.java:6)
        at MyClass.main(MyClass.java:3)

This example was produced by running the program:
class MyClass {
    public static void main(String[] args) {
        crunch(null);
    }
    static void crunch(int[] a) {
        mash(a);
    }
    static void mash(int[] b) {
        System.out.println(b[0]);
    }
}

The backtrace for a throwable with an initialized, non-null cause should generally include the backtrace for the cause. The format of this information depends on the implementation, but the following example may be regarded as typical:
HighLevelException: MidLevelException: LowLevelException
        at Junk.a(Junk.java:13)
        at Junk.main(Junk.java:4)
Caused by: MidLevelException: LowLevelException
        at Junk.c(Junk.java:23)
        at Junk.b(Junk.java:17)
        at Junk.a(Junk.java:11)
        ... 1 more
Caused by: LowLevelException
        at Junk.e(Junk.java:30)
        at Junk.d(Junk.java:27)
        at Junk.c(Junk.java:21)
        ... 3 more

Note the presence of lines containing the characters {@code "..."}. These lines indicate that the remainder of the stack trace for this exception matches the indicated number of frames from the bottom of the stack trace of the exception that was caused by this exception (the "enclosing" exception). This shorthand can greatly reduce the length of the output in the common case where a wrapped exception is thrown from same method as the "causative exception" is caught. The above example was produced by running the program:
public class Junk {
    public static void main(String args[]) {
        try {
            a();
        } catch(HighLevelException e) {
            e.printStackTrace();
        }
    }
    static void a() throws HighLevelException {
        try {
            b();
        } catch(MidLevelException e) {
            throw new HighLevelException(e);
        }
    }
    static void b() throws MidLevelException {
        c();
    }
    static void c() throws MidLevelException {
        try {
            d();
        } catch(LowLevelException e) {
            throw new MidLevelException(e);
        }
    }
    static void d() throws LowLevelException {
       e();
    }
    static void e() throws LowLevelException {
        throw new LowLevelException();
    }
}

class HighLevelException extends Exception {
    HighLevelException(Throwable cause) { super(cause); }
}

class MidLevelException extends Exception {
    MidLevelException(Throwable cause)  { super(cause); }
}

class LowLevelException extends Exception {
}

As of release 7, the platform supports the notion of suppressed exceptions (in conjunction with the {@code try}-with-resources statement). Any exceptions that were suppressed in order to deliver an exception are printed out beneath the stack trace. The format of this information depends on the implementation, but the following example may be regarded as typical:
Exception in thread "main" java.lang.Exception: Something happened
 at Foo.bar(Foo.java:10)
 at Foo.main(Foo.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 0
         at Resource.close(Resource.java:26)
         at Foo.bar(Foo.java:9)
         ... 1 more

Note that the "... n more" notation is used on suppressed exceptions just at it is used on causes. Unlike causes, suppressed exceptions are indented beyond their "containing exceptions."

An exception can have both a cause and one or more suppressed exceptions:

Exception in thread "main" java.lang.Exception: Main block
 at Foo3.main(Foo3.java:7)
 Suppressed: Resource$CloseFailException: Resource ID = 2
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 1
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
Caused by: java.lang.Exception: I did it
 at Foo3.main(Foo3.java:8)

Likewise, a suppressed exception can have a cause:
Exception in thread "main" java.lang.Exception: Main block
 at Foo4.main(Foo4.java:6)
 Suppressed: Resource2$CloseFailException: Resource ID = 1
         at Resource2.close(Resource2.java:20)
         at Foo4.main(Foo4.java:5)
 Caused by: java.lang.Exception: Rats, you caught me
         at Resource2$CloseFailException.<init>(Resource2.java:45)
         ... 2 more

**Returns:** `void`

---

## VsanDpFaultPreservedDataLimitExceeded

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `reason` |  | `String` | No |
| `localizedMessage` | Creates a localized description of this throwable. Subclasses may override this method in order to produce a locale-specific message. For subclasses that do not override this method, the default implementation returns the same result as {@code getMessage()}. | `String` | Yes |
| `maxPreservedBytes` |  | `Number` | No |
| `message` |  | `String` | No |

### Methods

#### `VsanDpFaultPreservedDataLimitExceeded`


**Returns:** `void`

---

#### `VsanDpFaultPreservedDataLimitExceeded`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `reason` | `String` |  |
| `maxPreservedBytes` | `Number` |  |

**Returns:** `void`

---

#### `printStackTrace`
Prints this throwable and its backtrace to the standard error stream. This method prints a stack trace for this {@code Throwable} object on the error output stream that is the value of the field {@code System.err}. The first line of output contains the result of the {@link #toString()} method for this object. Remaining lines represent data previously recorded by the method {@link #fillInStackTrace()}. The format of this information depends on the implementation, but the following example may be regarded as typical:
java.lang.NullPointerException
        at MyClass.mash(MyClass.java:9)
        at MyClass.crunch(MyClass.java:6)
        at MyClass.main(MyClass.java:3)

This example was produced by running the program:
class MyClass {
    public static void main(String[] args) {
        crunch(null);
    }
    static void crunch(int[] a) {
        mash(a);
    }
    static void mash(int[] b) {
        System.out.println(b[0]);
    }
}

The backtrace for a throwable with an initialized, non-null cause should generally include the backtrace for the cause. The format of this information depends on the implementation, but the following example may be regarded as typical:
HighLevelException: MidLevelException: LowLevelException
        at Junk.a(Junk.java:13)
        at Junk.main(Junk.java:4)
Caused by: MidLevelException: LowLevelException
        at Junk.c(Junk.java:23)
        at Junk.b(Junk.java:17)
        at Junk.a(Junk.java:11)
        ... 1 more
Caused by: LowLevelException
        at Junk.e(Junk.java:30)
        at Junk.d(Junk.java:27)
        at Junk.c(Junk.java:21)
        ... 3 more

Note the presence of lines containing the characters {@code "..."}. These lines indicate that the remainder of the stack trace for this exception matches the indicated number of frames from the bottom of the stack trace of the exception that was caused by this exception (the "enclosing" exception). This shorthand can greatly reduce the length of the output in the common case where a wrapped exception is thrown from same method as the "causative exception" is caught. The above example was produced by running the program:
public class Junk {
    public static void main(String args[]) {
        try {
            a();
        } catch(HighLevelException e) {
            e.printStackTrace();
        }
    }
    static void a() throws HighLevelException {
        try {
            b();
        } catch(MidLevelException e) {
            throw new HighLevelException(e);
        }
    }
    static void b() throws MidLevelException {
        c();
    }
    static void c() throws MidLevelException {
        try {
            d();
        } catch(LowLevelException e) {
            throw new MidLevelException(e);
        }
    }
    static void d() throws LowLevelException {
       e();
    }
    static void e() throws LowLevelException {
        throw new LowLevelException();
    }
}

class HighLevelException extends Exception {
    HighLevelException(Throwable cause) { super(cause); }
}

class MidLevelException extends Exception {
    MidLevelException(Throwable cause)  { super(cause); }
}

class LowLevelException extends Exception {
}

As of release 7, the platform supports the notion of suppressed exceptions (in conjunction with the {@code try}-with-resources statement). Any exceptions that were suppressed in order to deliver an exception are printed out beneath the stack trace. The format of this information depends on the implementation, but the following example may be regarded as typical:
Exception in thread "main" java.lang.Exception: Something happened
 at Foo.bar(Foo.java:10)
 at Foo.main(Foo.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 0
         at Resource.close(Resource.java:26)
         at Foo.bar(Foo.java:9)
         ... 1 more

Note that the "... n more" notation is used on suppressed exceptions just at it is used on causes. Unlike causes, suppressed exceptions are indented beyond their "containing exceptions."

An exception can have both a cause and one or more suppressed exceptions:

Exception in thread "main" java.lang.Exception: Main block
 at Foo3.main(Foo3.java:7)
 Suppressed: Resource$CloseFailException: Resource ID = 2
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 1
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
Caused by: java.lang.Exception: I did it
 at Foo3.main(Foo3.java:8)

Likewise, a suppressed exception can have a cause:
Exception in thread "main" java.lang.Exception: Main block
 at Foo4.main(Foo4.java:6)
 Suppressed: Resource2$CloseFailException: Resource ID = 1
         at Resource2.close(Resource2.java:20)
         at Foo4.main(Foo4.java:5)
 Caused by: java.lang.Exception: Rats, you caught me
         at Resource2$CloseFailException.<init>(Resource2.java:45)
         ... 2 more

**Returns:** `void`

---

## VsanDpFaultQuiesceFailure

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `reason` |  | `String` | No |
| `localizedMessage` | Creates a localized description of this throwable. Subclasses may override this method in order to produce a locale-specific message. For subclasses that do not override this method, the default implementation returns the same result as {@code getMessage()}. | `String` | Yes |
| `message` |  | `String` | No |

### Methods

#### `VsanDpFaultQuiesceFailure`


**Returns:** `void`

---

#### `VsanDpFaultQuiesceFailure`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `reason` | `String` |  |

**Returns:** `void`

---

#### `printStackTrace`
Prints this throwable and its backtrace to the standard error stream. This method prints a stack trace for this {@code Throwable} object on the error output stream that is the value of the field {@code System.err}. The first line of output contains the result of the {@link #toString()} method for this object. Remaining lines represent data previously recorded by the method {@link #fillInStackTrace()}. The format of this information depends on the implementation, but the following example may be regarded as typical:
java.lang.NullPointerException
        at MyClass.mash(MyClass.java:9)
        at MyClass.crunch(MyClass.java:6)
        at MyClass.main(MyClass.java:3)

This example was produced by running the program:
class MyClass {
    public static void main(String[] args) {
        crunch(null);
    }
    static void crunch(int[] a) {
        mash(a);
    }
    static void mash(int[] b) {
        System.out.println(b[0]);
    }
}

The backtrace for a throwable with an initialized, non-null cause should generally include the backtrace for the cause. The format of this information depends on the implementation, but the following example may be regarded as typical:
HighLevelException: MidLevelException: LowLevelException
        at Junk.a(Junk.java:13)
        at Junk.main(Junk.java:4)
Caused by: MidLevelException: LowLevelException
        at Junk.c(Junk.java:23)
        at Junk.b(Junk.java:17)
        at Junk.a(Junk.java:11)
        ... 1 more
Caused by: LowLevelException
        at Junk.e(Junk.java:30)
        at Junk.d(Junk.java:27)
        at Junk.c(Junk.java:21)
        ... 3 more

Note the presence of lines containing the characters {@code "..."}. These lines indicate that the remainder of the stack trace for this exception matches the indicated number of frames from the bottom of the stack trace of the exception that was caused by this exception (the "enclosing" exception). This shorthand can greatly reduce the length of the output in the common case where a wrapped exception is thrown from same method as the "causative exception" is caught. The above example was produced by running the program:
public class Junk {
    public static void main(String args[]) {
        try {
            a();
        } catch(HighLevelException e) {
            e.printStackTrace();
        }
    }
    static void a() throws HighLevelException {
        try {
            b();
        } catch(MidLevelException e) {
            throw new HighLevelException(e);
        }
    }
    static void b() throws MidLevelException {
        c();
    }
    static void c() throws MidLevelException {
        try {
            d();
        } catch(LowLevelException e) {
            throw new MidLevelException(e);
        }
    }
    static void d() throws LowLevelException {
       e();
    }
    static void e() throws LowLevelException {
        throw new LowLevelException();
    }
}

class HighLevelException extends Exception {
    HighLevelException(Throwable cause) { super(cause); }
}

class MidLevelException extends Exception {
    MidLevelException(Throwable cause)  { super(cause); }
}

class LowLevelException extends Exception {
}

As of release 7, the platform supports the notion of suppressed exceptions (in conjunction with the {@code try}-with-resources statement). Any exceptions that were suppressed in order to deliver an exception are printed out beneath the stack trace. The format of this information depends on the implementation, but the following example may be regarded as typical:
Exception in thread "main" java.lang.Exception: Something happened
 at Foo.bar(Foo.java:10)
 at Foo.main(Foo.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 0
         at Resource.close(Resource.java:26)
         at Foo.bar(Foo.java:9)
         ... 1 more

Note that the "... n more" notation is used on suppressed exceptions just at it is used on causes. Unlike causes, suppressed exceptions are indented beyond their "containing exceptions."

An exception can have both a cause and one or more suppressed exceptions:

Exception in thread "main" java.lang.Exception: Main block
 at Foo3.main(Foo3.java:7)
 Suppressed: Resource$CloseFailException: Resource ID = 2
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 1
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
Caused by: java.lang.Exception: I did it
 at Foo3.main(Foo3.java:8)

Likewise, a suppressed exception can have a cause:
Exception in thread "main" java.lang.Exception: Main block
 at Foo4.main(Foo4.java:6)
 Suppressed: Resource2$CloseFailException: Resource ID = 1
         at Resource2.close(Resource2.java:20)
         at Foo4.main(Foo4.java:5)
 Caused by: java.lang.Exception: Rats, you caught me
         at Resource2$CloseFailException.<init>(Resource2.java:45)
         ... 2 more

**Returns:** `void`

---

## VsanDpFaultRestoreInProgress

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `reason` |  | `String` | No |
| `localizedMessage` | Creates a localized description of this throwable. Subclasses may override this method in order to produce a locale-specific message. For subclasses that do not override this method, the default implementation returns the same result as {@code getMessage()}. | `String` | Yes |
| `restoreId` |  | `String` | No |
| `message` |  | `String` | No |

### Methods

#### `VsanDpFaultRestoreInProgress`


**Returns:** `void`

---

#### `VsanDpFaultRestoreInProgress`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `reason` | `String` |  |
| `restoreId` | `String` |  |

**Returns:** `void`

---

#### `printStackTrace`
Prints this throwable and its backtrace to the standard error stream. This method prints a stack trace for this {@code Throwable} object on the error output stream that is the value of the field {@code System.err}. The first line of output contains the result of the {@link #toString()} method for this object. Remaining lines represent data previously recorded by the method {@link #fillInStackTrace()}. The format of this information depends on the implementation, but the following example may be regarded as typical:
java.lang.NullPointerException
        at MyClass.mash(MyClass.java:9)
        at MyClass.crunch(MyClass.java:6)
        at MyClass.main(MyClass.java:3)

This example was produced by running the program:
class MyClass {
    public static void main(String[] args) {
        crunch(null);
    }
    static void crunch(int[] a) {
        mash(a);
    }
    static void mash(int[] b) {
        System.out.println(b[0]);
    }
}

The backtrace for a throwable with an initialized, non-null cause should generally include the backtrace for the cause. The format of this information depends on the implementation, but the following example may be regarded as typical:
HighLevelException: MidLevelException: LowLevelException
        at Junk.a(Junk.java:13)
        at Junk.main(Junk.java:4)
Caused by: MidLevelException: LowLevelException
        at Junk.c(Junk.java:23)
        at Junk.b(Junk.java:17)
        at Junk.a(Junk.java:11)
        ... 1 more
Caused by: LowLevelException
        at Junk.e(Junk.java:30)
        at Junk.d(Junk.java:27)
        at Junk.c(Junk.java:21)
        ... 3 more

Note the presence of lines containing the characters {@code "..."}. These lines indicate that the remainder of the stack trace for this exception matches the indicated number of frames from the bottom of the stack trace of the exception that was caused by this exception (the "enclosing" exception). This shorthand can greatly reduce the length of the output in the common case where a wrapped exception is thrown from same method as the "causative exception" is caught. The above example was produced by running the program:
public class Junk {
    public static void main(String args[]) {
        try {
            a();
        } catch(HighLevelException e) {
            e.printStackTrace();
        }
    }
    static void a() throws HighLevelException {
        try {
            b();
        } catch(MidLevelException e) {
            throw new HighLevelException(e);
        }
    }
    static void b() throws MidLevelException {
        c();
    }
    static void c() throws MidLevelException {
        try {
            d();
        } catch(LowLevelException e) {
            throw new MidLevelException(e);
        }
    }
    static void d() throws LowLevelException {
       e();
    }
    static void e() throws LowLevelException {
        throw new LowLevelException();
    }
}

class HighLevelException extends Exception {
    HighLevelException(Throwable cause) { super(cause); }
}

class MidLevelException extends Exception {
    MidLevelException(Throwable cause)  { super(cause); }
}

class LowLevelException extends Exception {
}

As of release 7, the platform supports the notion of suppressed exceptions (in conjunction with the {@code try}-with-resources statement). Any exceptions that were suppressed in order to deliver an exception are printed out beneath the stack trace. The format of this information depends on the implementation, but the following example may be regarded as typical:
Exception in thread "main" java.lang.Exception: Something happened
 at Foo.bar(Foo.java:10)
 at Foo.main(Foo.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 0
         at Resource.close(Resource.java:26)
         at Foo.bar(Foo.java:9)
         ... 1 more

Note that the "... n more" notation is used on suppressed exceptions just at it is used on causes. Unlike causes, suppressed exceptions are indented beyond their "containing exceptions."

An exception can have both a cause and one or more suppressed exceptions:

Exception in thread "main" java.lang.Exception: Main block
 at Foo3.main(Foo3.java:7)
 Suppressed: Resource$CloseFailException: Resource ID = 2
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 1
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
Caused by: java.lang.Exception: I did it
 at Foo3.main(Foo3.java:8)

Likewise, a suppressed exception can have a cause:
Exception in thread "main" java.lang.Exception: Main block
 at Foo4.main(Foo4.java:6)
 Suppressed: Resource2$CloseFailException: Resource ID = 1
         at Resource2.close(Resource2.java:20)
         at Foo4.main(Foo4.java:5)
 Caused by: java.lang.Exception: Rats, you caught me
         at Resource2$CloseFailException.<init>(Resource2.java:45)
         ... 2 more

**Returns:** `void`

---

## VsanDpFaultSnapshotFailure

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `reason` |  | `String` | No |
| `localizedMessage` | Creates a localized description of this throwable. Subclasses may override this method in order to produce a locale-specific message. For subclasses that do not override this method, the default implementation returns the same result as {@code getMessage()}. | `String` | Yes |
| `message` |  | `String` | No |

### Methods

#### `VsanDpFaultSnapshotFailure`


**Returns:** `void`

---

#### `VsanDpFaultSnapshotFailure`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `reason` | `String` |  |

**Returns:** `void`

---

#### `printStackTrace`
Prints this throwable and its backtrace to the standard error stream. This method prints a stack trace for this {@code Throwable} object on the error output stream that is the value of the field {@code System.err}. The first line of output contains the result of the {@link #toString()} method for this object. Remaining lines represent data previously recorded by the method {@link #fillInStackTrace()}. The format of this information depends on the implementation, but the following example may be regarded as typical:
java.lang.NullPointerException
        at MyClass.mash(MyClass.java:9)
        at MyClass.crunch(MyClass.java:6)
        at MyClass.main(MyClass.java:3)

This example was produced by running the program:
class MyClass {
    public static void main(String[] args) {
        crunch(null);
    }
    static void crunch(int[] a) {
        mash(a);
    }
    static void mash(int[] b) {
        System.out.println(b[0]);
    }
}

The backtrace for a throwable with an initialized, non-null cause should generally include the backtrace for the cause. The format of this information depends on the implementation, but the following example may be regarded as typical:
HighLevelException: MidLevelException: LowLevelException
        at Junk.a(Junk.java:13)
        at Junk.main(Junk.java:4)
Caused by: MidLevelException: LowLevelException
        at Junk.c(Junk.java:23)
        at Junk.b(Junk.java:17)
        at Junk.a(Junk.java:11)
        ... 1 more
Caused by: LowLevelException
        at Junk.e(Junk.java:30)
        at Junk.d(Junk.java:27)
        at Junk.c(Junk.java:21)
        ... 3 more

Note the presence of lines containing the characters {@code "..."}. These lines indicate that the remainder of the stack trace for this exception matches the indicated number of frames from the bottom of the stack trace of the exception that was caused by this exception (the "enclosing" exception). This shorthand can greatly reduce the length of the output in the common case where a wrapped exception is thrown from same method as the "causative exception" is caught. The above example was produced by running the program:
public class Junk {
    public static void main(String args[]) {
        try {
            a();
        } catch(HighLevelException e) {
            e.printStackTrace();
        }
    }
    static void a() throws HighLevelException {
        try {
            b();
        } catch(MidLevelException e) {
            throw new HighLevelException(e);
        }
    }
    static void b() throws MidLevelException {
        c();
    }
    static void c() throws MidLevelException {
        try {
            d();
        } catch(LowLevelException e) {
            throw new MidLevelException(e);
        }
    }
    static void d() throws LowLevelException {
       e();
    }
    static void e() throws LowLevelException {
        throw new LowLevelException();
    }
}

class HighLevelException extends Exception {
    HighLevelException(Throwable cause) { super(cause); }
}

class MidLevelException extends Exception {
    MidLevelException(Throwable cause)  { super(cause); }
}

class LowLevelException extends Exception {
}

As of release 7, the platform supports the notion of suppressed exceptions (in conjunction with the {@code try}-with-resources statement). Any exceptions that were suppressed in order to deliver an exception are printed out beneath the stack trace. The format of this information depends on the implementation, but the following example may be regarded as typical:
Exception in thread "main" java.lang.Exception: Something happened
 at Foo.bar(Foo.java:10)
 at Foo.main(Foo.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 0
         at Resource.close(Resource.java:26)
         at Foo.bar(Foo.java:9)
         ... 1 more

Note that the "... n more" notation is used on suppressed exceptions just at it is used on causes. Unlike causes, suppressed exceptions are indented beyond their "containing exceptions."

An exception can have both a cause and one or more suppressed exceptions:

Exception in thread "main" java.lang.Exception: Main block
 at Foo3.main(Foo3.java:7)
 Suppressed: Resource$CloseFailException: Resource ID = 2
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 1
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
Caused by: java.lang.Exception: I did it
 at Foo3.main(Foo3.java:8)

Likewise, a suppressed exception can have a cause:
Exception in thread "main" java.lang.Exception: Main block
 at Foo4.main(Foo4.java:6)
 Suppressed: Resource2$CloseFailException: Resource ID = 1
         at Resource2.close(Resource2.java:20)
         at Foo4.main(Foo4.java:5)
 Caused by: java.lang.Exception: Rats, you caught me
         at Resource2$CloseFailException.<init>(Resource2.java:45)
         ... 2 more

**Returns:** `void`

---

## VsanDpFaultSnapshotInProgress

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `reason` |  | `String` | No |
| `localizedMessage` | Creates a localized description of this throwable. Subclasses may override this method in order to produce a locale-specific message. For subclasses that do not override this method, the default implementation returns the same result as {@code getMessage()}. | `String` | Yes |
| `snapshotUuid` |  | `String` | No |
| `message` |  | `String` | No |

### Methods

#### `VsanDpFaultSnapshotInProgress`


**Returns:** `void`

---

#### `VsanDpFaultSnapshotInProgress`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `reason` | `String` |  |
| `snapshotUuid` | `String` |  |

**Returns:** `void`

---

#### `printStackTrace`
Prints this throwable and its backtrace to the standard error stream. This method prints a stack trace for this {@code Throwable} object on the error output stream that is the value of the field {@code System.err}. The first line of output contains the result of the {@link #toString()} method for this object. Remaining lines represent data previously recorded by the method {@link #fillInStackTrace()}. The format of this information depends on the implementation, but the following example may be regarded as typical:
java.lang.NullPointerException
        at MyClass.mash(MyClass.java:9)
        at MyClass.crunch(MyClass.java:6)
        at MyClass.main(MyClass.java:3)

This example was produced by running the program:
class MyClass {
    public static void main(String[] args) {
        crunch(null);
    }
    static void crunch(int[] a) {
        mash(a);
    }
    static void mash(int[] b) {
        System.out.println(b[0]);
    }
}

The backtrace for a throwable with an initialized, non-null cause should generally include the backtrace for the cause. The format of this information depends on the implementation, but the following example may be regarded as typical:
HighLevelException: MidLevelException: LowLevelException
        at Junk.a(Junk.java:13)
        at Junk.main(Junk.java:4)
Caused by: MidLevelException: LowLevelException
        at Junk.c(Junk.java:23)
        at Junk.b(Junk.java:17)
        at Junk.a(Junk.java:11)
        ... 1 more
Caused by: LowLevelException
        at Junk.e(Junk.java:30)
        at Junk.d(Junk.java:27)
        at Junk.c(Junk.java:21)
        ... 3 more

Note the presence of lines containing the characters {@code "..."}. These lines indicate that the remainder of the stack trace for this exception matches the indicated number of frames from the bottom of the stack trace of the exception that was caused by this exception (the "enclosing" exception). This shorthand can greatly reduce the length of the output in the common case where a wrapped exception is thrown from same method as the "causative exception" is caught. The above example was produced by running the program:
public class Junk {
    public static void main(String args[]) {
        try {
            a();
        } catch(HighLevelException e) {
            e.printStackTrace();
        }
    }
    static void a() throws HighLevelException {
        try {
            b();
        } catch(MidLevelException e) {
            throw new HighLevelException(e);
        }
    }
    static void b() throws MidLevelException {
        c();
    }
    static void c() throws MidLevelException {
        try {
            d();
        } catch(LowLevelException e) {
            throw new MidLevelException(e);
        }
    }
    static void d() throws LowLevelException {
       e();
    }
    static void e() throws LowLevelException {
        throw new LowLevelException();
    }
}

class HighLevelException extends Exception {
    HighLevelException(Throwable cause) { super(cause); }
}

class MidLevelException extends Exception {
    MidLevelException(Throwable cause)  { super(cause); }
}

class LowLevelException extends Exception {
}

As of release 7, the platform supports the notion of suppressed exceptions (in conjunction with the {@code try}-with-resources statement). Any exceptions that were suppressed in order to deliver an exception are printed out beneath the stack trace. The format of this information depends on the implementation, but the following example may be regarded as typical:
Exception in thread "main" java.lang.Exception: Something happened
 at Foo.bar(Foo.java:10)
 at Foo.main(Foo.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 0
         at Resource.close(Resource.java:26)
         at Foo.bar(Foo.java:9)
         ... 1 more

Note that the "... n more" notation is used on suppressed exceptions just at it is used on causes. Unlike causes, suppressed exceptions are indented beyond their "containing exceptions."

An exception can have both a cause and one or more suppressed exceptions:

Exception in thread "main" java.lang.Exception: Main block
 at Foo3.main(Foo3.java:7)
 Suppressed: Resource$CloseFailException: Resource ID = 2
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 1
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
Caused by: java.lang.Exception: I did it
 at Foo3.main(Foo3.java:8)

Likewise, a suppressed exception can have a cause:
Exception in thread "main" java.lang.Exception: Main block
 at Foo4.main(Foo4.java:6)
 Suppressed: Resource2$CloseFailException: Resource ID = 1
         at Resource2.close(Resource2.java:20)
         at Foo4.main(Foo4.java:5)
 Caused by: java.lang.Exception: Rats, you caught me
         at Resource2$CloseFailException.<init>(Resource2.java:45)
         ... 2 more

**Returns:** `void`

---

## VsanDpFaultSnapshotNotFound

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `reason` |  | `String` | No |
| `localizedMessage` | Creates a localized description of this throwable. Subclasses may override this method in order to produce a locale-specific message. For subclasses that do not override this method, the default implementation returns the same result as {@code getMessage()}. | `String` | Yes |
| `message` |  | `String` | No |

### Methods

#### `VsanDpFaultSnapshotNotFound`


**Returns:** `void`

---

#### `VsanDpFaultSnapshotNotFound`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `reason` | `String` |  |

**Returns:** `void`

---

#### `printStackTrace`
Prints this throwable and its backtrace to the standard error stream. This method prints a stack trace for this {@code Throwable} object on the error output stream that is the value of the field {@code System.err}. The first line of output contains the result of the {@link #toString()} method for this object. Remaining lines represent data previously recorded by the method {@link #fillInStackTrace()}. The format of this information depends on the implementation, but the following example may be regarded as typical:
java.lang.NullPointerException
        at MyClass.mash(MyClass.java:9)
        at MyClass.crunch(MyClass.java:6)
        at MyClass.main(MyClass.java:3)

This example was produced by running the program:
class MyClass {
    public static void main(String[] args) {
        crunch(null);
    }
    static void crunch(int[] a) {
        mash(a);
    }
    static void mash(int[] b) {
        System.out.println(b[0]);
    }
}

The backtrace for a throwable with an initialized, non-null cause should generally include the backtrace for the cause. The format of this information depends on the implementation, but the following example may be regarded as typical:
HighLevelException: MidLevelException: LowLevelException
        at Junk.a(Junk.java:13)
        at Junk.main(Junk.java:4)
Caused by: MidLevelException: LowLevelException
        at Junk.c(Junk.java:23)
        at Junk.b(Junk.java:17)
        at Junk.a(Junk.java:11)
        ... 1 more
Caused by: LowLevelException
        at Junk.e(Junk.java:30)
        at Junk.d(Junk.java:27)
        at Junk.c(Junk.java:21)
        ... 3 more

Note the presence of lines containing the characters {@code "..."}. These lines indicate that the remainder of the stack trace for this exception matches the indicated number of frames from the bottom of the stack trace of the exception that was caused by this exception (the "enclosing" exception). This shorthand can greatly reduce the length of the output in the common case where a wrapped exception is thrown from same method as the "causative exception" is caught. The above example was produced by running the program:
public class Junk {
    public static void main(String args[]) {
        try {
            a();
        } catch(HighLevelException e) {
            e.printStackTrace();
        }
    }
    static void a() throws HighLevelException {
        try {
            b();
        } catch(MidLevelException e) {
            throw new HighLevelException(e);
        }
    }
    static void b() throws MidLevelException {
        c();
    }
    static void c() throws MidLevelException {
        try {
            d();
        } catch(LowLevelException e) {
            throw new MidLevelException(e);
        }
    }
    static void d() throws LowLevelException {
       e();
    }
    static void e() throws LowLevelException {
        throw new LowLevelException();
    }
}

class HighLevelException extends Exception {
    HighLevelException(Throwable cause) { super(cause); }
}

class MidLevelException extends Exception {
    MidLevelException(Throwable cause)  { super(cause); }
}

class LowLevelException extends Exception {
}

As of release 7, the platform supports the notion of suppressed exceptions (in conjunction with the {@code try}-with-resources statement). Any exceptions that were suppressed in order to deliver an exception are printed out beneath the stack trace. The format of this information depends on the implementation, but the following example may be regarded as typical:
Exception in thread "main" java.lang.Exception: Something happened
 at Foo.bar(Foo.java:10)
 at Foo.main(Foo.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 0
         at Resource.close(Resource.java:26)
         at Foo.bar(Foo.java:9)
         ... 1 more

Note that the "... n more" notation is used on suppressed exceptions just at it is used on causes. Unlike causes, suppressed exceptions are indented beyond their "containing exceptions."

An exception can have both a cause and one or more suppressed exceptions:

Exception in thread "main" java.lang.Exception: Main block
 at Foo3.main(Foo3.java:7)
 Suppressed: Resource$CloseFailException: Resource ID = 2
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 1
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
Caused by: java.lang.Exception: I did it
 at Foo3.main(Foo3.java:8)

Likewise, a suppressed exception can have a cause:
Exception in thread "main" java.lang.Exception: Main block
 at Foo4.main(Foo4.java:6)
 Suppressed: Resource2$CloseFailException: Resource ID = 1
         at Resource2.close(Resource2.java:20)
         at Foo4.main(Foo4.java:5)
 Caused by: java.lang.Exception: Rats, you caught me
         at Resource2$CloseFailException.<init>(Resource2.java:45)
         ... 2 more

**Returns:** `void`

---

## VsanDpFaultSnapshotTransportFault

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `reason` |  | `String` | No |
| `localizedMessage` | Creates a localized description of this throwable. Subclasses may override this method in order to produce a locale-specific message. For subclasses that do not override this method, the default implementation returns the same result as {@code getMessage()}. | `String` | Yes |
| `message` |  | `String` | No |

### Methods

#### `VsanDpFaultSnapshotTransportFault`


**Returns:** `void`

---

#### `printStackTrace`
Prints this throwable and its backtrace to the standard error stream. This method prints a stack trace for this {@code Throwable} object on the error output stream that is the value of the field {@code System.err}. The first line of output contains the result of the {@link #toString()} method for this object. Remaining lines represent data previously recorded by the method {@link #fillInStackTrace()}. The format of this information depends on the implementation, but the following example may be regarded as typical:
java.lang.NullPointerException
        at MyClass.mash(MyClass.java:9)
        at MyClass.crunch(MyClass.java:6)
        at MyClass.main(MyClass.java:3)

This example was produced by running the program:
class MyClass {
    public static void main(String[] args) {
        crunch(null);
    }
    static void crunch(int[] a) {
        mash(a);
    }
    static void mash(int[] b) {
        System.out.println(b[0]);
    }
}

The backtrace for a throwable with an initialized, non-null cause should generally include the backtrace for the cause. The format of this information depends on the implementation, but the following example may be regarded as typical:
HighLevelException: MidLevelException: LowLevelException
        at Junk.a(Junk.java:13)
        at Junk.main(Junk.java:4)
Caused by: MidLevelException: LowLevelException
        at Junk.c(Junk.java:23)
        at Junk.b(Junk.java:17)
        at Junk.a(Junk.java:11)
        ... 1 more
Caused by: LowLevelException
        at Junk.e(Junk.java:30)
        at Junk.d(Junk.java:27)
        at Junk.c(Junk.java:21)
        ... 3 more

Note the presence of lines containing the characters {@code "..."}. These lines indicate that the remainder of the stack trace for this exception matches the indicated number of frames from the bottom of the stack trace of the exception that was caused by this exception (the "enclosing" exception). This shorthand can greatly reduce the length of the output in the common case where a wrapped exception is thrown from same method as the "causative exception" is caught. The above example was produced by running the program:
public class Junk {
    public static void main(String args[]) {
        try {
            a();
        } catch(HighLevelException e) {
            e.printStackTrace();
        }
    }
    static void a() throws HighLevelException {
        try {
            b();
        } catch(MidLevelException e) {
            throw new HighLevelException(e);
        }
    }
    static void b() throws MidLevelException {
        c();
    }
    static void c() throws MidLevelException {
        try {
            d();
        } catch(LowLevelException e) {
            throw new MidLevelException(e);
        }
    }
    static void d() throws LowLevelException {
       e();
    }
    static void e() throws LowLevelException {
        throw new LowLevelException();
    }
}

class HighLevelException extends Exception {
    HighLevelException(Throwable cause) { super(cause); }
}

class MidLevelException extends Exception {
    MidLevelException(Throwable cause)  { super(cause); }
}

class LowLevelException extends Exception {
}

As of release 7, the platform supports the notion of suppressed exceptions (in conjunction with the {@code try}-with-resources statement). Any exceptions that were suppressed in order to deliver an exception are printed out beneath the stack trace. The format of this information depends on the implementation, but the following example may be regarded as typical:
Exception in thread "main" java.lang.Exception: Something happened
 at Foo.bar(Foo.java:10)
 at Foo.main(Foo.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 0
         at Resource.close(Resource.java:26)
         at Foo.bar(Foo.java:9)
         ... 1 more

Note that the "... n more" notation is used on suppressed exceptions just at it is used on causes. Unlike causes, suppressed exceptions are indented beyond their "containing exceptions."

An exception can have both a cause and one or more suppressed exceptions:

Exception in thread "main" java.lang.Exception: Main block
 at Foo3.main(Foo3.java:7)
 Suppressed: Resource$CloseFailException: Resource ID = 2
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 1
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
Caused by: java.lang.Exception: I did it
 at Foo3.main(Foo3.java:8)

Likewise, a suppressed exception can have a cause:
Exception in thread "main" java.lang.Exception: Main block
 at Foo4.main(Foo4.java:6)
 Suppressed: Resource2$CloseFailException: Resource ID = 1
         at Resource2.close(Resource2.java:20)
         at Foo4.main(Foo4.java:5)
 Caused by: java.lang.Exception: Rats, you caught me
         at Resource2$CloseFailException.<init>(Resource2.java:45)
         ... 2 more

**Returns:** `void`

---

## VsanDpFaultSyncInProgress

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `reason` |  | `String` | No |
| `localizedMessage` | Creates a localized description of this throwable. Subclasses may override this method in order to produce a locale-specific message. For subclasses that do not override this method, the default implementation returns the same result as {@code getMessage()}. | `String` | Yes |
| `message` |  | `String` | No |
| `syncId` |  | `String` | No |

### Methods

#### `VsanDpFaultSyncInProgress`


**Returns:** `void`

---

#### `VsanDpFaultSyncInProgress`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `reason` | `String` |  |
| `syncId` | `String` |  |

**Returns:** `void`

---

#### `printStackTrace`
Prints this throwable and its backtrace to the standard error stream. This method prints a stack trace for this {@code Throwable} object on the error output stream that is the value of the field {@code System.err}. The first line of output contains the result of the {@link #toString()} method for this object. Remaining lines represent data previously recorded by the method {@link #fillInStackTrace()}. The format of this information depends on the implementation, but the following example may be regarded as typical:
java.lang.NullPointerException
        at MyClass.mash(MyClass.java:9)
        at MyClass.crunch(MyClass.java:6)
        at MyClass.main(MyClass.java:3)

This example was produced by running the program:
class MyClass {
    public static void main(String[] args) {
        crunch(null);
    }
    static void crunch(int[] a) {
        mash(a);
    }
    static void mash(int[] b) {
        System.out.println(b[0]);
    }
}

The backtrace for a throwable with an initialized, non-null cause should generally include the backtrace for the cause. The format of this information depends on the implementation, but the following example may be regarded as typical:
HighLevelException: MidLevelException: LowLevelException
        at Junk.a(Junk.java:13)
        at Junk.main(Junk.java:4)
Caused by: MidLevelException: LowLevelException
        at Junk.c(Junk.java:23)
        at Junk.b(Junk.java:17)
        at Junk.a(Junk.java:11)
        ... 1 more
Caused by: LowLevelException
        at Junk.e(Junk.java:30)
        at Junk.d(Junk.java:27)
        at Junk.c(Junk.java:21)
        ... 3 more

Note the presence of lines containing the characters {@code "..."}. These lines indicate that the remainder of the stack trace for this exception matches the indicated number of frames from the bottom of the stack trace of the exception that was caused by this exception (the "enclosing" exception). This shorthand can greatly reduce the length of the output in the common case where a wrapped exception is thrown from same method as the "causative exception" is caught. The above example was produced by running the program:
public class Junk {
    public static void main(String args[]) {
        try {
            a();
        } catch(HighLevelException e) {
            e.printStackTrace();
        }
    }
    static void a() throws HighLevelException {
        try {
            b();
        } catch(MidLevelException e) {
            throw new HighLevelException(e);
        }
    }
    static void b() throws MidLevelException {
        c();
    }
    static void c() throws MidLevelException {
        try {
            d();
        } catch(LowLevelException e) {
            throw new MidLevelException(e);
        }
    }
    static void d() throws LowLevelException {
       e();
    }
    static void e() throws LowLevelException {
        throw new LowLevelException();
    }
}

class HighLevelException extends Exception {
    HighLevelException(Throwable cause) { super(cause); }
}

class MidLevelException extends Exception {
    MidLevelException(Throwable cause)  { super(cause); }
}

class LowLevelException extends Exception {
}

As of release 7, the platform supports the notion of suppressed exceptions (in conjunction with the {@code try}-with-resources statement). Any exceptions that were suppressed in order to deliver an exception are printed out beneath the stack trace. The format of this information depends on the implementation, but the following example may be regarded as typical:
Exception in thread "main" java.lang.Exception: Something happened
 at Foo.bar(Foo.java:10)
 at Foo.main(Foo.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 0
         at Resource.close(Resource.java:26)
         at Foo.bar(Foo.java:9)
         ... 1 more

Note that the "... n more" notation is used on suppressed exceptions just at it is used on causes. Unlike causes, suppressed exceptions are indented beyond their "containing exceptions."

An exception can have both a cause and one or more suppressed exceptions:

Exception in thread "main" java.lang.Exception: Main block
 at Foo3.main(Foo3.java:7)
 Suppressed: Resource$CloseFailException: Resource ID = 2
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 1
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
Caused by: java.lang.Exception: I did it
 at Foo3.main(Foo3.java:8)

Likewise, a suppressed exception can have a cause:
Exception in thread "main" java.lang.Exception: Main block
 at Foo4.main(Foo4.java:6)
 Suppressed: Resource2$CloseFailException: Resource ID = 1
         at Resource2.close(Resource2.java:20)
         at Foo4.main(Foo4.java:5)
 Caused by: java.lang.Exception: Rats, you caught me
         at Resource2$CloseFailException.<init>(Resource2.java:45)
         ... 2 more

**Returns:** `void`

---

## VsanDpFaultUnsupportedDisk

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `reason` |  | `String` | No |
| `localizedMessage` | Creates a localized description of this throwable. Subclasses may override this method in order to produce a locale-specific message. For subclasses that do not override this method, the default implementation returns the same result as {@code getMessage()}. | `String` | Yes |
| `diskKeys` |  | `Array/Number` | No |
| `message` |  | `String` | No |
| `pes` |  | `Array/VsanDpProtectedEntity` | No |

### Methods

#### `VsanDpFaultUnsupportedDisk`


**Returns:** `void`

---

#### `VsanDpFaultUnsupportedDisk`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `reason` | `String` |  |
| `diskKeys` | `Array/Number` |  |
| `pes` | `Array/VsanDpProtectedEntity` |  |

**Returns:** `void`

---

#### `printStackTrace`
Prints this throwable and its backtrace to the standard error stream. This method prints a stack trace for this {@code Throwable} object on the error output stream that is the value of the field {@code System.err}. The first line of output contains the result of the {@link #toString()} method for this object. Remaining lines represent data previously recorded by the method {@link #fillInStackTrace()}. The format of this information depends on the implementation, but the following example may be regarded as typical:
java.lang.NullPointerException
        at MyClass.mash(MyClass.java:9)
        at MyClass.crunch(MyClass.java:6)
        at MyClass.main(MyClass.java:3)

This example was produced by running the program:
class MyClass {
    public static void main(String[] args) {
        crunch(null);
    }
    static void crunch(int[] a) {
        mash(a);
    }
    static void mash(int[] b) {
        System.out.println(b[0]);
    }
}

The backtrace for a throwable with an initialized, non-null cause should generally include the backtrace for the cause. The format of this information depends on the implementation, but the following example may be regarded as typical:
HighLevelException: MidLevelException: LowLevelException
        at Junk.a(Junk.java:13)
        at Junk.main(Junk.java:4)
Caused by: MidLevelException: LowLevelException
        at Junk.c(Junk.java:23)
        at Junk.b(Junk.java:17)
        at Junk.a(Junk.java:11)
        ... 1 more
Caused by: LowLevelException
        at Junk.e(Junk.java:30)
        at Junk.d(Junk.java:27)
        at Junk.c(Junk.java:21)
        ... 3 more

Note the presence of lines containing the characters {@code "..."}. These lines indicate that the remainder of the stack trace for this exception matches the indicated number of frames from the bottom of the stack trace of the exception that was caused by this exception (the "enclosing" exception). This shorthand can greatly reduce the length of the output in the common case where a wrapped exception is thrown from same method as the "causative exception" is caught. The above example was produced by running the program:
public class Junk {
    public static void main(String args[]) {
        try {
            a();
        } catch(HighLevelException e) {
            e.printStackTrace();
        }
    }
    static void a() throws HighLevelException {
        try {
            b();
        } catch(MidLevelException e) {
            throw new HighLevelException(e);
        }
    }
    static void b() throws MidLevelException {
        c();
    }
    static void c() throws MidLevelException {
        try {
            d();
        } catch(LowLevelException e) {
            throw new MidLevelException(e);
        }
    }
    static void d() throws LowLevelException {
       e();
    }
    static void e() throws LowLevelException {
        throw new LowLevelException();
    }
}

class HighLevelException extends Exception {
    HighLevelException(Throwable cause) { super(cause); }
}

class MidLevelException extends Exception {
    MidLevelException(Throwable cause)  { super(cause); }
}

class LowLevelException extends Exception {
}

As of release 7, the platform supports the notion of suppressed exceptions (in conjunction with the {@code try}-with-resources statement). Any exceptions that were suppressed in order to deliver an exception are printed out beneath the stack trace. The format of this information depends on the implementation, but the following example may be regarded as typical:
Exception in thread "main" java.lang.Exception: Something happened
 at Foo.bar(Foo.java:10)
 at Foo.main(Foo.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 0
         at Resource.close(Resource.java:26)
         at Foo.bar(Foo.java:9)
         ... 1 more

Note that the "... n more" notation is used on suppressed exceptions just at it is used on causes. Unlike causes, suppressed exceptions are indented beyond their "containing exceptions."

An exception can have both a cause and one or more suppressed exceptions:

Exception in thread "main" java.lang.Exception: Main block
 at Foo3.main(Foo3.java:7)
 Suppressed: Resource$CloseFailException: Resource ID = 2
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 1
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
Caused by: java.lang.Exception: I did it
 at Foo3.main(Foo3.java:8)

Likewise, a suppressed exception can have a cause:
Exception in thread "main" java.lang.Exception: Main block
 at Foo4.main(Foo4.java:6)
 Suppressed: Resource2$CloseFailException: Resource ID = 1
         at Resource2.close(Resource2.java:20)
         at Foo4.main(Foo4.java:5)
 Caused by: java.lang.Exception: Rats, you caught me
         at Resource2$CloseFailException.<init>(Resource2.java:45)
         ... 2 more

**Returns:** `void`

---

## VsanDpFaultVendorIdInconsistent

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `reason` |  | `String` | No |
| `protectedDisks` |  | `Array/VsanDpVirtualDiskProtectionInfo` | No |
| `localizedMessage` | Creates a localized description of this throwable. Subclasses may override this method in order to produce a locale-specific message. For subclasses that do not override this method, the default implementation returns the same result as {@code getMessage()}. | `String` | Yes |
| `pe` |  | `VsanDpProtectedEntity` | No |
| `message` |  | `String` | No |

### Methods

#### `VsanDpFaultVendorIdInconsistent`


**Returns:** `void`

---

#### `VsanDpFaultVendorIdInconsistent`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `reason` | `String` |  |
| `pe` | `VsanDpProtectedEntity` |  |
| `protectedDisks` | `Array/VsanDpVirtualDiskProtectionInfo` |  |

**Returns:** `void`

---

#### `printStackTrace`
Prints this throwable and its backtrace to the standard error stream. This method prints a stack trace for this {@code Throwable} object on the error output stream that is the value of the field {@code System.err}. The first line of output contains the result of the {@link #toString()} method for this object. Remaining lines represent data previously recorded by the method {@link #fillInStackTrace()}. The format of this information depends on the implementation, but the following example may be regarded as typical:
java.lang.NullPointerException
        at MyClass.mash(MyClass.java:9)
        at MyClass.crunch(MyClass.java:6)
        at MyClass.main(MyClass.java:3)

This example was produced by running the program:
class MyClass {
    public static void main(String[] args) {
        crunch(null);
    }
    static void crunch(int[] a) {
        mash(a);
    }
    static void mash(int[] b) {
        System.out.println(b[0]);
    }
}

The backtrace for a throwable with an initialized, non-null cause should generally include the backtrace for the cause. The format of this information depends on the implementation, but the following example may be regarded as typical:
HighLevelException: MidLevelException: LowLevelException
        at Junk.a(Junk.java:13)
        at Junk.main(Junk.java:4)
Caused by: MidLevelException: LowLevelException
        at Junk.c(Junk.java:23)
        at Junk.b(Junk.java:17)
        at Junk.a(Junk.java:11)
        ... 1 more
Caused by: LowLevelException
        at Junk.e(Junk.java:30)
        at Junk.d(Junk.java:27)
        at Junk.c(Junk.java:21)
        ... 3 more

Note the presence of lines containing the characters {@code "..."}. These lines indicate that the remainder of the stack trace for this exception matches the indicated number of frames from the bottom of the stack trace of the exception that was caused by this exception (the "enclosing" exception). This shorthand can greatly reduce the length of the output in the common case where a wrapped exception is thrown from same method as the "causative exception" is caught. The above example was produced by running the program:
public class Junk {
    public static void main(String args[]) {
        try {
            a();
        } catch(HighLevelException e) {
            e.printStackTrace();
        }
    }
    static void a() throws HighLevelException {
        try {
            b();
        } catch(MidLevelException e) {
            throw new HighLevelException(e);
        }
    }
    static void b() throws MidLevelException {
        c();
    }
    static void c() throws MidLevelException {
        try {
            d();
        } catch(LowLevelException e) {
            throw new MidLevelException(e);
        }
    }
    static void d() throws LowLevelException {
       e();
    }
    static void e() throws LowLevelException {
        throw new LowLevelException();
    }
}

class HighLevelException extends Exception {
    HighLevelException(Throwable cause) { super(cause); }
}

class MidLevelException extends Exception {
    MidLevelException(Throwable cause)  { super(cause); }
}

class LowLevelException extends Exception {
}

As of release 7, the platform supports the notion of suppressed exceptions (in conjunction with the {@code try}-with-resources statement). Any exceptions that were suppressed in order to deliver an exception are printed out beneath the stack trace. The format of this information depends on the implementation, but the following example may be regarded as typical:
Exception in thread "main" java.lang.Exception: Something happened
 at Foo.bar(Foo.java:10)
 at Foo.main(Foo.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 0
         at Resource.close(Resource.java:26)
         at Foo.bar(Foo.java:9)
         ... 1 more

Note that the "... n more" notation is used on suppressed exceptions just at it is used on causes. Unlike causes, suppressed exceptions are indented beyond their "containing exceptions."

An exception can have both a cause and one or more suppressed exceptions:

Exception in thread "main" java.lang.Exception: Main block
 at Foo3.main(Foo3.java:7)
 Suppressed: Resource$CloseFailException: Resource ID = 2
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 1
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
Caused by: java.lang.Exception: I did it
 at Foo3.main(Foo3.java:8)

Likewise, a suppressed exception can have a cause:
Exception in thread "main" java.lang.Exception: Main block
 at Foo4.main(Foo4.java:6)
 Suppressed: Resource2$CloseFailException: Resource ID = 1
         at Resource2.close(Resource2.java:20)
         at Foo4.main(Foo4.java:5)
 Caused by: java.lang.Exception: Rats, you caught me
         at Resource2$CloseFailException.<init>(Resource2.java:45)
         ... 2 more

**Returns:** `void`

---

## VsanDpGetProtectionPolicyOpSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `pe` |  | `VsanDpProtectedEntity` | No |
| `policySets` |  | `Array/VsanDpProtectionPolicySet` | No |
| `dynamicType` |  | `String` | No |
| `readAll` |  | `Boolean` | No |

## VsanDpHostFailure

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `host` |  | `VsanManagedObjectReference` | No |
| `dynamicType` |  | `String` | No |

## VsanDpInvalidProtectionReason

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `protectionDegraded` |  | `VsanDpInvalidProtectionReason` | Yes |
| `invalidProtectionReasonUnknown` |  | `VsanDpInvalidProtectionReason` | Yes |
| `notProtected` |  | `VsanDpInvalidProtectionReason` | Yes |

## VsanDpMigrationType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `hotMigration` |  | `VsanDpMigrationType` | Yes |
| `migrationTypeUnknown` |  | `VsanDpMigrationType` | Yes |
| `coldMigration` |  | `VsanDpMigrationType` | Yes |

## VsanDpPeAdvancedOptions

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |

## VsanDpPeFailure

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `pe` |  | `VsanDpProtectedEntity` | No |
| `dynamicType` |  | `String` | No |

## VsanDpPeProtectionStats

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |

## VsanDpPrepareRestoreOpResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |

## VsanDpPrepareRestoreOpSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `snapshotUuid` |  | `String` | No |
| `pe` |  | `VsanDpProtectedEntity` | No |
| `peRestoreOptions` |  | `Array/VsanDpProtectedEntityRestoreOptions` | No |
| `userIds` |  | `VsanDpUserIdBinding` | No |
| `vendorId` |  | `String` | No |
| `transportProvider` |  | `String` | No |
| `initiatorId` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanDpProtectedEntity

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |

## VsanDpProtectedEntityGroup

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |
| `pes` |  | `Array/VsanDpProtectedEntity` | No |

## VsanDpProtectedEntityGroupProtectionStatus

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `protectionStatus` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `peProtectionStatus` |  | `Array/VsanDpProtectedEntityProtectionStatus` | No |

## VsanDpProtectedEntityInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `peProtectionStats` |  | `Array/VsanDpPeProtectionStats` | No |
| `pe` |  | `VsanDpProtectedEntity` | No |
| `dynamicType` |  | `String` | No |
| `peProtectionStatus` |  | `VsanDpProtectedEntityProtectionStatus` | No |

## VsanDpProtectedEntityProtectionStatus

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `protectionStatus` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanDpProtectedEntityRestoreOptions

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `userIds` |  | `VsanDpUserIdBinding` | No |
| `dynamicType` |  | `String` | No |

## VsanDpProtectedEntitySnapshot

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |
| `uuid` |  | `String` | No |

## VsanDpProtectedEntitySnapshotOptions

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `basePeSnapshot` |  | `VsanDpProtectedEntitySnapshot` | No |
| `dynamicType` |  | `String` | No |
| `peAdvancedOptions` |  | `VsanDpPeAdvancedOptions` | No |

## VsanDpProtectedEntitySyncOptions

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `userIds` |  | `VsanDpUserIdBinding` | No |
| `dynamicType` |  | `String` | No |

## VsanDpProtectionCapabilityInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` |  | `String` | No |
| `certified` |  | `Boolean` | No |
| `supportLevel` |  | `String` | No |
| `requiredEsxVersion` |  | `String` | No |
| `requiredApiVersion` |  | `String` | No |
| `unsupportedHosts` |  | `Array/VsanManagedObjectReference` | No |
| `dynamicType` |  | `String` | No |
| `requiredEsxPatchLevel` |  | `String` | No |

## VsanDpProtectionPolicy

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `generation` |  | `Number` | No |
| `vendorId` |  | `String` | No |
| `id` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanDpProtectionPolicyOpSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `pe` |  | `VsanDpProtectedEntity` | No |
| `policySets` |  | `Array/VsanDpProtectionPolicySet` | No |
| `dynamicType` |  | `String` | No |

## VsanDpProtectionPolicySet

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `generation` |  | `Number` | No |
| `policies` |  | `Array/VsanDpProtectionPolicy` | No |
| `id` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanDpProtectionPolicyState

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `policies` |  | `Array/VsanDpProtectionPolicy` | No |
| `dynamicType` |  | `String` | No |

## VsanDpProtectionPolicyStateOpResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `policyStateSets` |  | `Array/VsanDpProtectionPolicyStateSet` | No |
| `dynamicType` |  | `String` | No |

## VsanDpProtectionPolicyStateSet

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |
| `states` |  | `Array/VsanDpProtectionPolicyState` | No |

## VsanDpProtectionStatusType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `ProtectionStatusType_unknown` |  | `VsanDpProtectionStatusType` | Yes |
| `pe_protected` |  | `VsanDpProtectionStatusType` | Yes |
| `pe_unprotected` |  | `VsanDpProtectionStatusType` | Yes |
| `pe_partially_protected` |  | `VsanDpProtectionStatusType` | Yes |

## VsanDpProtectionSupportType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `not_supported` |  | `VsanDpProtectionSupportType` | Yes |
| `partially_supported` |  | `VsanDpProtectionSupportType` | Yes |
| `ProtectionSupportType_unknown` |  | `VsanDpProtectionSupportType` | Yes |
| `supported` |  | `VsanDpProtectionSupportType` | Yes |

## VsanDpProtectOpResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |

## VsanDpProtectOpSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `pe` |  | `VsanDpProtectedEntity` | No |
| `vendorId` |  | `String` | No |
| `state` |  | `Boolean` | No |
| `dynamicType` |  | `String` | No |

## VsanDpQueryProtectedEntityInfoOpResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `peInfo` |  | `VsanDpProtectedEntityInfo` | No |
| `dynamicType` |  | `String` | No |

## VsanDpQueryProtectedEntityInfoOpSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `shouldFetchRuntimeStats` |  | `Boolean` | No |
| `pe` |  | `VsanDpProtectedEntity` | No |
| `vendorId` |  | `String` | No |
| `dynamicType` |  | `String` | No |

### Methods

#### `VsanDpQueryProtectedEntityInfoOpSpec`


**Returns:** `void`

---

#### `VsanDpQueryProtectedEntityInfoOpSpec`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `pe` | `VsanDpProtectedEntity` |  |
| `shouldFetchRuntimeStats` | `Boolean` |  |
| `vendorId` | `String` |  |

**Returns:** `void`

---

#### `isShouldFetchRuntimeStats`


**Returns:** `Boolean`

---

## VsanDpQueryProtectionPolicyStateOpSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `pe` |  | `VsanDpProtectedEntity` | No |
| `policySets` |  | `Array/VsanDpProtectionPolicySet` | No |
| `dynamicType` |  | `String` | No |
| `readAll` |  | `Boolean` | No |

## VsanDpQueryProtectionSupportResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `lowestHostPatchLevel` |  | `String` | No |
| `capabilityInfo` |  | `Array/VsanDpProtectionCapabilityInfo` | No |
| `protectionSupport` |  | `String` | No |
| `lowestHostApiVersion` |  | `String` | No |
| `unsupportedHosts` |  | `Array/VsanManagedObjectReference` | No |
| `dynamicType` |  | `String` | No |
| `lowestHostVersion` |  | `String` | No |

## VsanDpRemoveProtectionPolicyOpSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `removeAll` |  | `Boolean` | No |
| `pe` |  | `VsanDpProtectedEntity` | No |
| `policySets` |  | `Array/VsanDpProtectionPolicySet` | No |
| `dynamicType` |  | `String` | No |

## VsanDpRetireSnapshotOpResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |

## VsanDpRetireSnapshotOpSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `peSnapshotOptions` |  | `Array/VsanDpProtectedEntitySnapshotOptions` | No |
| `pe` |  | `VsanDpProtectedEntity` | No |
| `snapshotUuid` |  | `String` | No |
| `vendorId` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanDpSnapshotOpPeResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `associatedFiles` |  | `Array/String` | No |
| `pe` |  | `VsanDpProtectedEntity` | No |
| `dynamicType` |  | `String` | No |
| `snapshotDetails` |  | `VsanDpProtectedEntitySnapshot` | No |

## VsanDpSnapshotOpResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `associatedFiles` |  | `Array/String` | No |
| `snapshotUuid` |  | `String` | No |
| `peResults` |  | `Array/VsanDpSnapshotOpPeResult` | No |
| `dynamicType` |  | `String` | No |

## VsanDpSnapshotOpSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `vssBackupSpec` |  | `VsanDpVssBackupSpec` | No |
| `baseSnapshotUuid` |  | `String` | No |
| `snapshotType` |  | `String` | No |
| `peSnapshotOptions` |  | `Array/VsanDpProtectedEntitySnapshotOptions` | No |
| `pe` |  | `VsanDpProtectedEntity` | No |
| `basePeSnapshot` |  | `VsanDpProtectedEntitySnapshot` | No |
| `vendorId` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `quiesceTimeout` |  | `Number` | No |

## VsanDpSnapshotType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `applicationConsistent` |  | `VsanDpSnapshotType` | Yes |
| `vssAppConsistentFull` |  | `VsanDpSnapshotType` | Yes |
| `metadataOnly` |  | `VsanDpSnapshotType` | Yes |
| `vssAppConsistent` |  | `VsanDpSnapshotType` | Yes |
| `crashConsistent` |  | `VsanDpSnapshotType` | Yes |
| `snapshotTypeUnknown` |  | `VsanDpSnapshotType` | Yes |
| `vssAppConsistentCopy` |  | `VsanDpSnapshotType` | Yes |

## VsanDpSyncOpResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |

## VsanDpSyncOpSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `snapshotUuid` |  | `String` | No |
| `pe` |  | `VsanDpProtectedEntity` | No |
| `userIds` |  | `VsanDpUserIdBinding` | No |
| `vendorId` |  | `String` | No |
| `transportProvider` |  | `String` | No |
| `initiatorId` |  | `String` | No |
| `syncType` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `peSyncOptions` |  | `Array/VsanDpProtectedEntitySyncOptions` | No |

## VsanDpSyncType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `deltaSync` |  | `VsanDpSyncType` | Yes |
| `syncTypeUnknown` |  | `VsanDpSyncType` | Yes |
| `fullSync` |  | `VsanDpSyncType` | Yes |

## VsanDpUpdateProtectionPolicyOpSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `pe` |  | `VsanDpProtectedEntity` | No |
| `policySets` |  | `Array/VsanDpProtectionPolicySet` | No |
| `dynamicType` |  | `String` | No |

## VsanDpUserIdBinding

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |

## VsanDpVendorInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanDpVirtualDiskAdvancedOptions

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `diskKey` |  | `Number` | No |
| `dynamicType` |  | `String` | No |

## VsanDpVirtualDiskProtectionInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `vendorInfo` |  | `VsanDpVendorInfo` | No |
| `dynamicType` |  | `String` | No |
| `key` |  | `Number` | No |

## VsanDpVirtualDiskProtectionStats

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `deltaSizeBytes` |  | `Number` | No |
| `dynamicType` |  | `String` | No |
| `key` |  | `Number` | No |

## VsanDpVirtualMachineDiskSnapshot

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `diskKey` |  | `Number` | No |
| `snapshotUuid` |  | `String` | No |
| `sequenceUuid` |  | `String` | No |
| `epoch` |  | `Number` | No |
| `dynamicType` |  | `String` | No |
| `nativeSnapshotUri` |  | `String` | No |

## VsanDpVirtualMachineProtectedEntity

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `includedDiskKeys` |  | `Array/Number` | No |
| `dynamicType` |  | `String` | No |
| `vmRef` |  | `VsanManagedObjectReference` | No |

## VsanDpVirtualMachineProtectedEntityProtectionStatus

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `protectedDisks` |  | `Array/VsanDpVirtualDiskProtectionInfo` | No |
| `unprotectedDiskKeys` |  | `Array/Number` | No |
| `protectionStatus` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanDpVirtualMachineProtectedEntitySnapshot

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `diskSnapshots` |  | `Array/VsanDpVirtualMachineDiskSnapshot` | No |
| `dynamicType` |  | `String` | No |
| `uuid` |  | `String` | No |

## VsanDpVirtualMachineReplicationPolicy

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `generation` |  | `Number` | No |
| `paused` |  | `Boolean` | No |
| `remoteCertificateThumbprint` |  | `String` | No |
| `diskSettings` |  | `Array/VsanDpVirtualMachineReplicationPolicyDiskSettings` | No |
| `destination` |  | `String` | No |
| `vendorId` |  | `String` | No |
| `vmReplicationId` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `quiesceGuestEnabled` |  | `Boolean` | No |
| `netCompressionEnabled` |  | `Boolean` | No |
| `port` |  | `Number` | No |
| `rpoMinutes` |  | `Number` | No |
| `id` |  | `String` | No |
| `dataSetsReplicationEnabled` |  | `Boolean` | No |

### Methods

#### `VsanDpVirtualMachineReplicationPolicy`


**Returns:** `void`

---

#### `VsanDpVirtualMachineReplicationPolicy`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `id` | `String` |  |
| `generation` | `Number` |  |
| `vendorId` | `String` |  |
| `vmReplicationId` | `String` |  |
| `destination` | `String` |  |
| `port` | `Number` |  |
| `rpoMinutes` | `Number` |  |
| `quiesceGuestEnabled` | `Boolean` |  |
| `paused` | `Boolean` |  |
| `netCompressionEnabled` | `Boolean` |  |
| `remoteCertificateThumbprint` | `String` |  |
| `dataSetsReplicationEnabled` | `Boolean` |  |
| `diskSettings` | `Array/VsanDpVirtualMachineReplicationPolicyDiskSettings` |  |

**Returns:** `void`

---

#### `isNetCompressionEnabled`


**Returns:** `Boolean`

---

#### `isDataSetsReplicationEnabled`


**Returns:** `Boolean`

---

## VsanDpVirtualMachineReplicationPolicyDiskSettings

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `diskReplicationId` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `key` |  | `Number` | No |

## VsanDpVirtualMachineReplicationPolicyProgressInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `bytesTransferred` |  | `Number` | No |
| `checksumComparedBytes` |  | `Number` | No |
| `checksumTotalBytes` |  | `Number` | No |
| `progress` |  | `Number` | No |
| `dynamicType` |  | `String` | No |
| `bytesToTransfer` |  | `Number` | No |

## VsanDpVirtualMachineReplicationPolicyState

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `policies` |  | `Array/VsanDpProtectionPolicy` | No |
| `state` |  | `String` | No |
| `progressInfo` |  | `VsanDpVirtualMachineReplicationPolicyProgressInfo` | No |
| `dynamicType` |  | `String` | No |

## VsanDpVirtualMachineReplicationPolicyStateType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `paused` |  | `VsanDpVirtualMachineReplicationPolicyStateType` | Yes |
| `replicationStateUnknown` |  | `VsanDpVirtualMachineReplicationPolicyStateType` | Yes |
| `syncing` |  | `VsanDpVirtualMachineReplicationPolicyStateType` | Yes |
| `idle` |  | `VsanDpVirtualMachineReplicationPolicyStateType` | Yes |
| `active` |  | `VsanDpVirtualMachineReplicationPolicyStateType` | Yes |
| `error` |  | `VsanDpVirtualMachineReplicationPolicyStateType` | Yes |

## VsanDpVirtualMachineUserIdBinding

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `diskIds` |  | `Array/VsanDpDiskBinding` | No |
| `dynamicType` |  | `String` | No |

## VsanDpVmPeAdvancedOptions

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `diskAdvancedOptions` |  | `Array/VsanDpVirtualDiskAdvancedOptions` | No |
| `dynamicType` |  | `String` | No |

## VsanDpVmPeProtectionStats

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `protectedDisks` |  | `Array/VsanDpVirtualDiskProtectionStats` | No |
| `unprotectedDiskKeys` |  | `Array/Number` | No |
| `dynamicType` |  | `String` | No |

## VsanDpVSphereDataProtectionCapabilities

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `QueryPeInfo` |  | `VsanDpVSphereDataProtectionCapabilities` | Yes |
| `MultiPe` |  | `VsanDpVSphereDataProtectionCapabilities` | Yes |
| `QuiescedSnapshot` |  | `VsanDpVSphereDataProtectionCapabilities` | Yes |
| `VsanNativeSnapshot` |  | `VsanDpVSphereDataProtectionCapabilities` | Yes |
| `RuntimeStats` |  | `VsanDpVSphereDataProtectionCapabilities` | Yes |
| `PreservedExtents` |  | `VsanDpVSphereDataProtectionCapabilities` | Yes |
| `SparseDiskEnhancement` |  | `VsanDpVSphereDataProtectionCapabilities` | Yes |
| `PerDiskBaseSnapshotId` |  | `VsanDpVSphereDataProtectionCapabilities` | Yes |
| `VSphereDpCapabilities_Unknown` |  | `VsanDpVSphereDataProtectionCapabilities` | Yes |

## VsanDpVssBackupContext

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `vssBackupContextUnknown` |  | `VsanDpVssBackupContext` | Yes |
| `vssBackupContextAuto` |  | `VsanDpVssBackupContext` | Yes |
| `vssBackupContextBackup` |  | `VsanDpVssBackupContext` | Yes |
| `vssBackupContextFileShareBackup` |  | `VsanDpVssBackupContext` | Yes |

## VsanDpVssBackupSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `vssSnapshotBackupType` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `vssSnapshotBackupContext` |  | `String` | No |

## VsanDpVssBackupType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `vssBackupTypeUnknown` |  | `VsanDpVssBackupType` | Yes |
| `vssBackupTypeCopy` |  | `VsanDpVssBackupType` | Yes |
| `vssBackupTypeFull` |  | `VsanDpVssBackupType` | Yes |

## VsanEntityResourceCheckDetails

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `components` |  | `Number` | No |
| `usedCapacity` |  | `Number` | No |
| `name` |  | `String` | No |
| `maxComponents` |  | `Number` | No |
| `postOperationUsedCapacity` |  | `Number` | No |
| `isNew` |  | `Boolean` | No |
| `additionalRequiredCapacity` |  | `Number` | No |
| `postOperationCapacity` |  | `Number` | No |
| `dynamicType` |  | `String` | No |
| `uuid` |  | `String` | No |
| `capacity` |  | `Number` | No |

### Methods

#### `VsanEntityResourceCheckDetails`


**Returns:** `void`

---

#### `VsanEntityResourceCheckDetails`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `String` |  |
| `uuid` | `String` |  |
| `isNew` | `Boolean` |  |
| `capacity` | `Number` |  |
| `postOperationCapacity` | `Number` |  |
| `usedCapacity` | `Number` |  |
| `postOperationUsedCapacity` | `Number` |  |
| `additionalRequiredCapacity` | `Number` |  |
| `maxComponents` | `Number` |  |
| `components` | `Number` |  |

**Returns:** `void`

---

#### `isIsNew`


**Returns:** `Boolean`

---

## VsanFileServiceAntiVirusConfig

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `icapServerPool` |  | `Array/String` | No |
| `antiVirusServiceName` |  | `String` | No |
| `port` |  | `Number` | No |
| `dynamicType` |  | `String` | No |

## VsanFileShareQueryResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `fileShares` |  | `Array/VsanVsanFileShare` | No |
| `maxShareCount` |  | `Number` | No |
| `totalShareCount` |  | `Number` | No |
| `nextOffset` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanHciMeshClientOperation

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `destroyDs` |  | `VsanHciMeshClientOperation` | Yes |
| `unmount` |  | `VsanHciMeshClientOperation` | Yes |
| `dryrun` |  | `VsanHciMeshClientOperation` | Yes |
| `HciMeshClientOperation_unknown` |  | `VsanHciMeshClientOperation` | Yes |
| `update` |  | `VsanHciMeshClientOperation` | Yes |
| `dryrunDs` |  | `VsanHciMeshClientOperation` | Yes |
| `updateDs` |  | `VsanHciMeshClientOperation` | Yes |
| `mount` |  | `VsanHciMeshClientOperation` | Yes |

## VsanHostDiskDimensionsLba

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `block` |  | `Number` | No |
| `dynamicType` |  | `String` | No |
| `blockSize` |  | `Number` | No |

## VsanHostMaintenanceSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `purpose` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `vsanMode` |  | `VsanVsanHostDecommissionMode` | No |

## VsanHostScsiDisk

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `usedByMemoryTiering` |  | `Boolean` | No |
| `ssd` |  | `Boolean` | No |
| `displayName` |  | `String` | No |
| `localDisk` |  | `Boolean` | No |
| `vStorageSupport` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `uuid` |  | `String` | No |
| `deviceName` |  | `String` | No |
| `clusteredVmdkSupported` |  | `Boolean` | No |
| `capacity` |  | `VsanHostDiskDimensionsLba` | No |
| `dispersedNs` |  | `Boolean` | No |
| `protocolEndpoint` |  | `Boolean` | No |
| `deviceReservation` |  | `String` | No |
| `vendor` |  | `String` | No |
| `devicePath` |  | `String` | No |
| `model` |  | `String` | No |
| `key` |  | `String` | No |
| `applicationProtocol` |  | `String` | No |
| `canonicalName` |  | `String` | No |
| `deviceType` |  | `String` | No |
| `lunType` |  | `String` | No |
| `physicalLocation` |  | `Array/String` | No |
| `serialNumber` |  | `String` | No |
| `standardInquiry` |  | `Array/Number` | No |
| `emulatedDIXDIFEnabled` |  | `Boolean` | No |
| `scsiDiskType` |  | `String` | No |
| `vsanDiskInfo` |  | `VsanVsanHostVsanDiskInfo` | No |
| `revision` |  | `String` | No |
| `perenniallyReserved` |  | `Boolean` | No |
| `scsiLevel` |  | `Number` | No |
| `queueDepth` |  | `Number` | No |
| `operationalState` |  | `Array/String` | No |

### Methods

#### `VsanHostScsiDisk`


**Returns:** `void`

---

#### `isEmulatedDIXDIFEnabled`


**Returns:** `Boolean`

---

#### `isClusteredVmdkSupported`


**Returns:** `Boolean`

---

#### `isProtocolEndpoint`


**Returns:** `Boolean`

---

#### `isDispersedNs`


**Returns:** `Boolean`

---

#### `isLocalDisk`


**Returns:** `Boolean`

---

#### `isPerenniallyReserved`


**Returns:** `Boolean`

---

#### `isSsd`


**Returns:** `Boolean`

---

#### `isUsedByMemoryTiering`


**Returns:** `Boolean`

---

## VsanHostSpbm

### Methods

#### `hostSpbmRetrieveAllDatastoreInfo`


**Returns:** `Array/VsanHostSpbmDatastoreInfo`

---

#### `hostSpbmFetchDefaultPolicyBlob`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |

**Returns:** `String`

---

#### `_getRef`


**Returns:** `VsanManagedObjectReference`

---

#### `hostSpbmPushPolicyInfo`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/VsanHostSpbmPolicyInfo` |  |

**Returns:** `void`

---

#### `hostSpbmFetchApplicablePolicyBlob`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |
| `arg1` | `String` |  |

**Returns:** `String`

---

#### `hostSpbmPushDatastoreInfo`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/VsanHostSpbmDatastoreInfo` |  |

**Returns:** `void`

---

#### `hostSpbmRetrieveAllPolicyInfo`


**Returns:** `Array/VsanHostSpbmPolicyInfo`

---

#### `hostSpbmComputeHashInfo`


**Returns:** `VsanHostSpbmHashInfo`

---

## VsanHostSpbmDatastoreInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `datastoreUrl` |  | `String` | No |
| `defaultProfileId` |  | `String` | No |
| `namespace` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanHostSpbmHashInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `policyInfoHash` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `datastoreInfoHash` |  | `String` | No |

## VsanHostSpbmPolicyBlobInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `namespace` |  | `String` | No |
| `policyBlob` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanHostSpbmPolicyInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `generationId` |  | `Number` | No |
| `profileId` |  | `String` | No |
| `name` |  | `String` | No |
| `description` |  | `String` | No |
| `policyBlobInfo` |  | `Array/VsanHostSpbmPolicyBlobInfo` | No |
| `dynamicType` |  | `String` | No |

## VsanHostVsanHealthSystem

### Methods

#### `_getRef`


**Returns:** `VsanManagedObjectReference`

---

#### `vsanGetVcgIdForHwDevice`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |

**Returns:** `Number`

---

#### `vsanHostQueryObjectHealthSummary`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/String` |  |
| `arg1` | `Boolean` |  |
| `arg2` | `Boolean` |  |
| `arg3` | `Boolean` |  |
| `arg4` | `VsanVsanHealthQuerySpec` |  |
| `arg5` | `Boolean` |  |

**Returns:** `VsanVsanObjectOverallHealth`

---

#### `vsanFlashScsiControllerFirmware_Task`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVsanHclFirmwareUpdateSpec` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `prepareHostForClusterRebootWithNAMM`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Boolean` |  |
| `arg1` | `Number` |  |

**Returns:** `Boolean`

---

#### `vsanHostCreateVmHealthTest`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Number` |  |

**Returns:** `VsanVsanHostCreateVmHealthTestResult`

---

#### `vsanHostQueryVerifyNetworkSettings`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/String` |  |
| `arg1` | `Array/String` |  |
| `arg2` | `Array/String` |  |
| `arg3` | `VsanVsanHealthQuerySpec` |  |

**Returns:** `VsanVsanNetworkHealthResult`

---

#### `vsanHostQueryEncryptionHealthSummary`


**Returns:** `VsanVsanEncryptionHealthSummary`

---

#### `vsanCheckArchivalAccessibility`


**Returns:** `VsanVsanArchivalAccessibilityResult`

---

#### `vsanRemediateScsiControllerIssues`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |
| `arg1` | `Array/String` |  |

**Returns:** `void`

---

#### `restoreHostForClusterRebootWithNAMM`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Boolean` |  |
| `arg1` | `Number` |  |

**Returns:** `Boolean`

---

#### `vsanHostQueryCheckLimits`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVsanHostQueryCheckLimitsSpec` |  |

**Returns:** `VsanVsanLimitHealthResult`

---

#### `vsanQueryDiskRebalanceStatus`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/String` |  |

**Returns:** `Array/VsanVsanDiskRebalanceResult`

---

#### `vsanHostRunVmdkLoadTest`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |
| `arg1` | `Number` |  |
| `arg2` | `Array/VsanVsanVmdkLoadTestSpec` |  |

**Returns:** `Array/VsanVsanVmdkLoadTestResult`

---

#### `vsanGetNetworkDiagnosticsHealthInfo`


**Returns:** `VsanVsanNetworkDiagnosticsHealthInfo`

---

#### `vsanStopProactiveRebalance`


**Returns:** `Boolean`

---

#### `vsanHostQueryVsanPcap`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |
| `arg1` | `Number` |  |
| `arg2` | `Boolean` |  |
| `arg3` | `Boolean` |  |
| `arg4` | `Array/String` |  |
| `arg5` | `Array/Number` |  |
| `arg6` | `String` |  |

**Returns:** `VsanVsanVsanPcapResult`

---

#### `vsanGetHclInfo`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Boolean` |  |
| `arg1` | `Boolean` |  |

**Returns:** `VsanVsanHostHclInfo`

---

#### `vsanHostQueryHealthSystemVersion`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Boolean` |  |

**Returns:** `String`

---

#### `vsanHostClomdLiveness`


**Returns:** `Boolean`

---

#### `vsanHostQueryRunIperfServer`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Boolean` |  |
| `arg1` | `String` |  |
| `arg2` | `Number` |  |

**Returns:** `VsanVsanNetworkLoadTestResult`

---

#### `vsanSetVcgIdForHwDevice`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |
| `arg1` | `Number` |  |

**Returns:** `Boolean`

---

#### `vsanWaitForVsanHealthGenerationIdChange`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Number` |  |

**Returns:** `Boolean`

---

#### `vsanHostPrepareVmdkLoadTest`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |
| `arg1` | `Array/VsanVsanVmdkLoadTestSpec` |  |

**Returns:** `String`

---

#### `vsanLocalPropertyCollector`


**Returns:** `VsanManagedObjectReference`

---

#### `vsanStartProactiveRebalance`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Number` |  |
| `arg1` | `Number` |  |
| `arg2` | `Number` |  |
| `arg3` | `Number` |  |

**Returns:** `Boolean`

---

#### `refreshVsanHealthGenerationId`


**Returns:** `Number`

---

#### `vsanHostQueryDitEncryptionHealthSummary`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |

**Returns:** `VsanVsanDitEncryptionHealthSummary`

---

#### `vsanSyncHealthSpecForHost`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVsanHealthCustomizationSpec` |  |

**Returns:** `void`

---

#### `vsanLocalHostSystem`


**Returns:** `VsanManagedObjectReference`

---

#### `vsanHostQuerySmartStats`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/String` |  |
| `arg1` | `Boolean` |  |

**Returns:** `VsanVsanSmartStatsHostSummary`

---

#### `vsanQueryHostEMMState`


**Returns:** `VsanVsanHostEMMSummary`

---

#### `vsanQueryVsanConfigsByFilter`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/String` |  |

**Returns:** `VsanVsanHostConfigInfoEx`

---

#### `vsanCheckDatastoreUsage`


**Returns:** `VsanVsanDatastoreUsageResult`

---

#### `vsanHostRepairImmediateObjects`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/String` |  |
| `arg1` | `String` |  |

**Returns:** `VsanVsanRepairObjectsResult`

---

#### `vsanHostQueryFileServiceHealthSummary`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Boolean` |  |
| `arg1` | `Boolean` |  |

**Returns:** `VsanVsanFileServiceHealthSummary`

---

#### `vsanHostQueryRunIperfClient`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Boolean` |  |
| `arg1` | `String` |  |
| `arg2` | `Number` |  |
| `arg3` | `VsanVsanIperfClientSpec` |  |

**Returns:** `VsanVsanNetworkLoadTestResult`

---

#### `vsanHostCleanupVmdkLoadTest`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |
| `arg1` | `Array/VsanVsanVmdkLoadTestSpec` |  |

**Returns:** `String`

---

#### `vsanHostDpdLiveness`


**Returns:** `Boolean`

---

#### `vsanGetProactiveRebalanceInfo`


**Returns:** `VsanVsanProactiveRebalanceInfoEx`

---

#### `vsanHostQueryPhysicalDiskHealthSummary`


**Returns:** `VsanVsanPhysicalDiskHealthSummary`

---

#### `vsanCheckHostDaemonHealth`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/String` |  |

**Returns:** `Array/VsanVsanDaemonHealth`

---

#### `vsanHostQueryHostInfoByUuids`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/String` |  |

**Returns:** `Array/VsanVsanQueryResultHostInfo`

---

#### `vsanCheckCloudKmsKeyStatus`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |

**Returns:** `String`

---

#### `vsanHostQueryVmProcessList`


**Returns:** `Array/String`

---

## VsanKeyProviderId

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `id` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanLACPInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `lags` |  | `Array/VsanLAGInfo` | No |
| `dvsName` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanLAGInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `vnics` |  | `Array/String` | No |
| `uplinks` |  | `Array/VsanLAGUplinkInfo` | No |
| `groupState` |  | `Number` | No |
| `lagName` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanLAGUplinkInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `portState` |  | `Number` | No |
| `bundleState` |  | `String` | No |
| `uplinkName` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanLifecycleConfigDetails

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `clusterType` |  | `String` | No |
| `faultDomainsDetails` |  | `Array/VsanLifecycleFaultDomainDetails` | No |
| `witnessHostsDetails` |  | `Array/VsanLifecycleWitnessDetails` | No |
| `dynamicType` |  | `String` | No |

## VsanLifecycleFaultDomainDetails

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `hosts` |  | `Array/VsanManagedObjectReference` | No |
| `isPreferredFaultDomain` |  | `Boolean` | No |
| `name` |  | `String` | No |
| `dynamicType` |  | `String` | No |

### Methods

#### `VsanLifecycleFaultDomainDetails`


**Returns:** `void`

---

#### `VsanLifecycleFaultDomainDetails`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `isPreferredFaultDomain` | `Boolean` |  |
| `name` | `String` |  |
| `hosts` | `Array/VsanManagedObjectReference` |  |

**Returns:** `void`

---

#### `isIsPreferredFaultDomain`


**Returns:** `Boolean`

---

## VsanLifecyclePreCheckResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `type` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `status` |  | `String` | No |

## VsanLifecycleWitnessDetails

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `isVirtualAppliance` |  | `Boolean` | No |
| `sharedClusters` |  | `Array/VsanManagedObjectReference` | No |
| `host` |  | `VsanManagedObjectReference` | No |
| `dynamicType` |  | `String` | No |

## VsanManagedObjectReference

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `serverGuid` |  | `String` | No |
| `type` |  | `String` | No |
| `value` |  | `String` | No |

## VsanMetricFormat

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `PROMETHEUS` |  | `VsanMetricFormat` | Yes |
| `WAVEFRONT` |  | `VsanMetricFormat` | Yes |
| `MetricFormat_Unknown` |  | `VsanMetricFormat` | Yes |

## VsanMetricType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `DISTRIBUTION` |  | `VsanMetricType` | Yes |
| `SNAPSHOT` |  | `VsanMetricType` | Yes |
| `OP_STATS` |  | `VsanMetricType` | Yes |
| `VOLUME` |  | `VsanMetricType` | Yes |
| `SAAS_METRICS` |  | `VsanMetricType` | Yes |
| `CLUSTER` |  | `VsanMetricType` | Yes |
| `STORAGE_POLICY` |  | `VsanMetricType` | Yes |
| `MetricType_Unknown` |  | `VsanMetricType` | Yes |
| `DATASTORE` |  | `VsanMetricType` | Yes |

## VsanPerformClusterPowerActionSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `infraVMUuids` |  | `Array/String` | No |
| `initialPowerStatus` |  | `String` | No |
| `isOrchestration` |  | `Boolean` | No |
| `infraVMs` |  | `Array/VsanManagedObjectReference` | No |
| `targetPowerStatus` |  | `String` | No |
| `powerOffReason` |  | `String` | No |
| `dynamicType` |  | `String` | No |

### Methods

#### `VsanPerformClusterPowerActionSpec`


**Returns:** `void`

---

#### `VsanPerformClusterPowerActionSpec`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `targetPowerStatus` | `String` |  |
| `isOrchestration` | `Boolean` |  |
| `initialPowerStatus` | `String` |  |
| `powerOffReason` | `String` |  |
| `infraVMs` | `Array/VsanManagedObjectReference` |  |
| `infraVMUuids` | `Array/String` |  |

**Returns:** `void`

---

#### `isIsOrchestration`


**Returns:** `Boolean`

---

## VsanPnicTSOInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `nicName` |  | `String` | No |
| `isEnabled` |  | `Boolean` | No |
| `isSupported` |  | `Boolean` | No |
| `dynamicType` |  | `String` | No |

## VsanPrecheckDatastoreSourceOperation

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `checkUpdateDs` |  | `VsanPrecheckDatastoreSourceOperation` | Yes |
| `checkDestroyDs` |  | `VsanPrecheckDatastoreSourceOperation` | Yes |
| `checkCreateDs` |  | `VsanPrecheckDatastoreSourceOperation` | Yes |
| `PrecheckDatastoreSourceOperation_unknown` |  | `VsanPrecheckDatastoreSourceOperation` | Yes |

## VsanQuerySelectionNameType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `VOLUME_NAME` |  | `VsanQuerySelectionNameType` | Yes |
| `HEALTH_STATUS` |  | `VsanQuerySelectionNameType` | Yes |
| `VOLUME_METADATA` |  | `VsanQuerySelectionNameType` | Yes |
| `COMPLIANCE_STATUS` |  | `VsanQuerySelectionNameType` | Yes |
| `DATASTORE_URL` |  | `VsanQuerySelectionNameType` | Yes |
| `POLICY_ID` |  | `VsanQuerySelectionNameType` | Yes |
| `VOLUME_TYPE` |  | `VsanQuerySelectionNameType` | Yes |
| `BACKING_OBJECT_DETAILS` |  | `VsanQuerySelectionNameType` | Yes |
| `QuerySelectionNameType_Unknown` |  | `VsanQuerySelectionNameType` | Yes |
| `DATASTORE_ACCESSIBILITY_STATUS` |  | `VsanQuerySelectionNameType` | Yes |

## VsanQueryVsanManagedHostObjectUuidsSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `hosts` |  | `Array/VsanManagedObjectReference` | No |
| `dynamicType` |  | `String` | No |

## VsanQueryVsanManagedStorageSpaceUsageSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `datastoreTypes` |  | `Array/String` | No |
| `dynamicType` |  | `String` | No |

## VsanRdmaProtocol

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `RoCEv2` |  | `VsanRdmaProtocol` | Yes |

## VsanRemoteVsanNetworkTopology

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `Asymmetric` |  | `VsanRemoteVsanNetworkTopology` | Yes |
| `Topology_Unknown` |  | `VsanRemoteVsanNetworkTopology` | Yes |
| `Symmetric` |  | `VsanRemoteVsanNetworkTopology` | Yes |

## VsanRemoteVsanServerClusterConfig

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `clusterUuid` |  | `String` | No |
| `siteAffinity` |  | `VsanSiteAffinityInfo` | No |
| `dynamicType` |  | `String` | No |

## VsanRemoteVsanSite

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanRemoteVsanSiteAffinity

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `serverSite` |  | `VsanRemoteVsanSite` | No |
| `clientSite` |  | `VsanRemoteVsanSite` | No |
| `dynamicType` |  | `String` | No |

## VsanRemoteVsanSiteAffinityDetailed

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `serverSite` |  | `VsanRemoteVsanSiteDetailed` | No |
| `clientSite` |  | `VsanRemoteVsanSiteDetailed` | No |
| `dynamicType` |  | `String` | No |

## VsanRemoteVsanSiteDetailed

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` |  | `String` | No |
| `siteId` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanRepairTimerInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `objectCount` |  | `Number` | No |
| `minTimeToRepair` |  | `Number` | No |
| `objectCountWithRepairTimer` |  | `Number` | No |
| `dynamicType` |  | `String` | No |
| `maxTimeToRepair` |  | `Number` | No |

## VsanResyncIopsInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |
| `resyncIops` |  | `Number` | No |

## VsanServerInstanceManager

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `allRegisteredInstances` |  | `Array/Object` | Yes |

### Methods

#### `unregisterVsanConnection`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connectionUrl` | `String` |  |

**Returns:** `void`

---

#### `registerVsanConnection`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `hostName` | `String` |  |
| `port` | `Number` |  |
| `username` | `String` |  |
| `password` | `String` |  |

**Returns:** `String`

---

#### `validateConnection`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `hostName` | `String` |  |
| `port` | `Number` |  |
| `username` | `String` |  |
| `password` | `String` |  |

**Returns:** `void`

---

#### `getConnectionByUrl`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `url` | `String` |  |

**Returns:** `VsanConnection`

---

#### `updateVsanConnection`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `connectionUrl` | `String` |  |
| `username` | `String` |  |
| `password` | `String` |  |

**Returns:** `String`

---

#### `validateConnectionByUrl`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `hostUrl` | `String` |  |
| `username` | `String` |  |
| `password` | `String` |  |

**Returns:** `void`

---

## VsanServerNodeType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `REMOTE_METADATA_NODE` |  | `VsanServerNodeType` | Yes |
| `REMOTE_NODE` |  | `VsanServerNodeType` | Yes |
| `REMOTE_WITNESS_NODE` |  | `VsanServerNodeType` | Yes |
| `NodeType_Unknown` |  | `VsanServerNodeType` | Yes |

## VsanSiteAffinityInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` |  | `String` | No |
| `siteId` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanSSDEnduranceThresholdSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `diskname` |  | `String` | No |
| `severity` |  | `String` | No |
| `diskvendorname` |  | `String` | No |
| `hostname` |  | `String` | No |
| `diskvendorop` |  | `String` | No |
| `clustername` |  | `String` | No |
| `ssdEndurancePtg` |  | `Number` | No |
| `clusternameop` |  | `String` | No |
| `disknameop` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `hostnameop` |  | `String` | No |

## VsanStoragePoolDiskType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `StoragePoolDiskType_Unknown` |  | `VsanStoragePoolDiskType` | Yes |
| `singleTier` |  | `VsanStoragePoolDiskType` | Yes |

## VsanTrimDiskType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `TrimDiskType_Unknown` |  | `VsanTrimDiskType` | Yes |
| `cacheDisk` |  | `VsanTrimDiskType` | Yes |
| `capacityDisk` |  | `VsanTrimDiskType` | Yes |

## VsanVcRemoteVsanServerClusterConfig

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `serverClusters` |  | `Array/VsanVcRemoteVsanServerClusterInfo` | No |
| `dynamicType` |  | `String` | No |

## VsanVcRemoteVsanServerClusterDetailedInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `clusterUuid` |  | `String` | No |
| `networkTopology` |  | `String` | No |
| `siteAffinity` |  | `Array/VsanRemoteVsanSiteAffinityDetailed` | No |
| `dynamicType` |  | `String` | No |

## VsanVcRemoteVsanServerClusterInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `clusterUuid` |  | `String` | No |
| `networkTopology` |  | `String` | No |
| `siteAffinity` |  | `Array/VsanRemoteVsanSiteAffinity` | No |
| `dynamicType` |  | `String` | No |

## VsanVimClusterVsanDiskMappingsConfigSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `hostDiskMappings` |  | `Array/VsanVimClusterVsanHostDiskMapping` | No |
| `dynamicType` |  | `String` | No |

## VsanVimClusterVsanFaultDomainsConfigSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `witness` |  | `VsanVimClusterVsanWitnessSpec` | No |
| `witnessContainer` |  | `VsanVimClusterVsanWitnessContainerSpec` | No |
| `faultDomains` |  | `Array/VsanVimClusterVsanFaultDomainSpec` | No |
| `dynamicType` |  | `String` | No |

## VsanVimClusterVsanFaultDomainSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `hosts` |  | `Array/VsanManagedObjectReference` | No |
| `name` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVimClusterVsanHostDiskMapping

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `capacityDisks` |  | `Array/VsanHostScsiDisk` | No |
| `host` |  | `VsanManagedObjectReference` | No |
| `type` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `cacheDisks` |  | `Array/VsanHostScsiDisk` | No |

## VsanVimClusterVsanHostDiskMappingVsanDiskGroupCreationType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `allflash` |  | `VsanVimClusterVsanHostDiskMappingVsanDiskGroupCreationType` | Yes |
| `pmem` |  | `VsanVimClusterVsanHostDiskMappingVsanDiskGroupCreationType` | Yes |
| `hybrid` |  | `VsanVimClusterVsanHostDiskMappingVsanDiskGroupCreationType` | Yes |
| `VsanDiskGroupCreationType_Unknown` |  | `VsanVimClusterVsanHostDiskMappingVsanDiskGroupCreationType` | Yes |
| `vsandirect` |  | `VsanVimClusterVsanHostDiskMappingVsanDiskGroupCreationType` | Yes |

## VsanVimClusterVsanHostPersistedState

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `clusterUuid` |  | `String` | No |
| `passwdLastUpdate` |  | `Date` | No |
| `dynamicType` |  | `String` | No |

## VsanVimClusterVSANPreferredFaultDomainInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `preferredFaultDomainName` |  | `String` | No |
| `preferredFaultDomainId` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVimClusterVSANStretchedClusterCapability

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `hostCapability` |  | `VsanVimHostVSANStretchedClusterHostCapability` | No |
| `hostMoId` |  | `String` | No |
| `connStatus` |  | `String` | No |
| `isSupported` |  | `Boolean` | No |
| `dynamicType` |  | `String` | No |

### Methods

#### `VsanVimClusterVSANStretchedClusterCapability`


**Returns:** `void`

---

#### `VsanVimClusterVSANStretchedClusterCapability`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `hostMoId` | `String` |  |
| `connStatus` | `String` |  |
| `isSupported` | `Boolean` |  |
| `hostCapability` | `VsanVimHostVSANStretchedClusterHostCapability` |  |

**Returns:** `void`

---

#### `isIsSupported`


**Returns:** `Boolean`

---

## VsanVimClusterVSANStretchedClusterConfigIssueInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `summary` |  | `String` | No |
| `type` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `target` |  | `VsanManagedObjectReference` | No |

## VsanVimClusterVSANStretchedClusterConfigIssueInfoVSANStretchedClusterConfigIssueEnum

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `ClusterWithoutOneWitnessHost` |  | `VsanVimClusterVSANStretchedClusterConfigIssueInfoVSANStretchedClusterConfigIssueEnum` | Yes |
| `HostUnicastAgentUnset` |  | `VsanVimClusterVSANStretchedClusterConfigIssueInfoVSANStretchedClusterConfigIssueEnum` | Yes |
| `VSANStretchedClusterConfigIssueEnum_Unknown` |  | `VsanVimClusterVSANStretchedClusterConfigIssueInfoVSANStretchedClusterConfigIssueEnum` | Yes |
| `WitnessInsideVcCluster` |  | `VsanVimClusterVSANStretchedClusterConfigIssueInfoVSANStretchedClusterConfigIssueEnum` | Yes |
| `WitnessWithNoDiskMapping` |  | `VsanVimClusterVSANStretchedClusterConfigIssueInfoVSANStretchedClusterConfigIssueEnum` | Yes |
| `HostWithInvalidUnicastAgent` |  | `VsanVimClusterVSANStretchedClusterConfigIssueInfoVSANStretchedClusterConfigIssueEnum` | Yes |
| `SharedWitnessClusterDataHostNumExceed` |  | `VsanVimClusterVSANStretchedClusterConfigIssueInfoVSANStretchedClusterConfigIssueEnum` | Yes |
| `ClusterWithoutTwoDataFaultDomains` |  | `VsanVimClusterVSANStretchedClusterConfigIssueInfoVSANStretchedClusterConfigIssueEnum` | Yes |
| `SharedWitnessComponentLimitScaledDown` |  | `VsanVimClusterVSANStretchedClusterConfigIssueInfoVSANStretchedClusterConfigIssueEnum` | Yes |
| `WitnessFaultDomainInvalid` |  | `VsanVimClusterVSANStretchedClusterConfigIssueInfoVSANStretchedClusterConfigIssueEnum` | Yes |
| `WitnessPreferredFaultDomainInvalid` |  | `VsanVimClusterVSANStretchedClusterConfigIssueInfoVSANStretchedClusterConfigIssueEnum` | Yes |
| `HostWithNoStretchedClusterSupport` |  | `VsanVimClusterVSANStretchedClusterConfigIssueInfoVSANStretchedClusterConfigIssueEnum` | Yes |
| `WitnessPreferredFaultDomainNotExist` |  | `VsanVimClusterVSANStretchedClusterConfigIssueInfoVSANStretchedClusterConfigIssueEnum` | Yes |
| `ClusterWithMultipleUnicastAgents` |  | `VsanVimClusterVSANStretchedClusterConfigIssueInfoVSANStretchedClusterConfigIssueEnum` | Yes |

## VsanVimClusterVSANStretchedClusterFaultDomainConfig

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `firstFdName` |  | `String` | No |
| `secondFdHosts` |  | `Array/VsanManagedObjectReference` | No |
| `secondFdName` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `firstFdHosts` |  | `Array/VsanManagedObjectReference` | No |

## VsanVimClusterVsanVcDiskManagementSystem

### Methods

#### `queryDiskMappings`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `Array/VsanVimVsanHostDiskMapInfoEx`

---

#### `_getRef`


**Returns:** `VsanManagedObjectReference`

---

#### `removeDiskEx`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Array/VsanHostScsiDisk` |  |
| `arg2` | `VsanHostMaintenanceSpec` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `unmountDiskMappingEx`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Array/VsanVsanHostDiskMapping` |  |
| `arg2` | `VsanHostMaintenanceSpec` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `queryVsanManagedStorageTypes`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `Array/VsanVimVsanClusterVsanManagedStorageInfo`

---

#### `rebuildDiskMapping`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `VsanVsanHostDiskMapping` |  |
| `arg2` | `VsanHostMaintenanceSpec` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `removeDiskMappingEx`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Array/VsanVsanHostDiskMapping` |  |
| `arg2` | `VsanHostMaintenanceSpec` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `queryClusterDataEfficiencyCapacityState`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `VsanVimVsanDataEfficiencyCapacityState`

---

#### `retrieveAllFlashCapabilities`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `Array/VsanVimVsanHostVsanHostCapability`

---

#### `vsanAddStoragePoolDisk`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/VsanVsanAddStoragePoolDiskSpec` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `retrieveAllFlashCapability`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `VsanVimVsanHostVsanHostCapability`

---

#### `vsanUnmountStoragePoolDisks`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `VsanVsanDeleteStoragePoolDiskSpec` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vsanDeleteStoragePoolDisk`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `VsanVsanDeleteStoragePoolDiskSpec` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `initializeDiskMappings`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVimVsanHostDiskMappingCreationSpec` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `queryVsanManagedDisks`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `VsanVimVsanHostQueryVsanDisksSpec` |  |

**Returns:** `VsanVimVsanHostVsanManagedDisksInfo`

---

## VsanVimClusterVsanVcStretchedClusterSystem

### Methods

#### `vSANVcRemoveWitnessContainer`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `VsanVsanWitnessContainer` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vSANVcAddWitnessContainer`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `VsanVsanWitnessContainer` |  |
| `arg2` | `String` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `_getRef`


**Returns:** `VsanManagedObjectReference`

---

#### `vSANVcConvertToStretchedCluster`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `VsanVimClusterVSANStretchedClusterFaultDomainConfig` |  |
| `arg2` | `VsanManagedObjectReference` |  |
| `arg3` | `String` |  |
| `arg4` | `VsanVsanHostDiskMapping` |  |
| `arg5` | `VsanVsanAddStoragePoolDiskSpec` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `querySharedWitnessCompatibility`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Array/VsanManagedObjectReference` |  |

**Returns:** `VsanVSANSharedWitnessCompatibilityResult`

---

#### `vSANVcSetPreferredFaultDomainEx`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `String` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vSANVcConvertToStretchedClusterWithContainer`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `VsanVimClusterVSANStretchedClusterFaultDomainConfig` |  |
| `arg2` | `VsanVsanWitnessContainer` |  |
| `arg3` | `String` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `querySharedWitnessClusterInfo`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Boolean` |  |

**Returns:** `Array/VsanClusterRuntimeInfo`

---

#### `vSANVcAddWitnessHost`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `VsanManagedObjectReference` |  |
| `arg2` | `String` |  |
| `arg3` | `VsanVsanHostDiskMapping` |  |
| `arg4` | `Boolean` |  |
| `arg5` | `VsanVsanAddStoragePoolDiskSpec` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vSANVcRefreshWitnessContainerCert`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `String` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vSANVcGetNumOfWitnessHosts`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `Number`

---

#### `vSANVcIsWitnessHost`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `Boolean`

---

#### `vSANVcWitnessContainerPrecheck`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `VsanVsanWitnessContainer` |  |

**Returns:** `VsanVsanWitnessContainerPrecheckResult`

---

#### `vSANVcRetrieveStretchedClusterHostCapability`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `VsanVimClusterVSANStretchedClusterCapability`

---

#### `vsanVcAddWitnessHostForClusters`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVsanVcStretchedClusterConfigSpec` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vSANVcGetWitnessContainers`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `Array/VsanVimClusterVSANWitnessHostInfo`

---

#### `vSANVcSetPreferredFaultDomain`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `String` |  |
| `arg2` | `VsanManagedObjectReference` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vSANVcRetrieveStretchedClusterVcCapability`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Boolean` |  |

**Returns:** `Array/VsanVimClusterVSANStretchedClusterCapability`

---

#### `vSANIsWitnessVirtualAppliance`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/VsanManagedObjectReference` |  |

**Returns:** `Array/VsanVsanHostVirtualApplianceInfo`

---

#### `vSANVcRemoveWitnessHost`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `VsanManagedObjectReference` |  |
| `arg2` | `String` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vSANVcReconcileUnicastAgents`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `Boolean`

---

#### `vsanVcReplaceWitnessHostForClusters`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVsanVcStretchedClusterConfigSpec` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vSANVcGetWitnessHosts`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `Array/VsanVimClusterVSANWitnessHostInfo`

---

#### `vSANVcGetPreferredFaultDomain`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `VsanVimClusterVSANPreferredFaultDomainInfo`

---

#### `vSANVcGetStretchedClusterConfigIssues`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `Array/VsanVimClusterVSANStretchedClusterConfigIssueInfo`

---

## VsanVimClusterVsanWitnessContainerSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `preferredFaultDomainName` |  | `String` | No |
| `witnessContainerInfo` |  | `VsanVsanWitnessContainer` | No |
| `dynamicType` |  | `String` | No |

## VsanVimClusterVSANWitnessHostInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `metadataMode` |  | `Boolean` | No |
| `faultDomainName` |  | `String` | No |
| `host` |  | `VsanManagedObjectReference` | No |
| `preferredFdName` |  | `String` | No |
| `unicastAgentAddr` |  | `String` | No |
| `nodeUuid` |  | `String` | No |
| `witnessContainerInfo` |  | `VsanVsanWitnessContainer` | No |
| `preferredFdUuid` |  | `String` | No |
| `dynamicType` |  | `String` | No |

### Methods

#### `VsanVimClusterVSANWitnessHostInfo`


**Returns:** `void`

---

#### `VsanVimClusterVSANWitnessHostInfo`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `nodeUuid` | `String` |  |
| `faultDomainName` | `String` |  |
| `preferredFdName` | `String` |  |
| `preferredFdUuid` | `String` |  |
| `unicastAgentAddr` | `String` |  |
| `host` | `VsanManagedObjectReference` |  |
| `metadataMode` | `Boolean` |  |
| `witnessContainerInfo` | `VsanVsanWitnessContainer` |  |

**Returns:** `void`

---

#### `isMetadataMode`


**Returns:** `Boolean`

---

## VsanVimClusterVsanWitnessSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `preferredFaultDomainName` |  | `String` | No |
| `diskMapping` |  | `VsanVsanHostDiskMapping` | No |
| `storagePoolSpec` |  | `VsanVsanAddStoragePoolDiskSpec` | No |
| `host` |  | `VsanManagedObjectReference` | No |
| `dynamicType` |  | `String` | No |

## VsanVimHostVSANCmmdsFaultDomainInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `faultDomainName` |  | `String` | No |
| `faultDomainId` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVimHostVSANCmmdsNodeInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `isWitness` |  | `Boolean` | No |
| `nodeUuid` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVimHostVSANCmmdsPreferredFaultDomainInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `preferredFaultDomainName` |  | `String` | No |
| `preferredFaultDomainId` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVimHostVsanComponentAlignment

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `totalBytesToSync` |  | `Number` | No |
| `objectsWithUnalignedComponents` |  | `Array/String` | No |
| `unalignedObjects` |  | `Array/String` | No |
| `dynamicType` |  | `String` | No |

## VsanVimHostVsanDiskManagementSystem

### Methods

#### `vsanRealignVsanSparseOnline`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/String` |  |
| `arg1` | `Number` |  |

**Returns:** `VsanVimHostVsanRealignResult`

---

#### `_getRef`


**Returns:** `VsanManagedObjectReference`

---

#### `vsanRealignVsanSparseOffline`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |
| `arg1` | `Number` |  |

**Returns:** `VsanVimHostVsanRealignResult`

---

#### `trimVsanDisks`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVimVsanHostTrimDiskSpec` |  |
| `arg1` | `String` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vsanQueryHostStoragePoolDisks`


**Returns:** `Array/VsanVimVsanHostStoragePoolDiskInfo`

---

#### `vsanQueryNamespaceUuids`


**Returns:** `Array/String`

---

#### `vsanAlignObjectSize`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |

**Returns:** `Boolean`

---

#### `queryVsanInaccessibleObjects`


**Returns:** `Array/String`

---

#### `vsanScanNamespace`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |

**Returns:** `Array/String`

---

#### `vsanDeleteHostStoragePoolDisk`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVsanDeleteStoragePoolDiskSpec` |  |
| `arg1` | `Number` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `queryHostDiskMappings`


**Returns:** `Array/VsanVimVsanHostDiskMapInfoEx`

---

#### `vsanQueryUnalignedStatus`


**Returns:** `VsanVimHostVsanComponentAlignment`

---

#### `vsanRemoveConcat`


**Returns:** `Boolean`

---

#### `vsanHostUpdateStoragePoolDisk`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVimVsanHostUpdateStoragePoolDiskSpec` |  |

**Returns:** `void`

---

#### `queryDataEfficiencyCapacityState`


**Returns:** `VsanVimVsanDataEfficiencyCapacityState`

---

#### `vsanUnmountHostStoragePoolDisks`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVsanDeleteStoragePoolDiskSpec` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `updateCapacityFlashStatusForDisks`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/String` |  |
| `arg1` | `Boolean` |  |

**Returns:** `Boolean`

---

#### `vsanAddHostStoragePoolDisk`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVsanAddStoragePoolDiskSpec` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vsanGetOpenV2VsanSparseChain`


**Returns:** `Array/String`

---

#### `retrieveVsanDiskManagementSystemCapability`


**Returns:** `VsanVimVsanHostVsanDiskManagementSystemCapability`

---

#### `fixVsanObjects`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/String` |  |

**Returns:** `void`

---

#### `vsanScanObjects_Task`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Number` |  |
| `arg1` | `Boolean` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `upgradeFormatVersionForDiskMapping`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |

**Returns:** `void`

---

#### `vsanRebuildDiskGroup`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVsanHostDecommissionMode` |  |
| `arg1` | `String` |  |
| `arg2` | `String` |  |
| `arg3` | `String` |  |
| `arg4` | `String` |  |

**Returns:** `VsanManagedObjectReference`

---

## VsanVimHostVsanPrecheckerSystem

### Methods

#### `_getRef`


**Returns:** `VsanManagedObjectReference`

---

#### `whatIfDecomCheck_Task`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/String` |  |
| `arg1` | `VsanHostMaintenanceSpec` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `complianceResourceCheck_Task`


**Returns:** `VsanManagedObjectReference`

---

## VsanVimHostVsanRealignResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `total` |  | `Number` | No |
| `progress` |  | `Number` | No |
| `dynamicType` |  | `String` | No |
| `status` |  | `Boolean` | No |

### Methods

#### `VsanVimHostVsanRealignResult`


**Returns:** `void`

---

#### `VsanVimHostVsanRealignResult`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `status` | `Boolean` |  |
| `progress` | `Number` |  |
| `total` | `Number` |  |

**Returns:** `void`

---

#### `isStatus`


**Returns:** `Boolean`

---

## VsanVimHostVsanRecoveryComponentInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `componentState` |  | `Number` | No |
| `size` |  | `Number` | No |
| `offset` |  | `Number` | No |
| `diskUuid` |  | `String` | No |
| `staleCsn` |  | `Number` | No |
| `raid0ColCount` |  | `Number` | No |
| `host` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `uuid` |  | `String` | No |
| `raid0Col` |  | `Number` | No |

## VsanVimHostVsanRecoveryFlags

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `recoverAll` |  | `Boolean` | No |
| `includeAbsent` |  | `Boolean` | No |
| `force` |  | `Boolean` | No |
| `includeActive` |  | `Boolean` | No |
| `includeDegraded` |  | `Boolean` | No |
| `dynamicType` |  | `String` | No |

## VsanVimHostVsanRecoveryHostDiskInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `diskUuid` |  | `String` | No |
| `hostUuid` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVimHostVsanRecoveryObjectInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `msgs` |  | `Array/String` | No |
| `errs` |  | `Array/String` | No |
| `comps` |  | `Array/VsanVimHostVsanRecoveryComponentInfo` | No |
| `flags` |  | `VsanVimHostVsanRecoveryFlags` | No |
| `recoverable` |  | `Boolean` | No |
| `dynamicType` |  | `String` | No |
| `uuid` |  | `String` | No |
| `props` |  | `VsanVimHostVsanRecoveryObjectProps` | No |

## VsanVimHostVsanRecoveryObjectProps

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `hasDataAvailability` |  | `Boolean` | No |
| `hasQuorum` |  | `Boolean` | No |
| `size` |  | `Number` | No |
| `hosts` |  | `Array/String` | No |
| `configRootType` |  | `String` | No |
| `recoverySupported` |  | `Boolean` | No |
| `extendedAttrib` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVimHostVsanRecoveryService

### Methods

#### `vsanRecoveryGetTaskStatus`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |

**Returns:** `VsanVimHostVsanRecoveryStatus`

---

#### `vsanRecoveryGetRecoverableComponents`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |
| `arg1` | `VsanVimHostVsanRecoveryFlags` |  |

**Returns:** `Array/VsanVimHostVsanRecoveryComponentInfo`

---

#### `_getRef`


**Returns:** `VsanManagedObjectReference`

---

#### `vsanRecoveryServiceSetDummyCmmdsMode`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |

**Returns:** `void`

---

#### `vsanRecoveryRecoverComponent`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVimHostVsanRecoveryComponentInfo` |  |
| `arg1` | `String` |  |
| `arg2` | `String` |  |

**Returns:** `String`

---

#### `vsanRecoveryServiceVersion`


**Returns:** `String`

---

#### `vsanRecoveryDeleteLsomCompLocal`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |
| `arg1` | `String` |  |
| `arg2` | `Boolean` |  |

**Returns:** `Boolean`

---

#### `vsanRecoveryRecoverObject`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVimHostVsanRecoveryObjectInfo` |  |
| `arg1` | `String` |  |

**Returns:** `String`

---

#### `vsanRecoveryGetDiskUuidForLocalComp`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |

**Returns:** `String`

---

#### `vsanRecoveryServiceGetDummyCmmdsMode`


**Returns:** `Boolean`

---

#### `vsanRecoveryGetObjectProps`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |

**Returns:** `VsanVimHostVsanRecoveryObjectProps`

---

#### `vsanRecoveryCreateObject`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVimHostVsanRecoveryObjectProps` |  |
| `arg1` | `String` |  |

**Returns:** `String`

---

#### `vsanRecoveryGetAllObjectsStatus`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVimHostVsanRecoveryFlags` |  |

**Returns:** `Array/VsanVimHostVsanRecoveryObjectInfo`

---

#### `vsanRecoveryGetObjectRecoveryInfo`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |
| `arg1` | `VsanVimHostVsanRecoveryFlags` |  |

**Returns:** `VsanVimHostVsanRecoveryObjectInfo`

---

#### `vsanRecoveryGetDiskAndHostForComp`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |

**Returns:** `VsanVimHostVsanRecoveryHostDiskInfo`

---

## VsanVimHostVsanRecoveryStatus

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `hadError` |  | `Boolean` | No |
| `progress` |  | `Number` | No |
| `totalBytes` |  | `Number` | No |
| `message` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `speed` |  | `Number` | No |
| `completedBytes` |  | `Number` | No |

## VsanVimHostVSANStretchedClusterHostCapability

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |
| `featureVersion` |  | `String` | No |

## VsanVimHostVSANStretchedClusterHostInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `faultDomainInfo` |  | `VsanVimHostVSANCmmdsFaultDomainInfo` | No |
| `nodeInfo` |  | `VsanVimHostVSANCmmdsNodeInfo` | No |
| `dynamicType` |  | `String` | No |
| `preferredFaultDomainInfo` |  | `VsanVimHostVSANCmmdsPreferredFaultDomainInfo` | No |

## VsanVimHostVsanStretchedClusterSystem

### Methods

#### `vSANHostListUnicastAgents`


**Returns:** `Array/VsanVsanUnicastAgentInfo`

---

#### `_getRef`


**Returns:** `VsanManagedObjectReference`

---

#### `vSANWitnessSetPreferredFaultDomain`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |
| `arg1` | `String` |  |

**Returns:** `void`

---

#### `vSANHostGetStretchedClusterCapability`


**Returns:** `VsanVimHostVSANStretchedClusterHostCapability`

---

#### `vSANWitnessJoinVsanCluster`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |
| `arg1` | `String` |  |
| `arg2` | `Boolean` |  |

**Returns:** `void`

---

#### `vSANWitnessLeaveVsanCluster`


**Returns:** `void`

---

#### `vSANHostListUnicastAgent`


**Returns:** `String`

---

#### `vSANClusterGetPreferredFaultDomain`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |

**Returns:** `VsanVimHostVSANCmmdsPreferredFaultDomainInfo`

---

#### `vSANHostRemoveUnicastAgent`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |
| `arg1` | `Boolean` |  |

**Returns:** `void`

---

#### `vSANHostGetStretchedClusterInfoFromCmmds`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |

**Returns:** `Array/VsanVimHostVSANStretchedClusterHostInfo`

---

#### `vSANHostAddUnicastAgent`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |
| `arg1` | `Number` |  |
| `arg2` | `Boolean` |  |
| `arg3` | `String` |  |
| `arg4` | `String` |  |
| `arg5` | `String` |  |
| `arg6` | `String` |  |

**Returns:** `void`

---

## VsanVimVsanClusterComplianceResourceCheckStatusType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `ComplianceResourceCheckStatusType_Unknown` |  | `VsanVimVsanClusterComplianceResourceCheckStatusType` | Yes |
| `inProgress` |  | `VsanVimVsanClusterComplianceResourceCheckStatusType` | Yes |
| `aborted` |  | `VsanVimVsanClusterComplianceResourceCheckStatusType` | Yes |
| `completed` |  | `VsanVimVsanClusterComplianceResourceCheckStatusType` | Yes |
| `uninitialized` |  | `VsanVimVsanClusterComplianceResourceCheckStatusType` | Yes |

## VsanVimVsanClusterResourceQueryType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `compliance` |  | `VsanVimVsanClusterResourceQueryType` | Yes |
| `decommission` |  | `VsanVimVsanClusterResourceQueryType` | Yes |
| `ResourceQueryType_Unknown` |  | `VsanVimVsanClusterResourceQueryType` | Yes |

## VsanVimVsanClusterVsanManagedStorageInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `type` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVimVsanClusterVsanManagedStorageType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `pmem` |  | `VsanVimVsanClusterVsanManagedStorageType` | Yes |
| `vsandirect` |  | `VsanVimVsanClusterVsanManagedStorageType` | Yes |
| `VsanManagedStorageType_Unknown` |  | `VsanVimVsanClusterVsanManagedStorageType` | Yes |

## VsanVimVsanDataEfficiencyCapacityState

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `logicalCapacity` |  | `Number` | No |
| `dedupMetadataSize` |  | `Number` | No |
| `logicalCapacityUsed` |  | `Number` | No |
| `physicalCapacity` |  | `Number` | No |
| `physicalCapacityUsed` |  | `Number` | No |
| `dynamicType` |  | `String` | No |
| `spaceEfficiencyMetadataSize` |  | `VsanVsanSpaceEfficiencyMetadataSize` | No |

## VsanVimVsanHostDiskMapInfoEx

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `encryptionInfo` |  | `VsanVsanDataEncryptionConfig` | No |
| `mapping` |  | `VsanVsanHostDiskMapping` | No |
| `unlockedEncrypted` |  | `Boolean` | No |
| `dataEfficiencyConfig` |  | `VsanVsanDataEfficiencyConfig` | No |
| `isMounted` |  | `Boolean` | No |
| `isDataEfficiency` |  | `Boolean` | No |
| `isAllFlash` |  | `Boolean` | No |
| `diskgroupCapability` |  | `Array/String` | No |
| `dynamicType` |  | `String` | No |
| `metaRedundancy` |  | `Boolean` | No |

### Methods

#### `VsanVimVsanHostDiskMapInfoEx`


**Returns:** `void`

---

#### `VsanVimVsanHostDiskMapInfoEx`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `mapping` | `VsanVsanHostDiskMapping` |  |
| `isMounted` | `Boolean` |  |
| `unlockedEncrypted` | `Boolean` |  |
| `isAllFlash` | `Boolean` |  |
| `isDataEfficiency` | `Boolean` |  |
| `encryptionInfo` | `VsanVsanDataEncryptionConfig` |  |
| `dataEfficiencyConfig` | `VsanVsanDataEfficiencyConfig` |  |
| `diskgroupCapability` | `Array/String` |  |
| `metaRedundancy` | `Boolean` |  |

**Returns:** `void`

---

#### `isMetaRedundancy`


**Returns:** `Boolean`

---

#### `isIsDataEfficiency`


**Returns:** `Boolean`

---

#### `isUnlockedEncrypted`


**Returns:** `Boolean`

---

## VsanVimVsanHostDiskMappingCreationSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `capacityDisks` |  | `Array/VsanHostScsiDisk` | No |
| `creationType` |  | `String` | No |
| `host` |  | `VsanManagedObjectReference` | No |
| `dynamicType` |  | `String` | No |
| `cacheDisks` |  | `Array/VsanHostScsiDisk` | No |

## VsanVimVsanHostDiskMappingCreationSpecDiskMappingCreationType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `pmem` |  | `VsanVimVsanHostDiskMappingCreationSpecDiskMappingCreationType` | Yes |
| `hybrid` |  | `VsanVimVsanHostDiskMappingCreationSpecDiskMappingCreationType` | Yes |
| `allFlash` |  | `VsanVimVsanHostDiskMappingCreationSpecDiskMappingCreationType` | Yes |
| `DiskMappingCreationType_Unknown` |  | `VsanVimVsanHostDiskMappingCreationSpecDiskMappingCreationType` | Yes |
| `vsandirect` |  | `VsanVimVsanHostDiskMappingCreationSpecDiskMappingCreationType` | Yes |

## VsanVimVsanHostDiskResultEx

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `storagePoolDiskState` |  | `String` | No |
| `disk` |  | `VsanHostScsiDisk` | No |
| `vsanDirectTagged` |  | `Boolean` | No |
| `isCapacityFlash` |  | `Boolean` | No |
| `vsanUuid` |  | `String` | No |
| `state` |  | `String` | No |
| `degraded` |  | `Boolean` | No |
| `dynamicType` |  | `String` | No |

### Methods

#### `VsanVimVsanHostDiskResultEx`


**Returns:** `void`

---

#### `isIsCapacityFlash`


**Returns:** `Boolean`

---

#### `isDegraded`


**Returns:** `Boolean`

---

## VsanVimVsanHostQueryVsanDisksSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `vsanDiskType` |  | `String` | No |
| `diskName` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVimVsanHostStoragePoolDiskInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `disk` |  | `VsanHostScsiDisk` | No |
| `dekId` |  | `String` | No |
| `vsanUuid` |  | `String` | No |
| `isEncrypted` |  | `Boolean` | No |
| `isMounted` |  | `Boolean` | No |
| `diskType` |  | `String` | No |
| `dynamicType` |  | `String` | No |

### Methods

#### `VsanVimVsanHostStoragePoolDiskInfo`


**Returns:** `void`

---

#### `isIsEncrypted`


**Returns:** `Boolean`

---

#### `isIsMounted`


**Returns:** `Boolean`

---

## VsanVimVsanHostStoragePoolInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `storagePoolDisks` |  | `Array/VsanVimVsanHostStoragePoolDiskInfo` | No |
| `dynamicType` |  | `String` | No |

## VsanVimVsanHostTrimDiskEntry

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `diskName` |  | `String` | No |
| `diskType` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVimVsanHostTrimDiskSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `disks` |  | `Array/VsanVimVsanHostTrimDiskEntry` | No |
| `dynamicType` |  | `String` | No |

## VsanVimVsanHostUpdateStoragePoolDiskSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `diskUuids` |  | `Array/String` | No |
| `diskFormatVersion` |  | `Number` | No |
| `dynamicType` |  | `String` | No |

## VsanVimVsanHostVsanDirectStorage

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `tier` |  | `String` | No |
| `scsiDisks` |  | `Array/VsanVimVsanHostVsanScsiDisk` | No |
| `dynamicType` |  | `String` | No |

## VsanVimVsanHostVsanDiskManagementSystemCapability

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |
| `version` |  | `String` | No |

## VsanVimVsanHostVsanHostCapability

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `host` |  | `VsanManagedObjectReference` | No |
| `isLicensed` |  | `Boolean` | No |
| `isSupported` |  | `Boolean` | No |
| `dynamicType` |  | `String` | No |

## VsanVimVsanHostVsanManagedDisksInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `storagePools` |  | `Array/VsanVimVsanHostStoragePoolInfo` | No |
| `vSANDirectDisks` |  | `Array/VsanVimVsanHostVsanDirectStorage` | No |
| `vSANPMemInfo` |  | `VsanVimVsanHostVsanManagedPMemInfo` | No |
| `dynamicType` |  | `String` | No |
| `vSANDiskMapInfo` |  | `Array/VsanVimVsanHostDiskMapInfoEx` | No |

## VsanVimVsanHostVsanManagedPMemInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `localPMemDatastores` |  | `Array/VsanManagedObjectReference` | No |
| `dynamicType` |  | `String` | No |

## VsanVimVsanHostVsanScsiDisk

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `lunType` |  | `String` | No |
| `ssd` |  | `Boolean` | No |
| `displayName` |  | `String` | No |
| `usedCapacity` |  | `Number` | No |
| `scsiDiskType` |  | `String` | No |
| `localDisk` |  | `Boolean` | No |
| `dynamicType` |  | `String` | No |
| `uuid` |  | `String` | No |
| `capacity` |  | `VsanHostDiskDimensionsLba` | No |
| `vendor` |  | `String` | No |
| `devicePath` |  | `String` | No |
| `model` |  | `String` | No |
| `operationalState` |  | `Array/String` | No |
| `canonicalName` |  | `String` | No |

### Methods

#### `VsanVimVsanHostVsanScsiDisk`


**Returns:** `void`

---

#### `isLocalDisk`


**Returns:** `Boolean`

---

#### `isSsd`


**Returns:** `Boolean`

---

## VsanVimVsanLifecycleCheckOperation

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `LifecycleCheckOperation_unknown` |  | `VsanVimVsanLifecycleCheckOperation` | Yes |
| `noChecks` |  | `VsanVimVsanLifecycleCheckOperation` | Yes |

## VsanVimVsanLifecycleClusterType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `single` |  | `VsanVimVsanLifecycleClusterType` | Yes |
| `metadata` |  | `VsanVimVsanLifecycleClusterType` | Yes |
| `stretched` |  | `VsanVimVsanLifecycleClusterType` | Yes |
| `LifecycleClusterType_unknown` |  | `VsanVimVsanLifecycleClusterType` | Yes |

## VsanVimVsanLifecyclePreCheckType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `PreCheckType_unknown` |  | `VsanVimVsanLifecyclePreCheckType` | Yes |
| `virtualWitnessHost` |  | `VsanVimVsanLifecyclePreCheckType` | Yes |
| `supportedWitnessVersion` |  | `VsanVimVsanLifecyclePreCheckType` | Yes |
| `sharedWitnessHost` |  | `VsanVimVsanLifecyclePreCheckType` | Yes |

## VsanVimVsanMountPrecheckType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `datastorePolicy` |  | `VsanVimVsanMountPrecheckType` | Yes |
| `serverVersionForComputeMode` |  | `VsanVimVsanMountPrecheckType` | Yes |
| `vsanFormatVersion` |  | `VsanVimVsanMountPrecheckType` | Yes |
| `serverClusterLimit` |  | `VsanVimVsanMountPrecheckType` | Yes |
| `datacenter` |  | `VsanVimVsanMountPrecheckType` | Yes |
| `remoteVcConnection` |  | `VsanVimVsanMountPrecheckType` | Yes |
| `supportedConfiguration` |  | `VsanVimVsanMountPrecheckType` | Yes |
| `datastoreExists` |  | `VsanVimVsanMountPrecheckType` | Yes |
| `clientVcenterLimit` |  | `VsanVimVsanMountPrecheckType` | Yes |
| `license` |  | `VsanVimVsanMountPrecheckType` | Yes |
| `serverClusterHealth` |  | `VsanVimVsanMountPrecheckType` | Yes |
| `connectivity` |  | `VsanVimVsanMountPrecheckType` | Yes |
| `vcenterIdValid` |  | `VsanVimVsanMountPrecheckType` | Yes |
| `serverVcenterLimit` |  | `VsanVimVsanMountPrecheckType` | Yes |
| `localVsanDatastore` |  | `VsanVimVsanMountPrecheckType` | Yes |
| `vcApiVersion` |  | `VsanVimVsanMountPrecheckType` | Yes |
| `remoteDatastoreLimit` |  | `VsanVimVsanMountPrecheckType` | Yes |
| `checkServerVcenter` |  | `VsanVimVsanMountPrecheckType` | Yes |
| `datastoreType` |  | `VsanVimVsanMountPrecheckType` | Yes |
| `networkLatency` |  | `VsanVimVsanMountPrecheckType` | Yes |
| `precheck_unknown` |  | `VsanVimVsanMountPrecheckType` | Yes |
| `clientClusterLimit` |  | `VsanVimVsanMountPrecheckType` | Yes |

## VsanVimVsanReconfigSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `perfsvcConfig` |  | `VsanVsanPerfsvcConfig` | No |
| `extendedConfig` |  | `VsanVsanExtendedConfig` | No |
| `datastoreConfig` |  | `VsanVsanDatastoreConfig` | No |
| `iscsiSpec` |  | `VsanVsanIscsiTargetServiceSpec` | No |
| `serverClusterConfig` |  | `VsanVcRemoteVsanServerClusterConfig` | No |
| `metricsConfig` |  | `VsanVsanMetricsConfig` | No |
| `dataInTransitEncryptionConfig` |  | `VsanVsanDataInTransitEncryptionConfig` | No |
| `dynamicType` |  | `String` | No |
| `deconvergedNetConfig` |  | `VsanVsanDeconvergedNetConfig` | No |
| `fileServiceConfig` |  | `VsanVsanFileServiceConfig` | No |
| `vumConfig` |  | `VsanVsanVumConfig` | No |
| `allowReducedRedundancy` |  | `Boolean` | No |
| `mode` |  | `String` | No |
| `vsanClusterConfig` |  | `VsanVsanClusterConfigInfo` | No |
| `vsanSkyConfig` |  | `VsanVsanSkyConfig` | No |
| `dataEfficiencyConfig` |  | `VsanVsanDataEfficiencyConfig` | No |
| `faultDomainsSpec` |  | `VsanVimClusterVsanFaultDomainsConfigSpec` | No |
| `rdmaConfig` |  | `VsanVsanRdmaConfig` | No |
| `diskMappingSpec` |  | `VsanVimClusterVsanDiskMappingsConfigSpec` | No |
| `unmapConfig` |  | `VsanVsanUnmapConfig` | No |
| `dataProtectionConfig` |  | `VsanVsanDataProtectionInfo` | No |
| `snapServiceConfig` |  | `VsanVsanSnapServiceConfig` | No |
| `dataEncryptionConfig` |  | `VsanVsanDataEncryptionConfig` | No |
| `vsanEsaConfig` |  | `VsanVsanEsaConfig` | No |
| `modify` |  | `Boolean` | No |
| `xvcDatastoreConfig` |  | `VsanVsanXVCDatastoreConfig` | No |
| `vsanHealthConfig` |  | `VsanVsanHealthConfigSpec` | No |
| `resyncIopsLimitConfig` |  | `VsanResyncIopsInfo` | No |

### Methods

#### `VsanVimVsanReconfigSpec`


**Returns:** `void`

---

#### `VsanVimVsanReconfigSpec`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vsanClusterConfig` | `VsanVsanClusterConfigInfo` |  |
| `dataEfficiencyConfig` | `VsanVsanDataEfficiencyConfig` |  |
| `diskMappingSpec` | `VsanVimClusterVsanDiskMappingsConfigSpec` |  |
| `faultDomainsSpec` | `VsanVimClusterVsanFaultDomainsConfigSpec` |  |
| `modify` | `Boolean` |  |
| `allowReducedRedundancy` | `Boolean` |  |
| `resyncIopsLimitConfig` | `VsanResyncIopsInfo` |  |
| `iscsiSpec` | `VsanVsanIscsiTargetServiceSpec` |  |
| `dataEncryptionConfig` | `VsanVsanDataEncryptionConfig` |  |
| `extendedConfig` | `VsanVsanExtendedConfig` |  |
| `datastoreConfig` | `VsanVsanDatastoreConfig` |  |
| `perfsvcConfig` | `VsanVsanPerfsvcConfig` |  |
| `unmapConfig` | `VsanVsanUnmapConfig` |  |
| `vumConfig` | `VsanVsanVumConfig` |  |
| `metricsConfig` | `VsanVsanMetricsConfig` |  |
| `fileServiceConfig` | `VsanVsanFileServiceConfig` |  |
| `rdmaConfig` | `VsanVsanRdmaConfig` |  |
| `dataInTransitEncryptionConfig` | `VsanVsanDataInTransitEncryptionConfig` |  |
| `dataProtectionConfig` | `VsanVsanDataProtectionInfo` |  |
| `mode` | `String` |  |
| `vsanHealthConfig` | `VsanVsanHealthConfigSpec` |  |
| `vsanEsaConfig` | `VsanVsanEsaConfig` |  |
| `xvcDatastoreConfig` | `VsanVsanXVCDatastoreConfig` |  |
| `serverClusterConfig` | `VsanVcRemoteVsanServerClusterConfig` |  |
| `vsanSkyConfig` | `VsanVsanSkyConfig` |  |
| `snapServiceConfig` | `VsanVsanSnapServiceConfig` |  |
| `deconvergedNetConfig` | `VsanVsanDeconvergedNetConfig` |  |

**Returns:** `void`

---

#### `isAllowReducedRedundancy`


**Returns:** `Boolean`

---

## VsanVimVsanVsanComplianceResourceCheckReport

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `isValid` |  | `Boolean` | No |
| `faultDomains` |  | `Array/VsanVimVsanVsanFaultDomainComplianceResourceCheck` | No |
| `dynamicType` |  | `String` | No |

### Methods

#### `VsanVimVsanVsanComplianceResourceCheckReport`


**Returns:** `void`

---

#### `VsanVimVsanVsanComplianceResourceCheckReport`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `isValid` | `Boolean` |  |
| `faultDomains` | `Array/VsanVimVsanVsanFaultDomainComplianceResourceCheck` |  |

**Returns:** `void`

---

#### `isIsValid`


**Returns:** `Boolean`

---

## VsanVimVsanVsanDiskComplianceResourceCheck

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `finalCapacity` |  | `Number` | No |
| `initCapacity` |  | `Number` | No |
| `isNew` |  | `Boolean` | No |
| `dynamicType` |  | `String` | No |
| `uuid` |  | `String` | No |
| `deviceName` |  | `String` | No |
| `capacity` |  | `Number` | No |

### Methods

#### `VsanVimVsanVsanDiskComplianceResourceCheck`


**Returns:** `void`

---

#### `VsanVimVsanVsanDiskComplianceResourceCheck`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `deviceName` | `String` |  |
| `uuid` | `String` |  |
| `capacity` | `Number` |  |
| `initCapacity` | `Number` |  |
| `finalCapacity` | `Number` |  |
| `isNew` | `Boolean` |  |

**Returns:** `void`

---

#### `isIsNew`


**Returns:** `Boolean`

---

## VsanVimVsanVsanDiskGroupComplianceResourceCheck

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `ssd` |  | `VsanVimVsanVsanDiskComplianceResourceCheck` | No |
| `capacityDevices` |  | `Array/VsanVimVsanVsanDiskComplianceResourceCheck` | No |
| `dynamicType` |  | `String` | No |

## VsanVimVsanVsanESAConversionPrecheckType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `VsanESAConvPrecheckType_unknown` |  | `VsanVimVsanVsanESAConversionPrecheckType` | Yes |
| `inaccessibleObjects` |  | `VsanVimVsanVsanESAConversionPrecheckType` | Yes |

## VsanVimVsanVsanFaultDomainComplianceResourceCheck

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `hosts` |  | `Array/VsanVimVsanVsanHostComplianceResourceCheck` | No |
| `isNew` |  | `Boolean` | No |
| `dynamicType` |  | `String` | No |
| `fdName` |  | `String` | No |
| `uuid` |  | `String` | No |

### Methods

#### `VsanVimVsanVsanFaultDomainComplianceResourceCheck`


**Returns:** `void`

---

#### `VsanVimVsanVsanFaultDomainComplianceResourceCheck`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `fdName` | `String` |  |
| `uuid` | `String` |  |
| `isNew` | `Boolean` |  |
| `hosts` | `Array/VsanVimVsanVsanHostComplianceResourceCheck` |  |

**Returns:** `void`

---

#### `isIsNew`


**Returns:** `Boolean`

---

## VsanVimVsanVsanHostComplianceResourceCheck

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `diskGroups` |  | `Array/VsanVimVsanVsanDiskGroupComplianceResourceCheck` | No |
| `host` |  | `VsanManagedObjectReference` | No |
| `isNew` |  | `Boolean` | No |
| `dynamicType` |  | `String` | No |
| `uuid` |  | `String` | No |

### Methods

#### `VsanVimVsanVsanHostComplianceResourceCheck`


**Returns:** `void`

---

#### `VsanVimVsanVsanHostComplianceResourceCheck`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `host` | `VsanManagedObjectReference` |  |
| `uuid` | `String` |  |
| `isNew` | `Boolean` |  |
| `diskGroups` | `Array/VsanVimVsanVsanDiskGroupComplianceResourceCheck` |  |

**Returns:** `void`

---

#### `isIsNew`


**Returns:** `Boolean`

---

## VsanVimVsanVsanPMemConfig

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |
| `enabled` |  | `Boolean` | No |

## VsanVimVsanVsanScanObjectsIssue

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `issue` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `uuid` |  | `String` | No |

## VsanVimVsanVsanScanObjectsIssueVsanScanObjectsIssueType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `UNKNOWN` |  | `VsanVimVsanVsanScanObjectsIssueVsanScanObjectsIssueType` | Yes |
| `BROKEN_CHAIN` |  | `VsanVimVsanVsanScanObjectsIssueVsanScanObjectsIssueType` | Yes |
| `LEAKED_OBJECT` |  | `VsanVimVsanVsanScanObjectsIssueVsanScanObjectsIssueType` | Yes |

## VsanVimVsanVsanScanObjectsResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `fixed` |  | `Array/VsanVimVsanVsanScanObjectsIssue` | No |
| `dynamicType` |  | `String` | No |
| `issues` |  | `Array/VsanVimVsanVsanScanObjectsIssue` | No |
| `fixable` |  | `Array/VsanVimVsanVsanScanObjectsIssue` | No |

## VsanVimVsanVsanVcsaDeploymentPhase

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `ovaunpack` |  | `VsanVimVsanVsanVcsaDeploymentPhase` | Yes |
| `VsanVcsaDeploymentPhase_Unknown` |  | `VsanVimVsanVsanVcsaDeploymentPhase` | Yes |
| `initializing` |  | `VsanVimVsanVsanVcsaDeploymentPhase` | Yes |
| `vsanbootstrap` |  | `VsanVimVsanVsanVcsaDeploymentPhase` | Yes |
| `failed` |  | `VsanVimVsanVsanVcsaDeploymentPhase` | Yes |
| `vcconfig` |  | `VsanVimVsanVsanVcsaDeploymentPhase` | Yes |
| `done` |  | `VsanVimVsanVsanVcsaDeploymentPhase` | Yes |
| `validation` |  | `VsanVimVsanVsanVcsaDeploymentPhase` | Yes |
| `vcsadeploy` |  | `VsanVimVsanVsanVcsaDeploymentPhase` | Yes |

## VsanVirtualMachineDefaultProfileSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |

## VsanVirtualMachineDefinedProfileSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `profileId` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVirtualMachineEmptyProfileSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |

## VsanVirtualMachineProfileSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |

## VsanVsanAddStoragePoolDiskSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `disks` |  | `Array/VsanVsanStoragePoolDisk` | No |
| `host` |  | `VsanManagedObjectReference` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanAdvancedDatastoreConfig

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `remoteDatastores` |  | `Array/VsanManagedObjectReference` | No |
| `datastores` |  | `Array/VsanVsanDatastoreSpec` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanAnalyticsEvent

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `resourceId` |  | `String` | No |
| `eventLocation` |  | `Array/VsanVsanAnalyticsEventLocation` | No |
| `details` |  | `String` | No |
| `eventType` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `eventTs` |  | `Date` | No |

## VsanVsanAnalyticsEventLocation

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `childEntitiesLocation` |  | `Array/VsanVsanAnalyticsEventLocation` | No |
| `entityId` |  | `String` | No |
| `location` |  | `String` | No |
| `details` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanAnalyticsEventLocationType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `EVENT_LOCATION_UNKNOWN` |  | `VsanVsanAnalyticsEventLocationType` | Yes |
| `HOST` |  | `VsanVsanAnalyticsEventLocationType` | Yes |
| `CLUSTER` |  | `VsanVsanAnalyticsEventLocationType` | Yes |
| `DISK` |  | `VsanVsanAnalyticsEventLocationType` | Yes |

## VsanVsanAnalyticsEventSnapshotType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `DISK_SNAPSHOT` |  | `VsanVsanAnalyticsEventSnapshotType` | Yes |
| `SNAPSHOT_TYPE_UNKNOWN` |  | `VsanVsanAnalyticsEventSnapshotType` | Yes |
| `POLICY_SNAPSHOT` |  | `VsanVsanAnalyticsEventSnapshotType` | Yes |
| `OBJECT_SNAPSHOT` |  | `VsanVsanAnalyticsEventSnapshotType` | Yes |
| `HOST_SNAPSHOT` |  | `VsanVsanAnalyticsEventSnapshotType` | Yes |

## VsanVsanAnalyticsEventType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `REBUILD_END` |  | `VsanVsanAnalyticsEventType` | Yes |
| `RESYNC_IN_PROGRESS` |  | `VsanVsanAnalyticsEventType` | Yes |
| `SDDC_DELETED` |  | `VsanVsanAnalyticsEventType` | Yes |
| `STORAGE_OBJECT_DELETED` |  | `VsanVsanAnalyticsEventType` | Yes |
| `REPAIR_END` |  | `VsanVsanAnalyticsEventType` | Yes |
| `HOST_CREATED` |  | `VsanVsanAnalyticsEventType` | Yes |
| `HOST_NORMAL` |  | `VsanVsanAnalyticsEventType` | Yes |
| `CLUSTER_MEMBERSHIP_CHANGED` |  | `VsanVsanAnalyticsEventType` | Yes |
| `DEVICE_OFFLINE` |  | `VsanVsanAnalyticsEventType` | Yes |
| `HOST_DECOM_FAIL` |  | `VsanVsanAnalyticsEventType` | Yes |
| `EVENT_TYPE_UNKNOWN` |  | `VsanVsanAnalyticsEventType` | Yes |
| `STORAGE_DOM_OBJECT_CHANGE` |  | `VsanVsanAnalyticsEventType` | Yes |
| `DEVICE_FAILURE` |  | `VsanVsanAnalyticsEventType` | Yes |
| `DEVICE_NORMAL` |  | `VsanVsanAnalyticsEventType` | Yes |
| `STORAGE_OBJECT_AVAILABLE` |  | `VsanVsanAnalyticsEventType` | Yes |
| `STORAGE_OBJECT_LOST` |  | `VsanVsanAnalyticsEventType` | Yes |
| `HOST_DECOM_END` |  | `VsanVsanAnalyticsEventType` | Yes |
| `CLUSTER_CREATED` |  | `VsanVsanAnalyticsEventType` | Yes |
| `STORAGE_OBJECT_CREATED` |  | `VsanVsanAnalyticsEventType` | Yes |
| `STORAGE_OBJECT_UNAVAILABLE` |  | `VsanVsanAnalyticsEventType` | Yes |
| `RESYNC_END` |  | `VsanVsanAnalyticsEventType` | Yes |
| `DEVICE_ERROR` |  | `VsanVsanAnalyticsEventType` | Yes |
| `CLUSTER_DELETED` |  | `VsanVsanAnalyticsEventType` | Yes |
| `HOST_DELETED` |  | `VsanVsanAnalyticsEventType` | Yes |
| `REBUILD_START` |  | `VsanVsanAnalyticsEventType` | Yes |
| `DG_DECOM_START` |  | `VsanVsanAnalyticsEventType` | Yes |
| `SDDC_CREATED` |  | `VsanVsanAnalyticsEventType` | Yes |
| `PATCH_END` |  | `VsanVsanAnalyticsEventType` | Yes |
| `DG_DECOM_END` |  | `VsanVsanAnalyticsEventType` | Yes |
| `HOST_FAILURE` |  | `VsanVsanAnalyticsEventType` | Yes |
| `REPAIR_START` |  | `VsanVsanAnalyticsEventType` | Yes |
| `HOST_DECOM_START` |  | `VsanVsanAnalyticsEventType` | Yes |
| `STORAGE_OBJECT_REPL_CHANGE` |  | `VsanVsanAnalyticsEventType` | Yes |
| `PATCH_START` |  | `VsanVsanAnalyticsEventType` | Yes |

## VsanVsanApplicationInstance

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `id` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `encryptionPublicKey` |  | `String` | No |
| `token` |  | `String` | No |

## VsanVsanArchivalAccessibilityHealthState

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `ARCHIVE_WRITE_ERROR` |  | `VsanVsanArchivalAccessibilityHealthState` | Yes |
| `ARCHIVE_OK` |  | `VsanVsanArchivalAccessibilityHealthState` | Yes |
| `ARCHIVE_READ_ERROR` |  | `VsanVsanArchivalAccessibilityHealthState` | Yes |
| `ARCHIVE_UNKNOWN` |  | `VsanVsanArchivalAccessibilityHealthState` | Yes |

## VsanVsanArchivalAccessibilityResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `archivalHealthStatus` |  | `Array/VsanVsanArchivalAccessibilityStatus` | No |
| `hostname` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanArchivalAccessibilityStatus

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `archivalUrl` |  | `String` | No |
| `healthState` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanAttachToSrOperation

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `srNumber` |  | `String` | No |
| `task` |  | `VsanManagedObjectReference` | No |
| `success` |  | `Boolean` | No |
| `dynamicType` |  | `String` | No |
| `timestamp` |  | `Date` | No |

### Methods

#### `VsanVsanAttachToSrOperation`


**Returns:** `void`

---

#### `VsanVsanAttachToSrOperation`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `task` | `VsanManagedObjectReference` |  |
| `success` | `Boolean` |  |
| `timestamp` | `Date` |  |
| `srNumber` | `String` |  |

**Returns:** `void`

---

#### `isSuccess`


**Returns:** `Boolean`

---

## VsanVsanBaselinePreferenceType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `latestRelease` |  | `VsanVsanBaselinePreferenceType` | Yes |
| `VsanBaselinePreferenceType_Unknown` |  | `VsanVsanBaselinePreferenceType` | Yes |
| `latestPatch` |  | `VsanVsanBaselinePreferenceType` | Yes |
| `noRecommendation` |  | `VsanVsanBaselinePreferenceType` | Yes |

## VsanVsanBasicDeviceInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `features` |  | `Array/String` | No |
| `pciId` |  | `String` | No |
| `fwVersion` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `deviceName` |  | `String` | No |

## VsanVsanBrokenDiskChainIssue

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `msg` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `uuids` |  | `Array/String` | No |

## VsanVsanBurnInTest

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `result` |  | `String` | No |
| `duration` |  | `Number` | No |
| `workload` |  | `String` | No |
| `testname` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanBurnInTestCheckResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `passedTests` |  | `Array/VsanVsanBurnInTest` | No |
| `failedTests` |  | `Array/VsanVsanBurnInTest` | No |
| `notPerformedTests` |  | `Array/VsanVsanBurnInTest` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanCapability

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `capabilities` |  | `Array/String` | No |
| `statuses` |  | `Array/String` | No |
| `dynamicType` |  | `String` | No |
| `target` |  | `VsanManagedObjectReference` | No |

## VsanVsanCapabilityStatus

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `oldversion` |  | `VsanVsanCapabilityStatus` | Yes |
| `disconnected` |  | `VsanVsanCapabilityStatus` | Yes |
| `calculated` |  | `VsanVsanCapabilityStatus` | Yes |
| `unknown` |  | `VsanVsanCapabilityStatus` | Yes |

## VsanVsanCapabilitySystem

### Methods

#### `_getRef`


**Returns:** `VsanManagedObjectReference`

---

#### `vsanGetCapabilities`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/VsanManagedObjectReference` |  |

**Returns:** `Array/VsanVsanCapability`

---

## VsanVsanCapabilityType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `clusterconfig` |  | `VsanVsanCapabilityType` | Yes |
| `wcpappplatform` |  | `VsanVsanCapabilityType` | Yes |
| `whatifcapacity` |  | `VsanVsanCapabilityType` | Yes |
| `stretchedcluster` |  | `VsanVsanCapabilityType` | Yes |
| `dit4sw` |  | `VsanVsanCapabilityType` | Yes |
| `healthremediation` |  | `VsanVsanCapabilityType` | Yes |
| `vsanxvchcimesh` |  | `VsanVsanCapabilityType` | Yes |
| `nondatamovementdfc` |  | `VsanVsanCapabilityType` | Yes |
| `globaldedup` |  | `VsanVsanCapabilityType` | Yes |
| `unicasttest` |  | `VsanVsanCapabilityType` | Yes |
| `pspairgap` |  | `VsanVsanCapabilityType` | Yes |
| `sha256thumbprint` |  | `VsanVsanCapabilityType` | Yes |
| `fileservicesnapshot` |  | `VsanVsanCapabilityType` | Yes |
| `sharedwitness` |  | `VsanVsanCapabilityType` | Yes |
| `nativelargeclustersupport` |  | `VsanVsanCapabilityType` | Yes |
| `unicastmode` |  | `VsanVsanCapabilityType` | Yes |
| `updatevumreleasecatalogoffline` |  | `VsanVsanCapabilityType` | Yes |
| `complianceprecheck` |  | `VsanVsanCapabilityType` | Yes |
| `vumbaselinerecommendation` |  | `VsanVsanCapabilityType` | Yes |
| `perfanalysis` |  | `VsanVsanCapabilityType` | Yes |
| `fileservices` |  | `VsanVsanCapabilityType` | Yes |
| `vsanclient` |  | `VsanVsanCapabilityType` | Yes |
| `topcontributors` |  | `VsanVsanCapabilityType` | Yes |
| `upgrade` |  | `VsanVsanCapabilityType` | Yes |
| `healthcorrelation` |  | `VsanVsanCapabilityType` | Yes |
| `supportApiVersion` |  | `VsanVsanCapabilityType` | Yes |
| `vsanhcimeshdit` |  | `VsanVsanCapabilityType` | Yes |
| `vsananalyticsevents` |  | `VsanVsanCapabilityType` | Yes |
| `decomwhatif` |  | `VsanVsanCapabilityType` | Yes |
| `dataefficiency` |  | `VsanVsanCapabilityType` | Yes |
| `vumintegration` |  | `VsanVsanCapabilityType` | Yes |
| `vsandsdefaultpolicy` |  | `VsanVsanCapabilityType` | Yes |
| `capacitycustomizablethresholds` |  | `VsanVsanCapabilityType` | Yes |
| `genericnestedfd` |  | `VsanVsanCapabilityType` | Yes |
| `vsan2encr` |  | `VsanVsanCapabilityType` | Yes |
| `volumerelocation` |  | `VsanVsanCapabilityType` | Yes |
| `perfsvcverbosemode` |  | `VsanVsanCapabilityType` | Yes |
| `fileservicesc` |  | `VsanVsanCapabilityType` | Yes |
| `filevolumes` |  | `VsanVsanCapabilityType` | Yes |
| `perfsvctwoyaxisgraph` |  | `VsanVsanCapabilityType` | Yes |
| `resourceprecheck` |  | `VsanVsanCapabilityType` | Yes |
| `fullStackFw` |  | `VsanVsanCapabilityType` | Yes |
| `vsandedicatedvmknic` |  | `VsanVsanCapabilityType` | Yes |
| `vitstretchedcluster` |  | `VsanVsanCapabilityType` | Yes |
| `pr1741414fixed` |  | `VsanVsanCapabilityType` | Yes |
| `vsanwitnesscontainer` |  | `VsanVsanCapabilityType` | Yes |
| `compressiononly` |  | `VsanVsanCapabilityType` | Yes |
| `fcd` |  | `VsanVsanCapabilityType` | Yes |
| `witnessmanagement` |  | `VsanVsanCapabilityType` | Yes |
| `validateconfigspec` |  | `VsanVsanCapabilityType` | Yes |
| `capability` |  | `VsanVsanCapabilityType` | Yes |
| `encryption` |  | `VsanVsanCapabilityType` | Yes |
| `verbosemodeconfiguration` |  | `VsanVsanCapabilityType` | Yes |
| `policyhostapi` |  | `VsanVsanCapabilityType` | Yes |
| `vsanhostdomlatencysort` |  | `VsanVsanCapabilityType` | Yes |
| `elasticpolicy` |  | `VsanVsanCapabilityType` | Yes |
| `repairtimerinresyncstats` |  | `VsanVsanCapabilityType` | Yes |
| `diskmgmtredesign` |  | `VsanVsanCapabilityType` | Yes |
| `fileserviceowe` |  | `VsanVsanCapabilityType` | Yes |
| `vsandiagnostics` |  | `VsanVsanCapabilityType` | Yes |
| `vcgnotification` |  | `VsanVsanCapabilityType` | Yes |
| `allflash` |  | `VsanVsanCapabilityType` | Yes |
| `archivaldataprotection` |  | `VsanVsanCapabilityType` | Yes |
| `iodiagnostics` |  | `VsanVsanCapabilityType` | Yes |
| `iodiagmultiplevms` |  | `VsanVsanCapabilityType` | Yes |
| `vsanEsaConfigure` |  | `VsanVsanCapabilityType` | Yes |
| `enhancedresyncapi` |  | `VsanVsanCapabilityType` | Yes |
| `fileservicekerberos` |  | `VsanVsanCapabilityType` | Yes |
| `largecapacitydrive` |  | `VsanVsanCapabilityType` | Yes |
| `netperftest` |  | `VsanVsanCapabilityType` | Yes |
| `capacityreservation` |  | `VsanVsanCapabilityType` | Yes |
| `cnsreconfigpolicy` |  | `VsanVsanCapabilityType` | Yes |
| `remotedataprotection` |  | `VsanVsanCapabilityType` | Yes |
| `clusteradvancedoptions` |  | `VsanVsanCapabilityType` | Yes |
| `automaticrebalance` |  | `VsanVsanCapabilityType` | Yes |
| `capacityevaluationonvc` |  | `VsanVsanCapabilityType` | Yes |
| `VsanCapabilityType_Unknown` |  | `VsanVsanCapabilityType` | Yes |
| `firmwareupdate` |  | `VsanVsanCapabilityType` | Yes |
| `v1metadataresiliency` |  | `VsanVsanCapabilityType` | Yes |
| `fileservice80` |  | `VsanVsanCapabilityType` | Yes |
| `localdataprotection` |  | `VsanVsanCapabilityType` | Yes |
| `policyassociation` |  | `VsanVsanCapabilityType` | Yes |
| `vsandirectdiskdecom` |  | `VsanVsanCapabilityType` | Yes |
| `vsanperfsvc80u2` |  | `VsanVsanCapabilityType` | Yes |
| `minrebalancethreshold` |  | `VsanVsanCapabilityType` | Yes |
| `throttleresync` |  | `VsanVsanCapabilityType` | Yes |
| `nestedfd` |  | `VsanVsanCapabilityType` | Yes |
| `purgeinaccessiblevmswapobjects` |  | `VsanVsanCapabilityType` | Yes |
| `recreatediskgroup` |  | `VsanVsanCapabilityType` | Yes |
| `fileservicesmb` |  | `VsanVsanCapabilityType` | Yes |
| `configassist` |  | `VsanVsanCapabilityType` | Yes |
| `cnsvolumes` |  | `VsanVsanCapabilityType` | Yes |
| `vsanmanagedvmfs` |  | `VsanVsanCapabilityType` | Yes |
| `perfsvcautoconfig` |  | `VsanVsanCapabilityType` | Yes |
| `clusterpoweraction` |  | `VsanVsanCapabilityType` | Yes |
| `vsanesasingletier` |  | `VsanVsanCapabilityType` | Yes |
| `hostreservedcapacity` |  | `VsanVsanCapabilityType` | Yes |
| `supportinsight` |  | `VsanVsanCapabilityType` | Yes |
| `securewipe` |  | `VsanVsanCapabilityType` | Yes |
| `clusterpowerselfcontain` |  | `VsanVsanCapabilityType` | Yes |
| `vsan100lds` |  | `VsanVsanCapabilityType` | Yes |
| `upgraderesourceprecheck` |  | `VsanVsanCapabilityType` | Yes |
| `datapersistresourcecheck` |  | `VsanVsanCapabilityType` | Yes |
| `duplicatepciidfix` |  | `VsanVsanCapabilityType` | Yes |
| `snapservice` |  | `VsanVsanCapabilityType` | Yes |
| `slackspacecapacity` |  | `VsanVsanCapabilityType` | Yes |
| `dfcobjectsmanagement` |  | `VsanVsanCapabilityType` | Yes |
| `performanceforsupport` |  | `VsanVsanCapabilityType` | Yes |
| `vsankeyexpiration` |  | `VsanVsanCapabilityType` | Yes |
| `hcimeshpolicy` |  | `VsanVsanCapabilityType` | Yes |
| `vsan2hcimesh` |  | `VsanVsanCapabilityType` | Yes |
| `hcimeshstretchedcluster` |  | `VsanVsanCapabilityType` | Yes |
| `masspropertycollector` |  | `VsanVsanCapabilityType` | Yes |
| `hostaffinity` |  | `VsanVsanCapabilityType` | Yes |
| `vsanobjhealthv2` |  | `VsanVsanCapabilityType` | Yes |
| `vsanmetadatanode` |  | `VsanVsanCapabilityType` | Yes |
| `vmlevelcapacity` |  | `VsanVsanCapabilityType` | Yes |
| `metricsconfig` |  | `VsanVsanCapabilityType` | Yes |
| `healthcheck2018q2` |  | `VsanVsanCapabilityType` | Yes |
| `hdcsintegration` |  | `VsanVsanCapabilityType` | Yes |
| `dhci` |  | `VsanVsanCapabilityType` | Yes |
| `vsanmanagedpmem` |  | `VsanVsanCapabilityType` | Yes |
| `vsandefaultgatewaysupported` |  | `VsanVsanCapabilityType` | Yes |
| `vsanrebuildtrim` |  | `VsanVsanCapabilityType` | Yes |
| `vsansky` |  | `VsanVsanCapabilityType` | Yes |
| `vsanxvchcimeshv2` |  | `VsanVsanCapabilityType` | Yes |
| `vsanxvchcimeshv3` |  | `VsanVsanCapabilityType` | Yes |
| `readlocalitytodrs` |  | `VsanVsanCapabilityType` | Yes |
| `vsanperfhighresolution` |  | `VsanVsanCapabilityType` | Yes |
| `resyncetaimprovement` |  | `VsanVsanCapabilityType` | Yes |
| `vitonlineresize` |  | `VsanVsanCapabilityType` | Yes |
| `vsanencrkmx` |  | `VsanVsanCapabilityType` | Yes |
| `historicalcapacity` |  | `VsanVsanCapabilityType` | Yes |
| `gethcllastupdateonvc` |  | `VsanVsanCapabilityType` | Yes |
| `capacityoversubscription` |  | `VsanVsanCapabilityType` | Yes |
| `remotedatastore` |  | `VsanVsanCapabilityType` | Yes |
| `vsan2deeprekey` |  | `VsanVsanCapabilityType` | Yes |
| `improvedcapacityscreen` |  | `VsanVsanCapabilityType` | Yes |
| `dataintransitencryption` |  | `VsanVsanCapabilityType` | Yes |
| `vsan2conversion` |  | `VsanVsanCapabilityType` | Yes |
| `ioinsight` |  | `VsanVsanCapabilityType` | Yes |
| `vsanrdma` |  | `VsanVsanCapabilityType` | Yes |
| `umap` |  | `VsanVsanCapabilityType` | Yes |
| `diagnosticmode` |  | `VsanVsanCapabilityType` | Yes |
| `vsan2disableencryption` |  | `VsanVsanCapabilityType` | Yes |
| `cloudhealth` |  | `VsanVsanCapabilityType` | Yes |
| `diagnosticsfeedback` |  | `VsanVsanCapabilityType` | Yes |
| `apidevversionenabled` |  | `VsanVsanCapabilityType` | Yes |
| `iscsitargets` |  | `VsanVsanCapabilityType` | Yes |
| `device4ksupport` |  | `VsanVsanCapabilityType` | Yes |
| `historicalhealth` |  | `VsanVsanCapabilityType` | Yes |
| `objectidentities` |  | `VsanVsanCapabilityType` | Yes |
| `fileservicenfsv3` |  | `VsanVsanCapabilityType` | Yes |
| `pmanintegration` |  | `VsanVsanCapabilityType` | Yes |
| `diskresourceprecheck` |  | `VsanVsanCapabilityType` | Yes |

## VsanVsanCapacityReservationInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `vsanOpSpaceThreshold` |  | `String` | No |
| `hostRebuildThreshold` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanCapacityReservationState

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `Reported` |  | `VsanVsanCapacityReservationState` | Yes |
| `State_Unknown` |  | `VsanVsanCapacityReservationState` | Yes |
| `Unsupported` |  | `VsanVsanCapacityReservationState` | Yes |
| `Enforced` |  | `VsanVsanCapacityReservationState` | Yes |
| `Disabled` |  | `VsanVsanCapacityReservationState` | Yes |

## VsanVsanClientDatastoreConfig

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `uuid` |  | `String` | No |
| `clusters` |  | `Array/VsanManagedObjectReference` | No |

## VsanVsanCloudHealthStatus

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `internetConnectivity` |  | `Boolean` | No |
| `dynamicType` |  | `String` | No |
| `collectorRunning` |  | `Boolean` | No |
| `lastSentTimestamp` |  | `String` | No |

### Methods

#### `VsanVsanCloudHealthStatus`


**Returns:** `void`

---

#### `VsanVsanCloudHealthStatus`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `collectorRunning` | `Boolean` |  |
| `lastSentTimestamp` | `String` |  |
| `internetConnectivity` | `Boolean` |  |

**Returns:** `void`

---

#### `isInternetConnectivity`


**Returns:** `Boolean`

---

#### `isCollectorRunning`


**Returns:** `Boolean`

---

## VsanVsanClusterAdvCfgSyncHostResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `hostname` |  | `String` | No |
| `isDefault` |  | `Boolean` | No |
| `dynamicType` |  | `String` | No |
| `value` |  | `String` | No |

### Methods

#### `VsanVsanClusterAdvCfgSyncHostResult`


**Returns:** `void`

---

#### `VsanVsanClusterAdvCfgSyncHostResult`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `hostname` | `String` |  |
| `value` | `String` |  |
| `isDefault` | `Boolean` |  |

**Returns:** `void`

---

#### `isIsDefault`


**Returns:** `Boolean`

---

## VsanVsanClusterAdvCfgSyncResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `inSync` |  | `Boolean` | No |
| `name` |  | `String` | No |
| `hostValues` |  | `Array/VsanVsanClusterAdvCfgSyncHostResult` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanClusterBalancePerDiskInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `compVariance` |  | `Number` | No |
| `variance` |  | `Number` | No |
| `fullness` |  | `Number` | No |
| `dataToMoveB` |  | `Number` | No |
| `compFullness` |  | `Number` | No |
| `dynamicType` |  | `String` | No |
| `uuid` |  | `String` | No |
| `fullnessAboveThreshold` |  | `Number` | No |

## VsanVsanClusterBalanceSummary

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `disks` |  | `Array/VsanVsanClusterBalancePerDiskInfo` | No |
| `dynamicType` |  | `String` | No |
| `varianceThreshold` |  | `Number` | No |

## VsanVsanClusterBurnInTestResultList

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `hosts` |  | `Array/String` | No |
| `dynamicType` |  | `String` | No |
| `items` |  | `Array/VsanVsanBurnInTest` | No |

## VsanVsanClusterClomdLivenessResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `clomdLivenessResult` |  | `Array/VsanVsanHostClomdLivenessResult` | No |
| `issueFound` |  | `Boolean` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanClusterConfig

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `hosts` |  | `Array/String` | No |
| `name` |  | `String` | No |
| `toBeDeleted` |  | `Boolean` | No |
| `dynamicType` |  | `String` | No |
| `config` |  | `VsanVsanClusterConfigInfo` | No |

### Methods

#### `VsanVsanClusterConfig`


**Returns:** `void`

---

#### `VsanVsanClusterConfig`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `config` | `VsanVsanClusterConfigInfo` |  |
| `name` | `String` |  |
| `hosts` | `Array/String` |  |
| `toBeDeleted` | `Boolean` |  |

**Returns:** `void`

---

#### `isToBeDeleted`


**Returns:** `Boolean`

---

## VsanVsanClusterConfigInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `vsanEsaEnabled` |  | `Boolean` | No |
| `defaultConfig` |  | `VsanVsanClusterConfigInfoHostDefaultInfo` | No |
| `dynamicType` |  | `String` | No |
| `enabled` |  | `Boolean` | No |

### Methods

#### `VsanVsanClusterConfigInfo`


**Returns:** `void`

---

#### `VsanVsanClusterConfigInfo`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `enabled` | `Boolean` |  |
| `defaultConfig` | `VsanVsanClusterConfigInfoHostDefaultInfo` |  |
| `vsanEsaEnabled` | `Boolean` |  |

**Returns:** `void`

---

#### `isVsanEsaEnabled`


**Returns:** `Boolean`

---

#### `isEnabled`


**Returns:** `Boolean`

---

## VsanVsanClusterConfigInfoHostDefaultInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `checksumEnabled` |  | `Boolean` | No |
| `dynamicType` |  | `String` | No |
| `autoClaimStorage` |  | `Boolean` | No |
| `uuid` |  | `String` | No |

### Methods

#### `VsanVsanClusterConfigInfoHostDefaultInfo`


**Returns:** `void`

---

#### `VsanVsanClusterConfigInfoHostDefaultInfo`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `uuid` | `String` |  |
| `autoClaimStorage` | `Boolean` |  |
| `checksumEnabled` | `Boolean` |  |

**Returns:** `void`

---

#### `isChecksumEnabled`


**Returns:** `Boolean`

---

#### `isAutoClaimStorage`


**Returns:** `Boolean`

---

## VsanVsanClusterConfigPrecheckItem

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |
| `status` |  | `String` | No |

## VsanVsanClusterCreateVmHealthTestResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `hostResults` |  | `Array/VsanVsanHostCreateVmHealthTestResult` | No |
| `clusterResult` |  | `VsanVsanClusterProactiveTestResult` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanClusterDataProtectionCfgSyncHostResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `hostname` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `value` |  | `String` | No |

## VsanVsanClusterDataProtectionCfgSyncResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `inSync` |  | `Boolean` | No |
| `name` |  | `String` | No |
| `clusterValue` |  | `String` | No |
| `hostValues` |  | `Array/VsanVsanClusterDataProtectionCfgSyncHostResult` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanClusterDatastoreUsageResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `datastoreUsageResult` |  | `Array/VsanVsanHostDatastoreUsageResult` | No |
| `clusterConfiguredUsageThreshold` |  | `Number` | No |
| `issueFound` |  | `Boolean` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanClusterDitEncryptionHealthSummary

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `overallHealth` |  | `String` | No |
| `hostResults` |  | `Array/VsanVsanDitEncryptionHealthSummary` | No |
| `dynamicType` |  | `String` | No |
| `enabled` |  | `Boolean` | No |

### Methods

#### `VsanVsanClusterDitEncryptionHealthSummary`


**Returns:** `void`

---

#### `VsanVsanClusterDitEncryptionHealthSummary`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `overallHealth` | `String` |  |
| `enabled` | `Boolean` |  |
| `hostResults` | `Array/VsanVsanDitEncryptionHealthSummary` |  |

**Returns:** `void`

---

#### `isEnabled`


**Returns:** `Boolean`

---

## VsanVsanClusterDpdLivenessResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dpdLivenessResult` |  | `Array/VsanVsanHostDpdLivenessResult` | No |
| `issueFound` |  | `Boolean` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanClusterEncryptionHealthSummary

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `overallHealth` |  | `String` | No |
| `hostResults` |  | `Array/VsanVsanEncryptionHealthSummary` | No |
| `configHealth` |  | `String` | No |
| `vcKmsResult` |  | `VsanVsanVcKmipServersHealth` | No |
| `dynamicType` |  | `String` | No |
| `kmsHealth` |  | `String` | No |
| `aesniHealth` |  | `String` | No |

## VsanVsanClusterFileServiceHealthSummary

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `overallHealth` |  | `String` | No |
| `hostResults` |  | `Array/VsanVsanFileServiceHealthSummary` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanClusterHclInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `hclDbAgeHealth` |  | `String` | No |
| `hostResults` |  | `Array/VsanVsanHostHclInfo` | No |
| `hclDbLastUpdate` |  | `Date` | No |
| `updateItems` |  | `Array/VsanVsanUpdateItem` | No |
| `dynamicType` |  | `String` | No |
| `hclDbAbsent` |  | `Boolean` | No |

### Methods

#### `VsanVsanClusterHclInfo`


**Returns:** `void`

---

#### `VsanVsanClusterHclInfo`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `hclDbLastUpdate` | `Date` |  |
| `hclDbAgeHealth` | `String` |  |
| `hostResults` | `Array/VsanVsanHostHclInfo` |  |
| `updateItems` | `Array/VsanVsanUpdateItem` |  |
| `hclDbAbsent` | `Boolean` |  |

**Returns:** `void`

---

#### `isHclDbAbsent`


**Returns:** `Boolean`

---

## VsanVsanClusterHealthAction

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `actionId` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `enabled` |  | `Boolean` | No |

## VsanVsanClusterHealthActionVsanClusterHealthActionIdEnum

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `RepairClusterObjectsAction` |  | `VsanVsanClusterHealthActionVsanClusterHealthActionIdEnum` | Yes |
| `SelectNvme` |  | `VsanVsanClusterHealthActionVsanClusterHealthActionIdEnum` | Yes |
| `CreateVMKnic` |  | `VsanVsanClusterHealthActionVsanClusterHealthActionIdEnum` | Yes |
| `ConfigureVSAN` |  | `VsanVsanClusterHealthActionVsanClusterHealthActionIdEnum` | Yes |
| `VsanClusterHealthActionIdEnum_Unknown` |  | `VsanVsanClusterHealthActionVsanClusterHealthActionIdEnum` | Yes |
| `UploadReleaseCatalog` |  | `VsanVsanClusterHealthActionVsanClusterHealthActionIdEnum` | Yes |
| `RunBurnInTest` |  | `VsanVsanClusterHealthActionVsanClusterHealthActionIdEnum` | Yes |
| `UpdateHclDbFromInternet` |  | `VsanVsanClusterHealthActionVsanClusterHealthActionIdEnum` | Yes |
| `RelayoutVsanObjects` |  | `VsanVsanClusterHealthActionVsanClusterHealthActionIdEnum` | Yes |
| `RemediateFileService` |  | `VsanVsanClusterHealthActionVsanClusterHealthActionIdEnum` | Yes |
| `LoginVumIsoDepot` |  | `VsanVsanClusterHealthActionVsanClusterHealthActionIdEnum` | Yes |
| `UploadHclDb` |  | `VsanVsanClusterHealthActionVsanClusterHealthActionIdEnum` | Yes |
| `ConfigureHA` |  | `VsanVsanClusterHealthActionVsanClusterHealthActionIdEnum` | Yes |
| `PurgeInaccessSwapObjs` |  | `VsanVsanClusterHealthActionVsanClusterHealthActionIdEnum` | Yes |
| `CreateVMKnicWithVMotion` |  | `VsanVsanClusterHealthActionVsanClusterHealthActionIdEnum` | Yes |
| `StopDiskBalance` |  | `VsanVsanClusterHealthActionVsanClusterHealthActionIdEnum` | Yes |
| `RemediateDedup` |  | `VsanVsanClusterHealthActionVsanClusterHealthActionIdEnum` | Yes |
| `EnableIscsiTargetService` |  | `VsanVsanClusterHealthActionVsanClusterHealthActionIdEnum` | Yes |
| `RemediateFileServiceImbalance` |  | `VsanVsanClusterHealthActionVsanClusterHealthActionIdEnum` | Yes |
| `ClusterUpgrade` |  | `VsanVsanClusterHealthActionVsanClusterHealthActionIdEnum` | Yes |
| `ConfigureAutomaticRebalance` |  | `VsanVsanClusterHealthActionVsanClusterHealthActionIdEnum` | Yes |
| `ClaimVSANDisks` |  | `VsanVsanClusterHealthActionVsanClusterHealthActionIdEnum` | Yes |
| `DiskBalance` |  | `VsanVsanClusterHealthActionVsanClusterHealthActionIdEnum` | Yes |
| `RemediateIscsiLunsRuntimeStatus` |  | `VsanVsanClusterHealthActionVsanClusterHealthActionIdEnum` | Yes |
| `CreateFileServiceDomain` |  | `VsanVsanClusterHealthActionVsanClusterHealthActionIdEnum` | Yes |
| `UpgradeVsanDiskFormat` |  | `VsanVsanClusterHealthActionVsanClusterHealthActionIdEnum` | Yes |
| `ConfigureDRS` |  | `VsanVsanClusterHealthActionVsanClusterHealthActionIdEnum` | Yes |
| `EnableCeip` |  | `VsanVsanClusterHealthActionVsanClusterHealthActionIdEnum` | Yes |
| `ShallowRekey` |  | `VsanVsanClusterHealthActionVsanClusterHealthActionIdEnum` | Yes |
| `RemediateClusterConfig` |  | `VsanVsanClusterHealthActionVsanClusterHealthActionIdEnum` | Yes |
| `CreateDVS` |  | `VsanVsanClusterHealthActionVsanClusterHealthActionIdEnum` | Yes |
| `EnableHealthService` |  | `VsanVsanClusterHealthActionVsanClusterHealthActionIdEnum` | Yes |
| `EnablePerformanceServiceAction` |  | `VsanVsanClusterHealthActionVsanClusterHealthActionIdEnum` | Yes |

## VsanVsanClusterHealthCategoryEnum

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `InfraPerformance` |  | `VsanVsanClusterHealthCategoryEnum` | Yes |
| `Compliance` |  | `VsanVsanClusterHealthCategoryEnum` | Yes |
| `InfraAvailability` |  | `VsanVsanClusterHealthCategoryEnum` | Yes |
| `CapacityUtilization` |  | `VsanVsanClusterHealthCategoryEnum` | Yes |
| `DataAvailability` |  | `VsanVsanClusterHealthCategoryEnum` | Yes |
| `DataPerformance` |  | `VsanVsanClusterHealthCategoryEnum` | Yes |
| `VsanClusterHealthCategoryEnum_Unknown` |  | `VsanVsanClusterHealthCategoryEnum` | Yes |
| `SoftResourceUtilization` |  | `VsanVsanClusterHealthCategoryEnum` | Yes |

## VsanVsanClusterHealthCheckInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `groupName` |  | `String` | No |
| `groupId` |  | `String` | No |
| `testId` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `testName` |  | `String` | No |

## VsanVsanClusterHealthConfigs

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `configs` |  | `Array/VsanVsanClusterHealthResultKeyValuePair` | No |
| `vsanTelemetryInterval` |  | `Number` | No |
| `enableVsanTelemetry` |  | `Boolean` | No |
| `vsanTelemetryProxy` |  | `VsanVsanClusterTelemetryProxyConfig` | No |
| `dynamicType` |  | `String` | No |

### Methods

#### `VsanVsanClusterHealthConfigs`


**Returns:** `void`

---

#### `VsanVsanClusterHealthConfigs`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `enableVsanTelemetry` | `Boolean` |  |
| `vsanTelemetryInterval` | `Number` |  |
| `vsanTelemetryProxy` | `VsanVsanClusterTelemetryProxyConfig` |  |
| `configs` | `Array/VsanVsanClusterHealthResultKeyValuePair` |  |

**Returns:** `void`

---

#### `isEnableVsanTelemetry`


**Returns:** `Boolean`

---

## VsanVsanClusterHealthGroup

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `groupName` |  | `String` | No |
| `inProgress` |  | `Boolean` | No |
| `groupDetails` |  | `Array/VsanVsanClusterHealthResultBase` | No |
| `groupId` |  | `String` | No |
| `groupHealth` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `groupTests` |  | `Array/VsanVsanClusterHealthTest` | No |

### Methods

#### `VsanVsanClusterHealthGroup`


**Returns:** `void`

---

#### `VsanVsanClusterHealthGroup`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `groupId` | `String` |  |
| `groupName` | `String` |  |
| `groupHealth` | `String` |  |
| `groupTests` | `Array/VsanVsanClusterHealthTest` |  |
| `groupDetails` | `Array/VsanVsanClusterHealthResultBase` |  |
| `inProgress` | `Boolean` |  |

**Returns:** `void`

---

#### `isInProgress`


**Returns:** `Boolean`

---

## VsanVsanClusterHealthInternalLink

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `screen` |  | `String` | No |
| `label` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `contextObject` |  | `VsanManagedObjectReference` | No |

## VsanVsanClusterHealthLink

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `label` |  | `String` | No |
| `category` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `url` |  | `String` | No |

## VsanVsanClusterHealthLinkBase

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `label` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanClusterHealthQuerySpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `task` |  | `VsanManagedObjectReference` | No |
| `includeHealthRemediation` |  | `Boolean` | No |
| `diskNames` |  | `Array/String` | No |
| `dynamicType` |  | `String` | No |
| `objectHealthVersion` |  | `String` | No |

### Methods

#### `VsanVsanClusterHealthQuerySpec`


**Returns:** `void`

---

#### `VsanVsanClusterHealthQuerySpec`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `task` | `VsanManagedObjectReference` |  |
| `objectHealthVersion` | `String` |  |
| `diskNames` | `Array/String` |  |
| `includeHealthRemediation` | `Boolean` |  |

**Returns:** `void`

---

#### `isIncludeHealthRemediation`


**Returns:** `Boolean`

---

## VsanVsanClusterHealthResultBase

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `label` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanClusterHealthResultColumnInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `label` |  | `String` | No |
| `type` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanClusterHealthResultKeyValuePair

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |
| `value` |  | `String` | No |
| `key` |  | `String` | No |

## VsanVsanClusterHealthResultRow

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `values` |  | `Array/String` | No |
| `links` |  | `Array/VsanVsanClusterHealthLinkBase` | No |
| `nestedRows` |  | `Array/VsanVsanClusterHealthResultRow` | No |
| `dynamicType` |  | `String` | No |
| `actions` |  | `Array/VsanVsanHealthDataDrivenAction` | No |

## VsanVsanClusterHealthResultTable

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `columns` |  | `Array/VsanVsanClusterHealthResultColumnInfo` | No |
| `label` |  | `String` | No |
| `rows` |  | `Array/VsanVsanClusterHealthResultRow` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanClusterHealthResultValues

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `values` |  | `Array/String` | No |
| `label` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanClusterHealthResultWithRemediation

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `troubleshooting` |  | `VsanVsanHealthTroubleshooting` | No |
| `label` |  | `String` | No |
| `additionalResources` |  | `Array/VsanVsanClusterHealthLink` | No |
| `issueDetail` |  | `Array/VsanVsanClusterHealthResultTable` | No |
| `dynamicType` |  | `String` | No |
| `issueDescription` |  | `String` | No |

## VsanVsanClusterHealthSummary

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `cluster` |  | `VsanManagedObjectReference` | No |
| `overallHealth` |  | `String` | No |
| `clusterVersions` |  | `VsanVsanClusterHealthSystemVersionResult` | No |
| `networkHealth` |  | `VsanVsanClusterNetworkHealthResult` | No |
| `encryptionHealth` |  | `VsanVsanClusterEncryptionHealthSummary` | No |
| `objectHealth` |  | `VsanVsanObjectOverallHealth` | No |
| `dynamicType` |  | `String` | No |
| `healthScore` |  | `Number` | No |
| `clomdLiveness` |  | `VsanVsanClusterClomdLivenessResult` | No |
| `advCfgSync` |  | `Array/VsanVsanClusterAdvCfgSyncResult` | No |
| `dataProtectionCfgSync` |  | `Array/VsanVsanClusterDataProtectionCfgSyncResult` | No |
| `hclInfo` |  | `VsanVsanClusterHclInfo` | No |
| `vmHealth` |  | `VsanVsanClusterVMsHealthOverallResult` | No |
| `burnInTest` |  | `VsanVsanBurnInTestCheckResult` | No |
| `archivalAccessibilityStatus` |  | `Array/VsanVsanArchivalAccessibilityResult` | No |
| `timestamp` |  | `Date` | No |
| `physicalDisksHealth` |  | `Array/VsanVsanPhysicalDiskHealthSummary` | No |
| `dpdLiveness` |  | `VsanVsanClusterDpdLivenessResult` | No |
| `createVmHealth` |  | `Array/VsanVsanHostCreateVmHealthTestResult` | No |
| `genericCluster` |  | `VsanVsanGenericClusterBestPracticeHealth` | No |
| `networkConfig` |  | `VsanVsanNetworkConfigBestPracticeHealth` | No |
| `groups` |  | `Array/VsanVsanClusterHealthGroup` | No |
| `overallHealthDescription` |  | `String` | No |
| `diskBalance` |  | `VsanVsanClusterBalanceSummary` | No |
| `limitHealth` |  | `VsanVsanClusterLimitHealthResult` | No |
| `ditEncryptionHealth` |  | `VsanVsanClusterDitEncryptionHealthSummary` | No |
| `vsanConfig` |  | `VsanVsanConfigCheckResult` | No |
| `fileServiceHealth` |  | `VsanVsanClusterFileServiceHealthSummary` | No |
| `perfsvcHealth` |  | `VsanVsanPerfsvcHealthResult` | No |
| `datastoreUsage` |  | `VsanVsanClusterDatastoreUsageResult` | No |
| `clusterStatus` |  | `VsanVsanClusterHealthSystemStatusResult` | No |

## VsanVsanClusterHealthSystem

### Methods

#### `vsanQueryClusterNetworkPerfTest`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/String` |  |
| `arg1` | `String` |  |
| `arg2` | `Boolean` |  |
| `arg3` | `Number` |  |

**Returns:** `VsanVsanClusterNetworkLoadTestResult`

---

#### `vsanQueryClusterPhysicalDiskHealthSummary`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/String` |  |
| `arg1` | `String` |  |

**Returns:** `Array/VsanVsanPhysicalDiskHealthSummary`

---

#### `_getRef`


**Returns:** `VsanManagedObjectReference`

---

#### `vsanQueryClusterHealthSystemVersions`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/String` |  |
| `arg1` | `String` |  |

**Returns:** `VsanVsanClusterHealthSystemVersionResult`

---

#### `vsanQueryClusterAdvCfgSync`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/String` |  |
| `arg1` | `String` |  |
| `arg2` | `Array/String` |  |

**Returns:** `Array/VsanVsanClusterAdvCfgSyncResult`

---

#### `vsanClusterGetHclInfo`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/String` |  |
| `arg1` | `String` |  |

**Returns:** `VsanVsanClusterHclInfo`

---

#### `vsanCheckClusterDpdLiveness`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/String` |  |
| `arg1` | `String` |  |

**Returns:** `VsanVsanClusterDpdLivenessResult`

---

#### `vsanQueryClusterCaptureVsanPcap`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/String` |  |
| `arg1` | `String` |  |
| `arg2` | `Number` |  |
| `arg3` | `Array/VsanVsanClusterHostVmknicMapping` |  |
| `arg4` | `Boolean` |  |
| `arg5` | `Boolean` |  |
| `arg6` | `Array/String` |  |
| `arg7` | `Array/Number` |  |
| `arg8` | `String` |  |

**Returns:** `VsanVsanVsanClusterPcapResult`

---

#### `vsanQueryVerifyClusterNetworkSettings`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/String` |  |
| `arg1` | `String` |  |

**Returns:** `VsanVsanClusterNetworkHealthResult`

---

#### `vsanCheckClusterClomdLiveness`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/String` |  |
| `arg1` | `String` |  |

**Returns:** `VsanVsanClusterClomdLivenessResult`

---

#### `vsanQueryClusterCheckLimits`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/String` |  |
| `arg1` | `String` |  |

**Returns:** `VsanVsanClusterLimitHealthResult`

---

#### `vsanRepairClusterImmediateObjects`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/String` |  |
| `arg1` | `String` |  |
| `arg2` | `Array/String` |  |

**Returns:** `VsanVsanClusterHealthSystemObjectsRepairResult`

---

#### `vsanCheckClusterArchivalAccessibility`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/String` |  |
| `arg1` | `String` |  |

**Returns:** `Array/VsanVsanArchivalAccessibilityResult`

---

#### `vsanQueryClusterCreateVmHealthTest`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/String` |  |
| `arg1` | `String` |  |
| `arg2` | `Number` |  |

**Returns:** `VsanVsanClusterCreateVmHealthTestResult`

---

## VsanVsanClusterHealthSystemObjectsRepairResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `inRepairingQueueObjects` |  | `Array/String` | No |
| `issueFound` |  | `Boolean` | No |
| `dynamicType` |  | `String` | No |
| `failedRepairObjects` |  | `Array/VsanVsanFailedRepairObjectResult` | No |

## VsanVsanClusterHealthSystemStatusResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `trackedHostsStatus` |  | `Array/VsanVsanHostHealthSystemStatusResult` | No |
| `goalState` |  | `String` | No |
| `untrackedHosts` |  | `Array/String` | No |
| `dynamicType` |  | `String` | No |
| `status` |  | `String` | No |

## VsanVsanClusterHealthSystemVersionResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `upgradePossible` |  | `Boolean` | No |
| `hostResults` |  | `Array/VsanVsanHostHealthSystemVersionResult` | No |
| `vcBuild` |  | `String` | No |
| `vcVersion` |  | `String` | No |
| `issueFound` |  | `Boolean` | No |
| `dynamicType` |  | `String` | No |

### Methods

#### `VsanVsanClusterHealthSystemVersionResult`


**Returns:** `void`

---

#### `VsanVsanClusterHealthSystemVersionResult`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `hostResults` | `Array/VsanVsanHostHealthSystemVersionResult` |  |
| `vcVersion` | `String` |  |
| `issueFound` | `Boolean` |  |
| `upgradePossible` | `Boolean` |  |
| `vcBuild` | `String` |  |

**Returns:** `void`

---

#### `isUpgradePossible`


**Returns:** `Boolean`

---

## VsanVsanClusterHealthTest

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `testDetails` |  | `Array/VsanVsanClusterHealthResultBase` | No |
| `lastStatusChangeTime` |  | `Date` | No |
| `testDescription` |  | `String` | No |
| `testShortDescription` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `reducedScore` |  | `Number` | No |
| `riskIfNotFix` |  | `String` | No |
| `testAllEntities` |  | `Number` | No |
| `testActions` |  | `Array/VsanVsanClusterHealthAction` | No |
| `testHealth` |  | `String` | No |
| `testCorrelation` |  | `VsanVsanHealthCorrelation` | No |
| `testHealthyEntities` |  | `Number` | No |
| `historicalResults` |  | `Array/VsanVsanHistoricalHealthTest` | No |
| `testId` |  | `String` | No |
| `category` |  | `String` | No |
| `testName` |  | `String` | No |

## VsanVsanClusterHostVmknicMapping

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `host` |  | `String` | No |
| `vmknic` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanClusterKeys

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `wrappedDek` |  | `String` | No |
| `kekVerifier` |  | `String` | No |
| `oldWrappedDek` |  | `String` | No |
| `dekVerifier` |  | `String` | No |
| `oldDekVerifier` |  | `String` | No |
| `hostKeyId` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `kekId` |  | `String` | No |

## VsanVsanClusterLimitHealthResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `whatifESAHostFailures` |  | `Array/VsanVsanClusterWhatifHostFailuresResult` | No |
| `hostResults` |  | `Array/VsanVsanLimitHealthResult` | No |
| `whatifHostFailures` |  | `Array/VsanVsanClusterWhatifHostFailuresResult` | No |
| `diskFreeSpaceHealth` |  | `String` | No |
| `issueFound` |  | `Boolean` | No |
| `dynamicType` |  | `String` | No |
| `hostsCommFailure` |  | `Array/String` | No |
| `componentLimitHealth` |  | `String` | No |
| `rcFreeReservationHealth` |  | `String` | No |

## VsanVsanClusterMembershipInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `clusterUuid` |  | `String` | No |
| `membershipUuid` |  | `String` | No |
| `memberUuid` |  | `Array/String` | No |
| `health` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanClusterMetroConfig

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `metadataMode` |  | `Boolean` | No |
| `witnessContainers` |  | `Array/VsanVsanWitnessContainerConfig` | No |
| `witnessNode` |  | `VsanManagedObjectReference` | No |
| `preferredFdName` |  | `String` | No |
| `witnessHosts` |  | `Array/VsanVsanWitnessConfig` | No |
| `witnessNodeIPAddresses` |  | `String` | No |
| `preferredFdUuid` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `witnessNodeUuid` |  | `String` | No |
| `enabled` |  | `Boolean` | No |

### Methods

#### `VsanVsanClusterMetroConfig`


**Returns:** `void`

---

#### `VsanVsanClusterMetroConfig`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `enabled` | `Boolean` |  |
| `witnessNode` | `VsanManagedObjectReference` |  |
| `witnessNodeUuid` | `String` |  |
| `witnessNodeIPAddresses` | `String` |  |
| `preferredFdName` | `String` |  |
| `preferredFdUuid` | `String` |  |
| `metadataMode` | `Boolean` |  |
| `witnessHosts` | `Array/VsanVsanWitnessConfig` |  |
| `witnessContainers` | `Array/VsanVsanWitnessContainerConfig` |  |

**Returns:** `void`

---

#### `isMetadataMode`


**Returns:** `Boolean`

---

## VsanVsanClusterMgmtDebugSystem

### Methods

#### `vsanClusterMgmtClearStressOptions`


**Returns:** `Boolean`

---

#### `_getRef`


**Returns:** `VsanManagedObjectReference`

---

#### `vsanClusterMgmtPurgeAllPersistedState`


**Returns:** `Boolean`

---

#### `vsanClusterMgmtPersistStressOptions`


**Returns:** `Boolean`

---

#### `vsanClusterMgmtSetStressOptionEx`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |
| `arg1` | `String` |  |
| `arg2` | `String` |  |

**Returns:** `void`

---

#### `vsanClusterMgmtSetStressOption`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |
| `arg1` | `Number` |  |

**Returns:** `Boolean`

---

#### `vsanClusterMgmtGetStats`


**Returns:** `String`

---

#### `vsanClusterMgmtCanPersistMaxClusterSize`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `String` |  |

**Returns:** `Boolean`

---

#### `vsanGetPersistedClusterState`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `VsanVsanClusterPersistedState`

---

#### `vsanClusterMgmtServiceRestart`


**Returns:** `Boolean`

---

#### `vsanClusterMgmtRemoveStressOptions`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |

**Returns:** `void`

---

## VsanVsanClusterMgmtInternalSystem

### Methods

#### `vsanRemediateVsanHost`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `_getRef`


**Returns:** `VsanManagedObjectReference`

---

#### `vsanReconfigProfiling`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Boolean` |  |

**Returns:** `void`

---

#### `vsanRemediateVsanCluster`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vsanRetrieveProfilingTrace`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `String`

---

#### `vsanRemediateDataProtectionConfig`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vsanRemediateVc`


**Returns:** `VsanManagedObjectReference`

---

## VsanVsanClusterNetworkHealthResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `partitions` |  | `Array/VsanVsanClusterNetworkPartitionInfo` | No |
| `hostsWithVsanDisabled` |  | `Array/String` | No |
| `hostResults` |  | `Array/VsanVsanNetworkHealthResult` | No |
| `hostsDisconnected` |  | `Array/String` | No |
| `clusterInUnicastMode` |  | `Boolean` | No |
| `clusterInRDMAMode` |  | `Boolean` | No |
| `vsanVmknicPresent` |  | `Boolean` | No |
| `potentialMulticastIssue` |  | `Boolean` | No |
| `pingTestSuccess` |  | `Boolean` | No |
| `matchingIpSubnets` |  | `Boolean` | No |
| `dynamicType` |  | `String` | No |
| `issueFound` |  | `Boolean` | No |
| `hostsCommFailure` |  | `Array/String` | No |
| `hostsInVsanMaintenanceMode` |  | `Array/String` | No |
| `otherHostsInVsanCluster` |  | `Array/String` | No |
| `matchingMulticastConfig` |  | `Boolean` | No |
| `largePingTestSuccess` |  | `Boolean` | No |
| `hostsInEsxMaintenanceMode` |  | `Array/String` | No |
| `hostLatencyCheckSuccess` |  | `Boolean` | No |
| `infoAboutUnexpectedHosts` |  | `Array/VsanVsanQueryResultHostInfo` | No |

### Methods

#### `VsanVsanClusterNetworkHealthResult`


**Returns:** `void`

---

#### `VsanVsanClusterNetworkHealthResult`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `hostResults` | `Array/VsanVsanNetworkHealthResult` |  |
| `issueFound` | `Boolean` |  |
| `vsanVmknicPresent` | `Boolean` |  |
| `matchingMulticastConfig` | `Boolean` |  |
| `matchingIpSubnets` | `Boolean` |  |
| `pingTestSuccess` | `Boolean` |  |
| `largePingTestSuccess` | `Boolean` |  |
| `hostLatencyCheckSuccess` | `Boolean` |  |
| `potentialMulticastIssue` | `Boolean` |  |
| `otherHostsInVsanCluster` | `Array/String` |  |
| `partitions` | `Array/VsanVsanClusterNetworkPartitionInfo` |  |
| `hostsWithVsanDisabled` | `Array/String` |  |
| `hostsDisconnected` | `Array/String` |  |
| `hostsCommFailure` | `Array/String` |  |
| `hostsInEsxMaintenanceMode` | `Array/String` |  |
| `hostsInVsanMaintenanceMode` | `Array/String` |  |
| `infoAboutUnexpectedHosts` | `Array/VsanVsanQueryResultHostInfo` |  |
| `clusterInUnicastMode` | `Boolean` |  |
| `clusterInRDMAMode` | `Boolean` |  |

**Returns:** `void`

---

#### `isLargePingTestSuccess`


**Returns:** `Boolean`

---

#### `isPotentialMulticastIssue`


**Returns:** `Boolean`

---

#### `isMatchingMulticastConfig`


**Returns:** `Boolean`

---

#### `isMatchingIpSubnets`


**Returns:** `Boolean`

---

#### `isPingTestSuccess`


**Returns:** `Boolean`

---

#### `isClusterInUnicastMode`


**Returns:** `Boolean`

---

#### `isClusterInRDMAMode`


**Returns:** `Boolean`

---

#### `isIssueFound`


**Returns:** `Boolean`

---

#### `isHostLatencyCheckSuccess`


**Returns:** `Boolean`

---

#### `isVsanVmknicPresent`


**Returns:** `Boolean`

---

## VsanVsanClusterNetworkLoadTestResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `hostResults` |  | `Array/VsanVsanNetworkLoadTestResult` | No |
| `clusterResult` |  | `VsanVsanClusterProactiveTestResult` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanClusterNetworkPartitionInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `hosts` |  | `Array/String` | No |
| `dynamicType` |  | `String` | No |
| `partitionUnknown` |  | `Boolean` | No |

### Methods

#### `VsanVsanClusterNetworkPartitionInfo`


**Returns:** `void`

---

#### `VsanVsanClusterNetworkPartitionInfo`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `hosts` | `Array/String` |  |
| `partitionUnknown` | `Boolean` |  |

**Returns:** `void`

---

#### `isPartitionUnknown`


**Returns:** `Boolean`

---

## VsanVsanClusterNetworkPerfTaskSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `cluster` |  | `VsanManagedObjectReference` | No |
| `ownerVc` |  | `String` | No |
| `durationSec` |  | `Number` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanClusterObjectExtAttrs

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `objectPath` |  | `String` | No |
| `groupUuid` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `uuid` |  | `String` | No |
| `directoryName` |  | `String` | No |
| `objectType` |  | `String` | No |

## VsanVsanClusterPersistedState

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `perfsvcConfig` |  | `VsanVsanPerfsvcConfig` | No |
| `extendedConfig` |  | `VsanVsanExtendedConfig` | No |
| `datastoreConfig` |  | `VsanVsanDatastoreConfig` | No |
| `vsanPMemConfig` |  | `VsanVimVsanVsanPMemConfig` | No |
| `metricsConfig` |  | `VsanVsanMetricsConfig` | No |
| `dataInTransitEncryptionConfig` |  | `VsanVsanDataInTransitEncryptionConfig` | No |
| `dynamicType` |  | `String` | No |
| `deconvergedNetConfig` |  | `VsanVsanDeconvergedNetConfig` | No |
| `fileServiceConfig` |  | `VsanVsanFileServiceConfig` | No |
| `defaultDatastorePolicySelectionInfo` |  | `VsanDefaultDatastorePolicySelectionInfo` | No |
| `mode` |  | `String` | No |
| `powerState` |  | `String` | No |
| `genNum` |  | `Number` | No |
| `iscsiEnabled` |  | `Boolean` | No |
| `vsanClusterUuid` |  | `String` | No |
| `vsanSkyConfig` |  | `VsanVsanSkyConfig` | No |
| `vsanEsaEnabled` |  | `Boolean` | No |
| `dataEfficiencyConfig` |  | `VsanVsanDataEfficiencyConfig` | No |
| `rdmaConfig` |  | `VsanVsanRdmaConfig` | No |
| `vcCluster` |  | `VsanManagedObjectReference` | No |
| `metroConfig` |  | `VsanVsanClusterMetroConfig` | No |
| `generationId` |  | `Number` | No |
| `unmapConfig` |  | `VsanVsanUnmapConfig` | No |
| `dataProtectionConfig` |  | `VsanVsanDataProtectionInfo` | No |
| `hosts` |  | `Array/VsanManagedObjectReference` | No |
| `snapServiceConfig` |  | `VsanVsanSnapServiceConfig` | No |
| `dataEncryptionConfig` |  | `VsanVsanDataEncryptionConfig` | No |
| `vsanEnabled` |  | `Boolean` | No |
| `vsanBaselinePreference` |  | `String` | No |
| `perfMemberInfos` |  | `Array/VsanVsanPerfMemberInfo` | No |
| `vsanDatastoreName` |  | `String` | No |
| `vsanEsaConversionStatus` |  | `String` | No |
| `xvcDatastoreDetailedConfig` |  | `VsanXVCDatastoreDetailedConfig` | No |
| `basicConfig` |  | `VsanVsanClusterConfig` | No |
| `serverClusterInfo` |  | `Array/VsanVcRemoteVsanServerClusterDetailedInfo` | No |
| `resyncIopsLimitConfig` |  | `VsanResyncIopsInfo` | No |
| `vsanEsaConfigInfo` |  | `VsanVsanEsaConfigInfo` | No |

### Methods

#### `VsanVsanClusterPersistedState`


**Returns:** `void`

---

#### `VsanVsanClusterPersistedState`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `generationId` | `Number` |  |
| `vcCluster` | `VsanManagedObjectReference` |  |
| `vsanEnabled` | `Boolean` |  |
| `vsanClusterUuid` | `String` |  |
| `basicConfig` | `VsanVsanClusterConfig` |  |
| `hosts` | `Array/VsanManagedObjectReference` |  |
| `metroConfig` | `VsanVsanClusterMetroConfig` |  |
| `dataEfficiencyConfig` | `VsanVsanDataEfficiencyConfig` |  |
| `perfMemberInfos` | `Array/VsanVsanPerfMemberInfo` |  |
| `dataEncryptionConfig` | `VsanVsanDataEncryptionConfig` |  |
| `resyncIopsLimitConfig` | `VsanResyncIopsInfo` |  |
| `iscsiEnabled` | `Boolean` |  |
| `vsanDatastoreName` | `String` |  |
| `extendedConfig` | `VsanVsanExtendedConfig` |  |
| `datastoreConfig` | `VsanVsanDatastoreConfig` |  |
| `genNum` | `Number` |  |
| `perfsvcConfig` | `VsanVsanPerfsvcConfig` |  |
| `unmapConfig` | `VsanVsanUnmapConfig` |  |
| `vsanBaselinePreference` | `String` |  |
| `rdmaConfig` | `VsanVsanRdmaConfig` |  |
| `metricsConfig` | `VsanVsanMetricsConfig` |  |
| `fileServiceConfig` | `VsanVsanFileServiceConfig` |  |
| `dataProtectionConfig` | `VsanVsanDataProtectionInfo` |  |
| `dataInTransitEncryptionConfig` | `VsanVsanDataInTransitEncryptionConfig` |  |
| `mode` | `String` |  |
| `vsanPMemConfig` | `VsanVimVsanVsanPMemConfig` |  |
| `vsanEsaConfigInfo` | `VsanVsanEsaConfigInfo` |  |
| `xvcDatastoreDetailedConfig` | `VsanXVCDatastoreDetailedConfig` |  |
| `powerState` | `String` |  |
| `vsanEsaEnabled` | `Boolean` |  |
| `vsanEsaConversionStatus` | `String` |  |
| `serverClusterInfo` | `Array/VsanVcRemoteVsanServerClusterDetailedInfo` |  |
| `defaultDatastorePolicySelectionInfo` | `VsanDefaultDatastorePolicySelectionInfo` |  |
| `vsanSkyConfig` | `VsanVsanSkyConfig` |  |
| `snapServiceConfig` | `VsanVsanSnapServiceConfig` |  |
| `deconvergedNetConfig` | `VsanVsanDeconvergedNetConfig` |  |

**Returns:** `void`

---

#### `isVsanEsaEnabled`


**Returns:** `Boolean`

---

#### `isIscsiEnabled`


**Returns:** `Boolean`

---

## VsanVsanClusterPowerSystem

### Methods

#### `queryClusterPowerContext`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `VsanClusterPowerContext`

---

#### `_getRef`


**Returns:** `VsanManagedObjectReference`

---

#### `hostStartUpPrecheck`


**Returns:** `VsanManagedObjectReference`

---

#### `updateClusterPowerStatus`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `String` |  |

**Returns:** `Boolean`

---

#### `performClusterPowerAction`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `VsanPerformClusterPowerActionSpec` |  |

**Returns:** `VsanManagedObjectReference`

---

## VsanVsanClusterProactiveTestResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `healthTest` |  | `VsanVsanClusterHealthTest` | No |
| `overallStatusDescription` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `overallStatus` |  | `String` | No |
| `timestamp` |  | `Date` | No |

## VsanVsanClusterSubscriptionInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `cluster` |  | `VsanManagedObjectReference` | No |
| `hclInfo` |  | `VsanVsanClusterHclInfo` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanClusterTelemetryProxyConfig

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `password` |  | `String` | No |
| `port` |  | `Number` | No |
| `autoDiscovered` |  | `Boolean` | No |
| `host` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `user` |  | `String` | No |

### Methods

#### `VsanVsanClusterTelemetryProxyConfig`


**Returns:** `void`

---

#### `VsanVsanClusterTelemetryProxyConfig`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `host` | `String` |  |
| `port` | `Number` |  |
| `user` | `String` |  |
| `password` | `String` |  |
| `autoDiscovered` | `Boolean` |  |

**Returns:** `void`

---

#### `isAutoDiscovered`


**Returns:** `Boolean`

---

## VsanVsanClusterVmdkLoadTestResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `task` |  | `VsanManagedObjectReference` | No |
| `hostResults` |  | `Array/VsanVsanHostVmdkLoadTestResult` | No |
| `clusterResult` |  | `VsanVsanClusterProactiveTestResult` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanClusterVMsHealthOverallResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `overallHealthState` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `healthStateList` |  | `Array/VsanVsanClusterVMsHealthSummaryResult` | No |

## VsanVsanClusterVMsHealthSummaryResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `vmInstanceUuids` |  | `Array/String` | No |
| `health` |  | `String` | No |
| `state` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `numVMs` |  | `Number` | No |

## VsanVsanClusterWhatifHostFailuresResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `totalUsedCapacityB` |  | `Number` | No |
| `totalRcSizeB` |  | `Number` | No |
| `capacityReservationInfo` |  | `VsanVsanCapacityReservationInfo` | No |
| `diskSpaceThreshold` |  | `VsanVsanHealthThreshold` | No |
| `dynamicType` |  | `String` | No |
| `rcFreeReservationHealth` |  | `String` | No |
| `slackSpaceCapRequired` |  | `Number` | No |
| `numFailures` |  | `Number` | No |
| `totalRcReservationB` |  | `Number` | No |
| `totalCapacityB` |  | `Number` | No |
| `diskFreeSpaceHealth` |  | `String` | No |
| `usedComponents` |  | `Number` | No |
| `totalComponents` |  | `Number` | No |
| `componentLimitHealth` |  | `String` | No |

## VsanVsanComparator

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |

## VsanVsanCompatibilityCheckResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |
| `status` |  | `String` | No |

## VsanVsanComplianceDetail

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `violatedPolicies` |  | `Array/VsanVsanPolicyStatus` | No |
| `objectHealth` |  | `Number` | No |
| `complianceStatus` |  | `String` | No |
| `objectUUID` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanComplianceQuerySpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `spbmProfileId` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `spbmProfileGenerationId` |  | `Number` | No |
| `uuids` |  | `Array/String` | No |

## VsanVsanComplianceResourceCheckStatus

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `result` |  | `VsanVimVsanVsanComplianceResourceCheckReport` | No |
| `dynamicType` |  | `String` | No |
| `status` |  | `String` | No |

## VsanVsanComplianceResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `policyGen` |  | `Number` | No |
| `policyId` |  | `String` | No |
| `checkTime` |  | `Date` | No |
| `objComplianceDetail` |  | `Array/VsanVsanComplianceDetail` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanComplianceStatus

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `outOfDate` |  | `VsanVsanComplianceStatus` | Yes |
| `ComplianceStatus_Unknown` |  | `VsanVsanComplianceStatus` | Yes |
| `compliant` |  | `VsanVsanComplianceStatus` | Yes |
| `notApplicable` |  | `VsanVsanComplianceStatus` | Yes |
| `nonCompliant` |  | `VsanVsanComplianceStatus` | Yes |
| `unknown` |  | `VsanVsanComplianceStatus` | Yes |

## VsanVsanCompliantDriver

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `supportedFeatures` |  | `Array/String` | No |
| `driverVersion` |  | `String` | No |
| `driverName` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanCompliantFirmware

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |
| `firmwareVersion` |  | `String` | No |
| `compliantDrivers` |  | `Array/VsanVsanCompliantDriver` | No |

## VsanVsanCompositeConstraint

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `targetType` |  | `String` | No |
| `nestedConstraints` |  | `Array/VsanVsanResourceConstraint` | No |
| `dynamicType` |  | `String` | No |
| `conjoiner` |  | `String` | No |

## VsanVsanCompositeConstraintConjoinerEnum

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `OR` |  | `VsanVsanCompositeConstraintConjoinerEnum` | Yes |
| `AND` |  | `VsanVsanCompositeConstraintConjoinerEnum` | Yes |
| `EXCEPT` |  | `VsanVsanCompositeConstraintConjoinerEnum` | Yes |
| `VsanCompositeConstraintConjoinerEnum_Unknown` |  | `VsanVsanCompositeConstraintConjoinerEnum` | Yes |

## VsanVsanConfigBaseIssue

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |

## VsanVsanConfigCheckResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `vsanEnabled` |  | `Boolean` | No |
| `dynamicType` |  | `String` | No |
| `issues` |  | `Array/VsanVsanConfigBaseIssue` | No |

## VsanVsanConfigGeneration

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `genNum` |  | `Number` | No |
| `dynamicType` |  | `String` | No |
| `genTime` |  | `Number` | No |
| `vcUuid` |  | `String` | No |

## VsanVsanConfigInfoEx

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `perfsvcConfig` |  | `VsanVsanPerfsvcConfig` | No |
| `extendedConfig` |  | `VsanVsanExtendedConfig` | No |
| `datastoreConfig` |  | `VsanVsanDatastoreConfig` | No |
| `vsanPMemConfig` |  | `VsanVimVsanVsanPMemConfig` | No |
| `serverClusterConfig` |  | `VsanVcRemoteVsanServerClusterConfig` | No |
| `metricsConfig` |  | `VsanVsanMetricsConfig` | No |
| `iscsiConfig` |  | `VsanVsanIscsiTargetServiceConfig` | No |
| `dataInTransitEncryptionConfig` |  | `VsanVsanDataInTransitEncryptionConfig` | No |
| `dynamicType` |  | `String` | No |
| `deconvergedNetConfig` |  | `VsanVsanDeconvergedNetConfig` | No |
| `fileServiceConfig` |  | `VsanVsanFileServiceConfig` | No |
| `enabled` |  | `Boolean` | No |
| `vumConfig` |  | `VsanVsanVumConfig` | No |
| `mode` |  | `String` | No |
| `vsanSkyConfig` |  | `VsanVsanSkyConfig` | No |
| `vsanEsaEnabled` |  | `Boolean` | No |
| `dataEfficiencyConfig` |  | `VsanVsanDataEfficiencyConfig` | No |
| `defaultConfig` |  | `VsanVsanClusterConfigInfoHostDefaultInfo` | No |
| `rdmaConfig` |  | `VsanVsanRdmaConfig` | No |
| `unmapConfig` |  | `VsanVsanUnmapConfig` | No |
| `dataProtectionConfig` |  | `VsanVsanDataProtectionInfo` | No |
| `datastoreDefaultPolicySelectionConfig` |  | `VsanVsanDatastoreDefaultPolicySelectionConfig` | No |
| `snapServiceConfig` |  | `VsanVsanSnapServiceConfig` | No |
| `dataEncryptionConfig` |  | `VsanVsanDataEncryptionConfig` | No |
| `xvcDatastoreConfig` |  | `VsanVsanXVCDatastoreConfig` | No |
| `vsanHealthConfig` |  | `VsanVsanHealthConfigSpec` | No |
| `vsanEsaConversionStatus` |  | `String` | No |
| `resyncIopsLimitConfig` |  | `VsanResyncIopsInfo` | No |
| `vsanEsaConfigInfo` |  | `VsanVsanEsaConfigInfo` | No |

### Methods

#### `VsanVsanConfigInfoEx`


**Returns:** `void`

---

#### `VsanVsanConfigInfoEx`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `enabled` | `Boolean` |  |
| `defaultConfig` | `VsanVsanClusterConfigInfoHostDefaultInfo` |  |
| `vsanEsaEnabled` | `Boolean` |  |
| `dataEfficiencyConfig` | `VsanVsanDataEfficiencyConfig` |  |
| `resyncIopsLimitConfig` | `VsanResyncIopsInfo` |  |
| `iscsiConfig` | `VsanVsanIscsiTargetServiceConfig` |  |
| `dataEncryptionConfig` | `VsanVsanDataEncryptionConfig` |  |
| `extendedConfig` | `VsanVsanExtendedConfig` |  |
| `datastoreConfig` | `VsanVsanDatastoreConfig` |  |
| `perfsvcConfig` | `VsanVsanPerfsvcConfig` |  |
| `unmapConfig` | `VsanVsanUnmapConfig` |  |
| `vumConfig` | `VsanVsanVumConfig` |  |
| `dataProtectionConfig` | `VsanVsanDataProtectionInfo` |  |
| `fileServiceConfig` | `VsanVsanFileServiceConfig` |  |
| `metricsConfig` | `VsanVsanMetricsConfig` |  |
| `rdmaConfig` | `VsanVsanRdmaConfig` |  |
| `dataInTransitEncryptionConfig` | `VsanVsanDataInTransitEncryptionConfig` |  |
| `vsanHealthConfig` | `VsanVsanHealthConfigSpec` |  |
| `mode` | `String` |  |
| `vsanPMemConfig` | `VsanVimVsanVsanPMemConfig` |  |
| `vsanEsaConfigInfo` | `VsanVsanEsaConfigInfo` |  |
| `vsanEsaConversionStatus` | `String` |  |
| `xvcDatastoreConfig` | `VsanVsanXVCDatastoreConfig` |  |
| `serverClusterConfig` | `VsanVcRemoteVsanServerClusterConfig` |  |
| `datastoreDefaultPolicySelectionConfig` | `VsanVsanDatastoreDefaultPolicySelectionConfig` |  |
| `vsanSkyConfig` | `VsanVsanSkyConfig` |  |
| `snapServiceConfig` | `VsanVsanSnapServiceConfig` |  |
| `deconvergedNetConfig` | `VsanVsanDeconvergedNetConfig` |  |

**Returns:** `void`

---

#### `isVsanEsaEnabled`


**Returns:** `Boolean`

---

#### `isEnabled`


**Returns:** `Boolean`

---

## VsanVsanConfigNotAllDisksClaimedIssue

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `disks` |  | `Array/String` | No |
| `host` |  | `VsanManagedObjectReference` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanConfigType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `VsanConfigType_Unknown` |  | `VsanVsanConfigType` | Yes |
| `vsan` |  | `VsanVsanConfigType` | Yes |
| `vsanEsa` |  | `VsanVsanConfigType` | Yes |

## VsanVsanControllerType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `SCSI` |  | `VsanVsanControllerType` | Yes |
| `NVMe` |  | `VsanVsanControllerType` | Yes |
| `VsanControllerType_Unknown` |  | `VsanVsanControllerType` | Yes |

## VsanVsanDaemonHealth

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `alive` |  | `Boolean` | No |
| `name` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanDataDrivenAPIAction

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `actionId` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `enabled` |  | `Boolean` | No |

## VsanVsanDataEfficiencyConfig

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dedupEnabled` |  | `Boolean` | No |
| `compressionEnabled` |  | `Boolean` | No |
| `dynamicType` |  | `String` | No |

### Methods

#### `VsanVsanDataEfficiencyConfig`


**Returns:** `void`

---

#### `VsanVsanDataEfficiencyConfig`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `dedupEnabled` | `Boolean` |  |
| `compressionEnabled` | `Boolean` |  |

**Returns:** `void`

---

#### `isCompressionEnabled`


**Returns:** `Boolean`

---

## VsanVsanDataEfficiencyConfigEx

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dedupStoreGenUuid` |  | `String` | No |
| `dedupEnabled` |  | `Boolean` | No |
| `compressionEnabled` |  | `Boolean` | No |
| `dynamicType` |  | `String` | No |

### Methods

#### `VsanVsanDataEfficiencyConfigEx`


**Returns:** `void`

---

#### `VsanVsanDataEfficiencyConfigEx`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `dedupEnabled` | `Boolean` |  |
| `compressionEnabled` | `Boolean` |  |
| `dedupStoreGenUuid` | `String` |  |

**Returns:** `void`

---

#### `isCompressionEnabled`


**Returns:** `Boolean`

---

## VsanVsanDataEncryptionConfig

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `hostKeyIdExt` |  | `String` | No |
| `wrappedDek` |  | `String` | No |
| `kekVerifier` |  | `String` | No |
| `oldWrappedDek` |  | `String` | No |
| `dekVerifier` |  | `String` | No |
| `syncing` |  | `Boolean` | No |
| `kekIdExt` |  | `String` | No |
| `dekGenerationId` |  | `Number` | No |
| `oldDekId` |  | `String` | No |
| `changing` |  | `Boolean` | No |
| `hostKeyId` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `iv` |  | `String` | No |
| `kmsProviderId` |  | `VsanKeyProviderId` | No |
| `encryptionEnabled` |  | `Boolean` | No |
| `dekId` |  | `String` | No |
| `oldDekVerifier` |  | `String` | No |
| `eraseDisksBeforeUse` |  | `Boolean` | No |
| `dekGenerationIdExt` |  | `Number` | No |
| `kekId` |  | `String` | No |

### Methods

#### `VsanVsanDataEncryptionConfig`


**Returns:** `void`

---

#### `VsanVsanDataEncryptionConfig`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `encryptionEnabled` | `Boolean` |  |
| `kmsProviderId` | `VsanKeyProviderId` |  |
| `kekId` | `String` |  |
| `kekIdExt` | `String` |  |
| `hostKeyId` | `String` |  |
| `hostKeyIdExt` | `String` |  |
| `dekGenerationId` | `Number` |  |
| `dekGenerationIdExt` | `Number` |  |
| `changing` | `Boolean` |  |
| `eraseDisksBeforeUse` | `Boolean` |  |
| `wrappedDek` | `String` |  |
| `dekId` | `String` |  |
| `oldWrappedDek` | `String` |  |
| `oldDekId` | `String` |  |
| `kekVerifier` | `String` |  |
| `dekVerifier` | `String` |  |
| `oldDekVerifier` | `String` |  |
| `iv` | `String` |  |
| `syncing` | `Boolean` |  |

**Returns:** `void`

---

#### `isSyncing`


**Returns:** `Boolean`

---

#### `isChanging`


**Returns:** `Boolean`

---

#### `isEraseDisksBeforeUse`


**Returns:** `Boolean`

---

## VsanVsanDataInTransitEncryptionConfig

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `rekeyInterval` |  | `Number` | No |
| `dynamicType` |  | `String` | No |
| `enabled` |  | `Boolean` | No |

### Methods

#### `VsanVsanDataInTransitEncryptionConfig`


**Returns:** `void`

---

#### `VsanVsanDataInTransitEncryptionConfig`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `enabled` | `Boolean` |  |
| `rekeyInterval` | `Number` |  |

**Returns:** `void`

---

#### `isEnabled`


**Returns:** `Boolean`

---

## VsanVsanDataObfuscationRule

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |

## VsanVsanDataProtectionArchivalLocation

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `datastoreUrl` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanDataProtectionArchivalTargetSiteInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `datastoreUrl` |  | `String` | No |
| `targetType` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanDataProtectionInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `usageThreshold` |  | `Number` | No |
| `archivalTarget` |  | `VsanVsanDataProtectionArchivalLocation` | No |
| `incomingReplicationPort` |  | `Number` | No |
| `dynamicType` |  | `String` | No |
| `pairingInfo` |  | `Array/VsanVsanDataProtectionPairingInfo` | No |

## VsanVsanDataProtectionPairingInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `localLoadBalancers` |  | `Array/VsanDataProtectionLoadBalancerBasicInfo` | No |
| `peerLoadBalancers` |  | `Array/VsanDataProtectionLoadBalancerDetailedInfo` | No |
| `deletePairing` |  | `Boolean` | No |
| `pairingId` |  | `String` | No |
| `peerClusterUuid` |  | `String` | No |
| `peerDatastoreUrl` |  | `String` | No |
| `peerSite` |  | `VsanDataProtectionPeerSiteInfo` | No |
| `localDatastoreUrl` |  | `String` | No |
| `peerClusterName` |  | `String` | No |
| `peerDatastoreName` |  | `String` | No |
| `dynamicType` |  | `String` | No |

### Methods

#### `VsanVsanDataProtectionPairingInfo`


**Returns:** `void`

---

#### `VsanVsanDataProtectionPairingInfo`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `pairingId` | `String` |  |
| `peerSite` | `VsanDataProtectionPeerSiteInfo` |  |
| `peerClusterUuid` | `String` |  |
| `peerDatastoreUrl` | `String` |  |
| `localDatastoreUrl` | `String` |  |
| `peerClusterName` | `String` |  |
| `peerDatastoreName` | `String` |  |
| `localLoadBalancers` | `Array/VsanDataProtectionLoadBalancerBasicInfo` |  |
| `peerLoadBalancers` | `Array/VsanDataProtectionLoadBalancerDetailedInfo` |  |
| `deletePairing` | `Boolean` |  |

**Returns:** `void`

---

#### `isDeletePairing`


**Returns:** `Boolean`

---

## VsanVsanDataProtectionRemoteSpaceUsage

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `inactiveDataProtectionsUsage` |  | `Array/VsanVsanDataProtectionSpaceUsage` | No |
| `dynamicType` |  | `String` | No |
| `activeDataProtectionsUsage` |  | `Array/VsanVsanDataProtectionSpaceUsage` | No |

## VsanVsanDataProtectionRemoteTargetSiteInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |

## VsanVsanDataProtectionSpaceSystem

### Methods

#### `vsanCleanupDefrag`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `String` |  |
| `arg2` | `Array/String` |  |

**Returns:** `Boolean`

---

#### `_getRef`


**Returns:** `VsanManagedObjectReference`

---

#### `vsanPrepareDefrag`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `String` |  |
| `arg2` | `Array/String` |  |

**Returns:** `Boolean`

---

## VsanVsanDataProtectionSpaceUsage

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dpUsageStats` |  | `VsanVsanDataProtectionSpaceUsageStats` | No |
| `protectionTargetInfo` |  | `VsanVsanDataProtectionTargetSiteInfo` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanDataProtectionSpaceUsageStats

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `raidPolicyOverheadB` |  | `Number` | No |
| `overheadB` |  | `Number` | No |
| `fragmentationOverheadB` |  | `Number` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanDataProtectionTargetSiteInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `targetType` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanDataProtectionTargetSiteType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `localprotectiontarget` |  | `VsanVsanDataProtectionTargetSiteType` | Yes |
| `archiveprotectiontarget` |  | `VsanVsanDataProtectionTargetSiteType` | Yes |
| `VsanDataProtectionTargetSiteType_Unknown` |  | `VsanVsanDataProtectionTargetSiteType` | Yes |

## VsanVsanDatastoreConfig

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `datastores` |  | `Array/VsanVsanDatastoreSpec` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanDatastoreDefaultPolicySelectionConfig

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |
| `enabled` |  | `Boolean` | No |

## VsanVsanDatastoreSourcePrecheckItem

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `type` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `status` |  | `String` | No |

## VsanVsanDatastoreSourcePrecheckResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `result` |  | `Array/VsanVsanMountPrecheckItem` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanDatastoreSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `uuid` |  | `String` | No |

## VsanVsanDatastoreType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `pmem` |  | `VsanVsanDatastoreType` | Yes |
| `vsandirect` |  | `VsanVsanDatastoreType` | Yes |
| `VsanDatastoreType_Unknown` |  | `VsanVsanDatastoreType` | Yes |
| `vsan` |  | `VsanVsanDatastoreType` | Yes |

## VsanVsanDatastoreUsageResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `currentUsage` |  | `Number` | No |
| `dynamicType` |  | `String` | No |
| `thresholdExceeded` |  | `Boolean` | No |
| `configuredUsageThreshold` |  | `Number` | No |

## VsanVsanDebugSystem

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `entity` |  | `Array/VsanManagedObjectReference` | Yes |

### Methods

#### `_getRef`


**Returns:** `VsanManagedObjectReference`

---

#### `vsanQueryMemoryStats`


**Returns:** `String`

---

#### `vsanStartMobService`


**Returns:** `void`

---

#### `vsanStopMobService`


**Returns:** `void`

---

#### `vsanQueryMobStatus`


**Returns:** `String`

---

## VsanVsanDeconvergedNetConfig

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |
| `enabled` |  | `Boolean` | No |

## VsanVsanDeleteStoragePoolDiskSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `diskUuids` |  | `Array/String` | No |
| `dynamicType` |  | `String` | No |
| `maintenanceSpec` |  | `VsanHostMaintenanceSpec` | No |

## VsanVsanDiagnosticsSystem

### Methods

#### `_getRef`


**Returns:** `VsanManagedObjectReference`

---

#### `createVsanTraceObject`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVirtualMachineProfileSpec` |  |

**Returns:** `String`

---

#### `hostStartIODiagnosticsTask`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/VsanVsanIODiagnosticsTarget` |  |
| `arg1` | `VsanManagedObjectReference` |  |
| `arg2` | `Number` |  |
| `arg3` | `String` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vsanQueryNetworkDiagnostics`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `VsanManagedObjectReference` |  |

**Returns:** `Array/VsanVsanNetworkDiagnostics`

---

#### `editIOTripAnalyzerRecurrences`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Array/VsanVsanIOTripAnalyzerRecurrence` |  |

**Returns:** `Array/VsanVsanIOTripAnalyzerRecurrence`

---

#### `vsanSetTraceObjectPolicy`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `String` |  |
| `arg2` | `VsanVirtualMachineProfileSpec` |  |

**Returns:** `Boolean`

---

#### `createIOTripAnalyzerRecurrences`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Array/VsanVsanIOTripAnalyzerRecurrence` |  |

**Returns:** `Array/VsanVsanIOTripAnalyzerRecurrence`

---

#### `deleteVsanTraceObjects`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/VsanManagedObjectReference` |  |

**Returns:** `void`

---

#### `deleteVsanTraceObject`


**Returns:** `void`

---

#### `getIOTripAnalyzerSchedulerConfig`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `VsanVsanIOTripAnalyzerConfig`

---

#### `vsanGetThresholds`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `String` |  |
| `arg2` | `String` |  |

**Returns:** `Array/VsanVsanDiagnosticsThreshold`

---

#### `queryIODiagnosticsStats`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |
| `arg1` | `VsanManagedObjectReference` |  |

**Returns:** `Array/VsanVsanIODiagnosticsTargetStats`

---

#### `vsanSetThresholds`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Array/VsanVsanDiagnosticsThreshold` |  |

**Returns:** `void`

---

#### `startIODiagnosticsTask`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/VsanVsanIODiagnosticsTarget` |  |
| `arg1` | `VsanManagedObjectReference` |  |
| `arg2` | `Number` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `removeIOTripAnalyzerRecurrences`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Array/String` |  |

**Returns:** `void`

---

#### `queryIODiagnosticsInstances`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVsanIODiagnosticsInstanceQuerySpec` |  |
| `arg1` | `VsanManagedObjectReference` |  |

**Returns:** `Array/VsanVsanIODiagnosticsInstance`

---

#### `runIODiagnosticsPrecheck`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/VsanVsanIODiagnosticsTarget` |  |
| `arg1` | `VsanManagedObjectReference` |  |

**Returns:** `VsanVsanIODiagnosticsPrecheckResult`

---

#### `isDefaultTraceLogLocationSelected`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `Boolean`

---

#### `stopVsanIODiagnostics`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Boolean` |  |

**Returns:** `void`

---

#### `vsanQueryTraceObjectInformation`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `VsanVsanObjectInformation`

---

## VsanVsanDiagnosticsThreshold

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `red` |  | `Number` | No |
| `metric` |  | `String` | No |
| `entityType` |  | `String` | No |
| `yellow` |  | `Number` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanDirectoryServerConfig

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |

## VsanVsanDisallowDataMovementIssue

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `msg` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanDisallowEvacuateDataIssue

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `msg` |  | `String` | No |
| `hosts` |  | `Array/VsanManagedObjectReference` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanDiskBalanceState

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `proactiverebalancefailed` |  | `VsanVsanDiskBalanceState` | Yes |
| `rebalanceoff` |  | `VsanVsanDiskBalanceState` | Yes |
| `imbalancewithintolerance` |  | `VsanVsanDiskBalanceState` | Yes |
| `proactiveneededbutdisabled` |  | `VsanVsanDiskBalanceState` | Yes |
| `reactiverebalanceinprogress` |  | `VsanVsanDiskBalanceState` | Yes |
| `reactiverebalancefailed` |  | `VsanVsanDiskBalanceState` | Yes |
| `proactivenotmustdo` |  | `VsanVsanDiskBalanceState` | Yes |
| `rebalancediskunhealthy` |  | `VsanVsanDiskBalanceState` | Yes |
| `VsanDiskBalanceState_Unknown` |  | `VsanVsanDiskBalanceState` | Yes |
| `rebalanceentitydecom` |  | `VsanVsanDiskBalanceState` | Yes |
| `proactiverebalanceinprogress` |  | `VsanVsanDiskBalanceState` | Yes |

## VsanVsanDiskCompatibilityType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `diskGroup` |  | `VsanVsanDiskCompatibilityType` | Yes |
| `VsanDiskCompatibilityType_Unknown` |  | `VsanVsanDiskCompatibilityType` | Yes |
| `singleTier` |  | `VsanVsanDiskCompatibilityType` | Yes |

## VsanVsanDiskDataEvacuationResourceCheckTaskDetails

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `task` |  | `VsanManagedObjectReference` | No |
| `diskUuid` |  | `String` | No |
| `hostUuid` |  | `String` | No |
| `host` |  | `VsanManagedObjectReference` | No |
| `isCapacityTier` |  | `Boolean` | No |
| `dynamicType` |  | `String` | No |
| `maintenanceSpec` |  | `VsanHostMaintenanceSpec` | No |

### Methods

#### `VsanVsanDiskDataEvacuationResourceCheckTaskDetails`


**Returns:** `void`

---

#### `VsanVsanDiskDataEvacuationResourceCheckTaskDetails`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `task` | `VsanManagedObjectReference` |  |
| `host` | `VsanManagedObjectReference` |  |
| `hostUuid` | `String` |  |
| `maintenanceSpec` | `VsanHostMaintenanceSpec` |  |
| `diskUuid` | `String` |  |
| `isCapacityTier` | `Boolean` |  |

**Returns:** `void`

---

#### `isIsCapacityTier`


**Returns:** `Boolean`

---

## VsanVsanDiskEncryptionHealth

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `encryptionIssues` |  | `Array/String` | No |
| `diskHealth` |  | `VsanVsanPhysicalDiskHealth` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanDiskFormatConversionCheckResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `storagePoolDisk` |  | `String` | No |
| `diskMappingToRestore` |  | `VsanVsanHostDiskMapping` | No |
| `isSupported` |  | `Boolean` | No |
| `dynamicType` |  | `String` | No |
| `targetVersion` |  | `Number` | No |
| `isDataMovementRequired` |  | `Boolean` | No |

### Methods

#### `VsanVsanDiskFormatConversionCheckResult`


**Returns:** `void`

---

#### `isIsDataMovementRequired`


**Returns:** `Boolean`

---

## VsanVsanDiskFormatConversionSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `allowDataMovement` |  | `Boolean` | No |
| `dataEfficiencyConfig` |  | `VsanVsanDataEfficiencyConfig` | No |
| `skipHostRemediation` |  | `Boolean` | No |
| `dataEncryptionConfig` |  | `VsanVsanDataEncryptionConfig` | No |
| `dynamicType` |  | `String` | No |

### Methods

#### `VsanVsanDiskFormatConversionSpec`


**Returns:** `void`

---

#### `VsanVsanDiskFormatConversionSpec`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `dataEfficiencyConfig` | `VsanVsanDataEfficiencyConfig` |  |
| `dataEncryptionConfig` | `VsanVsanDataEncryptionConfig` |  |
| `skipHostRemediation` | `Boolean` |  |
| `allowDataMovement` | `Boolean` |  |

**Returns:** `void`

---

#### `isAllowDataMovement`


**Returns:** `Boolean`

---

#### `isSkipHostRemediation`


**Returns:** `Boolean`

---

## VsanVsanDiskgroupCapability

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `supportLargerThan16TB` |  | `VsanVsanDiskgroupCapability` | Yes |
| `VsanDiskgroupCapability_Unknown` |  | `VsanVsanDiskgroupCapability` | Yes |

## VsanVsanDiskGroupResourceCheckResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `capacityTierDisks` |  | `Array/VsanVsanDiskResourceCheckResult` | No |
| `components` |  | `Number` | No |
| `usedCapacity` |  | `Number` | No |
| `maxComponents` |  | `Number` | No |
| `isNew` |  | `Boolean` | No |
| `postOperationCapacity` |  | `Number` | No |
| `dynamicType` |  | `String` | No |
| `uuid` |  | `String` | No |
| `capacity` |  | `Number` | No |
| `cacheTierDisk` |  | `VsanVsanDiskResourceCheckResult` | No |
| `name` |  | `String` | No |
| `postOperationUsedCapacity` |  | `Number` | No |
| `additionalRequiredCapacity` |  | `Number` | No |

### Methods

#### `VsanVsanDiskGroupResourceCheckResult`


**Returns:** `void`

---

#### `VsanVsanDiskGroupResourceCheckResult`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `String` |  |
| `uuid` | `String` |  |
| `isNew` | `Boolean` |  |
| `capacity` | `Number` |  |
| `postOperationCapacity` | `Number` |  |
| `usedCapacity` | `Number` |  |
| `postOperationUsedCapacity` | `Number` |  |
| `additionalRequiredCapacity` | `Number` |  |
| `maxComponents` | `Number` |  |
| `components` | `Number` |  |
| `cacheTierDisk` | `VsanVsanDiskResourceCheckResult` |  |
| `capacityTierDisks` | `Array/VsanVsanDiskResourceCheckResult` |  |

**Returns:** `void`

---

#### `isIsNew`


**Returns:** `Boolean`

---

## VsanVsanDiskModelInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `productId` |  | `String` | No |
| `vendor` |  | `String` | No |
| `partNumber` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanDiskRebalanceResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `avgDiskCompUsage` |  | `Number` | No |
| `maxDiskCompUsage` |  | `Number` | No |
| `avgDiskUsage` |  | `Number` | No |
| `maxDiskUsage` |  | `Number` | No |
| `minDiskCompUsage` |  | `Number` | No |
| `bytesMoving` |  | `Number` | No |
| `remainingBytesToMove` |  | `Number` | No |
| `diskUsage` |  | `Number` | No |
| `diskCompUsage` |  | `Number` | No |
| `dynamicType` |  | `String` | No |
| `minDiskUsage` |  | `Number` | No |
| `status` |  | `String` | No |

## VsanVsanDiskResourceCheckResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `components` |  | `Number` | No |
| `usedCapacity` |  | `Number` | No |
| `name` |  | `String` | No |
| `maxComponents` |  | `Number` | No |
| `postOperationUsedCapacity` |  | `Number` | No |
| `isNew` |  | `Boolean` | No |
| `additionalRequiredCapacity` |  | `Number` | No |
| `postOperationCapacity` |  | `Number` | No |
| `dynamicType` |  | `String` | No |
| `uuid` |  | `String` | No |
| `capacity` |  | `Number` | No |

### Methods

#### `VsanVsanDiskResourceCheckResult`


**Returns:** `void`

---

#### `VsanVsanDiskResourceCheckResult`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `String` |  |
| `uuid` | `String` |  |
| `isNew` | `Boolean` |  |
| `capacity` | `Number` |  |
| `postOperationCapacity` | `Number` |  |
| `usedCapacity` | `Number` |  |
| `postOperationUsedCapacity` | `Number` |  |
| `additionalRequiredCapacity` | `Number` |  |
| `maxComponents` | `Number` |  |
| `components` | `Number` |  |

**Returns:** `void`

---

#### `isIsNew`


**Returns:** `Boolean`

---

## VsanVsanDiskTrimOption

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `VsanDiskTrimOption_Unknown` |  | `VsanVsanDiskTrimOption` | Yes |
| `fullDisk` |  | `VsanVsanDiskTrimOption` | Yes |
| `metaDataOnly` |  | `VsanVsanDiskTrimOption` | Yes |

## VsanVsanDiskType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `diskGroup` |  | `VsanVsanDiskType` | Yes |
| `directDisk` |  | `VsanVsanDiskType` | Yes |
| `VsanDiskType_Unknown` |  | `VsanVsanDiskType` | Yes |
| `storagePool` |  | `VsanVsanDiskType` | Yes |

## VsanVsanDiskUnhealthIssue

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `msg` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `uuids` |  | `Array/String` | No |

## VsanVsanDitEncryptionHealthSummary

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `hostname` |  | `String` | No |
| `ditEncryptionInfo` |  | `VsanVsanInTransitEncryptionInfo` | No |
| `health` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanDownloadItem

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `itemId` |  | `String` | No |
| `sha1sum` |  | `String` | No |
| `formatType` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `url` |  | `String` | No |

## VsanVsanEncryptionHealthSummary

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `encryptionInfo` |  | `VsanVsanHostEncryptionInfo` | No |
| `encryptionIssues` |  | `Array/String` | No |
| `hostname` |  | `String` | No |
| `aesniEnabled` |  | `Boolean` | No |
| `overallKmsHealth` |  | `String` | No |
| `inconsistentlyEncryptedObjectCount` |  | `Number` | No |
| `dekVerifierHealth` |  | `Boolean` | No |
| `kekVerifierHealth` |  | `Boolean` | No |
| `kmsHealth` |  | `Array/VsanVsanKmsHealth` | No |
| `dynamicType` |  | `String` | No |
| `diskResults` |  | `Array/VsanVsanDiskEncryptionHealth` | No |
| `hostEncryptionDekId` |  | `String` | No |

### Methods

#### `VsanVsanEncryptionHealthSummary`


**Returns:** `void`

---

#### `isKekVerifierHealth`


**Returns:** `Boolean`

---

#### `isDekVerifierHealth`


**Returns:** `Boolean`

---

#### `isAesniEnabled`


**Returns:** `Boolean`

---

## VsanVsanEncryptionIssue

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `changingstateinconsistent` |  | `VsanVsanEncryptionIssue` | Yes |
| `erasedisksbeforeuseinconsistent` |  | `VsanVsanEncryptionIssue` | Yes |
| `hostkeynotavailable` |  | `VsanVsanEncryptionIssue` | Yes |
| `hostencryptiondekidinconsistent` |  | `VsanVsanEncryptionIssue` | Yes |
| `keyencryptionkeyinconsistent` |  | `VsanVsanEncryptionIssue` | Yes |
| `diskhaswrongpendingdekid` |  | `VsanVsanEncryptionIssue` | Yes |
| `enabledwhenclusterdisabled` |  | `VsanVsanEncryptionIssue` | Yes |
| `objectencryptioninconsistent` |  | `VsanVsanEncryptionIssue` | Yes |
| `clientcertificateinconsistent` |  | `VsanVsanEncryptionIssue` | Yes |
| `changingstatenotfinished` |  | `VsanVsanEncryptionIssue` | Yes |
| `hosthaspendingdeeprekey` |  | `VsanVsanEncryptionIssue` | Yes |
| `clientkeyinconsistent` |  | `VsanVsanEncryptionIssue` | Yes |
| `dataencryptionkeyverifierinconsistent` |  | `VsanVsanEncryptionIssue` | Yes |
| `hosthaswrongolddekid` |  | `VsanVsanEncryptionIssue` | Yes |
| `dataencryptionkeyinconsistent` |  | `VsanVsanEncryptionIssue` | Yes |
| `dataencryptionkeyverifierofdiskmetainconsistent` |  | `VsanVsanEncryptionIssue` | Yes |
| `cmkcannotretrieve` |  | `VsanVsanEncryptionIssue` | Yes |
| `keknotavailable` |  | `VsanVsanEncryptionIssue` | Yes |
| `cmknotinenabledstate` |  | `VsanVsanEncryptionIssue` | Yes |
| `VsanEncryptionIssue_Unknown` |  | `VsanVsanEncryptionIssue` | Yes |
| `diskhaspendingdeeprekey` |  | `VsanVsanEncryptionIssue` | Yes |
| `diskhaswrongdekid` |  | `VsanVsanEncryptionIssue` | Yes |
| `kmsinfoinconsistent` |  | `VsanVsanEncryptionIssue` | Yes |
| `hostkeyinconsistent` |  | `VsanVsanEncryptionIssue` | Yes |
| `hosthaswrongdekid` |  | `VsanVsanEncryptionIssue` | Yes |
| `disabledwhenclusterenabled` |  | `VsanVsanEncryptionIssue` | Yes |
| `servercertificatesinconsistent` |  | `VsanVsanEncryptionIssue` | Yes |
| `keyencryptionkeyverifierinconsistent` |  | `VsanVsanEncryptionIssue` | Yes |
| `olddataencryptionkeyinconsistent` |  | `VsanVsanEncryptionIssue` | Yes |

## VsanVsanEncryptionOperation

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `EncryptionOperation_Unknown` |  | `VsanVsanEncryptionOperation` | Yes |
| `enablement` |  | `VsanVsanEncryptionOperation` | Yes |
| `disablement` |  | `VsanVsanEncryptionOperation` | Yes |
| `shallowRekey` |  | `VsanVsanEncryptionOperation` | Yes |
| `deepRekey` |  | `VsanVsanEncryptionOperation` | Yes |

## VsanVsanEncryptionTransitionState

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `preparing` |  | `VsanVsanEncryptionTransitionState` | Yes |
| `EncryptionTransitionState_Unknown` |  | `VsanVsanEncryptionTransitionState` | Yes |
| `settled` |  | `VsanVsanEncryptionTransitionState` | Yes |
| `prepared` |  | `VsanVsanEncryptionTransitionState` | Yes |

## VsanVSANEntityCompatibilityResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `compatible` |  | `Boolean` | No |
| `dynamicType` |  | `String` | No |
| `entity` |  | `VsanManagedObjectReference` | No |

## VsanVsanEntitySpaceUsage

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `efficientCapacity` |  | `VsanVimVsanDataEfficiencyCapacityState` | No |
| `spaceUsageByObjectType` |  | `Array/VsanVsanObjectSpaceSummary` | No |
| `totalCapacityB` |  | `Number` | No |
| `freeCapacityB` |  | `Number` | No |
| `entityId` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanEpicObjectResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `result` |  | `Object` | No |
| `dynamicType` |  | `String` | No |
| `objectId` |  | `String` | No |

## VsanVsanEpicOperationHint

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |
| `operation` |  | `String` | No |
| `objectIds` |  | `Array/String` | No |

## VsanVsanEpicOperationResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `objectResults` |  | `Array/VsanVsanEpicObjectResult` | No |
| `dynamicType` |  | `String` | No |
| `operation` |  | `String` | No |

## VsanVsanEsaConfig

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `hclDiskClaimEnabled` |  | `Boolean` | No |
| `datastoreDefaultPolicySelectionConfig` |  | `VsanVsanDatastoreDefaultPolicySelectionConfig` | No |
| `storagePoolSpecs` |  | `Array/VsanVsanAddStoragePoolDiskSpec` | No |
| `diskConfiguration` |  | `VsanVsanEsaDiskConfiguration` | No |
| `dynamicType` |  | `String` | No |

### Methods

#### `VsanVsanEsaConfig`


**Returns:** `void`

---

#### `VsanVsanEsaConfig`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `storagePoolSpecs` | `Array/VsanVsanAddStoragePoolDiskSpec` |  |
| `hclDiskClaimEnabled` | `Boolean` |  |
| `datastoreDefaultPolicySelectionConfig` | `VsanVsanDatastoreDefaultPolicySelectionConfig` |  |
| `diskConfiguration` | `VsanVsanEsaDiskConfiguration` |  |

**Returns:** `void`

---

#### `isHclDiskClaimEnabled`


**Returns:** `Boolean`

---

## VsanVsanEsaConfigInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `hclDiskClaimEnabled` |  | `Boolean` | No |
| `datastoreDefaultPolicySelectionConfig` |  | `VsanVsanDatastoreDefaultPolicySelectionConfig` | No |
| `diskConfiguration` |  | `VsanVsanEsaDiskConfiguration` | No |
| `dynamicType` |  | `String` | No |
| `capacityConfigured` |  | `Number` | No |

### Methods

#### `VsanVsanEsaConfigInfo`


**Returns:** `void`

---

#### `VsanVsanEsaConfigInfo`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `hclDiskClaimEnabled` | `Boolean` |  |
| `datastoreDefaultPolicySelectionConfig` | `VsanVsanDatastoreDefaultPolicySelectionConfig` |  |
| `diskConfiguration` | `VsanVsanEsaDiskConfiguration` |  |
| `capacityConfigured` | `Number` |  |

**Returns:** `void`

---

#### `isHclDiskClaimEnabled`


**Returns:** `Boolean`

---

## VsanVimVsanVsanESAConversionPrecheckType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `VsanESAConvPrecheckType_unknown` |  | `VsanVimVsanVsanESAConversionPrecheckType` | Yes |
| `inaccessibleObjects` |  | `VsanVimVsanVsanESAConversionPrecheckType` | Yes |

## VsanVsanESAConversionPolicyMapping

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `originalProfileId` |  | `String` | No |
| `policyType` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanESAConversionPolicyType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `Policy_Unknown` |  | `VsanVsanESAConversionPolicyType` | Yes |
| `Policy_Default` |  | `VsanVsanESAConversionPolicyType` | Yes |
| `Policy_Optimal` |  | `VsanVsanESAConversionPolicyType` | Yes |

## VsanVsanEsaConversionPrecheckItem

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `type` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `status` |  | `String` | No |

## VsanVsanESAConversionPrecheckResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `raidOverheadAfterConversion` |  | `Number` | No |
| `capUsageWithoutRaidOverhead` |  | `Number` | No |
| `preCheckResult` |  | `Array/VsanVsanEsaConversionPrecheckItem` | No |
| `faultDomains` |  | `Array/VsanVsanFaultDomainResourceCheckResult` | No |
| `dataToMove` |  | `Number` | No |
| `dynamicType` |  | `String` | No |
| `objCannotConvertToZdomList` |  | `Array/String` | No |
| `recommendedSubFailuresToTolerate` |  | `Number` | No |
| `objWithDedupDatastoreList` |  | `Array/String` | No |
| `recommendedReplicaPreference` |  | `String` | No |
| `hostLocalObjList` |  | `Array/String` | No |
| `recommendedHostFailuresToTolerate` |  | `Number` | No |
| `raidOverheadBeforeConversion` |  | `Number` | No |
| `status` |  | `String` | No |
| `timestamp` |  | `Date` | No |

## VsanVsanESAConversionPrecheckSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `hostResourceConfig` |  | `VsanVsanHostResourceConfigSpec` | No |
| `parent` |  | `VsanManagedObjectReference` | No |
| `defaultPolicy` |  | `String` | No |
| `policyMapping` |  | `Array/VsanVsanESAConversionPolicyMapping` | No |
| `capacityUsageThreshold` |  | `Number` | No |
| `useCacheDisk` |  | `Boolean` | No |
| `allowReducedRedundency` |  | `Boolean` | No |
| `witnessHost` |  | `VsanManagedObjectReference` | No |
| `hostToRemove` |  | `Array/VsanManagedObjectReference` | No |
| `dynamicType` |  | `String` | No |

### Methods

#### `VsanVsanESAConversionPrecheckSpec`


**Returns:** `void`

---

#### `VsanVsanESAConversionPrecheckSpec`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `allowReducedRedundency` | `Boolean` |  |
| `witnessHost` | `VsanManagedObjectReference` |  |
| `hostToRemove` | `Array/VsanManagedObjectReference` |  |
| `capacityUsageThreshold` | `Number` |  |
| `useCacheDisk` | `Boolean` |  |
| `defaultPolicy` | `String` |  |
| `policyMapping` | `Array/VsanVsanESAConversionPolicyMapping` |  |
| `hostResourceConfig` | `VsanVsanHostResourceConfigSpec` |  |
| `parent` | `VsanManagedObjectReference` |  |

**Returns:** `void`

---

#### `isAllowReducedRedundency`


**Returns:** `Boolean`

---

#### `isUseCacheDisk`


**Returns:** `Boolean`

---

## VsanVsanESAConversionPrecheckSpecForHost

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `hostResourceConfig` |  | `VsanVsanHostResourceConfigSpec` | No |
| `parent` |  | `VsanManagedObjectReference` | No |
| `defaultPolicy` |  | `String` | No |
| `policyMapping` |  | `Array/VsanVsanESAConversionPolicyMapping` | No |
| `hostsToRemove` |  | `Array/String` | No |
| `capacityUsageThreshold` |  | `Number` | No |
| `useCacheDisk` |  | `Boolean` | No |
| `allowReducedRedundency` |  | `Boolean` | No |
| `witnessHost` |  | `VsanManagedObjectReference` | No |
| `hostToRemove` |  | `Array/VsanManagedObjectReference` | No |
| `dynamicType` |  | `String` | No |

### Methods

#### `VsanVsanESAConversionPrecheckSpecForHost`


**Returns:** `void`

---

#### `VsanVsanESAConversionPrecheckSpecForHost`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `allowReducedRedundency` | `Boolean` |  |
| `witnessHost` | `VsanManagedObjectReference` |  |
| `hostToRemove` | `Array/VsanManagedObjectReference` |  |
| `capacityUsageThreshold` | `Number` |  |
| `useCacheDisk` | `Boolean` |  |
| `defaultPolicy` | `String` |  |
| `policyMapping` | `Array/VsanVsanESAConversionPolicyMapping` |  |
| `hostResourceConfig` | `VsanVsanHostResourceConfigSpec` |  |
| `parent` | `VsanManagedObjectReference` |  |
| `hostsToRemove` | `Array/String` |  |

**Returns:** `void`

---

#### `isAllowReducedRedundency`


**Returns:** `Boolean`

---

#### `isUseCacheDisk`


**Returns:** `Boolean`

---

## VsanVsanESAConversionPrecheckStatus

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `result` |  | `VsanVsanESAConversionPrecheckResult` | No |
| `task` |  | `VsanManagedObjectReference` | No |
| `parentTask` |  | `VsanManagedObjectReference` | No |
| `dynamicType` |  | `String` | No |
| `status` |  | `String` | No |

## VsanVsanESAConversionSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `defaultPolicy` |  | `String` | No |
| `policyMapping` |  | `Array/VsanVsanESAConversionPolicyMapping` | No |
| `capacityUsageThreshold` |  | `Number` | No |
| `useCacheDisk` |  | `Boolean` | No |
| `allowReducedRedundency` |  | `Boolean` | No |
| `witnessHost` |  | `VsanManagedObjectReference` | No |
| `hostToRemove` |  | `Array/VsanManagedObjectReference` | No |
| `dynamicType` |  | `String` | No |

### Methods

#### `VsanVsanESAConversionSpec`


**Returns:** `void`

---

#### `VsanVsanESAConversionSpec`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `allowReducedRedundency` | `Boolean` |  |
| `witnessHost` | `VsanManagedObjectReference` |  |
| `hostToRemove` | `Array/VsanManagedObjectReference` |  |
| `capacityUsageThreshold` | `Number` |  |
| `useCacheDisk` | `Boolean` |  |
| `defaultPolicy` | `String` |  |
| `policyMapping` | `Array/VsanVsanESAConversionPolicyMapping` |  |

**Returns:** `void`

---

#### `isAllowReducedRedundency`


**Returns:** `Boolean`

---

#### `isUseCacheDisk`


**Returns:** `Boolean`

---

## VsanVsanESAConversionSpecForHost

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `defaultPolicy` |  | `String` | No |
| `policyMapping` |  | `Array/VsanVsanESAConversionPolicyMapping` | No |
| `capacityUsageThreshold` |  | `Number` | No |
| `useCacheDisk` |  | `Boolean` | No |
| `allowReducedRedundency` |  | `Boolean` | No |
| `hostToRemove` |  | `Array/String` | No |
| `dynamicType` |  | `String` | No |

### Methods

#### `VsanVsanESAConversionSpecForHost`


**Returns:** `void`

---

#### `VsanVsanESAConversionSpecForHost`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `allowReducedRedundency` | `Boolean` |  |
| `defaultPolicy` | `String` |  |
| `policyMapping` | `Array/VsanVsanESAConversionPolicyMapping` |  |
| `hostToRemove` | `Array/String` |  |
| `capacityUsageThreshold` | `Number` |  |
| `useCacheDisk` | `Boolean` |  |

**Returns:** `void`

---

#### `isAllowReducedRedundency`


**Returns:** `Boolean`

---

#### `isUseCacheDisk`


**Returns:** `Boolean`

---

## VsanVsanEsaConversionStatus

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `suspend` |  | `VsanVsanEsaConversionStatus` | Yes |
| `inProgress` |  | `VsanVsanEsaConversionStatus` | Yes |
| `Status_Unknown` |  | `VsanVsanEsaConversionStatus` | Yes |
| `none` |  | `VsanVsanEsaConversionStatus` | Yes |
| `complete` |  | `VsanVsanEsaConversionStatus` | Yes |

## VsanVsanEsaDiskConfiguration

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `diskClaimConfiguration` |  | `Array/VsanDiskClaimConfiguration` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanExtendedConfig

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `objectRepairTimer` |  | `Number` | No |
| `disableSiteReadLocality` |  | `Boolean` | No |
| `enableCustomizedSwapObject` |  | `Boolean` | No |
| `proactiveRebalanceInfo` |  | `VsanVsanProactiveRebalanceInfo` | No |
| `capacityReservationInfo` |  | `VsanVsanCapacityReservationInfo` | No |
| `largeScaleClusterSupport` |  | `Boolean` | No |
| `dynamicType` |  | `String` | No |

### Methods

#### `VsanVsanExtendedConfig`


**Returns:** `void`

---

#### `VsanVsanExtendedConfig`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `objectRepairTimer` | `Number` |  |
| `disableSiteReadLocality` | `Boolean` |  |
| `enableCustomizedSwapObject` | `Boolean` |  |
| `largeScaleClusterSupport` | `Boolean` |  |
| `proactiveRebalanceInfo` | `VsanVsanProactiveRebalanceInfo` |  |
| `capacityReservationInfo` | `VsanVsanCapacityReservationInfo` |  |

**Returns:** `void`

---

#### `isDisableSiteReadLocality`


**Returns:** `Boolean`

---

#### `isEnableCustomizedSwapObject`


**Returns:** `Boolean`

---

#### `isLargeScaleClusterSupport`


**Returns:** `Boolean`

---

## VsanVsanFailedRepairObjectResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |
| `uuid` |  | `String` | No |
| `errMessage` |  | `String` | No |

## VsanVsanFaultDomainResourceCheckResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `components` |  | `Number` | No |
| `hosts` |  | `Array/VsanVsanHostResourceCheckResult` | No |
| `usedCapacity` |  | `Number` | No |
| `name` |  | `String` | No |
| `maxComponents` |  | `Number` | No |
| `postOperationUsedCapacity` |  | `Number` | No |
| `isNew` |  | `Boolean` | No |
| `additionalRequiredCapacity` |  | `Number` | No |
| `postOperationCapacity` |  | `Number` | No |
| `dynamicType` |  | `String` | No |
| `uuid` |  | `String` | No |
| `capacity` |  | `Number` | No |

### Methods

#### `VsanVsanFaultDomainResourceCheckResult`


**Returns:** `void`

---

#### `VsanVsanFaultDomainResourceCheckResult`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `String` |  |
| `uuid` | `String` |  |
| `isNew` | `Boolean` |  |
| `capacity` | `Number` |  |
| `postOperationCapacity` | `Number` |  |
| `usedCapacity` | `Number` |  |
| `postOperationUsedCapacity` | `Number` |  |
| `additionalRequiredCapacity` | `Number` |  |
| `maxComponents` | `Number` |  |
| `components` | `Number` |  |
| `hosts` | `Array/VsanVsanHostResourceCheckResult` |  |

**Returns:** `void`

---

#### `isIsNew`


**Returns:** `Boolean`

---

## VsanVsanFileProtocol

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `NFSv3` |  | `VsanVsanFileProtocol` | Yes |
| `NFSv4` |  | `VsanVsanFileProtocol` | Yes |
| `SMB` |  | `VsanVsanFileProtocol` | Yes |
| `FileShareProtocol_Unknown` |  | `VsanVsanFileProtocol` | Yes |

## VsanVsanFileServerConfigCheckResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |

## VsanVsanFileServerHealthSummary

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `adTestJoinHealth` |  | `String` | No |
| `networkHealth` |  | `String` | No |
| `rootfsHealth` |  | `String` | No |
| `nfsdHealth` |  | `String` | No |
| `domainName` |  | `String` | No |
| `fileServerIp` |  | `String` | No |
| `description` |  | `String` | No |
| `dnsLookupHealth` |  | `String` | No |
| `smbConnections` |  | `Number` | No |
| `dynamicType` |  | `String` | No |
| `smbDaemonHealth` |  | `String` | No |

## VsanVsanFileServiceAdvancedConfig

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `ditEnabled` |  | `Boolean` | No |
| `dynamicType` |  | `String` | No |

### Methods

#### `VsanVsanFileServiceAdvancedConfig`


**Returns:** `void`

---

#### `VsanVsanFileServiceAdvancedConfig`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `ditEnabled` | `Boolean` |  |

**Returns:** `void`

---

#### `isDitEnabled`


**Returns:** `Boolean`

---

## VsanVsanFileServiceAntiVirusEngineInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `virusDefinitionVersion` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `vendorName` |  | `String` | No |

## VsanVsanFileServiceAntiVirusFileScanResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `threatId` |  | `String` | No |
| `threatType` |  | `String` | No |
| `filePath` |  | `String` | No |
| `threatName` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanFileServiceAntiVirusScanResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `scanCompletionTime` |  | `Date` | No |
| `scanStatus` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `numFilesScanned` |  | `Number` | No |
| `shareUuid` |  | `String` | No |
| `numInfectedFiles` |  | `Number` | No |
| `scanEngineInfo` |  | `VsanVsanFileServiceAntiVirusEngineInfo` | No |
| `infectedFiles` |  | `Array/VsanVsanFileServiceAntiVirusFileScanResult` | No |
| `progress` |  | `Number` | No |
| `numSkippedFiles` |  | `Number` | No |
| `totalFiles` |  | `Number` | No |
| `totalScanSize` |  | `Number` | No |
| `scanStartTime` |  | `Date` | No |

## VsanVsanFileServiceBalanceHealth

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `health` |  | `String` | No |
| `description` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanFileServiceConfig

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `fileServerCPUMhz` |  | `Number` | No |
| `fsvmMemoryMB` |  | `Number` | No |
| `domains` |  | `Array/VsanVsanFileServiceDomainConfig` | No |
| `fileAnalyticsEnabled` |  | `Boolean` | No |
| `dynamicType` |  | `String` | No |
| `fsvmCPU` |  | `Number` | No |
| `fileServerMemoryMB` |  | `Number` | No |
| `enabled` |  | `Boolean` | No |
| `network` |  | `VsanManagedObjectReference` | No |

### Methods

#### `VsanVsanFileServiceConfig`


**Returns:** `void`

---

#### `VsanVsanFileServiceConfig`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `enabled` | `Boolean` |  |
| `fileServerMemoryMB` | `Number` |  |
| `fileServerCPUMhz` | `Number` |  |
| `fsvmMemoryMB` | `Number` |  |
| `fsvmCPU` | `Number` |  |
| `network` | `VsanManagedObjectReference` |  |
| `domains` | `Array/VsanVsanFileServiceDomainConfig` |  |
| `fileAnalyticsEnabled` | `Boolean` |  |

**Returns:** `void`

---

#### `isFileAnalyticsEnabled`


**Returns:** `Boolean`

---

## VsanVsanFileServiceConfigFormatSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `operationList` |  | `Array/String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanFileServiceConfigOpType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `FileServiceConfigOpType_Unknown` |  | `VsanVsanFileServiceConfigOpType` | Yes |
| `CleanAffinityLocation` |  | `VsanVsanFileServiceConfigOpType` | Yes |

## VsanVsanFileServiceDomain

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |
| `uuid` |  | `String` | No |
| `config` |  | `VsanVsanFileServiceDomainConfig` | No |

## VsanVsanFileServiceDomainConfig

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dnsSuffixes` |  | `Array/String` | No |
| `directoryServerConfig` |  | `VsanVsanDirectoryServerConfig` | No |
| `fileServerIpConfig` |  | `Array/VsanVsanFileServiceIpConfig` | No |
| `dnsServerAddresses` |  | `Array/String` | No |
| `name` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `version` |  | `String` | No |
| `antiVirusConfig` |  | `VsanFileServiceAntiVirusConfig` | No |

## VsanVsanFileServiceDomainQuerySpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `names` |  | `Array/String` | No |
| `dynamicType` |  | `String` | No |
| `uuids` |  | `Array/String` | No |

## VsanVsanFileServiceEndpointController

### Methods

#### `_getRef`


**Returns:** `VsanManagedObjectReference`

---

#### `vsanEpicUpdateOperationResult`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVsanEpicOperationResult` |  |

**Returns:** `void`

---

#### `vsanEpicNotifyHostOperation`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVsanEpicOperationHint` |  |

**Returns:** `Object`

---

## VsanVsanFileServiceHealthSummary

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `rootFsStatus` |  | `VsanVsanFileServiceRootFsHealth` | No |
| `overallHealth` |  | `String` | No |
| `hostname` |  | `String` | No |
| `fileServerHealth` |  | `Array/VsanVsanFileServerHealthSummary` | No |
| `fsvmStatus` |  | `VsanVsanResourceHealth` | No |
| `hostLoadStatus` |  | `VsanVsanResourceHealth` | No |
| `balanceStatus` |  | `VsanVsanFileServiceBalanceHealth` | No |
| `dynamicType` |  | `String` | No |
| `vdfsdStatus` |  | `VsanVsanResourceHealth` | No |
| `enabled` |  | `Boolean` | No |
| `fileShareHealth` |  | `Array/VsanVsanFileServiceShareHealthSummary` | No |

### Methods

#### `VsanVsanFileServiceHealthSummary`


**Returns:** `void`

---

#### `VsanVsanFileServiceHealthSummary`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `hostname` | `String` |  |
| `overallHealth` | `String` |  |
| `enabled` | `Boolean` |  |
| `vdfsdStatus` | `VsanVsanResourceHealth` |  |
| `fsvmStatus` | `VsanVsanResourceHealth` |  |
| `rootFsStatus` | `VsanVsanFileServiceRootFsHealth` |  |
| `fileServerHealth` | `Array/VsanVsanFileServerHealthSummary` |  |
| `fileShareHealth` | `Array/VsanVsanFileServiceShareHealthSummary` |  |
| `balanceStatus` | `VsanVsanFileServiceBalanceHealth` |  |
| `hostLoadStatus` | `VsanVsanResourceHealth` |  |

**Returns:** `void`

---

#### `isEnabled`


**Returns:** `Boolean`

---

## VsanVsanFileServiceIpConfig

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `ipv6Gateway` |  | `String` | No |
| `affinityLocation` |  | `String` | No |
| `fqdn` |  | `String` | No |
| `isPrimary` |  | `Boolean` | No |
| `ipAddress` |  | `String` | No |
| `subnetMask` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `dhcp` |  | `Boolean` | No |
| `gateway` |  | `String` | No |

### Methods

#### `VsanVsanFileServiceIpConfig`


**Returns:** `void`

---

#### `isIsPrimary`


**Returns:** `Boolean`

---

## VsanVsanFileServiceLastFailureDomainConfigAndResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `result` |  | `String` | No |
| `domainConfig` |  | `VsanVsanFileServiceDomainConfig` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanFileServiceOvfSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `task` |  | `VsanManagedObjectReference` | No |
| `updateTime` |  | `Date` | No |
| `dynamicType` |  | `String` | No |
| `version` |  | `String` | No |

## VsanVsanFileServicePreflightCheckResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `vsanDatastoreIssue` |  | `String` | No |
| `fsvmVersion` |  | `String` | No |
| `vssConfigIssue` |  | `String` | No |
| `domainConfigWarning` |  | `String` | No |
| `hostVersion` |  | `String` | No |
| `dvsConfigIssue` |  | `String` | No |
| `networkPartitionIssue` |  | `String` | No |
| `mixedModeIssue` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `lastUpgradeDate` |  | `Date` | No |
| `ntpConfigWarning` |  | `String` | No |
| `domainConfigIssue` |  | `String` | No |
| `ovfMixedModeIssue` |  | `String` | No |
| `ovfInstalled` |  | `String` | No |
| `fileServiceVersion` |  | `String` | No |

## VsanVsanFileServicePreflightCheckScope

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `advanced` |  | `VsanVsanFileServicePreflightCheckScope` | Yes |
| `basic` |  | `VsanVsanFileServicePreflightCheckScope` | Yes |
| `FileServicePreflightCheckScope_Unknown` |  | `VsanVsanFileServicePreflightCheckScope` | Yes |

## VsanVsanFileServiceRootFsHealth

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `created` |  | `Boolean` | No |
| `health` |  | `String` | No |
| `description` |  | `String` | No |
| `dynamicType` |  | `String` | No |

### Methods

#### `VsanVsanFileServiceRootFsHealth`


**Returns:** `void`

---

#### `VsanVsanFileServiceRootFsHealth`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `created` | `Boolean` |  |
| `health` | `String` |  |
| `description` | `String` |  |

**Returns:** `void`

---

#### `isCreated`


**Returns:** `Boolean`

---

## VsanVsanFileServiceShareHealthSummary

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `overallHealth` |  | `String` | No |
| `objectHealth` |  | `VsanVsanObjectOverallHealth` | No |
| `domainName` |  | `String` | No |
| `description` |  | `String` | No |
| `shareName` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `extensible` |  | `Boolean` | No |
| `shareUuid` |  | `String` | No |

### Methods

#### `VsanVsanFileServiceShareHealthSummary`


**Returns:** `void`

---

#### `VsanVsanFileServiceShareHealthSummary`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `overallHealth` | `String` |  |
| `domainName` | `String` |  |
| `shareUuid` | `String` |  |
| `shareName` | `String` |  |
| `objectHealth` | `VsanVsanObjectOverallHealth` |  |
| `description` | `String` |  |
| `extensible` | `Boolean` |  |

**Returns:** `void`

---

#### `isExtensible`


**Returns:** `Boolean`

---

## VsanVsanFileServiceSystem

### Methods

#### `vsanClusterCreateShareSnapshot`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVsanFileShareSnapshotConfig` |  |
| `arg1` | `VsanManagedObjectReference` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vsanRemediateFileService`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVsanFileServiceConfig` |  |
| `arg1` | `Boolean` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vsanClusterCreateFsDomain`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVsanFileServiceDomainConfig` |  |
| `arg1` | `VsanManagedObjectReference` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `_getRef`


**Returns:** `VsanManagedObjectReference`

---

#### `vsanFileServiceStartAntiVirusScan`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `String` |  |
| `arg2` | `String` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vsanClusterReconfigureFsDomain`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |
| `arg1` | `VsanVsanFileServiceDomainConfig` |  |
| `arg2` | `VsanManagedObjectReference` |  |
| `arg3` | `Array/String` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vsanQueryFileServiceOvfs`


**Returns:** `Array/VsanVsanFileServiceOvfSpec`

---

#### `vsanClusterRemoveShareSnapshot`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |
| `arg1` | `String` |  |
| `arg2` | `VsanManagedObjectReference` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vsanDownloadFileServiceOvf`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vsanClusterRemoveShare`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |
| `arg1` | `VsanManagedObjectReference` |  |
| `arg2` | `Boolean` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `getLastFailureDomainConfig`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `VsanVsanFileServiceLastFailureDomainConfigAndResult`

---

#### `vsanPerformFileServiceEnablePreflightCheck`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `VsanVsanFileServiceDomainConfig` |  |
| `arg2` | `VsanManagedObjectReference` |  |
| `arg3` | `String` |  |
| `arg4` | `String` |  |

**Returns:** `VsanVsanFileServicePreflightCheckResult`

---

#### `performDomainConfigAdvancedCheck`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `VsanVsanFileServiceDomainConfig` |  |
| `arg2` | `String` |  |

**Returns:** `VsanVsanFileServerConfigCheckResult`

---

#### `vsanUpgradeFsvm`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vsanGetOvfUrlThumbprint`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |
| `arg1` | `Boolean` |  |

**Returns:** `String`

---

#### `vsanClusterQueryFileShares`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVsanFileShareQuerySpec` |  |
| `arg1` | `VsanManagedObjectReference` |  |

**Returns:** `VsanFileShareQueryResult`

---

#### `vsanRebalanceFileService`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vsanFileServiceConvertConfigFormat`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |
| `arg1` | `VsanVsanFileServiceConfigFormatSpec` |  |
| `arg2` | `VsanManagedObjectReference` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vsanClusterRemoveFsDomain`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |
| `arg1` | `VsanManagedObjectReference` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vsanQueryFileServiceConfigs`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/String` |  |
| `arg1` | `VsanManagedObjectReference` |  |

**Returns:** `String`

---

#### `vsanFileServiceReconfigureAdvancedOptions`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVsanFileServiceAdvancedConfig` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vsanClusterQueryShareSnapshots`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVsanFileShareSnapshotQuerySpec` |  |
| `arg1` | `VsanManagedObjectReference` |  |

**Returns:** `VsanVsanFileShareSnapshotQueryResult`

---

#### `vsanCreateFileShare`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVsanFileShareConfig` |  |
| `arg1` | `VsanManagedObjectReference` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vsanFileServicePublishFsvmStatus`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |

**Returns:** `Boolean`

---

#### `vsanFindOvfDownloadUrl`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `String`

---

#### `vsanQueryDnsNamesFromIps`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/String` |  |
| `arg1` | `Array/String` |  |

**Returns:** `Array/String`

---

#### `vsanFileServiceCheckFileServerBalance`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `String`

---

#### `vsanReconfigureFileShare`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |
| `arg1` | `VsanVsanFileShareConfig` |  |
| `arg2` | `VsanManagedObjectReference` |  |
| `arg3` | `Array/String` |  |
| `arg4` | `Boolean` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vsanClusterQueryFileSharesInternal`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVsanFileShareQuerySpec` |  |
| `arg1` | `VsanManagedObjectReference` |  |

**Returns:** `VsanFileShareQueryResult`

---

#### `vsanFileServiceQueryAntiVirusScan`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `VsanVsanFileShareAntiVirusScanQuerySpec` |  |

**Returns:** `Array/VsanVsanFileServiceAntiVirusScanResult`

---

#### `vsanFileServiceQueryFsvmUpgradeStatus`


**Returns:** `Boolean`

---

#### `vsanClusterQueryFsDomains`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVsanFileServiceDomainQuerySpec` |  |
| `arg1` | `VsanManagedObjectReference` |  |

**Returns:** `Array/VsanVsanFileServiceDomain`

---

## VsanVsanFileServiceVMStatus

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `running` |  | `VsanVsanFileServiceVMStatus` | Yes |
| `upgrading` |  | `VsanVsanFileServiceVMStatus` | Yes |
| `FileServiceVMStatus_Unknown` |  | `VsanVsanFileServiceVMStatus` | Yes |

## VsanVsanFileShare

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `runtime` |  | `VsanVsanFileShareRuntimeInfo` | No |
| `dynamicType` |  | `String` | No |
| `config` |  | `VsanVsanFileShareConfig` | No |
| `uuid` |  | `String` | No |

## VsanVsanFileShareAccessType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `NO_ACCESS` |  | `VsanVsanFileShareAccessType` | Yes |
| `FileShareAccessType_Unknown` |  | `VsanVsanFileShareAccessType` | Yes |
| `READ_ONLY` |  | `VsanVsanFileShareAccessType` | Yes |
| `READ_WRITE` |  | `VsanVsanFileShareAccessType` | Yes |

## VsanVsanFileShareAntiVirusExclusionRules

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |
| `fileTypes` |  | `Array/String` | No |

## VsanVsanFileShareAntiVirusOnAccessScanConfig

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `onAccessScanType` |  | `String` | No |
| `avScanExclusionRules` |  | `VsanVsanFileShareAntiVirusExclusionRules` | No |
| `scanActions` |  | `VsanVsanFileShareAntiVirusScanActionConfig` | No |
| `dynamicType` |  | `String` | No |
| `enabled` |  | `Boolean` | No |

### Methods

#### `VsanVsanFileShareAntiVirusOnAccessScanConfig`


**Returns:** `void`

---

#### `VsanVsanFileShareAntiVirusOnAccessScanConfig`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `enabled` | `Boolean` |  |
| `onAccessScanType` | `String` |  |
| `scanActions` | `VsanVsanFileShareAntiVirusScanActionConfig` |  |
| `avScanExclusionRules` | `VsanVsanFileShareAntiVirusExclusionRules` |  |

**Returns:** `void`

---

#### `isEnabled`


**Returns:** `Boolean`

---

## VsanVsanFileShareAntiVirusOnAccessScanType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `VsanFileShareAntiVirusOnAccessScanType_Unknown` |  | `VsanVsanFileShareAntiVirusOnAccessScanType` | Yes |
| `OnRead` |  | `VsanVsanFileShareAntiVirusOnAccessScanType` | Yes |
| `OnOpen` |  | `VsanVsanFileShareAntiVirusOnAccessScanType` | Yes |
| `OnClose` |  | `VsanVsanFileShareAntiVirusOnAccessScanType` | Yes |

## VsanVsanFileShareAntiVirusOnDemandScanConfig

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `periodicScanHours` |  | `Number` | No |
| `avScanExclusionRules` |  | `VsanVsanFileShareAntiVirusExclusionRules` | No |
| `scanActions` |  | `VsanVsanFileShareAntiVirusScanActionConfig` | No |
| `dynamicType` |  | `String` | No |
| `enabled` |  | `Boolean` | No |

### Methods

#### `VsanVsanFileShareAntiVirusOnDemandScanConfig`


**Returns:** `void`

---

#### `VsanVsanFileShareAntiVirusOnDemandScanConfig`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `enabled` | `Boolean` |  |
| `periodicScanHours` | `Number` |  |
| `scanActions` | `VsanVsanFileShareAntiVirusScanActionConfig` |  |
| `avScanExclusionRules` | `VsanVsanFileShareAntiVirusExclusionRules` |  |

**Returns:** `void`

---

#### `isEnabled`


**Returns:** `Boolean`

---

## VsanVsanFileShareAntiVirusScanActionConfig

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `deleteFileIfInfected` |  | `Boolean` | No |
| `dynamicType` |  | `String` | No |
| `moveToQuarantineIfInfected` |  | `Boolean` | No |
| `quarantineLocation` |  | `String` | No |

### Methods

#### `VsanVsanFileShareAntiVirusScanActionConfig`


**Returns:** `void`

---

#### `VsanVsanFileShareAntiVirusScanActionConfig`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `moveToQuarantineIfInfected` | `Boolean` |  |
| `deleteFileIfInfected` | `Boolean` |  |
| `quarantineLocation` | `String` |  |

**Returns:** `void`

---

#### `isDeleteFileIfInfected`


**Returns:** `Boolean`

---

#### `isMoveToQuarantineIfInfected`


**Returns:** `Boolean`

---

## VsanVsanFileShareAntiVirusScanConfig

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |
| `onDemandScanConfig` |  | `VsanVsanFileShareAntiVirusOnDemandScanConfig` | No |
| `onAccessScanConfig` |  | `VsanVsanFileShareAntiVirusOnAccessScanConfig` | No |

## VsanVsanFileShareAntiVirusScanQuerySpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `names` |  | `Array/String` | No |
| `offset` |  | `Number` | No |
| `domainName` |  | `String` | No |
| `limit` |  | `Number` | No |
| `dynamicType` |  | `String` | No |
| `uuids` |  | `Array/String` | No |

## VsanVsanFileShareAntiVirusScanStatus

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `Complete` |  | `VsanVsanFileShareAntiVirusScanStatus` | Yes |
| `NotScannedYet` |  | `VsanVsanFileShareAntiVirusScanStatus` | Yes |
| `InProgress` |  | `VsanVsanFileShareAntiVirusScanStatus` | Yes |
| `VsanFileShareAntiVirusScanStatus_Unknown` |  | `VsanVsanFileShareAntiVirusScanStatus` | Yes |

## VsanVsanFileShareConfig

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `antiVirusScanConfig` |  | `VsanVsanFileShareAntiVirusScanConfig` | No |
| `nfsSecType` |  | `String` | No |
| `affinityLocation` |  | `String` | No |
| `softQuota` |  | `String` | No |
| `smbOptions` |  | `VsanVsanFileShareSmbOptions` | No |
| `quota` |  | `String` | No |
| `domainName` |  | `String` | No |
| `name` |  | `String` | No |
| `permission` |  | `Array/VsanVsanFileShareNetPermission` | No |
| `storagePolicy` |  | `VsanVirtualMachineProfileSpec` | No |
| `protocols` |  | `Array/String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanFileShareManagingEntity

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `FileShareManagingEntity_Unknown` |  | `VsanVsanFileShareManagingEntity` | Yes |
| `cns` |  | `VsanVsanFileShareManagingEntity` | Yes |
| `user` |  | `VsanVsanFileShareManagingEntity` | Yes |

## VsanVsanFileShareNetPermission

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `allowRoot` |  | `Boolean` | No |
| `permissions` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `ips` |  | `String` | No |

### Methods

#### `VsanVsanFileShareNetPermission`


**Returns:** `void`

---

#### `VsanVsanFileShareNetPermission`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `ips` | `String` |  |
| `permissions` | `String` |  |
| `allowRoot` | `Boolean` |  |

**Returns:** `void`

---

#### `isAllowRoot`


**Returns:** `Boolean`

---

## VsanVsanFileShareNfsSecType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `KRB5P` |  | `VsanVsanFileShareNfsSecType` | Yes |
| `FileShareNfsSecType_Unknown` |  | `VsanVsanFileShareNfsSecType` | Yes |
| `KRB5I` |  | `VsanVsanFileShareNfsSecType` | Yes |
| `KRB5` |  | `VsanVsanFileShareNfsSecType` | Yes |
| `SYS` |  | `VsanVsanFileShareNfsSecType` | Yes |

## VsanVsanFileShareQueryProperties

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `includeAllLabels` |  | `Boolean` | No |
| `labelKeys` |  | `Array/String` | No |
| `includeUsedCapacity` |  | `Boolean` | No |
| `includeVsanObjectUuids` |  | `Boolean` | No |
| `dynamicType` |  | `String` | No |
| `includeBasic` |  | `Boolean` | No |

### Methods

#### `VsanVsanFileShareQueryProperties`


**Returns:** `void`

---

#### `VsanVsanFileShareQueryProperties`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `includeBasic` | `Boolean` |  |
| `includeUsedCapacity` | `Boolean` |  |
| `includeVsanObjectUuids` | `Boolean` |  |
| `includeAllLabels` | `Boolean` |  |
| `labelKeys` | `Array/String` |  |

**Returns:** `void`

---

#### `isIncludeVsanObjectUuids`


**Returns:** `Boolean`

---

#### `isIncludeBasic`


**Returns:** `Boolean`

---

#### `isIncludeUsedCapacity`


**Returns:** `Boolean`

---

#### `isIncludeAllLabels`


**Returns:** `Boolean`

---

## VsanVsanFileShareQuerySpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `names` |  | `Array/String` | No |
| `pageNumber` |  | `Number` | No |
| `offset` |  | `String` | No |
| `managedBy` |  | `Array/String` | No |
| `domainName` |  | `String` | No |
| `limit` |  | `Number` | No |
| `protocols` |  | `Array/String` | No |
| `dynamicType` |  | `String` | No |
| `properties` |  | `VsanVsanFileShareQueryProperties` | No |
| `uuids` |  | `Array/String` | No |

## VsanVsanFileShareRuntimeInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `hostname` |  | `String` | No |
| `address` |  | `String` | No |
| `vsanObjectUuids` |  | `Array/String` | No |
| `managedBy` |  | `String` | No |
| `usedCapacity` |  | `Number` | No |
| `fileServerFQDN` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanFileShareSmbEncryptionType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `FileShareSmbEncryptionType_Unknown` |  | `VsanVsanFileShareSmbEncryptionType` | Yes |
| `disabled` |  | `VsanVsanFileShareSmbEncryptionType` | Yes |
| `mandatory` |  | `VsanVsanFileShareSmbEncryptionType` | Yes |

## VsanVsanFileShareSmbOptions

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `enablePreviousVersion` |  | `Boolean` | No |
| `encryption` |  | `String` | No |
| `accessBasedEnumeration` |  | `Boolean` | No |
| `dynamicType` |  | `String` | No |

### Methods

#### `VsanVsanFileShareSmbOptions`


**Returns:** `void`

---

#### `VsanVsanFileShareSmbOptions`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `encryption` | `String` |  |
| `accessBasedEnumeration` | `Boolean` |  |
| `enablePreviousVersion` | `Boolean` |  |

**Returns:** `void`

---

#### `isAccessBasedEnumeration`


**Returns:** `Boolean`

---

#### `isEnablePreviousVersion`


**Returns:** `Boolean`

---

## VsanVsanFileShareSnapshot

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `creationTime` |  | `Date` | No |
| `usedCapacity` |  | `Number` | No |
| `dynamicType` |  | `String` | No |
| `config` |  | `VsanVsanFileShareSnapshotConfig` | No |

## VsanVsanFileShareSnapshotConfig

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `shareUuid` |  | `String` | No |

## VsanVsanFileShareSnapshotQueryResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `snapshots` |  | `Array/VsanVsanFileShareSnapshot` | No |
| `dynamicType` |  | `String` | No |
| `totalCount` |  | `Number` | No |

## VsanVsanFileShareSnapshotQuerySpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `pageNumber` |  | `Number` | No |
| `snapshotNames` |  | `Array/String` | No |
| `pageSize` |  | `Number` | No |
| `startTime` |  | `Date` | No |
| `endTime` |  | `Date` | No |
| `dynamicType` |  | `String` | No |
| `shareUuid` |  | `String` | No |

## VsanVsanFlrDpMountSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `cgId` |  | `String` | No |
| `cgInstanceKey` |  | `String` | No |
| `entities` |  | `Array/VsanManagedObjectReference` | No |
| `location` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanFlrFileEntry

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `path` |  | `String` | No |
| `volumeId` |  | `String` | No |
| `name` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `directory` |  | `Boolean` | No |
| `parentId` |  | `String` | No |
| `fileId` |  | `String` | No |

## VsanVsanFlrHealthState

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |
| `status` |  | `String` | No |

## VsanVsanFlrLocation

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `VsanFlrMountSpec_Unknown` |  | `VsanVsanFlrLocation` | Yes |
| `archive` |  | `VsanVsanFlrLocation` | Yes |
| `remote` |  | `VsanVsanFlrLocation` | Yes |
| `local` |  | `VsanVsanFlrLocation` | Yes |

## VsanVsanFlrManagedMountSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |
| `snapshot` |  | `VsanManagedObjectReference` | No |

## VsanVsanFlrMountSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |

## VsanVsanFlrQueryFileResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `files` |  | `Array/VsanVsanFlrFileEntry` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanFlrQueryFileSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `volumeId` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `fileId` |  | `String` | No |

## VsanVsanFlrQueryVolumesResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `volumes` |  | `Array/VsanVsanFlrVolume` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanFlrRetrieveFileResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `thumbprint` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `url` |  | `String` | No |

## VsanVsanFlrRetrieveFileSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `volumeId` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `fileId` |  | `String` | No |

## VsanVsanFlrSearchFileSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `nameRegEx` |  | `String` | No |
| `volumeId` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `fileId` |  | `String` | No |

## VsanVsanFlrService

### Methods

#### `vsanFlrServiceCreateSession`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `VsanVsanFlrSessionSpec` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `_getRef`


**Returns:** `VsanManagedObjectReference`

---

#### `vsanFlrServiceDestroySession`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vsanFlrServiceGetState`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `VsanVsanFlrHealthState`

---

## VsanVsanFlrSession

### Methods

#### `_getRef`


**Returns:** `VsanManagedObjectReference`

---

#### `vsanFlrSessionQueryFile`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVsanFlrQueryFileSpec` |  |

**Returns:** `VsanVsanFlrQueryFileResult`

---

#### `vsanFlrSessionQueryVolumes`


**Returns:** `VsanVsanFlrQueryVolumesResult`

---

#### `vsanFlrSessionRetrieveFile`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVsanFlrRetrieveFileSpec` |  |

**Returns:** `VsanVsanFlrRetrieveFileResult`

---

## VsanVsanFlrSessionSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `searchSpec` |  | `VsanVsanFlrSearchFileSpec` | No |
| `mountSpec` |  | `Array/VsanVsanFlrMountSpec` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanFlrVolume

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `mountPoint` |  | `String` | No |
| `freeSpace` |  | `Number` | No |
| `label` |  | `String` | No |
| `id` |  | `String` | No |
| `nativeId` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `fileSystemType` |  | `String` | No |
| `capacity` |  | `Number` | No |

## VsanVsanGenericClusterBaseIssue

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |

## VsanVsanGenericClusterBestPracticeHealth

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `drsEnabled` |  | `Boolean` | No |
| `dynamicType` |  | `String` | No |
| `issues` |  | `Array/VsanVsanGenericClusterBaseIssue` | No |
| `haEnabled` |  | `Boolean` | No |

## VsanVsanHciMeshDatastoreSource

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `vcInfo` |  | `VsanVsanRemoteVcInfo` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanHciMeshServerCluster

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `config` |  | `VsanXVCDatastoreDetailedInfo` | Yes |

### Methods

#### `_getRef`


**Returns:** `VsanManagedObjectReference`

---

## VsanVsanHciMeshServerConfig

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `unicastInfo` |  | `VsanVsanHostServerClusterUnicastInfo` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanHciMeshServerVcenter

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `config` |  | `VsanVsanHciMeshServerVcenterConfig` | Yes |

### Methods

#### `_getRef`


**Returns:** `VsanManagedObjectReference`

---

## VsanVsanHciMeshServerVcenterConfig

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `capabilities` |  | `Array/String` | No |
| `serverClusterIds` |  | `Array/String` | No |
| `cert` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanHclCommonDeviceInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `displayName` |  | `String` | No |
| `fwVersionSupported` |  | `Boolean` | No |
| `subDeviceId` |  | `Number` | No |
| `subVendorId` |  | `Number` | No |
| `vendorId` |  | `Number` | No |
| `driversOnHcl` |  | `Array/VsanVsanHclDriverInfo` | No |
| `dynamicType` |  | `String` | No |
| `deviceId` |  | `Number` | No |
| `deviceName` |  | `String` | No |
| `driverVersionsOnHcl` |  | `Array/String` | No |
| `driverVersion` |  | `String` | No |
| `releaseSupported` |  | `Boolean` | No |
| `deviceOnHcl` |  | `Boolean` | No |
| `driverName` |  | `String` | No |
| `fwVersion` |  | `String` | No |
| `fwVersionOnHcl` |  | `Array/String` | No |
| `releasesOnHcl` |  | `Array/String` | No |
| `driverVersionSupported` |  | `Boolean` | No |

### Methods

#### `VsanVsanHclCommonDeviceInfo`


**Returns:** `void`

---

#### `isDriverVersionSupported`


**Returns:** `Boolean`

---

#### `isReleaseSupported`


**Returns:** `Boolean`

---

#### `isDeviceOnHcl`


**Returns:** `Boolean`

---

#### `isFwVersionSupported`


**Returns:** `Boolean`

---

## VsanVsanHclComputeResource

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `memory` |  | `VsanVsanHclMemInfo` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanHclControllerInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `cimProviderInfo` |  | `VsanVsanHostCimProviderInfo` | No |
| `disks` |  | `Array/VsanVsanHclDiskInfo` | No |
| `subVendorId` |  | `Number` | No |
| `fwVersionSupported` |  | `Boolean` | No |
| `subDeviceId` |  | `Number` | No |
| `userSelectedVcgId` |  | `Number` | No |
| `vendorId` |  | `Number` | No |
| `diskMode` |  | `String` | No |
| `vsanCompatibility` |  | `Array/String` | No |
| `vcgSubscriptionState` |  | `String` | No |
| `cacheConfig` |  | `String` | No |
| `remediableIssues` |  | `Array/String` | No |
| `dynamicType` |  | `String` | No |
| `cacheConfigSupported` |  | `Boolean` | No |
| `deviceName` |  | `String` | No |
| `deviceId` |  | `Number` | No |
| `queueDepthOnHcl` |  | `Number` | No |
| `driverVersionsOnHcl` |  | `Array/String` | No |
| `raidConfigOnHcl` |  | `Array/String` | No |
| `deviceOnHcl` |  | `Boolean` | No |
| `fwVersion` |  | `String` | No |
| `diskModeSupported` |  | `Boolean` | No |
| `fwAuxVersion` |  | `String` | No |
| `cacheConfigOnHcl` |  | `Array/String` | No |
| `releasesOnHcl` |  | `Array/String` | No |
| `toolName` |  | `String` | No |
| `productId` |  | `String` | No |
| `controllerType` |  | `String` | No |
| `vcgSubscriptionFailure` |  | `String` | No |
| `driversOnHcl` |  | `Array/VsanVsanHclDriverInfo` | No |
| `deviceDisplayName` |  | `String` | No |
| `diskCapacity` |  | `Number` | No |
| `vcgSubscriptionDate` |  | `Date` | No |
| `toolVersion` |  | `String` | No |
| `queueDepthSupported` |  | `Boolean` | No |
| `diskModeOnHcl` |  | `Array/String` | No |
| `raidConfigSupported` |  | `Boolean` | No |
| `driverVersion` |  | `String` | No |
| `releaseSupported` |  | `Boolean` | No |
| `usedByVsan` |  | `Boolean` | No |
| `queueDepth` |  | `Number` | No |
| `fwVersionOnHcl` |  | `Array/String` | No |
| `driverName` |  | `String` | No |
| `vcgEntryInfo` |  | `Array/VsanVsanVcgDeviceInfo` | No |
| `raidConfig` |  | `String` | No |
| `driverVersionSupported` |  | `Boolean` | No |

### Methods

#### `VsanVsanHclControllerInfo`


**Returns:** `void`

---

#### `isDriverVersionSupported`


**Returns:** `Boolean`

---

#### `isReleaseSupported`


**Returns:** `Boolean`

---

#### `isDeviceOnHcl`


**Returns:** `Boolean`

---

#### `isFwVersionSupported`


**Returns:** `Boolean`

---

#### `isDiskModeSupported`


**Returns:** `Boolean`

---

#### `isUsedByVsan`


**Returns:** `Boolean`

---

#### `isCacheConfigSupported`


**Returns:** `Boolean`

---

#### `isQueueDepthSupported`


**Returns:** `Boolean`

---

#### `isRaidConfigSupported`


**Returns:** `Boolean`

---

## VsanVsanHclDeviceConstraint

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `similarVcgLinks` |  | `Array/String` | No |
| `partner` |  | `String` | No |
| `compliantFirmwares` |  | `Array/VsanVsanCompliantFirmware` | No |
| `release` |  | `String` | No |
| `vcgId` |  | `Number` | No |
| `pciId` |  | `String` | No |
| `partNumber` |  | `String` | No |
| `model` |  | `String` | No |
| `vcgLink` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanHclDiskConstraint

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `productId` |  | `String` | No |
| `vendor` |  | `String` | No |
| `partNumber` |  | `String` | No |
| `pcieConstraints` |  | `Array/VsanVsanHclDeviceConstraint` | No |
| `dynamicType` |  | `String` | No |
| `constraints` |  | `Array/VsanVsanHclMinFwConstraint` | No |

## VsanVsanHclDiskInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `isSsd` |  | `Boolean` | No |
| `vsanCompatibility` |  | `Array/String` | No |
| `model` |  | `String` | No |
| `remediableIssues` |  | `Array/String` | No |
| `vsanDisk` |  | `Boolean` | No |
| `dynamicType` |  | `String` | No |
| `uuid` |  | `String` | No |
| `deviceName` |  | `String` | No |
| `capacity` |  | `Number` | No |

### Methods

#### `VsanVsanHclDiskInfo`


**Returns:** `void`

---

#### `isIsSsd`


**Returns:** `Boolean`

---

## VsanVsanHclDriverInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `supportedFeatures` |  | `Array/String` | No |
| `fwLinks` |  | `Array/VsanVsanDownloadItem` | No |
| `driverVersion` |  | `String` | No |
| `diskModes` |  | `Array/String` | No |
| `toolsLinks` |  | `Array/VsanVsanDownloadItem` | No |
| `driverLink` |  | `VsanVsanDownloadItem` | No |
| `eula` |  | `String` | No |
| `driverName` |  | `String` | No |
| `fwVersion` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `driverType` |  | `String` | No |

## VsanVsanHclFirmwareFile

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `sha1sum` |  | `String` | No |
| `filenameOrUrl` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `fileType` |  | `String` | No |

## VsanVsanHclFirmwareUpdateSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `hbaDevice` |  | `String` | No |
| `firmwareComponent` |  | `Array/VsanVsanHostFwComponent` | No |
| `allowDowngrade` |  | `Boolean` | No |
| `host` |  | `VsanManagedObjectReference` | No |
| `dynamicType` |  | `String` | No |
| `fwFiles` |  | `Array/VsanVsanHclFirmwareFile` | No |

### Methods

#### `VsanVsanHclFirmwareUpdateSpec`


**Returns:** `void`

---

#### `VsanVsanHclFirmwareUpdateSpec`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `host` | `VsanManagedObjectReference` |  |
| `hbaDevice` | `String` |  |
| `fwFiles` | `Array/VsanVsanHclFirmwareFile` |  |
| `allowDowngrade` | `Boolean` |  |
| `firmwareComponent` | `Array/VsanVsanHostFwComponent` |  |

**Returns:** `void`

---

#### `isAllowDowngrade`


**Returns:** `Boolean`

---

## VsanVsanHclMemInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `memorySize` |  | `Number` | No |
| `vsanHostCompatibility` |  | `Array/String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanHclMinFwConstraint

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `partner` |  | `String` | No |
| `release` |  | `String` | No |
| `vcgId` |  | `Number` | No |
| `partNumber` |  | `String` | No |
| `model` |  | `String` | No |
| `vcgLink` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `firmware` |  | `String` | No |

## VsanVsanHclNicInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `displayName` |  | `String` | No |
| `fwVersionSupported` |  | `Boolean` | No |
| `subVendorId` |  | `Number` | No |
| `subDeviceId` |  | `Number` | No |
| `vendorId` |  | `Number` | No |
| `driversOnHcl` |  | `Array/VsanVsanHclDriverInfo` | No |
| `vsanHostCompatibility` |  | `Array/String` | No |
| `dynamicType` |  | `String` | No |
| `deviceId` |  | `Number` | No |
| `deviceName` |  | `String` | No |
| `driverVersionsOnHcl` |  | `Array/String` | No |
| `driverVersion` |  | `String` | No |
| `releaseSupported` |  | `Boolean` | No |
| `deviceOnHcl` |  | `Boolean` | No |
| `rdmaConfig` |  | `VsanVsanNicRdmaInfo` | No |
| `driverName` |  | `String` | No |
| `vmknic` |  | `String` | No |
| `fwVersion` |  | `String` | No |
| `fwVersionOnHcl` |  | `Array/String` | No |
| `useByVsan` |  | `Boolean` | No |
| `releasesOnHcl` |  | `Array/String` | No |
| `nicLinkSpeedInMbps` |  | `Number` | No |
| `driverVersionSupported` |  | `Boolean` | No |

### Methods

#### `VsanVsanHclNicInfo`


**Returns:** `void`

---

#### `isDriverVersionSupported`


**Returns:** `Boolean`

---

#### `isReleaseSupported`


**Returns:** `Boolean`

---

#### `isUseByVsan`


**Returns:** `Boolean`

---

#### `isDeviceOnHcl`


**Returns:** `Boolean`

---

#### `isFwVersionSupported`


**Returns:** `Boolean`

---

## VsanVsanHclQuerySpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `cluster` |  | `VsanManagedObjectReference` | No |
| `includeOnlyVsanControllers` |  | `Boolean` | No |
| `hosts` |  | `Array/VsanManagedObjectReference` | No |
| `vsanStoragePoolEligibleDisksOnly` |  | `Boolean` | No |
| `dynamicType` |  | `String` | No |

### Methods

#### `VsanVsanHclQuerySpec`


**Returns:** `void`

---

#### `VsanVsanHclQuerySpec`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `includeOnlyVsanControllers` | `Boolean` |  |
| `cluster` | `VsanManagedObjectReference` |  |
| `hosts` | `Array/VsanManagedObjectReference` |  |
| `vsanStoragePoolEligibleDisksOnly` | `Boolean` |  |

**Returns:** `void`

---

#### `isVsanStoragePoolEligibleDisksOnly`


**Returns:** `Boolean`

---

#### `isIncludeOnlyVsanControllers`


**Returns:** `Boolean`

---

## VsanVsanHclReleaseConstraint

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `cluster` |  | `VsanManagedObjectReference` | No |
| `release` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `constraints` |  | `Array/VsanVsanHclDeviceConstraint` | No |
| `hostDevices` |  | `Array/VsanVsanHostDeviceInfo` | No |

## VsanVsanHealthActionBase

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `description` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanHealthActionSteps

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `description` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `steps` |  | `Array/VsanVsanHealthActionBase` | No |

## VsanVsanHealthApiBasedAction

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `apiAction` |  | `VsanVsanClusterHealthAction` | No |
| `description` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanHealthCmdBasedAction

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `description` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `commands` |  | `Array/String` | No |

## VsanVsanHealthConfigSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `healthCheckThresholdSpec` |  | `Array/VsanVsanHealthThreshold` | No |
| `historicalHealthConfig` |  | `VsanVsanHistoricalHealthConfig` | No |
| `dynamicType` |  | `String` | No |
| `vcgNotificationConfig` |  | `VsanVsanVcgNotificationConfigSpec` | No |

## VsanVsanHealthConfirmationDialog

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `subTitle` |  | `String` | No |
| `isWarning` |  | `Boolean` | No |
| `agreeLabel` |  | `String` | No |
| `closeLabel` |  | `String` | No |
| `title` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `content` |  | `String` | No |

### Methods

#### `VsanVsanHealthConfirmationDialog`


**Returns:** `void`

---

#### `VsanVsanHealthConfirmationDialog`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `title` | `String` |  |
| `subTitle` | `String` |  |
| `content` | `String` |  |
| `agreeLabel` | `String` |  |
| `closeLabel` | `String` |  |
| `isWarning` | `Boolean` |  |

**Returns:** `void`

---

#### `isIsWarning`


**Returns:** `Boolean`

---

## VsanVsanHealthCorrelation

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `primaryHealthTests` |  | `Array/String` | No |
| `skippedHealthTests` |  | `Array/String` | No |
| `relatedHealthTests` |  | `Array/String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanHealthCustomizationSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `ssdEnduranceSpec` |  | `Array/VsanSSDEnduranceThresholdSpec` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanHealthDataDrivenAction

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `apiAction` |  | `VsanVsanDataDrivenAPIAction` | No |
| `description` |  | `String` | No |
| `confirmation` |  | `VsanVsanHealthConfirmationDialog` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanHealthExtMgmtPreCheckResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `eamConnectionCheckPassed` |  | `Boolean` | No |
| `installStateCheckPassed` |  | `Boolean` | No |
| `vumRegistered` |  | `Boolean` | No |
| `esxVersionCheckPassed` |  | `Boolean` | No |
| `drsCheckPassed` |  | `Boolean` | No |
| `overallResult` |  | `Boolean` | No |
| `dynamicType` |  | `String` | No |
| `results` |  | `Array/VsanVsanClusterHealthTest` | No |

### Methods

#### `VsanVsanHealthExtMgmtPreCheckResult`


**Returns:** `void`

---

#### `VsanVsanHealthExtMgmtPreCheckResult`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `overallResult` | `Boolean` |  |
| `esxVersionCheckPassed` | `Boolean` |  |
| `drsCheckPassed` | `Boolean` |  |
| `eamConnectionCheckPassed` | `Boolean` |  |
| `installStateCheckPassed` | `Boolean` |  |
| `results` | `Array/VsanVsanClusterHealthTest` |  |
| `vumRegistered` | `Boolean` |  |

**Returns:** `void`

---

#### `isEamConnectionCheckPassed`


**Returns:** `Boolean`

---

#### `isInstallStateCheckPassed`


**Returns:** `Boolean`

---

#### `isEsxVersionCheckPassed`


**Returns:** `Boolean`

---

#### `isVumRegistered`


**Returns:** `Boolean`

---

#### `isDrsCheckPassed`


**Returns:** `Boolean`

---

## VsanVsanHealthPerspective

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `vsanEsaPrecheckForVCF` |  | `VsanVsanHealthPerspective` | Yes |
| `upgradePreCheckPmanForVMC` |  | `VsanVsanHealthPerspective` | Yes |
| `upgradeBeforeExitMM` |  | `VsanVsanHealthPerspective` | Yes |
| `beforeConfigureHost` |  | `VsanVsanHealthPerspective` | Yes |
| `upgradeAfterExitMM` |  | `VsanVsanHealthPerspective` | Yes |
| `upgradeBeforeExitMMPmanForVMC` |  | `VsanVsanHealthPerspective` | Yes |
| `upgradeAfterExitMMPmanForVMC` |  | `VsanVsanHealthPerspective` | Yes |
| `CreateExtendClusterView` |  | `VsanVsanHealthPerspective` | Yes |
| `upgradePreCheckPman` |  | `VsanVsanHealthPerspective` | Yes |
| `vcsaInstallerForVsanEsa` |  | `VsanVsanHealthPerspective` | Yes |
| `vsanUpgradeAfterExitMM` |  | `VsanVsanHealthPerspective` | Yes |
| `vsanUpgradePreCheck` |  | `VsanVsanHealthPerspective` | Yes |
| `clusterPowerOffPrecheck` |  | `VsanVsanHealthPerspective` | Yes |
| `upgradeAfterExitMMPman` |  | `VsanVsanHealthPerspective` | Yes |
| `VsanHealthPerspective_Unknown` |  | `VsanVsanHealthPerspective` | Yes |
| `vmcUpgradePreChecks` |  | `VsanVsanHealthPerspective` | Yes |
| `inPlaceUpgradeServiceMode` |  | `VsanVsanHealthPerspective` | Yes |
| `VsanEsaPreChecks` |  | `VsanVsanHealthPerspective` | Yes |
| `defaultView` |  | `VsanVsanHealthPerspective` | Yes |
| `upgradePreCheckForVCF` |  | `VsanVsanHealthPerspective` | Yes |
| `upgradePreCheck` |  | `VsanVsanHealthPerspective` | Yes |
| `deployAssist` |  | `VsanVsanHealthPerspective` | Yes |
| `vsanUpgradeBeforeExitMM` |  | `VsanVsanHealthPerspective` | Yes |
| `upgradeBeforeExitMMPman` |  | `VsanVsanHealthPerspective` | Yes |
| `precheckForEsaConversion` |  | `VsanVsanHealthPerspective` | Yes |

## VsanVsanHealthQuerySpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `mode` |  | `String` | No |
| `remoteClusterUuids` |  | `Array/String` | No |
| `includeAllRemoteClusters` |  | `Boolean` | No |
| `dynamicType` |  | `String` | No |
| `latencyOnly` |  | `Boolean` | No |
| `objectHealthVersion` |  | `String` | No |

### Methods

#### `VsanVsanHealthQuerySpec`


**Returns:** `void`

---

#### `VsanVsanHealthQuerySpec`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `includeAllRemoteClusters` | `Boolean` |  |
| `remoteClusterUuids` | `Array/String` |  |
| `latencyOnly` | `Boolean` |  |
| `mode` | `String` |  |
| `objectHealthVersion` | `String` |  |

**Returns:** `void`

---

#### `isLatencyOnly`


**Returns:** `Boolean`

---

#### `isIncludeAllRemoteClusters`


**Returns:** `Boolean`

---

## VsanVsanHealthStatusType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `red` |  | `VsanVsanHealthStatusType` | Yes |
| `green` |  | `VsanVsanHealthStatusType` | Yes |
| `yellow` |  | `VsanVsanHealthStatusType` | Yes |
| `unknown` |  | `VsanVsanHealthStatusType` | Yes |

## VsanVsanHealthThreshold

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `yellowValue` |  | `Number` | No |
| `redValue` |  | `Number` | No |
| `dynamicType` |  | `String` | No |
| `enabled` |  | `Boolean` | No |
| `target` |  | `String` | No |

### Methods

#### `VsanVsanHealthThreshold`


**Returns:** `void`

---

#### `VsanVsanHealthThreshold`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `yellowValue` | `Number` |  |
| `redValue` | `Number` |  |
| `target` | `String` |  |
| `enabled` | `Boolean` |  |

**Returns:** `void`

---

#### `isEnabled`


**Returns:** `Boolean`

---

## VsanVsanHealthThresholdTarget

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `VsanHealthThresholdTarget_Unknown` |  | `VsanVsanHealthThresholdTarget` | Yes |
| `diskspace_vsan_datastore` |  | `VsanVsanHealthThresholdTarget` | Yes |
| `diskspace_vsan_direct` |  | `VsanVsanHealthThresholdTarget` | Yes |
| `diskspace_vsan_pmem` |  | `VsanVsanHealthThresholdTarget` | Yes |

## VsanVsanHealthTroubleshooting

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `diagnosticSteps` |  | `Array/VsanVsanHealthActionBase` | No |
| `remediations` |  | `Array/VsanVsanHealthActionBase` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanHealthTxtBasedAction

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `description` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanHigherObjectsPresentDuringDowngradeIssue

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `msg` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `uuids` |  | `Array/String` | No |

## VsanVsanHistoricalHealthConfig

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |
| `enabled` |  | `Boolean` | No |

## VsanVsanHistoricalHealthQuerySpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `includeHealthRemediation` |  | `Boolean` | No |
| `groupId` |  | `String` | No |
| `start` |  | `Date` | No |
| `end` |  | `Date` | No |
| `testId` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `clusters` |  | `Array/VsanManagedObjectReference` | No |

### Methods

#### `VsanVsanHistoricalHealthQuerySpec`


**Returns:** `void`

---

#### `VsanVsanHistoricalHealthQuerySpec`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `clusters` | `Array/VsanManagedObjectReference` |  |
| `start` | `Date` |  |
| `end` | `Date` |  |
| `testId` | `String` |  |
| `groupId` | `String` |  |
| `includeHealthRemediation` | `Boolean` |  |

**Returns:** `void`

---

#### `isIncludeHealthRemediation`


**Returns:** `Boolean`

---

## VsanVsanHistoricalHealthTest

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `testDetails` |  | `Array/VsanVsanClusterHealthResultBase` | No |
| `testCorrelation` |  | `VsanVsanHealthCorrelation` | No |
| `health` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `timestamp` |  | `Date` | No |

## VsanVsanHostAbortWipeDiskStatus

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `disk` |  | `String` | No |
| `success` |  | `Boolean` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanHostAboutInfoEx

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `apiVersion` |  | `String` | No |
| `build` |  | `String` | No |
| `buildType` |  | `String` | No |
| `name` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `version` |  | `String` | No |

## VsanVsanHostAssociatedObjects

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `spbmProfileId` |  | `String` | No |
| `spbmProfileGenerationNum` |  | `Number` | No |
| `vsanObjects` |  | `Array/String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanHostAssociatedObjectsResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `offset` |  | `Number` | No |
| `data` |  | `Array/VsanVsanHostAssociatedObjects` | No |
| `limit` |  | `Number` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanHostCimProviderInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `cimProviderOnHcl` |  | `Array/String` | No |
| `cimProviderSupported` |  | `Boolean` | No |
| `cimProviderLinksOnHcl` |  | `Array/VsanVsanDownloadItem` | No |
| `installedCIMProvider` |  | `String` | No |
| `dynamicType` |  | `String` | No |

### Methods

#### `VsanVsanHostCimProviderInfo`


**Returns:** `void`

---

#### `VsanVsanHostCimProviderInfo`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `cimProviderSupported` | `Boolean` |  |
| `installedCIMProvider` | `String` |  |
| `cimProviderOnHcl` | `Array/String` |  |
| `cimProviderLinksOnHcl` | `Array/VsanVsanDownloadItem` |  |

**Returns:** `void`

---

#### `isCimProviderSupported`


**Returns:** `Boolean`

---

## VsanVsanHostClomdLivenessResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `hostname` |  | `String` | No |
| `clomdStat` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanHostComponentSyncState

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `bytesToSync` |  | `Number` | No |
| `reasons` |  | `Array/String` | No |
| `diskUuid` |  | `String` | No |
| `hostUuid` |  | `String` | No |
| `recoveryETA` |  | `Number` | No |
| `dynamicType` |  | `String` | No |
| `uuid` |  | `String` | No |

## VsanVsanHostConfigInfoEx

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `encryptionInfo` |  | `VsanVsanHostEncryptionInfo` | No |
| `extendedConfig` |  | `VsanVsanExtendedConfig` | No |
| `unmapConfig` |  | `VsanVsanUnmapConfig` | No |
| `datastoreInfo` |  | `VsanVsanDatastoreConfig` | No |
| `resyncIopsLimitInfo` |  | `VsanResyncIopsInfo` | No |
| `unicastConfig` |  | `VsanVsanHostServerClusterUnicastConfig` | No |
| `snapServiceConfig` |  | `VsanVsanSnapServiceConfig` | No |
| `metricsConfig` |  | `VsanVsanMetricsConfig` | No |
| `hostSystem` |  | `VsanManagedObjectReference` | No |
| `dataInTransitEncryptionInfo` |  | `VsanVsanInTransitEncryptionInfo` | No |
| `deconvergedNetConfig` |  | `VsanVsanDeconvergedNetConfig` | No |
| `dynamicType` |  | `String` | No |
| `enabled` |  | `Boolean` | No |
| `mode` |  | `String` | No |
| `internalExtendedConfig` |  | `VsanVsanInternalExtendedConfig` | No |
| `witnessHostConfig` |  | `Array/VsanVsanWitnessHostConfig` | No |
| `vsanEsaConversionStatus` |  | `String` | No |
| `vsanEsaEnabled` |  | `Boolean` | No |
| `dataProtectionInfo` |  | `VsanVsanDataProtectionInfo` | No |
| `rdmaConfig` |  | `VsanVsanRdmaConfig` | No |
| `serverClusterConfigs` |  | `Array/VsanRemoteVsanServerClusterConfig` | No |
| `dataEfficiencyInfo` |  | `VsanVsanDataEfficiencyConfig` | No |

### Methods

#### `VsanVsanHostConfigInfoEx`


**Returns:** `void`

---

#### `isVsanEsaEnabled`


**Returns:** `Boolean`

---

#### `isEnabled`


**Returns:** `Boolean`

---

## VsanVsanHostCreateNativeKeyProviderSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `tpmRequired` |  | `Boolean` | No |
| `provider` |  | `String` | No |
| `keyId` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `keyDerivationKey` |  | `String` | No |

### Methods

#### `VsanVsanHostCreateNativeKeyProviderSpec`


**Returns:** `void`

---

#### `VsanVsanHostCreateNativeKeyProviderSpec`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `provider` | `String` |  |
| `keyId` | `String` |  |
| `keyDerivationKey` | `String` |  |
| `tpmRequired` | `Boolean` |  |

**Returns:** `void`

---

#### `isTpmRequired`


**Returns:** `Boolean`

---

## VsanVsanHostCreateVmHealthTestResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `hostname` |  | `String` | No |
| `state` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanHostDatastoreUsageResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `configuredUsageThresholdOnHost` |  | `Number` | No |
| `hostname` |  | `String` | No |
| `currentUsage` |  | `Number` | No |
| `dynamicType` |  | `String` | No |
| `thresholdExceeded` |  | `Boolean` | No |

### Methods

#### `VsanVsanHostDatastoreUsageResult`


**Returns:** `void`

---

#### `isThresholdExceeded`


**Returns:** `Boolean`

---

## VsanVsanHostDecommissionMode

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `objectAction` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanHostDecommissionModeObjectAction

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `evacuateAllData` |  | `VsanVsanHostDecommissionModeObjectAction` | Yes |
| `ensureObjectAccessibility` |  | `VsanVsanHostDecommissionModeObjectAction` | Yes |
| `noAction` |  | `VsanVsanHostDecommissionModeObjectAction` | Yes |

## VsanVsanHostDeviceInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `hostname` |  | `String` | No |
| `devices` |  | `Array/VsanVsanBasicDeviceInfo` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanHostDiskMapping

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `nonSsd` |  | `Array/VsanHostScsiDisk` | No |
| `ssd` |  | `VsanHostScsiDisk` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanHostDiskResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `disk` |  | `VsanHostScsiDisk` | No |
| `vsanUuid` |  | `String` | No |
| `state` |  | `String` | No |
| `degraded` |  | `Boolean` | No |
| `dynamicType` |  | `String` | No |

### Methods

#### `VsanVsanHostDiskResult`


**Returns:** `void`

---

#### `isDegraded`


**Returns:** `Boolean`

---

## VsanVsanHostDpdLivenessResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `hostname` |  | `String` | No |
| `dpdStatus` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanHostDrsStats

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `host` |  | `VsanManagedObjectReference` | No |
| `dynamicType` |  | `String` | No |
| `readLocalityPresented` |  | `Boolean` | No |

### Methods

#### `VsanVsanHostDrsStats`


**Returns:** `void`

---

#### `isReadLocalityPresented`


**Returns:** `Boolean`

---

## VsanVsanHostEMMSummary

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `hostname` |  | `String` | No |
| `inDecomState` |  | `Boolean` | No |
| `inMaintenanceMode` |  | `Boolean` | No |
| `dynamicType` |  | `String` | No |

### Methods

#### `VsanVsanHostEMMSummary`


**Returns:** `void`

---

#### `VsanVsanHostEMMSummary`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `hostname` | `String` |  |
| `inMaintenanceMode` | `Boolean` |  |
| `inDecomState` | `Boolean` |  |

**Returns:** `void`

---

#### `isInMaintenanceMode`


**Returns:** `Boolean`

---

#### `isInDecomState`


**Returns:** `Boolean`

---

## VsanVsanHostEncryptionInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `hostKeyIdExt` |  | `String` | No |
| `wrappedDek` |  | `String` | No |
| `clientCert` |  | `String` | No |
| `kekVerifier` |  | `String` | No |
| `oldWrappedDek` |  | `String` | No |
| `dekVerifier` |  | `String` | No |
| `syncing` |  | `Boolean` | No |
| `kekIdExt` |  | `String` | No |
| `dekGenerationId` |  | `Number` | No |
| `oldDekId` |  | `String` | No |
| `changing` |  | `Boolean` | No |
| `hostKeyId` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `iv` |  | `String` | No |
| `enabled` |  | `Boolean` | No |
| `kmsServerCerts` |  | `Array/String` | No |
| `dekId` |  | `String` | No |
| `clientKey` |  | `String` | No |
| `oldDekVerifier` |  | `String` | No |
| `eraseDisksBeforeUse` |  | `Boolean` | No |
| `dekGenerationIdExt` |  | `Number` | No |
| `kekId` |  | `String` | No |

### Methods

#### `VsanVsanHostEncryptionInfo`


**Returns:** `void`

---

#### `isSyncing`


**Returns:** `Boolean`

---

#### `isChanging`


**Returns:** `Boolean`

---

#### `isEnabled`


**Returns:** `Boolean`

---

#### `isEraseDisksBeforeUse`


**Returns:** `Boolean`

---

## VsanVsanHostEventsProcessor

### Methods

#### `vsanAnalyticsGetVcCollectionFlag`


**Returns:** `Boolean`

---

#### `vsanAnalyticsStopEventMonitoring`


**Returns:** `void`

---

#### `_getRef`


**Returns:** `VsanManagedObjectReference`

---

#### `vsanAnalyticsSetEventQueueFullStatus`


**Returns:** `void`

---

#### `vsanAnalyticsCollectHostEventsSnapshot`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |

**Returns:** `String`

---

#### `vsanAnalyticsClearEventQueueFullStatus`


**Returns:** `void`

---

#### `vsanAnalyticsIsEventQueueFull`


**Returns:** `Boolean`

---

#### `vsanAnalyticsCollectHostEvents`


**Returns:** `String`

---

#### `vsanAnalyticsGetEventsOverFlowCount`


**Returns:** `Number`

---

#### `vsanAnalyticsSetVcCollectionFlag`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Boolean` |  |

**Returns:** `void`

---

#### `vsanAnalyticsStartEventMonitoring`


**Returns:** `void`

---

## VsanVsanHostFwComponent

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `componentID` |  | `Array/String` | No |
| `sha1sum` |  | `String` | No |
| `name` |  | `String` | No |
| `suggestedVersion` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `currentVersion` |  | `String` | No |
| `url` |  | `String` | No |

## VsanVsanHostHclInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `hostname` |  | `String` | No |
| `hclChecked` |  | `Boolean` | No |
| `releaseName` |  | `String` | No |
| `pnics` |  | `Array/VsanVsanHclNicInfo` | No |
| `host` |  | `VsanManagedObjectReference` | No |
| `controllers` |  | `Array/VsanVsanHclControllerInfo` | No |
| `vsanHostCompatibility` |  | `Array/String` | No |
| `computeResource` |  | `VsanVsanHclComputeResource` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanHostHealthSystemStatusResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `hostname` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `issues` |  | `Array/String` | No |
| `status` |  | `String` | No |

## VsanVsanHostHealthSystemVersionResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `hostname` |  | `String` | No |
| `build` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `version` |  | `String` | No |

## VsanVsanHostHwDeviceId

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `productId` |  | `String` | No |
| `pciId` |  | `VsanDevicePciId` | No |
| `dynamicType` |  | `String` | No |
| `diskCapacity` |  | `Number` | No |

## VsanVsanHostIoInsightInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `ioinsightWorldId` |  | `Number` | No |
| `ioinsightInfo` |  | `VsanVsanIoInsightInfo` | No |
| `host` |  | `VsanManagedObjectReference` | No |
| `dynamicType` |  | `String` | No |
| `faultMessage` |  | `String` | No |

## VsanVsanHostIpConfigEx

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `downstreamIpV6Address` |  | `String` | No |
| `upstreamIpAddress` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `downstreamIpAddress` |  | `String` | No |
| `upstreamIpV6Address` |  | `String` | No |

## VsanVsanHostPortConfigEx

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `trafficTypes` |  | `Array/String` | No |
| `dynamicType` |  | `String` | No |
| `device` |  | `String` | No |

## VsanVsanHostPortConfigExTrafficType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `witness` |  | `VsanVsanHostPortConfigExTrafficType` | Yes |
| `vsanExternal` |  | `VsanVsanHostPortConfigExTrafficType` | Yes |
| `TrafficType_Unknown` |  | `VsanVsanHostPortConfigExTrafficType` | Yes |
| `vsan` |  | `VsanVsanHostPortConfigExTrafficType` | Yes |

## VsanVsanHostPropertyRetrieveIssue

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `msg` |  | `String` | No |
| `hosts` |  | `Array/VsanManagedObjectReference` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanHostQueryCheckLimitsOptionType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `VsanHostQueryCheckLimitsOptionType_Unknown` |  | `VsanVsanHostQueryCheckLimitsOptionType` | Yes |
| `logicalCapacity` |  | `VsanVsanHostQueryCheckLimitsOptionType` | Yes |
| `logicalCapacityUsed` |  | `VsanVsanHostQueryCheckLimitsOptionType` | Yes |
| `dgTransientCapacityUsed` |  | `VsanVsanHostQueryCheckLimitsOptionType` | Yes |
| `diskTransientCapacityUsed` |  | `VsanVsanHostQueryCheckLimitsOptionType` | Yes |
| `dedupMetadata` |  | `VsanVsanHostQueryCheckLimitsOptionType` | Yes |

## VsanVsanHostQueryCheckLimitsSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `fetchAll` |  | `Boolean` | No |
| `dynamicType` |  | `String` | No |
| `optionTypes` |  | `Array/String` | No |

## VsanVsanHostReference

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `hostname` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanHostResourceCheckResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `components` |  | `Number` | No |
| `usedCapacity` |  | `Number` | No |
| `maxComponents` |  | `Number` | No |
| `isNew` |  | `Boolean` | No |
| `postOperationCapacity` |  | `Number` | No |
| `dynamicType` |  | `String` | No |
| `uuid` |  | `String` | No |
| `capacity` |  | `Number` | No |
| `storagePools` |  | `Array/VsanVsanStoragePoolResourceCheckResult` | No |
| `diskGroups` |  | `Array/VsanVsanDiskGroupResourceCheckResult` | No |
| `host` |  | `VsanManagedObjectReference` | No |
| `name` |  | `String` | No |
| `postOperationUsedCapacity` |  | `Number` | No |
| `additionalRequiredCapacity` |  | `Number` | No |
| `hostLocalObjects` |  | `Array/String` | No |

### Methods

#### `VsanVsanHostResourceCheckResult`


**Returns:** `void`

---

#### `VsanVsanHostResourceCheckResult`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `String` |  |
| `uuid` | `String` |  |
| `isNew` | `Boolean` |  |
| `capacity` | `Number` |  |
| `postOperationCapacity` | `Number` |  |
| `usedCapacity` | `Number` |  |
| `postOperationUsedCapacity` | `Number` |  |
| `additionalRequiredCapacity` | `Number` |  |
| `maxComponents` | `Number` |  |
| `components` | `Number` |  |
| `host` | `VsanManagedObjectReference` |  |
| `diskGroups` | `Array/VsanVsanDiskGroupResourceCheckResult` |  |
| `storagePools` | `Array/VsanVsanStoragePoolResourceCheckResult` |  |
| `hostLocalObjects` | `Array/String` |  |

**Returns:** `void`

---

#### `isIsNew`


**Returns:** `Boolean`

---

## VsanVsanHostResourceConfigSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `capacityPerDisk` |  | `Number` | No |
| `disksPerHost` |  | `Number` | No |
| `dynamicType` |  | `String` | No |
| `targetNumberOfHosts` |  | `Number` | No |

## VsanVsanHostRuntimeStats

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `maxWitnessClusters` |  | `Number` | No |
| `configGeneration` |  | `VsanVsanConfigGeneration` | No |
| `supportedClusterSize` |  | `Number` | No |
| `resyncIopsInfo` |  | `VsanResyncIopsInfo` | No |
| `repairTimerInfo` |  | `VsanRepairTimerInfo` | No |
| `componentLimitPerCluster` |  | `Number` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanHostsCompressionOnlyNotSupported

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `msg` |  | `String` | No |
| `hosts` |  | `Array/VsanManagedObjectReference` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanHostServerClusterUnicastConfig

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `remoteUnicastConfig` |  | `Array/VsanVsanHostServerClusterUnicastInfo` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanHostServerClusterUnicastInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `clusterUuid` |  | `String` | No |
| `unicastInfo` |  | `Array/VsanVsanServerHostUnicastInfo` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanHostStatsType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `maxWitnessClusters` |  | `VsanVsanHostStatsType` | Yes |
| `configGeneration` |  | `VsanVsanHostStatsType` | Yes |
| `supportedClusterSize` |  | `VsanVsanHostStatsType` | Yes |
| `resyncIopsInfo` |  | `VsanVsanHostStatsType` | Yes |
| `repairTimerInfo` |  | `VsanVsanHostStatsType` | Yes |
| `componentLimitPerCluster` |  | `VsanVsanHostStatsType` | Yes |
| `StatsType_Unknown` |  | `VsanVsanHostStatsType` | Yes |

## VsanVsanHostVdsSystem

### Methods

#### `vsanMigrateVmsToVds`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/VsanVsanVmVdsMigrationSpec` |  |
| `arg1` | `String` |  |
| `arg2` | `Number` |  |
| `arg3` | `Boolean` |  |

**Returns:** `String`

---

#### `_getRef`


**Returns:** `VsanManagedObjectReference`

---

#### `vsanCompleteMigrateVmsToVds`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |
| `arg1` | `String` |  |

**Returns:** `void`

---

## VsanVsanHostVirtualApplianceInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `isDeployedFromOVF` |  | `Boolean` | No |
| `hostKey` |  | `VsanManagedObjectReference` | No |
| `dynamicType` |  | `String` | No |
| `isVirtualApp` |  | `Boolean` | No |

### Methods

#### `VsanVsanHostVirtualApplianceInfo`


**Returns:** `void`

---

#### `VsanVsanHostVirtualApplianceInfo`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `hostKey` | `VsanManagedObjectReference` |  |
| `isVirtualApp` | `Boolean` |  |
| `isDeployedFromOVF` | `Boolean` |  |

**Returns:** `void`

---

#### `isIsDeployedFromOVF`


**Returns:** `Boolean`

---

## VsanVsanHostVmdkLoadTestResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `hostname` |  | `String` | No |
| `vmdkResults` |  | `Array/VsanVsanVmdkLoadTestResult` | No |
| `issueFound` |  | `Boolean` | No |
| `dynamicType` |  | `String` | No |
| `faultMessage` |  | `String` | No |

## VsanVsanHostVsanAwsCredentials

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `secretAccessKey` |  | `String` | No |
| `accessKeyId` |  | `String` | No |
| `sessionToken` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `region` |  | `String` | No |

## VsanVsanHostVsanDiskInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `vsanUuid` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `formatVersion` |  | `Number` | No |

## VsanVsanHostVsanObjectSyncQueryResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `totalBytesToSync` |  | `Number` | No |
| `totalRecoveryETA` |  | `Number` | No |
| `objects` |  | `Array/VsanVsanHostVsanObjectSyncState` | No |
| `totalObjectsToSync` |  | `Number` | No |
| `syncingObjectRecoveryDetails` |  | `VsanVsanSyncingObjectRecoveryDetails` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanHostVsanObjectSyncState

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `components` |  | `Array/VsanVsanHostComponentSyncState` | No |
| `dynamicType` |  | `String` | No |
| `uuid` |  | `String` | No |

## VsanVsanHostWipeDiskEligible

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `No` |  | `VsanVsanHostWipeDiskEligible` | Yes |
| `WipeDiskEligible_Unknown` |  | `VsanVsanHostWipeDiskEligible` | Yes |
| `Unknown` |  | `VsanVsanHostWipeDiskEligible` | Yes |
| `Yes` |  | `VsanVsanHostWipeDiskEligible` | Yes |

## VsanVsanHostWipeDiskState

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `Wiping` |  | `VsanVsanHostWipeDiskState` | Yes |
| `WipeDiskState_Unknown` |  | `VsanVsanHostWipeDiskState` | Yes |
| `Success` |  | `VsanVsanHostWipeDiskState` | Yes |
| `Failure` |  | `VsanVsanHostWipeDiskState` | Yes |

## VsanVsanHostWipeDiskStatus

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `estimatedTime` |  | `Number` | No |
| `disk` |  | `String` | No |
| `percentageCompleted` |  | `Number` | No |
| `eligible` |  | `String` | No |
| `wipeStartTime` |  | `Date` | No |
| `wipeState` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `wipeCompleteTime` |  | `Date` | No |

## VsanVsanHostWithHybridDiskgroupIssue

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `msg` |  | `String` | No |
| `hosts` |  | `Array/VsanManagedObjectReference` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanHwToVcgInfoMapping

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `vsanHostHwDeviceId` |  | `VsanVsanHostHwDeviceId` | No |
| `vcgId` |  | `Number` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanHwToVcgInfoMappingSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |
| `entity` |  | `String` | No |
| `vsanHwToVcgInfoMappings` |  | `Array/VsanVsanHwToVcgInfoMapping` | No |

## VsanVsanInternalExtendedConfig

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `vcMaxDiskVersion` |  | `Number` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanInternalStatsProvider

### Methods

#### `_getRef`


**Returns:** `VsanManagedObjectReference`

---

#### `captureInternalStats`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |
| `arg1` | `Number` |  |
| `arg2` | `Boolean` |  |

**Returns:** `String`

---

## VsanVsanInTransitEncryptionInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `rekeyInterval` |  | `Number` | No |
| `transitionState` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `enabled` |  | `Boolean` | No |

### Methods

#### `VsanVsanInTransitEncryptionInfo`


**Returns:** `void`

---

#### `VsanVsanInTransitEncryptionInfo`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `enabled` | `Boolean` |  |
| `rekeyInterval` | `Number` |  |
| `transitionState` | `String` |  |

**Returns:** `void`

---

#### `isEnabled`


**Returns:** `Boolean`

---

## VsanVsanIODiagnosticsFailedCheck

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `unsupportedType` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanIODiagnosticsFailedCheckType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `perfsvcdisabled` |  | `VsanVsanIODiagnosticsFailedCheckType` | Yes |
| `nestedfaultdomain` |  | `VsanVsanIODiagnosticsFailedCheckType` | Yes |
| `toomanytargets` |  | `VsanVsanIODiagnosticsFailedCheckType` | Yes |
| `vsanobjectinremotedatastore` |  | `VsanVsanIODiagnosticsFailedCheckType` | Yes |
| `runninginstanceontarget` |  | `VsanVsanIODiagnosticsFailedCheckType` | Yes |
| `vsandisabled` |  | `VsanVsanIODiagnosticsFailedCheckType` | Yes |
| `stretchedcluster` |  | `VsanVsanIODiagnosticsFailedCheckType` | Yes |
| `computeonlycluster` |  | `VsanVsanIODiagnosticsFailedCheckType` | Yes |
| `vsanesaconversion` |  | `VsanVsanIODiagnosticsFailedCheckType` | Yes |
| `invalidtarget` |  | `VsanVsanIODiagnosticsFailedCheckType` | Yes |
| `invalidduration` |  | `VsanVsanIODiagnosticsFailedCheckType` | Yes |
| `toomanyobjects` |  | `VsanVsanIODiagnosticsFailedCheckType` | Yes |
| `networkpartition` |  | `VsanVsanIODiagnosticsFailedCheckType` | Yes |
| `vmnotpoweredon` |  | `VsanVsanIODiagnosticsFailedCheckType` | Yes |
| `VsanIODiagnosticsFailedCheckType_Unknown` |  | `VsanVsanIODiagnosticsFailedCheckType` | Yes |
| `invalidobjuuid` |  | `VsanVsanIODiagnosticsFailedCheckType` | Yes |
| `runninginstance` |  | `VsanVsanIODiagnosticsFailedCheckType` | Yes |

## VsanVsanIODiagnosticsInstance

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `recurrenceName` |  | `String` | No |
| `name` |  | `String` | No |
| `startTime` |  | `Date` | No |
| `state` |  | `String` | No |
| `endTime` |  | `Date` | No |
| `dynamicType` |  | `String` | No |
| `targets` |  | `Array/VsanVsanIODiagnosticsTarget` | No |
| `events` |  | `Array/VsanVsanIODiagnosticsInstanceEvent` | No |

## VsanVsanIODiagnosticsInstanceEvent

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `eventTime` |  | `Date` | No |
| `eventTargets` |  | `Array/VsanVsanIODiagnosticsTarget` | No |
| `eventType` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanIODiagnosticsInstanceEventType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `objectComponentsLayoutChange` |  | `VsanVsanIODiagnosticsInstanceEventType` | Yes |
| `primaryHostTransfer` |  | `VsanVsanIODiagnosticsInstanceEventType` | Yes |
| `objectRemoval` |  | `VsanVsanIODiagnosticsInstanceEventType` | Yes |
| `vsanmgmtdRestart` |  | `VsanVsanIODiagnosticsInstanceEventType` | Yes |
| `vsanEsaConversion` |  | `VsanVsanIODiagnosticsInstanceEventType` | Yes |
| `objectOwnerTransfer` |  | `VsanVsanIODiagnosticsInstanceEventType` | Yes |
| `objectProxyOwnerTransfer` |  | `VsanVsanIODiagnosticsInstanceEventType` | Yes |
| `VsanIODiagnosticsInstanceEventType_Unknown` |  | `VsanVsanIODiagnosticsInstanceEventType` | Yes |

## VsanVsanIODiagnosticsInstanceQuerySpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `startTime` |  | `Date` | No |
| `endTime` |  | `Date` | No |
| `dynamicType` |  | `String` | No |
| `targets` |  | `Array/VsanVsanIODiagnosticsTarget` | No |

## VsanVsanIODiagnosticsInstanceState

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `VsanIODiagnosticsInstanceRunning` |  | `VsanVsanIODiagnosticsInstanceState` | Yes |
| `VsanIODiagnosticsInstanceState_Unknown` |  | `VsanVsanIODiagnosticsInstanceState` | Yes |
| `VsanIODiagnosticsInstanceCompleted` |  | `VsanVsanIODiagnosticsInstanceState` | Yes |

## VsanVsanIODiagnosticsObjectLayout

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `layout` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanIODiagnosticsPrecheckResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `failedChecks` |  | `Array/VsanVsanIODiagnosticsFailedCheck` | No |
| `dynamicType` |  | `String` | No |
| `supported` |  | `Boolean` | No |

## VsanVsanIODiagnosticsStats

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `startTime` |  | `Date` | No |
| `endTime` |  | `Date` | No |
| `objectsIOStats` |  | `Array/VsanVsanObjectIOStats` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanIODiagnosticsTarget

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `entityId` |  | `String` | No |
| `objUuids` |  | `Array/String` | No |
| `type` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanIODiagnosticsTargetStats

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `objectsIODiagnosticsStats` |  | `Array/VsanVsanIODiagnosticsStats` | No |
| `dynamicType` |  | `String` | No |
| `target` |  | `VsanVsanIODiagnosticsTarget` | No |

## VsanVsanIODiagnosticsTargetType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `VsanIODiagnosticsTargetType_Unknown` |  | `VsanVsanIODiagnosticsTargetType` | Yes |
| `VirtualMachine` |  | `VsanVsanIODiagnosticsTargetType` | Yes |

## VsanVsanIoInsightInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `state` |  | `String` | No |
| `monitoredVMs` |  | `Array/VsanManagedObjectReference` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanIoInsightInstance

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `hostUuids` |  | `Array/String` | No |
| `hostsIoInsightInfo` |  | `Array/VsanVsanHostIoInsightInfo` | No |
| `vmUuids` |  | `Array/String` | No |
| `runName` |  | `String` | No |
| `startTime` |  | `Date` | No |
| `state` |  | `String` | No |
| `endTime` |  | `Date` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanIoInsightInstanceQuerySpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `state` |  | `String` | No |
| `entityRefId` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanIoInsightInstanceState

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `running` |  | `VsanVsanIoInsightInstanceState` | Yes |
| `crashed` |  | `VsanVsanIoInsightInstanceState` | Yes |
| `completed` |  | `VsanVsanIoInsightInstanceState` | Yes |
| `VsanIoInsightInstanceState_unknown` |  | `VsanVsanIoInsightInstanceState` | Yes |

## VsanVsanIoInsightManager

### Methods

#### `queryIoInsightInstances`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVsanIoInsightInstanceQuerySpec` |  |
| `arg1` | `VsanManagedObjectReference` |  |

**Returns:** `Array/VsanVsanIoInsightInstance`

---

#### `_getRef`


**Returns:** `VsanManagedObjectReference`

---

#### `startIoInsight`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `String` |  |
| `arg2` | `Number` |  |
| `arg3` | `Array/VsanManagedObjectReference` |  |
| `arg4` | `Array/VsanManagedObjectReference` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `deleteIoInsightInstance`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |
| `arg1` | `VsanManagedObjectReference` |  |

**Returns:** `void`

---

#### `saveIoInsightInstanceToDB`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVsanIoInsightInstance` |  |
| `arg1` | `Boolean` |  |

**Returns:** `void`

---

#### `queryIoInsight`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Array/VsanVsanHostIoInsightInfo` |  |

**Returns:** `Array/VsanVsanHostIoInsightInfo`

---

#### `stopIoInsight`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `String` |  |
| `arg2` | `Array/VsanVsanHostIoInsightInfo` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `renameIoInsightInstance`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |
| `arg1` | `String` |  |
| `arg2` | `VsanManagedObjectReference` |  |

**Returns:** `void`

---

## VsanVsanIoInsightState

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `running` |  | `VsanVsanIoInsightState` | Yes |
| `stopped` |  | `VsanVsanIoInsightState` | Yes |
| `VsanIoInsightState_unknown` |  | `VsanVsanIoInsightState` | Yes |
| `notFound` |  | `VsanVsanIoInsightState` | Yes |

## VsanVsanIOLatency

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `destEntityUuid` |  | `String` | No |
| `writeLatencyStats` |  | `VsanVsanIOLatencyMetrics` | No |
| `readLatencyStats` |  | `VsanVsanIOLatencyMetrics` | No |
| `sourceEntityUuid` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `latencyType` |  | `String` | No |

## VsanVsanIOLatencyMetrics

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `averageLatency` |  | `Number` | No |
| `stddevLatency` |  | `Number` | No |
| `totalCount` |  | `Number` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanIOLatencyType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `CapacityNetworkLatency` |  | `VsanVsanIOLatencyType` | Yes |
| `CapacityLsomLatency` |  | `VsanVsanIOLatencyType` | Yes |
| `ZdomLatency` |  | `VsanVsanIOLatencyType` | Yes |
| `PerfLsomLatency` |  | `VsanVsanIOLatencyType` | Yes |
| `NetworkLatency` |  | `VsanVsanIOLatencyType` | Yes |
| `PerfDomOwnerLatency` |  | `VsanVsanIOLatencyType` | Yes |
| `LsomLatency` |  | `VsanVsanIOLatencyType` | Yes |
| `VsanIOLatencyType_Unknown` |  | `VsanVsanIOLatencyType` | Yes |
| `PerfNetworkLatency` |  | `VsanVsanIOLatencyType` | Yes |
| `CrossSiteNetworkLatency` |  | `VsanVsanIOLatencyType` | Yes |
| `DomOwnerLatency` |  | `VsanVsanIOLatencyType` | Yes |
| `CapacityDomOwnerLatency` |  | `VsanVsanIOLatencyType` | Yes |

## VsanVsanIOTripAnalyzerConfig

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `recurrences` |  | `Array/VsanVsanIOTripAnalyzerRecurrence` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanIOTripAnalyzerRecurrence

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `duration` |  | `Number` | No |
| `name` |  | `String` | No |
| `startTime` |  | `Date` | No |
| `interval` |  | `Number` | No |
| `endTime` |  | `Date` | No |
| `dynamicType` |  | `String` | No |
| `targets` |  | `Array/VsanVsanIODiagnosticsTarget` | No |
| `status` |  | `String` | No |

## VsanVsanIOTripAnalyzerRecurrenceStatus

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `VsanIOTripAnalyzerRecurrenceStatus_Unknown` |  | `VsanVsanIOTripAnalyzerRecurrenceStatus` | Yes |
| `recurrenceDisabled` |  | `VsanVsanIOTripAnalyzerRecurrenceStatus` | Yes |
| `recurrenceEnabled` |  | `VsanVsanIOTripAnalyzerRecurrenceStatus` | Yes |

## VsanVsanIperfClientSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `reverse` |  | `Boolean` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanIscsiHomeObjectSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `defaultConfig` |  | `VsanVsanIscsiTargetServiceDefaultConfigSpec` | No |
| `storagePolicy` |  | `VsanVirtualMachineProfileSpec` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanIscsiInitiatorGroup

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` |  | `String` | No |
| `initiators` |  | `Array/String` | No |
| `dynamicType` |  | `String` | No |
| `targets` |  | `Array/VsanVsanIscsiTargetBasicInfo` | No |

## VsanVsanIscsiLUN

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `actualSize` |  | `Number` | No |
| `lunId` |  | `Number` | No |
| `alias` |  | `String` | No |
| `targetAlias` |  | `String` | No |
| `lunSize` |  | `Number` | No |
| `dynamicType` |  | `String` | No |
| `uuid` |  | `String` | No |
| `objectInformation` |  | `VsanVsanObjectInformation` | No |
| `status` |  | `String` | No |

## VsanVsanIscsiLUNCommonInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `lunId` |  | `Number` | No |
| `alias` |  | `String` | No |
| `lunSize` |  | `Number` | No |
| `dynamicType` |  | `String` | No |
| `status` |  | `String` | No |

## VsanVsanIscsiLUNCommonInfoVsanIscsiLUNStatus

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `Offline` |  | `VsanVsanIscsiLUNCommonInfoVsanIscsiLUNStatus` | Yes |
| `VsanIscsiLUNStatus_Unknown` |  | `VsanVsanIscsiLUNCommonInfoVsanIscsiLUNStatus` | Yes |
| `Online` |  | `VsanVsanIscsiLUNCommonInfoVsanIscsiLUNStatus` | Yes |

## VsanVsanIscsiLUNRuntimeStatus

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `actualSize` |  | `Number` | No |
| `lunId` |  | `Number` | No |
| `alias` |  | `String` | No |
| `targetAlias` |  | `String` | No |
| `runTimeStatus` |  | `String` | No |
| `lunSize` |  | `Number` | No |
| `dynamicType` |  | `String` | No |
| `uuid` |  | `String` | No |
| `objectInformation` |  | `VsanVsanObjectInformation` | No |
| `status` |  | `String` | No |

## VsanVsanIscsiLUNRuntimeStatusType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `Offline` |  | `VsanVsanIscsiLUNRuntimeStatusType` | Yes |
| `Online` |  | `VsanVsanIscsiLUNRuntimeStatusType` | Yes |
| `VsanIscsiLUNRuntimeStatusType_Unknown` |  | `VsanVsanIscsiLUNRuntimeStatusType` | Yes |

## VsanVsanIscsiLUNSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `lunId` |  | `Number` | No |
| `alias` |  | `String` | No |
| `storagePolicy` |  | `VsanVirtualMachineProfileSpec` | No |
| `lunSize` |  | `Number` | No |
| `dynamicType` |  | `String` | No |
| `newLunId` |  | `Number` | No |
| `status` |  | `String` | No |

## VsanVsanIscsiTarget

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `affinityLocation` |  | `String` | No |
| `initiatorGroups` |  | `Array/String` | No |
| `port` |  | `Number` | No |
| `networkInterface` |  | `String` | No |
| `iqn` |  | `String` | No |
| `alias` |  | `String` | No |
| `ioOwnerHost` |  | `String` | No |
| `initiators` |  | `Array/String` | No |
| `lunCount` |  | `Number` | No |
| `dynamicType` |  | `String` | No |
| `authSpec` |  | `VsanVsanIscsiTargetAuthSpec` | No |
| `objectInformation` |  | `VsanVsanObjectInformation` | No |

## VsanVsanIscsiTargetAuthSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `userSecretAttachToTarget` |  | `String` | No |
| `userNameAttachToInitiator` |  | `String` | No |
| `userSecretAttachToInitiator` |  | `String` | No |
| `userNameAttachToTarget` |  | `String` | No |
| `authType` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanIscsiTargetAuthSpecVsanIscsiTargetAuthType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `CHAP_Mutual` |  | `VsanVsanIscsiTargetAuthSpecVsanIscsiTargetAuthType` | Yes |
| `VsanIscsiTargetAuthType_Unknown` |  | `VsanVsanIscsiTargetAuthSpecVsanIscsiTargetAuthType` | Yes |
| `CHAP` |  | `VsanVsanIscsiTargetAuthSpecVsanIscsiTargetAuthType` | Yes |
| `NoAuth` |  | `VsanVsanIscsiTargetAuthSpecVsanIscsiTargetAuthType` | Yes |

## VsanVsanIscsiTargetBasicInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `iqn` |  | `String` | No |
| `alias` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanIscsiTargetCommonInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `affinityLocation` |  | `String` | No |
| `port` |  | `Number` | No |
| `networkInterface` |  | `String` | No |
| `iqn` |  | `String` | No |
| `alias` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `authSpec` |  | `VsanVsanIscsiTargetAuthSpec` | No |

## VsanVsanIscsiTargetProcessRuntimeStatus

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `runtimeStatus` |  | `String` | No |
| `processName` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanIscsiTargetServiceConfig

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `defaultConfig` |  | `VsanVsanIscsiTargetServiceDefaultConfigSpec` | No |
| `dynamicType` |  | `String` | No |
| `enabled` |  | `Boolean` | No |

### Methods

#### `VsanVsanIscsiTargetServiceConfig`


**Returns:** `void`

---

#### `VsanVsanIscsiTargetServiceConfig`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `defaultConfig` | `VsanVsanIscsiTargetServiceDefaultConfigSpec` |  |
| `enabled` | `Boolean` |  |

**Returns:** `void`

---

#### `isEnabled`


**Returns:** `Boolean`

---

## VsanVsanIscsiTargetServiceDefaultConfigSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `iscsiTargetAuthSpec` |  | `VsanVsanIscsiTargetAuthSpec` | No |
| `port` |  | `Number` | No |
| `networkInterface` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanIscsiTargetServiceProcessStatus

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `Stopped` |  | `VsanVsanIscsiTargetServiceProcessStatus` | Yes |
| `Running` |  | `VsanVsanIscsiTargetServiceProcessStatus` | Yes |
| `VsanIscsiTargetServiceProcessStatus_Unknown` |  | `VsanVsanIscsiTargetServiceProcessStatus` | Yes |

## VsanVsanIscsiTargetServiceRuntimeStatus

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `processStatus` |  | `Array/VsanVsanIscsiTargetProcessRuntimeStatus` | No |
| `lunRuntimeStatus` |  | `Array/VsanVsanIscsiLUNRuntimeStatus` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanIscsiTargetServiceSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `homeObjectStoragePolicy` |  | `VsanVirtualMachineProfileSpec` | No |
| `defaultConfig` |  | `VsanVsanIscsiTargetServiceDefaultConfigSpec` | No |
| `dynamicType` |  | `String` | No |
| `enabled` |  | `Boolean` | No |

### Methods

#### `VsanVsanIscsiTargetServiceSpec`


**Returns:** `void`

---

#### `VsanVsanIscsiTargetServiceSpec`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `defaultConfig` | `VsanVsanIscsiTargetServiceDefaultConfigSpec` |  |
| `enabled` | `Boolean` |  |
| `homeObjectStoragePolicy` | `VsanVirtualMachineProfileSpec` |  |

**Returns:** `void`

---

#### `isEnabled`


**Returns:** `Boolean`

---

## VsanVsanIscsiTargetSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `affinityLocation` |  | `String` | No |
| `port` |  | `Number` | No |
| `networkInterface` |  | `String` | No |
| `iqn` |  | `String` | No |
| `alias` |  | `String` | No |
| `storagePolicy` |  | `VsanVirtualMachineProfileSpec` | No |
| `dynamicType` |  | `String` | No |
| `authSpec` |  | `VsanVsanIscsiTargetAuthSpec` | No |
| `newAlias` |  | `String` | No |

## VsanVsanIscsiTargetSystem

### Methods

#### `vsanVitGetIscsiTargetServiceStatus`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `Boolean`

---

#### `_getRef`


**Returns:** `VsanManagedObjectReference`

---

#### `vsanVitEditIscsiLUN`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `String` |  |
| `arg2` | `VsanVsanIscsiLUNSpec` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vsanVitRemoveIscsiInitiatorsFromGroup`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `String` |  |
| `arg2` | `Array/String` |  |

**Returns:** `void`

---

#### `vsanVitGetIscsiInitiatorGroups`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `Array/VsanVsanIscsiInitiatorGroup`

---

#### `vsanVitGetIscsiTarget`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `String` |  |

**Returns:** `VsanVsanIscsiTarget`

---

#### `vsanVitGetIscsiTargetServiceConfig`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `VsanVsanIscsiTargetServiceConfig`

---

#### `vsanVitRemoveIscsiLUN`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `String` |  |
| `arg2` | `Number` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vsanRemediateIscsiLunsRuntimeStatus`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vsanVitAddIscsiTargetToGroup`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `String` |  |
| `arg2` | `String` |  |

**Returns:** `void`

---

#### `vsanVitGetIscsiTargetServiceRuntimeStatus`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `VsanVsanIscsiTargetServiceRuntimeStatus`

---

#### `vsanVitGetIscsiLUNs`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Array/String` |  |

**Returns:** `Array/VsanVsanIscsiLUN`

---

#### `vsanVitAddIscsiInitiatorsToGroup`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `String` |  |
| `arg2` | `Array/String` |  |

**Returns:** `void`

---

#### `vsanVitEditIscsiTargetService`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `VsanVsanIscsiTargetServiceSpec` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vsanVitAddIscsiTarget`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `VsanVsanIscsiTargetSpec` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vsanVitQueryIscsiTargetServiceVersion`


**Returns:** `String`

---

#### `vsanVitRemoveIscsiTarget`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `String` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vsanVitAddIscsiInitiatorsToTarget`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `String` |  |
| `arg2` | `Array/String` |  |

**Returns:** `void`

---

#### `vsanVitGetHomeObject`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `VsanVsanObjectInformation`

---

#### `vsanVitAddIscsiLUN`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `String` |  |
| `arg2` | `VsanVsanIscsiLUNSpec` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vsanVitGetIscsiInitiatorGroup`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `String` |  |

**Returns:** `VsanVsanIscsiInitiatorGroup`

---

#### `vsanVitEnableIscsiTargetService`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `VsanVsanIscsiTargetServiceSpec` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vsanVitAddIscsiInitiatorGroup`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `String` |  |

**Returns:** `void`

---

#### `vsanVitRemoveIscsiInitiatorGroup`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `String` |  |

**Returns:** `void`

---

#### `vsanVitRemoveIscsiTargetFromGroup`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `String` |  |
| `arg2` | `String` |  |

**Returns:** `void`

---

#### `vsanVitEditIscsiTarget`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `VsanVsanIscsiTargetSpec` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vsanVitGetIscsiLUN`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `String` |  |
| `arg2` | `Number` |  |

**Returns:** `VsanVsanIscsiLUN`

---

#### `vsanVitCreateHomeObject`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `VsanVsanIscsiHomeObjectSpec` |  |

**Returns:** `void`

---

#### `vsanVitRemoveIscsiInitiatorsFromTarget`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `String` |  |
| `arg2` | `Array/String` |  |

**Returns:** `void`

---

#### `vsanVitGetIscsiTargets`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `Array/VsanVsanIscsiTarget`

---

## VsanVsanJsonComparator

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `comparator` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanJsonFilterRule

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `keysWithStrVal` |  | `Array/String` | No |
| `propertyName` |  | `String` | No |
| `comparablePath` |  | `Array/String` | No |
| `dynamicType` |  | `String` | No |
| `filterComparator` |  | `VsanVsanComparator` | No |

## VsanVsanKmsHealth

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `trustHealth` |  | `String` | No |
| `health` |  | `String` | No |
| `certHealth` |  | `String` | No |
| `serverName` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `certExpireDate` |  | `Date` | No |

## VsanVsanLimitHealthResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `totalRcSizeB` |  | `Number` | No |
| `usedDiskSpaceB` |  | `Number` | No |
| `totalLogicalSpaceB` |  | `Number` | No |
| `dynamicType` |  | `String` | No |
| `issueFound` |  | `Boolean` | No |
| `freeComponents` |  | `Number` | No |
| `slackSpaceCapRequired` |  | `Number` | No |
| `resyncPauseThreshold` |  | `Number` | No |
| `spaceEfficiencyMetadataSizeB` |  | `VsanVsanSpaceEfficiencyMetadataSize` | No |
| `hostname` |  | `String` | No |
| `enforceCapResrvSpace` |  | `Number` | No |
| `dgTransientCapacityUsedB` |  | `Number` | No |
| `dedupMetadataSizeB` |  | `Number` | No |
| `componentLimitHealth` |  | `String` | No |
| `logicalSpaceUsedB` |  | `Number` | No |
| `lowestFreeDiskSpacePct` |  | `Number` | No |
| `minSpaceRequiredForVsanOp` |  | `Number` | No |
| `maxComponents` |  | `Number` | No |
| `reservedRcSizeB` |  | `Number` | No |
| `totalDiskSpaceB` |  | `Number` | No |
| `diskTransientCapacityUsedB` |  | `Number` | No |
| `rcFreeReservationHealth` |  | `String` | No |
| `diskFreeSpaceHealth` |  | `String` | No |
| `hostRebuildCapacity` |  | `Number` | No |
| `cdReservedSizeB` |  | `Number` | No |

## VsanVsanLocalProtectionTargetSiteInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `targetType` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanManagedHostObjectUuids

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `storageObjUuidMapping` |  | `Array/VsanVsanManagedStorageObjUuidMapping` | No |
| `host` |  | `VsanManagedObjectReference` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanManagedStorageObjUuidMapping

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `storageType` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `uuids` |  | `Array/String` | No |
| `storageId` |  | `String` | No |

## VsanVsanMassCollector

### Methods

#### `retrieveLookupTable`


**Returns:** `String`

---

#### `_getRef`


**Returns:** `VsanManagedObjectReference`

---

#### `vsanRetrievePropertiesJson`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/VsanVsanMassCollectorSpec` |  |

**Returns:** `String`

---

## VsanVsanMassCollectorObjectCollectionEnum

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `ALL_VSAN_DATASTORES` |  | `VsanVsanMassCollectorObjectCollectionEnum` | Yes |
| `ALL_VMFS_DATASTORES` |  | `VsanVsanMassCollectorObjectCollectionEnum` | Yes |
| `SERVICE_INSTANCE` |  | `VsanVsanMassCollectorObjectCollectionEnum` | Yes |
| `ALL_HOSTS` |  | `VsanVsanMassCollectorObjectCollectionEnum` | Yes |
| `VCENTER` |  | `VsanVsanMassCollectorObjectCollectionEnum` | Yes |
| `ALL_CLUSTERS` |  | `VsanVsanMassCollectorObjectCollectionEnum` | Yes |
| `ALL_VSAN_ENABLED_CLUSTERS` |  | `VsanVsanMassCollectorObjectCollectionEnum` | Yes |
| `ALL_DATASTORES` |  | `VsanVsanMassCollectorObjectCollectionEnum` | Yes |
| `ALL_VSAN_ENABLED_HOSTS` |  | `VsanVsanMassCollectorObjectCollectionEnum` | Yes |
| `ALL_VSAN_ENABLED_HOSTS_EXCEPT_WITNESS` |  | `VsanVsanMassCollectorObjectCollectionEnum` | Yes |
| `VsanMassCollectorObjectCollectionEnum_Unknown` |  | `VsanVsanMassCollectorObjectCollectionEnum` | Yes |

## VsanVsanMassCollectorPropertyParams

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `propertyName` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanMassCollectorSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `propertiesParams` |  | `Array/VsanVsanMassCollectorPropertyParams` | No |
| `objects` |  | `Array/VsanManagedObjectReference` | No |
| `constraint` |  | `VsanVsanResourceConstraint` | No |
| `dynamicType` |  | `String` | No |
| `objectCollection` |  | `String` | No |
| `properties` |  | `Array/String` | No |

## VsanVsanMetricProfile

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `authToken` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanMetricsConfig

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `profiles` |  | `Array/VsanVsanMetricProfile` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanMigrationClusterEligibleState

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `cluster` |  | `VsanManagedObjectReference` | No |
| `dynamicType` |  | `String` | No |
| `sourceClusterEligibleState` |  | `VsanVsanMigrationEligibleState` | No |
| `destinationClusterEligibleState` |  | `VsanVsanMigrationEligibleState` | No |

## VsanVsanMigrationEligibleState

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `isEligible` |  | `Boolean` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanMigrationEntity

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `id` |  | `String` | No |
| `type` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanMigrationEntityType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `VsanMigrationEntityType_Unknown` |  | `VsanVsanMigrationEntityType` | Yes |
| `VirtualMachine` |  | `VsanVsanMigrationEntityType` | Yes |

## VsanVsanMigrationSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `sourceCluster` |  | `VsanManagedObjectReference` | No |
| `entities` |  | `Array/VsanVsanMigrationEntity` | No |
| `destinationCluster` |  | `VsanManagedObjectReference` | No |
| `startTime` |  | `Date` | No |
| `storagePolicy` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanMigrationSystem

### Methods

#### `vsanMigrationQueryMigrationTasks`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVsanMigrationTaskQuerySpec` |  |

**Returns:** `Array/VsanVsanMigrationTask`

---

#### `vsanMigrationQueryVmEligibleStates`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Array/VsanManagedObjectReference` |  |

**Returns:** `Array/VsanVsanMigrationVmEligibleState`

---

#### `vsanMigrationScheduleMigrationTask`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVsanMigrationSpec` |  |
| `arg1` | `String` |  |

**Returns:** `VsanVsanMigrationTask`

---

#### `_getRef`


**Returns:** `VsanManagedObjectReference`

---

#### `vsanMigrationCancelMigrationTask`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |

**Returns:** `VsanVsanMigrationTask`

---

#### `vsanMigrationQueryClusterEligibleStates`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/VsanManagedObjectReference` |  |

**Returns:** `Array/VsanVsanMigrationClusterEligibleState`

---

#### `vsanMigrationGetPrecheckTask`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |

**Returns:** `VsanVsanMigrationTask`

---

#### `vsanMigrationRemoveMigrationTask`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |

**Returns:** `void`

---

#### `vsanMigrationGetMigrationTask`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |

**Returns:** `VsanVsanMigrationTask`

---

#### `vsanMigrationCancelPrecheckTask`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |

**Returns:** `VsanVsanMigrationTask`

---

#### `vsanMigrationCreatePrecheckTask`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVsanMigrationSpec` |  |

**Returns:** `VsanVsanMigrationTask`

---

#### `vsanMigrationQueryPrecheckTasks`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVsanMigrationTaskQuerySpec` |  |

**Returns:** `Array/VsanVsanMigrationTask`

---

## VsanVsanMigrationTask

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `result` |  | `Array/VsanVsanMigrationTaskResultItem` | No |
| `eta` |  | `Number` | No |
| `task` |  | `VsanManagedObjectReference` | No |
| `migrationSpec` |  | `VsanVsanMigrationSpec` | No |
| `startTime` |  | `Date` | No |
| `state` |  | `String` | No |
| `id` |  | `String` | No |
| `endTime` |  | `Date` | No |
| `type` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanMigrationTaskQuerySpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `sourceCluster` |  | `VsanManagedObjectReference` | No |
| `destinationCluster` |  | `VsanManagedObjectReference` | No |
| `dynamicType` |  | `String` | No |
| `status` |  | `String` | No |

## VsanVsanMigrationTaskResultItem

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `children` |  | `Array/VsanVsanMigrationTaskResultItem` | No |
| `dynamicType` |  | `String` | No |
| `entity` |  | `VsanManagedObjectReference` | No |
| `status` |  | `String` | No |

## VsanVsanMigrationTaskResultStatus

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `red` |  | `VsanVsanMigrationTaskResultStatus` | Yes |
| `green` |  | `VsanVsanMigrationTaskResultStatus` | Yes |
| `VsanMigrationTaskResultStatus_Unknown` |  | `VsanVsanMigrationTaskResultStatus` | Yes |
| `yellow` |  | `VsanVsanMigrationTaskResultStatus` | Yes |
| `info` |  | `VsanVsanMigrationTaskResultStatus` | Yes |

## VsanVsanMigrationTaskState

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `running` |  | `VsanVsanMigrationTaskState` | Yes |
| `canceling` |  | `VsanVsanMigrationTaskState` | Yes |
| `canceled` |  | `VsanVsanMigrationTaskState` | Yes |
| `scheduled` |  | `VsanVsanMigrationTaskState` | Yes |
| `succeed` |  | `VsanVsanMigrationTaskState` | Yes |
| `VsanMigrationTaskState_Unknown` |  | `VsanVsanMigrationTaskState` | Yes |
| `failed` |  | `VsanVsanMigrationTaskState` | Yes |

## VsanVsanMigrationTaskType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `precheck` |  | `VsanVsanMigrationTaskType` | Yes |
| `migration` |  | `VsanVsanMigrationTaskType` | Yes |
| `VsanMigrationTaskType_Unknown` |  | `VsanVsanMigrationTaskType` | Yes |

## VsanVsanMigrationVmEligibleState

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `vmEligibleState` |  | `VsanVsanMigrationEligibleState` | No |
| `vm` |  | `VsanManagedObjectReference` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanMixedEsxVersionInClientIssue

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `msg` |  | `String` | No |
| `clusterName` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanMixedEsxVersionIssue

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `msg` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanMode

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `Mode_Compute` |  | `VsanVsanMode` | Yes |
| `Mode_None` |  | `VsanVsanMode` | Yes |
| `Mode_Unknown` |  | `VsanVsanMode` | Yes |
| `Mode_Storage` |  | `VsanVsanMode` | Yes |

## VsanVsanMountPrecheckItem

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `type` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `status` |  | `String` | No |

## VsanVsanMountPrecheckNetworkConnectivity

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `smallPingTestSuccessPct` |  | `Number` | No |
| `host` |  | `VsanManagedObjectReference` | No |
| `dynamicType` |  | `String` | No |
| `largePingTestSuccessPct` |  | `Number` | No |
| `status` |  | `String` | No |

## VsanVsanMountPrecheckNetworkConnectivityDetail

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `networkConnectivity` |  | `Array/VsanVsanMountPrecheckNetworkConnectivity` | No |
| `host` |  | `VsanManagedObjectReference` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanMountPrecheckNetworkConnectivityResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `details` |  | `Array/VsanVsanMountPrecheckNetworkConnectivityDetail` | No |
| `type` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `status` |  | `String` | No |

## VsanVsanMountPrecheckNetworkLatency

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `host` |  | `VsanManagedObjectReference` | No |
| `dynamicType` |  | `String` | No |
| `networkLatency` |  | `Number` | No |
| `status` |  | `String` | No |

## VsanVsanMountPrecheckNetworkLatencyDetail

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `host` |  | `VsanManagedObjectReference` | No |
| `dynamicType` |  | `String` | No |
| `networkLatencies` |  | `Array/VsanVsanMountPrecheckNetworkLatency` | No |

## VsanVsanMountPrecheckNetworkLatencyResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `details` |  | `Array/VsanVsanMountPrecheckNetworkLatencyDetail` | No |
| `type` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `status` |  | `String` | No |

## VsanVsanMountPrecheckResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `result` |  | `Array/VsanVsanMountPrecheckItem` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanNestJsonComparator

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `nestedComparators` |  | `Array/VsanVsanJsonComparator` | No |
| `dynamicType` |  | `String` | No |
| `conjoiner` |  | `String` | No |

## VsanVsanNetworkConfigBaseIssue

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |

## VsanVsanNetworkConfigBestPracticeHealth

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `vdsPresent` |  | `Boolean` | No |
| `dynamicType` |  | `String` | No |
| `issues` |  | `Array/VsanVsanNetworkConfigBaseIssue` | No |

## VsanVsanNetworkConfigPnicSpeedInconsistencyIssue

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `vswitchName` |  | `String` | No |
| `vds` |  | `VsanManagedObjectReference` | No |
| `host` |  | `VsanManagedObjectReference` | No |
| `speedsMb` |  | `Array/Number` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanNetworkConfigPortgroupWithNoRedundancyIssue

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `numPnics` |  | `Number` | No |
| `vds` |  | `VsanManagedObjectReference` | No |
| `pg` |  | `VsanManagedObjectReference` | No |
| `host` |  | `VsanManagedObjectReference` | No |
| `portgroupName` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanNetworkConfigVdsScopeIssue

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `nonMemberHosts` |  | `Array/VsanManagedObjectReference` | No |
| `vds` |  | `VsanManagedObjectReference` | No |
| `memberHosts` |  | `Array/VsanManagedObjectReference` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanNetworkConfigVsanNotOnVdsIssue

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `host` |  | `VsanManagedObjectReference` | No |
| `vmknic` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanNetworkConfigVswitchWithNoRedundancyIssue

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `numPnics` |  | `Number` | No |
| `vswitchName` |  | `String` | No |
| `vds` |  | `VsanManagedObjectReference` | No |
| `host` |  | `VsanManagedObjectReference` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanNetworkDiagnostics

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `severity` |  | `String` | No |
| `eventTypeId` |  | `String` | No |
| `host` |  | `VsanManagedObjectReference` | No |
| `createdTime` |  | `Date` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanNetworkDiagnosticsHealthInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `lACPInfo` |  | `Array/VsanLACPInfo` | No |
| `pnicTSOInfo` |  | `Array/VsanPnicTSOInfo` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanNetworkHealthResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `inUnicast` |  | `Boolean` | No |
| `peerHealth` |  | `Array/VsanVsanNetworkPeerHealthResult` | No |
| `unicastConfig` |  | `String` | No |
| `vsanVmknicPresent` |  | `Boolean` | No |
| `issueFound` |  | `Boolean` | No |
| `dynamicType` |  | `String` | No |
| `serverClusters` |  | `Array/VsanVsanServerClusterInfo` | No |
| `hostname` |  | `String` | No |
| `externalPeerHealth` |  | `Array/VsanVsanNetworkPeerHealthResult` | No |
| `multicastConfig` |  | `String` | No |
| `ipSubnets` |  | `Array/String` | No |
| `vMotionHealth` |  | `Array/VsanVsanNetworkPeerHealthResult` | No |
| `host` |  | `VsanManagedObjectReference` | No |
| `rdtConnProtocol` |  | `String` | No |
| `rdmaEnabled` |  | `Boolean` | No |

### Methods

#### `VsanVsanNetworkHealthResult`


**Returns:** `void`

---

#### `VsanVsanNetworkHealthResult`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `host` | `VsanManagedObjectReference` |  |
| `hostname` | `String` |  |
| `vsanVmknicPresent` | `Boolean` |  |
| `ipSubnets` | `Array/String` |  |
| `issueFound` | `Boolean` |  |
| `peerHealth` | `Array/VsanVsanNetworkPeerHealthResult` |  |
| `vMotionHealth` | `Array/VsanVsanNetworkPeerHealthResult` |  |
| `multicastConfig` | `String` |  |
| `unicastConfig` | `String` |  |
| `inUnicast` | `Boolean` |  |
| `rdmaEnabled` | `Boolean` |  |
| `rdtConnProtocol` | `String` |  |
| `serverClusters` | `Array/VsanVsanServerClusterInfo` |  |
| `externalPeerHealth` | `Array/VsanVsanNetworkPeerHealthResult` |  |

**Returns:** `void`

---

#### `isIssueFound`


**Returns:** `Boolean`

---

#### `isRdmaEnabled`


**Returns:** `Boolean`

---

#### `isInUnicast`


**Returns:** `Boolean`

---

#### `isVsanVmknicPresent`


**Returns:** `Boolean`

---

## VsanVsanNetworkLoadTestResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `bandwidthBps` |  | `Number` | No |
| `hostname` |  | `String` | No |
| `lostDatagrams` |  | `Number` | No |
| `client` |  | `Boolean` | No |
| `totalBytes` |  | `Number` | No |
| `lossPct` |  | `Number` | No |
| `dynamicType` |  | `String` | No |
| `jitterMs` |  | `Number` | No |
| `sentDatagrams` |  | `Number` | No |
| `status` |  | `String` | No |

## VsanVsanNetworkPeerHealthResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `smallPingTestSuccessPct` |  | `Number` | No |
| `peerHostname` |  | `String` | No |
| `onSameIpSubnet` |  | `Boolean` | No |
| `sourceVmknicName` |  | `String` | No |
| `peer` |  | `String` | No |
| `connectivityHealthState` |  | `String` | No |
| `peerVmknicName` |  | `String` | No |
| `maxLatencyUs` |  | `Number` | No |
| `dynamicType` |  | `String` | No |
| `missingHeartBeatCount` |  | `Number` | No |
| `largePingTestSuccessPct` |  | `Number` | No |

### Methods

#### `VsanVsanNetworkPeerHealthResult`


**Returns:** `void`

---

#### `VsanVsanNetworkPeerHealthResult`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `peer` | `String` |  |
| `peerHostname` | `String` |  |
| `peerVmknicName` | `String` |  |
| `smallPingTestSuccessPct` | `Number` |  |
| `largePingTestSuccessPct` | `Number` |  |
| `maxLatencyUs` | `Number` |  |
| `onSameIpSubnet` | `Boolean` |  |
| `sourceVmknicName` | `String` |  |
| `connectivityHealthState` | `String` |  |
| `missingHeartBeatCount` | `Number` |  |

**Returns:** `void`

---

#### `isOnSameIpSubnet`


**Returns:** `Boolean`

---

## VsanVsanNetworkVMotionVmknicNotFountIssue

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `hostWithoutVmotionVmknic` |  | `VsanManagedObjectReference` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanNicRdmaInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `pfcEnabled` |  | `Boolean` | No |
| `rdmaCapable` |  | `Boolean` | No |
| `pfcConfig` |  | `String` | No |
| `rdmaProtocolCapable` |  | `String` | No |
| `dcbEnabled` |  | `Boolean` | No |
| `dynamicType` |  | `String` | No |
| `dcbMode` |  | `String` | No |

### Methods

#### `VsanVsanNicRdmaInfo`


**Returns:** `void`

---

#### `VsanVsanNicRdmaInfo`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `rdmaCapable` | `Boolean` |  |
| `rdmaProtocolCapable` | `String` |  |
| `dcbEnabled` | `Boolean` |  |
| `dcbMode` | `String` |  |
| `pfcEnabled` | `Boolean` |  |
| `pfcConfig` | `String` |  |

**Returns:** `void`

---

#### `isDcbEnabled`


**Returns:** `Boolean`

---

#### `isPfcEnabled`


**Returns:** `Boolean`

---

#### `isRdmaCapable`


**Returns:** `Boolean`

---

## VsanVsanNodeNotMaster

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `cmmdsMasterButNotStatsMaster` |  | `Boolean` | No |
| `localizedMessage` | Creates a localized description of this throwable. Subclasses may override this method in order to produce a locale-specific message. For subclasses that do not override this method, the default implementation returns the same result as {@code getMessage()}. | `String` | Yes |
| `vsanMasterUuid` |  | `String` | No |
| `message` |  | `String` | No |

### Methods

#### `VsanVsanNodeNotMaster`


**Returns:** `void`

---

#### `VsanVsanNodeNotMaster`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vsanMasterUuid` | `String` |  |
| `cmmdsMasterButNotStatsMaster` | `Boolean` |  |

**Returns:** `void`

---

#### `isCmmdsMasterButNotStatsMaster`


**Returns:** `Boolean`

---

#### `printStackTrace`
Prints this throwable and its backtrace to the standard error stream. This method prints a stack trace for this {@code Throwable} object on the error output stream that is the value of the field {@code System.err}. The first line of output contains the result of the {@link #toString()} method for this object. Remaining lines represent data previously recorded by the method {@link #fillInStackTrace()}. The format of this information depends on the implementation, but the following example may be regarded as typical:
java.lang.NullPointerException
        at MyClass.mash(MyClass.java:9)
        at MyClass.crunch(MyClass.java:6)
        at MyClass.main(MyClass.java:3)

This example was produced by running the program:
class MyClass {
    public static void main(String[] args) {
        crunch(null);
    }
    static void crunch(int[] a) {
        mash(a);
    }
    static void mash(int[] b) {
        System.out.println(b[0]);
    }
}

The backtrace for a throwable with an initialized, non-null cause should generally include the backtrace for the cause. The format of this information depends on the implementation, but the following example may be regarded as typical:
HighLevelException: MidLevelException: LowLevelException
        at Junk.a(Junk.java:13)
        at Junk.main(Junk.java:4)
Caused by: MidLevelException: LowLevelException
        at Junk.c(Junk.java:23)
        at Junk.b(Junk.java:17)
        at Junk.a(Junk.java:11)
        ... 1 more
Caused by: LowLevelException
        at Junk.e(Junk.java:30)
        at Junk.d(Junk.java:27)
        at Junk.c(Junk.java:21)
        ... 3 more

Note the presence of lines containing the characters {@code "..."}. These lines indicate that the remainder of the stack trace for this exception matches the indicated number of frames from the bottom of the stack trace of the exception that was caused by this exception (the "enclosing" exception). This shorthand can greatly reduce the length of the output in the common case where a wrapped exception is thrown from same method as the "causative exception" is caught. The above example was produced by running the program:
public class Junk {
    public static void main(String args[]) {
        try {
            a();
        } catch(HighLevelException e) {
            e.printStackTrace();
        }
    }
    static void a() throws HighLevelException {
        try {
            b();
        } catch(MidLevelException e) {
            throw new HighLevelException(e);
        }
    }
    static void b() throws MidLevelException {
        c();
    }
    static void c() throws MidLevelException {
        try {
            d();
        } catch(LowLevelException e) {
            throw new MidLevelException(e);
        }
    }
    static void d() throws LowLevelException {
       e();
    }
    static void e() throws LowLevelException {
        throw new LowLevelException();
    }
}

class HighLevelException extends Exception {
    HighLevelException(Throwable cause) { super(cause); }
}

class MidLevelException extends Exception {
    MidLevelException(Throwable cause)  { super(cause); }
}

class LowLevelException extends Exception {
}

As of release 7, the platform supports the notion of suppressed exceptions (in conjunction with the {@code try}-with-resources statement). Any exceptions that were suppressed in order to deliver an exception are printed out beneath the stack trace. The format of this information depends on the implementation, but the following example may be regarded as typical:
Exception in thread "main" java.lang.Exception: Something happened
 at Foo.bar(Foo.java:10)
 at Foo.main(Foo.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 0
         at Resource.close(Resource.java:26)
         at Foo.bar(Foo.java:9)
         ... 1 more

Note that the "... n more" notation is used on suppressed exceptions just at it is used on causes. Unlike causes, suppressed exceptions are indented beyond their "containing exceptions."

An exception can have both a cause and one or more suppressed exceptions:

Exception in thread "main" java.lang.Exception: Main block
 at Foo3.main(Foo3.java:7)
 Suppressed: Resource$CloseFailException: Resource ID = 2
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 1
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
Caused by: java.lang.Exception: I did it
 at Foo3.main(Foo3.java:8)

Likewise, a suppressed exception can have a cause:
Exception in thread "main" java.lang.Exception: Main block
 at Foo4.main(Foo4.java:6)
 Suppressed: Resource2$CloseFailException: Resource ID = 1
         at Resource2.close(Resource2.java:20)
         at Foo4.main(Foo4.java:5)
 Caused by: java.lang.Exception: Rats, you caught me
         at Resource2$CloseFailException.<init>(Resource2.java:45)
         ... 2 more

**Returns:** `void`

---

## VsanVsanNotificationSystem

### Methods

#### `unregisterApplicationInstance`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |

**Returns:** `void`

---

#### `updateObservableSpecs`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |
| `arg1` | `Array/VsanVsanObservableSpec` |  |

**Returns:** `void`

---

#### `_getRef`


**Returns:** `VsanManagedObjectReference`

---

#### `registerApplicationInstance`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVsanApplicationInstance` |  |

**Returns:** `void`

---

#### `getObservableSpecs`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |
| `arg1` | `Array/String` |  |

**Returns:** `Array/VsanVsanObservableSpec`

---

#### `getSubscriptionStatus`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |

**Returns:** `Array/VsanVsanObservableSpecSubscription`

---

#### `delteteObservableSpecs`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |
| `arg1` | `Array/String` |  |

**Returns:** `void`

---

#### `updateApplicationInstance`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVsanApplicationInstance` |  |

**Returns:** `void`

---

#### `setSubscriptionStatus`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |
| `arg1` | `Array/VsanVsanObservableSpecSubscription` |  |

**Returns:** `void`

---

## VsanVsanNotificationSystemFault

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `localizedMessage` | Creates a localized description of this throwable. Subclasses may override this method in order to produce a locale-specific message. For subclasses that do not override this method, the default implementation returns the same result as {@code getMessage()}. | `String` | Yes |
| `message` |  | `String` | No |

### Methods

#### `VsanVsanNotificationSystemFault`


**Returns:** `void`

---

#### `printStackTrace`
Prints this throwable and its backtrace to the standard error stream. This method prints a stack trace for this {@code Throwable} object on the error output stream that is the value of the field {@code System.err}. The first line of output contains the result of the {@link #toString()} method for this object. Remaining lines represent data previously recorded by the method {@link #fillInStackTrace()}. The format of this information depends on the implementation, but the following example may be regarded as typical:
java.lang.NullPointerException
        at MyClass.mash(MyClass.java:9)
        at MyClass.crunch(MyClass.java:6)
        at MyClass.main(MyClass.java:3)

This example was produced by running the program:
class MyClass {
    public static void main(String[] args) {
        crunch(null);
    }
    static void crunch(int[] a) {
        mash(a);
    }
    static void mash(int[] b) {
        System.out.println(b[0]);
    }
}

The backtrace for a throwable with an initialized, non-null cause should generally include the backtrace for the cause. The format of this information depends on the implementation, but the following example may be regarded as typical:
HighLevelException: MidLevelException: LowLevelException
        at Junk.a(Junk.java:13)
        at Junk.main(Junk.java:4)
Caused by: MidLevelException: LowLevelException
        at Junk.c(Junk.java:23)
        at Junk.b(Junk.java:17)
        at Junk.a(Junk.java:11)
        ... 1 more
Caused by: LowLevelException
        at Junk.e(Junk.java:30)
        at Junk.d(Junk.java:27)
        at Junk.c(Junk.java:21)
        ... 3 more

Note the presence of lines containing the characters {@code "..."}. These lines indicate that the remainder of the stack trace for this exception matches the indicated number of frames from the bottom of the stack trace of the exception that was caused by this exception (the "enclosing" exception). This shorthand can greatly reduce the length of the output in the common case where a wrapped exception is thrown from same method as the "causative exception" is caught. The above example was produced by running the program:
public class Junk {
    public static void main(String args[]) {
        try {
            a();
        } catch(HighLevelException e) {
            e.printStackTrace();
        }
    }
    static void a() throws HighLevelException {
        try {
            b();
        } catch(MidLevelException e) {
            throw new HighLevelException(e);
        }
    }
    static void b() throws MidLevelException {
        c();
    }
    static void c() throws MidLevelException {
        try {
            d();
        } catch(LowLevelException e) {
            throw new MidLevelException(e);
        }
    }
    static void d() throws LowLevelException {
       e();
    }
    static void e() throws LowLevelException {
        throw new LowLevelException();
    }
}

class HighLevelException extends Exception {
    HighLevelException(Throwable cause) { super(cause); }
}

class MidLevelException extends Exception {
    MidLevelException(Throwable cause)  { super(cause); }
}

class LowLevelException extends Exception {
}

As of release 7, the platform supports the notion of suppressed exceptions (in conjunction with the {@code try}-with-resources statement). Any exceptions that were suppressed in order to deliver an exception are printed out beneath the stack trace. The format of this information depends on the implementation, but the following example may be regarded as typical:
Exception in thread "main" java.lang.Exception: Something happened
 at Foo.bar(Foo.java:10)
 at Foo.main(Foo.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 0
         at Resource.close(Resource.java:26)
         at Foo.bar(Foo.java:9)
         ... 1 more

Note that the "... n more" notation is used on suppressed exceptions just at it is used on causes. Unlike causes, suppressed exceptions are indented beyond their "containing exceptions."

An exception can have both a cause and one or more suppressed exceptions:

Exception in thread "main" java.lang.Exception: Main block
 at Foo3.main(Foo3.java:7)
 Suppressed: Resource$CloseFailException: Resource ID = 2
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 1
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
Caused by: java.lang.Exception: I did it
 at Foo3.main(Foo3.java:8)

Likewise, a suppressed exception can have a cause:
Exception in thread "main" java.lang.Exception: Main block
 at Foo4.main(Foo4.java:6)
 Suppressed: Resource2$CloseFailException: Resource ID = 1
         at Resource2.close(Resource2.java:20)
         at Foo4.main(Foo4.java:5)
 Caused by: java.lang.Exception: Rats, you caught me
         at Resource2$CloseFailException.<init>(Resource2.java:45)
         ... 2 more

**Returns:** `void`

---

## VsanVsanObjectDataProtectionHealthState

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `multiplecgsforpe` |  | `VsanVsanObjectDataProtectionHealthState` | Yes |
| `protectionok` |  | `VsanVsanObjectDataProtectionHealthState` | Yes |
| `notconfigured` |  | `VsanVsanObjectDataProtectionHealthState` | Yes |
| `archivestoreinaccessible` |  | `VsanVsanObjectDataProtectionHealthState` | Yes |
| `retentionfailures` |  | `VsanVsanObjectDataProtectionHealthState` | Yes |
| `invalidprotectionconfiguration` |  | `VsanVsanObjectDataProtectionHealthState` | Yes |
| `unknown` |  | `VsanVsanObjectDataProtectionHealthState` | Yes |
| `fullsyncinprogress` |  | `VsanVsanObjectDataProtectionHealthState` | Yes |
| `cgobjectnotavailable` |  | `VsanVsanObjectDataProtectionHealthState` | Yes |
| `cgcontainsunpromotedobjects` |  | `VsanVsanObjectDataProtectionHealthState` | Yes |
| `localstorageusageexceededthreshold` |  | `VsanVsanObjectDataProtectionHealthState` | Yes |
| `vmquiescingfailed` |  | `VsanVsanObjectDataProtectionHealthState` | Yes |
| `archivestorenospace` |  | `VsanVsanObjectDataProtectionHealthState` | Yes |
| `archivetargetnotconfigured` |  | `VsanVsanObjectDataProtectionHealthState` | Yes |

## VsanVsanObjectDetail

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `snapshots` |  | `Array/VsanVsanSnapshotDetail` | No |
| `objectPath` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `uuid` |  | `String` | No |

## VsanVsanObjectExtraAttributes

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `ownerClusterUuid` |  | `String` | No |
| `objPath` |  | `String` | No |
| `objClass` |  | `Number` | No |
| `isHbrCfg` |  | `Boolean` | No |
| `ufn` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `uuid` |  | `String` | No |

## VsanVsanObjectHealth

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dataProtectionHealth` |  | `String` | No |
| `healthV2` |  | `VsanVsanObjectHealthStateV2` | No |
| `vsanClusterUuid` |  | `String` | No |
| `health` |  | `String` | No |
| `objUuids` |  | `Array/String` | No |
| `dynamicType` |  | `String` | No |
| `numObjects` |  | `Number` | No |

## VsanVsanObjectHealthComplianceLevel

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `noncompliant` |  | `VsanVsanObjectHealthComplianceLevel` | Yes |
| `inaccessible` |  | `VsanVsanObjectHealthComplianceLevel` | Yes |
| `VsanObjectHealthComplianceLevel_Unknown` |  | `VsanVsanObjectHealthComplianceLevel` | Yes |
| `compliant` |  | `VsanVsanObjectHealthComplianceLevel` | Yes |
| `remoteAccessible` |  | `VsanVsanObjectHealthComplianceLevel` | Yes |

## VsanVsanObjectHealthIncomplianceReason

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `othernoncompliant` |  | `VsanVsanObjectHealthIncomplianceReason` | Yes |
| `reducedavailabilitywithdurability` |  | `VsanVsanObjectHealthIncomplianceReason` | Yes |
| `reducedavailabilitywithnodurability` |  | `VsanVsanObjectHealthIncomplianceReason` | Yes |
| `VsanObjectHealthIncomplianceReason_Unknown` |  | `VsanVsanObjectHealthIncomplianceReason` | Yes |

## VsanVsanObjectHealthPolicyApplicationState

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `VsanObjectHealthPolicyApplicationState_Unknown` |  | `VsanVsanObjectHealthPolicyApplicationState` | Yes |
| `pending` |  | `VsanVsanObjectHealthPolicyApplicationState` | Yes |
| `failed` |  | `VsanVsanObjectHealthPolicyApplicationState` | Yes |

## VsanVsanObjectHealthRebuildState

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `activerebuild` |  | `VsanVsanObjectHealthRebuildState` | Yes |
| `VsanObjectHealthRebuildState_Unknown` |  | `VsanVsanObjectHealthRebuildState` | Yes |
| `pausedrebuild` |  | `VsanVsanObjectHealthRebuildState` | Yes |
| `scheduledrebuild` |  | `VsanVsanObjectHealthRebuildState` | Yes |
| `norebuild` |  | `VsanVsanObjectHealthRebuildState` | Yes |

## VsanVsanObjectHealthStateV2

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `policyApplicationState` |  | `String` | No |
| `rebuildState` |  | `String` | No |
| `complianceLevel` |  | `String` | No |
| `incomplianceReason` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanObjectHealthVersion

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `v1` |  | `VsanVsanObjectHealthVersion` | Yes |
| `v2` |  | `VsanVsanObjectHealthVersion` | Yes |
| `VsanObjectHealthVersion_Unknown` |  | `VsanVsanObjectHealthVersion` | Yes |

## VsanVsanObjectHealthVsanObjectHealthState

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `inaccessible` |  | `VsanVsanObjectHealthVsanObjectHealthState` | Yes |
| `nonavailabilityrelatedincompliancewithpausedrebuild` |  | `VsanVsanObjectHealthVsanObjectHealthState` | Yes |
| `nonavailabilityrelatedincompliance` |  | `VsanVsanObjectHealthVsanObjectHealthState` | Yes |
| `nonavailabilityrelatedincompliancewithpolicypending` |  | `VsanVsanObjectHealthVsanObjectHealthState` | Yes |
| `reducedavailabilitywithnorebuild` |  | `VsanVsanObjectHealthVsanObjectHealthState` | Yes |
| `reducedavailabilitywithactiverebuild` |  | `VsanVsanObjectHealthVsanObjectHealthState` | Yes |
| `VsanObjectHealthState_Unknown` |  | `VsanVsanObjectHealthVsanObjectHealthState` | Yes |
| `reducedavailabilitywithnorebuilddelaytimer` |  | `VsanVsanObjectHealthVsanObjectHealthState` | Yes |
| `reducedavailabilitywithpolicypendingfailed` |  | `VsanVsanObjectHealthVsanObjectHealthState` | Yes |
| `reducedavailabilitywithpausedrebuild` |  | `VsanVsanObjectHealthVsanObjectHealthState` | Yes |
| `datamove` |  | `VsanVsanObjectHealthVsanObjectHealthState` | Yes |
| `healthy` |  | `VsanVsanObjectHealthVsanObjectHealthState` | Yes |
| `reducedavailabilitywithpolicypending` |  | `VsanVsanObjectHealthVsanObjectHealthState` | Yes |
| `nonavailabilityrelatedreconfig` |  | `VsanVsanObjectHealthVsanObjectHealthState` | Yes |
| `nonavailabilityrelatedincompliancewithpolicypendingfailed` |  | `VsanVsanObjectHealthVsanObjectHealthState` | Yes |
| `remoteAccessible` |  | `VsanVsanObjectHealthVsanObjectHealthState` | Yes |

## VsanVsanObjectIdentity

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `vm` |  | `VsanManagedObjectReference` | No |
| `description` |  | `String` | No |
| `typeExtId` |  | `String` | No |
| `spbmProfileUuid` |  | `String` | No |
| `vmNsObjectUuid` |  | `String` | No |
| `type` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `uuid` |  | `String` | No |
| `dpSpaceUsageInfos` |  | `Array/VsanVsanDataProtectionSpaceUsage` | No |
| `spbmProfileName` |  | `String` | No |
| `vmInstanceUuid` |  | `String` | No |

## VsanVsanObjectIdentityAndHealth

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `identities` |  | `Array/VsanVsanObjectIdentity` | No |
| `health` |  | `VsanVsanObjectOverallHealth` | No |
| `rawData` |  | `String` | No |
| `spaceSummary` |  | `Array/VsanVsanObjectSpaceSummary` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanObjectInaccessibleIssue

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `msg` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `uuids` |  | `Array/String` | No |

## VsanVsanObjectInformation

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `vsanObjectUuid` |  | `String` | No |
| `spbmComplianceResult` |  | `VsanVsanStorageComplianceResult` | No |
| `vsanHealth` |  | `String` | No |
| `spbmProfileUuid` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `spbmProfileGenerationId` |  | `String` | No |
| `directoryName` |  | `String` | No |
| `vsanDataProtectionHealth` |  | `String` | No |

## VsanVsanObjectIOStats

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `backingObjectId` |  | `String` | No |
| `ioLatencyStats` |  | `Array/VsanVsanIOLatency` | No |
| `objectLayout` |  | `VsanVsanIODiagnosticsObjectLayout` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanObjectManager

### Methods

#### `revertToSnapshots`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |
| `arg1` | `VsanManagedObjectReference` |  |
| `arg2` | `Array/VsanVsanObjectSnapshotId` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `_getRef`


**Returns:** `VsanManagedObjectReference`

---

#### `vsanObjectManager_CreateSnapshot`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |
| `arg1` | `VsanManagedObjectReference` |  |
| `arg2` | `Array/VsanVsanObjSnapParams` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `querySnapshots`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVsanSnapshotQuerySpec` |  |
| `arg1` | `VsanManagedObjectReference` |  |

**Returns:** `VsanVsanSnapshotQueryResult`

---

#### `deleteSnapshots`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |
| `arg1` | `VsanManagedObjectReference` |  |
| `arg2` | `Array/VsanVsanObjectSnapshotId` |  |

**Returns:** `VsanManagedObjectReference`

---

## VsanVsanObjectOverallHealth

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `objectFormatChangeRequiredUuids` |  | `Array/String` | No |
| `objectsComplianceDetail` |  | `Array/VsanVsanStorageComplianceResult` | No |
| `objectVersionCompliance` |  | `Boolean` | No |
| `objectHealthDetail` |  | `Array/VsanVsanObjectHealth` | No |
| `objectsRelayoutBytes` |  | `Number` | No |
| `dynamicType` |  | `String` | No |

### Methods

#### `VsanVsanObjectOverallHealth`


**Returns:** `void`

---

#### `VsanVsanObjectOverallHealth`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `objectHealthDetail` | `Array/VsanVsanObjectHealth` |  |
| `objectsComplianceDetail` | `Array/VsanVsanStorageComplianceResult` |  |
| `objectVersionCompliance` | `Boolean` |  |
| `objectFormatChangeRequiredUuids` | `Array/String` |  |
| `objectsRelayoutBytes` | `Number` |  |

**Returns:** `void`

---

#### `isObjectVersionCompliance`


**Returns:** `Boolean`

---

## VsanVsanObjectPolicyIssue

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `msg` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `uuids` |  | `Array/String` | No |

## VsanVsanObjectProfileInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `vsanObjectUuid` |  | `String` | No |
| `spbmProfileId` |  | `String` | No |
| `spbmProfileGenerationNum` |  | `Number` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanObjectQuerySpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |
| `uuid` |  | `String` | No |
| `spbmProfileGenerationId` |  | `String` | No |

## VsanVsanObjectSnapshotId

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `snapshotId` |  | `Number` | No |
| `cookie` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `uuid` |  | `String` | No |

## VsanVsanObjectSpaceSummary

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `overReservedB` |  | `Number` | No |
| `objTypeExtDesc` |  | `String` | No |
| `usedB` |  | `Number` | No |
| `primaryCapacityB` |  | `Number` | No |
| `reservedCapacityB` |  | `Number` | No |
| `physicalUsedB` |  | `Number` | No |
| `dynamicType` |  | `String` | No |
| `provisionCapacityB` |  | `Number` | No |
| `overheadB` |  | `Number` | No |
| `temporaryOverheadB` |  | `Number` | No |
| `dpSpaceUsageInfo` |  | `VsanVsanDataProtectionSpaceUsageStats` | No |
| `objTypeExt` |  | `String` | No |
| `snapshotUsedB` |  | `Number` | No |
| `objType` |  | `String` | No |

## VsanVsanObjectSpaceSummaryVsanObjectTypeEnum

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `esaObjectOverhead` |  | `VsanVsanObjectSpaceSummaryVsanObjectTypeEnum` | Yes |
| `other` |  | `VsanVsanObjectSpaceSummaryVsanObjectTypeEnum` | Yes |
| `checksumOverhead` |  | `VsanVsanObjectSpaceSummaryVsanObjectTypeEnum` | Yes |
| `extension` |  | `VsanVsanObjectSpaceSummaryVsanObjectTypeEnum` | Yes |
| `dedupSharedUserData` |  | `VsanVsanObjectSpaceSummaryVsanObjectTypeEnum` | Yes |
| `iscsiLun` |  | `VsanVsanObjectSpaceSummaryVsanObjectTypeEnum` | Yes |
| `spaceUnderDedupConsideration` |  | `VsanVsanObjectSpaceSummaryVsanObjectTypeEnum` | Yes |
| `attachedCnsVolBlock` |  | `VsanVsanObjectSpaceSummaryVsanObjectTypeEnum` | Yes |
| `VsanObjectTypeEnum_Unknown` |  | `VsanVsanObjectSpaceSummaryVsanObjectTypeEnum` | Yes |
| `detachedCnsVolBlock` |  | `VsanVsanObjectSpaceSummaryVsanObjectTypeEnum` | Yes |
| `physicalTransientSpace` |  | `VsanVsanObjectSpaceSummaryVsanObjectTypeEnum` | Yes |
| `vmswap` |  | `VsanVsanObjectSpaceSummaryVsanObjectTypeEnum` | Yes |
| `haMetadataObject` |  | `VsanVsanObjectSpaceSummaryVsanObjectTypeEnum` | Yes |
| `hbrDisk` |  | `VsanVsanObjectSpaceSummaryVsanObjectTypeEnum` | Yes |
| `hbrCfg` |  | `VsanVsanObjectSpaceSummaryVsanObjectTypeEnum` | Yes |
| `resynPauseThresholdForHost` |  | `VsanVsanObjectSpaceSummaryVsanObjectTypeEnum` | Yes |
| `fileShare` |  | `VsanVsanObjectSpaceSummaryVsanObjectTypeEnum` | Yes |
| `fileServiceRoot` |  | `VsanVsanObjectSpaceSummaryVsanObjectTypeEnum` | Yes |
| `minSpaceRequiredForVsanOp` |  | `VsanVsanObjectSpaceSummaryVsanObjectTypeEnum` | Yes |
| `transientSpace` |  | `VsanVsanObjectSpaceSummaryVsanObjectTypeEnum` | Yes |
| `vmem` |  | `VsanVsanObjectSpaceSummaryVsanObjectTypeEnum` | Yes |
| `attachedCnsVolFile` |  | `VsanVsanObjectSpaceSummaryVsanObjectTypeEnum` | Yes |
| `traceobject` |  | `VsanVsanObjectSpaceSummaryVsanObjectTypeEnum` | Yes |
| `fileSystemOverhead` |  | `VsanVsanObjectSpaceSummaryVsanObjectTypeEnum` | Yes |
| `hbrPersist` |  | `VsanVsanObjectSpaceSummaryVsanObjectTypeEnum` | Yes |
| `cnsVolFile` |  | `VsanVsanObjectSpaceSummaryVsanObjectTypeEnum` | Yes |
| `statsdb` |  | `VsanVsanObjectSpaceSummaryVsanObjectTypeEnum` | Yes |
| `namespace` |  | `VsanVsanObjectSpaceSummaryVsanObjectTypeEnum` | Yes |
| `hostRebuildCapacity` |  | `VsanVsanObjectSpaceSummaryVsanObjectTypeEnum` | Yes |
| `iscsiTarget` |  | `VsanVsanObjectSpaceSummaryVsanObjectTypeEnum` | Yes |
| `dedupOverhead` |  | `VsanVsanObjectSpaceSummaryVsanObjectTypeEnum` | Yes |
| `improvedVirtualDisk` |  | `VsanVsanObjectSpaceSummaryVsanObjectTypeEnum` | Yes |
| `detachedCnsVolFile` |  | `VsanVsanObjectSpaceSummaryVsanObjectTypeEnum` | Yes |
| `vdisk` |  | `VsanVsanObjectSpaceSummaryVsanObjectTypeEnum` | Yes |
| `slackSpaceCapRequiredForHost` |  | `VsanVsanObjectSpaceSummaryVsanObjectTypeEnum` | Yes |

## VsanVsanObjectSystem

### Methods

#### `_getRef`


**Returns:** `VsanManagedObjectReference`

---

#### `hostRelayoutObjects`


**Returns:** `VsanManagedObjectReference`

---

#### `vsanQueryInaccessibleVmSwapObjects`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `Array/String`

---

#### `vsanQueryInactiveDataProtectionSpaceUsage`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Array/VsanVsanDataProtectionRemoteTargetSiteInfo` |  |

**Returns:** `Array/VsanVsanDataProtectionSpaceUsage`

---

#### `vsanDeleteObjects_Task`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Array/String` |  |
| `arg2` | `Boolean` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `queryVsanManagedObjectUuids`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `VsanQueryVsanManagedHostObjectUuidsSpec` |  |

**Returns:** `Array/VsanVsanManagedHostObjectUuids`

---

#### `vsanCheckPolicyRegulationCompliance`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `VsanVsanPolicyRegulationCheckSpec` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vosSetVsanObjectPolicy`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `String` |  |
| `arg2` | `VsanVirtualMachineProfileSpec` |  |

**Returns:** `Boolean`

---

#### `vosQueryVsanObjectInformation`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Array/VsanVsanObjectQuerySpec` |  |

**Returns:** `Array/VsanVsanObjectInformation`

---

#### `getExtraObjectAttributes`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Array/String` |  |

**Returns:** `Array/VsanVsanObjectExtraAttributes`

---

#### `querySyncingVsanObjectsSummary`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `VsanVsanSyncingObjectFilter` |  |

**Returns:** `VsanVsanHostVsanObjectSyncQueryResult`

---

#### `vsanQueryObjectIdentities`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Array/String` |  |
| `arg2` | `Array/String` |  |
| `arg3` | `Boolean` |  |
| `arg4` | `Boolean` |  |
| `arg5` | `Boolean` |  |
| `arg6` | `VsanVsanObjIdentityQuerySpec` |  |
| `arg7` | `Boolean` |  |

**Returns:** `VsanVsanObjectIdentityAndHealth`

---

#### `relayoutObjects`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `VsanManagedObjectReference`

---

## VsanVsanObjectTypeRule

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `attributes` |  | `Array/String` | No |
| `dynamicType` |  | `String` | No |
| `objectType` |  | `String` | No |

## VsanVsanObjIdentityQuerySpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `knownSpbmProfileUuids` |  | `Array/String` | No |
| `dynamicType` |  | `String` | No |
| `datastoreType` |  | `String` | No |
| `objectHealthVersion` |  | `String` | No |

## VsanVsanObjSnapParams

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `creator` |  | `String` | No |
| `snapshotType` |  | `String` | No |
| `cookie` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `uuid` |  | `String` | No |

## VsanVsanObservableSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `id` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanObservableSpecSubscription

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `observableSpecId` |  | `String` | No |
| `subscriptionStatus` |  | `VsanVsanSubscriptionStatus` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanPeerHostConnectivityHealthState

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `STATE_SYSTEM_ERROR` |  | `VsanVsanPeerHostConnectivityHealthState` | Yes |
| `STATE_MEMORY_ERROR` |  | `VsanVsanPeerHostConnectivityHealthState` | Yes |
| `STATE_OS_ERROR` |  | `VsanVsanPeerHostConnectivityHealthState` | Yes |
| `STATE_SOCKET_TIMEOUT` |  | `VsanVsanPeerHostConnectivityHealthState` | Yes |
| `STATE_HTTP_EXCEPTION` |  | `VsanVsanPeerHostConnectivityHealthState` | Yes |
| `STATE_CONNECTION_REFUSED_ERROR` |  | `VsanVsanPeerHostConnectivityHealthState` | Yes |
| `STATE_GOOD` |  | `VsanVsanPeerHostConnectivityHealthState` | Yes |
| `STATE_UNKNOWN` |  | `VsanVsanPeerHostConnectivityHealthState` | Yes |
| `STATE_SSL_ERROR` |  | `VsanVsanPeerHostConnectivityHealthState` | Yes |
| `STATE_GENERAL_EXCEPTION` |  | `VsanVsanPeerHostConnectivityHealthState` | Yes |

## VsanVsanPerfDiagnoseFeedbackSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `exceptionId` |  | `String` | No |
| `entityRefId` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `transactionId` |  | `String` | No |

## VsanVsanPerfDiagnoseQuerySpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `startTime` |  | `Date` | No |
| `endTime` |  | `Date` | No |
| `dynamicType` |  | `String` | No |
| `additionalContext` |  | `String` | No |
| `queryType` |  | `String` | No |

## VsanVsanPerfDiagnosticException

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `exceptionUrl` |  | `String` | No |
| `exceptionId` |  | `String` | No |
| `exceptionDetails` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `exceptionMessage` |  | `String` | No |

## VsanVsanPerfDiagnosticQueryType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `eval` |  | `VsanVsanPerfDiagnosticQueryType` | Yes |
| `VsanPerfDiagnosticQueryType_Unknown` |  | `VsanVsanPerfDiagnosticQueryType` | Yes |
| `iops` |  | `VsanVsanPerfDiagnosticQueryType` | Yes |
| `tput` |  | `VsanVsanPerfDiagnosticQueryType` | Yes |
| `lat` |  | `VsanVsanPerfDiagnosticQueryType` | Yes |

## VsanVsanPerfDiagnosticResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `exceptionId` |  | `String` | No |
| `exceptionData` |  | `Array/VsanVsanPerfEntityMetricCSV` | No |
| `recommendation` |  | `String` | No |
| `aggregationData` |  | `VsanVsanPerfEntityMetricCSV` | No |
| `aggregationFunction` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanPerfEntityInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `entityName` |  | `String` | No |
| `entityRelatedMoRef` |  | `String` | No |
| `entityRefId` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `entityRefType` |  | `String` | No |

## VsanVsanPerfEntityMetricCSV

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `sampleInfo` |  | `String` | No |
| `entityRefId` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `value` |  | `Array/VsanVsanPerfMetricSeriesCSV` | No |

## VsanVsanPerfEntityType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `graphs` |  | `Array/VsanVsanPerfGraph` | No |
| `verboseGraphs` |  | `Array/VsanVsanPerfGraph` | No |
| `name` |  | `String` | No |
| `description` |  | `String` | No |
| `id` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `advancedGraphs` |  | `Array/VsanVsanPerfGraph` | No |

## VsanVsanPerfGraph

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `unit` |  | `String` | No |
| `secondGraph` |  | `VsanVsanPerfGraph` | No |
| `name` |  | `String` | No |
| `description` |  | `String` | No |
| `threshold` |  | `VsanVsanPerfThreshold` | No |
| `id` |  | `String` | No |
| `metrics` |  | `Array/VsanVsanPerfMetricId` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanPerfGraphVsanPerfStatsUnitType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `number` |  | `VsanVsanPerfGraphVsanPerfStatsUnitType` | Yes |
| `size_bytes` |  | `VsanVsanPerfGraphVsanPerfStatsUnitType` | Yes |
| `rate_bytes` |  | `VsanVsanPerfGraphVsanPerfStatsUnitType` | Yes |
| `time_ms` |  | `VsanVsanPerfGraphVsanPerfStatsUnitType` | Yes |
| `percentage` |  | `VsanVsanPerfGraphVsanPerfStatsUnitType` | Yes |
| `time_ns` |  | `VsanVsanPerfGraphVsanPerfStatsUnitType` | Yes |
| `VsanPerfStatsUnitType_Unknown` |  | `VsanVsanPerfGraphVsanPerfStatsUnitType` | Yes |
| `time_s` |  | `VsanVsanPerfGraphVsanPerfStatsUnitType` | Yes |
| `permille` |  | `VsanVsanPerfGraphVsanPerfStatsUnitType` | Yes |
| `time_us` |  | `VsanVsanPerfGraphVsanPerfStatsUnitType` | Yes |

## VsanVsanPerfHotspotEntitiesMetrics

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `metricsValue` |  | `Array/VsanVsanPerfMetricSeriesCSV` | No |
| `startTime` |  | `Date` | No |
| `endTime` |  | `Date` | No |
| `entityRefId` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanPerfHotspotQuerySpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `numEntities` |  | `Number` | No |
| `metricId` |  | `String` | No |
| `startTime` |  | `Date` | No |
| `endTime` |  | `Date` | No |
| `dynamicType` |  | `String` | No |
| `entity` |  | `String` | No |

## VsanVsanPerfMasterInformation

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `verboseMode` |  | `Boolean` | No |
| `renamedStatsDirectories` |  | `Array/String` | No |
| `secSinceLastStatsWrite` |  | `Number` | No |
| `verboseModeLastUpdate` |  | `Date` | No |
| `secSinceLastStatsCollect` |  | `Number` | No |
| `statsDirectoryPercentFree` |  | `Number` | No |
| `dynamicType` |  | `String` | No |
| `statsIntervalSec` |  | `Number` | No |
| `collectionFailureHostUuids` |  | `Array/String` | No |

### Methods

#### `VsanVsanPerfMasterInformation`


**Returns:** `void`

---

#### `VsanVsanPerfMasterInformation`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `secSinceLastStatsWrite` | `Number` |  |
| `secSinceLastStatsCollect` | `Number` |  |
| `statsIntervalSec` | `Number` |  |
| `collectionFailureHostUuids` | `Array/String` |  |
| `renamedStatsDirectories` | `Array/String` |  |
| `statsDirectoryPercentFree` | `Number` |  |
| `verboseMode` | `Boolean` |  |
| `verboseModeLastUpdate` | `Date` |  |

**Returns:** `void`

---

#### `isVerboseMode`


**Returns:** `Boolean`

---

## VsanVsanPerfMemberInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `hostname` |  | `String` | No |
| `memberUuid` |  | `String` | No |
| `isSupportUnicast` |  | `Boolean` | No |
| `thumbprint` |  | `String` | No |
| `unicastAddressInfos` |  | `Array/VsanVsanUnicastAddressInfo` | No |
| `dynamicType` |  | `String` | No |

### Methods

#### `VsanVsanPerfMemberInfo`


**Returns:** `void`

---

#### `isIsSupportUnicast`


**Returns:** `Boolean`

---

## VsanVsanPerfMetricId

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `metricsCollectInterval` |  | `Number` | No |
| `statsType` |  | `String` | No |
| `name` |  | `String` | No |
| `description` |  | `String` | No |
| `rollupType` |  | `String` | No |
| `label` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `group` |  | `String` | No |

## VsanVsanPerfMetricIdVsanPerfStatsType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `VsanPerfStatsType_Unknown` |  | `VsanVsanPerfMetricIdVsanPerfStatsType` | Yes |
| `rate` |  | `VsanVsanPerfMetricIdVsanPerfStatsType` | Yes |
| `absolute` |  | `VsanVsanPerfMetricIdVsanPerfStatsType` | Yes |
| `delta` |  | `VsanVsanPerfMetricIdVsanPerfStatsType` | Yes |

## VsanVsanPerfMetricIdVsanPerfSummaryType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `average` |  | `VsanVsanPerfMetricIdVsanPerfSummaryType` | Yes |
| `VsanPerfSummaryType_Unknown` |  | `VsanVsanPerfMetricIdVsanPerfSummaryType` | Yes |
| `maximum` |  | `VsanVsanPerfMetricIdVsanPerfSummaryType` | Yes |
| `none` |  | `VsanVsanPerfMetricIdVsanPerfSummaryType` | Yes |
| `minimum` |  | `VsanVsanPerfMetricIdVsanPerfSummaryType` | Yes |
| `latest` |  | `VsanVsanPerfMetricIdVsanPerfSummaryType` | Yes |
| `summation` |  | `VsanVsanPerfMetricIdVsanPerfSummaryType` | Yes |

## VsanVsanPerfMetricSeriesCSV

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `numExceptions` |  | `String` | No |
| `metricId` |  | `VsanVsanPerfMetricId` | No |
| `values` |  | `String` | No |
| `threshold` |  | `VsanVsanPerfThreshold` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanPerfNodeInformation

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `masterInfo` |  | `VsanVsanPerfMasterInformation` | No |
| `hostname` |  | `String` | No |
| `vsanNodeUuid` |  | `String` | No |
| `vsanMasterUuid` |  | `String` | No |
| `diagnosticMode` |  | `Boolean` | No |
| `isCmmdsMaster` |  | `Boolean` | No |
| `isStatsMaster` |  | `Boolean` | No |
| `dynamicType` |  | `String` | No |
| `version` |  | `String` | No |

### Methods

#### `VsanVsanPerfNodeInformation`


**Returns:** `void`

---

#### `isDiagnosticMode`


**Returns:** `Boolean`

---

## VsanVsanPerformanceManager

### Methods

#### `vsanPerfLogin`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |

**Returns:** `Boolean`

---

#### `_getRef`


**Returns:** `VsanManagedObjectReference`

---

#### `vsanPerfCreateStatsObjectTask`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `VsanVirtualMachineProfileSpec` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vsanPerfGetVcMoRefFromPerfEntityRefId`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Array/String` |  |

**Returns:** `Array/VsanVsanPerfEntityInfo`

---

#### `vsanPerfQueryNodeInformation`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `Array/VsanVsanPerfNodeInformation`

---

#### `vsanPerfCreateStatsObject`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `VsanVirtualMachineProfileSpec` |  |

**Returns:** `String`

---

#### `getVsanPerfDiagnosisResult`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `VsanManagedObjectReference` |  |

**Returns:** `Array/VsanVsanPerfDiagnosticResult`

---

#### `vsanPerfDeleteTimeRange`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `String` |  |

**Returns:** `void`

---

#### `vsanPerfStartStatsCollector`


**Returns:** `Boolean`

---

#### `vsanPerfQueryPerf`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/VsanVsanPerfQuerySpec` |  |
| `arg1` | `VsanManagedObjectReference` |  |

**Returns:** `Array/VsanVsanPerfEntityMetricCSV`

---

#### `vsanPerfDeleteStatsObject`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `Boolean`

---

#### `queryVsanPerfTopEntities`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `VsanVsanPerfTopQuerySpec` |  |

**Returns:** `Array/VsanVsanPerfEntityMetricCSV`

---

#### `uponClusterMount`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `String` |  |
| `arg2` | `Boolean` |  |

**Returns:** `void`

---

#### `queryVsanPerfHotspotEntities`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `VsanVsanPerfHotspotQuerySpec` |  |

**Returns:** `Array/VsanVsanPerfHotspotEntitiesMetrics`

---

#### `vsanPerfGetAggregatedEntityTypes`


**Returns:** `Array/VsanVsanPerfEntityType`

---

#### `vsanPerfDiagnose`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVsanPerfDiagnoseQuerySpec` |  |
| `arg1` | `VsanManagedObjectReference` |  |

**Returns:** `Array/VsanVsanPerfDiagnosticResult`

---

#### `vsanPerfStopStatsCollector`


**Returns:** `Boolean`

---

#### `vsanPerfSaveTimeRanges`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Array/VsanVsanPerfTimeRange` |  |

**Returns:** `void`

---

#### `vsanPerfSetClusterMembers`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/VsanVsanPerfMemberInfo` |  |
| `arg1` | `VsanVsanConfigGeneration` |  |
| `arg2` | `String` |  |

**Returns:** `Boolean`

---

#### `vsanPerfInjectFakeHistory`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Number` |  |
| `arg2` | `Number` |  |

**Returns:** `Boolean`

---

#### `vsanPerfDiagnoseTask`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVsanPerfDiagnoseQuerySpec` |  |
| `arg1` | `VsanManagedObjectReference` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vsanPerfDeleteStatsObjectTask`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vsanPerfGetSupportedEntityTypes`


**Returns:** `Array/VsanVsanPerfEntityType`

---

#### `vsanPerfDiagnoseFromFile`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |
| `arg1` | `VsanVsanPerfDiagnoseQuerySpec` |  |
| `arg2` | `VsanManagedObjectReference` |  |

**Returns:** `Array/VsanVsanPerfDiagnosticResult`

---

#### `vsanPerfGetSupportedDiagnosticExceptions`


**Returns:** `Array/VsanVsanPerfDiagnosticException`

---

#### `vsanPerfQueryStatsObjectInformation`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `VsanVsanObjectInformation`

---

#### `vsanPerfSetStatsObjectPolicy`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `VsanVirtualMachineProfileSpec` |  |

**Returns:** `Boolean`

---

#### `submitFeedbackForDiagnosisResult`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVsanPerfDiagnoseFeedbackSpec` |  |
| `arg1` | `Boolean` |  |
| `arg2` | `String` |  |
| `arg3` | `VsanManagedObjectReference` |  |

**Returns:** `Boolean`

---

#### `queryRemoteServerClusters`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `VsanVsanRemoteClusterQuerySpec` |  |

**Returns:** `Array/String`

---

#### `vsanPerfToggleVerboseMode`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Boolean` |  |

**Returns:** `void`

---

#### `vsanPerfQueryTimeRanges`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `VsanVsanPerfTimeRangeQuerySpec` |  |

**Returns:** `Array/VsanVsanPerfTimeRange`

---

## VsanVsanPerfQuerySpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `interval` |  | `Number` | No |
| `startTime` |  | `Date` | No |
| `endTime` |  | `Date` | No |
| `entityRefId` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `group` |  | `String` | No |
| `labels` |  | `Array/String` | No |

## VsanVsanPerfsvcConfig

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `verboseMode` |  | `Boolean` | No |
| `diagnosticMode` |  | `Boolean` | No |
| `profile` |  | `VsanVirtualMachineProfileSpec` | No |
| `dynamicType` |  | `String` | No |
| `enabled` |  | `Boolean` | No |

### Methods

#### `VsanVsanPerfsvcConfig`


**Returns:** `void`

---

#### `VsanVsanPerfsvcConfig`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `enabled` | `Boolean` |  |
| `profile` | `VsanVirtualMachineProfileSpec` |  |
| `diagnosticMode` | `Boolean` |  |
| `verboseMode` | `Boolean` |  |

**Returns:** `void`

---

#### `isDiagnosticMode`


**Returns:** `Boolean`

---

#### `isVerboseMode`


**Returns:** `Boolean`

---

## VsanVsanPerfsvcHealthResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `remediateAction` |  | `String` | No |
| `enoughFreeSpace` |  | `Boolean` | No |
| `hostResults` |  | `Array/VsanVsanPerfNodeInformation` | No |
| `statsObjectInfo` |  | `VsanVsanObjectInformation` | No |
| `statsObjectPolicyConsistent` |  | `Boolean` | No |
| `datastoreCompatible` |  | `Boolean` | No |
| `verboseModeStatus` |  | `Boolean` | No |
| `statsObjectConsistent` |  | `Boolean` | No |
| `dynamicType` |  | `String` | No |

### Methods

#### `VsanVsanPerfsvcHealthResult`


**Returns:** `void`

---

#### `VsanVsanPerfsvcHealthResult`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `statsObjectInfo` | `VsanVsanObjectInformation` |  |
| `statsObjectConsistent` | `Boolean` |  |
| `statsObjectPolicyConsistent` | `Boolean` |  |
| `datastoreCompatible` | `Boolean` |  |
| `enoughFreeSpace` | `Boolean` |  |
| `remediateAction` | `String` |  |
| `hostResults` | `Array/VsanVsanPerfNodeInformation` |  |
| `verboseModeStatus` | `Boolean` |  |

**Returns:** `void`

---

#### `isVerboseModeStatus`


**Returns:** `Boolean`

---

#### `isStatsObjectPolicyConsistent`


**Returns:** `Boolean`

---

#### `isStatsObjectConsistent`


**Returns:** `Boolean`

---

#### `isDatastoreCompatible`


**Returns:** `Boolean`

---

#### `isEnoughFreeSpace`


**Returns:** `Boolean`

---

## VsanVsanPerfsvcRemediateAction

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `update_profile` |  | `VsanVsanPerfsvcRemediateAction` | Yes |
| `enable` |  | `VsanVsanPerfsvcRemediateAction` | Yes |
| `disable` |  | `VsanVsanPerfsvcRemediateAction` | Yes |
| `PerfsvcRemediateAction_Unknown` |  | `VsanVsanPerfsvcRemediateAction` | Yes |
| `no_action` |  | `VsanVsanPerfsvcRemediateAction` | Yes |

## VsanVsanPerfThreshold

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `red` |  | `String` | No |
| `yellow` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `direction` |  | `String` | No |

## VsanVsanPerfThresholdVsanPerfThresholdDirectionType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `upper` |  | `VsanVsanPerfThresholdVsanPerfThresholdDirectionType` | Yes |
| `lower` |  | `VsanVsanPerfThresholdVsanPerfThresholdDirectionType` | Yes |
| `VsanPerfThresholdDirectionType_Unknown` |  | `VsanVsanPerfThresholdVsanPerfThresholdDirectionType` | Yes |

## VsanVsanPerfTimeRange

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` |  | `String` | No |
| `startTime` |  | `Date` | No |
| `endTime` |  | `Date` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanPerfTimeRangeQuerySpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `endTimeTo` |  | `Date` | No |
| `startTimeFrom` |  | `Date` | No |
| `endTimeFrom` |  | `Date` | No |
| `startTimeTo` |  | `Date` | No |
| `name` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanPerfTopEntities

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `metricId` |  | `VsanVsanPerfMetricId` | No |
| `entities` |  | `Array/VsanVsanPerfTopEntity` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanPerfTopEntity

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `entityRefId` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `value` |  | `String` | No |

## VsanVsanPerfTopQuerySpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `numEntities` |  | `Number` | No |
| `timeStamp` |  | `Date` | No |
| `metricId` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `entity` |  | `String` | No |

## VsanVsanPhoneHomeSystem

### Methods

#### `vsanQueryVsanSkyPhoneHomeData`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `String`

---

#### `_getRef`


**Returns:** `VsanManagedObjectReference`

---

#### `queryVsanHostVsiData`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `String` |  |

**Returns:** `String`

---

#### `vsanEnablePerfNetworkDiagnosticResults`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vsanQueryClusterHostLogBundle`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Array/String` |  |

**Returns:** `String`

---

#### `queryVsanCloudHealthStatus`


**Returns:** `VsanVsanCloudHealthStatus`

---

#### `queryVsanHealthServiceFileHandlerCount`


**Returns:** `Number`

---

#### `vsanQueryObjectSnapshotsInfo`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `String`

---

#### `vsanQueryHostDaemonHealthViaPhoneHome`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Array/String` |  |

**Returns:** `String`

---

#### `vsanVcQueryClusterHostLogBundle`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Array/String` |  |

**Returns:** `String`

---

#### `queryAllVsanFileShareSnapshots`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `VsanVsanFileShareSnapshotQuerySpec` |  |

**Returns:** `Array/VsanVsanFileShareSnapshotQueryResult`

---

#### `queryVsanCloudHealthClusterHostsProfilingData`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `String`

---

#### `queryVsanHealthServiceFileResourceLimits`


**Returns:** `Array/Number`

---

#### `vsanVcQueryClusterLogsCatalogVersion`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `String`

---

#### `vsanQueryHistoricalHealthWrapper`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Date` |  |
| `arg2` | `Date` |  |
| `arg3` | `VsanVsanHistoricalHealthQuerySpec` |  |

**Returns:** `Array/VsanVsanClusterHealthSummary`

---

#### `vsanQueryZdomScrubberData`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `String`

---

#### `queryCISServiceDomainType`


**Returns:** `String`

---

#### `vsanPhoneHomeGetEsxCliData`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Array/String` |  |

**Returns:** `String`

---

#### `vsanQueryNvmeCriticalWarningStats`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `String`

---

#### `vsanSetLastHostBundleCollectionTime`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `String` |  |

**Returns:** `String`

---

#### `vsanQueryDiskEnduranceStats`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `String`

---

#### `vsanTriggerDiagnosticCollection`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `void`

---

#### `vsanDisablePerfNetworkDiagnosticResults`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vsanCountLogTraceLines`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `String` |  |
| `arg2` | `Boolean` |  |

**Returns:** `String`

---

#### `vsanQueryCMMDSPhoneHomeData`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Array/String` |  |

**Returns:** `String`

---

#### `vsanResetLastHostBundleCollectionTime`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `void`

---

#### `vsanGetClusterPhoneHomeData`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `String`

---

#### `queryHCIMeshDatastores`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `String`

---

#### `vsanVcSetClusterLogsCatalog`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `String` |  |
| `arg2` | `String` |  |

**Returns:** `String`

---

#### `vsanQueryClomToolData`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Array/String` |  |

**Returns:** `String`

---

#### `vsanQueryIODiagnosticData`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Date` |  |
| `arg2` | `Date` |  |

**Returns:** `Array/VsanVsanIODiagnosticsTargetStats`

---

#### `vsanQueryLSOMwbsize`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `String`

---

#### `vsanPhoneHomeStatus`


**Returns:** `String`

---

#### `vsanQueryVcLogBundle`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/String` |  |

**Returns:** `String`

---

#### `queryVsanCloudHealthDiagnosticData`


**Returns:** `String`

---

#### `vsanPerformOnlineHealthCheck`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vsanQueryLSOMScrubberStats`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `String`

---

#### `vsanGetPhoneHomeObfuscationMap`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `String`

---

#### `vsanQueryCapability`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `String`

---

#### `vsanPhoneHomeQueryPhysicalVsanDisks`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Array/String` |  |

**Returns:** `String`

---

#### `queryVsanCloudHealthProfilingData`


**Returns:** `String`

---

#### `vsanCloudHealthRunDaemon`


**Returns:** `String`

---

#### `vsanSetPhoneHomeResourceId`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |

**Returns:** `void`

---

## VsanVsanPhysicalDiskHealth

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dedupedBytes` |  | `Number` | No |
| `capacityHealth` |  | `String` | No |
| `logicalCapacityHealth` |  | `String` | No |
| `operationalHealth` |  | `String` | No |
| `congestionHealth` |  | `String` | No |
| `rebalanceResult` |  | `VsanVsanDiskRebalanceResult` | No |
| `dekGenerationId` |  | `Number` | No |
| `freeBytes` |  | `Number` | No |
| `dynamicType` |  | `String` | No |
| `uuid` |  | `String` | No |
| `dgLayoutIssue` |  | `Boolean` | No |
| `capacity` |  | `Number` | No |
| `pendingClusterDekId` |  | `String` | No |
| `encryptionEnabled` |  | `Boolean` | No |
| `encryptedUnlocked` |  | `Boolean` | No |
| `dmekVerifierHealth` |  | `Boolean` | No |
| `vsanDiskGroupUuid` |  | `String` | No |
| `totalBytes` |  | `Number` | No |
| `congestionValue` |  | `Number` | No |
| `isAllFlash` |  | `Number` | No |
| `inVsi` |  | `Boolean` | No |
| `formatVersion` |  | `Number` | No |
| `compLimitHealth` |  | `String` | No |
| `kekId` |  | `String` | No |
| `reservedCapacity` |  | `Number` | No |
| `logicalCapacity` |  | `Number` | No |
| `operationalHealthDescription` |  | `String` | No |
| `usedCapacity` |  | `Number` | No |
| `congestionArea` |  | `String` | No |
| `maxComponents` |  | `Number` | No |
| `kekVerifierHealth` |  | `Boolean` | No |
| `inCmmds` |  | `Boolean` | No |
| `dedupScope` |  | `Number` | No |
| `maxMetadataComponents` |  | `Number` | No |
| `metadataHealth` |  | `String` | No |
| `usedMetadataComponents` |  | `Number` | No |
| `kmsProviderId` |  | `String` | No |
| `summaryHealth` |  | `String` | No |
| `dedupUsageHealth` |  | `String` | No |
| `logicalCapacityUsed` |  | `Number` | No |
| `dekId` |  | `String` | No |
| `scsiDisk` |  | `VsanHostScsiDisk` | No |
| `hashedBytes` |  | `Number` | No |
| `usedComponents` |  | `Number` | No |
| `name` |  | `String` | No |
| `dekVerifierHealth` |  | `Boolean` | No |

### Methods

#### `VsanVsanPhysicalDiskHealth`


**Returns:** `void`

---

#### `VsanVsanPhysicalDiskHealth`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `String` |  |
| `uuid` | `String` |  |
| `inCmmds` | `Boolean` |  |
| `inVsi` | `Boolean` |  |
| `dedupScope` | `Number` |  |
| `formatVersion` | `Number` |  |
| `isAllFlash` | `Number` |  |
| `congestionValue` | `Number` |  |
| `congestionArea` | `String` |  |
| `congestionHealth` | `String` |  |
| `metadataHealth` | `String` |  |
| `operationalHealthDescription` | `String` |  |
| `operationalHealth` | `String` |  |
| `dedupUsageHealth` | `String` |  |
| `capacityHealth` | `String` |  |
| `summaryHealth` | `String` |  |
| `capacity` | `Number` |  |
| `usedCapacity` | `Number` |  |
| `reservedCapacity` | `Number` |  |
| `totalBytes` | `Number` |  |
| `freeBytes` | `Number` |  |
| `hashedBytes` | `Number` |  |
| `dedupedBytes` | `Number` |  |
| `scsiDisk` | `VsanHostScsiDisk` |  |
| `usedComponents` | `Number` |  |
| `maxComponents` | `Number` |  |
| `compLimitHealth` | `String` |  |
| `encryptionEnabled` | `Boolean` |  |
| `kmsProviderId` | `String` |  |
| `kekId` | `String` |  |
| `dekGenerationId` | `Number` |  |
| `encryptedUnlocked` | `Boolean` |  |
| `rebalanceResult` | `VsanVsanDiskRebalanceResult` |  |
| `dekId` | `String` |  |
| `kekVerifierHealth` | `Boolean` |  |
| `dekVerifierHealth` | `Boolean` |  |
| `logicalCapacity` | `Number` |  |
| `logicalCapacityUsed` | `Number` |  |
| `logicalCapacityHealth` | `String` |  |
| `vsanDiskGroupUuid` | `String` |  |
| `dgLayoutIssue` | `Boolean` |  |
| `usedMetadataComponents` | `Number` |  |
| `maxMetadataComponents` | `Number` |  |
| `pendingClusterDekId` | `String` |  |
| `dmekVerifierHealth` | `Boolean` |  |

**Returns:** `void`

---

#### `isEncryptedUnlocked`


**Returns:** `Boolean`

---

#### `isDekVerifierHealth`


**Returns:** `Boolean`

---

#### `isKekVerifierHealth`


**Returns:** `Boolean`

---

#### `isEncryptionEnabled`


**Returns:** `Boolean`

---

#### `isDgLayoutIssue`


**Returns:** `Boolean`

---

#### `isDmekVerifierHealth`


**Returns:** `Boolean`

---

## VsanVsanPhysicalDiskHealthSummary

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `slabsWithIssues` |  | `Array/VsanVsanResourceHealth` | No |
| `overallHealth` |  | `String` | No |
| `componentsWithIssues` |  | `Array/VsanVsanResourceHealth` | No |
| `hostname` |  | `String` | No |
| `disks` |  | `Array/VsanVsanPhysicalDiskHealth` | No |
| `heapsWithIssues` |  | `Array/VsanVsanResourceHealth` | No |
| `hostDedupScope` |  | `Number` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanPolicyManager

### Methods

#### `_getRef`


**Returns:** `VsanManagedObjectReference`

---

## VsanVsanPolicyRegulation

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `op` |  | `String` | No |
| `capability` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `value` |  | `String` | No |

## VsanVsanPolicyRegulationCheckOpEnum

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `equal` |  | `VsanVsanPolicyRegulationCheckOpEnum` | Yes |
| `nogreater` |  | `VsanVsanPolicyRegulationCheckOpEnum` | Yes |
| `noless` |  | `VsanVsanPolicyRegulationCheckOpEnum` | Yes |
| `less` |  | `VsanVsanPolicyRegulationCheckOpEnum` | Yes |
| `greater` |  | `VsanVsanPolicyRegulationCheckOpEnum` | Yes |

## VsanVsanPolicyRegulationCheckSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `policyRegulations` |  | `Array/VsanVsanPolicyRegulation` | No |
| `dynamicType` |  | `String` | No |
| `targets` |  | `Array/VsanVsanPolicyRegulationCheckTarget` | No |

## VsanVsanPolicyRegulationCheckTarget

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `excludeProfileIds` |  | `Array/String` | No |
| `targetType` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `uniqueIds` |  | `Array/String` | No |

## VsanVsanPolicyRegulationNoncompliantObj

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `violations` |  | `Array/VsanVsanPolicyViolation` | No |
| `targetType` |  | `String` | No |
| `objIdentity` |  | `VsanVsanObjectIdentity` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanPolicyStatus

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `expectedValue` |  | `String` | No |
| `id` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `currentValue` |  | `String` | No |

## VsanVsanPolicyViolation

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `regulation` |  | `VsanVsanPolicyRegulation` | No |
| `actualVal` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanPrepareVsanForVcsaSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `createNativeKeyProviderSpec` |  | `VsanVsanHostCreateNativeKeyProviderSpec` | No |
| `vsanDataEfficiencyConfig` |  | `VsanVsanDataEfficiencyConfig` | No |
| `vsanDiskMappingCreationSpec` |  | `VsanVimVsanHostDiskMappingCreationSpec` | No |
| `vsanDataEncryptionConfig` |  | `VsanVsanHostEncryptionInfo` | No |
| `vsanAddStoragePoolDiskSpec` |  | `VsanVsanAddStoragePoolDiskSpec` | No |
| `dynamicType` |  | `String` | No |
| `taskId` |  | `String` | No |

## VsanVsanProactiveRebalanceInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `threshold` |  | `Number` | No |
| `dynamicType` |  | `String` | No |
| `enabled` |  | `Boolean` | No |

### Methods

#### `VsanVsanProactiveRebalanceInfo`


**Returns:** `void`

---

#### `VsanVsanProactiveRebalanceInfo`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `enabled` | `Boolean` |  |
| `threshold` | `Number` |  |

**Returns:** `void`

---

#### `isEnabled`


**Returns:** `Boolean`

---

## VsanVsanProactiveRebalanceInfoEx

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `running` |  | `Boolean` | No |
| `hostname` |  | `String` | No |
| `stopTs` |  | `Date` | No |
| `timeThreshold` |  | `Number` | No |
| `startTs` |  | `Date` | No |
| `dynamicType` |  | `String` | No |
| `rateThreshold` |  | `Number` | No |
| `varianceThreshold` |  | `Number` | No |

### Methods

#### `VsanVsanProactiveRebalanceInfoEx`


**Returns:** `void`

---

#### `isRunning`


**Returns:** `Boolean`

---

## VsanVsanPropertyCollectorFilterObservableSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `id` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanPropertyConstraint

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `comparator` |  | `String` | No |
| `propertyName` |  | `String` | No |
| `targetType` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanPropertyConstraintComparatorEnum

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `POP` |  | `VsanVsanPropertyConstraintComparatorEnum` | Yes |
| `EQUALS` |  | `VsanVsanPropertyConstraintComparatorEnum` | Yes |
| `SMALLER` |  | `VsanVsanPropertyConstraintComparatorEnum` | Yes |
| `TEXTUALLY_MATCHES` |  | `VsanVsanPropertyConstraintComparatorEnum` | Yes |
| `GREATER` |  | `VsanVsanPropertyConstraintComparatorEnum` | Yes |
| `VsanPropertyConstraintComparatorEnum_Unknown` |  | `VsanVsanPropertyConstraintComparatorEnum` | Yes |
| `CONTAINS` |  | `VsanVsanPropertyConstraintComparatorEnum` | Yes |

## VsanVsanQueryResultHostInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `hostnameInCmmds` |  | `String` | No |
| `vsanIpv4Addresses` |  | `Array/String` | No |
| `dynamicType` |  | `String` | No |
| `uuid` |  | `String` | No |

## VsanVsanRdmaConfig

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |
| `rdmaEnabled` |  | `Boolean` | No |

## VsanVsanRegexBasedRule

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `rules` |  | `Array/String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanRelayoutObjectsErrorCode

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `outOfResources` |  | `VsanVsanRelayoutObjectsErrorCode` | Yes |
| `VsanRelayoutObjectsErrorCode_Unknown` |  | `VsanVsanRelayoutObjectsErrorCode` | Yes |
| `generic` |  | `VsanVsanRelayoutObjectsErrorCode` | Yes |

## VsanVsanRemoteClusterNotCompatible

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `msg` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanRemoteClusterQuerySpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `startTime` |  | `Date` | No |
| `endTime` |  | `Date` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanRemoteDatastoreConfig

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `clusterUuid` |  | `String` | No |
| `vsanConfig` |  | `String` | No |
| `name` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `uuid` |  | `String` | No |

## VsanVsanRemoteDatastoreSystem

### Methods

#### `mountPrecheck`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `VsanManagedObjectReference` |  |
| `arg2` | `VsanVcRemoteVsanServerClusterInfo` |  |

**Returns:** `VsanVsanMountPrecheckResult`

---

#### `_getRef`


**Returns:** `VsanManagedObjectReference`

---

#### `vsanDestroyDatastoreSource`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVsanHciMeshDatastoreSource` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vsanUpdateHciMeshClientInfo`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVsanXvcClientInfoSpec` |  |
| `arg1` | `String` |  |

**Returns:** `Array/VsanVsanXvcServerUpdateResult`

---

#### `vsanQueryDatastoreSource`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/String` |  |

**Returns:** `Array/VsanVsanHciMeshDatastoreSource`

---

#### `vsanUpdateDatastoreSource`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVsanHciMeshDatastoreSource` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vsanPrecheckDatastoreSource`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVsanHciMeshDatastoreSource` |  |
| `arg1` | `String` |  |

**Returns:** `VsanVsanDatastoreSourcePrecheckResult`

---

#### `vsanCreateDatastoreSource`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVsanHciMeshDatastoreSource` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vsanQueryHciMeshDatastores`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/VsanVsanXvcQuerySpec` |  |
| `arg1` | `Array/VsanVsanRemoteVcInfo` |  |

**Returns:** `Array/VsanVsanXvcQueryResultSet`

---

#### `remoteVcMountPrecheck`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `VsanVsanXVCDatastoreInfo` |  |

**Returns:** `VsanVsanMountPrecheckResult`

---

## VsanVsanRemoteVcInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `vcHost` |  | `String` | No |
| `linkType` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanRemoteVcInfoStandalone

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `password` |  | `String` | No |
| `vcHost` |  | `String` | No |
| `linkType` |  | `String` | No |
| `cert` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `user` |  | `String` | No |

## VsanVsanRemoteVcLinkType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `standalone` |  | `VsanVsanRemoteVcLinkType` | Yes |
| `VsanRemoteVcLinkType_unknown` |  | `VsanVsanRemoteVcLinkType` | Yes |

## VsanVsanRepairObjectsResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `notInQueueObjects` |  | `Array/String` | No |
| `inQueueObjects` |  | `Array/String` | No |
| `dynamicType` |  | `String` | No |
| `failedRepairObjects` |  | `Array/VsanVsanFailedRepairObjectResult` | No |

## VsanVsanResourceCheckComponentResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `capacityThreshold` |  | `VsanVsanHealthThreshold` | No |
| `components` |  | `Number` | No |
| `usedCapacity` |  | `Number` | No |
| `maxComponents` |  | `Number` | No |
| `health` |  | `VsanVsanClusterHealthSummary` | No |
| `isNew` |  | `Boolean` | No |
| `faultDomains` |  | `Array/VsanVsanFaultDomainResourceCheckResult` | No |
| `type` |  | `String` | No |
| `postOperationCapacity` |  | `Number` | No |
| `dataToMove` |  | `Number` | No |
| `dynamicType` |  | `String` | No |
| `uuid` |  | `String` | No |
| `capacity` |  | `Number` | No |
| `nonCompliantObjects` |  | `Array/String` | No |
| `name` |  | `String` | No |
| `postOperationUsedCapacity` |  | `Number` | No |
| `dataToResync` |  | `Number` | No |
| `additionalRequiredCapacity` |  | `Number` | No |
| `inaccessibleObjects` |  | `Array/String` | No |
| `status` |  | `String` | No |
| `timestamp` |  | `Date` | No |

### Methods

#### `VsanVsanResourceCheckComponentResult`


**Returns:** `void`

---

#### `isIsNew`


**Returns:** `Boolean`

---

## VsanVsanResourceCheckComponentType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `ResourceCheckComponentType_Unknown` |  | `VsanVsanResourceCheckComponentType` | Yes |
| `DataPersistence` |  | `VsanVsanResourceCheckComponentType` | Yes |
| `vSAN` |  | `VsanVsanResourceCheckComponentType` | Yes |

## VsanVsanResourceCheckDataPersistenceResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `components` |  | `Number` | No |
| `faultDomains` |  | `Array/VsanVsanFaultDomainResourceCheckResult` | No |
| `type` |  | `String` | No |
| `postOperationCapacity` |  | `Number` | No |
| `dynamicType` |  | `String` | No |
| `dataToMove` |  | `Number` | No |
| `uuid` |  | `String` | No |
| `capacity` |  | `Number` | No |
| `reducedAvailabilityInstances` |  | `Array/String` | No |
| `dataToResync` |  | `Number` | No |
| `postOperationUsedCapacity` |  | `Number` | No |
| `additionalRequiredCapacity` |  | `Number` | No |
| `timestamp` |  | `Date` | No |
| `capacityThreshold` |  | `VsanVsanHealthThreshold` | No |
| `rebuildInstances` |  | `Array/String` | No |
| `usedCapacity` |  | `Number` | No |
| `dataToRebuild` |  | `Number` | No |
| `maxComponents` |  | `Number` | No |
| `health` |  | `VsanVsanClusterHealthSummary` | No |
| `isNew` |  | `Boolean` | No |
| `inaccessibleInstances` |  | `Array/String` | No |
| `nonCompliantObjects` |  | `Array/String` | No |
| `name` |  | `String` | No |
| `inaccessibleObjects` |  | `Array/String` | No |
| `status` |  | `String` | No |

### Methods

#### `VsanVsanResourceCheckDataPersistenceResult`


**Returns:** `void`

---

#### `isIsNew`


**Returns:** `Boolean`

---

## VsanVsanResourceCheckResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `capacityThreshold` |  | `VsanVsanHealthThreshold` | No |
| `components` |  | `Number` | No |
| `usedCapacity` |  | `Number` | No |
| `maxComponents` |  | `Number` | No |
| `health` |  | `VsanVsanClusterHealthSummary` | No |
| `isNew` |  | `Boolean` | No |
| `faultDomains` |  | `Array/VsanVsanFaultDomainResourceCheckResult` | No |
| `postOperationCapacity` |  | `Number` | No |
| `dataToMove` |  | `Number` | No |
| `dynamicType` |  | `String` | No |
| `uuid` |  | `String` | No |
| `capacity` |  | `Number` | No |
| `nonCompliantObjects` |  | `Array/String` | No |
| `name` |  | `String` | No |
| `postOperationUsedCapacity` |  | `Number` | No |
| `dataToResync` |  | `Number` | No |
| `additionalRequiredCapacity` |  | `Number` | No |
| `inaccessibleObjects` |  | `Array/String` | No |
| `status` |  | `String` | No |
| `timestamp` |  | `Date` | No |

### Methods

#### `VsanVsanResourceCheckResult`


**Returns:** `void`

---

#### `isIsNew`


**Returns:** `Boolean`

---

## VsanVsanResourceCheckSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `parent` |  | `VsanManagedObjectReference` | No |
| `entities` |  | `Array/String` | No |
| `dynamicType` |  | `String` | No |
| `operation` |  | `String` | No |
| `maintenanceSpec` |  | `VsanHostMaintenanceSpec` | No |

## VsanVsanResourceCheckStatus

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `result` |  | `VsanVsanResourceCheckResult` | No |
| `task` |  | `VsanVsanResourceCheckTaskDetails` | No |
| `parentTask` |  | `VsanVsanResourceCheckTaskDetails` | No |
| `dynamicType` |  | `String` | No |
| `componentResults` |  | `Array/VsanVsanResourceCheckComponentResult` | No |
| `status` |  | `String` | No |

## VsanVsanResourceCheckStatusType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `resourceCheckNotSupported` |  | `VsanVsanResourceCheckStatusType` | Yes |
| `resourceCheckUninitialized` |  | `VsanVsanResourceCheckStatusType` | Yes |
| `resourceCheckFailed` |  | `VsanVsanResourceCheckStatusType` | Yes |
| `resourceCheckCompleted` |  | `VsanVsanResourceCheckStatusType` | Yes |
| `resourceCheckRunning` |  | `VsanVsanResourceCheckStatusType` | Yes |
| `resourceCheckCancelled` |  | `VsanVsanResourceCheckStatusType` | Yes |
| `resourceCheckNoRecentValue` |  | `VsanVsanResourceCheckStatusType` | Yes |
| `ResourceCheckStatusType_Unknown` |  | `VsanVsanResourceCheckStatusType` | Yes |

## VsanVsanResourceCheckSystem

### Methods

#### `_getRef`


**Returns:** `VsanManagedObjectReference`

---

#### `vsanGetResourceCheckStatus`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVsanResourceCheckSpec` |  |
| `arg1` | `VsanManagedObjectReference` |  |

**Returns:** `VsanVsanResourceCheckStatus`

---

#### `vsanHostCancelResourceCheck`


**Returns:** `Boolean`

---

#### `vsanHostPerformResourceCheck`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVsanResourceCheckSpec` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vsanPerformResourceCheck`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVsanResourceCheckSpec` |  |
| `arg1` | `VsanManagedObjectReference` |  |

**Returns:** `VsanManagedObjectReference`

---

## VsanVsanResourceCheckTaskDetails

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `task` |  | `VsanManagedObjectReference` | No |
| `hostUuid` |  | `String` | No |
| `host` |  | `VsanManagedObjectReference` | No |
| `dynamicType` |  | `String` | No |
| `maintenanceSpec` |  | `VsanHostMaintenanceSpec` | No |

## VsanVsanResourceCheckVsanResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `capacityThreshold` |  | `VsanVsanHealthThreshold` | No |
| `components` |  | `Number` | No |
| `usedCapacity` |  | `Number` | No |
| `maxComponents` |  | `Number` | No |
| `health` |  | `VsanVsanClusterHealthSummary` | No |
| `isNew` |  | `Boolean` | No |
| `faultDomains` |  | `Array/VsanVsanFaultDomainResourceCheckResult` | No |
| `type` |  | `String` | No |
| `postOperationCapacity` |  | `Number` | No |
| `dataToMove` |  | `Number` | No |
| `dynamicType` |  | `String` | No |
| `uuid` |  | `String` | No |
| `capacity` |  | `Number` | No |
| `nonCompliantObjects` |  | `Array/String` | No |
| `name` |  | `String` | No |
| `postOperationUsedCapacity` |  | `Number` | No |
| `dataToResync` |  | `Number` | No |
| `additionalRequiredCapacity` |  | `Number` | No |
| `inaccessibleObjects` |  | `Array/String` | No |
| `status` |  | `String` | No |
| `timestamp` |  | `Date` | No |

### Methods

#### `VsanVsanResourceCheckVsanResult`


**Returns:** `void`

---

#### `isIsNew`


**Returns:** `Boolean`

---

## VsanVsanResourceConstraint

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `targetType` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanResourceHealth

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `resource` |  | `String` | No |
| `health` |  | `String` | No |
| `description` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanRuntimeStatsHostMap

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `stats` |  | `VsanVsanHostRuntimeStats` | No |
| `host` |  | `VsanManagedObjectReference` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanServerClusterInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `cluster` |  | `VsanManagedObjectReference` | No |
| `peerHealth` |  | `Array/VsanVsanNetworkPeerHealthResult` | No |
| `membership` |  | `VsanVsanClusterMembershipInfo` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanServerHostUnicastInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `unicastSpec` |  | `Array/VsanVsanUnicastAddressInfo` | No |
| `hostUuid` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `nodeType` |  | `String` | No |

## VsanVsanServiceStatus

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `stopped` |  | `VsanVsanServiceStatus` | Yes |
| `started` |  | `VsanVsanServiceStatus` | Yes |
| `VsanServiceStatus_Unknown` |  | `VsanVsanServiceStatus` | Yes |

## VsanVSANSharedWitnessCompatibilityResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `roboClusterCompatibility` |  | `Array/VsanVSANEntityCompatibilityResult` | No |
| `dynamicType` |  | `String` | No |
| `witnessHostCompatibility` |  | `VsanVSANEntityCompatibilityResult` | No |

## VsanVsanSiteLocationType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `Preferred` |  | `VsanVsanSiteLocationType` | Yes |
| `VsanSiteLocationType_Unknown` |  | `VsanVsanSiteLocationType` | Yes |
| `None` |  | `VsanVsanSiteLocationType` | Yes |
| `NonPreferred` |  | `VsanVsanSiteLocationType` | Yes |

## VsanVsanSkyClusterHealthSummary

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `overallHealth` |  | `String` | No |
| `hostResults` |  | `Array/VsanVsanSkyHealthSummary` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanSkyConfig

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `bucketName` |  | `String` | No |
| `objectStoreUrl` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `enabled` |  | `Boolean` | No |
| `objectStoreSecretKey` |  | `String` | No |
| `objectStoreAccessKey` |  | `String` | No |

## VsanVsanSkyHealthSummary

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `overallHealth` |  | `String` | No |
| `meteringHealth` |  | `String` | No |
| `dataSyncHealth` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `connectivityHealth` |  | `String` | No |
| `credentialHealth` |  | `String` | No |

## VsanVsanSkySpaceUsage

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `totalObjectCountUploaded` |  | `Number` | Yes |
| `currentObjectSpaceUsage` |  | `Number` | Yes |
| `totalDataDownloaded` |  | `Number` | Yes |
| `currentObjectCount` |  | `Number` | Yes |
| `totalDataUploaded` |  | `Number` | Yes |
| `currentVsanSkyCapacity` |  | `Number` | Yes |
| `totalObjectCountDownloaded` |  | `Number` | Yes |

### Methods

#### `_getRef`


**Returns:** `VsanManagedObjectReference`

---

## VsanVsanSkySystem

### Methods

#### `vsanQueryVsanSkyUsage`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `_getRef`


**Returns:** `VsanManagedObjectReference`

---

#### `vsanClusterAddSkickyObjects`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Array/String` |  |

**Returns:** `void`

---

#### `vsanClusterRemoveSkickyObjects`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Array/String` |  |

**Returns:** `void`

---

#### `vsanClusterQueryLocalSkickyObjects`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `Array/String`

---

#### `vsanClusterQueryVsanSkyHealth`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `VsanVsanSkyClusterHealthSummary`

---

#### `vsanRemediateVsanSkyService`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVsanSkyConfig` |  |

**Returns:** `VsanManagedObjectReference`

---

## VsanVsanSmartDiskStats

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `disk` |  | `String` | No |
| `stats` |  | `Array/VsanVsanSmartParameter` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanSmartParameter

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `parameter` |  | `String` | No |
| `threshold` |  | `Number` | No |
| `worst` |  | `Number` | No |
| `dynamicType` |  | `String` | No |
| `value` |  | `Number` | No |

## VsanVsanSmartParameterType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `smartdriveratedmaxtemperature` |  | `VsanVsanSmartParameterType` | Yes |
| `smartwriteerrorcount` |  | `VsanVsanSmartParameterType` | Yes |
| `smartpoweronhours` |  | `VsanVsanSmartParameterType` | Yes |
| `smartinitialbadblockcount` |  | `VsanVsanSmartParameterType` | Yes |
| `smartmediawearoutindicator` |  | `VsanVsanSmartParameterType` | Yes |
| `smarthealthstatus` |  | `VsanVsanSmartParameterType` | Yes |
| `smartreallocatedsectorct` |  | `VsanVsanSmartParameterType` | Yes |
| `smartpowercyclecount` |  | `VsanVsanSmartParameterType` | Yes |
| `smartwritesectorstotct` |  | `VsanVsanSmartParameterType` | Yes |
| `smartreadsectorstotct` |  | `VsanVsanSmartParameterType` | Yes |
| `smartrawreaderrorrate` |  | `VsanVsanSmartParameterType` | Yes |
| `VsanSmartParameterType_Unknown` |  | `VsanVsanSmartParameterType` | Yes |
| `smartreaderrorcount` |  | `VsanVsanSmartParameterType` | Yes |
| `smartdrivetemperature` |  | `VsanVsanSmartParameterType` | Yes |

## VsanVsanSmartStatsHostSummary

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `hostname` |  | `String` | No |
| `smartStats` |  | `Array/VsanVsanSmartDiskStats` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanSnapService

### Methods

#### `_getRef`


**Returns:** `VsanManagedObjectReference`

---

#### `retrieveSnapshotServiceStats`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `String`

---

#### `persistRecord`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVsanSnapstorePersistSpec` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `deleteRecord`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVsanSnapstoreDeleteSpec` |  |

**Returns:** `void`

---

#### `createVsanSnapstore`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVsanSnapstoreCreateSpec` |  |

**Returns:** `VsanManagedObjectReference`

---

## VsanVsanSnapServiceConfig

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |
| `enabled` |  | `Boolean` | No |

## VsanVsanSnapshotCreator

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `SnapService` |  | `VsanVsanSnapshotCreator` | Yes |
| `SnapshotCreator_Unknown` |  | `VsanVsanSnapshotCreator` | Yes |

## VsanVsanSnapshotDetail

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `snapshotPath` |  | `String` | No |
| `snapshotId` |  | `Number` | No |
| `snapshotType` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanSnapshotQueryResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `objects` |  | `Array/VsanVsanObjectDetail` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanSnapshotQuerySpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `creator` |  | `String` | No |
| `snapshotType` |  | `String` | No |
| `objectUuids` |  | `Array/String` | No |
| `includeDescriptorPath` |  | `Boolean` | No |
| `dynamicType` |  | `String` | No |
| `datastoreUuid` |  | `String` | No |

### Methods

#### `VsanVsanSnapshotQuerySpec`


**Returns:** `void`

---

#### `VsanVsanSnapshotQuerySpec`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `datastoreUuid` | `String` |  |
| `objectUuids` | `Array/String` |  |
| `snapshotType` | `String` |  |
| `creator` | `String` |  |
| `includeDescriptorPath` | `Boolean` |  |

**Returns:** `void`

---

#### `isIncludeDescriptorPath`


**Returns:** `Boolean`

---

## VsanVsanSnapshotType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `SnapshotType_Unknown` |  | `VsanVsanSnapshotType` | Yes |
| `Unmanaged` |  | `VsanVsanSnapshotType` | Yes |
| `Managed` |  | `VsanVsanSnapshotType` | Yes |

## VsanVsanSnapstoreCreateSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `storePath` |  | `String` | No |
| `cluster` |  | `VsanManagedObjectReference` | No |
| `host` |  | `VsanManagedObjectReference` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanSnapstoreDeleteSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `storePath` |  | `String` | No |
| `cluster` |  | `VsanManagedObjectReference` | No |
| `host` |  | `VsanManagedObjectReference` | No |
| `dynamicType` |  | `String` | No |
| `key` |  | `String` | No |

## VsanVsanSnapstorePersistSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `storePath` |  | `String` | No |
| `cluster` |  | `VsanManagedObjectReference` | No |
| `record` |  | `VsanVsanSnapstoreRecord` | No |
| `host` |  | `VsanManagedObjectReference` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanSnapstoreRecord

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |
| `key` |  | `String` | No |

## VsanVsanSpaceEfficiencyMetadataSize

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dedupMetadataSize` |  | `Number` | No |
| `compressionMetadataSize` |  | `Number` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanSpaceEfficiencyRatio

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |
| `overallRatio` |  | `Number` | No |

## VsanVsanSpaceQuerySpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `entityType` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `entityIds` |  | `Array/String` | No |

## VsanVsanSpaceReportingEntityType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `VsanSpaceReportingEntityType_Unknown` |  | `VsanVsanSpaceReportingEntityType` | Yes |
| `VM` |  | `VsanVsanSpaceReportingEntityType` | Yes |
| `FaultDomain` |  | `VsanVsanSpaceReportingEntityType` | Yes |
| `Host` |  | `VsanVsanSpaceReportingEntityType` | Yes |
| `FileShare` |  | `VsanVsanSpaceReportingEntityType` | Yes |

## VsanVsanSpaceReportSystem

### Methods

#### `vsanQueryEntitySpaceUsage`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `VsanVsanSpaceQuerySpec` |  |

**Returns:** `Array/VsanVsanEntitySpaceUsage`

---

#### `queryVsanCapacityHealthThreshold`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Array/VsanVsanCapacityReservationInfo` |  |

**Returns:** `Array/VsanVsanWhatifCapacityThreshold`

---

#### `_getRef`


**Returns:** `VsanManagedObjectReference`

---

#### `queryVsanManagedStorageSpaceUsage`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `VsanQueryVsanManagedStorageSpaceUsageSpec` |  |

**Returns:** `Array/VsanVsanSpaceUsageWithDatastoreType`

---

#### `vsanQuerySpaceUsage`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Array/VsanVirtualMachineProfileSpec` |  |
| `arg2` | `Boolean` |  |

**Returns:** `VsanVsanSpaceUsage`

---

#### `vsanQueryRemoteDataProtectionSpaceUsage`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Array/VsanVsanDataProtectionRemoteTargetSiteInfo` |  |

**Returns:** `VsanVsanDataProtectionRemoteSpaceUsage`

---

## VsanVsanSpaceUsage

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `capacityHealthThreshold` |  | `VsanVsanHealthThreshold` | No |
| `efficientCapacity` |  | `VsanVimVsanDataEfficiencyCapacityState` | No |
| `spaceDetail` |  | `VsanVsanSpaceUsageDetailResult` | No |
| `whatifCapacities` |  | `Array/VsanVsanWhatifCapacity` | No |
| `totalCapacityB` |  | `Number` | No |
| `spaceEfficiencyRatio` |  | `VsanVsanSpaceEfficiencyRatio` | No |
| `freeCapacityB` |  | `Number` | No |
| `uncommittedB` |  | `Number` | No |
| `spaceOverview` |  | `VsanVsanObjectSpaceSummary` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanSpaceUsageDetailResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `spaceUsageByObjectType` |  | `Array/VsanVsanObjectSpaceSummary` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanSpaceUsageWithDatastoreType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |
| `datastoreType` |  | `String` | No |
| `spaceUsage` |  | `VsanVsanSpaceUsage` | No |

## VsanVsanSslVerifyCertFault

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `localizedMessage` | Creates a localized description of this throwable. Subclasses may override this method in order to produce a locale-specific message. For subclasses that do not override this method, the default implementation returns the same result as {@code getMessage()}. | `String` | Yes |
| `certificate` |  | `String` | No |
| `thumbprint` |  | `String` | No |
| `selfSigned` |  | `Boolean` | No |
| `cert` |  | `String` | No |
| `message` |  | `String` | No |

### Methods

#### `VsanVsanSslVerifyCertFault`


**Returns:** `void`

---

#### `VsanVsanSslVerifyCertFault`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `selfSigned` | `Boolean` |  |
| `thumbprint` | `String` |  |
| `certificate` | `String` |  |
| `cert` | `String` |  |

**Returns:** `void`

---

#### `printStackTrace`
Prints this throwable and its backtrace to the standard error stream. This method prints a stack trace for this {@code Throwable} object on the error output stream that is the value of the field {@code System.err}. The first line of output contains the result of the {@link #toString()} method for this object. Remaining lines represent data previously recorded by the method {@link #fillInStackTrace()}. The format of this information depends on the implementation, but the following example may be regarded as typical:
java.lang.NullPointerException
        at MyClass.mash(MyClass.java:9)
        at MyClass.crunch(MyClass.java:6)
        at MyClass.main(MyClass.java:3)

This example was produced by running the program:
class MyClass {
    public static void main(String[] args) {
        crunch(null);
    }
    static void crunch(int[] a) {
        mash(a);
    }
    static void mash(int[] b) {
        System.out.println(b[0]);
    }
}

The backtrace for a throwable with an initialized, non-null cause should generally include the backtrace for the cause. The format of this information depends on the implementation, but the following example may be regarded as typical:
HighLevelException: MidLevelException: LowLevelException
        at Junk.a(Junk.java:13)
        at Junk.main(Junk.java:4)
Caused by: MidLevelException: LowLevelException
        at Junk.c(Junk.java:23)
        at Junk.b(Junk.java:17)
        at Junk.a(Junk.java:11)
        ... 1 more
Caused by: LowLevelException
        at Junk.e(Junk.java:30)
        at Junk.d(Junk.java:27)
        at Junk.c(Junk.java:21)
        ... 3 more

Note the presence of lines containing the characters {@code "..."}. These lines indicate that the remainder of the stack trace for this exception matches the indicated number of frames from the bottom of the stack trace of the exception that was caused by this exception (the "enclosing" exception). This shorthand can greatly reduce the length of the output in the common case where a wrapped exception is thrown from same method as the "causative exception" is caught. The above example was produced by running the program:
public class Junk {
    public static void main(String args[]) {
        try {
            a();
        } catch(HighLevelException e) {
            e.printStackTrace();
        }
    }
    static void a() throws HighLevelException {
        try {
            b();
        } catch(MidLevelException e) {
            throw new HighLevelException(e);
        }
    }
    static void b() throws MidLevelException {
        c();
    }
    static void c() throws MidLevelException {
        try {
            d();
        } catch(LowLevelException e) {
            throw new MidLevelException(e);
        }
    }
    static void d() throws LowLevelException {
       e();
    }
    static void e() throws LowLevelException {
        throw new LowLevelException();
    }
}

class HighLevelException extends Exception {
    HighLevelException(Throwable cause) { super(cause); }
}

class MidLevelException extends Exception {
    MidLevelException(Throwable cause)  { super(cause); }
}

class LowLevelException extends Exception {
}

As of release 7, the platform supports the notion of suppressed exceptions (in conjunction with the {@code try}-with-resources statement). Any exceptions that were suppressed in order to deliver an exception are printed out beneath the stack trace. The format of this information depends on the implementation, but the following example may be regarded as typical:
Exception in thread "main" java.lang.Exception: Something happened
 at Foo.bar(Foo.java:10)
 at Foo.main(Foo.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 0
         at Resource.close(Resource.java:26)
         at Foo.bar(Foo.java:9)
         ... 1 more

Note that the "... n more" notation is used on suppressed exceptions just at it is used on causes. Unlike causes, suppressed exceptions are indented beyond their "containing exceptions."

An exception can have both a cause and one or more suppressed exceptions:

Exception in thread "main" java.lang.Exception: Main block
 at Foo3.main(Foo3.java:7)
 Suppressed: Resource$CloseFailException: Resource ID = 2
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
 Suppressed: Resource$CloseFailException: Resource ID = 1
         at Resource.close(Resource.java:26)
         at Foo3.main(Foo3.java:5)
Caused by: java.lang.Exception: I did it
 at Foo3.main(Foo3.java:8)

Likewise, a suppressed exception can have a cause:
Exception in thread "main" java.lang.Exception: Main block
 at Foo4.main(Foo4.java:6)
 Suppressed: Resource2$CloseFailException: Resource ID = 1
         at Resource2.close(Resource2.java:20)
         at Foo4.main(Foo4.java:5)
 Caused by: java.lang.Exception: Rats, you caught me
         at Resource2$CloseFailException.<init>(Resource2.java:45)
         ... 2 more

**Returns:** `void`

---

## VsanVsanStorageComplianceResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `operationalStatus` |  | `VsanVsanStorageOperationalStatus` | No |
| `checkTime` |  | `Date` | No |
| `objPolicyGenerationId` |  | `String` | No |
| `violatedPolicies` |  | `Array/VsanVsanStoragePolicyStatus` | No |
| `profile` |  | `String` | No |
| `mismatch` |  | `Boolean` | No |
| `complianceStatus` |  | `String` | No |
| `objectUUID` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanStorageComplianceResultStorageComplianceStatus

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `compliant` |  | `VsanVsanStorageComplianceResultStorageComplianceStatus` | Yes |
| `notApplicable` |  | `VsanVsanStorageComplianceResultStorageComplianceStatus` | Yes |
| `nonCompliant` |  | `VsanVsanStorageComplianceResultStorageComplianceStatus` | Yes |
| `unknown` |  | `VsanVsanStorageComplianceResultStorageComplianceStatus` | Yes |

## VsanVsanStorageOperationalStatus

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `operationETA` |  | `Date` | No |
| `transitional` |  | `Boolean` | No |
| `healthy` |  | `Boolean` | No |
| `operationProgress` |  | `Number` | No |
| `dynamicType` |  | `String` | No |

### Methods

#### `VsanVsanStorageOperationalStatus`


**Returns:** `void`

---

#### `VsanVsanStorageOperationalStatus`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `healthy` | `Boolean` |  |
| `operationETA` | `Date` |  |
| `operationProgress` | `Number` |  |
| `transitional` | `Boolean` |  |

**Returns:** `void`

---

#### `isTransitional`


**Returns:** `Boolean`

---

#### `isHealthy`


**Returns:** `Boolean`

---

## VsanVsanStoragePolicyStatus

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `expectedValue` |  | `String` | No |
| `id` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `currentValue` |  | `String` | No |

## VsanVsanStoragePoolDisk

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `diskName` |  | `String` | No |
| `diskType` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanStoragePoolDiskResourceCheckResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `components` |  | `Number` | No |
| `usedCapacity` |  | `Number` | No |
| `name` |  | `String` | No |
| `maxComponents` |  | `Number` | No |
| `postOperationUsedCapacity` |  | `Number` | No |
| `isNew` |  | `Boolean` | No |
| `diskType` |  | `String` | No |
| `additionalRequiredCapacity` |  | `Number` | No |
| `postOperationCapacity` |  | `Number` | No |
| `dynamicType` |  | `String` | No |
| `uuid` |  | `String` | No |
| `capacity` |  | `Number` | No |

### Methods

#### `VsanVsanStoragePoolDiskResourceCheckResult`


**Returns:** `void`

---

#### `VsanVsanStoragePoolDiskResourceCheckResult`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `String` |  |
| `uuid` | `String` |  |
| `isNew` | `Boolean` |  |
| `capacity` | `Number` |  |
| `postOperationCapacity` | `Number` |  |
| `usedCapacity` | `Number` |  |
| `postOperationUsedCapacity` | `Number` |  |
| `additionalRequiredCapacity` | `Number` |  |
| `maxComponents` | `Number` |  |
| `components` | `Number` |  |
| `diskType` | `String` |  |

**Returns:** `void`

---

#### `isIsNew`


**Returns:** `Boolean`

---

## VsanVsanStoragePoolResourceCheckResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `components` |  | `Number` | No |
| `disks` |  | `Array/VsanVsanStoragePoolDiskResourceCheckResult` | No |
| `usedCapacity` |  | `Number` | No |
| `name` |  | `String` | No |
| `maxComponents` |  | `Number` | No |
| `postOperationUsedCapacity` |  | `Number` | No |
| `isNew` |  | `Boolean` | No |
| `additionalRequiredCapacity` |  | `Number` | No |
| `postOperationCapacity` |  | `Number` | No |
| `dynamicType` |  | `String` | No |
| `uuid` |  | `String` | No |
| `capacity` |  | `Number` | No |

### Methods

#### `VsanVsanStoragePoolResourceCheckResult`


**Returns:** `void`

---

#### `VsanVsanStoragePoolResourceCheckResult`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `String` |  |
| `uuid` | `String` |  |
| `isNew` | `Boolean` |  |
| `capacity` | `Number` |  |
| `postOperationCapacity` | `Number` |  |
| `usedCapacity` | `Number` |  |
| `postOperationUsedCapacity` | `Number` |  |
| `additionalRequiredCapacity` | `Number` |  |
| `maxComponents` | `Number` |  |
| `components` | `Number` |  |
| `disks` | `Array/VsanVsanStoragePoolDiskResourceCheckResult` |  |

**Returns:** `void`

---

#### `isIsNew`


**Returns:** `Boolean`

---

## VsanVsanStorageWorkloadType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `duration` |  | `Number` | No |
| `specs` |  | `Array/VsanVsanVmdkLoadTestSpec` | No |
| `name` |  | `String` | No |
| `description` |  | `String` | No |
| `typeId` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanStretchedClusterConfig

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `cluster` |  | `VsanManagedObjectReference` | No |
| `preferredFdName` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `faultDomainConfig` |  | `VsanVimClusterVSANStretchedClusterFaultDomainConfig` | No |

## VsanVSANStretchedClusterHostVirtualApplianceStatus

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `isVirtualAppValid` |  | `Boolean` | No |
| `vcClusters` |  | `Array/VsanManagedObjectReference` | No |
| `dynamicType` |  | `String` | No |
| `vcCluster` |  | `VsanManagedObjectReference` | No |
| `isVirtualApp` |  | `Boolean` | No |

### Methods

#### `VsanVSANStretchedClusterHostVirtualApplianceStatus`


**Returns:** `void`

---

#### `VsanVSANStretchedClusterHostVirtualApplianceStatus`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vcCluster` | `VsanManagedObjectReference` |  |
| `isVirtualApp` | `Boolean` |  |
| `vcClusters` | `Array/VsanManagedObjectReference` |  |
| `isVirtualAppValid` | `Boolean` |  |

**Returns:** `void`

---

#### `isIsVirtualApp`


**Returns:** `Boolean`

---

#### `isIsVirtualAppValid`


**Returns:** `Boolean`

---

## VsanVsanSubscriptionStatus

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |
| `enabled` |  | `Boolean` | No |

## VsanVsanSyncingObjectFilter

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `offset` |  | `Number` | No |
| `numberOfObjects` |  | `Number` | No |
| `resyncType` |  | `String` | No |
| `resyncStatus` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanSyncingObjectRecoveryDetails

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `bytesToSyncForQueuedObjects` |  | `Number` | No |
| `queuedObjectsToSync` |  | `Number` | No |
| `suspendedObjectRecoveryETA` |  | `Number` | No |
| `activeObjectsToSync` |  | `Number` | No |
| `suspendedObjectsToSync` |  | `Number` | No |
| `bytesToSyncForActiveObjects` |  | `Number` | No |
| `dynamicType` |  | `String` | No |
| `queuedForSyncObjectRecoveryETA` |  | `Number` | No |
| `bytesToSyncForSuspendedObjects` |  | `Number` | No |
| `activelySyncingObjectRecoveryETA` |  | `Number` | No |

## VsanVsanSyncReason

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `repair` |  | `VsanVsanSyncReason` | Yes |
| `rebalance` |  | `VsanVsanSyncReason` | Yes |
| `object_format_change` |  | `VsanVsanSyncReason` | Yes |
| `stale` |  | `VsanVsanSyncReason` | Yes |
| `evacuate` |  | `VsanVsanSyncReason` | Yes |
| `dying_evacuate` |  | `VsanVsanSyncReason` | Yes |
| `merge_concat` |  | `VsanVsanSyncReason` | Yes |
| `VsanSyncReason_Unknown` |  | `VsanVsanSyncReason` | Yes |
| `reconfigure` |  | `VsanVsanSyncReason` | Yes |

## VsanVsanSyncStatus

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `queued` |  | `VsanVsanSyncStatus` | Yes |
| `active` |  | `VsanVsanSyncStatus` | Yes |
| `suspended` |  | `VsanVsanSyncStatus` | Yes |
| `VsanSyncStatus_Unknown` |  | `VsanVsanSyncStatus` | Yes |

## VsanVsanSystemEx

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `domObjects` |  | `Array/String` | Yes |

### Methods

#### `_getRef`


**Returns:** `VsanManagedObjectReference`

---

#### `queryClusterRuntimeInfo`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/String` |  |

**Returns:** `Array/VsanClusterRuntimeInfo`

---

#### `vsanHostQueryWipeDisk`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/String` |  |

**Returns:** `Array/VsanVsanHostWipeDiskStatus`

---

#### `vsanHostAbortWipeDisk`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/String` |  |

**Returns:** `Array/VsanVsanHostAbortWipeDiskStatus`

---

#### `vsanExitMaintenanceMode_Task`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Number` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vsanQuerySyncingVsanObjects`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/String` |  |
| `arg1` | `Number` |  |
| `arg2` | `Number` |  |
| `arg3` | `Boolean` |  |

**Returns:** `VsanVsanHostVsanObjectSyncQueryResult`

---

#### `vsanUnmountDiskMappingEx`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/VsanVsanHostDiskMapping` |  |
| `arg1` | `VsanHostMaintenanceSpec` |  |
| `arg2` | `Number` |  |
| `arg3` | `String` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vmMonitorWatchObjects`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/String` |  |
| `arg1` | `String` |  |

**Returns:** `void`

---

#### `queryObjectsNeedUpgrade`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Number` |  |
| `arg1` | `Number` |  |
| `arg2` | `String` |  |

**Returns:** `Array/String`

---

#### `vsanGetLocalAffinityVmList`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Boolean` |  |

**Returns:** `Array/String`

---

#### `vsanHostWipeDisk`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/String` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `generateClusterKeys`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVsanHostEncryptionInfo` |  |
| `arg1` | `String` |  |

**Returns:** `VsanVsanClusterKeys`

---

#### `createDedupStore`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vsanGetAssociatedObjects`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |
| `arg1` | `Number` |  |
| `arg2` | `Number` |  |
| `arg3` | `Number` |  |

**Returns:** `VsanVsanHostAssociatedObjectsResult`

---

#### `vsanGetAssociatedSpbmProfile`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/String` |  |

**Returns:** `Array/VsanVsanObjectProfileInfo`

---

#### `queryVsanAwsCredentials`


**Returns:** `VsanVsanHostVsanAwsCredentials`

---

#### `refreshVsanSystem`


**Returns:** `void`

---

#### `vsanHostGetRuntimeStats`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/String` |  |
| `arg1` | `String` |  |

**Returns:** `VsanVsanHostRuntimeStats`

---

#### `convertObjectsForEncryption`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Number` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vsanEnterMaintenanceMode_Task`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanHostMaintenanceSpec` |  |
| `arg1` | `Number` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vsanQueryWhatIfEvacuationResult`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |

**Returns:** `VsanVsanWhatIfEvacResult`

---

#### `vsanQueryHostDrsStats`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/String` |  |
| `arg1` | `Array/String` |  |

**Returns:** `VsanVsanHostDrsStats`

---

#### `vmMonitorUnwatchObjects`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/String` |  |
| `arg1` | `String` |  |

**Returns:** `void`

---

#### `vsanGetObjectComplianceDetail`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/VsanVsanComplianceQuerySpec` |  |

**Returns:** `Array/VsanVsanComplianceResult`

---

#### `refreshVsanVmknics`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |

**Returns:** `void`

---

#### `vsanGetAboutInfoEx`


**Returns:** `VsanVsanHostAboutInfoEx`

---

## VsanVsanTaskTracker

### Methods

#### `_getRef`


**Returns:** `VsanManagedObjectReference`

---

#### `vsanCancelTask`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `void`

---

## VsanVsanUiScreen

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `VsanUiScreen_Unknown` |  | `VsanVsanUiScreen` | Yes |
| `VirtualObjects` |  | `VsanVsanUiScreen` | Yes |

## VsanVsanUnicastAddressInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `address` |  | `String` | No |
| `port` |  | `Number` | No |
| `nicType` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanUnicastAgentInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `address` |  | `String` | No |
| `port` |  | `Number` | No |
| `nodeType` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `uuid` |  | `String` | No |
| `certThumbprint` |  | `String` | No |

## VsanVsanUnknownScanIssue

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `msg` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `uuids` |  | `Array/String` | No |

## VsanVsanUnmapConfig

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `enable` |  | `Boolean` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanUnsupportedHighDiskVersionIssue

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `msg` |  | `String` | No |
| `hosts` |  | `Array/VsanManagedObjectReference` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanUpdateItem

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `downloadInfo` |  | `Array/VsanVsanDownloadItem` | No |
| `firmwareSpec` |  | `VsanVsanHclFirmwareUpdateSpec` | No |
| `adapter` |  | `String` | No |
| `impact` |  | `String` | No |
| `eula` |  | `String` | No |
| `existingVersion` |  | `String` | No |
| `type` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `version` |  | `String` | No |
| `vibType` |  | `String` | No |
| `vibSpec` |  | `Array/VsanVsanVibSpec` | No |
| `host` |  | `VsanManagedObjectReference` | No |
| `name` |  | `String` | No |
| `present` |  | `Boolean` | No |
| `key` |  | `String` | No |
| `firmwareUnknown` |  | `Boolean` | No |

### Methods

#### `VsanVsanUpdateItem`


**Returns:** `void`

---

#### `VsanVsanUpdateItem`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `host` | `VsanManagedObjectReference` |  |
| `type` | `String` |  |
| `name` | `String` |  |
| `version` | `String` |  |
| `existingVersion` | `String` |  |
| `present` | `Boolean` |  |
| `vibSpec` | `Array/VsanVsanVibSpec` |  |
| `vibType` | `String` |  |
| `firmwareSpec` | `VsanVsanHclFirmwareUpdateSpec` |  |
| `downloadInfo` | `Array/VsanVsanDownloadItem` |  |
| `eula` | `String` |  |
| `adapter` | `String` |  |
| `key` | `String` |  |
| `impact` | `String` |  |
| `firmwareUnknown` | `Boolean` |  |

**Returns:** `void`

---

#### `isFirmwareUnknown`


**Returns:** `Boolean`

---

## VsanVsanUpdateItemImpactType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `reboot` |  | `VsanVsanUpdateItemImpactType` | Yes |
| `VsanUpdateItemImpactType_Unknown` |  | `VsanVsanUpdateItemImpactType` | Yes |

## VsanVsanUpdateItemType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `vmhbaFirmware` |  | `VsanVsanUpdateItemType` | Yes |
| `fullStackFirmware` |  | `VsanVsanUpdateItemType` | Yes |
| `vib` |  | `VsanVsanUpdateItemType` | Yes |
| `offlinebundle` |  | `VsanVsanUpdateItemType` | Yes |
| `VsanUpdateItemType_Unknown` |  | `VsanVsanUpdateItemType` | Yes |

## VsanVsanUpdateManager

### Methods

#### `_getRef`


**Returns:** `VsanManagedObjectReference`

---

#### `vsanVibInstallPreflightCheck`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `VsanVsanVibInstallPreflightStatus`

---

#### `vsanVibScan`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Array/VsanVsanVibSpec` |  |

**Returns:** `Array/VsanVsanVibScanResult`

---

#### `vsanVibInstall_Task`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Array/VsanVsanVibSpec` |  |
| `arg2` | `Array/VsanVsanVibScanResult` |  |
| `arg3` | `Array/VsanVsanHclFirmwareUpdateSpec` |  |
| `arg4` | `VsanHostMaintenanceSpec` |  |
| `arg5` | `Boolean` |  |
| `arg6` | `Boolean` |  |

**Returns:** `VsanManagedObjectReference`

---

## VsanVsanUpgradeStatusEx

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `isPrecheck` |  | `Boolean` | No |
| `precheckResult` |  | `VsanVsanDiskFormatConversionCheckResult` | No |
| `inProgress` |  | `Boolean` | No |
| `aborted` |  | `Boolean` | No |
| `progress` |  | `Number` | No |
| `completed` |  | `Boolean` | No |
| `dynamicType` |  | `String` | No |

### Methods

#### `VsanVsanUpgradeStatusEx`


**Returns:** `void`

---

#### `isIsPrecheck`


**Returns:** `Boolean`

---

#### `isAborted`


**Returns:** `Boolean`

---

#### `isCompleted`


**Returns:** `Boolean`

---

## VsanVsanUpgradeSystemEx

### Methods

#### `vsanQueryUpgradeStatusEx`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `VsanVsanUpgradeStatusEx`

---

#### `_getRef`


**Returns:** `VsanManagedObjectReference`

---

#### `performVsanUpgradePreflightAsyncCheck_Task`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Boolean` |  |
| `arg2` | `VsanVsanDiskFormatConversionSpec` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `retrieveSupportedVsanFormatVersion`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `Number`

---

#### `performVsanUpgradePreflightCheckEx`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Boolean` |  |
| `arg2` | `VsanVsanDiskFormatConversionSpec` |  |

**Returns:** `VsanVsanDiskFormatConversionCheckResult`

---

#### `performVsanUpgradeEx`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Boolean` |  |
| `arg2` | `Boolean` |  |
| `arg3` | `Boolean` |  |
| `arg4` | `Array/VsanManagedObjectReference` |  |
| `arg5` | `VsanVsanDiskFormatConversionSpec` |  |

**Returns:** `VsanManagedObjectReference`

---

## VsanVsanUpgradeSystemUpgradeHistoryStoragePoolOp

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `task` |  | `VsanManagedObjectReference` | No |
| `host` |  | `VsanManagedObjectReference` | No |
| `message` |  | `String` | No |
| `diskInfo` |  | `VsanVimVsanHostStoragePoolDiskInfo` | No |
| `dynamicType` |  | `String` | No |
| `operation` |  | `String` | No |
| `timestamp` |  | `Date` | No |

## VsanVsanVcClusterConfigSystem

### Methods

#### `vsanVCFReconfigureExDecovergedNetConfig`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `VsanVimVsanReconfigSpec` |  |
| `arg2` | `Boolean` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `_getRef`


**Returns:** `VsanManagedObjectReference`

---

#### `vsanQueryClusterDrsStats`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Array/VsanManagedObjectReference` |  |

**Returns:** `Array/VsanVsanHostDrsStats`

---

#### `vsanClusterReconfig`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `VsanVimVsanReconfigSpec` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `runLifecycleCheck`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `VsanVsanVcLifecycleCheckSpec` |  |

**Returns:** `VsanVsanVcLifecycleCheckResult`

---

#### `vsanPerformHostCompatibilityCheck`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `VsanManagedObjectReference` |  |

**Returns:** `VsanVsanCompatibilityCheckResult`

---

#### `vsanEsaVCFReconfigureEx`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `VsanVimVsanReconfigSpec` |  |
| `arg2` | `Boolean` |  |
| `arg3` | `Boolean` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vsanGetDataProtectionLoadBalancers`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `VsanDataProtectionLoadBalancersInfo`

---

#### `vsanClusterGetConfig`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `VsanVsanConfigInfoEx`

---

#### `vsanClusterGetRuntimeStats`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Array/String` |  |

**Returns:** `Array/VsanVsanRuntimeStatsHostMap`

---

#### `vsanFindClusterByDatastoreUrl`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vsanEncryptedClusterRekey_Task`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Boolean` |  |
| `arg2` | `Boolean` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `hciRemoveWcpUiPlugin`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `String` |  |

**Returns:** `void`

---

## VsanVsanVcClusterHealthSystem

### Methods

#### `vsanClusterQueryFileServiceHealthSummary`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Boolean` |  |
| `arg2` | `Boolean` |  |

**Returns:** `VsanVsanClusterFileServiceHealthSummary`

---

#### `vsanQueryVcClusterNetworkPerfTest`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Boolean` |  |
| `arg2` | `Number` |  |

**Returns:** `VsanVsanClusterNetworkLoadTestResult`

---

#### `vsanDownloadAndInstallVendorTool_Task`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vsanHealthQueryVsanClusterHealthConfig`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `VsanVsanClusterHealthConfigs`

---

#### `vsanHealthQueryVsanClusterHealthCheckInterval`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `Number`

---

#### `vsanQueryVcClusterNetworkPerfHistoryTest`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Number` |  |
| `arg2` | `VsanVsanClusterNetworkPerfTaskSpec` |  |

**Returns:** `Array/VsanVsanClusterNetworkLoadTestResult`

---

#### `queryRunHostIperfTestProxy`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Boolean` |  |
| `arg2` | `Boolean` |  |
| `arg3` | `String` |  |
| `arg4` | `Number` |  |
| `arg5` | `VsanVsanIperfClientSpec` |  |

**Returns:** `VsanVsanNetworkLoadTestResult`

---

#### `restoreClusterRebootWithNAMM`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Number` |  |

**Returns:** `Boolean`

---

#### `setVsanVcgMappingForHwDevices`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVsanHwToVcgInfoMappingSpec` |  |

**Returns:** `Boolean`

---

#### `vsanAttachVsanSupportBundleToSr`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `String` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vsanHealthUninstallCluster`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `String` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vsanStopRebalanceCluster`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Array/VsanManagedObjectReference` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vsanQueryVcClusterDataProtectionCfgSync`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `Array/VsanVsanClusterDataProtectionCfgSyncResult`

---

#### `vsanQueryVcClusterVmdkWorkloadTypes`


**Returns:** `Array/VsanVsanStorageWorkloadType`

---

#### `vsanQueryAllSupportedHealthChecks`


**Returns:** `Array/VsanVsanClusterHealthCheckInfo`

---

#### `vsanVcClusterDatastoreUsage`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `VsanVsanClusterDatastoreUsageResult`

---

#### `vsanPurgeHclFiles`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/String` |  |

**Returns:** `void`

---

#### `vsanQueryVcClusterCreateVmHealthTest`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Number` |  |
| `arg2` | `VsanManagedObjectReference` |  |

**Returns:** `VsanVsanClusterCreateVmHealthTestResult`

---

#### `vsanVcClusterClomdLiveness`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `VsanVsanClusterClomdLivenessResult`

---

#### `vsanVcClusterArchivalAccessibility`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `Array/VsanVsanArchivalAccessibilityResult`

---

#### `vsanHealthSendVsanTelemetry`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `void`

---

#### `vsanQueryVcClusterCreateVmHealthHistoryTest`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Number` |  |
| `arg2` | `VsanManagedObjectReference` |  |

**Returns:** `Array/VsanVsanClusterCreateVmHealthTestResult`

---

#### `vsanQueryClusterHistoricalHealth`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVsanHistoricalHealthQuerySpec` |  |

**Returns:** `Array/VsanVsanClusterHealthSummary`

---

#### `vsanHealthPrepareCluster`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `String` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vsanHealthGetClusterStatus`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `String` |  |

**Returns:** `String`

---

#### `vsanHealthSetLogLevel`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |

**Returns:** `void`

---

#### `vsanVcClusterGetHclInfo`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Boolean` |  |
| `arg2` | `Boolean` |  |
| `arg3` | `String` |  |
| `arg4` | `VsanVsanHclQuerySpec` |  |

**Returns:** `VsanVsanClusterHclInfo`

---

#### `vsanVcQueryClusterCaptureVsanPcap`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Number` |  |
| `arg2` | `Array/VsanVsanClusterHostVmknicMapping` |  |
| `arg3` | `Boolean` |  |
| `arg4` | `Boolean` |  |
| `arg5` | `Array/String` |  |
| `arg6` | `Array/Number` |  |
| `arg7` | `String` |  |

**Returns:** `VsanVsanVsanClusterPcapResult`

---

#### `vsanGetDiskHclConstraints`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |
| `arg1` | `Array/VsanVsanDiskModelInfo` |  |

**Returns:** `Array/VsanVsanHclDiskConstraint`

---

#### `vsanHealthIsRebalanceRunning`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Array/VsanManagedObjectReference` |  |

**Returns:** `Boolean`

---

#### `vsanVcClusterDpdLiveness`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `VsanVsanClusterDpdLivenessResult`

---

#### `vsanHealthGetVsanClusterSilentChecks`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `Array/String`

---

#### `vsanQueryAttachToSrHistory`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Number` |  |
| `arg2` | `String` |  |

**Returns:** `Array/VsanVsanAttachToSrOperation`

---

#### `vsanRebalanceCluster`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Array/VsanManagedObjectReference` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vsanHealthTestVsanClusterTelemetryProxy`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVsanClusterTelemetryProxyConfig` |  |

**Returns:** `Boolean`

---

#### `_getRef`


**Returns:** `VsanManagedObjectReference`

---

#### `vsanClusterHealthExtensionManagmentPreCheck`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Boolean` |  |
| `arg2` | `String` |  |

**Returns:** `VsanVsanHealthExtMgmtPreCheckResult`

---

#### `vsanVcClusterRunVmdkLoadTest`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `String` |  |
| `arg2` | `Number` |  |
| `arg3` | `Array/VsanVsanVmdkLoadTestSpec` |  |
| `arg4` | `String` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vsanGetHclConstraints`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `String` |  |

**Returns:** `VsanVsanHclReleaseConstraint`

---

#### `vsanHealthSetVsanClusterHealthCheckInterval`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Number` |  |

**Returns:** `void`

---

#### `vsanHealthSetVsanClusterSilentChecks`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Array/String` |  |
| `arg2` | `Array/String` |  |

**Returns:** `Boolean`

---

#### `prepareClusterRebootWithNAMM`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Number` |  |

**Returns:** `Boolean`

---

#### `vsanHealthUpdateDefaultDSPolicyRecommendation`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vsanQueryVcClusterHealthSummary`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Number` |  |
| `arg2` | `Array/String` |  |
| `arg3` | `Boolean` |  |
| `arg4` | `Array/String` |  |
| `arg5` | `Boolean` |  |
| `arg6` | `String` |  |
| `arg7` | `Array/VsanManagedObjectReference` |  |
| `arg8` | `VsanVsanClusterHealthQuerySpec` |  |
| `arg9` | `Boolean` |  |

**Returns:** `VsanVsanClusterHealthSummary`

---

#### `vsanQueryVerifyVcClusterNetworkSettings`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `VsanVsanClusterNetworkHealthResult`

---

#### `vsanGetReleaseRecommendation`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Array/String` |  |
| `arg2` | `Array/String` |  |

**Returns:** `Array/VsanVsanHclReleaseConstraint`

---

#### `vsanQueryVcClusterPhysicalDiskHealthSummary`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `Array/VsanVsanPhysicalDiskHealthSummary`

---

#### `vsanQueryVcClusterVmdkLoadHistoryTest`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Number` |  |
| `arg2` | `String` |  |

**Returns:** `Array/VsanVsanClusterVmdkLoadTestResult`

---

#### `vsanQueryVcClusterEncryptionHealthSummary`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `VsanVsanClusterEncryptionHealthSummary`

---

#### `vsanVcUploadHclDb`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |

**Returns:** `Boolean`

---

#### `vsanHealthRepairClusterObjectsImmediate`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Array/String` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vsanHealthQueryVsanProxyConfig`


**Returns:** `VsanVsanClusterTelemetryProxyConfig`

---

#### `vsanGetHclInfoForEligibleDisks`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVsanHclQuerySpec` |  |

**Returns:** `VsanVsanClusterHclInfo`

---

#### `vsanVcUpdateHclDbFromWeb`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |

**Returns:** `Boolean`

---

#### `vsanVcClusterQueryObjectHealthSummary`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Array/String` |  |
| `arg2` | `Boolean` |  |
| `arg3` | `VsanVsanClusterHealthQuerySpec` |  |
| `arg4` | `Boolean` |  |

**Returns:** `VsanVsanObjectOverallHealth`

---

#### `vsanQueryVcClusterHealthSummaryTask`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Array/VsanManagedObjectReference` |  |
| `arg2` | `Boolean` |  |
| `arg3` | `Boolean` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vsanDownloadHclFile_Task`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/String` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vsanQueryVcClusterSmartStatsSummary`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `Array/VsanVsanSmartStatsHostSummary`

---

#### `vsanQueryVcClusterAdvCfgSync`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Array/String` |  |
| `arg2` | `Boolean` |  |
| `arg3` | `Boolean` |  |

**Returns:** `Array/VsanVsanClusterAdvCfgSyncResult`

---

#### `vsanHealthSetVsanClusterTelemetryConfig`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `VsanVsanClusterHealthConfigs` |  |

**Returns:** `void`

---

#### `vsanVcClusterQueryVerifyHealthSystemVersions`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `VsanVsanClusterHealthSystemVersionResult`

---

#### `vsanQueryVcClusterCheckLimits`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `VsanVsanClusterLimitHealthResult`

---

#### `vsanQueryVcClusterObjExtAttrs`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Array/String` |  |

**Returns:** `Array/VsanVsanClusterObjectExtAttrs`

---

#### `vsanQueryVcClusterNetworkPerfTask`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `VsanVsanClusterNetworkPerfTaskSpec` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vsanRemediateDataProtectionConfigInCluster`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `VsanManagedObjectReference`

---

## VsanVsanVcClusterHealthSystemVsanHealthLogLevelEnum

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `VsanHealthLogLevelEnum_Unknown` |  | `VsanVsanVcClusterHealthSystemVsanHealthLogLevelEnum` | Yes |
| `ERROR` |  | `VsanVsanVcClusterHealthSystemVsanHealthLogLevelEnum` | Yes |
| `INFO` |  | `VsanVsanVcClusterHealthSystemVsanHealthLogLevelEnum` | Yes |
| `WARNING` |  | `VsanVsanVcClusterHealthSystemVsanHealthLogLevelEnum` | Yes |
| `DEBUG` |  | `VsanVsanVcClusterHealthSystemVsanHealthLogLevelEnum` | Yes |
| `CRITICAL` |  | `VsanVsanVcClusterHealthSystemVsanHealthLogLevelEnum` | Yes |

## VsanVsanVcEventsProcessor

### Methods

#### `vsanVcAnalyticsStartEventsDaemon`


**Returns:** `void`

---

#### `_getRef`


**Returns:** `VsanManagedObjectReference`

---

#### `vsanVcAnalyticsCollectHostEvents`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `String`

---

#### `vsanVcAnalyticsSendClusterEvents`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `Boolean`

---

#### `vsanVcAnalyticsCollectClusterSnapshot`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `String` |  |

**Returns:** `String`

---

#### `vsanVcAnalyticsSendClusterSnapshot`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `Boolean`

---

#### `vsanVcAnalyticsSendHostEvents`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `Boolean`

---

#### `vsanVcAnalyticsCollectClusterEvents`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `String`

---

#### `vsanVcAnalyticsStopEventsDaemon`


**Returns:** `void`

---

## VsanVsanVcgDeviceInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `vcgId` |  | `Number` | No |
| `dynamicType` |  | `String` | No |
| `vcgModelName` |  | `String` | No |

## VsanVsanVcgNotificationConfigSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `cluster` |  | `VsanManagedObjectReference` | No |
| `emailList` |  | `Array/String` | No |
| `dynamicType` |  | `String` | No |
| `enabled` |  | `Boolean` | No |

## VsanVsanVcgNotificationSystem

### Methods

#### `vsanConfigureVcgNotificationService`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/VsanVsanVcgNotificationConfigSpec` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `_getRef`


**Returns:** `VsanManagedObjectReference`

---

#### `vsanCheckNetworkConnection`


**Returns:** `Boolean`

---

#### `vsanGetVsanVcgSubscriptionInfo`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/VsanManagedObjectReference` |  |

**Returns:** `VsanVsanVcVcgSubscriptionInfo`

---

## VsanVsanVcgSubscribeState

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `Subscribing` |  | `VsanVsanVcgSubscribeState` | Yes |
| `Loading` |  | `VsanVsanVcgSubscribeState` | Yes |
| `Failed` |  | `VsanVsanVcgSubscribeState` | Yes |
| `Subscribed` |  | `VsanVsanVcgSubscribeState` | Yes |
| `VsanVcgSubscribeState_Unknown` |  | `VsanVsanVcgSubscribeState` | Yes |
| `Unsubscribed` |  | `VsanVsanVcgSubscribeState` | Yes |

## VsanVsanVcKmipServersHealth

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `kmsProviderId` |  | `String` | No |
| `clientCertExpireDate` |  | `Date` | No |
| `kekExpireDate` |  | `Date` | No |
| `cmkHealth` |  | `String` | No |
| `hostKeyExpireHealth` |  | `String` | No |
| `hostKeyExpireDate` |  | `Date` | No |
| `health` |  | `String` | No |
| `kekExpireHealth` |  | `String` | No |
| `isAwsKms` |  | `Boolean` | No |
| `kmsHealth` |  | `Array/VsanVsanKmsHealth` | No |
| `dynamicType` |  | `String` | No |
| `clientCertHealth` |  | `String` | No |

### Methods

#### `VsanVsanVcKmipServersHealth`


**Returns:** `void`

---

#### `isIsAwsKms`


**Returns:** `Boolean`

---

## VsanVsanVcLifecycleCheckResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `configDetails` |  | `VsanLifecycleConfigDetails` | No |
| `dynamicType` |  | `String` | No |
| `preCheckResults` |  | `Array/VsanLifecyclePreCheckResult` | No |
| `status` |  | `String` | No |

## VsanVsanVcLifecycleCheckSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |
| `operation` |  | `String` | No |

## VsanVsanVcPostDeployConfigSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `createNativeKeyProviderSpec` |  | `VsanVsanHostCreateNativeKeyProviderSpec` | No |
| `vsanDataEfficiencyConfig` |  | `VsanVsanDataEfficiencyConfig` | No |
| `vsanLicenseKey` |  | `String` | No |
| `dcName` |  | `String` | No |
| `clusterName` |  | `String` | No |
| `vsanDataEncryptionConfig` |  | `VsanVsanHostEncryptionInfo` | No |
| `vsanClusterMode` |  | `String` | No |
| `deconvergedNetConfig` |  | `VsanVsanDeconvergedNetConfig` | No |
| `dynamicType` |  | `String` | No |
| `taskId` |  | `String` | No |
| `hostLicenseKey` |  | `String` | No |

## VsanVsanVcsaBootstrapOntoVsanSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `vcsaOvaPath` |  | `String` | No |
| `vmName` |  | `String` | No |
| `portgroup` |  | `VsanManagedObjectReference` | No |
| `vsanBootstrapOnly` |  | `Boolean` | No |
| `vcConfig` |  | `VsanVsanVcsaDeploymentSpec` | No |
| `vsanDiskMappingCreationSpec` |  | `VsanVimVsanHostDiskMappingCreationSpec` | No |
| `dynamicType` |  | `String` | No |
| `vcPostDeployConfig` |  | `VsanVsanVcPostDeployConfigSpec` | No |
| `taskId` |  | `String` | No |

### Methods

#### `VsanVsanVcsaBootstrapOntoVsanSpec`


**Returns:** `void`

---

#### `VsanVsanVcsaBootstrapOntoVsanSpec`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `vsanDiskMappingCreationSpec` | `VsanVimVsanHostDiskMappingCreationSpec` |  |
| `vcConfig` | `VsanVsanVcsaDeploymentSpec` |  |
| `portgroup` | `VsanManagedObjectReference` |  |
| `vmName` | `String` |  |
| `vsanBootstrapOnly` | `Boolean` |  |
| `vcsaOvaPath` | `String` |  |
| `vcPostDeployConfig` | `VsanVsanVcPostDeployConfigSpec` |  |
| `taskId` | `String` |  |

**Returns:** `void`

---

#### `isVsanBootstrapOnly`


**Returns:** `Boolean`

---

## VsanVsanVcsaDeployerSystem

### Methods

#### `vsanVcsaGetBootstrapProgress`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `Array/String` |  |

**Returns:** `Array/VsanVsanVcsaDeploymentProgress`

---

#### `_getRef`


**Returns:** `VsanManagedObjectReference`

---

#### `vsanConvertDeploymentSpecFromJson`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |

**Returns:** `VsanVsanVcsaDeploymentSpecValidationResult`

---

#### `vsanPostConfigForVcsa`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVsanVcPostDeployConfigSpec` |  |

**Returns:** `String`

---

#### `vsanValidateDeploymentConfig`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVsanVcsaDeploymentSpec` |  |

**Returns:** `VsanVsanVcsaDeploymentSpecValidationResult`

---

#### `vsanVcsaGetBootstrapTasks`


**Returns:** `Array/VsanVsanVcsaBootstrapOntoVsanSpec`

---

#### `vsanVcsaCancelBootstrapTask`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |
| `arg1` | `Boolean` |  |

**Returns:** `void`

---

#### `vsanPrepareVsanForVcsa`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanVsanPrepareVsanForVcsaSpec` |  |

**Returns:** `String`

---

## VsanVsanVcsaDeploymentProgress

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `phase` |  | `String` | No |
| `progressPct` |  | `Number` | No |
| `success` |  | `Boolean` | No |
| `vm` |  | `VsanManagedObjectReference` | No |
| `message` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `taskId` |  | `String` | No |
| `updateCounter` |  | `Number` | No |

## VsanVsanVcsaDeploymentSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `networkMode` |  | `String` | No |
| `ssoPassword` |  | `String` | No |
| `ssoDomainName` |  | `String` | No |
| `networkPorts` |  | `String` | No |
| `osPassword` |  | `String` | No |
| `networkDnsServers` |  | `Array/String` | No |
| `dynamicType` |  | `String` | No |
| `osTimeToolsSync` |  | `Boolean` | No |
| `networkHostname` |  | `String` | No |
| `networkPrefix` |  | `Number` | No |
| `osNtpServers` |  | `Array/String` | No |
| `osSshEnabled` |  | `Boolean` | No |
| `networkIpAddress` |  | `String` | No |
| `networkGateway` |  | `String` | No |
| `networkIpFamily` |  | `String` | No |
| `ssoSiteName` |  | `String` | No |

### Methods

#### `VsanVsanVcsaDeploymentSpec`


**Returns:** `void`

---

#### `VsanVsanVcsaDeploymentSpec`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `osPassword` | `String` |  |
| `osSshEnabled` | `Boolean` |  |
| `osTimeToolsSync` | `Boolean` |  |
| `osNtpServers` | `Array/String` |  |
| `ssoPassword` | `String` |  |
| `ssoDomainName` | `String` |  |
| `ssoSiteName` | `String` |  |
| `networkIpFamily` | `String` |  |
| `networkMode` | `String` |  |
| `networkIpAddress` | `String` |  |
| `networkPrefix` | `Number` |  |
| `networkGateway` | `String` |  |
| `networkDnsServers` | `Array/String` |  |
| `networkHostname` | `String` |  |
| `networkPorts` | `String` |  |

**Returns:** `void`

---

#### `isOsTimeToolsSync`


**Returns:** `Boolean`

---

#### `isOsSshEnabled`


**Returns:** `Boolean`

---

## VsanVsanVcsaDeploymentSpecValidationResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `valid` |  | `Boolean` | No |
| `invalidProperties` |  | `Array/String` | No |
| `dynamicType` |  | `String` | No |
| `deploymentSpec` |  | `VsanVsanVcsaDeploymentSpec` | No |

## VsanVsanVcStretchedClusterConfigSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `witnessStoragePoolSpecs` |  | `Array/VsanVsanAddStoragePoolDiskSpec` | No |
| `witnessHost` |  | `VsanManagedObjectReference` | No |
| `dynamicType` |  | `String` | No |
| `clusters` |  | `Array/VsanVsanStretchedClusterConfig` | No |
| `witnessDiskMappings` |  | `Array/VsanVsanHostDiskMapping` | No |

## VsanVsanVcVcgSubscriptionInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |
| `clusterDetails` |  | `Array/VsanVsanClusterSubscriptionInfo` | No |
| `timestamp` |  | `Date` | No |

## VsanVsanVdsMigrationPlan

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `infraVms` |  | `Array/VsanManagedObjectReference` | No |
| `dynamicType` |  | `String` | No |
| `inaccessibleVms` |  | `Array/VsanManagedObjectReference` | No |
| `pgs` |  | `Array/VsanVsanVdsPgMigrationSpec` | No |

## VsanVsanVdsPgMigrationHostInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `hostname` |  | `String` | No |
| `vmVnics` |  | `Array/VsanVsanVdsPgMigrationVmInfo` | No |
| `host` |  | `VsanManagedObjectReference` | No |
| `dynamicType` |  | `String` | No |
| `vmknicDevices` |  | `Array/String` | No |

## VsanVsanVdsPgMigrationSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `vdsPgType` |  | `String` | No |
| `hosts` |  | `Array/VsanVsanVdsPgMigrationHostInfo` | No |
| `collisionRename` |  | `Boolean` | No |
| `vssPgName` |  | `String` | No |
| `dvPgName` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanVdsPgMigrationVmInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `vnicLabel` |  | `Array/String` | No |
| `vm` |  | `VsanManagedObjectReference` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanVdsSystem

### Methods

#### `vsanVssMigrateVds`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `Array/VsanManagedObjectReference` |  |
| `arg2` | `VsanManagedObjectReference` |  |
| `arg3` | `String` |  |
| `arg4` | `Array/String` |  |
| `arg5` | `Array/VsanManagedObjectReference` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `_getRef`


**Returns:** `VsanManagedObjectReference`

---

#### `vsanRollbackVdsToVss`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `Boolean`

---

#### `vsanVdsMigrateVss`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `VsanVsanVdsMigrationPlan` |  |
| `arg2` | `String` |  |
| `arg3` | `String` |  |
| `arg4` | `Array/String` |  |
| `arg5` | `Array/VsanManagedObjectReference` |  |
| `arg6` | `VsanManagedObjectReference` |  |
| `arg7` | `Array/VsanManagedObjectReference` |  |

**Returns:** `VsanManagedObjectReference`

---

#### `vsanVdsGetMigrationPlan`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |
| `arg1` | `String` |  |
| `arg2` | `String` |  |
| `arg3` | `Array/String` |  |
| `arg4` | `Array/VsanManagedObjectReference` |  |
| `arg5` | `VsanManagedObjectReference` |  |
| `arg6` | `Array/VsanManagedObjectReference` |  |

**Returns:** `VsanVsanVdsMigrationPlan`

---

## VsanVsanVibInstallPreflightStatus

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `manualVmotionRequired` |  | `Boolean` | No |
| `rollingRequired` |  | `Boolean` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanVibScanResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `maintenanceModeRequired` |  | `Boolean` | No |
| `rebootRequired` |  | `Boolean` | No |
| `vibVersion` |  | `String` | No |
| `pkgDepsMetByHost` |  | `Boolean` | No |
| `meetsSystemReq` |  | `Boolean` | No |
| `host` |  | `VsanManagedObjectReference` | No |
| `existingVersion` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `vibName` |  | `String` | No |

## VsanVsanVibSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `vibUrl` |  | `String` | No |
| `metaSha1Sum` |  | `String` | No |
| `host` |  | `VsanManagedObjectReference` | No |
| `metaUrl` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `vibSha1Sum` |  | `String` | No |

## VsanVsanVibType

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `driver` |  | `VsanVsanVibType` | Yes |
| `VsanVibType_Unknown` |  | `VsanVsanVibType` | Yes |
| `tool` |  | `VsanVsanVibType` | Yes |

## VsanVsanVmdkIOLoadSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `random` |  | `Boolean` | No |
| `oio` |  | `Number` | No |
| `iosizeB` |  | `Number` | No |
| `dataSizeMb` |  | `Number` | No |
| `startOffsetB` |  | `Number` | No |
| `dynamicType` |  | `String` | No |
| `readPct` |  | `Number` | No |

## VsanVsanVmdkLoadTestResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `numIoAboveLatencyThreshold` |  | `Number` | No |
| `tputBps` |  | `Number` | No |
| `success` |  | `Boolean` | No |
| `avgLatencyUs` |  | `Number` | No |
| `iops` |  | `Number` | No |
| `totalBytes` |  | `Number` | No |
| `maxLatencyUs` |  | `Number` | No |
| `dynamicType` |  | `String` | No |
| `spec` |  | `VsanVsanVmdkLoadTestSpec` | No |
| `faultMessage` |  | `String` | No |
| `actualDurationSec` |  | `Number` | No |

## VsanVsanVmdkLoadTestSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `vmdkIOSpecSequence` |  | `Array/VsanVsanVmdkIOLoadSpec` | No |
| `stepDurationSec` |  | `Number` | No |
| `dynamicType` |  | `String` | No |
| `vmdkIOSpec` |  | `VsanVsanVmdkIOLoadSpec` | No |

## VsanVsanVmSpaceUsage

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `efficientCapacity` |  | `VsanVimVsanDataEfficiencyCapacityState` | No |
| `spaceUsageByObjectType` |  | `Array/VsanVsanObjectSpaceSummary` | No |
| `totalCapacityB` |  | `Number` | No |
| `vm` |  | `VsanManagedObjectReference` | No |
| `freeCapacityB` |  | `Number` | No |
| `entityId` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanVmVdsMigrationSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `vnics` |  | `Array/VsanVsanVnicVdsMigrationSpec` | No |
| `dynamicType` |  | `String` | No |
| `vmInstanceUuid` |  | `String` | No |

## VsanVsanVnicVdsMigrationSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |
| `key` |  | `Number` | No |

## VsanVsanVsanClusterPcapGroup

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `members` |  | `Array/String` | No |
| `dynamicType` |  | `String` | No |
| `master` |  | `String` | No |

## VsanVsanVsanClusterPcapResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `hostResults` |  | `Array/VsanVsanVsanPcapResult` | No |
| `groups` |  | `Array/VsanVsanVsanClusterPcapGroup` | No |
| `dynamicType` |  | `String` | No |
| `issues` |  | `Array/String` | No |
| `pkts` |  | `Array/String` | No |

## VsanVsanVsanPcapResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `hostname` |  | `String` | No |
| `tcpdumpFilter` |  | `String` | No |
| `snaplen` |  | `Number` | No |
| `pcap` |  | `String` | No |
| `vmknic` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `pkts` |  | `Array/String` | No |
| `calltime` |  | `Number` | No |

## VsanVsanVumConfig

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `baselinePreferenceType` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanVumSystem

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `vsanVumConfig` |  | `VsanVsanVumSystemConfig` | Yes |

### Methods

#### `vsanVcUploadReleaseDb`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |

**Returns:** `void`

---

#### `_getRef`


**Returns:** `VsanManagedObjectReference`

---

#### `fetchIsoDepotCookie`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `String` |  |
| `arg1` | `String` |  |

**Returns:** `void`

---

#### `vsanHostUpdateFirmware`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `arg0` | `VsanManagedObjectReference` |  |

**Returns:** `VsanManagedObjectReference`

---

## VsanVsanVumSystemConfig

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `releaseDbLastUpdate` |  | `Date` | No |
| `autoCheckInterval` |  | `Number` | No |
| `metadataUpdateInterval` |  | `Number` | No |
| `dynamicType` |  | `String` | No |
| `enabled` |  | `Boolean` | No |

### Methods

#### `VsanVsanVumSystemConfig`


**Returns:** `void`

---

#### `VsanVsanVumSystemConfig`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `enabled` | `Boolean` |  |
| `autoCheckInterval` | `Number` |  |
| `metadataUpdateInterval` | `Number` |  |
| `releaseDbLastUpdate` | `Date` |  |

**Returns:** `void`

---

#### `isEnabled`


**Returns:** `Boolean`

---

## VsanVsanWhatifCapacity

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `isSatisfiable` |  | `Boolean` | No |
| `freeWhatifCapacityB` |  | `Number` | No |
| `totalWhatifCapacityB` |  | `Number` | No |
| `storagePolicy` |  | `VsanVirtualMachineProfileSpec` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanWhatifCapacityThreshold

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `capacityReservationInfo` |  | `VsanVsanCapacityReservationInfo` | No |
| `whatifCapacityHealthThreshold` |  | `VsanVsanHealthThreshold` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanWhatIfEvacDetail

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `bytesToSync` |  | `Number` | No |
| `success` |  | `Boolean` | No |
| `failedDueToInaccessibleObjects` |  | `Boolean` | No |
| `dynamicType` |  | `String` | No |
| `extraSpaceNeeded` |  | `Number` | No |
| `inaccessibleObjects` |  | `Array/String` | No |
| `incompliantObjects` |  | `Array/String` | No |

### Methods

#### `VsanVsanWhatIfEvacDetail`


**Returns:** `void`

---

#### `VsanVsanWhatIfEvacDetail`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `success` | `Boolean` |  |
| `bytesToSync` | `Number` |  |
| `inaccessibleObjects` | `Array/String` |  |
| `incompliantObjects` | `Array/String` |  |
| `extraSpaceNeeded` | `Number` |  |
| `failedDueToInaccessibleObjects` | `Boolean` |  |

**Returns:** `void`

---

#### `isFailedDueToInaccessibleObjects`


**Returns:** `Boolean`

---

#### `isSuccess`


**Returns:** `Boolean`

---

## VsanVsanWhatIfEvacResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `evacAllData` |  | `VsanVsanWhatIfEvacDetail` | No |
| `ensureAccess` |  | `VsanVsanWhatIfEvacDetail` | No |
| `dynamicType` |  | `String` | No |
| `noAction` |  | `VsanVsanWhatIfEvacDetail` | No |

## VsanVsanWitnessConfig

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `preferredFaultDomain` |  | `String` | No |
| `host` |  | `VsanManagedObjectReference` | No |
| `networkAddresses` |  | `Array/String` | No |
| `preferredFdUuid` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `uuid` |  | `String` | No |

## VsanVsanWitnessContainer

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `rdtPort` |  | `Number` | No |
| `rootCertificate` |  | `String` | No |
| `mgmtPort` |  | `Number` | No |
| `ipAddress` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `cmmdsPort` |  | `Number` | No |

## VsanVsanWitnessContainerConfig

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `witnessContainer` |  | `VsanVsanWitnessContainer` | No |
| `preferredFaultDomain` |  | `String` | No |
| `preferredFdUuid` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `uuid` |  | `String` | No |

## VsanVsanWitnessContainerPrecheckResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `compatible` |  | `Boolean` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanWitnessHostConfig

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `metadataMode` |  | `Boolean` | No |
| `preferredFaultDomainName` |  | `String` | No |
| `subClusterUuid` |  | `String` | No |
| `dynamicType` |  | `String` | No |

### Methods

#### `VsanVsanWitnessHostConfig`


**Returns:** `void`

---

#### `VsanVsanWitnessHostConfig`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `subClusterUuid` | `String` |  |
| `preferredFaultDomainName` | `String` |  |
| `metadataMode` | `Boolean` |  |

**Returns:** `void`

---

#### `isMetadataMode`


**Returns:** `Boolean`

---

## VsanVsanXvcClientConfig

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `name` |  | `String` | No |
| `xvcClusters` |  | `Array/VsanVsanXVCClientInfo` | No |
| `dynamicType` |  | `String` | No |
| `uuid` |  | `String` | No |

## VsanVsanXVCClientInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `clusterUuid` |  | `String` | No |
| `cluster` |  | `VsanManagedObjectReference` | No |
| `ownerVc` |  | `String` | No |
| `clusterName` |  | `String` | No |
| `vsanFormatVersion` |  | `String` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanXvcClientInfoSpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `clusterUuid` |  | `String` | No |
| `cluster` |  | `VsanManagedObjectReference` | No |
| `datastore` |  | `Array/VsanManagedObjectReference` | No |
| `vcVersion` |  | `String` | No |
| `clusterName` |  | `String` | No |
| `minVsanFormatVersion` |  | `String` | No |
| `vsanFormatVersion` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `clientVc` |  | `String` | No |
| `vcUuid` |  | `String` | No |

## VsanVsanXVCDatastore

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `datastore` |  | `VsanManagedObjectReference` | No |
| `name` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `uuid` |  | `String` | No |

## VsanVsanXVCDatastoreConfig

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `xvcDatastores` |  | `Array/VsanVsanXVCDatastoreInfo` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanXVCDatastoreInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `ownerVc` |  | `String` | No |
| `datastore` |  | `VsanManagedObjectReference` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanXvcQueryCriteria

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `ignoreCase` |  | `Boolean` | No |
| `property` |  | `String` | No |
| `dynamicType` |  | `String` | No |
| `operator` |  | `String` | No |
| `comparableValue` |  | `Object` | No |

### Methods

#### `VsanVsanXvcQueryCriteria`


**Returns:** `void`

---

#### `isIgnoreCase`


**Returns:** `Boolean`

---

## VsanVsanXvcQueryCriteriaOperator

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `LessOrEqual` |  | `VsanVsanXvcQueryCriteriaOperator` | Yes |
| `NotEqual` |  | `VsanVsanXvcQueryCriteriaOperator` | Yes |
| `Like` |  | `VsanVsanXvcQueryCriteriaOperator` | Yes |
| `Equal` |  | `VsanVsanXvcQueryCriteriaOperator` | Yes |
| `In` |  | `VsanVsanXvcQueryCriteriaOperator` | Yes |
| `NotIn` |  | `VsanVsanXvcQueryCriteriaOperator` | Yes |
| `VsanXvcQueryCriteriaOperator_unknown` |  | `VsanVsanXvcQueryCriteriaOperator` | Yes |
| `Unset` |  | `VsanVsanXvcQueryCriteriaOperator` | Yes |
| `Greater` |  | `VsanVsanXvcQueryCriteriaOperator` | Yes |
| `GreaterOrEqual` |  | `VsanVsanXvcQueryCriteriaOperator` | Yes |
| `NotLike` |  | `VsanVsanXvcQueryCriteriaOperator` | Yes |
| `Less` |  | `VsanVsanXvcQueryCriteriaOperator` | Yes |

## VsanVsanXvcQueryFilter

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `criterias` |  | `Array/VsanVsanXvcQueryCriteria` | No |
| `dynamicType` |  | `String` | No |
| `operator` |  | `String` | No |

## VsanVsanXvcQueryFilterOperator

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `Or` |  | `VsanVsanXvcQueryFilterOperator` | Yes |
| `Op_unknown` |  | `VsanVsanXvcQueryFilterOperator` | Yes |
| `And` |  | `VsanVsanXvcQueryFilterOperator` | Yes |

## VsanVsanXvcQueryPropertyValue

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |
| `value` |  | `Object` | No |

## VsanVsanXvcQueryResultSet

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `resultItems` |  | `Array/VsanVsanXvcResultItem` | No |
| `totalCount` |  | `Number` | No |
| `dynamicType` |  | `String` | No |
| `properties` |  | `Array/String` | No |

## VsanVsanXvcQuerySpec

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `filter` |  | `VsanVsanXvcQueryFilter` | No |
| `offset` |  | `Number` | No |
| `objectModel` |  | `String` | No |
| `limit` |  | `Number` | No |
| `returnTotalCount` |  | `Boolean` | No |
| `dynamicType` |  | `String` | No |
| `properties` |  | `Array/String` | No |

### Methods

#### `VsanVsanXvcQuerySpec`


**Returns:** `void`

---

#### `VsanVsanXvcQuerySpec`


**Parameters:**
| Name | Type | Description |
| :--- | :--- | :--- |
| `objectModel` | `String` |  |
| `properties` | `Array/String` |  |
| `filter` | `VsanVsanXvcQueryFilter` |  |
| `offset` | `Number` |  |
| `limit` | `Number` |  |
| `returnTotalCount` | `Boolean` |  |

**Returns:** `void`

---

#### `isReturnTotalCount`


**Returns:** `Boolean`

---

## VsanVsanXvcResultItem

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `propertyValues` |  | `Array/VsanVsanXvcQueryPropertyValue` | No |
| `dynamicType` |  | `String` | No |

## VsanVsanXvcServerUpdateResult

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `serverClusterInfo` |  | `VsanXVCDatastoreDetailedInfo` | No |
| `dynamicType` |  | `String` | No |
| `checkResult` |  | `VsanVsanMountPrecheckResult` | No |

## VsanXVCDatastoreDetailedConfig

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `dynamicType` |  | `String` | No |
| `xvcDatastoreInfo` |  | `Array/VsanXVCDatastoreDetailedInfo` | No |

## VsanXVCDatastoreDetailedInfo

### Attributes

| Name | Description | Type | Read-only |
| :--- | :--- | :--- | :--- |
| `ownerVc` |  | `String` | No |
| `ownerCluster` |  | `VsanManagedObjectReference` | No |
| `datastores` |  | `Array/VsanVsanXVCDatastore` | No |
| `dynamicType` |  | `String` | No |
| `config` |  | `VsanVsanHciMeshServerConfig` | No |

