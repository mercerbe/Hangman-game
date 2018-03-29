//Variables
var wins = 0;
var losses = 0;
var alphabet = ("abcdefghijklmnopqrstuvwxyz").split("");
var wordArrayNormal = ("adult scrawny live handle possess babies afraid powerful yard talk guitar dare knock trade cabbage undress swim lush gold vulgar doubt harsh zebra fireman pest potato powder butter screw strong riddle unable plane").split(" ");
var wordArrayHard = ("smiling diligent victorious scribble tranquil momentous concentrate beneficial butterfly island mundane powerful foregoing unadvised imported alluring innate physical quilt stereotyped unequaled intend arrogant numberless degree apparatus").split(" ");
var hangmanWordNormal = wordArrayNormal[Math.floor(Math.random() * wordArrayNormal.length)];
//var normalAnswer = (hangmanWordNormal).split("").fill("_");
var normalAnswer = [];
  for (var i = 0; i < hangmanWordNormal.length; i++) {
    normalAnswer[i] = "_";
  };
var hangmanWordHard = wordArrayHard[Math.floor(Math.random() * wordArrayHard.length)];
//var hardAnswer = (hangmanWordHard).split("").fill("_");
var hardAnswer = [];
  for (var j = 0; j < hangmanWordHard.length; j++) {
    hardAnswer[j] = "_";
  };
var guessesLeftNormal = Math.trunc(hangmanWordNormal.length * 1.75);
var guessesLeftHard = Math.trunc(hangmanWordHard.length * 1.75);
var guessesMade = [];
var currentGuess = null;

//html
document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;
document.getElementById("guessesLeftNormal").innerHTML = guessesLeftNormal;
document.getElementById("normalAnswer").innerHTML = normalAnswer.join(" ");
document.getElementById("currentGuess").innerHTML = currentGuess;
document.getElementById("guessesMade").innerHTML = guessesMade;

//Console information
console.log(hangmanWordNormal);
console.log(normalAnswer);
console.log(guessesLeftNormal);


//Functions
function gameOver() {
  if (normalAnswer.indexOf("_") === -1) {
    wins++;
    alert("Code Cracked! Indy Escaped With The Artifact!");
  };
  if (guessesLeftNormal === 0) {
    losses++;
    alert("Out Of Guesses! Couldn't Crack The Code! Indy Didn't Escape With The Artifact!");
  };
  if (timer === 0) {
    losses++;
    alert("Out Of Time! Couldn't Crack The Code! Indy Didn't Escape With The Artifact!")
  };
  restartGame();
};

function confirmGameOver() {
  return guessesLeftNormal === 0 || gameTimer === 0 || normalAnswer.indexOf("_") === -1;
};

function confirmLetter(letter) {
  return alphabet.indexOf(letter) > -1;
  alert("Not A Letter! Please Choose A Letter A-Z!")
};

function wrongGuess() {
  guessesLeftNormal--;
};

function startGame() {
  guessesLeftNormal;
  guessesMade = [];
  currentGuess = null;
  normalAnswer;
};

function startTimer(duration, display) {
    var timer = duration, mintues, seconds;
    setInterval(function() {
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.textContent = minutes + ":" + seconds;
    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);

};

window.onload = function () {
  var fiveMinutes = 60 * 5;
    display = document.querySelector("#timer")
    startTimer(fiveMinutes, display);
};

/*function getAlphabet() {
    var alphabetArray = [];
    for (var i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
      alphabetArray.push(String.fromCharCode(i));
    }
    return alphabetArray;
}*/

document.onkeyup = function(event) {
  var currentGuess = String.fromCharCode(event.keyCode).toLowerCase();

    if (guessesMade.indexOf(currentGuess) < 0 && normalAnswer.indexOf(currentGuess) >= 0){
  guessesMade[guessesMade.length] = currentGuess;
  guessesLeftNormal--;
  };

};














//extra elements
