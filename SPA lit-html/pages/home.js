import { html, render } from '../node_modules/lit-html/lit-html.js';
const homeSection = document.querySelector('#home');
const aboutSection = document.querySelector('#about');
const contactSection = document.querySelector('#contacts');
const insertToHtml = document.querySelector('#show');
const htmlShow = input => html`<h1>one Print ${input}</h1>`;
export function home() {
  aboutSection.style.display = 'none';
  contactSection.style.display = 'none';
  homeSection.style.display = 'block';
  render(htmlShow('Vikito'), insertToHtml);
}
