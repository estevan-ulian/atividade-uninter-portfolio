// Script para garantir a rolagem suave ao clicar nos links do menu em qualquer navegador web.
const anchors = document.querySelectorAll("a[href^='#']");

anchors.forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});
