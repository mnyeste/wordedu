game = {
    originalword : null,
    translatedword : null,
    guesses : [],
    newGame : function () {
        this.originalword = worddict.getNewWord();
        this.translatedword = worddict.getWordForKey(this.originalword);
    },
    addCharacter : function (c) {
        if (this.guesses.length >= this.translatedword.length) {
            return false;
        }
        this.guesses.push(c);
        return true;
    },
    removeCharacter : function() {
        if (this.guesses.length == 0) {
            return false;
        }
        this.guesses.pop();
        return true;
    }
};