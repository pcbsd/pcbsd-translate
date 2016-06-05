<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="ru">
<context>
    <name>DialogFSProp</name>
    <message>
        <source>Dialog</source>
        <translation>Диалог</translation>
    </message>
    <message>
        <source>Apply changes recursively to all descendants</source>
        <translation>Применить изменения рекурсивно для всех потомков</translation>
    </message>
    <message>
        <source>Property</source>
        <translation>Свойство</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Значение</translation>
    </message>
    <message>
        <source>Source</source>
        <translation>Источник</translation>
    </message>
    <message>
        <source>Add user property</source>
        <translation>Добавить свойство пользователя</translation>
    </message>
    <message>
        <source>...</source>
        <translation>...</translation>
    </message>
    <message>
        <source>Remove user property</source>
        <translation>Удалить свойство пользователя</translation>
    </message>
    <message>
        <source>Inherit from parent</source>
        <translation>Наследовать от родителя</translation>
    </message>
    <message>
        <source>Revert changes</source>
        <translation>Отменить измененияОтменить изменения</translation>
    </message>
    <message>
        <source>Controls how ACL entries are inherited when files and directories are created. The values are
discard, noallow, restricted, and passthrough. For a description of these values, see ACL Properties.</source>
        <translation>Наследование управления записью ACL при создании файлов и каталогов.
Значения сбросить, не разрешить, ограничить и проити через.
Для описания этих значений, смотрите свойства ACL.</translation>
    </message>
    <message>
        <source>Controls how an ACL entry is modified during a chmod operation.
The values are discard, groupmask, and passthrough. For a description of
these values, see ACL Properties.</source>
        <translation>Модификация управления записью ACL командой chmod.
Значения сбросить, групповая маска и проити через.
Для описания этих значений, смотрите свойства ACL.</translation>
    </message>
    <message>
        <source>Controls whether the access time for files is updated when they are read.
Turning this property off avoids producing write traffic when reading files and
can result in significant performance gains, though it might confuse mailers and
similar utilities.</source>
        <translation>Обновление управления времени доступа к файлам при считывании.
Отключение этого свойства позволит избежать производство трафика записи при чтении файлов
и может привести к значительному повышению производительности,
хотя это может смутить почтовые и аналогичные этим утилиты.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the amount of disk space available to a dataset
and all its children, assuming no other activity in the pool. Because disk space is
shared within a pool, available space can be limited by various factors including
physical pool size, quotas, reservations, and other datasets within the pool.</source>
        <translation>Свойство Только для чтения, определяет объем дискового пространства,
доступного для набора данных и всех его потомков, не предполагая никакой другой деятельности внутри пула,
так как дисковое пространство разделяется внутри пула.
Доступное пространство может быть ограничено различными факторами,
включая физический размер пула, квоты, резервирование, и другие наборы данных в пуле.</translation>
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
        <translation>Если это свойство установлено в положение Выключено,
файловая система не сможет быть присоединена, и будет игнорироваться &quot;zfs mount -a&quot;.
Установка этого свойства в положение Выключено аналогично настройки свойства точки монтирования как Ничто.
Исключая то, что набор данных по-прежнему имеет нормальное свойство точки монтирования, которое может быть унаследовано.
Установка этого свойства в положение Выключено, позволяет использовать наборы данных исключительно в качестве механизма наследования свойств.
Один из примеров этой настройки canmount=off, которая позволяет иметь два набора данных с одной и той же точкой монтирования,
так что потомки обоих наборов данных появятся в одном том же каталоге, но могут иметь различные унаследованные характеристики.</translation>
    </message>
    <message>
        <source>Controls the checksum used to verify data integrity. The default
value is on, which automatically selects an appropriate algorithm
(currently, fletcher4, but this may change in future releases). The
value off disables integrity checking on user data. Disabling
checksums is NOT a recommended practice.</source>
        <translation>Управление контрольной суммой, используемой для проверки целостности данных.
Значение по умолчанию - Включено, при котором автоматически выбирается соответствующий алгоритм
(в настоящее время это fletcher4, но он может быть изменен в будущих версиях).
Значение - Выключено - отключает проверку целостности данных пользователя.
Отключение контрольных сумм НЕ рекомендуется.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the compression ratio achieved for a dataset,
expressed as a multiplier. Compression can be enabled by the zfs set compression=on
dataset command. The value is calculated from the logical size of all files and the
amount of referenced physical data. It includes explicit savings through the use of
the compression property.</source>
        <translation>Параметр только для чтения, который идентифицирует достигнутый коэффициент сжатия для набора данных, выражается как множитель.
Сжатие может быть включено в ZFS командой набора данных set compression=on.
Значение рассчитывается на основе логического размера всех файлов и объема связанных физических данных.
Оно включает в себя четкие экономии за счет использования свойств сжатия.</translation>
    </message>
    <message>
        <source>Sets the number of copies of user data per file system. These copies
are in addition to any pool-level redundancy. Disk space used by
multiple copies of user data is charged to the corresponding file and
dataset, and counts against quotas and reservations. In addition, the
used property is updated when multiple copies are enabled. Consider setting
this property when the file system is created because changing this property
on an existing file system only affects newly written data.</source>
        <translation>Устанавливает количество копий пользовательских данных в файловой системе.
Эти копии являются дополнительными по отношению к избыточности уровень-пул.
Дисковое пространство, используемое несколькими копиями пользовательских данных,
изменяется на счет соответствующего файла и набора данных, и с учетом квот и оговорок.
Кроме того, используемый параметр обновляется, когда включена множественная копия.
Рассматривайте вопрос об установке этого параметра, при создании файловой системы,
так как изменение этого параметра в существующей файловой системе влияет только на вновь записываемые данные.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the date and time that a dataset was created.</source>
        <translation>Параметр только для чтения, который идентифицирует дату и время, когда набор данных был создан.</translation>
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
        <translation>Настройка дедупликации для набора данных. Значение по умолчанию - Выключено.
Контрольная сумма дедупликации по умолчанию - это sha256 (может измениться в будущем).
Когда дедупликации включена, контрольная сумма определяется здесь, переопределяя параметр контрольной суммы.
Установка значения для проверки имеет тот же эффект, что и настройка sha256 - verify.
Если установлена проверка, ZFS будет делать сравнение байт-в-байт в случае, если два блока имеют такую же сигнатуру,
чтобы убедиться, что содержимое блоков идентично.</translation>
    </message>
    <message>
        <source>The devices property is currently not supported on FreeBSD.</source>
        <translation>Свойства устройства в настоящее время не поддерживается FreeBSD.</translation>
    </message>
    <message>
        <source>Controls whether processes can be executed from within this file
