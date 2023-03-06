var hintMessage1 = document.getElementById("hint1text");
var hintMessage2 = document.getElementById("hint2text");
var hintMessage3 = document.getElementById("hint3text");

var hintBtn1 = document.getElementById("hint1button");
var hintBtn2 = document.getElementById("hint2button");
var hintBtn3 = document.getElementById("hint3button");

//var userAnswer = document.getElementById("flagInput");

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

// function checkAnswer(){
//     if(userAnswer.toLowerCase() == 'nkw2' || userAnswer.toLowerCase() == 'flag{nkw2}'){

//     }
// }