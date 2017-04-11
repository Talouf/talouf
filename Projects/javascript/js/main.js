// // var monTitre = document.querySelector('h1');
// // monTitre.textContent='salut à  vous';

// // var parfumGlace = "Vanille";
// // if(parfumGlace === "Citron") {
// // alert('Jadore les glaces au citron');
// // }
// // else{
// // alert('Jaime que les glaces au ' + parfumGlace);
// // }

// // function multiplier(num1, num2){
// //     var résultat = num1 * num2;
// //     return résultat;
// // }
// // function addition(num1, num2){
// //     var résultat = num1 + num2;
// //     return résultat;
// // }

// // function soustraction(num1, num2){
// //     var résultat = num1 - num2;
// //     return résultat;
// // }
// // function division(num1, num2){
// //     var résultat = num1 / num2;
// //     return résultat;
// // }
// document.querySelector('h1').onclick = function() {
//     alert('Aïe, arrêtez de cliquer !!');
// }
// var monImage = document.querySelector('img');

// monImage.onclick = function() {
//     var maSrc = monImage.getAttribute('src');
//     if(maSrc === 'img/Dubai.jpg') {
//       monImage.setAttribute ('src','img/Dubai2.jpg');
//     } else {
//       monImage.setAttribute ('src','img/Dubai.jpg');
//     }
// }

// function calcul (num1,num2,operateur)
// {// params => 2+3 2 nombres et un signe return resultat =>'5'
//    var resultat ;
//    //
//    if(operateur === '*'){//tester mon operateur pour savoir quel calcul faire + - * /
//     resultat = num1 * num2 ;
//    }
//    else if(operateur === '+'){
//        resultat = num1 + num2;
//    }
//    else if (operateur === '-'){
//        resultat = num1 - num2;
//    }
//    else if (operateur === '/'){
//        resultat = num1 / num2 ;
//    }
//    else {
//        return false;
//    }

//    return resultat;//renvoyer le resultat
// }//appel fonction => calcul(2,3,'*')



// var monBouton = document.querySelector('button');
// var monTitre = document.querySelector('h1');
// function définirNomUtilisateur() {
//   var monNom = prompt('Veuillez saisir votre nom.');
//   localStorage.setItem('nom', monNom);
//   monTitre.textContent = 'Mozzila c est nul, ' + monNom;
// }   if(!localStorage.getItem('nom')) {
//   définirNomUtilisateur();
// } else {
//   var nomEnregistré = localStorage.getItem('nom');
//   monTitre.textContent = 'Mozzila c est nul, ' + nomEnregistré;
// }
// monBouton.onclick = function() {
//   définirNomUtilisateur();
// }

// var pas;
// for (pas = 5; pas >= 0; pas--) {
//   // Ceci sera exécuté 5 fois
//   // la variable "pas" ira de 0 à 4
//   console.log(pas);
// }

var n = 0;
while (n < 25) {
  n += 5;
  console.log(n)
}

function division(nombre) {
  return nombre / 2;
}

var pas;
for (pas = 2; pas <= 8; pas += 2) {
  console.log(pas);
}