// scripts para incluir

// capturar botones
var botonInicio= document.querySelector("#bot-inici");
var botonAgrega= document.querySelector("#bot-agrep");
var botonCancNp= document.querySelector("#bot-cannp");
var botonNuejue= document.querySelector("#bot-nueju");
var botonDesist= document.querySelector("#bot-desis");

// palablas
var palabras=[
  "ELEFANTE",
  "CARRO",
  "PERRO",
  "GATO",
  "MANZANA",
  "BARCO"
]

// declarando variables
var palabra = "";
var alet;
var oculta = [];
var cont = 6;


// Botones de letras
var buttons = document.getElementsByClassName('letra');
// Boton de reset
var btnInicio = document.getElementById("reset");


// palabla aleatoria
function generaPalabra(){
  alet= (Math.random() * 5).toFixed(0);
  palabra= palabras[alet];
  console.log(palabra);
}

// crear guiones
function generarGuiones(num){
  for (var i= 0; i < num; i++) {
    oculta[i]= "_";
  }
  document.getElementById("drlpaba").innerHTML= oculta.join("");
}

// crear teclado
function teclado (a,z) {
  document.getElementById("abcdario").innerHTML= "";
  var i= a.charCodeAt(0), j = z.charCodeAt(0);
  var letra= "";
  for( ; i<=j; i++) {
    letra= String.fromCharCode(i).toUpperCase();
    document.getElementById("abcdario").innerHTML += "<button value='" + letra + "' onclick='intento(\"" + letra + "\")' class='letra' id='"+letra+"'>" + letra + "</button>";
    if(i==110) {
      document.getElementById("abcdario").innerHTML += "<button value='Ñ' onclick='intento(\"Ñ\")' class='letra' id='"+letra+"'>Ñ</button>";
    }
  }
}

// contar intento
function intento(letra) {
  document.getElementById(letra).disabled = true;
  if(palabra.indexOf(letra) != -1) {
    for(var i=0; i<palabra.length; i++) {
      if(palabra[i]==letra) oculta[i] = letra;
    }
    document.getElementById("drlpaba").innerHTML= oculta.join("");
  }
  else{
    cont--;
    document.getElementById("imgc").src="include/imagenes/fase"+cont+".png";
  }
  compruebaFin();
  setTimeout(function(){ 
    document.getElementById("acierto").className= ""; 
  }, 800);
}

// compruba fin del juego
function compruebaFin(){
  if( oculta.indexOf("_") == -1 ) {
    document.getElementById("msn-final").innerHTML = "¡Has ganado!";
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
    document.getElementById("reset").innerHTML = "Empezar";
    btnInicio.onclick = function(){ location.reload() };
  }else if( cont == 0 ){
    document.getElementById("msn-final").innerHTML= "¡Fallaste, Intentalo de nuevo!";
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled= true;
    }
    document.getElementById("reset").innerHTML= "Empezar";
    btnInicio.onclick= function(){location.reload()};
  }
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
  document.getElementById("imgc").src="include/imagenes/fase6.png";
  generaPalabra();
  generarGuiones(palabra.length);
  teclado("a","z");
  cont = 6;
}

// cancelar juego
function desistir(){
  window.location.href = window.location.href;
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

// llamar funciones
botonInicio.onclick= iniciojuego;
botonAgrega.onclick= agregarpalabra;
botonCancNp.onclick= cancelarnuevapal;
botonNuejue.onclick= iniciojuego;
botonDesist.onclick= desistir;
