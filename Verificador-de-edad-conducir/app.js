let nombreDeUsuario = (prompt("Ingrese su nombre"));
let edad = parseInt(prompt("Ingrese su edad"));
let edadMinima = 18;
let edadMaxima = 80;
let mensaje = "Cumple con todos los requisitos";
let mensajeDeError = "Error: no cumple con todos los requisitos";
if (edad >= edadMinima && edad <= edadMaxima) {
  alert(mensaje);
}
else {
  alert(mensajeDeError);
}