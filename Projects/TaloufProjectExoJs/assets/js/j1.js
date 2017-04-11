// carré du nombre + les valeur des attributs
function init() {
  var nombre = prompt("Entre un nombre");
  console.log(typeof (nombre));
  var car = carre(nombre);
  console.log(car);
}
function code() {
  console.log(init);
  console.log(carre);
}

function carre(nombre) {
  n = parseInt(nombre);
  console.log(typeof (n));
  return nombre * nombre;
}
// carré du nombre + les valeur des attributs


