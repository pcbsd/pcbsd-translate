<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1">
<context>
    <name>DialogFSProp</name>
    <message>
        <source>Dialog</source>
        <translation type="unfinished">Dialog</translation>
    </message>
    <message>
        <source>Apply changes recursively to all descendants</source>
        <translation type="unfinished">Apply changes recursively to all descendants</translation>
    </message>
    <message>
        <source>Property</source>
        <translation type="unfinished">Property</translation>
    </message>
    <message>
        <source>Value</source>
        <translation type="unfinished">Value</translation>
    </message>
    <message>
        <source>Source</source>
        <translation type="unfinished">Source</translation>
    </message>
    <message>
        <source>Add user property</source>
        <translation type="unfinished">Add user property</translation>
    </message>
    <message>
        <source>...</source>
        <translation type="unfinished">...</translation>
    </message>
    <message>
        <source>Remove user property</source>
        <translation type="unfinished">Remove user property</translation>
    </message>
    <message>
        <source>Inherit from parent</source>
        <translation type="unfinished">Inherit from parent</translation>
    </message>
    <message>
        <source>Revert changes</source>
        <translation type="unfinished">Revert changes</translation>
    </message>
    <message>
        <source>Controls how ACL entries are inherited when files and directories are created. The values are
discard, noallow, restricted, and passthrough. For a description of these values, see ACL Properties.</source>
        <translation type="unfinished">Controls how ACL entries are inherited when files and directories are created. The values are
discard, noallow, restricted, and passthrough. For a description of these values, see ACL Properties.</translation>
    </message>
    <message>
        <source>Controls how an ACL entry is modified during a chmod operation.
The values are discard, groupmask, and passthrough. For a description of
these values, see ACL Properties.</source>
        <translation type="unfinished">Controls how an ACL entry is modified during a chmod operation.
The values are discard, groupmask, and passthrough. For a description of
these values, see ACL Properties.</translation>
    </message>
    <message>
        <source>Controls whether the access time for files is updated when they are read.
Turning this property off avoids producing write traffic when reading files and
can result in significant performance gains, though it might confuse mailers and
similar utilities.</source>
        <translation type="unfinished">Controls whether the access time for files is updated when they are read.
Turning this property off avoids producing write traffic when reading files and
can result in significant performance gains, though it might confuse mailers and
similar utilities.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the amount of disk space available to a dataset
and all its children, assuming no other activity in the pool. Because disk space is
shared within a pool, available space can be limited by various factors including
physical pool size, quotas, reservations, and other datasets within the pool.</source>
        <translation type="unfinished">Read-only property that identifies the amount of disk space available to a dataset
and all its children, assuming no other activity in the pool. Because disk space is
shared within a pool, available space can be limited by various factors including
physical pool size, quotas, reservations, and other datasets within the pool.</translation>
    </message>
    <message>
        <source>If this property is set to off, the file system cannot be mounted,
and is ignored by &apos;zfs mount -a&apos;.  Setting this property to off is
similar to setting the mountpoint property to none, except that the
dataset still has a normal mountpoint property, which can be inherited
Setting this property to off allows datasets to be used solely as a
mechanism to inherit properties. One example of setting canmount=off is
to have two datasets with the same mountpoint, so that the children of
both datasets appear in the same directory, but might have different
inherited characteristics.</source>
        <translation type="unfinished">If this property is set to off, the file system cannot be mounted,
and is ignored by &apos;zfs mount -a&apos;.  Setting this property to off is
similar to setting the mountpoint property to none, except that the
dataset still has a normal mountpoint property, which can be inherited
Setting this property to off allows datasets to be used solely as a
mechanism to inherit properties. One example of setting canmount=off is
to have two datasets with the same mountpoint, so that the children of
both datasets appear in the same directory, but might have different
inherited characteristics.</translation>
    </message>
    <message>
        <source>Controls the checksum used to verify data integrity. The default
value is on, which automatically selects an appropriate algorithm
(currently, fletcher4, but this may change in future releases). The
value off disables integrity checking on user data. Disabling
checksums is NOT a recommended practice.</source>
        <translation type="unfinished">Controls the checksum used to verify data integrity. The default
value is on, which automatically selects an appropriate algorithm
(currently, fletcher4, but this may change in future releases). The
value off disables integrity checking on user data. Disabling
checksums is NOT a recommended practice.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the compression ratio achieved for a dataset,
expressed as a multiplier. Compression can be enabled by the zfs set compression=on
dataset command. The value is calculated from the logical size of all files and the
amount of referenced physical data. It includes explicit savings through the use of
the compression property.</source>
        <translation type="unfinished">Read-only property that identifies the compression ratio achieved for a dataset,
expressed as a multiplier. Compression can be enabled by the zfs set compression=on
dataset command. The value is calculated from the logical size of all files and the
amount of referenced physical data. It includes explicit savings through the use of
the compression property.</translation>
    </message>
    <message>
        <source>Sets the number of copies of user data per file system. These copies
are in addition to any pool-level redundancy. Disk space used by
multiple copies of user data is charged to the corresponding file and
dataset, and counts against quotas and reservations. In addition, the
used property is updated when multiple copies are enabled. Consider setting
this property when the file system is created because changing this property
on an existing file system only affects newly written data.</source>
        <translation type="unfinished">Sets the number of copies of user data per file system. These copies
are in addition to any pool-level redundancy. Disk space used by
multiple copies of user data is charged to the corresponding file and
dataset, and counts against quotas and reservations. In addition, the
used property is updated when multiple copies are enabled. Consider setting
this property when the file system is created because changing this property
on an existing file system only affects newly written data.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the date and time that a dataset was created.</source>
        <translation type="unfinished">Read-only property that identifies the date and time that a dataset was created.</translation>
    </message>
    <message>
        <source>Configures deduplication for a dataset. The default value is off.
The default deduplication checksum is sha256 (this may change in the
future).  When dedup is enabled, the checksum defined here overrides
the checksum property. Setting the value to verify has the same
effect as the setting sha256,verify.
If set to verify, ZFS will do a byte-to-byte comparsion in case of
two blocks having the same signature to make sure the block contents
are identical.</source>
        <translation type="unfinished">Configures deduplication for a dataset. The default value is off.
The default deduplication checksum is sha256 (this may change in the
future).  When dedup is enabled, the checksum defined here overrides
the checksum property. Setting the value to verify has the same
effect as the setting sha256,verify.
If set to verify, ZFS will do a byte-to-byte comparsion in case of
two blocks having the same signature to make sure the block contents
are identical.</translation>
    </message>
    <message>
        <source>The devices property is currently not supported on FreeBSD.</source>
        <translation type="unfinished">The devices property is currently not supported on FreeBSD.</translation>
    </message>
    <message>
        <source>Controls whether processes can be executed from within this file
system. The default value is on.</source>
        <translation type="unfinished">Controls whether processes can be executed from within this file
