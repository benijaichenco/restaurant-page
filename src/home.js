export default function homePage() {
  const title = document.createElement("h1");
  const leftContent = document.querySelector(".left-content");
  title.classList.add("home-title");

  title.textContent = "This has changed";

  leftContent.appendChild("title");
}
