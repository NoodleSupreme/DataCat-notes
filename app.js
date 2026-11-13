cart = [];

balatro = [
  { name: "Jimbo", type: "Joker", img: `Joker.jpg`, cost: 2 },

  { name: "Gros Michel", type: "Joker", img: "Gros Michel.jpg", cost: 4 },

  { name: "Supernova", type: "Joker", img: "Supernova.jpg", cost: 4 },

  { name: "DNA", type: "Joker", img: "DNA.jpg", cost: 8 },

  { name: "8-Ball", type: "Joker", img: "8-Ball.jpg", cost: 4 },

  { name: "Acrobat", type: "Joker", img: "Acrobat.jpg", cost: 5 },

  { name: "Ice Cream", type: "Joker", img: "Ice Cream.jpg", cost: 2 },

  { name: "Hanging Chad", type: "Joker", img: "Hanging Chad.jpg", cost: 6 },

  { name: "Photograph", type: "Joker", img: "Photograph.jpg", cost: 6 },

  { name: "Hologram", type: "Joker", img: "Hologram.jpg", cost: 8 },

  { name: "Mime", type: "Joker", img: "Mime.jpg", cost: 7 },

  { name: "Blueprint", type: "Joker", img: "Blueprint.jpg", cost: 12 },

  { name: "Chico", type: "Joker", img: "Chico.jpg", cost: 18 },

  { name: "The Emporer", type: "Tarot", img: "Emporer.jpg", cost: 4 },

  { name: "Death", type: "Tarot", img: "Death.jpg", cost: 10 },

  {
    name: "Wheel Of Fortune",
    img: "Wheel Of Fortune.jpg",
    type: "Tarot",
    cost: 3,
  },

  { name: "Jupiter", type: "Planet", img: "Jupiter.jpg", cost: 2 },

  { name: "Pluto", type: "Planet", img: "Pluto.jpg", cost: 1 },

  { name: "Ectoplasm", type: "Spectral", img: "Ectoplasm.jpg", cost: 6 },

  { name: "Cryptid", type: "Spectral", img: "Cryptid.jpg", cost: 3 },
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
        <img src="${balatro.img}" alt="buffoon">
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
