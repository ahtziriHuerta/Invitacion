function scrollInvitacion(){

    window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth"
    });
}

const musica = document.getElementById("musica");

window.addEventListener("load", () => {
    musica.muted = false;
    musica.play().catch(() => {
        console.log("El navegador bloqueó el autoplay");
    });
});

let index = 0;
const slides = document.querySelector(".slides");
const total = document.querySelectorAll(".slides img").length;

document.querySelector(".next").onclick = () =>{
index++;
if(index >= total){ index = 0; }
slides.style.transform = `translateX(-${index * 100}%)`;
}

document.querySelector(".prev").onclick = () =>{
index--;
if(index < 0){ index = total - 1; }
slides.style.transform = `translateX(-${index * 100}%)`;
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

document.addEventListener("DOMContentLoaded", () => {
    // 1. Animación de los Eventos (Entrada lateral)
    const eventos = document.querySelectorAll(".evento");
    
    const observerOptions = {
        threshold: 0.3 // Se activa cuando el 30% del evento es visible
    };

    const eventoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, observerOptions);

    eventos.forEach(evento => eventoObserver.observe(evento));

    // 2. Animación de la Línea Guía (Llenado vertical)
    const timeline = document.querySelector(".timeline");
    
    const lineObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            timeline.classList.add("animar-linea");
        }
    }, { threshold: 0.2 });

    lineObserver.observe(timeline);
});



const url = "https://script.google.com/macros/s/AKfycbyGa5_3MdzaugZyMPIn84xSYhRMc3VrLHvi8QK86gK_ni1nl3xvRcPtV8uXTF8XOFgV/exec";

// leer familia del link
const params = new URLSearchParams(window.location.search);
const familiaID = params.get("familia");

// base de familias
const familias = {

maldonado:[
"Sara Maldonado Garza",
"Felipe Ruiz Garza",
"Laura Ruiz Garza",
"Carlos Ruiz Garza"
],

america:[
"América Huerta",
"Oscar De Alba"
]

};

// obtener invitados
let invitados = familias[familiaID];

// mostrar invitados en la página
if(invitados){

let lista = document.querySelector(".lista");

invitados.forEach(nombre => {

let item = document.createElement("label");

item.innerHTML = `
<input type="checkbox" value="${nombre}">
${nombre}
`;

lista.appendChild(item);

});

// poner nombre de familia
document.querySelector(".familia").innerText = "Familia " + familiaID;

}else{

document.querySelector(".lista").innerHTML = "Invitación no válida";

}

// función confirmar
function confirmar(){

let invitadosConfirmacion = [];

document.querySelectorAll('.lista input[type="checkbox"]').forEach(c => {

invitadosConfirmacion.push({
nombre: c.value,
asiste: c.checked ? "SI" : "NO"
});

});

let familia = document.querySelector(".familia").innerText;

fetch(url,{
method:"POST",
body: new URLSearchParams({
familia: familia,
invitados: JSON.stringify(invitadosConfirmacion)
})
})
.then(res => res.text())
.then(() => alert("Confirmación enviada"))
.catch(() => alert("Error al enviar"));

}