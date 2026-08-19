🎯 Browser Events - Asli Problem Se Start Karte Hain
Problem 1: E-commerce Website ka Scenario
Imagine kar tu Flipkart/Amazon pe hai:

text
📦 Product Card
   ├── 🖼️ Product Image
   ├── 📝 Product Title  
   ├── 💰 Price
   └── 🛒 "Add to Cart" Button
Scenario: User ne "Add to Cart" button click kiya.

Question: Kaun-kaun se elements pe click event fire hoga?

Answer:

text
Button click → Button pe event fire
            → Product Card pe bhi fire hoga (kyunki button card ke andar hai!)
            → Page body pe bhi fire hoga
            → HTML document pe bhi fire hoga
Yehi hai EVENT BUBBLING! 👆

Event Bubbling - Simple Bhasha Mein
Definition: Jab tu kisi element pe click karta hai, toh event sirf uss element pe nahi, uske saare parent elements pe bhi fire hota hai (niche se upar ki taraf).

Real Example:

text
<div class="product-card" onclick="openProductPage()">
    <img src="product.jpg" />
    <h3>Product Name</h3>
    <button onclick="addToCart()">Add to Cart</button>
</div>
Problem: User ne "Add to Cart" click kiya, lekin product page bhi khul gaya! 😤

Kyun? Kyunki button ka click event bubble hoke parent card tak pahuncha, aur card ka onclick fire ho gaya!

Solution:

''' js
button.addEventListener('click', (e) => {
    e.stopPropagation(); // Event ko upar jaane se roko!
    addToCart();
});
'''