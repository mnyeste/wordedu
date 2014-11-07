describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(worddict.getWordForKey('dog')).toBe('kutya');
  });
});