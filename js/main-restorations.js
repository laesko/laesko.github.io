const images = [
    {
        src: '../img/restorations/2.jpeg',
        description: 'Very rare find: 50 - 60 year old split toe Florsheim Imperials with a nice thick double sole. Sourced in USA.',
        price: 'DKK 3000 | € 400',
    },
    {
        src: '../img/restorations/3.jpeg',
        description: 'Very rare find: 50 - 60 year old split toe Florsheim Imperials with a nice thick double sole. Sourced in USA.',
        price: 'DKK 3000 | € 400',
    },
    {
        src: '../img/restorations/1.jpeg',
        description: 'Very rare find: 50 - 60 year old split toe Florsheim Imperials with a nice thick double sole. Sourced in USA.',
        price: 'DKK 3000 | € 400',
    },
    {
        src: '../img/restorations/4.jpeg',
        description: '<strong>[SOLD]</strong> Moma shoes: Beautiful simple design from the italian shoemakers Moma. Sourced in Germany.',
        price: 'DKK 1850 | € 250',
    },
    {
        src: '../img/restorations/5.jpeg',
        description: '<strong>[SOLD]</strong> Moma shoes: Beautiful simple design from the italian shoemakers Moma. Sourced in Germany',
        price: 'DKK 1850 | € 250',
    },
    {
        src: '../img/restorations/6.jpeg',
        description: "Vintage 'ladies' paul smith shoes from the Men Only line around 15 years old. Sourced in Paris.",
        price: 'DKK 1500 | € 200',
    },
    {
        src: '../img/restorations/7.jpeg',
        description: '<strong>[SOLD]</strong> The Last Conspiracy boots, around 10 years old. Sourced in Denmark.',
        price: 'DKK 1500 | € 200',
    },
]
let currentImage = 0

const cycleUp = () => {
    currentImage = currentImage + 1 > images.length - 1 ? 0 : currentImage + 1
    document.getElementById("product-image").src = images[currentImage].src
    document.getElementById("product-description").innerHTML = images[currentImage].description
    document.getElementById("product-price").innerHTML = images[currentImage].price
}
const cycleDown = () => {
    currentImage = currentImage - 1 < 0 ? images.length - 1 : currentImage - 1
    document.getElementById("product-image").src = images[currentImage].src
    document.getElementById("product-description").innerHTML = images[currentImage].description
    document.getElementById("product-price").innerHTML = images[currentImage].price
}

document.querySelector('.left-carat').addEventListener('click', event => {
    cycleDown()
})
document.querySelector('.right-carat').addEventListener('click', event => {
    cycleUp()
})
