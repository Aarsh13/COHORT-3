let pokemon_types = {};
let all_pokemon_data = [];

function fetchPokemonData(pokemon) {
    return fetch(pokemon.url)
        .then(response => response.json())
        .then(function (data) {
            pokemon_types[pokemon.name] = data.types.map(typeInfo => typeInfo.type.name);
            all_pokemon_data.push({ name: pokemon.name, id: data.id, types: pokemon_types[pokemon.name] });
        })
        .catch(error => console.error("Error fetching Pokémon data:", error));
}


function fetchKantoPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => response.json())
        .then(function (allpokemon) {
            
            let fetchPromises = allpokemon.results.map(pokemon => fetchPokemonData(pokemon));
            Promise.all(fetchPromises).then(() => {
                renderSearchResults(all_pokemon_data); 
            });
        })
        .catch(error => console.error("Error fetching Kanto Pokémon:", error));
}


function searchPokemon() {
    let target = document.getElementById("pokemon-number").value;
    if(target==""){
        target=151;
    }
    
    let type = document.getElementById("pokemon-types").value;
    let search_ans = [];

    let count = 0;

    
    all_pokemon_data.forEach((pokemon) => {
        if (count == target) return;
        
        
        if (type === "" || (pokemon.types && pokemon.types.includes(type))) {
            search_ans.push(pokemon);
            count++;
        }
    });

    
    renderSearchResults(search_ans);
}


function renderSearchResults(search_ans) {
    let pokemonListDiv = document.getElementById("pokemon-list");
    pokemonListDiv.innerHTML = ""; 
    
    search_ans.forEach(pokemon => {
        render(pokemon, pokemonListDiv);
    });
}


function render(pokemon, box) {
    let card = document.createElement("div");
    card.className = "card";
    card.className="card";
    
    let pokemon_name = document.createElement("p");
    pokemon_name.innerText = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

    
    let image = document.createElement("img");
    let image_div = document.createElement("div"); 
    
    
    image.srcset = `https://img.pokemondb.net/artwork/${pokemon.name}.jpg`; 
    
    image.style.height="90px"
    image.style.width="auto"


    
    image_div.appendChild(image);

    
    let pokemon_type = document.createElement("ul");
    pokemon_type.className="typeList"
    let types = pokemon.types || []; 
    types.forEach(type => {
        let li = document.createElement("li");
        li.innerText = type.charAt(0).toUpperCase() + type.slice(1);
        pokemon_type.appendChild(li);
    });

    
    card.appendChild(image_div);
    card.appendChild(pokemon_name);
    card.appendChild(pokemon_type);
    

    
    box.appendChild(card);
}



fetchKantoPokemon();
