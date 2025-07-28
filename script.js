function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('show');
}

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.accordion-btn');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const panel = button.nextElementSibling;

      // Chiude altri pannelli aperti
      document.querySelectorAll('.panel').forEach(p => {
        if (p !== panel) {
          p.style.display = 'none';
        }
      });

      // Toggle pannello selezionato
      if (panel.style.display === 'block') {
        panel.style.display = 'none';
      } else {
        panel.style.display = 'block';
      }
    });
  });
});
console.log("Script caricato!");
