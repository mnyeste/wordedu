worddict = {
    words: {
        //--BEGIND-WORD-LISTING
        'dog':'kutya',
        'cat':'macska',
        'pipe':'cső',
        'plug':'csatlakozó',
        'exceed':'meghalad',
        'limit':'határ',
        'facility':'létesítmény',
        'super':'szuper',
        'location':'elhelyezkedés',
        'finger':'ujj'
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