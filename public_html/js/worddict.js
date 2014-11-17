var worddict = {
    words: {},
    initialize: function () {
        $.ajax({
            url: 'js/words.json',
            async: false,
            dataType: 'json',
            success: function (response) {
                $.each(response, function (key, val) {
                    worddict.words[key] = val;
                });
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