const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }

]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid') //querySelector finds element from html  
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBord() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard) //calling flipCard only when cliked (no "()" after function)
        gridDisplay.append(card)
    }
}

createBord()

function checkMatch() {
    const cards = document.querySelectorAll('img') //select all images in html doc
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log("check for match")
    //same card logic:
    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png') //deactivate matched tiles
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        console.log('you have picked same item!')
    }
    //match logic:
    if (cardsChosen[0] == cardsChosen[1]) {
        alert('you found a match!')
        cards[optionOneId].setAttribute('src', 'images/white.png') //deactivate matched tiles
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    }
    //other options logic:
    else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('sorry try again!')
    }

    resultDisplay.innerHTML = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    //game end logic:
    if (cardsWon.length == cardArray.length / 2) {
        resultDisplay.innerHTML = 'You found them all, your score: ' + cardsWon.length
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id') //"this" card that was cliked 
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    this.setAttribute('src', cardArray[cardId].img)

    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}