system. The default value is on.</translation>
    </message>
    <message>
        <source>Read-only property that indicates whether a file system, clone, or snapshot
is currently mounted.</source>
        <translation type="unfinished">Read-only property that indicates whether a file system, clone, or snapshot
is currently mounted.</translation>
    </message>
    <message>
        <source>Controls the mount point used for this file system. When the mountpoint property
is changed for a file system, the file system and any descendents that inherit the
mount point are unmounted. If the new value is legacy, then they remain unmounted.
Otherwise, they are automatically remounted in the new location if the property was
previously legacy or none, or if they were mounted before the property was changed.
In addition, any shared file systems are unshared and shared in the new location.</source>
        <translation type="unfinished">Controls the mount point used for this file system. When the mountpoint property
is changed for a file system, the file system and any descendents that inherit the
mount point are unmounted. If the new value is legacy, then they remain unmounted.
Otherwise, they are automatically remounted in the new location if the property was
previously legacy or none, or if they were mounted before the property was changed.
In addition, any shared file systems are unshared and shared in the new location.</translation>
    </message>
    <message>
        <source>Controls what is cached in the primary cache (ARC). Possible values are all,
none, and metadata. If set to all, both user data and metadata are cached. If
set to none, neither user data nor metadata is cached. If set to metadata, only
metadata is cached.</source>
        <translation type="unfinished">Controls what is cached in the primary cache (ARC). Possible values are all,
none, and metadata. If set to all, both user data and metadata are cached. If
set to none, neither user data nor metadata is cached. If set to metadata, only
metadata is cached.</translation>
    </message>
    <message>
        <source>Read-only property for cloned file systems or volumes that identifies
the snapshot from which the clone was created. The origin cannot be
destroyed (even with the -r or -f option) as long as a clone exists.
Non-cloned file systems have an origin of none.</source>
        <translation type="unfinished">Read-only property for cloned file systems or volumes that identifies
the snapshot from which the clone was created. The origin cannot be
destroyed (even with the -r or -f option) as long as a clone exists.
Non-cloned file systems have an origin of none.</translation>
    </message>
    <message>
        <source>Limits the amount of disk space a dataset and its descendents can consume.
This property enforces a hard limit on the amount of disk space used,
including all space consumed by descendents, such as file systems and snapshots.
Setting a quota on a descendent of a dataset that already has a quota does not
override the ancestor&apos;s quota, but rather imposes an additional limit.</source>
        <translation type="unfinished">Limits the amount of disk space a dataset and its descendents can consume.
This property enforces a hard limit on the amount of disk space used,
including all space consumed by descendents, such as file systems and snapshots.
Setting a quota on a descendent of a dataset that already has a quota does not
override the ancestor&apos;s quota, but rather imposes an additional limit.</translation>
    </message>
    <message>
        <source>Controls whether a dataset can be modified. When set to on,
no modifications can be made.</source>
        <translation type="unfinished">Controls whether a dataset can be modified. When set to on,
no modifications can be made.</translation>
    </message>
    <message>
        <source>Specifies a suggested block size for files in the file system. This
property is designed solely for use with database workloads that
access files in fixed-size records.  ZFS automatically tunes block
sizes according to internal algorithms optimized for typical access
patterns.
Use of this property for general purpose file systems is strongly
discouraged, and may adversely affect performance.
The size specified must be a power of two greater than or equal to
512 and less than or equal to 128 Kbytes.</source>
        <translation type="unfinished">Specifies a suggested block size for files in the file system. This
property is designed solely for use with database workloads that
access files in fixed-size records.  ZFS automatically tunes block
sizes according to internal algorithms optimized for typical access
patterns.
Use of this property for general purpose file systems is strongly
discouraged, and may adversely affect performance.
The size specified must be a power of two greater than or equal to
512 and less than or equal to 128 Kbytes.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the amount of data accessible by a
dataset, which might or might not be shared with other datasets in the
pool.</source>
        <translation type="unfinished">Read-only property that identifies the amount of data accessible by a
dataset, which might or might not be shared with other datasets in the
pool.</translation>
    </message>
    <message>
        <source>Sets the amount of disk space that a dataset can consume. This property
enforces a hard limit on the amount of space used. This hard limit does
not include disk space used by descendents, such as snapshots and clones.</source>
        <translation type="unfinished">Sets the amount of disk space that a dataset can consume. This property
enforces a hard limit on the amount of space used. This hard limit does
not include disk space used by descendents, such as snapshots and clones.</translation>
    </message>
    <message>
        <source>Sets the minimum amount of disk space that is guaranteed to a dataset, not
including descendents, such as snapshots and clones. When the amount of disk
space used is below this value, the dataset is treated as if it were taking up
the amount of space specified by refreservation. The refreservation reservation
is accounted for in the parent dataset&apos;s disk space used, and counts against
the parent dataset&apos;s quotas and reservations.
If refreservation is set, a snapshot is only allowed if enough free pool space
is available outside of this reservation to accommodate the current number of
referenced bytes in the dataset.</source>
        <translation type="unfinished">Sets the minimum amount of disk space that is guaranteed to a dataset, not
including descendents, such as snapshots and clones. When the amount of disk
space used is below this value, the dataset is treated as if it were taking up
the amount of space specified by refreservation. The refreservation reservation
is accounted for in the parent dataset&apos;s disk space used, and counts against
the parent dataset&apos;s quotas and reservations.
If refreservation is set, a snapshot is only allowed if enough free pool space
is available outside of this reservation to accommodate the current number of
referenced bytes in the dataset.</translation>
    </message>
    <message>
        <source>Sets the minimum amount of disk space guaranteed to a dataset and its descendents.
When the amount of disk space used is below this value, the dataset is treated as if
it were using the amount of space specified by its reservation. Reservations are
accounted for in the parent dataset&apos;s disk space used, and count against the parent
dataset&apos;s quotas and reservations.</source>
        <translation type="unfinished">Sets the minimum amount of disk space guaranteed to a dataset and its descendents.
When the amount of disk space used is below this value, the dataset is treated as if
it were using the amount of space specified by its reservation. Reservations are
accounted for in the parent dataset&apos;s disk space used, and count against the parent
dataset&apos;s quotas and reservations.</translation>
    </message>
    <message>
        <source>Controls what is cached in the secondary cache (L2ARC). Possible values are all, none,
and metadata. If set to all, both user data and metadata are cached. If set to none,
neither user data nor metadata is cached. If set to metadata, only metadata is cached.</source>
        <translation type="unfinished">Controls what is cached in the secondary cache (L2ARC). Possible values are all, none,
and metadata. If set to all, both user data and metadata are cached. If set to none,
neither user data nor metadata is cached. If set to metadata, only metadata is cached.</translation>
    </message>
    <message>
        <source>Controls whether the setuid bit is honored in a file system.</source>
        <translation type="unfinished">Controls whether the setuid bit is honored in a file system.</translation>
    </message>
    <message>
        <source>Controls whether a file system is available over NFS and what
