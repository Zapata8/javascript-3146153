const tituloComic =document.querySelector(".titulo-comic");
const descripcion = document.querySelector(".descripcion");
const imgComic = document.querySelector(".img-comic");
const grid = document.querySelector(".grid");


tituloComic.textContent = comic.nombreComic;
descripcion.textContent = comic.descripcion;


comic.capítulos.forEach(cap => {
    const div = document.createElement("div");
    div.classList.add("card");  
    div.innerHTML = ` 
    <img src="${cap.imgPortada}"width="150 alt="">

     <p class="card-titulo">${cap.nombreCap}</p>
    <p class="card-descripcion">${cap.descripcion}</p>
        
    

`
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