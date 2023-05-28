const apiButton = document.getElementById('apiButton');
const apiData = document.getElementById('apiData');
const numero = document.getElementById('numero');
const nombre = document.getElementById('name');
const base_experience = document.getElementById('base_experience');
// const tipos = document.querySelectorAll('types');
// const imagen = document.createElement('img');
const shiny = document.createElement('shiny');
// const tipos = document.createElement('tipo1','tipo2');
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
    console.log(numerito);
    // let tipo1 = "";
    // let tipo2 = "";
    // let tipos = "";
    fetch('https://pokeapi.co/api/v2/pokemon/'.concat(numerito))
        .then(res => res.json())
        .then(data => {
            console.log(data);
            // imagen.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/".concat(numerito, ".png");
            imagen.src = data.sprites.other["official-artwork"].front_default;
            original = imagen.src;
            // shiny.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/".concat(numerito, ".png");
            shiny.src = data.sprites.other["official-artwork"].front_shiny;
            
            // imagen.alt.innerHTML = nombre;

            imagen.width = "180";
            // document.body.div.appendChild(imagen);

            // id.innerText = `ID: ${JSON.stringify(data.id)}`;
            numero.innerText = `#${data.id.toString().padStart(3,0)}`;

            nombre.innerText = `${JSON.stringify(data.name)}`;
            nombre.innerText = nombre.innerText.replaceAll('"', '');
            nombre.innerText = nombre.innerText[0].toUpperCase() + nombre.innerText.slice(1)
            // imagen.setAttribute("alt", nombre.innerText);
            // nombre.innerText = "Nombre: ".concat(nombre.innerText);

            // base_experience.innerText = `Experiencia Base: ${JSON.stringify(data.base_experience)}`;
            
            if (data.types.length == 1) {
                tiposs.innerText = [data.types[0].type.name.replaceAll('"', ''), ""];
                tipo1.innerText = cambiarTipo(tiposs.innerText[0]);   // traduzco al español
                formatoTipo1.className = cambiarEstilo(tiposs.innerText[0]);
                // tipo1.style.backgroundColor = cambiarEstilo(tiposs.innerText[0]);
                // tipos.innerText = "Tipo/s: ".concat(cambiarTipo(tiposs.innerText[0]));
                tipo2.innerText = "";
                formatoTipo2.className = "sinTipo";
            } else {
                tiposs.innerText = [data.types[0].type.name.replaceAll('"', ''), data.types[1].type.name.replaceAll('"', '')];
                // tipos.innerText = "Tipo/s: ".concat(cambiarTipo(tiposs.innerText[0]), "/", cambiarTipo(tiposs.innerText[1]));
                tipo1.innerText = cambiarTipo(tiposs.innerText[0]);  // traduzco al español
                // tipo1.style = cambiarEstilo (tiposs.innerText[0]);
                // formatoTipo1.className = "format-ground";
                // console.log("antes:", formatoTipo1);
                formatoTipo1.className = cambiarEstilo(tiposs.innerText[0]);
                // console.log(tiposs.innerText[0]);
                // formatoTipo1.innerHTML = "format-dragon";
                tipo2.innerText = cambiarTipo(tiposs.innerText[1]);  // traduzco al español
                // tipo2.style = cambiarEstilo(tiposs.innerText[1]);
                // tipo2.style.fontSize = "50px";      // cambia el estilo según el tipo
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


// const mostrarMensajito = document.getElementById('mostrarMensajito');
// mostrarMensajito.addEventListener('click', mensajitu);
// function mensajitu() {
//     const h1 = document.createElement("h1")             //Creamos el <h1>
//     const textNode = document.createTextNode("¡Hola!")  //Creamos el texto
//     h1.appendChild(textNode)                            //Colocamos el texto como hijo del <h1>
//     document.body.appendChild(h1)                       //Y ponemos el <h1> dentro del <body>
//     const div1 = document.querySelector("div")      // <div></div>
//     div1.textContent = "¡Hola a todos!"             // <div>Hola a todos</div>
//     div1.textContent
//     console.log(div1.textContent)                   // "Hola a todos"
//     const div2 = document.querySelectorAll(".info")    // <div class="info"></div>
//     for (let i in div2) {
//         div2[i].innerHTML = "<strong>Importante</strong>";  // Interpreta el HTML
//         div2[i].innerHTML;                                  // "<strong>Importante</strong>"
//         div2[i].textContent;                                // "Importante
//         console.log(div2[i].innerHTML);
//         console.log(div2[i].textContent);
//     }
// }


// window.pokemonUI.dictionary.type = {
//     "ghost": "Fantasma",
//     "dark": "Siniestro",
//     "electric": "Eléctrico",
//     "normal": "Normal",
//     "fire": "Fuego",
//     "psychic": "Psíquico",
//     "flying": "Volador",
//     "steel": "Acero",
//     "poison": "Veneno",
//     "dragon": "Dragón",
//     "water": "Agua",
//     "ice": "Hielo",
//     "rock": "Roca",
//     "fighting": "Lucha",
//     "grass": "Planta",
//     "bug": "Bicho",
//     "ground": "Tierra",
//     "fairy": "Hada",
// };