options are used. If set to on, the zfs share command is invoked
with no options. Otherwise, the zfs share command is invoked with
options equivalent to the contents of this property.</source>
        <translation type="unfinished">Controls whether a file system is available over NFS and what
options are used. If set to on, the zfs share command is invoked
with no options. Otherwise, the zfs share command is invoked with
options equivalent to the contents of this property.</translation>
    </message>
    <message>
        <source>The sharesmb property has currently no effect on FreeBSD.</source>
        <translation type="unfinished">The sharesmb property has currently no effect on FreeBSD.</translation>
    </message>
    <message>
        <source>Controls whether the .zfs directory is hidden or visible in the root of the file system.</source>
        <translation type="unfinished">Controls whether the .zfs directory is hidden or visible in the root of the file system.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the dataset type as filesystem (file system or clone), volume, or snapshot.</source>
        <translation type="unfinished">Read-only property that identifies the dataset type as filesystem (file system or clone), volume, or snapshot.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the amount of disk space consumed by a dataset and all its descendents.</source>
        <translation type="unfinished">Read-only property that identifies the amount of disk space consumed by a dataset and all its descendents.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the amount of disk space that is used by
children of this dataset, which would be freed if all the dataset&apos;s children
were destroyed.</source>
        <translation type="unfinished">Read-only property that identifies the amount of disk space that is used by
children of this dataset, which would be freed if all the dataset&apos;s children
were destroyed.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the amount of disk space that is used by
a dataset itself, which would be freed if the dataset was destroyed, after
first destroying any snapshots and removing any refreservation reservations.</source>
        <translation type="unfinished">Read-only property that identifies the amount of disk space that is used by
a dataset itself, which would be freed if the dataset was destroyed, after
first destroying any snapshots and removing any refreservation reservations.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the amount of disk space that is used by a
refreservation set on a dataset, which would be freed if the refreservation was
removed.</source>
        <translation type="unfinished">Read-only property that identifies the amount of disk space that is used by a
refreservation set on a dataset, which would be freed if the refreservation was
removed.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the amount of disk space that is consumed
by snapshots of a dataset. In particular, it is the amount of disk space that
would be freed if all of this dataset&apos;s snapshots were destroyed. Note that
this value is not simply the sum of the snapshots&apos; used properties, because
space can be shared by multiple snapshots.</source>
        <translation type="unfinished">Read-only property that identifies the amount of disk space that is consumed
by snapshots of a dataset. In particular, it is the amount of disk space that
would be freed if all of this dataset&apos;s snapshots were destroyed. Note that
this value is not simply the sum of the snapshots&apos; used properties, because
space can be shared by multiple snapshots.</translation>
    </message>
    <message>
        <source>Identifies the on-disk version of a file system, which is independent of the
pool version. This property can only be set to a later version that is available
from the supported software release.</source>
        <translation type="unfinished">Identifies the on-disk version of a file system, which is independent of the
pool version. This property can only be set to a later version that is available
from the supported software release.</translation>
    </message>
    <message>
        <source>For volumes, specifies the logical size of the volume.</source>
        <translation type="unfinished">For volumes, specifies the logical size of the volume.</translation>
    </message>
    <message>
        <source>For volumes, specifies the block size of the volume.</source>
        <translation type="unfinished">For volumes, specifies the block size of the volume.</translation>
    </message>
    <message>
        <source>Indicates whether a dataset has been added to a jail.</source>
        <translation type="unfinished">Indicates whether a dataset has been added to a jail.</translation>
    </message>
    <message>
        <source>This property is not supported on FreeBSD.</source>
        <translation type="unfinished">This property is not supported on FreeBSD.</translation>
    </message>
    <message>
        <source>The file system is marked to be destroyed after unmount.</source>
        <translation type="unfinished">The file system is marked to be destroyed after unmount.</translation>
    </message>
    <message>
        <source>The compression ratio achieved for the referenced space of this
dataset, expressed as a multiplier.</source>
        <translation type="unfinished">The compression ratio achieved for the referenced space of this
dataset, expressed as a multiplier.</translation>
    </message>
    <message>
        <source>The amount of referenced space written to this dataset since the
previous snapshot.</source>
        <translation type="unfinished">The amount of referenced space written to this dataset since the
previous snapshot.</translation>
    </message>
    <message>
        <source>This property is set to the number of user holds on this snapshot.
</source>
        <translation type="unfinished">This property is set to the number of user holds on this snapshot.
</translation>
    </message>
    <message>
        <source>Provide a hint to ZFS about handling of synchronous requests in this
dataset.  If logbias is set to latency (the default), ZFS will use
pool log devices (if configured) to handle the requests at low
latency. If logbias is set to throughput, ZFS will not use configured
pool log devices.  ZFS will instead optimize synchronous operations
for global pool throughput and efficient use of resources.</source>
        <translation type="unfinished">Provide a hint to ZFS about handling of synchronous requests in this
dataset.  If logbias is set to latency (the default), ZFS will use
pool log devices (if configured) to handle the requests at low
latency. If logbias is set to throughput, ZFS will not use configured
pool log devices.  ZFS will instead optimize synchronous operations
for global pool throughput and efficient use of resources.</translation>
    </message>
    <message>
        <source>Controls the behavior of synchronous requests (e.g.  fsync(2),
O_DSYNC). This property accepts the following values:
standard  This is the POSIX specified behavior of ensuring all
          synchronous requests are written to stable storage and
          all devices are flushed to ensure data is not cached by
          device controllers (this is the default).
always    All file system transactions are written and flushed
          before their system calls return. This has a large
          performance penalty.
disabled  Disables synchronous requests. File system transactions
          are only committed to stable storage periodically. This
          option will give the highest performance.  However, it
          is very dangerous as ZFS would be ignoring the synchro-
          nous transaction demands of applications such as data-
          bases or NFS.  Administrators should only use this
          option when the risks are understood.</source>
        <translation type="unfinished">Controls the behavior of synchronous requests (e.g.  fsync(2),
O_DSYNC). This property accepts the following values:
standard  This is the POSIX specified behavior of ensuring all
          synchronous requests are written to stable storage and
          all devices are flushed to ensure data is not cached by
          device controllers (this is the default).
always    All file system transactions are written and flushed
          before their system calls return. This has a large
          performance penalty.
disabled  Disables synchronous requests. File system transactions
          are only committed to stable storage periodically. This
          option will give the highest performance.  However, it
          is very dangerous as ZFS would be ignoring the synchro-
          nous transaction demands of applications such as data-
          bases or NFS.  Administrators should only use this
          option when the risks are understood.</translation>
    </message>
    <message>
        <source>This property cannot be changed after the system is created.</source>
        <translation type="unfinished">This property cannot be changed after the system is created.</translation>
    </message>
    <message>
        <source>User Property</source>
        <translation type="unfinished">User Property</translation>
    </message>
    <message>
        <source>Unknown property or information not available.
