<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1">
<context>
    <name>DialogFSProp</name>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.ui" line="17"/>
        <source>Dialog</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.ui" line="23"/>
        <source>Apply changes recursively to all descendants</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.ui" line="43"/>
        <source>Property</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.ui" line="48"/>
        <source>Value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.ui" line="53"/>
        <source>Source</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.ui" line="61"/>
        <source>Add user property</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.ui" line="64"/>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.ui" line="107"/>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.ui" line="127"/>
        <source>...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.ui" line="104"/>
        <source>Remove user property</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.ui" line="124"/>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="1107"/>
        <source>Inherit from parent</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.ui" line="144"/>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="1110"/>
        <source>Revert changes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="43"/>
        <source>Controls how ACL entries are inherited when files and directories are created. The values are
discard, noallow, restricted, and passthrough. For a description of these values, see ACL Properties.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="60"/>
        <source>Controls how an ACL entry is modified during a chmod operation.
The values are discard, groupmask, and passthrough. For a description of
these values, see ACL Properties.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="73"/>
        <source>Controls whether the access time for files is updated when they are read.
Turning this property off avoids producing write traffic when reading files and
can result in significant performance gains, though it might confuse mailers and
similar utilities.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="90"/>
        <source>Read-only property that identifies the amount of disk space available to a dataset
and all its children, assuming no other activity in the pool. Because disk space is
shared within a pool, available space can be limited by various factors including
physical pool size, quotas, reservations, and other datasets within the pool.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="105"/>
        <source>If this property is set to off, the file system cannot be mounted,
and is ignored by &apos;zfs mount -a&apos;.  Setting this property to off is
similar to setting the mountpoint property to none, except that the
dataset still has a normal mountpoint property, which can be inherited
Setting this property to off allows datasets to be used solely as a
mechanism to inherit properties. One example of setting canmount=off is
to have two datasets with the same mountpoint, so that the children of
both datasets appear in the same directory, but might have different
inherited characteristics.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="127"/>
        <source>Controls the checksum used to verify data integrity. The default
value is on, which automatically selects an appropriate algorithm
(currently, fletcher4, but this may change in future releases). The
value off disables integrity checking on user data. Disabling
checksums is NOT a recommended practice.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="145"/>
        <source>Enables or disables compression for a dataset. The values are on, off, lz4, lzjb, zle, 
gzip and gzip-N. Currently, setting this property to lz4, lzjb, gzip, or gzip-N has the same
effect as setting this property to on. Enabling compression on a file system with
existing data only compresses new data. Existing data remains uncompressed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="172"/>
        <source>Read-only property that identifies the compression ratio achieved for a dataset,
expressed as a multiplier. Compression can be enabled by the zfs set compression=on
dataset command. The value is calculated from the logical size of all files and the
amount of referenced physical data. It includes explicit savings through the use of
the compression property.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="187"/>
        <source>Sets the number of copies of user data per file system. These copies
are in addition to any pool-level redundancy. Disk space used by
multiple copies of user data is charged to the corresponding file and
dataset, and counts against quotas and reservations. In addition, the
used property is updated when multiple copies are enabled. Consider setting
this property when the file system is created because changing this property
on an existing file system only affects newly written data.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="208"/>
        <source>Read-only property that identifies the date and time that a dataset was created.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="216"/>
        <source>Configures deduplication for a dataset. The default value is off.
The default deduplication checksum is sha256 (this may change in the
future).  When dedup is enabled, the checksum defined here overrides
the checksum property. Setting the value to verify has the same
effect as the setting sha256,verify.
If set to verify, ZFS will do a byte-to-byte comparsion in case of
two blocks having the same signature to make sure the block contents
are identical.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="236"/>
        <source>The devices property is currently not supported on FreeBSD.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="246"/>
        <source>Controls whether processes can be executed from within this file
system. The default value is on.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="259"/>
        <source>Read-only property that indicates whether a file system, clone, or snapshot
is currently mounted.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="270"/>
        <source>Controls the mount point used for this file system. When the mountpoint property
is changed for a file system, the file system and any descendents that inherit the
mount point are unmounted. If the new value is legacy, then they remain unmounted.
Otherwise, they are automatically remounted in the new location if the property was
previously legacy or none, or if they were mounted before the property was changed.
In addition, any shared file systems are unshared and shared in the new location.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="287"/>
        <source>Controls what is cached in the primary cache (ARC). Possible values are all,
none, and metadata. If set to all, both user data and metadata are cached. If
set to none, neither user data nor metadata is cached. If set to metadata, only
metadata is cached.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="301"/>
        <source>Read-only property for cloned file systems or volumes that identifies
