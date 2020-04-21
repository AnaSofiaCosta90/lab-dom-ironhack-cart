// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  const $price = product.querySelector(".price span");
  const $quantity = product.querySelector(".quantity input");

  const price = Number($price.innerText);
  const quantity = Number($quantity.value);
  // Number($quantity.innerText) --> $quantity.valueAsNumber;

  const subtotal = price * quantity;

  const $subtotal = product.querySelector(".subtotal span");

  $subtotal.innerText = subtotal; //para alterar um valor que está escrito no HTML

  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  let allProducts = document.getElementsByClassName("product");

  console.log(allProducts);

  let total = 0;

  for (let i = 0; i < allProducts.length; i++) {
    total += updateSubtotal(allProducts[i]);
  }

  const $total = document.getElementById("total-value");

  $total.innerText = total;

  console.log(total);

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});
