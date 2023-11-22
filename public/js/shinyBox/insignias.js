window.addEventListener("DOMContentLoaded", () => {
    if (sessionStorage.ID_USUARIO == undefined) {
        window.location.href = "/loginNaoEncontrado";
    } else {
        img_profile.src = sessionStorage.IMG_PERFIL;
        countAllPokemon();
    }
})

const goToProfile = document.getElementById("btn_profile");
const goToBox = document.getElementById("btn_box");
const logOut = document.getElementById("btn_log_out");

goToProfile.addEventListener("click", function() {
    window.location.href = "/ShinyBox";
})

goToBox.addEventListener("click", () => {
    window.location.href = "/ShinyBox/box"
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


    progress_bar_master.style.width = `${percentageTotal}%`;
    progress_bar_master_text.innerHTML = `Capturados: ${totalPokes} de 810 = ${percentageTotal}%`;

    progress_bar_kanto.style.width = `${percentageKanto}%`;
    progress_bar_kanto_text.innerHTML = `Capturados: ${kantoPokes} de 151 = ${percentageKanto}%`;

    progress_bar_johto.style.width = `${percentageJohto}%`;
    progress_bar_johto_text.innerHTML = `Capturados: ${johtoPokes} de 100 = ${percentageJohto}%`;

    progress_bar_hoenn.style.width = `${percentageHoenn}%`;
    progress_bar_hoenn_text.innerHTML = `Capturados: ${hoennPokes} de 135 = ${percentageHoenn}%`;

    progress_bar_sinnoh.style.width = `${percentageSinnoh}%`;
    progress_bar_sinnoh_text.innerHTML = `Capturados: ${sinnohPokes} de 107 = ${percentageSinnoh}%`;

    progress_bar_unova.style.width = `${percentageUnova}%`;
    progress_bar_unova_text.innerHTML = `Capturados: ${unovaPokes} de 156 = ${percentageUnova}%`;

    progress_bar_kalos.style.width = `${percentageKalos}%`;
    progress_bar_kalos_text.innerHTML = `Capturados: ${kalosPokes} de 72 = ${percentageKalos}%`;

    progress_bar_galar.style.width = `${percentageGalar}%`;
    progress_bar_galar_text.innerHTML = `Capturados: ${galarPokes} de 89 = ${percentageGalar}%`;

    if (percentageTotal >= 100) {
        master_badge.style.opacity = "100%";
    }

    if (percentageKanto >= 12.5) {
        kanto_badge1.style.opacity = "100%";
        qttBadgesKanto++;
    }
    if (percentageKanto >= 25) {
        kanto_badge2.style.opacity = "100%";
        qttBadgesKanto++;
    }
    if (percentageKanto >= 37.5) {
        kanto_badge3.style.opacity = "100%";
        qttBadgesKanto++;
    }
    if (percentageKanto >= 50) {
        kanto_badge4.style.opacity = "100%";
        qttBadgesKanto++;
    }
    if (percentageKanto >= 62.5) {
        kanto_badge5.style.opacity = "100%";
        qttBadgesKanto++;
    }
    if (percentageKanto >= 75) {
        kanto_badge6.style.opacity = "100%";
        qttBadgesKanto++;
    }
    if (percentageKanto >= 87.5) {
        kanto_badge7.style.opacity = "100%";
        qttBadgesKanto++;
    }
    if (percentageKanto >= 100) {
        kanto_badge8.style.opacity = "100%";
        champion_badge1.style.opacity = "100%";
        qttChampionBadges++;
        qttBadgesKanto++;
    }

    if (percentageJohto >= 12.5) {
        johto_badge1.style.opacity = "100%";
        qttBadgesJohto++;
    }
    if (percentageJohto >= 25) {
        johto_badge2.style.opacity = "100%";
        qttBadgesJohto++;
    }
    if (percentageJohto >= 37.5) {
        johto_badge3.style.opacity = "100%";
        qttBadgesJohto++;
    }
    if (percentageJohto >= 50) {
        johto_badge4.style.opacity = "100%";
        qttBadgesJohto++;
    }
    if (percentageJohto >= 62.5) {
        johto_badge5.style.opacity = "100%";
        qttBadgesJohto++;
    }
    if (percentageJohto >= 75) {
        johto_badge6.style.opacity = "100%";
        qttBadgesJohto++;
    }
    if (percentageJohto >= 87.5) {
        johto_badge7.style.opacity = "100%";
        qttBadgesJohto++;
    }
    if (percentageJohto >= 100) {
        johto_badge8.style.opacity = "100%";
        champion_badge2.style.opacity = "100%";
        qttChampionBadges++;
        qttBadgesJohto++;
    }

    if (percentageHoenn >= 12.5) {
        hoenn_badge1.style.opacity = "100%";
        qttBadgesHoenn++;
    }
    if (percentageHoenn >= 25) {
        hoenn_badge2.style.opacity = "100%";
        qttBadgesHoenn++;
    }
    if (percentageHoenn >= 37.5) {
        hoenn_badge3.style.opacity = "100%";
        qttBadgesHoenn++;
    }
    if (percentageHoenn >= 50) {
        hoenn_badge4.style.opacity = "100%";
        qttBadgesHoenn++;
    }
    if (percentageHoenn >= 62.5) {
        hoenn_badge5.style.opacity = "100%";
        qttBadgesHoenn++;
    }
    if (percentageHoenn >= 75) {
        hoenn_badge6.style.opacity = "100%";
        qttBadgesHoenn++;
    }
    if (percentageHoenn >= 87.5) {
        hoenn_badge7.style.opacity = "100%";
        qttBadgesHoenn++;
    }
    if (percentageHoenn >= 100) {
        hoenn_badge8.style.opacity = "100%";
        champion_badge3.style.opacity = "100%";
        qttChampionBadges++;
        qttBadgesHoenn++;
    }

    if (percentageSinnoh >= 12.5) {
        sinnoh_badge1.style.opacity = "100%";
        qttBadgesSinnoh++;
    }
    if (percentageSinnoh >= 25) {
        sinnoh_badge2.style.opacity = "100%";
        qttBadgesSinnoh++;
    }
    if (percentageSinnoh >= 37.5) {
        sinnoh_badge3.style.opacity = "100%";
        qttBadgesSinnoh++;
    }
    if (percentageSinnoh >= 50) {
        sinnoh_badge4.style.opacity = "100%";
        qttBadgesSinnoh++;
    }
    if (percentageSinnoh >= 62.5) {
        sinnoh_badge5.style.opacity = "100%";
        qttBadgesSinnoh++;
    }
    if (percentageSinnoh >= 75) {
        sinnoh_badge6.style.opacity = "100%";
        qttBadgesSinnoh++;
    }
    if (percentageSinnoh >= 87.5) {
        sinnoh_badge7.style.opacity = "100%";
        qttBadgesSinnoh++;
    }
    if (percentageSinnoh >= 100) {
        sinnoh_badge8.style.opacity = "100%";
        champion_badge4.style.opacity = "100%";
        qttChampionBadges++;
        qttBadgesSinnoh++;
    }

    if (percentageUnova >= 12.5) {
        unova_badge1.style.opacity = "100%";
        qttBadgesUnova++;
    }
    if (percentageUnova >= 25) {
        unova_badge2.style.opacity = "100%";
        qttBadgesUnova++;
    }
    if (percentageUnova >= 37.5) {
        unova_badge3.style.opacity = "100%";
        qttBadgesUnova++;
    }
    if (percentageUnova >= 50) {
        unova_badge4.style.opacity = "100%";
        qttBadgesUnova++;
    }
    if (percentageUnova >= 62.5) {
        unova_badge5.style.opacity = "100%";
        qttBadgesUnova++;
    }
    if (percentageUnova >= 75) {
        unova_badge6.style.opacity = "100%";
        qttBadgesUnova++;
    }
    if (percentageUnova >= 87.5) {
        unova_badge7.style.opacity = "100%";
        qttBadgesUnova++;
    }
    if (percentageUnova >= 100) {
        unova_badge8.style.opacity = "100%";
        champion_badge5.style.opacity = "100%";
        qttChampionBadges++;
        qttBadgesUnova++;
    }

    if (percentageKalos >= 12.5) {
        kalos_badge1.style.opacity = "100%";
        qttBadgesKalos++;
    }
    if (percentageKalos >= 25) {
        kalos_badge2.style.opacity = "100%";
        qttBadgesKalos++;
    }
    if (percentageKalos >= 37.5) {
        kalos_badge3.style.opacity = "100%";
        qttBadgesKalos++;
    }
    if (percentageKalos >= 50) {
        kalos_badge4.style.opacity = "100%";
        qttBadgesKalos++;
    }
    if (percentageKalos >= 62.5) {
        kalos_badge5.style.opacity = "100%";
        qttBadgesKalos++;
    }
    if (percentageKalos >= 75) {
        kalos_badge6.style.opacity = "100%";
        qttBadgesKalos++;
    }
    if (percentageKalos >= 87.5) {
        kalos_badge7.style.opacity = "100%";
        qttBadgesKalos++;
    }
    if (percentageKalos >= 100) {
        kalos_badge8.style.opacity = "100%";
        champion_badge6.style.opacity = "100%";
        qttChampionBadges++;
        qttBadgesKalos++;
    }

    if (percentageGalar >= 12.5) {
        galar_badge1.style.opacity = "100%";
        qttBadgesGalar++;
    }
    if (percentageGalar >= 25) {
        galar_badge2.style.opacity = "100%";
        qttBadgesGalar++;
    }
    if (percentageGalar >= 37.5) {
        galar_badge3.style.opacity = "100%";
        qttBadgesGalar++;
    }
    if (percentageGalar >= 50) {
        galar_badge4.style.opacity = "100%";
        qttBadgesGalar++;
    }
    if (percentageGalar >= 62.5) {
        galar_badge5.style.opacity = "100%";
        qttBadgesGalar++;
    }
    if (percentageGalar >= 75) {
        galar_badge6.style.opacity = "100%";
        qttBadgesGalar++;
    }
    if (percentageGalar >= 87.5) {
        galar_badge7.style.opacity = "100%";
        qttBadgesGalar++;
    }
    if (percentageGalar >= 100) {
        galar_badge8.style.opacity = "100%";
        qttBadgesGalar++;
        champion_badge7.style.opacity = "100%";
        qttChampionBadges++;
        qttBadgesGalar++;
    }
    
    let percentageChampion = (qttChampionBadges/7)*100;
    percentageChampion = percentageChampion.toFixed(2);
    progress_bar_champion.style.width = `${percentageChampion}%`;
    progress_bar_champion_text.innerHTML = `Insígnias: ${qttChampionBadges} de 7 = ${percentageChampion}%`
}
