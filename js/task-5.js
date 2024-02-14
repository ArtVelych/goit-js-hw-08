function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');

const bodyColor = body.style.backgroundColor;

const button = document.querySelector('.change-color');

const spanText = document.querySelector('.color');

button.addEventListener('click', onButtonClick);

function onButtonClick() {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  spanText.textContent = newColor;
}