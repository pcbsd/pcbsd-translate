<?xml version='1.0' encoding='utf-8'?>
<!DOCTYPE TS>
<TS version="2.1" language="fi">
<context>
    <name>DialogFSProp</name>
    <message>
        <source>Dialog</source>
        <translation>Kyselyikkuna</translation>
    </message>
    <message>
        <source>Apply changes recursively to all descendants</source>
        <translation>Toteuta muutokset rekursiivisesti alaspäinkin</translation>
    </message>
    <message>
        <source>Property</source>
        <translation>Ominaisuus</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Arvo</translation>
    </message>
    <message>
        <source>Source</source>
        <translation>Lähde</translation>
    </message>
    <message>
        <source>Add user property</source>
        <translation>Lisää käyttäjän ominaisuus</translation>
    </message>
    <message>
        <source>...</source>
        <translation>…</translation>
    </message>
    <message>
        <source>Remove user property</source>
        <translation>Poista käyttäjän ominaisuus</translation>
    </message>
    <message>
        <source>Inherit from parent</source>
        <translation>Peri emolta</translation>
    </message>
    <message>
        <source>Revert changes</source>
        <translation>Peru muutokset</translation>
    </message>
    <message>
        <source>Controls how ACL entries are inherited when files and directories are created. The values are
discard, noallow, restricted, and passthrough. For a description of these values, see ACL Properties.</source>
        <translation>Määrittää ACL-tietueiden perimisen tiedostoja ja kansioita luotaessa. Arvot ovat
discard, noallow, restricted ja passthrough. Arvojen kuvaukset löytyvät kohdasta ACL-ominaisuudet.</translation>
    </message>
    <message>
        <source>Controls how an ACL entry is modified during a chmod operation.
The values are discard, groupmask, and passthrough. For a description of
these values, see ACL Properties.</source>
        <translation>Määrittää ACL-tietueiden muutokset chmod-toiminnossa.
Arvot ovat discard, groupmask ja passthrough. Arvojen kuvaukset löytyvät kohdasta ACL-ominaisuudet.</translation>
    </message>
    <message>
        <source>Controls whether the access time for files is updated when they are read.
Turning this property off avoids producing write traffic when reading files and
can result in significant performance gains, though it might confuse mailers and
similar utilities.</source>
        <translation>Määrittää, päivitetäänkö tiedostojen saantiajat tiedostoja luettaessa.
Ominaisuuden poistaminen käytöstä vähentää kirjoitusliikennettä tiedostoja luettaessa ja
voi johtaa merkittäviin suorituskykyparannuksiin, mutta se voi hämätä sähköposti-
ja vastaavia ohjelmia.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the amount of disk space available to a dataset
and all its children, assuming no other activity in the pool. Because disk space is
shared within a pool, available space can be limited by various factors including
physical pool size, quotas, reservations, and other datasets within the pool.</source>
        <translation>Vain luku -ominaisuus, joka tunnistaa tietojoukon ja sen lasten käytettävissä olevan
levytilan, olettaen ettei poolissa ole muuta toimintaa. Koska poolin levytila on jaettua,
saatavilla olevaa tilaa jakavat monet tekijät kuten poolin fyysinen koko, tilarajoitukset,
varaukset ja poolin muut tietojoukot.</translation>
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
        <translation>Jos tämä ominaisuus poistetaan käytöstä, tiedostojärjestelmää ei voi irrottaa
ja se ohitetaan ”zfs mount -a” -komennossa. Tämä on samankaltainen tilanne
kuin jos liitospisteen arvoksi asetettaisiin ”none”, paitsi että tietojoukolla on yhä
liitospisteominaisuus tavalliseen tapaan ja sen voi periä.
Ominaisuuden poisto käytöstä mahdollistaa tietojoukon käytön yksinomaan
ominaisuuksien perimystapana. Yksi esimerkki canmount=off -tilanteesta on,
kun kahdella tietojoukolla on sama liitospiste niin, että kummankin lapset
näkyvät samassa kansiossa mutta niillä voi olla eri perityt ominaisuudet.</translation>
    </message>
    <message>
        <source>Controls the checksum used to verify data integrity. The default
value is on, which automatically selects an appropriate algorithm
(currently, fletcher4, but this may change in future releases). The
value off disables integrity checking on user data. Disabling
checksums is NOT a recommended practice.</source>
        <translation>Määrittää tietojen eheyden tarkistuksessa käytetyn tarkistussumman. Oletusarvo
