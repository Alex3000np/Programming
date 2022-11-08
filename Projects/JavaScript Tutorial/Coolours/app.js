const cols = document.querySelectorAll('.col')

function generateRandomcolor() {
    const hexColors = '123456789ABCDEF'
    let color = ''
    for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * hexColors.length)
        color += hexColors[random]
    }
    return '#' + color
}

function setRandomColors() {
    cols.forEach(col => {
        col.style.background = generateRandomcolor()
    });
}

setRandomColors()