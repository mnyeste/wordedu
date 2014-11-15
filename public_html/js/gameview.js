gameview = {
    enableEvents: false,
    initGameView: function () {

        // Add keyevent handing
        this.enableEvents = true;
        document.onkeypress = function (e) {
            if (gameview.enableEvents) {
                e = e || window.event;
                var charCode = e.which || e.keyCode;
                if (charCode && charCode != 13) {
                    var character = String.fromCharCode(charCode);
                    wordedulogger.trace("Character typed: " + character);
                    if (game.addCharacter(character)) {
                        gameview.redraw();
                    }
                }
            }
            else {
                wordedulogger.trace("Keyboard events are suspended");
            }
        };
        document.onkeydown = function(e) {
            if (gameview.enableEvents) {
                if (e.keyCode == 8) {
                    wordedulogger.trace("Backspace pressed");
                    if (game.removeCharacter()) {
                        gameview.redraw();
                    }
                    e.preventDefault();
                }
                else if (e.keyCode == 13) {
                    wordedulogger.trace("Enter pressed");
                    game.submit();
                    game.newGame();
                    gameview.redraw();
                }
            }
            else {
                wordedulogger.trace("Keyboard events are suspended");
            }
        };

        this.redraw();

    },
    redraw : function () {

         // Display word to translate to user
        var originalword = document.getElementById('originalword');
        originalword.innerHTML = game.originalword;

        var translatedword = document.getElementById('translatedword');
        translatedword.innerHTML = game.guessesDisplayed();

        var score = document.getElementById('score');
        score.innerHTML = game.score;

    }
};