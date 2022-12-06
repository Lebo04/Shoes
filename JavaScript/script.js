
let sandals = JSON.parse(localStorage.getItem(".card-wrapper"))
  ? JSON.parse(localStorage.getItem(".card-wrapper"))
  : [
      {
        id: 1,
        name: "Flat Sandal",
        description:
          "Very comfortable shoes and is available in various colors.e.g. Black, Navy, Beige and Maroon.",
        price: R200,
        image:
          "https://i.postimg.cc/xCPh6tCK/Wholesale-Large-Size-Women-s-Sandals-Flat-Shoes-Clip-Toe-Flip-Flat-Sandals.jpg",
      },
      {
        id: 2,
        name: "Karryn Flat Sandals",
        price: R500,
        image: "https://i.postimg.cc/mkLhMVXc/FWL01272-WHWH-AO-5-300x.webp",
      },
      {
        id: 3,
        name: "Slides",
        price: R250,
        image: "https://i.postimg.cc/BQhNjVYK/3196600-304492.webp",
      },
      {
        id: 4,
        name: "Slides",
        price: R300,
        image:
          "https://i.postimg.cc/dt7Z9NQd/new-flat-sandals-292169-1654558757546-main-700x0c.jpg",
      },
    ];

async function readData() {
    let data = document.querySelector(".card-wrapper");
  sandals.forEach((card) => {
    data.innerHTML += `
    <div class="col">
    <div class="card" style="width: 18rem">
      <img
        src="${card.image}"
        width=""
        height="250"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">${card.name}</h5>
        <p class="card-text">${card.description}</p>
        <p class="price">${card.price}</p>
        <a href="" class="btn btn-primary"
          >Add to cart</a
        >
      </div>
    </div>
            `;
  });
}

readData();
