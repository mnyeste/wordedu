import sys
import dictfactory
import logger

# 0.) check startup parameters and initialize
wordedulogger = logger.Logger()
dictname = wordedulogger.set_and_log("dictname", sys.argv[1])

# 1.) create required components
factory = dictfactory.DictFactory()

# 2.) create json object
jsondict = factory.build_json_dict(dictname)

# 3.) save json object
factory.save_json_dict(dictname, jsondict)

wordedulogger.log("import of dictionary '{0}' succeeded".format(dictname))