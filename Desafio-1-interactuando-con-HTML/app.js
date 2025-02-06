let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío';

function mensajeConsola() {
    console.log("El boton fue presionado");
}

function nombreCiudad() {
    let nombreCiudad = prompt("Ingrese el nombre de una ciudad de Brasil");
    alert(`Estuve en ${nombreCiudad} y me acordé de ti`);
}