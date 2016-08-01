<?xml version='1.0' encoding='utf-8'?>
<!DOCTYPE TS>
<TS version="2.1" language="de">
<context>
    <name>DialogFSProp</name>
    <message>
        <source>Dialog</source>
        <translation>Dialog</translation>
    </message>
    <message>
        <source>Apply changes recursively to all descendants</source>
        <translation>Änderungen rekursiv auf alle Abkömmlinge anwenden</translation>
    </message>
    <message>
        <source>Property</source>
        <translation>Eigenschaft</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Wert</translation>
    </message>
    <message>
        <source>Source</source>
        <translation>Quelle</translation>
    </message>
    <message>
        <source>Add user property</source>
        <translation>Benutzereigenschaft hinzufügen</translation>
    </message>
    <message>
        <source>...</source>
        <translation>...</translation>
    </message>
    <message>
        <source>Remove user property</source>
        <translation>Benutzereigenschaft entfernen</translation>
    </message>
    <message>
        <source>Inherit from parent</source>
        <translation>Vererbe vom übergeordneten Objekt</translation>
    </message>
    <message>
        <source>Revert changes</source>
        <translation>Änderungen zurücknehmen</translation>
    </message>
    <message>
        <source>Controls how ACL entries are inherited when files and directories are created. The values are
discard, noallow, restricted, and passthrough. For a description of these values, see ACL Properties.</source>
        <translation>Steuert die Vererbung von ACL-Einträgen beim Erstellen von Dateien and Ordnern. Zulässige Werte: discard, noallow, restricted und passthrough. Eine Beschreibung der Werte ist in den ACL-Eigenschaften zu finden.</translation>
    </message>
    <message>
        <source>Controls how an ACL entry is modified during a chmod operation.
The values are discard, groupmask, and passthrough. For a description of
these values, see ACL Properties.</source>
        <translation>Steuert die Modifikation von ACL-Einträgen durch „chmod“-Operationen.
Mögliche Werte sind discard, groupmask und passthrough. Eine Beschreibung dieser Werte ist in den ACL-Eigenschaften zu finden.</translation>
    </message>
    <message>
        <source>Controls whether the access time for files is updated when they are read.
Turning this property off avoids producing write traffic when reading files and
can result in significant performance gains, though it might confuse mailers and
similar utilities.</source>
        <translation>Steuert die Aktualisierung des Zugriffs-Zeitstempels beim Lesen von Dateien.
Das Abschalten dieser Einstellung vermeidet Schreibzugriffe beim Lesen und kann zu signifikanten Leistungssteigerungen führen – allerdings kann es E-Mail-Programme, Datenbanken und ähnliche Werkzeuge verwirren.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the amount of disk space available to a dataset
and all its children, assuming no other activity in the pool. Because disk space is
shared within a pool, available space can be limited by various factors including
physical pool size, quotas, reservations, and other datasets within the pool.</source>
        <translation>Größe des Speicherplatzes, der einem Datensatz und all seinen Kindern zur Verfügung steht (schreibgeschützt). Da der Speicher auf den gesamten Pool verteilt wird, kann der tatsächlich verfügbare Platz aufgrund verschiedener Fakoren begrenzt sein (bspw. durch die physikalische Pool-Größe, Kontingente, Reservierungen und andere Datensätze im Pool).</translation>
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
        <translation>Wenn diese Einstellung deaktiviert ist, kann das Dateisystem nicht eingehängt werden und wird von 'zfs mount -a' ignoriert. Dies entspricht der Einstellung des Einhängepunkts auf „none“ – mit dem Unterschied, dass der Datensatz weiterhin eine normale, vererbbare Einhängepunkt-Eigenschaft besitzt. Die Deaktivierung dieser Option erlaubt Datensätze, welche ausschließlich als Eigenschafts-vererbende Mechanismen benutzt werden können. Zwei Datensätze können somit beispielsweise den gleichen Einhängepunkt besitzen, wodurch die Kinder beider Datensätze im gleichen Verzeichnis erscheinen, jedoch unterschiedlich vererbte Eigenschaften besitzen.</translation>
    </message>
    <message>
        <source>Controls the checksum used to verify data integrity. The default
value is on, which automatically selects an appropriate algorithm
(currently, fletcher4, but this may change in future releases). The
value off disables integrity checking on user data. Disabling
checksums is NOT a recommended practice.</source>
        <translation>Aktiviert die Prüfsumme zur Verifikation der Integrität der Benutzerdaten. Die Voreinstellung ist „aktiv“, wodurch automatisch der passende Algorithmus gewählt wird (momentan „fletcher4“, kann sich in Zukunft aber ändern). Die Deaktivierung der Prüfsumme wird nicht empfohlen.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the compression ratio achieved for a dataset,
expressed as a multiplier. Compression can be enabled by the zfs set compression=on
dataset command. The value is calculated from the logical size of all files and the
amount of referenced physical data. It includes explicit savings through the use of
the compression property.</source>
        <translation>Read-Only Eigenschaft die zeigt, welche Kompressionsrate für ein Dataset erreicht wurde,
angezeigt als Multiplikator. Kompression kann mit dem Dataset Kommando
zfs set compression=on aktiviert werden.Der Wert wird aus der logischen Größe aller Dateien und der Anzahl referenzierter physischer Daten
berechnet. Durch das Nutzen dieser Eigenschaft werden explizit Einsparungen
im Speicherplatz erreicht.</translation>
    </message>
    <message>
        <source>Sets the number of copies of user data per file system. These copies
