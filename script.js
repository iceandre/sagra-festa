function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('show');
}

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.accordion-btn');
  const dettagliBox = document.getElementById('evento-dettagli');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const titolo = button.dataset.event;
      const dettagli = button.dataset.details;

      dettagliBox.classList.remove('show'); // reset animazione
      setTimeout(() => {
        dettagliBox.innerHTML = `
          <h3>${titolo}</h3>
          <p>${dettagli.replace(/\|/g, '<br>')}</p>
        `;
        dettagliBox.classList.add('show');
      }, 100);
    });
  });
});
