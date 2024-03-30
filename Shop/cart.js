import products from "./product.js";

const cart = () => {
  let iconCart = document.querySelector(".cart-icon");
  let closeBtn = document.querySelector(".cartTab .close");
  let checkoutBtn = document.querySelector(".cartTab .checkout");
  let body = document.querySelector("body");
  let cart = [];

  iconCart.addEventListener("click", () => {
    body.classList.toggle("activeTabCart");
  });
  closeBtn.addEventListener("click", () => {
    body.classList.toggle("activeTabCart");
  });
  checkoutBtn.addEventListener("click", () => {
    if (cart.length <= 0) {
      alert("Cannot checkout - cart empty");
    } else {
      alert("Proceeding to checkout...");
    }
  });

  const setProductInCart = (idProduct, quantity, position) => {
    if (quantity > 0) {
      if (position < 0) {
        cart.push({
          product_id: idProduct,
          quantity: quantity,
        });
      } else {
        cart[position].quantity = quantity;
      }
    } else {
      cart.splice(position, 1);
    }
    refreshCartHTML();
  };

  const refreshCartHTML = () => {
    let listHTML = document.querySelector(".listCart");
    let totalQHTML = document.querySelector(".cart-icon span");
    let totalPHTML = document.querySelector(".totalprice p");
    let totalQuantity = 0;
    let totalPrice = 0;
    listHTML.innerHTML = null;
    cart.forEach((item) => {
      totalQuantity = totalQuantity + item.quantity;
      let position = products.findIndex((value) => value.id == item.product_id);
      let info = products[position];
      let newItem = document.createElement("div");
      newItem.classList.add("item");
      let itemPrice = info.price * item.quantity;
      totalPrice = totalPrice + itemPrice;
      newItem.innerHTML = `
        <div class="image">
          <img src="${info.image}" />
        </div>
        <div class="name">${info.name}</div>
        <div class="totalPrice">$${info.price * item.quantity}</div>
        <div class="quantity">
          <span class="minus" data-id="${info.id}">-</span>
          <span>${item.quantity}</span>
          <span class="plus" data-id="${info.id}">+</span>
        </div>
      `;
      listHTML.appendChild(newItem);
    });
    totalQHTML.innerText = totalQuantity;
    totalPHTML.innerHTML = `Total price is $${totalPrice}`;
  };

  document.addEventListener("click", (event) => {
    let buttonClick = event.target;
    let idProduct = buttonClick.dataset.id;
    let position = cart.findIndex((value) => value.product_id == idProduct);
    let quantity = position < 0 ? 0 : cart[position].quantity;

    if (
      buttonClick.classList.contains("addCart") ||
      buttonClick.classList.contains("plus")
    ) {
      quantity++;
      setProductInCart(idProduct, quantity, position);
    } else if (buttonClick.classList.contains("minus")) {
      quantity--;
      setProductInCart(idProduct, quantity, position);
    }
  });
};
export default cart;
