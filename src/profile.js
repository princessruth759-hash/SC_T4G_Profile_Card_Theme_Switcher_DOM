// DAY 5 CLASS ASSIGNMENT: THE PROFILE CARD MODDER
// INSTRUCTIONS: Fill in the missing DOM selectors and style rules!

const username = "Princess";

// TASK 1: Access the document body element and change its background color to '#0f172a'
document.body.style.backgroundColor = "#0f172a";

// TASK 2: Use getElementById to select the element with the ID "main-heading"
// Change its innerText to your own full name.
const heading = document.getElementById("main-heading");
heading.innerText = `Hey ${username}`;

// TASK 3: Use querySelector to grab the element with the class ".badge"
// Change its background color to "purple" and its text color to "white"
const badge = document.querySelector(".badge");
badge.style.backgroundColor = "purple";
badge.style.color = "white";

// TASK 4: Use getElementById to select "status-text"
// Use .innerHTML to change the text to show a glowing online status badge:
const statusText = document.getElementById("status-text");
statusText.innerHTML = "Status: <span style='color: #10b981; font-weight: bold;'>ONLINE</span>";

// TASK 5: Use querySelector to select the entire ".card-container"
// Use .classList.add() to apply the pre-written CSS class: "dark-theme-card"
const cardContainer = document.querySelector(".card-container");
cardContainer.classList.add("dark-theme-card");

// TASK 6: Select the first "span" tag using getElementsByTagName
// Use .parentElement to find the card container, and change its border radius to "30px"
const firstSkillTag = document.getElementsByTagName("span")[0];
firstSkillTag.parentElement.parentElement.style.borderRadius = "30px";
