<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="it">
<context>
    <name>DialogFSProp</name>
    <message>
        <source>Dialog</source>
        <translation>Finestra di dialogo</translation>
    </message>
    <message>
        <source>Apply changes recursively to all descendants</source>
        <translation>Applica le modifiche ricorsivamente a tutti i discenti.</translation>
    </message>
    <message>
        <source>Property</source>
        <translation>Proprietà</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Valore</translation>
    </message>
    <message>
        <source>Source</source>
        <translation>Sorgente</translation>
    </message>
    <message>
        <source>Add user property</source>
        <translation>Aggiungi una proprietà utente</translation>
    </message>
    <message>
        <source>...</source>
        <translation>...</translation>
    </message>
    <message>
        <source>Remove user property</source>
        <translation>Rimuovi una proprietà utente</translation>
    </message>
    <message>
        <source>Inherit from parent</source>
        <translation>Eredita dal genitore</translation>
    </message>
    <message>
        <source>Revert changes</source>
        <translation>Annulla le modifiche</translation>
    </message>
    <message>
        <source>Controls how ACL entries are inherited when files and directories are created. The values are
discard, noallow, restricted, and passthrough. For a description of these values, see ACL Properties.</source>
        <translation type="unfinished">Gestisce come le voci ACL vengono ereditate quando si creano file e cartelle. I valori sono
discard, noallow, restricted e passthrough. Per una descrizione di questi valori, leggi le proprietà ACL.</translation>
    </message>
    <message>
        <source>Controls how an ACL entry is modified during a chmod operation.
The values are discard, groupmask, and passthrough. For a description of
these values, see ACL Properties.</source>
        <translation type="unfinished">Gestisce come una voce ACL viene modificata durante un operazione di chmod.
I valori sono discard, groupmask e passthrough. Per una descrizione di
questi valori, leggi le proprietà ACL</translation>
    </message>
    <message>
        <source>Controls whether the access time for files is updated when they are read.
Turning this property off avoids producing write traffic when reading files and
can result in significant performance gains, though it might confuse mailers and
similar utilities.</source>
        <translation>Gestisce se il tempo di accesso per i file viene aggiornato quando sono letti.
Disabilitare questa opzione evita di produrre traffico di rete quando i file sono letti e
può risultare in guadagni di prestazioni significanti, sebbene possa confondere programmi di gestione di posta
e strumenti simili.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the amount of disk space available to a dataset
and all its children, assuming no other activity in the pool. Because disk space is
shared within a pool, available space can be limited by various factors including
physical pool size, quotas, reservations, and other datasets within the pool.</source>
        <translation>Proprietà di sola lettura che identifica la quantità di spazio disponibile per un dataset
e tutti i suoi figli, assumendo l&apos;assenza di altre attività nel pool. Siccome lo spazio sul disco è
condiviso all&apos;interno del pool, lo spazio disponibile può essere limitato da diversi fattori tra cui
dimensione del pool fisico, quote, prenotazioni e altri dataset nel pool.</translation>
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
        <translation>Se questa proprietà non è attiva, il file system non può essere montato
e viene ignorato da &apos;zfs Mount -a&apos;.  Disabilitare questa proprietà è
simile la proprietà del punto di montaggio a vuoto, tranne che
il dataset ha ancora il valore definito, che può essere ereditato.
Disattivare questa proprietà permette ai dataset di essere usati solamente come un
meccanismo di ereditarietà delle proprietà. Un esempio di impostazione di canmount=off è
quella di avere due dataset con lo stesso punto di montaggio, così che il foglio di
entrambi i dataset apparirà nella stessa cartella, ma potrebbe avere caratteristiche ereditarie differenti.</translation>
    </message>
    <message>
        <source>Controls the checksum used to verify data integrity. The default
value is on, which automatically selects an appropriate algorithm
(currently, fletcher4, but this may change in future releases). The
value off disables integrity checking on user data. Disabling
checksums is NOT a recommended practice.</source>
        <translation>Gestisce il checksum usato per verificare l&apos;integrità dei dati. Il valore
predefinito è attivo il quale automaticamente seleziona un algoritmo appropriato
(attualmente, fletcher4, ma può cambiare in release successive). Il
valore off disabilità il controllo di integrità dei dati utente. Disabilitare
i checksum NON è una pratica consigliata.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the compression ratio achieved for a dataset,
expressed as a multiplier. Compression can be enabled by the zfs set compression=on
dataset command. The value is calculated from the logical size of all files and the
amount of referenced physical data. It includes explicit savings through the use of
the compression property.</source>
        <translation>Proprietà di sola lettura che identifica il rapporto di compressione raggiunto per un dataset,
espresso come un moltiplicatore. La compressione può essere abilitata tramite il comando di dataset
set compression=on. Il valore è calcolato dalla dimensione logica tutti i file e la
quantità di dati fisicamente indirizzati. Questo include risparmi espliciti attraverso l&apos;uso di
una proprietà di compressione.</translation>
    </message>
    <message>
        <source>Sets the number of copies of user data per file system. These copies
are in addition to any pool-level redundancy. Disk space used by
multiple copies of user data is charged to the corresponding file and
dataset, and counts against quotas and reservations. In addition, the
used property is updated when multiple copies are enabled. Consider setting
this property when the file system is created because changing this property
on an existing file system only affects newly written data.</source>
        <translation>Imposta il numero di copie dei dati utente per file system. Queste copie
sono in aggiunta a qualsiasi livello di ridondanza sul pool. Lo spazio su disco utilizzato dalle
copie multiple dei dati dell&apos;utente è quantificato dal corrispondente file e
dataset, e conteggiato sulle quote e le riserve. In aggiunta, la
proprietà usata è aggiornata quando le copie multiple sono abilitate. Considera di impostare
questa proprietà quando il file system è creato perché cambiarla 
su un file system esistente influenza solo i nuovi dati che verranno scritti.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the date and time that a dataset was created.</source>
        <translation>Proprietà di sola lettura che identifica la data e l&apos;orario di quando un dataset è stato creato.</translation>
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
        <translation>Configura la deduplicazione del dataset. Il valore dpredefinito è off.
