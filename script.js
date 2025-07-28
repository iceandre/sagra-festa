function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('show');
}

// Accordion Menù
const accordions = document.querySelectorAll('.accordion-btn');
accordions.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    const panel = btn.nextElementSibling;
    panel.style.display = (panel.style.display === "block") ? "none" : "block";
  });
});
// Accordion per eventi
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.accordion-btn');
  
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const panel = button.nextElementSibling;
      
      // Chiude altri pannelli aperti
      document.querySelectorAll('.panel').forEach(p => {
        if (p !== panel) p.style.display = 'none';
      });

      // Toggle pannello selezionato
      panel.style.display = (panel.style.display === 'block') ? 'none' : 'block';
    });
  });
});
