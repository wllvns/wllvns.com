# Imports the os module, for the os.walk function, and stdio
import os

#open assets constants to write to
foPics = open('./src/constants/pictures.js', 'r+b')

foPics.truncate()
foPics.write('const pictures = [')
# Set the directory you want to start from
rootDir = './assets/pictures'
for dirName, subdirList, fileList in os.walk(rootDir):
    print('Found directory: %s' % dirName)
    for fname in fileList:
    	if '.jpg' in str(fname):
        	foPics.write('\n\t{\n\t\tname: "UNDEF",\n\t\turl: "http://wllvns.com/assets/pictures/' + str(fname) + '",\n\t\ttags: "UNDEF",\n\t},')

foVids.write('\n];\n\nexport default pictures;')
foVids.close()

#open assets constants to write to
foVids = open('./src/constants/videos.js', 'r+b')

foVids.truncate()
foVids.write('const videos = [')
# Set the directory you want to start from
rootDir = './assets/videos'
for dirName, subdirList, fileList in os.walk(rootDir):
    print('Found directory: %s' % dirName)
    for fname in fileList:
    	if '.mov' in str(fname):
        	foVids.write('\n\t{\n\t\tname: "UNDEF",\n\t\turl: "http://wllvns.com/assets/videos/' + str(fname) + '",\n\t\ttags: "UNDEF",\n\t},')

foVids.write('\n];\n\nexport default videos;')
foVids.close()