are in addition to any pool-level redundancy. Disk space used by
multiple copies of user data is charged to the corresponding file and
dataset, and counts against quotas and reservations. In addition, the
used property is updated when multiple copies are enabled. Consider setting
this property when the file system is created because changing this property
on an existing file system only affects newly written data.</source>
        <translation>Setzt die Anzahl der Kopien der Benutzerdaten pro Dateisystem. Diese Kopien
sind zusätzlich zur pool-level Redundanz. Der benötigte Speicherplatz für diese
mehrfachen Kopien orientieren sich an der Datei und Dataset-Größe, diese zählen
ebenfalls bei Quotas und Reservierungen. Überlegen sie diese Option zu aktivieren
wenn das Dateisystem erstellt wird, denn wenn sie diese Option erst später
aktivieren, wird es nur für Daten angewandt welche ab dem Moment geschrieben bzw.
erneut geschrieben werden.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the date and time that a dataset was created.</source>
        <translation>Schreibgeschützte Eigenschaft welche das Datum und die Uhrzeit beinhaltet zu welcher das dataset erstellt wurde.</translation>
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
        <translation>Konfiguriert die Deduplizierung für ein dataset. Der standard Wert ist off.
Für die Deduplizierung ist die standard Prüfsumme sha256 (dieses ändert sich
möglicherweise in der Zukunft). Ist dedup aktiviert, überschreibt die hier
gewählte Prüfsumme den standard Wert. Der gesetzt Wert verify hat den gleichen
Effekt wie sha256,verify.
Ist verify gesetzt, wird ZFS einen Byte-zu-Byte Vergleich ausführen sobald
zwei Blöcke die gleiche Signatur aufweisen. Damit wird sichergestellt, dass
die Blöcke den gleichen Inhalt besitzen.</translation>
    </message>
    <message>
        <source>The devices property is currently not supported on FreeBSD.</source>
        <translation>Die Geräteeinstellungen werden aktuell nicht von FreeBSD unterstützt.</translation>
    </message>
    <message>
        <source>Controls whether processes can be executed from within this file
system. The default value is on.</source>
        <translation>Gibt an, ob Prozesse innerhalb einer Datei
ausgeführt werden dürfen. Standardmäßig erlaubt.</translation>
    </message>
    <message>
        <source>Read-only property that indicates whether a file system, clone, or snapshot
is currently mounted.</source>
        <translation>Read-only Eigenschaft welche angibt ob ein Dateisystem, Clone
oder Snapshot aktuell eingebunden ist.</translation>
    </message>
    <message>
        <source>Controls the mount point used for this file system. When the mountpoint property
is changed for a file system, the file system and any descendents that inherit the
mount point are unmounted. If the new value is legacy, then they remain unmounted.
Otherwise, they are automatically remounted in the new location if the property was
previously legacy or none, or if they were mounted before the property was changed.
In addition, any shared file systems are unshared and shared in the new location.</source>
        <translation>Setzt den Mountpunkt für dieses Dateisystem. Wenn der Mountpunkt
für das Dateisystem sich ändert, wird das Dateisystem und jeder Erbe
welcher unterhalb des Mountpunkts liegt, unmounted. Wenn der neue Wert ungültig ist,
bleiben sie unmounted. Andernfalls werden sie automatisch wieder neu gemounted.
Zusätzlich werden alle Shares automatisch aus der neuen Umgebung heraus wieder geshared.</translation>
    </message>
    <message>
        <source>Controls what is cached in the primary cache (ARC). Possible values are all,
none, and metadata. If set to all, both user data and metadata are cached. If
set to none, neither user data nor metadata is cached. If set to metadata, only
metadata is cached.</source>
        <translation>Steuert was im primären Zwischenpseicher (ARC) zwischengespeichert wird.
Mögliche Werte sind alle, none, und metadata. Ist all gesetzt werden Benutzerdaten
und Metadaten zwischengespeichert. Ist es auf none gesetzt, werden keine Benutzerdaten\und keine Metadaten zwischengespeichert. Ist es auf metadata gesetzt werden nur
Metadaten zwischengespeichert.</translation>
    </message>
    <message>
        <source>Read-only property for cloned file systems or volumes that identifies
the snapshot from which the clone was created. The origin cannot be
destroyed (even with the -r or -f option) as long as a clone exists.
Non-cloned file systems have an origin of none.</source>
        <translation>Schreibgeschützte Eigenschaft für geklonte Dateisysteme, welche das Datum
und die Uhrzeit des Snapshots beinhaltet, aus welchem der Klon erstellt wurde.
Solange der Klon existiert, kann die Quelle nicht zerstört werden (selbst nicht
mit der Option -r oder -f). Nicht geklonte Dateisysteme haben keine Quelle.</translation>
    </message>
    <message>
        <source>Limits the amount of disk space a dataset and its descendents can consume.
This property enforces a hard limit on the amount of disk space used,
including all space consumed by descendents, such as file systems and snapshots.
Setting a quota on a descendent of a dataset that already has a quota does not
override the ancestor's quota, but rather imposes an additional limit.</source>
        <translation>Limitiert die Menge an Festplattenplatz welche ein Dataset und seine Erben
nutzen können. Diese Eigenschaft erzwingt ein Hardlimit auf die Menge des
genutzten Festplattenplatzes, inklusive des gesamten Platzes der von den
Erben genutzt wird (zum Beispiel von Dateisystemen und Snapshots)
Das setzen eines Quota Wertes auf den Erben eines Datasets, welcher schon
ein Quota gesetzt hat, übergeht den vorher gesetzten Quotawert nicht,
es wird nur ein zusätzliches Limit verhängt.</translation>
    </message>
    <message>
        <source>Controls whether a dataset can be modified. When set to on,
