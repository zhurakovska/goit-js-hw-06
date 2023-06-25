const loginForm = document.querySelector('.login-form')
const initialValues = {email: '', password:''}

const onFormSubmit = (event) => {
    event.preventDefault();

    const email = event.target.elements["email"];
    const password = event.target.elements["password"];

    
    if(email.value ==='' || password.value ==='') {
       console.log(alert("Всі поля повинні бути заповнені!"))
        return
    }
    initialValues.email = email.value
    initialValues.password = password.value

    console.log(initialValues)

    event.target.reset()
}

loginForm.addEventListener('submit', onFormSubmit)


