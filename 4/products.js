// Dynamic Products Configuration
const products = [
  {
    id: "fresh-cut-fruits",
    name: "Fresh Cut Fruits",
    description: "Seasonal fresh fruits cut & ready to eat",
    price: 30,
    image: "https://placehold.co/400",
    category: "fruits",
    available: true,
    badge: "Popular",
  },
  {
    id: "fresh-sprouts",
    name: "Fresh Sprouts",
    description: "Healthy & nutritious sprouts mix",
    price: 25,
    image: "https://placehold.co/400",
    category: "sprouts",
    available: true,
    badge: "Healthy",
  },
  {
    id: "fresh-juice",
    name: "Fresh Juice",
    description: "100% natural fresh fruit juice",
    price: 40,
    image: "https://placehold.co/400",
    category: "juice",
    available: true,
    badge: "Refreshing",
  },
  {
    id: "fresh-salad",
    name: "Fresh Fruits Salad & Veg Salad",
    description: "Mixed fruit & vegetable salad bowl",
    price: 35,
    image: "https://placehold.co/400",
    category: "salad",
    available: true,
    badge: "New",
  },
  {
    id: "fruit-box",
    name: "Premium Fruit Box",
    description: "Assorted seasonal fruits in a gift box",
    price: 150,
    image: "https://placehold.co/400",
    category: "box",
    available: true,
    badge: "Premium",
  },
];

// Function to save products to localStorage
function saveProducts() {
  localStorage.setItem("fruitsProducts", JSON.stringify(products));
}

// Function to load products from localStorage
function loadProducts() {
  const saved = localStorage.getItem("fruitsProducts");
  if (saved) {
    return JSON.parse(saved);
  }
  return products;
}

// Function to add new product
function addProduct(product) {
  products.push(product);
  saveProducts();
}

// Function to update product
function updateProduct(id, updatedProduct) {
  const index = products.findIndex((p) => p.id === id);
  if (index !== -1) {
    products[index] = { ...products[index], ...updatedProduct };
    saveProducts();
  }
}

// Function to delete product
function deleteProduct(id) {
  const index = products.findIndex((p) => p.id === id);
  if (index !== -1) {
    products.splice(index, 1);
    saveProducts();
  }
}

// Function to get product by ID
function getProduct(id) {
  return products.find((p) => p.id === id);
}

// Function to get all products
function getAllProducts() {
  return products;
}

// Function to get available products
function getAvailableProducts() {
  return products.filter((p) => p.available);
}

// Initialize products on load
if (!localStorage.getItem("fruitsProducts")) {
  saveProducts();
}
