// BAGIAN 16 — ALGORITHM COMPLEXITY
// CONTOH LINEAR SEARCH
// O(n)

function linearSearch(array, target) {
    let steps = 0;

    for (let i = 0; i < array.length; i++) {
        steps++;

        if (array[i] === target) {
            return {
                index: i,
                steps: steps
            };
        }
    }

    return {
        index: -1,
        steps: steps
    };
}

const numbers = [10, 20, 30, 40, 50];

const linearResult = linearSearch(numbers, 50);

console.log("=== CONTOH LINEAR SEARCH ===");
console.log("Array:", numbers);
console.log("Target:", 50);
console.log("Index:", linearResult.index);
console.log("Jumlah pemeriksaan:", linearResult.steps);


// ==========================================
// LATIHAN 16.1
// BINARY SEARCH
// ==========================================

function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;
    let steps = 0;

    while (left <= right) {
        steps++;

        const mid = Math.floor((left + right) / 2);

        if (array[mid] === target) {
            return {
                index: mid,
                steps: steps
            };
        }

        if (array[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return {
        index: -1,
        steps: steps
    };
}


// Membuat array 10.000 elemen terurut
const sortedNumbers = [];

for (let i = 1; i <= 10000; i++) {
    sortedNumbers.push(i);
}

const target = 10000;

const binaryResult = binarySearch(
    sortedNumbers,
    target
);

console.log("\n=== LATIHAN 16.1 ===");
console.log("Jumlah data:", sortedNumbers.length);
console.log("Target:", target);
console.log("Index:", binaryResult.index);
console.log(
    "Jumlah pemeriksaan Binary Search:",
    binaryResult.steps
);


// ==========================================
// PERBANDINGAN LINEAR SEARCH DAN
// BINARY SEARCH
// ==========================================

const linearResult10000 = linearSearch(
    sortedNumbers,
    target
);

console.log("\n=== PERBANDINGAN ===");
console.log(
    "Linear Search:",
    linearResult10000.steps,
    "pemeriksaan"
);

console.log(
    "Binary Search:",
    binaryResult.steps,
    "pemeriksaan"
);

// CONTOH BUBBLE SORT
// O(n²)

function bubbleSort(array) {
    const result = [...array];

    for (let i = 0; i < result.length - 1; i++) {
        for (let j = 0; j < result.length - 1 - i; j++) {

            if (result[j] > result[j + 1]) {
                [result[j], result[j + 1]] =
                    [result[j + 1], result[j]];
            }
        }
    }

    return result;
}

const unsortedNumbers = [5, 3, 8, 1];

console.log("\n=== CONTOH BUBBLE SORT ===");
console.log("Data sebelum diurutkan:", unsortedNumbers);
console.log("Data setelah diurutkan:", bubbleSort(unsortedNumbers));


// ==========================================
// LATIHAN 16.2
// PENCARIAN PASANGAN PRODUK
// ==========================================


// Membuat 1000 produk dummy
const products = [];

const categories = [
    "electronics",
    "fashion",
    "food",
    "sports",
    "beauty",
    "books",
    "home",
    "gaming",
    "office",
    "toys"
];

for (let i = 1; i <= 1000; i++) {
    products.push({
        id: i,
        title: "Product " + i,
        category: categories[(i - 1) % categories.length]
    });
}


// ==========================================
// CARA 1: NESTED LOOP
// O(n²)
// ==========================================

let nestedComparisons = 0;
let sameCategoryPairs = 0;

for (let i = 0; i < products.length; i++) {

    for (let j = i + 1; j < products.length; j++) {

        nestedComparisons++;

        if (products[i].category === products[j].category) {
            sameCategoryPairs++;
        }
    }
}

console.log("\n=== LATIHAN 16.2 ===");
console.log("Jumlah produk:", products.length);

console.log(
    "Nested Loop - jumlah perbandingan:",
    nestedComparisons
);

console.log(
    "Nested Loop - pasangan dengan kategori sama:",
    sameCategoryPairs
);

// CARA 2: GROUPING MENGGUNAKAN MAP
// O(n)

const productGroups = new Map();

let groupingSteps = 0;

for (const product of products) {

    groupingSteps++;

    if (!productGroups.has(product.category)) {
        productGroups.set(product.category, []);
    }

    productGroups.get(product.category).push(product);
}

console.log(
    "Grouping dengan Map - jumlah langkah:",
    groupingSteps
);

console.log(
    "Jumlah kategori:",
    productGroups.size
);

// MENAMPILKAN JUMLAH PRODUK
// PADA SETIAP KATEGORI

console.log("\n=== HASIL GROUPING ===");

for (const [category, productList] of productGroups) {
    console.log(
        category + ":",
        productList.length,
        "produk"
    );
}

// KESIMPULAN KOMPLEKSITAS
console.log("\n=== KESIMPULAN ===");

console.log("Linear Search memiliki kompleksitas O(n).");
console.log("Binary Search memiliki kompleksitas O(log n).");
console.log("Bubble Sort memiliki kompleksitas O(n²).");
console.log("Nested Loop memiliki kompleksitas O(n²).");
console.log("Grouping menggunakan Map memiliki kompleksitas O(n).");