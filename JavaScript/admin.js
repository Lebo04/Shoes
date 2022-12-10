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
          <td><button class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="updateProduct(${item.id})"><i class="fa-solid fa-pen-to-square"></i></button></td>
          <td><button class="delete" onclick="deleteProduct(this)"><i class="fa-solid fa-trash"></i></button></td>
          </tr>
          `;
  });
}

displayContent();

// Adding Product

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

// Delete Product

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


// Updating
let editID = 0;
function updateProduct(i) {
  let product = contents[i - 1];
  document.querySelector("#ids").value = product.id;
  document.querySelector("#names").value = product.name;
  document.querySelector("#sizes").value = product.size;
  document.querySelector("#colors").value = product.color;
  document.querySelector("#prices").value = product.price;
  editID = i; 
}


function edit() {
  let product = contents[editID - 1];
  product.id = document.querySelector("#ids").value;
  product.name = document.querySelector("#names").value;
  product.size = document.querySelector("#sizes").value;
  product.color = document.querySelector("#colors").value;
  product.price = document.querySelector("#prices").value;

  localStorage.setItem('heels', JSON.stringify(contents))
  displayContent();1
}
 


// Sort Products

let sort = document.querySelector(".sort");
sort.addEventListener("click", () => {
  contents.sort();
  contents.sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1
    } else {
      return 0
    }
  });
  localStorage.setItem('sort', JSON.stringify(contents));
  displayContent();
});
