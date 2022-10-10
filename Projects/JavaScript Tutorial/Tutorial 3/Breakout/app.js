const grid = document.querySelector('.grid')
const blockWidth = 100
const blockHeight = 20


class Block {
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis, yAxis]
        this.bottomright = [xAxis + blockWidth, yAxis]
        this.topLeft = [xAxis, yAxis + blockHeight]
        this.bottomright = [xAxis + blockWidth, yAxis + blockHeight]
    }
}

const blocks = [new Block(10, 270)]

//creating blocks in html
function addBlocks() {
    const block = document.createElement('div')
    block.classList.add('block')
    block.style.left = '100px'
    block.style.bottom = '50px'
    grid.appendChild(block)
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }
}

addBlocks()

