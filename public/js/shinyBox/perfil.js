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

goToBadges.addEventListener("click", function () {
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
        }).catch((error) => {
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

    let kantoBars = [];
    let johtoBars = [];
    let hoennBars = [];
    let sinnohBars = [];
    let unovaBars = [];
    let kalosBars = [];
    let galarBars = [];
    let championBars = [];
    if (qttBadgesKanto <= 2) {
        kantoBars.push("red");
    } else if (qttBadgesKanto <= 6) {
        kantoBars.push("yellow")
    } else if (qttBadgesKanto > 6) {
        kantoBars.push("green")
    }

    if (qttBadgesJohto <= 2) {
        johtoBars.push("red")
    } else if (qttBadgesJohto <= 6) {
        johtoBars.push("yellow")
    } else if (qttBadgesJohto > 6) {
        johtoBars.push("green")
    }

    if (qttBadgesHoenn <= 2) {
        hoennBars.push("red")
    } else if (qttBadgesHoenn <= 6) {
        hoennBars.push("yellow")
    } else if (qttBadgesHoenn > 6) {
        hoennBars.push("green")
    }

    if (qttBadgesSinnoh <= 2) {
        sinnohBars.push("red")
    } else if (qttBadgesSinnoh <= 6) {
        sinnohBars.push("yellow")
    } else if (qttBadgesSinnoh > 6) {
        sinnohBars.push("green")
    }

    if (qttBadgesUnova <= 2) {
        unovaBars.push("red")
    } else if (qttBadgesUnova <= 6) {
        unovaBars.push("yellow")
    } else if (qttBadgesUnova > 6) {
        unovaBars.push("green")
    }

    if (qttBadgesKalos <= 2) {
        kalosBars.push("red")
    } else if (qttBadgesKalos <= 6) {
        kalosBars.push("yellow")
    } else if (qttBadgesKalos > 6) {
        kalosBars.push("green")
    }

    if (qttBadgesGalar <= 2) {
        galarBars.push("red")
    } else if (qttBadgesGalar <= 6) {
        galarBars.push("yellow")
    } else if (qttBadgesGalar > 6) {
        galarBars.push("green")
    }

    if (qttChampionBadges <= 2) {
        championBars.push("red")
    } else if (qttChampionBadges <= 5) {
        championBars.push("yellow")
    } else if (qttChampionBadges > 6) {
        championBars.push("green")
    }



    const graphic1 = document.getElementById("graphic1");
    
    new Chart(graphic1, {
        type: "bar",
        data: {
            labels: ["Quantidade de Insígnias"],
            datasets: [
            {
                label: "Kanto",
                data: [qttBadgesKanto],
                backgroundColor: kantoBars,
                borderColor: "black",
                borderWidth: 1
            },
            {
                label: "Johto",
                data: [qttBadgesJohto],
                backgroundColor: johtoBars,
                borderColor: "black",
                borderWidth: 1
            },
            {
                label: "Hoenn",
                data: [qttBadgesHoenn],
                backgroundColor: hoennBars,
                borderColor: "black",
                borderWidth: 1
            },
            {
                label: "Sinnoh",
                data: [qttBadgesSinnoh],
                backgroundColor: sinnohBars,
                borderColor: "black",
                borderWidth: 1
            },
            {
                label: "Unova",
                data: [qttBadgesUnova],
                backgroundColor: unovaBars,
                borderColor: "black",
                borderWidth: 1
            },
            {
                label: "Kalos",
                data: [qttBadgesKalos],
                backgroundColor: kalosBars,
                borderColor: "black",
                borderWidth: 1
            },
            {
                label: "Galar",
                data: [qttBadgesGalar],
                backgroundColor: galarBars,
                borderColor: "black",
                borderWidth: 1
            },
            {
                label: "Campeão",
                data: [qttChampionBadges],
                backgroundColor: championBars,
                borderColor: "black",
                borderWidth: 1
            },
        ]
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
                    },

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
                    text: "Vermelho = Iniciante, Amarelo = Intermediário, Verde = Avançado",
                    color: "white"
                }
            },
        }
    });
    
    
    const graphic2 = document.getElementById("graphic2");
    
    new Chart(graphic2, {
        type: "doughnut",
        data: {
            labels: ["Kanto", "Johto", "Hoenn", "Sinnoh", "Unova", "Kalos", "Galar"],
            datasets: [{
                data: [kantoPokes, johtoPokes, hoennPokes, sinnohPokes, unovaPokes, kalosPokes, galarPokes],
                backgroundColor: ["red", "orange", "yellow", "green", "blue", "MediumSlateBlue", "purple"],
                borderColor: "black",
                borderWidth: 1
            }
        ]
        },
        options: {
            maintainAspectRatio: false,
            responsive: false,
            plugins: {
                legend: {
                    labels: {
                            color: "white"
                    },
                },
                title: {
                    display: true,
                    text: 'Pokémon capturados por região',
                    color: 'white'
            },
            }
        },
    })
    
    total_badges_region.innerHTML = `
    Insígnias de região conquistadas: ${qttRegionBadges} de 56
    `;

    total_badges_champion.innerHTML = `
    Insígnias de campeão conquistadas: ${qttChampionBadges} de 7
    `;
}


