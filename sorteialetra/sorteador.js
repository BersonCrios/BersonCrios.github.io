var letras = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

document.getElementById("letra").innerHTML =  "Start"

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sorteiaLetra() {
    var randonNumber = getRandomInt(0,25)
    var letraSorteada = letras[randonNumber]
    document.getElementById("letra").innerHTML = letraSorteada.toUpperCase()
}