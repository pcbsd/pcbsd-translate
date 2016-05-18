<?xml version='1.0' encoding='utf-8'?>
<!DOCTYPE TS>
<TS version="2.1" language="ca">
<context>
    <name>DialogFSProp</name>
    <message>
        <source>Dialog</source>
        <translation>Diàleg</translation>
    </message>
    <message>
        <source>Apply changes recursively to all descendants</source>
        <translation>Aplica els canvis recursivament a tots els descendents</translation>
    </message>
    <message>
        <source>Property</source>
        <translation>Propietat</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Valor</translation>
    </message>
    <message>
        <source>Source</source>
        <translation>Font</translation>
    </message>
    <message>
        <source>Add user property</source>
        <translation>Afegeix una propietat de l'usuari</translation>
    </message>
    <message>
        <source>...</source>
        <translation>Afegeix una propietat de l'usuari</translation>
    </message>
    <message>
        <source>Remove user property</source>
        <translation>Elimina la propietat de l'usuari</translation>
    </message>
    <message>
        <source>Inherit from parent</source>
        <translation>Hereta del pare</translation>
    </message>
    <message>
        <source>Revert changes</source>
        <translation>Desfés els canvis</translation>
    </message>
    <message>
        <source>Controls how ACL entries are inherited when files and directories are created. The values are
discard, noallow, restricted, and passthrough. For a description of these values, see ACL Properties.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Controls how an ACL entry is modified during a chmod operation.
The values are discard, groupmask, and passthrough. For a description of
these values, see ACL Properties.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Controls whether the access time for files is updated when they are read.
Turning this property off avoids producing write traffic when reading files and
can result in significant performance gains, though it might confuse mailers and
similar utilities.</source>
        <translation>Controla si el temps d'accés per als fitxers s'actualitza quan es llegeixen.
Desactivar aquesta propietat evita la producció de trànsit d'escriptura en llegir fitxers
i pot donar lloc a guanys significatius de rendiment, tot i que podria confondre
programes de correu i utilitats similars.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the amount of disk space available to a dataset
and all its children, assuming no other activity in the pool. Because disk space is
shared within a pool, available space can be limited by various factors including
physical pool size, quotas, reservations, and other datasets within the pool.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>If this property is set to off, the file system cannot be mounted,
and is ignored by 'zfs mount -a'.  Setting this property to off is
similar to setting the mountpoint property to none, except that the
dataset still has a normal mountpoint property, which can be inherited
Setting this property to off allows datasets to be used solely as a
mechanism to inherit properties. One example of setting canmount=off is
to have two datasets with the same mountpoint, so that the children of
both datasets appear in the same directory, but might have different
inherited characteristics.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Controls the checksum used to verify data integrity. The default
value is on, which automatically selects an appropriate algorithm
(currently, fletcher4, but this may change in future releases). The
value off disables integrity checking on user data. Disabling
checksums is NOT a recommended practice.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Read-only property that identifies the compression ratio achieved for a dataset,
expressed as a multiplier. Compression can be enabled by the zfs set compression=on
dataset command. The value is calculated from the logical size of all files and the
amount of referenced physical data. It includes explicit savings through the use of
the compression property.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Sets the number of copies of user data per file system. These copies
are in addition to any pool-level redundancy. Disk space used by
multiple copies of user data is charged to the corresponding file and
dataset, and counts against quotas and reservations. In addition, the
used property is updated when multiple copies are enabled. Consider setting
this property when the file system is created because changing this property
on an existing file system only affects newly written data.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Read-only property that identifies the date and time that a dataset was created.</source>
        <translation>Propietat de només lectura que identifica la data i l'hora de creació d'un conjunt de dades.</translation>
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
        <translation type="unfinished"/>
    </message>
    <message>
        <source>The devices property is currently not supported on FreeBSD.</source>
        <translation>La propietat de dispositius no té suport actualment a FreeBSD.</translation>
    </message>
    <message>
        <source>Controls whether processes can be executed from within this file
system. The default value is on.</source>
        <translation>Controla si els processos es poden executar des de dins d'aquest
sistema de fitxers. El valor per defecte és activat.</translation>
    </message>
    <message>
        <source>Read-only property that indicates whether a file system, clone, or snapshot
is currently mounted.</source>
        <translation>Propietat de només lectura que indica si un sistema de fitxers, clon o instantània
està muntat actualment.</translation>
    </message>
    <message>
        <source>Controls the mount point used for this file system. When the mountpoint property
