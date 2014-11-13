game = {
    originalword: null,
    translatedword: null,
    guesses: null,
    score: 0,
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
    matches: function () {
        return game.translatedword == game.guesses.join('');
    },
    submit: function () {
        if (game.matches()) {
            game.score = game.score + 10;
        }
    },
    guessesDisplayed: function () {
        var result = "";
        var translatedLength = game.translatedword.length;
        var guessesLength = game.guesses.length;
        for (i = 0; i < translatedLength; i++) {
            if (i < guessesLength) {
                result += game.guesses[i];
            }
            else {
                result += "_";
            }
        }
        return result;
    }
};