describe("Game suite", function() {

  it("should only be able to add as many characters as many characters are in the word", function() {

    game.newGame();

    var lengthOfWord = game.translatedword.length;
    for (var i = 0; i<lengthOfWord; i++) {
        expect(game.addCharacter('a')).toBe(true);
    }

    // out of space
    expect(game.addCharacter('a')).toBe(false);

    // delete one character
    expect(game.removeCharacter()).toBe(true);

    // can add one again
    expect(game.addCharacter('a')).toBe(true);

    // then out of space again
    expect(game.addCharacter('a')).toBe(false);

  });

});