Il checksum di deduplicazione predefinito è sha256 (potrebbe cambiare nel
futuro).   Quando la deduplicazione è attivata, il checksum qui definito sovrascrive
la proprietà &apos;checksum&apos;. Impostare questo valore ha lo stesso
effetto di impostare sha256,verify.
Se impostato a verify, ZFS eseguirà un confronto byte per byte nel caso di
due blocchi avente la stessa firma per assicurarsi che il contenuto dei blocchi
sia identico.</translation>
    </message>
    <message>
        <source>The devices property is currently not supported on FreeBSD.</source>
        <translation>Questa proprietà dei dispositivi è attualmente non supportata su FreeBSD.</translation>
    </message>
    <message>
        <source>Controls whether processes can be executed from within this file
system. The default value is on.</source>
        <translation>Gestisce se i processi possono essere eseguiti all&apos;interno di questo file
system. L&apos;impostazione predefinita è abilitata.</translation>
    </message>
    <message>
        <source>Read-only property that indicates whether a file system, clone, or snapshot
is currently mounted.</source>
        <translation>Proprietà di sola lettura che indica se un file system, un clone o uno snapshot
è attualmente montato.</translation>
    </message>
    <message>
        <source>Controls the mount point used for this file system. When the mountpoint property
is changed for a file system, the file system and any descendents that inherit the
mount point are unmounted. If the new value is legacy, then they remain unmounted.
Otherwise, they are automatically remounted in the new location if the property was
previously legacy or none, or if they were mounted before the property was changed.
In addition, any shared file systems are unshared and shared in the new location.</source>
        <translation>Gestisce il punto di montaggio utilizzato da questo file system. Quando la proprietà del punto di montaggio
è variata per un file system, il file system e ogni suo discendente che eredita il
punto di montaggio sarà smontato. Se il nuovo valore è legacy, allora rimarranno smontati.
Altrimenti, sarà automaticamente rimontato nella nuova posizione se la proprietà era
precedentemente legacy o none, o se erano montati prima che la proprietà fosse cambiata.
In aggiunta, ogni file system condiviso sarà condiviso nuovamente nella nuova posizione.</translation>
    </message>
    <message>
        <source>Controls what is cached in the primary cache (ARC). Possible values are all,
none, and metadata. If set to all, both user data and metadata are cached. If
set to none, neither user data nor metadata is cached. If set to metadata, only
metadata is cached.</source>
        <translation>Gestisce cosa memorizzare nel cache primaria (ARC). I valori possibili sono all,
none e metadata. Se impostato a all, sia i dati dell&apos;utente che i metadati sono memorizzati. Se
impostata a none, né i dati dell&apos;utente che i metadati sono memorizzati. Se impostato a metadati, solo
i metadati sono memorizzati.</translation>
    </message>
    <message>
        <source>Read-only property for cloned file systems or volumes that identifies
the snapshot from which the clone was created. The origin cannot be
destroyed (even with the -r or -f option) as long as a clone exists.
Non-cloned file systems have an origin of none.</source>
        <translation>Proprietà di sola lettura per i file system clonati o i volumi che identificano
lo snapshot dai quali il clone è stato creato. L&apos;origine non può essere
distrittura (neanche con le opzioni -r o -f) finché un clone esiste.
I file system non clonati hanno un origine a none.</translation>
    </message>
    <message>
        <source>Limits the amount of disk space a dataset and its descendents can consume.
This property enforces a hard limit on the amount of disk space used,
including all space consumed by descendents, such as file systems and snapshots.
Setting a quota on a descendent of a dataset that already has a quota does not
override the ancestor&apos;s quota, but rather imposes an additional limit.</source>
        <translation>Limita la quantità di spazio su disco che un dataset e i suoi discendenti possono utilizzare.
Questa proprietà rafforza il limite fisico dello spazio su disco utilizzato,
incluso tutto lo spazio utilizzato dai discendenti, come i file system e gli snapshot.
Impostare una quota su un discendente di un dataset che è ha già una quota non
sovrascrive la quota dell&apos;antenato, ma piuttosto imposta un limite addizionale.</translation>
    </message>
    <message>
        <source>Controls whether a dataset can be modified. When set to on,
no modifications can be made.</source>
        <translation>Gestisce se un dataset può essere modificato. Se impostato,
non può essere effettuata nessuna modifica.</translation>
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
        <translation>Specifica la dimensione del blocco suggerita per i file nel file system. Questa
proprietà è studiata solamente per essere usata su carichi di database che
accedono a record di dimensione fissa.   ZFS automaticamente regola la dimensione
dei blocchi tramite algoritmi interni ottimizzati per modelli di accesso tipici.
L&apos;uso di questa proprietà per file system ad uso generale è fortemente
non consigliata,e potrebbe influire negativamente sulle prestazioni.
La dimensione specificata deve essere una potenza del due, maggiore di o uguale a
512 e minore di o uguale a 128 Kbyte.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the amount of data accessible by a
dataset, which might or might not be shared with other datasets in the
pool.</source>
        <translation>Proprietà di sola lettura che identifica la quantità di dati accessibile da un
dataset, che potrebbe o non potrebbe essere condivisa con altri dataset nel
pool.</translation>
    </message>
    <message>
        <source>Sets the amount of disk space that a dataset can consume. This property
enforces a hard limit on the amount of space used. This hard limit does
not include disk space used by descendents, such as snapshots and clones.</source>
        <translation>Imposta la quantità di spazio su disco che un dataset può consumare. Questa proprietà
rafforza un limite fisico sulla quantità di spazio utilizzato. Questo limite fisico
non include lo spazio su disco utilizzato dai discendenti, come snapshot e clone.</translation>
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
        <translation type="unfinished">Imposta un a quantità minima di spazio su disco che è garantita ad un dataset,  non
includendo i discendenti, come snapshot e cloni. Quando la quantità di spazio usata
su disco è al di sotto di questo valore, il dataset è trattato come se avesse preso
lo spazio di disco specificato dalla prenotazione. La prenotazione tiene conto dello spazio su disco usato dal dataset e contrasta le quote le prenotazioni del datasent genitore.
Se refreservatoin è impostato, uno snapshot è permesso solo se abbastanza spazio libero nel pool
è disponibile fuori da questa prenotazione per accomodare il numero attuale dei
byte referenziati nel dataset.</translation>
    </message>
    <message>
        <source>Sets the minimum amount of disk space guaranteed to a dataset and its descendents.
When the amount of disk space used is below this value, the dataset is treated as if
it were using the amount of space specified by its reservation. Reservations are
accounted for in the parent dataset&apos;s disk space used, and count against the parent
dataset&apos;s quotas and reservations.</source>
        <translation>Imposta la minima quantità grantita di spazio su disco su un dataset e i suoi discendenti