no modifications can be made.</source>
        <translation>Kontrolliert ob ein Dataset modifiziert werden kann. Wenn
auf On gesetzt, können keine Modifikationen gemacht werden.</translation>
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
        <translation>Spezifiziert die empfohlene Blockgröße für Dateien im Dateisystem.
Diese Eigenschaft wurde lediglich für die Benutzung innerhalb von
Datenbanken und deren Belastung beim Zugriff auf sogenannte
Fixed-Size Records geschaffen. ZFS bestimmt Blockgrößen automatisch
anhand von internen Algorithmen, optimiert für typische Zugriffsmuster.
Die Nutzung dieser Eigenschaft für den allgemeinen Gebrauch wird
nicht empfohlen. Die gesetzte Größe muss die Potenz aus zwei größer als oder
gleich 512 und weniger als oder gleich 128 KBytes sein.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the amount of data accessible by a
dataset, which might or might not be shared with other datasets in the
pool.</source>
        <translation>Nur lesbare Eigenschaft, welche die Menge des Speichers eines Datasets angbit,
welcher vielleicht oder vielleicht nicht mit anderen Datasets im Pool geteilt werden kann.</translation>
    </message>
    <message>
        <source>Sets the amount of disk space that a dataset can consume. This property
enforces a hard limit on the amount of space used. This hard limit does
not include disk space used by descendents, such as snapshots and clones.</source>
        <translation>Setzt die Menge des Plattenspeichers welcher von einem Dataset genutzt werden kann.
Diese Eigenschaft erzwingt ein hartes Limit des zu nutzenden Speichers. Dieses
harte Limit beinhaltet nicht den Plattenspeicher, welcher von Snapshots oder Clones
genutzt wird.</translation>
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
        <translation>Legt die minimale Menge an Speicherplatz, die einem Dataset garantiert ist, fest.
Dieses schließt Abkömmlinge, wie Snapshots oder Clones nicht ein. Wenn die Menge
an Speicherplatz genutzt wird, welcher unter diesem Wert liegt. Wird das Dataset
behandelt, wie es bei einer Reservierung geschehen würde. Diese refreservation
wird dem übergeordneten Dataset angerechnet und wirkt sich auf dessen Quats und
Reservierungen aus.
Ist die refreservation gesetzt, ist ein Snapshot nur dann mögliche wenn es genug
freien Speicherplatz, außerhalb von Reservierungen,  in einem Pool gibt um die Menge
der referenzierten Bytes im Dataset aufnehmen zu können.</translation>
    </message>
    <message>
        <source>Sets the minimum amount of disk space guaranteed to a dataset and its descendents.
When the amount of disk space used is below this value, the dataset is treated as if
it were using the amount of space specified by its reservation. Reservations are
accounted for in the parent dataset's disk space used, and count against the parent
dataset's quotas and reservations.</source>
        <translation>Legt das Minimum an garantiertem Speicherplatz eines Datasets und dessen Abkömmlingen
fest. Wenn die Anzahl genutzten Speicherplatzes unter diesem Wert liegt, wird das Dataset
so behandelt, als wenn es die Menge Speicherplatz benutzen würde, welche in seiner
Reservierung gesetzt wurde. Reservierungen werden dem Speicherplatz des übergeordneten
Datasets angerechnet und wirken sich auf dessen Quotas und Reservierungen aus.</translation>
    </message>
    <message>
        <source>Controls what is cached in the secondary cache (L2ARC). Possible values are all, none,
and metadata. If set to all, both user data and metadata are cached. If set to none,
neither user data nor metadata is cached. If set to metadata, only metadata is cached.</source>
        <translation>Steuert was im zweichen Cache (L2ARC) zwischengespeichert wird. Mögliche Werte sind,
none und metadata. Wird der Wert auf all gesetzt, wird beides (Benutzer- und Metadaten)
zwischengespeichert. Wird none gesetzt, wird nichts (keine Benutzer- oder Metadaten)
zwischengespeichert. Wird metadata gesetzt, werden nur Metadaten zwischengespeichert.</translation>
    </message>
    <message>
        <source>Controls whether the setuid bit is honored in a file system.</source>
        <translation>Steuert ob das setuid bit vom Dateisystem berücksichtigt wird.</translation>
    </message>
    <message>
        <source>Controls whether a file system is available over NFS and what
options are used. If set to on, the zfs share command is invoked
with no options. Otherwise, the zfs share command is invoked with
options equivalent to the contents of this property.</source>
        <translation>Steuert ob und mit welchen Optionen ein Dateisystem per NFS
erreichbar ist. Ist es auf on gesetzt ist das zfs share command
ohne weitere Optionen aktiv. Sind Optionen gesetzt ist das
zfs share command mit diesen Optionen aktiviert.</translation>
    </message>
    <message>
        <source>The sharesmb property has currently no effect on FreeBSD.</source>
        <translation>Die sharesmb Option hat im Moment keinen Effekt in FreeBSD.</translation>
    </message>
    <message>
        <source>Controls whether the .zfs directory is hidden or visible in the root of the file system.</source>
        <translation>Steuert ob der .zfs Ordner im root des Dateisystems sichtbar oder unsichtbar ist.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the dataset type as filesystem (file system or clone), volume, or snapshot.</source>
        <translation>Nur lesbare Eigenschaft welche angbit ob es sich bei dem Dataset um ein filesystem (Dateisystem oder Clone), Volume oder Snapshot handelt. </translation>
    </message>
    <message>
        <source>Read-only property that identifies the amount of disk space consumed by a dataset and all its descendents.</source>
        <translation>Schreibgeschützte Eigenschaft die angibt wieviel Speicherplatz von einem Datasets und allen untergeordneten benutzt wird.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the amount of disk space that is used by
