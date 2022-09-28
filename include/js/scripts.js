// scripts para incluir

// capturar botones
var botonInicio= document.querySelector("#bot-inici");
var botonAgrega= document.querySelector("#bot-agrep");
var botonCancNp= document.querySelector("#bot-cannp");


// palablas
const palabras = [
  "ELEFANTE",
  "CARRO",
  "PERRO",
  "GATO",
  "MANZANA",
  "BARCO"
]

//palabra aleatorio
var palavig= palabras[Math.floor(Math.random() * 5)];

// creando guiones
function dibujasGuion(){
  var impgio= "";
  for(var n=0; n < palavig.length; n++){
    impgio= impgio + "<span class='spse'>&nbsp;</span>";
  }
  document.getElementById("drlpaba").innerHTML= impgio;
}

// evento tecleado
function eventoTeclado(){
  const box = document.querySelector(".box");
  document.addEventListener("keydown", e =>{
	  let claname= e.keyCode === 32 ? "Space" : e.key;
    let ascii= e.keyCode;
    let noletra= "<span class='spsf'>"+claname+"</span>";

    //verificar si es letra

    if(ascii > 64 && ascii < 91){
      document.getElementById("drltecl").innerHTML= claname;
    }
  });
}


// iniciar juego
function iniciojuego(){
  document.getElementById("divinic").style.display="none";
  document.getElementById("divjueg").style.display="block";
  dibujasGuion();
  eventoTeclado();
}

// agregar palabra
function agregarpalabra(){
  document.getElementById("divinic").style.display="none";
  document.getElementById("divnupu").style.display="block";
}

function cancelarnuevapal(){
  document.getElementById("divnupu").style.display="none";
  document.getElementById("divinic").style.display="block";
}

//alert(palavig.length);
// llamar funciones
botonInicio.onclick= iniciojuego;
botonAgrega.onclick= agregarpalabra;
botonCancNp.onclick= cancelarnuevapal;