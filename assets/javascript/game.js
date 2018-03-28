//Variables
var wins = 0;
var losses = 0;
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
  if (gameTimer === 0) {
    losses++;
    alert("Out Of Time! Couldn't Crack The Code! Indy Didn't Escape With The Artifact!")
  };
  restartGame();
};

function confirmGameOver() {
  return guessesLeftNormal === 0 || gameTimer === 0 || normalAnswer.indexOf("_") === -1;
};






//html
document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;
document.getElementById("guessesLeftNormal").innerHTML = guessesLeftNormal;
document.getElementById("normalAnswer").innerHTML = normalAnswer.join(" ");
document.getElementById("currentGuess").innerHTML = currentGuess;
document.getElementById("guessesMade").innerHTML = guessesMade;
