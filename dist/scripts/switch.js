const body = document.querySelector('body');
const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', () => {
  const theme = body.dataset.theme;
  if (theme !== undefined) {
    delete body.dataset.theme;
  } else {
    body.dataset.theme = 'dark';
  }
});
