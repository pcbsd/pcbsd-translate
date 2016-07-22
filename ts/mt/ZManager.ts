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
        <translation type="unfinished">Applika tibdiliet recursively lid-dixxendenti kollha</translation>
    </message>
    <message>
        <source>Property</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Source</source>
        <translation type="unfinished">Source</translation>
    </message>
    <message>
        <source>Add user property</source>
        <translation type="unfinished">Żid proprjetà utent</translation>
    </message>
    <message>
        <source>...</source>
        <translation type="unfinished">...</translation>
    </message>
    <message>
        <source>Remove user property</source>
        <translation type="unfinished">Neħħi proprjetà utent</translation>
    </message>
    <message>
        <source>Inherit from parent</source>
        <translation type="unfinished">Jiret minn ġenitur</translation>
    </message>
    <message>
        <source>Revert changes</source>
        <translation type="unfinished">Jerġa &apos;bidliet</translation>
    </message>
    <message>
        <source>Controls how ACL entries are inherited when files and directories are created. The values are
discard, noallow, restricted, and passthrough. For a description of these values, see ACL Properties.</source>
        <translation type="unfinished">Kontrolli kif daħliet ACL jintirtu meta Files u direttorji huma maħluqa. Il-valuri huma
jarmi, noallow, illimita u passthrough. Għal deskrizzjoni ta &apos;dawn il-valuri, ara Properties ACL.</translation>
    </message>
    <message>
        <source>Controls how an ACL entry is modified during a chmod operation.
The values are discard, groupmask, and passthrough. For a description of
these values, see ACL Properties.</source>
        <translation type="unfinished">Kontrolli kif daħla ACL huwa modifikati matul operazzjoni chmod.
Il-valuri huma rimi, groupmask, u passthrough. Għal deskrizzjoni ta
dawn il-valuri, ara Properties ACL.</translation>
    </message>
    <message>
        <source>Controls whether the access time for files is updated when they are read.
Turning this property off avoids producing write traffic when reading files and
can result in significant performance gains, though it might confuse mailers and
similar utilities.</source>
        <translation type="unfinished">Kontrolli dwar jekk il-ħin ta &apos;aċċess għall-fajls aġġornati meta jinqraw.
Tidwir din il-proprjetà off jevita li jipproduċu traffiku write meta taqra fajls u
tista &apos;tirriżulta fi qligħ sinifikanti prestazzjoni, għalkemm din tista&apos; jikkonfondi dawk li jibagħtu u
utilitajiet simili.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the amount of disk space available to a dataset
and all its children, assuming no other activity in the pool. Because disk space is
shared within a pool, available space can be limited by various factors including
physical pool size, quotas, reservations, and other datasets within the pool.</source>
        <translation type="unfinished">Read-only proprjetà li jidentifika l-ammont ta &apos;spazju disk disponibbli għal dataset
u t-tfal kollha tagħha, jekk wieħed jassumi l-ebda attività oħra fil-pool. Minħabba l-ispazju disk
maqsuma fi pool, l-ispazju disponibbli tistax tiġi limitata minn diversi fatturi fosthom
daqs fiżiku pool, kwoti, riżervi, u settijiet ta &apos;dejta oħra fil-pool.</translation>
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
        <translation type="unfinished">Jekk din il-proprjetà huwa stabbilit li off, il-fajl sistema ma jista &apos;jiġi mmuntat,
u huwa injorat mill &quot;ZFS impunjazzjoni-a&quot;. Twaqqif din il-proprjetà għall-off huwa
simili għall-iffissar tal-proprjetà mountpoint li xejn, ħlief li l-
dataset għad għandu 
proprjetà mountpoint normali, li jista &apos;jkun wiret Twaqqif din il-proprjetà għall-off tippermetti datasets se jintuża biss bħala
mekkaniżmu biex jirtu proprjetajiet. Eżempju wieħed ta &apos;twaqqif canmount = off huwa  n li jkollha żewġ datasets bl-istess mountpoint, sabiex it-tfal ta
kemm datasets jidhru fl-istess direttorju, iżda jista &apos;jkollhom differenti 
wiret karatteristiċi.</translation>
    </message>
    <message>
        <source>Controls the checksum used to verify data integrity. The default
value is on, which automatically selects an appropriate algorithm
(currently, fletcher4, but this may change in future releases). The
value off disables integrity checking on user data. Disabling
checksums is NOT a recommended practice.</source>
        <translation type="unfinished">Jikkontrolla l-checksum użat biex jivverifika l-integrità tad-data. Il default
valur huwa fuq, li awtomatikament jagħżel algoritmu  n xieraq (bħalissa, fletcher4, iżda dan jista &apos;jinbidel fil rilaxxi futuri). Il-
valur off tiddiżattiva integrità verifika fuq utent tad-data. Skonnettjar
checksums MHIX prattika rakkomandata.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the compression ratio achieved for a dataset,
expressed as a multiplier. Compression can be enabled by the zfs set compression=on
dataset command. The value is calculated from the logical size of all files and the
amount of referenced physical data. It includes explicit savings through the use of
the compression property.</source>
        <translation type="unfinished">Read-only proprjetà li jidentifika l-proporzjon tal-kompressjoni miksub għal dataset,
espress bħala multiplikatur. Compression jistgħu jkunu ffaċilitati mill-kompressjoni sett ZFS = fuq
kmand dataset. Il-valur jiġi kkalkolat mid-daqs loġika tal-fajls kollha u l-
ammont ta &apos;data fiżika referenza. Dan jinkludi ffrankar espliċiti permezz tal-użu ta&apos;
l-proprjetà kompressjoni.</translation>
    </message>
    <message>
        <source>Sets the number of copies of user data per file system. These copies
are in addition to any pool-level redundancy. Disk space used by
multiple copies of user data is charged to the corresponding file and
dataset, and counts against quotas and reservations. In addition, the
used property is updated when multiple copies are enabled. Consider setting
this property when the file system is created because changing this property
on an existing file system only affects newly written data.</source>
        <translation type="unfinished">Jistabbilixxi l-għadd ta &apos;kopji ta&apos; utent tad-data għal kull sistema fajl. Dawn il-kopji
