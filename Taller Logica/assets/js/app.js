const registrar = document.getElementById('registrar')

registrar.addEventListener('click', (e) => {
    e.preventDefault()
    const usuarios = []
    const nombre = document.querySelector('#usuario').value
    const email = document.querySelector('#email').value
    const telfono = document.querySelector('#telefono').value
    const contraseña = document.querySelector('#contraseña').value

    console.log(nombre);
    const usuario = {
        nombre: nombre,
        email: email,
        telefono: telfono,
        contraseña: contraseña
    }

    if (localStorage.getItem('usuarios') == null) {
        usuarios.push(usuario)
        const usuarioString = JSON.stringify(usuarios)
        localStorage.setItem('usuarios', usuarioString)
        console.log(usuario);
    } else {
        const getUsuarioLocal = JSON.parse(localStorage.getItem('usuarios'))
        getUsuarioLocal.push(usuario)

        const getUsuString = JSON.stringify(getUsuarioLocal)

        localStorage.setItem('usuarios', getUsuString)

        console.log(localStorage.getItem('usuarios'));
    }
})