Read ZFS manual for more information.</source>
        <translation type="unfinished">Unknown property or information not available.
Read ZFS manual for more information.</translation>
    </message>
    <message>
        <source>[Invalid]</source>
        <translation type="unfinished">[Invalid]</translation>
    </message>
    <message>
        <source>[Inherit]</source>
        <translation type="unfinished">[Inherit]</translation>
    </message>
    <message>
        <source>[Added]</source>
        <translation type="unfinished">[Added]</translation>
    </message>
    <message>
        <source>[Changed]</source>
        <translation type="unfinished">[Changed]</translation>
    </message>
    <message>
        <source>User property</source>
        <translation type="unfinished">User property</translation>
    </message>
    <message>
        <source>Device Menu</source>
        <translation type="unfinished">Device Menu</translation>
    </message>
    <message>
        <source>Add new user property</source>
        <translation type="unfinished">Add new user property</translation>
    </message>
    <message>
        <source>Delete user property</source>
        <translation type="unfinished">Delete user property</translation>
    </message>
    <message>
        <source>Enables or disables compression for a dataset. The values are on, off, lz4, lzjb, zle, gzip,
lz4 and gzip-N. Currently, setting this property to lz4, lzjb, gzip, or gzip-N has the same
effect as setting this property to on. Enabling compression on a file system with
existing data only compresses new data. Existing data remains uncompressed.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DialogMount</name>
    <message>
        <source>Dialog</source>
        <translation type="unfinished">Dialog</translation>
    </message>
    <message>
        <source>Device to mount:</source>
        <translation type="unfinished">Device to mount:</translation>
    </message>
    <message>
        <source>(Device)</source>
        <translation type="unfinished">(Device)</translation>
    </message>
    <message>
        <source>Mount location:</source>
        <translation type="unfinished">Mount location:</translation>
    </message>
    <message>
        <source>...</source>
        <translation type="unfinished">...</translation>
    </message>
    <message>
        <source>Select Directory</source>
        <translation type="unfinished">Select Directory</translation>
    </message>
</context>
<context>
    <name>DialogName</name>
    <message>
        <source>Dialog</source>
        <translation type="unfinished">Dialog</translation>
    </message>
    <message>
        <source>Pool name:</source>
        <translation type="unfinished">Pool name:</translation>
    </message>
    <message>
        <source>Do not mount any filesystems</source>
        <translation type="unfinished">Do not mount any filesystems</translation>
    </message>
    <message>
        <source>Read only pool</source>
        <translation type="unfinished">Read only pool</translation>
    </message>
    <message>
        <source>Import options:</source>
        <translation type="unfinished">Import options:</translation>
    </message>
    <message>
        <source>Mount with alternative root:</source>
        <translation type="unfinished">Mount with alternative root:</translation>
    </message>
    <message>
        <source>Mount all filesystems automatically</source>
        <translation type="unfinished">Mount all filesystems automatically</translation>
    </message>
    <message>
        <source>Mounting behavior:</source>
        <translation type="unfinished">Mounting behavior:</translation>
    </message>
    <message>
        <source>Force operation if error (use with caution)</source>
        <translation type="unfinished">Force operation if error (use with caution)</translation>
    </message>
</context>
<context>
    <name>DialogNewPool</name>
    <message>
        <source>Dialog</source>
        <translation type="unfinished">Dialog</translation>
    </message>
    <message>
        <source>Selected</source>
        <translation type="unfinished">Selected</translation>
    </message>
    <message>
        <source>Pool name:</source>
        <translation type="unfinished">Pool name:</translation>
    </message>
    <message>
        <source>Configuration type:</source>
        <translation type="unfinished">Configuration type:</translation>
    </message>
    <message>
        <source>Striped</source>
        <translation type="unfinished">Striped</translation>
    </message>
    <message>
        <source>Mirror</source>
        <translation type="unfinished">Mirror</translation>
    </message>
    <message>
        <source>Raid-Z (single parity)</source>
        <translation type="unfinished">Raid-Z (single parity)</translation>
    </message>
    <message>
        <source>Raid-Z2 (double parity)</source>
        <translation type="unfinished">Raid-Z2 (double parity)</translation>
    </message>
    <message>
        <source>Raid-Z3 (triple parity)</source>
        <translation type="unfinished">Raid-Z3 (triple parity)</translation>
    </message>
    <message>
        <source>Cache</source>
        <translation type="unfinished">Cache</translation>
    </message>
    <message>
        <source>Log</source>
        <translation type="unfinished">Log</translation>
    </message>
    <message>
        <source>Spare</source>
        <translation type="unfinished">Spare</translation>
    </message>
    <message>
        <source>Error Description Here</source>
        <translation type="unfinished">Error Description Here</translation>
    </message>
    <message>
        <source>Must provide a valid pool name</source>
        <translation type="unfinished">Must provide a valid pool name</translation>
    </message>
    <message>
        <source>Must select exactly %1 devices</source>
        <translation type="unfinished">Must select exactly %1 devices</translation>
    </message>
    <message>
        <source>Must select at least one device</source>
        <translation type="unfinished">Must select at least one device</translation>
    </message>
