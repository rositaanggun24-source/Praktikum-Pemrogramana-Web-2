// BAGIAN 10 - FREQUENCY COUNTING
// DATA PRODUCTS

const products = [
    {
        id: 1,
        title: "Laptop",
        price: 1200,
        category: "electronics",
        rating: 4.5,
        brand: "Apple",
        tags: ["computer", "electronics", "office"]
    },
    {
        id: 2,
        title: "Smartphone",
        price: 800,
        category: "electronics",
        rating: 4.2,
        brand: "Samsung",
        tags: ["mobile", "electronics"]
    },
    {
        id: 3,
        title: "Headphones",
        price: 100,
        category: "audio",
        rating: 4.8,
        brand: "Sony",
        tags: ["audio", "electronics"]
    },
    {
        id: 4,
        title: "Tablet",
        price: 500,
        category: "electronics",
        rating: 4.1,
        brand: "Apple",
        tags: ["mobile", "computer"]
    },
    {
        id: 5,
        title: "Smartwatch",
        price: 250,
        category: "wearables",
        rating: 4.6,
        brand: "Samsung",
        tags: ["wearable", "electronics"]
    },
    {
        id: 6,
        title: "Speaker",
        price: 120,
        category: "audio",
        rating: 4.3,
        brand: "Sony",
        tags: ["audio", "speaker"]
    }
];

// LATIHAN 10.1
// COUNT FREQUENCY

function countFrequency(array) {
    return array.reduce((counts, item) => {

        counts[item] = (counts[item] || 0) + 1;

        return counts;

    }, {});
}


// Contoh dari jobsheet
const words = [
    "laptop",
    "phone",
    "laptop",
    "tablet",
    "phone",
    "laptop"
];

const wordFrequency = countFrequency(words);

console.log("=== LATIHAN 10.1 ===");
console.log(wordFrequency);

// LATIHAN 10.2
// FREQUENCY PADA DATA PRODUK

// 1. FREKUENSI CATEGORY

const categories = products.map(product => product.category);

const categoryFrequency = countFrequency(categories);

console.log("=== FREKUENSI CATEGORY ===");
console.log(categoryFrequency);

// 2. FREKUENSI TAGS
// Menggunakan flatMap seperti Bagian 4

const allTags = products.flatMap(product => product.tags);

const tagFrequency = countFrequency(allTags);

console.log("=== FREKUENSI TAGS ===");
console.log(tagFrequency);

// 3. FREKUENSI RATING
// Rating dibulatkan ke bilangan bulat terdekat

const ratings = products.map(product =>
    Math.round(product.rating)
);

const ratingFrequency = countFrequency(ratings);

console.log("=== FREKUENSI RATING ===");
console.log(ratingFrequency);

// 4. FREKUENSI BRAND

const brands = products
    .filter(product => product.brand)
    .map(product => product.brand);

const brandFrequency = countFrequency(brands);

console.log("=== FREKUENSI BRAND ===");
console.log(brandFrequency);