// BAGIAN 12 - MAP (STRUKTUR DATA)
// DATA PRODUCTS

const products = [
    {
        id: 1,
        title: "Laptop",
        price: 1200,
        category: "electronics",
        brand: "Apple"
    },
    {
        id: 2,
        title: "Smartphone",
        price: 800,
        category: "electronics",
        brand: "Samsung"
    },
    {
        id: 3,
        title: "Headphones",
        price: 100,
        category: "audio",
        brand: "Sony"
    },
    {
        id: 4,
        title: "Tablet",
        price: 500,
        category: "electronics",
        brand: "Apple"
    },
    {
        id: 5,
        title: "Smartwatch",
        price: 250,
        category: "wearables",
        brand: "Samsung"
    }
];

// LATIHAN 12.1
// BUILD PRODUCT LOOKUP

function buildProductLookup(products) {

    const productMap = new Map();

    for (const product of products) {
        productMap.set(product.id, product);
    }

    return productMap;
}


// Membuat product lookup
const productLookup = buildProductLookup(products);

console.log("=== LATIHAN 12.1 ===");
console.log(productLookup);

// MENCARI PRODUK BERDASARKAN ID

const productId = 3;

const foundProduct = productLookup.get(productId);

console.log("=== PENCARIAN PRODUK ===");
console.log("ID yang dicari:", productId);
console.log("Produk ditemukan:", foundProduct);