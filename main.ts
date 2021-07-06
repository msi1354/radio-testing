input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("Left")
    basic.showArrow(ArrowNames.West)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("Stop")
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("Starjump")
    basic.showIcon(IconNames.StickFigure)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("Right")
    basic.showArrow(ArrowNames.East)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendString("Forwards")
    basic.showArrow(ArrowNames.North)
})
basic.clearScreen()
radio.setGroup(55)
basic.showIcon(IconNames.Heart)
