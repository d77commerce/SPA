const divEl = document.querySelector('#show');

export const contactsEl = `<h1>CONTACTS</h1>
  <p>just text</p>`;

export const contacts = ctx => {
  console.log('contacts');
  divEl.innerHTML = contactsEl;
};
