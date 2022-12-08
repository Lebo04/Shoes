// Sample example

let content = JSON.parse(localStorage.getItem("content"))
  ? JSON.parse(localStorage.getItem("content"))
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
  data.innerHTML = "";
  content.forEach((item) => {
    data.innerHTML += `
          <tr>
          <td>${item.id}</td>
          <td>${item.name}</td>
          <td>R${item.price}</td>
          <td>${item.size}</td>
          <td>${item.color}</td>
          <td><button class="pen"><i class="fa-solid fa-pen-to-square"></i></button></td>
          <td><button class="delete" onclick="deleteProduct(this)"><i class="fa-solid fa-trash"></i></button></td>
          </tr>
          `;
  });
}

displayContent();

let submit = document.querySelector(".submit");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let id = document.querySelector("#id").value;
  let name = document.querySelector("#product").value;
  let size = document.querySelector("#size").value;
  let color = document.querySelector(".color").value;
  let price = document.querySelector("#price").value;

  content.push({
    id,
    name,
    price,
    size,
    color,
  });

  localStorage.setItem("content", JSON.stringify(content));

  displayContent();
});

function deleteProduct(data) {
    let id = document.querySelector("#id").value;
  let name = document.querySelector("#product").value;
  let size = document.querySelector("#size").value;
  let color = document.querySelector(".color").value;
  let price = document.querySelector("#price").value;
  let i = data.parentNode.parentNode.rowIndex;
  document.querySelector(".table").deleteRow(i);
  content.pop({
    id,
    name,
    price,
    size,
    color,
  });
  localStorage.setItem("content", JSON.stringify(content));

  //   set localStorage to new array
}
