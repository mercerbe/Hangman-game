//Global Variables
var wins = 0;
var losses = 0;
var alphabet = ("abcdefghijklmnopqrstuvwxyz").split("");
var wordArray = ("adult scrawny live handle possess babies afraid powerful yard talk guitar dare knock trade cabbage undress swim lush gold vulgar doubt harsh zebra fireman pest potato powder butter screw strong riddle unable plane smiling diligent victorious scribble tranquil momentous concentrate beneficial butterfly island mundane powerful foregoing unadvised imported alluring innate physical quilt stereotyped unequaled intend arrogant numberless degree apparatus").split(" ");
var chosenWord = wordArray[Math.floor(Math.random() * wordArray.length)];
var allowedGuesses = Math.trunc(chosenWord.length * 2);
var correctGuesses;
var wrongGuesses;

//Elements
var wordElement = document.getElementById("word");
var letterCountElement = document.getElementById("currentGuess");
var lettersGuessedElement = document.getElementById("guessesMade");
document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;
startButton.addEventListener("click", startGame, false);
startButton.style.cursor = "pointer";
guessButton.addEventListener("click", guessWord, false);
guessButton.style.cursor = "pointer";
newWordButton.addEventListener("click", startGame, false);
newWordButton.style.cursor = "pointer";
resetButton.style.cursor = "pointer";

//Functions
function startGame() {
  chosenWord = wordArray[Math.floor(Math.random() * wordArray.length)];
  allowedGuesses = Math.trunc(chosenWord.length * 2);
  wrongGuesses = [];
  correctGuesses = [];
  console.log(chosenWord);
  console.log(allowedGuesses);
  console.log(correctGuesses);

    for (var i = 0; i < chosenWord.length; i++) {
      correctGuesses.push("_");
    };

  wordElement.innerHTML = correctGuesses.join(" ");
  letterCountElement.innerHTML = allowedGuesses;
};

function updateGuesses(letter) {
  allowedGuesses--;
  letterCountElement.innerHTML = allowedGuesses;

  if (chosenWord.indexOf(letter) === -1) {
    wrongGuesses.push(letter);
    lettersGuessedElement.innerHTML = wrongGuesses.join(", ");
  } else {
    for (var i = 0; i < chosenWord.length; i++) {
      if (chosenWord[i] === letter) {
        correctGuesses[i] = letter;
      };
    };
    wordElement.innerHTML = correctGuesses.join(" ");
  };
};

function checkWin() {
  if (correctGuesses.indexOf("_") === -1) {
    wins++;
    alert("You Won!");
  }else if (allowedGuesses === 0) {
    losses++;
    alert("You Lost")
  };
};

function guessWord() {
  var wordGuess = prompt("What's the Word?");
  if (wordGuess === chosenWord) {
    window.confirm("Correct!");
    wins++;
    startGame();
  }else {
    window.confirm("Incorrect!");
    losses++;
    startGame();
  }

}

document.onkeyup = function(event) {
  var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
  updateGuesses(letterGuessed);
  checkWin();
};

//startGame();







//
