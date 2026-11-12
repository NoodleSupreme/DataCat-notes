cart = [];

balatro = [
  { name: "Jimbo", type: "Joker", cost: 2 },

  { name: "Gros Michel", type: "Joker", cost: 4 },

  { name: "Supernova", type: "Joker", cost: 4 },

  { name: "DNA", type: "Joker", cost: 8 },

  { name: "8-Ball", type: "Joker", cost: 4 },

  { name: "Acrobat", type: "Joker", cost: 5 },

  { name: "Ice Cream", type: "Joker", cost: 2 },

  { name: "Hanging Chad", type: "Joker", cost: 6 },

  { name: "Photograph", type: "Joker", cost: 6 },

  { name: "Hologram", type: "Joker", cost: 8 },

  { name: "Mime", type: "Joker", cost: 7 },

  { name: "Blueprint", type: "Joker", cost: 12 },

  { name: "Chico", type: "Joker", cost: 18 },

  { name: "The Emporer", type: "Tarot", cost: 4 },

  { name: "Death", type: "Tarot", cost: 10 },

  { name: "Wheel Of Fortune", type: "Tarot", cost: 3 },

  { name: "Jupiter", type: "Planet", cost: 2 },

  { name: "Pluto", type: "Planet", cost: 1 },

  { name: "Ectoplasm", type: "Spectral", cost: 6 },

  { name: "Cryptid", type: "Spectral", cost: 3 },
];

// function addtocart(selecteditem) {
//   cart.push(selecteditem);
//   console.log(cart);
// }
// addtocart("Blueprint");

function inject() {
  const container = document.querySelector(".container");
  balatro.forEach((balatro) => {
    container.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
        <h2 class="card-header">${balatro.name}</h2>
        <img src="${balatro.name}.jpg">
        <p>${balatro.cost}</p>
      </div> `,
    );
  });
}
inject();
/*
const buttons = document.querySelectorAll("button");
buttons.forEach((button) =>
  button.addEventListener("click", function (event) {
    console.log(event.target.closest(".card").getAttribute("data-item"));
  }),
);
*/
