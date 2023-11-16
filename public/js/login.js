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
                    
                    getAllPokemon()
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