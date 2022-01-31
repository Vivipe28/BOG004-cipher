import cipher from './cipher.js';

let texto = document.getElementById("texto");
let texto1 = document.getElementById("texto1");
let movimiento = document.getElementById('desplazamiento');
let movimiento1 = document.getElementById('desplazamiento1');
let output = document.getElementById("textoCifrado");
let output1 = document.getElementById("textoDecifrado");

let empezar = document.getElementById("boton");
empezar.addEventListener('click',entrar);

let exit = document.getElementById ('exit');
exit.addEventListener('click',salir);

let stringToUpperCase = document.getElementById('texto');
stringToUpperCase.addEventListener('keyup', toUpperCase);

let stringToUpperCase1 = document.getElementById('texto1');
stringToUpperCase1.addEventListener('keyup', toUpperCase1);

let cifrar = document.getElementById('enviar');
cifrar.addEventListener('click', mostrarCifrado);

let decifrar = document.getElementById('enviar1');
decifrar.addEventListener('click', mostrardeCifrado);

function entrar() {
    let main = document.getElementById('main');
    main.style.display = 'block';
    let principal = document.getElementById('principal');
    principal.style.display = 'none';
}
function salir () {
    let principal = document.getElementById('principal');
    principal.style.display = 'block';
    let main = document.getElementById('main');
    main.style.display = 'none';
}

function toUpperCase (){
     stringToUpperCase.value = stringToUpperCase.value.toUpperCase();
}

function toUpperCase1 (){
  stringToUpperCase1.value = stringToUpperCase1.value.toUpperCase();
}

function mostrarCifrado(){
  output.innerHTML = cipher.encode(movimiento.value,texto.value);
}

function mostrardeCifrado() {
  output1.innerHTML = cipher.decode(movimiento1.value, texto1.value);
}

