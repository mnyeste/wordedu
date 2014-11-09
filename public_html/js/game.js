game = {
    originalword: null,
    translatedword: null,
    guesses: null,
    newGame: function () {
        this.originalword = worddict.getNewWord();
        this.translatedword = worddict.getWordForKey(this.originalword);
        this.guesses = [];
    },
    addCharacter: function (c) {
        if (game.guesses.length >= game.translatedword.length) {
            return false;
        }
        game.guesses.push(c);
        return true;
    },
    removeCharacter: function () {
        if (game.guesses.length == 0) {
            return false;
        }
        game.guesses.pop();
        return true;
    },
    matches : function () {
        return game.translatedword == game.guesses.join('');
    }
};