the snapshot from which the clone was created. The origin cannot be
destroyed (even with the -r or -f option) as long as a clone exists.
Non-cloned file systems have an origin of none.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="314"/>
        <source>Limits the amount of disk space a dataset and its descendents can consume.
This property enforces a hard limit on the amount of disk space used,
including all space consumed by descendents, such as file systems and snapshots.
Setting a quota on a descendent of a dataset that already has a quota does not
override the ancestor&apos;s quota, but rather imposes an additional limit.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="325"/>
        <source>Controls whether a dataset can be modified. When set to on,
no modifications can be made.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="335"/>
        <source>Specifies a suggested block size for files in the file system. This
property is designed solely for use with database workloads that
access files in fixed-size records.  ZFS automatically tunes block
sizes according to internal algorithms optimized for typical access
patterns.
Use of this property for general purpose file systems is strongly
discouraged, and may adversely affect performance.
The size specified must be a power of two greater than or equal to
512 and less than or equal to 128 Kbytes.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="354"/>
        <source>Read-only property that identifies the amount of data accessible by a
dataset, which might or might not be shared with other datasets in the
pool.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="364"/>
        <source>Sets the amount of disk space that a dataset can consume. This property
enforces a hard limit on the amount of space used. This hard limit does
not include disk space used by descendents, such as snapshots and clones.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="374"/>
        <source>Sets the minimum amount of disk space that is guaranteed to a dataset, not
including descendents, such as snapshots and clones. When the amount of disk
space used is below this value, the dataset is treated as if it were taking up
the amount of space specified by refreservation. The refreservation reservation
is accounted for in the parent dataset&apos;s disk space used, and counts against
the parent dataset&apos;s quotas and reservations.
If refreservation is set, a snapshot is only allowed if enough free pool space
is available outside of this reservation to accommodate the current number of
referenced bytes in the dataset.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="390"/>
        <source>Sets the minimum amount of disk space guaranteed to a dataset and its descendents.
When the amount of disk space used is below this value, the dataset is treated as if
it were using the amount of space specified by its reservation. Reservations are
accounted for in the parent dataset&apos;s disk space used, and count against the parent
dataset&apos;s quotas and reservations.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="403"/>
        <source>Controls what is cached in the secondary cache (L2ARC). Possible values are all, none,
and metadata. If set to all, both user data and metadata are cached. If set to none,
neither user data nor metadata is cached. If set to metadata, only metadata is cached.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="415"/>
        <source>Controls whether the setuid bit is honored in a file system.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="425"/>
        <source>Controls whether a file system is available over NFS and what
options are used. If set to on, the zfs share command is invoked
with no options. Otherwise, the zfs share command is invoked with
options equivalent to the contents of this property.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="435"/>
        <source>The sharesmb property has currently no effect on FreeBSD.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="444"/>
        <source>Controls whether the .zfs directory is hidden or visible in the root of the file system.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="453"/>
        <source>Read-only property that identifies the dataset type as filesystem (file system or clone), volume, or snapshot.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="460"/>
        <source>Read-only property that identifies the amount of disk space consumed by a dataset and all its descendents.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="468"/>
        <source>Read-only property that identifies the amount of disk space that is used by
children of this dataset, which would be freed if all the dataset&apos;s children
were destroyed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="477"/>
        <source>Read-only property that identifies the amount of disk space that is used by
a dataset itself, which would be freed if the dataset was destroyed, after
first destroying any snapshots and removing any refreservation reservations.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="486"/>
        <source>Read-only property that identifies the amount of disk space that is used by a
refreservation set on a dataset, which would be freed if the refreservation was
removed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="494"/>
        <source>Read-only property that identifies the amount of disk space that is consumed
by snapshots of a dataset. In particular, it is the amount of disk space that
would be freed if all of this dataset&apos;s snapshots were destroyed. Note that
this value is not simply the sum of the snapshots&apos; used properties, because
space can be shared by multiple snapshots.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="504"/>
        <source>Identifies the on-disk version of a file system, which is independent of the
pool version. This property can only be set to a later version that is available
from the supported software release.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="513"/>
        <source>For volumes, specifies the logical size of the volume.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="520"/>
        <source>For volumes, specifies the block size of the volume.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="527"/>
        <source>Indicates whether a dataset has been added to a jail.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="536"/>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="542"/>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="548"/>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="555"/>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="561"/>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="635"/>
        <source>This property is not supported on FreeBSD.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="568"/>
        <source>The file system is marked to be destroyed after unmount.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="576"/>
        <source>The compression ratio achieved for the referenced space of this
