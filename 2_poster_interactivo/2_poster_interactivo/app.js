
const monedas = document.querySelectorAll('.coin');
const corazon = document.querySelector('.corazon');
const contadormonedas = document.querySelector('#contador-monedas');
const contadorCorazones = document.querySelector('#contador-corazones');

console.log(monedas,corazon,contadormonedas,contadorCorazones );

monedas.forEach( function(moneda){
  
    moneda.addEventListener( 'click', function () {
        moneda.classList.add('saltar');
        contadormonedas.textContent = parseInt(contadormonedas.textContent) + 1;
    })

})
