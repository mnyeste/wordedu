import codecs

def readlines(filename):
    f = codecs.open(filename, 'r')
    lines = f.read().splitlines() 
    f.close()
    return lines