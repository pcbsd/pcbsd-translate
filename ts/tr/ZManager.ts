<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="tr">
<context>
    <name>DialogFSProp</name>
    <message>
        <source>Dialog</source>
        <translation>İletişim kutusu</translation>
    </message>
    <message>
        <source>Apply changes recursively to all descendants</source>
        <translation>Değişiklikleri öz yinelemeli olarak tüm alt öğelere uygula</translation>
    </message>
    <message>
        <source>Property</source>
        <translation>Özellik</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Değer</translation>
    </message>
    <message>
        <source>Source</source>
        <translation>Kaynak</translation>
    </message>
    <message>
        <source>Add user property</source>
        <translation>Kullanıcı özelliği ekle</translation>
    </message>
    <message>
        <source>...</source>
        <translation>...</translation>
    </message>
    <message>
        <source>Remove user property</source>
        <translation>Kullanıcı özelliği kaldır</translation>
    </message>
    <message>
        <source>Inherit from parent</source>
        <translation>Üst öğeden devral</translation>
    </message>
    <message>
        <source>Revert changes</source>
        <translation>Değişiklikleri geri al</translation>
    </message>
    <message>
        <source>Controls how ACL entries are inherited when files and directories are created. The values are
discard, noallow, restricted, and passthrough. For a description of these values, see ACL Properties.</source>
        <translation>Dosyalar ve dizinler oluşturulduğunda ACL girdilerinin nasıl devralındığını denetler. Değerler; at (discard), izinsiz (noallow),
sınırlı (restricted) ve doğrudan geçiş (passthrough) şeklindedir. Bu değerlere ilişkin açıklama için ACL Özelliklerine bakın.</translation>
    </message>
    <message>
        <source>Controls how an ACL entry is modified during a chmod operation.
The values are discard, groupmask, and passthrough. For a description of
these values, see ACL Properties.</source>
        <translation>Bir chmod işlemi sırasında bir ACL girdisinin nasıl değiştirildiğini denetler.
Değerler; at (discard), grup maskesi (groupmask) ve doğrudan geçiş (passthrough)
şeklindedir. Bu değerlere ilişkin açıklama için ACL Özelliklerine bakın.</translation>
    </message>
    <message>
        <source>Controls whether the access time for files is updated when they are read.
Turning this property off avoids producing write traffic when reading files and
can result in significant performance gains, though it might confuse mailers and
similar utilities.</source>
        <translation>Dosyalar okunduğunda dosyalar için erişim zamanının güncellenip güncellenmediğini
denetler. Bu özelliği kapatmak (off) dosya okurken yazma trafiği üretmeyi engeller
ve önemli performans artışı sağlayabilir, ancak postacıları ve benzer gereçleri
şaşırtabilir.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the amount of disk space available to a dataset
and all its children, assuming no other activity in the pool. Because disk space is
shared within a pool, available space can be limited by various factors including
physical pool size, quotas, reservations, and other datasets within the pool.</source>
        <translation>Bir veriseti ve tüm alt öğelerine, havuzda başka etkinlik olmadığını varsayarak
kullanılabilir disk alanı miktarını tanımlayan salt okunur özellik. Disk alanı havuz
içinde paylaşıldığı için kullanılabilir alan; fiziksel havuz boyutu, kotalar, ayırmalar
ve havuzdaki diğer verisetleri de dahil çeşitli etkenler tarafından sınırlanabilir.</translation>
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
        <translation>Bu özellik kapalı (off) olarak ayarlanırsa, dosya sistemi bağlanamaz ve
&apos;zfs mount -a&apos; tarafından görmezden gelinir.  Bu özelliği kapalı olarak
ayarlamak, verisetinin hala devralınabilir bir normal bağlanma noktası
özelliği olması dışında, bağlanma noktasını yok (none) olarak ayarlamaya
benzerdir. Bu özelliği kapalı olarak ayarlamak, verisetlerinin yalnızca
özellik devralma mekanizması olarak kullanılmasına izin verir. bağlanabilir=kapalı
(canmount=off) olarak ayarlamanın bir örneği, aynı bağlanma noktasıyla iki
verisetine sahip olmak, böylece iki verisetine ait alt öğelerin de aynı
dizinde görünmesi, ama farklı özellikler devralmış olabilmesidir.</translation>
    </message>
    <message>
        <source>Controls the checksum used to verify data integrity. The default
value is on, which automatically selects an appropriate algorithm
(currently, fletcher4, but this may change in future releases). The
value off disables integrity checking on user data. Disabling
checksums is NOT a recommended practice.</source>
        <translation>Veri bütünlüğü doğrulamak için kullanılan sağlama toplamını denetler.
Açık (on), varsayılan değer olup uygun algoritmayı (şu anda fletcher4,
ama bu gelecek dağıtımlarda değişebilir) otomatik olarak seçer. Kapalı
(off) değeri kullanıcı verisi bütünlüğü denetlemeyi devre dışı bırakır.
Sağlama toplamını devre dışı bırakmak önerilen bir uygulama DEĞİLDİR.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the compression ratio achieved for a dataset,
expressed as a multiplier. Compression can be enabled by the zfs set compression=on
dataset command. The value is calculated from the logical size of all files and the
amount of referenced physical data. It includes explicit savings through the use of
the compression property.</source>
        <translation>Bir veriseti için elde edilen sıkıştırma oranını tanımlayan salt okunur özellik,
çarpan olarak ifade edilir. Sıkıştırma &apos;zfs set compression=on veriseti&apos; komutu
ile etkinleştirilebilir. Değer, tüm dosyaların mantıksal boyutu ve başvurulan
fiziksel veri miktarından hesaplanır. Sıkıştırma özelliğinin kullanımından doğan
açık kaydetmeleri de içerir.</translation>
    </message>
    <message>
        <source>Sets the number of copies of user data per file system. These copies
are in addition to any pool-level redundancy. Disk space used by
multiple copies of user data is charged to the corresponding file and
dataset, and counts against quotas and reservations. In addition, the
used property is updated when multiple copies are enabled. Consider setting
this property when the file system is created because changing this property
on an existing file system only affects newly written data.</source>
        <translation>Dosya sistemi başına kullanıcı verisi kopyası sayısını belirler. Bu kopyalar
olası havuz düzeyi fazlalıklara ektir. Kullanıcı verisinin birden fazla
kopyası tarafından kullanılan disk alanı, ilgili dosya ve verisetinden
karşılanır. Ayrıca, birden fazla kopya etkinleştirildiğinde kullanılan
özellik güncellenir. Bu özelliği ayarlamayı dosya sistemi oluşturulduğunda
göz önüne alın çünkü mevcut bir dosya sisteminde bu özelliği değiştirmek
yalnıca yeni yazılan verileri etkiler.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the date and time that a dataset was created.</source>
        <translation>Bir verisetinin oluşturulduğu saat ve tarihi tanımlayan salt okunur özellik.</translation>
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
        <translation>Bir veriseti için tekilleştirmeyi yapılandırır. Kapalı (off), varsayılan değerdir.
