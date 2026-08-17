// This Location refers to current URL:
console.log(window.location);

// Current URL: https://example.com/products?id=10;
// https - protocol
// example.com - host
// products - path
// ? - query

// Full URL
console.log(location.href); // Full URL.

// Protocol
console.log(location.protocol);

// same for others- console.log(location.host), console.log(pathname), console.log(location.search) -> ?id=10

// for example:
// suppose: /products?id=10
// const params = new URLSearchParams(location.search);
// console.log(params.get("id")); // output: 10

// URL Parameters: /products?category=laptop&sort=price

// const params = new URLSearchParams(location.search);
// const category = params.get("category");
// const sort = params.get("sort");

// console.log(category);
// console.log(sort);

// output: laptop, price.


