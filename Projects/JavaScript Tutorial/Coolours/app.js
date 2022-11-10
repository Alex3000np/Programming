const cols = document.querySelectorAll('.col')

document.addEventListener('keydown', event => {
    if (event.code.toLocaleLowerCase() === 'space') {
        setRandomColors()
    }
})

document.addEventListener('click', event => {
    const type = event.target.dataset.type
    if (type === 'lock') {
        console.log('perform lock')
    }
})

//function is not used, has been used as example only 
// function generateRandomcolor() {
//     const hexColors = '123456789ABCDEF'
//     let color = ''
//     for (let i = 0; i < 6; i++) {
//         let random = Math.floor(Math.random() * hexColors.length)
//         color += hexColors[random]
//     }
//     return '#' + color
// }

function setRandomColors() {
    cols.forEach(col => {
        const text = col.querySelector('h2')
        const button = col.querySelector('button')

        //const color = generateRandomcolor()
        const color = chroma.random()

        text.textContent = color
        col.style.background = color

        setTextColor(button, color)
        setTextColor(text, color)
    });
}

//changes element color accordingly to backround color
//input: html element, color
function setTextColor(text, color) {
    const luminance = chroma(color).luminance()
    text.style.color = luminance > 0.5 ? 'black' : 'white'
}

setRandomColors()