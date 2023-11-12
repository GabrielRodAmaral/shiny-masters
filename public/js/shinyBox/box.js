const goToProfile = document.getElementById("btn_profile");
const goToBadges = document.getElementById("btn_badges");
const logOut = document.getElementById("btn_log_out");

goToProfile.addEventListener("click", function() {
    window.location.href = "/ShinyBox";
})

goToBadges.addEventListener("click", () => {
    window.location.href = "/ShinyBox/insignias"
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