  const qs = (element) => document.querySelector(element);
  const qsa = (element) => document.querySelectorAll(element);
  const $ = (element) => document.getElementById(element);
  
  const body = qs('body');
  const h1 = qs('.moviesListTitulo');
  
  let modoOscuro = prompt('¿Desea modo oscuro?').toUpperCase();
  
  console.log(modoOscuro)
  
  if(modoOscuro == 'SI'){
    body.style.backgroundColor = '#7f7f7f​'
    body.classList.add('fondoMoviesList');
  }
  
  h1.innerHTML = 'LISTADO DE PELÍCULAS';
  h1.style.color = 'white';
  h1.style.backgroundColor = 'teal';
  h1.style.padding = '20px';

