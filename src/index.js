import homePage from "./home-page.js";
import menuPage from "./menu-page.js";
import contactPage from "./contact-page.js";
import "./style.css";
import food from "./food.jpg";

const content = document.querySelector("#content");
const leftContainer = document.createElement("div");
const rightContainer = document.createElement("div");
const mainFood = document.createElement("img");
const header = document.createElement("h1");
const paragraph = document.createElement("p");
const headerTab = document.createElement("div");
const leftContent = document.createElement("div");
const home = document.createElement("button");
const menu = document.createElement("button");
const contact = document.createElement("button");

leftContainer.classList.add("left-container");
rightContainer.classList.add("right-container");
leftContent.classList.add("left-content");
headerTab.classList.add("header-tab");
home.classList.add("home");
menu.classList.add("menu");
contact.classList.add("contact");
home.textContent = "Home";
menu.textContent = "Menu";
contact.textContent = "Contact";
mainFood.src = food;
mainFood.classList.add("main-food");

content.appendChild(leftContainer);
content.appendChild(rightContainer);
leftContainer.appendChild(headerTab);
leftContainer.appendChild(leftContent);
leftContent.appendChild(header);
leftContent.appendChild(paragraph);
rightContainer.appendChild(mainFood);
headerTab.appendChild(home);
headerTab.appendChild(menu);
headerTab.appendChild(contact);

window.onload = homePage;

home.onclick = homePage;

menu.onclick = menuPage;

contact.onclick = contactPage;