children of this dataset, which would be freed if all the dataset's children
were destroyed.</source>
        <translation>Schreibgeschützte Eigenschaft die angibt wieviel Speichplatz von Kindern
dieses Datasets genutzt wird. Dieser wird frei, wenn alle Kinder dieses
Datasets zerstört werden.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the amount of disk space that is used by
a dataset itself, which would be freed if the dataset was destroyed, after
first destroying any snapshots and removing any refreservation reservations.</source>
        <translation>Schreibgeschützte Eigenschaft, die angibt wie viel Speicherplatz vom Datensatz belegt wird,
und wie viel Speicherplatz freigegeben würde, wenn der Datensatz gelöscht würde
(nach Löschen aller Snapshots und Entfernen aller Reservierungen).</translation>
    </message>
    <message>
        <source>Read-only property that identifies the amount of disk space that is used by a
refreservation set on a dataset, which would be freed if the refreservation was
removed.</source>
        <translation>Schreibgeschützte Eigenschaft, die angibt wie viel Speicherplatz von der RefReservierung belegt wird,
und wie viel Speicherplatz freigegeben würde, wenn die RefReservierung gelöscht würde.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the amount of disk space that is consumed
by snapshots of a dataset. In particular, it is the amount of disk space that
would be freed if all of this dataset's snapshots were destroyed. Note that
this value is not simply the sum of the snapshots' used properties, because
space can be shared by multiple snapshots.</source>
        <translation>Schreibgeschützte Eigenschaft, die angibt wie viel Speicherplatz von
Snapshots dieses Datensatzes belegt wird, und wie viel Speicherplatz
freigegeben würde wenn alle Snapshots des Datensatzes gelöscht würden.
(Da Snapshots Speicherplatz gemeinsam nutzen können, ist dies
nicht unbedingt die Summe des Platzbedarfs aller Snapshots).</translation>
    </message>
    <message>
        <source>Identifies the on-disk version of a file system, which is independent of the
pool version. This property can only be set to a later version that is available
from the supported software release.</source>
        <translation>Identifiziert die verwendete Dateisystemversion, welche unabhängig von
der Poolversion ist. Die Eigenschaft kann nur auf eine neuere Version
gesetzt werden, wenn diese vom Release zur Verfügung gestellt wird.</translation>
    </message>
    <message>
        <source>For volumes, specifies the logical size of the volume.</source>
        <translation>Für Laufwerke, bestimmt die logische Größe des Laufwerks.</translation>
    </message>
    <message>
        <source>For volumes, specifies the block size of the volume.</source>
        <translation>Für Laufwerke, bestimmt die Blockgröße des Laufwerks.</translation>
    </message>
    <message>
        <source>Indicates whether a dataset has been added to a jail.</source>
        <translation>Zeigt an, ob ein Datensatz zum Jail hinzugefügt wurde.</translation>
    </message>
    <message>
        <source>This property is not supported on FreeBSD.</source>
        <translation>Diese Eigenschaft wird von FreeBSD nicht unterstützt.</translation>
    </message>
    <message>
        <source>The file system is marked to be destroyed after unmount.</source>
        <translation>Das Dateisystem wird nach dem Aushängen zerstört.</translation>
    </message>
    <message>
        <source>The compression ratio achieved for the referenced space of this
dataset, expressed as a multiplier.</source>
        <translation>Die Kompressionsrate für diesen Datensatz, dargestellt als Faktor.</translation>
    </message>
    <message>
        <source>The amount of referenced space written to this dataset since the
previous snapshot.</source>
        <translation>Die Menge an Speicherplatz, die seit dem letzten Snapshot beschrieben wurde.</translation>
    </message>
    <message>
        <source>This property is set to the number of user holds on this snapshot.
</source>
        <translation>Dieser Wert entspricht der Anzahl Holds auf diesen Snapshot.
</translation>
    </message>
    <message>
        <source>Provide a hint to ZFS about handling of synchronous requests in this
dataset.  If logbias is set to latency (the default), ZFS will use
pool log devices (if configured) to handle the requests at low
latency. If logbias is set to throughput, ZFS will not use configured
pool log devices.  ZFS will instead optimize synchronous operations
for global pool throughput and efficient use of resources.</source>
        <translation>ZFS einen Anhaltspunkt zum handling von synchronen Anfragen auf
diesem Dataset geben.  Wenn logbias auf Latenz gesetz ist (Standard),
wird ZFS die Log-Geräte des Pools nutzen (sofern Konfiguriert), um
Anfragen mit niedriger Latenz zu bearbeiten. Wenn logbias auf Durchsatz
gesetzt ist, wird ZFS diese Log-Geräte nicht verwenden. Stattdessen
werden synchrone Operationen optimiert, um den Durchsatz des
gesamten Pools zu verbessern, und Ressourcen effizienter zu nutzen.</translation>
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
        <translation>Bestimmt das Verhalten bei synchronen Anfragen (z.B.  fsync(2),
O_DSYNC). Folgende Werte sind möglich:
Standard   Das POSIX-spezifizierte Verhalten stellt sicher, dass alle
          synchronen Anfragen in permanenten Speicher geschrieben
          werden und flush auf alle Geräten ausgeführt wird, um sicher
          zu stellen, dass Daten nicht vom Controller zwischengespeichert
          werden. (Dies ist die Standardeinstellung)./nImmer       Alle Transaktionen des Systems werden geschrieben und
          geflusht bevor der Systemaufruf bestätigt wird. Dies bewirkt
          erhebliche Leistungseinbußen.
