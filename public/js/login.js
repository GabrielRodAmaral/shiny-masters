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
                console.log(json);
                console.log(JSON.stringify(json));
                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.ID_USUARIO = json.id;

                window.location = "/ShinyBox";
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