const professorAnalysis = document.getElementById("professor_analysis");
const pageContent = document.getElementById("all_content");
const professorContent = document.getElementById("section_professor_analysis");

professorAnalysis.addEventListener("click", () => {
    pageContent.style.display = "none";
    professorContent.style.display = "flex";
    analyseProfile()
})

const closeProfessor = document.getElementById("close_btn");

closeProfessor.addEventListener("click", () => {
    professorContent.style.display = "none";
    pageContent.style.display = "flex";
    phrase1.innerHTML = "";
    phrase2.innerHTML = "";
    phrase3.innerHTML = "";
    phrase4.innerHTML = "";
    phrase5.innerHTML = "";
    phrase6.innerHTML = "";
    closeProfessor.style.display = "none";
})

let i = 0;
let i2 = 0;
let i3 = 0;
let i4 = 0;
let i5 = 0;
let i6 = 0;
let totalPokes = parseInt(sessionStorage.TOTAL_CAPTURED);
let kantoPokes = parseInt(sessionStorage.TOTAL_KANTO);
let johtoPokes = 29
let hoennPokes = parseInt(sessionStorage.TOTAL_HOENN);
let sinnohPokes = parseInt(sessionStorage.TOTAL_SINNOH);
let unovaPokes = parseInt(sessionStorage.TOTAL_UNOVA);
let kalosPokes = parseInt(sessionStorage.TOTAL_KALOS);
let galarPokes = 29
let morePokes = [{region: kantoPokes, name: "Kanto"}];
let regionArray = [{region: kantoPokes, name: "Kanto"}, {region: johtoPokes, name: "Johto"}, {region: hoennPokes, name: "Hoenn"}, {region: sinnohPokes, name: "Sinnoh"}, {region: unovaPokes, name: "Unova"}, {region: kalosPokes, name: "Kalos"}, {region: galarPokes, name: "Galar"}]

for(let ind=1; ind<regionArray.length; ind++) {
    if(regionArray[ind].region>morePokes[0].region) {
        morePokes = [regionArray[ind]];
    } else if (regionArray[ind].region === morePokes[0].region) {
        morePokes.push(regionArray[ind]);
    }
}
let morePokesRegions = morePokes.map(region => region.name).join(", ");

let phrase6Text = "";
let phrase3Text = "";
function analyseProfile() {
    const phrase1Text = "Olá treinador!";
    const phrase2Text = "Analisando seu perfil, percebi algumas coisas:";
    const phrase4Text = `Você possui ${qttChampionBadges} insígnias de campeão, você precisará de 7 para se tornar um Shiny Master.`;
    const phrase5Text = `No nosso mundo existem 810 espécies dePokémon shiny e você possui ${totalPokes}.`;

    if(morePokes.length>1) {
        phrase3Text = `As regiões que você possui mais Pokémon são ${morePokesRegions}, essas devem ser suas regiões favoritas!`;
    } else {
        phrase3Text = `A região que você possui mais Pokémon é ${morePokesRegions}, essa deve ser sua região favorita!`;
    }
    
    if (totalPokes == 810) {
        phrase6Text = "PARABÉNS por se tornar um verdadeiro Shiny Master!!"
    } else {
        phrase6Text = "Ainda tem caminho trilhar!";
    }

    if (i < phrase1Text.length) {
        phrase1.innerHTML += phrase1Text[i];
        i++;
        setTimeout(analyseProfile, 25);
    } else if (i2 < phrase2Text.length) {
        phrase2.innerHTML += phrase2Text[i2];
        i2++;
        setTimeout(analyseProfile, 25);
    } else if (i3 < phrase3Text.length) {
        phrase3.innerHTML += phrase3Text[i3];
        i3++;
        setTimeout(analyseProfile, 25);
    } else if (i4 < phrase4Text.length) {
        phrase4.innerHTML += phrase4Text[i4];
        i4++;
        setTimeout(analyseProfile, 25);
    } else if (i5 < phrase5Text.length) {
        phrase5.innerHTML += phrase5Text[i5];
        i5++;
        setTimeout(analyseProfile, 25);
    } else if (i6 < phrase6Text.length) {
        phrase6.innerHTML += phrase6Text[i6];
        i6++;
        setTimeout(analyseProfile, 25);
    } else {
        closeProfessor.style.display = "flex";
        i = 0;
        i2 = 0;
        i3 = 0;
        i4 = 0;
        i5 = 0;
        i6 = 0;
    }
}
