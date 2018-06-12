// start the game

window.onload = function() {

// set variables - random target number, wins, losses, random value's for the crystals, current score
    
var randomTargetNumber = [];
var winsCounter = 0;
var lossesCounter = 0;
var crystalOne = Math.floor(Math.random() * 13) + 1;
var crystalTwo = Math.floor(Math.random() * 13) + 1;
var crystalThree = Math.floor(Math.random() * 13) + 1;
var crystalFour = Math.floor(Math.random() * 13) + 1;
var currentScore = 0;

$("#score").html(currentScore);

// set random target number (19-120)

function getRandomNumber() {
    var minNumber = 19;
    var maxNumber = 120;
    randomTargetNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    console.log(randomTargetNumber);   

    $("#target").html(randomTargetNumber);
    return false;
}
getRandomNumber();

// add Win or Loss to the game

$("#Win").html("<p>" + "Wins: " + winsCounter + "</p>");
$("#Loss").html("<p>" + "Losses: " + lossesCounter + "</p>");

// restart the game - Win or Loose

function restartGame() {
    getRandomNumber();
    var crystalOne = Math.floor(Math.random() * 13) + 1;
    var crystalTwo = Math.floor(Math.random() * 13) + 1;
    var crystalThree = Math.floor(Math.random() * 13) + 1;
    var crystalFour = Math.floor(Math.random() * 13) + 1;
    currentScore = 0;
    $("#score").text(currentScore);
}

// Win Function

function win() {
    alert("You win!");
    winsCounter++;
    $("#Win").text("Wins: " + winsCounter);
    restartGame();
}
// Lose Function

function lose() {
    alert("You lose!");
    lossesCounter++;
    $("#Loss").text("Losses: " + lossesCounter);
    restartGame();
}

// When someone clicks on Crystal 1 , add the value to the total score. Reflect it to the Wins/Losses.

$("#crystal1").on("click", function(){
    currentScore = currentScore + crystalOne;
    $("#score").text(currentScore);

    if(currentScore == randomTargetNumber) {
        win();
    }

    else if (currentScore > randomTargetNumber) {
        lose();
    }
    });

// When someone clicks on Crystal 2 , add the value to the total score. Reflect it to the Wins/Losses.
$("#crystal2").on("click", function(){
    currentScore = currentScore + crystalTwo;
    $("#score").text(currentScore);

    if(currentScore == randomTargetNumber) {
        win();
    }

    else if (currentScore > randomTargetNumber) {
        lose();
    }
    });

// When someone clicks on Crystal 3 , add the value to the total score. Reflect it to the Wins/Losses.
$("#crystal3").on("click", function(){
    currentScore = currentScore + crystalThree;
    $("#score").text(currentScore);

    if(currentScore == randomTargetNumber) {
        win();
    }

    else if (currentScore > randomTargetNumber) {
        lose();
    }
    });

// When someone clicks on Crystal 4 , add the value to the total score. Reflect it to the Wins/Losses.

$("#crystal4").on("click", function(){
    currentScore = currentScore + crystalFour;
    $("#score").text(currentScore);

    if(currentScore == randomTargetNumber) {
        win();
    }

    else if (currentScore > randomTargetNumber) {
        lose();
    }
    });
};
