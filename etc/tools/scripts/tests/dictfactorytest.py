import unittest
import sys

sys.path.insert(0, '../src')

import dictfactory

class DictFactoryTest(unittest.TestCase):

    def setUp(self):
        pass
     
    def tearDown(self):
        pass

    def test_build_json_dict(self):

        factory = dictfactory.DictFactory()
        testwordsdict = factory.build_json_dict("testwords")

        directdictname = testwordsdict["directDictName"]
        directreversedname = testwordsdict["reversedDictName"]
        words = testwordsdict["words"]

        self.failUnless(directdictname == "Angol - Magyar")
        self.failUnless(directreversedname == "Magyar - Angol")
        self.failUnless(len(words) == 2)
        self.failUnless(len(words["dog"]) == 2)
        self.failUnless(len(words["cat"]) == 3)

def main():
    unittest.main()

if __name__ == '__main__':
    main()