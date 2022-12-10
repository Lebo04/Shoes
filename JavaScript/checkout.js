let cart = JSON.parse(localStorage.getItem('cart'));

async function displayContent() {
  let data = document.querySelector("tbody");
  data.innerHTML = "";
  cart.forEach((item) => {
    data.innerHTML += `
          <tr>
          <td>${item.id}</td>
          <td>${item.name}</td>
          <td>R${item.price}</td>
          <td>${item.size}</td>
          <td>${item.color}</td>
          <td>${item.quantity}</td>
          </tr>
          `;
  });
  document.querySelector('.checkout').innerHTML += `<div class="total">Total Amount Due: </div>`
}

displayContent();

function calTotal() {
  let total = 0;
  cart.forEach((e) => {
    total += e.price * e.quantity;
  })
  document.querySelector('.total').innerHTML += `R${total}`
}
calTotal()