// Problem: Without stopping Event Bubbling

<div class="product-card" onclick="openProductPage()">
  <img src="product.jpg" />
  <h3>Product Name</h3>
  <button onclick="addToCart()">Add to Cart</button>
</div>;

// Solution: Using stopPropagation to event Bubbling

button.addEventListener("click", (e) => {
  e.stopPropagation(); // Event ko upar jaane se roko!
  addToCart();
});
