import { items } from "./items.js";

const cards_container = document.getElementById("items");
const card = document.getElementById("card");

//create item card
items.map((el) => {
  let newCard = document.createElement("div");
  newCard.classList = "card";

  const photo = document.getElementById("photo");
  photo.src = `./img/${el.imgUrl}`;

  const title = document.getElementById("title");
  title.textContent = el.name;

  const stockStatus = document.getElementById("stock_status");
  stockStatus.textContent = el.orderInfo.inStock;

  const price = document.getElementById("price");
  price.textContent = el.price;

  const reviews = document.getElementById("reviews");
  reviews.textContent = el.orderInfo.reviews;

  const orders = document.getElementById("orders");
  orders.textContent = Math.floor(Math.random() * 1000);

  newCard.innerHTML = card.innerHTML;
  cards_container.append(newCard);
});

//edd event on filters_btn
const filters_btn = document.querySelector(".filters_btn");
const filters = document.querySelector(".filters");
filters_btn.addEventListener("click", (event) => {
  filters.classList.toggle("hidden");
});

//edd event on filter_title
const filter = document.querySelectorAll(".filter");
filter.forEach((filterSection) => {
  const filter_title = filterSection.querySelector(".filter_title");
  filter_title.addEventListener("click", (event) => {
    const arrow_right = filterSection.querySelector(".arrow_right");
    const filter_content = filterSection.querySelector(".filter_content");
    arrow_right.classList.toggle("arrow_bottom");
    filter_content.classList.toggle("hidden");
  });
});

//get allFilterValues
const getFilterValues = (param) => {
  let results = [];
  items.map((el) => {
    if (el[param]) {
      typeof el[param] === "object"
        ? results.push(...el[param])
        : results.push(el[param]);
    }
  });

  return [...new Set(results)];
};

const color_filter = document.getElementById("color_filter");
const os_filter = document.getElementById("os_filter");
const memory_filter = document.getElementById("memory_filter");

getFilterValues("color").map((el) => {
  let newFilter = document.createElement("div");
  newFilter.classList = "checkbox";

  newFilter.innerHTML = `<input type="checkbox" id=${el} value=${el}><label for=${el}>${el}</label>`;
  color_filter.append(newFilter);
});

getFilterValues("os").map((el) => {
  let newFilter = document.createElement("div");
  newFilter.classList = "checkbox";

  newFilter.innerHTML = `<input type="checkbox" id=${el} value=${el}><label for=${el}>${el}</label>`;
  os_filter.append(newFilter);
});

getFilterValues("storage")
  .sort((a, b) => a - b)
  .map((el) => {
    let newFilter = document.createElement("div");
    newFilter.classList = "checkbox";
    el = Math.floor(el);

    newFilter.innerHTML = `<input type="checkbox" id=${el} value=${el}><label for=${el}>${el} GB</label>`;
    memory_filter.append(newFilter);
  });

/*let result = fetch("https://api.tvmaze.com/search/shows?q=HBO", {
  method: "GET",
})
  .then(async (response) => {
    console.log(response.bodyUsed); // false
    let result = await response.json();
    console.log(response.bodyUsed); // true
    return result;
  })
  .catch((err) => console.log(err));

console.log(result);*/
