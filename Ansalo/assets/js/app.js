const letras = document.querySelectorAll(".botones");
const displayLetras = document.getElementById("letras");
const displayNumeros = document.getElementById('numerosIn');

// console.log(letras);
const base = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
const baseNumero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
let letrasLocalSt = [];
let numerosLocalSt = [];
let letrasTerm = false;

const ansalo = (e) => {
    const texto = e.target.innerText;
    if (texto === "reset") {
        displayLetras.innerHTML = "";
        displayNumeros.innerHTML = "";
        letrasLocalSt.splice(0, letrasLocalSt.length);
        numerosLocalSt.splice(0, numerosLocalSt.length);
        location.reload();
    } else if (letrasTerm == false) {
        imprimirLetras(texto);
    } else {
        imprimirNumeros(texto);
    }

}

const imprimirLetras = (texto) => {
    const separar = texto.split("-");
    const letra = separar[0];
    letrasLocalSt.push(letra);
    console.log(letrasLocalSt + " Letras");
    console.log(numerosLocalSt + " Numeros")
    console.log(letra);
    if (base[0] == letrasLocalSt[letrasLocalSt.length - 1]) {
        console.log(letrasLocalSt[letrasLocalSt.length - 1] + "ls");
        displayLetras.innerHTML += letrasLocalSt[letrasLocalSt.length - 1];
        base.shift();
    } else
    if (base.length == 0) {
        alert("Se Acabaron las Letras")
        letrasTerm = true
        console.log(base);
    } else {
        alert("Debe Digitar la Letra " + base[0])
        letrasLocalSt.pop();
    }
}

const imprimirNumeros = (texto) => {
    const separar = texto.split("-");
    const numero = separar[1];
    numerosLocalSt.push(numero);
    console.log(letrasLocalSt + " Letras");
    console.log(numerosLocalSt + " Numeros")
    if (baseNumero[0] == numerosLocalSt[numerosLocalSt.length - 1]) {
        console.log(numerosLocalSt[numerosLocalSt.length - 1] + "ls");
        displayNumeros.innerHTML += numerosLocalSt[numerosLocalSt.length - 1];
        baseNumero.shift();
    } else {
        if (baseNumero.length == 0) {
            alert("Se Termino el Juego")
            console.log(base);
        } else {
            alert("Debe Digitar el Numero " + baseNumero[0])
            numerosLocalSt.pop();
        }
    }
}
letras.forEach((letra) => {
    letra.addEventListener("click", ansalo);
})