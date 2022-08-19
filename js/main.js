import { items } from "./items.js";

const cards_container = document.getElementById("items");
const card = document.getElementById("card");
const photo = document.getElementById("photo");
const title = document.getElementById("title");
const stockStatus = document.getElementById("stock_status");
const price = document.getElementById("price");

items.map((el) => {
  let newCard = document.createElement("div");
  newCard.classList = "card";
  photo.src = `./img/${el.imgUrl}`;
  title.textContent = el.name;
  stockStatus.textContent = el.orderInfo.inStock;
  price.textContent = el.price;
  newCard.innerHTML = card.innerHTML;
  cards_container.append(newCard);
});