Quando la quantità di spazio su disco usata è al di sotto di questo valore, il dataset è trattato come se usasse la quantità di spazio specificata dalla sua prenotazione. Le prenotazioni sono
calcolate per lo spazio usato sul disco del dataset e contrasta le
quote e le prenotazioni del genitore.</translation>
    </message>
    <message>
        <source>Controls what is cached in the secondary cache (L2ARC). Possible values are all, none,
and metadata. If set to all, both user data and metadata are cached. If set to none,
neither user data nor metadata is cached. If set to metadata, only metadata is cached.</source>
        <translation>Gestisce cosa è memorizzato nel  cache di secondo livello (L2ARC). I valori possibile sono all,none,
e metadata. Se imposto a all, entrambi i dati dell&apos;utente e i metadati sono memorizzati. Se impostato a none
nè i dati dell&apos;utente nè i metadata sono memorizzati. Se impostato a metadata, solo i metadata sono memorizzati.</translation>
    </message>
    <message>
        <source>Controls whether the setuid bit is honored in a file system.</source>
        <translation>Gestisci se il bit setuid è onorato in un file system.</translation>
    </message>
    <message>
        <source>Controls whether a file system is available over NFS and what
options are used. If set to on, the zfs share command is invoked
with no options. Otherwise, the zfs share command is invoked with
options equivalent to the contents of this property.</source>
        <translation>Gestisce se un file sistema è disponibile tramite NFS e quali
operazioni sono usate. Se abilitato, il comando &apos;zfs share&apos; è invocato
con nessuna opzione. Altrimenti, il comando &apos;zfs share&apos; è invocato con
le opzioni equivalente ai contenuti di questa proprietà.</translation>
    </message>
    <message>
        <source>The sharesmb property has currently no effect on FreeBSD.</source>
        <translation>La proprietù sharesmb non ha attualmente effetto su FreeBSD.</translation>
    </message>
    <message>
        <source>Controls whether the .zfs directory is hidden or visible in the root of the file system.</source>
        <translation>Gestisce se la cartella .zfs è nascosta o visibile nella radice del file system.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the dataset type as filesystem (file system or clone), volume, or snapshot.</source>
        <translation>Proprietà di sola lettura che identifica il tipo di dataset come file system (o clone), volume o snapshot.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the amount of disk space consumed by a dataset and all its descendents.</source>
        <translation>Proprietà di sola lettura che identifica la quantità di spazio su disco consumata da un dataset e tutti i suoi discendenti.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the amount of disk space that is used by
children of this dataset, which would be freed if all the dataset&apos;s children
were destroyed.</source>
        <translation>Proprietà di sola lettura che identifica la quantità di spazio su disco che è usata dai
figli di questo dataset, il quale sarebbe svuotato se tutti i figli del dataset
venissero distrutti.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the amount of disk space that is used by
a dataset itself, which would be freed if the dataset was destroyed, after
first destroying any snapshots and removing any refreservation reservations.</source>
        <translation type="unfinished">Proprietà di sola lettura che identifica la quantità di spazio su disco che sarà usata dal
dataset stesso, il quale sarebbe svuotato se tutti i dataset venissero distrutti, antecedente
la distruzione di ogni snapshot e la rimozione di ogni riservazione.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the amount of disk space that is used by a
refreservation set on a dataset, which would be freed if the refreservation was
removed.</source>
        <translation type="unfinished">Proprietà di sola lettura che identifica la quantità di spazio disponibile che è usata da un
set di prenotazione su un dataset, il quale sarebbe svuotato se la prenotazione venisse
rimossa.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the amount of disk space that is consumed
by snapshots of a dataset. In particular, it is the amount of disk space that
would be freed if all of this dataset&apos;s snapshots were destroyed. Note that
this value is not simply the sum of the snapshots&apos; used properties, because
space can be shared by multiple snapshots.</source>
        <translation>Proprietà di sola lettura che identifica la quantità di spazio su disco che è utilizzata
dagli snapshot di un dataset. In particolare, è la quantitù di spazio che
sarebbe liberata se tutti gli snapshot di questo dataset venissero distrutti. Si fa presente che
questo valore non è semplicemente la somma delle proprietà d&apos;utilizzo degli snapshot, perché
lo spazio può essere condiviso da snapshot multipli.</translation>
    </message>
    <message>
        <source>Identifies the on-disk version of a file system, which is independent of the
pool version. This property can only be set to a later version that is available
from the supported software release.</source>
        <translation>Identifica la versione su disco di un file system, il quale è indipendente dalla
versione del pool. Questa proprietà può essere solo impostata ad una versione successiva che è disponibile
dalla release del software supportata.</translation>
    </message>
    <message>
        <source>For volumes, specifies the logical size of the volume.</source>
        <translation>Per i volumi, specifica la dimensione logica del volume.</translation>
    </message>
    <message>
        <source>For volumes, specifies the block size of the volume.</source>
        <translation>Per i volumi, specifica la dimensione del blocco del volume.</translation>
    </message>
    <message>
        <source>Indicates whether a dataset has been added to a jail.</source>
        <translation>Indica se un dataset è stato aggiunto ad un jail.</translation>
    </message>
    <message>
        <source>This property is not supported on FreeBSD.</source>
        <translation>Questa proprietà non è supportata su FreeBSD.</translation>
    </message>
    <message>
        <source>The file system is marked to be destroyed after unmount.</source>
        <translation>Il file system è segnalato come da distruggere dopo lo smontaggio.</translation>
    </message>
    <message>
        <source>The compression ratio achieved for the referenced space of this
dataset, expressed as a multiplier.</source>
        <translation>Il rapporto di compressione raggiunto per lo spazio referenziato da questo
dataset, espresso come un moltiplicatore.</translation>
    </message>
    <message>
        <source>The amount of referenced space written to this dataset since the
previous snapshot.</source>
        <translation>La quantità di spazio referenziato scritto da questo dataset dal
precedente snapshot.</translation>
    </message>
    <message>
        <source>This property is set to the number of user holds on this snapshot.
</source>
        <translation>Questa proprietà indica il numero di utenti che coinvolgono questo snapshot.
</translation>
    </message>
    <message>
        <source>Provide a hint to ZFS about handling of synchronous requests in this
