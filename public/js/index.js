const qs = (element) => document.querySelector(element);
const qsa = (element) => document.querySelectorAll(element);
const $ = (element) => document.getElementById(element);

const main = $('mainContainer');
const parrafos = qsa('p');
const subtitulo = qs('.subtitulo');
const listado = qs('h2 a');
const menu = $('menu');
const logo = qs('.logoDH');
const fondo = qs('body');

let nombre = prompt('¿Cuál es tu nombre?');

subtitulo.textContent += nombre ? nombre : 'Invitado';

subtitulo.style.textTransform = 'uppercase';

listado.style.color = '#E51B3E';

let respuesta = confirm('¿Querés cambiar el fondo?');

if(respuesta){
  fondo.classList.add('fondo');
}

parrafos.forEach((parrafo, index) => {
  if(index%2 === 0){
    parrafo.classList.add('destacadoImpar')
  }else{
    parrafo.classList.add('destacadoPar')
  }
})



main.style.display = 'block'