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

log("read dict file")

f = codecs.open('../../public_html/js/worddict.js', 'r')
dictlines = f.readlines()
f.close()

state = 0;

f = codecs.open('../../public_html/js/worddict.js', 'w')
for dictline in dictlines:
	if "BEGIND-WORD-LISTING" in dictline:
		state = 1
	elif "END-WORD-LISTING" in dictline:
		state = 3

	if state == 0:
		f.write(dictline)
		pass
	elif state == 1:
		state = 2
		f.write(dictline)
		i = 0
		for splittedLine in splittedLines:
			f.write("        '{0}':'{1}'".format(splittedLine[0],splittedLine[1]));
			if (i < len(splittedLines) - 1):
				f.write(",")
			f.write("\n")
			i = i + 1
	elif state == 3:
		f.write(dictline)
		pass

f.close()
