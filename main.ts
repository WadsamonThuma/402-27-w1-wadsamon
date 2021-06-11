basic.showNumber(27)
basic.showString("SAXOPHONE")
basic.pause(2000)
basic.clearScreen()
basic.forever(function () {
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.showString("Hello!")
    basic.showString("M.4/2")
    basic.showNumber(49)
    basic.showString("people")
    basic.showIcon(IconNames.Happy)
    basic.showArrow(ArrowNames.West)
    basic.pause(4000)
    basic.clearScreen()
})
