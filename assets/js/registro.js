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
    ShowLoading(ev)
    
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const password = document.getElementById('senha').value
    const repeatPassword = document.getElementById('repeatPassword').value    

    
    
    if (password === repeatPassword) {  // Usa '===' para comparar valores e tipos
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                HideLoading();
                // Redireciona o usuário para a página de login
                location.href = '/assets/html/login.html';
                console.log("Conta criada")
            })
            .catch(error => {
                HideLoading();
                // Mostra uma mensagem de erro para o usuário
                alert("Erro ao criar a conta: " + error.message);  // Inclui a mensagem de erro
            });
    } else {
        // Exibe um alerta se as senhas não coincidirem
        alert("As senhas não combinam");
        return;
    }
    
    
})

