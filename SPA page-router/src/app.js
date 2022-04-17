import page from '../node_modules/page/page.mjs';
import { home } from '../view/homeView.js';
import { about } from '../view/aboutView.js';
import { contacts } from '../view/contactsView.js';

page('/home', home);
page('/about', about);
page('/contacts', contacts);
page.start();
