<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="pt">
<context>
    <name>DialogFSProp</name>
    <message>
        <source>Dialog</source>
        <translation>Diálogo</translation>
    </message>
    <message>
        <source>Apply changes recursively to all descendants</source>
        <translation>Aplicar alterações de forma recursiva para todos os descendentes</translation>
    </message>
    <message>
        <source>Property</source>
        <translation>Propriedade</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Valor</translation>
    </message>
    <message>
        <source>Source</source>
        <translation>Fonte</translation>
    </message>
    <message>
        <source>Add user property</source>
        <translation>Adicionar propriedade do usuário</translation>
    </message>
    <message>
        <source>...</source>
        <translation>...</translation>
    </message>
    <message>
        <source>Remove user property</source>
        <translation>Remover a propriedade do usuário</translation>
    </message>
    <message>
        <source>Inherit from parent</source>
        <translation>Herdar dos pais</translation>
    </message>
    <message>
        <source>Revert changes</source>
        <translation>Reverter as alterações</translation>
    </message>
    <message>
        <source>Controls how ACL entries are inherited when files and directories are created. The values are
discard, noallow, restricted, and passthrough. For a description of these values, see ACL Properties.</source>
        <translation>Controla como as entradas ACL são herdadas quando os arquivos e diretórios são criados. Os valores são 
descartados, sem permissão e restritos. Para obter uma descrição desses valores, consulte as Propriedades do ACL.</translation>
    </message>
    <message>
        <source>Controls how an ACL entry is modified during a chmod operation.
The values are discard, groupmask, and passthrough. For a description of
these values, see ACL Properties.</source>
        <translation>Controla como uma entrada ACL é modificada durante uma operação chmod.
Os valores são descartados, mascarados e atravessados. Para uma descrição desses
valores, consulte as Propriedades do LCA.</translation>
    </message>
    <message>
        <source>Controls whether the access time for files is updated when they are read.
Turning this property off avoids producing write traffic when reading files and
can result in significant performance gains, though it might confuse mailers and
similar utilities.</source>
        <translation>Controla se o tempo de acesso para os arquivos é atualizado quando eles são lidos.
Deixar essa propriedade desligada evita a produção de tráfego durante a leitura de arquivos e
pode resultar em ganhos significativos no desempenho, embora possa confundir os remetentes e
utilitários semelhantes.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the amount of disk space available to a dataset
and all its children, assuming no other activity in the pool. Because disk space is
shared within a pool, available space can be limited by various factors including
physical pool size, quotas, reservations, and other datasets within the pool.</source>
        <translation>Ler apenas propriedades que identificam a quantidade de espaço no disco disponível para um conjunto de dados
 e todas suas crianças, não deixando nenhuma outra atividade na piscina. Por que o espaço no disco é
 compartilhado dentro de uma piscina, o espaço disponível pode ser limitado por vários fatores incluindo o
 tamanho físico da piscina, cotas, reservas e outros conjutos de dados dentro da piscina. </translation>
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
        <translation>Se esta propriedade é definida como desligada, o sistema de arquivos não pode ser montado,
e é ignorado por &apos;zfs mountado -a&apos;. Definir essa propriedade como desligada é\ no mesmo que definir o ponto de montagem da propriedade como nenhum, exceto que o
conjunto de dados ainda tem um ponto de montagem da propriedade normal, o que pode ser herdado
Definir essa propriedade como desligada permite que os conjuntos de dados sejam utilizados apenas como um
mecanismo para herdar as propriedades. Um exemplo de configuração canmount=off é
ter dois conjuntos de dados com o mesmo ponto de montagem, de modo que os filhos de
ambos os conjuntos de dados apareçam no mesmo diretório, mas pode ter diferentes
características herdadas.</translation>
    </message>
    <message>
        <source>Controls the checksum used to verify data integrity. The default
value is on, which automatically selects an appropriate algorithm
(currently, fletcher4, but this may change in future releases). The
value off disables integrity checking on user data. Disabling
checksums is NOT a recommended practice.</source>
        <translation>Controla a soma de verificação utilizada para verificar a integridade dos dados. O valor padrão
está ligado, e seleciona automaticamente um algoritmo apropriado
(atualmente, fletcher4, mas isso pode mudar em versões futuras). O
valor desligado desativa a verificação da integridade dos dados dos usuários. Desativar
as somas de verificação não é uma prática recomendada.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the compression ratio achieved for a dataset,
expressed as a multiplier. Compression can be enabled by the zfs set compression=on
dataset command. The value is calculated from the logical size of all files and the
amount of referenced physical data. It includes explicit savings through the use of
the compression property.</source>
        <translation>Ler somente a propriedade que identifica a taxa de compressão alcançada por um conjunto de dados,
expressa como um multiplicador. A compressão pode ser ativada pelas definições de compressão zfs = nenhum
comando de conjunto de dados. O valor é calculado a partir do tamanho lógico de todos os arquivos e
 quantidade de dados físicos referenciados. Ele inclui economias explícitas através do uso de 
propriedade de compressão.</translation>
    </message>
    <message>
        <source>Sets the number of copies of user data per file system. These copies
are in addition to any pool-level redundancy. Disk space used by
multiple copies of user data is charged to the corresponding file and
dataset, and counts against quotas and reservations. In addition, the
used property is updated when multiple copies are enabled. Consider setting
this property when the file system is created because changing this property
on an existing file system only affects newly written data.</source>
        <translation>Define o número de cópias de dados do usuário por sistema de arquivos. Essas cópias
estão em adição a qualquer redundância de nível da piscina. O espaço em disco usado por
várias cópias de dados do usuário é cobrado para o arquivo correspondente e
 conjunto de dados, e acusações contra cotas e reservas. Além disso, a
propriedade usada é atualizada quando várias cópias são habilitadas. Considere definir
essa propriedade quando o sistema de arquivos é criado porque alterar essa propriedade
em um sistema de arquivos existente afeta apenas os dados recém-escritos.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the date and time that a dataset was created.</source>
        <translation>Ler somente a propriedade  que identifica a data e hora em que um conjunto de dados foi criado.</translation>
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
        <translation>Configura duplicação para um conjunto de dados. O valor padrão é desligado.
