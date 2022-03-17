const images = [
    "0.jpeg",
    "1.jpeg",
    "2.jpeg"
];

const imageIndex = parseInt(Math.random() * images.length);
const chosenImage = images[imageIndex];
const backgroundImage = document.createElement("img");

backgroundImage.src = `img/${chosenImage}`;
// console.log(backgroundImage);

document.body.appendChild(backgroundImage);
