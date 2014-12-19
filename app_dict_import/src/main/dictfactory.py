import json
import logger

class DictFactory:

    wordedulogger = None

    def __init__(self):
        self.wordedulogger = logger.Logger()
        pass

    def build_json_dict(self, dictname):

        tmplfilename    = self.wordedulogger.set_and_log("tmplfilename", dictname + "_tmpl.json")
        tmplfolderpath  = self.wordedulogger.set_and_log("tmplfolderpath", "../etc/dict_templates")
        tmplfilepath    = self.wordedulogger.set_and_log("tmplfilepath", tmplfolderpath + "/" + tmplfilename)

        tmplfile = open(tmplfilepath)
        tmpljsondata = json.load(tmplfile)
        tmplfile.close()

        dictfilename    = self.wordedulogger.set_and_log("dictfilename", dictname + ".txt")
        dictfolderpath  = self.wordedulogger.set_and_log("dictfolderpath", "../etc/dicts")
        dictfilepath    = self.wordedulogger.set_and_log("dictfilepath", dictfolderpath + "/" + dictfilename)

        dictfile = open(dictfilepath, 'r')
        dictfilelines = dictfile.read().splitlines() 
        dictfile.close()

        self.wordedulogger.log("{0} contains {1} lines".format(dictfilename, len(dictfilelines)))

        for line in dictfilelines:
            splittedline = line.split(',')
            values = []
            for i in range(1, (len(splittedline))):
                values.append(splittedline[i])
            tmpljsondata["words"][splittedline[0]]=values

        return tmpljsondata

    def save_json_dict(self, dictname, jsondict):

        targetfilename    = self.wordedulogger.set_and_log("targetfilename", dictname + ".json")
        targetfolderpath  = self.wordedulogger.set_and_log("targetfolderpath", "build")
        targetfilepath    = self.wordedulogger.set_and_log("targetfilepath", targetfolderpath + "/" + targetfilename)

        with open(targetfilepath, 'w') as outfile:
            json.dump(jsondict, outfile)