on ’käytössä’, mikä valitsee automaattisesti sopivan algoritmin (nykyisellään
fletcher4:n, mutta tämä voi muuttua myöhemmissä julkaisuissa). Arvo ’ei käytössä’
poistaa käyttäjätietojen eheyden tarkistuksen käytöstä. Tarkistussummien
poistaminen käytöstä EI OLE suositeltavaa.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the compression ratio achieved for a dataset,
expressed as a multiplier. Compression can be enabled by the zfs set compression=on
dataset command. The value is calculated from the logical size of all files and the
amount of referenced physical data. It includes explicit savings through the use of
the compression property.</source>
        <translation>Vain luku -ominaisuus, joka tunnistaa tietojoukossa käytetyn pakkaussuhteen, mikä
ilmaistaan kerrannaisarvona. Pakkauksen voi ottaa käyttöön komennolla ”zfs set
compression=on”. Arvo lasketaan kaikkien tiedostojen loogisesta koosta ja tiedossa
olevasta fyysisestä tilantarpeesta. Siihen sisältyvät eksplisiittiset säästöt pakkausominaisuuden
käyttöönotosta.</translation>
    </message>
    <message>
        <source>Sets the number of copies of user data per file system. These copies
are in addition to any pool-level redundancy. Disk space used by
multiple copies of user data is charged to the corresponding file and
dataset, and counts against quotas and reservations. In addition, the
used property is updated when multiple copies are enabled. Consider setting
this property when the file system is created because changing this property
on an existing file system only affects newly written data.</source>
        <translation>Asettaa tiedostojärjestelmäkohtaisten käyttäjätiedon kopioiden määrän. Nämä
kopiot tulevat poolitason redundanssin lisäksi. Käyttäjätiedon kopioiden useampien
kopioiden levytila tulee vastaavalta tiedostolta ja tietojoukolta ja lasketaan
levykiintöihin ja -varauksiin. Lisäksi käytetty tila päivitetään, kun useampia kopioita
on käytössä. Harkitse tämän ominaisuuden asettamista tiedostojärjestelmää luotaessa,
koska olemassa olevassa tiedostojärjestelmässä sen asettaminen vaikuttaa vain uuteen
tietoon.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the date and time that a dataset was created.</source>
        <translation>Vain luku -ominaisuus, joka tunnistaa tietojoukon luontipäivän ja -ajan.</translation>
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
        <translation>Asettaa tietojoukon deduplikoinnin. Oletusarvo on poissa käytöstä.
Deduplikoinnin oletustarkistussumma on sha256 (mikä voi muuttua
tulevaisuudessa). Kun deduplikointi on käytössä, tässä määritetty
tarkistussumma ohittaa tarkistussummaominaisuuden. verify-arvon
asettamisella on sama vaikutus kuin sha256,verify-arvon asettamisella.
Jos verify asetetaan, ZFS vertailee kahta allekirjoitukseltaan yhtenevää
lohkoa tavu tavulta varmistaakseen, että lohkojen sisällöt ovat samat.</translation>
    </message>
    <message>
        <source>The devices property is currently not supported on FreeBSD.</source>
        <translation>FreeBSD ei toistaiseksi tue devices-ominaisuutta.</translation>
    </message>
    <message>
        <source>Controls whether processes can be executed from within this file
system. The default value is on.</source>
        <translation>Määrittää, suoritetaanko tämän tiedostojärjestelmän ohjelmatiedostoja.
Oletusarvo on käytössä.</translation>
    </message>
    <message>
        <source>Read-only property that indicates whether a file system, clone, or snapshot
is currently mounted.</source>
        <translation>Vain luku -ominaisuus, joka osoittaa, onko tiedostojärjestelmä, kopio tai
tilannekuva liitetty.</translation>
    </message>
    <message>
        <source>Controls the mount point used for this file system. When the mountpoint property
is changed for a file system, the file system and any descendents that inherit the
mount point are unmounted. If the new value is legacy, then they remain unmounted.
Otherwise, they are automatically remounted in the new location if the property was
previously legacy or none, or if they were mounted before the property was changed.
In addition, any shared file systems are unshared and shared in the new location.</source>
        <translation>Määrittää tiedostojärjestelmän käyttämän liitospisteen. Jos liitospistettä muutetaan,
tiedostojärjestelmä mahdollisine liitospisteen perivine perillisineen irrotetaan. Jos
uusi arvo on ”legacy”, ne pysyvät irrotettuina, muussa tapauksessa ne automaattisesti
liitetään uudelleen uuteen paikkaan, jos arvo aiemmin oli ”legacy” tai ”none” tai jos
ne olivat liitettyinä ennen arvon muuttamista. Lisäksi mahdollisten jaettujen
tiedostojärjestelmien jakaminen lopetetaan ja jako käynnistetään uudesta paikasta.</translation>
    </message>
    <message>
        <source>Controls what is cached in the primary cache (ARC). Possible values are all,
