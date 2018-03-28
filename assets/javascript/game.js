var wordArrayNormal = ("adult scrawny live handle possess babies afraid powerful yard talk guitar dare knock trade cabbage undress swim lush gold vulgar doubt harsh zebra fireman pest potato powder butter screw strong riddle unable plane").split(" ");
var wordArrayHard = ("smiling diligent victorious scribble tranquil momentous concentrate beneficial butterfly island mundane powerful foregoing unadvised imported alluring innate physical quilt stereotyped unequaled intend arrogant numberless degree apparatus").split(" ");
var wins = 0;
var losses = 0;
var hangmanWordNormal = wordArrayNormal[Math.floor(Math.random() * wordArrayNormal.length)];
var normalAnswer = (hangmanWordNormal).split("").fill("_");
var hangmanWordHard = wordArrayHard[Math.floor(Math.random() * wordArrayHard.length)];
var hardAnswer = (hangmanWordHard).split("").fill("_");
var guessesLeftNormal = Math.trunc(hangmanWordNormal.length * 1.75);
var guessesMade = [];
var currentGuess = null;
console.log(hangmanWordNormal);
console.log(normalAnswer);
console.log(guessesLeftNormal);

document.onkeyup = function(event) {

  //var currentGuess = String.fromCharCode(event.keyCode).toLowerCase();



}
