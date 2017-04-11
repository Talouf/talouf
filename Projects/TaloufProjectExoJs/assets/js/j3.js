// function init7() {
//     var inputNombre = document.querySelector('#nombre5');
//     var inputNombre2 = document.querySelector('#nombre6');
//     var nombre = inputNombre.value;
//     var nombre2 = inputNombre2.value;
//     addition(nombre);
// }
// function code4() {
//     console.log(init4);
//     console.log(addition);
// }

// function addition(nombre) {
//     nombre = parseInt(nombre);
//     var nombreAddition = nombre += nombre2;
//     var resultat = document.querySelector('#resultatAddition2');
//     resultat.textContent = nombreAddition;
// }
// function init7() {
//     var inputNombre = document.querySelector('#nombre5');
//     var nombre = inputNombre.value;
//     var inputNombre2 = document.querySelector('#nombre6');
//     var nombre2 = inputNombre2.value;
//     addition(nombre);
// }


// function addition(nombre) {
//     nombre = parseInt(nombre);
//     nombre2 = parseInt(nombre2);
//     var nombreAddition = nombre += nombre2;
//     var resultat = document.querySelector('#resultatAddition2');
//     resultat.textContent = nombreAddition;
// }

// ADDITION
var button = document.querySelector('#add');
button.addEventListener('click', function () {
    var inputNombre = document.querySelector('#nombre5');
    var nombre1 = parseInt(inputNombre.value);
    var inputNombre2 = document.querySelector('#nombre6');
    var nombre2 = parseInt(inputNombre2.value);
    calcul1(nombre1, nombre2);
});

function calcul1(nombre1, nombre2) {
    var nombreCalcul1 = nombre1 + nombre2;
    var resultat = document.querySelector('#resultatcalcul');
    resultat.textContent = nombreCalcul1;
}
// ADDITION

// SOUSTRACTION
var button = document.querySelector('#soustr');
button.addEventListener('click', function () {
    var inputNombre = document.querySelector('#nombre5');
    var nombre1 = parseInt(inputNombre.value);
    var inputNombre2 = document.querySelector('#nombre6');
    var nombre2 = parseInt(inputNombre2.value);
    calcul2(nombre1, nombre2);
});

function calcul2(nombre1, nombre2) {
    var nombreCalcul2 = nombre1 - nombre2;
    var resultat = document.querySelector('#resultatcalcul');
    resultat.textContent = nombreCalcul2;
}
// SOUSTRACTION

// DIVISION
var button = document.querySelector('#divis');
button.addEventListener('click', function () {
    var inputNombre = document.querySelector('#nombre5');
    var nombre1 = parseInt(inputNombre.value);
    var inputNombre2 = document.querySelector('#nombre6');
    var nombre2 = parseInt(inputNombre2.value);
    calcul3(nombre1, nombre2);
});

function calcul3(nombre1, nombre2) {
    var nombreCalcul3 = nombre1 / nombre2;
    var resultat = document.querySelector('#resultatcalcul');
    resultat.textContent = nombreCalcul3;
}
// DIVISION

// MULTIPLICATOIN
var button = document.querySelector('#multip');
button.addEventListener('click', function () {
    var inputNombre = document.querySelector('#nombre5');
    var nombre1 = parseInt(inputNombre.value);
    var inputNombre2 = document.querySelector('#nombre6');
    var nombre2 = parseInt(inputNombre2.value);
    calcul4(nombre1, nombre2);
});

function calcul4(nombre1, nombre2) {
    var nombreCalcul4 = nombre1 * nombre2;
    var resultat = document.querySelector('#resultatcalcul');
    resultat.textContent = nombreCalcul4;
}
// MULTIPLICATION


// calculatrice
// On defini les operateurs de la calculatrice
var operateur;
var btnadd = document.querySelector('#add2');
btnadd.addEventListener('click', function () {
    operateur = btnadd.textContent;
});
var btnsoustr = document.querySelector('#soustr2');
btnsoustr.addEventListener('click', function () {
    operateur = btnsoustr.textContent;
});
var btnmultip = document.querySelector('#multip2');
btnmultip.addEventListener('click', function () {
    operateur = btnmultip.textContent;
});
var btndivis = document.querySelector('#divis2');
btndivis.addEventListener('click', function () {
    operateur = btndivis.textContent;
});

// on defini la variable du egal
var btnegal = document.querySelector('#egal');
btnegal.addEventListener('click', function () {
    // on va chercher les nombres
    var nmbr1 = document.querySelector('#nombre7').value;
    nmbr1 = parseInt(nmbr1);
    var nmbr2 = document.querySelector('#nombre8').value;
    nmbr2 = parseInt(nmbr2);
    var resultat;
    switch (operateur) {
        case "+":
            resultat = nmbr1 + nmbr2;
            break;
        case "-":
            resultat = nmbr1 - nmbr2;
            break;
        case "*":
            resultat = nmbr1 * nmbr2;
            break;
        case "/":
            resultat = nmbr1 / nmbr2;
            break;
    }
    var reponse = document.querySelector('#resultatcc1');
    reponse.textContent = resultat;
});

