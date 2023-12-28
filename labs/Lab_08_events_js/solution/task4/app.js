const redIn = document.getElementById('redIn');
const greenIn = document.getElementById('greenIn');
const blueIn = document.getElementById('blueIn');
const square = document.getElementById('square');
const blocksContainer = document.getElementById('blocksContainer');

let savedColor = null;

function updateColor() {
    square.style.backgroundColor = `rgb(${redIn.value}, ${greenIn.value}, ${blueIn.value})`;
}

function generateColorBlock() {
    const colorBlock = document.createElement('div');
    colorBlock.classList.add('color-block');
    colorBlock.style.backgroundColor = square.style.backgroundColor;

    blocksContainer.appendChild(colorBlock);

    const colorBlocks = blocksContainer.getElementsByClassName('color-block');
    if (colorBlocks.length > 16) {
        blocksContainer.removeChild(colorBlocks[0]);
    }

    attachColorListeners();
}

function saveColor() {
    savedColor = square.style.backgroundColor;
}

function applySavedColorToBlock(block) {
    if (savedColor) {
        block.style.backgroundColor = savedColor;
    }
}

function attachColorListeners() {
    const colorBlocks = blocksContainer.getElementsByClassName('color-block');
    for (const block of colorBlocks) {
        block.addEventListener('click', () => applySavedColorToBlock(block));
    }
}

redIn.addEventListener('input', updateColor);
greenIn.addEventListener('input', updateColor);
blueIn.addEventListener('input', updateColor);
square.addEventListener('click', saveColor);