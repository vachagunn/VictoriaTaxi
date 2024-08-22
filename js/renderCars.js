const cars = [
  {
    brand: "Kia",
    model: "Rio",
    image: "kia_rio.jpeg",
    class: "Эконом",
    price: 2500,
  },
  {
    brand: "Kia",
    model: "Cerato",
    image: "kia_cerato.jpg",
    class: "Комфорт",
    price: 3000,
  },
  {
    brand: "Geely",
    model: "Emgrand",
    image: "geely_emgrand.jpg",
    class: "Комфорт +",
    price: 3500,
  },
  {
    brand: "Kia",
    model: "K5",
    image: "kia_k5.jpg",
    class: "Бизнес",
    price: 4000,
  },
];

const carContainer = document.getElementById("cars__cards");

cars.forEach((car) => {
  const card = `<a href="#!" class="card">
    <img
      class="card__image"
      src="./img/cards/${car.image}"
      alt="${car.brand} ${car.model}"
    />
    <h3 class="card__title">${car.class}</h3>
    <h5 class="card__price">
      от <span class="bold">${car.price} ₽</span> в сутки
    </h5>
  </a>`;

  carContainer.innerHTML += card;
});
