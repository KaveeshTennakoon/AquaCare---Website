const products = [
  {
    id: 1,
    name: "EcoWave Stainless - Red",
    price: 7,
    description:
      "Introducing EcoWave Stainless - Red: your eco-friendly hydration solution. Crafted from durable stainless steel, this sleek and stylish water bottle is the perfect companion for your active lifestyle. With its leak-proof design and vibrant red color, staying hydrated on-the-go has never been easier or more environmentally friendly. Join the movement towards sustainability with EcoWave Stainless - Red.",
    image: "/Images/shop1.png",
  },
  {
    id: 2,
    name: "EcoWave Stainless - Lime Blue",
    price: 7,
    description:
      "Introducing EcoWave Stainless - Lime Blue: your sustainable hydration essential. Made from durable stainless steel, this eye-catching water bottle combines vibrant lime and blue hues to add a pop of color to your daily routine. With its leak-proof design and eco-friendly construction, staying hydrated on-the-go has never been more stylish or environmentally conscious. Join the movement towards sustainability with EcoWave Stainless - Lime Blue.",
    image: "/Images/shop2.png",
  },
  {
    id: 3,
    name: "EcoWave Stainless - Black",
    price: 7,
    description:
      "Introducing EcoWave Stainless - Black: your sleek and sustainable hydration solution. Crafted from durable stainless steel, this minimalist black water bottle embodies both style and eco-consciousness. With its sleek design and leak-proof construction, staying hydrated on-the-go has never been more effortless or environmentally friendly. Elevate your hydration game with EcoWave Stainless - Black and make a positive impact on the planet, one refill at a time.",
    image: "/Images/shop3.png",
  },
  {
    id: 4,
    name: "Shoreline Sands Necklace",
    price: 25,
    description:
      "Introducing our Shoreline Sands Necklace, a wearable piece of coastal beauty. Inspired by the gentle hues of sand found along shorelines, this necklace features a delicate pendant crafted to evoke the serene essence of the beach. Each grain of sand captured within the pendant holds the essence of the seaside, offering a tangible connection to the ocean's vast beauty. Whether you're a beach lover or simply crave a touch of coastal charm, the Shoreline Sands Necklace is a timeless reminder of the tranquility found by the water's edge. Wear it with pride and carry a piece of the shore wherever you go.",
    image: "/Images/shop4.png",
  },
  {
    id: 5,
    name: "Ocean Majesty Shell Pendant Necklace",
    price: 10,
    description:
      "Introducing our Ocean Majesty Shell Pendant Necklace, a graceful tribute to the wonders of the sea. Crafted with meticulous attention to detail, this necklace features a stunning shell pendant that exudes the majesty and mystery of the ocean depths. Whether you're strolling along the shore or attending a special event, let this exquisite necklace be a symbol of your reverence for the boundless splendor of the ocean.",
    image: "/Images/shop5.png",
  },
  {
    id: 6,
    name: "Seashell Serenade Rin",
    price: 13,
    description:
      "Introducing our Seashell Serenade Ring, a captivating homage to coastal beauty. This elegantly crafted ring features a delicate seashell motif, evoking the soothing whispers of ocean waves and the gentle caress of sea breezes. Perfect for adding a touch of maritime charm to any ensemble, this ring is a timeless reminder of the serene allure of the sea. Embrace the tranquility of coastal living with the Seashell Serenade Ring and let its enchanting melody resonate with your soul.",
    image: "/Images/shop6.png",
  },
  {
    id: 7,
    name: "OceanGuard Reusable Gloves",
    price: 5,
    description:
      "Introducing OceanGuard Reusable Gloves, your eco-conscious ally for everyday tasks. Crafted with durable and sustainable materials, these gloves offer reliable protection while minimizing environmental impact. Whether you're gardening, cleaning, or tackling household chores, OceanGuard gloves provide a comfortable fit and robust performance. Say goodbye to single-use plastics and join the movement towards a cleaner, greener future with OceanGuard Reusable Gloves",
    image: "/Images/shop7.png",
  },
  {
    id: 8,
    name: "Sealife Sustain Bags",
    price: 20,
    description:
      "Introducing Sealife Sustain Bags: your eco-friendly solution for everyday storage needs. Crafted from biodegradable materials, these bags offer durability without compromising environmental responsibility. Perfect for grocery shopping, organizing household items, or packing lunches, Sealife Sustain Bags provide a guilt-free alternative to traditional plastic bags. Join the movement towards sustainability and make a positive impact on the planet with Sealife Sustain Bags",
    image: "/Images/shop8.png",
  },
  {
    id: 9,
    name: "SeaBreeze Gentle Cleanser",
    price: 14,
    description:
      "Introducing SeaBreeze Gentle Cleanser, your refreshing solution for clean and radiant skin. Infused with nutrient-rich seaweed extracts, this facial cleanser effectively removes impurities while gently nourishing your skin. Formulated to be both effective and gentle, SeaBreeze leaves your complexion feeling refreshed and revitalized, without stripping away essential moisture. Dive into a daily skincare routine that harnesses the power of the sea with SeaBreeze Gentle Cleanser.",
    image: "/Images/shop9.png",
  },
  {
    id: 10,
    name: "OceanMist Foaming Scrub",
    price: 12,
    description:
      "Introducing OceanMist Foaming Scrub, your invigorating blend for a rejuvenated complexion. Infused with nutrient-rich seaweed extracts, this exfoliating scrub gently buffs away dead skin cells, revealing a smoother, more radiant complexion. The foaming formula creates a luxurious lather, leaving your skin feeling refreshed and revitalized. Dive into a daily skincare ritual that harnesses the power of the sea with OceanMist Foaming Scrub.",
    image: "/Images/shop10.png",
  },
  {
    id: 11,
    name: "Blue Waters: Exploring Aquatic Life by Moira Butterfield",
    price: 30,
    description:
      "Discover 'Blue Waters: Exploring Aquatic Life' by Moira Butterfield—an enchanting voyage through ocean and river ecosystems. With vivid prose and captivating illustrations, this book unveils the rich biodiversity and mesmerizing beauty of our planet's waterways. Dive in and explore the wonders that lie beneath the surface!",
    image: "/Images/shop11.png",
  },
  {
    id: 12,
    name: "Ocean Odyssey: A Graphic Journey by Mark Kurlansky & Frank Stockton",
    price: 32,
    description:
      "Dive into 'Ocean Odyssey: A Graphic Journey' by Mark Kurlansky & Frank Stockton, an illuminating exploration of the consequences of a 'World Without Fish.' Through captivating storytelling and stunning illustrations, discover the fragile beauty of our oceans and the urgent need for conservation.",
    image: "/Images/shop12.png",
  },
  {
    id: 13,
    name: "Echoes of the Abyss: Art Reflecting Ocean Pollution",
    price: 25,
    description:
      "Introducing 'Echoes of the Abyss: Art Reflecting Ocean Pollution,' an impactful collection of art prints and posters that confront the harsh reality of pollution in our seas. Each piece serves as a poignant reminder of the devastating effects of human activity on marine ecosystems, from plastic waste to oil spills. Through vivid imagery and thought-provoking compositions, these artworks inspire reflection and action towards preserving our oceans for future generations. Dive deep into the profound message conveyed by 'Echoes of the Abyss' and join the movement for cleaner, healthier seas.",
    image: "/Images/shop13.png",
  },
  {
    id: 14,
    name: "Water's Embrace: Art Prints and Posters for Conservation",
    price: 26,
    description:
      "Introducing 'Water's Embrace: Art Prints and Posters for Conservation,' a collection that celebrates the beauty of water while advocating for its conservation. From serene lakes to rushing rivers, each print captures the essence of water's embrace in stunning detail. Through captivating visuals and poignant messages, these artworks inspire mindfulness and action towards preserving this precious resource. Join the movement to save water and adorn your space with the beauty of 'Water's Embrace.'",
    image: "/Images/shop14.png",
  },
];

