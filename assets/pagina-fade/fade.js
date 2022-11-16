var opacidade = 0;
var intervalID = 0;
window.onload = fadeMostrar;

function fadeMostrar(){
    setInterval(mostrar, 20);
}

function fadeDesaparecer(){
    setInterval(desaparecer, 200);
}

function mostrar(){
    var body = document.getElementById("body");
    opacidade = Number(window.getComputedStyle(body).getPropertyValue("opacity"));
    if (opacidade < 1) {
        opacidade = opacidade + 0.025;
        body.style.opacity = opacidade
    } else {
        clearInterval(intervalID);
    }
}

function desaparecer(){
    var body = document.getElementById("body");
    opacidade = Number(window.getComputedStyle(body).getPropertyValue("opacity"));
    if (opacidade >= 1) {
        opacidade = opacidade - 0.025;
        body.style.opacity = opacidade
    } else {
        clearInterval(intervalID);
    }

}