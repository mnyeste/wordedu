worddict = {
    words: {
        //--BEGIND-WORD-LISTING
        'source':'forrás',
        'in some cases':'néhány esetben',
        'generate':'létrehoz',
        'occure':'előfordul',
        'corporate':'együttműködik',
        'remain':'marad',
        'maintain':'fenntart',
        'prove':'bizonyít',
        'resist':'ellenáll',
        'resistant':'ellenáll',
        'on the basis of personal taste':'egyéni ízlés alapján',
        'define':'meghatároz',
        'musty':'dohos',
        'stale':'állott',
        'rotten':'rohadt',
        'rancid':'avas',
        'sensory characteristic':'érzékszervi tulajdonságok',
        'remain intact':'sértetlen marad',
        'make it possible':'lehetővé tesz',
        'vary':'változik',
        'variant':'változat',
        'version':'változat',
        'procedure':'eljárs',
        'shred':'aprít',
        'mill':'őröl',
        'immiscible':'nem vegyíthető',
        'dissolv':'feloldódik',
        'among':'között',
        'take':'igénybevesz',
        'take':'tart valameddig',
        'late':'tart valameddig',
        'certain amount of time':'bizonyos ideig',
        'vapor pressure':'gőznyomás',
        'multi-stage batch extraction':'többfokozatú szakaszos extrakció',
        'continous counter-current extraction':'folyamatos ellenáramú extakció',
        'continous direct-current extraction':'folymatos egyenáramú extrakció',
        'sequence':'sorrend',
        'consistent':'egyenletes',
        'equable':'egyenletes',
        'equal':'egyenlő',
        'equalent':'egyenértékű',
        'proven':'igazolt',
        'apparent':'látszólagos',
        'due to':'miatt',
        'essential':'nélkülözhetetlen',
        'interact with':'kölcsönhtásban van',
        'multiple':'többszörös',
        'separate':'elkülönít',
        'cultivate':'termel',
        'cultivated':'művelt',
        'ripe':'érett',
        'ripeness':'érettség',
        'ripen':'érik',
        'from a botanical point of view':'növénytani szempontból nézve',
        'firmly':'határozottan',
        'break up':'feloszt',
        'soluble':'oldódó',
        'solution':'oldat',
        'solvent':'oldószer',
        'means':'eszközök',
        'measures':'intézkedések',
        'a distinction is made':'különbséget kell tenni'
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