is changed for a file system, the file system and any descendents that inherit the
mount point are unmounted. If the new value is legacy, then they remain unmounted.
Otherwise, they are automatically remounted in the new location if the property was
previously legacy or none, or if they were mounted before the property was changed.
In addition, any shared file systems are unshared and shared in the new location.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Controls what is cached in the primary cache (ARC). Possible values are all,
none, and metadata. If set to all, both user data and metadata are cached. If
set to none, neither user data nor metadata is cached. If set to metadata, only
metadata is cached.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Read-only property for cloned file systems or volumes that identifies
the snapshot from which the clone was created. The origin cannot be
destroyed (even with the -r or -f option) as long as a clone exists.
Non-cloned file systems have an origin of none.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Limits the amount of disk space a dataset and its descendents can consume.
This property enforces a hard limit on the amount of disk space used,
including all space consumed by descendents, such as file systems and snapshots.
Setting a quota on a descendent of a dataset that already has a quota does not
override the ancestor's quota, but rather imposes an additional limit.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Controls whether a dataset can be modified. When set to on,
no modifications can be made.</source>
        <translation>Controla si un conjunt de dades es pot modificar. Quan està activat,
no es poden fer modificacions.</translation>
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
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Read-only property that identifies the amount of data accessible by a
dataset, which might or might not be shared with other datasets in the
pool.</source>
        <translation>Propietat de només lectura que identifica la quantitat de dades accessibles per a
un conjunt de dades, que es podria compartir o no amb altres conjunts de dades
del pool.</translation>
    </message>
    <message>
        <source>Sets the amount of disk space that a dataset can consume. This property
enforces a hard limit on the amount of space used. This hard limit does
not include disk space used by descendents, such as snapshots and clones.</source>
        <translation>Estableix la quantitat d'espai de disc que un conjunt de dades pot consumir. 
Aquesta propietat imposa un límit en l'espai de disc usat. Aquest límit dur no
inclou espai de disc usat per descendents, com ara instantànies i clons.</translation>
    </message>
    <message>
        <source>Sets the minimum amount of disk space that is guaranteed to a dataset, not
including descendents, such as snapshots and clones. When the amount of disk
space used is below this value, the dataset is treated as if it were taking up
the amount of space specified by refreservation. The refreservation reservation
is accounted for in the parent dataset's disk space used, and counts against
the parent dataset's quotas and reservations.
If refreservation is set, a snapshot is only allowed if enough free pool space
is available outside of this reservation to accommodate the current number of
referenced bytes in the dataset.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Sets the minimum amount of disk space guaranteed to a dataset and its descendents.
When the amount of disk space used is below this value, the dataset is treated as if
it were using the amount of space specified by its reservation. Reservations are
accounted for in the parent dataset's disk space used, and count against the parent
dataset's quotas and reservations.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Controls what is cached in the secondary cache (L2ARC). Possible values are all, none,
and metadata. If set to all, both user data and metadata are cached. If set to none,
neither user data nor metadata is cached. If set to metadata, only metadata is cached.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Controls whether the setuid bit is honored in a file system.</source>
        <translation>Controla si es té un compte el bit setuid al sistema de fitxers.</translation>
    </message>
    <message>
        <source>Controls whether a file system is available over NFS and what
options are used. If set to on, the zfs share command is invoked
with no options. Otherwise, the zfs share command is invoked with
options equivalent to the contents of this property.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>The sharesmb property has currently no effect on FreeBSD.</source>
        <translation>La propietat sharesmb no té efecte actualment a FreeBSD.</translation>
    </message>
    <message>
        <source>Controls whether the .zfs directory is hidden or visible in the root of the file system.</source>
        <translation>Controla si el directori .zfs està amagat o és visible a l'arrel del sistema de fitxers.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the dataset type as filesystem (file system or clone), volume, or snapshot.</source>
        <translation>Propietat de només lectura que identifica el tipus de conjunt de dades com a sistema de fitxers (sistema de fitxers o clon), volum o instantània.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the amount of disk space consumed by a dataset and all its descendents.</source>
        <translation>Propietat de només lectura que identifica l'espai de disc consumit per un conjunt de dades i tots els seus descendents.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the amount of disk space that is used by
children of this dataset, which would be freed if all the dataset's children
were destroyed.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Read-only property that identifies the amount of disk space that is used by
a dataset itself, which would be freed if the dataset was destroyed, after
first destroying any snapshots and removing any refreservation reservations.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Read-only property that identifies the amount of disk space that is used by a
refreservation set on a dataset, which would be freed if the refreservation was
removed.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Read-only property that identifies the amount of disk space that is consumed
by snapshots of a dataset. In particular, it is the amount of disk space that
would be freed if all of this dataset's snapshots were destroyed. Note that
this value is not simply the sum of the snapshots' used properties, because
space can be shared by multiple snapshots.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Identifies the on-disk version of a file system, which is independent of the
pool version. This property can only be set to a later version that is available
from the supported software release.</source>
        <translation>Identifica la versió en disc d'un sistema de fitxers, que és independent de la
