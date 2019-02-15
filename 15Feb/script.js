// Add the jQuery CDN to your HTML file


// ------- ONE ------//
// Copy and paste the following HTML into your index.html file:
// <article id="blog-article"></article>

// Use jQuery to select your article element by its id

const article = $("#blog-article")

// Use the .html() method to give your article Element the following HTML contents:

// - An h3  element with a made-up blog title
// - A p element with some lorem ipsum text

article.html("<h3>This is the most Awesome Blog</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>")

// ------ TWO ------//
// Copy and paste the following code into your HTML file:
// <input type="text" id="name-input">
// <button id="submit-button"></button>
// <div id="output"></div>

// Add a click event to the button.

$("#submit-button").click(()=>{

//  When the user clicks on it, use the .val() method to get the value of the #name-input element
const nameInput =$("#name-input").val()

// Once you've captured the user's input, use the .text() property to add some text to the #output div
$("#output").text(nameInput)

})