A soma de verificação de duplicação padrão é sha256 (isso pode mudar no
futuro). Quando a dedup está habilitada, a soma de verificação aqui definida substitui
a propriedade da soma de verificação. A definição do valor para verificar tem o mesmo
efeito que a configuração sha256, verificar.
Se definido para verificar, o ZFS vai fazer um comparação byte-a-byte em caso de
dois blocos que têm a mesma assinatura para certificar se o conteúdo do bloco
são idênticos.</translation>
    </message>
    <message>
        <source>The devices property is currently not supported on FreeBSD.</source>
        <translation>A propriedade do dispositivos não é suportado no BSDGratuito atualmente.</translation>
    </message>
    <message>
        <source>Controls whether processes can be executed from within this file
system. The default value is on.</source>
        <translation>Controla se os processos podem ser executados a partir deste arquivo
do sistema. O valor padrão é ligado.</translation>
    </message>
    <message>
        <source>Read-only property that indicates whether a file system, clone, or snapshot
is currently mounted.</source>
        <translation>Ler somente a propriedade  que indica se um sistema de arquivos, clone ou snapshot
está montado atualmente.</translation>
    </message>
    <message>
        <source>Controls the mount point used for this file system. When the mountpoint property
is changed for a file system, the file system and any descendents that inherit the
mount point are unmounted. If the new value is legacy, then they remain unmounted.
Otherwise, they are automatically remounted in the new location if the property was
previously legacy or none, or if they were mounted before the property was changed.
In addition, any shared file systems are unshared and shared in the new location.</source>
        <translation>Controla o ponto de montagem usado para este sistema de arquivos. Quando a propriedade do ponto de montagem 
é alterada para um sistema de arquivos, o sistema de arquivos e quaisquer descendentes que herdam o
ponto de montagem são desmontados. Se o novo valor for um legado, então eles permanecem desmontados.
Caso contrário, eles são automaticamente remontados no novo local se a propriedade foi \ nanteriormente um legado ou nenhum, ou se eles foram montados antes que a propriedade foi alterada.
Além disso, quaisquer sistemas de arquivos compartilhados são não compartilhados e compartilhado no novo local.</translation>
    </message>
    <message>
        <source>Controls what is cached in the primary cache (ARC). Possible values are all,
none, and metadata. If set to all, both user data and metadata are cached. If
set to none, neither user data nor metadata is cached. If set to metadata, only
metadata is cached.</source>
        <translation>Controla o que é armazenado em cache no cache primário (ARC). Os valores possíveis são todos,
nenhum e metadados. Se definido para todos, tanto os dados do usuário e os metadados serão armazenados em cache. Se
definido como nenhum, nem os dados do usuário nem os metadados serão armazenados em cache. Se definido como metadados, apenas os
metadados serão armazenado em cache.</translation>
    </message>
    <message>
        <source>Read-only property for cloned file systems or volumes that identifies
the snapshot from which the clone was created. The origin cannot be
destroyed (even with the -r or -f option) as long as a clone exists.
Non-cloned file systems have an origin of none.</source>
        <translation>Ler somente a propriedade para sistemas de arquivos clonados ou volumes que identificam
o snapshot a partir de onde o clone foi criado. A origem não pode ser
destruída (mesmo com a opção -r ou -f) enquanto existir um clone.
Sistemas de arquivos não-clonados têm uma origem de nenhum.</translation>
    </message>
    <message>
        <source>Limits the amount of disk space a dataset and its descendents can consume.
This property enforces a hard limit on the amount of disk space used,
including all space consumed by descendents, such as file systems and snapshots.
Setting a quota on a descendent of a dataset that already has a quota does not
override the ancestor&apos;s quota, but rather imposes an additional limit.</source>
        <translation>Limita a quantidade de espaço em disco de um conjunto de dados e seus descendentes podem consumir.
Essa propriedade reforça um limite rígido na quantidade de espaço em disco utilizado,
incluindo todo o espaço consumido pelos descendentes, como sistemas de arquivos e snapshots.
Definir uma cota em um conjunto de dados de um descendente que já possui uma quota não
substituir a cota do antecessor, mas impõe um limite adicional.</translation>
    </message>
    <message>
        <source>Controls whether a dataset can be modified. When set to on,
no modifications can be made.</source>
        <translation>Controla se um conjunto de dados pode ser modificado. Quando ativado,
nenhuma modificação podem ser feitas.</translation>
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
        <translation>Especifica um tamanho do bloco sugerido para os arquivos no sistema de arquivos. Essa
propriedade é projetada exclusivamente para uso com cargas de trabalho de banco de dados que
acessam arquivos em registros de tamanho fixo. O ZFS ajusta automaticamente o tamanho do bloco
de acordo com algoritmos internos otimizados para acesso típico
padrão.
O uso dessa propriedade para sistemas de arquivos para um propósito geral é fortemente
desencorajado, e pode afetar negativamente o desempenho.
O tamanho especificado deve ser uma potência de dois maior do que ou igual a
512 e inferior ou igual a 128 Kbytes.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the amount of data accessible by a
dataset, which might or might not be shared with other datasets in the
pool.</source>
        <translation>Ler somente a propriedade que identifica a quantidade de dados acessíveis por um
conjunto de dados, que pode ou não pode ser compartilhado com outros conjuntos de dados na
piscina.</translation>
    </message>
    <message>
        <source>Sets the amount of disk space that a dataset can consume. This property
enforces a hard limit on the amount of space used. This hard limit does
not include disk space used by descendents, such as snapshots and clones.</source>
        <translation>Define a quantidade de espaço em disco que um conjunto de dados pode consumir. Esta propriedade
impõe um limite rígido sobre a quantidade de espaço usado. Esse limite rígido
não inclui espaço em disco utilizado pelos descendentes, como snapshots e clones.</translation>
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
        <translation>Define a quantidade mínima de espaço em disco que é garantida para um conjunto de dados, não
incluindo descendentes, como snapshots e clones. Quando a quantidade de espaço no disco
utilizado é inferior a este valor, o conjunto de dados é tratado como se fosse assumir
a quantidade de espaço especificado por ref de reserva. A reserva de ref reserva
é contabilizada no espaço em disco do conjunto dados dos pais utilizado, e conta contra
as cotas e reservas do conjunto de dados dos pais.
Se a ref reserva está definida, um snapshot será permitido somente se um espaço livre  suficiente na piscina 
estiver disponível fora da reserva para acomodar o número atual de
bytes referenciados no conjunto de dados.</translation>
    </message>
    <message>
        <source>Sets the minimum amount of disk space guaranteed to a dataset and its descendents.
