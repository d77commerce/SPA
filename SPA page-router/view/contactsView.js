import { html, render } from '../node_modules/lit-html/lit-html.js';
const divEl = document.querySelector('#show');

const contactsEl = () => html`<h1>CONTACTS</h1>
  <form>
    <label for="fname">First name:</label><br />
    <input type="text" id="fname" name="fname" /><br />
    <label for="lname">Last name:</label><br />
    <input type="text" id="lname" name="lname" /><br />
    <label type="text">Email</label><br />
    <input type="email" id="email" /><br />
    <label type="text">Your message</label><br />
    <textarea
      rows="4"
      cols="50"
      name="comment"
      form="usrform"
      placeholder="Enter text here..."
    ></textarea
    ><br /><br />

    <input type="submit" value="Submit" />
  </form>`;

export const contacts = ctx => {
  console.log('contacts');
  render(contactsEl(), divEl);
  //divEl.innerHTML = contactsEl;
};