Varsayılan tekilleştirme sağlama toplamı sha256&apos;dır (bu ileride değişebilir).
Tekilleştirme etkinleştirildiğinde burada tanımlanan sağlama toplamı, sağlama
toplamı özelliğini geçersiz kılar. Bu özelliği doğrula (verify) olarak ayarlamak
ile sha256,doğrula (sha256,verify) olarak ayarlamak aynı etkiye sahiptir.
Doğrula olarak ayarlanmışsa, iki bloğun aynı imzaya sahip olması durumunda
blok içeriklerinin aynı olduğuna emin olmak için ZFS bayttan bayta
karşılaştırma yapar.</translation>
    </message>
    <message>
        <source>The devices property is currently not supported on FreeBSD.</source>
        <translation>Aygıtlar (devices) özelliği şu anda FreeBSD&apos;de desteklenmemektedir.</translation>
    </message>
    <message>
        <source>Controls whether processes can be executed from within this file
system. The default value is on.</source>
        <translation>İşlemlerin bu dosya sistemi içinden yürütülebilme durumunu
denetler. Açık (on) varsayılan değerdir.</translation>
    </message>
    <message>
        <source>Read-only property that indicates whether a file system, clone, or snapshot
is currently mounted.</source>
        <translation>Bir dosya sisteminin, klonun ya da anlık görüntünün şu an bağlı olup
olmadığını gösteren salt okunur özellik.</translation>
    </message>
    <message>
        <source>Controls the mount point used for this file system. When the mountpoint property
is changed for a file system, the file system and any descendents that inherit the
mount point are unmounted. If the new value is legacy, then they remain unmounted.
Otherwise, they are automatically remounted in the new location if the property was
previously legacy or none, or if they were mounted before the property was changed.
In addition, any shared file systems are unshared and shared in the new location.</source>
        <translation>Bu dosya sistemi için kullanılan bağlanma noktasını denetler. Bir dosya sistemi için
bağlanma noktası özelliği değiştirildiğinde, dosya sistemi ile bağlanma noktasını
devralan alt öğeleri çözülür. Yeni değer eski (legacy) ise çözülmüş olarak kalırlar.
Aksi durumda, özellik daha önce eski(legacy) ya da yok (none) idiyse ya da özellik
değiştirilmeden önce bağlanmışlarsa, yeni konuma otomatik olarak yeniden bağlanırlar.
Ayrıca, paylaşılan dosya sistemlerinin paylaşımı kaldırılır ve yeni konumda paylaşılır.</translation>
    </message>
    <message>
        <source>Controls what is cached in the primary cache (ARC). Possible values are all,
none, and metadata. If set to all, both user data and metadata are cached. If
set to none, neither user data nor metadata is cached. If set to metadata, only
metadata is cached.</source>
        <translation>Birincil önbellekte (ARC) neyin önbelleğe alındığını denetler. Mümkün olan değerler; tümü (all),
yok (none), metaveri (metadata) şeklindedir. Tümü olarak ayarlanmışsa hem kullanıcı verisi
hem metaveri önbelleğe alınır. Yok olarak ayarlanmışsa, ne kullanıcı verisi ne de metaveri
önbelleğe alınır. Metaveri olarak ayarlanmışsa yalnız metaveri önbelleğe alınır.</translation>
    </message>
    <message>
        <source>Read-only property for cloned file systems or volumes that identifies
the snapshot from which the clone was created. The origin cannot be
destroyed (even with the -r or -f option) as long as a clone exists.
Non-cloned file systems have an origin of none.</source>
        <translation>Klonlanmış dosya sistemleri ya da birimler için klonun oluşturulduğu
anlık görüntüyü tanımlayan salt okunur özellik. Klon var olduğu sürece
asıl (-r ya da -f seçeneği ile bile) yok edilemez. Klonlanmamış dosya
sistemlerinin asılı yok (none) şeklindedir.</translation>
    </message>
    <message>
        <source>Limits the amount of disk space a dataset and its descendents can consume.
This property enforces a hard limit on the amount of disk space used,
including all space consumed by descendents, such as file systems and snapshots.
Setting a quota on a descendent of a dataset that already has a quota does not
override the ancestor&apos;s quota, but rather imposes an additional limit.</source>
        <translation>Bir veriseti ve alt öğelerinin tüketebileceği disk alanı miktarını sınırlar.
Bu özellik, dosya sistemleri ve anlık görüntüler gibi alt öğelerin tükettiği tüm
alan da dahil olmak üzere, kullanılan disk alanı miktarına değiştirilemeyen bir
sınır dayatır. Zaten kotası olan bir verisetinin alt öğesine kota ayarlamak üst
öğenin kotasını geçersiz kılmaz, ek bir sınır kısıtlaması getirir.</translation>
    </message>
    <message>
        <source>Controls whether a dataset can be modified. When set to on,
no modifications can be made.</source>
        <translation>Bir verisetinin değiştirilebilir olup olmadığını denetler.
Açık (on) olarak ayarlandığında hiç değişiklik yapılamaz.</translation>
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
        <translation>Dosya sistemi içindeki dosyalar için bir önerilen blok boyutu
belirtir. Bu özellik yalnızca, sabit boyutlu kayıtlarda dosyalara
erişen veritabanı iş yükleri ile kullanılması için tasarlanmıştır.
ZFS tipik erişim modelleri için optimize edilmiş iç algoritmalara
göre blok boyutunu otomatik olarak ayarlar.
Bu özelliğin genel amaçlı dosya sistemleri için kullanılması
kesinlikle önerilmez ve performansı olumsuz yönde etkileyebilir.
Belirtilen boyut 512&apos;ye eşit ya da büyük olmak üzere ikinin üssü,
ya da 128 Kbayt&apos;tan küçük ya da eşit olmalıdır.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the amount of data accessible by a
dataset, which might or might not be shared with other datasets in the
pool.</source>
        <translation>Bir veriseti tarafından erişilebilecek, havuzdaki diğer verisetleriyle
paylaşılabilecek ya da paylaşılmayabilecek veri miktarını tanımlayan
salt okunur özellik.</translation>
    </message>
    <message>
        <source>Sets the amount of disk space that a dataset can consume. This property
enforces a hard limit on the amount of space used. This hard limit does
not include disk space used by descendents, such as snapshots and clones.</source>
        <translation>Bir verisetinin tüketebileceği disk alanı miktarını ayarlar. Bu özellik kullanılan
alan miktarına değiştirilemeyen bir sınır dayatır. Bu sınıra anlık görüntüler ve
klonlar gibi alt öğeler tarafından kullanılan disk alanı dahil değildir.</translation>
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
        <translation>Anlık görüntüler ya da klonlar gibi alt öğeleri hariç olmak üzere bir verisetine
garanti edilen en az disk alanı miktarını ayarlar. Kullanılan disk alanı miktarı
bu değerin altında olduğunda, verisetine, başvurulan ayırma (refreservation)
tarafından belirtilen alan miktarını kaplıyormuş gibi davranılır. Başvurulan
ayırma üst verisetinin kullanılan disk alanından karşılanır ve üst verisetinin
kotaları ve ayırmalarından bağımsız değildir.
Başvurulan ayırma ayarlanmışsa, verisetindeki geçerli başvurulan bayt sayısına uyum
sağlamak için yalnızca bu ayırma dışında yeterli boş havuz alanı mevcut olduğunda
anlık görüntüye izin verilir.</translation>
    </message>
    <message>
        <source>Sets the minimum amount of disk space guaranteed to a dataset and its descendents.
