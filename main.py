smurfen = 0

def on_button_pressed_a():
    global smurfen
    basic.show_number(1 + smurfen)
    smurfen = 1 + smurfen
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_forever():
    if smurfen == 10:
        basic.show_string("gewonnen!")
basic.forever(on_forever)
