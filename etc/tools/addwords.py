import codecs

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

f = codecs.open('../../public_html/js/words.json', 'w')

f.write("{\n")

i = 0
for splittedLine in splittedLines:
    f.write("\"{0}\":\"{1}\"".format(splittedLine[0],splittedLine[1]));
    if (i < len(splittedLines) - 1):
        f.write(",")
    f.write("\n")
    i = i + 1

f.write("}\n")
f.close()
