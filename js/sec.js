//PREDICCION DE PREGUNTAS

for (let x = 1; x < 6; x++) {
    console.log("Equipo numero " + x + " " + " de 5"); 
     
}




const edad = 18;





let ingreso = parseInt( prompt ("Ingrese su edad."));
let coincide = (edad <= ingreso);
let repetir = true;


while (repetir) {
  if (coincide) {
     alert ("Suerte con las preguntas!");
     repetir= false;
 
    }else if (ingreso<edad){ 
     alert ("Sos menor de edad asique no podes apostar en esta pagina, pero podras tratar de responder a las preguntas igualmente.");
     repetir= false;
    }else {
     ingreso = parseInt( prompt ("Por favor, ingrese un numero valido"));
     coincide = (edad <= ingreso);
    }
}   

//ACA HICE EL JSON

  const edadJSON = JSON.stringify(ingreso);
localStorage.setItem("Edad", edadJSON);



const mundial = [
    {
        pregunta: '¿Quien es el jugador con mas partidos disputados en Mundiales?',
        opciones: [
            'Lothar Matthaus',
            'Lionel Messi',
            'Miroslav Klose',
            'Uwe Seeler'
        ],
        respuesta: 'Lothar Matthaus'
    },
    {
        pregunta: '¿Quién es el jugador con más goles en un partido en Copa Mundial?',
        opciones: [
            'Oleg Salenko',
            'Emilio Butragueño',
            'Gerd Müller',
            'Las 3 respuestas son correctas'
        ],
        respuesta: 'Oleg Salenko'
    },
    {
        pregunta: '¿Que continente albergo mas Copas Del Mundo?',
        opciones: [
            'America',
            'Europa',
            'Africa',
            'Asia'
        ],
        respuesta: 'Europa'
    },
    {
        pregunta: '¿Cual de estos paises nunca disputo un Mundial?',
        opciones: [
            'Guatemala',
            'Haití',
            'Emiratos Árabes Unidos',
            'Kuwait'
        ],
        respuesta: 'Guatemala'
    },
    {
        pregunta: '¿Cual de estos paises disputo mas partidos en Mundiales?',
        opciones: [
            'Países Bajos',
            'México',
            'Uruguay',
            'Bélgica'
        ],
        respuesta: 'México'
    }
]

const america = [
{
    pregunta: '¿Cual es el maximo goleador argentino de la historia de la Copa America?',
    opciones: [
        'Gabriel Batistuta',
        'Lionel Messi',
        'Norberto Méndez',
        'Ángel Labruna'
    ],
    respuesta: 'Norberto Méndez'
},
{
    pregunta: '¿Cual de estos paises nunca gano una Copa America?',
    opciones: [
        'Colombia',
        'Bolivia',
        'Ecuador',
        'Perú'
    ],
    respuesta: 'Ecuador'
},
{
    pregunta: '¿Cual es el pais con mas partidos perdidos en la historia de la Copa America?',
    opciones: [
        'Ecuador',
        'Chile',
        'Paraguay',
        'Bolivia'
    ],
    respuesta: 'Chile'
},
{
    pregunta: '¿Cual es la mayor goleada en un partido de Copa America?',
    opciones: [
        'Argentina 12:0 Ecuador',
        'Chile 7:0 Mexico',
        'Argentina 11:0 Venezuela',
        'Brasil 10:1 Bolivia'
    ],
    respuesta: 'Argentina 12:0 Ecuador'
},
{
    pregunta: '¿Cual es el pais con mas partidos consecutivos sin perder en Copa America?',
    opciones: [
        'Argentina',
        'Brasil',
        'Uruguay',
        'Paraguay'
    ],
    respuesta: 'Argentina'
}
]