When the amount of disk space used is below this value, the dataset is treated as if
it were using the amount of space specified by its reservation. Reservations are
accounted for in the parent dataset&apos;s disk space used, and count against the parent
dataset&apos;s quotas and reservations.</source>
        <translation>Bir verisetine ve alt öğelerine garanti edilen en az disk alanı miktarını ayarlar.
Kullanılan disk alanı miktarı bu değerin altında olduğunda, verisetine, kendi
ayırması ile belirtilen alan miktarını kullanıyormuş gibi davranılır. Ayırmalar üst
verisetinin kullanılan disk alanından karşılanır ve üst verisetinin kota ve
ayırmalarından bağımsız değildir.</translation>
    </message>
    <message>
        <source>Controls what is cached in the secondary cache (L2ARC). Possible values are all, none,
and metadata. If set to all, both user data and metadata are cached. If set to none,
neither user data nor metadata is cached. If set to metadata, only metadata is cached.</source>
        <translation>İkincil önbellekte (L2ARC) neyin önbelleğe alındığını denetler. Mümkün olan değerler; tümü (all), yok (none), metaveri
(metadata) şeklindedir. Tümü olarak ayarlanmışsa hem kullanıcı verisi hem metaveri önbelleğe alınır. Yok olarak ayarlanmışsa
ne kullanıcı verisi ne de metaveri önbelleğe alınır. Metaveri olarak ayarlanmışsa yalnız metaveri önbelleğe alınır.</translation>
    </message>
    <message>
        <source>Controls whether the setuid bit is honored in a file system.</source>
        <translation>Bir dosya sisteminde setuid (etkin kullanıcı kimliği ayarı) bitine saygı duyulup duyulmadığını denetler.</translation>
    </message>
    <message>
        <source>Controls whether a file system is available over NFS and what
options are used. If set to on, the zfs share command is invoked
with no options. Otherwise, the zfs share command is invoked with
options equivalent to the contents of this property.</source>
        <translation>Bir dosya sisteminin NFS üzerinden kullanılabilir olup olmadığını ve hangi
seçeneklerin kullanıldığını denetler. Açık (on) olarak ayarlanırsa
zfs share komutu seçeneksiz olarak çağrılır. Aksi durumda zfs share
komutu bu özelliğin içerdiklerine denk seçeneklerle çağrılır.</translation>
    </message>
    <message>
        <source>The sharesmb property has currently no effect on FreeBSD.</source>
        <translation>Şu anda sharesmb özelliğinin FreeBSD&apos;de bir etkisi yoktur.</translation>
    </message>
    <message>
        <source>Controls whether the .zfs directory is hidden or visible in the root of the file system.</source>
        <translation>.zfs dizininin dosya sistemi kökünde görünür ya da gizli olmasını denetler.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the dataset type as filesystem (file system or clone), volume, or snapshot.</source>
        <translation>Veriseti türünü; dosya sistemi(dosya sistemi ya da klon), birim ya da anlık görüntü olarak tanımlayan salt okunur özellik.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the amount of disk space consumed by a dataset and all its descendents.</source>
        <translation>Bir veriseti ve tüm alt öğeleri tarafından tüketilen disk alanı miktarını tanımlayan salt okunur özellik.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the amount of disk space that is used by
children of this dataset, which would be freed if all the dataset&apos;s children
were destroyed.</source>
        <translation>Bu verisetinin alt öğeleri tarafından kullanılan, verisetinin tüm alt öğeleri
yok edildiği durumda boşalacak olan disk alanı miktarını tanımlayan
salt okunur özellik.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the amount of disk space that is used by
a dataset itself, which would be freed if the dataset was destroyed, after
first destroying any snapshots and removing any refreservation reservations.</source>
        <translation>Bir verisetinin kendisi tarafından kullanılan, önce anlık görüntüler yok edildikten
ve başvurulan ayırmalar (refreservation) kaldırıldıktan sonra veriseti yok edildiği
durumda boşalacak olan disk alanı miktarını tanımlayan salt okunur özellik.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the amount of disk space that is used by a
refreservation set on a dataset, which would be freed if the refreservation was
removed.</source>
        <translation>Bir verisetinde bir başvurulan ayırma (refreservation) ayarı tarafından kullanılan,
başvurulan ayırma kaldırıldığı durumda boşalacak olan disk alanı miktarını
tanımlayan salt okunur özellik.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the amount of disk space that is consumed
by snapshots of a dataset. In particular, it is the amount of disk space that
would be freed if all of this dataset&apos;s snapshots were destroyed. Note that
this value is not simply the sum of the snapshots&apos; used properties, because
space can be shared by multiple snapshots.</source>
        <translation>Bir verisetinin anlık görüntüleri tarafından tüketilen disk alanı miktarını
tanımlayan salt okunur özellik. Yani, bu verisetinin tüm anlık görüntüleri
yok edildiği durumda boşalacak olan disk alanı miktarıdır. Bu değerin,
anlık görüntülerin kullandığı özelliklerin toplamından ibaret olmadığına
dikkat edin çünkü alan birden çok anlık görüntü tarafından paylaşılabilir.</translation>
    </message>
    <message>
        <source>Identifies the on-disk version of a file system, which is independent of the
pool version. This property can only be set to a later version that is available
from the supported software release.</source>
        <translation>Bir dosya sisteminin havuz sürümünden bağımsız olan, disk üzerindeki sürümünü
tanımlar. Bu özellik yalnızca desteklenen yazılım dağıtımından uygun olan sonraki
sürüme ayarlanabilir.</translation>
    </message>
    <message>
        <source>For volumes, specifies the logical size of the volume.</source>
        <translation>Birimler için, birimin mantıksal boyutunu belirtir.</translation>
    </message>
    <message>
        <source>For volumes, specifies the block size of the volume.</source>
        <translation>Birimler için, birimin blok boyutunu belirtir.</translation>
    </message>
    <message>
        <source>Indicates whether a dataset has been added to a jail.</source>
        <translation>Bir verisetinin bir hapis içine eklenip eklenmediğini gösterir.</translation>
    </message>
    <message>
        <source>This property is not supported on FreeBSD.</source>
        <translation>Bu özellik FreeBSD&apos;de desteklenmemektedir.</translation>
    </message>
    <message>
        <source>The file system is marked to be destroyed after unmount.</source>
        <translation>Dosya sistemi çözüldükten sonra yok edilmek üzere işaretlenir.</translation>
    </message>
    <message>
        <source>The compression ratio achieved for the referenced space of this
dataset, expressed as a multiplier.</source>
        <translation>Bu verisetinin başvurulan alanı için elde edilen sıkıştırma oranı,
çarpan olarak ifade edilir.</translation>
    </message>
    <message>
        <source>The amount of referenced space written to this dataset since the
previous snapshot.</source>
        <translation>Önceki anlık görüntüden bu yana bu verisetine yazılmış başvurulan
alan miktarı.</translation>
    </message>
    <message>
        <source>This property is set to the number of user holds on this snapshot.
