let pokeStorage = JSON.parse(sessionStorage.POKEMON_CAPTURADOS);
pokeStorage = pokeStorage.map(pokemon => pokemon.fkPokemon);

let pokeStorageLength = pokeStorage.length

const goToBadges = document.getElementById("btn_badges");
const goToBox = document.getElementById("btn_box");
const logOut = document.getElementById("btn_log_out");

goToBadges.addEventListener("click", function() {
    window.location.href = "/ShinyBox/insignias";
})

goToBox.addEventListener("click", () => {
    window.location.href = "/ShinyBox/box";
})

logOut.addEventListener("click", () => {
    console.log("LogOut realizado");
    window.location.href = "/";
    sessionStorage.clear();
})

document.addEventListener("DOMContentLoaded", () => {
    if (sessionStorage.ID_USUARIO == undefined) {
        window.location.href = "/loginNaoEncontrado";
    }
    
    total_pokemon.innerHTML = `
            Pokémon shiny capturados: ${pokeStorage.length}
            `;
})



