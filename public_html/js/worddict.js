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
        'finger':'ujj',
        'multiple':'többszörös',
        'separate':'elkülönít',
        'cultivate':'termel',
        'cultivated':'művelt',
        'ripe':'érett',
        'ripeness':'érettség',
        'ripen':'érik',
        'firmly':'határozottan',
        'break up':'feloszt',
        'comprise':'tartalmaz',
        'consisit of':'áll valamiből',
        'soluble':'oldódó',
        'solution':'oldat',
        'solvent':'oldószer',
        'means':'eszközök',
        'measures':'intézkedések',
        'average':'átlag',
        'a distinction is made':'különbséget kell tenni',
        'ignore':'figyelmenkívűl hagy'
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