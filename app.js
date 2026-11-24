const cart = [];

const balatro = [
  { name: "Jimbo", type: "Joker", img: "Joker.jpg", cost: 2 },
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
  { name: "Chicot", type: "Joker", img: "Chicot.jpg", cost: 18 },
  { name: "The Emporer", type: "Tarot", img: "The Emporer.jpg", cost: 4 },
  { name: "Death", type: "Tarot", img: "Death.jpg", cost: 10 },
  {
    name: "Wheely Fortune",
    type: "Tarot",
    img: "Wheel Of Fortune.jpg",
    cost: 3,
  },
  { name: "Jupiter", type: "Planet", img: "Jupiter.jpg", cost: 2 },
  { name: "Pluto", type: "Planet", img: "Pluto.jpg", cost: 1 },
  { name: "Ectoplasm", type: "Spectral", img: "Ectoplasm.jpg", cost: 6 },
  { name: "Cryptid", type: "Spectral", img: "Cryptid.jpg", cost: 3 },
];

const itemfilters = [
  { label: "All items", matches: () => true },
  { label: "Jokers", matches: (item) => item.type === "Joker" },
  { label: "Tarot", matches: (item) => item.type === "Tarot" },
  { label: "Planets", matches: (item) => item.type === "Planet" },
  { label: "Spectral", matches: (item) => item.type === "Spectral" },
];

const container = document.querySelector(".container");
const itemList = document.querySelector(".item-list");
const filterTabs = document.querySelector(".filter-tabs");
let activeFilterIndex = 0;

function filters() {
  itemfilters.forEach((filter, index) => {
    filterTabs.insertAdjacentHTML(
      "beforeend",
      `<button class="filter-tab" type="button" data-filter-index="${index}" aria-pressed="${index === activeFilterIndex}">
        ${filter.label}
      </button>`,
    );
  });
}

function Items() {
  itemList.replaceChildren();
  balatro.forEach((item, index) => {
    if (!itemfilters[activeFilterIndex].matches(item)) return;

    itemList.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
        <h2 class="card-header">${item.name}</h2>
        <p class="cost">$${item.cost}</p>
        <img src="${item.img}" style="width: 50%; height: auto;" alt="${item.name}">
        <button class="buybtn" data-item-index="${index}">Add to cart</button>
      </div>`,
    );
  });
}

function injectcheckout() {
  container.insertAdjacentHTML(
    "beforeend",
    `<section class="checkout" aria-labelledby="checkout-heading">
      <h2 class="checkouttext" id="checkout-heading">Cart (<span class="cart-count">0</span>)</h2>
      <div class="cart-items" aria-live="polite"></div>
      <p class="cart-total">Total: $<span>0</span></p>
    </section>`,
  );
}

function addtocart(index) {
  const item = balatro[index];
  const cartItem = cart.find((entry) => entry.name === item.name);

  if (cartItem) {
    cartItem.quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }

  renderCart();
}

function updateQuantity(name, change) {
  const cartItem = cart.find((entry) => entry.name === name);
  if (!cartItem) return;

  cartItem.quantity += change;
  if (cartItem.quantity <= 0) {
    cart.splice(cart.indexOf(cartItem), 1);
  }

  renderCart();
}

function renderCart() {
  const cartItems = document.querySelector(".cart-items");
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const total = cart.reduce((sum, item) => sum + item.cost * item.quantity, 0);

  document.querySelector(".cart-count").textContent = itemCount;
  document.querySelector(".cart-total span").textContent = total;
  cartItems.replaceChildren();

  if (cart.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.textContent = "Your cart is empty.";
    cartItems.append(emptyMessage);
    return;
  }

  cart.forEach((item) => {
    const row = document.createElement("div");
    row.className = "cart-item";

    const description = document.createElement("span");
    description.textContent = `${item.name} — $${item.cost} × ${item.quantity}`;

    const decreaseButton = document.createElement("button");
    decreaseButton.type = "button";
    decreaseButton.textContent = "−";
    decreaseButton.setAttribute("aria-label", `Remove one ${item.name}`);
    decreaseButton.addEventListener("click", () =>
      updateQuantity(item.name, -1),
    );

    const increaseButton = document.createElement("button");
    increaseButton.type = "button";
    increaseButton.textContent = "+";

    increaseButton.addEventListener("click", () =>
      updateQuantity(item.name, 1),
    );

    row.append(description, decreaseButton, increaseButton);
    cartItems.append(row);
  });
}

filters();
Items();
injectcheckout();
filterTabs.addEventListener("click", (event) => {
  const button = event.target.closest(".filter-tab");
  if (!button) return;

  activeFilterIndex = Number(button.dataset.filterIndex);
  filterTabs.querySelectorAll(".filter-tab").forEach((tab, index) => {
    tab.setAttribute("aria-pressed", String(index === activeFilterIndex));
  });
  Items();
});
container.addEventListener("click", (event) => {
  const button = event.target.closest(".buybtn");
  if (button) addtocart(Number(button.dataset.itemIndex));
});
renderCart();
