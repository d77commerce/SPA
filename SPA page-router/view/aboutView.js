const divEl = document.querySelector('#show');

const aboutEl = `<h1>about</h1>
  <p>just text</p>`;

export const about = ctx => {
  console.log('about');
  divEl.innerHTML = aboutEl;
};
