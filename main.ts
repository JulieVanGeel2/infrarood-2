let IR_waarde = 0
let strip: neopixel.Strip = null
let Vooruit = 94
let Achteruit = 95
let Rechts = 92
let Links = 92
let Stop = 6
basic.forever(function () {
    strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
    strip.showColor(Maqueen_V5.colors(Maqueen_V5.NeoPixelColors.Blue))
    if (IR_waarde == Vooruit) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 160)
    }
    if (IR_waarde == Achteruit) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 160)
    }
    if (IR_waarde == Links) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 160)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 160)
    }
    if (IR_waarde == Rechts) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 160)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 160)
    }
    if (IR_waarde == Stop) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        maqueen.motorStop(maqueen.Motors.All)
    }
})
basic.forever(function () {
    IR_waarde = IR.IR_read()
})
