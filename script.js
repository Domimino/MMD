// Tlačítko Zpět nahoru
const backToTopButton = document.getElementById('back-to-top');

// Zobraz tlačítko při scrollování
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Kliknutí na tlačítko přenese na začátek stránky
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
