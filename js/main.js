//LOCALSTORAGE

let nombreUsuario = prompt("Bienvenido! Por favor ingresa tu nombre");
localStorage.setItem("nombre-ingresado", nombreUsuario);
let nombreingresadoenlocalstorage = localStorage.getItem("nombre-ingresado");
console.log(nombreingresadoenlocalstorage);




//DOM + EVENTO


const alerta = document.querySelector("#alerta");
alerta.addEventListener("click", informacion);

function informacion() {
    alert("Soy un fanatico del futbol que le interesa saber el punto de vista de los habituales seguidores de este hermoso deporte, las preguntas son para conocer cual es el conocimiento general de la gente sobre la historia del futbol");
}