system. The default value is on.</source>
        <translation>Управление процессами, которые могут быть выполнены внутри этой файловой системы.
Значение по умолчанию - Включено.</translation>
    </message>
    <message>
        <source>Read-only property that indicates whether a file system, clone, or snapshot
is currently mounted.</source>
        <translation>Параметр только для чтения, который указывает какая файловая система, клон или снимок в настоящее время присоединены.</translation>
    </message>
    <message>
        <source>Controls the mount point used for this file system. When the mountpoint property
is changed for a file system, the file system and any descendents that inherit the
mount point are unmounted. If the new value is legacy, then they remain unmounted.
Otherwise, they are automatically remounted in the new location if the property was
previously legacy or none, or if they were mounted before the property was changed.
In addition, any shared file systems are unshared and shared in the new location.</source>
        <translation>Определяет точку монтирования, используемую для этой файловой системы.
Когда параметр точки монтирования изменяется для файловой системы, то файловая система и все ее потомки, что наследовали точку монтирования, отсоединяются.
В противном случае, они автоматически переприсоединяются на новое место, если параметр был заранее наследован или его не было,
или, если они были присоединены ранее, и параметр был изменен.
Кроме того, все общие(shared) файловые системы адаптируются и становятся общими на новом месте.</translation>
    </message>
    <message>
        <source>Controls what is cached in the primary cache (ARC). Possible values are all,
none, and metadata. If set to all, both user data and metadata are cached. If
set to none, neither user data nor metadata is cached. If set to metadata, only
metadata is cached.</source>
        <translation>Управление тем, что кэшировать в первичном кэше (ARC). Возможные значения - все, ничего и метаданные.
Если выбрано все, то и пользовательские данные и метаданные кэшируются.
Если выбрано ничего, то ни данные пользователя, ни метаданные не кэшируются.
Если выбрано метаданные, то кэшируются только метаданные.</translation>
    </message>
    <message>
        <source>Read-only property for cloned file systems or volumes that identifies
the snapshot from which the clone was created. The origin cannot be
destroyed (even with the -r or -f option) as long as a clone exists.
Non-cloned file systems have an origin of none.</source>
        <translation>Параметр только для чтения для клонированных файловых систем или томов, который идентифицирует снимок, из которого был создан клон.
Оригинал не может быть уничтожен (даже с -r или -f опцией) так долго как существует клон.
Неклонированные файловые системы имеют оригинал как - ничего.</translation>
    </message>
    <message>
        <source>Limits the amount of disk space a dataset and its descendents can consume.
This property enforces a hard limit on the amount of disk space used,
including all space consumed by descendents, such as file systems and snapshots.
Setting a quota on a descendent of a dataset that already has a quota does not
override the ancestor&apos;s quota, but rather imposes an additional limit.</source>
        <translation>Ограничивает объем дискового пространства для набора данных и его потомков, которое они могут потреблять.
Этот параметр устанавливает жесткий лимит на объем используемого дискового пространства,
в том числе все пространство, занимаемое потомками, такими как файловые системы и снимки.
Установка квоты для дочернего элемента набора данных, который уже имеет квоту,
не отменяет квоту родительского элемента, но устанавливает дополнительный лимит.</translation>
    </message>
    <message>
        <source>Controls whether a dataset can be modified. When set to on,
no modifications can be made.</source>
        <translation>Управление наборами данных, которые могут быть изменены.
Когда выбрано Включено, никаких изменений не может быть сделано.</translation>
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
        <translation>Указывает рекомендуемый размер блока для файлов в файловой системе.
Этот параметр предназначен исключительно для использования с нагрузками баз данных,
как доступ к файлам с фиксированным размером записей.
ZFS автоматически настраивает размер блока в соответствии с внутренними алгоритмами, оптимизированными для типичных моделей доступа.
Использование этого параметра для универсальных файловых систем настоятельно не рекомендуется и может отрицательно повлиять на производительность.
Можно указать размер степенью двойки, больше или равно 512, и меньше, чем или равно 128 Кбайт.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the amount of data accessible by a
dataset, which might or might not be shared with other datasets in the
pool.</source>
        <translation>Параметр только для чтения, который определяет количество данных, доступных в наборе данных,
который может или не может использоваться совместно с другими наборами данных в пуле.</translation>
    </message>
    <message>
        <source>Sets the amount of disk space that a dataset can consume. This property
enforces a hard limit on the amount of space used. This hard limit does
not include disk space used by descendents, such as snapshots and clones.</source>
        <translation>Устанавливает количество дискового пространства, которое набор данных может потреблять.
Этот параметр устанавливает жесткий лимит на количество используемого пространства.
Этот жесткий лимит не включает дисковое пространство, используемое потомками, такими как снимки и клоны.</translation>
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
        <translation>Устанавливает минимальный объем дискового пространства, гарантированного для набора данных, не включая потомков, таких как снимки и клоны.
Когда объем используемого дискового пространства ниже этого значения, набор данных рассматривается так,
как если бы он занимал объем пространства, указанный в refreservation.
Бронирование refreservation учитывается в используемом дисковом пространстве родительского набора данных
и рассчитывается наряду с квотами и бронированием родительского набора данных.
Если выбрана refreservation, то снимок разрешается только, если доступно достаточное количество свободного пространства пула
за пределами этого бронирования для размещения текущего количества байт-ссылок в наборе данных.</translation>
    </message>
    <message>
        <source>Sets the minimum amount of disk space guaranteed to a dataset and its descendents.
When the amount of disk space used is below this value, the dataset is treated as if
it were using the amount of space specified by its reservation. Reservations are
accounted for in the parent dataset&apos;s disk space used, and count against the parent
dataset&apos;s quotas and reservations.</source>
        <translation>Устанавливает минимальный объем дискового пространства гарантированного для набора данных и его потомков.
