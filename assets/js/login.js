

const btnLogin = document.getElementById('btn-login')




btnLogin.addEventListener('click', function (ev) {
    ev.preventDefault()
    ShowLoading(ev);
    const emailInput = document.getElementById('email').value
    const passwordInput = document.getElementById('senha').value

    console.log(emailInput)
    console.log(passwordInput)



   firebase.auth().signInWithEmailAndPassword(emailInput, passwordInput)
    .then(response => {
        console.log("Success:", response);
        HideLoading()
        location.href='/assets/html/alunos.html'
    })
    .catch(error => {
        alert("Usuario não encontrado no banco de dados, por favor registre-se")
        HideLoading()
        location.href='/assets/html/registro.html'
        console.log("Error:", error);
    });
    


})