huma b&apos;żieda għal kwalunkwe redundancy-livell pool. Ispazju Disk użati minn
kopji multipli ta &apos;utent tad-data hija imposta għall-fajl u
korrispondenti dataset, u l-għadd kontra kwoti u riżervi. Barra minn hekk, il-
proprjetà użati hija aġġornata meta l-kopji multipli huma ppermettiet. Jikkunsidraw li jistabbilixxu 
din il-proprjetà meta l-fajl sistema hija maħluqa minħabba tinbidel din il-proprjetà 
fuq file sistema eżistenti taffettwa biss data li għadhom kif ġew miktuba.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the date and time that a dataset was created.</source>
        <translation type="unfinished">Read-only proprjetà li tidentifika d-data u l-ħin li dataset ġiet maħluqa.</translation>
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
        <translation type="unfinished">Configures deduplication għal dataset. Il-valur ta &apos;default off.
Il-checksum deduplication default sha256 (dan jista &apos;jinbidel fil-
futur). Meta dedup hija ppermettiet, il-checksum definit hawn tipprevali
l-proprjetà checksum. Twaqqif tal-valur li jivverifika għandha l-istess
effett bħall-sha256 setting, tivverifika.
Jekk stabbiliti biex tivverifika, ZFS se jagħmlu comparsion byte-to-byte fil-każ ta
żewġ blokki li jkollhom l-istess firma biex tiżgura l-kontenut blokk
huma identiċi.</translation>
    </message>
    <message>
        <source>The devices property is currently not supported on FreeBSD.</source>
        <translation type="unfinished">L-apparati proprjetà bħalissa mhijiex sostnuta fuq FreeBSD.</translation>
    </message>
    <message>
        <source>Controls whether processes can be executed from within this file
system. The default value is on.</source>
        <translation type="unfinished">Kontrolli dwar jekk il-proċessi jistgħu jiġu esegwiti minn ġewwa dan il-fajl
sistema. Il-valur ta &apos;default fuq.</translation>
    </message>
    <message>
        <source>Read-only property that indicates whether a file system, clone, or snapshot
is currently mounted.</source>
        <translation type="unfinished">Read-only proprjetà li jindika jekk sistema file, il-klonu, jew snapshot
bħalissa mmuntat.</translation>
    </message>
    <message>
        <source>Controls the mount point used for this file system. When the mountpoint property
is changed for a file system, the file system and any descendents that inherit the
mount point are unmounted. If the new value is legacy, then they remain unmounted.
Otherwise, they are automatically remounted in the new location if the property was
previously legacy or none, or if they were mounted before the property was changed.
In addition, any shared file systems are unshared and shared in the new location.</source>
        <translation type="unfinished">Tikkontrolla l-punt muntatura użata għal dan il-fajl sistema. Meta l-proprjetà mountpoint
tinbidel għal sistema file, il-fajl sistema u kwalunkwe dixxendenti li jirtu l-
punt impunjazzjoni huma mhux immuntati. Jekk il-valur il-ġdid huwa wirt, allura dawn jibqgħu mhux immuntati.
Inkella, huma awtomatikament remounted fil-lokalità l-ġdida jekk il-proprjetà kienet
qabel legat jew xejn, jew jekk dawn kienu immuntati qabel l-proprjetà kienet inbidlet.
Barra minn hekk, xi sistemi fajl maqsuma huma unshared u maqsuma fil-post ġdid.</translation>
    </message>
    <message>
        <source>Controls what is cached in the primary cache (ARC). Possible values are all,
none, and metadata. If set to all, both user data and metadata are cached. If
set to none, neither user data nor metadata is cached. If set to metadata, only
metadata is cached.</source>
        <translation type="unfinished">Kontrolli dak li huwa Cached fil-cache primarja (ARC). Valuri possibbli huma kollha,
xejn, u metadata. Jekk stabbiliti għal kulħadd, kemm utent data u metadata huma Cached. Jekk
stabbiliti li xejn, la l-utent tad-data u lanqas metadata hija Cached. Jekk sett ta &apos;metadata, biss
metadata hija Cached.</translation>
    </message>
    <message>
        <source>Read-only property for cloned file systems or volumes that identifies
the snapshot from which the clone was created. The origin cannot be
destroyed (even with the -r or -f option) as long as a clone exists.
Non-cloned file systems have an origin of none.</source>
        <translation type="unfinished">Aqra biss il-proprjetà għall-fajl sistemi kklownjati jew volumi li tidentifika 
l-istampa li minnha l-klonu ġiet maħluqa. L-oriġini ma tistax tiġi
meqruda (anke mal-r jew f għażla) sakemm tkun ta &apos;klonu.
Sistemi fajl mhux kklonati jkollhom oriġini ta &apos;xejn.</translation>
    </message>
    <message>
        <source>Limits the amount of disk space a dataset and its descendents can consume.
This property enforces a hard limit on the amount of disk space used,
including all space consumed by descendents, such as file systems and snapshots.
Setting a quota on a descendent of a dataset that already has a quota does not
override the ancestor&apos;s quota, but rather imposes an additional limit.</source>
        <translation type="unfinished">Jillimita l-ammont ta &apos;spazju disk dataset u d-dixxendenti tiegħu jistgħu jikkunsmaw.
Din il-proprjetà jinforza limitu iebes fuq l-ammont ta &apos;spazju disk użati,
inkluż l-ispazju kollha kkunsmata mill-dixxendenti, bħal sistemi fajl u Snapshots.
Iffissar ta &apos;kwota fuq dixxendenti ta&apos; dataset li diġà għandha kwota ma
jwarrab kwota l-antenat tal-, iżda jimponi limitu addizzjonali.</translation>
    </message>
    <message>
        <source>Controls whether a dataset can be modified. When set to on,
no modifications can be made.</source>
        <translation type="unfinished">Kontrolli jekk dataset jistgħu jiġu modifikati. Meta stabbiliti biex fuq,
ebda modifiki jistgħu jsiru.</translation>
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
        <translation type="unfinished">Tispeċifika daqs blokk suġġeriti għallFiles fil-fajl sistema. Dan
