let bgrColor;

function getRandomHexColor() {
   bgrColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`; 

    return bgrColor;
}

const pageColorEl = document.querySelector('body');
const changeColorBtnEl = document.querySelector('.change-color')
const initialNameColorEl = document.querySelector('.color')

const onChangeColorClick = () => {
  pageColorEl.style.backgroundColor = getRandomHexColor()
  initialNameColorEl.innerHTML = bgrColor
}

changeColorBtnEl.addEventListener('click', onChangeColorClick)