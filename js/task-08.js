const loginForm = document.querySelector('.login-form')
const initialValues = {email: '', password:''}

const onFormSubmit = (event) => {
    event.preventDefault();

    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    
    if(email ==='' || password ==='') {
       console.log(alert("Всі поля повинні бути заповнені!"))
        return
    }
    initialValues.email = email
    initialValues.password = password

    console.log(initialValues)

    event.target.reset()
}

loginForm.addEventListener('submit', onFormSubmit)


