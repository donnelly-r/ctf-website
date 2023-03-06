var hintMessage1 = document.getElementById("hint1text");
var hintMessage2 = document.getElementById("hint2text");
var hintMessage3 = document.getElementById("hint3text");

var hintBtn1 = document.getElementById("hint1button");
var hintBtn2 = document.getElementById("hint2button");
var hintBtn3 = document.getElementById("hint3button");

let userAnswer = document.getElementById("flagInput");
var nextFlagLink = document.getElementById("nextFlag");

hintBtn2.disabled = true;
hintBtn3.disabled = true;

function showHint1() {
    hintMessage1.style.display = "block";
    hintBtn2.disabled = false;
}
function showHint2() {
    hintMessage2.style.display = "block";
    hintBtn3.disabled = false;
}
function showHint3() {
    hintMessage3.style.display = "block";
}

function checkAnswer() {
    if (document.forms['submitAnswer'].flagInput.value == "nkw2" || document.forms['submitAnswer'].textbox_text.value == "flag{nkw2}") {
        nextFlagLink.style.display = "block";
        alert("Congratulations, you have completed the first flag! Please click the hyperlink at the bottom of this page to continue to the next challenge")
    }
}