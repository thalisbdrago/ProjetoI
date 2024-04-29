const btnRegister = document.getElementById('btn-register')

let register = {
    usuariosRegister: [
        {
            username:'Thalis',
        }
    ]

}



btnRegister.addEventListener('click', function (ev) {
    ev.preventDefault()
    
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const password = document.getElementById('senha').value
    const repeatPassword = document.getElementById('repeatPassword').value    


    
    if (password == repeatPassword) {
        alert("Conta criada")

    } else {
        alert("Senhas nao combinam")
        return
    }
    
    

})

