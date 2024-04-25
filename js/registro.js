const btnRegister = document.getElementById('btn-register')

let userList = []


btnRegister.addEventListener('click', function (ev) {
    ev.preventDefault()
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const password = document.getElementById('senha').value
    const repeatPassword = document.getElementById('repeatPassword').value


    let usuario = {name:nome, email:email, password:password, repeatPassword:repeatPassword}

    

    if (nome =='' || email == '' || password == '' || repeatPassword == '' ) {
        alert('Adicione os campos necessarios')
        return

    }

    
    if (password == repeatPassword) {
        alert("Conta criada")
        userList.push(usuario)

        location.href = '/html/login.html'
        localStorage.setItem('nome', nome);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        localStorage.setItem('repeatPassword', repeatPassword);
    } else {
        alert("Senhas nao combinam")
        userList.pop()
    }
    
    

})