dataset, expressed as a multiplier.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="584"/>
        <source>The amount of referenced space written to this dataset since the
previous snapshot.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="591"/>
        <source>This property is set to the number of user holds on this snapshot.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="598"/>
        <source>Provide a hint to ZFS about handling of synchronous requests in this
dataset.  If logbias is set to latency (the default), ZFS will use
pool log devices (if configured) to handle the requests at low
latency. If logbias is set to throughput, ZFS will not use configured
pool log devices.  ZFS will instead optimize synchronous operations
for global pool throughput and efficient use of resources.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="611"/>
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
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="641"/>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="647"/>
        <source>This property cannot be changed after the system is created.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="748"/>
        <source>User Property</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="750"/>
        <source>Unknown property or information not available.
Read ZFS manual for more information.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="972"/>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="990"/>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="1030"/>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="1044"/>
        <source>[Invalid]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="1008"/>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="1065"/>
        <source>[Inherit]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="1009"/>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="1066"/>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="1180"/>
        <source>[Added]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="1010"/>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="1067"/>
        <source>[Changed]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="1057"/>
        <source>User property</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="1098"/>
        <source>Device Menu</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="1104"/>
        <source>Add new user property</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfsprop.cpp" line="1105"/>
        <source>Delete user property</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DialogMount</name>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogmount.ui" line="14"/>
        <source>Dialog</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogmount.ui" line="20"/>
        <source>Device to mount:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogmount.ui" line="37"/>
        <source>(Device)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogmount.ui" line="44"/>
        <source>Mount location:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogmount.ui" line="67"/>
        <source>...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogmount.cpp" line="26"/>
        <source>Select Directory</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DialogName</name>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogname.ui" line="14"/>
        <source>Dialog</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogname.ui" line="20"/>
        <source>Pool name:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogname.ui" line="43"/>
        <source>Do not mount any filesystems</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogname.ui" line="50"/>
        <source>Read only pool</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogname.ui" line="64"/>
        <source>Import options:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogname.ui" line="71"/>
        <source>Mount with alternative root:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogname.ui" line="78"/>
        <source>Mount all filesystems automatically</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogname.ui" line="85"/>
        <source>Mounting behavior:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogname.ui" line="92"/>
        <source>Force operation if error (use with caution)</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DialogNewPool</name>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialognewpool.ui" line="14"/>
        <source>Dialog</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialognewpool.ui" line="26"/>
        <source>Selected</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialognewpool.ui" line="34"/>
        <source>Pool name:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialognewpool.ui" line="56"/>
        <source>Configuration type:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialognewpool.ui" line="63"/>
        <source>Striped</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialognewpool.ui" line="70"/>
        <source>Mirror</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialognewpool.ui" line="77"/>
        <source>Raid-Z (single parity)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialognewpool.ui" line="84"/>
        <source>Raid-Z2 (double parity)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialognewpool.ui" line="91"/>
        <source>Raid-Z3 (triple parity)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialognewpool.ui" line="98"/>
        <source>Cache</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialognewpool.ui" line="105"/>
        <source>Log</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialognewpool.ui" line="112"/>
        <source>Spare</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialognewpool.ui" line="163"/>
        <source>Error Description Here</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialognewpool.cpp" line="371"/>
        <source>Must provide a valid pool name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialognewpool.cpp" line="382"/>
        <source>Must select exactly %1 devices</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialognewpool.cpp" line="389"/>
        <source>Must select at least one device</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DialogPartition</name>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogpartition.ui" line="17"/>
        <source>Add Partition</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogpartition.ui" line="27"/>
        <source>Add new slice/partition</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogpartition.ui" line="38"/>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogpartition.ui" line="89"/>
        <source>100 GB</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogpartition.ui" line="51"/>
        <source>Device:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogpartition.ui" line="65"/>
        <source>ada0</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogpartition.ui" line="75"/>
        <source>Largest available free block:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogpartition.ui" line="82"/>
        <source>Total Size:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogpartition.ui" line="101"/>
        <source>Current layout:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogpartition.ui" line="140"/>
        <source>Designation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogpartition.ui" line="145"/>
        <source>Start Sector</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogpartition.ui" line="150"/>
        <source>Sector Count</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogpartition.ui" line="155"/>
        <source>Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogpartition.ui" line="160"/>
        <source>Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogpartition.ui" line="184"/>
        <source>New partition Size:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogpartition.ui" line="209"/>
        <source>bytes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogpartition.ui" line="214"/>
        <source>kB</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogpartition.ui" line="219"/>
        <source>MB</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogpartition.ui" line="224"/>
        <source>GB</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogpartition.ui" line="229"/>
        <source>TB</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogpartition.ui" line="246"/>
        <source>Partition type:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogpartition.ui" line="254"/>
        <source>freebsd-zfs</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogpartition.ui" line="259"/>
        <source>freebsd-ufs</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogpartition.ui" line="264"/>
        <source>freebsd</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogpartition.ui" line="269"/>
        <source>freebsd-boot</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogpartition.ui" line="274"/>
        <source>freebsd-swap</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogpartition.ui" line="279"/>
        <source>bios-boot</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogpartition.ui" line="284"/>
        <source>efi</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogpartition.ui" line="300"/>
        <source>Create and initialize a new filesystem</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogpartition.ui" line="312"/>
        <source>Align partitions to 1 MB boundary</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogpartition.cpp" line="139"/>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogpartition.cpp" line="179"/>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogpartition.cpp" line="264"/>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogpartition.cpp" line="301"/>
        <source>** FREE **</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogpartition.cpp" line="198"/>
        <source>No free space!</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DialogProp</name>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogprop.ui" line="14"/>
        <source>Edit Pool Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogprop.ui" line="36"/>
        <source>Property</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogprop.ui" line="41"/>
        <source>Value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogprop.cpp" line="39"/>
        <source>Total size of the storage pool.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogprop.cpp" line="45"/>
        <source>Percentage of pool space used.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogprop.cpp" line="51"/>
        <source>Alternate root directory. If set, this directory is prepended to any
