const frase1Texto = "Olá, bem-vindo ao fabuloso mundo Pokémon.";
const frase2Texto = "Meu nome é Carvalho mas todos aqui me chamam de professor Carvalho.";
const frase3Texto = "Este mundo é habitado por criaturas chamadas de Pokémon,";
const frase4Texto = "algumas pessoas os tratam como mascotes, outras os usam em batalhas.";
const frase5Texto = "Quanto a mim, eu amo estudar os Pokémon.";
const frase6Texto = "Mas primeiro, fale um pouco sobre você.";
let i = 0;
let i2 = 0;
let i3 = 0;
let i4 = 0;
let i5 = 0;
let i6 = 0;

window.addEventListener("load", function inserirTexto() {

    if (i < frase1Texto.length) {
        frase1.innerHTML += frase1Texto[i];
        i++;
    } else if (i2 < frase2Texto.length) {
        frase2.innerHTML += frase2Texto[i2];
        i2++;
    } else if (i3 < frase3Texto.length) {
        frase3.innerHTML += frase3Texto[i3];
        i3++;
    } else if (i4 < frase4Texto.length) {
        frase4.innerHTML += frase4Texto[i4];
        i4++;
    } else if (i5 < frase5Texto.length) {
        frase5.innerHTML += frase5Texto[i5];
        i5++;
    } else if (i6 < frase6Texto.length) {
        frase6.innerHTML += frase6Texto[i6];
        i6++;
    } else {
        botao_cadastro.style.display = "flex";
    }


    setTimeout(inserirTexto, 25);
})

const cadastro = document.getElementById("botao_cadastro");
const falaDialogo = document.getElementById("caixa_dialogo");
const professor = document.getElementById("img_professor");
const caixaCadastro = document.getElementById("caixa_cadastro");

cadastro.addEventListener("click", () => {
    falaDialogo.style.display = "none";
    professor.style.display = "none";
    caixaCadastro.style.display = "flex"
})

const formulario = document.getElementById("fomulario_cadastro");
const senha = document.getElementById("senha_cadastro")
const confirmaSenha = document.getElementById("confirma_senha");
const cadastrar = document.getElementById("botao_cadastrar");
const msgErro = document.getElementById("mensagem_erro_senha")

formulario.addEventListener("submit", (batata) => {
    if (senha.value!=confirmaSenha.value) {
        batata.preventDefault();
        msgErro.style.display = "flex";
    }
})