versió del pool. Aquesta propietat només es pot establir a una versió posterior
que estigui disponible des de la versió de programari compatible.</translation>
    </message>
    <message>
        <source>For volumes, specifies the logical size of the volume.</source>
        <translation>Per als volums, especifica la mida lògica del volum.</translation>
    </message>
    <message>
        <source>For volumes, specifies the block size of the volume.</source>
        <translation>Per als volums, especifica la mida de bloc del volum.</translation>
    </message>
    <message>
        <source>Indicates whether a dataset has been added to a jail.</source>
        <translation>Indica si un conjunt de dades s'ha afegit a una gàbia.</translation>
    </message>
    <message>
        <source>This property is not supported on FreeBSD.</source>
        <translation>Aquesta propietat no té suport a FreeBSD.</translation>
    </message>
    <message>
        <source>The file system is marked to be destroyed after unmount.</source>
        <translation>Aquest sistema de fitxers està marcat per ser destruït després de desmuntar-lo.</translation>
    </message>
    <message>
        <source>The compression ratio achieved for the referenced space of this
dataset, expressed as a multiplier.</source>
        <translation>La relació de compressió aconseguida per l'espai referenciat d'aquest
conjunt de dades, expressada com a multiplicador.</translation>
    </message>
    <message>
        <source>The amount of referenced space written to this dataset since the
previous snapshot.</source>
        <translation>La quantitat d'espai referenciat escrit en aquest conjunt de dades des
de l'última instantània.</translation>
    </message>
    <message>
        <source>This property is set to the number of user holds on this snapshot.
</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Provide a hint to ZFS about handling of synchronous requests in this
dataset.  If logbias is set to latency (the default), ZFS will use
pool log devices (if configured) to handle the requests at low
latency. If logbias is set to throughput, ZFS will not use configured
pool log devices.  ZFS will instead optimize synchronous operations
for global pool throughput and efficient use of resources.</source>
        <translation type="unfinished"/>
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
        <translation type="unfinished"/>
    </message>
    <message>
        <source>This property cannot be changed after the system is created.</source>
        <translation>Aquesta propietat no es pot canviar després de la creació del sistema.</translation>
    </message>
    <message>
        <source>User Property</source>
        <translation>Propietat de l'usuari</translation>
    </message>
    <message>
        <source>Unknown property or information not available.
Read ZFS manual for more information.</source>
        <translation>Propietat desconeguda o informació no disponible.
Llegiu el manual de ZFS per a més informació.</translation>
    </message>
    <message>
        <source>[Invalid]</source>
        <translation>[Invàlid]</translation>
    </message>
    <message>
        <source>[Inherit]</source>
        <translation>[Hereta]</translation>
    </message>
    <message>
        <source>[Added]</source>
        <translation>[Afegit]</translation>
    </message>
    <message>
        <source>[Changed]</source>
        <translation>[Canviat]</translation>
    </message>
    <message>
        <source>User property</source>
        <translation>Propietat de l'usuari</translation>
    </message>
    <message>
        <source>Device Menu</source>
        <translation>Menú del dispositiu</translation>
    </message>
    <message>
        <source>Add new user property</source>
        <translation>Afegeix una propietat de l'usuari nova</translation>
    </message>
    <message>
        <source>Delete user property</source>
        <translation>Elimina la propietat de l'usuari</translation>
    </message>
    <message>
        <source>Enables or disables compression for a dataset. The values are on, off, lz4, lzjb, zle, 
gzip and gzip-N. Currently, setting this property to lz4, lzjb, gzip, or gzip-N has the same
effect as setting this property to on. Enabling compression on a file system with
existing data only compresses new data. Existing data remains uncompressed.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>DialogMount</name>
    <message>
        <source>Dialog</source>
        <translation>Diàleg</translation>
    </message>
    <message>
        <source>Device to mount:</source>
        <translation>Dispositiu per muntar:</translation>
    </message>
    <message>
        <source>(Device)</source>
        <translation>(Dispositiu)</translation>
    </message>
    <message>
        <source>Mount location:</source>
        <translation>Ubicació del muntatge:</translation>
    </message>
    <message>
        <source>...</source>
        <translation>...</translation>
    </message>
    <message>
        <source>Select Directory</source>
        <translation>Seleccioneu un directori</translation>
    </message>
</context>
<context>
    <name>DialogName</name>
    <message>
        <source>Dialog</source>
        <translation>Diàleg</translation>
    </message>
    <message>
        <source>Pool name:</source>
        <translation>Nom del pool:</translation>
    </message>
    <message>
        <source>Do not mount any filesystems</source>
        <translation>No muntis cap sistema de fitxers</translation>
    </message>
    <message>
        <source>Read only pool</source>
        <translation>Pool de només lectura</translation>
    </message>
    <message>
        <source>Import options:</source>
        <translation>Opcions d'importació:</translation>
    </message>
    <message>
        <source>Mount with alternative root:</source>
        <translation>Munta amb una arrel alternativa:</translation>
    </message>
    <message>
        <source>Mount all filesystems automatically</source>
        <translation>Munta tots els sistemes de fitxers automàticament</translation>
    </message>
    <message>
        <source>Mounting behavior:</source>
        <translation>Comportament del muntatge:</translation>
    </message>
    <message>
        <source>Force operation if error (use with caution)</source>
        <translation>Força l'operació si hi ha error (useu-ho amb precaució)</translation>
    </message>
