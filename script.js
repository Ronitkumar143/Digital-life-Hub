document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      alert(`${card.textContent} feature coming soon!`);
    });
  });
  