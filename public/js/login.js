const logBtn = document.getElementById("btn_login");
const form = document.getElementById("form_login");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let email = document.getElementById("ipt_email").value;
    let password = document.getElementById("ipt_password").value;
    const datas = {
        email: email,
        password: password
    }
    fetch("/login/enter", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(datas),
    })
        .then((res) => {
            if (res.ok) {
                console.log("dentro do then res.ok no login")

                res.json().then(json => {
                    sessionStorage.EMAIL_USUARIO = json.email;
                    sessionStorage.ID_USUARIO = json.id;
                    sessionStorage.FK_SHINY_BOX = json.fkShinyBox;
                    sessionStorage.IMG_PERFIL = json.imgPerfil;
                    
                    getAllPokemon();
                })
            } else {
                Swal.fire({
                    title: "Email ou senha inválidos!",
                    text: "Caso não possua uma conta clique em cadastrar.",
                    icon: "error",
                    showCancelButton: true,
                    cancelButtonText: "Cadastrar",
                }).then((result) => {
                    if (result.isDismissed && result.dismiss == Swal.DismissReason.cancel) {
                        window.location.href = "/cadastro";
                    }
                });
                res.text().then(text => {
                    console.error(text);
                })
            }
        }).catch((error) => {
            console.log(error);
        })
})

function getAllPokemon() {
    let fkBox = {
        fkBox: sessionStorage.FK_SHINY_BOX
    }
    fetch("/login/getPoke", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(fkBox),
    })
        .then((res) => {
            if (res.ok) {
                console.log("dentro do then res.ok no login")
                res.json().then(json => {
                    let pokemonCapturados = JSON.stringify(json.pokemon);
                    sessionStorage.POKEMON_CAPTURADOS = pokemonCapturados;
                    countAllPokemon();
                    window.location.href = "/ShinyBox";
                })
            } else {
                console.log("Erro ao realizar o login");
                res.text().then(text => {
                    console.error(text);
                })
            }
        }).catch((error) => {
            console.log(error);
        })
}

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