</context>
<context>
    <name>DialogNewPool</name>
    <message>
        <source>Dialog</source>
        <translation>Diàleg</translation>
    </message>
    <message>
        <source>Selected</source>
        <translation>Seleccionat</translation>
    </message>
    <message>
        <source>Pool name:</source>
        <translation>Nom del pool:</translation>
    </message>
    <message>
        <source>Configuration type:</source>
        <translation>Tipus de configuració:</translation>
    </message>
    <message>
        <source>Striped</source>
        <translation>Fragmentat seqüencial</translation>
    </message>
    <message>
        <source>Mirror</source>
        <translation>Rèplica</translation>
    </message>
    <message>
        <source>Raid-Z (single parity)</source>
        <translation>Raid-Z (paritat simple)</translation>
    </message>
    <message>
        <source>Raid-Z2 (double parity)</source>
        <translation>Raid-Z2 (paritat doble)</translation>
    </message>
    <message>
        <source>Raid-Z3 (triple parity)</source>
        <translation>Raid-Z3 (triple paritat)</translation>
    </message>
    <message>
        <source>Cache</source>
        <translation>Cau</translation>
    </message>
    <message>
        <source>Log</source>
        <translation>Registre</translation>
    </message>
    <message>
        <source>Spare</source>
        <translation>Recanvi</translation>
    </message>
    <message>
        <source>Error Description Here</source>
        <translation>Descripció de l'error aquí</translation>
    </message>
    <message>
        <source>Must provide a valid pool name</source>
        <translation>Heu de proporcionar un nom de pool vàlid</translation>
    </message>
    <message>
        <source>Must select exactly %1 devices</source>
        <translation>Heu de seleccionar exactament %1 dispositius</translation>
    </message>
    <message>
        <source>Must select at least one device</source>
        <translation>Heu de seleccionar com a mínim un dispositiu</translation>
    </message>
</context>
<context>
    <name>DialogPartition</name>
    <message>
        <source>Add Partition</source>
        <translation>Afegeix una partició</translation>
    </message>
    <message>
        <source>Add new slice/partition</source>
        <translation>Afegeix una llesca/partició nova</translation>
    </message>
    <message>
        <source>100 GB</source>
        <translation>100 GB</translation>
    </message>
    <message>
        <source>Device:</source>
        <translation>Dispositiu:</translation>
    </message>
    <message>
        <source>ada0</source>
        <translation>ada0</translation>
    </message>
    <message>
        <source>Largest available free block:</source>
        <translation>El bloc disponible més gros:</translation>
    </message>
    <message>
        <source>Total Size:</source>
        <translation>Mida total:</translation>
    </message>
    <message>
        <source>Current layout:</source>
        <translation>Disposició actual:</translation>
    </message>
    <message>
        <source>Designation</source>
        <translation>Designació</translation>
    </message>
    <message>
        <source>Start Sector</source>
        <translation>Sector d'inici</translation>
    </message>
    <message>
        <source>Sector Count</source>
        <translation>Compte de sectors</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Mida</translation>
    </message>
    <message>
        <source>Color</source>
        <translation>Color</translation>
    </message>
    <message>
        <source>New partition Size:</source>
        <translation>Mida de la partició nova:</translation>
    </message>
    <message>
        <source>bytes</source>
        <translation>bytes</translation>
    </message>
    <message>
        <source>kB</source>
        <translation>kB</translation>
    </message>
    <message>
        <source>MB</source>
        <translation>MB</translation>
    </message>
    <message>
        <source>GB</source>
        <translation>GB</translation>
    </message>
    <message>
        <source>TB</source>
        <translation>TB</translation>
    </message>
    <message>
        <source>Partition type:</source>
        <translation>Tipus de partició:</translation>
    </message>
    <message>
        <source>freebsd-zfs</source>
        <translation>freebsd-zfs</translation>
    </message>
    <message>
        <source>freebsd-ufs</source>
        <translation>freebsd-ufs</translation>
    </message>
    <message>
        <source>freebsd</source>
        <translation>freebsd</translation>
    </message>
    <message>
        <source>freebsd-boot</source>
        <translation>freebsd-boot</translation>
    </message>
    <message>
        <source>freebsd-swap</source>
        <translation>intercanvi-freebsd</translation>
    </message>
    <message>
        <source>bios-boot</source>
        <translation>bios-boot</translation>
    </message>
    <message>
        <source>efi</source>
        <translation>efi</translation>
    </message>
    <message>
        <source>Create and initialize a new filesystem</source>
        <translation>Crea i inicialitza un sistema de fitxers nou</translation>
    </message>
    <message>
        <source>** FREE **</source>
        <translation>** LLIURE **</translation>
    </message>
    <message>
        <source>No free space!</source>
        <translation>No hi ha espai lliure!</translation>
    </message>
    <message>
        <source>Align partitions to 1 MB boundary</source>
        <translation>Crea i inicialitza un sistema de fitxers nou</translation>
    </message>
