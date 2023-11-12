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
    sessionStorage.removeItem("ID_USUARIO");
})

document.addEventListener("DOMContentLoaded", () => {
    if (sessionStorage.ID_USUARIO == undefined) {
        window.location.href = "/loginNaoEncontrado";
    }
})

