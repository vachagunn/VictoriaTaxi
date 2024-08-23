import { cars } from "./data/carsData.js";

const carContainer = document.getElementById("cars__cards");

cars.forEach((car) => {
  const card = `<a href="#!" class="card">
    <img
      class="card__image"
      src="./img/cards/${car.image}"
      alt="${car.brand} ${car.model}"
    />
    <h3 class="card__title">${car.brand} ${car.model}</h3>
    <h5 class="card__price">
      от <span class="bold">${car.price} ₽</span> в сутки
    </h5>
  </a>`;

  carContainer.innerHTML += card;
});
