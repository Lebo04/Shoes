let heels = [
  {
    id: 1,
    name: "Stiletto Heel",
    description: "Available in Black, White, Beige and Red.",
    color: "Red",
    size: 4,
    price: 300,
    image: "https://i.postimg.cc/JhgVJWmD/41j4i-LN0ye-L.jpg",
  },
  {
    id: 2,
    name: "Pencil Heel",
    description: "Available in Black, Navy, Beige and Red.",
    color: "Black",
    size: 5,
    price: 500,
    image:
      "https://i.postimg.cc/vDRZvVsn/Pencil-Heels-Shoes-For-Girls-2015-1024x1024.webp",
  },
  {
    id: 3,
    name: "Block Heel",
    description: "Available in Black, Navy, Beige, Gold and Red.",
    color: "Gold",
    size: 5,
    price: 350,
    image: "https://i.postimg.cc/FRLRkptv/1.jpg",
  },
  {
    id: 4,
    name: "Platform Heel",
    description: "Available in Black, Navy, Gold, Red and White.",
    color: "Black",
    size: 3,
    price: 400,
    image:
      "https://i.postimg.cc/4N6T7Mmw/image-dd6ad32a-f4da-43ee-a3ff-534ae95625c3-700x700.webp",
  },
  {
    id: 5,
    name: "Pump Heel",
    description: "Available in Black, Navy, Gold, Red and White.",
    color: "Gold",
    size: 2,
    price: 250,
    image:
      "https://i.postimg.cc/qMQLJ7dT/9304592-fpx.jpg",
  },
  {
    id: 6,
    name: "Ankle Strap Heel",
    description: "Available in Black, Navy, Gold, Red and White.",
    color: "Gold",
    size: 2,
    price: 450,
    image:
      "https://i.postimg.cc/N0y2FFY9/images.jpg",
  },
  {
    id: 7,
    name: "Wedge Heel",
    description: "Available in Black, Navy, Gold, Red, Brown and White.",
    color: "Brown",
    size: 4,
    price: 300,
    image:
      "https://i.postimg.cc/2yjzq9vc/s-pdpxl.jpg",
  },
  {
    id: 8,
    name: "Cut Out Heel",
    description: "Available in Black, Navy, Gold, Red and White.",
    color: "Gold",
    size: 2,
    price: 550,
    image:
      "https://i.postimg.cc/gcB9q0Pk/6-Cut-Out-Heels.jpg",
  },
];

localStorage.setItem("heels", JSON.stringify(heels));
let heelsList = JSON.parse(localStorage.getItem("heels"));

async function display() {
  let data = document.querySelector(".item");
  data.innerHTML = "";
  heelsList.forEach((item) => {
    data.innerHTML += `
    <div class=col-md-6 g-3>
    <div class="card data" style="width: 18rem">
      <img
        src="${item.image}"
        width=""
        height="250"
        class="card-img-top"
      />
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text">${item.description}</p>
        <p class="price">R${item.price}</p>
        <button class="btn btn-primary cart" id="${item.id}" onclick="addCart(${item.id})"
          >Add to checkout</button
        >
      </div>
      </div>
      </div>
            `;
  });
}

display();

// checkout code

let checkout = [];
localStorage.setItem("cart", JSON.stringify(checkout));
let cart = JSON.parse(localStorage.getItem("cart"));

function addCart(i) {
  if (cart.includes(heelsList[i])) {
    heelsList[i].quantity++;
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    heelsList[i].quantity = 1;
    cart.push(heelsList[i]);
    localStorage.setItem("cart", JSON.stringify(cart));
  }
}

// Filtering a Product

let shoe = document.querySelector(".shoe");
let item = document.querySelector(".item");

shoe.addEventListener("keyup", () => {
  try {
    if (!shoe.value.length) throw "Enter a shoe name";
    heelsList = heelsList.filter((items) => {
      return items.name.toLowerCase().includes(shoe.value.toLowerCase());
    });
    if (!heelsList.length) throw "This shoe is not yet available";
    display();
  } catch (data) {
    item.innerHTML = data;
  }
});
