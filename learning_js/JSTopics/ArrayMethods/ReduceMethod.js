// First Example:
const marks = [10, 63, 12, 23, 89, 46];
const totalMarks = marks.reduce((total, mark) => total + mark, 0);
console.log(totalMarks);

// Second Example:
const cart = [
  { product: "Laptop", price: 50000, quantity: 1 },
  { product: "Mouse", price: 1000, quantity: 2 },
  { product: "Keyboard", price: 3000, quantity: 1 },
];

const total = cart.reduce((sum, item) => {
  sum + item.price * item.quantity;
}, 0);
