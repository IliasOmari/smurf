let smurfen = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(1 + smurfen)
    smurfen = 1 + smurfen
})
basic.forever(function () {
    if (smurfen == 10) {
        basic.showString("gewonnen!")
    }
})
