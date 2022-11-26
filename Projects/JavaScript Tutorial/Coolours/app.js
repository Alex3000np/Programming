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
    } else if (type === 'copy') {
        //if Color Code clicked - it is copied to memory:
        copyToClickBoard(event.target.textContent)
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

//save to memory on click
function copyToClickBoard(text) {
    return navigator.clipboard.writeText(text)
}

function setRandomColors(isInitial) {
    const colors = isInitial ? getColorsFromHash() : []

    cols.forEach((col, index) => {
        const isLocked = col.querySelector('i').classList.contains('fa-lock')
        const text = col.querySelector('h2')
        const button = col.querySelector('button')

        //end function if locked (do not change a color) 
        if (isLocked) {
            colors.push(text.textContent)
            return
        }

        //const color = generateRandomcolor()
        const color = isInitial
            ? colors[index]
                ? colors[index]
                : chroma.random()
            : chroma.random()


        if (!isInitial) {
            colors.push(color)
        }

        text.textContent = color
        col.style.background = color

        setTextColor(button, color)
        setTextColor(text, color)
    });

    updateColorsHash(colors)
}

//changes element color accordingly to backround color
//input: html element, color
function setTextColor(text, color) {
    const luminance = chroma(color).luminance()
    text.style.color = luminance > 0.5 ? 'black' : 'white'
}

//updates hash (web address):
function updateColorsHash(colors = []) {
    document.location.hash = colors.map((col) => col.toString().substring(1)).join('-')
}

//returns colors from web address
function getColorsFromHash() {
    if (document.location.hash.length > 1) {
        return document.location.hash.substring(1).split('-').map(color => '#' + color)
    }
    return []
}

setRandomColors(true)