dataset.  If logbias is set to latency (the default), ZFS will use
pool log devices (if configured) to handle the requests at low
latency. If logbias is set to throughput, ZFS will not use configured
pool log devices.  ZFS will instead optimize synchronous operations
for global pool throughput and efficient use of resources.</source>
        <translation>Fornisce un aiuto a ZFS riguardo la gestione delle richieste sincrone in questo
dataset.  Se il logbias è impostato a latency (il valore predefinito), ZFS utilizzerà
i dispositivi di registro del pool (se configurati) per gestire le richieste a bassa
latenza. Se logbias è impostato a throughput, ZFS non utilizzerà
i dispositivi di registro del pool.  ZFS ottimizzerà invece le operazioni sincrone
per il throughput del pool globale ed uso efficiente di risorse.</translation>
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
        <translation>Gestisci il comportamento delle richieste sincrone (e.g.  fsync(2),
O_DSYNC). Questa proprietà accetta i seguenti valori :
standard  Questo è il comportamento specificato del POSIX per assicurarsi che tutte
           le richieste sincrone sono scritte sul supporto d&apos;archiviazione stabile e
           e tutti i buffer dei dispositivi sono svuotati per accertarsi che i controller
           del dispositivo non perdano dati non ancora scritti (è il valore predefinito).
always    Tutte le transazioni del file system sono scritte
           prima del ritorno delle chiamate di sistema. Questo ha una grossa
           penalità sulle prestazioni.disabled   Disabilita le richieste sincrone. Le transizioni del file system
           sono solo confermate sul supporto d&apos;archiviazione stabile periodicamente. Questa
           opzione darà le prestazioni più elevate.  Tuttavia, è
           molto pericosola in quanto ZFS
           ignorerebbe le richieste di transazione sincrone di applicazione come data
           base o NFS.  Gli amministratori dovrebbero usare questa
           opzione quando si sono compresi i rischi.</translation>
    </message>
    <message>
        <source>This property cannot be changed after the system is created.</source>
        <translation>Questa proprietà non può essere modificata dopo che il file system è stato creato.</translation>
    </message>
    <message>
        <source>User Property</source>
        <translation>Proprietà dell&apos;utente</translation>
    </message>
    <message>
        <source>Unknown property or information not available.
Read ZFS manual for more information.</source>
        <translation>Proprietù sconosciuta o informazione non disponibile.
Leggi il maunale utente per maggior informazioni.</translation>
    </message>
    <message>
        <source>[Invalid]</source>
        <translation>[Non valido]</translation>
    </message>
    <message>
        <source>[Inherit]</source>
        <translation>[Eredita]</translation>
    </message>
    <message>
        <source>[Added]</source>
        <translation>[Aggiunto]</translation>
    </message>
    <message>
        <source>[Changed]</source>
        <translation>[Modificato]</translation>
    </message>
    <message>
        <source>User property</source>
        <translation>Proprietà dell&apos;utente</translation>
    </message>
    <message>
        <source>Device Menu</source>
        <translation>Menu del dispositivo</translation>
    </message>
    <message>
        <source>Add new user property</source>
        <translation>Aggiungi una nuova proprietà dell&apos;utente.</translation>
    </message>
    <message>
        <source>Delete user property</source>
        <translation>Elimina una proprietà utente</translation>
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
        <translation>Finestra di dialogo</translation>
    </message>
    <message>
        <source>Device to mount:</source>
        <translation>Dispositivo da montare:</translation>
    </message>
    <message>
        <source>(Device)</source>
        <translation>(Dispositivo)</translation>
    </message>
    <message>
        <source>Mount location:</source>
        <translation>Punto di montaggio:</translation>
    </message>
    <message>
        <source>...</source>
        <translation>...</translation>
    </message>
    <message>
        <source>Select Directory</source>
        <translation>Seleziona cartella</translation>
    </message>
</context>
<context>
    <name>DialogName</name>
    <message>
        <source>Dialog</source>
        <translation>Finestra di dialogo</translation>
    </message>
    <message>
        <source>Pool name:</source>
        <translation>Nome del pool:</translation>
    </message>
    <message>
        <source>Do not mount any filesystems</source>
        <translation>Non montare nessun filesystem</translation>
    </message>
    <message>
        <source>Read only pool</source>
        <translation>Pool in sola lettura</translation>
    </message>
    <message>
        <source>Import options:</source>
        <translation>Opzioni di importazione:</translation>
    </message>
    <message>
        <source>Mount with alternative root:</source>
        <translation>Monta come radice alternativa:</translation>
    </message>
    <message>
        <source>Mount all filesystems automatically</source>
        <translation>Monta tutti i file system automaticamente</translation>
    </message>
    <message>
        <source>Mounting behavior:</source>
        <translation>Comportamento di montaggio:</translation>
    </message>
    <message>
        <source>Force operation if error (use with caution)</source>
        <translation>Forza l&apos;operazione se in errore (usare con cautela)</translation>
    </message>
</context>
<context>
    <name>DialogNewPool</name>
    <message>
        <source>Dialog</source>
        <translation>Finestra di dialogo</translation>
    </message>
    <message>
        <source>Selected</source>
        <translation>Selezionato</translation>
    </message>
    <message>
        <source>Pool name:</source>
        <translation>Nome del pool:</translation>
    </message>
    <message>
        <source>Configuration type:</source>
        <translation>Tipo di configurazione:</translation>
    </message>
    <message>
        <source>Striped</source>
        <translation>Striped</translation>
    </message>
    <message>
        <source>Mirror</source>
        <translation>Mirror</translation>
    </message>
    <message>
        <source>Raid-Z (single parity)</source>
        <translation>Raid-Z (singola parità)</translation>
    </message>
    <message>
        <source>Raid-Z2 (double parity)</source>
        <translation>Raiz-Z2 (doppia parità)</translation>
    </message>
    <message>
        <source>Raid-Z3 (triple parity)</source>
        <translation>Raiz-Z3 (tripla parità)</translation>
    </message>
    <message>
        <source>Cache</source>
        <translation>Cache</translation>
    </message>
    <message>
        <source>Log</source>
        <translation>Registro</translation>
    </message>
    <message>
        <source>Spare</source>
        <translation type="unfinished">Spare</translation>
    </message>
    <message>
        <source>Error Description Here</source>
        <translation>Descrizione dell&apos;errore qui</translation>
    </message>
    <message>
        <source>Must provide a valid pool name</source>
        <translation>Devi fornire un nome di pool valido</translation>
    </message>
    <message>
        <source>Must select exactly %1 devices</source>
        <translation>Devi selezionare esattamente %1 dispositivi</translation>
    </message>
    <message>
        <source>Must select at least one device</source>
        <translation>Devi selezionare almeno un dispositivo</translation>
    </message>
