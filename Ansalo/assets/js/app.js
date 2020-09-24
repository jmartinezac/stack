const letras = document.querySelectorAll(".botones");
const displayLetras = document.querySelector("#letras");

// console.log(letras);
const base = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
let letrasLocalSt = [];
let numerosLocalSt = [];
let filter = [];

const ansalo = (e) => {
    const texto = e.target.innerText;
    if (texto === "reset") {
        displayLetras.innerHTML = "";
        letrasLocalSt.splice(0, letrasLocalSt.length);
        numerosLocalSt.splice(0, numerosLocalSt.length);
        console.log(letrasLocalSt + " Letras");
        console.log(numerosLocalSt + " Numeros");
    } else {
        const separar = texto.split("-");
        const numero = separar[1];
        const letra = separar[0];
        numerosLocalSt.push(numero);
        letrasLocalSt.push(letra);
        console.log(letrasLocalSt + " Letras");
        console.log(numerosLocalSt + " Numeros");
        displayLetras.innerText = "";
        letrasLocalSt.forEach((letra) => {
            displayLetras.innerHTML += letra;
        });

    }
}

letras.forEach((letra) => {
    letra.addEventListener("click", ansalo);
});