Когда объем используемого дискового пространства ниже этого значения, набор данных рассматривается так,
как если бы он использовал объем пространства, определяемого его бронированием.
Бронирование учитываются в используемом дисковом пространстве родительского набора данных,
и рассчитывается наряду с квотами и бронированием родительского набора данных.</translation>
    </message>
    <message>
        <source>Controls what is cached in the secondary cache (L2ARC). Possible values are all, none,
and metadata. If set to all, both user data and metadata are cached. If set to none,
neither user data nor metadata is cached. If set to metadata, only metadata is cached.</source>
        <translation>Управление тем, что кэшировать во вторичном кэше (L2ARC). Возможные значения - все, ничего и метаданные.
Если выбрано все, то и пользовательские данные и метаданные кэшируются.
Если выбрано ничего, то ни данные пользователя, ни метаданные не кэшируются.
Если выбрано метаданные, то кэшируются только метаданные.</translation>
    </message>
    <message>
        <source>Controls whether the setuid bit is honored in a file system.</source>
        <translation>Управление частицей установки идентификатора пользователя (the setuid bit) заслуженного в файловой системе.</translation>
    </message>
    <message>
        <source>Controls whether a file system is available over NFS and what
options are used. If set to on, the zfs share command is invoked
with no options. Otherwise, the zfs share command is invoked with
options equivalent to the contents of this property.</source>
        <translation>Управление файловой системой, доступной поверх NFS, и какие опции используются.
Если выбрано Включено, то команда zfs share вызывается без опций.
Иначе, команда zfs share вызывается с опциями, эквивалентными содержимому этого параметра.</translation>
    </message>
    <message>
        <source>The sharesmb property has currently no effect on FreeBSD.</source>
        <translation>Параметр sharesmb не имеет в настоящее время никакого эффекта в FreeBSD.</translation>
    </message>
    <message>
        <source>Controls whether the .zfs directory is hidden or visible in the root of the file system.</source>
        <translation>Управление каталогом .zfs, который скрыт или видимым в корне файловой системы.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the dataset type as filesystem (file system or clone), volume, or snapshot.</source>
        <translation>Параметр только для чтения, определяющий тип набора данных в качестве файловой системы (файловая система или клон), объема, или снимка.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the amount of disk space consumed by a dataset and all its descendents.</source>
        <translation>Параметр только для чтения, определяющий объем дискового пространства, потребляемого набором данных и всех его потомков.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the amount of disk space that is used by
children of this dataset, which would be freed if all the dataset&apos;s children
were destroyed.</source>
        <translation>Параметр только для чтения, определяющий объем дискового пространства, используемого потомками этого набора данных,
который будет освобожден, если все потомки набора данных будут уничтожены.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the amount of disk space that is used by
a dataset itself, which would be freed if the dataset was destroyed, after
first destroying any snapshots and removing any refreservation reservations.</source>
        <translation>Параметр только для чтения, определяющий объем дискового пространства, используемого самим набором данных,
который будет освобожден, если набор данных будет уничтожен, после первого уничтожения любых снимков и удаления любых refreservation бронирований.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the amount of disk space that is used by a
refreservation set on a dataset, which would be freed if the refreservation was
removed.</source>
        <translation>Параметр только для чтения, определяющий объем дискового пространства, используемого refreservation установленной на наборе данных,
который будет освобожден, если refreservation будет удален.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the amount of disk space that is consumed
by snapshots of a dataset. In particular, it is the amount of disk space that
would be freed if all of this dataset&apos;s snapshots were destroyed. Note that
this value is not simply the sum of the snapshots&apos; used properties, because
space can be shared by multiple snapshots.</source>
        <translation>Параметр только для чтения, определяющий объем дискового пространства, используемого снимками набора данных.
В частности, этот объем дискового пространства, который будет освобожден, если все снимки этого набора данных будут уничтожены.
Обратите внимание, что это значение не просто сумма используемых свойств снимков, 
так как пространство может совместно использоваться несколькими снимками.</translation>
    </message>
    <message>
        <source>Identifies the on-disk version of a file system, which is independent of the
pool version. This property can only be set to a later version that is available
from the supported software release.</source>
        <translation>Определяет версию файловой системы на диске, которая не зависит от версии пула.
Этот параметр может быть установлен только в поздних версиях,
которые доступны в поддерживаемых релизах программного обеспечения.</translation>
    </message>
    <message>
        <source>For volumes, specifies the logical size of the volume.</source>
        <translation>Для томов, задает логический размер тома.</translation>
    </message>
    <message>
        <source>For volumes, specifies the block size of the volume.</source>
        <translation>Для томов, задает размер блока тома.</translation>
    </message>
    <message>
        <source>Indicates whether a dataset has been added to a jail.</source>
        <translation>Указывает, был ли добавлен набор данных в jail.</translation>
    </message>
    <message>
        <source>This property is not supported on FreeBSD.</source>
        <translation>Это свойство не поддерживается FreeBSD.</translation>
    </message>
    <message>
        <source>The file system is marked to be destroyed after unmount.</source>
        <translation>Файловая система отмечена для уничтожения после отсоединения.</translation>
    </message>
    <message>
        <source>The compression ratio achieved for the referenced space of this
dataset, expressed as a multiplier.</source>
        <translation>Степень сжатия достигается за счет ссылочного пространстве этого набора данных, выраженное как множитель.</translation>
    </message>
    <message>
        <source>The amount of referenced space written to this dataset since the
previous snapshot.</source>
        <translation>Количество ссылочного пространства, записанного для этого набора данных, после предыдущего снимка.</translation>
    </message>
    <message>
        <source>This property is set to the number of user holds on this snapshot.
</source>
        <translation>Этот параметр устанавливает количество пользователей, удерживаемых в этом снимке.
</translation>
    </message>
    <message>
        <source>Provide a hint to ZFS about handling of synchronous requests in this
dataset.  If logbias is set to latency (the default), ZFS will use
pool log devices (if configured) to handle the requests at low
latency. If logbias is set to throughput, ZFS will not use configured
pool log devices.  ZFS will instead optimize synchronous operations
for global pool throughput and efficient use of resources.</source>
        <translation>Обеспечивает подсказку ZFS об обработке синхронных запросов в этом наборе данных.
Если logbias установлен на латентность (по умолчанию),
ZFS будет использовать журналируемые устройства пула (если настроено) для обработки запросов с низкой латентностью.
Если logbias установлен на пропускную способность,
ZFS не будет использовать сконфигурированные журналируемые устройства пула.
ZFS вместо этого оптимизирует синхронные операции для глобальной пропускной способности пула и эффективного использования ресурсов.</translation>
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
        <translation>Управление поведением синхронных запросов (например fsync(2), O_DSYNC).
