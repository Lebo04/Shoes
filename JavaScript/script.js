let sandals = [
  {
    id: 1,
    name: "Flat Sandal",
    description:
      "Very comfortable shoes and is available in various colors.e.g. Black, Navy, Beige and Maroon.",
    price: 200,
    image:
      "https://i.postimg.cc/xCPh6tCK/Wholesale-Large-Size-Women-s-Sandals-Flat-Shoes-Clip-Toe-Flip-Flat-Sandals.jpg",
  },
  {
    id: 2,
    name: "Karryn Flat Sandals",
    description:
      "Very comfortable shoes and is available in various colors.e.g. Black, Navy, Beige and Maroon.",
    price: 500,
    image: "https://i.postimg.cc/mkLhMVXc/FWL01272-WHWH-AO-5-300x.webp",
  },
  {
    id: 3,
    name: "Slides",
    description:
      "Very comfortable shoes and is available in various colors.e.g. Black, Navy, Beige and Maroon.",
    price: 250,
    image: "https://i.postimg.cc/BQhNjVYK/3196600-304492.webp",
  },
  {
    id: 4,
    name: "Slides",
    description:
      "Very comfortable shoes and is available in various colors.e.g. Black, Navy, Beige and Maroon.",
    price: 300,
    image:
      "https://i.postimg.cc/dt7Z9NQd/new-flat-sandals-292169-1654558757546-main-700x0c.jpg",
  },
];

let sandalsList = JSON.parse(localStorage.getItem("sandals"))
  ? JSON.parse(localStorage.getItem("sandals"))
  : JSON.parse(localStorage.setItem("sandals", JSON.stringify(sandals)));

async function show() {
  let data = document.querySelector(".box");
  sandalsList.forEach((item) => {
    data.innerHTML += `<div class=col-6>
        <div class="card" style="width: 18rem">
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
            <a href="" class="btn btn-primary"
              >Add to cart</a
            >
          </div>
          </div>
          </div>
                `;
  });
}

show();

let sneakers = [
  {
    id: 1,
    name: "Air Force 1",
    description:
      "Very comfortable shoes and is available in various colors.e.g. Black and white.",
    price: 1700,
    image:
      "https://i.postimg.cc/G2P6W4Ps/Screenshot-2022-08-01-at-09-56-03.webp",
  },
  {
    id: 2,
    name: "New Balance 550",
    description:
      "Very comfortable shoes and is available in various colors.e.g. Black, Navy, Beige and Maroon.",
    price: 1500,
    image: "https://i.postimg.cc/L6GvVHLd/New-Balance-550-Hearts-01.webp",
  },
  {
    id: 3,
    name: "Superga Alpina Boot",
    description:
      "Very comfortable shoes and is available in various colors.e.g. Black, White, Light Grey and Beige",
    price: 1700,
    image:
      "https://i.postimg.cc/5yLStrNH/SUP398-YW-SUPERGA-ALPINA-BOOT-WHITE-2341-COTU-V1-1200x900.webp",
  },
  {
    id: 4,
    name: "Asics Gel-Lyte III",
    description:
      "Very comfortable shoes and is available in various colors.e.g. Black, Navy, Beige and Maroon.",
    price: 1200,
    image:
      "https://i.postimg.cc/yxk2rsPM/4bc-ASICS-1201-A582-700-GEL-LYTE-III-OG-BARELY-ROSE-side-b1c.webp",
  },
];
let sneakersList = JSON.parse(localStorage.getItem("sneakers"))
  ? JSON.parse(localStorage.getItem("sneakers"))
  : JSON.parse(localStorage.setItem("sneakers", JSON.stringify(sneakers)));

async function displayData() {
  let data = document.querySelector(".information");
  sneakersList.forEach((item) => {
    data.innerHTML += `
        <div class=col-6>
        <div class="card" style="width: 18rem">
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
            <a href="" class="btn btn-primary"
              >Add to cart</a
            >
          </div>
          </div>
          </div>
                `;
  });
}

displayData();

let heels = [
  {
    id: 1,
    name: "Stiletto Heel",
    description: "Available in Black, White, Beige and Red.",
    price: 300,
    image: "https://i.postimg.cc/JhgVJWmD/41j4i-LN0ye-L.jpg",
  },
  {
    id: 2,
    name: "Pencil Heel",
    description: "Available in Black, Navy, Beige and Red.",
    price: 500,
    image:
      "https://i.postimg.cc/vDRZvVsn/Pencil-Heels-Shoes-For-Girls-2015-1024x1024.webp",
  },
  {
    id: 3,
    name: "Block Heel",
    description: "Available in Black, Navy, Beige, Gold and Red.",
    price: 350,
    image: "https://i.postimg.cc/FRLRkptv/1.jpg",
  },
  {
    id: 4,
    name: "Platform Heel",
    description: "Available in Black, Navy, Gold, Red and White.",
    price: 400,
    image:
      "https://i.postimg.cc/4N6T7Mmw/image-dd6ad32a-f4da-43ee-a3ff-534ae95625c3-700x700.webp",
  },
];
let heelsList = JSON.parse(localStorage.getItem("heels"))
  ? JSON.parse(localStorage.getItem("heels"))
  : JSON.parse(localStorage.setItem("heels", JSON.stringify(heels)));

async function display() {
  let data = document.querySelector(".item");
  heelsList.forEach((item) => {
    data.innerHTML += `
    <div class=col-6>
    <div class="card" style="width: 18rem">
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
        <a href="" class="btn btn-primary"
          >Add to cart</a
        >
      </div>
      </div>
      </div>
            `;
  });
}

display();


// let save = document.querySelector(".save");
// let idN = document.querySelector(".id").value;
// save.addEventListener('click', (e) => {
//   content.sort((a, b) => {
//     if (idN) {
//     } else if (a.id < b.id) {
//       return -1;
//     }
//   });
// })

// function sorting() {
//   let idN = document.querySelector(".id").value;
//   content.sort((a, b) => {
//     if (idN) {
//     } else if (a.id < b.id) {
//       return -1;
//     }
//   });
// }

// sorting();

// Adding Products

      
// Delete Products



// deleteProduct.addEventListener(
//   "click",
//   function deleteProduct(index, arr) {
//     let deleteProduct = document.querySelector(".delete");
//     if (deleteProduct.clicked) {
//       arr.splice(index, 1);
//       return true;
//     }
//     return false;
//   }
// );

// let deleteProduct = document.querySelector(".delete");
// deleteProduct.addEventListener("click", (e) => {
//   content.forEach(() => {
//     if (deleteProduct) {
//       content.splice(0, 1);
//     }
//   });
//   // localStorage.removeItem(content);
// });

// let data = document.querySelector(".box");
// let search = document.querySelector(".search");
// search.addEventListener("keyup", () => {
//   try {
//     if (!search.value.length) throw "Enter a value";
//     sandalsList = sandalsList.filter((item) => {
//       return item.name.toLowerCase().includes(search.value.toLowerCase());
//     });
//     if (!sandalsList.length) throw "This product is not yet available";
//     displayProducts();
//   } catch (e) {
//     data.innerHTML = e;
//   }
// });

// function addProduct(arr, obj) {
//   arr.push(obj);
//   console.log(arr);
// }

// let object = {
//   id: document.querySelector(".id").value,
//   name: document.querySelector(".product").value,
//   price: document.querySelector(".price").value,
//   size: document.querySelector(".size").value,
//   color: document.querySelector(".color").value,
// };

// addProduct(content, object);
