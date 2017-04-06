#!/bin/sh
# Script to convert TS files into Qt QM files
PATH="${PATH}:/usr/local/bin" ; export PATH

PROGDIR="`pwd`/.."
if [ ! -e "${PROGDIR}/scripts/sync-pcbsd.sh" ] ; then
   echo "Erro: Execute como ./mkrelease.sh"
   exit 1
fi

if [ -n "${1}" ] ; then
  TARGETDIR="$1"
else
  TARGETDIR="${PROGDIR}/qm"
fi

if [ ! -d "${TARGETDIR}" ] ; then
  mkdir -p ${TARGETDIR}
fi

# Now run on each file in each language
cd ${PROGDIR}/ts
for i in `find . | grep "\.ts"`
do
   NLANG="`echo $i | cut -d '/' -f 2`"
   QMNAME="`echo $i | cut -d '/' -f 3 | sed 's|.ts||g'`_$NLANG.qm"
   echo "Creating: $i ->  $QMNAME"

   /usr/local/lib/qt5/bin/lrelease $i -qm ${TARGETDIR}/$QMNAME >/dev/null 2>/dev/null
   if [ $? -ne 0 ] ; then exit 1; fi
done

echo "Arquivos de tradução criado dia: $TARGETDIR"
