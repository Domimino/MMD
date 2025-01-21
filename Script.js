const toggleButtons = document.querySelectorAll('.toggle-button');

toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        const hiddenContent = button.nextElementSibling;
        hiddenContent.classList.toggle('show');
        button.textContent = hiddenContent.classList.contains('show') ? 'Méně o mně' : 'Více o mně'; // Změna textu tlačítka
    });
});

const form = document.querySelector('.contact-form');

form.addEventListener('submit', function(event) {
    let isValid = true;

    // Validace jména
    const nameInput = document.getElementById('name');
    if (nameInput.value.trim() === '') {
        isValid = false;
        alert('Prosím vyplňte jméno.');
        nameInput.focus();
    }

    // Validace e-mailu (jednoduchá kontrola formátu)
    const emailInput = document.getElementById('email');
    if (emailInput.value.trim() === '' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
        isValid = false;
        alert('Prosím vyplňte platný e-mail.');
        emailInput.focus();
    }

    // Validace zprávy
    const messageInput = document.getElementById('message');
    if (messageInput.value.trim() === '') {
        isValid = false;
        alert('Prosím vyplňte zprávu.');
        messageInput.focus();
    }

    if (!isValid) {
        event.preventDefault(); // Zabrání odeslání formuláře, pokud validace selže
    }
});