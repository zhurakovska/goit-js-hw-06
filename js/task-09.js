
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;  
}

const pageColorEl = document.querySelector('body');
const changeColorBtnEl = document.querySelector('.change-color')
const initialNameColorEl = document.querySelector('.color')

const onChangeColorClick = () => {
  const bgrColor = getRandomHexColor();
  pageColorEl.style.backgroundColor = bgrColor;
  initialNameColorEl.innerHTML = bgrColor;
}

changeColorBtnEl.addEventListener('click', onChangeColorClick)