proprjetà hija mfassla biss għall-użu ma &apos;xogħolhom database li
Files ta &apos;aċċess fis records daqs fiss. ZFS awtomatikament tunes blokk
daqsijiet skond algoritmi interni ottimizzati għall-aċċess tipiku
mudelli.
Użu ta &apos;din il-proprjetà għall-fajl sistemi għan ġenerali huwa  bil-qawwa n skoraġġuti, u tista &apos;taffettwa ħażin l-prestazzjoni.
Id-daqs speċifikat irid ikun qawwa ta &apos;żewġ ikbar minn jew ugwali għal
512 u anqas minn jew ugwali għal 128 Kbytes.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the amount of data accessible by a
dataset, which might or might not be shared with other datasets in the
pool.</source>
        <translation type="unfinished">Read-only proprjetà li jidentifika l-ammont ta &apos;data aċċessibbli minn
dataset, li jistgħu jew li ma jista &apos;tinqasam ma&apos; settijiet ta &apos;dejta oħra fil-
pool.</translation>
    </message>
    <message>
        <source>Sets the amount of disk space that a dataset can consume. This property
enforces a hard limit on the amount of space used. This hard limit does
not include disk space used by descendents, such as snapshots and clones.</source>
        <translation type="unfinished">Jistabbilixxi l-ammont ta &apos;spazju disk li dataset jistgħu jikkunsmaw. Din il-proprjetà
jinforza limitu iebes fuq l-ammont ta &apos;spazju użat. Dan il-limitu hard ma
ma jinkludux l-ispazju disk użati mill-dixxendenti, bħal Snapshots u l-kloni.</translation>
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
        <translation type="unfinished">L-ammont minimu ta &apos;spazju disk li jkun garantit li dataset, ma  n inklużi d-dixxendenti, bħal Snapshots u l-kloni. Meta l-ammont ta &apos;disk
ispazju użat huwa taħt dan il-valur, il-dataset hija ttrattata bħallikieku kienu qed jieħdu up
l-ammont ta &apos;spazju speċifikat mill refreservation. Ir-riżerva refreservation
hu meqjus fl-ispazju tal-ġenitur dataset tal disk użati, u għadd kontra
kwoti tal-ġenitur dataset tal u riservazzjonijiet.
Jekk refreservation huwa stabbilit, stampa hija permessa biss jekk biżżejjed pool spazju ħieles
huwa disponibbli barra ta &apos;din ir-riżerva biex takkomoda n-numru attwali ta&apos;
bytes referenzjati fil-dataset.</translation>
    </message>
    <message>
        <source>Sets the minimum amount of disk space guaranteed to a dataset and its descendents.
When the amount of disk space used is below this value, the dataset is treated as if
it were using the amount of space specified by its reservation. Reservations are
accounted for in the parent dataset&apos;s disk space used, and count against the parent
dataset&apos;s quotas and reservations.</source>
        <translation type="unfinished">L-ammont minimu ta &apos;spazju disk garantit li dataset u d-dixxendenti tiegħu.
Meta l-ammont ta &apos;spazju disk użata hija inqas minn dan il-valur, il-dataset huwa ttrattat bħallikieku
dan kienu qed jużaw l-ammont ta &apos;spazju speċifikat b&apos;din ir-riżerva. Riservi huma
ammontaw għal fl-ispazju disk-ġenitur dataset tal użata, u jgħodd kontra l-ġenitur
kwoti u riżervi dataset tal.</translation>
    </message>
    <message>
        <source>Controls what is cached in the secondary cache (L2ARC). Possible values are all, none,
and metadata. If set to all, both user data and metadata are cached. If set to none,
neither user data nor metadata is cached. If set to metadata, only metadata is cached.</source>
        <translation type="unfinished">Kontrolli dak li huwa Cached fil-cache sekondarja (L2ARC). Valuri possibbli huma kollha, xejn,
u metadata. Jekk stabbiliti għal kulħadd, kemm utent data u metadata huma Cached. Jekk stabbilit li xejn,
la utent tad-data u lanqas metadata hija Cached. Jekk sett ta &apos;metadata, biss metadata hija Cached.</translation>
    </message>
    <message>
        <source>Controls whether the setuid bit is honored in a file system.</source>
        <translation type="unfinished">Kontrolli dwar jekk il-bit setuid jiġi onorat fil-fajl sistema.</translation>
    </message>
    <message>
        <source>Controls whether a file system is available over NFS and what
options are used. If set to on, the zfs share command is invoked
with no options. Otherwise, the zfs share command is invoked with
options equivalent to the contents of this property.</source>
        <translation type="unfinished">Kontrolli dwar jekk sistema fajl huwa disponibbli fuq NFS u dak
huma użati għażliet. Jekk stabbiliti biex fuq, il-kmand sehem ZFS tkun invokata
bl-ebda għażliet. Inkella, il-kmand sehem ZFS huwa invokat bi
għażliet ekwivalenti għall-kontenut ta &apos;din il-proprjetà.</translation>
    </message>
    <message>
        <source>The sharesmb property has currently no effect on FreeBSD.</source>
        <translation type="unfinished">Il-proprjetà sharesmb bħalissa għandha l-ebda effett fuq FreeBSD.</translation>
    </message>
    <message>
        <source>Controls whether the .zfs directory is hidden or visible in the root of the file system.</source>
        <translation type="unfinished">Kontrolli dwar jekk il-. Direttorju ZFS hija moħbija jew viżibbli fil-għerq tal-fajl sistema.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the dataset type as filesystem (file system or clone), volume, or snapshot.</source>
        <translation type="unfinished">Read-only proprjetà li tidentifika t-tip dataset bħala filesystem (sistema fajl jew klonu), il-volum, jew snapshot.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the amount of disk space consumed by a dataset and all its descendents.</source>
        <translation type="unfinished">Read-only proprjetà li jidentifika l-ammont ta &apos;spazju disk ikkonsmata minn dataset u d-dixxendenti kollha tiegħu.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the amount of disk space that is used by
children of this dataset, which would be freed if all the dataset&apos;s children
were destroyed.</source>
        <translation type="unfinished">Read-only proprjetà li jidentifika l-ammont ta &apos;spazju disk li jintuża mill-
