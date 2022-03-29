const homeSection = document.querySelector('#home');
const aboutSection = document.querySelector('#about');
const contactSection = document.querySelector('#contacts');
export function contacts() {
  aboutSection.style.display = 'none';
  contactSection.style.display = 'block';
  homeSection.style.display = 'none';
}
