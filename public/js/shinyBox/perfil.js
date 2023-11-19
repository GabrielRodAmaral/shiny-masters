window.addEventListener("DOMContentLoaded", () => {
    if (sessionStorage.ID_USUARIO == undefined) {
        window.location.href = "/loginNaoEncontrado";
    } else {
        total_pokemon.innerHTML = `
        Pokémon shiny capturados: ${pokeStorage.length} de 810
        `;
        countAllPokemon();
    } 
})
let pokeStorage = JSON.parse(sessionStorage.POKEMON_CAPTURADOS);
pokeStorage = pokeStorage.map(pokemon => pokemon.idPokemon);

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

function countAllPokemon() {
    let shinyBox = sessionStorage.FK_SHINY_BOX;
    let datas = {
        shinyBox: shinyBox
    }

    fetch("/ShinyBox/countAllPokemon", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(datas),
    })
    .then((result) => {
        if (result.ok) {
            console.log("Contagem dos Pokémon realizada, adicionando ao storage")
            
            result.json().then(json => {
                let totalCaptured = json.totalPokemon;
                let totalKanto = json.totalRegiao1;
                let totalJohto = json.totalRegiao2;
                let totalHoenn = json.totalRegiao3;
                let totalSinnoh = json.totalRegiao4;
                let totalUnova = json.totalRegiao5;
                let totalKalos = json.totalRegiao6;
                let totalGalar = json.totalRegiao7;
    
                sessionStorage.TOTAL_CAPTURED = totalCaptured;
                sessionStorage.TOTAL_KANTO = totalKanto;
                sessionStorage.TOTAL_JOHTO = totalJohto;
                sessionStorage.TOTAL_HOENN = totalHoenn;
                sessionStorage.TOTAL_SINNOH = totalSinnoh;
                sessionStorage.TOTAL_UNOVA = totalUnova;
                sessionStorage.TOTAL_KALOS = totalKalos;
                sessionStorage.TOTAL_GALAR = totalGalar;

                updateBadges()
            })
        } else {
            console.log("Erro ao realizar o login");
            res.text().then(text => {
                console.error(text);
            })
        }
    }) .catch((error) => {
        console.log(error)
    })
}

