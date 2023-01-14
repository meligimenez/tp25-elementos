const qs = (element) => document.querySelector(element);
const qsa = (element) => document.querySelectorAll(element);
const $ = (element) => document.getElementById(element);

const h1 = qs('.moviesAddTitulo');
const formulario = $('formulario');
const article = qs('article');

h1.innerHTML = 'AGREGAR PELÍCULAS';
h1.classList.add('titulo');

article.classList.add('fondoTransparente');

formulario.classList.add('fondoCRUD');