</context>
<context>
    <name>DialogProp</name>
    <message>
        <source>Edit Pool Properties</source>
        <translation>Edita les propietats del pool</translation>
    </message>
    <message>
        <source>Property</source>
        <translation>Propietat</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Valor</translation>
    </message>
    <message>
        <source>Total size of the storage pool.</source>
        <translation>Mida total del pool d'emmagatzematge.</translation>
    </message>
    <message>
        <source>Percentage of pool space used.</source>
        <translation>Percentatge d'espai usat del pool.</translation>
    </message>
    <message>
        <source>Alternate root directory. If set, this directory is prepended to any
mount points within the pool. This can be used when examining an
unknown pool where the mount points cannot be trusted, or in an
alternate boot environment, where the typical paths are not valid.
altroot is not a persistent property. It is valid only while the
system is up.  Setting altroot defaults to using cachefile=none, though
this may be overridden using an explicit setting.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>The current health of the pool.</source>
        <translation>La salut actual del pool.</translation>
    </message>
    <message>
        <source>A unique identifier for the pool.</source>
        <translation>Un identificador únic per al pool.</translation>
    </message>
    <message>
        <source>The current on-disk version of the pool. This can be increased, but
never decreased. The preferred method of updating pools is with the
"zpool upgrade" command, though this property can be used when a
specific version is needed for backwards compatibility. This property
can be any number between 1 and the current version reported by
"zpool upgrade -v".</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Identifies the default bootable dataset for the root pool. This
property is expected to be set mainly by the installation and upgrade
programs.</source>
        <translation>Identifica el conjunt de dades arrencable per defecte per al pool d'arrel. Aquesta
propietat s'espera que s'estableixi principalment a través de la instal·lació i
l'actualització de programes.</translation>
    </message>
    <message>
        <source>Controls whether a non-privileged user is granted access based on the
dataset permissions defined on the dataset. See zfs(8) for more
information on ZFS delegated administration.</source>
        <translation>Controla si un usuari sense privilegis té accés segons els permisos definits
al conjunt de dades. Vegeu zfs(8) per a més informació sobre l'administració
delegada de ZFS.</translation>
    </message>
    <message>
        <source>Controls automatic device replacement. If set to "off", device
replacement must be initiated by the administrator by using the
"zpool replace" command. If set to "on", any new device, found in the
same physical location as a device that previously belonged to the
pool, is automatically formatted and replaced. The default behavior
is "off".  This property can also be referred to by its shortened
column name, "replace".</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Controls the location of where the pool configuration is cached.
Discovering all pools on system startup requires a cached copy of the
configuration data that is stored on the root file system. All pools
in this cache are automatically imported when the system boots. Some
environments, such as install and clustering, need to cache this
information in a different location so that pools are not automatically
imported. Setting this property caches the pool configuration
in a different location that can later be imported with "zpool import
-c".  Setting it to the special value "none" creates a temporary pool
that is never cached, and the special value '' (empty string) uses
the default location.</source>
        <translation type="unfinished"/>
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
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Controls whether information about snapshots associated with this
pool is output when "zfs list" is run without the -t option. The
default value is off.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Controls automatic pool expansion when the underlying LUN is grown.
If set to "on", the pool will be resized according to the size of the
expanded device. If the device is part of a mirror or raidz then all
devices within that mirror/raidz group must be expanded before the
new space is made available to the pool. The default behavior is
"off".  This property can also be referred to by its shortened column
name, expand.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Threshold for the number of block ditto copies. If the reference
count for a deduplicated block increases above this number, a new
ditto copy of this block is automatically stored. Default setting is
0.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>The deduplication ratio specified for a pool, expressed as a multiplier. For
example, a value of 1.76 indicates that 1.76 units of data were stored but
only 1 unit of disk space was actually consumed. See zfs(8) for a description
of the deduplication feature.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Number of blocks within the pool that are not allocated.</source>
        <translation>Nombre de blocs de dins del pool que no estan assignats.</translation>
    </message>
    <message>
        <source>Amount of storage space within the pool that has been physically allocated.</source>
        <translation>Quantitat d'espai d'emmagatzematge de dins del pool que s'ha assignat físicament.</translation>
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
        <translation type="unfinished"/>
    </message>
    <message>
        <source>An arbitrary comment string set by the administrator.</source>
        <translation>Una cadena de comentari arbitrària establerta per l'administrador.</translation>
    </message>
    <message>
        <source>This property has currently no value on FreeBSD.</source>
        <translation>Aquesta propietat actualment no té  valor a FreeBSD.</translation>
    </message>
