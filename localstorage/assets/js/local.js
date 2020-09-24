// const nombre = prompt("Escribe tu nombre")

// const apodo = prompt("ingresa tu apodo")


// console.log(`Mi nombre es ${nombre} y mi apodo es ${apodo}`);

// var divMensaje = document.getElementById('mensaje')

// console.log(divMensaje);


// function pedirNombre() {
//     var nombre = prompt("Cual es tu Nombre")

// }

// var apodo = document.querySelector('#BtnPedirApodo');

// // apodo.addEventListener('click', () => {
// //     var nombre = prompt('Escribe tu Apodo')
// // })

// var pedirApodo = () => {
//     var apodo = prompt('Escribe tu Apodo')
// }

// apodo.addEventListener('click', pedirApodo)


// function mostarApodoNombre() {
//     var nombre = prompt("Cual es tu Nombre")
//     var apodo = prompt('Escribe tu Apodo')
//     var mensaje = `Mi nombre es ${nombre} y mi apodo es "${apodo}"`
//     // document.write(nombre + " " + apodo)
//     divMensaje.innerText = mensaje;
// }


// function pedirApodo() {
//     var nombre = prompt('Escribe tu Apodo')
// }
var nombre1 = document.getElementById("nombre1")
var nombre2 = document.getElementById("nombre2")

var ciudad1 = document.getElementById("ciudad1")
var ciudad2 = document.getElementById("ciudad2")

var edad1 = document.getElementById("edad1")
var edad2 = document.getElementById("edad2")


var pedirDatos1 = () => {
    var nombre = prompt("Ingrese el Nombre del Cantante")
    var ciudad = prompt("Ingrese la Ciudad del Cantante")
    var edad = prompt("Ingrese la Edad del Cantante")
    const persona = {
        nombre: nombre,
        edad: edad,
        ciudad: ciudad
    }
    guardarLocalUsuario(persona)

    // nombre1.innerHTML = nombre;
    // ciudad1.innerHTML = ciudad;
    // edad1.innerHTML = edad;
}
var pedirDatos2 = () => {
    var nombre = prompt("Ingrese el Nombre del Cantante")
    var ciudad = prompt("Ingrese la Ciudad del Cantante")
    var edad = prompt("Ingrese la Edad del Cantante")
    nombre2.innerHTML = nombre;
    ciudad2.innerHTML = ciudad;
    edad2.innerHTML = edad;


}
const usuarios = []

const guardarLocalUsuario = (persona) => {

    if (localStorage.getItem('personas') == null) {
        ciudad1.innerHTML = persona.ciudad
        nombre1.innerHTML = persona.nombre
        edad1.innerHTML = persona.edad
        personaString = JSON.stringify(persona)
        localStorage.setItem('personas', personaString)
        console.log(personaString)

    } else {
        const data = localStorage.getItem('personas')
        const persona = JSON.parse(data)
        ciudad1.innerHTML = persona.ciudad
        nombre1.innerHTML = persona.nombre
        edad1.innerHTML = persona.edad
    }
}