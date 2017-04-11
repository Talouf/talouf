// Récupere les éléments du DOM
var notiAll = $('#noti-all');
var notiLike = $('#noti-like');
var notiMessage = $('#noti-message');
var inputUserName = $('#username');
var inputMessage = $('#message');
var btnSend = $('#btn-send');
var allMessage = $('#all-message');
// Définir mes fonctions

// Mettre en place les intéractions

// Envoyer un message
// Personne met son nom et message
// On click sur le btn
btnSend.click(function () {
    // prendre le nom
    let nom = inputUserName.val();
    // prendre le message
    let message = inputMessage.val();
    // créer element contenant le message stylé
    let zoneMessage = `<div class="message">
                <div class="auteur">${nom}</div>
                <p class="bg-success">${message}</p>
                <div class="info-like">
                    <span class="tot-like">0</span>
                    <i class="fa fa-heart btn-like" aria-hidden="true"></i>
                    </div>    
            </div>`
    // Le nom et le message apparait au dessus
    allMessage.append(zoneMessage);

});