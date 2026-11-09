cart = {};

balatro = [
  { name: "Jimbo", type: "Joker", cost: 2 },
  { name: "Gros Michel", type: "Joker", cost: 4 }, // i love this joker
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
/*
function addtocart(item) {
  for (i = 0; i <= balatro.length; i++)
    if (item === balatro[i].name) {
      cart.push(item);
    }
}

addtocart("DNA");

/*
balatro.forEach(function(item) {
console.log(item.name + " $" + item.cost);
})
*/

function inject(item) {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
        <h2 class="card-header">${item.name}</h2>
        <img src="${item.img}" alt="" />
        <p>filler filler filler</p>
      </div> `,
  );
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) =>
  button.addEventListener("click", function (event) {
    console.log(event.target.closest(".card").getAttribute("data-item"));
  }),
);
