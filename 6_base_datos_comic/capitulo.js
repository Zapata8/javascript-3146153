const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"))
const container = document.querySelector(".container");

console.log("te encuentras en el capitulo", id);

//buscar capitulo en la base de datos

const capitulo = comic.capitulos.find(cap => cap.id === id)

console.log(capitulo);

container.innerHTML = `
       <div class="container">
    <div class="card" style="width: 28rem;">
      <img src="${capitulo.imgPortada}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${capitulo.nombreCap}</h5>
        <p class="card-text">${capitulo.descripcion}</p>
        <a href="#" class="btn btn-primary">Play</a>
      </div>
    </div>
  </div>
`