</context>
<context>
    <name>DialogPartition</name>
    <message>
        <source>Add Partition</source>
        <translation>Aggiungi partizione</translation>
    </message>
    <message>
        <source>Add new slice/partition</source>
        <translation>Aggiungi un nuovo slice o una nuova partizione</translation>
    </message>
    <message>
        <source>100 GB</source>
        <translation>100 GB</translation>
    </message>
    <message>
        <source>Device:</source>
        <translation>Dispositivo:</translation>
    </message>
    <message>
        <source>ada0</source>
        <translation>ada0</translation>
    </message>
    <message>
        <source>Largest available free block:</source>
        <translation>Blocco libero più grande disponibile:</translation>
    </message>
    <message>
        <source>Total Size:</source>
        <translation>Dimensione totale:</translation>
    </message>
    <message>
        <source>Current layout:</source>
        <translation>Struttura attuale:</translation>
    </message>
    <message>
        <source>Designation</source>
        <translation type="unfinished">Destinazione</translation>
    </message>
    <message>
        <source>Start Sector</source>
        <translation>Settore iniziale</translation>
    </message>
    <message>
        <source>Sector Count</source>
        <translation>Conteggio dei settori</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Dimensione</translation>
    </message>
    <message>
        <source>Color</source>
        <translation>Colore</translation>
    </message>
    <message>
        <source>New partition Size:</source>
        <translation>Dimensione della nuova partizione:</translation>
    </message>
    <message>
        <source>bytes</source>
        <translation>byte</translation>
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
        <translation>Tipo di partizione:</translation>
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
        <translation>Crea ed inizializza un nuovo file system</translation>
    </message>
    <message>
        <source>** FREE **</source>
        <translation>** LIBERO **</translation>
    </message>
    <message>
        <source>No free space!</source>
        <translation>Nessun spazio libero!</translation>
    </message>
    <message>
        <source>Align partitions to 1 MB boundary</source>
        <translation>Allinea le partizioni al limite di 1MB </translation>
    </message>
</context>
<context>
    <name>DialogProp</name>
    <message>
        <source>Edit Pool Properties</source>
        <translation>Modifica le proprietà del pool</translation>
    </message>
    <message>
        <source>Property</source>
        <translation>Proprietà</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Valore</translation>
    </message>
    <message>
        <source>Total size of the storage pool.</source>
        <translation>Dimensione totale del pool d&apos;archiviazione.</translation>
    </message>
    <message>
        <source>Percentage of pool space used.</source>
        <translation>Percentuale di spazio usato del pool.</translation>
    </message>
    <message>
        <source>Alternate root directory. If set, this directory is prepended to any
mount points within the pool. This can be used when examining an
unknown pool where the mount points cannot be trusted, or in an
alternate boot environment, where the typical paths are not valid.
altroot is not a persistent property. It is valid only while the
system is up.  Setting altroot defaults to using cachefile=none, though
this may be overridden using an explicit setting.</source>
        <translation>Cartella di root alternativa. Se impostata, questa cartella è preposta ad ogni
punto di montaggio all&apos;interno del pool. Questo può essere usato quando si esamina un
pool sconosciuto dove i punti di montaggio non possono essere accertati o in un
ambiente d&apos;avvio alternativo, dove i percorsi tipici non sono validi.
altroot non è una proprietà persistente. È valida solo mentre il
sistema è avviato.  Impostando altroot renderà predefeinito cachefile=none, sebbene
possa essere sovrascritto usando un&apos;impostazione esplicita.</translation>
    </message>
    <message>
        <source>The current health of the pool.</source>
        <translation>Lo stato di salute attuale del pool.</translation>
    </message>
    <message>
        <source>A unique identifier for the pool.</source>
        <translation>Un identificatore unico per il pool.</translation>
    </message>
    <message>
        <source>The current on-disk version of the pool. This can be increased, but
never decreased. The preferred method of updating pools is with the
&quot;zpool upgrade&quot; command, though this property can be used when a
specific version is needed for backwards compatibility. This property
can be any number between 1 and the current version reported by
&quot;zpool upgrade -v&quot;.</source>
        <translation>La versione sul disco attuale del pool. Può essere aumentata, ma
mai diminuita. La modalità preferita di aggiornamento del pool è tramite
il comando &quot;zpool upgrade&quot;, sebbene questa proprietà può essere usata quando una
speciica versione è necessaria per retrocompatibilità. Questa proprietà
può essere qualiasi numero tra 1 e versione attuale riportato da
&quot;zpool ugprade -v&quot;.</translation>
    </message>
    <message>
        <source>Identifies the default bootable dataset for the root pool. This
property is expected to be set mainly by the installation and upgrade
programs.</source>
        <translation>Identifica il dataset avviabile predefinito per il pool di root. L&apos;impostazione di
questa proprietà è prevista dai programmi
di installazione e aggiornamento.</translation>
    </message>
    <message>
        <source>Controls whether a non-privileged user is granted access based on the
dataset permissions defined on the dataset. See zfs(8) for more
information on ZFS delegated administration.</source>
        <translation>Gestisce se un utente non privilegiato è consentito l&apos;accesso basato sui
permessi definiti sul dataset. Vedi zfs(8) per più
informazioni su l&apos;amministrazione delegata di ZFS.</translation>
    </message>
    <message>
        <source>Controls automatic device replacement. If set to &quot;off&quot;, device
replacement must be initiated by the administrator by using the
&quot;zpool replace&quot; command. If set to &quot;on&quot;, any new device, found in the
same physical location as a device that previously belonged to the
pool, is automatically formatted and replaced. The default behavior
is &quot;off&quot;.  This property can also be referred to by its shortened
column name, &quot;replace&quot;.</source>
        <translation>Gestisce il rimpiazzo automatico del dispositivo. Se disabilitato, il rimpiazzo
del dispositivo deve essere inizializzato dall&apos;amministratore tramite l&apos;uso del
comando &quot;zpool replace&quot;. Se attivato, ogni nuovo dispositivo trovato nella
stessa postazione fisica come un dispositivo che apparteneva precedentemente al
pool, sarà automaticamente formattato e rimpiazzato. Il comportamento predefinito
è disabilitato.  Questa proprietà può essere anche riferita dal suo
nome di colonna accorciato, &quot;replace&quot;.</translation>
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
        <translation>Gestisce la postazione dove la configurazione del pool è memorizzata. 