const europa = [
{
    pregunta: '¿Que pais perdio mas partidos en la historia de la Eurocopa?',
    opciones: [
        'Dinamarca',
        'Noruega',
        'Eslovenia',
        'Belgica'
    ],
    respuesta: 'Dinamarca'
},
{
    pregunta: '¿Cual es el duelo que mas veces se disputo en la historia de la Eurocopa?',
    opciones: [
        'Alemania vs Italia',
        'Italia vs inglaterra',
        'España vs Italia',
        'Alemania vs España'
    ],
    respuesta: 'España vs Italia'
},
{
    pregunta: '¿Que pais convirtio mas goles en una sola edicion de la Eurocopa?',
    opciones: [
        'España',
        'Alemania',
        'Francia',
        'Italia'
    ],
    respuesta: 'Francia'
},
{
    pregunta: '¿Cual es el pais con mas partidos disputados en la historia de la Eurocopa?',
    opciones: [
        'Alemania',
        'España',
        'Inglaterra',
        'Italia'
    ],
    respuesta: 'Alemania'
},
{
    pregunta: '¿Cual es la final entre 2 mismas selecciones que mas veces se disputo?',
    opciones: [
        'Alemania vs Hungria',
        'Alemania vs Checoslovaquia',
        'Alemania vs España',
        'Alemania vs Paises Bajos'
    ],
    respuesta: 'Alemania vs Checoslovaquia'
}
]
const champions = [
{
    pregunta: '¿Cual fue la mayor diferencia de goles en un partido de Champions League?',
    opciones: [
        'Dinamo Bucaresti 11:0 Crusaders F.C',
        'Benfica 8:0 Stade Dudelange',
        'Benfica 10:0 Stade Dudelange',
        'Feyenoord Róterdam 12:2 Knattspyrnufélag Reykjavíkur'
    ],
    respuesta: 'Dinamo Bucaresti 11:0 Crusaders F.C'
},
{
    pregunta: '¿Cual es el tecnico que mas partidos disputo en la historia de la Champions League?',
    opciones: [
        'Mircea Lucescu',
        'Arsène Wenger',
        'Alex Ferguson',
        'Carlo Ancelotti'
    ],
    respuesta: 'Alex Ferguson'
},
{
    pregunta: '¿Cual es el jugador con mas Champions League ganadas?',
    opciones: [
        'Cristiano Ronaldo',
        'Alfredo Di Stéfano',
        'Paolo Maldini',
        'Paco Gento'
    ],
    respuesta: 'Paco Gento'
},
{
    pregunta: '¿Cuantos jugadores lograron ganar la Champions con 3 distintos?',
    opciones: [
        '0',
        '1',
        '2',
        '5'
    ],
    respuesta: '2'
},
{
    pregunta: '¿Cual es la final mas repetida en la historia de la Champions League?',
    opciones: [
        'Real Madrid vs Bayern Munich',
        'Real Madrid vs Liverpool F.C',
        'Real Madrid vs Juventus',
        'Real Madrid vs Atletico de Madrid'
    ],
    respuesta: 'Real Madrid vs Liverpool F.C'
}
]
const libertadores = [
{
    pregunta: '¿Cual es el maximo goleador historico de la Libertadores?',
    opciones: [
        'Alberto Spencer',
        'Pedro Rocha',
        'Fernando Morena',
        'Daniel Onega'
    ],
    respuesta: 'Alberto Spencer'
},
{
    pregunta: '¿Quien es el jugador que mas Copas Libertadores gano en la historia?',
    opciones: [
        'Francisco Sá',
        'Ricardo Pavoni',
        'Ricardo Bochini',
        'Agustín Balbuena'
    ],
    respuesta: 'Francisco Sá'
},
{
    pregunta: '¿Quien es el tecnico que mas veces gano la Copa Libertadores?',
    opciones: [
        'Carlos Bianchi',
        'Roberto Scarone',
        'Luis Cubilla',
        'Luiz Felipe Scolari'
    ],
    respuesta: 'Carlos Bianchi'
},
{
    pregunta: '¿Cual es el equipo que mas veces disputo la Copa Libertadores?',
    opciones: [
        'Nacional',
        'Peñarol',
        'Olimpia',
        'Cerro Porteño'
    ],
    respuesta: 'Nacional'
},
{
    pregunta: '¿Cual es el jugador que mas partidos disputo en toda la historia de la Copa Libertadores?',
    opciones: [
        'Ever Hugo Almeida',
        'Sergio Aquino',
        'Lucas Pratto',
        'Alberto Spencer'
    ],
    respuesta: 'Ever Hugo Almeida'
}
]






class Pregunta {

    /**
     *
     * @param {string} texto este es el texto de la pregunta
     * @param {string[]} opciones estas son las opciones de la pregunta
     * @param {string} respuesta esta es la respuesta de la pregunta
     */
    constructor(texto, opciones, respuesta) {
        this.pregunta = texto;
        this.opciones = opciones;
        this.respuesta = respuesta;
    }

    /**
     * 
     * @param {string} opcion algun texto para adivinar
     * @returns {boolean} retorna true si la respuesta es correcta
     */
    respuestaCorrecta(opcion) {
        return opcion === this.respuesta
    }
}


class Juego {
    preguntaActual = 0
    puntaje = 0

    /**
     *
     * @param {Pregunta} preguntas
     */
    constructor(preguntas) {
        this.preguntas = preguntas
    }

    /**
     *
     * @returns {Pregunta} retorna la pregunta encontrada
     */
    numeroDePregunta()  {
        return this.preguntas[this.preguntaActual];
    }


    /**
     *
     * @param {string} respuesta texto de la respuesta elegida
     */
    adivina(respuesta) {
        if (this.numeroDePregunta().respuestaCorrecta(respuesta)) {
            this.puntaje++
        }
            this.preguntaActual++
    }


    aFinalizado() {
        return this.preguntas.length === this.preguntaActual;
    }
}


