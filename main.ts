for (let index = 0; index <= 10; index++) {
    if (index == 0) {
        basic.showIcon(IconNames.Heart)
    } else if (index < 2) {
        basic.showIcon(IconNames.Yes)
    } else if (index <= 10) {
        basic.showIcon(IconNames.No)
    } else {
        basic.showIcon(IconNames.StickFigure)
    }
}
basic.forever(function () {
	
})