</context>
<context>
    <name>DialogPartition</name>
    <message>
        <source>Add Partition</source>
        <translation type="unfinished">Add Partition</translation>
    </message>
    <message>
        <source>Add new slice/partition</source>
        <translation type="unfinished">Add new slice/partition</translation>
    </message>
    <message>
        <source>100 GB</source>
        <translation type="unfinished">100 GB</translation>
    </message>
    <message>
        <source>Device:</source>
        <translation type="unfinished">Device:</translation>
    </message>
    <message>
        <source>ada0</source>
        <translation type="unfinished">ada0</translation>
    </message>
    <message>
        <source>Largest available free block:</source>
        <translation type="unfinished">Largest available free block:</translation>
    </message>
    <message>
        <source>Total Size:</source>
        <translation type="unfinished">Total Size:</translation>
    </message>
    <message>
        <source>Current layout:</source>
        <translation type="unfinished">Current layout:</translation>
    </message>
    <message>
        <source>Designation</source>
        <translation type="unfinished">Designation</translation>
    </message>
    <message>
        <source>Start Sector</source>
        <translation type="unfinished">Start Sector</translation>
    </message>
    <message>
        <source>Sector Count</source>
        <translation type="unfinished">Sector Count</translation>
    </message>
    <message>
        <source>Size</source>
        <translation type="unfinished">Size</translation>
    </message>
    <message>
        <source>Color</source>
        <translation type="unfinished">Color</translation>
    </message>
    <message>
        <source>New partition Size:</source>
        <translation type="unfinished">New partition Size:</translation>
    </message>
    <message>
        <source>bytes</source>
        <translation type="unfinished">bytes</translation>
    </message>
    <message>
        <source>kB</source>
        <translation type="unfinished">kB</translation>
    </message>
    <message>
        <source>MB</source>
        <translation type="unfinished">MB</translation>
    </message>
    <message>
        <source>GB</source>
        <translation type="unfinished">GB</translation>
    </message>
    <message>
        <source>TB</source>
        <translation type="unfinished">TB</translation>
    </message>
    <message>
        <source>Partition type:</source>
        <translation type="unfinished">Partition type:</translation>
    </message>
    <message>
        <source>freebsd-zfs</source>
        <translation type="unfinished">freebsd-zfs</translation>
    </message>
    <message>
        <source>freebsd-ufs</source>
        <translation type="unfinished">freebsd-ufs</translation>
    </message>
    <message>
        <source>freebsd</source>
        <translation type="unfinished">freebsd</translation>
    </message>
    <message>
        <source>freebsd-boot</source>
        <translation type="unfinished">freebsd-boot</translation>
    </message>
    <message>
        <source>freebsd-swap</source>
        <translation type="unfinished">freebsd-swap</translation>
    </message>
    <message>
        <source>bios-boot</source>
        <translation type="unfinished">bios-boot</translation>
    </message>
    <message>
        <source>efi</source>
        <translation type="unfinished">efi</translation>
    </message>
    <message>
        <source>Create and initialize a new filesystem</source>
        <translation type="unfinished">Create and initialize a new filesystem</translation>
    </message>
    <message>
        <source>** FREE **</source>
        <translation type="unfinished">** FREE **</translation>
    </message>
    <message>
        <source>No free space!</source>
        <translation type="unfinished">No free space!</translation>
    </message>
    <message>
        <source>Align partitions to 1 MB boundary</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DialogProp</name>
    <message>
        <source>Edit Pool Properties</source>
        <translation type="unfinished">Edit Pool Properties</translation>
    </message>
    <message>
        <source>Property</source>
        <translation type="unfinished">Property</translation>
    </message>
    <message>
        <source>Value</source>
        <translation type="unfinished">Value</translation>
    </message>
    <message>
        <source>Total size of the storage pool.</source>
        <translation type="unfinished">Total size of the storage pool.</translation>
    </message>
    <message>
        <source>Percentage of pool space used.</source>
        <translation type="unfinished">Percentage of pool space used.</translation>
    </message>
    <message>
        <source>Alternate root directory. If set, this directory is prepended to any
mount points within the pool. This can be used when examining an
unknown pool where the mount points cannot be trusted, or in an
alternate boot environment, where the typical paths are not valid.
altroot is not a persistent property. It is valid only while the
system is up.  Setting altroot defaults to using cachefile=none, though
this may be overridden using an explicit setting.</source>
        <translation type="unfinished">Alternate root directory. If set, this directory is prepended to any
mount points within the pool. This can be used when examining an
unknown pool where the mount points cannot be trusted, or in an
alternate boot environment, where the typical paths are not valid.
altroot is not a persistent property. It is valid only while the
system is up.  Setting altroot defaults to using cachefile=none, though
this may be overridden using an explicit setting.</translation>
    </message>
    <message>
        <source>The current health of the pool.</source>
        <translation type="unfinished">The current health of the pool.</translation>
    </message>
    <message>
        <source>A unique identifier for the pool.</source>
        <translation type="unfinished">A unique identifier for the pool.</translation>
    </message>
    <message>
        <source>The current on-disk version of the pool. This can be increased, but
never decreased. The preferred method of updating pools is with the
&quot;zpool upgrade&quot; command, though this property can be used when a
specific version is needed for backwards compatibility. This property
can be any number between 1 and the current version reported by
&quot;zpool upgrade -v&quot;.</source>
        <translation type="unfinished">The current on-disk version of the pool. This can be increased, but
never decreased. The preferred method of updating pools is with the
&quot;zpool upgrade&quot; command, though this property can be used when a
specific version is needed for backwards compatibility. This property
can be any number between 1 and the current version reported by
&quot;zpool upgrade -v&quot;.</translation>
    </message>
    <message>
        <source>Identifies the default bootable dataset for the root pool. This
property is expected to be set mainly by the installation and upgrade
programs.</source>
        <translation type="unfinished">Identifies the default bootable dataset for the root pool. This
property is expected to be set mainly by the installation and upgrade
programs.</translation>
    </message>
    <message>
        <source>Controls whether a non-privileged user is granted access based on the
dataset permissions defined on the dataset. See zfs(8) for more
information on ZFS delegated administration.</source>
        <translation type="unfinished">Controls whether a non-privileged user is granted access based on the
dataset permissions defined on the dataset. See zfs(8) for more
information on ZFS delegated administration.</translation>
    </message>
    <message>
        <source>Controls automatic device replacement. If set to &quot;off&quot;, device
replacement must be initiated by the administrator by using the
&quot;zpool replace&quot; command. If set to &quot;on&quot;, any new device, found in the
same physical location as a device that previously belonged to the
pool, is automatically formatted and replaced. The default behavior
is &quot;off&quot;.  This property can also be referred to by its shortened
column name, &quot;replace&quot;.</source>
        <translation type="unfinished">Controls automatic device replacement. If set to &quot;off&quot;, device
replacement must be initiated by the administrator by using the
&quot;zpool replace&quot; command. If set to &quot;on&quot;, any new device, found in the
same physical location as a device that previously belonged to the
pool, is automatically formatted and replaced. The default behavior
is &quot;off&quot;.  This property can also be referred to by its shortened
column name, &quot;replace&quot;.</translation>
    </message>
    <message>
        <source>Controls the location of where the pool configuration is cached.
Discovering all pools on system startup requires a cached copy of the
configuration data that is stored on the root file system. All pools
in this cache are automatically imported when the system boots. Some
environments, such as install and clustering, need to cache this
information in a different location so that pools are not automatically
imported. Setting this property caches the pool configuration
in a different location that can later be imported with &quot;zpool import
-c&quot;.  Setting it to the special value &quot;none&quot; creates a temporary pool
that is never cached, and the special value &apos;&apos; (empty string) uses
the default location.</source>
        <translation type="unfinished">Controls the location of where the pool configuration is cached.
Discovering all pools on system startup requires a cached copy of the
configuration data that is stored on the root file system. All pools
in this cache are automatically imported when the system boots. Some
environments, such as install and clustering, need to cache this
information in a different location so that pools are not automatically
imported. Setting this property caches the pool configuration
in a different location that can later be imported with &quot;zpool import
-c&quot;.  Setting it to the special value &quot;none&quot; creates a temporary pool
that is never cached, and the special value &apos;&apos; (empty string) uses
the default location.</translation>
    </message>
    <message>
        <source>Controls the system behavior in the event of catastrophic pool failure
