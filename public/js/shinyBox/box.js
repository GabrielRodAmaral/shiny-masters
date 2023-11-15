const goToProfile = document.getElementById("btn_profile");
const goToBadges = document.getElementById("btn_badges");
const logOut = document.getElementById("btn_log_out");

goToProfile.addEventListener("click", function() {
    window.location.href = "/ShinyBox";
})

goToBadges.addEventListener("click", () => {
    window.location.href = "/ShinyBox/insignias"
})

logOut.addEventListener("click", () => {
    console.log("LogOut realizado");
    window.location.href = "/";
    sessionStorage.removeItem("ID_USUARIO");
})

document.addEventListener("DOMContentLoaded", () => {
    if (sessionStorage.ID_USUARIO == undefined) {
        window.location.href = "/loginNaoEncontrado";
    }
})

// async function getPokemonInfo(pokemonName) {
//     try {
//       const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      
//       if (!response.ok) {
//         throw new Error(`Não foi possível obter informações sobre o Pokémon ${pokemonName}`);
//       }
//       const data = await response.json();

//       const pokemonId = data.id;
      
//       console.log(pokemonId)
//     } catch (error) {
//       console.error(error.message);
//     }
//   }

  function getPokemonData(pokeName) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    .then(result => {
        if (!result.ok) {
            throw new Error(`Não foi possível obter informações sobre o Pokémon ${pokeName}`);
        }
        return result.json();
    })
    .then(result => {
        const pokeId = result.id;
        const pokeSprite = result.sprites.front_shiny;
        return {pokeId, pokeSprite};
    })
    .catch(error => {
        console.error("Erro na function do fetch: " + error.message);
        throw error;
    })
  }

const btnAddPoke = document.getElementById("btn_insert_pokemon");
const iptPokeName = document.getElementById("ipt_insert_pokemon");

btnAddPoke.addEventListener("click", function addPokemon(){
    let pokeName = iptPokeName.value;
    pokeName = pokeName.toLowerCase();
    
    getPokemonData(pokeName)
    .then(pokeInfo => {
        console.log(pokeInfo.pokeId);
        let pokeId = Number(pokeInfo.pokeId);
        if (pokeId<152) {
            box_kanto.innerHTML += `<img src="${pokeInfo.pokeSprite}"></img>`;
        } else if (pokeId<252) {
            box_johto.innerHTML += `<img src="${pokeInfo.pokeSprite}"></img>`;
        } else if (pokeId<387) {
            box_hoenn.innerHTML += `<img src="${pokeInfo.pokeSprite}"></img>`;
        } else if (pokeId<494) {
            box_sinnoh.innerHTML += `<img src="${pokeInfo.pokeSprite}"></img>`;
        } else if (pokeId<650) {
            box_unova.innerHTML += `<img src="${pokeInfo.pokeSprite}"></img>`;
        } else if (pokeId<722) {
            box_kalos.innerHTML += `<img src="${pokeInfo.pokeSprite}"></img>`;
        } else if (pokeId<810) {
            alert("Não tem Alola");
        } else{
            box_galar.innerHTML += `<img src="${pokeInfo.pokeSprite}"></img>`;
        }
    })
    .catch(error => {
        console.error("Erro na chamada do dado: " + error.message);
    })
})