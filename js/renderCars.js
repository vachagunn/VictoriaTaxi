import { cars } from "./data/carsData.js";

const carContainer = document.getElementById("cars__cards");

// Переход на подробную информаию по автомобилю и аренде
const goToCarPage = (page) => {
  window.location.href = page;
};

cars.forEach((car) => {
  const template = `
    <img
      class="card__image"
      src="./img/cards/${car.image}"
      alt="${car.brand} ${car.model}"
    />
    <h3 class="card__title">${car.brand} ${car.model}</h3>
    <h5 class="card__price">
      от <span class="bold">${car.price} ₽</span> в сутки
    </h5>
    `;

  const card = document.createElement("div");
  card.className = "card";
  card.onclick = () => goToCarPage(`../pages/${car.link}.html`);

  card.innerHTML = template;

  carContainer.appendChild(card);
});
