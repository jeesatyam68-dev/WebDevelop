const switchBtn = document.getElementById('lightSwitch');
const tube = document.getElementById('tube');
const content = document.getElementById('portfolioContent');

switchBtn.addEventListener('click', () => {
  // Tubelight glow toggle
  tube.classList.toggle('is-on');
  
  // Content reveal toggle
  content.classList.toggle('visible');

  // Button text update
  if (tube.classList.contains('is-on')) {
    switchBtn.textContent = 'Power OFF';
    switchBtn.style.background = '#45a29e';
    switchBtn.style.color = '#0b0c10';
  } else {
    switchBtn.textContent = 'Power ON';
    switchBtn.style.background = '#1f2833';
    switchBtn.style.color = '#66fcf1';
  }
});