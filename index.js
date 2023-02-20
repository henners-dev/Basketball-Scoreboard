let startNumber = document.getElementById("start-number")
let awayNumber = document.getElementById("away-number")
let startNumber1 = 0
let awayNumber1 = 0

function homePlusOne() {
    startNumber1 += 1
    startNumber.textContent = startNumber1
}

function homePlusTwo() {
    startNumber1 += 2
    startNumber.textContent = startNumber1
}

function homePlusThree() {
    startNumber1 += 3
    startNumber.textContent = startNumber1
}

function awayPlusOne() {
    awayNumber1 += 1
    awayNumber.textContent = awayNumber1
}

function awayPlusTwo() {
    awayNumber1 += 2
    awayNumber.textContent = awayNumber1
}

function awayPlusThree() {
    awayNumber1 += 3
    awayNumber.textContent = awayNumber1
}

function newGame() {
    awayNumber1 = 0
    startNumber1 = 0
    awayNumber.textContent = awayNumber1
    startNumber.textContent = startNumber1
}

function highlightLeader() {
        if (awayNumber1 > startNumber1) {
        startNumber.style.color = 'salmon'
        awayNumber.style.color = '#EEEEEE'

    } else if (awayNumber1 < startNumber1) {
        startNumber.style.color = '#EEEEEE'
        awayNumber.style.color = 'salmon'

    } else if (countHome = countGuest) {
        startNumber.style.color = '#EEEEEE'
        awayNumber.style.color = '#EEEEEE'
    }     
}