Deaktiviert  Synchrone Anfragen werden deaktiviert. Dateisystem-
          transaktionen werden nur periodisch geschrieben. Diese Einstellung
          erzielt die höchste Leistung, kann aber gefährlich sein, da ZFS die
          synchronen Transaktionen von Anwendungen z.B. von Datenbanken
          oder NFS missachtet.   Administratoren sollten diese Option nur
          nutzen, wenn die verbundenen Risiken verstanden werden.</translation>
    </message>
    <message>
        <source>This property cannot be changed after the system is created.</source>
        <translation>Diese Eigenschaft kann nicht mehr geändert werden, nachdem das
Dateisystem eingerichtet wurde.</translation>
    </message>
    <message>
        <source>User Property</source>
        <translation>Benutzereigenschaft</translation>
    </message>
    <message>
        <source>Unknown property or information not available.
Read ZFS manual for more information.</source>
        <translation>Unbekannte Eigenschaft, oder keine Informationen verfügbar.
Für weitergehende Informationen lesen Sie das ZFS manual.</translation>
    </message>
    <message>
        <source>[Invalid]</source>
        <translation>[Ungültig]</translation>
    </message>
    <message>
        <source>[Inherit]</source>
        <translation>[erben]</translation>
    </message>
    <message>
        <source>[Added]</source>
        <translation>[Hinzugefügt]</translation>
    </message>
    <message>
        <source>[Changed]</source>
        <translation>[geändert]</translation>
    </message>
    <message>
        <source>User property</source>
        <translation>Benutzereigenschaft</translation>
    </message>
    <message>
        <source>Device Menu</source>
        <translation>Gerätemenü</translation>
    </message>
    <message>
        <source>Add new user property</source>
        <translation>Neue Benutzereigenschaft hinzufügen</translation>
    </message>
    <message>
        <source>Delete user property</source>
        <translation>Benutzereigenschaft löschen</translation>
    </message>
    <message>
        <source>Enables or disables compression for a dataset. The values are on, off, lz4, lzjb, zle, 
gzip and gzip-N. Currently, setting this property to lz4, lzjb, gzip, or gzip-N has the same
effect as setting this property to on. Enabling compression on a file system with
existing data only compresses new data. Existing data remains uncompressed.</source>
        <translation>Schaltet Kompression für einen Datensatz an oder aus. Erlaubte Werte sind
an, aus, lz4, lzjb, zle, gzip und gzip-N. Derzeit haben die Werte lz4, lzjb, gzip und gzip-N
denselben Effekt wie der Wert an. Einschalten der Kompression belässt bestehende
Daten unkomprimiert, nur neu hinzugefügte Daten werden komprimiert.</translation>
    </message>
</context>
<context>
    <name>DialogMount</name>
    <message>
        <source>Dialog</source>
        <translation>Dialog</translation>
    </message>
    <message>
        <source>Device to mount:</source>
        <translation>Einzuhängendes Gerät:</translation>
    </message>
    <message>
        <source>(Device)</source>
        <translation>(Gerät)</translation>
    </message>
    <message>
        <source>Mount location:</source>
        <translation>Pfad zum Einhängen:</translation>
    </message>
    <message>
        <source>...</source>
        <translation>...</translation>
    </message>
    <message>
        <source>Select Directory</source>
        <translation>Ordner wählen</translation>
    </message>
</context>
<context>
    <name>DialogName</name>
    <message>
        <source>Dialog</source>
        <translation>Dialog</translation>
    </message>
    <message>
        <source>Pool name:</source>
        <translation>Pool Name:</translation>
    </message>
    <message>
        <source>Do not mount any filesystems</source>
        <translation>Mounte keine Dateisysteme.</translation>
    </message>
    <message>
        <source>Read only pool</source>
        <translation>Schreibgeschützter Pool</translation>
    </message>
    <message>
        <source>Import options:</source>
        <translation>Importoptionen:</translation>
    </message>
    <message>
        <source>Mount with alternative root:</source>
        <translation>Mounten mit alternativem root:</translation>
    </message>
    <message>
        <source>Mount all filesystems automatically</source>
        <translation>Alle Dateisysteme automatisch mounten</translation>
    </message>
    <message>
        <source>Mounting behavior:</source>
        <translation>Mountverhalten:</translation>
    </message>
    <message>
        <source>Force operation if error (use with caution)</source>
        <translation>Erzwinge Vorgang bei Fehlern (mit Vorsicht benutzen)</translation>
    </message>
