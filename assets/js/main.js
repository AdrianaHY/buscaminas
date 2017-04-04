var bomba = document.getElementsByClassName("bomba").length;
var celdasBomba = [];
var color = document.getElementsByClassName("color").length;
var celdasColor = [];
var numeroUno = document.getElementsByClassName("numero1").length;
var celdasUno = [];
var numeroDos = document.getElementsByClassName("numero2").length;
var celdasDos = [];
var imagenesBomba = document.getElementsByClassName("imagenesBomba").length;
var celdasImagenes = [];

//Para las celdas vacías que cambian de color

//Para agregar a un arreglo vacío los elementos que arroja de la clase
for (var i = 0; i < color; i++){
  celdasColor[i]= document.getElementsByClassName("color")[i];
}

//Teniendo  el arreglo formado con los elementos de la clase
//se itera sobre ese arreglo para a cada uno asignarle
//el evento
  for (var i = 0; i < celdasColor.length ; i ++) {
  celdasColor[i].addEventListener('click', cambiarColor);
}

//función para cambiar de color la celda seleccionada
//que se llamará después dentro del for
function cambiarColor(){
  this.style.backgroundColor = "blue";
}

//Para las imágenes de las bombas

//Para agregar a un arreglo vacío los elementos que arroja de la clase
for (var i = 0; i < bomba; i++){
  celdasBomba[i]= document.getElementsByClassName("bomba")[i];
}

//Teniendo  el arreglo formado con los elementos de la clase
//se itera sobre ese arreglo para a cada uno asignarle
//el evento
  for (var i = 0; i < celdasBomba.length ; i ++) {
  celdasBomba[i].addEventListener('click', agregarBomba);
}

function agregarBomba(bomba){
  // for (var i = 0; i < celdasBomba.length; i++){
  //   celdasBomba[i].innerHTML= "<img src = assets/bomba.png width='70'>";
  alert("Perdiste!!!! :(");
  var contenedor = document.getElementById("contenedor");
  var tabla = document.getElementById("buscaminas");

  contenedor.removeChild(tabla);
  contenedor.innerHTML = "<img src = assets/bomba-01.gif width= '300'>"


  }

// cambiarColor();
// agregarNumeroUno();
// agregarNumeroDos();


//Para las celdas con número uno

//Para agregar a un arreglo vacío los elementos que arroja de la clase
for (var i = 0; i < numeroUno; i++){
  celdasUno[i]= document.getElementsByClassName("numero1")[i];
}

//Teniendo  el arreglo formado con los elementos de la clase
//se itera sobre ese arreglo para a cada uno asignarle
//el evento
  for (var i = 0; i < celdasUno.length ; i ++) {
  celdasUno[i].addEventListener('click', agregarNumeroUno);
}

//función para cambiar de color la celda seleccionada
//que se llamará después dentro del for
function agregarNumeroUno(){
  this.innerText = "1";
}

//Para las celdas con número datos

//Para agregar a un arreglo vacío los elementos qu arroja de la clase
for (var i = 0; i < numeroDos; i ++){
  celdasDos[i] = document.getElementsByClassName("numero2")[i];
}

//Teniendo  el arreglo formado con los elementos de la clase
//se itera sobre ese arreglo para a cada uno asignarle
//el evento
  for (var i = 0; i < celdasDos.length ; i ++) {
  celdasDos[i].addEventListener('click', agregarNumeroDos);
}

//función para cambiar de color la celda seleccionada
//que se llamará después dentro del for
function agregarNumeroDos(){
  this.innerText = "2";
}