class Funcionalidad {

    constructor(){}

    /**
     *
     * @param {string} texto pregunta a mostrar al usuario
     */
    mostrarPregunta(texto) {
        const preguntaTitulo = document.getElementById('pregunta')
        preguntaTitulo.innerText = texto;
    }

    /**
     *
     * @param {string[]} opciones la opcion de la pregunta
     */
    mostrarOpciones(opciones, callback) {
        const opcionesContenedor = document.getElementById('opciones')
        opcionesContenedor.innerHTML = ''

        for (let i = 0; i < opciones.length; i++) {
            const button = document.createElement('button')
            button.innerText = opciones[i];
            button.addEventListener('click', () => callback(opciones[i]));

            opcionesContenedor.append(button);
        }
    }

    /**
     * 
     * @param {number} puntaje puntaje total
     */
    mostrarPuntuacion(puntaje) {
        const interfazFinal = `<h2>Resultado</h2> <h2>Tu puntuacion es de: ${puntaje} </h2>`

        const elemento = document.getElementById('juego')
        elemento.innerHTML = interfazFinal;
    }
}





alert('Son 5 preguntas para cada torneo, cada respuesta correcta te suma 1 punto. ¿Estas preparado?');
let tema = parseInt(prompt('Elige un torneo escribiendo su respectivo numero: \n 1. Mundial \n 2. Copa America \n 3. Eurocopa \n 4. Champions League \n 5. Libertadores'));

if(tema === 1) {
    var preguntas = mundial.map(pregunta => new Pregunta(pregunta.pregunta, pregunta.opciones, pregunta.respuesta));
}else if(tema === 2) {
    var preguntas = america.map(pregunta => new Pregunta(pregunta.pregunta, pregunta.opciones, pregunta.respuesta));
}else if(tema === 3) {
    var preguntas = europa.map(pregunta => new Pregunta(pregunta.pregunta, pregunta.opciones, pregunta.respuesta));
}else if(tema === 4) {
    var preguntas = champions.map(pregunta => new Pregunta(pregunta.pregunta, pregunta.opciones, pregunta.respuesta));
}else if(tema === 5) {
    var preguntas = libertadores.map(pregunta => new Pregunta(pregunta.pregunta, pregunta.opciones, pregunta.respuesta));
}else {

}



/**
 *
 * @param {Juego} juego objeto principal del juego
 * @param {Funcionalidad} funcionalidad objeto de funcionalidad
 */
const renderizarPagina = (juego, funcionalidad) => {

    if(juego.aFinalizado()) {
        funcionalidad.mostrarPuntuacion(juego.puntaje);
    }else {
        funcionalidad.mostrarPregunta(juego.numeroDePregunta().pregunta);
        funcionalidad.mostrarOpciones(juego.numeroDePregunta().opciones, (opcionActual) => {
            juego.adivina(opcionActual);
            renderizarPagina(juego, funcionalidad);
        });
    }
};

function principal() {
    const juego = new Juego(preguntas)
    const funcionalidad = new Funcionalidad()

    renderizarPagina(juego, funcionalidad)
}

principal();



/*
let iniciarprediccion = prompt("Hola " +nombreUsuario+"! Queres hacer tu prediccion del Mundial?(Si/No)");
if (iniciarprediccion == "Si" || iniciarprediccion == "si") {
    iniciarPedido();
}else{
    alert("Perfecto " + nombreUsuario + "! :(.");
};
function iniciarPedido() {
    
    let Francia = 1;
    let Argentina = 2;
    let Brasil = 3;
    let Alemania = 4;
    let prediccionfinal = 0;
    let finprediccion = true;
    function respuesta(prediccion) {
        return prediccionfinal = prediccion;
    };
    let seleccionProducto = Number(prompt("Quien es tu favorito para el Mundial "+nombreUsuario+" ? (Ingresar numero) \n1- Francia  \n2- Argentina \n3- Brasil \n4- Alemania \n5- Otro"));
    while (finprediccion == true) {
        switch (seleccionProducto) {
            case 1:
                respuesta(Francia);
                alert("\nInteresante decision "+nombreUsuario+"!");
                finprediccion = false;    
                break;
            case 2:
                respuesta(Argentina);
                alert("\nInteresante decision "+nombreUsuario+"!");
                finprediccion = false;  
                break;    
            case 3:
                respuesta(Brasil);
                alert("\nInteresante decision "+nombreUsuario+"!");
                finprediccion = false;  
                break;
                case 4:
                    respuesta(Alemania);
                    alert("\nInteresante decision "+nombreUsuario+"!");
                    finprediccion = false;  
                    break;
            default:
                alert("Perfecto " + nombreUsuario + " disfruta la informacion que hay en la web.");
                finprediccion = false;   
                break;
        };
      };
};
*/