input.onButtonPressed(Button.A, function () {
    smurfen += emmer + 1
    basic.showNumber(smurfen)
})
let smurfen = 0
let emmer = 0
emmer = 0
smurfen = 0
basic.forever(function () {
    if (smurfen == 10) {
        basic.showString("gewonnen!")
    }
    if (smurfen >= 11) {
        basic.clearScreen()
    }
})
