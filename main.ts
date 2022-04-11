input.onButtonPressed(Button.A, function () {
    strip.clear()
    strip.showRainbow(1, 360)
    for (let index = 0; index < 15; index++) {
        strip.rotate(1)
        strip.show()
        basic.pause(2000)
    }
})
input.onButtonPressed(Button.B, function () {
    strip.clear()
    strip.setPixelColor(0, neopixel.rgb(3, 252, 11))
    strip.setPixelColor(1, neopixel.rgb(252, 3, 186))
    strip.setPixelColor(2, neopixel.rgb(3, 194, 252))
    strip.setPixelColor(3, neopixel.rgb(111, 3, 252))
    strip.setPixelColor(4, neopixel.rgb(45, 252, 252))
    strip.setPixelColor(5, neopixel.rgb(252, 252, 252))
    strip.setPixelColor(6, neopixel.rgb(23, 3, 252))
    strip.setPixelColor(7, neopixel.rgb(252, 3, 3))
    strip.setPixelColor(8, neopixel.rgb(111, 3, 252))
    strip.setPixelColor(9, neopixel.rgb(1, 231, 77))
    strip.setPixelColor(10, neopixel.rgb(45, 45, 45))
    strip.setPixelColor(11, neopixel.rgb(78, 22, 252))
    strip.setPixelColor(12, neopixel.rgb(88, 88, 88))
    strip.setPixelColor(13, neopixel.rgb(4, 99, 252))
    strip.setPixelColor(14, neopixel.rgb(69, 67, 54))
    strip.setPixelColor(15, neopixel.rgb(22, 89, 252))
    strip.show()
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 15, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
basic.forever(function () {
	
})
