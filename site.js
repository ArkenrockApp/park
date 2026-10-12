'use strict';
// Progressive enhancement only: all content and links work without JavaScript.
// No analytics, cookies, local storage, fetches or third-party dependencies.
const filters = document.querySelector('.filters');
if (filters) {
  const buttons = [...filters.querySelectorAll('[data-filter]')];
  const games = [...document.querySelectorAll('.catalog [data-category]')];
  const status = document.querySelector('#catalog-status');
  filters.hidden = false;
  for (const button of buttons) {
    button.addEventListener('click', () => {
      const category = button.dataset.filter;
      let count = 0;
      for (const game of games) {
        game.hidden = category !== 'all' && game.dataset.category !== category;
        if (!game.hidden) count++;
      }
      for (const item of buttons) {
        const selected = item === button;
        item.classList.toggle('active', selected);
        item.setAttribute('aria-pressed', String(selected));
      }
      status.textContent = `Showing ${count} ${category === 'all' ? 'games' : category === 'slots' ? 'slot and reel games' : 'table and card games'}.`;
    });
  }
}
