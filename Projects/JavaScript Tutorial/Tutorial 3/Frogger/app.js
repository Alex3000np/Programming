//collecting elemments from html
const timeLeftDisplay = document.querySelector('#time-left')
const resultDisplay = document.querySelector('#result')
const startPauseButton = document.querySelector('#start-pause-button')
const squares = document.querySelectorAll('.grid div')
const logsLeft = document.querySelectorAll('.log-left')

console.log(squares)
let currentIndex = 76
const width = 9

//frog moving logic
function moveFrog(e) {
    squares[currentIndex].classList.remove('frog') //removes html class 'frog' from selected square 

    switch (e.key) {
        case 'ArrowLeft':
            if (currentIndex % width != 0) {
                currentIndex -= 1
            }
            break
        case 'ArrowRight':
            if (currentIndex % width < width - 1) {
                currentIndex += 1
            }
            break
        case 'ArrowUp':
            if (currentIndex - width >= 0) {
                currentIndex -= width
            }
            break
        case 'ArrowDown':
            if (currentIndex + width < width * width) {
                currentIndex += width
            }
            break

    }
    squares[currentIndex].classList.add('frog') //adds html class 'frog' to selected square
}

document.addEventListener('keyup', moveFrog)

//log moving logic
function autoMoveLogs() {
    logsLeft.forEach(logLeft => moveLogLeft(logLeft))
}

function moveLogLeft(logLeft) {
    switch (true) {
        case logLeft.classList.contains('l1'):
            logLeft.classList.remove('l1')
            logLeft.classList.add('l2')
            break
    }
}

setInterval(autoMoveLogs, 1000)