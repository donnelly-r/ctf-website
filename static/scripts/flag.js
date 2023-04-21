var hintMessage1 = document.getElementById("hint1text");
var hintMessage2 = document.getElementById("hint2text");
var hintMessage3 = document.getElementById("hint3text");
var hintList3 = document.getElementById("hint3list");

var hintBtn1 = document.getElementById("hint1button");
var hintBtn2 = document.getElementById("hint2button");
var hintBtn3 = document.getElementById("hint3button");

var nextFlagLink = document.getElementById("nextFlag");

hintBtn2.disabled = true;
hintBtn3.disabled = true;

async function showHint(hintNumber, containsList) {
    if (hintNumber == 1) {
        //display hint 1 text, make hint 2 button clickable
        hintMessage1.style.display = "block";
        await sleep(5000);
        hintBtn2.disabled = false;
    }
    else if (hintNumber == 2) {
        //display hint 2 text, make hint 3 button clickable
        hintMessage2.style.display = "block";
        await sleep(5000);
        hintBtn3.disabled = false;
    }
    else {
        //display hint 3 text
        hintMessage3.style.display = "block";
        if (containsList == true) {
            hintList3.style.display = "block";
        }
        
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function checkAnswer(flagNumber) {
    var answer = document.forms['submitAnswer'].flagInput.value;
    answer = answer.toLowerCase();
    switch (flagNumber) {
        case 1:
            if (answer == "nkw2" || answer == "flag{nkw2}") {
                correctAnswer();   
                return; 
            }
            else {
                incorrectAnswer();
                return;
            }
        case 2:
            if (answer == "24da" || answer == "flag{24da}") {
                correctAnswer();
                return;
            }
            else {
                incorrectAnswer();
                return;
            }
        case 3:
            if (answer == "72bs" || answer == "flag{72bs}") {
                correctAnswer();
                return;
            }
            else {
                incorrectAnswer();
                return;
            }
        case 4:
            if (answer == "pght" || answer == "flag{pght}") {
                correctAnswer();
                return;
            }
            else {
                incorrectAnswer();
                return;
            }
        case 5:
            if (answer == "p1an" || answer == "flag{p1an}") {
                correctAnswer();
                return;
            }
            else {
                incorrectAnswer();
                return;
            }
        case 6:
            if (answer == "p9cq" || answer == "flag{p9cq}") {
                correctAnswer();
                return;
            }
            else {
                incorrectAnswer();
                return;
            } 
        case 7:
            if (answer == "zdhe" || answer == "flag{zdhe}") {
                correctAnswer();
                return;
            }
            else {
                incorrectAnswer();
                return;
            }  
        case 8:
            if (answer == "mksp" || answer == "flag{mksp}") {
                window.location.href = "http://127.0.0.1:5000/finish";
                return;
            }
            else {
                incorrectAnswer();
                return;
            }  
    }
}

function correctAnswer() {
    nextFlagLink.style.display = "block";
    alert("Congratulations, you have completed this flag! Please click the hyperlink at the bottom of this page to continue to the next challenge")
}

function incorrectAnswer() {
    alert("Unfortunately this is not correct. Please ensure you have entered the flag in the correct form and try again")
}