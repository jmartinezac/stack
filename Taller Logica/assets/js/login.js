/// Funciones Login ///


const login = document.getElementById('login')

login.addEventListener('click', loginUser)

function loginUser(e) {
    e.preventDefault()
    const correo = document.getElementById("correo").value
    const contraseña = document.getElementById('contraseña').value
    const usuarios = JSON.parse(localStorage.getItem('usuarios'))
    if (usuarios.find(user => user.email === correo && user.contraseña === contraseña)) {
        console.log(" Excelente")
        swal({
            title: "Excelente",
            text: " ",
            icon: "success",
            buttons: false
        });
        setTimeout(function () {
            location.href = "lista.html"
        }, 1000);

    } else {
        swal("error", "Usuario o Contraseña Erroneos", "error")
    }
}