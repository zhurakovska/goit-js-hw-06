let counterValue = 0;

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const value = document.getElementById('value');


const handleClickButton = ({target}) => {
    const getAttribute = target.getAttribute('data-action')
    
    if(getAttribute === "increment") {
        counterValue += 1
    } else {
        counterValue -= 1
    }

    value.textContent = counterValue;
}

decrementButton.addEventListener('click' , handleClickButton)
incrementButton.addEventListener('click', handleClickButton)

