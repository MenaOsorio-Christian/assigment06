/* 
   Author:  Christian Mena-Osorio
   Subject:  Assignment Week 9
   JS6 Coding Assignment 
*/

/*
  * For the final project you will be creating an automated version of the classic card game WAR! 
    There are many versions of the game WAR. In this version there are only 2 players.
       * You do not need to do anything special when there is a tie in a round.
    Think about how you would build this project and write your plan down. Consider classes such as: 
    Card, Deck, Player, as well as what properties and methods they may include.
       * You do not need to accept any user input, when you run your code, the entire game should 
         play out instantly without any user input inside of your browser's console.

  * The completed project should, when executed, do the following:
  * Deal 26 Cards to each Player from a Deck of 52 cards.
  * Iterate through the turns where each Player plays a Card.
  * The Player who played the higher card is awarded a point.
  * Ties result in zero points for both Players.
  * After all cards have been played, display the score and declare the winner.         
*/


class Card {
    constructor(suit, rank) {
      this.suit = suit;
      this.rank = rank;
    }
  }
  
  class Deck {
    constructor() {
      this.cards = [];
      this.suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
      this.ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  
      for (const suit of this.suits) {
        for (const rank of this.ranks) {
          this.cards.push(new Card(suit, rank));
        }
      }
    }
  
    shuffle() {
      for (let i = this.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
      }
    }
  }

  class Player {
    constructor(name) {
      this.name = name;
      this.hand = [];
      this.points = 0;
    }
  
    playCard() {
      return this.hand.pop();
    }
  }
  
  class WarGame {
    constructor() {
      this.deck = new Deck();
      this.deck.shuffle();
  
      this.player1 = new Player('Player 1');
      this.player2 = new Player('Player 2');
  
      this.dealCards();
    }
  
    dealCards() {
      for (let i = 0; i < this.deck.cards.length; i++) {
        const player = i % 2 === 0 ? this.player1 : this.player2;
        player.hand.push(this.deck.cards[i]);
      }
    }
  
    playRound() {
      const card1 = this.player1.playCard();
      const card2 = this.player2.playCard();
  
      console.log(`${this.player1.name} plays ${card1.rank} of ${card1.suit}`);
      console.log(`${this.player2.name} plays ${card2.rank} of ${card2.suit}`);
  
      if (this.compareCards(card1, card2) > 0) {
        this.player1.points++;
        console.log(`${this.player1.name} wins the round!\n`);
      } else if (this.compareCards(card1, card2) < 0) {
        this.player2.points++;
        console.log(`${this.player2.name} wins the round!\n`);
      } else {
        console.log('It\'s a tie!\n');
      }
    }
  
    compareCards(card1, card2) {
      const rankValue = {
        '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14
      };
      
      return rankValue[card1.rank] - rankValue[card2.rank];
    }

    playGame() {
      for (let i = 0; i < this.deck.cards.length / 2; i++) {
        this.playRound();
        console.log('-----------------');
      }
  
      console.log('Game Over!');
      console.log(`${this.player1.name} score: ${this.player1.points}`);
      console.log(`${this.player2.name} score: ${this.player2.points}`);
  
      if (this.player1.points > this.player2.points) {
        console.log(`${this.player1.name} wins the game!`);
      } else if (this.player1.points < this.player2.points) {
        console.log(`${this.player2.name} wins the game!`);
      } else {
        console.log('It\'s a tie!');
      }
    }
  }
  
  
  // Run the game
  const warGame = new WarGame();
  warGame.playGame();
  