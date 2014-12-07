var game = {
    originalword: null,
    solution: null,
    lastquiz: null,
    lastsolution: null,
    guesses: null,
    score: 0,
    lastSubmitSucceeded: false,
    reversedmode: false,
    newGame: function () {
        this.lastquiz = this.originalword;
        this.lastsolution = this.solution;
        this.originalword = worddict.getNewWord();
        this.solution = worddict.getWordForKey(this.originalword);
        if (this.reversedmode)
        {
            var temp = this.originalword;
            this.originalword = this.solution[0];
            this.solution = [temp];
        }
        this.guesses = [];
    },
    addCharacter: function (c) {
        if (game.guesses.length >= game.solution.length) {
            return false;
        }
        game.guesses.push(c);
        return true;
    },
    removeCharacter: function () {
        if (game.guesses.length === 0) {
            return false;
        }
        game.guesses.pop();
        return true;
    },
    matches: function (solution) {
        for (var i = 0; i < game.solution.length; i++) {
            if (game.solution[i] === solution) {
                return true;
            }
        }
        return false;
    },
    submit: function (solution) {
        if (game.matches(solution)) {
            game.score = game.score + 10;
            game.lastSubmitSucceeded = true;
        }
        else {
            game.lastSubmitSucceeded = false;
        }
    },
    guessesDisplayed: function () {
        var result = "";
        var translatedLength = game.solution.length;
        var guessesLength = game.guesses.length;
        for (i = 0; i < translatedLength; i++) {
            if (i < guessesLength) {
                result += game.guesses[i];
            }
            else {
                result += "_";
            }
            if (i < translatedLength - 1) {
                result += " ";
            }
        }
        return result;
    }
};