When the amount of disk space used is below this value, the dataset is treated as if
it were using the amount of space specified by its reservation. Reservations are
accounted for in the parent dataset&apos;s disk space used, and count against the parent
dataset&apos;s quotas and reservations.</source>
        <translation>Define a quantidade mínima que um espaço no disco é garantido para um conjunto de dados e seus descendentes.
Quando a quantidade de espaço em disco utilizada for inferior a este valor, o conjunto de dados é tratado como se
estivessem utilizando a quantidade de espaço especificada pela sua reserva. As reservas são
contabilizada pelo espaço em disco do conjunto de dados dos pais utilizadas, e contam contra as
cotas e reservas do conjunto de dados dos pais.</translation>
    </message>
    <message>
        <source>Controls what is cached in the secondary cache (L2ARC). Possible values are all, none,
and metadata. If set to all, both user data and metadata are cached. If set to none,
neither user data nor metadata is cached. If set to metadata, only metadata is cached.</source>
        <translation>Controla o que é armazenado em cache no cache secundário (L2ARC). Os valores possíveis são todos, nenhum,
e metadados. Se definido para todos, tanto os dados do usuário e os metadados são armazenados em cache. Se definido como nenhum,
nem os dados do usuário nem os metadados serão armazenados em cache. Se definido como metadados, somente os metadados serão armazenados em cache.</translation>
    </message>
    <message>
        <source>Controls whether the setuid bit is honored in a file system.</source>
        <translation>Controla se o bit setuid é homenageado em um sistema de arquivos.</translation>
    </message>
    <message>
        <source>Controls whether a file system is available over NFS and what
options are used. If set to on, the zfs share command is invoked
with no options. Otherwise, the zfs share command is invoked with
options equivalent to the contents of this property.</source>
        <translation>Controla se um sistema de arquivos está disponível através do NFS e que
opções são usadas. Se ativado, o comando de compartilhamento zfs é chamado
sem opções. Caso contrário, o comando de compartilhamento zfs é chamado com \ nopções equivalentes ao conteúdo dessa propriedade.</translation>
    </message>
    <message>
        <source>The sharesmb property has currently no effect on FreeBSD.</source>
        <translation>A propriedade sharesmb não tem nenhum efeito sobre BSDGratuito atualmente.</translation>
    </message>
    <message>
        <source>Controls whether the .zfs directory is hidden or visible in the root of the file system.</source>
        <translation>Controla se o diretório .zfs está oculto ou visível na raiz do sistema de arquivos.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the dataset type as filesystem (file system or clone), volume, or snapshot.</source>
        <translation>Ler somente a propriedade que identifica o tipo de conjunto de dados como um sistema de arquivo (sistema de arquivo ou clone), volume ou snapshot.  </translation>
    </message>
    <message>
        <source>Read-only property that identifies the amount of disk space consumed by a dataset and all its descendents.</source>
        <translation>Ler somente a propriedade que identifica a quantidade de espaço em disco consumido por um conjunto de dados e todos os seus descendentes.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the amount of disk space that is used by
children of this dataset, which would be freed if all the dataset&apos;s children
were destroyed.</source>
        <translation>Ler somente a propriedade que identifica a quantidade de espaço em disco que é usada pelos
filhos nesse conjunto de dados, que seriam liberados se todos os conjunto de dados dos filhos
fossem destruídos.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the amount of disk space that is used by
a dataset itself, which would be freed if the dataset was destroyed, after
first destroying any snapshots and removing any refreservation reservations.</source>
        <translation>Ler somente a propriedade que identifica a quantidade de espaço em disco que é usado por
ela mesma em um conjunto de dados, que seria liberada se o conjunto de dados fosse destruído, depois de
primeiro destruir quaisquer snapshots e remover quaisquer reservas ref reservas.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the amount of disk space that is used by a
refreservation set on a dataset, which would be freed if the refreservation was
removed.</source>
        <translation>Ler somente a propriedade que identifica a quantidade de espaço em disco que é usado por um
conjunto ref reserva em um conjunto de dados, que seria liberado se a reserva fosse
removida.</translation>
    </message>
    <message>
        <source>Read-only property that identifies the amount of disk space that is consumed
by snapshots of a dataset. In particular, it is the amount of disk space that
would be freed if all of this dataset&apos;s snapshots were destroyed. Note that
this value is not simply the sum of the snapshots&apos; used properties, because
space can be shared by multiple snapshots.</source>
        <translation>Ler somente a propriedade que identifica a quantidade de espaço em disco que é consumida
por snapshots de um conjunto de dados. Em particular, é a quantidade de espaço de disco que
seria liberada se todos os snapshots desse conjunto de dados fossem destruídos. Note que
esse valor não é simplesmente a soma das propriedades utilizadas do snapshot, porque
o espaço pode ser compartilhado por vários snapshots.</translation>
    </message>
    <message>
        <source>Identifies the on-disk version of a file system, which is independent of the
pool version. This property can only be set to a later version that is available
from the supported software release.</source>
        <translation>Identifica a versão no disco de um sistema de arquivos, que é independente da
versão da piscina. Essa propriedade só pode ser definida para uma versão mais recente que estiver disponível
a partir da versão de software com suporte.</translation>
    </message>
    <message>
        <source>For volumes, specifies the logical size of the volume.</source>
        <translation>Para volumes, especifica o tamanho lógico do volume.</translation>
    </message>
    <message>
        <source>For volumes, specifies the block size of the volume.</source>
        <translation>Para volumes, especifica o tamanho do bloco do volume.</translation>
    </message>
    <message>
        <source>Indicates whether a dataset has been added to a jail.</source>
        <translation>Indica se um conjunto de dados foi adicionado a uma cadeia.</translation>
    </message>
    <message>
        <source>This property is not supported on FreeBSD.</source>
        <translation>Esta propriedade não é suportada no BSDGratuito.</translation>
    </message>
    <message>
        <source>The file system is marked to be destroyed after unmount.</source>
        <translation>O sistema de arquivos está marcado para ser destruído depois de desmontar.</translation>
    </message>
    <message>
        <source>The compression ratio achieved for the referenced space of this
dataset, expressed as a multiplier.</source>
        <translation>A taxa de compressão alcançada para o espaço referenciado desse
conjunto de dados, expressa como um multiplicador.</translation>
    </message>
    <message>
        <source>The amount of referenced space written to this dataset since the
previous snapshot.</source>
        <translation>A quantidade de espaço escrito referenciado para este conjunto de dados desde o
snapshot anterior.</translation>
    </message>
    <message>
        <source>This property is set to the number of user holds on this snapshot.
