import { html, render } from '../node_modules/lit-html/lit-html.js';
const homeSection = document.querySelector('#home');
const aboutSection = document.querySelector('#about');
const contactSection = document.querySelector('#contacts');
const insertToHtml = document.querySelector('#show');
const htmlShow = input => html`<h1>one Print ${input}</h1>`;
export function contacts(input) {
  aboutSection.style.display = 'none';
  contactSection.style.display = 'block';
  homeSection.style.display = 'none';
  render(htmlShow(input), insertToHtml);
}
