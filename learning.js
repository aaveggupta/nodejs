var time = 0

var timer = setInterval(function () {
    time += 1;
    console.log(time + " seconds passed out")
    if (time >= 9) {
        clearInterval(timer)
    }
}, 1000)