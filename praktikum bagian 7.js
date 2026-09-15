// BAGIAN 7 - BINARY SEARCH
// LATIHAN 7.1
// Binary Search

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        }

        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}


// Contoh penggunaan Latihan 7.1
const numbers = [10, 20, 30, 40, 50, 60, 70];

const result = binarySearch(numbers, 50);

console.log("=== LATIHAN 7.1 ===");
console.log("Data:", numbers);
console.log("Target:", 50);
console.log("Index target:", result);

// LATIHAN 7.2
// Binary Search Produk berdasarkan Price
const products = [
    {
        id: 1,
        title: "Laptop",
        price: 1200
    },
    {
        id: 2,
        title: "Smartphone",
        price: 800
    },
    {
        id: 3,
        title: "Headphones",
        price: 100
    },
    {
        id: 4,
        title: "Tablet",
        price: 500
    },
    {
        id: 5,
        title: "Monitor",
        price: 300
    }
];


// Mengurutkan produk berdasarkan price
const sortedProducts = [...products].sort(
    (a, b) => a.price - b.price
);

console.log("=== PRODUK SETELAH DIURUTKAN ===");
console.log(sortedProducts);


// Function Binary Search berdasarkan price
function binarySearchProductByPrice(products, targetPrice) {
    let left = 0;
    let right = products.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (products[mid].price === targetPrice) {
            return mid;
        }

        if (products[mid].price < targetPrice) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}


// Mencari produk berdasarkan target price
const targetPrice = 800;

const productIndex = binarySearchProductByPrice(
    sortedProducts,
    targetPrice
);

console.log("=== LATIHAN 7.2 ===");
console.log("Target price:", targetPrice);

if (productIndex !== -1) {
    console.log("Produk ditemukan:");
    console.log(sortedProducts[productIndex]);
} else {
    console.log("Produk tidak ditemukan");
}