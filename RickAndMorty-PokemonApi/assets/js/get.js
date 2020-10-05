/// URL Api ////

const url = "https://rickandmortyapi.com/api/character";

const getData = (url) => {
    return fetch(url)
        .then((response) => response.json())
        .then((json) => {
            llenarDatos(json), paginacion(json.info);
        }).catch((error) => {
            console.log("Error:", error);
        })
}

const llenarDatos = (data) => {
    let html = ""
    data.results.forEach((x) => {
        console.log(data.results + "test");
        html +=
            `<div class="col my-2">
                <div class="card" style="width: 10rem;">
                    <img class="card-img-top" src="${x.image}" alt="..."">
                    <div class="card-body">;
                        <h5 class="card-title">${x.name}</h5>
                        <p class="card-text">${x.species}</p>
                    </div>
                </div>
            </div>`
    });
    document.getElementById('datosPersonajes').innerHTML = html
}
/// Ejecutar getData ///

getData(url);

/// Paginacion ///

const paginacion = (data) => {
    let html = ""
    let prevDisabled = ""
    let nextDisabled = ""
    prevDisabled = !data.prev && 'disabled';
    nextDisabled = !data.next && 'disabled';





    html += `<li class="page-item ${prevDisabled}"><a class="page-link" onclick="getData('${data.prev}')" >Previous</a></li>
             <li class="page-item ${nextDisabled}"><a class="page-link" onclick="getData('${data.next}')" >Next</a></li>`
    document.getElementById('paginacion').innerHTML = html
}