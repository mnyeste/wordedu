describe("Word dict suite", function() {
  it("default word should be listed when asked via getWordForKey", function() {
    expect(worddict.getWordForKey('dog')).toBe('kutya');
  });
  it("should be able to ask for a new word", function() {
    expect(worddict.getNewWord().toString().length).toBeGreaterThan(0);
  });
});