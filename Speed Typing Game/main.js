window.addEventListener("load", init);
// Globals
// Available levels
const levels = {
    easy: 5,
    medium: 3,
    hard:2
}

// To change level
const currentLevel = levels.easy;

let time = currentLevel, isPlaying, score = 0;
// DOM
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

const words = [
    'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition'
];

// Initialize Game
function init() {
    // show number of seconds in UI
    seconds.innerHTML = currentLevel;
    showWord(words);
    // Start matching on wordinput
    wordInput.addEventListener("input", startMatch);
    // Call countdown evert second
    setInterval(countdown, 1000)
    // Check game status
    setInterval(checkStatus, 50);
}

// Start Match
function startMatch() {
    if (matchWords()) {
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = "";
        score++;
    }

    if (score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }
}

// Match current word to wordInput
function matchWords() {
    if (wordInput.value === currentWord.innerHTML) {
        message.innerHTML = "Correct!!!";
        return true;
    } else {
        message.innerHTML = "";
        return false;
    }
}

// Pick & show random word
function showWord(words) {
    const randIndex = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[randIndex]
}

// Countdown
function countdown() {
    // Make sure time is not run out
    if (time > 0) {
        time--
    } else if(time === 0) {
        isPlaying = false;
    }
    // Show time 
    timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
    if (!isPlaying && time === 0) {
        message.innerHTML = "Game Over!";
        score = -1;
    }
}

// You can add
// Choose level
// start button
// high score local storage 
// fetch words 
// better random 