mount points within the pool. This can be used when examining an
unknown pool where the mount points cannot be trusted, or in an
alternate boot environment, where the typical paths are not valid.
altroot is not a persistent property. It is valid only while the
system is up.  Setting altroot defaults to using cachefile=none, though
this may be overridden using an explicit setting.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogprop.cpp" line="67"/>
        <source>The current health of the pool.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogprop.cpp" line="75"/>
        <source>A unique identifier for the pool.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogprop.cpp" line="83"/>
        <source>The current on-disk version of the pool. This can be increased, but
never decreased. The preferred method of updating pools is with the
&quot;zpool upgrade&quot; command, though this property can be used when a
specific version is needed for backwards compatibility. This property
can be any number between 1 and the current version reported by
&quot;zpool upgrade -v&quot;.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogprop.cpp" line="95"/>
        <source>Identifies the default bootable dataset for the root pool. This
property is expected to be set mainly by the installation and upgrade
programs.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogprop.cpp" line="107"/>
        <source>Controls whether a non-privileged user is granted access based on the
dataset permissions defined on the dataset. See zfs(8) for more
information on ZFS delegated administration.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogprop.cpp" line="118"/>
        <source>Controls automatic device replacement. If set to &quot;off&quot;, device
replacement must be initiated by the administrator by using the
&quot;zpool replace&quot; command. If set to &quot;on&quot;, any new device, found in the
same physical location as a device that previously belonged to the
pool, is automatically formatted and replaced. The default behavior
is &quot;off&quot;.  This property can also be referred to by its shortened
column name, &quot;replace&quot;.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogprop.cpp" line="132"/>
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
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogprop.cpp" line="151"/>
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
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogprop.cpp" line="176"/>
        <source>Controls whether information about snapshots associated with this
pool is output when &quot;zfs list&quot; is run without the -t option. The
default value is off.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogprop.cpp" line="188"/>
        <source>Controls automatic pool expansion when the underlying LUN is grown.
If set to &quot;on&quot;, the pool will be resized according to the size of the
expanded device. If the device is part of a mirror or raidz then all
devices within that mirror/raidz group must be expanded before the
new space is made available to the pool. The default behavior is
&quot;off&quot;.  This property can also be referred to by its shortened column
name, expand.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogprop.cpp" line="205"/>
        <source>Threshold for the number of block ditto copies. If the reference
count for a deduplicated block increases above this number, a new
ditto copy of this block is automatically stored. Default setting is
0.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogprop.cpp" line="217"/>
        <source>The deduplication ratio specified for a pool, expressed as a multiplier. For
