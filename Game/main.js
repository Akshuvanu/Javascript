
const prompt = require('prompt-sync')({ sigint: true });
const Field = require('./field'); // Import the Field class from field.js

const myField = new Field(Field.generateField(5, 5)); // Generate a 5x5 field

// The main game loop
function gameLoop() {
  myField.print(); // Print the field after each move

  if (myField.checkWin()) {
    console.log('You won! You found the hat!');
    return;
  }

  if (myField.checkLoss()) {
    console.log('You lost! You fell into a hole or moved out of bounds.');
    return;
  }

  // Get user input for the next move
  const direction = prompt('Which direction would you like to move? (up, down, left, right): ');
  myField.move(direction);

  // Continue the game by calling the loop again
  gameLoop();
}

// Start the game loop
gameLoop();
