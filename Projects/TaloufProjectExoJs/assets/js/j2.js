// decompte 0 2 4 6 8
function init3() {
    var pas;
    for (pas = 0; pas <= 8; pas += 2) {
        console.log(pas);
    }
}
function code3() {
  console.log(init3);
}
// FIN decompte 0 2 4 6 8


// carré du nombre dans le span
function init2() {
  var inputNombre = document.querySelector('#nombre');
  var nombre = inputNombre.value;
  carre2(nombre);
}
function code2() {
  console.log(init2);
  console.log(carre2);
}

function carre2(nombre) {
    var nombreCarre = nombre * nombre;
    var resultat = document.querySelector('#resultatCarre');
    resultat.textContent = nombreCarre;
}
// carré du nombre dans le span

// addition nombre + nombre
function init4() {
    var inputNombre = document.querySelector('#nombre2');
    var nombre = inputNombre.value;
    addition(nombre);
}
function code4() {
    console.log(init4);
    console.log(addition);
}

function addition(nombre) {
    nombre = parseInt(nombre);
    var nombreAddition = nombre + nombre;
    var resultat = document.querySelector('#resultatAddition');
    resultat.textContent = nombreAddition;
}
// addition nombre + nombre


// soustraction nombre - nombre
function init5() {
    var inputNombre = document.querySelector('#nombre3');
    var nombre = inputNombre.value;
    soustraction(nombre);
}
function code5() {
    console.log(init5);
    console.log(soustraction);
}

function soustraction(nombre) {
    var nombreSoustraction = nombre - nombre;
    var resultat = document.querySelector('#resultatSoustraction');
    resultat.textContent = nombreSoustraction;
}
// soustraction nombre - nombre

// division nomre / nombre
function init6() {
    var inputNombre = document.querySelector('#nombre4');
    var nombre = inputNombre.value;
    division(nombre);
}
function code6() {
    console.log(init6);
    console.log(division);
}

function division(nombre) {
    var nombreDivision = nombre / nombre;
    var resultat = document.querySelector('#resultatDivision');
    resultat.textContent = nombreDivision;
}
// division nombre / nombre


// changement de couleur

var monCarre = document.querySelector('#rouge');


monCarre.onclick = function() {
    var maSrc = monCarre.getAttribute('id');
    if(maSrc === 'rouge') {
      monCarre.setAttribute ('id','bleu');
    } else {
      monCarre.setAttribute ('id','rouge');
    }
}