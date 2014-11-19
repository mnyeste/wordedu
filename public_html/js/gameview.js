var gameview = {
    enableEvents: false,
    initGameView: function () {

        // Add keyevent handing
        this.enableEvents = true;
        document.onkeydown = function(e) {
            if (gameview.enableEvents) {
                if (e.keyCode == 13) {
                    wordedulogger.trace("Enter pressed");
                    var translatedword = document.getElementById('translatedword');
                    var guess = translatedword.value;
                    game.submit(guess);
                    game.newGame();
                    var score = document.getElementById('score');
                    if (game.lastSubmitSucceeded) {
                        score.className = "scoreSuccess";
                    }
                    else {
                        score.className = "scoreFail";
                    }
                    setTimeout(function () {
                        score.className = "";
                    }, 500);
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

        var translatedword = document.getElementById('translatedword');
        translatedword.value = game.guesses;
        translatedword.focus();

        var score = document.getElementById('score');
        score.innerHTML = game.score;

    },
};