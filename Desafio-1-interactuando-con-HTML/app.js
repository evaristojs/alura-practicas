let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío';

function mensajeConsola() {
    console.log("El boton fue presionado");
};

function nombreCiudad() {
    let nombreCiudad = prompt("Ingrese el nombre de una ciudad de Brasil");
    alert(`Estuve en ${nombreCiudad} y me acordé de ti`);
};

function mensajeAlerta() {
    alert("Yo amo a JavaScript");
};

function suma() {
    let num1 = parseInt(prompt("Ingrese un número"));
    let num2 = parseInt(prompt("Ingrese otro número"));
    let resultado = num1 + num2;
    alert(`La suma de los números es ${resultado}`);
}