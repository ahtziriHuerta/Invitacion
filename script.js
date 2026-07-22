

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

    america:[
        "America Huerta",
        "Oscar Chavez"
        ],
        
        julio:[
        "Julio Huerta",
        "Omar Meda"
        ],
        
        karime:[
        "Karime Portocarrero",
        "Ivan Padilla"
        ],

        nora:[
        "Nora Lomeli"
        ],
        
        eli:[
        "Elizabeth Izquierdo"
        ],
        
        karen:[
        "Karen"
        ],
        
        perla:[
        "Perla Santiago"
        ],
        
        dani:[
        "Daniela coyazo"
        ],
        
        fer:[
        "Fernanda Lomeli"
        ],
        
        luz:[
        "Luz Rojas",
        "Tomas Garcia"
        ],
        
        alejandra:[
        "Alejandra Garcia"
        ],
        
        dulce:[
        "Dulce Madriz"
        ],
       
               
        netotorre:[
        "Ernesto Torres"
        ],
        
        netoheg:[
        "Ernesto Hegewisch",
        "Gaby"
        ],
        
        ricardo:[
        "Ricardo Buenrostro",
        "Diana Segovia"
        ],

        ricardoMa:[
        "Ricardo Marquez"
        ],
        
        
        
        emma:[
        "Emma Huerta",
        "Alberto Lopez"
        ],
        
        marai:[
        "Marai Lopez",
        "Abel Martinez"
        ],
        
        jacob:[
        "Jacob Lopez",
        "Zitlalli Naranjo"
        ],
        
        isaias:[
        "Isaias Lopez",
        "Fernanda Meza"
        ],
        
        victor:[
        "Victor Huerta",
        "Johana Ramos",
        "Karen Huerta"
        ],
        
        natali:[
        "Natali Huerta",
        "Ricardo"
        ],
        
        titur:[
        "Victor Huerta",
        "Karina"
        ],
        
        rosa:[
        "Rosa Huerta",
        "Gustavo Aguilar"
        ],
        
        daniela:[
        "Daniela Aguilar",
        "Baruch Medina"
        ],
        
        gustavo:[
        "Gustavo Aguilar",
        "Vicky Mercado"
        ],
        
        martha:[
        "Martha Aguilar",
        "Miguel Nieto"
        ],
        
        alondra:[
        "Alondra Aguilar",
        "Jonathan Garcia"
        ],
        
        santos:[
        "Santos Huerta",
        "Susana Contreras",
        "Alexandra Huerta",
        "Novio Alexa" 	
        ],
        
        
        
        elvira:[
        "Elvira Deniz",
        "Aurelio Medina"
        ],
        
        juanito:[
        "Juan Median",
        "Juan Median +1"
        ],
        
        vero:[
        "Veronica Medina",
        "Victor Lomeli"
        ],
        
        vicky:[
        "Vicky Medina"
        ],
        
        jova:[
        "Jova Medina"
        ],
        
        yani:[
        "Jeanethe Medina",
        "Julio Rubio"
        ],
        
        fabiola:[
        "Fabiola Medina",
        "Eddy"
        ],
        
        livier:[
        "Livier Deniz",
        "Jesus Sanchez"
        ],
        
        yessy:[
        "Monica Sanchez",
        "Carlos Michel"
        ],
        
        lili:[
        "Liliana Sanchez",
        "Julio Palomar"
        ],
        
        saul:[
        "Saul Sanchez",
        "Saul Sanchez +1"
        ],
        
        cuijo:[
        "David Sanchez",
        "Alejandra Palomar"
        ],
        
        pera:[
        "Esperanza Deniz",
        "Juan Zamora"
        ],
        
        karina:[
        "Karina Zamora",
        "Karina Zamora +1"
        ],
        
        claudia:[
        "Claudia Zamora"
        ],
        
        
        
        gaby:[
        "Grabriel Deniz",
        "Guadalupe",
        "Silvestre Deniz"
        ],
        
        les:[
        "Leslie Deniz",
        "Anderson"
        ],
        
        jose:[
        "Jose Deniz",
        "Jose Deniz +1"
        ],
        
        chu:[
            "Valeria",
            "alejandra"
        ],
        
        ericka:[
        "Ericka Deniz"
        ],
        
        vicenta:[
        "Vicenta Deniz"
        ],
        
        tia_luz:[
        "Luz"
        ],
        
        bety:[
        "Claudia Deniz",
        "Fidencio Granados"
        ],
        
        benja:[
        "Benjamin Deniz",
        "Yolanda guzman",
        "Benjamin Jr"
        ],
        
        lis:[
        "Lisbeth Deniz",
        "Lisbeth Deniz +1"
        ],
        
        kari:[
        "Karina Castaneda",
        "Jose Santiago",
        "Carmen Campos"
        ],
        
        
        
        paola:[
        "Paola Garcia"
        ],
        
        ayala:[
        "Luis Ayala",
        "Luis Ayala +1"
        ],
        
        rebeca:[
        "Rebeca Colin"
        ],
        
        axel:[
        "Axel Ordonez",
        "Axel Ordonez +1"
        ],
        
        jorge:[
        "Jorge nunez"
        ],
        
        richi:[
        "Ricardo Marquez",
        "Ricardo +1"

        ],
        
        grecia:[
        "Grecia De Alba"
        ],
        
        luis:[
        "Luis Hernandez",
        "Jesus Gutierrez"
        ],

        magda:[
            "Magda Flores",
            "Magda Flores + 1"
        ],
        

        Al1:[
                "Alejandra ",	
                ],
                
         Ale2:[
                "Alejandra ",	
                 "Esposo"
                ],

    marcela:[
        "Marcela Villarreal"
    ],


    claudia_villa:[
        "Claudia Villarreal"
    ],


    orlando:[
        "Orlando Lopez",
        "Orlando +1"
    ],


    lucia:[
        "Lucía Lopez",
		"Lucia +1"
    ],	


    tia_gaby:[
        "Gabriela Villarreal",
        "Rodolfo Tamez"
    ],


    dani:[
        "Daniel Tamez"
    ],


    carlos:[
        "Carlos Tamez"
    ],


    tia_adriana:[
        "Adriana Villarreal"
    ],


    adriana:[
        "Adriana Gonzalez",
		"Adriana +1",
    ],


    andrea:[
        "Andrea Gonzalez",
        "Andrea +1"
    ],


    tio_juan:[
        "Juan Martin Villarreal",
        "Carmen"
    ],


    regina:[
        "Regina Villarreal",
        "Regina +1"
    ],


    juan_carlos:[
        "Juan Carlos Villarreal"
    ],


    tia_paty:[
        "Patricia Villarreal",
        "Oscar Benavides"
    ],


    paty:[
        "Paty Benavides"
    ],


    adrian:[
        "Adrian Benavides"
    ],


    tia_alma:[
        "Alma Villarreal",
        "Roberto Chapa"
    ],


    robertha:[
        "Robertha Chapa",
        "Rodrigo Mireles"
    ],


    pato:[
        "Patricio Chapa",
        "Patricio +1"
    ],


	tia_aurora:[
        "Tia Aurora"
    ],

    cristy:[
        "Cristy Ordaz"
    ],

    chuy:[
        "Chuy Ordaz"
    ],


    tia_esthela:[
        "Tia Esthela"
    ],


    maria_esthela:[
        "Maria Esthela",
        "Maria Esthela +1"
    ],


    maria_elena:[
        "Maria Elena",
        "Maria Elena +1"
    ],


    tia_rosalinda:[
        "Tia Rosalinda"
    ],


    papas:[
        "Luis Antonio Ordaz Ramirez",
        "Nora Susana Villarreal Ramos"
    ],


    hermano:[
        "Luis Ordaz",
        "Alejandra Gaytan"
    ],


    hermana:[
        "Susana Ordaz",
        "Devang Shah"
    ],


    fer_costa:[
        "Fernando Costa",
        "Fernando +1"
    ],


    pato_ruiz:[
        "Patricio Ruiz",
        "Natalia Leal"
    ],


    monica_saca:[
        "Monica Saca"
    ],


    chava_cortes:[
        "Salvador Cortés",
        "Laura"
    ],


    salvador_cortes:[
        "Salvador Cortés",
        "Alicia Gutiérrez"
    ],


    oscar_cortes:[
        "Oscar Cortés",
        "Ana Pau Alanis"
    ],


    andres_martinez:[
        "Andres Martinez",
        "Avilenne Lozada"
    ],


    agustin:[
        "Agustin"
    ],


    chano:[
        "Chano",
        "Chano +1"
    ],


    andres_carrasco:[
        "Andres Carrasco",
        "Daniela"
    ],


    rodrigo_ortega:[
        "Rodrigo Ortega",
        "Rita Quintero"
    ],


    alonso:[
        "Alonso",
        "Mayra"
    ],


    juan_chavez:[
        "Juan Chavez",
        "Laly Felix"
    ],


    miguel_sandoval:[
        "Miguel Sandoval",
        "Viviana Vanoye"
    ],


    david_brasil:[
        "David M.",
        "Brenda N."
    ],


    pepe_mendivil:[
        "Pepe Mendivil",
        "Pepe +1"
    ],


    andres_soule:[
        "Andres Soule",
        "Andres +1"
    ],

    alan_barmak:[
        "Alan Barmak",
        "Alan +1"
    ],


    pepelu:[
        "Jose Herrera",
        "Andrea Aguiar"
    ],


    tono:[
        "Antonio Santiago",
        "Alejandra"
    ],


    pablo_arias:[
        "Pablo Arias",
        "Elda Gomez"
    ],


    pepe_macias:[
        "Jose Alberto Macias",
        "Monica A."
    ],


    obed_gonzalez:[
        "Obed Gonzalez",
        "Obed +1"
    ],


    alejandro_camarillo:[
        "Alejandro Camarillo",
        "Karla P."
    ],


    max_camarillo:[
        "Max Camarillo",
        "Ale G."
    ],


    ivan_romero:[
        "Ivan Romero",
        "Luisa Villarreal"
    ],


    luis_gutierrez:[
        "Luis Gutierrez",
        "Luis +1"
    ],


    jessica_zepeda:[
        "Jessica Zepeda",
        "Jessica +1"
    ],


    joaquin_quintanilla:[
        "Joaquin Quintanilla",
        "Mariana H."
    ],
	
	omar_gonzalez: [
		"Omar Gonzalez",
		"Omar +1"
	],
	
	roy_reyna: [
		"Rogelio Reyna",
		"Rogelio +1"
	],
	
	julian_mirabal: [
		"Julian Mirabal",
		"Julian +1"
	],
	
	oso_garcia: [
		"Carlos Garcia",
		"Carlos +1"
	],
	
	javi_r: [
		"Javier R.",
		"Javier +1"
	]


};

