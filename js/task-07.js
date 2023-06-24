const sizeControlEl = document.getElementById('font-size-control')
const textEl = document.getElementById('text')

const onChangeSizeInput = ({target} ={}) => {
    const inputSizeEl = target.value
    textEl.style.fontSize = inputSizeEl + 'px'
}

sizeControlEl.addEventListener('input', onChangeSizeInput)