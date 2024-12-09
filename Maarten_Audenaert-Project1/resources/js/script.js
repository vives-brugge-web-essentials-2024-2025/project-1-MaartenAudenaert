// Zorg ervoor dat de scroll-to-top knop verborgen blijft totdat er naar beneden wordt gescrold
window.addEventListener("scroll", () => {
    const scrollButton = document.getElementById("scrollToTop");
    if (window.scrollY > 200) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
});

// Functie om naar de bovenkant van de pagina te scrollen
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