</source>
        <translation>Esta propriedade é definida para o número de usuários que detém esse snapshot.
</translation>
    </message>
    <message>
        <source>Provide a hint to ZFS about handling of synchronous requests in this
dataset.  If logbias is set to latency (the default), ZFS will use
pool log devices (if configured) to handle the requests at low
latency. If logbias is set to throughput, ZFS will not use configured
pool log devices.  ZFS will instead optimize synchronous operations
for global pool throughput and efficient use of resources.</source>
        <translation>Fornecer uma dica para o ZFS sobre a manipulação de solicitações síncronas nesse
conjunto de dados. Se o logbias está definido para a latência (o padrão), o ZFS usará
os dispositivos de registro da piscina (se configurado) para manipular as solicitações em baixa \ nlatência. Se o logbias é definido como throughput, o ZFS não vai usar
dispositivos de registro da piscina configurados. O ZFS, ao contrário, otimiza as operações síncronas
para um conjunto global throughput e utiliza eficientemente os recursos.</translation>
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
        <translation>Controla o comportamento de solicitações síncronas (por exemplo fsync (2),
O_DSYNC). Essa propriedade aceita os seguintes valores:
Esse é o comportamento padrão POSIX especificado garantir que todas as
solicitações síncronas são escritas para armazenamento estável e
todos os dispositivos são liberados para garantir que os dados não sejam armazenados em cache por
controladores do dispositivo (isto é o padrão).
sempre             Todas as transações do sistema de arquivos são escritas e igualadas
antes retornarem ao sistema. Isto tem uma grande
penalidade no desempenho.
desativado         desativa as solicitações síncronas. Operações do sistema de arquivos
só são comprometidas com o armazenamento estável periodicamente. Essa
opção dará o melhor desempenho. No entanto,
é muito perigoso visto que o ZFS estaria ignorando a sincronização
demandas de transação de aplicações, tais como de dados
bases ou NFS. Os administradores só deve usar essa
opção quando os riscos são compreendidos.</translation>
    </message>
    <message>
        <source>This property cannot be changed after the system is created.</source>
        <translation>Essa propriedade não pode ser alterado depois que o sistema é criado.</translation>
    </message>
    <message>
        <source>User Property</source>
        <translation>Propriedade do Usuário</translation>
    </message>
    <message>
        <source>Unknown property or information not available.
Read ZFS manual for more information.</source>
        <translation>Propriedade desconhecida ou informações não disponíveis.
Leia o manual do ZFS para maiores informações.</translation>
    </message>
    <message>
        <source>[Invalid]</source>
        <translation>[Inválido]</translation>
    </message>
    <message>
        <source>[Inherit]</source>
        <translation>[Herdado]</translation>
    </message>
    <message>
        <source>[Added]</source>
        <translation>[Adicionado]</translation>
    </message>
    <message>
        <source>[Changed]</source>
        <translation>[Alterado]</translation>
    </message>
    <message>
        <source>User property</source>
        <translation>Propriedade do Usuário</translation>
    </message>
    <message>
        <source>Device Menu</source>
        <translation>Menu do Dispositivo</translation>
    </message>
    <message>
        <source>Add new user property</source>
        <translation>Adicionar uma nova propriedade do usuário</translation>
    </message>
    <message>
        <source>Delete user property</source>
        <translation>Deletar propriedade do usuário</translation>
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
        <translation>Diálogo</translation>
    </message>
    <message>
        <source>Device to mount:</source>
        <translation>Dispositivo para montar:</translation>
    </message>
    <message>
        <source>(Device)</source>
        <translation>(Dispositivo)</translation>
    </message>
    <message>
        <source>Mount location:</source>
        <translation>Local da montagem:</translation>
    </message>
    <message>
        <source>...</source>
        <translation>...</translation>
    </message>
    <message>
        <source>Select Directory</source>
        <translation>Seleccionar um Diretório</translation>
    </message>
</context>
<context>
    <name>DialogName</name>
    <message>
        <source>Dialog</source>
        <translation>Diálogo</translation>
    </message>
    <message>
        <source>Pool name:</source>
        <translation>Nome da piscina:</translation>
    </message>
    <message>
        <source>Do not mount any filesystems</source>
        <translation>Não monte nenhum sistema de arquivos </translation>
    </message>
    <message>
        <source>Read only pool</source>
        <translation>Ler apenas piscina</translation>
    </message>
    <message>
        <source>Import options:</source>
        <translation>Opções de importação:</translation>
    </message>
    <message>
        <source>Mount with alternative root:</source>
        <translation>Montar com raiz alternativa:</translation>
    </message>
    <message>
        <source>Mount all filesystems automatically</source>
        <translation>Montar todos os sistema de arquivos automaticamente.</translation>
    </message>
    <message>
        <source>Mounting behavior:</source>
        <translation>Comportamento de montagem: </translation>
    </message>
    <message>
        <source>Force operation if error (use with caution)</source>
        <translation>Força operação em caso de erro (use com cuidado)</translation>
    </message>
</context>
<context>
    <name>DialogNewPool</name>
    <message>
        <source>Dialog</source>
        <translation>Diálogo</translation>
    </message>
    <message>
        <source>Selected</source>
        <translation>Selecionado</translation>
    </message>
    <message>
        <source>Pool name:</source>
        <translation>Nome da piscina:</translation>
    </message>
    <message>
        <source>Configuration type:</source>
        <translation>Tipo de configuração:</translation>
    </message>
    <message>
        <source>Striped</source>
        <translation>Faixas</translation>
    </message>
    <message>
        <source>Mirror</source>
        <translation>Réplica</translation>
    </message>
    <message>
        <source>Raid-Z (single parity)</source>
        <translation>Incursão-Z (paridade única)</translation>
    </message>
    <message>
        <source>Raid-Z2 (double parity)</source>
        <translation>Incursão-Z2 (paridade dupla)</translation>
    </message>
    <message>
        <source>Raid-Z3 (triple parity)</source>
        <translation>incursão-Z3 (paridade tripla)</translation>
    </message>
    <message>
        <source>Cache</source>
        <translation>Cache</translation>
    </message>
    <message>
        <source>Log</source>
        <translation>Registo</translation>
    </message>
    <message>
        <source>Spare</source>
        <translation>Reserva</translation>
    </message>
    <message>
        <source>Error Description Here</source>
        <translation>Descrição do Erro Aqui</translation>
    </message>
    <message>
        <source>Must provide a valid pool name</source>
        <translation>Deve informar um nome de piscina válido</translation>
    </message>
    <message>
        <source>Must select exactly %1 devices</source>
        <translation>Deve selecionar exatamente os dispositivos %1</translation>
    </message>
    <message>
        <source>Must select at least one device</source>
        <translation>Deve selecionar pelo menos um dispositivo.</translation>
    </message>
