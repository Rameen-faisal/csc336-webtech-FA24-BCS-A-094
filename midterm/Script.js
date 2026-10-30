const grid = document.querySelector('.row');
const cards = Array.from(grid.querySelectorAll('.col'));
const searchBox = document.getElementById('search');
const sortBtn = document.getElementById('sort-btn');
const noResults = document.getElementById('no-results');
const radios = document.querySelectorAll('.filter-input');
let ascending = true;

function getPrice(card) {
  return parseInt(card.querySelector('.price').textContent.replace(/[^0-9]/g, ''), 10);
}
function updateResults() {
  const text = searchBox.value.toLowerCase();
  let visible = 0;
  cards.forEach(function (card) {
    const name = card.querySelector('.card-title').textContent.toLowerCase();
    card.style.display = name.includes(text) ? '' : 'none';
    if (getComputedStyle(card).display !== 'none') {
      visible++;
    }
  });
  grid.hidden = visible === 0;
  noResults.hidden = visible !== 0;
}

searchBox.addEventListener('input', updateResults);
radios.forEach(function (radio) {
  radio.addEventListener('change', updateResults);
});
sortBtn.addEventListener('click', function () {
  const sorted = cards.slice().sort(function (a, b) {
    return ascending ? getPrice(a) - getPrice(b) : getPrice(b) - getPrice(a);
  });
  sorted.forEach(function (card) {
    grid.appendChild(card);
  });
  ascending = !ascending;
});
cards.forEach(function (card) {
  if (getPrice(card) > 9400) {
    const label = document.createElement('span');
    label.className = 'badge bg-dark mb-1';
    label.textContent = 'Premium';
    card.querySelector('.card-title').before(label);
  }
});