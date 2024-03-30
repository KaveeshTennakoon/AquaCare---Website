import cart from "./cart.js";
import products from "./product.js";

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

const initApp = () => {
  let listProduct = document.querySelector(".listProduct");
  listProduct.innerHTML = null;
  products.forEach((products) => {
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
};
