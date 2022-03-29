import { rauter } from './router.js';
rauter('HOME');
const navAction = document.querySelector('.navigation');
navAction.addEventListener('click', e => {
  e.preventDefault();
  rauter(e.target.textContent);

  console.log(e.target.textContent);
});
