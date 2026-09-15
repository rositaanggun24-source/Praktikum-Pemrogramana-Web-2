// BAGIAN 6 - SEARCHING (LINEAR SEARCH)

// LATIHAN 6.1

function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }

    return -1;
}

const numbers = [10, 20, 30, 40, 50];

const searchResult = linearSearch(numbers, 30);

console.log("=== LATIHAN 6.1 ===");
console.log("Index target:", searchResult);

// LATIHAN 6.2

const products = [
    {
        id: 1,
        title: "Laptop",
        price: 1200,
        category: "laptops",
        stock: 10
    },
    {
        id: 2,
        title: "Smartphone",
        price: 800,
        category: "phones",
        stock: 15
    },
    {
        id: 3,
        title: "Headphones",
        price: 100,
        category: "audio",
        stock: 5
    },
    {
        id: 4,
        title: "Tablet",
        price: 500,
        category: "tablets",
        stock: 8
    }
];

function linearSearchProductById(products, targetId) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === targetId) {
            return i;
        }
    }

    return -1;
}

const productIndex = linearSearchProductById(products, 3);

console.log("=== LATIHAN 6.2 ===");
console.log("Index produk:", productIndex);

if (productIndex !== -1) {
    console.log("Produk ditemukan:", products[productIndex]);
} else {
    console.log("Produk tidak ditemukan");
}