tfal ta &apos;din dataset, li jkunu meħlusa jekk it-tfal kollha tal-dataset tal
ġew meqruda.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the amount of disk space that is used by
a dataset itself, which would be freed if the dataset was destroyed, after
first destroying any snapshots and removing any refreservation reservations.</source>
        <translation type="unfinished">Read-only proprjetà li jidentifika l-ammont ta &apos;spazju disk li jintuża mill-
dataset innifsu, li jinħelsu jekk il-dataset ġiet distrutta, wara
ewwel jeqirdu xi Snapshots u jitneħħew xi riżervi refreservation.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the amount of disk space that is used by a
refreservation set on a dataset, which would be freed if the refreservation was
removed.</source>
        <translation type="unfinished">Read-only proprjetà li jidentifika l-ammont ta &apos;spazju disk li jintuża minn 
refreservation stabbiliti fuq dataset, li jinħelsu jekk il refreservation ġie 
jitneħħew.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the amount of disk space that is consumed
by snapshots of a dataset. In particular, it is the amount of disk space that
would be freed if all of this dataset&apos;s snapshots were destroyed. Note that
this value is not simply the sum of the snapshots&apos; used properties, because
space can be shared by multiple snapshots.</source>
        <translation type="unfinished">Read-only proprjetà li jidentifika l-ammont ta &apos;spazju disk li jkun ikkunsmat
billi Snapshots ta &apos;dataset. B&apos;mod partikolari, huwa l-ammont ta &apos;spazju disk li
tkun meħlusa jekk il Snapshots f&apos;dan id-dataset kienu meqruda. Innota li
dan il-valur mhuwiex biss is-somma ta &apos;jintuża proprjetajiet l-Snapshots &quot;, għaliex
ispazju jistgħu jiġu maqsuma mill Snapshots multipli.</translation>
    </message>
    <message>
        <source>Identifies the on-disk version of a file system, which is independent of the
pool version. This property can only be set to a later version that is available
from the supported software release.</source>
        <translation type="unfinished">Jidentifika l-verżjoni fuq disk ta &apos;sistema file, li huwa indipendenti mill-
verżjoni pool. Din il-proprjetà tista &apos;tiġi stabbilita biss għal verżjoni aktar tard li hija disponibbli
mir-rilaxx software appoġġjati.</translation>
    </message>
    <message>
        <source>For volumes, specifies the logical size of the volume.</source>
        <translation type="unfinished">Għal volumi, jispeċifika d-daqs loġika tal-volum.</translation>
    </message>
    <message>
        <source>For volumes, specifies the block size of the volume.</source>
        <translation type="unfinished">Għal volumi, jispeċifika d-daqs blokka tal-volum.</translation>
    </message>
    <message>
        <source>Indicates whether a dataset has been added to a jail.</source>
        <translation type="unfinished">Tindika jekk dataset ġie miżjud għal jail.</translation>
    </message>
    <message>
        <source>This property is not supported on FreeBSD.</source>
        <translation type="unfinished">Din il-proprjetà ma hija sostnuta fuq FreeBSD.</translation>
    </message>
    <message>
        <source>The file system is marked to be destroyed after unmount.</source>
        <translation type="unfinished">Is-sistema fajl huwa mmarkat tkun meqruda wara unmount.</translation>
    </message>
    <message>
        <source>The compression ratio achieved for the referenced space of this
dataset, expressed as a multiplier.</source>
        <translation type="unfinished">Il-proporzjon tal-kompressjoni miksuba għall-ispazju referenza ta &apos;dan
dataset, espress bħala multiplikatur.</translation>
    </message>
    <message>
        <source>The amount of referenced space written to this dataset since the
previous snapshot.</source>
        <translation type="unfinished">L-ammont ta &apos;spazju referenza bil-miktub għal dan dataset peress li l-
snapshot preċedenti.</translation>
    </message>
    <message>
        <source>This property is set to the number of user holds on this snapshot.
</source>
        <translation type="unfinished">Din il-proprjetà huwa stabbilit li n-numru ta &apos;utent passiġġieri fuq din l-istampa.
</translation>
    </message>
    <message>
        <source>Provide a hint to ZFS about handling of synchronous requests in this
dataset.  If logbias is set to latency (the default), ZFS will use
pool log devices (if configured) to handle the requests at low
latency. If logbias is set to throughput, ZFS will not use configured
pool log devices.  ZFS will instead optimize synchronous operations
for global pool throughput and efficient use of resources.</source>
        <translation type="unfinished">Ipprovdi ħjiel biex ZFS dwar immaniġġjar ta &apos;talbiet sinkroniċi f&apos;dan
dataset. Jekk logbias huwa stabbilit li latency (default), ZFS se jużaw
mezzi log pool (jekk konfigurati) biex jimmaniġġaw it-talbiet fil-baxx
latency. Jekk logbias huwa stabbilit li throughput, ZFS mhux ser tuża konfigurat
mezzi log pool. ZFS minflok se jottimizzaw operazzjonijiet sinkroniċi
għal throughput pool globali u l-użu effiċjenti tar-riżorsi.</translation>
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
        <translation type="unfinished">Controls the behavior of synchronous requests (e.g. fsync(2),
O_DSYNC). This property accepts the following values:
Jikkontrolla l-imġiba ta &apos;talbiet sinkroniku (eż. fsync (2),
O_DSYNC). Din il-proprjetà taċċetta l-valuri li ġejjin:
standard Din hija l-POSIX speċifikat imġieba li tiżgura kollha
talbiet sinkroniċi huma miktuba għall-ħażna stabbli u
apparati kollha huma mlaħalħa biex jiżguraw data mhix Cached minn
kontrolluri apparat (dan huwa l-default).
dejjem tranżazzjonijiet kollha fajl sistema huma miktuba u mlaħalħa
qabel sejħiet sistema tagħhom ritorn. Dan għandu  n kbir penali prestazzjoni.
b&apos;diżabilità Tiddiżattiva talbiet sinkroniku. Tranżazzjonijiet ta &apos;sistema fajl
huma impenjati biss għall-ħażna stabbli perjodikament. Dan
għażla tagħti l-ogħla rendiment. Madankollu,
hija perikoluża ħafna bħala ZFS ikun jinjora l-synchro-
talbiet tranżazzjoni nous ta &apos;applikazzjonijiet bħal- n databażijiet jew NFS. Amministraturi għandhom jużaw biss dan
għażla meta r-riskji huma mifhuma.</translation>
    </message>
    <message>
        <source>This property cannot be changed after the system is created.</source>
        <translation type="unfinished">Din il-proprjetà ma tistax tinbidel wara s-sistema hija maħluqa.</translation>
    </message>
    <message>
        <source>User Property</source>
        <translation type="unfinished">Proprjetà Utent</translation>
    </message>
    <message>
        <source>Unknown property or information not available.
