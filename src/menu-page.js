export default function menuPage() {
  const leftContent = document.querySelector(".left-content");
  leftContent.innerHTML = "";

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");
  leftContent.appendChild(menuContainer);

  const leftSide = document.createElement("div");
  leftSide.classList.add("left-dishes");
  menuContainer.appendChild(leftSide);

  const rightSide = document.createElement("div");
  rightSide.classList.add("right-dishes");
  menuContainer.appendChild(rightSide);

  const dish1 = document.createElement("div");
  const title1 = document.createElement("h2");
  const description1 = document.createElement("p");
  dish1.classList.add("dish-container");
  title1.classList.add("dish-title");
  title1.textContent = "Roasted Lemon Herb Chicken";
  description1.classList.add("dish-description");
  description1.textContent =
    "Tender chicken marinated with zesty lemon and aromatic herbs, slow-roasted to perfection, and served with a side of garlic mashed potatoes and seasonal vegetables.";
  leftSide.appendChild(dish1);
  dish1.appendChild(title1);
  dish1.appendChild(description1);

  const dish2 = document.createElement("div");
  const title2 = document.createElement("h2");
  const description2 = document.createElement("p");
  dish2.classList.add("dish-container");
  title2.classList.add("dish-title");
  title2.textContent = "Crispy Parmesan Chicken Tenders";
  description2.classList.add("dish-description");
  description2.textContent =
    "Crispy breaded chicken tenders seasoned with Parmesan cheese and served with a tangy honey mustard dipping sauce, along with a fresh garden salad.";
  leftSide.appendChild(dish2);
  dish2.appendChild(title2);
  dish2.appendChild(description2);

  const dish3 = document.createElement("div");
  const title3 = document.createElement("h2");
  const description3 = document.createElement("p");
  dish3.classList.add("dish-container");
  title3.classList.add("dish-title");
  title3.textContent = "BBQ Pulled Chicken Sandwich";
  description3.classList.add("dish-description");
  description3.textContent =
    "Succulent pulled chicken smothered in smoky barbecue sauce, piled high on a toasted brioche bun, and served with coleslaw and seasoned fries.";
  leftSide.appendChild(dish3);
  dish3.appendChild(title3);
  dish3.appendChild(description3);

  const dish4 = document.createElement("div");
  const title4 = document.createElement("h2");
  const description4 = document.createElement("p");
  dish4.classList.add("dish-container");
  title4.classList.add("dish-title");
  title4.textContent = "Mediterranean Grilled Chicken Salad";
  description4.classList.add("dish-description");
  description4.textContent =
    "Grilled chicken breast atop a bed of mixed greens, cherry tomatoes, cucumbers, Kalamata olives, feta cheese, and drizzled with a tangy lemon-herb vinaigrette.";
  rightSide.appendChild(dish4);
  dish4.appendChild(title4);
  dish4.appendChild(description4);

  const dish5 = document.createElement("div");
  const title5 = document.createElement("h2");
  const description5 = document.createElement("p");
  dish5.classList.add("dish-container");
  title5.classList.add("dish-title");
  title5.textContent = "Thai Coconut Curry Chicken";
  description5.classList.add("dish-description");
  description5.textContent =
    "Fragrant Thai curry infused with coconut milk, tender chicken, bell peppers, and bamboo shoots, served over steamed jasmine rice and garnished with fresh cilantro.";
  rightSide.appendChild(dish5);
  dish5.appendChild(title5);
  dish5.appendChild(description5);

  const dish6 = document.createElement("div");
  const title6 = document.createElement("h2");
  const description6 = document.createElement("p");
  dish6.classList.add("dish-container");
  title6.classList.add("dish-title");
  title6.textContent = "Pesto Chicken Alfredo Pasta";
  description6.classList.add("dish-description");
  description6.textContent =
    "Grilled chicken tossed in a creamy pesto Alfredo sauce with fettuccine pasta, cherry tomatoes, and baby spinach, sprinkled with grated Parmesan cheese.";
  rightSide.appendChild(dish6);
  dish6.appendChild(title6);
  dish6.appendChild(description6);
}
