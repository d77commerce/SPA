import { router } from './router.js';
window.addEventListener('hashchange', ev => {
  console.log(location.hash);
  router(location.hash);
});
