const idBuscar = document.getElementById("btn-buscar");

idBuscar.addEventListener("click", function buscarPoke() {
  const idPoke = document.getElementById("buscar-poke").value;
  const url = `https://pokeapi.co/api/v2/pokemon/${idPoke}`;
  getPoke(url);
});

// const buscarPoke = (id) => {
//   getPoke(url);
// };

const getPoke = (url) => {
  return fetch(url)
    .then((resp) => resp.json())
    .then((pokemon) => {
      mostrarPokemon(pokemon);
    })
    .catch((Error) => {
      console.log("Error al obtener los Pokemon", Error);
    });
};
const mostrarPokemon = (data) => {
  console.log(data);
  console.log(data.abilities[0].ability.name);
  let html = `<div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="${
                      data.sprites.front_default
                    }" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${data.name.toUpperCase()}</h5>
                        <p> Habilidad: ${data.abilities[0].ability.name}</p>
                    </div>
                </div>`;
  document.getElementById("card-poke").innerHTML = html;
};
