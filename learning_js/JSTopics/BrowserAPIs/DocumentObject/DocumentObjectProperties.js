// DOM: Document Object Model -

// Select Element:
// <h1 id="title">Hello World</h1>
// const title = document.getElementById("title");
// console.log(title);

// Change Text:
// const title = document.getElementById("title");
// title.textContent = "Hello JavaScript";

// querySelector:
// <h1 class="title">Hello</h1>
// const title = document.querySelector(".title");

// change CSS:
// title.style.color = "red";

// create an Element:
const paragraph = document.createElement("p");
paragraph.textContent = "Welcome to Javascript";
document.body.appendChild(paragraph);

// Example: Create Product Card:
const card = document.createElement("div");

card.innerHTML = `
    <h2>{$product.name}</h2>
    <p>{$product.price}</p>
`;

document.appendChild(card);

// Forms:
const input = document.querySelector("#username");
console.log(input.value);

// Get Multiple Elements: all buttons will be selected
const buttons = document.querySelectorAll("button");
console.log(buttons);

// Remove Elements: The element disappears from the DOM.
const element = document.querySelector(".card");
element.remove();

// Window vs Document:
// Think: window is like Browser/Tab
// Think: DOM means HTML Page inside that browser/tab.


