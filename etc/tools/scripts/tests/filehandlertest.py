import unittest
import sys

sys.path.insert(0, '../src')

import filehandler

class FileHandlerTest(unittest.TestCase):

    def testReadReadlines(self):
        lines = filehandler.readlines("testwords.txt")
        len(lines)

        self.failUnless(len(lines) == 1)

def main():
    unittest.main()

if __name__ == '__main__':
    main()