</context>
<context>
    <name>DialogfsCreate</name>
    <message>
        <source>New Filesystem</source>
        <translation>Sistema de fitxers nou</translation>
    </message>
    <message>
        <source>Name:</source>
        <translation>Nom:</translation>
    </message>
    <message>
        <source>Properties override at creation time:</source>
        <translation>Sobreescriptura de propietats al moment de creació:</translation>
    </message>
    <message>
        <source>Prevent auto mount (canmount=noauto)</source>
        <translation>Evita el muntatge automàtic (canmount=noauto)</translation>
    </message>
    <message>
        <source>Mountpoint</source>
        <translation>Punt de muntatge</translation>
    </message>
    <message>
        <source>none</source>
        <translation>cap</translation>
    </message>
    <message>
        <source>legacy</source>
        <translation>Llegat</translation>
    </message>
    <message>
        <source>[path]</source>
        <translation>[camí]</translation>
    </message>
    <message>
        <source>Force UTF-8 only (utf8only=on)</source>
        <translation>Força només UTF-8 (utf8only=on)</translation>
    </message>
    <message>
        <source>Unicode normalization =</source>
        <translation>Normalització d'Unicode =</translation>
    </message>
    <message>
        <source>formD</source>
        <translation>formD</translation>
    </message>
    <message>
        <source>formKCF</source>
        <translation>formKCF</translation>
    </message>
    <message>
        <source>Copies =</source>
        <translation>Còpies =</translation>
    </message>
    <message>
        <source>Deduplication (dedup=on)</source>
        <translation>Deduplicació (dedup=on)</translation>
    </message>
    <message>
        <source>Compression =</source>
        <translation>Compressió =</translation>
    </message>
    <message>
        <source>off</source>
        <translation>aturat</translation>
    </message>
    <message>
        <source>on</source>
        <translation>activat</translation>
    </message>
    <message>
        <source>lzjb</source>
        <translation>lzjb</translation>
    </message>
    <message>
        <source>zle</source>
        <translation>zle</translation>
    </message>
    <message>
        <source>gzip</source>
        <translation>gzip</translation>
    </message>
    <message>
        <source>gzip-1</source>
        <translation>gzip</translation>
    </message>
    <message>
        <source>gzip-2</source>
        <translation>gzip-2</translation>
    </message>
    <message>
        <source>gzip-3</source>
        <translation>gzip-3</translation>
    </message>
    <message>
        <source>gzip-4</source>
        <translation>gzip-4</translation>
    </message>
    <message>
        <source>gzip-5</source>
        <translation>gzip-5</translation>
    </message>
    <message>
        <source>gzip-6</source>
        <translation>gzip-6</translation>
    </message>
    <message>
        <source>gzip-7</source>
        <translation>gzip-7</translation>
    </message>
    <message>
        <source>gzip-8</source>
        <translation>gzip-8</translation>
    </message>
    <message>
        <source>gzip-9</source>
        <translation>gzip-9</translation>
    </message>
    <message>
        <source>lz4</source>
        <translation>lz4</translation>
    </message>
</context>
<context>
    <name>ZManagerWindow</name>
    <message>
        <source>PCBSD Disk Manager</source>
        <translation>Gestor de disc del PCBSD</translation>
    </message>
    <message>
        <source>Disks</source>
        <translation>Discs</translation>
    </message>
    <message>
        <source>Device</source>
        <translation>Dispositiu</translation>
    </message>
    <message>
        <source>State</source>
        <translation>Estat</translation>
    </message>
    <message>
        <source>ZFS Pools</source>
        <translation>ZFS Pools</translation>
    </message>
    <message>
        <source>Pool Name</source>
        <translation>Nom del pool</translation>
    </message>
    <message>
        <source>Status:</source>
        <translation>Estat:</translation>
    </message>
    <message>
        <source>TextLabel</source>
        <translation>Etiqueta de text</translation>
    </message>
    <message>
        <source>Clear Error</source>
        <translation>Neteja l'error</translation>
    </message>
    <message>
        <source>poolname</source>
        <translation>poolname</translation>
    </message>
    <message>
        <source>ZFS Filesystems</source>
        <translation>Sistemes de fitxers ZFS</translation>
    </message>
    <message>
        <source>Filesystems</source>
        <translation>Sistemes de fitxers</translation>
    </message>
    <message>
        <source>Status</source>
        <translation>Estat</translation>
    </message>
    <message>
        <source>Refreshing...</source>
        <translation>Refrescant...</translation>
    </message>
    <message>
        <source>No pools available, right click to create a new one...</source>
        <translation>No hi ha pools disponibles, cliqueu amb el botó de la dreta per crear-ne un...</translation>
    </message>
    <message>
        <source> (No media in drive)</source>
        <translation> (No hi ha cap mitjà al dispositiu)</translation>
    </message>
    <message>
        <source>Avaliable</source>
        <translation>Disponible</translation>
    </message>
    <message>
        <source>No disk</source>
        <translation>Cap disc</translation>
    </message>
    <message>
        <source>ZPool: </source>
        <translation>ZPool: </translation>
    </message>
    <message>
        <source>Sliced</source>
        <translation>Llescat</translation>
    </message>
    <message>
        <source>Mounted: </source>
        <translation>Muntat: </translation>
    </message>
    <message>
        <source>Available</source>
        <translation>Disponible</translation>
    </message>
    <message>
        <source>Unmounted</source>
        <translation>Desmuntat</translation>
    </message>
    <message>
        <source>Partitioned</source>
        <translation>Partit</translation>
    </message>
    <message>
        <source>(Exported)
