// ==========================================
// BAGIAN 18 — STATE MANAGEMENT SEDERHANA
// ==========================================

// Data produk
const products = [
    {
        id: 1,
        title: "Laptop",
        category: "laptops",
        price: 1200,
        rating: 4.5,
        thumbnail: "https://dummyjson.com/image/150x150"
    },
    {
        id: 2,
        title: "Smartphone",
        category: "phones",
        price: 800,
        rating: 4.2,
        thumbnail: "https://dummyjson.com/image/150x150"
    },
    {
        id: 3,
        title: "Headphones",
        category: "audio",
        price: 100,
        rating: 4.8,
        thumbnail: "https://dummyjson.com/image/150x150"
    },
    {
        id: 4,
        title: "Tablet",
        category: "tablets",
        price: 500,
        rating: 4.1,
        thumbnail: "https://dummyjson.com/image/150x150"
    },
    {
        id: 5,
        title: "Smartwatch",
        category: "wearables",
        price: 250,
        rating: 4.6,
        thumbnail: "https://dummyjson.com/image/150x150"
    }
];


// ==========================================
// STATE
// ==========================================

const state = {
    products: products,
    search: "",
    category: "all",
    sortBy: "default",
    favorites: [],
    status: "idle"
};


// ==========================================
// RENDER PRODUCTS
// ==========================================

function renderProducts(products) {

    const container = document.querySelector("#product-list");

    container.innerHTML = "";

    for (const product of products) {

        const card = document.createElement("div");

        card.classList.add("product-card");

        card.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>${product.category}</p>
            <p>Harga: $${product.price}</p>
            <p>Rating: ${product.rating}</p>
        `;

        container.append(card);
    }
}


// ==========================================
// RENDER BERDASARKAN STATE
// ==========================================

function render() {

    let result = state.products;

    // Filter berdasarkan search
    if (state.search !== "") {
        result = result.filter(product =>
            product.title
                .toLowerCase()
                .includes(state.search.toLowerCase())
        );
    }

    // Filter berdasarkan category
    if (state.category !== "all") {
        result = result.filter(product =>
            product.category === state.category
        );
    }

    // Sorting
    if (state.sortBy === "price-low") {
        result = [...result].sort(
            (a, b) => a.price - b.price
        );
    }

    if (state.sortBy === "price-high") {
        result = [...result].sort(
            (a, b) => b.price - a.price
        );
    }

    if (state.sortBy === "rating") {
        result = [...result].sort(
            (a, b) => b.rating - a.rating
        );
    }

    // Render hasil
    renderProducts(result);
}


// ==========================================
// EVENT SEARCH
// ==========================================

const searchInput = document.querySelector("#search");

searchInput.addEventListener("input", function () {

    state.search = searchInput.value;

    render();
});


// ==========================================
// EVENT CATEGORY
// ==========================================

const categorySelect = document.querySelector("#category");

categorySelect.addEventListener("change", function () {

    state.category = categorySelect.value;

    render();
});


// ==========================================
// EVENT SORT
// ==========================================

const sortSelect = document.querySelector("#sort");

sortSelect.addEventListener("change", function () {

    state.sortBy = sortSelect.value;

    render();
});


// ==========================================
// RENDER PERTAMA
// ==========================================

render();