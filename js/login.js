const btnLogin = document.getElementById('btn-login')
let userAcess = [{}]

btnLogin.addEventListener('click', function (ev) {
    ev.preventDefault()

    

    const storedNome = localStorage.getItem('nome')
    const storeEmail = localStorage.getItem('email')
    const storePassword = localStorage.getItem('password')

    let userLogin = {nome:storedNome,email:storeEmail, password:storePassword}

    const emailInput = document.getElementById('email').value
    const passwordInput = document.getElementById('senha').value

    if (emailInput == storeEmail && passwordInput == storePassword) {
        alert("Login efetuado")
        userAcess.push(userLogin)
    }else {
        alert("Email ou senha incorreta")
    }

   




    


})