//1. Hacer canasta de frutas
var canasta_de_frutas_iniciales = ['kiwi','bananos','papayas','manzanas']
var canasta_de_frutas_regalo = ['uvas','melocotones','peras','uchuvas','fresas']


//2. Por cada fruta en la canasta, quiero que me genere un h2 en mi pagina web

canasta_de_frutas_iniciales.forEach(function(valor_actual) {
    var div_modificable = document.getElementById("div que se estira y se encoge");

    var h2_fruta_especifica = document.createElement("h2");
    h2_fruta_especifica.innerHTML = valor_actual;

    div_modificable.appendChild(h2_fruta_especifica)
})

//3. Guardar el boton de agregar en una variable

var button_agregar = document.getElementById('agregar_frutas')

//4. Cuando le de click al boton de agregar frutas, tome una fruta del array
// de regalo y anadale una fruta aleatoria

button_agregar.addEventListener ('click',function(){
    console.log('estoy aqui');
    let div_modificable_local = document.getElementById("div que se estira y se encoge");

    //lo agarro de stack overflow aqui: https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array
    let fruta_regalo_especifica = canasta_de_frutas_regalo[Math.floor(Math.random()*canasta_de_frutas_regalo.length)];

    console.log(fruta_regalo_especifica);

    let h2_fruta_regalo_especifica = document.createElement("h2");
    h2_fruta_regalo_especifica.innerHTML=fruta_regalo_especifica;
    
    div_modificable_local.appendChild(h2_fruta_regalo_especifica);
})

//5. Eliminar todos los contenidos dentro de un div boton quitar frutas

var button_eliminar = document.getElementById("quitar_frutas")

button_eliminar.addEventListener('click',function(){
    let div_a_vaciar = document.getElementById("div que se estira y se encoge")
    div_a_vaciar.innerHTML='';
})





