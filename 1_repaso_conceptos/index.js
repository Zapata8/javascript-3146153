const imagen = document.querySelector('.img1');
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
  imagen.style.transform = 'scale(1.5) rotate(20deg)';
});

