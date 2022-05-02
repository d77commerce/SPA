import { html, render } from '../node_modules/lit-html/lit-html.js';
const divEl = document.querySelector('#show');

const homeEl = () => html`<h1>HOME</h1>
  <p>just text</p>`;

export const home = ctx => {
  console.log('home');
  render(homeEl(), divEl);
};