</context>
<context>
    <name>DialogPartition</name>
    <message>
        <source>Add Partition</source>
        <translation>Adicionar Partição</translation>
    </message>
    <message>
        <source>Add new slice/partition</source>
        <translation>Adicionar nova fatia/partição</translation>
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
        <translation>O maior bloco livre disponível:</translation>
    </message>
    <message>
        <source>Total Size:</source>
        <translation>Tamanho Total:</translation>
    </message>
    <message>
        <source>Current layout:</source>
        <translation>Layout atual:</translation>
    </message>
    <message>
        <source>Designation</source>
        <translation>Designação</translation>
    </message>
    <message>
        <source>Start Sector</source>
        <translation>Iniciar Sector</translation>
    </message>
    <message>
        <source>Sector Count</source>
        <translation>Contar Sector</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Tamanho</translation>
    </message>
    <message>
        <source>Color</source>
        <translation>Cor</translation>
    </message>
    <message>
        <source>New partition Size:</source>
        <translation>Tamanho da Nova Partição</translation>
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
        <translation>Tipo de partição:</translation>
    </message>
    <message>
        <source>freebsd-zfs</source>
        <translation>bsdgratuito-zfs</translation>
    </message>
    <message>
        <source>freebsd-ufs</source>
        <translation>bsdgratuito-ufs</translation>
    </message>
    <message>
        <source>freebsd</source>
        <translation>bsdgratuito</translation>
    </message>
    <message>
        <source>freebsd-boot</source>
        <translation>bsdgratuito-boot</translation>
    </message>
    <message>
        <source>freebsd-swap</source>
        <translation>bsdgratuito-swap</translation>
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
        <translation>Criar e inicializar um novo sistema de arquivos</translation>
    </message>
    <message>
        <source>** FREE **</source>
        <translation>** GRATUITO **</translation>
    </message>
    <message>
        <source>No free space!</source>
        <translation>Sem espaço livre!</translation>
    </message>
    <message>
        <source>Align partitions to 1 MB boundary</source>
        <translation>Alinhe partições a 1 MB de limite</translation>
    </message>
</context>
<context>
    <name>DialogProp</name>
    <message>
        <source>Edit Pool Properties</source>
        <translation>Editar as Propriedades da Piscina</translation>
    </message>
    <message>
        <source>Property</source>
        <translation>Propriedade</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Valor</translation>
    </message>
    <message>
        <source>Total size of the storage pool.</source>
        <translation>Tamanho total do armazenamento da piscina.</translation>
    </message>
    <message>
        <source>Percentage of pool space used.</source>
        <translation>Percentagem do espaço da piscina utilizado.</translation>
    </message>
    <message>
        <source>Alternate root directory. If set, this directory is prepended to any
mount points within the pool. This can be used when examining an
unknown pool where the mount points cannot be trusted, or in an
alternate boot environment, where the typical paths are not valid.
altroot is not a persistent property. It is valid only while the
system is up.  Setting altroot defaults to using cachefile=none, though
this may be overridden using an explicit setting.</source>
        <translation>Diretório original alternativo. Se definido, este diretório é anteposto a qualquer
ponto de montagem dentro da piscina. Isso pode ser usado quando examina uma
piscina desconhecida, onde os pontos de montagem não podem ser confiáveis, ou em um
ambiente de inicialização alternativo, onde os caminhos típicos não são válidos.
altroot não é uma propriedade persistente. Ela é válido apenas enquanto o
sistema está ligado. Definir os padrões de altroot para usar o cachefile = nenhum, embora \ nesse pode ser substituído usando uma configuração explícita.</translation>
    </message>
    <message>
        <source>The current health of the pool.</source>
        <translation>A saúde atual da piscina.</translation>
    </message>
    <message>
        <source>A unique identifier for the pool.</source>
        <translation>Um identificador exclusivo para a piscina.</translation>
    </message>
    <message>
        <source>The current on-disk version of the pool. This can be increased, but
never decreased. The preferred method of updating pools is with the
&quot;zpool upgrade&quot; command, though this property can be used when a
specific version is needed for backwards compatibility. This property
can be any number between 1 and the current version reported by
&quot;zpool upgrade -v&quot;.</source>
        <translation>A versão atual do disco da piscina. Esse pode ser aumentado, mas
não diminuiu. O método preferido de atualização das piscinas é com o comando
&quot;zpool upgrade&quot;, embora esta propriedade pode ser usada quando uma
versão específica é necessária para a compatibilidade com versões anteriores. Essa propriedade
pode ser qualquer número entre 1 e a versão atual relatada pelo
&quot;zpool upgrade -v&quot;.</translation>
    </message>
    <message>
        <source>Identifies the default bootable dataset for the root pool. This
property is expected to be set mainly by the installation and upgrade
programs.</source>
        <translation>Identifica o conjunto de dados padrão inicializável da piscina original. Essa
propriedade deverá ser definida, principalmente, pela instalação e atualização de
programas.</translation>
    </message>
    <message>
        <source>Controls whether a non-privileged user is granted access based on the
dataset permissions defined on the dataset. See zfs(8) for more
information on ZFS delegated administration.</source>
        <translation>Controla se é concedido acesso a um usuário não privilegiado com base nas
permissões dos conjuntos de dados definidos no conjunto de dados. Veja zfs (8) para maiores
informações sobre a administração ZFS.</translation>
    </message>
    <message>
        <source>Controls automatic device replacement. If set to &quot;off&quot;, device
replacement must be initiated by the administrator by using the
&quot;zpool replace&quot; command. If set to &quot;on&quot;, any new device, found in the
same physical location as a device that previously belonged to the
pool, is automatically formatted and replaced. The default behavior
is &quot;off&quot;.  This property can also be referred to by its shortened
column name, &quot;replace&quot;.</source>
        <translation>Controla a substituição do dispositivo automático. Se definido como &quot;desligado&quot;, a substituição do dispositivo
