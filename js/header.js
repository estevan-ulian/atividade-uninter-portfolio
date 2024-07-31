// Script para adicionar e remover classe 'sticky' do elemento header
const header = document.querySelector(".header--wrapper");

function handleScroll() {
    if (window.scrollY >= 140) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

window.addEventListener("scroll", () => handleScroll());