Read ZFS manual for more information.</source>
        <translation type="unfinished">Proprjetà mhux magħruf jew informazzjoni li mhix disponibbli.
Aqra manwali ZFS għal aktar informazzjoni.</translation>
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
        <translation type="unfinished">Żid proprjetà ġodda utent</translation>
    </message>
    <message>
        <source>Delete user property</source>
        <translation type="unfinished">Ħassar proprjetà utent</translation>
    </message>
    <message>
        <source>Enables or disables compression for a dataset. The values are on, off, lz4, lzjb, zle, 
gzip and gzip-N. Currently, setting this property to lz4, lzjb, gzip, or gzip-N has the same
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
        <translation type="unfinished">Direttorju tagħżel</translation>
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
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Do not mount any filesystems</source>
        <translation type="unfinished">M&apos;għandekx impunjazzjoni xi filesystems</translation>
    </message>
    <message>
        <source>Read only pool</source>
        <translation type="unfinished">Aqra biss pool</translation>
    </message>
    <message>
        <source>Import options:</source>
        <translation type="unfinished">Import options:</translation>
    </message>
    <message>
        <source>Mount with alternative root:</source>
        <translation type="unfinished">Impunjazzjoni ma &apos;għerq alternattivi:</translation>
    </message>
    <message>
        <source>Mount all filesystems automatically</source>
        <translation type="unfinished">Immonta filesystems kollha awtomatikament</translation>
    </message>
    <message>
        <source>Mounting behavior:</source>
        <translation type="unfinished">Imġieba immuntar:</translation>
    </message>
    <message>
        <source>Force operation if error (use with caution)</source>
        <translation type="unfinished">Operazzjoni seħħ jekk ikun hemm żball (użu b&apos;kawtela)</translation>
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
        <translation type="unfinished">Magħżula</translation>
    </message>
    <message>
        <source>Pool name:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Configuration type:</source>
        <translation type="unfinished">Tip Konfigurazzjoni:</translation>
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
        <translation type="unfinished">Error Deskrizzjoni Here</translation>
    </message>
    <message>
        <source>Must provide a valid pool name</source>
        <translation type="unfinished">Jridu jipprovdu l-isem pool validu</translation>
    </message>
    <message>
        <source>Must select exactly %1 devices</source>
        <translation type="unfinished">Jrid jagħżel eżattament %1 apparati</translation>
    </message>
    <message>
        <source>Must select at least one device</source>
        <translation type="unfinished">Irid jagħżel mezz inqas wieħed</translation>
    </message>
</context>
<context>
    <name>DialogPartition</name>
    <message>
        <source>Add Partition</source>
        <translation type="unfinished">żid Partition</translation>
    </message>
    <message>
        <source>Add new slice/partition</source>
        <translation type="unfinished">Żid porzjon ġdid/partition</translation>
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
        <translation type="unfinished">Akbar blokk b&apos;xejn disponibbli:</translation>
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
        <translation type="unfinished">freebsd-zfs  </translation>
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
        <translation type="unfinished">Oħloq u initialize a filesystem ġdida</translation>
    </message>
    <message>
        <source>** FREE **</source>
        <translation type="unfinished">** FREE **</translation>
    </message>
    <message>
        <source>No free space!</source>
        <translation type="unfinished">Nru spazju ħieles!</translation>
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
        <translation type="unfinished">editja Pool Properties</translation>
    </message>
    <message>
        <source>Property</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Total size of the storage pool.</source>
        <translation type="unfinished">Daqs totali tas-pool ħażna.</translation>
    </message>
    <message>
        <source>Percentage of pool space used.</source>
        <translation type="unfinished">Perċentwali ta &apos;spazju pool użata.</translation>
    </message>
    <message>
        <source>Alternate root directory. If set, this directory is prepended to any
mount points within the pool. This can be used when examining an
unknown pool where the mount points cannot be trusted, or in an
alternate boot environment, where the typical paths are not valid.
altroot is not a persistent property. It is valid only while the
system is up.  Setting altroot defaults to using cachefile=none, though
this may be overridden using an explicit setting.</source>
        <translation type="unfinished">Direttorju root alternattiv. Jekk stabbiliti, dan id-direttorju huwa prepended lil xi
impunjazzjoni punti fil-pool. Dan jista &apos;jintuża meta jeżaminaw
mhux magħruf pool fejn il-postijiet muntatura ma jistgħux jiġu fdati, jew fi
ambjent boot supplenti, fejn il-mogħdijiet tipiċi mhumiex validi.
altroot mhijiex proprjetà persistenti. Huwa validu biss waqt li l-
sistema hija up. Twaqqif altroot nuqqasijiet li jużaw cachefile = xejn, għalkemm
din tista &apos;tkun surpassata użu f&apos;ambjent espliċita.</translation>
    </message>
    <message>
        <source>The current health of the pool.</source>
        <translation type="unfinished">Is-saħħa attwali tal-pool.</translation>
    </message>
    <message>
        <source>A unique identifier for the pool.</source>
        <translation type="unfinished">Identifikatur uniku għall-pool.</translation>
    </message>
    <message>
        <source>The current on-disk version of the pool. This can be increased, but
never decreased. The preferred method of updating pools is with the
&quot;zpool upgrade&quot; command, though this property can be used when a
specific version is needed for backwards compatibility. This property
can be any number between 1 and the current version reported by
&quot;zpool upgrade -v&quot;.</source>
        <translation type="unfinished">Il-kurrent verżjoni fuq disk tal-pool. Dan jista &apos;jiżdied, imma