</source>
        <translation>Bu özellik bu anlık görüntüdeki kullanıcı ayırmaları sayısına ayarlıdır.
</translation>
    </message>
    <message>
        <source>Provide a hint to ZFS about handling of synchronous requests in this
dataset.  If logbias is set to latency (the default), ZFS will use
pool log devices (if configured) to handle the requests at low
latency. If logbias is set to throughput, ZFS will not use configured
pool log devices.  ZFS will instead optimize synchronous operations
for global pool throughput and efficient use of resources.</source>
        <translation>Bu verisetinde eşzamanlı isteklerin işlenmesine ilişkin ZFS&apos;ye bir ipucu verin.
Günlük sapması (logbias) gecikme (latency) olarak ayarlanmışsa (varsayılan) ZFS
istekleri düşük gecikmede işlemek için havuz günlük aygıtlarını (yapılandırılmışsa)
kullanacaktır. Günlük sapması verim (throughput) olarak ayarlanmışsa ZFS yapılandırılmış
havuz günlük aygıtlarını kullanmayacaktır.  Bunun yerine ZFS genel havuz performansı ve
verimli kaynak kullanımı için eşzamanlı istekleri optimize edecektir.</translation>
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
        <translation>Eşzamanlı isteklerin davranışını denetler (örn.  fsync(2), O_DSYNC).
Bu özellik şu değerleri kabul eder:
standart    (standard) Tüm eşzamanlı isteklerin kararlı depolamaya
            yazılmasını ve tüm aygıtların, veri aygıt denetleyiciler
            tarafından önbelleğe alınmadan gönderilmesini sağlama
            POSIX belirtilen davranışıdır (bu varsayılandır).
sürekli     (always) Tüm dosya sistemi iletimleri, sistem çağrıları
            geri dönene kadar yazılır ve gönderilir. Performansa büyük
            bir olumsuz etkisi vardır.
devre dışı  (disabled) Eşzamanlı istekleri devre dışı bırakır. Dosya
            sistemi iletimleri düzenli aralıklarla kararlı depolamaya
            işlenir. Bu seçenek en yüksek performansı verir.  Ancak
            oldukça tehlikelidir çünkü ZFS, veritabanları ya da NFS
            gibi uygulamaların eşzamanlı iletim taleplerini görmezden
            gelecektir.  Yöneticiler bu seçeneği yalnızca riskleri
            anlaşıldığında kullanmalıdır.</translation>
    </message>
    <message>
        <source>This property cannot be changed after the system is created.</source>
        <translation>Bu özellik, sistem oluşturulduktan sonra değiştirilemez.</translation>
    </message>
    <message>
        <source>User Property</source>
        <translation>Kullanıcı Özelliği</translation>
    </message>
    <message>
        <source>Unknown property or information not available.
Read ZFS manual for more information.</source>
        <translation>Bilinmeyen özellik ya da bilgi kullanılabilir değil.
Daha fazla bilgi için ZFS kılavuzunu okuyun.</translation>
    </message>
    <message>
        <source>[Invalid]</source>
        <translation>[Geçersiz]</translation>
    </message>
    <message>
        <source>[Inherit]</source>
        <translation>[Devralmış]</translation>
    </message>
    <message>
        <source>[Added]</source>
        <translation>[Eklenmiş]</translation>
    </message>
    <message>
        <source>[Changed]</source>
        <translation>[Değiştirilmiş]</translation>
    </message>
    <message>
        <source>User property</source>
        <translation>Kullanıcı özelliği</translation>
    </message>
    <message>
        <source>Device Menu</source>
        <translation>Aygıt Menüsü</translation>
    </message>
    <message>
        <source>Add new user property</source>
        <translation>Yeni kullanıcı özelliği ekle</translation>
    </message>
    <message>
        <source>Delete user property</source>
        <translation>Kullanıcı özelliği sil</translation>
    </message>
    <message>
        <source>Enables or disables compression for a dataset. The values are on, off, lz4, lzjb, zle, 
gzip and gzip-N. Currently, setting this property to lz4, lzjb, gzip, or gzip-N has the same
effect as setting this property to on. Enabling compression on a file system with
existing data only compresses new data. Existing data remains uncompressed.</source>
        <translation>Bir veriseti için sıkıştırmayı etkinleştirir ya da etkisizleştirir. Değerler açık(on), kapalı(off), lz4, 
lzjb, zle, gzip ve gzip-N şeklindedir. Şu an için bu özelliği lz4, lzjb, gzip, ya da gzip-N olarak
ayarlamak açık olarak ayarlamakla aynı etkidedir. Mevcut verisi bulunan bir dosya sisteminde
sıkıştırmayı etkinleştirmek yalnızca yeni veriyi sıkıştırır. Mevcut veri sıkıştırılmamış olarak kalır.</translation>
    </message>
</context>
<context>
    <name>DialogMount</name>
    <message>
        <source>Dialog</source>
        <translation>İletişim kutusu</translation>
    </message>
    <message>
        <source>Device to mount:</source>
        <translation>Bağlanacak aygıt:</translation>
    </message>
    <message>
        <source>(Device)</source>
        <translation>(Aygıt)</translation>
    </message>
    <message>
        <source>Mount location:</source>
        <translation>Bağlanma konumu:</translation>
    </message>
    <message>
        <source>...</source>
        <translation>...</translation>
    </message>
    <message>
        <source>Select Directory</source>
        <translation>Dizin Seç</translation>
    </message>
</context>
<context>
    <name>DialogName</name>
    <message>
        <source>Dialog</source>
        <translation>İletişim kutusu</translation>
    </message>
    <message>
        <source>Pool name:</source>
        <translation>Havuz adı:</translation>
    </message>
    <message>
        <source>Do not mount any filesystems</source>
        <translation>Hiçbir dosya sistemini bağlama</translation>
    </message>
    <message>
        <source>Read only pool</source>
        <translation>Salt okunur havuz</translation>
    </message>
    <message>
        <source>Import options:</source>
        <translation>İçe aktarma seçenekleri:</translation>
    </message>
    <message>
        <source>Mount with alternative root:</source>
        <translation>Alternatif kök ile bağla:</translation>
    </message>
    <message>
        <source>Mount all filesystems automatically</source>
        <translation>Tüm dosya sistemlerini otomatik olarak bağla</translation>
    </message>
    <message>
        <source>Mounting behavior:</source>
        <translation>Bağlama davranışı:</translation>
    </message>
    <message>
        <source>Force operation if error (use with caution)</source>
        <translation>Hata durumunda işlemi dayat (dikkatle kullanın)</translation>
    </message>
