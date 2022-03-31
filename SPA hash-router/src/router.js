import { html, render } from '../node_modules/lit-html/lit-html.js';
import { htmlHome } from '../pages/home.js';
import { pageOne } from '../pages/pageOne.js';
import { pageTwo } from '../pages/pageTwo.js';
let insertToHtml = document.querySelector('#root');
const routes = {
  '#home': htmlHome(),
  '#pageOne': pageOne(),
  '#pageTwo': pageTwo(),
};
htmlHome();
export function router(input) {
  render(routes[input], insertToHtml);
  //insertToHtml.innerHTML = routes[input];
}
