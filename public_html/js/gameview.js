function newWord() {
    // get new word from dict
    word = worddict.getNewWord();
    // display word
    wordelement = document.getElementById('wordelement');
    wordelement.innerHTML = word;
    // display expected number of characters
}

function enableKeyBoardEvents() {
    document.onkeypress = function(e) {
        e = e || window.event;
        var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
        if (charCode) {
            wordedulogger.debug("Character typed: " + String.fromCharCode(charCode));
        }
    };
}

function disableKeyBoardEvents() {
    document.onkeypress = function(e) {
        wordedulogger.debug("Keyboard events are suspended");
    };
}