let sandals = JSON.parse(localStorage.getItem(".box"))
  ? JSON.parse(localStorage.getItem(".box"))
  : [
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

async function show() {
  let data = document.querySelector(".box");
  sandals.forEach((item) => {
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

let sneakers = JSON.parse(localStorage.getItem(".information"))
  ? JSON.parse(localStorage.getItem(".information"))
  : [
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

async function displayData() {
  let data = document.querySelector(".information");
  sneakers.forEach((item) => {
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

let heels = JSON.parse(localStorage.getItem(".item"))
  ? JSON.parse(localStorage.getItem(".item"))
  : [
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

async function display() {
  let data = document.querySelector(".item");
  heels.forEach((item) => {
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

// Sample example

let content = JSON.parse(localStorage.getItem("tbody"))
  ? JSON.parse(localStorage.getItem("tbody"))
  : [
      {
        id: 1,
        name: "Platform Heel",
        price: 400,
        size: 5,
        color: "Black",
      },
      {
        id: 2,
        name: "Superga Alpani Boot",
        price: 1700,
        size: 4,
        color: "White",
      },
      {
        id: 3,
        name: "Stiletto Heel",
        price: 300,
        size: 4,
        color: "Beige",
      },
    ];

async function displayContent() {
  let data = document.querySelector("tbody");
  content.forEach((item) => {
    data.innerHTML += `
        <tr>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>R${item.price}</td>
        <td>${item.size}</td>
        <td>${item.color}</td>
        <td><button class="pen"><i class="fa-solid fa-pen-to-square"></i></button></td>
        <td><button class="delete"><i class="fa-solid fa-trash"></i></button></td>
        </tr>
        `;
  });
}

displayContent();

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

let products = [];

let save = document.querySelector(".save");
let submit = document.querySelector(".submit");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let productName = document.querySelector(".product").value;
  let size = document.querySelector(".size").value;
  let price = document.querySelector(".price").value;
  let color = document.querySelector(".color").value;

  content.push({
    productName,
    price,
    size,
    color,
  });

  localStorage.setItem("data", JSON.stringify(content));
  console.log(products);
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let pro  = JSON.parse(localStorage.getItem("data"));
  console.log(products); 
  let data = document.querySelector("tbody");
  pro.forEach((item) => {
    data.innerHTML += `
        <tr>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>R${item.price}</td>
        <td>${item.size}</td>
        <td>${item.color}</td>
        <td><button class="pen"><i class="fa-solid fa-pen-to-square"></i></button></td>
        <td><button class="delete"><i class="fa-solid fa-trash"></i></button></td>
        </tr>
        `;
  });
});

// Delete Products

let deleteProduct =  document.querySelector('.delete');
deleteProduct.addEventListener('click', (e) => {
  content.forEach((item) => {
    if (item.id) {
      content.splice(item.id, 1);
    }
  })
  // localStorage.removeItem(content);
})

// Adding Products