// update the items in th local dics

let listCart = [];
function checkCart() {
  listCart = JSON.parse(localStorage.getItem("cart"));
}

checkCart();
addCartToHTML();

// make the items
function addCartToHTML() {
  // clear data default
  let listCartHTML = document.querySelector(".returnCart .list");
  listCartHTML.innerHTML = "";

  let totalQuantityHTML = document.querySelector(".totalQuantity");
  let totalPriceHTML = document.querySelector(".totalPrice");
  let totalQuantity = 0;
  let totalPrice = 0;

  // if has product in Cart
  if (listCart) {
    listCart.forEach((product) => {
      let position = products.findIndex((value) => value.id == product.product_id);
      if (position !== -1) { // Check if the product exists in the products array
        let info = products[position];
        let newCart = document.createElement("div");
        newCart.classList.add("item");
        newCart.innerHTML = `<img src="${info.image}">
                    <div class="info">
                        <div class="name">${info.name}</div>
                        <div class="price">$${info.price}</div>
                    </div>
                    <div class="quantity">${product.quantity}</div>
                    <div class="returnPrice">$${
          info.price * product.quantity
        }</div>`;
        listCartHTML.appendChild(newCart);
        totalQuantity += product.quantity;
        totalPrice += info.price * product.quantity;
      } else {
        console.error(`Product with ID ${product.product_id} not found.`);
      }
    });
  }
  totalQuantityHTML.innerText = totalQuantity;
  totalPriceHTML.innerText = "$" + totalPrice;
}



let checkoutBtn = document.querySelector(".buttonCheckout");

console.log(listCart);

//sweet alerts

checkoutBtn.addEventListener("click", () =>{
  if (isFormValid()) {
    if (listCart.length != 0) {
      Swal.fire({
        icon: "success",
        title: "Successful",
        text: "Successfully purchased the items",
        timer: 1500,
        showConfirmButton: false
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Unsuccessful",
        text: "No item in the cart",
        timer: 1500,
        showConfirmButton: false
      });
    }
    document.getElementById("checkoutFrom").addEventListener("submit", function(event) {
      this.reset();
    });

  } else {
    Swal.fire({
      icon: "warning",
      title: "Details Missing",
      text: "Please fill out all the information",
      timer: 3000,
    })
  }
  document.getElementById("checkoutFrom").addEventListener("submit", function(event) {
    event.preventDefault();
  });
})

//validate the form

function isFormValid() {
 
  const name = document.getElementById("name").value.trim();
  const address = document.getElementById("address").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  
  if (name === "" || address === "" || email === "" || phone === "") {
    return false;
  }
  
  return true;
}

