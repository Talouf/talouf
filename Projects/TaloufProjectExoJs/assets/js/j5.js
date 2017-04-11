var num1, num2, operateur, resultat;
var preAffichage = document.querySelector('#preaffichage2');
var affichage = document.querySelector("#resultat2");  
var input = document.querySelector("#numero");
var buttons = document.querySelectorAll('.operateur1');
var buttons2 = document.querySelectorAll('.chiffre');
var clear = document.querySelector('#clear');
buttons2.forEach(function(btn2){
    btn2.addEventListener('click', function(){
    input.value += btn2.value;
    });
});
buttons.forEach(function(btn){
  btn.addEventListener('click', function(){
    num1 = parseInt(input.value);
    operateur = btn.textContent;
    preAffichage.textContent = num1 + " " + operateur;
    input.value = "";
  });
});
var btnEgal = document.querySelector('#btnegal1');
btnEgal.addEventListener('click', function(){
  num2 = parseInt(input.value);
  resultat = eval(num1+operateur+num2);
  affichage.textContent = resultat;
  input.value ="";
  preAffichage.textContent = "";
});
clear.addEventListener('click', function(){
    input.value = "";
    preAffichage.textContent = "";
    affichage.textContent= "";
});