Il riconoscimento di tutti i pool all&apos;avvio del sistema richiede una copia memorizzata dei
dati di configurazione che è memorizzata nel file system radice. Tutti i pool
in questa cache sono automaticamente importati quando il sistema è avviato. Alcuni
ambienti, come l&apos;installazione e il Clustering, necessitano di memorizzare questa
informazione in una posistazione differente così che i pool non sono atuomaticamente
importati. Impostare questa proprietà memorizza la configurazione del pool
in una posizione differetne che può essere successivamente importata tramite &quot;zpool import
-c&quot;.  Impostarla con il valore speciale &quot;none&quot; crea un pool temporaneo
che non è mai memorizzato, e il valore speciale &quot;&quot; (stringa vuota) usa
la posizione predefinita.</translation>
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
        <translation>Gestisce il comportamento di sistema nell&apos;evento di un fallimento catastrofico del pool.
Questa condizione è tipicamente il risultato di una perdita di connettività
verso i dispositivi di archiviazione sottostanti o il fallimento di tutti i dispositivi
dentro al pool. Il comportamento di questo determinato evento è determinato come segue
wait
Blocca tutti gli accessi I/O finché la connettività al dispositivo è recuperata
e gli errori sono terminati. Questo è il comportamento predefinito
continue
Restituisce EIO ad ogni richiesta di scrittura I/O ma permette la lettura verso
ognuno dei dispositivi sani rimasti. Ogni richiesta di scrittura che
deve essere ancora scritta sul disco sarà bloccata.

panic
Stampa un messaggio sulla console e genera un crash dump di sistema.
</translation>
    </message>
    <message>
        <source>Controls whether information about snapshots associated with this
pool is output when &quot;zfs list&quot; is run without the -t option. The
default value is off.</source>
        <translation>Verifica se le informazioni riguardanti gli snapshot associati a questo
pool sono visualizzate quando &quot;zfs list&quot; è eseguito senza l&apos;opzione -t. Il
valore predefinito è off.</translation>
    </message>
    <message>
        <source>Controls automatic pool expansion when the underlying LUN is grown.
If set to &quot;on&quot;, the pool will be resized according to the size of the
expanded device. If the device is part of a mirror or raidz then all
devices within that mirror/raidz group must be expanded before the
new space is made available to the pool. The default behavior is
&quot;off&quot;.  This property can also be referred to by its shortened column
name, expand.</source>
        <translation>Gestisce se l&apos;espansione automatica del pool quando il LUN sottostante è espanso.
Se abilitato, il pool è ridimensionato secondo la dimensione del
dispositivo espanso. Se il dispositivo è parte di un mirror o di un raidz, allora tutti
i dispositivi dentro quel gruppo di mirror/raidz devono essere espansi prima che
il nuovo spazio su disco è disponibile al pool. Il comportamento predefinito è
&quot;off&quot;.  Questa proprietà può essere anche riferita al nome di colonna accorciato, expand.</translation>
    </message>
    <message>
        <source>Threshold for the number of block ditto copies. If the reference
count for a deduplicated block increases above this number, a new
ditto copy of this block is automatically stored. Default setting is
0.</source>
        <translation>Soglia per il numero di copie di blocco. Se il conteggio delle 
referenze per un blocco deduplicato venisse aumentato sopra questa soglia, una nuova
copia di questo blocco è memorizzata automaticamente. L&apos;impostazione predefinita è
0.</translation>
    </message>
    <message>
        <source>The deduplication ratio specified for a pool, expressed as a multiplier. For
example, a value of 1.76 indicates that 1.76 units of data were stored but
only 1 unit of disk space was actually consumed. See zfs(8) for a description
of the deduplication feature.</source>
        <translation>Il rapporto di deduplicazione specificato per un pool, espresso come un moltiplicazione. Per
esempio, un valore di 1,76 indica che ,76 unità di dati sono memorizzati ma
solo un&apos;unità di spazio su disco è stata attualmente utilizzata. Vedi zfs(8) per una descrizione
della funzionalità di deduplicazione.</translation>
    </message>
    <message>
        <source>Number of blocks within the pool that are not allocated.</source>
        <translation>Numero di blocchi all&apos;interno del pool che non sono allocati.</translation>
    </message>
    <message>
        <source>Amount of storage space within the pool that has been physically allocated.</source>
        <translation>Quantità dello spazio d&apos;archiviazione all&apos;interno del pool che è stata allocata fisicamente.</translation>
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
        <translation>Se attivato, il pool sarà importato in sola lettura con i
seguenti limiti:
  *    I dati sincroni nel intent log non saranno accessibili
  *    Le proprietà del pool non possono essere variate
  *    I dataset del pool possono essere solo montati in sola lettura
  *    Per scrivere su un pool in sola lettura, è richiesta una esportazione e una reimportazione
 del pool</translation>
    </message>
    <message>
        <source>An arbitrary comment string set by the administrator.</source>
        <translation>Un commento arbitrario impostato dall&apos;amministratore.</translation>
    </message>
    <message>
        <source>This property has currently no value on FreeBSD.</source>
        <translation>Questa proprietà non attualmente nessun valore su FreeBSD.</translation>
    </message>
