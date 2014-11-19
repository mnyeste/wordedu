describe("Game suite", function () {

    beforeEach(function () {
        worddict.words = {
            "dog": "kutya",
            "cat": "macska"
        };
    });

    it("should only be able to add as many characters as many characters are in the word", function () {

        game.newGame();

        var lengthOfWord = game.translatedword.length;
        for (var i = 0; i < lengthOfWord; i++) {
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

    it("should not match in correct guess", function () {

        game.newGame();

        expect(game.matches("random")).toBe(false);

    });

    it("on submit if the word matches we should get score", function () {

        game.newGame();

        var originalScore = game.score;
        game.submit(game.translatedword);

        var newScore = game.score;
        expect(newScore).toBeGreaterThan(originalScore);

        expect(game.lastSubmitSucceeded).toBe(true);

    });

    it("game with reversed mode should give primary language as solution and secondary as to be translated", function () {

        worddict.words = {
            "primary": "secondary"
        };

        game.reversedmode = true;
        game.newGame(true);

        expect(game.originalword).toBe("secondary");
        expect(game.translatedword).toBe("primary");

    });

});