Этот параметр принимает следующие значения: 
стандартно:
Это поведение точно определено POSIX обеспечением, 
все синхронные запросы записываются в стабильное хранилище и
все устройства сбрасываются, чтобы данные не кэшировались
контроллерами устройств (по умолчанию).
всегда:
Все транзакции файловой системы записываются и выделяются
прежде чем вернуть их системным вызовам.
Это приводит к большому снижению производительности.
выключено:
Отключение синхронных запросов.
Транзакции файловой системы только периодически стремятся к стабильному хранению.
Эта опция дает высокую производительность.
Тем не менее, это очень опасно, так как ZFS будет игнорировать требования синхронных транзакций приложений, таких как базы данных или NFS.
Администраторы должны использовать эту опцию, только если риски понятны.</translation>
    </message>
    <message>
        <source>This property cannot be changed after the system is created.</source>
        <translation>Этот параметр не может быть изменен после создания системы.</translation>
    </message>
    <message>
        <source>User Property</source>
        <translation>Свойство пользователя</translation>
    </message>
    <message>
        <source>Unknown property or information not available.
Read ZFS manual for more information.</source>
        <translation>Неизвестный параметр или информация не доступна.
Читайте руководство по ZFS для дополнительной информации.</translation>
    </message>
    <message>
        <source>[Invalid]</source>
        <translation>[Недействительный]</translation>
    </message>
    <message>
        <source>[Inherit]</source>
        <translation>[Наследовать]</translation>
    </message>
    <message>
        <source>[Added]</source>
        <translation>[Добавленный]</translation>
    </message>
    <message>
        <source>[Changed]</source>
        <translation>[Измененный]</translation>
    </message>
    <message>
        <source>User property</source>
        <translation>Свойство пользователя</translation>
    </message>
    <message>
        <source>Device Menu</source>
        <translation>Меню устройства</translation>
    </message>
    <message>
        <source>Add new user property</source>
        <translation>Добавить новое свойство пользователя</translation>
    </message>
    <message>
        <source>Delete user property</source>
        <translation>Удалить свойство пользователя</translation>
    </message>
    <message>
        <source>Enables or disables compression for a dataset. The values are on, off, lz4, lzjb, zle, 
gzip and gzip-N. Currently, setting this property to lz4, lzjb, gzip, or gzip-N has the same
effect as setting this property to on. Enabling compression on a file system with
existing data only compresses new data. Existing data remains uncompressed.</source>
        <translation>Включает или отключает сжатие для набора данных. Значения такие как on, off, lz4, lzjb, zle, gzip и gzip-N.
В настоящее время, установка этого параметра в значения lz4, lzjb, gzip, или gzip-N имеет тот же эффект что и установка в значение on.
Включение сжатия в файловой системе с существующими данными приведет к сжатию только новых данных.
Существующие данные останутся несжатыми.</translation>
    </message>
</context>
<context>
    <name>DialogMount</name>
    <message>
        <source>Dialog</source>
        <translation>Диалог</translation>
    </message>
    <message>
        <source>Device to mount:</source>
        <translation>Устройство для присоединения:</translation>
    </message>
    <message>
        <source>(Device)</source>
        <translation>(Устройство)</translation>
    </message>
    <message>
        <source>Mount location:</source>
        <translation>Место присоединения:</translation>
    </message>
    <message>
        <source>...</source>
        <translation>...</translation>
    </message>
    <message>
        <source>Select Directory</source>
        <translation>Выбрать каталог</translation>
    </message>
</context>
<context>
    <name>DialogName</name>
    <message>
        <source>Dialog</source>
        <translation>Диалог</translation>
    </message>
    <message>
        <source>Pool name:</source>
        <translation>Имя пула:</translation>
    </message>
    <message>
        <source>Do not mount any filesystems</source>
        <translation>Никакие файловые системы не присоединены</translation>
    </message>
    <message>
        <source>Read only pool</source>
        <translation>Пул только для чтения</translation>
    </message>
    <message>
        <source>Import options:</source>
        <translation>Параметры импорта:</translation>
    </message>
    <message>
        <source>Mount with alternative root:</source>
        <translation>Присоединить с альтернативным корнем:</translation>
    </message>
    <message>
        <source>Mount all filesystems automatically</source>
        <translation>Автоматически присоединять все файловые системы</translation>
    </message>
    <message>
        <source>Mounting behavior:</source>
        <translation>Поведение присоединения:</translation>
    </message>
    <message>
        <source>Force operation if error (use with caution)</source>
        <translation>Силовая операция при ошибке (используйте с осторожностью)</translation>
    </message>
</context>
<context>
    <name>DialogNewPool</name>
    <message>
        <source>Dialog</source>
        <translation>Диалог</translation>
    </message>
    <message>
        <source>Selected</source>
        <translation>Выбранный</translation>
    </message>
    <message>
        <source>Pool name:</source>
        <translation>Имя пула:</translation>
    </message>
    <message>
        <source>Configuration type:</source>
        <translation>Тип конфигурации:</translation>
    </message>
    <message>
        <source>Striped</source>
        <translation>Полосками (Striped)</translation>
    </message>
    <message>
        <source>Mirror</source>
        <translation>Зеркало</translation>
    </message>
    <message>
        <source>Raid-Z (single parity)</source>
        <translation>Raid-Z (единичная аналогия)</translation>
    </message>
    <message>
        <source>Raid-Z2 (double parity)</source>
        <translation>Raid-Z2 (двойная аналогия)</translation>
    </message>
    <message>
        <source>Raid-Z3 (triple parity)</source>
        <translation>Raid-Z3 (тройная аналогия)</translation>
    </message>
    <message>
        <source>Cache</source>
        <translation>Кэш</translation>
    </message>
    <message>
        <source>Log</source>
        <translation>Журнал</translation>
    </message>
    <message>
        <source>Spare</source>
        <translation>Запасной</translation>
    </message>
    <message>
        <source>Error Description Here</source>
        <translation>Здесь ошибка описания</translation>
    </message>
    <message>
        <source>Must provide a valid pool name</source>
        <translation>Необходимо предоставить действительное имя пула</translation>
    </message>
    <message>
        <source>Must select exactly %1 devices</source>
        <translation>Необходимо выбрать ровно %1 устройство(а)</translation>
    </message>
    <message>
        <source>Must select at least one device</source>
        <translation>Необходимо выбрать по крайней мере одно устройство</translation>
    </message>
