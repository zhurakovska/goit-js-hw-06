const inputEl = document.getElementById('validation-input')

const onInputCheckBlur = ({target}) => {

  const {dataset, value, classList} = target;
    const expectedLenght = parseInt(dataset.length)
    const inputLength = value.length;

   
    if (expectedLenght === inputLength) {
        classList.add('valid');
        classList.remove('invalid');
      } else {
        classList.remove('valid');
        classList.add('invalid');
      }
}

inputEl.addEventListener('blur',onInputCheckBlur)