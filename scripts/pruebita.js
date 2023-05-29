const apiButton = document.getElementById('apiButton');
const apiData = document.getElementById('apiData');
const numero = document.getElementById('numero');
const nombre = document.getElementById('name');
const shiny = document.createElement('shiny');
const tipos = document.getElementById('tipos');
const tipo1 = document.getElementById('tipo1');
const tipo2 = document.getElementById('tipo2');
const formatoTipo1 = document.querySelector('.formatoTipo1');
const formatoTipo2 = document.querySelector('.formatoTipo2');
let tiposs = new Array(2);
imagen.src = "placeholder.png";
let original = imagen.src;

function crearPokemon() {
    let numerito = Math.floor(Math.random() * 1008) + 1;
    // console.log(numerito);

    fetch('https://pokeapi.co/api/v2/pokemon/'.concat(numerito))
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            imagen.src = data.sprites.other["official-artwork"].front_default;
            original = imagen.src;
            shiny.src = data.sprites.other["official-artwork"].front_shiny;
            imagen.width = "180";

            numero.innerText = `#${data.id.toString().padStart(3,0)}`;

            nombre.innerText = `${JSON.stringify(data.name)}`;
            nombre.innerText = nombre.innerText.replaceAll('"', '');
            nombre.innerText = nombre.innerText[0].toUpperCase() + nombre.innerText.slice(1)
            
            cambiarVisibilidad() /* muestra la tarjeta */

            if (data.types.length == 1) {
                tiposs.innerText = [data.types[0].type.name.replaceAll('"', ''), ""];
                tipo1.innerText = cambiarTipo(tiposs.innerText[0]);   // traduzco al español
                formatoTipo1.className = cambiarEstilo(tiposs.innerText[0]);
                tipo2.innerText = "";
                formatoTipo2.className = "sinTipo";
            } else {
                tiposs.innerText = [data.types[0].type.name.replaceAll('"', ''), data.types[1].type.name.replaceAll('"', '')];
                tipo1.innerText = cambiarTipo(tiposs.innerText[0]);  // traduzco al español
                formatoTipo1.className = cambiarEstilo(tiposs.innerText[0]);
                tipo2.innerText = cambiarTipo(tiposs.innerText[1]);  // traduzco al español
                formatoTipo2.className = cambiarEstilo(tiposs.innerText[1]);
            }
            // console.log(tiposs.innerText);

            imagen.addEventListener('mouseenter', function () {
                imagen.src = shiny.src
            });
            imagen.addEventListener('touchstart', (event) => {
                ontouchstart = (event) => { imagen.src = shiny.src }
            });  // con esto funciona para dispositivos táctiles también
            imagen.addEventListener('mouseleave', function () {
                imagen.src = original
            });
            imagen.addEventListener('touchend', (event) => {
                ontouchend = (event) => { imagen.src = original }
            });
        })
        .catch(e => console.error(new Error(e)));
}

apiButton.addEventListener('click', crearPokemon)

function cambiarVisibilidad() {
    document.getElementById('tarjeta').style.display = 'block';
}

/* traducción al español, ya que la API lo pasa en inglés */
function cambiarTipo (tipito) {
    switch  (tipito) {
        case 'ghost':
            tipito = "Fantasma";
            break;
        case 'dark':
            tipito = "Siniestro";
            break;
        case 'electric':
            tipito = "Eléctrico";
            break;
        case 'normal':
            tipito = "Normal";
            break;
        case 'fire':
            tipito = "Fuego";
            break;
        case 'water':
            tipito = "Agua";
            break;
        case 'psychic':
            tipito = "Psíquico";
            break;
        case 'flying': 
            tipito = "Volador";
            break;
        case 'steel':
            tipito = "Acero";
            break;
        case 'poison':
            tipito = "Veneno";
            break;
        case 'dragon':     
            tipito = "Dragón";
            break;
        case 'ice':
            tipito = "Hielo";
            break;
        case 'rock': 
            tipito = "Roca";
            break;
        case 'fighting': 
            tipito = "Lucha";
            break;
        case 'grass': 
            tipito = "Planta";
            break;
        case 'bug': 
            tipito = "Bicho";
            break;
        case 'ground': 
            tipito = "Tierra";
            break;
        case 'fairy': 
            tipito = "Hada";
            break;

    } return tipito;
}

/* asignar el estilo del fondo de cada tipo */
function cambiarEstilo (stylex) {
    switch  (stylex) {
        case 'ghost':
            stylex = "format-ghost";
            break;
        case 'dark':
            stylex = "format-dark";
            break;
        case 'electric':
            stylex = "format-electric";
            break;
        case 'normal':
            stylex = "format-normal";
            break;
        case 'fire':
            stylex = "format-fire";
            break;
        case 'water':
            stylex = "format-water";
            break;
        case 'psychic':
            stylex = "format-psychic";
            break;
        case 'flying': 
            stylex = "format-flying";
            break;
        case 'steel':
            stylex = "format-steel";
            break;
        case 'poison':
            stylex = "format-poison";
            break;
        case 'dragon':     
            stylex = "format-dragon";
            break;
        case 'ice':
            stylex = "format-ice";
            break;
        case 'rock': 
            stylex = "format-rock";
            break;
        case 'fighting': 
            stylex = "format-fighting";   
            break;
        case 'grass': 
            stylex = "format-grass";
            break;
        case 'bug': 
            stylex = "format-bug";
            break;
        case 'ground': 
            stylex = "format-ground"; 
            break;
        case 'fairy': 
            stylex = "format-fairy";
            break;
        default: 
            stylex = "sinTipo";
            break;
    } return stylex;
}