</context>
<context>
    <name>DialogNewPool</name>
    <message>
        <source>Dialog</source>
        <translation>Dialog</translation>
    </message>
    <message>
        <source>Selected</source>
        <translation>Ausgewählt</translation>
    </message>
    <message>
        <source>Pool name:</source>
        <translation>Pool Name:</translation>
    </message>
    <message>
        <source>Configuration type:</source>
        <translation>Art der Konfiguration:</translation>
    </message>
    <message>
        <source>Striped</source>
        <translation>Striped</translation>
    </message>
    <message>
        <source>Mirror</source>
        <translation>Spiegel</translation>
    </message>
    <message>
        <source>Raid-Z (single parity)</source>
        <translation>Raid-Z (einfache Parität)</translation>
    </message>
    <message>
        <source>Raid-Z2 (double parity)</source>
        <translation>Raid-Z2 (doppelte Parität)</translation>
    </message>
    <message>
        <source>Raid-Z3 (triple parity)</source>
        <translation>Raid-Z3 (dreifache Parität)</translation>
    </message>
    <message>
        <source>Cache</source>
        <translation>Lesezwischenspeicher</translation>
    </message>
    <message>
        <source>Log</source>
        <translation>Schreibzwischenspeicher</translation>
    </message>
    <message>
        <source>Spare</source>
        <translation>Ersatz</translation>
    </message>
    <message>
        <source>Error Description Here</source>
        <translation>Fehlerbeschreibung</translation>
    </message>
    <message>
        <source>Must provide a valid pool name</source>
        <translation>Es muss ein gültiger Pool Name angegeben werden</translation>
    </message>
    <message>
        <source>Must select exactly %1 devices</source>
        <translation>Es müssen exakt %1 Geräte ausgewählt werden</translation>
    </message>
    <message>
        <source>Must select at least one device</source>
        <translation>Es muss wenigstens ein Gerät ausgewählt werden</translation>
    </message>
</context>
<context>
    <name>DialogPartition</name>
    <message>
        <source>Add Partition</source>
        <translation>Partition hinzufügen</translation>
    </message>
    <message>
        <source>Add new slice/partition</source>
        <translation>Neue Partition/Slice hinzufügen</translation>
    </message>
    <message>
        <source>100 GB</source>
        <translation>100 GB</translation>
    </message>
    <message>
        <source>Device:</source>
        <translation>Gerät:</translation>
    </message>
    <message>
        <source>ada0</source>
        <translation>ada0</translation>
    </message>
    <message>
        <source>Largest available free block:</source>
        <translation>Größter verfügbarer freier Block:</translation>
    </message>
    <message>
        <source>Total Size:</source>
        <translation>Gesamtgröße:</translation>
    </message>
    <message>
        <source>Current layout:</source>
        <translation>Aktuelles Festplattenlayout:</translation>
    </message>
    <message>
        <source>Designation</source>
        <translation>Bereitstellung</translation>
    </message>
    <message>
        <source>Start Sector</source>
        <translation>Startsektor</translation>
    </message>
    <message>
        <source>Sector Count</source>
        <translation>Sektoranzahl</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Größe</translation>
    </message>
    <message>
        <source>Color</source>
        <translation>Farbe</translation>
    </message>
    <message>
        <source>New partition Size:</source>
        <translation>Neue Partitionsgröße:</translation>
    </message>
    <message>
        <source>bytes</source>
        <translation>Bytes</translation>
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
        <translation>Partitionstyp:</translation>
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
        <translation>Erstelle und initialisiere neues Dateisystem</translation>
    </message>
    <message>
        <source>** FREE **</source>
        <translation>** FREI **</translation>
    </message>
    <message>
        <source>No free space!</source>
        <translation>Kein freier Platz!</translation>
    </message>
    <message>
        <source>Align partitions to 1 MB boundary</source>
        <translation>Partitionen an 1MB-Grenzen anordnen</translation>
    </message>
</context>
<context>
    <name>DialogProp</name>
    <message>
        <source>Edit Pool Properties</source>
        <translation>Pool-Eigenschaften bearbeiten</translation>
    </message>
    <message>
        <source>Property</source>
        <translation>Eigenschaft</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Wert</translation>
    </message>
    <message>
        <source>Total size of the storage pool.</source>
        <translation>Gesamtgröße des Pools.</translation>
    </message>
    <message>
        <source>Percentage of pool space used.</source>
        <translation>Prozentual benutzter Pool Speicherplatz.</translation>
    </message>
    <message>
        <source>Alternate root directory. If set, this directory is prepended to any
mount points within the pool. This can be used when examining an
unknown pool where the mount points cannot be trusted, or in an
alternate boot environment, where the typical paths are not valid.
altroot is not a persistent property. It is valid only while the
system is up.  Setting altroot defaults to using cachefile=none, though
this may be overridden using an explicit setting.</source>
        <translation>Alternatives root-Verzeichniss. Falls gesetzt, wird dieser Pfad allen
Mountpunkten des Pools vorangestellt. Dies kann genutzt werden,
um einen unbekannten Pool zu untersuchen, dessen Mountpunkte
nicht bekannt sind, oder bei einer alternativen Bootumgebung, in der
die üblichen Pfade nicht gültig sind. altroot ist keine persistente Option.
Sie ist nur währrend der Systemlaufzeit gültig.   Das Setzen von altroot
führt Standardmäßig zur Verwendung von cachefile=none, kann aber
durch explizites Setzen des Wertes geändert werden.</translation>
    </message>
    <message>
        <source>The current health of the pool.</source>
        <translation>Aktueller Gesundheitszustand des Pools.</translation>
    </message>
    <message>
        <source>A unique identifier for the pool.</source>
        <translation>Eine eindeutige Kennung für den Pool.</translation>
    </message>
    <message>
        <source>The current on-disk version of the pool. This can be increased, but
never decreased. The preferred method of updating pools is with the
"zpool upgrade" command, though this property can be used when a
specific version is needed for backwards compatibility. This property
can be any number between 1 and the current version reported by
"zpool upgrade -v".</source>
        <translation>Die derzeitige Version des Pools auf der Festplatte. Diese kann
erhöht, aber niemals verringert werden. Die bevorzugte Methode, einen
Pool zu aktualisieren, ist "zpool upgrade". Dies kann auch genutzt werden,
wenn eine spezifische Version zur Rückwärtskompatibilität benötigt wird.
Dieser Wert kann jede Zahl zwischen 1 und der aktuellen Version,
ausgegeben durch "zpool upgrade -v", sein.</translation>
    </message>
    <message>
        <source>Identifies the default bootable dataset for the root pool. This
