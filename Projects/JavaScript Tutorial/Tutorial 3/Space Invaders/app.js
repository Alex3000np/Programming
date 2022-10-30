//-------------------------------------------------------------------------------------
const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('.results')
let currentShooterIndex = 202
let width = 15
let direction = 1
let invadersId
let goingRight = true

//creates <div> elemants in grid html:
for (let i = 0; i < 225; i++) {
    const square = document.createElement('div')
    grid.appendChild(square)
}
//collects created <div> square elements from html 
const squares = Array.from(document.querySelectorAll('.grid div'))

const alienInvaders = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    30, 31, 32, 33, 34, 35, 36, 37, 38, 39
]
//-------------------------------------------------------------------------------------
//draw/remove invader:
function draw() {
    for (let i = 0; i < alienInvaders.length; i++) {
        squares[alienInvaders[i]].classList.add('invader')
    }
}

function remove() {
    for (let i = 0; i < alienInvaders.length; i++) {
        squares[alienInvaders[i]].classList.remove('invader')
    }
}

draw()

//draw shooter:
squares[currentShooterIndex].classList.add('shooter')

//-------------------------------------------------------------------------------------
//moving shooter logic (keyboard):
function moveShooter(e) {
    squares[currentShooterIndex].classList.remove('shooter')
    switch (e.key) {
        case 'ArrowLeft':
            if (currentShooterIndex % width !== 0) {
                currentShooterIndex -= 1
            }
            break
        case 'ArrowRight':
            if (currentShooterIndex % width < width - 1) {
                currentShooterIndex += 1
            }
            break
    }
    squares[currentShooterIndex].classList.add('shooter')
}

document.addEventListener('keydown', moveShooter)
//-------------------------------------------------------------------------------------
//moving invaders logic (time):
function moveInvaders() {
    const leftEdge = alienInvaders[0] % width === 0
    const rightEdge = alienInvaders[alienInvaders.length - 1] % width === width - 1
    remove()

    if (rightEdge && goingRight) {
        for (let i = 0; i < alienInvaders.length; i++) {
            alienInvaders[i] += width + 1
            direction = -1
            goingRight = false
        }
    }

    if (leftEdge && !goingRight) {
        for (let i = 0; i < alienInvaders.length; i++) {
            alienInvaders[i] += width - 1
            direction = 1
            goingRight = true

        }
    }

    for (let i = 0; i < alienInvaders.length; i++) {
        alienInvaders[i] += direction

    }

    draw()

    //check game over conditions:
    if (squares[currentShooterIndex].classList.contains('invader', 'shooter')) {
        resultDisplay.innerHTML = "game over :( "
        clearInterval(invadersId)
    }

    for (let i = 0; i < alienInvaders.length; i++) {
        if (alienInvaders[i] > squares.length) {
            resultDisplay.innerHTML = "game over :( "
            clearInterval(invadersId)
        }
    }
}

invadersId = setInterval(moveInvaders, 100)
//-------------------------------------------------------------------------------------
//shooting feature 
function shoot(e) {
    let laserId
    let currentLaserIndex = currentShooterIndex
    function moveLaser() {
        squares[currentLaserIndex].classList.remove('laser')
        currentLaserIndex -= width
        squares[currentLaserIndex].classList.add('laser')
    }
    switch (e.key) {
        case 'ArrowUp':
            laserId = setInterval(moveLaser, 100)
    }
}

document.addEventListener('keydown', shoot)
//4.39
//-------------------------------------------------------------------------------------
