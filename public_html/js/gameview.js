var gameview = {
    enableEvents: false,
    resultTimeout: null,
    initGameView: function () {

        // Add keyevent handing
        this.enableEvents = true;
        document.onkeydown = function(e) {
            if (gameview.enableEvents) {
                if (e.keyCode == 13) {
                    wordedulogger.trace("Enter pressed");
                    clearTimeout(gameview.resultTimeout);
                    var solution = document.getElementById('solution');
                    var guess = solution.value;
                    game.submit(guess);
                    game.newGame();
                    gameview.updateScore(game.lastSubmitSucceeded);
                    gameview.updateResult(game.lastSubmitSucceeded);
                    gameview.redraw();
                }
            }
        };

        this.redraw();

    },
    changeMode : function (mode) {
        game.reversedmode = mode;
        game.newGame();
        gameview.redraw();
    },
    updateResult : function(success) {
        var result = document.getElementById('result');
        if (success) {
            result.innerHTML = "Helyes!";
            result.className = "resultSuccess";
        }
        else {
            result.innerHTML = "A <i>'" + game.lastquiz + "'</i> szó jelentése(i): <i>'" + game.lastsolution + "'</i>";
            result.className = "resultFail";
        }
        gameview.resultTimeout = setTimeout(function () { result.className = "resultHidden"; }, 3500);
    },
    updateScore : function(success) {
        var score = document.getElementById('score');
        if (success) {
            score.className = "scoreSuccess";
        }
        else {
            score.className = "scoreFail";
        }
        setTimeout(function () {
            score.className = "";
        }, 500);
    },
    redraw : function () {

        var directDictName = document.getElementById('directDictName');
        var reversedDictName = document.getElementById('reversedDictName');

        directDictName.innerHTML = worddict.directDictName;
        reversedDictName.innerHTML = worddict.reversedDictName;

        if (game.reversedmode) {
            directDictName.className = "";
            reversedDictName.className = "selected";
        }
        else {
            directDictName.className = "selected";
            reversedDictName.className = "";
        }

         // Display word to translate to user
        var originalword = document.getElementById('originalword');
        originalword.innerHTML = game.originalword;

        var solution = document.getElementById('solution');
        solution.value = game.guesses;
        solution.focus();

        var score = document.getElementById('score');
        score.innerHTML = game.score;

    },
};