</context>
<context>
    <name>DialogPartition</name>
    <message>
        <source>Add Partition</source>
        <translation>Добавить раздел</translation>
    </message>
    <message>
        <source>Add new slice/partition</source>
        <translation>Добавить новую сегмент/раздел</translation>
    </message>
    <message>
        <source>100 GB</source>
        <translation>100 Гб</translation>
    </message>
    <message>
        <source>Device:</source>
        <translation>Устройство:</translation>
    </message>
    <message>
        <source>ada0</source>
        <translation>ada0</translation>
    </message>
    <message>
        <source>Largest available free block:</source>
        <translation>Крупнейший доступный свободный блок:</translation>
    </message>
    <message>
        <source>Total Size:</source>
        <translation>Полный размер:</translation>
    </message>
    <message>
        <source>Current layout:</source>
        <translation>Текущая схема:</translation>
    </message>
    <message>
        <source>Designation</source>
        <translation>Обозначение</translation>
    </message>
    <message>
        <source>Start Sector</source>
        <translation>Начальный сектор</translation>
    </message>
    <message>
        <source>Sector Count</source>
        <translation>Подсчет сектора</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Размер</translation>
    </message>
    <message>
        <source>Color</source>
        <translation>Цвет</translation>
    </message>
    <message>
        <source>New partition Size:</source>
        <translation>Размер нового раздела:</translation>
    </message>
    <message>
        <source>bytes</source>
        <translation>байт</translation>
    </message>
    <message>
        <source>kB</source>
        <translation>кБ</translation>
    </message>
    <message>
        <source>MB</source>
        <translation>МБ</translation>
    </message>
    <message>
        <source>GB</source>
        <translation>ГБ</translation>
    </message>
    <message>
        <source>TB</source>
        <translation>ТБ</translation>
    </message>
    <message>
        <source>Partition type:</source>
        <translation>Тип раздела:</translation>
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
        <translation>freebsd-swap</translation>
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
        <translation>Создать и инициализировать новую файловую систему</translation>
    </message>
    <message>
        <source>** FREE **</source>
        <translation>** СВОБОДНО **</translation>
    </message>
    <message>
        <source>No free space!</source>
        <translation>Нет свободного места!</translation>
    </message>
    <message>
        <source>Align partitions to 1 MB boundary</source>
        <translation>Выравнивать разделы по границе 1 МБ</translation>
    </message>
</context>
<context>
    <name>DialogProp</name>
    <message>
        <source>Edit Pool Properties</source>
        <translation>Изменить свойства пула</translation>
    </message>
    <message>
        <source>Property</source>
        <translation>свойство</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Значение</translation>
    </message>
    <message>
        <source>Total size of the storage pool.</source>
        <translation>Общий размер пула хранения.</translation>
    </message>
    <message>
        <source>Percentage of pool space used.</source>
        <translation>Процент использования пространства пула.</translation>
    </message>
    <message>
        <source>Alternate root directory. If set, this directory is prepended to any
mount points within the pool. This can be used when examining an
unknown pool where the mount points cannot be trusted, or in an
alternate boot environment, where the typical paths are not valid.
altroot is not a persistent property. It is valid only while the
system is up.  Setting altroot defaults to using cachefile=none, though
this may be overridden using an explicit setting.</source>
        <translation>Альтернативный корневой каталог. Если это выбрать, то этот каталог добавляется к любым точкам монтирования внутри пула.
Это может быть использовано при изучении неизвестного пула, где точки монтирования могут быть не верны,
или в качестве альтернативной загрузочной среды, где типичные пути не действительны.
altroot - это не постоянное свойство. Оно справедливо только пока находится в системе.
Установка по умолчанию altroot использует cachefile=none, хотя она может быть изменена явно с помощью параметра.</translation>
    </message>
    <message>
        <source>The current health of the pool.</source>
        <translation>Текущее состояние пула.</translation>
    </message>
    <message>
        <source>A unique identifier for the pool.</source>
        <translation>Уникальный идентификатор пула.</translation>
    </message>
    <message>
        <source>The current on-disk version of the pool. This can be increased, but
never decreased. The preferred method of updating pools is with the
&quot;zpool upgrade&quot; command, though this property can be used when a
specific version is needed for backwards compatibility. This property
can be any number between 1 and the current version reported by
&quot;zpool upgrade -v&quot;.</source>
        <translation>Текущая версия пула на диске. Она может быть увеличена, но не уменьшена.
Предпочтительный способ обновления пулов - с помощью команды &quot;zpool upgrade&quot;,
в том числе этот параметр можно использовать, когда необходима конкретная версия для обратной совместимости.
Этот параметр может принять любое число от 1 до текущей версии, которую сообщает &quot;zpool upgrade -v&quot;.</translation>
    </message>
    <message>
        <source>Identifies the default bootable dataset for the root pool. This
property is expected to be set mainly by the installation and upgrade
programs.</source>
        <translation>Определяет загрузочный набор данных по умолчанию для корневого пула.
Как ожидается, этот параметр будет в основном выставлен путем установки и обновления программ.</translation>
    </message>
    <message>
        <source>Controls whether a non-privileged user is granted access based on the
dataset permissions defined on the dataset. See zfs(8) for more
information on ZFS delegated administration.</source>
        <translation>Управление, получаемое непривилегированным пользователем,
которое предоставляет доступ на основе разрешений набора данных, определенных в наборе данных.
Смотрите ZFS (8) для получения дополнительной информации о ZFS администрировании делегирования.</translation>
    </message>
    <message>
        <source>Controls automatic device replacement. If set to &quot;off&quot;, device
replacement must be initiated by the administrator by using the
&quot;zpool replace&quot; command. If set to &quot;on&quot;, any new device, found in the
same physical location as a device that previously belonged to the
pool, is automatically formatted and replaced. The default behavior
is &quot;off&quot;.  This property can also be referred to by its shortened
column name, &quot;replace&quot;.</source>
        <translation>Управление автоматической заменой устройств.
