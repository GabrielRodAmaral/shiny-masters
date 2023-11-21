window.addEventListener("DOMContentLoaded", () => {
    if (sessionStorage.ID_USUARIO == undefined) {
        window.location.href = "/loginNaoEncontrado";
    } else {
        if (sessionStorage.SPRITE_PROFILE == undefined) {
            img_profile.src = "/img/charizardShiny.png";
        } else {
            img_profile.src = sessionStorage.SPRITE_PROFILE;
        }
        renderSprites();
    }
})

let pokeStorage = JSON.parse(sessionStorage.POKEMON_CAPTURADOS);

const goToProfile = document.getElementById("btn_profile");
const goToBadges = document.getElementById("btn_badges");
const logOut = document.getElementById("btn_log_out");

goToProfile.addEventListener("click", function () {
    window.location.href = "/ShinyBox";
})

goToBadges.addEventListener("click", () => {
    window.location.href = "/ShinyBox/insignias"
})

logOut.addEventListener("click", () => {
    console.log("LogOut realizado");
    window.location.href = "/";
    sessionStorage.clear();
})

function renderSprites() {
    let pokeStorageIntern = pokeStorage.map(pokemon => {
        if (typeof pokemon == 'object') {
            return pokemon.idPokemon
        }
        return pokemon;
    });
    for(let i=0; i<pokeStorageIntern.length; i++) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokeStorageIntern[i]}`)
        .then(result => {
            if (!result.ok) {
                throw new Error(`Não foi possível obter informações sobre o Pokémon ${pokeStorageIntern[i]}`);
            }
            return result.json();
        })
        .then(result => {
            const pokeSprite = result.sprites.front_shiny;
            if (pokeStorageIntern[i]<152) {
                box_kanto.innerHTML += `<img src="${pokeSprite}"></img>`;
            } else if (pokeStorageIntern[i]<252) {
                box_johto.innerHTML += `<img src="${pokeSprite}"></img>`;
            } else if (pokeStorageIntern[i]<387) {
                box_hoenn.innerHTML += `<img src="${pokeSprite}"></img>`;
            } else if (pokeStorageIntern[i]<494) {
                box_sinnoh.innerHTML += `<img src="${pokeSprite}"></img>`;
            } else if (pokeStorageIntern[i]<650) {
                box_unova.innerHTML += `<img src="${pokeSprite}"></img>`;
            } else if (pokeStorageIntern[i]<722) {
                box_kalos.innerHTML += `<img src="${pokeSprite}"></img>`;
            } else {
                box_galar.innerHTML += `<img src="${pokeSprite}"></img>`;
            }
        })
        .catch(error => {
            console.error("Erro na function do fetch: " + error.message);
            throw error;
        })
    }
}

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
            return { pokeId, pokeSprite };
        })
        .catch(error => {
            console.error("Erro na function do fetch: " + error.message);
            throw error;
        })
}

const btnAddPoke = document.getElementById("btn_insert_pokemon");
const iptPokeName = document.getElementById("ipt_insert_pokemon");

btnAddPoke.addEventListener("click", function addPokemon() {
    let pokeName = iptPokeName.value;
    pokeName = pokeName.toLowerCase();

    getPokemonData(pokeName)
        .then(pokeInfo => {
            console.log(pokeInfo.pokeId);
            let pokeId = Number(pokeInfo.pokeId);
            let pokeSprite = pokeInfo.pokeSprite;
            let idShinyBox = sessionStorage.FK_SHINY_BOX;

            let pokeStorageIntern = pokeStorage.map(pokemon => {
        if (typeof pokemon == 'object') {
            return pokemon.idPokemon
        }
        return pokemon;
    });
            if (pokeStorage.includes(pokeId) || pokeStorageIntern.includes(pokeId)) {
                alert(`Pokémon com ID ${pokeId} já existe em pokeStorage. Ignorando a inserção.`);
            } else if (pokeId < 152) {
                box_kanto.innerHTML += `<img src="${pokeInfo.pokeSprite}"></img>`;
                
                let pokeDatas = {
                    pokeId: pokeId,
                    pokeName: pokeName,
                    pokeSprite: pokeSprite,
                    fkRegion: 1,
                    idShinyBox: idShinyBox
                }
                console.log(pokeDatas)
                fetch("/ShinyBox/registerPoke", {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify(pokeDatas),
                }).then((result) => {
                    if (result.ok) {
                        result.json().then(json => {
                            pokeStorage.push(pokeId);
                            pokeStorage.push({sprite: pokeSprite});
                            sessionStorage.setItem('POKEMON_CAPTURADOS', JSON.stringify(pokeStorage));
                            let pokeNameOrg = iptPokeName.value.toLowerCase();
                            pokeNameOrg = pokeNameOrg[0].toUpperCase() + pokeNameOrg.substring(1);
                            Swal.fire({
                                title: "Gotcha!",
                                text: `${pokeNameOrg} foi adicionado a box de Kanto`,
                                imageUrl: "/img/sweetAlert/pokeballCatch.gif",
                                imageWidth: 500,
                                imageHeight: 250,
                                imageAlt: `${pokeNameOrg}`
                              });
                        })
                    } else {
                        console.log("Erro ao adicionar Pokémon", result.status);
                        result.text().then(text => {
                            console.error(text);
                        })
                    }
                }).catch((error) => {
                    console.log(error);
                })
            } else if (pokeId < 252) {
                box_johto.innerHTML += `<img src="${pokeInfo.pokeSprite}"></img>`;

                let pokeDatas = {
                    pokeId: pokeId,
                    pokeName: pokeName,
                    pokeSprite: pokeSprite,
                    fkRegion: 2,
                    idShinyBox: idShinyBox
                }
                console.log(pokeDatas)
                fetch("/ShinyBox/registerPoke", {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify(pokeDatas),
                }).then((result) => {
                    if (result.ok) {
                        result.json().then(json => {
                            pokeStorage.push(pokeId);
                            pokeStorage.push({sprite: pokeSprite});
                            sessionStorage.setItem('POKEMON_CAPTURADOS', JSON.stringify(pokeStorage));
                            let pokeNameOrg = iptPokeName.value.toLowerCase();
                            pokeNameOrg = pokeNameOrg[0].toUpperCase() + pokeNameOrg.substring(1);
                            Swal.fire({
                                title: "Gotcha!",
                                text: `${pokeNameOrg} foi adicionado a box de Johto`,
                                imageUrl: "/img/sweetAlert/pokeballCatch.gif",
                                imageWidth: 500,
                                imageHeight: 250,
                                imageAlt: `${pokeNameOrg}`
                              });
                        })
                    } else {
                        console.log("Erro ao adicionar Pokémon", result.status);
                        result.text().then(text => {
                            console.error(text);
                        })
                    }
                }).catch((error) => {
                    console.log(error);
                })
            } else if (pokeId < 387) {
                box_hoenn.innerHTML += `<img src="${pokeInfo.pokeSprite}"></img>`;

                let pokeDatas = {
                    pokeId: pokeId,
                    pokeName: pokeName,
                    pokeSprite: pokeSprite,
                    fkRegion: 3,
                    idShinyBox: idShinyBox
                }
                console.log(pokeDatas)
                fetch("/ShinyBox/registerPoke", {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify(pokeDatas),
                }).then((result) => {
                    if (result.ok) {
                        result.json().then(json => {
                            pokeStorage.push(pokeId);
                            pokeStorage.push({sprite: pokeSprite});
                            sessionStorage.setItem('POKEMON_CAPTURADOS', JSON.stringify(pokeStorage));
                            let pokeNameOrg = iptPokeName.value.toLowerCase();
                            pokeNameOrg = pokeNameOrg[0].toUpperCase() + pokeNameOrg.substring(1);
                            Swal.fire({
                                title: "Gotcha!",
                                text: `${pokeNameOrg} foi adicionado a box de Hoenn`,
                                imageUrl: "/img/sweetAlert/pokeballCatch.gif",
                                imageWidth: 500,
                                imageHeight: 250,
                                imageAlt: `${pokeNameOrg}`
                              });
                        })
                    } else {
                        console.log("Erro ao adicionar Pokémon", result.status);
                        result.text().then(text => {
                            console.error(text);
                        })
                    }
                }).catch((error) => {
                    console.log(error);
                })
            } else if (pokeId < 494) {
                box_sinnoh.innerHTML += `<img src="${pokeInfo.pokeSprite}"></img>`;

                let pokeDatas = {
                    pokeId: pokeId,
                    pokeName: pokeName,
                    pokeSprite: pokeSprite,
                    fkRegion: 4,
                    idShinyBox: idShinyBox
                }
                console.log(pokeDatas)
                fetch("/ShinyBox/registerPoke", {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify(pokeDatas),
                }).then((result) => {
                    if (result.ok) {
                        result.json().then(json => {
                            pokeStorage.push(pokeId);
                            pokeStorage.push({sprite: pokeSprite});
                            sessionStorage.setItem('POKEMON_CAPTURADOS', JSON.stringify(pokeStorage));
                            let pokeNameOrg = iptPokeName.value.toLowerCase();
                            pokeNameOrg = pokeNameOrg[0].toUpperCase() + pokeNameOrg.substring(1);
                            Swal.fire({
                                title: "Gotcha!",
                                text: `${pokeNameOrg} foi adicionado a box de Sinnoh`,
                                imageUrl: "/img/sweetAlert/pokeballCatch.gif",
                                imageWidth: 500,
                                imageHeight: 250,
                                imageAlt: `${pokeNameOrg}`
                              });
                        })
                    } else {
                        console.log("Erro ao adicionar Pokémon", result.status);
                        result.text().then(text => {
                            console.error(text);
                        })
                    }
                }).catch((error) => {
                    console.log(error);
                })
            } else if (pokeId < 650) {
                box_unova.innerHTML += `<img src="${pokeInfo.pokeSprite}"></img>`;

                let pokeDatas = {
                    pokeId: pokeId,
                    pokeName: pokeName,
                    pokeSprite: pokeSprite,
                    fkRegion: 5,
                    idShinyBox: idShinyBox
                }
                console.log(pokeDatas)
                fetch("/ShinyBox/registerPoke", {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify(pokeDatas),
                }).then((result) => {
                    if (result.ok) {
                        result.json().then(json => {
                            pokeStorage.push(pokeId);
                            pokeStorage.push({sprite: pokeSprite});
                            sessionStorage.setItem('POKEMON_CAPTURADOS', JSON.stringify(pokeStorage));
                            let pokeNameOrg = iptPokeName.value.toLowerCase();
                            pokeNameOrg = pokeNameOrg[0].toUpperCase() + pokeNameOrg.substring(1);
                            Swal.fire({
                                title: "Gotcha!",
                                text: `${pokeNameOrg} foi adicionado a box de Unova`,
                                imageUrl: "/img/sweetAlert/pokeballCatch.gif",
                                imageWidth: 500,
                                imageHeight: 250,
                                imageAlt: `${pokeNameOrg}`
                              });
                        })
                    } else {
                        console.log("Erro ao adicionar Pokémon", result.status);
                        result.text().then(text => {
                            console.error(text);
                        })
                    }
                }).catch((error) => {
                    console.log(error);
                })
            } else if (pokeId < 722) {
                box_kalos.innerHTML += `<img src="${pokeInfo.pokeSprite}"></img>`;

                let pokeDatas = {
                    pokeId: pokeId,
                    pokeName: pokeName,
                    pokeSprite: pokeSprite,
                    fkRegion: 6,
                    idShinyBox: idShinyBox
                }
                console.log(pokeDatas)
                fetch("/ShinyBox/registerPoke", {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify(pokeDatas),
                }).then((result) => {
                    if (result.ok) {
                        result.json().then(json => {
                            pokeStorage.push(pokeId);
                            pokeStorage.push({sprite: pokeSprite});
                            sessionStorage.setItem('POKEMON_CAPTURADOS', JSON.stringify(pokeStorage));
                            let pokeNameOrg = iptPokeName.value.toLowerCase();
                            pokeNameOrg = pokeNameOrg[0].toUpperCase() + pokeNameOrg.substring(1);
                            Swal.fire({
                                title: "Gotcha!",
                                text: `${pokeNameOrg} foi adicionado a box de Kalos`,
                                imageUrl: "/img/sweetAlert/pokeballCatch.gif",
                                imageWidth: 500,
                                imageHeight: 250,
                                imageAlt: `${pokeNameOrg}`
                              });
                        })
                    } else {
                        console.log("Erro ao adicionar Pokémon", result.status);
                        result.text().then(text => {
                            console.error(text);
                        })
                    }
                }).catch((error) => {
                    console.log(error);
                })
            } else if (pokeId < 810) {
                alert("Atualmente não possuimos uma box para região de Alola");
            } else {
                box_galar.innerHTML += `<img src="${pokeInfo.pokeSprite}"></img>`;

                let pokeDatas = {
                    pokeId: pokeId,
                    pokeName: pokeName,
                    pokeSprite: pokeSprite,
                    fkRegion: 7,
                    idShinyBox: idShinyBox
                }
                console.log(pokeDatas)
                fetch("/ShinyBox/registerPoke", {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify(pokeDatas),
                }).then((result) => {
                    if (result.ok) {
                        result.json().then(json => {
                            pokeStorage.push(pokeId);
                            pokeStorage.push({sprite: pokeSprite});
                            sessionStorage.setItem('POKEMON_CAPTURADOS', JSON.stringify(pokeStorage));
                            let pokeNameOrg = iptPokeName.value.toLowerCase();
                            pokeNameOrg = pokeNameOrg[0].toUpperCase() + pokeNameOrg.substring(1);
                            Swal.fire({
                                title: "Gotcha!",
                                text: `${pokeNameOrg} foi adicionado a box de Galar`,
                                imageUrl: "/img/sweetAlert/pokeballCatch.gif",
                                imageWidth: 500,
                                imageHeight: 250,
                                imageAlt: `${pokeNameOrg}`
                              });
                        })
                    } else {
                        console.log("Erro ao adicionar Pokémon", result.status);
                        result.text().then(text => {
                            console.error(text);
                        })
                    }
                }).catch((error) => {
                    console.log(error);
                })
            }
        })
        .catch(error => {
            console.error("Erro na chamada do dado: " + error.message);
        })
})
