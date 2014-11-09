gameview = {
    enableEvents: false,
    initGameView: function () {

        // Display word to translate to user
        var wordelement = document.getElementById('wordelement');
        wordelement.innerHTML = game.originalword;

        // Add keyevent handing
        this.enableEvents = true;
        document.onkeypress = function (e) {
            if (gameview.enableEvents) {
                e = e || window.event;
                var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
                if (charCode) {
                    wordedulogger.debug("Character typed: " + String.fromCharCode(charCode));
                }
            }
            else {
                wordedulogger.trace("Keyboard events are suspended");
            }
        };
        document.onkeydown = function(e) {
            if (gameview.enableEvents) {
                wordedulogger.trace("Keyboard down: " + e.keyCode);
            }
            else {
                wordedulogger.trace("Keyboard events are suspended");
            }
        };

    }
};