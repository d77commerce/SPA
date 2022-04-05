import { html, render } from '../node_modules/lit-html/lit-html.js';

const insertToHtml = document.querySelector('#show');
const insertBtn = document.querySelector('#showBtn');
const htmlShow = input => html` <h2>${input}</h2>
  <div>
    <p>HOME</p>
    <p>
      Firmware for HP Designjet L25500 60-in This download includes the latest
      firmware file for the H Designjet L25500 Printer Series Compatible devices
      CH956A, CQ162A Legal information: All software on DriversCollection.com
      are free of charge type. All brands and logos are property of their
      owners. Attention: Some software were taken from unsecure sources. We do
      not guarantee its workability and compatibility. Always check downloaded
      files with antivirus software. We do not cover any losses spend by its
      installation. Downloading files from DriversCollection.com means you are
      informed about it and agree to Agreement. s page. Delete Recipe (only for
      the creator) By clicking on "Del
    </p>
    <form id=${'form'}>
      <input id=${'inputBtn'} />
      <button @click=${e => onClick(e)}>add</button>
    </form>
  </div>`;
export function home(input) {
  render(htmlShow(input), insertToHtml);
}
function onClick(e) {
  e.preventDefault();
  let showText = document.querySelector('#inputBtn').value;
  const outPut = () => html`<h1>${showText}</h1>`;
  render(outPut(), insertBtn);
  console.log('one');
}