const invitados = familias[familiaID];

let lista = document.querySelector(".lista");

invitados.forEach((nombre, index) => {

    let item = document.createElement("div");
    item.className = "persona";

    item.innerHTML = `
        <span class="nombre">${nombre}</span>

        <div class="respuesta">
            <label>
                <input type="radio" name="asiste_${index}" value="SI">
                Sí
            </label>

            <label>
                <input type="radio" name="asiste_${index}" value="NO">
                No
            </label>
        </div>
    `;

    lista.appendChild(item);

});

function confirmar(){

    let invitadosConfirmacion = [];

    let incompleto = false;

    document.querySelectorAll('.persona').forEach(persona => {

        const nombre = persona.querySelector('.nombre').textContent;
        const respuesta = persona.querySelector('input[type="radio"]:checked');

        if(!respuesta){
            incompleto = true;
        }

        invitadosConfirmacion.push({
            nombre: nombre,
            asiste: respuesta ? respuesta.value : ""
        });

    });

    if(incompleto){
        mostrarMensaje("Por favor selecciona Sí o No para todos los invitados.");
        return;
    }

    fetch(url,{
        method:"POST",
        body:new URLSearchParams({
            familia: familiaID,
            invitados: JSON.stringify(invitadosConfirmacion)
        })
    })
    .then(res=>res.text())
    .then(()=>mostrarMensaje("¡Gracias por confirmar! ❤️"))
    .catch(()=>mostrarMensaje("Ocurrió un error, intenta nuevamente"));
}

