#!/bin/sh
# Script to sync TS files from pcbsd git repo
PATH="${PATH}:/usr/local/bin" ; export PATH

PROGDIR="`pwd`/.."
if [ ! -e "${PROGDIR}/scripts/sync-pcbsd.sh" ] ; then
   echo "Error: Run as ./sync-pcbsd.sh"
   exit 1
fi

GITPATH="${PROGDIR}/pcbsd-git"
if [ -e "branch" ] ; then
  GBRANCH=`cat branch`
else
  GBRANCH="master"
fi

if [ -d "$GITPATH" ] ; then
   rm -rf ${GITPATH}
fi
echo "git clone --depth=1 -b $GBRANCH https://github.com/pcbsd/pcbsd.git ${GITPATH}"
git clone --depth=1 -b $GBRANCH https://github.com/pcbsd/pcbsd.git ${GITPATH}

PROJECTCONF="${GITPATH}/i18n-projects"

while read line
do
  echo "$line" | grep -q "^#"
  if [ $? -eq 0 ] ; then continue ; fi

  TSNAME="`echo $line | cut -d ' ' -f 1`"
  TMODULE="${GITPATH}/`echo $line | cut -d ' ' -f 2`"
  if [ -z "$TSNAME" ] ; then continue ; fi
  if [ -z "$TMODULE" ] ; then continue ; fi

  cd ${PROGDIR}/ts
  echo "Updating: $TSNAME "

  # Check if this file exists in the repo yet
  for i in `ls`
  do
     if [ -e "$i/${TSNAME}.ts" ] ; then continue ; fi
     echo "Creating ${PROGDIR}/ts/${i}/${TSNAME}.ts"
     cd $TMODULE
     pro=`ls *.pro`
     /usr/local/lib/qt5/bin/lupdate -silent -no-obsolete -ts ${PROGDIR}/ts/$i/${TSNAME}.ts -pro $pro 2>/dev/null
     cd ${PROGDIR}/ts
  done

  cd ${PROGDIR}/ts

  # Now run on each file in each language
  for i in `find . | grep "/${TSNAME}.ts"`
  do
     # Update strings from project now
     cd $TMODULE
     pro=`ls *.pro`
     /usr/local/lib/qt5/bin/lupdate -silent -no-obsolete -ts ${PROGDIR}/ts/$i -pro $pro 2>/dev/null
     if [ $? -ne 0 ] ; then exit 1; fi
  done
done < ${PROJECTCONF}

# Now sync the translation files for docs
if [ ! -d "${PROGDIR}/pot-handbook" ] ; then
  mkdir ${PROGDIR}/pot-handbook
else
  rm ${PROGDIR}/pot-handbook/*
fi
cd ${GITPATH}/src-qt5/docs
make gettext
cp -r _build/locale/*.pot ${PROGDIR}/pot-handbook/
rm -rf _build
