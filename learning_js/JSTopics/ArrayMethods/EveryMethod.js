// It will check for given condition if it matches the condition then returns the first one matching and stops

// Imagine an order contains multiple products.
// You want to know:
// "Are ALL products available?"

const cart = [
  { product: "Laptop", price: 50000, quantity: 1, stock: 1 },
  { product: "Mouse", price: 1000, quantity: 2, stock: 0 },
  { product: "Keyboard", price: 3000, quantity: 1, stock: 2 },
];
const allProductsAvailable = cart.every((item) => item.stock > 0);
console.log(allProductsAvailable);
