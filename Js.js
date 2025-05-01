const countValue = document.querySelector('#counter');

const animateCounter = () => {
  countValue.classList.remove('counter-value'); // Reset animation
  void countValue.offsetWidth; // Trigger reflow
  countValue.classList.add('counter-value');
};

const increment = () => {
  let value = parseInt(countValue.textContent);
  countValue.textContent = value + 1;
  animateCounter();
};

const decrement = () => {
  let value = parseInt(countValue.textContent);
  countValue.textContent = value - 1;
  animateCounter();
};