</context>
<context>
    <name>DialogNewPool</name>
    <message>
        <source>Dialog</source>
        <translation>İletişim kutusu</translation>
    </message>
    <message>
        <source>Selected</source>
        <translation>Seçilen</translation>
    </message>
    <message>
        <source>Pool name:</source>
        <translation>Havuz adı:</translation>
    </message>
    <message>
        <source>Configuration type:</source>
        <translation>Yapılandırma türü:</translation>
    </message>
    <message>
        <source>Striped</source>
        <translation>Şeritli</translation>
    </message>
    <message>
        <source>Mirror</source>
        <translation>Yansı</translation>
    </message>
    <message>
        <source>Raid-Z (single parity)</source>
        <translation>Raid-Z (tek eşlik)</translation>
    </message>
    <message>
        <source>Raid-Z2 (double parity)</source>
        <translation>Raid-Z2 (çift eşlik)</translation>
    </message>
    <message>
        <source>Raid-Z3 (triple parity)</source>
        <translation>Raid-Z3 (üçlü eşlik)</translation>
    </message>
    <message>
        <source>Cache</source>
        <translation>Önbellek</translation>
    </message>
    <message>
        <source>Log</source>
        <translation>Günlük</translation>
    </message>
    <message>
        <source>Spare</source>
        <translation>Yedek</translation>
    </message>
    <message>
        <source>Error Description Here</source>
        <translation>Hata Açıklaması</translation>
    </message>
    <message>
        <source>Must provide a valid pool name</source>
        <translation>Geçerli bir havuz adı sağlanmalı</translation>
    </message>
    <message>
        <source>Must select exactly %1 devices</source>
        <translation>Tam olarak %1 aygıt seçilmeli</translation>
    </message>
    <message>
        <source>Must select at least one device</source>
        <translation>En az bir aygıt seçilmeli</translation>
    </message>
</context>
<context>
    <name>DialogPartition</name>
    <message>
        <source>Add Partition</source>
        <translation>Bölüm Ekle</translation>
    </message>
    <message>
        <source>Add new slice/partition</source>
        <translation>Yeni dilim/bölüm ekle</translation>
    </message>
    <message>
        <source>100 GB</source>
        <translation>100 GB</translation>
    </message>
    <message>
        <source>Device:</source>
        <translation>Aygıt:</translation>
    </message>
    <message>
        <source>ada0</source>
        <translation>ada0</translation>
    </message>
    <message>
        <source>Largest available free block:</source>
        <translation>Kullanılabilir en geniş boş blok:</translation>
    </message>
    <message>
        <source>Total Size:</source>
        <translation>Toplam Boyut:</translation>
    </message>
    <message>
        <source>Current layout:</source>
        <translation>Şu anki düzen:</translation>
    </message>
    <message>
        <source>Designation</source>
        <translation>Atama</translation>
    </message>
    <message>
        <source>Start Sector</source>
        <translation>Başlangıç Sektörü</translation>
    </message>
    <message>
        <source>Sector Count</source>
        <translation>Sektör Sayısı</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Boyut</translation>
    </message>
    <message>
        <source>Color</source>
        <translation>Renk</translation>
    </message>
    <message>
        <source>New partition Size:</source>
        <translation>Yeni bölüm Boyutu:</translation>
    </message>
    <message>
        <source>bytes</source>
        <translation>bayt</translation>
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
        <translation>Bölüm türü:</translation>
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
        <translation>freebsd-önyükleme</translation>
    </message>
    <message>
        <source>freebsd-swap</source>
        <translation>freebsd-takas</translation>
    </message>
    <message>
        <source>bios-boot</source>
        <translation>bios-önyükleme</translation>
    </message>
    <message>
        <source>efi</source>
        <translation>efi</translation>
    </message>
    <message>
        <source>Create and initialize a new filesystem</source>
        <translation>Yeni bir dosya sistemi oluştur ve başlat</translation>
    </message>
    <message>
        <source>** FREE **</source>
        <translation>** BOŞ **</translation>
    </message>
    <message>
        <source>No free space!</source>
        <translation>Boş alan yok!</translation>
    </message>
    <message>
        <source>Align partitions to 1 MB boundary</source>
        <translation>Bölümleri 1MB sınırına hizala</translation>
    </message>
</context>
<context>
    <name>DialogProp</name>
    <message>
        <source>Edit Pool Properties</source>
        <translation>Havuz Özelliklerini Düzenle</translation>
    </message>
    <message>
        <source>Property</source>
        <translation>Özellik</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Değer</translation>
    </message>
    <message>
        <source>Total size of the storage pool.</source>
        <translation>Depolama havuzunun toplam boyutu.</translation>
    </message>
    <message>
        <source>Percentage of pool space used.</source>
        <translation>Kullanılan havuz alanı yüzdesi.</translation>
    </message>
    <message>
        <source>Alternate root directory. If set, this directory is prepended to any
mount points within the pool. This can be used when examining an
unknown pool where the mount points cannot be trusted, or in an
alternate boot environment, where the typical paths are not valid.
altroot is not a persistent property. It is valid only while the
system is up.  Setting altroot defaults to using cachefile=none, though
this may be overridden using an explicit setting.</source>
        <translation>Alternatif kök dizini. Ayarlanırsa, bu dizin havuz içindeki her bağlanma
noktasına ön eklenir. Bu, bağlanma noktalarına güvenilmeyen bir bilinmeyen
havuz incelenirken ya da tipik yolların geçerli olmadığı bir alternatif ön
yükleme ortamında kullanılabilir. Alternatif kök (altroot) kalıcı bir özellik
değildir. Yalnızca sistem çalışır durumdayken geçerlidir.  Alternatif kök
ayarlamak, önbellekdosyası=yok (cachefile=none) kullanımını varsayar, yine de
bir açık ayar ile bu geçersiz kılınabilir.</translation>
    </message>
    <message>
        <source>The current health of the pool.</source>
        <translation>Havuzun şu anki sağlık durumu.</translation>
    </message>
    <message>
        <source>A unique identifier for the pool.</source>
        <translation>Havuz için bir benzersiz tanımlayıcı.</translation>
    </message>
    <message>
        <source>The current on-disk version of the pool. This can be increased, but
never decreased. The preferred method of updating pools is with the
&quot;zpool upgrade&quot; command, though this property can be used when a
specific version is needed for backwards compatibility. This property
can be any number between 1 and the current version reported by
&quot;zpool upgrade -v&quot;.</source>
        <translation>Havuzun geçerli, disk üzerindeki sürümü. Bu arttırılabilir ancak
azaltılamaz. Havuzları güncelleştirmek için tercih edilen yöntem
&quot;zpool upgrade&quot; komutudur, yine de geriye dönük uyumluluk için belirli
bir sürüm gerektiğinde bu özellik kullanılabilir. Bu özellik 1 ile
&quot;zpool upgrade -v&quot; komutu tarafından bildirilen geçerli sürüm arasında
herhangi bir sayı olabilir.</translation>
    </message>
    <message>
        <source>Identifies the default bootable dataset for the root pool. This
property is expected to be set mainly by the installation and upgrade
programs.</source>
        <translation>Kök havuz için varsayılan önyüklenebilir verisetini tanımlar.
Bu özelliğin genel olarak kurulum ve güncelleme programlarıyla
ayarlanmış olması beklenir.</translation>
    </message>
    <message>
        <source>Controls whether a non-privileged user is granted access based on the
dataset permissions defined on the dataset. See zfs(8) for more
information on ZFS delegated administration.</source>
        <translation>Bir ayrıcalıksız kullanıcıya verisetinde tanımlanmış veriseti
