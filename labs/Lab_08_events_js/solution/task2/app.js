const redIn = document.getElementById('redIn');
const greenIn = document.getElementById('greenIn');
const blueIn = document.getElementById('blueIn');
const square = document.getElementById('square');

function updateColor() {
    const redValue = redIn.value;
    const greenValue = greenIn.value;
    const blueValue = blueIn.value;

    square.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
}

redIn.addEventListener('input', updateColor);
greenIn.addEventListener('input', updateColor);
blueIn.addEventListener('input', updateColor);