const toggleButtons = document.querySelectorAll('.toggle-button');

toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        const hiddenContent = button.nextElementSibling;
        hiddenContent.classList.toggle('show');
        button.textContent = hiddenContent.classList.contains('show') ? 'Méně o mně' : 'Více o mně'; // Změna textu tlačítka
    });
});