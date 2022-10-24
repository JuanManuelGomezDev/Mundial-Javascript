for (let x = 1; x < 6; x++) {
    console.log("Equipo numero " + x + " " + " de 5"); 
     
}

let nombreUsuario = prompt("Bienvenido! Por favor ingresa tu nombre");


const edad = 18;


let ingreso = parseInt( prompt ("Ingrese su edad."));
let coincide = (edad <= ingreso);
let repetir = true;


while (repetir) {
  if (coincide) {
     alert ("Suerte con tus predicciones!");
     repetir= false;
 
    }else if (ingreso<edad){ 
     alert ("Sos menor de edad, no podes apostar en esta pagina.");
     repetir= false;
    }else {
     ingreso = parseInt( prompt ("Por favor, ingrese un numero valido"));
     coincide = (edad <= ingreso);
    }
}   
  







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

