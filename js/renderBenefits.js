const benefits = [
  { title: "Новые автомобили", image: "new.svg" },
  { title: "Залог 10 000 ₽", image: "coins.svg" },
  { title: "Страховка для спокойствия", image: "shield.svg" },
  { title: "Выдача в любом месте", image: "location.svg" },
];

const benefitsContainer = document.getElementById("benefits__row");

benefits.forEach((benefit) => {
  const card = `
    <div class="benefits__item">
      <img
          src="./img/benefits/${benefit.image}"
          alt="${benefit.title}"
          class="benefits__item-img"
      />
      <p class="benefits__item-text">${benefit.title}</p>
    </div>`;

  benefitsContainer.innerHTML += card;
});
