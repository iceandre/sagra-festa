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
// Menù interattivo
document.addEventListener('DOMContentLoaded', () => {
  const buttonsMenu = document.querySelectorAll('.menu-btn');
  const dettagliMenu = document.getElementById('menu-dettagli');

  buttonsMenu.forEach(button => {
    button.addEventListener('click', () => {
      const titolo = button.dataset.title;
      const dettagli = button.dataset.details;
      const img = button.dataset.img;

      dettagliMenu.classList.remove('show');
      setTimeout(() => {
        dettagliMenu.innerHTML = `
          <h3>${titolo}</h3>
          <p>${dettagli}</p>
          <img src="${img}" alt="${titolo}">
        `;
        dettagliMenu.classList.add('show');
      }, 100);
    });
  });
});
