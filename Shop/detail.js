import products from "./product.js";
import cart from "./cart.js";

let app = document.getElementById("app");
let temporartContent = document.getElementById("temporaryContent");

const loadTemplate = () => {
  fetch("/Shop/template.html")
    .then((response) => response.text())
    .then((html) => {
      app.innerHTML = html;
      let contentTab = document.getElementById("contentTab");
      contentTab.innerHTML = temporartContent.innerHTML;
      temporartContent.innerHTML = null;
      cart();
      initApp();
    });
};

loadTemplate();

let idProduct = new URLSearchParams(window.location.search).get("id");

const initApp = () => {
  let info = products.filter((value) => value.id == idProduct)[0];
  if (!info) {
    window.location.href = "/Shop/shop.html";
  }
  let detail = document.querySelector(".detail");
  detail.querySelector(".image img").src = info.image;
  detail.querySelector(".name").innerHTML = info.name;
  detail.querySelector(".price").innerHTML = "$" + info.price;
  detail.querySelector(".description").innerHTML = info.description;
  detail.querySelector(".addCart").dataset.id = idProduct;

  let checkoutBtn = document.querySelector(".checkout");

  checkoutBtn.addEventListener("click", () => {
    alert("Proceeding to checkout...");
  });
};

let listProduct = document.querySelector(".listProduct");
listProduct.innerHTML = null;
products
  .filter((value) => value.id != idProduct)
  .forEach((products) => {
    let newProduct = document.createElement("div");
    newProduct.classList.add("item");
    newProduct.innerHTML = `
    <a href="detail.html?id=${products.id}">
      <img src="${products.image}"/>
      <h2>${products.name}</h2>
    </a>
    <div class="price">$${products.price}</div>
    <button class="addCart" data-id="${products.id}">Add To Cart</button>
`;
    listProduct.appendChild(newProduct);
  });
