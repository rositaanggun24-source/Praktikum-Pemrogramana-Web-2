// BAGIAN 17 — DOM MANIPULATION

// Data 5 produk dummy
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

// LATIHAN 17.1

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


// Menampilkan produk ke halaman
renderProducts(products);