const phrase1 = document.getElementById("phrase1");
const phrase2 = document.getElementById("phrase2");
const phrase3 = document.getElementById("phrase3");
const phrase4 = document.getElementById("phrase4");

const phrase1Text = "Opa...";
const phrase2Text = "Parece que você ainda não fez login!";
const phrase3Text = "É necessário fazer login para acessar a sua Shiny Box.";
const phrase4Text = "Clique em 'Cadastro' caso ainda não tenha uma conta ou em 'Login' caso já tenha uma conta."

let i = 0;
let i2 = 0;
let i3 = 0;
let i4 = 0;

const login = document.getElementById("login_btn");
const register = document.getElementById("register_btn");

window.addEventListener("load", function insertText() {

    if (i < phrase1Text.length) {
        phrase1.innerHTML += phrase1Text[i];
        i++;
    } else if (i2 < phrase2Text.length) {
        phrase2.innerHTML += phrase2Text[i2];
        i2++;
    } else if (i3 < phrase3Text.length) {
        phrase3.innerHTML += phrase3Text[i3];
        i3++;
    } else if (i4 < phrase4Text.length) {
        phrase4.innerHTML += phrase4Text[i4];
        i4++;
    } else {
        login.style.display = "flex";
        register.style.display = "flex";
    }


    setTimeout(insertText, 25);
})

login.addEventListener("click", () => {
    window.location.href = "/login";
})

register.addEventListener("click", () => {
    window.location.href = "/cadastro"
})