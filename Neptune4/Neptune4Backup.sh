#! /bin/bash
rsync -avP -e ssh mks@192.168.2.227:~/ ~/3DPrinting/Slicers/Prusa/Projects/Neptune4/PrinterFiles --exclude '.cache'
