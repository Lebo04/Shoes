// let sandals = localStorage.getItem("sandals");
// let sneakers = localStorage.getItem("sneakers");
// let heels = localStorage.getItem("heels");

// async function displayCart() {
//   let data = document.querySelector("tbody");

//   data.innerHTML += `
//             <tr>
//             <td>${item.id}</td>
//             <td>${item.name}</td>
//             <td>R${item.price}</td>
//             <td>${item.size}</td>
//             <td>${item.color}</td>
//             <td><button class="pen"><i class="fa-solid fa-pen-to-square"></i></button></td>
//             <td><button class="delete" onclick="deleteProduct(this)"><i class="fa-solid fa-trash"></i></button></td>
//             </tr>
//             `;
// }

// displayCart();

// let cart = JSON.parse(localStorage.getItem('checkout')) ? 
// JSON.parse(localStorage.getItem('checkout')) : [];
// let data = document.querySelector('tbody');
// (function displayCheckOut() {
//     try{
//         if(!cart.length) throw "Please add the product to the checkout list.";
//         let sortedArr = cart.sort((a, b)=> a.id - b.id)
//         let groupBy = sortedArr.reduce((a, b)=>{
//             a[b.id] = a[b.id] ?? [];
//             a[b.id].push(b)
//             return a
//         }, {});
//         console.log(groupBy);
//         let amountDue = 0;
//         for(let idx in groupBy){
//             let totalAmount = groupBy[idx].length * groupBy[idx][0].price;  
//             amountDue += totalAmount;
//             data.innerHTML += `
//                 <tr>
//                     <td>${groupBy[idx][0].id}</td>
//                     <td>${groupBy[idx][0].name}</td>
//                     <td>${groupBy[idx].length}</td>
//                     <td>R${totalAmount}</td>
//                 </tr>
//             `
//         }

//         data.innerHTML +=`
//             <tr class="amount-due">
//                 <td></td>                    
//                 <td></td>                    
//                 <td>Amount Due:</td> 
//                 <td>R${amountDue}</td>
//             </tr>
//         `
//     }catch(e) {
//         tbody.innerText = e;
//         tbody.style = "font-weight: bold; font-size: 2rem;"
//     }
// })();

// let clearAll = document.querySelector('#clearAll');
// clearAll.addEventListener('click', ()=>{
//     localStorage.removeItem('checkout');
//     tbody.innerHTML = "Please add the product to the checkout list.";
// })

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
          </tr>
          `;
  });
}

displayContent();