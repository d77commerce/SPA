import { home } from '../pages/home.js';
import { contacts } from '../pages/contacts.js';
import { aboutUs } from '../pages/aboutUs.js';

export function rauter(page) {
  const curentPage = page;
  if (curentPage === 'HOME') {
    home();
  } else if (curentPage === 'Contacts') {
    contacts('Mikele Plachdo');
  } else if (curentPage == 'about') {
    aboutUs();
  }
}
