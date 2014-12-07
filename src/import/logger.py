class Logger:

    def __init__(self):
        pass

    def log(self, text):
        print "[importwords.py] " + text

    def set_and_log(self, variablename, value):
        self.log("{0}={1}".format(variablename, value))
        return value