// Seleccionamos elementos del DOM por sus clases
const tituloComic =document.querySelector(".titulo-comic");
const descripcion = document.querySelector(".descripcion");
const imgComic = document.querySelector(".img-comic");
const grid = document.querySelector(".grid");

// Asignamos al título y a la descripción los valores que vienen del objeto "comic"
tituloComic.textContent = comic.nombreComic;
descripcion.textContent = comic.descripcion;

// Recorremos cada capítulo que está dentro de la propiedad "capitulos" del objeto "comic"
comic.capitulos.forEach(cap => {
    const div = document.createElement("div");
    div.classList.add("card");  

    // Definimos el contenido HTML interno de la tarjeta
    div.innerHTML = ` 
    <a href="./capitulos.html?id=${cap.id}">
     <img src="${cap.imgPortada}"width="150 alt="">
     
     <p class="card-titulo">${cap.nombreCap}</p>
     <p class="card-descripcion">${cap.descripcion}</p>
    </a>
    

`
// Finalmente, añadimos esta tarjeta al contenedor con clase "grid"

grid.appendChild(div);
});



/* 

console.log(comic.nombreComic); // "Cuando La Tierra Calla"

const titulo = document.querySelector('.titulo-comic h2');
titulo.textContent = comic.nombreComic;

const descripcion = document.querySelector('.descripcion p');
descripcion.textContent = comic.descripcion;

const episodesContainer = document.querySelector('.grid');

comic.capítulos.forEach((cap, index) => {
  const card = document.createElement('div');
  card.classList.add('.card');

  card.innerHTML = `
    <img src="${cap.imgPortada}" alt="Episode ${index + 1}">
    <h3 class="num-epi">Episode ${index + 1}</h3>
    <h3 class="name-cap">${cap.nombreCap}</h3>
  `;

  episodesContainer.appendChild(card);
}); */