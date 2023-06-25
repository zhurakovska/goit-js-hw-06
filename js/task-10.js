function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesEl = document.getElementById('boxes');
const amountInputEl = document.querySelector('input');
const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');

const createBoxes = () => {
  const initialInputValue = +amountInputEl.value;

  onRemoveBtnClick()

  let width = 30;
  let height = 30;

  for (let i = 0; i < initialInputValue; i++) {
    const box = document.createElement('div');
    box.style.width = width + 'px';
    box.style.height = height + 'px';
    box.style.backgroundColor = getRandomHexColor();
    box.textContent = i + 1;
    boxesEl.append(box);

    width += 10;
    height += 10;
  }
};

const onRemoveBtnClick = () => {
  while (boxesEl.firstChild) {
  boxesEl.removeChild(boxesEl.firstChild);}
}

createBtnEl.addEventListener('click', createBoxes);
destroyBtnEl.addEventListener('click',onRemoveBtnClick);








