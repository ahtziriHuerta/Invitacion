function scrollInvitacion(){

    window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth"
    });
}

const fechaBoda = new Date("Oct 30, 2026 00:00:00").getTime();

setInterval(function(){

let ahora = new Date().getTime();
let diferencia = fechaBoda - ahora;

let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
let horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
let segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

document.getElementById("dias").innerHTML = dias;
document.getElementById("horas").innerHTML = horas;
document.getElementById("minutos").innerHTML = minutos;
document.getElementById("segundos").innerHTML = segundos;

},1000);