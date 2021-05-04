function _1 () {
    for (let index = 0; index < 12; index++) {
        basic.pause(5000)
    }
}
_1()
for (let index = 0; index < 2; index++) {
    music.playMelody("C D C - C D C - ", 541)
}
for (let index = 0; index < 2; index++) {
    music.playMelody("- D E D F F D - ", 541)
}
for (let index = 0; index < 2; index++) {
    music.playMelody("- D E D G F E - ", 541)
}
for (let index = 0; index < 2; index++) {
    music.playMelody("- D E D B F E - ", 541)
}
basic.forever(function () {
	
})
