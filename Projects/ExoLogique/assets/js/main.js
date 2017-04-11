// creer une variable bouton en recuprant la classe btn du bouton
var bouton =$('.btn');
// creer une variable css en recuperant l'id css du paragraphe
var css = $('#css'); 
// creer une variable prop en recuperant l'id prop de l'input
var prop = $('#prop');
// creer une variable val en recuperant l'id val du 2eme input
var val = $('#val');
// creer une variable carre en recuprant l'id du carre
var carre = $('#carre');
var inputError = $('#input-error');
var valueError = $('#value-error');
// recuperer l'id du boutton et lui applique un event au click a la function
bouton.click(function(){
    inputError.hide();
    valueError.hide(); 
    if ( prop.val() == "" || val.val() == ""){
        inputError.fadeIn();
        return;
}
// on recupere le contenu de prop et val en ajoutant un saut de ligne dans le paragraphe css
// on recupere le contenu de carre et on modifie ses proprietés css
   carre.css(prop.val(), val.val());
var style = carre.attr('style');
    if (style == undefined){
        valueError.fadeIn();
        return;
    }

var tableau = style.split(';');
var allCss="";
tableau.forEach(function(regle){
    allCss += regle+'<br>';
});
// css.html(allCss.join('br'));
css.html(allCss);
prop.val('');
val.val('');
});






//    css.append(prop.val()+ ' : ' + val.val()).append('<br />');;