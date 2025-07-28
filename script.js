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