Если установлено на &quot;Выключено&quot;, то замена должна быть инициирована администратором с помощью команды &quot;zpool replace&quot;.
Если установлено на &quot;Включено&quot;, то любое новое устройство, найденное в том же физическом расположении,
что и устройство ранее пренадлежащее пулу, автоматически форматируется и заменяется.
Значение по умолчанию - &quot;Выключено&quot;. Этот параметр может также указываться сокращенным именем столбца, &quot;replace&quot;.</translation>
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
        <translation>Управление расположением, где кэшируются конфигурация пула.
Обнаружив все пулы на старте системы требуется кэшировать копию данных конфигурации, которая хранится в корневой файловой системе.
Все пулы в этом кэше автоматически импортируются при загрузке системы. В некоторых окружениях, таких как установка и кластеризации,
необходимо кэшировать эту информацию в другом расположении, так как пулы автоматически не импортируются.
Установка этого параметра кэширует конфигурации пула в другом расположении, которое впоследствии может быть импортировано с помощью &quot;zpool import -c&quot;.
Установка параметра в специальное значение &quot;none&quot; создает временный пул, который никогда не кэшируются,
а специальное значение &quot;&quot; (пустая строка) использует расположение по умолчанию.</translation>
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
        <translation>Управление поведением системы в случае катастрофического сбоя пула.
Это происходит, как правило, в результате потери соединения с основным запоминающем устройством(и) или отказа всех устройств в пуле.
Поведение при таком событии определяется следующим образом
подождать
Блокируется весь доступ ввода/вывода, пока подключенные устройства не будут извлечены и ошибки не будут удалены.
Это поведение по умолчанию
продолжить
Возвращается EIO для любой новой записи для запросов ввода/вывода, но позволяется считывать с любого из оставшихся здоровых устройств.
Любые запросы на запись, которые все еще передаются на диск будут заблокированы.

паника
Выводится сообщение на консоль и генерируется система аварийного дампа.
</translation>
    </message>
    <message>
        <source>Controls whether information about snapshots associated with this
pool is output when &quot;zfs list&quot; is run without the -t option. The
default value is off.</source>
        <translation>Управление информацией о снимках, которая ассоциируется с этим пулом при выходе, когда &quot;zfs list&quot; выполняется без опции -t.
Значение по умолчанию &quot;Выключено&quot;.</translation>
    </message>
    <message>
        <source>Controls automatic pool expansion when the underlying LUN is grown.
If set to &quot;on&quot;, the pool will be resized according to the size of the
expanded device. If the device is part of a mirror or raidz then all
devices within that mirror/raidz group must be expanded before the
new space is made available to the pool. The default behavior is
&quot;off&quot;.  This property can also be referred to by its shortened column
name, expand.</source>
        <translation>Управление автоматическим расширением пула, когда основной LUN растет.
Если установлено &quot;Включено&quot;, то пул будет изменен в соответствии с размером расширенного устройства.
Если устройство является частью зеркала или RAIDZ, тогда все устройства внутри этой группы зеркала/RAIDZ должны быть расширены,
до тех пор, пока новое пространство доступно в пуле.
Значение по умолчанию - &quot;Выключено&quot;. Этот параметр может также указываться сокращенным именем столбца, &quot;expand&quot;.</translation>
    </message>
    <message>
        <source>Threshold for the number of block ditto copies. If the reference
count for a deduplicated block increases above this number, a new
ditto copy of this block is automatically stored. Default setting is
0.</source>
        <translation>Предельное количество для блока точной копии.
Если счетчик ссылок для увеличения дедуплицированного блока выше этого числа,
то новая точная копия этого блока автоматически сохраняется. Значение по умолчанию - это 0.</translation>
    </message>
    <message>
        <source>The deduplication ratio specified for a pool, expressed as a multiplier. For
example, a value of 1.76 indicates that 1.76 units of data were stored but
only 1 unit of disk space was actually consumed. See zfs(8) for a description
of the deduplication feature.</source>
        <translation>Отношение дедупликации указывается для пула, выражается как множитель.
Например, значение 1,76 означает, что 1,76 единиц данных были сохранены, но
только 1 единица дискового пространства на самом деле потребляется.
Смотрите ZFS (8) для описания функции дедупликации.</translation>
    </message>
    <message>
        <source>Number of blocks within the pool that are not allocated.</source>
        <translation>Количество блоков пула, которые не выделяются.</translation>
    </message>
    <message>
        <source>Amount of storage space within the pool that has been physically allocated.</source>
        <translation>Объем пространства для хранения внутри пула, который был физически выделен.</translation>
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
        <translation>Если выбрано Включено, пул будет импортирован в режиме только для чтения со следующими ограничениями:
  *   Синхронные данные в целевом журнале не будут доступны
  *   Свойства пула не могут быть изменены
  *   Наборы данных этого пула могут быть установлены только в режим только для чтения
  *   Для записи в пул в режиме только для чтения, требуется экспорт и импорт пула.
</translation>
    </message>
    <message>
        <source>An arbitrary comment string set by the administrator.</source>
        <translation>Произвольная строка комментария устанавливается администратором.</translation>
    </message>
    <message>
        <source>This property has currently no value on FreeBSD.</source>
        <translation>Это свойство не имеет в настоящее время никакого значения на FreeBSD.</translation>
    </message>
