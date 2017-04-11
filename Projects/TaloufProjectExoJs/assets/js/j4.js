

// // var egal2 = document.querySelector('#egal2');
// // egal2.addEventListener('click', function () {
// //     var num1 = document.querySelector('#nombre9').value;
// //     num2 = parseInt(num1);
// //     console.log(num2);
// // });


// var operateur;
// var btnadd = document.querySelector('#add3');
// btnadd.addEventListener('click', function () {
//     operateur = btnadd.textContent;

// });
// var btnsoustr = document.querySelector('#soustr3');
// btnsoustr.addEventListener('click', function () {
//     operateur = btnsoustr.textContent;

// });
// var btnmultip = document.querySelector('#multip3');
// btnmultip.addEventListener('click', function () {
//     operateur = btnmultip.textContent;

// });
// var btndivis = document.querySelector('#divis3');
// btndivis.addEventListener('click', function () {
//     operateur = btndivis.textContent;
//     var num1 = document.querySelector('nombre9').value;
//     var num2 = document.querySelector('#chiffre');
//     num2.textContent = num1;
// });





// // var num1 = document.querySelector('nombre9').value;
// //     var num2 = document.querySelector('#chiffre');
// //     num2.textContent = num1;
// //     console.log(num1);



// var num1 = document.querySelector('#nombre9');
// var num2 = document.querySelector('#chiffre');

// var btnadd = document.querySelector('#add3');
// btnadd.addEventListener('click', function () {
//     operateur = btnadd.textContent;
//     num1 = parseInt(num1.value);
//     num2.textContent = num1 + "" + operateur;
//     document.querySelector('#nombre9').value = "";
// });
// var btnsoustr = document.querySelector('#soustr3');
// btnsoustr.addEventListener('click', function () {
//     operateur = btnsoustr.textContent;
// });
// var btnmultip = document.querySelector('#multip3');
// btnmultip.addEventListener('click', function () {
//     operateur = btnmultip.textContent;

// });
// var btndivis = document.querySelector('#divis3');
// btndivis.addEventListener('click', function () {
//     operateur = btndivis.textContent;
// });
// var btnegal = document.querySelector('#egal2');
// btnegal.addEventListener('click', function () {
//     var resultat;
//     switch (operateur) {
//         case "+":
//             resultat = num1 + num2;
//             break;
//         case "-":
//             resultat = num1 - num2;
//             break;
//         case "*":
//             resultat = num1 * num2;
//             break;
//         case "/":
//             resultat = num1 / num2;
//             break;
//     }
//     var reponse = document.querySelector('#resultatcc2');
//     reponse.textContent = resultat;
// });

// on crée les variables num1, num2, operateur, resultat
var num1, num2, operateur, resultat;
// on crée la variable afin dimporter le span qui contiendra le premier chiffre
var preAffichage = document.querySelector('#preaffichage');
// on crée la variable afin dimporter le span qui contiendra laffichage
var affichage = document.querySelector("#resultat");  
// on crée la variable afin dimportrer linput qui contiendra 
// le premier résultat puis le deuxieme
var input = document.querySelector("#num");
// on crée une variable pour tout les boutons avec la classe operateur
var buttons = document.querySelectorAll('.operateur');
// pour chaque element dans la liste de bouttons, on leur impose une fonction btn
buttons.forEach(function(btn){
// on defini un evenenement au click pour chaque bouton accompagné de fonctions associés
  btn.addEventListener('click', function(){
// on defini la valeur de linput comme un chiffre et on lui assigne la variable num1
    num1 = parseInt(input.value);
// on defini le contenu de loperateur a celui des boutons
    operateur = btn.textContent;
// on defini que le contenu du span du 2eme chiffre sera le contenu du num1(input)accompagné
// de loperateur au click
    preAffichage.textContent = num1 + " " + operateur;
// on vide la valeur de linput
    input.value = "";
  });
});
// on crée la variable btnegal afin dimporter lid du boutton egal
var btnEgal = document.querySelector('#btn-egal');
// on ajoute un evenement du click pour chaque bouton avec sa fonction
btnEgal.addEventListener('click', function(){
// on defini la valeur de linput (2eme chiffre) en nombre
  num2 = parseInt(input.value);
// on defini le resultat a la valeur du num1 + operateur + num2  
  resultat = eval(num1+operateur+num2);
//  le contenu du span contenant le resultat sera egal a celui de la variable resultat 
  affichage.textContent = resultat;
// on vide la valeur de linput du premier chiffre
  input.value ="";
// on vide le contenu du span
  preAffichage.textContent = "";
});
