const homeSection = document.querySelector('#home');
const aboutSection = document.querySelector('#about');
const contactSection = document.querySelector('#contacts');
export function aboutUs() {
  aboutSection.style.display = 'block';
  contactSection.style.display = 'none';
  homeSection.style.display = 'none';
}