</context>
<context>
    <name>DialogfsCreate</name>
    <message>
        <source>New Filesystem</source>
        <translation>Nuovo file system</translation>
    </message>
    <message>
        <source>Name:</source>
        <translation>Nome:</translation>
    </message>
    <message>
        <source>Properties override at creation time:</source>
        <translation>Proprietà sovrascritte dalla data di creazione:</translation>
    </message>
    <message>
        <source>Prevent auto mount (canmount=noauto)</source>
        <translation>Previeni il montaggio automatico (canmount=noauto)</translation>
    </message>
    <message>
        <source>Mountpoint</source>
        <translation>Punto di montaggio</translation>
    </message>
    <message>
        <source>none</source>
        <translation>nessuno</translation>
    </message>
    <message>
        <source>legacy</source>
        <translation>legacy</translation>
    </message>
    <message>
        <source>[path]</source>
        <translation>[percorso]</translation>
    </message>
    <message>
        <source>Force UTF-8 only (utf8only=on)</source>
        <translation>Costringi solo UTF-8 (utf8only=on)</translation>
    </message>
    <message>
        <source>Unicode normalization =</source>
        <translation>Normalizzazione Unicode =</translation>
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
        <translation>Copie =</translation>
    </message>
    <message>
        <source>Deduplication (dedup=on)</source>
        <translation>Deduplicazione (depup=on)</translation>
    </message>
    <message>
        <source>Compression =</source>
        <translation>Compressione =</translation>
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
        <translation>Gestore del disco di PCBSD</translation>
    </message>
    <message>
        <source>Disks</source>
        <translation>Dischi</translation>
    </message>
    <message>
        <source>Device</source>
        <translation>Dispositivo</translation>
    </message>
    <message>
        <source>State</source>
        <translation>Stato</translation>
    </message>
    <message>
        <source>ZFS Pools</source>
        <translation>Pool ZFS</translation>
    </message>
    <message>
        <source>Pool Name</source>
        <translation>Nome del pool</translation>
    </message>
    <message>
        <source>Status:</source>
        <translation>Stato:</translation>
    </message>
    <message>
        <source>TextLabel</source>
        <translation>TextLabel</translation>
    </message>
    <message>
        <source>Clear Error</source>
        <translation>Svuota errore</translation>
    </message>
    <message>
        <source>poolname</source>
        <translation>poolname</translation>
    </message>
    <message>
        <source>ZFS Filesystems</source>
        <translation>File system di ZFS</translation>
    </message>
    <message>
        <source>Filesystems</source>
        <translation>File system</translation>
    </message>
    <message>
        <source>Status</source>
        <translation>Stato</translation>
    </message>
    <message>
        <source>Refreshing...</source>
        <translation>Sto aggiornando...</translation>
    </message>
    <message>
        <source>No pools available, right click to create a new one...</source>
        <translation>Nessun pool disponibile, premi il tasto destro per crearne uno nuovo...</translation>
    </message>
    <message>
        <source> (No media in drive)</source>
        <translation> (Nessun supporto d&apos;archiviazione)</translation>
    </message>
    <message>
        <source>Avaliable</source>
        <translation>Disponibile</translation>
    </message>
    <message>
        <source>No disk</source>
        <translation>Nessun disco</translation>
    </message>
    <message>
        <source>ZPool: </source>
        <translation>ZPool: </translation>
    </message>
    <message>
        <source>Sliced</source>
        <translation>Sliced</translation>
    </message>
    <message>
        <source>Mounted: </source>
        <translation>Montato: </translation>
    </message>
    <message>
        <source>Available</source>
        <translation>Disponibile</translation>
    </message>
    <message>
        <source>Unmounted</source>
        <translation>Non montato</translation>
    </message>
    <message>
        <source>Partitioned</source>
        <translation>Partizionato</translation>
    </message>
    <message>
        <source>(Exported)
</source>
        <translation>(Esportato)
</translation>
    </message>
    <message>
        <source>(Destroyed)
</source>
        <translation>(Distrutto)
</translation>
    </message>
    <message>
        <source>Offline</source>
        <translation>Non collegato</translation>
    </message>
    <message>
        <source>Online</source>
        <translation>Collegato</translation>
    </message>
    <message>
        <source>Degraded</source>
        <translation>Degradato</translation>
    </message>
    <message>
        <source>Faulted</source>
        <translation>Difettoso</translation>
    </message>
    <message>
        <source>Removed</source>
        <translation>Rimosso</translation>
    </message>
    <message>
        <source>Unavailable</source>
        <translation>Non disponibile</translation>
    </message>
    <message>
        <source>Unknown</source>
        <translation>Sconosciuto</translation>
    </message>
    <message>
        <source>Create new pool</source>
        <translation>Crea un nuovo pool</translation>
    </message>
    <message>
        <source>Rename pool</source>
        <translation>Rinomina il pool</translation>
    </message>
    <message>
        <source>Destroy pool</source>
        <translation>Distruggi il pool</translation>
    </message>
    <message>
        <source>Add devices...</source>
        <translation>Aggiungi dei dispositivi...</translation>
    </message>
    <message>
        <source>Add log devices...</source>
        <translation>Aggiungi dispositivi di registro...</translation>
    </message>
    <message>
        <source>Add cache devices...</source>
        <translation>Aggiungi dispositivi di cache...</translation>
    </message>
    <message>
        <source>Add spare devices...</source>
        <translation>Aggiungi dispositivi aggiuntivi...</translation>
    </message>
    <message>
        <source>Scrub</source>
        <translation>Scrub</translation>
    </message>
    <message>
        <source>Export pool</source>
        <translation>Esporta un pool</translation>
    </message>
    <message>
        <source>Import pool</source>
        <translation>Importa un pool</translation>
    </message>
    <message>
        <source>Recover destroyed pool</source>
        <translation>Recupera un pool distrutto</translation>
    </message>
    <message>
        <source>Properties...</source>
        <translation>Proprietà...</translation>
    </message>
    <message>
        <source>Attach (mirror) device...</source>
        <translation>Collega dispositivo (mirror) ...</translation>
    </message>
    <message>
        <source>Detach from mirror</source>
        <translation>Scollega dal mirror</translation>
    </message>
    <message>
        <source>Take offline</source>
        <translation>Scollega</translation>
    </message>
    <message>
        <source>Bring online</source>
        <translation>Ricollega</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Rimosso</translation>
    </message>
    <message>
        <source>zpool Menu</source>
        <translation>Menu del zpool</translation>
    </message>
    <message>
        <source>Device Menu</source>
        <translation>Menu del dispositivo</translation>
    </message>
    <message>
        <source>Unmount</source>
        <translation>Smonta</translation>
    </message>
    <message>
        <source>Mount</source>
        <translation>Monta</translation>
    </message>
    <message>
        <source>Create MBR partition table</source>
        <translation>Crea una tabella di partizionamento MBR</translation>
    </message>
    <message>
        <source>Create GPT partition table</source>
        <translation>Crea una tabella di partizionamento GPT</translation>
    </message>
    <message>
        <source>Create BSD partition table</source>
        <translation>Crea una tabella di partizionamento BSD</translation>
    </message>
    <message>
        <source>Delete Partition Table</source>
        <translation>Elimina la tabella di partizionamento</translation>
    </message>
    <message>
        <source>Add new slice</source>
        <translation>Aggiungi un nuovo slice</translation>
    </message>
    <message>
        <source>Add new partition</source>
        <translation>Aggiungi una nuova partizione</translation>
    </message>
    <message>
        <source>Destroy this slice</source>
        <translation>Distruggi questo sclice</translation>
    </message>
    <message>
        <source>Destroy this partition</source>
        <translation>Distruggi questa partizione</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Attenzione</translation>
    </message>
    <message>
        <source>This operation cannot be undone.