</context>
<context>
    <name>DialogfsCreate</name>
    <message>
        <source>New Filesystem</source>
        <translation>Новая файловая система</translation>
    </message>
    <message>
        <source>Name:</source>
        <translation>Имя:</translation>
    </message>
    <message>
        <source>Properties override at creation time:</source>
        <translation>Свойства переопределения в момент создания:</translation>
    </message>
    <message>
        <source>Prevent auto mount (canmount=noauto)</source>
        <translation>Предотвращение автоматического присоединения (canmount=noauto)</translation>
    </message>
    <message>
        <source>Mountpoint</source>
        <translation>Точка монтирования</translation>
    </message>
    <message>
        <source>none</source>
        <translation>none</translation>
    </message>
    <message>
        <source>legacy</source>
        <translation>legacy</translation>
    </message>
    <message>
        <source>[path]</source>
        <translation>[path]</translation>
    </message>
    <message>
        <source>Force UTF-8 only (utf8only=on)</source>
        <translation>Force UTF-8 only (utf8only=on)</translation>
    </message>
    <message>
        <source>Unicode normalization =</source>
        <translation>Unicode normalization =</translation>
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
        <translation>Copies =</translation>
    </message>
    <message>
        <source>Deduplication (dedup=on)</source>
        <translation>Deduplication (dedup=on)</translation>
    </message>
    <message>
        <source>Compression =</source>
        <translation>Compression =</translation>
    </message>
    <message>
        <source>off</source>
        <translation>off</translation>
    </message>
    <message>
        <source>on</source>
        <translation>on</translation>
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
        <translation>Менеджер диска PCBSD</translation>
    </message>
    <message>
        <source>Disks</source>
        <translation>Диски</translation>
    </message>
    <message>
        <source>Device</source>
        <translation>Устройство</translation>
    </message>
    <message>
        <source>State</source>
        <translation>Состояние</translation>
    </message>
    <message>
        <source>ZFS Pools</source>
        <translation>Пулы ZFS</translation>
    </message>
    <message>
        <source>Pool Name</source>
        <translation>Имя пула</translation>
    </message>
    <message>
        <source>Status:</source>
        <translation>Состояние:</translation>
    </message>
    <message>
        <source>TextLabel</source>
        <translation>Текстовая метка</translation>
    </message>
    <message>
        <source>Clear Error</source>
        <translation>Очистить ошибку</translation>
    </message>
    <message>
        <source>poolname</source>
        <translation>имя_пула</translation>
    </message>
    <message>
        <source>ZFS Filesystems</source>
        <translation>Файловые системы ZFS</translation>
    </message>
    <message>
        <source>Filesystems</source>
        <translation>Файловые системы</translation>
    </message>
    <message>
        <source>Status</source>
        <translation>Состояние</translation>
    </message>
    <message>
        <source>Refreshing...</source>
        <translation>Освежить...</translation>
    </message>
    <message>
        <source>No pools available, right click to create a new one...</source>
        <translation>Нет доступных пулов, нажмите правую кнопку мыши, чтобы создать новый...</translation>
    </message>
    <message>
        <source> (No media in drive)</source>
        <translation> (На диске нет среды)</translation>
    </message>
    <message>
        <source>Avaliable</source>
        <translation>Доступен</translation>
    </message>
    <message>
        <source>No disk</source>
        <translation>Нет диска</translation>
    </message>
    <message>
        <source>ZPool: </source>
        <translation>ZPool: </translation>
    </message>
    <message>
        <source>Sliced</source>
        <translation>Сегментирован</translation>
    </message>
    <message>
        <source>Mounted: </source>
        <translation>Присоединен:</translation>
    </message>
    <message>
        <source>Available</source>
        <translation>Доступен</translation>
    </message>
    <message>
        <source>Unmounted</source>
        <translation>Отсоединен</translation>
    </message>
    <message>
        <source>Partitioned</source>
        <translation>Разделен</translation>
    </message>
    <message>
        <source>(Exported)
</source>
        <translation>(Экспортирован)
</translation>
    </message>
    <message>
        <source>(Destroyed)
</source>
        <translation>(Уничтожен)
</translation>
    </message>
    <message>
        <source>Offline</source>
        <translation>Оффлайн</translation>
    </message>
    <message>
        <source>Online</source>
        <translation>Онлайн</translation>
    </message>
    <message>
        <source>Degraded</source>
        <translation>В худшем состоянии</translation>
    </message>
    <message>
        <source>Faulted</source>
        <translation>Ошибочен</translation>
    </message>
    <message>
        <source>Removed</source>
        <translation>Удален</translation>
    </message>
    <message>
        <source>Unavailable</source>
        <translation>Недоступен</translation>
    </message>
    <message>
        <source>Unknown</source>
        <translation>Неизвестен</translation>
    </message>
    <message>
        <source>Create new pool</source>
        <translation>Создать новый пул</translation>
    </message>
    <message>
        <source>Rename pool</source>
        <translation>Переименовать пул</translation>
    </message>
    <message>
        <source>Destroy pool</source>
        <translation>Уничтожить пул</translation>
    </message>
    <message>
        <source>Add devices...</source>
        <translation>Добавить устройства...</translation>
    </message>
    <message>
        <source>Add log devices...</source>
        <translation>Добавить журналируемые устройства...</translation>
    </message>
    <message>
        <source>Add cache devices...</source>
        <translation>Добавить кэшируемые устройства...</translation>
    </message>
    <message>
        <source>Add spare devices...</source>
        <translation>Добавить запасные устройства...</translation>
    </message>
    <message>
        <source>Scrub</source>
        <translation>Очистка</translation>
    </message>
    <message>
        <source>Export pool</source>
        <translation>Экспорт пула</translation>
    </message>
    <message>
        <source>Import pool</source>
        <translation>Импорт пула</translation>
    </message>
    <message>
        <source>Recover destroyed pool</source>
        <translation>Восстановить уничтоженный пул</translation>
    </message>
    <message>
        <source>Properties...</source>
        <translation>Параметры...</translation>
    </message>
    <message>
        <source>Attach (mirror) device...</source>
        <translation>Прикрепить устройство (зеркало)...</translation>
    </message>
    <message>
        <source>Detach from mirror</source>
        <translation>Отделить от зеркала</translation>
    </message>
    <message>
        <source>Take offline</source>
        <translation>Взять оффлайн</translation>
    </message>
    <message>
        <source>Bring online</source>
        <translation>Принести онлайн</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Удалить</translation>
    </message>
    <message>
        <source>zpool Menu</source>
        <translation>Меню zpool</translation>
    </message>
    <message>
        <source>Device Menu</source>
        <translation>Меню устройства</translation>
    </message>
    <message>
        <source>Unmount</source>
        <translation>Отсоединить</translation>
    </message>
    <message>
        <source>Mount</source>
        <translation>Присоединить</translation>
    </message>
    <message>
        <source>Create MBR partition table</source>
        <translation>Создать таблицу разделов MBR</translation>
    </message>
    <message>
        <source>Create GPT partition table</source>
        <translation>Создать таблицу разделов GPT</translation>
    </message>
    <message>
        <source>Create BSD partition table</source>
        <translation>Создать таблицу разделов BSD</translation>
    </message>
    <message>
        <source>Delete Partition Table</source>
        <translation>Удалить таблицу разделов</translation>
    </message>
    <message>
        <source>Add new slice</source>
        <translation>Добавить новый сегмент</translation>
    </message>
    <message>
        <source>Add new partition</source>
        <translation>Добавить новый раздел</translation>
    </message>
    <message>
        <source>Destroy this slice</source>
        <translation>Удалить этот сегмент</translation>
    </message>
    <message>
        <source>Destroy this partition</source>
        <translation>Удалить этот раздел</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Предупреждение</translation>
    </message>
    <message>
        <source>This operation cannot be undone.
