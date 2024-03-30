const products = [
  {
    id: 1,
    name: "EcoWave Stainless - Red",
    price: 200,
    description:
      "Introducing EcoWave Stainless - Red: your eco-friendly hydration solution. Crafted from durable stainless steel, this sleek and stylish water bottle is the perfect companion for your active lifestyle. With its leak-proof design and vibrant red color, staying hydrated on-the-go has never been easier or more environmentally friendly. Join the movement towards sustainability with EcoWave Stainless - Red.",
    image: "images/1.png",
  },
  {
    id: 2,
    name: "EcoWave Stainless - Lime Blue",
    price: 200,
    description:
      "Introducing EcoWave Stainless - Lime Blue: your sustainable hydration essential. Made from durable stainless steel, this eye-catching water bottle combines vibrant lime and blue hues to add a pop of color to your daily routine. With its leak-proof design and eco-friendly construction, staying hydrated on-the-go has never been more stylish or environmentally conscious. Join the movement towards sustainability with EcoWave Stainless - Lime Blue.",
    image: "images/2.png",
  },
  {
    id: 3,
    name: "EcoWave Stainless - Black",
    price: 200,
    description:
      "Introducing EcoWave Stainless - Black: your sleek and sustainable hydration solution. Crafted from durable stainless steel, this minimalist black water bottle embodies both style and eco-consciousness. With its sleek design and leak-proof construction, staying hydrated on-the-go has never been more effortless or environmentally friendly. Elevate your hydration game with EcoWave Stainless - Black and make a positive impact on the planet, one refill at a time.",
    image: "images/3.png",
  },
  {
    id: 4,
    name: "Shoreline Sands Necklace",
    price: 200,
    description:
      "Introducing our Shoreline Sands Necklace, a wearable piece of coastal beauty. Inspired by the gentle hues of sand found along shorelines, this necklace features a delicate pendant crafted to evoke the serene essence of the beach. Each grain of sand captured within the pendant holds the essence of the seaside, offering a tangible connection to the ocean's vast beauty. Whether you're a beach lover or simply crave a touch of coastal charm, the Shoreline Sands Necklace is a timeless reminder of the tranquility found by the water's edge. Wear it with pride and carry a piece of the shore wherever you go.",
    image: "images/4.png",
  },
  {
    id: 5,
    name: "Ocean Majesty Shell Pendant Necklace",
    price: 200,
    description:
      "Introducing our Ocean Majesty Shell Pendant Necklace, a graceful tribute to the wonders of the sea. Crafted with meticulous attention to detail, this necklace features a stunning shell pendant that exudes the majesty and mystery of the ocean depths. Whether you're strolling along the shore or attending a special event, let this exquisite necklace be a symbol of your reverence for the boundless splendor of the ocean.",
    image: "images/5.png",
  },
  {
    id: 6,
    name: "Seashell Serenade Rin",
    price: 200,
    description:
      "Introducing our Seashell Serenade Ring, a captivating homage to coastal beauty. This elegantly crafted ring features a delicate seashell motif, evoking the soothing whispers of ocean waves and the gentle caress of sea breezes. Perfect for adding a touch of maritime charm to any ensemble, this ring is a timeless reminder of the serene allure of the sea. Embrace the tranquility of coastal living with the Seashell Serenade Ring and let its enchanting melody resonate with your soul.",
    image: "images/6.png",
  },
  {
    id: 7,
    name: "OceanGuard Reusable Gloves",
    price: 200,
    description:
      "Introducing OceanGuard Reusable Gloves, your eco-conscious ally for everyday tasks. Crafted with durable and sustainable materials, these gloves offer reliable protection while minimizing environmental impact. Whether you're gardening, cleaning, or tackling household chores, OceanGuard gloves provide a comfortable fit and robust performance. Say goodbye to single-use plastics and join the movement towards a cleaner, greener future with OceanGuard Reusable Gloves",
    image: "images/7.png",
  },
  {
    id: 8,
    name: "Sealife Sustain Bags",
    price: 200,
    description:
      "Introducing Sealife Sustain Bags: your eco-friendly solution for everyday storage needs. Crafted from biodegradable materials, these bags offer durability without compromising environmental responsibility. Perfect for grocery shopping, organizing household items, or packing lunches, Sealife Sustain Bags provide a guilt-free alternative to traditional plastic bags. Join the movement towards sustainability and make a positive impact on the planet with Sealife Sustain Bags",
    image: "images/8.png",
  },
  {
    id: 9,
    name: "SeaBreeze Gentle Cleanser",
    price: 200,
    description:
      "Introducing SeaBreeze Gentle Cleanser, your refreshing solution for clean and radiant skin. Infused with nutrient-rich seaweed extracts, this facial cleanser effectively removes impurities while gently nourishing your skin. Formulated to be both effective and gentle, SeaBreeze leaves your complexion feeling refreshed and revitalized, without stripping away essential moisture. Dive into a daily skincare routine that harnesses the power of the sea with SeaBreeze Gentle Cleanser.",
    image: "images/9.png",
  },
  {
    id: 10,
    name: "OceanMist Foaming Scrub",
    price: 200,
    description:
      "Introducing OceanMist Foaming Scrub, your invigorating blend for a rejuvenated complexion. Infused with nutrient-rich seaweed extracts, this exfoliating scrub gently buffs away dead skin cells, revealing a smoother, more radiant complexion. The foaming formula creates a luxurious lather, leaving your skin feeling refreshed and revitalized. Dive into a daily skincare ritual that harnesses the power of the sea with OceanMist Foaming Scrub.",
    image: "images/10.png",
  },
  {
    id: 11,
    name: "Blue Waters: Exploring Aquatic Life by Moira Butterfield",
    price: 200,
    description:
      "Discover 'Blue Waters: Exploring Aquatic Life' by Moira Butterfield—an enchanting voyage through ocean and river ecosystems. With vivid prose and captivating illustrations, this book unveils the rich biodiversity and mesmerizing beauty of our planet's waterways. Dive in and explore the wonders that lie beneath the surface!",
    image: "images/11.png",
  },
  {
    id: 12,
    name: "Ocean Odyssey: A Graphic Journey by Mark Kurlansky & Frank Stockton",
    price: 200,
    description:
      "Dive into 'Ocean Odyssey: A Graphic Journey' by Mark Kurlansky & Frank Stockton, an illuminating exploration of the consequences of a 'World Without Fish.' Through captivating storytelling and stunning illustrations, discover the fragile beauty of our oceans and the urgent need for conservation.",
    image: "images/12.png",
  },
  {
    id: 13,
    name: "Echoes of the Abyss: Art Reflecting Ocean Pollution",
    price: 200,
    description:
      "Introducing 'Echoes of the Abyss: Art Reflecting Ocean Pollution,' an impactful collection of art prints and posters that confront the harsh reality of pollution in our seas. Each piece serves as a poignant reminder of the devastating effects of human activity on marine ecosystems, from plastic waste to oil spills. Through vivid imagery and thought-provoking compositions, these artworks inspire reflection and action towards preserving our oceans for future generations. Dive deep into the profound message conveyed by 'Echoes of the Abyss' and join the movement for cleaner, healthier seas.",
    image: "images/13.png",
  },
  {
    id: 14,
    name: "Water's Embrace: Art Prints and Posters for Conservation",
    price: 200,
    description:
      "Introducing 'Water's Embrace: Art Prints and Posters for Conservation,' a collection that celebrates the beauty of water while advocating for its conservation. From serene lakes to rushing rivers, each print captures the essence of water's embrace in stunning detail. Through captivating visuals and poignant messages, these artworks inspire mindfulness and action towards preserving this precious resource. Join the movement to save water and adorn your space with the beauty of 'Water's Embrace.'",
    image: "images/14.png",
  },
];
export default products;
