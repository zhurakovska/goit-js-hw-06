const loginForm = document.querySelector('.login-form')
const initialValues = {email: '', password:''}

const onFormSubmit = (event) => {
    event.preventDefault();
    
    if(event.target.elements["email"].value ==='' || event.target.elements["password"].value ==='') {
       console.log(alert("Всі поля повинні бути заповнені!"))
        return
    }
    initialValues.email = event.target.elements["email"].value
    initialValues.password = event.target.elements["password"].value

    console.log(initialValues)

    event.target.reset()
}

loginForm.addEventListener('submit', onFormSubmit)