deve ser iniciada pelo administrador utilizando o
comando de &quot;substituição zpool&quot;. Se definido como &quot;ligado&quot;, qualquer dispositivo novo, encontrado no
mesmo local físico que um dispositivo que antes pertencia a
piscina, é automaticamente formatado e substituído. O comportamento padrão
é &quot;desligado&quot;. Esta propriedade também pode ser referida pelo nome curto
da coluna, &quot;substituir&quot;.</translation>
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
        <translation>Controla o local onde a configuração da piscina é armazenada em cache.
Descobrir todas as piscinas no início do sistema requer uma cópia armazenada em cache dos
dados de configuração que são armazenados no sistema de arquivos originais. Todas as piscinas
nesse cache são automaticamente importadas quando o sistema é inicializado. Alguns
ambientes, como instalar e agrupamento, precisam armazenar essas
informações em um local diferente para que os grupos não sejam
automaticamenteimportados. Definir essa propriedade armazenada em cache na piscina de configuração\ nem um local diferente, pode mais tarde ser importadas com importação &quot;zpool 
-c&quot;. Defini-lo para o valor especial &quot;nenhum&quot; cria um grupo temporário
que nunca é armazenado em cache, e o valor especial &apos;&apos; (cadeia vazia) utiliza
o local padrão.</translation>
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
        <translation>Controla o comportamento do sistema em caso de falha catastrófica na piscina
Esta condição é geralmente um resultado de uma perda de conectividade
no dispositivo de armazenamento subjacente (s) ou uma falha em todos os dispositivos
dentro da piscina. O comportamento de tal evento é determinada como se segue 
esperar
Bloquear todos os acessos I/O S até que a conectividade do dispositivo seja recuperada
e os erros sejam apagados. Este é o comportamento padrão
continuar
Retornar o EIO a qualquer nova solicitação de escrita I/O, mas permitir que seja lido
a qualquer um dos dispositivos saudáveis restantes. Quaisquer solicitações de escrita que 
ainda não foram confirmadas no disco seriam bloqueadas.

pânico
Imprime uma mensagem no console e gera um sistema de
despejo de memória.
</translation>
    </message>
    <message>
        <source>Controls whether information about snapshots associated with this
pool is output when &quot;zfs list&quot; is run without the -t option. The
default value is off.</source>
        <translation>Controla se as informações sobre snapshots associadas a essa
piscina são emitida quando a &quot;lista zfs&quot; for executada sem a opção -t. O
valor padrão é desligado. </translation>
    </message>
    <message>
        <source>Controls automatic pool expansion when the underlying LUN is grown.
If set to &quot;on&quot;, the pool will be resized according to the size of the
expanded device. If the device is part of a mirror or raidz then all
devices within that mirror/raidz group must be expanded before the
new space is made available to the pool. The default behavior is
&quot;off&quot;.  This property can also be referred to by its shortened column
name, expand.</source>
        <translation>Controla a expansão automática do conjunto quando o LUN subjacente cresce.
Se definido como &quot;ligado&quot;, a piscina será redimensionada de acordo com o tamanho do
dispositivo expandido. Se o dispositivo faz parte de um espelho ou raidz então todos os
dispositivos dentro desse grupo raidz devem ser expandidos antes do
novo espaço ser disponibilizado na piscina. O comportamento padrão é
&quot;desligado&quot;. Essa propriedade também pode ser referida pelo sua coluna reduzida
nome, expandir.</translation>
    </message>
    <message>
        <source>Threshold for the number of block ditto copies. If the reference
count for a deduplicated block increases above this number, a new
ditto copy of this block is automatically stored. Default setting is
0.</source>
        <translation>O limite para o número de cópias de blocos iguais. Se a referência
contar para um bloco desduplicado acima deste número, uma nova
cópia deste bloco é automaticamente armazenada. A configuração padrão é
0.</translation>
    </message>
    <message>
        <source>The deduplication ratio specified for a pool, expressed as a multiplier. For
example, a value of 1.76 indicates that 1.76 units of data were stored but
only 1 unit of disk space was actually consumed. See zfs(8) for a description
of the deduplication feature.</source>
        <translation>A relação de redução de redundância especificada para uma piscina, é expressado como um multiplicador. Por
exemplo, um valor de 1,76 indica que 1,76 unidades de dados foram armazenadas mas
apenas 1 unidade de espaço em disco foi realmente consumida. Veja zfs (8) para uma descrição
da desduplicação do recurso.</translation>
    </message>
    <message>
        <source>Number of blocks within the pool that are not allocated.</source>
        <translation>Número de blocos dentro da piscina que não são atribuídos.</translation>
    </message>
    <message>
        <source>Amount of storage space within the pool that has been physically allocated.</source>
        <translation>Quantidade de espaço de armazenamento dentro da piscina que foi fisicamente atribuído.</translation>
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
        <translation>Se ativado, a piscina irá importar no modo somente leitura com as
seguintes restrições:
* Dados síncronos na intenção com os registros não serão acessíveis
* As propriedades da piscina não podem ser alteradas
* Os conjuntos de dados desta associação só pode ser montado como somente leitura
* Para escrever a uma piscina somente leitura, uma exportação e importação do conjunto
é necessária.
</translation>
    </message>
    <message>
        <source>An arbitrary comment string set by the administrator.</source>
        <translation>Uma comentário arbitrário definido pelo administrador.</translation>
    </message>
    <message>
        <source>This property has currently no value on FreeBSD.</source>
        <translation>Essa propriedade tem qualquer valor no BSDGratuito atualmente.</translation>
    </message>