property is expected to be set mainly by the installation and upgrade
programs.</source>
        <translation>Bestimmt das standardmäßig bootbare Dataset des root-Pools. Dieser
Wert wird hauptsächlich von den Installations- und Upgradeprogrammen
gesetzt.</translation>
    </message>
    <message>
        <source>Controls whether a non-privileged user is granted access based on the
dataset permissions defined on the dataset. See zfs(8) for more
information on ZFS delegated administration.</source>
        <translation>Bestimmt ob ein nicht-privilegierter Benutzer zugriff gemäß den
definierten Berechtigungen des Datasets erhält. Siehe zfs(8) für
weitere Informationen zur Administration mit ZFS delegation.</translation>
    </message>
    <message>
        <source>Controls automatic device replacement. If set to "off", device
replacement must be initiated by the administrator by using the
"zpool replace" command. If set to "on", any new device, found in the
same physical location as a device that previously belonged to the
pool, is automatically formatted and replaced. The default behavior
is "off".  This property can also be referred to by its shortened
column name, "replace".</source>
        <translation>Kontrolliert das automatische Ersetzen von Geräten. Wenn auf "Aus"
gesetzt, muss der Austausch durch den Administrator mithilfe von
"zpool replace" ausgelöst werden. Wird der Wert auf "Ein" gesetzt,
wird jedes neue Gerät, das an der selben physischen Position eines zuvor
entfernten Pool-Mitglieds erkannt wird, automatisch formatiert und ersetzt.
Das Standardverhalten ist "Aus".   Auf diesen Wert kann auch durch die
Spalte "replace" verwiesen werden.</translation>
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
        <translation>Bestimmt den Ort, an dem die Pool-Konfiguration zwischengespeichert
wird. Um alle Pools beim Systemstart zu erkennen, wird eine Kopie des
Caches der Konfigurationsdaten auf dem root-Dateisystem benötigt.
Alle Pools in diesem Cache werden automatisch bei Systemstart
importiert. Manche Umgebungen, wie Installer und Cluster, müssen
diesen Cache an einem anderen Ort speichern, damit die Pools nicht
automatisch importiert werden. Das Setzen dieses Merkmals speichert
den Cache der Pool-Konfiguration an einem anderen Ort, damit dieser
später mittels "zpool import -c" importiert werden kann.  Der spezielle
Wert "none" erzeugt einen temporären Pool, dessen Cache niemals
gespeichert wird. Bleibt der Wert leer, wird der standardmäßige
Speicherort verwendet.</translation>
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
        <translation>Diese Eigenschaft hat derzeit keinen Wert auf FreeBSD.</translation>
    </message>
</context>
<context>
    <name>DialogfsCreate</name>
    <message>
        <source>New Filesystem</source>
        <translation>Neues Dateisystem</translation>
    </message>
    <message>
        <source>Name:</source>
        <translation>Name:</translation>
    </message>
    <message>
        <source>Properties override at creation time:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Prevent auto mount (canmount=noauto)</source>
        <translation>Automatisches Einhängen verhindern (canmount=noauto)</translation>
    </message>
    <message>
        <source>Mountpoint</source>
        <translation>Einhängepunkt</translation>
    </message>
    <message>
        <source>none</source>
        <translation>keins</translation>
    </message>
    <message>
        <source>legacy</source>
        <translation>veraltet</translation>
    </message>
    <message>
        <source>[path]</source>
        <translation>[Pfad]</translation>
    </message>
    <message>
        <source>Force UTF-8 only (utf8only=on)</source>
        <translation>Erzwinge nur UTF-8 (utf8only=on)</translation>
    </message>
    <message>
        <source>Unicode normalization =</source>
        <translation>Unicode-Normalisierung =</translation>
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
        <translation>Kopien =</translation>
    </message>
    <message>
        <source>Deduplication (dedup=on)</source>
        <translation>Deduplikation (dedup=on)</translation>
    </message>
    <message>
        <source>Compression =</source>
        <translation>Komprimierung =</translation>
    </message>
    <message>
        <source>off</source>
        <translation>aus</translation>
    </message>
    <message>
        <source>on</source>
        <translation>ein</translation>
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
        <translation>PCBSD-Festplattenverwaltung</translation>
    </message>
    <message>
        <source>Disks</source>
        <translation>Festplatten</translation>
    </message>
    <message>
        <source>Device</source>
        <translation>Gerät</translation>
    </message>
    <message>
        <source>State</source>
        <translation>Status</translation>
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
        <translation>Status:</translation>
    </message>
    <message>
        <source>TextLabel</source>
        <translation>Textfeld</translation>
    </message>
    <message>
        <source>Clear Error</source>
        <translation>Fehler löschen</translation>
    </message>
    <message>
        <source>poolname</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>ZFS Filesystems</source>
        <translation>ZFS-Dateisysteme</translation>
    </message>
    <message>
        <source>Filesystems</source>
        <translation>Dateisysteme</translation>
    </message>
    <message>
        <source>Status</source>
        <translation>Status</translation>
    </message>
    <message>
        <source>Refreshing...</source>
        <translation>Aktualisierungsvorgang...</translation>
    </message>
    <message>
        <source>No pools available, right click to create a new one...</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source> (No media in drive)</source>
        <translation> (Kein Medium im Laufwerk)</translation>
    </message>
    <message>
        <source>Avaliable</source>
        <translation>Verfügbar</translation>
    </message>
    <message>
        <source>No disk</source>
        <translation>Keine Festplatte</translation>
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
        <translation>Eingehängt: </translation>
    </message>
    <message>
        <source>Available</source>
        <translation>Verfügbar</translation>
    </message>
    <message>
        <source>Unmounted</source>
        <translation>Nicht eingehängt</translation>
    </message>
    <message>
        <source>Partitioned</source>
        <translation>Partitioniert</translation>
    </message>
    <message>
        <source>(Exported)
