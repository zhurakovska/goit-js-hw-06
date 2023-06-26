const userNameEl = document.getElementById('name-output')
const inputNameEl = document.getElementById('name-input')

const onInputChangeName = ({target}) => {
    if(target.value === '') {
        userNameEl.innerHTML = 'Anonymous'
        return
    }
    userNameEl.innerHTML = target.value
}

inputNameEl.addEventListener('input', onInputChangeName)