none, and metadata. If set to all, both user data and metadata are cached. If
set to none, neither user data nor metadata is cached. If set to metadata, only
metadata is cached.</source>
        <translation>Määrittää, mitä sijoitetaan ensisijaiseen välimuistiin (ARC). Mahdollisia arvoja
ovat ”all”, ”none” ja ”metadata”.  all-arvolla välimuistiin sijoitetaan sekä käyttäjän
että metatiedot, none-arvolla ei kumpiakaan ja metadata-arvolla vai metatiedot.</translation>
    </message>
    <message>
        <source>Read-only property for cloned file systems or volumes that identifies
the snapshot from which the clone was created. The origin cannot be
destroyed (even with the -r or -f option) as long as a clone exists.
Non-cloned file systems have an origin of none.</source>
        <translation>Monistettujen tiedostojärjestelmien tai taltioiden vain luku -ominaisuus,
joka osoittaa, mistä tilannekuvasta kopio on luotu. Alkuperäistä ei voi tuhota
(edes -r- tai -f-valitsimin) niin kauan, kuin kopio on olemassa. Monistamattomien
tiedostojärjestelmien alkuperä on ”none” (ei mitään).</translation>
    </message>
    <message>
        <source>Limits the amount of disk space a dataset and its descendents can consume.
This property enforces a hard limit on the amount of disk space used,
including all space consumed by descendents, such as file systems and snapshots.
Setting a quota on a descendent of a dataset that already has a quota does not
override the ancestor's quota, but rather imposes an additional limit.</source>
        <translation>Rajoittaa tietojoukon ja sen perillisten käyttämän levytilan määrää. Ominaisuus
pakottaa kovan rajoituksen käytetyn levytilan määrälle perillisten (tiedostojärjestelmien
ja tilannekuvien) käyttämä tila mukaan luettuna. Tilakiintiön asettaminen tietojoukon
perilliselle, jolla on jo tilakiintiö, ei ohita jälkimmäisen tilakiintiötä vaan asettaa
ylimääräisen rajoituksen.</translation>
    </message>
    <message>
        <source>Controls whether a dataset can be modified. When set to on,
no modifications can be made.</source>
        <translation type="unfinished"/>
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
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Sets the amount of disk space that a dataset can consume. This property
enforces a hard limit on the amount of space used. This hard limit does
not include disk space used by descendents, such as snapshots and clones.</source>
        <translation type="unfinished"/>
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
        <translation type="unfinished"/>
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
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Controls whether the .zfs directory is hidden or visible in the root of the file system.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Read-only property that identifies the dataset type as filesystem (file system or clone), volume, or snapshot.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Read-only property that identifies the amount of disk space consumed by a dataset and all its descendents.</source>
        <translation type="unfinished"/>
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
        <translation type="unfinished"/>
    </message>
    <message>
        <source>For volumes, specifies the logical size of the volume.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>For volumes, specifies the block size of the volume.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Indicates whether a dataset has been added to a jail.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>This property is not supported on FreeBSD.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>The file system is marked to be destroyed after unmount.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>The compression ratio achieved for the referenced space of this
dataset, expressed as a multiplier.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>The amount of referenced space written to this dataset since the
previous snapshot.</source>
        <translation type="unfinished"/>
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
        <translation type="unfinished"/>
    </message>
    <message>
        <source>User Property</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Unknown property or information not available.