</source>
        <translation>(Exportat)
</translation>
    </message>
    <message>
        <source>(Destroyed)
</source>
        <translation>(Destruït)
</translation>
    </message>
    <message>
        <source>Offline</source>
        <translation>Fora de línia</translation>
    </message>
    <message>
        <source>Online</source>
        <translation>En línia</translation>
    </message>
    <message>
        <source>Degraded</source>
        <translation>Degradat</translation>
    </message>
    <message>
        <source>Faulted</source>
        <translation>Amb fallada</translation>
    </message>
    <message>
        <source>Removed</source>
        <translation>Eliminat</translation>
    </message>
    <message>
        <source>Unavailable</source>
        <translation>No disponible</translation>
    </message>
    <message>
        <source>Unknown</source>
        <translation>Desconegut</translation>
    </message>
    <message>
        <source>Create new pool</source>
        <translation>Crea un pool nou</translation>
    </message>
    <message>
        <source>Rename pool</source>
        <translation>Reanomena el pool</translation>
    </message>
    <message>
        <source>Destroy pool</source>
        <translation>Destrueix el pool</translation>
    </message>
    <message>
        <source>Add devices...</source>
        <translation>Afegeix dispositius...</translation>
    </message>
    <message>
        <source>Add log devices...</source>
        <translation>Afegeix dispositius...</translation>
    </message>
    <message>
        <source>Add cache devices...</source>
        <translation>Afegeix dispositius de cau...</translation>
    </message>
    <message>
        <source>Add spare devices...</source>
        <translation>Afegeix dispositius de recanvi..</translation>
    </message>
    <message>
        <source>Scrub</source>
        <translation>Frega</translation>
    </message>
    <message>
        <source>Export pool</source>
        <translation>Exporta el pool</translation>
    </message>
    <message>
        <source>Import pool</source>
        <translation>Importa el pool</translation>
    </message>
    <message>
        <source>Recover destroyed pool</source>
        <translation>Recupera el pool destruït</translation>
    </message>
    <message>
        <source>Properties...</source>
        <translation>Propietats...</translation>
    </message>
    <message>
        <source>Attach (mirror) device...</source>
        <translation>Adjunta un dispositiu (de rèplica)...</translation>
    </message>
    <message>
        <source>Detach from mirror</source>
        <translation>Separa de la rèplica</translation>
    </message>
    <message>
        <source>Take offline</source>
        <translation>Posa fora de línia</translation>
    </message>
    <message>
        <source>Bring online</source>
        <translation>Posa en línia</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Elimina</translation>
    </message>
    <message>
        <source>zpool Menu</source>
        <translation>Menú zpool</translation>
    </message>
    <message>
        <source>Device Menu</source>
        <translation>Menú del dispositiu</translation>
    </message>
    <message>
        <source>Unmount</source>
        <translation>Desmunta</translation>
    </message>
    <message>
        <source>Mount</source>
        <translation>Munta</translation>
    </message>
    <message>
        <source>Create MBR partition table</source>
        <translation>Crea una taula de particions MBR</translation>
    </message>
    <message>
        <source>Create GPT partition table</source>
        <translation>Crea una taula de particions GPT</translation>
    </message>
    <message>
        <source>Create BSD partition table</source>
        <translation>Crea una taula de particions BSD</translation>
    </message>
    <message>
        <source>Delete Partition Table</source>
        <translation>Suprimeix la taula de particions</translation>
    </message>
    <message>
        <source>Add new slice</source>
        <translation>Afegeix una llesca nova</translation>
    </message>
    <message>
        <source>Add new partition</source>
        <translation>Afegeix una partició nova</translation>
    </message>
    <message>
        <source>Destroy this slice</source>
        <translation>Destrueix aquesta llesca</translation>
    </message>
    <message>
        <source>Destroy this partition</source>
        <translation>Destrueix aquesta partició</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Avís</translation>
    </message>
    <message>
        <source>This operation cannot be undone.
OK to destroy the slice/partition?</source>
        <translation>Aquesta operació no es pot desfer.
D'acord a destruir la llesca / partició?</translation>
    </message>
    <message>
        <source>An error was detected while executing '%1':

</source>
        <translation>S'ha detectat un error mentre s'executava "%1":

</translation>
    </message>
    <message>
        <source>Error report</source>
        <translation>Informe d'error</translation>
    </message>
    <message>
        <source>An error was detected while executing 'zpool':

</source>
        <translation>S'ha detectat un error mentre s'executava "zpool":

</translation>
    </message>
    <message>
        <source>An error was detected while executing 'zfs':

</source>
        <translation>S'ha detectat un error mentre s'executava "zfs":

