var hintMessage1 = document.getElementById("hint1text");
var hintMessage2 = document.getElementById("hint2text");
var hintMessage3 = document.getElementById("hint3text");

var hintBtn1 = document.getElementById("hint1button");
var hintBtn2 = document.getElementById("hint2button");
var hintBtn3 = document.getElementById("hint3button");

var nextFlagLink = document.getElementById("nextFlag");

hintBtn2.disabled = true;
hintBtn3.disabled = true;

function showHint(hintNumber) {
    if (hintNumber == 1) {
        //display hint 1 text, make hint 2 button clickable
        hintMessage1.style.display = "block";
        hintBtn2.disabled = false;
    }
    else if (hintNumber == 2) {
        //display hint 2 text, make hint 3 button clickable
        hintMessage2.style.display = "block";
        hintBtn3.disabled = false;
    }
    else {
        //display hint 3 text
        hintMessage3.style.display = "block";
    }
}

function checkAnswer(flagNumber) {
    var answer = document.forms['submitAnswer'].flagInput.value
    switch (flagNumber) {
        case 1:
            if (answer == "nkw2" || answer == "flag{nkw2}") {
                correctAnswer();
            }
            else {
                incorrectAnswer();
            }
        case 2:
            if (answer == "24da" || answer == "flag{24da}") {
                correctAnswer();
            }
            else {
                incorrectAnswer();
            }
        case 3:
            if (answer == "72bS" || answer == "flag{72bS}") {
                correctAnswer();
            }
            else {
                incorrectAnswer();
            }
        case 4:
            if (answer == "pght" || answer == "flag{pght}") {
                correctAnswer();
            }
            else {
                incorrectAnswer();
            }
    }
}

function correctAnswer() {
    nextFlagLink.style.display = "block";
    alert("Congratulations, you have completed the first flag! Please click the hyperlink at the bottom of this page to continue to the next challenge")
}

function incorrectAnswer() {
    alert("Unfortunately this is not correct. Please ensure you have entered the flag in the correct form and try again")
}

