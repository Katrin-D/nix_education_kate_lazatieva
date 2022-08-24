import { items } from "./items.js";

const cards_container = document.getElementById("items");
const card = document.getElementById("card");
const photo = document.getElementById("photo");
const title = document.getElementById("title");
const stockStatus = document.getElementById("stock_status");
const price = document.getElementById("price");
const reviews = document.getElementById("reviews");
const orders = document.getElementById("orders");

items.map((el) => {
  let newCard = document.createElement("div");
  newCard.classList = "card";
  photo.src = `./img/${el.imgUrl}`;
  title.textContent = el.name;
  stockStatus.textContent = el.orderInfo.inStock;
  price.textContent = el.price;
  reviews.textContent = el.orderInfo.reviews;
  orders.textContent = Math.floor(Math.random() * 1000);
  newCard.innerHTML = card.innerHTML;
  cards_container.append(newCard);
});
