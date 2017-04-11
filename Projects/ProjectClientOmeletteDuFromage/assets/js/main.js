var ordre = "";
var bonOrdre = "0123456";
var dataOrdre;
var win = $('#win');
win.hide();
var oldlist = $('.list-group')
var loose = $('#loose');
loose.hide();
var invisible = $(".invis");
invisible.hide();
var fromage = document.querySelector('#fromage');
$("#go").click(function () {
    $("#nom").text("Alors " + fromage.value + ", êtes-vous prêts?");
    $("#nom2").text("Salut apprenti cuisto " + fromage.value);
    invisible.show();
});
$("#go").click(function () {
    $("#omelette").animate({width: "30%"});
});
$(".rempli").click(function () {
    $(this).addClass('newclass');
    $(this).removeClass('rempli');
    $('#newlist').append($(this));
    dataOrdre = $(this).attr('data-order');
    ordre = ordre + dataOrdre;
    if (oldlist.children == 0){
        if(ordre == bonOrdre){
            win.show();
        } else if (ordre != bonOrdre){
            loose.show();
        }
    }
$(".newclass").click(function() {
    oldlist.append($(this));
    $(this).addClass('rempli');
    $(this).removeClass('newClass');
    
});
    
});
$(".rempli").click(function () {
    $(this).addClass('newclass');
    $(this).removeClass('rempli');
    $('#newlist').append($(this));
});

// $('#reponse').click(function(){ 
//     if (ordre == bonOrdre){
//         win.show();
//     } else {
//         loose.show();
//     }
// });






