worddict = {
    words: {
        'dog': 'kutya',
        'cat': 'macska'
        //--BEGIND-WORD-LISTING
        //--END-WORD-LISTING
    },
    initialize: function () {
         
    },
    getWordForKey: function (key) {
        return this.words[key];
    },
    getNewWord: function () {
        return "super";
    }
};