const musica = document.getElementById("musica");
const btnMusica = document.getElementById("btnMusica");

function iniciarMusica(){

if(musica && musica.paused){
musica.play();
}

}

// iniciar con click
document.addEventListener("click", iniciarMusica, { once:true });

// iniciar con scroll
window.addEventListener("scroll", iniciarMusica, { once:true });

// botón encender / apagar
if(btnMusica){

btnMusica.addEventListener("click", () => {

if(musica.paused){
    musica.play();
    btnMusica.innerHTML = "🔊";
}else{
    musica.pause();
    btnMusica.innerHTML = "🔇";
}

});

}


function mostrarMensaje(texto){

    const alerta = document.createElement("div");
    alerta.className = "alerta-boda";
    
    alerta.innerHTML = `
    <div class="alerta-contenido">
    <p>${texto}</p>
    <button onclick="cerrarAlerta()">Cerrar</button>
    </div>
    `;
    
    document.body.appendChild(alerta);
    
    }
    
    function cerrarAlerta(){
    document.querySelector(".alerta-boda").remove();
    }


    let index = 0;
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    
    function showSlide(i) {
      slides.forEach(slide => slide.classList.remove("active"));
      dots.forEach(dot => dot.classList.remove("active"));
    
      slides[i].classList.add("active");
      dots[i].classList.add("active");
    }
    
    document.querySelector(".next").addEventListener("click", () => {
      index = (index + 1) % slides.length;
      showSlide(index);
    });
    
    document.querySelector(".prev").addEventListener("click", () => {
      index = (index - 1 + slides.length) % slides.length;
      showSlide(index);
    });
    
    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        index = i;
        showSlide(index);
      });
    });