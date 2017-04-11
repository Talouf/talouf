var blueBox = document.querySelector('#blue');
var redBox = document.querySelector('#red');
var declencheur = document.querySelector('#declencheur');
var rigoler = document.querySelector('#rire');
var pleurer = document.querySelector('#pleurer');
var chanter = document.querySelector('#chanter');
var helloEv = new Event('hello');
var rire = new Event('rire');
var pleur = new Event('pleurer');
var chant = new Event('chanter');
var myError = new Error('les numéros doivent être de type number');

declencheur.addEventListener('click', function (ev) {
    ev.preventDefault();
    console.log('On click sur le declencheur');
    redBox.dispatchEvent(helloEv);
});
rigoler.addEventListener('click', function (ev) {
    ev.preventDefault();
    redBox.dispatchEvent(rire);
});
pleurer.addEventListener('click', function (ev) {
    ev.preventDefault();
    redBox.dispatchEvent(pleur);
});
chanter.addEventListener('click', function (ev) {
    ev.preventDefault();
    redBox.dispatchEvent(chant);
});

redBox.addEventListener('hello', function (ev) {
    console.log(this);
});
redBox.addEventListener('rire', function (ev) {
    console.log('rire');
});
redBox.addEventListener('pleurer', function (ev) {
    console.log('pleurer');
});
redBox.addEventListener('chanter', function (ev) {
    console.log('chanters');
});

var additionner = function (num1, num2) {
    if (typeof (num1) == "number" && typeof (num2) == "number") {
        return num1 + num2;
    } else {
        throw myError;
    }
}
try {
    console.log(additionner("6",8));
} catch (e) {
    console.log(e);
}


