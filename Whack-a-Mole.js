// Get a reference to the container element
var container = document.querySelector(".container");

// Get references to the holes and moles
var holes = document.querySelectorAll(".hole");
var moles = document.querySelectorAll(".mole");

// Get a reference to the score element
var scoreBoard = document.getElementById("score");

// Set the initial score to zero
var score = 0;

// Set the initial time limit
var timeLimit = 10000;

// Set the initial game state to "not started"
var gameStarted = false;

// Function to generate a random amount of time for the mole to be up
function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

// Function to generate a random hole for the mole to appear in
function randomHole(holes) {
  var index = Math.floor(Math.random() * holes.length);
  var hole = holes[index];

  if (hole === lastHole) {
    return randomHole(holes);
  }

  lastHole = hole;
  return hole;
}

// Function to make a mole appear and disappear
function peep() {
  var time = random
