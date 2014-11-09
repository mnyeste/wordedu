describe("Game suite", function() {

  it("should only be able to add as many characters as many characters are in the word", function() {

    game.newGame();

    var lengthOfWord = game.translatedword.length;
    for (var i = 0; i<lengthOfWord; i++) {
        expect(game.addCharacter('a')).toBe(true);
    }

    expect(game.addCharacter('a')).toBe(false);

  });

});