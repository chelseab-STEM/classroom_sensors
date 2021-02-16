gatorUV.begin()
gatorParticle.begin()
gatorEnvironment.begin_environment()
gator_leds = neopixel.create(DigitalPin.P12, 5, NeoPixelMode.RGB)
strip_leds = neopixel.create(DigitalPin.P1, 60, NeoPixelMode.RGB)

def on_in_background():
    for index in range(5): # repeat 5 times - 4pm to 5:15pm
        music.play_melody("E D G F B A C5 B ", 120)
        basic.pause(2000)
        music.play_melody("E D G F B A C5 B ", 160)
        basic.pause(2000)
        music.play_melody("E D G F B A C5 B ", 210)
        basic.pause(2000)
        basic.show_number(gatorUV.UV())
        basic.pause(10000)
        basic.clear_screen()
        basic.pause(900000)
control.in_background(on_in_background)
