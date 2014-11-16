gameview = {
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
                    gameview.redraw();
                    if (game.lastSubmitSucceeded) {
                        score.className = "scoreSuccess";
                    }
                    else {
                        score.className = "scoreFail";
                    }
                    setTimeout(function () {
                        score.className = "";
                    }, 500);
                }
            }
        };

        this.redraw();

    },
    redraw : function () {

         // Display word to translate to user
        var originalword = document.getElementById('originalword');
        originalword.innerHTML = game.originalword;

        var translatedword = document.getElementById('translatedword');
        translatedword.value = game.guesses;
        translatedword.focus();

        var score = document.getElementById('score');
        score.innerHTML = game.score;

    }
};