const expect = chai.expect
const assert = chai.assert

describe('WarGame', () => {
  describe('compareCards', () => {
    it('should correctly compare two cards', () => {
      const warGame = new WarGame();

      const card1 = { rank: '2' };
      const card2 = { rank: '5' };
      const result = warGame.compareCards(card1, card2);

      // In the standard deck, '2' has a lower rank than '5', so the result should be negative.
      expect(result).to.be.lessThan(0);
    });

    it('should handle tie correctly', () => {
      const warGame = new WarGame();

      const card1 = { rank: 'K' };
      const card2 = { rank: 'K' };
      const result = warGame.compareCards(card1, card2);

      // Since the ranks are equal, the result should be 0 for a tie.
      expect(result).to.equal(0);
    });

    it('should correctly handle cards with different ranks', () => {
      const warGame = new WarGame();

      const card1 = { rank: 'Q' };
      const card2 = { rank: 'A' };
      const result = warGame.compareCards(card1, card2);

      // In the standard deck, 'A' has a higher rank than 'Q', so the result should be positive.
      expect(Math.abs(result)).to.be.greaterThan(0);
    });
  });
});