</source>
        <translation>(exportiert)
</translation>
    </message>
    <message>
        <source>(Destroyed)
</source>
        <translation>(Zerstört)
</translation>
    </message>
    <message>
        <source>Offline</source>
        <translation>Abgemeldet</translation>
    </message>
    <message>
        <source>Online</source>
        <translation>Angemeldet</translation>
    </message>
    <message>
        <source>Degraded</source>
        <translation>Herabgesetzt</translation>
    </message>
    <message>
        <source>Faulted</source>
        <translation>Fehlerhaft</translation>
    </message>
    <message>
        <source>Removed</source>
        <translation>Entfernt</translation>
    </message>
    <message>
        <source>Unavailable</source>
        <translation>Nicht verfügbar</translation>
    </message>
    <message>
        <source>Unknown</source>
        <translation>Unbekannt</translation>
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
        <translation>Geräte hinzufügen...</translation>
    </message>
    <message>
        <source>Add log devices...</source>
        <translation>Protokollierungsgeräte hinzufügen...</translation>
    </message>
    <message>
        <source>Add cache devices...</source>
        <translation>Cache-Geräte hinzufügen...</translation>
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
        <translation>Eigenschaften...</translation>
    </message>
    <message>
        <source>Attach (mirror) device...</source>
        <translation>(Spiegel-)Gerät verknüpfen...</translation>
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
        <translation>Entfernen</translation>
    </message>
    <message>
        <source>zpool Menu</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Device Menu</source>
        <translation>Gerätemenü</translation>
    </message>
    <message>
        <source>Unmount</source>
        <translation>Aushängen</translation>
    </message>
    <message>
        <source>Mount</source>
        <translation>Einhängen</translation>
    </message>
    <message>
        <source>Create MBR partition table</source>
        <translation>MBR-Partitionstabelle erzeugen</translation>
    </message>
    <message>
        <source>Create GPT partition table</source>
        <translation>GPT-Partitionstabelle erzeugen</translation>
    </message>
    <message>
        <source>Create BSD partition table</source>
        <translation>BSD-Partitionstabelle erzeugen</translation>
    </message>
    <message>
        <source>Delete Partition Table</source>
        <translation>Partitionstabelle löschen</translation>
    </message>
    <message>
        <source>Add new slice</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Add new partition</source>
        <translation>Neue Partition hinzufügen</translation>
    </message>
    <message>
        <source>Destroy this slice</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Destroy this partition</source>
        <translation>Diese Partition zerstören</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Warnung</translation>
    </message>
    <message>
        <source>This operation cannot be undone.
OK to destroy the slice/partition?</source>
        <translation>Dieser Vorgang kann nicht rückgängig gemacht werden.
OK zum Zerstören des Slices/der Partition?</translation>
    </message>
    <message>
        <source>An error was detected while executing '%1':

</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Error report</source>
        <translation>Fehlerbericht</translation>
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
        <translation>Wichtige Information</translation>
    </message>
    <message>
        <source>The pool was imported in read-only mode, therefore attempting to destroy the pool will leave the pool in the state it was when imported, not necessarily destroyed.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Attach mirror devices to </source>
        <translation>Spiegelgeräte verknüpfen zu </translation>
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
        <translation>[Eingehängt]</translation>
    </message>
    <message>
        <source>[Not Mounted]</source>
        <translation>[Nicht eingehängt]</translation>
    </message>
    <message>
        <source> of </source>
        <translation> von </translation>
    </message>
    <message>
        <source>Rename dataset</source>
        <translation>Datensatz umbenennen</translation>
    </message>
    <message>
        <source>Create new dataset</source>
        <translation>Neuen Datensatz erstellen</translation>
    </message>
    <message>
        <source>Create a clone dataset</source>
        <translation>Klondatensatz erstellen</translation>
    </message>
    <message>
        <source>Destroy dataset</source>
        <translation>Datensatz zerstören</translation>
    </message>
    <message>
        <source>Promote filesystem</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>Take a snapshot</source>
        <translation>Schnappschuss machen</translation>
    </message>
    <message>
        <source>Destroy snapshot</source>
        <translation>Schnappschuss zerstören</translation>
    </message>
    <message>
        <source>Rollback to this snapshot</source>
        <translation>Auf diesen Schnappschuss zurückrollen</translation>
    </message>
    <message>
        <source>Edit properties</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <source>zfs Menu</source>
        <translation>zfs-Menü</translation>
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
        <translation>

Sind Sie sicher, dass Sie fortfahren möchten?

</translation>
    </message>
    <message>
        <source>Confirmation</source>
        <translation>Bestätigung</translation>
    </message>
    <message>
        <source>Take a new snapshot</source>
        <translation>Neuen Schnappschuss machen</translation>
    </message>
    <message>
        <source>New name</source>
        <translation>Neuer Name</translation>
    </message>
    <message>
        <source>This operation cannot be undone and will cause all data added after the snapshot to be lost.
Any snapshots created after this one will be deleted, along with any clone filesystems that depend on them.
</source>
        <translation type="unfinished"/>
    </message>
</context>
</TS>
