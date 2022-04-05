import { html, render } from '../node_modules/lit-html/lit-html.js';

const insertToHtml = document.querySelector('#show');
const htmlShow = input => html` <h2>${input}</h2>
  <div>
    <p>CONTACTS</p>
    <p>
      Yearly view – contains a list of months for the selected year. Clicking on
      any of the months should switch to the monthly view. Clicking the year
      (top part of the table) while in the yearly view returns the user to the
      list of years. Monthly view – contains a calendar with all dates for the
      selected month, arranged as weekdays. Clicking the month (top part of the
      table) while in the monthly view returns the user to the list of months.
      Cookbook – Part 3 The resources for this task are available in the
      following GitHub repository: https://github.com/viktorpts/js-apps-workshop
      You may check-out the repository or download the files via the green
      button labeled “Code” in the upper-right corner. Use the files located in
      lesson-04/base to begin the task. Before starting, make sure you have the
      most recent version of the repository. To see the solution, check the
      files inside lesson-04/finished. Let's write more functionalities for this
      task and extend the application. In this task we will write the
      functionalities for editing and deleting recipies. Code Refactoring
      Rewrite the application, so that it is a single-page application, using
      modules with import/export statements. There will be a single HTML file,
      containing all resources and the views will be dynamically generated via
      JavaScript. Recipe Details Instead of expanding in the Catalog view,
      clicking on a recipe preview changes the view to a details page. Edit
      Recipe (only for the creator) By clicking on the recipie you can see the
      details for it, and if you are the creator of this recipe you have to be
      able to edit and delete it (the two buttons bottom-right are visible) On
      click the "Edit" button you are redirected to the edit page and all the
      details of the recipe should be filled up in the input fields. When
      "Update recipe" button is clicked, the app sends PUT request to the
      back-end and updates the recipe. After that, redirect to details page.
      Delete Recipe (only for the creator) By clicking on "Del
    </p>
  </div>`;
export function contacts(input) {
  render(htmlShow(input), insertToHtml);
}
