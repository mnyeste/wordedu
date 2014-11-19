var worddict = {
    directDictName: null,
    reversedDictName: null,
    words: {},
    initialize: function () {
        $.ajax({
            url: 'js/words.json',
            dataType: 'json',
            async: false,
            success: function (data) {
                $.each(data["words"], function (key, val) {
                    worddict.words[key] = val;
                });
                worddict.directDictName = data["directDictName"];
                worddict.reversedDictName = data["reversedDictName"];
                wordedulogger.debug("worddict initialized with " + Object.keys(worddict.words).length + " words");
            }

        });
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