let qttChampionBadges = 0;
let qttBadgesKanto = 0;
let qttBadgesJohto = 0;
let qttBadgesHoenn = 0;
let qttBadgesSinnoh = 0;
let qttBadgesUnova = 0;
let qttBadgesKalos = 0;
let qttBadgesGalar = 0;
function updateBadges() {
    let totalPokes = sessionStorage.TOTAL_CAPTURED;
    let kantoPokes = sessionStorage.TOTAL_KANTO;
    let johtoPokes = sessionStorage.TOTAL_JOHTO;
    let hoennPokes = sessionStorage.TOTAL_HOENN;
    let sinnohPokes = sessionStorage.TOTAL_SINNOH;
    let unovaPokes = sessionStorage.TOTAL_UNOVA;
    let kalosPokes = sessionStorage.TOTAL_KALOS;
    let galarPokes = sessionStorage.TOTAL_GALAR;
    qttChampionBadges = 0;
    qttRegionBadges = 0;
    qttBadgesKanto = 0;
    qttBadgesJohto = 0;
    qttBadgesHoenn = 0;
    qttBadgesSinnoh = 0;
    qttBadgesUnova = 0;
    qttBadgesKalos = 0;
    qttBadgesGalar = 0;

    let percentageTotal = (totalPokes / 810) * 100;
    percentageTotal = percentageTotal.toFixed(2);

    let percentageKanto = (kantoPokes / 151) * 100;
    percentageKanto = percentageKanto.toFixed(2);

    let percentageJohto = (johtoPokes / 100) * 100;
    percentageJohto = percentageJohto.toFixed(2);

    let percentageHoenn = (hoennPokes / 135) * 100;
    percentageHoenn = percentageHoenn.toFixed(2);

    let percentageSinnoh = (sinnohPokes / 107) * 100;
    percentageSinnoh = percentageSinnoh.toFixed(2);

    let percentageUnova = (unovaPokes / 156) * 100;
    percentageUnova = percentageUnova.toFixed(2);

    let percentageKalos = (kalosPokes / 72) * 100;
    percentageKalos = percentageKalos.toFixed(2);

    let percentageGalar = (galarPokes / 89) * 100;
    percentageGalar = percentageGalar.toFixed(2);

    if (percentageKanto >= 12.5) {
        qttBadgesKanto++;
        qttRegionBadges++;
    } else if (percentageKanto >= 25) {
        qttBadgesKanto++;
        qttRegionBadges++;
    } else if (percentageKanto >= 37.5) {
        qttBadgesKanto++;
        qttRegionBadges++;
    } else if (percentageKanto >= 50) {
        qttBadgesKanto++;
        qttRegionBadges++;
    } else if (percentageKanto >= 62.5) {
        qttBadgesKanto++;
        qttRegionBadges++;
    } else if (percentageKanto >= 75) {
        qttBadgesKanto++;
        qttRegionBadges++;
    } else if (percentageKanto >= 87.5) {
        qttBadgesKanto++;
        qttRegionBadges++;
    } else if (percentageKanto >= 100) {
        qttChampionBadges++;
        qttBadgesKanto++;
        qttRegionBadges++;
    }

    if (percentageJohto >= 12.5) {
        qttBadgesJohto++;
        qttRegionBadges++;
    } else if (percentageJohto >= 25) {
        qttBadgesJohto++;
        qttRegionBadges++;
    } else if (percentageJohto >= 37.5) {
        qttBadgesJohto++;
        qttRegionBadges++;
    } else if (percentageJohto >= 50) {
        qttBadgesJohto++;
        qttRegionBadges++;
    } else if (percentageJohto >= 62.5) {
        qttBadgesJohto++;
        qttRegionBadges++;
    } else if (percentageJohto >= 75) {
        qttBadgesJohto++;
        qttRegionBadges++;
    } else if (percentageJohto >= 87.5) {
        qttBadgesJohto++;
        qttRegionBadges++;
    } else if (percentageJohto >= 100) {
        qttChampionBadges++;
        qttBadgesJohto++;
        qttRegionBadges++;
    }

    if (percentageHoenn >= 12.5) {
        qttBadgesHoenn++;
        qttRegionBadges++;
    } else if (percentageHoenn >= 25) {
        qttBadgesHoenn++;
        qttRegionBadges++;
    } else if (percentageHoenn >= 37.5) {
        qttBadgesHoenn++;
        qttRegionBadges++;
    } else if (percentageHoenn >= 50) {
        qttBadgesHoenn++;
        qttRegionBadges++;
    } else if (percentageHoenn >= 62.5) {
        qttBadgesHoenn++;
        qttRegionBadges++;
    } else if (percentageHoenn >= 75) {
        qttBadgesHoenn++;
        qttRegionBadges++;
    } else if (percentageHoenn >= 87.5) {
        qttBadgesHoenn++;
        qttRegionBadges++;
    } else if (percentageHoenn >= 100) {
        qttChampionBadges++;
        qttBadgesHoenn++;
        qttRegionBadges++;
    }

    if (percentageSinnoh >= 12.5) {
        qttBadgesSinnoh++;
        qttRegionBadges++;
    } else if (percentageSinnoh >= 25) {
        qttBadgesSinnoh++;
        qttRegionBadges++;
    } else if (percentageSinnoh >= 37.5) {
        qttBadgesSinnoh++;
        qttRegionBadges++;
    } else if (percentageSinnoh >= 50) {
        qttBadgesSinnoh++;
        qttRegionBadges++;
    } else if (percentageSinnoh >= 62.5) {
        qttBadgesSinnoh++;
        qttRegionBadges++;
    } else if (percentageSinnoh >= 75) {
        qttBadgesSinnoh++;
        qttRegionBadges++;
    } else if (percentageSinnoh >= 87.5) {
        qttBadgesSinnoh++;
        qttRegionBadges++;
    } else if (percentageSinnoh >= 100) {
        qttChampionBadges++;
        qttBadgesSinnoh++;
        qttRegionBadges++;
    }

    if (percentageUnova >= 12.5) {
        qttBadgesUnova++;
        qttRegionBadges++;
    } else if (percentageUnova >= 25) {
        qttBadgesUnova++;
        qttRegionBadges++;
    } else if (percentageUnova >= 37.5) {
        qttBadgesUnova++;
        qttRegionBadges++;
    } else if (percentageUnova >= 50) {
        qttBadgesUnova++;
        qttRegionBadges++;
    } else if (percentageUnova >= 62.5) {
        qttBadgesUnova++;
        qttRegionBadges++;
    } else if (percentageUnova >= 75) {
        qttBadgesUnova++;
        qttRegionBadges++;
    } else if (percentageUnova >= 87.5) {
        qttBadgesUnova++;
        qttRegionBadges++;
    } else if (percentageUnova >= 100) {
        qttChampionBadges++;
        qttBadgesUnova++;
        qttRegionBadges++;
    }

    if (percentageKalos >= 12.5) {
        qttBadgesKalos++;
        qttRegionBadges++;
    } else if (percentageKalos >= 25) {
        qttBadgesKalos++;
        qttRegionBadges++;
    } else if (percentageKalos >= 37.5) {
        qttBadgesKalos++;
        qttRegionBadges++;
    } else if (percentageKalos >= 50) {
        qttBadgesKalos++;
        qttRegionBadges++;
    } else if (percentageKalos >= 62.5) {
        qttBadgesKalos++;
        qttRegionBadges++;
    } else if (percentageKalos >= 75) {
        qttBadgesKalos++;
        qttRegionBadges++;
    } else if (percentageKalos >= 87.5) {
        qttBadgesKalos++;
        qttRegionBadges++;
    } else if (percentageKalos >= 100) {
        qttChampionBadges++;
        qttBadgesKalos++;
        qttRegionBadges++;
    }

    if (percentageGalar >= 12.5) {
        qttBadgesGalar++;
        qttRegionBadges++;
    } else if (percentageGalar >= 25) {
        qttBadgesGalar++;
        qttRegionBadges++;
    } else if (percentageGalar >= 37.5) {
        qttBadgesGalar++;
        qttRegionBadges++;
    } else if (percentageGalar >= 50) {
        qttBadgesGalar++;
        qttRegionBadges++;
    } else if (percentageGalar >= 62.5) {
        qttBadgesGalar++;
        qttRegionBadges++;
    } else if (percentageGalar >= 75) {
        qttBadgesGalar++;
        qttRegionBadges++;
    } else if (percentageGalar >= 87.5) {
        qttBadgesGalar++;
        qttRegionBadges++;
    } else if (percentageGalar >= 100) {
        qttBadgesGalar++;
        qttChampionBadges++;
        qttBadgesGalar++;
        qttRegionBadges++;
    }

    total_badges_region.innerHTML = `
    Insígnias de região conquistadas: ${qttRegionBadges} de 56
    `;

    total_badges_champion.innerHTML = `
    Insígnias de região conquistadas: ${qttChampionBadges} de 07
    `;

    let colorBars = [];
    if (qttBadgesKanto<=2) {
        colorBars.push("red");
    } else if (qttBadgesKanto<=6) {
        colorBars.push("yellow")
    } else if (qttBadgesKanto>6) {
        colorBars.push("green")
    }

    if (qttBadgesJohto<=2) {
        colorBars.push("red")
    } else if (qttBadgesJohto<=6) {
        colorBars.push("yellow")
    } else if (qttBadgesJohto>6) {
        colorBars.push("green")
    }

    if (qttBadgesHoenn<=2) {
        colorBars.push("red")
    } else if (qttBadgesHoenn<=6) {
        colorBars.push("yellow")
    } else if (qttBadgesHoenn>6) {
        colorBars.push("green")
    }

    if (qttBadgesSinnoh<=2) {
        colorBars.push("red")
    } else if (qttBadgesSinnoh<=6) {
        colorBars.push("yellow")
    } else if (qttBadgesSinnoh>6) {
        colorBars.push("green")
    }

    if (qttBadgesUnova<=2) {
        colorBars.push("red")
    } else if (qttBadgesUnova<=6) {
        colorBars.push("yellow")
    } else if (qttBadgesUnova>6) {
        colorBars.push("green")
    }

    if (qttBadgesKalos<=2) {
        colorBars.push("red")
    } else if (qttBadgesKalos<=6) {
        colorBars.push("yellow")
    } else if (qttBadgesKalos>6) {
        colorBars.push("green")
    }

    if (qttBadgesGalar<=2) {
        colorBars.push("red")
    } else if (qttBadgesGalar<=6) {
        colorBars.push("yellow")
    } else if (qttBadgesGalar>6) {
        colorBars.push("green")
    }

    if (qttChampionBadges<=2) {
        colorBars.push("red")
    } else if (qttChampionBadges<=5) {
        colorBars.push("yellow")
    } else if (qttChampionBadges>6) {
        colorBars.push("green")
    }

    

    const graphic1 = document.getElementById("graphic1");

    new Chart(graphic1, {
        type: "bar",
        data: {
            labels: ["Kanto", "Johto", "Hoenn", "Sinnoh", "Unova", "Kalos", "Galar", "Campeão"],
            datasets: [{
                label: ["Novato", "Intermediário", "Avançado"],
                data: [qttBadgesKanto, qttBadgesJohto, qttBadgesHoenn, qttBadgesSinnoh, qttBadgesUnova, qttBadgesKalos, qttBadgesGalar, qttChampionBadges],
                backgroundColor: colorBars,
                borderColor: colorBars,
                borderWidth: 1
            }]
        },
        options: {
            maintainAspectRatio: false,
            responsive: false,
            scales: {
              y: {
                beginAtZero: true,
                max: 8,
                ticks: {
                    color: "white"
                }
              },
              x: {
                ticks: {
                    color: "white"
                },
                grid: {
                    color: "white"
                }
              }
            },
            plugins: {
                legend: {
                labels: {
                    color: "white",
                },
                },
                title: {
                    display: true,
                    text: 'Quantidade de Insígnias',
                    color: 'white'
                }
          }
        }
    });
}

// const professorAnalysis = document.getElementById("professor_analysis")

// professorAnalysis.addEventListener("click", () => {
//     page_content.style.display = "none";
//     page_title.style.display = "none";
//     graphic1.style.display = "flex";
// })