</context>
<context>
    <name>DialogfsCreate</name>
    <message>
        <source>New Filesystem</source>
        <translation>Novo Sistema de Arquivos</translation>
    </message>
    <message>
        <source>Name:</source>
        <translation>Nome:</translation>
    </message>
    <message>
        <source>Properties override at creation time:</source>
        <translation>Propriedades substituidas no momento da criação:</translation>
    </message>
    <message>
        <source>Prevent auto mount (canmount=noauto)</source>
        <translation>Previne montagem automática (canmount = noauto)</translation>
    </message>
    <message>
        <source>Mountpoint</source>
        <translation>Ponto de montagem</translation>
    </message>
    <message>
        <source>none</source>
        <translation>nenhum</translation>
    </message>
    <message>
        <source>legacy</source>
        <translation>legado</translation>
    </message>
    <message>
        <source>[path]</source>
        <translation>[caminho]</translation>
    </message>
    <message>
        <source>Force UTF-8 only (utf8only=on)</source>
        <translation>Forçar somente UTF-8 (utf8apenas = ligado)</translation>
    </message>
    <message>
        <source>Unicode normalization =</source>
        <translation>Normalização Unicode =</translation>
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
        <translation>Cópias = </translation>
    </message>
    <message>
        <source>Deduplication (dedup=on)</source>
        <translation>Desduplicação (dedup = ligada)</translation>
    </message>
    <message>
        <source>Compression =</source>
        <translation>Compressão = </translation>
    </message>
    <message>
        <source>off</source>
        <translation>desligada</translation>
    </message>
    <message>
        <source>on</source>
        <translation>ligada</translation>
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
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ZManagerWindow</name>
    <message>
        <source>PCBSD Disk Manager</source>
        <translation>Gerenciamento de Disco PCBSD</translation>
    </message>
    <message>
        <source>Disks</source>
        <translation>Discos</translation>
    </message>
    <message>
        <source>Device</source>
        <translation>Dispositivo</translation>
    </message>
    <message>
        <source>State</source>
        <translation>Estado</translation>
    </message>
    <message>
        <source>ZFS Pools</source>
        <translation>Piscinas ZFS</translation>
    </message>
    <message>
        <source>Pool Name</source>
        <translation>Nome da Piscina</translation>
    </message>
    <message>
        <source>Status:</source>
        <translation>Status:</translation>
    </message>
    <message>
        <source>TextLabel</source>
        <translation>Rótulo do Texto</translation>
    </message>
    <message>
        <source>Clear Error</source>
        <translation>Limpar Erro</translation>
    </message>
    <message>
        <source>poolname</source>
        <translation>nomedapiscina</translation>
    </message>
    <message>
        <source>ZFS Filesystems</source>
        <translation>Sistemas de arquivos ZFS</translation>
    </message>
    <message>
        <source>Filesystems</source>
        <translation>Sistemas de arquivos</translation>
    </message>
    <message>
        <source>Status</source>
        <translation>Status</translation>
    </message>
    <message>
        <source>Refreshing...</source>
        <translation>Atualizando...</translation>
    </message>
    <message>
        <source>No pools available, right click to create a new one...</source>
        <translation>Não há piscinas disponíveis, clique com o botão direito para criar uma nova...</translation>
    </message>
    <message>
        <source> (No media in drive)</source>
        <translation>(Nenhuma mídia no drive)</translation>
    </message>
    <message>
        <source>Avaliable</source>
        <translation>Disponível </translation>
    </message>
    <message>
        <source>No disk</source>
        <translation>Nenhum disco</translation>
    </message>
    <message>
        <source>ZPool: </source>
        <translation>ZPool: </translation>
    </message>
    <message>
        <source>Sliced</source>
        <translation>Dividida</translation>
    </message>
    <message>
        <source>Mounted: </source>
        <translation>Montado:</translation>
    </message>
    <message>
        <source>Available</source>
        <translation>Disponível</translation>
    </message>
    <message>
        <source>Unmounted</source>
        <translation>Desmontado</translation>
    </message>
    <message>
        <source>Partitioned</source>
        <translation>Particionada</translation>
    </message>
    <message>
        <source>(Exported)
</source>
        <translation>(Exportada)
</translation>
    </message>
    <message>
        <source>(Destroyed)
</source>
        <translation>(Destruído)
</translation>
    </message>
    <message>
        <source>Offline</source>
        <translation>Desligado</translation>
    </message>
    <message>
        <source>Online</source>
        <translation>Ligado</translation>
    </message>
    <message>
        <source>Degraded</source>
        <translation>Degradado</translation>
    </message>
    <message>
        <source>Faulted</source>
        <translation>Falhou</translation>
    </message>
    <message>
        <source>Removed</source>
        <translation>Removido</translation>
    </message>
    <message>
        <source>Unavailable</source>
        <translation>Indisponível</translation>
    </message>
    <message>
        <source>Unknown</source>
        <translation>Desconhecido</translation>
    </message>
    <message>
        <source>Create new pool</source>
        <translation>Criar uma nova piscina</translation>
    </message>
    <message>
        <source>Rename pool</source>
        <translation>Renomear a piscina</translation>
    </message>
    <message>
        <source>Destroy pool</source>
        <translation>Destruir a piscina </translation>
    </message>
    <message>
        <source>Add devices...</source>
        <translation>Adicionar um Dispositivo...</translation>
    </message>
    <message>
        <source>Add log devices...</source>
        <translation>Adicionar registro de dispositivos...</translation>
    </message>
    <message>
        <source>Add cache devices...</source>
        <translation>Adicionar dispositivos de cache</translation>
    </message>
    <message>
        <source>Add spare devices...</source>
        <translation>Adicionar dispositivos de reserva...</translation>
    </message>
    <message>
        <source>Scrub</source>
        <translation>Limpeza</translation>
    </message>
    <message>
        <source>Export pool</source>
        <translation>Exportar piscina</translation>
    </message>
    <message>
        <source>Import pool</source>
        <translation>Importar piscina</translation>
    </message>
    <message>
        <source>Recover destroyed pool</source>
        <translation>Recuperar piscina destruída</translation>
    </message>
    <message>
        <source>Properties...</source>
        <translation>Propriedades...</translation>
    </message>
    <message>
        <source>Attach (mirror) device...</source>
        <translation>Anexar dispositivo (réplica)...</translation>
    </message>
    <message>
        <source>Detach from mirror</source>
        <translation>Desanexar da réplica</translation>
    </message>
    <message>
        <source>Take offline</source>
        <translation>Desligar</translation>
    </message>
    <message>
        <source>Bring online</source>
        <translation>Ligar</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Remover</translation>
    </message>
    <message>
        <source>zpool Menu</source>
        <translation>Menu zpool</translation>
    </message>
    <message>
        <source>Device Menu</source>
        <translation>Menu do Dispositivo</translation>
    </message>
    <message>
        <source>Unmount</source>
        <translation>Desmontada </translation>
    </message>
    <message>
        <source>Mount</source>
        <translation>Montar</translation>
    </message>
    <message>
        <source>Create MBR partition table</source>
        <translation>Criar tabela de partição MBR</translation>
    </message>
    <message>
        <source>Create GPT partition table</source>
        <translation>Criar tabela de partições GPT</translation>
    </message>
    <message>
        <source>Create BSD partition table</source>
        <translation>Criar tabela de partições BSD</translation>
    </message>
    <message>
        <source>Delete Partition Table</source>
        <translation>Excluir Tabela de Partição</translation>
    </message>
    <message>
        <source>Add new slice</source>
        <translation>Adicionar nova fatia</translation>
    </message>
    <message>
        <source>Add new partition</source>
        <translation>Adicionar uma nova partição</translation>
    </message>
    <message>
        <source>Destroy this slice</source>
        <translation>Destruir essa fatia</translation>
    </message>
    <message>
        <source>Destroy this partition</source>
        <translation>Destruir essa partição</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Atenção</translation>
    </message>
    <message>
        <source>This operation cannot be undone.
