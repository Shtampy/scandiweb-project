<!-- Add this code inside the <script> element in your HTML -->

// Map product types to their specific attributes
const productAttributes = {
  DVD: "size-attribute",
  Book: "weight-attribute",
  Furniture: "furniture-attribute",
};

// Function to toggle a single product-specific attribute
function toggleAttribute(selectedAttribute) {
  const attributeDiv = document.getElementById("product_specific_attributes");

  // Hide all attribute containers
  const attributeContainers = attributeDiv.querySelectorAll(".attribute-container");
  attributeContainers.forEach((container) => {
    container.style.display = "none";
  });

  // Show the selected attribute container
  const container = document.getElementById(selectedAttribute);
  if (container) {
    container.style.display = "block";
  }
}

// Add event listener to the type switcher dropdown
const typeSwitcher = document.getElementById("productType");
typeSwitcher.addEventListener("change", function () {
  const selectedType = typeSwitcher.value;
  toggleAttribute(productAttributes[selectedType]);
});

// Initialize attributes based on the initial product type
toggleAttribute(productAttributes[typeSwitcher.value]);
