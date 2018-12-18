//Global Variables
var wins = 0;
var losses = 0;
var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
var wordArray = "adult scrawny live handle possess babies afraid powerful yard talk guitar dare knock trade cabbage undress swim lush gold vulgar doubt harsh zebra fireman pest potato powder butter screw strong riddle unable plane smiling diligent victorious scribble tranquil momentous concentrate beneficial butterfly island mundane powerful foregoing unadvised imported alluring innate physical quilt stereotyped unequaled intend arrogant numberless degree apparatus".split(
	" ",
);
var chosenWord = wordArray[Math.floor(Math.random() * wordArray.length)];
var allowedGuesses = Math.trunc(chosenWord.length * 2);
var correctGuesses;
var wrongGuesses;
var time = 100;

//Elements
//word elements on dom
var wordElement = document.getElementById("word");
var letterCountElement = document.getElementById("currentGuess");
var lettersGuessedElement = document.getElementById("guessesMade");
//score tracking
document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;
//cursors for buttons
startButton.addEventListener("click", startGame, timer, false);
startButton.style.cursor = "pointer";
guessButton.addEventListener("click", guessWord, false);
guessButton.style.cursor = "pointer";
newWordButton.addEventListener("click", startGame, false);
newWordButton.style.cursor = "pointer";
resetButton.style.cursor = "pointer";
document.getElementById("guessButton").setAttribute("disabled", "disabled");
//timer
var seconds = 60;
var timer;

//Functions
function startGame() {
	document.getElementById("guessButton").removeAttribute("disabled");
	chosenWord = wordArray[Math.floor(Math.random() * wordArray.length)];
	allowedGuesses = Math.trunc(chosenWord.length * 2);
	wrongGuesses = [];
	correctGuesses = [];
	document.getElementById("timer").innerHTML = "1:00";
	console.log(chosenWord);
	console.log(allowedGuesses);
	console.log(correctGuesses);

	for (var i = 0; i < chosenWord.length; i++) {
		correctGuesses.push("_");
	}

	wordElement.innerHTML = correctGuesses.join(" ");
	letterCountElement.innerHTML = allowedGuesses;
	if (!timer) {
		timer = window.setInterval(function() {
			gameTimer();
		}, 1000); // every second
	}
	gameTimer();
}

function gameTimer() {
	if (seconds < 60) {
		// I want it to say 1:00, not 60
		document.getElementById("timer").innerHTML = `:${seconds}`;
	}
	if (seconds > 0) {
		// so it doesn't go to -1
		seconds--;
	} else {
		clearInterval(timer);
		alert("out of time!");
		seconds = 60;
	}
}

function updateGuesses(letter) {
	if (wrongGuesses.indexOf(letter) < 0 && alphabet.indexOf(letter) >= 0) {
		allowedGuesses--;
	} else {
		alert("Already Guessed " + letter + " , No Guesses Subtracted");
	}
	letterCountElement.innerHTML = allowedGuesses;

	if (chosenWord.indexOf(letter) === -1) {
		wrongGuesses.push(letter);
		lettersGuessedElement.innerHTML = wrongGuesses.join(", ");
	} else {
		for (var i = 0; i < chosenWord.length; i++) {
			if (chosenWord[i] === letter) {
				correctGuesses[i] = letter;
			}
		}
		wordElement.innerHTML = correctGuesses.join(" ");
	}
}

function checkWin() {
	if (correctGuesses.indexOf("_") === -1) {
		setTimeout(function() {
			alert("Correct! Indy Escaped With The Artifact!");
		}, 300);
		seconds = 60;
		wins++;
		document.getElementById("wins").innerHTML = wins;
		startGame();
		console.log(wins);
	} else if (allowedGuesses === 0) {
		setTimeout(function() {
			alert("Out Of Guesses! Indy Didn't Escape!");
		}, 300);
		seconds = 60;
		losses++;
		document.getElementById("losses").innerHTML = losses;
		startGame();
	}
}

function guessWord() {
	var wordGuess = prompt("What's the Word?");
	if (wordGuess === chosenWord) {
		alert("Correct! Code Cracked and Indy Escaped!");
		seconds = 60;
		wins++;
		document.getElementById("wins").innerHTML = wins;
		startGame();
	} else {
		alert("Incorrect! Indy Didn't Escape With The Artifact!");
		seconds = 60;
		losses++;
		document.getElementById("losses").innerHTML = losses;
		startGame();
	}
}

//keyboard for mobile
var $keyboardWrapper = $(".mobile-keyboard"),
	$key = $keyboardWrapper.find("input");

// handle keystrokes
function _keystroke() {
	$key.on("click", function(e) {
		e.preventDefault();

		var letterGuessed = $(this)
			.val()
			.toLowerCase();
		document.getElementById("currentLetter").innerHTML = letterGuessed;
		updateGuesses(letterGuessed);
		setTimeout(function() {
			checkWin();
		}, 500);
	});
}

_keystroke("lower"); // init keystrokes
