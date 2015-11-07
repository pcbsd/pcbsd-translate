#!/bin/sh
# Script to convert TS files into Qt QM files
PATH="${PATH}:/usr/local/bin" ; export PATH

PROGDIR="`pwd`/.."
if [ ! -e "${PROGDIR}/scripts/sync-pcbsd.sh" ] ; then
   echo "Error: Run as ./mkrelease.sh"
   exit 1
fi

<<<<<<< HEAD
rm -rf ${PROGDIR}/qmtmp
mkdir ${PROGDIR}/qmtmp
=======
if [ -n "${1}" ] ; then
  TARGETDIR="$1"
else
  TARGETDIR="${PROGDIR}/qm"
fi

if [ ! -d "${TARGETDIR}" ] ; then
  mkdir -p ${TARGETDIR}
fi
>>>>>>> fdf7666c7cc07786b3987d2a8b135913440773dd

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

echo "Translation files created at: $TARGETDIR"
