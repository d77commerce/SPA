const homeSection = document.querySelector('#home');
const aboutSection = document.querySelector('#about');
const contactSection = document.querySelector('#contacts');
export function home() {
  aboutSection.style.display = 'none';
  contactSection.style.display = 'none';
  homeSection.style.display = 'block';
}