izinlerine dayanarak erişim izni verilip verilmeyeceğini denetler. ZFS
temsilci ile yönetime ilişkin daha fazla bilgi için zfs(8)&apos;e bakın.</translation>
    </message>
    <message>
        <source>Controls automatic device replacement. If set to &quot;off&quot;, device
replacement must be initiated by the administrator by using the
&quot;zpool replace&quot; command. If set to &quot;on&quot;, any new device, found in the
same physical location as a device that previously belonged to the
pool, is automatically formatted and replaced. The default behavior
is &quot;off&quot;.  This property can also be referred to by its shortened
column name, &quot;replace&quot;.</source>
        <translation>Otomatik aygıt değiştirmeyi denetler. Kapalı (off) olarak
ayarlanırsa, aygıt değiştirmenin yönetici tarafından &quot;zpool replace&quot;
komutu kullanılarak başlatılması gerekir. Açık (on) olarak ayarlanırsa
daha önce havuza ait olan aygıtla aynı fiziksel konumda bulunan
yeni aygıt otomatik olarak biçimlendirilir ve değiştirilir.
Kapalı, varsayılan davranıştır.  Bu özelliğe kısaltılmış sütun adı olan
&quot;replace&quot; (değiştir) ile de başvurulabilir.</translation>
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
        <translation>Havuz yapılandırmasının önbelleğe alındığı konumu denetler. Sistem
başlangıcında tüm havuzları bulmak, kök dosya sisteminde depolanmış
yapılandırma verisinin önbelleğe alınmış bir kopyasını gerektirir. Bu
önbellekteki tüm havuzlar sistem ön yüklenince otomatik olarak içe
aktarılır. Kurulum ve kümeleme gibi bazı ortamların, havuzların otomatik
olarak içe aktarılmaması için bu bilgiyi başka bir konumda önbelleğe
alması gerekir. Bu özelliği ayarlamak, havuz yapılandırmasını daha sonra
&quot;zpool import -c&quot; ile içe aktarılabilecek başka bir konuma önbelleğe alır.
Özel değer olan &quot;yok&quot; (none) olarak ayarlamak asla önbelleğe alınmayan
geçici bir havuz oluşturur, özel değer olan &apos;&apos; (boş dize) olarak ayarlamak
ise varsayılan konumu kullanır.</translation>
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
        <translation>Yıkıcı havuz hatası durumunda sistem davranışını denetler
Bu durum genel olarak temel alınan depolama aygıtıyla bağlantının
kaybedilmesi sonucudur ya da havuzdaki tüm aygıtların hata vermesi
sonucudur. Böyle bir durumda davranış şu şekilde belirlenir
bekle (wait)
Aygıt bağlantısı sağlanıncaya ve hatalar temizleninceye kadar
tüm I/O erişimi engellenir. Bu varsayılan davranıştır
devam et (continue)
Tüm yeni yazma I/O isteklerine EIO dönüşü yapar ama kalan
sağlıklı aygıtlardan okumalara izin verir. Diske işlenecek
yazma istekleri engellenir.

panik (panic)
Konsola bir ileti yazar ve bir sistem çökme bilgisi
oluşturur.
</translation>
    </message>
    <message>
        <source>Controls whether information about snapshots associated with this
pool is output when &quot;zfs list&quot; is run without the -t option. The
default value is off.</source>
        <translation>&quot;zfs list&quot; -t seçeneği olmadan çalıştırıldığında bu havuza ilişkin
anlık görüntü hakkındaki bilginin çıktısının verilip verilmediğini
denetler. Kapalı (off) varsayılan değerdir.</translation>
    </message>
    <message>
        <source>Controls automatic pool expansion when the underlying LUN is grown.
If set to &quot;on&quot;, the pool will be resized according to the size of the
expanded device. If the device is part of a mirror or raidz then all
devices within that mirror/raidz group must be expanded before the
new space is made available to the pool. The default behavior is
&quot;off&quot;.  This property can also be referred to by its shortened column
name, expand.</source>
        <translation>Temel alınan LUN büyütüldüğünde otomatik havuz genişlemesini denetler.
&quot;Açık&quot; (on) olarak ayarlanmışsa, genişletilmiş aygıtın boyutuna göre
havuz yeniden boyutlandırılacaktır. Aygıt bir yansılama ya da raidz
parçasıysa, yeni alan havuza uygun duruma getirilmeden önce o
yansılama/raidz içindeki tüm aygıtlar genişletilmelidir. &quot;Kapalı&quot; (off)
varsayılan davranıştır.  Bu özelliğe kısaltılmış sütun adı olan
&quot;expand&quot; (genişlet) ile de başvurulabilir.</translation>
    </message>
    <message>
        <source>Threshold for the number of block ditto copies. If the reference
count for a deduplicated block increases above this number, a new
ditto copy of this block is automatically stored. Default setting is
0.</source>
        <translation>Blok artık kopyaları sayısı eşiği. Tekilleştirilmiş bir blok
için başvuru sayısı bu sayının üzerine çıkarsa bu bloğun yeni
bir artık kopyası otomatik olarak depolanır. 0 varsayılan
ayardır.</translation>
    </message>
    <message>
        <source>The deduplication ratio specified for a pool, expressed as a multiplier. For
example, a value of 1.76 indicates that 1.76 units of data were stored but
only 1 unit of disk space was actually consumed. See zfs(8) for a description
of the deduplication feature.</source>
        <translation>Bir havuz için belirtilen tekilleştirme (deduplication) oranı, çarpan olarak
ifade edilir. Örneğin, 1.76 değeri, 1.76 birim verinin depolandığını ama
gerçekte yalnız 1 birim disk alanı kullanıldığını gösterir. Tekilleştirme
özelliğine ilişkin açıklama için zfs(8)&apos;e bakın.</translation>
    </message>
    <message>
        <source>Number of blocks within the pool that are not allocated.</source>
        <translation>Havuz içindeki ayrılmamış blok sayısı.</translation>
    </message>
    <message>
        <source>Amount of storage space within the pool that has been physically allocated.</source>
        <translation>Havuz içindeki fiziksel olarak ayrılmış depolama alanı miktarı.</translation>
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
        <translation>Açık olarak ayarlanırsa, havuz şu kısıtlamalarla salt okunur modda
içe aktarılacaktır:
  *   Amaçlı günlükteki eşzamanlı veri ulaşılabilir olmayacak
  *   Havuz özellikleri değiştirilemez
  *   Bu havuzun verisetleri sadece salt okunur olarak bağlanabilir
  *   Salt okunur bir havuza yazmak için, havuzun dışa aktarılması ve
      içe aktarılması gerekmektedir.
</translation>
    </message>
    <message>
        <source>An arbitrary comment string set by the administrator.</source>
        <translation>Yönetici tarafından ayarlanan isteğe bağlı yorum dizesi.</translation>
    </message>
    <message>
        <source>This property has currently no value on FreeBSD.</source>
        <translation>Bu özellik şu anda FreeBSD&apos;de bir değere sahip değildir.</translation>
    </message>
