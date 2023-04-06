/*
  To complete these exercises use vscode-live-server plugin to get live updates of your changes.
  - Install the Live Server plugin
  - Right click on index.html and select "Open with Live Server"
*/

/*
Task 1
=======

Write JavaScript below that console.logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotronText"
    --> should log the "#jumbotronText" node

    4. all the "p" elements of contained inside the .primary-content element node
    --> should log a list of nodes with a length of 3

*/

const elements = document.querySelectorAll("p");
for (const element of elements) {
  console.log(element);
}

const firstElement = document.querySelector("div");
console.log(firstElement);

// const elementsInner = document.querySelectorAll("p");
// for (const element of elements) {
//   console.log(element.innerText);
// }

const jumbotronText = document.querySelector("#jumbotronText");
console.log(jumbotronText);

const itemsClass = document.querySelectorAll(".primary-content");
for (const item of itemsClass) {
  console.log(item);
}

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

let alertBtn = document.querySelector("#alertBtn");

alertBtn.addEventListener("click", function () {
  alert("Thanks for visiting Bikes for Refugees!");
});

/*
Task 3
=======

When a user clicks the 'Change colour' button, the background colour of the page should change to red.
Hint: can you do this with a CSS class instead of adding styles to the element?
*/

let makeRed = document.querySelector("#bgrChangeBtn");

makeRed.addEventListener("click", function () {
  document.body.classList.add("background--red");
});

/*
Task 4
======

When a user clicks the 'Larger links!' button, the text of all links on the page should increase.
*/

let largerLinksBtn = document.querySelector("#largerLinksBtn");

largerLinksBtn.addEventListener("click", function () {
  for (const link of document.querySelectorAll("a")) {
    link.classList.add("larger");
    //console.log(link.classList);
  }
});

/*
Task 5
======

When a user clicks the 'Add some text' button, the text in the input field should be appended to the page as a new paragraph below it.
Hint: the new paragraph should be appended to the element with id 'addArticle'.
*/

addArticleBtn.addEventListener("click", function (event) {
  event.preventDefault(); // prevents page from refreshing when we click the button

  const inputElement = document.querySelector("#addArticleInput");

  // create a new paragraph element
  const pElement = document.createElement("p");
  // set the innerText to be the input's value
  pElement.innerText = inputElement.value;
  // add it to the page
  document.getElementById("addArticle").appendChild(pElement);
});
