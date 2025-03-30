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