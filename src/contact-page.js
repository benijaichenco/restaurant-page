export default function contactPage() {
  const leftSide = document.querySelector(".left-content");
  leftSide.innerHTML = "";

  const openingTimes = document.createElement("div");
  openingTimes.classList.add("opening-times");

  const title = document.createElement("h2");
  title.classList.add("title");
  title.textContent = "Opening Times";

  const hours = document.createElement("p");
  hours.classList.add("hours");
  hours.innerHTML =
    "Sunday - Wednesday: 18:00 - 22:00 <br> Thurdsay - Friday: 20:00 - 03:00";

  leftSide.appendChild(openingTimes);
  openingTimes.appendChild(title);
  openingTimes.appendChild(hours);

  const address = document.createElement("h2");
  address.classList.add("address");
  address.textContent = "Elm Street, 18, Hell, Planet Earth.";
  leftSide.appendChild(address);

  const phone = document.createElement("h2");
  phone.classList.add("phone");
  phone.textContent = "666 - 666 - 666";
  leftSide.appendChild(phone);
}
