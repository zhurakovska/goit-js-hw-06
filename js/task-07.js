const sizeControlEl = document.getElementById('font-size-control')
const textEl = document.getElementById('text')

const onChangeSizeInput = ({target : {value}}) => {
    textEl.style.fontSize = value + 'px'
}

sizeControlEl.addEventListener('input', onChangeSizeInput)