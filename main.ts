input.onButtonPressed(Button.A, function () {
    basic.showString("Temp:")
    basic.showNumber(gatorEnvironment.getMeasurement(measurementType.degreesF))
    basic.pause(3000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        if (input.buttonIsPressed(Button.A)) {
            break;
        } else {
            music.setVolume(50)
            // repeat 5 times - 4pm to 5:15pm
            music.playMelody("E D G F B A C5 B ", 200)
        }
    }
    basic.pause(1000)
    basic.showNumber(gatorUV.UV())
    basic.pause(5000)
    basic.clearScreen()
    basic.pause(1000)
})
gatorUV.begin()
gatorEnvironment.beginEnvironment()
let gator_leds = neopixel.create(DigitalPin.P12, 5, NeoPixelMode.RGB)
let strip_leds = neopixel.create(DigitalPin.P1, 60, NeoPixelMode.RGB_RGB)
strip_leds.clear()
gator_leds.setBrightness(10)
strip_leds.setBrightness(20)
basic.forever(function () {
    if (gatorMicrophone.getSoundIntensity() <= 120) {
        strip_leds.clear()
        strip_leds.show()
        strip_leds.setPixelColor(1, neopixel.colors(NeoPixelColors.Violet))
        basic.showNumber(gatorMicrophone.getSoundIntensity())
    } else {
        strip_leds.clear()
        strip_leds.show()
        strip_leds.showRainbow(1, 360)
    }
})