</translation>
    </message>
    <message>
        <source>Create new zpool</source>
        <translation>Crea un pool nou</translation>
    </message>
    <message>
        <source>Important information</source>
        <translation>Informació important</translation>
    </message>
    <message>
        <source>The pool was imported in read-only mode, therefore attempting to destroy the pool will leave the pool in the state it was when imported, not necessarily destroyed.</source>
        <translation>El pool es va importar en mode de només lectura; per tant, l'intent de destruir-lo el deixarà en l'estat que tenia quan es va importar, no necessàriament destruït.</translation>
    </message>
    <message>
        <source>Attach mirror devices to </source>
        <translation>Adjunta dispositius de rèplica a </translation>
    </message>
    <message>
        <source>The pool was imported in read-only mode, therefore attempting to export the pool will leave the pool in the state it was when imported, not necessarily exported.</source>
        <translation>El pool es va importar en mode de només lectura; per tant, l'intent d'exportar-lo el deixarà en l'estat que tenia quan es va importar, no necessàriament exportat.</translation>
    </message>
    <message>
        <source>Recover destroyed pool as...</source>
        <translation>Recupera el pool destruït com a...</translation>
    </message>
    <message>
        <source>Import pool as...</source>
        <translation>Importa el pool com a...</translation>
    </message>
    <message>
        <source>This pool had been destroyed, and its disks may have been reused. Attempting to recover will destroy any new data that could've been stored in the devices that were reused and cannot be recovered.
Proceed with recovery?</source>
        <translation>Aquest pool havia estat destruït i els seus discos poden haver estat reutilitzats. L'intent de recuperació destruirà qualsevol dada nova que podria haver estat emmagatzemada als dispositius que es van reutilitzar i no es podrà recuperar.
Voleu procedir a la recuperació?</translation>
    </message>
    <message>
        <source>The pool was imported in read-only mode, it cannot be renamed.</source>
        <translation>El pool s'ha importat en mode de només lectura, no se'n pot canviar el nom.</translation>
    </message>
    <message>
        <source>Add more devices to zpool</source>
        <translation>Afegeix més dispositius al zpool</translation>
    </message>
    <message>
        <source>Add log devices to zpool</source>
        <translation>Afegeix dispositius de registre al zpool</translation>
    </message>
    <message>
        <source>Add cache devices to zpool</source>
        <translation>Afegeix dispositius de cau al zpool</translation>
    </message>
    <message>
        <source>Add spare devices to zpool</source>
        <translation>Afegeix dispositius de recanvi al zpool</translation>
    </message>
    <message>
        <source>[Mounted]</source>
        <translation>[Muntat]</translation>
    </message>
    <message>
        <source>[Not Mounted]</source>
        <translation>[Sense muntar]</translation>
    </message>
    <message>
        <source> of </source>
        <translation> de </translation>
    </message>
    <message>
        <source>Rename dataset</source>
        <translation>Reanomena el conjunt de dades</translation>
    </message>
    <message>
        <source>Create new dataset</source>
        <translation>Crea un conjunt de dades nou</translation>
    </message>
    <message>
        <source>Create a clone dataset</source>
        <translation>Crea un conjunt de dades clon</translation>
    </message>
    <message>
        <source>Destroy dataset</source>
        <translation>Destrueix el conjunt de dades</translation>
    </message>
    <message>
        <source>Promote filesystem</source>
        <translation>Promociona el sistema de fitxers</translation>
    </message>
    <message>
        <source>Take a snapshot</source>
        <translation>Fes una instantània</translation>
    </message>
    <message>
        <source>Destroy snapshot</source>
        <translation>Destrueix la instantània</translation>
    </message>
    <message>
        <source>Rollback to this snapshot</source>
        <translation>Torna a aquesta instantània</translation>
    </message>
    <message>
        <source>Edit properties</source>
        <translation>Edita'n les propietats</translation>
    </message>
    <message>
        <source>zfs Menu</source>
        <translation>Menú zfs</translation>
    </message>
    <message>
        <source>This operation cannot be undone and will cause data loss.

You are about to perform the following operation(s):

</source>
        <translation>Aquesta operació no es pot desfer i causarà pèrdua de dades.

Esteu a punt de fer les operacions següents:

</translation>
    </message>
    <message>
        <source>

Are you sure you want to proceed?

</source>
        <translation>

Esteu segur que voleu continuar

</translation>
    </message>
    <message>
        <source>Confirmation</source>
        <translation>Confirmació</translation>
    </message>
    <message>
        <source>Take a new snapshot</source>
        <translation>Fes una instantània nova</translation>
    </message>
    <message>
        <source>New name</source>
        <translation>Nom nou</translation>
    </message>
    <message>
        <source>This operation cannot be undone and will cause all data added after the snapshot to be lost.
Any snapshots created after this one will be deleted, along with any clone filesystems that depend on them.
</source>
        <translation>Aquesta operació no es pot desfer i causarà la pèrdua de totes les dades afegides després de la instantània.
Qualsevol instantània creada després d'aquesta s'eliminarà, juntament amb qualsevol sistema de fitxers clon que en depengui.
</translation>
    </message>
</context>
</TS>
