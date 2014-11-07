function newWord() {
    // get new word from dict
    word = worddict.getNewWord();
    // display word
    wordelement = document.getElementById('wordelement');
    wordelement.innerHTML = word;
    // display expected number of characters
}