This condition is typically a result of a loss of connectivity
to the underlying storage device(s) or a failure of all devices
within the pool. The behavior of such an event is determined as follows
wait
Blocks all I/O access until the device connectivity is recovered
and the errors are cleared. This is the default behavior
continue
Returns EIO to any new write I/O requests but allows reads to
any of the remaining healthy devices. Any write requests that
have yet to be committed to disk would be blocked.

panic
Prints out a message to the console and generates a system
crash dump.
</source>
        <translation type="unfinished">Controls the system behavior in the event of catastrophic pool failure
This condition is typically a result of a loss of connectivity
to the underlying storage device(s) or a failure of all devices
within the pool. The behavior of such an event is determined as follows
wait
Blocks all I/O access until the device connectivity is recovered
and the errors are cleared. This is the default behavior
continue
Returns EIO to any new write I/O requests but allows reads to
any of the remaining healthy devices. Any write requests that
have yet to be committed to disk would be blocked.

panic
Prints out a message to the console and generates a system
crash dump.
</translation>
    </message>
    <message>
        <source>Controls whether information about snapshots associated with this
pool is output when &quot;zfs list&quot; is run without the -t option. The
default value is off.</source>
        <translation type="unfinished">Controls whether information about snapshots associated with this
pool is output when &quot;zfs list&quot; is run without the -t option. The
default value is off.</translation>
    </message>
    <message>
        <source>Controls automatic pool expansion when the underlying LUN is grown.
If set to &quot;on&quot;, the pool will be resized according to the size of the
expanded device. If the device is part of a mirror or raidz then all
devices within that mirror/raidz group must be expanded before the
new space is made available to the pool. The default behavior is
&quot;off&quot;.  This property can also be referred to by its shortened column
name, expand.</source>
        <translation type="unfinished">Controls automatic pool expansion when the underlying LUN is grown.
If set to &quot;on&quot;, the pool will be resized according to the size of the
expanded device. If the device is part of a mirror or raidz then all
devices within that mirror/raidz group must be expanded before the
new space is made available to the pool. The default behavior is
&quot;off&quot;.  This property can also be referred to by its shortened column
name, expand.</translation>
    </message>
    <message>
        <source>Threshold for the number of block ditto copies. If the reference
count for a deduplicated block increases above this number, a new
ditto copy of this block is automatically stored. Default setting is
0.</source>
        <translation type="unfinished">Threshold for the number of block ditto copies. If the reference
count for a deduplicated block increases above this number, a new
ditto copy of this block is automatically stored. Default setting is
0.</translation>
    </message>
    <message>
        <source>The deduplication ratio specified for a pool, expressed as a multiplier. For
example, a value of 1.76 indicates that 1.76 units of data were stored but
only 1 unit of disk space was actually consumed. See zfs(8) for a description
of the deduplication feature.</source>
        <translation type="unfinished">The deduplication ratio specified for a pool, expressed as a multiplier. For
example, a value of 1.76 indicates that 1.76 units of data were stored but
only 1 unit of disk space was actually consumed. See zfs(8) for a description
of the deduplication feature.</translation>
    </message>
    <message>
        <source>Number of blocks within the pool that are not allocated.</source>
        <translation type="unfinished">Number of blocks within the pool that are not allocated.</translation>
    </message>
    <message>
        <source>Amount of storage space within the pool that has been physically allocated.</source>
        <translation type="unfinished">Amount of storage space within the pool that has been physically allocated.</translation>
    </message>
    <message>
        <source>If set to on, pool will be imported in read-only mode with the
following restrictions:
  *   Synchronous data in the intent log will not be accessible
  *   Properties of the pool can not be changed
  *   Datasets of this pool can only be mounted read-only
  *   To write to a read-only pool, a export and import of the pool
      is required.
</source>
        <translation type="unfinished">If set to on, pool will be imported in read-only mode with the
following restrictions:
  *   Synchronous data in the intent log will not be accessible
  *   Properties of the pool can not be changed
  *   Datasets of this pool can only be mounted read-only
  *   To write to a read-only pool, a export and import of the pool
      is required.
</translation>
    </message>
    <message>
        <source>An arbitrary comment string set by the administrator.</source>
        <translation type="unfinished">An arbitrary comment string set by the administrator.</translation>
    </message>
    <message>
        <source>This property has currently no value on FreeBSD.</source>
        <translation type="unfinished">This property has currently no value on FreeBSD.</translation>
    </message>
