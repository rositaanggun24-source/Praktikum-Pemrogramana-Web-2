const products = [
    {
        id: 1,
        title: "Laptop",
        category: "laptops",
        price: 1200,
        rating: 4.5,
        image: "💻"
    },
    {
        id: 2,
        title: "Smartphone",
        category: "phones",
        price: 800,
        rating: 4.2,
        image: "📱"
    },
    {
        id: 3,
        title: "Headphones",
        category: "audio",
        price: 100,
        rating: 4.8,
        image: "🎧"
    },
    {
        id: 4,
        title: "Tablet",
        category: "tablets",
        price: 500,
        rating: 4.1,
        image: "📱"
    },
    {
        id: 5,
        title: "Smartwatch",
        category: "wearables",
        price: 250,
        rating: 4.6,
        image: "⌚"
    }
];

const state = {
    products: products,
    search: "",
    category: "all",
    sortBy: "default",
    favorites: [],
    status: "idle"
};


// ===============================
// RENDER PRODUCTS
// ===============================

function renderProducts(products) {

    const container =
        document.querySelector("#product-list");

    container.innerHTML = "";

    if (products.length === 0) {

        container.innerHTML = `
            <p class="empty">
                Produk tidak ditemukan.
            </p>
        `;

        return;
    }

    for (const product of products) {

        const card =
            document.createElement("div");

        card.classList.add("product-card");

        card.innerHTML = `
            <div style="
                font-size: 100px;
                text-align: center;
                padding: 20px;
            ">
                ${product.image}
            </div>

            <h3>${product.title}</h3>

            <p>
                Kategori: ${product.category}
            </p>

            <p class="price">
                Harga: $${product.price}
            </p>

            <p>
                Rating: ⭐ ${product.rating}
            </p>
        `;

        container.append(card);
    }
}


// ===============================
// RENDER BERDASARKAN STATE
// ===============================

function render() {

    let result = state.products;


    // SEARCH
    if (state.search !== "") {

        result = result.filter(product =>
            product.title
                .toLowerCase()
                .includes(
                    state.search.toLowerCase()
                )
        );
    }


    // CATEGORY
    if (state.category !== "all") {

        result = result.filter(product =>
            product.category === state.category
        );
    }


    // SORT HARGA TERENDAH
    if (state.sortBy === "price-low") {

        result = [...result].sort(
            (a, b) => a.price - b.price
        );
    }


    // SORT HARGA TERTINGGI
    if (state.sortBy === "price-high") {

        result = [...result].sort(
            (a, b) => b.price - a.price
        );
    }


    // SORT RATING
    if (state.sortBy === "rating") {

        result = [...result].sort(
            (a, b) => b.rating - a.rating
        );
    }


    renderProducts(result);
}


// ===============================
// EVENT SEARCH
// ===============================

const searchInput =
    document.querySelector("#search");

searchInput.addEventListener("input", (event) => {

    state.search = event.target.value;

    render();
});


// ===============================
// EVENT CATEGORY
// ===============================

const categorySelect =
    document.querySelector("#category");

categorySelect.addEventListener("change", (event) => {

    state.category = event.target.value;

    render();
});


// ===============================
// EVENT SORT
// ===============================

const sortSelect =
    document.querySelector("#sort");

sortSelect.addEventListener("change", (event) => {

    state.sortBy = event.target.value;

    render();
});


// ===============================
// TAMPILKAN DATA PERTAMA KALI
// ===============================

render();