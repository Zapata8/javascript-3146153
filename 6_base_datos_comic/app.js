const tituloComic =document.querySelector(".titulo-comic");
const descripcionComic = document.querySelector(".descripcion-comic");
const imgComic = document.querySelector(".img-comic");
const listaCaps = document.querySelector(".lista-caps");


tituloComic.textContent = comic.nombreComic;
descripcionComic.textContent = comic.descripcion;


comic.capítulos.forEach(cap => {
    const li = document.createElement("li");
    li.innerHTML = ` 
     <p>${cap.nombreCap}</p>
    <img src="${cap.imgPortada}"width="150 alt="">

`
listaCaps.appendChild(li);
});