</context>
<context>
    <name>DialogfsCreate</name>
    <message>
        <source>New Filesystem</source>
        <translation type="unfinished">New Filesystem</translation>
    </message>
    <message>
        <source>Name:</source>
        <translation type="unfinished">Name:</translation>
    </message>
    <message>
        <source>Properties override at creation time:</source>
        <translation type="unfinished">Properties override at creation time:</translation>
    </message>
    <message>
        <source>Prevent auto mount (canmount=noauto)</source>
        <translation type="unfinished">Prevent auto mount (canmount=noauto)</translation>
    </message>
    <message>
        <source>Mountpoint</source>
        <translation type="unfinished">Mountpoint</translation>
    </message>
    <message>
        <source>none</source>
        <translation type="unfinished">none</translation>
    </message>
    <message>
        <source>legacy</source>
        <translation type="unfinished">legacy</translation>
    </message>
    <message>
        <source>[path]</source>
        <translation type="unfinished">[path]</translation>
    </message>
    <message>
        <source>Force UTF-8 only (utf8only=on)</source>
        <translation type="unfinished">Force UTF-8 only (utf8only=on)</translation>
    </message>
    <message>
        <source>Unicode normalization =</source>
        <translation type="unfinished">Unicode normalization =</translation>
    </message>
    <message>
        <source>formD</source>
        <translation type="unfinished">formD</translation>
    </message>
    <message>
        <source>formKCF</source>
        <translation type="unfinished">formKCF</translation>
    </message>
    <message>
        <source>Copies =</source>
        <translation type="unfinished">Copies =</translation>
    </message>
    <message>
        <source>Deduplication (dedup=on)</source>
        <translation type="unfinished">Deduplication (dedup=on)</translation>
    </message>
    <message>
        <source>Compression =</source>
        <translation type="unfinished">Compression =</translation>
    </message>
    <message>
        <source>off</source>
        <translation type="unfinished">off</translation>
    </message>
    <message>
        <source>on</source>
        <translation type="unfinished">on</translation>
    </message>
    <message>
        <source>lzjb</source>
        <translation type="unfinished">lzjb</translation>
    </message>
    <message>
        <source>zle</source>
        <translation type="unfinished">zle</translation>
    </message>
    <message>
        <source>gzip</source>
        <translation type="unfinished">gzip</translation>
    </message>
    <message>
        <source>gzip-1</source>
        <translation type="unfinished">gzip-1</translation>
    </message>
    <message>
        <source>gzip-2</source>
        <translation type="unfinished">gzip-2</translation>
    </message>
    <message>
        <source>gzip-3</source>
        <translation type="unfinished">gzip-3</translation>
    </message>
    <message>
        <source>gzip-4</source>
        <translation type="unfinished">gzip-4</translation>
    </message>
    <message>
        <source>gzip-5</source>
        <translation type="unfinished">gzip-5</translation>
    </message>
    <message>
        <source>gzip-6</source>
        <translation type="unfinished">gzip-6</translation>
    </message>
    <message>
        <source>gzip-7</source>
        <translation type="unfinished">gzip-7</translation>
    </message>
    <message>
        <source>gzip-8</source>
        <translation type="unfinished">gzip-8</translation>
    </message>
    <message>
        <source>gzip-9</source>
        <translation type="unfinished">gzip-9</translation>
    </message>
    <message>
        <source>lz4</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ZManagerWindow</name>
    <message>
        <source>PCBSD Disk Manager</source>
        <translation type="unfinished">PCBSD Disk Manager</translation>
    </message>
    <message>
        <source>Disks</source>
        <translation type="unfinished">Disks</translation>
    </message>
    <message>
        <source>Device</source>
        <translation type="unfinished">Device</translation>
    </message>
    <message>
        <source>State</source>
        <translation type="unfinished">State</translation>
    </message>
    <message>
        <source>ZFS Pools</source>
        <translation type="unfinished">ZFS Pools</translation>
    </message>
    <message>
        <source>Pool Name</source>
        <translation type="unfinished">Pool Name</translation>
    </message>
    <message>
        <source>Status:</source>
        <translation type="unfinished">Status:</translation>
    </message>
    <message>
        <source>TextLabel</source>
        <translation type="unfinished">TextLabel</translation>
    </message>
    <message>
        <source>Clear Error</source>
        <translation type="unfinished">Clear Error</translation>
    </message>
    <message>
        <source>poolname</source>
        <translation type="unfinished">poolname</translation>
    </message>
    <message>
        <source>ZFS Filesystems</source>
        <translation type="unfinished">ZFS Filesystems</translation>
    </message>
    <message>
        <source>Filesystems</source>
        <translation type="unfinished">Filesystems</translation>
    </message>
    <message>
        <source>Status</source>
        <translation type="unfinished">Status</translation>
    </message>
    <message>
        <source>Refreshing...</source>
        <translation type="unfinished">Refreshing...</translation>
    </message>
    <message>
        <source>No pools available, right click to create a new one...</source>
        <translation type="unfinished">No pools available, right click to create a new one...</translation>
    </message>
    <message>
        <source> (No media in drive)</source>
        <translation type="unfinished"> (No media in drive)</translation>
    </message>
    <message>
        <source>Avaliable</source>
        <translation type="unfinished">Avaliable</translation>
    </message>
    <message>
        <source>No disk</source>
        <translation type="unfinished">No disk</translation>
    </message>
    <message>
        <source>ZPool: </source>
        <translation type="unfinished">ZPool: </translation>
    </message>
    <message>
        <source>Sliced</source>
        <translation type="unfinished">Sliced</translation>
    </message>
    <message>
        <source>Mounted: </source>
        <translation type="unfinished">Mounted: </translation>
    </message>
    <message>
        <source>Available</source>
        <translation type="unfinished">Available</translation>
    </message>
    <message>
        <source>Unmounted</source>
        <translation type="unfinished">Unmounted</translation>
    </message>
    <message>
        <source>Partitioned</source>
        <translation type="unfinished">Partitioned</translation>
    </message>
    <message>
        <source>(Exported)
</source>
        <translation type="unfinished">(Exported)
</translation>
    </message>
    <message>
        <source>(Destroyed)
</source>
        <translation type="unfinished">(Destroyed)
</translation>
    </message>
    <message>
        <source>Offline</source>
        <translation type="unfinished">Offline</translation>
    </message>
    <message>
        <source>Online</source>
        <translation type="unfinished">Online</translation>
    </message>
    <message>
        <source>Degraded</source>
        <translation type="unfinished">Degraded</translation>
    </message>
    <message>
        <source>Faulted</source>
        <translation type="unfinished">Faulted</translation>
    </message>
    <message>
        <source>Removed</source>
        <translation type="unfinished">Removed</translation>
    </message>
    <message>
        <source>Unavailable</source>
        <translation type="unfinished">Unavailable</translation>
    </message>
    <message>
        <source>Unknown</source>
        <translation type="unfinished">Unknown</translation>
    </message>
    <message>
        <source>Create new pool</source>
        <translation type="unfinished">Create new pool</translation>
    </message>
    <message>
        <source>Rename pool</source>
        <translation type="unfinished">Rename pool</translation>
    </message>
    <message>
        <source>Destroy pool</source>
        <translation type="unfinished">Destroy pool</translation>
    </message>
    <message>
        <source>Add devices...</source>
        <translation type="unfinished">Add devices...</translation>
    </message>
    <message>
        <source>Add log devices...</source>
        <translation type="unfinished">Add log devices...</translation>
    </message>
    <message>
        <source>Add cache devices...</source>
        <translation type="unfinished">Add cache devices...</translation>
    </message>
    <message>
        <source>Add spare devices...</source>
        <translation type="unfinished">Add spare devices...</translation>
    </message>
    <message>
        <source>Scrub</source>
        <translation type="unfinished">Scrub</translation>
    </message>
    <message>
        <source>Export pool</source>
        <translation type="unfinished">Export pool</translation>
    </message>
    <message>
        <source>Import pool</source>
        <translation type="unfinished">Import pool</translation>
    </message>
    <message>
        <source>Recover destroyed pool</source>
        <translation type="unfinished">Recover destroyed pool</translation>
    </message>
    <message>
        <source>Properties...</source>
        <translation type="unfinished">Properties...</translation>
    </message>
    <message>
        <source>Attach (mirror) device...</source>
        <translation type="unfinished">Attach (mirror) device...</translation>
    </message>
    <message>
        <source>Detach from mirror</source>
        <translation type="unfinished">Detach from mirror</translation>
    </message>
    <message>
        <source>Take offline</source>
        <translation type="unfinished">Take offline</translation>
    </message>
    <message>
        <source>Bring online</source>
        <translation type="unfinished">Bring online</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation type="unfinished">Remove</translation>
    </message>
    <message>
        <source>zpool Menu</source>
        <translation type="unfinished">zpool Menu</translation>
    </message>
    <message>
        <source>Device Menu</source>
        <translation type="unfinished">Device Menu</translation>
    </message>
    <message>
        <source>Unmount</source>
        <translation type="unfinished">Unmount</translation>
    </message>
    <message>
        <source>Mount</source>
        <translation type="unfinished">Mount</translation>
    </message>
    <message>
        <source>Create MBR partition table</source>
        <translation type="unfinished">Create MBR partition table</translation>
    </message>
    <message>
        <source>Create GPT partition table</source>
        <translation type="unfinished">Create GPT partition table</translation>
    </message>
    <message>
        <source>Create BSD partition table</source>
        <translation type="unfinished">Create BSD partition table</translation>
    </message>
    <message>
        <source>Delete Partition Table</source>
        <translation type="unfinished">Delete Partition Table</translation>
    </message>
    <message>
        <source>Add new slice</source>
        <translation type="unfinished">Add new slice</translation>
    </message>
    <message>
        <source>Add new partition</source>
        <translation type="unfinished">Add new partition</translation>
    </message>
    <message>
        <source>Destroy this slice</source>
        <translation type="unfinished">Destroy this slice</translation>
    </message>
    <message>
        <source>Destroy this partition</source>
        <translation type="unfinished">Destroy this partition</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="unfinished">Warning</translation>
    </message>
    <message>
        <source>This operation cannot be undone.