qatt ma naqas. Il-metodu preferut ta &apos;aġġornament pools huwa ma&apos; l-
&quot;zpool upgrade&quot; kmand, għalkemm din il-proprjetà tista &apos;tintuża meta
verżjoni speċifika hija meħtieġa għall-kompatibilità b&apos;lura. Din il-proprjetà
jista &apos;jkun kull numru bejn 1 u l-verżjoni attwali rrapportata mill
&quot;zpool-upgrade v&quot;.</translation>
    </message>
    <message>
        <source>Identifies the default bootable dataset for the root pool. This
property is expected to be set mainly by the installation and upgrade
programs.</source>
        <translation type="unfinished">Jidentifika l-default dataset bootable għall-pool għerq. Dan
proprjetà hija mistennija li tiġi stabbilita prinċipalment mill-installazzjoni u jaġġornaw
programmi.</translation>
    </message>
    <message>
        <source>Controls whether a non-privileged user is granted access based on the
dataset permissions defined on the dataset. See zfs(8) for more
information on ZFS delegated administration.</source>
        <translation type="unfinished">Kontrolli dwar jekk l-utent mhux privileġġjata jingħata aċċess ibbażat fuq l-
permessi settijiet tad-data definit fuq il-dataset. Ara ZFS(8) għal aktar
informazzjoni dwar ZFS delegata amministrazzjoni.</translation>
    </message>
    <message>
        <source>Controls automatic device replacement. If set to &quot;off&quot;, device
replacement must be initiated by the administrator by using the
&quot;zpool replace&quot; command. If set to &quot;on&quot;, any new device, found in the
same physical location as a device that previously belonged to the
pool, is automatically formatted and replaced. The default behavior
is &quot;off&quot;.  This property can also be referred to by its shortened
column name, &quot;replace&quot;.</source>
        <translation type="unfinished">Kontrolli sostituzzjoni awtomatiku. Jekk ssettjat għal &quot;mitfi&quot;, apparat
sostituzzjoni għandha tinbeda mill-amministratur billi tuża l-
&quot;zpool ibdel&quot; kmand. Jekk ssettjat għal &quot;fuq&quot;, kull mezz ġdid, misjuba fil-
istess lokazzjoni fiżika bħala mezz li qabel kienu jaqgħu taħt
pool, huwa awtomatikament ifformattjat u sostitwiti. L-imġiba default
huwa &quot;off&quot;. Din il-proprjetà tista &apos;wkoll tkun magħrufa minn  imqassar tagħha n isem kolonna, &quot;jissostitwixxu&quot;.</translation>
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
        <translation type="unfinished">Jikkontrolla l-post ta &apos;fejn il-konfigurazzjoni pool huwa Cached.
Niskopru pools kollha fuq l-istartjar tas-sistema teħtieġ kopja Cached tal-
dejta ta &apos;konfigurazzjoni li hija maħżuna fuq il-fajl sistema għeruq. Puls kollha 
f&apos;dan cache huma awtomatikament importati meta l-boots tas-sistema. Xi
ambjenti, bħal jinstallaw u clustering, jeħtieġ li cache dan 
informazzjoni f&apos;post differenti sabiex pools mhumiex awtomatikament
importati. Twaqqif din il-proprjetà ħażniet sigrieti-konfigurazzjoni pool
f&apos;post differenti li aktar tard jistgħu jiġu importati &quot;zpool importazzjoni
-c &quot;. Twaqqif għall-valur speċjali&quot; xejn &quot;toħloq temporanju pool
li hija qatt ma Cached, u l-valur speċjali&apos;&apos; (string vojt) użi
il-post default.</translation>
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
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Controls whether information about snapshots associated with this
pool is output when &quot;zfs list&quot; is run without the -t option. The
default value is off.</source>
        <translation type="unfinished">Kontrolli dwar jekk informazzjoni dwar Snapshots assoċjati ma &apos;dan
pool huwa output meta &quot;lista ZFS&quot; hija mmexxija mingħajr l-għażla l-t. Il-
valur ta &apos;default off.</translation>
    </message>
    <message>
        <source>Controls automatic pool expansion when the underlying LUN is grown.
If set to &quot;on&quot;, the pool will be resized according to the size of the
expanded device. If the device is part of a mirror or raidz then all
devices within that mirror/raidz group must be expanded before the
new space is made available to the pool. The default behavior is
&quot;off&quot;.  This property can also be referred to by its shortened column
name, expand.</source>
        <translation type="unfinished">Kontrolli espansjoni pool awtomatiku meta l-Lun sottostanti hija mkabbra.
Jekk ssettjat għal &quot;fuq&quot;, il-pool se tingħata daqs ieħor skond id-daqs tal-
apparat estiża. Jekk il-mezz huwa parti allura kull  n mera jew raidz apparati f&apos;dak il-grupp mera / raidz għandhom jiġu estiżi qabel l-
ispazju ġdida ssir disponibbli lill-pool. L-imġieba default  n &quot;off&quot;. Din il-proprjetà tista &apos;wkoll tkun magħrufa mill-kolonna imqassar tagħha 
isem, jespandu.</translation>
    </message>
    <message>
        <source>Threshold for the number of block ditto copies. If the reference
count for a deduplicated block increases above this number, a new
ditto copy of this block is automatically stored. Default setting is
0.</source>
        <translation type="unfinished">Threshold għan-numru ta &apos;kopji Ditto blokk. Jekk ir-referenza
jgħoddu għal żidiet blokk deduplicated hawn fuq dan in-numru, a
ġdida Kopja ditto ta &apos;dan il-blokk huwa awtomatikament maħżuna. Setting default
0.</translation>
    </message>
    <message>
        <source>The deduplication ratio specified for a pool, expressed as a multiplier. For
example, a value of 1.76 indicates that 1.76 units of data were stored but
only 1 unit of disk space was actually consumed. See zfs(8) for a description
of the deduplication feature.</source>
        <translation type="unfinished">Il-proporzjon deduplication speċifikata għal pool, espress bħala multiplikatur. Għal