</context>
<context>
    <name>DialogfsCreate</name>
    <message>
        <source>New Filesystem</source>
        <translation>Yeni Dosya Sistemi</translation>
    </message>
    <message>
        <source>Name:</source>
        <translation>Ad:</translation>
    </message>
    <message>
        <source>Properties override at creation time:</source>
        <translation>Oluşturma zamanında üzerine yazan özellikler:</translation>
    </message>
    <message>
        <source>Prevent auto mount (canmount=noauto)</source>
        <translation>Otomatik bağlanmayı önle (canmount=noauto)</translation>
    </message>
    <message>
        <source>Mountpoint</source>
        <translation>Bağlanma Noktası</translation>
    </message>
    <message>
        <source>none</source>
        <translation>yok</translation>
    </message>
    <message>
        <source>legacy</source>
        <translation>eski</translation>
    </message>
    <message>
        <source>[path]</source>
        <translation>[yol]</translation>
    </message>
    <message>
        <source>Force UTF-8 only (utf8only=on)</source>
        <translation>Yalnız UTF-8 kullanımını dayat (utf8only=on)</translation>
    </message>
    <message>
        <source>Unicode normalization =</source>
        <translation>Unicode normalleştirmesi =</translation>
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
        <translation>Kopyalar =</translation>
    </message>
    <message>
        <source>Deduplication (dedup=on)</source>
        <translation>Tekilleştirme (dedup=on)</translation>
    </message>
    <message>
        <source>Compression =</source>
        <translation>Sıkıştırma =</translation>
    </message>
    <message>
        <source>off</source>
        <translation>kapalı</translation>
    </message>
    <message>
        <source>on</source>
        <translation>açık</translation>
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
        <translation>gzip-1</translation>
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
        <translation>PCBSD Disk Yöneticisi</translation>
    </message>
    <message>
        <source>Disks</source>
        <translation>Diskler</translation>
    </message>
    <message>
        <source>Device</source>
        <translation>Aygıt</translation>
    </message>
    <message>
        <source>State</source>
        <translation>Durum</translation>
    </message>
    <message>
        <source>ZFS Pools</source>
        <translation>ZFS Havuzları</translation>
    </message>
    <message>
        <source>Pool Name</source>
        <translation>Havuz Adı</translation>
    </message>
    <message>
        <source>Status:</source>
        <translation>Durum:</translation>
    </message>
    <message>
        <source>TextLabel</source>
        <translation>Metin Etiketi</translation>
    </message>
    <message>
        <source>Clear Error</source>
        <translation>Hatayı Temizle</translation>
    </message>
    <message>
        <source>poolname</source>
        <translation>havuz adı</translation>
    </message>
    <message>
        <source>ZFS Filesystems</source>
        <translation>ZFS Dosya Sistemleri</translation>
    </message>
    <message>
        <source>Filesystems</source>
        <translation>Dosya Sistemleri</translation>
    </message>
    <message>
        <source>Status</source>
        <translation>Durum</translation>
    </message>
    <message>
        <source>Refreshing...</source>
        <translation>Yenileniyor...</translation>
    </message>
    <message>
        <source>No pools available, right click to create a new one...</source>
        <translation>Kullanılabilir havuz yok, yeni bir havuz oluşturmak için sağ tıklayın...</translation>
    </message>
    <message>
        <source> (No media in drive)</source>
        <translation> (Sürücüde medya yok)</translation>
    </message>
    <message>
        <source>Avaliable</source>
        <translation>Kullanılabilir</translation>
    </message>
    <message>
        <source>No disk</source>
        <translation>Disk yok</translation>
    </message>
    <message>
        <source>ZPool: </source>
        <translation>ZHavuz: </translation>
    </message>
    <message>
        <source>Sliced</source>
        <translation>Dilimlenmiş</translation>
    </message>
    <message>
        <source>Mounted: </source>
        <translation>Bağlanmış: </translation>
    </message>
    <message>
        <source>Available</source>
        <translation>Kullanılabilir</translation>
    </message>
    <message>
        <source>Unmounted</source>
        <translation>Çözülmüş</translation>
    </message>
    <message>
        <source>Partitioned</source>
        <translation>Bölümlenmiş</translation>
    </message>
    <message>
        <source>(Exported)
</source>
        <translation>(Dışa aktarılmış)
</translation>
    </message>
    <message>
        <source>(Destroyed)
</source>
        <translation>(Yok edilmiş)
</translation>
    </message>
    <message>
        <source>Offline</source>
        <translation>Çevrimdışı</translation>
    </message>
    <message>
        <source>Online</source>
        <translation>Çevrimiçi</translation>
    </message>
    <message>
        <source>Degraded</source>
        <translation>İndirgenmiş</translation>
    </message>
    <message>
        <source>Faulted</source>
        <translation>Bozulmuş</translation>
    </message>
    <message>
        <source>Removed</source>
        <translation>Kaldırılmış</translation>
    </message>
    <message>
        <source>Unavailable</source>
        <translation>Kullanılabilir değil</translation>
    </message>
    <message>
        <source>Unknown</source>
        <translation>Bilinmiyor</translation>
    </message>
    <message>
        <source>Create new pool</source>
        <translation>Yeni havuz oluştur</translation>
    </message>
    <message>
        <source>Rename pool</source>
        <translation>Havuzu yeniden adlandır</translation>
    </message>
    <message>
        <source>Destroy pool</source>
        <translation>Havuzu yok et</translation>
    </message>
    <message>
        <source>Add devices...</source>
        <translation>Aygıtlar ekle...</translation>
    </message>
    <message>
        <source>Add log devices...</source>
        <translation>Günlük aygıtları ekle...</translation>
    </message>
    <message>
        <source>Add cache devices...</source>
        <translation>Önbellek aygıtları ekle...</translation>
    </message>
    <message>
        <source>Add spare devices...</source>
        <translation>Yedek aygıtlar ekle...</translation>
    </message>
    <message>
        <source>Scrub</source>
        <translation>Temizle</translation>
    </message>
    <message>
        <source>Export pool</source>
        <translation>Havuzu dışa aktar</translation>
    </message>
    <message>
        <source>Import pool</source>
        <translation>Havuzu içe aktar</translation>
    </message>
    <message>
        <source>Recover destroyed pool</source>
        <translation>Yok edilmiş havuzu kurtar</translation>
    </message>
    <message>
        <source>Properties...</source>
        <translation>Özellikler...</translation>
    </message>
    <message>
        <source>Attach (mirror) device...</source>
        <translation>Aygıt tak (yansıla)...</translation>
    </message>
    <message>
        <source>Detach from mirror</source>
        <translation>Yansımadan çıkar</translation>
    </message>
    <message>
        <source>Take offline</source>
        <translation>Çevrimdışına Al</translation>
    </message>
    <message>
        <source>Bring online</source>
        <translation>Çevrimiçine Al</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Kaldır</translation>
    </message>
    <message>
        <source>zpool Menu</source>
        <translation>zhavuz Menüsü</translation>
    </message>
    <message>
        <source>Device Menu</source>
        <translation>Aygıt Menüsü</translation>
    </message>
    <message>
        <source>Unmount</source>
        <translation>Çöz</translation>
    </message>
    <message>
        <source>Mount</source>
        <translation>Bağla</translation>
    </message>
    <message>
        <source>Create MBR partition table</source>
        <translation>MBR bölümleme tablosu oluştur</translation>
    </message>
    <message>
        <source>Create GPT partition table</source>
        <translation>GPT bölümleme tablosu oluştur</translation>
    </message>
    <message>
        <source>Create BSD partition table</source>
        <translation>BSD bölümleme tablosu oluştur</translation>
    </message>
    <message>
        <source>Delete Partition Table</source>
        <translation>Bölümleme Tablosunu Sil</translation>
    </message>
    <message>
        <source>Add new slice</source>
        <translation>Yeni dilim ekle</translation>
    </message>
    <message>
        <source>Add new partition</source>
        <translation>Yeni bölüm ekle</translation>
    </message>
    <message>
        <source>Destroy this slice</source>
        <translation>Bu dilimi yok et</translation>
    </message>
    <message>
        <source>Destroy this partition</source>
        <translation>Bu bölümü yok et</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Uyarı</translation>
    </message>
    <message>
        <source>This operation cannot be undone.
