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