eżempju, valur ta &apos;1.76 jindika li 1.76 unitajiet ta&apos; data kienu maħżuna imma
biss unità 1 ta &apos;spazju disk kienet attwalment ikkunsmati. Ara ZFS (8) għal deskrizzjoni
tal-karatteristika deduplication.</translation>
    </message>
    <message>
        <source>Number of blocks within the pool that are not allocated.</source>
        <translation type="unfinished">Numru ta &apos;blokki fil-pool li mhumiex allokati.</translation>
    </message>
    <message>
        <source>Amount of storage space within the pool that has been physically allocated.</source>
        <translation type="unfinished">Ammont ta &apos;spazju għall-ħażna ġewwa l-pool li ġie allokat fiżikament.</translation>
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
        <translation type="unfinished">Jekk stabbiliti biex fuq, pool se jiġu importati fil-modalità jinqraw-biss bil-
restrizzjonijiet li ġejjin:
* Data sinkroniċi fil-log intenzjoni mhux se jkun aċċessibbli
* Properties tal-pool ma tistax tinbidel
* Ġabra tad-dejta ta &apos;din il-ġabra tista&apos; biss jinqraw-biss  n mmuntati * Biex tikteb lil read-only pool, esportazzjoni u l-importazzjoni tal-pool
hija meħtieġa.
</translation>
    </message>
    <message>
        <source>An arbitrary comment string set by the administrator.</source>
        <translation type="unfinished">String kumment arbitrarju stabbiliti mill-amministratur.</translation>
    </message>
    <message>
        <source>This property has currently no value on FreeBSD.</source>
        <translation type="unfinished">Din il-proprjetà bħalissa għandha l-ebda valur fuq FreeBSD.</translation>
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
        <translation type="unfinished">Isem:</translation>
    </message>
    <message>
        <source>Properties override at creation time:</source>
        <translation type="unfinished">Properties jwarrab fil-ħin ħolqien:</translation>
    </message>
    <message>
        <source>Prevent auto mount (canmount=noauto)</source>
        <translation type="unfinished">Prevenzjoni auto mount (canmount = noauto)</translation>
    </message>
    <message>
        <source>Mountpoint</source>
        <translation type="unfinished">Mountpoint</translation>
    </message>
    <message>
        <source>none</source>
        <translation type="unfinished">xejn</translation>
    </message>
    <message>
        <source>legacy</source>
        <translation type="unfinished">legat</translation>
    </message>
    <message>
        <source>[path]</source>
        <translation type="unfinished">[path]</translation>
    </message>
    <message>
        <source>Force UTF-8 only (utf8only=on)</source>
        <translation type="unfinished">Forza UTF-8 biss (utf8only = fuq)</translation>
    </message>
    <message>
        <source>Unicode normalization =</source>
        <translation type="unfinished">Normalizzazzjoni Unicode =</translation>
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
        <translation type="unfinished">kopji =</translation>
    </message>
    <message>
        <source>Deduplication (dedup=on)</source>
        <translation type="unfinished">Deduplication (dedup = fuq)</translation>
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
        <translation type="unfinished">ZFS Pools  </translation>
    </message>
    <message>
        <source>Pool Name</source>
        <translation type="unfinished">Pool Isem</translation>
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
        <translation type="unfinished">Ebda pools disponibbli, ikklikkja dritt li toħloq waħda ġdida</translation>
    </message>
    <message>
        <source> (No media in drive)</source>
        <translation type="unfinished">(Nru midja drive)</translation>
    </message>
    <message>
        <source>Avaliable</source>
        <translation type="unfinished">Disponibbli</translation>
    </message>
    <message>
        <source>No disk</source>
        <translation type="unfinished">Nru disk</translation>
    </message>
    <message>
        <source>ZPool: </source>
        <translation type="unfinished">ZPool:</translation>
    </message>
    <message>
        <source>Sliced</source>
        <translation type="unfinished">Sliced</translation>
    </message>
    <message>
        <source>Mounted: </source>
        <translation type="unfinished">Mounted:</translation>
    </message>
    <message>
        <source>Available</source>
        <translation type="unfinished">Disponibbli</translation>
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
        <translation type="unfinished">Oħloq pool ġdida</translation>
    </message>
    <message>
        <source>Rename pool</source>
        <translation type="unfinished">Semmi pool</translation>
    </message>
    <message>
        <source>Destroy pool</source>
        <translation type="unfinished">Eqred pool</translation>
    </message>
    <message>
        <source>Add devices...</source>
        <translation type="unfinished">Żid apparat...</translation>
    </message>
    <message>
        <source>Add log devices...</source>
        <translation type="unfinished">Żid log apparat...</translation>
    </message>
    <message>
        <source>Add cache devices...</source>
        <translation type="unfinished">Żid cache apparat...</translation>
    </message>
    <message>
        <source>Add spare devices...</source>
        <translation type="unfinished">Żid spare apparat...</translation>
    </message>
    <message>
        <source>Scrub</source>
        <translation type="unfinished">Scrub</translation>
    </message>
    <message>
        <source>Export pool</source>
        <translation type="unfinished">Esportazzjoni pool</translation>
    </message>
    <message>
        <source>Import pool</source>
        <translation type="unfinished">Importazzjoni pool</translation>
    </message>
    <message>
        <source>Recover destroyed pool</source>
        <translation type="unfinished">Tirkupra pool meqruda</translation>
    </message>
    <message>
        <source>Properties...</source>
        <translation type="unfinished">Properties...</translation>
    </message>
    <message>
        <source>Attach (mirror) device...</source>
        <translation type="unfinished">Waħħal (mera) apparat...</translation>
    </message>
    <message>
        <source>Detach from mirror</source>
        <translation type="unfinished">Aqla minn mera</translation>
    </message>
    <message>
        <source>Take offline</source>
        <translation type="unfinished">Ħu offline</translation>
    </message>
    <message>
        <source>Bring online</source>
        <translation type="unfinished">Wassal online</translation>
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
        <translation type="unfinished">Oħloq tabella partition MBR</translation>
    </message>
    <message>
        <source>Create GPT partition table</source>
        <translation type="unfinished">Oħloq tabella partition GPT</translation>
    </message>
    <message>
        <source>Create BSD partition table</source>
        <translation type="unfinished">Oħloq tabella partition BSD</translation>
    </message>
    <message>
        <source>Delete Partition Table</source>
        <translation type="unfinished">Ħassar Partition Tabella</translation>
    </message>
    <message>
        <source>Add new slice</source>
        <translation type="unfinished">Żid porzjon ġdid</translation>
    </message>
    <message>
        <source>Add new partition</source>
        <translation type="unfinished">Żid partition ġdid</translation>
    </message>
    <message>
        <source>Destroy this slice</source>
        <translation type="unfinished">Eqred dan porzjon</translation>
    </message>
    <message>
        <source>Destroy this partition</source>
        <translation type="unfinished">Eqred dan partition</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="unfinished">Warning</translation>
    </message>
    <message>
        <source>This operation cannot be undone.
