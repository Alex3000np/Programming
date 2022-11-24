const cols = document.querySelectorAll('.col')

document.addEventListener('keydown', event => {
    event.preventDefault()
    if (event.code.toLocaleLowerCase() === 'space') {
        setRandomColors()
    }
})

document.addEventListener('click', event => {
    
    const type = event.target.dataset.type
    if (type === 'lock') {
        //check if clicked item's Tagname is "i", in other case it's "button" around icon
        const node = event.target.tagName.toLowerCase() === 'i'
            ? event.target              //if "i" pressed -> we take <i> </i> element from HTML
            : event.target.children[0]  //if "button" pressed -> we take first item inside "button" (which is same <i>...</i> element from HTML)
        //from this moment 'node' is <i> </i> element from HTML

        //switches class name
        node.classList.toggle('fa-lock-open')
        node.classList.toggle('fa-lock')
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