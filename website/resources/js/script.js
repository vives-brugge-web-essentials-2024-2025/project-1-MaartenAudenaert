// Zorg ervoor dat de scroll-to-top knop verborgen blijft totdat er naar beneden wordt gescrold
window.addEventListener("scroll", () => { // Event listener voor scrollen
    const scrollButton = document.getElementById("scrollToTop"); // Scroll-to-top knop
    if (window.scrollY > 200) { // Als de gebruiker 200 pixels naar beneden is gescrold
        scrollButton.style.display = "block"; // Scroll-to-top knop weergeven
    } else { // Anders
        scrollButton.style.display = "none"; // Scroll-to-top knop verbergen
    }
});

// Functie om naar de bovenkant van de pagina te scrollen
function scrollToTop() { // Functie om naar de bovenkant van de pagina te scrollen
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scrollen naar de bovenkant van de pagina met een smooth effect
} 
