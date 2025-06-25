"use strict";
// hangman.ts
class Hangman {
    wordToGuess;
    guessedLetters;
    maxIncorrectGuesses;
    incorrectGuesses;
    constructor(wordToGuess, maxIncorrectGuesses = 6) {
        this.wordToGuess = wordToGuess.toLowerCase();
        this.guessedLetters = new Set();
        this.maxIncorrectGuesses = maxIncorrectGuesses;
        this.incorrectGuesses = 0;
    }
    guessLetter(letter) {
        letter = letter.toLowerCase();
        if (this.guessedLetters.has(letter)) {
            return false;
        }
        this.guessedLetters.add(letter);
        if (!this.wordToGuess.includes(letter)) {
            this.incorrectGuesses++;
            return false;
        }
        return true;
    }
    isGameWon() {
        return this.wordToGuess.split('').every(letter => this.guessedLetters.has(letter));
    }
    isGameLost() {
        return this.incorrectGuesses >= this.maxIncorrectGuesses;
    }
    getWordDisplay() {
        return this.wordToGuess.split('').map(letter => this.guessedLetters.has(letter) ? letter : '_').join(' ');
    }
}
// Exemple d'utilisation
const game = new Hangman("typescript");
console.log(game.getWordDisplay());
game.guessLetter("t");
console.log(game.getWordDisplay());
