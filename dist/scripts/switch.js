const toggle = document.querySelector('#toggle-darkmode');

window.addEventListener('DOMContentLoaded', getTheme);
toggle.addEventListener('click', switchTheme);

function getTheme() {
  const ls = localStorage.getItem('color-mode');

  if (ls) {
    updateUI(ls);
  } else {
    const themeDark = window.matchMedia('(prefers-color-scheme: dark)');
    if (themeDark.matches) {
      colorMode = 'dark';
      setLS(colorMode);
      updateUI(colorMode);
    }
  }
}

function switchTheme() {
  let colorMode = document.documentElement.getAttribute('data-color-mode');

  if (colorMode === 'dark') {
    colorMode = 'light';
  } else {
    colorMode = 'dark';
  }

  setLS(colorMode);
  updateUI(colorMode);
}

function setLS(color) {
  localStorage.setItem('color-mode', color);
}

function updateUI(color) {
  document.documentElement.setAttribute('data-color-mode', color);

  if (color === 'light') {
    toggle.checked = false;
  } else {
    toggle.checked = true;
  }
}
