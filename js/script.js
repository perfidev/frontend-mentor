import solutions from "./data.js";

const card = (solution) => {
  const container = document.querySelector(".container");
  const name = solution.name;
  const img = solution.img;
  const deploy = solution.deploy;
  const repo = solution.repo;

  const divCard = `
    <div class="card">
      <div class="card__image">
        <img src="${img}" alt="${name} design picture" />
      </div>

      <div class="card__content">
        <h2 class="heading-secondary">${name}</h2>
        <div class="card__content__buttons">
          <a href="${deploy}" class="btn">View</a>
          <a href="${repo}" class="btn">Code</a>
        </div>
      </div>
    </div>
  `;

  container.insertAdjacentHTML("beforeend", divCard);
};

solutions.forEach((solution) => {
  card(solution);
});
