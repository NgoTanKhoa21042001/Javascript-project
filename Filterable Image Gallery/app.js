const filterButtons = document.querySelectorAll(".filter_buttons button");

const filterableCards = document.querySelectorAll(".filterable_cards .card");

// console.log(filterButtons, filterableCards);

// const filterCards = (e) => {
//   document.querySelector(".active").classList.remove("active");

//   e.target.classList.add("active");

//   filterableCards.forEach((card) => {
//     // add hide class to hide the card initially
//     card.classList.add("hidden");

//     if (
//       card.dataset.name === e.target.dataset.name ||
//       e.target.dataset.name === "all"
//     ) {
//       card.classList.remove("hidden");
//     }
//   });
// };
// filterButtons.forEach((button) =>
//   button.addEventListener("click", filterCards)
// );

const filterCards = (e) => {
  document.querySelector(".active").classList.remove("active");

  e.target.classList.add("active");

  filterableCards.forEach((card) => {
    card.classList.add("hidden");
    if (
      card.dataset.name === e.target.dataset.name ||
      e.target.dataset.name === "all"
    ) {
      card.classList.remove("hidden");
    }
  });
};

filterButtons.forEach((button) =>
  button.addEventListener("click", filterCards)
);
