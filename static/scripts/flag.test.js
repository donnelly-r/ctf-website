function checkAnswer(flagNumber, answer) {
    answer = answer.toLowerCase();
    switch (flagNumber) {
        case 1:
            if (answer == "nkw2" || answer == "flag{nkw2}") {
                return "pass"
            }
            else {
                return "fail"
            }
        case 2:
            if (answer == "24da" || answer == "flag{24da}") {
                return "pass"
            }
            else {
                return "fail"
            }
        case 3:
            if (answer == "72bs" || answer == "flag{72bs}") {
                return "pass"
            }
            else {
                return "fail"
            }
        case 4:
            if (answer == "pght" || answer == "flag{pght}") {
                return "pass"
            }
            else {
                return "fail"
            }
        case 5:
            if (answer == "p1ai" || answer == "flag{p1ai}") {
                return "pass"
            }
            else {
                return "fail"
            }
        case 6:
            if (answer == "p9cq" || answer == "flag{p9cq}") {
                return "pass"
            }
            else {
                return "fail"
            }
        case 7:
            if (answer == "zdhe" || answer == "flag{zdhe}") {
                return "pass"
            }
            else {
                return "fail"
            } 
        case 8:
            if (answer == "mksp" || answer == "flag{mksp}") {
                return "pass"
            }
            else {
                return "fail"
            } 
    }
}

    QUnit.module('checkAnswer', function () {
        QUnit.test('check valid answer for flag 1 is nkw2', function (assert) {
            assert.equal(checkAnswer(1, "nkw2"), "pass");
        });
    });

    QUnit.module('checkAnswer', function () {
        QUnit.test('check valid answer for flag 1 is flag{nkw2}', function (assert) {
            assert.equal(checkAnswer(1, "flag{nkw2}"), "pass");
        });
    });

    QUnit.module('checkAnswer', function () {
        QUnit.test('check invalid answer for flag 1 is flag{1234}', function (assert) {
            assert.equal(checkAnswer(1, "flag{1234}"), "fail");
        });
    });

    QUnit.module('checkAnswer', function () {
        QUnit.test('check valid answer for flag 2 is 24da', function (assert) {
            assert.equal(checkAnswer(2, "24da"), "pass");
        });
    });

    QUnit.module('checkAnswer', function () {
        QUnit.test('check valid answer for flag 3 is 72BS', function (assert) {
            assert.equal(checkAnswer(3, "72BS"), "pass");
        });
    });

    QUnit.module('checkAnswer', function () {
        QUnit.test('check valid answer for flag 4 is flag{PGHT}', function (assert) {
            assert.equal(checkAnswer(4, "flag{PGHT}"), "pass");
        });
    });

    QUnit.module('checkAnswer', function () {
        QUnit.test('check valid answer for flag 5 is flag{p1ai}', function (assert) {
            assert.equal(checkAnswer(5, "flag{p1ai}"), "pass");
        });
    });

    QUnit.module('checkAnswer', function () {
        QUnit.test('check invalid answer for flag 6 is flag{p1ai}', function (assert) {
            assert.equal(checkAnswer(6, "flag{p1ai}"), "fail");
        });
    });

    QUnit.module('checkAnswer', function () {
        QUnit.test('check valid answer for flag 7 is zdhe', function (assert) {
            assert.equal(checkAnswer(7, "zdhe"), "pass");
        });
    });

    QUnit.module('checkAnswer', function () {
        QUnit.test('check valid answer for flag 8 is MkSp', function (assert) {
            assert.equal(checkAnswer(8, "MkSp"), "pass");
        });
    });
