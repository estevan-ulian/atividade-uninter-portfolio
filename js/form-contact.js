const formContact = document.querySelector(".form-contact");

formContact.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(formContact);
    const data = Object.fromEntries(formData);

    alert(`Nome: ${data.name}\nE-mail: ${data.email}\nMensagem: ${data.message}`);
    formContact.reset();
});
