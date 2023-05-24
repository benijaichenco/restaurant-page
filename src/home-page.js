export default function homePage() {
  const leftContent = document.querySelector(".left-content");
  const title = document.createElement("h1");
  const subtext = document.createElement("p");

  leftContent.innerHTML = "";
  title.textContent = "Poultry Deli Restaurant";
  subtext.innerHTML =
    "Welcome to Poultry Deli Restaurant. <br> Established in 2023, Poultry Deli Restaurant pairs unparalleled menu and a fine <br> website, with an intimate ambience, virtually only.";

  leftContent.appendChild(title);
  leftContent.appendChild(subtext);
  console.log("clicked");
}
