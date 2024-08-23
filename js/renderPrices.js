import { cars } from "./data/carsData.js";

const priceTable = document.getElementById("price__table");

const calculatePrice = (price, percent) => {
  return Math.round((price - price * percent) / 100) * 100;
};

cars.forEach((car) => {
  const priceRow = `
    <tr>
      <td>${car.brand} ${car.model}</td>
      <td>${car.price} ₽</td>
      <td>${calculatePrice(car.price, 0.05)} ₽</td>
      <td>${calculatePrice(car.price, 0.1)} ₽</td>
      <td>${calculatePrice(car.price, 0.15)} ₽</td>
      <td>${calculatePrice(car.price, 0.2)} ₽</td>
    </tr>
  `;

  priceTable.innerHTML += priceRow;
});
