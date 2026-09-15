// BAGIAN 11 - SET

// DATA PRODUCTS

const products = [
    {
        id: 1,
        title: "Laptop",
        category: "electronics",
        brand: "Apple",
        tags: ["computer", "electronics", "office"]
    },
    {
        id: 2,
        title: "Smartphone",
        category: "electronics",
        brand: "Samsung",
        tags: ["mobile", "electronics"]
    },
    {
        id: 3,
        title: "Headphones",
        category: "audio",
        brand: "Sony",
        tags: ["audio", "electronics"]
    },
    {
        id: 4,
        title: "Tablet",
        category: "electronics",
        brand: "Apple",
        tags: ["mobile", "computer"]
    },
    {
        id: 5,
        title: "Smartwatch",
        category: "wearables",
        brand: "Samsung",
        tags: ["wearable", "electronics"]
    },
    {
        id: 6,
        title: "Speaker",
        category: "audio",
        brand: "Sony",
        tags: ["audio", "speaker"]
    }
];

// LATIHAN 11.1
// UNIQUE CATEGORY

const uniqueCategories = [
    ...new Set(
        products.map(product => product.category)
    )
];

console.log("=== UNIQUE CATEGORY ===");
console.log(uniqueCategories);

// UNIQUE BRAND

const uniqueBrands = [
    ...new Set(
        products.map(product => product.brand)
    )
];

console.log("=== UNIQUE BRAND ===");
console.log(uniqueBrands);



// UNIQUE TAGS
// ==========================================

// Gabungkan semua tags terlebih dahulu
const allTags = products.flatMap(
    product => product.tags
);

// Hilangkan tag yang duplikat
const uniqueTags = [
    ...new Set(allTags)
];

console.log("=== UNIQUE TAGS ===");
console.log(uniqueTags)