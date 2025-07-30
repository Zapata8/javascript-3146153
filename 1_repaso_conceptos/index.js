/* const imagen = document.querySelector('.img1');
const boton1 = document.querySelector('.btn1');
const boton2 = document.querySelector('.btn2');
const boton3 = document.querySelector('.btn3');


boton1.addEventListener('click', () => {
  imagen.style.filter = 'grayscale(100%)';
});


boton2.addEventListener('click', () => {
  imagen.style.filter = 'blur(5px)';
});


boton3.addEventListener('click', () => {
  imagen.style.transform = 'scale(1.2) rotate(20deg)';
});
 */

const pantalla = document.querySelector('.img1');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');

//. funciones y eventos

function blancoynegro (){
  console.log("imagen modificada")
  pantalla.style.filter = "grayscale(100%)"

}

function desenfoque (){
  console.log("imagen desenfocada")
  pantalla.style.filter = "blur(5px)"
}

function rotacion (){ 
  console.log("imagen rotacion")
  pantalla.style.transform = "scale(1.2) rotate(20deg)"
}

  /* btn1.style.backgroundColor = "blueviolet"
  btn1.style.color = "white"
  btn1.style.height = "200px"
  btn1.style.borderRadius = "50%"
} */



btn1.addEventListener("click", blancoynegro )
btn2.addEventListener("click", desenfoque )
btn3.addEventListener("click", rotacion )



