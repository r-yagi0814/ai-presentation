const TOTAL = 15;
let current = 1;

const dotsEl = document.getElementById('dots');
for (let i = 1; i <= TOTAL; i++) {
  const d = document.createElement('div');
  d.className = 'dot' + (i === 1 ? ' active' : '');
  d.onclick = () => goTo(i);
  dotsEl.appendChild(d);
}

function goTo(n) {
  document.getElementById('slide-' + current).classList.remove('active');
  dotsEl.children[current - 1].classList.remove('active');
  current = Math.max(1, Math.min(TOTAL, n));
  document.getElementById('slide-' + current).classList.add('active');
  dotsEl.children[current - 1].classList.add('active');
  document.getElementById('counter').textContent = current + ' / ' + TOTAL;
  document.getElementById('prevBtn').disabled = current === 1;
  document.getElementById('nextBtn').disabled = current === TOTAL;
  document.getElementById('progressBar').style.width = ((current / TOTAL) * 100) + '%';
}

function changeSlide(dir) { goTo(current + dir); }

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') changeSlide(1);
  if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   changeSlide(-1);
});

goTo(1);
