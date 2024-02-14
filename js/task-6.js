function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const input = document.querySelector('input');
const boxes = document.querySelector('#boxes');
boxes.style.marginTop = '10px';
boxes.style.display = 'flex';
boxes.style.flexDirection = 'column';
boxes.style.gap = '5px';

createButton.addEventListener('click', onCreateButtonClick);
destroyButton.addEventListener('click', destroyBoxes);

function onCreateButtonClick() {
  if (input.value >= 1 && input.value <= 100) {
    boxes.innerHTML = createBoxes(input.value);
  } else {
    alert('Please, enter a value between 1 and 100');
  }

  input.value = '';
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

function createBoxes(amount) {
  const array = [];

  const size = {
    width: 30,
    height: 30,
  }

  for (let i = 0; i < amount; i++) {
    size.width += 10;
    size.height += 10;
    let newColor = getRandomHexColor();
    const boxCode = `<div class="js-box" style="background-color: ${newColor}; width: ${size.width}px; height: ${size.height}px;"></div>`;
    array.push(boxCode);
  }

  return array.join('\n');
}