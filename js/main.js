const images = [
    'img/0.jpg',
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg',
    'img/5.jpg',
    'img/6.jpg',
    'img/7.jpeg',
]
let currentImage = 0

const cycleUp = () => {
    currentImage = currentImage + 1 > images.length - 1 ? 0 : currentImage + 1
    document.getElementById("product-image").src = images[currentImage]
}
const cycleDown = () => {
    currentImage = currentImage - 1 < 0 ? images.length - 1 : currentImage - 1
    document.getElementById("product-image").src = images[currentImage]
}

document.querySelector('.left-carat').addEventListener('click', event => {
    cycleDown()
})
document.querySelector('.right-carat').addEventListener('click', event => {
    cycleUp()
})
