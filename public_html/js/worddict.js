worddict = {
    words: {
        'dog': 'kutya',
        'cat': 'macska',
        'super' : 'szuper',
        'pipe' : 'cső',
        'plug' : 'csatlakozó',
        'exceed' : 'meghalad',
        'limit' : 'határ',
        'facility' : 'létesítmény'
        //--BEGIND-WORD-LISTING
        //--END-WORD-LISTING
    },
    initialize: function () {
         
    },
    getWordForKey: function (key) {
        return this.words[key];
    },
    getNewWord: function () {
        var wordCount = Object.keys(this.words).length;
        var wordIndex = Math.floor(Math.random() * wordCount);
        return Object.keys(this.words)[wordIndex];
    }
};