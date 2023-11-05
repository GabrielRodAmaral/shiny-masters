const startJourney = document.getElementById("btn_start_journey");
const continueJourney = document.getElementById("btn_continue_journey");
const moveToSite = document.getElementById("btn_site");

startJourney.addEventListener("click", function() {
    window.location.href = "/cadastro";
});

continueJourney.addEventListener("click", function() {
    window.location.href = "/login";
})

moveToSite.addEventListener("click", function() {
    window.location.href = "/site";
})
