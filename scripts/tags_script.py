# Imports the os module, for the os.walk function, and stdio
import os
import exifread
import json
from libxmp.utils import file_to_dict

#open assets constants to write to
foEXIF = open('./scripts/test.txt', 'r+b')

foEXIF.truncate()
# Set the directory you want to start from
rootDir = './assets/pictures'
for dirName, subdirList, fileList in os.walk(rootDir):
    print('Found directory: %s' % dirName)
    for fname in fileList:
        if 'DSC_0245.jpg' in str(fname):
            exifData = file_to_dict('./assets/pictures/' + fname)
            for tag in exifData.keys():
                print "Key: %s, value %s" % (tag, exifData[tag])
            
foEXIF.close()