example, a value of 1.76 indicates that 1.76 units of data were stored but
only 1 unit of disk space was actually consumed. See zfs(8) for a description
of the deduplication feature.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogprop.cpp" line="228"/>
        <source>Number of blocks within the pool that are not allocated.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogprop.cpp" line="235"/>
        <source>Amount of storage space within the pool that has been physically allocated.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogprop.cpp" line="242"/>
        <source>If set to on, pool will be imported in read-only mode with the
following restrictions:
  *   Synchronous data in the intent log will not be accessible
  *   Properties of the pool can not be changed
  *   Datasets of this pool can only be mounted read-only
  *   To write to a read-only pool, a export and import of the pool
      is required.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogprop.cpp" line="262"/>
        <source>An arbitrary comment string set by the administrator.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogprop.cpp" line="271"/>
        <source>This property has currently no value on FreeBSD.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DialogfsCreate</name>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfscreate.ui" line="26"/>
        <source>New Filesystem</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfscreate.ui" line="55"/>
        <source>Name:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfscreate.ui" line="74"/>
        <source>Properties override at creation time:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfscreate.ui" line="94"/>
        <source>Prevent auto mount (canmount=noauto)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfscreate.ui" line="101"/>
        <source>Mountpoint</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfscreate.ui" line="119"/>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfscreate.ui" line="155"/>
        <source>none</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfscreate.ui" line="124"/>
        <source>legacy</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfscreate.ui" line="129"/>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfscreate.cpp" line="47"/>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfscreate.cpp" line="60"/>
        <source>[path]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfscreate.ui" line="137"/>
        <source>Force UTF-8 only (utf8only=on)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfscreate.ui" line="144"/>
        <source>Unicode normalization =</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfscreate.ui" line="160"/>
        <source>formD</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfscreate.ui" line="165"/>
        <source>formKCF</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfscreate.ui" line="173"/>
        <source>Copies =</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfscreate.ui" line="180"/>
        <source>Deduplication (dedup=on)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfscreate.ui" line="187"/>
        <source>Compression =</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfscreate.ui" line="198"/>
        <source>off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfscreate.ui" line="203"/>
        <source>on</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfscreate.ui" line="208"/>
        <source>lz4</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfscreate.ui" line="213"/>
        <source>lzjb</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfscreate.ui" line="218"/>
        <source>zle</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfscreate.ui" line="223"/>
        <source>gzip</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfscreate.ui" line="228"/>
        <source>gzip-1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfscreate.ui" line="233"/>
        <source>gzip-2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfscreate.ui" line="238"/>
        <source>gzip-3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfscreate.ui" line="243"/>
        <source>gzip-4</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfscreate.ui" line="248"/>
        <source>gzip-5</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfscreate.ui" line="253"/>
        <source>gzip-6</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfscreate.ui" line="258"/>
        <source>gzip-7</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfscreate.ui" line="263"/>
        <source>gzip-8</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/dialogfscreate.ui" line="268"/>
        <source>gzip-9</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ZManagerWindow</name>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.ui" line="14"/>
        <source>PCBSD Disk Manager</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.ui" line="39"/>
        <source>Disks</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.ui" line="49"/>
        <source>Device</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.ui" line="54"/>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.ui" line="103"/>
        <source>State</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.ui" line="67"/>
        <source>ZFS Pools</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.ui" line="98"/>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.ui" line="230"/>
        <source>Pool Name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.ui" line="123"/>
        <source>Status:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.ui" line="130"/>
        <source>TextLabel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.ui" line="152"/>
        <source>Clear Error</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.ui" line="181"/>
        <source>poolname</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.ui" line="199"/>
        <source>ZFS Filesystems</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.ui" line="283"/>
        <source>Filesystems</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.ui" line="288"/>
        <source>Status</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="1469"/>
        <source>Refreshing...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="1606"/>
        <source>No pools available, right click to create a new one...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="1622"/>
        <source> (No media in drive)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="1631"/>
        <source>Avaliable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="1631"/>
        <source>No disk</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="1632"/>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="1655"/>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="1677"/>
        <source>ZPool: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="1633"/>
        <source>Sliced</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="1634"/>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="1657"/>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="1679"/>
        <source>Mounted: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="1654"/>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="1676"/>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="1769"/>
        <source>Available</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="1654"/>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="1676"/>
        <source>Unmounted</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="1656"/>
        <source>Partitioned</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="1743"/>
        <source>(Exported)
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="1748"/>
        <source>(Destroyed)
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="1757"/>
        <source>Offline</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="1759"/>
        <source>Online</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="1761"/>
        <source>Degraded</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="1763"/>
        <source>Faulted</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="1765"/>
        <source>Removed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="1767"/>
        <source>Unavailable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="1772"/>
        <source>Unknown</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="1784"/>
        <source>Create new pool</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="1785"/>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="2840"/>
        <source>Rename pool</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="1786"/>
        <source>Destroy pool</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="1787"/>
        <source>Add devices...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="1788"/>
        <source>Add log devices...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="1789"/>
        <source>Add cache devices...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="1790"/>
        <source>Add spare devices...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="1791"/>
        <source>Scrub</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="1792"/>
        <source>Export pool</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="1793"/>
        <source>Import pool</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="1794"/>
        <source>Recover destroyed pool</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="1795"/>
        <source>Properties...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="1797"/>
        <source>Attach (mirror) device...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="1798"/>
        <source>Detach from mirror</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="1799"/>
        <source>Take offline</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="1800"/>
        <source>Bring online</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="1802"/>
        <source>Remove</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="1814"/>
        <source>zpool Menu</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="1859"/>
        <source>Device Menu</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="1873"/>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="3297"/>
        <source>Unmount</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="1878"/>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="3296"/>
        <source>Mount</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="1883"/>
        <source>Create MBR partition table</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="1884"/>
        <source>Create GPT partition table</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="1888"/>
        <source>Create BSD partition table</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="1893"/>
        <source>Delete Partition Table</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="1894"/>
        <source>Add new slice</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="1895"/>
        <source>Add new partition</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="1900"/>
        <source>Destroy this slice</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="1901"/>
        <source>Destroy this partition</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="2325"/>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="2793"/>
        <source>Warning</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="2325"/>
        <source>This operation cannot be undone.
