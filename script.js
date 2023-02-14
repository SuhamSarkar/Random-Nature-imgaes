const container = document.querySelector('.container')
const unsplashURL = 'https://source.unsplash.com/weekly?nature/'
const rows = 5

for(let i = 0; i < rows * 3; i++) {
    const img = document.createElement('img')
    img.src = `${unsplashURL}${getNatureSize()}`
    container.appendChild(img)
}

function getNatureSize() {
    return `${getNatureNr()}x${getNatureNr()}`
}

function getNatureNr() {
    return Math.floor(Math.random() * 10) + 300
}