OK to destroy the slice/partition?</source>
        <translation>Это действие необратимо.
Вы действительно хотите удалить сегмент или раздел?</translation>
    </message>
    <message>
        <source>An error was detected while executing &apos;%1&apos;:

</source>
        <translation>Была обнаружена ошибка во время выполнения &apos;%1&apos;:

</translation>
    </message>
    <message>
        <source>Error report</source>
        <translation>Отчёт об ошибках</translation>
    </message>
    <message>
        <source>An error was detected while executing &apos;zpool&apos;:

</source>
        <translation>Была обнаружена ошибка во время выполнения &apos;zpool&apos;:

</translation>
    </message>
    <message>
        <source>An error was detected while executing &apos;zfs&apos;:

</source>
        <translation>Была обнаружена ошибка во время выполнения &apos;zfs&apos;:

</translation>
    </message>
    <message>
        <source>Create new zpool</source>
        <translation>Создать новый zpool</translation>
    </message>
    <message>
        <source>Important information</source>
        <translation>Важные сведения</translation>
    </message>
    <message>
        <source>The pool was imported in read-only mode, therefore attempting to destroy the pool will leave the pool in the state it was when imported, not necessarily destroyed.</source>
        <translation>Пул был импортирован в режиме только для чтения, поэтому попытки уничтожить пул приведут пул в состояние в каком он был при импортировании, а не обязательному уничтожению.</translation>
    </message>
    <message>
        <source>Attach mirror devices to </source>
        <translation>Присоединить зеркальные устройства к </translation>
    </message>
    <message>
        <source>The pool was imported in read-only mode, therefore attempting to export the pool will leave the pool in the state it was when imported, not necessarily exported.</source>
        <translation>Пул был импортирован в режиме только для чтения, поэтому попытки экспортировать пул приведут пул в состояние в каком он был при импортировании, а не обязательному экспортированию.</translation>
    </message>
    <message>
        <source>Recover destroyed pool as...</source>
        <translation>Восстановить удаленный пул как…</translation>
    </message>
    <message>
        <source>Import pool as...</source>
        <translation>Импортировать пул как…</translation>
    </message>
    <message>
        <source>This pool had been destroyed, and its disks may have been reused. Attempting to recover will destroy any new data that could&apos;ve been stored in the devices that were reused and cannot be recovered.
Proceed with recovery?</source>
        <translation>Этот пул был уничтожен, и его диски возможно снова использовать. Попытка восстановления уничтожит любые новые данные, которые могли быть сохранены на устройствах, которые были повторно использованы, и не смогут быть восстановлены.
Продолжить восстановление?</translation>
    </message>
    <message>
        <source>The pool was imported in read-only mode, it cannot be renamed.</source>
        <translation>Пул был импортирован в режиме только для чтения, он не может быть переименован.</translation>
    </message>
    <message>
        <source>Add more devices to zpool</source>
        <translation>Добавить дополнительные устройства в zpool</translation>
    </message>
    <message>
        <source>Add log devices to zpool</source>
        <translation>Добавить журналируемые устройства в zpool</translation>
    </message>
    <message>
        <source>Add cache devices to zpool</source>
        <translation>Добавить кэшируемые устройства в zpool</translation>
    </message>
    <message>
        <source>Add spare devices to zpool</source>
        <translation>Добавить запасные устройства в zpool</translation>
    </message>
    <message>
        <source>[Mounted]</source>
        <translation>[Присоединено]</translation>
    </message>
    <message>
        <source>[Not Mounted]</source>
        <translation>[Не присоединено]</translation>
    </message>
    <message>
        <source> of </source>
        <translation> из </translation>
    </message>
    <message>
        <source>Rename dataset</source>
        <translation>Переименовать набор данных</translation>
    </message>
    <message>
        <source>Create new dataset</source>
        <translation>Создать новый набор данных</translation>
    </message>
    <message>
        <source>Create a clone dataset</source>
        <translation>Создать копию набора данных</translation>
    </message>
    <message>
        <source>Destroy dataset</source>
        <translation>Уничтожить набор данных</translation>
    </message>
    <message>
        <source>Promote filesystem</source>
        <translation>Повысить файловую систему</translation>
    </message>
    <message>
        <source>Take a snapshot</source>
        <translation>Сделать снимок</translation>
    </message>
    <message>
        <source>Destroy snapshot</source>
        <translation>Уничтожить снимок</translation>
    </message>
    <message>
        <source>Rollback to this snapshot</source>
        <translation>Вернуть до этого снимка</translation>
    </message>
    <message>
        <source>Edit properties</source>
        <translation>Изменить свойства</translation>
    </message>
    <message>
        <source>zfs Menu</source>
        <translation>Меню zfs</translation>
    </message>
    <message>
        <source>This operation cannot be undone and will cause data loss.

You are about to perform the following operation(s):

</source>
        <translation>Эта операция не может быть отменена, и может привести к потере данных.

Вы собираетесь выполнить следующую операцию(и):

</translation>
    </message>
    <message>
        <source>

Are you sure you want to proceed?

</source>
        <translation>

Вы уверены, что хотите продолжить?

</translation>
    </message>
    <message>
        <source>Confirmation</source>
        <translation>Подтверждение</translation>
    </message>
    <message>
        <source>Take a new snapshot</source>
        <translation>Сделать новый снимок</translation>
    </message>
    <message>
        <source>New name</source>
        <translation>Новое имя</translation>
    </message>
    <message>
        <source>This operation cannot be undone and will cause all data added after the snapshot to be lost.
Any snapshots created after this one will be deleted, along with any clone filesystems that depend on them.
</source>
        <translation>Эта операция не может быть отменена, и это приведет к потере всех данных, добавленных после того, как был сделан снимок.
Любые снимки, созданные после этого снимка, будут удалены вместе со всеми клонами файловых систем, которые зависят от этих снимков.
</translation>
    </message>
</context>
</TS>
