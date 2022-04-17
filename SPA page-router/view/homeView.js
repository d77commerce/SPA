const divEl = document.querySelector('#show');

const homeEl = `<h1>HOME</h1>
  <p>just text</p>`;

export const home = ctx => {
  console.log('home');
  divEl.innerHTML = homeEl;
};