OK to destroy the slice/partition?</source>
        <translation type="unfinished">This operation cannot be undone.
OK to destroy the slice/partition?</translation>
    </message>
    <message>
        <source>An error was detected while executing &apos;%1&apos;:

</source>
        <translation type="unfinished">An error was detected while executing &apos;%1&apos;:

</translation>
    </message>
    <message>
        <source>Error report</source>
        <translation type="unfinished">Error report</translation>
    </message>
    <message>
        <source>An error was detected while executing &apos;zpool&apos;:

</source>
        <translation type="unfinished">An error was detected while executing &apos;zpool&apos;:

</translation>
    </message>
    <message>
        <source>An error was detected while executing &apos;zfs&apos;:

</source>
        <translation type="unfinished">An error was detected while executing &apos;zfs&apos;:

</translation>
    </message>
    <message>
        <source>Create new zpool</source>
        <translation type="unfinished">Create new zpool</translation>
    </message>
    <message>
        <source>Important information</source>
        <translation type="unfinished">Important information</translation>
    </message>
    <message>
        <source>The pool was imported in read-only mode, therefore attempting to destroy the pool will leave the pool in the state it was when imported, not necessarily destroyed.</source>
        <translation type="unfinished">The pool was imported in read-only mode, therefore attempting to destroy the pool will leave the pool in the state it was when imported, not necessarily destroyed.</translation>
    </message>
    <message>
        <source>Attach mirror devices to </source>
        <translation type="unfinished">Attach mirror devices to </translation>
    </message>
    <message>
        <source>The pool was imported in read-only mode, therefore attempting to export the pool will leave the pool in the state it was when imported, not necessarily exported.</source>
        <translation type="unfinished">The pool was imported in read-only mode, therefore attempting to export the pool will leave the pool in the state it was when imported, not necessarily exported.</translation>
    </message>
    <message>
        <source>Recover destroyed pool as...</source>
        <translation type="unfinished">Recover destroyed pool as...</translation>
    </message>
    <message>
        <source>Import pool as...</source>
        <translation type="unfinished">Import pool as...</translation>
    </message>
    <message>
        <source>This pool had been destroyed, and its disks may have been reused. Attempting to recover will destroy any new data that could&apos;ve been stored in the devices that were reused and cannot be recovered.
Proceed with recovery?</source>
        <translation type="unfinished">This pool had been destroyed, and its disks may have been reused. Attempting to recover will destroy any new data that could&apos;ve been stored in the devices that were reused and cannot be recovered.
Proceed with recovery?</translation>
    </message>
    <message>
        <source>The pool was imported in read-only mode, it cannot be renamed.</source>
        <translation type="unfinished">The pool was imported in read-only mode, it cannot be renamed.</translation>
    </message>
    <message>
        <source>Add more devices to zpool</source>
        <translation type="unfinished">Add more devices to zpool</translation>
    </message>
    <message>
        <source>Add log devices to zpool</source>
        <translation type="unfinished">Add log devices to zpool</translation>
    </message>
    <message>
        <source>Add cache devices to zpool</source>
        <translation type="unfinished">Add cache devices to zpool</translation>
    </message>
    <message>
        <source>Add spare devices to zpool</source>
        <translation type="unfinished">Add spare devices to zpool</translation>
    </message>
    <message>
        <source>[Mounted]</source>
        <translation type="unfinished">[Mounted]</translation>
    </message>
    <message>
        <source>[Not Mounted]</source>
        <translation type="unfinished">[Not Mounted]</translation>
    </message>
    <message>
        <source> of </source>
        <translation type="unfinished"> of </translation>
    </message>
    <message>
        <source>Rename dataset</source>
        <translation type="unfinished">Rename dataset</translation>
    </message>
    <message>
        <source>Create new dataset</source>
        <translation type="unfinished">Create new dataset</translation>
    </message>
    <message>
        <source>Create a clone dataset</source>
        <translation type="unfinished">Create a clone dataset</translation>
    </message>
    <message>
        <source>Destroy dataset</source>
        <translation type="unfinished">Destroy dataset</translation>
    </message>
    <message>
        <source>Promote filesystem</source>
        <translation type="unfinished">Promote filesystem</translation>
    </message>
    <message>
        <source>Take a snapshot</source>
        <translation type="unfinished">Take a snapshot</translation>
    </message>
    <message>
        <source>Destroy snapshot</source>
        <translation type="unfinished">Destroy snapshot</translation>
    </message>
    <message>
        <source>Rollback to this snapshot</source>
        <translation type="unfinished">Rollback to this snapshot</translation>
    </message>
    <message>
        <source>Edit properties</source>
        <translation type="unfinished">Edit properties</translation>
    </message>
    <message>
        <source>zfs Menu</source>
        <translation type="unfinished">zfs Menu</translation>
    </message>
    <message>
        <source>This operation cannot be undone and will cause data loss.

You are about to perform the following operation(s):

</source>
        <translation type="unfinished">This operation cannot be undone and will cause data loss.

You are about to perform the following operation(s):

</translation>
    </message>
    <message>
        <source>

Are you sure you want to proceed?

</source>
        <translation type="unfinished">

Are you sure you want to proceed?

</translation>
    </message>
    <message>
        <source>Confirmation</source>
        <translation type="unfinished">Confirmation</translation>
    </message>
    <message>
        <source>Take a new snapshot</source>
        <translation type="unfinished">Take a new snapshot</translation>
    </message>
    <message>
        <source>New name</source>
        <translation type="unfinished">New name</translation>
    </message>
    <message>
        <source>This operation cannot be undone and will cause all data added after the snapshot to be lost.
Any snapshots created after this one will be deleted, along with any clone filesystems that depend on them.
</source>
        <translation type="unfinished">This operation cannot be undone and will cause all data added after the snapshot to be lost.
Any snapshots created after this one will be deleted, along with any clone filesystems that depend on them.
</translation>
    </message>
</context>
</TS>
