const inputEl = document.getElementById('validation-input')

const onInputCheckBlur = ({target}={}) => {
    const expectedLenght = parseInt(target.dataset.length)
    const inputLength = target.value.length;

    console.log(expectedLenght)
    
    if (expectedLenght === inputLength) {
        target.classList.add('valid');
        target.classList.remove('invalid');
      } else {
        target.classList.remove('valid');
        target.classList.add('invalid');
      }
}

inputEl.addEventListener('blur',onInputCheckBlur)