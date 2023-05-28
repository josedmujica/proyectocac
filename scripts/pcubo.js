const apiData = document.getElementById('apiData');

function crearImgPokemon() {
    let numerito = Math.floor(Math.random() * 1008) + 1;
    console.log(numerito);
    fetch('https://pokeapi.co/api/v2/pokemon/'.concat(numerito))
        .then(res => res.json())
        .then(data => {
            console.log(data);
            imagenCara.src = data.sprites.other["official-artwork"].front_default;
            imagenCara.width = "200";
        }
        .catch(e => console.error(new Error(e)));
    }
crearImgPokemon();