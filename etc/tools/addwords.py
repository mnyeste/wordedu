import codecs
import json
from pprint import pprint

def log(text):
    print "[addwords] -",text

log("read lines from words.txt")

f = codecs.open('../words.txt', 'r')
lines = f.read().splitlines() 
f.close()

log("split lines")

splittedLines = []
for line in lines:
    splittedLine = line.split(',')
    if not "#" in line:
        splittedLines.append(splittedLine)

json_data=open('../../public_html/js/words_tmpl.json')
data = json.load(json_data)
json_data.close()

for splittedLine in splittedLines:
    key = splittedLine[0]
    value = splittedLine[1]
    data["words"][key]=value

pprint(data)

with open('../../public_html/js/words.json', 'w') as outfile:
  json.dump(data, outfile)