OK to destroy the slice/partition?</source>
        <translation type="unfinished">Din l-operazzjoni ma tistax tiġi.
undone OK li jeqirdu l-porzjon / partition?</translation>
    </message>
    <message>
        <source>An error was detected while executing &apos;%1&apos;:

</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Error report</source>
        <translation type="unfinished">Error report</translation>
    </message>
    <message>
        <source>An error was detected while executing &apos;zpool&apos;:

</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>An error was detected while executing &apos;zfs&apos;:

</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Create new zpool</source>
        <translation type="unfinished">Oħloq zpool ġdida</translation>
    </message>
    <message>
        <source>Important information</source>
        <translation type="unfinished">Tagħrif importanti</translation>
    </message>
    <message>
        <source>The pool was imported in read-only mode, therefore attempting to destroy the pool will leave the pool in the state it was when imported, not necessarily destroyed.</source>
        <translation type="unfinished">Il-pool kien importat fil-modalità jinqraw-biss, għalhekk attentat li jeqirdu l-pool se jħallu l-pool fl-istat li kien meta importata, mhux neċessarjament meqruda.</translation>
    </message>
    <message>
        <source>Attach mirror devices to </source>
        <translation type="unfinished">Waħħal apparat mera li</translation>
    </message>
    <message>
        <source>The pool was imported in read-only mode, therefore attempting to export the pool will leave the pool in the state it was when imported, not necessarily exported.</source>
        <translation type="unfinished">Il-pool kien importat fil-modalità jinqraw-biss, għalhekk attentat biex jesportaw il-pool se jħallu l-pool fl-istat li kien meta importata, mhux neċessarjament esportati.</translation>
    </message>
    <message>
        <source>Recover destroyed pool as...</source>
        <translation type="unfinished">Tirkupra pool meqruda bħala...</translation>
    </message>
    <message>
        <source>Import pool as...</source>
        <translation type="unfinished">Pool importazzjoni kif...</translation>
    </message>
    <message>
        <source>This pool had been destroyed, and its disks may have been reused. Attempting to recover will destroy any new data that could&apos;ve been stored in the devices that were reused and cannot be recovered.
Proceed with recovery?</source>
        <translation type="unfinished">Dan pool kienu ġew meqruda, u diski tagħha jistgħu jkunu użati mill-ġdid. Jippruvaw li tirkupra se jeqred kwalunkwe data ġdida li jistgħu stajt ġew maħżuna fil-mezzi li ġew użati mill-ġdid u ma jistgħux jiġu rkuprati.
Ipproċedi bl-irkupru?</translation>
    </message>
    <message>
        <source>The pool was imported in read-only mode, it cannot be renamed.</source>
        <translation type="unfinished">Il-pool kien importat fil-modalità jinqraw-biss, ma jistax jingħata l-isem.</translation>
    </message>
    <message>
        <source>Add more devices to zpool</source>
        <translation type="unfinished">Żid aktar apparat biex zpool</translation>
    </message>
    <message>
        <source>Add log devices to zpool</source>
        <translation type="unfinished">Żid apparat log mal zpool</translation>
    </message>
    <message>
        <source>Add cache devices to zpool</source>
        <translation type="unfinished">Żid apparat cache biex zpool</translation>
    </message>
    <message>
        <source>Add spare devices to zpool</source>
        <translation type="unfinished">Żid apparat ta &apos;rikambju li zpool</translation>
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
        <translation type="unfinished">of</translation>
    </message>
    <message>
        <source>Rename dataset</source>
        <translation type="unfinished">Semmi dataset</translation>
    </message>
    <message>
        <source>Create new dataset</source>
        <translation type="unfinished">Oħloq new dataset</translation>
    </message>
    <message>
        <source>Create a clone dataset</source>
        <translation type="unfinished">Oħloq klonu dataset</translation>
    </message>
    <message>
        <source>Destroy dataset</source>
        <translation type="unfinished">Eqred dataset</translation>
    </message>
    <message>
        <source>Promote filesystem</source>
        <translation type="unfinished">Promote filesystem</translation>
    </message>
    <message>
        <source>Take a snapshot</source>
        <translation type="unfinished">Tieħu stampa</translation>
    </message>
    <message>
        <source>Destroy snapshot</source>
        <translation type="unfinished">Eqred snapshot</translation>
    </message>
    <message>
        <source>Rollback to this snapshot</source>
        <translation type="unfinished">Żmantellament għal din l-istampa</translation>
    </message>
    <message>
        <source>Edit properties</source>
        <translation type="unfinished">Proprjetajiet Edit</translation>
    </message>
    <message>
        <source>zfs Menu</source>
        <translation type="unfinished">zfs Menu</translation>
    </message>
    <message>
        <source>This operation cannot be undone and will cause data loss.

You are about to perform the following operation(s):

</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>

Are you sure you want to proceed?

</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Confirmation</source>
        <translation type="unfinished">konferma</translation>
    </message>
    <message>
        <source>Take a new snapshot</source>
        <translation type="unfinished">Ħu stampa ġdida</translation>
    </message>
    <message>
        <source>New name</source>
        <translation type="unfinished">Isem il-ġdid</translation>
    </message>
    <message>
        <source>This operation cannot be undone and will cause all data added after the snapshot to be lost.
Any snapshots created after this one will be deleted, along with any clone filesystems that depend on them.
</source>
        <translation type="unfinished">Din l-operazzjoni ma tistax tkun undone u se jikkawżaw data kollha miżjudin wara l-istampa li tintilef.
Kwalunkwe Snapshots maħluqa wara dan wieħed se jitħassru, flimkien ma &apos;kwalunkwe filesystems klonu li jiddependu fuqhom.
</translation>
    </message>
</context>
</TS>