Read ZFS manual for more information.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>[Invalid]</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>[Inherit]</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>[Added]</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>[Changed]</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>User property</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Device Menu</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Add new user property</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Delete user property</source>
        <translation type="unfinished"/>
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
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Device to mount:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>(Device)</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Mount location:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>...</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Select Directory</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>DialogName</name>
    <message>
        <source>Dialog</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Pool name:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Do not mount any filesystems</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Read only pool</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Import options:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Mount with alternative root:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Mount all filesystems automatically</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Mounting behavior:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Force operation if error (use with caution)</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>DialogNewPool</name>
    <message>
        <source>Dialog</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Selected</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Pool name:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Configuration type:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Striped</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Mirror</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Raid-Z (single parity)</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Raid-Z2 (double parity)</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Raid-Z3 (triple parity)</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Cache</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Log</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Spare</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Error Description Here</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Must provide a valid pool name</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Must select exactly %1 devices</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Must select at least one device</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>DialogPartition</name>
    <message>
        <source>Add Partition</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Add new slice/partition</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>100 GB</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Device:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>ada0</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Largest available free block:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Total Size:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Current layout:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Designation</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Start Sector</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Sector Count</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Size</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Color</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>New partition Size:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>bytes</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>kB</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>MB</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>GB</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>TB</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Partition type:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>freebsd-zfs</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>freebsd-ufs</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>freebsd</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>freebsd-boot</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>freebsd-swap</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>bios-boot</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>efi</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Create and initialize a new filesystem</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>** FREE **</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>No free space!</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Align partitions to 1 MB boundary</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>DialogProp</name>
    <message>
        <source>Edit Pool Properties</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Property</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Value</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Total size of the storage pool.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Percentage of pool space used.</source>
        <translation type="unfinished"/>
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
        <translation type="unfinished"/>
    </message>
    <message>
        <source>A unique identifier for the pool.</source>
        <translation type="unfinished"/>
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
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Controls whether a non-privileged user is granted access based on the
dataset permissions defined on the dataset. See zfs(8) for more
information on ZFS delegated administration.</source>
        <translation type="unfinished"/>
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
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Amount of storage space within the pool that has been physically allocated.</source>
        <translation type="unfinished"/>
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
        <translation type="unfinished"/>
    </message>
    <message>
        <source>This property has currently no value on FreeBSD.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>DialogfsCreate</name>
    <message>
        <source>New Filesystem</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Name:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Properties override at creation time:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Prevent auto mount (canmount=noauto)</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Mountpoint</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>none</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>legacy</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>[path]</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Force UTF-8 only (utf8only=on)</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Unicode normalization =</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>formD</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>formKCF</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Copies =</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Deduplication (dedup=on)</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Compression =</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>off</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>on</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>lzjb</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>zle</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>gzip</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>gzip-1</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>gzip-2</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>gzip-3</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>gzip-4</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>gzip-5</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>gzip-6</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>gzip-7</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>gzip-8</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>gzip-9</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>lz4</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>ZManagerWindow</name>
    <message>
        <source>PCBSD Disk Manager</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Disks</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Device</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>State</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>ZFS Pools</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Pool Name</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Status:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>TextLabel</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Clear Error</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>poolname</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>ZFS Filesystems</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Filesystems</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Status</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Refreshing...</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>No pools available, right click to create a new one...</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source> (No media in drive)</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Avaliable</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>No disk</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>ZPool: </source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Sliced</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Mounted: </source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Available</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Unmounted</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Partitioned</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>(Exported)
</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>(Destroyed)
</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Offline</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Online</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Degraded</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Faulted</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Removed</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Unavailable</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Unknown</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Create new pool</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Rename pool</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Destroy pool</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Add devices...</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Add log devices...</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Add cache devices...</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Add spare devices...</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Scrub</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Export pool</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Import pool</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Recover destroyed pool</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Properties...</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Attach (mirror) device...</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Detach from mirror</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Take offline</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Bring online</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Remove</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>zpool Menu</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Device Menu</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Unmount</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Mount</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Create MBR partition table</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Create GPT partition table</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Create BSD partition table</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Delete Partition Table</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Add new slice</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Add new partition</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Destroy this slice</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Destroy this partition</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Warning</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>This operation cannot be undone.
OK to destroy the slice/partition?</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>An error was detected while executing '%1':

</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Error report</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>An error was detected while executing 'zpool':

</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>An error was detected while executing 'zfs':

</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Create new zpool</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Important information</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>The pool was imported in read-only mode, therefore attempting to destroy the pool will leave the pool in the state it was when imported, not necessarily destroyed.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Attach mirror devices to </source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>The pool was imported in read-only mode, therefore attempting to export the pool will leave the pool in the state it was when imported, not necessarily exported.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Recover destroyed pool as...</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Import pool as...</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>This pool had been destroyed, and its disks may have been reused. Attempting to recover will destroy any new data that could've been stored in the devices that were reused and cannot be recovered.
Proceed with recovery?</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>The pool was imported in read-only mode, it cannot be renamed.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Add more devices to zpool</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Add log devices to zpool</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Add cache devices to zpool</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Add spare devices to zpool</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>[Mounted]</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>[Not Mounted]</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source> of </source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Rename dataset</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Create new dataset</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Create a clone dataset</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Destroy dataset</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Promote filesystem</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Take a snapshot</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Destroy snapshot</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Rollback to this snapshot</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Edit properties</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>zfs Menu</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>This operation cannot be undone and will cause data loss.

You are about to perform the following operation(s):

</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>

Are you sure you want to proceed?

</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Confirmation</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Take a new snapshot</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>New name</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>This operation cannot be undone and will cause all data added after the snapshot to be lost.
Any snapshots created after this one will be deleted, along with any clone filesystems that depend on them.
</source>
        <translation type="unfinished"/>
    </message>
</context>
</TS>