OK to destroy the slice/partition?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="2369"/>
        <source>An error was detected while executing &apos;%1&apos;:

</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="2372"/>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="2403"/>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="2435"/>
        <source>Error report</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="2401"/>
        <source>An error was detected while executing &apos;zpool&apos;:

</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="2433"/>
        <source>An error was detected while executing &apos;zfs&apos;:

</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="2483"/>
        <source>Create new zpool</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="2512"/>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="2747"/>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="2833"/>
        <source>Important information</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="2512"/>
        <source>The pool was imported in read-only mode, therefore attempting to destroy the pool will leave the pool in the state it was when imported, not necessarily destroyed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="2651"/>
        <source>Attach mirror devices to </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="2747"/>
        <source>The pool was imported in read-only mode, therefore attempting to export the pool will leave the pool in the state it was when imported, not necessarily exported.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="2769"/>
        <source>Recover destroyed pool as...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="2770"/>
        <source>Import pool as...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="2793"/>
        <source>This pool had been destroyed, and its disks may have been reused. Attempting to recover will destroy any new data that could&apos;ve been stored in the devices that were reused and cannot be recovered.
Proceed with recovery?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="2833"/>
        <source>The pool was imported in read-only mode, it cannot be renamed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="2894"/>
        <source>Add more devices to zpool</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="2951"/>
        <source>Add log devices to zpool</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="2990"/>
        <source>Add cache devices to zpool</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="3029"/>
        <source>Add spare devices to zpool</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="3218"/>
        <source>[Mounted]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="3222"/>
        <source>[Not Mounted]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="3232"/>
        <source> of </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="3298"/>
        <source>Rename dataset</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="3299"/>
        <source>Create new dataset</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="3300"/>
        <source>Create a clone dataset</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="3301"/>
        <source>Destroy dataset</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="3302"/>
        <source>Promote filesystem</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="3303"/>
        <source>Take a snapshot</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="3304"/>
        <source>Destroy snapshot</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="3305"/>
        <source>Rollback to this snapshot</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="3306"/>
        <source>Edit properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="3317"/>
        <source>zfs Menu</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="3447"/>
        <source>This operation cannot be undone and will cause data loss.

You are about to perform the following operation(s):

</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="3455"/>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="3637"/>
        <source>

Are you sure you want to proceed?

</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="3457"/>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="3639"/>
        <source>Confirmation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="3488"/>
        <source>Take a new snapshot</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="3530"/>
        <source>New name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../../../tank/pcbsd-i18n/pcbsd-git/src-qt5/pc-zmanager/zmanagerwindow.cpp" line="3634"/>
        <source>This operation cannot be undone and will cause all data added after the snapshot to be lost.
Any snapshots created after this one will be deleted, along with any clone filesystems that depend on them.
</source>
        <translation type="unfinished"></translation>
    </message>
</context>
</TS>
