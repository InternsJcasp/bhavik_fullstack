// Some is used to check that atleast one matches the condition.
const cart = [
  { product: "Laptop", price: 50000, quantity: 1, stock: 1 },
  { product: "Mouse", price: 1000, quantity: 2, stock: 0 },
  { product: "Keyboard", price: 3000, quantity: 1, stock: 2 },
];
const allProductsAvailable = cart.some((item) => item.stock > 0);
console.log(allProductsAvailable);
