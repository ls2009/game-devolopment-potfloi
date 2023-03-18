// Generate a random number between 1 and 100
var randomNumber = Math.floor(Math.random() * 100) + 1;

// Store the player's guess
var guess;

// Keep track of how many guesses the player has made
var guesses = 0;

// Generate a random number between 1 and 100
var randomNumber = Math.floor(Math.random() * 100) + 1;

// Store the player's guess
var guess;

// Keep track of how many guesses the player has made
var guesses = 0;

// Get a reference to the result paragraph
var result = document.getElementById("result");

// Function to check the player's guess
function checkGuess() {
  // Get the player's guess from the input field
  guess = parseInt(document.getElementById("guess").value);

  // Increment the number of guesses the player has made
  guesses++;

  // Check if the player's guess is correct
  if (guess === randomNumber) {
    result.innerHTML = "Congratulations! You guessed the number in " + guesses + " guesses.";
  } else if (guess < randomNumber) {
    result.innerHTML = "Too low! Guess again.";
  } else if (guess > randomNumber) {
    result.innerHTML = "Too high! Guess again.";
  }

  // Clear the input field
  document.getElementById("guess").value = "";
}

var result = document.getElementById("result");

// Function to check the player's guess
function checkGuess() {
  // Get the player's guess from the input field
  guess = parseInt(document.getElementById("guess").value);

  // Increment the number of guesses the player has made
  guesses++;

  // Check if the player's guess is correct
  if (guess === randomNumber) {
    result.innerHTML = "Congratulations! You guessed the number in " + guesses + " guesses.";
  } else if (guess < randomNumber) {
    result.innerHTML = "Too low! Guess again.";
  } else if (guess > randomNumber) {
    result.innerHTML = "Too high! Guess again.";
  }

  // Clear the input field
  document.getElementById("guess").value = "";
}
