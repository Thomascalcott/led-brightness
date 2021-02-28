input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        led.plotBrightness(2, 2, current_brightness)
        current_brightness += 50
        basic.pause(500)
    }
})
let current_brightness = 0
current_brightness = 0
basic.forever(function () {
	
})