OK to destroy the slice/partition?</source>
        <translation>Questa operazione non può essere annullata.
OK per distruggere lo sclice/la partizione?</translation>
    </message>
    <message>
        <source>An error was detected while executing &apos;%1&apos;:

</source>
        <translation>Un errore è stato rilevato durante l&apos;esecuzione di &apos;%1&apos;:

</translation>
    </message>
    <message>
        <source>Error report</source>
        <translation>Segnalazione d&apos;errore</translation>
    </message>
    <message>
        <source>An error was detected while executing &apos;zpool&apos;:

</source>
        <translation>Un errore è stato rilevato durante l&apos;esecuzione di &apos;zpool&apos;</translation>
    </message>
    <message>
        <source>An error was detected while executing &apos;zfs&apos;:

</source>
        <translation>Un errore è stato rilevato durante l&apos;esecuzione di &apos;zfs&apos;:

</translation>
    </message>
    <message>
        <source>Create new zpool</source>
        <translation>Crea un nuovo zpool</translation>
    </message>
    <message>
        <source>Important information</source>
        <translation>Informazioni importanti</translation>
    </message>
    <message>
        <source>The pool was imported in read-only mode, therefore attempting to destroy the pool will leave the pool in the state it was when imported, not necessarily destroyed.</source>
        <translation>Il pool è stato importato in sola lettura, di conseguenza tentare di distruggere il pool lo lascerà nello stato in cui si trovava prima dell&apos;importazione, non necessariamente distrutto.</translation>
    </message>
    <message>
        <source>Attach mirror devices to </source>
        <translation>Collega i dispositivi mirror a </translation>
    </message>
    <message>
        <source>The pool was imported in read-only mode, therefore attempting to export the pool will leave the pool in the state it was when imported, not necessarily exported.</source>
        <translation>Il pool è stato importato in sola lettura, di conseguenza tentare di esportare il pool lo lascerà nello stato in cui si trovava prima dell&apos;importazione, non necessariamente esportato.</translation>
    </message>
    <message>
        <source>Recover destroyed pool as...</source>
        <translation>Recupera il pool distrutto come...</translation>
    </message>
    <message>
        <source>Import pool as...</source>
        <translation>Importa il pool come...</translation>
    </message>
    <message>
        <source>This pool had been destroyed, and its disks may have been reused. Attempting to recover will destroy any new data that could&apos;ve been stored in the devices that were reused and cannot be recovered.
Proceed with recovery?</source>
        <translation>Questo pool è stato distrutto, e i suoi dischi potrebbe essere stati riutilizzati. Tentare di recuperarlo distruggere ogni dato nuovo che potrebbe essere stato memorizzato nei dispositivi riutlizzati e non possono essere recuperati.
Procedere con il recupero?</translation>
    </message>
    <message>
        <source>The pool was imported in read-only mode, it cannot be renamed.</source>
        <translation>Questo pool era importato in modalità in sola lettura; non può essere rinominato.</translation>
    </message>
    <message>
        <source>Add more devices to zpool</source>
        <translation>Aggiungi più dispositivi al zpool</translation>
    </message>
    <message>
        <source>Add log devices to zpool</source>
        <translation>Aggiungi dispositivi di registro al zpool</translation>
    </message>
    <message>
        <source>Add cache devices to zpool</source>
        <translation>Aggiungi dei dispositivi di cache allo zpool</translation>
    </message>
    <message>
        <source>Add spare devices to zpool</source>
        <translation>Aggiungi dispositivi aggiuntivi allo zpool</translation>
    </message>
    <message>
        <source>[Mounted]</source>
        <translation>[Montato]</translation>
    </message>
    <message>
        <source>[Not Mounted]</source>
        <translation>[Non montato]</translation>
    </message>
    <message>
        <source> of </source>
        <translation> di </translation>
    </message>
    <message>
        <source>Rename dataset</source>
        <translation>Rinomina il dataset</translation>
    </message>
    <message>
        <source>Create new dataset</source>
        <translation>Crea un nuovo dataset</translation>
    </message>
    <message>
        <source>Create a clone dataset</source>
        <translation>Crea un dataset clone</translation>
    </message>
    <message>
        <source>Destroy dataset</source>
        <translation>Distruggi il dataset</translation>
    </message>
    <message>
        <source>Promote filesystem</source>
        <translation>Promuovi il file system</translation>
    </message>
    <message>
        <source>Take a snapshot</source>
        <translation>Crea una snapshot
            </translation>
    </message>
    <message>
        <source>Destroy snapshot</source>
        <translation>Elimina snapshot</translation>
    </message>
    <message>
        <source>Rollback to this snapshot</source>
        <translation>Riporta a questo snapshot</translation>
    </message>
    <message>
        <source>Edit properties</source>
        <translation>Modifica le proprietà</translation>
    </message>
    <message>
        <source>zfs Menu</source>
        <translation>Menu ZFS</translation>
    </message>
    <message>
        <source>This operation cannot be undone and will cause data loss.

You are about to perform the following operation(s):

</source>
        <translation>Questa operazione non può essere annullata e potrebbe causare la perdita di dati.

Sei sicuro di voler effettuare le seguenti operazioni:

</translation>
    </message>
    <message>
        <source>

Are you sure you want to proceed?

</source>
        <translation>

Sei sicuro dio voler procedere?

</translation>
    </message>
    <message>
        <source>Confirmation</source>
        <translation>Conferma</translation>
    </message>
    <message>
        <source>Take a new snapshot</source>
        <translation>Seleziona un nuovo snapshot</translation>
    </message>
    <message>
        <source>New name</source>
        <translation>Nuovo nome</translation>
    </message>
    <message>
        <source>This operation cannot be undone and will cause all data added after the snapshot to be lost.
Any snapshots created after this one will be deleted, along with any clone filesystems that depend on them.
</source>
        <translation>Questa operazione non può essere annullata e causerà la perdita di tutti i dati aggiunti dopo lo snapshot.
Ogni snapshot creato dopo questo saranno eliminati, insieme a ogni clone di filesystem che dipendono da essi.
</translation>
    </message>
</context>
</TS>
