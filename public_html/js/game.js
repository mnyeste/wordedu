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
    }
};