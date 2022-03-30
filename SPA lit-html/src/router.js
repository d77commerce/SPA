import { home } from '../pages/home.js';
import { contacts } from '../pages/contacts.js';
import { aboutUs } from '../pages/aboutUs.js';

export function rauter(page) {
  const curentPage = page;
  if (curentPage === 'HOME') {
    home('HOME');
  } else if (curentPage === 'Contacts') {
    contacts('Contacts');
  } else if (curentPage == 'about') {
    aboutUs('About Us');
  }
}
