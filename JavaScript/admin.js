// Sample example

let contents = JSON.parse(localStorage.getItem("heels"));

async function displayContent() {
  let data = document.querySelector("tbody");
  data.innerHTML = "";
  contents.forEach((item) => {
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

  contents.push({
    id,
    name,
    price,
    size,
    color,
  });

  localStorage.setItem("heels", JSON.stringify(contents));

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
  contents.pop({
    id,
    name,
    price,
    size,
    color,
  });
  localStorage.setItem("heels", JSON.stringify(contents));
}

let save = document.querySelector(".save");
save.addEventListener("click", function sorting() {
  let productName = document.querySelector(".pName");
  localStorage.getItem("content", JSON.stringify(content));
  if (productName.checked) {
    content.sort();
  }
  displayContent();
});

// Updating

// let edit = document.querySelector(".pen");

// edit.addEventListener('click', (e) => {
//   e.preventDefault();

// })

// Filtering