OK to destroy the slice/partition?</source>
        <translation>Essa operação não pode ser desfeita.
Ok destruir a fatia/partição?</translation>
    </message>
    <message>
        <source>An error was detected while executing &apos;%1&apos;:

</source>
        <translation>Um erro foi detectado ao executar &apos;%1&apos;:

</translation>
    </message>
    <message>
        <source>Error report</source>
        <translation>Relatório de erros</translation>
    </message>
    <message>
        <source>An error was detected while executing &apos;zpool&apos;:

</source>
        <translation>Um erro foi detectado ao executar a &apos;zpool&apos;:

</translation>
    </message>
    <message>
        <source>An error was detected while executing &apos;zfs&apos;:

</source>
        <translation>Um erro foi detectado ao executar &apos;zfs&apos;:

</translation>
    </message>
    <message>
        <source>Create new zpool</source>
        <translation>Criar uma nova zpool</translation>
    </message>
    <message>
        <source>Important information</source>
        <translation>Informações importantes</translation>
    </message>
    <message>
        <source>The pool was imported in read-only mode, therefore attempting to destroy the pool will leave the pool in the state it was when imported, not necessarily destroyed.</source>
        <translation>A piscina foi importado no modo somente leitura, portanto, a tentativa de destruir a piscina vai deixá-la no estado em que estava quando foi importada, não necessariamente destruídos.</translation>
    </message>
    <message>
        <source>Attach mirror devices to </source>
        <translation>Anexar dispositivos espelhados para</translation>
    </message>
    <message>
        <source>The pool was imported in read-only mode, therefore attempting to export the pool will leave the pool in the state it was when imported, not necessarily exported.</source>
        <translation>A piscina foi importada no modo somente leitura, portanto, a tentativa de exportar a piscina irá deixa-la no estado em que estava quando foi importada, não necessariamente exportada.</translation>
    </message>
    <message>
        <source>Recover destroyed pool as...</source>
        <translation>Recuperar piscina destruída como...</translation>
    </message>
    <message>
        <source>Import pool as...</source>
        <translation>Importar piscina como...</translation>
    </message>
    <message>
        <source>This pool had been destroyed, and its disks may have been reused. Attempting to recover will destroy any new data that could&apos;ve been stored in the devices that were reused and cannot be recovered.
Proceed with recovery?</source>
        <translation>Esta piscina tinha sido destruída, e os seus discos podem ter sido reutilizados. Tentar recupera-la irá destruir quaisquer novos dados que poderiam ter sido armazenados nos dispositivos que foram reutilizados e não podem ser recuperados.
Continuar a recuperação?</translation>
    </message>
    <message>
        <source>The pool was imported in read-only mode, it cannot be renamed.</source>
        <translation>A piscina foi importada no modo somente leitura, ela não pode ser renomeada.</translation>
    </message>
    <message>
        <source>Add more devices to zpool</source>
        <translation>Adicionar mais dispositivos na zpool</translation>
    </message>
    <message>
        <source>Add log devices to zpool</source>
        <translation>Adicionar registro de dispositivos à zpool</translation>
    </message>
    <message>
        <source>Add cache devices to zpool</source>
        <translation>Adicionar dispositivos de cache à zpool</translation>
    </message>
    <message>
        <source>Add spare devices to zpool</source>
        <translation>Adicionar dispositivos de reserva à zpool</translation>
    </message>
    <message>
        <source>[Mounted]</source>
        <translation>[Montada]</translation>
    </message>
    <message>
        <source>[Not Mounted]</source>
        <translation>[Não Montada]</translation>
    </message>
    <message>
        <source> of </source>
        <translation> de</translation>
    </message>
    <message>
        <source>Rename dataset</source>
        <translation>Renomear o conjunto de dados</translation>
    </message>
    <message>
        <source>Create new dataset</source>
        <translation>Criar um novo conjunto de dados</translation>
    </message>
    <message>
        <source>Create a clone dataset</source>
        <translation>Criar um conjunto de dados clonado</translation>
    </message>
    <message>
        <source>Destroy dataset</source>
        <translation>Destruir conjunto de dados</translation>
    </message>
    <message>
        <source>Promote filesystem</source>
        <translation>Promover sistema de arquivos</translation>
    </message>
    <message>
        <source>Take a snapshot</source>
        <translation>Tirar um snapshot </translation>
    </message>
    <message>
        <source>Destroy snapshot</source>
        <translation>Destruir snapshot </translation>
    </message>
    <message>
        <source>Rollback to this snapshot</source>
        <translation>Reverter para este snapshot </translation>
    </message>
    <message>
        <source>Edit properties</source>
        <translation>Editar propriedades</translation>
    </message>
    <message>
        <source>zfs Menu</source>
        <translation>Menu zfs</translation>
    </message>
    <message>
        <source>This operation cannot be undone and will cause data loss.

You are about to perform the following operation(s):

</source>
        <translation>Essa operação não pode ser desfeita e pode causar perda de dados.

Você está prestes a realizar a seguinte operação (s):

</translation>
    </message>
    <message>
        <source>

Are you sure you want to proceed?

</source>
        <translation>

Você tem certeza que deseja continuar?

</translation>
    </message>
    <message>
        <source>Confirmation</source>
        <translation>Confirmação</translation>
    </message>
    <message>
        <source>Take a new snapshot</source>
        <translation>Tirar um novo snapshot </translation>
    </message>
    <message>
        <source>New name</source>
        <translation>Novo nome</translation>
    </message>
    <message>
        <source>This operation cannot be undone and will cause all data added after the snapshot to be lost.
Any snapshots created after this one will be deleted, along with any clone filesystems that depend on them.
</source>
        <translation>Essa operação não pode ser desfeita e fará com que todos os dados adicionados após o snapshot sejam perdidos.
Quaisquer snapshots criados após este serão eliminados, junto com todos os sistemas de arquivos clonados que dependem deles.
</translation>
    </message>
</context>
</TS>
