import { html, render } from '../node_modules/lit-html/lit-html.js';
const homeSection = document.querySelector('#home');
const aboutSection = document.querySelector('#about');
const contactSection = document.querySelector('#contacts');
const insertToHtml = document.querySelector('#show');
const htmlShow = input => html` <h2>${input}</h2>
  <div>
    <p>ABOUT US</p>
    <p>
      https://github.com/viktorpts/js-apps-workshop You may check-out the
      repository or download the files via the green button labeled “Code” in
      the upper-right corner. Use the files located in lesson-04/base to begin
      the task. Before starting, make sure you have the most recent version of
      the repository. To see the solution, check the files inside
      lesson-04/finished. Let's write more functionalities for this task and
      extend the application. In this task we will write the functionalities for
      editing and deleting recipies. Code Refactoring Rewrite the application,
      so that it is a single-page application, using modules with import/export
      statements. There will be a single HTML file, containing all resources and
      the views will be dynamically generated via JavaScript. Recipe Details
      Instead of expanding in the Catalog view, clicking on a recipe preview
      changes the view to a details page. Edit Recipe (only for the creator) By
      clicking on the recipie you can see the details for it, and if you are the
      creator of this recipe you have to be able to edit and delete it (the two
      buttons bottom-right are visible) On click the "Edit" button you are
      redirected to the edit page and all the details of the recipe should be
      filled up in the input fields. When "Update recipe" button is clicked, the
      app sends PUT request to the back-end and updates the recipe. After that,
      redirect to details page. Delete Recipe (only for the creator) By clicking
      on "Del
    </p>
  </div>`;
export function aboutUs(input) {
  render(htmlShow(input), insertToHtml);
}
