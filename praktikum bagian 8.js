// LATIHAN 8.1 - BUBBLE SORT

function bubbleSort(numbers) {
    // Buat array baru agar array asli tidak berubah
    const arr = [...numbers];

    // Perulangan untuk setiap putaran
    for (let i = 0; i < arr.length - 1; i++) {

        // Membandingkan elemen yang bersebelahan
        for (let j = 0; j < arr.length - 1 - i; j++) {

            // Jika elemen kiri lebih besar, tukar
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}


// Contoh penggunaan Bubble Sort
const numbers = [5, 3, 8, 1];

const sortedNumbers = bubbleSort(numbers);

console.log("=== LATIHAN 8.1 ===");
console.log("Array asli:", numbers);
console.log("Hasil Bubble Sort:", sortedNumbers);

// LATIHAN 8.2 - SORT PRODUCTS

const products = [
    {
        id: 1,
        title: "Laptop",
        price: 1200,
        rating: 4.5
    },
    {
        id: 2,
        title: "Smartphone",
        price: 800,
        rating: 4.2
    },
    {
        id: 3,
        title: "Headphones",
        price: 100,
        rating: 4.8
    },
    {
        id: 4,
        title: "Tablet",
        price: 500,
        rating: 4.1
    },
    {
        id: 5,
        title: "Monitor",
        price: 300,
        rating: 4.6
    }
];


function sortProducts(products, sortBy) {

    // Buat array baru agar data asli tidak berubah
    const sortedProducts = [...products];

    // Sorting berdasarkan rating
    if (sortBy === "rating") {
        sortedProducts.sort(
            (a, b) => b.rating - a.rating
        );
    }

    // Sorting berdasarkan title
    else if (sortBy === "title") {
        sortedProducts.sort(
            (a, b) => a.title.localeCompare(b.title)
        );
    }

    return sortedProducts;
}


// Sorting berdasarkan rating
const sortedByRating = sortProducts(products, "rating");

console.log("=== LATIHAN 8.2 - BERDASARKAN RATING ===");
console.log(sortedByRating);


// Sorting berdasarkan title
const sortedByTitle = sortProducts(products, "title");

console.log("=== LATIHAN 8.2 - BERDASARKAN TITLE ===");
console.log(sortedByTitle);