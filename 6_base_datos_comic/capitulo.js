
// Crea un objeto que permite leer los parámetros que vienen en la URL
//Sirve para capturar y usar datos que se pasan por la URL (como id, nombre, filtros, etc.), muy útil cuando navegas entre páginas y quieres mostrar información dinámica.
const params = new URLSearchParams(window.location.search);

//Agarra el valor del parámetro id y lo convierte en número para saber qué capítulo mostrar.
//transforma un texto con números en un número entero real que JavaScript pueda usar para operar.
const id = parseInt(params.get("id"))

// Busca en el HTML un espacio (un <div> con clase container) donde más adelante vas a poner el contenido del capítulo.
const container = document.querySelector(".container");

// Muestra en la consola un mensaje con el id del capítulo en el que estás
console.log("te encuentras en el capitulo", id);

//buscar capitulo en la base de datos

const capitulo = comic.capitulos.find(cap => cap.id === id)

console.log(capitulo);

// te deja cambiar o reemplazar lo que hay dentro (agregar texto, etiquetas HTML, imágenes, etc.).
container.innerHTML = 


// Insertar contenido dinámico en el contenedor principal
// Se usa  (``) para poder incluir variables de JavaScript dentro del HTML
`
<!-- Botón para volver atrás -->

<button class="btn-volver" onclick="window.history.back()">← Atrás</button>
<div class="banner" style="background-image: url('${capitulo.imgPortada}')!important;">

 <!-- Banner del capítulo -->

    <div class="flag">${capitulo.id}</div>
    <h1>${capitulo.nombreCap}</h1>
    <p>
      ${capitulo.descripcion}
    </p>
    <div class="banner-buttons">
      
       <a class="banner-buttons "href="./video.html?id=${capitulo.id}">Reproducir</a>


    </div>
  </div>

  <!-- Sección de capitulos -->
  <section class="seccion2">
    <div class="seccion">
      <h2>Capitulos:</h2>

      <div class="carrusel">
        <img src="./assets/1.jpg" alt="1.Libranos del mal amén">
        <h3>1.Libranos del mal amén</h3>
      </div>

      <div class="carrusel">
        <img src="/assets/Captura de pantalla 2025-09-04 152747.png" alt="Suplicas de ayuda">
        <h3>2.Suplicas de ayuda</h3>
      </div>







      <div class="carrusel">
        <img src="./assets/Captura de pantalla 2025-09-04 152818.png" alt="Profecias de fantasia">
        <h3>3.Profecías de fantasía</h3>

      </div>
      <div class="carrusel">
        <img class="hora" src="./assets/Captura de pantalla 2025-09-04 152831.png" alt="No hablar con desconocidos">
        <h3 class="">4.No hablar con desconocidos</h3>
      </div>
      <div class="carrusel">
        <img src="./assets/Captura de pantalla 2025-09-04 152845.png" alt="La hora del juicio">
        <h3>5.La hora del juicio</h3>
      </div>
      
    </div>
    </div>
  </section>





      
`



