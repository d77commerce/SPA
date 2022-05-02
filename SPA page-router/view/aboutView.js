import { html, render } from '../node_modules/lit-html/lit-html.js';
const divEl = document.querySelector('#show');

const aboutEl = () => html`<h1>about</h1>
  <p>just text</p>`;

export const about = ctx => {
  console.log('about');
  render(aboutEl(), divEl);
};
