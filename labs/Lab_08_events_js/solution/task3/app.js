const redIn = document.getElementById('redIn');
const greenIn = document.getElementById('greenIn');
const blueIn = document.getElementById('blueIn');
const square = document.getElementById('square');
const blocksContainer = document.getElementById('blocksContainer');
function updateColor() {
    const redValue = redIn.value;
    const greenValue = greenIn.value;
    const blueValue = blueIn.value;
    square.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
}

function generateColorBlock() {
    const redValue = redIn.value;
    const greenValue = greenIn.value;
    const blueValue = blueIn.value;

    const colorBlock = document.createElement('div');
    colorBlock.classList.add('color-block');
    colorBlock.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

    blocksContainer.appendChild(colorBlock);

    const colorBlocks = blocksContainer.getElementsByClassName('color-block');
    if (colorBlocks.length > 16) {
        blocksContainer.removeChild(colorBlocks[0]);
    }
}


redIn.addEventListener('input', updateColor);
greenIn.addEventListener('input', updateColor);
blueIn.addEventListener('input', updateColor);