OK to destroy the slice/partition?</source>
        <translation>Bu işlem geri alınamaz.
Dilim/bölüm yok edilsin mi?</translation>
    </message>
    <message>
        <source>An error was detected while executing &apos;%1&apos;:

</source>
        <translation>&apos;%1&apos; yürütülürken bir hata algılandı:

</translation>
    </message>
    <message>
        <source>Error report</source>
        <translation>Hata raporu</translation>
    </message>
    <message>
        <source>An error was detected while executing &apos;zpool&apos;:

</source>
        <translation>&apos;zhavuz&apos; yürütülürken bir hata algılandı:

</translation>
    </message>
    <message>
        <source>An error was detected while executing &apos;zfs&apos;:

</source>
        <translation>&apos;zfs&apos; yürütülürken bir hata algılandı:

</translation>
    </message>
    <message>
        <source>Create new zpool</source>
        <translation>Yeni zhavuz oluştur</translation>
    </message>
    <message>
        <source>Important information</source>
        <translation>Önemli bilgi</translation>
    </message>
    <message>
        <source>The pool was imported in read-only mode, therefore attempting to destroy the pool will leave the pool in the state it was when imported, not necessarily destroyed.</source>
        <translation>Havuz salt okunur modda içe aktarılmış, bu yüzden havuzu yok etmeye çalışmak havuzu içe aktarıldığı durumda bırakacak, yok edilmiş olmayacaktır.</translation>
    </message>
    <message>
        <source>Attach mirror devices to </source>
        <translation>Yansı aygıtlarını şuraya tak </translation>
    </message>
    <message>
        <source>The pool was imported in read-only mode, therefore attempting to export the pool will leave the pool in the state it was when imported, not necessarily exported.</source>
        <translation>Havuz salt okunur modda içe aktarılmış, bu yüzden havuzu dışa aktarmaya çalışmak havuzu içe aktarıldığı durumda bırakacak, dışa aktarılmış olmayacaktır.</translation>
    </message>
    <message>
        <source>Recover destroyed pool as...</source>
        <translation>Yok edilmiş havuzu farklı kurtar...</translation>
    </message>
    <message>
        <source>Import pool as...</source>
        <translation>Havuzu farklı içe aktar...</translation>
    </message>
    <message>
        <source>This pool had been destroyed, and its disks may have been reused. Attempting to recover will destroy any new data that could&apos;ve been stored in the devices that were reused and cannot be recovered.
Proceed with recovery?</source>
        <translation>Havuz yok edilmiş ve diskleri de yeniden kullanılmış olabilir. Yeniden kullanılmış ve kurtarılamayan aygıtları kurtarmaya çalışmak depolanan yeni veriyi yok edecektir.
Kurtarma işlemine geçilsin mi?</translation>
    </message>
    <message>
        <source>The pool was imported in read-only mode, it cannot be renamed.</source>
        <translation>Havuz salt okunur modda içe aktarıldı, yeniden adlandırılamaz.</translation>
    </message>
    <message>
        <source>Add more devices to zpool</source>
        <translation>zhavuz&apos;a daha fazla aygıt ekle</translation>
    </message>
    <message>
        <source>Add log devices to zpool</source>
        <translation>zhavuz&apos;a günlük aygıtları ekle</translation>
    </message>
    <message>
        <source>Add cache devices to zpool</source>
        <translation>zhavuz&apos;a önbellek aygıtları ekle</translation>
    </message>
    <message>
        <source>Add spare devices to zpool</source>
        <translation>zhavuz&apos;a yedek aygıtlar ekle</translation>
    </message>
    <message>
        <source>[Mounted]</source>
        <translation>[Bağlı]</translation>
    </message>
    <message>
        <source>[Not Mounted]</source>
        <translation>[Bağlı değil]</translation>
    </message>
    <message>
        <source> of </source>
        <translation> / </translation>
    </message>
    <message>
        <source>Rename dataset</source>
        <translation>Verisetini yeniden adlandır</translation>
    </message>
    <message>
        <source>Create new dataset</source>
        <translation>Yeni veriseti oluştur</translation>
    </message>
    <message>
        <source>Create a clone dataset</source>
        <translation>Bir klon veriseti oluştur</translation>
    </message>
    <message>
        <source>Destroy dataset</source>
        <translation>Verisetini yok et</translation>
    </message>
    <message>
        <source>Promote filesystem</source>
        <translation>Dosya sistemini yükselt</translation>
    </message>
    <message>
        <source>Take a snapshot</source>
        <translation>Bir anlık görüntü al</translation>
    </message>
    <message>
        <source>Destroy snapshot</source>
        <translation>Anlık görüntüyü yok et</translation>
    </message>
    <message>
        <source>Rollback to this snapshot</source>
        <translation>Bu anlık görüntüye geri al</translation>
    </message>
    <message>
        <source>Edit properties</source>
        <translation>Özellikleri düzenle</translation>
    </message>
    <message>
        <source>zfs Menu</source>
        <translation>zfs Menüsü</translation>
    </message>
    <message>
        <source>This operation cannot be undone and will cause data loss.

You are about to perform the following operation(s):

</source>
        <translation>Bu işlem geri alınamaz ve veri kaybına neden olacaktır.

Şu işlem(ler)i gerçekleştirmek üzeresiniz:

</translation>
    </message>
    <message>
        <source>

Are you sure you want to proceed?

</source>
        <translation>

Devam etmek istediğinize emin misiniz?

</translation>
    </message>
    <message>
        <source>Confirmation</source>
        <translation>Onaylama</translation>
    </message>
    <message>
        <source>Take a new snapshot</source>
        <translation>Yeni bir anlık görüntü al</translation>
    </message>
    <message>
        <source>New name</source>
        <translation>Yeni ad</translation>
    </message>
    <message>
        <source>This operation cannot be undone and will cause all data added after the snapshot to be lost.
Any snapshots created after this one will be deleted, along with any clone filesystems that depend on them.
</source>
        <translation>Bu işlem geri alınamaz ve anlık görüntü sonrası eklenen tüm verinin kaybolmasına neden olacaktır.
Bu anlık görüntüden sonra oluşturulmuş diğer anlık görüntüler, onlara bağlı tüm klon dosya sistemleriyle birlikte silinecektir.
</translation>
    </message>
</context>
</TS>
