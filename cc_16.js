// Task 2: Fetch Products with .then()
// This function uses fetch() with .then() to retrieve product data from the API.
// It logs each product's name to the console and catches any errors.
function fetchProductsThen() {
  fetch('https://www.course-api.com/javascript-store-products')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(products => {
      products.forEach(product => {
        // Assuming product.fields contains the product details.
        console.log(product.fields.name);
      });
    })
    .catch(error => {
      console.error("Error fetching products with .then():", error);
    });
}

// Task 3: Fetch Products with async/await
// This async function fetches product data using try/catch for error handling.
// On success, it calls displayProducts() to render the products to the DOM.
async function fetchProductsAsync() {
  try {
    const response = await fetch('https://www.course-api.com/javascript-store-products');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    handleError(error);
  }
}

// Task 4: Display the Products
// This function selects the product container and loops through the first 5 products.
// It creates HTML elements for each product's image, name, and price, then appends them.
function displayProducts(products) {
  const productContainer = document.getElementById('product-container');
  productContainer.innerHTML = ''; // Clear any existing content

  products.slice(0, 5).forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';

    // Create and populate the image element.
    const imgEl = document.createElement('img');
    imgEl.src = product.fields.image[0].url;
    imgEl.alt = product.fields.name;

    // Create and populate the product name element.
    const nameEl = document.createElement('h3');
    nameEl.textContent = product.fields.name;

    // Create and populate the product price element.
    const priceEl = document.createElement('p');
    // Convert price from cents to dollars if needed.
    const priceInDollars = product.fields.price / 100;
    priceEl.textContent = `$${priceInDollars.toFixed(2)}`;

    // Append the elements to the product div.
    productDiv.appendChild(imgEl);
    productDiv.appendChild(nameEl);
    productDiv.appendChild(priceEl);

    // Append the product div to the product container.
    productContainer.appendChild(productDiv);
  });
}

// Task 5: Reusable Error Handler
// This function logs a standardized error message.
function handleError(error) {
  console.error("An error occurred:", error.message);
}