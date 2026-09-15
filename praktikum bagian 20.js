// ==========================================
// BAGIAN 20 - MODERN JAVASCRIPT (ES6+)
// ==========================================


// Data Product Explorer
const products = [
    {
        id: 1,
        title: "Laptop",
        price: 1200,
        category: "laptops",
        rating: 4.5,
        stock: 10,
        dimensions: {
            width: 30,
            height: 2,
            depth: 20
        }
    },
    {
        id: 2,
        title: "Smartphone",
        price: 800,
        category: "phones",
        rating: 4.2,
        stock: 15,
        dimensions: {
            width: 7,
            height: 0.8,
            depth: 15
        }
    },
    {
        id: 3,
        title: "Headphones",
        price: 100,
        category: "audio",
        rating: 4.8,
        stock: 5
    },
    {
        id: 4,
        title: "Tablet",
        price: 500,
        category: "tablets",
        rating: 4.1,
        stock: 8,
        dimensions: {
            width: 18,
            height: 0.7,
            depth: 25
        }
    },
    {
        id: 5,
        title: "Smartwatch",
        price: 250,
        category: "wearables",
        rating: 4.6,
        stock: 12
    }
];


// ==========================================
// 1. TEMPLATE LITERAL
// ==========================================

const product = products[0];

const label = `${product.title} - $${product.price}`;

console.log("=== TEMPLATE LITERAL ===");
console.log(label);


// ==========================================
// 2. ARROW FUNCTION
// ==========================================

const getTitle = (product) => product.title;

console.log("\n=== ARROW FUNCTION ===");
console.log(getTitle(product));


// ==========================================
// 3. DESTRUCTURING OBJECT
// ==========================================

const {
    title,
    price,
    category
} = product;

console.log("\n=== DESTRUCTURING OBJECT ===");
console.log("Title:", title);
console.log("Price:", price);
console.log("Category:", category);


// ==========================================
// 4. DESTRUCTURING ARRAY
// ==========================================

const [firstProduct, ...restProducts] = products;

console.log("\n=== DESTRUCTURING ARRAY ===");
console.log("Produk pertama:", firstProduct.title);
console.log("Sisa produk:", restProducts.length);


// ==========================================
// 5. SPREAD OPERATOR - OBJECT
// ==========================================

const updatedProduct = {
    ...product,
    stock: 20
};

console.log("\n=== SPREAD OBJECT ===");
console.log(updatedProduct);


// ==========================================
// 6. SPREAD OPERATOR - ARRAY
// ==========================================

const newProduct = {
    id: 6,
    title: "Keyboard",
    price: 75,
    category: "computer-accessories",
    rating: 4.4,
    stock: 20
};

const merged = [
    ...products,
    newProduct
];

console.log("\n=== SPREAD ARRAY ===");
console.log("Jumlah produk:", merged.length);


// ==========================================
// 7. REST PARAMETER
// ==========================================

function sumPrices(...prices) {
    return prices.reduce(
        (total, price) => total + price,
        0
    );
}

const totalPrices = sumPrices(
    1200,
    800,
    100,
    500
);

console.log("\n=== REST PARAMETER ===");
console.log("Total harga:", totalPrices);


// ==========================================
// 8. OPTIONAL CHAINING + NULLISH COALESCING
// ==========================================

const laptopWidth =
    products[0].dimensions?.width ?? "Tidak diketahui";

const headphoneWidth =
    products[2].dimensions?.width ?? "Tidak diketahui";

console.log("\n=== OPTIONAL CHAINING ===");
console.log("Lebar Laptop:", laptopWidth);
console.log("Lebar Headphones:", headphoneWidth);


// ==========================================
// 9. DEFAULT PARAMETER
// ==========================================

function filterByCategory(
    products,
    category = "all"
) {
    if (category === "all") {
        return products;
    }

    return products.filter(
        product => product.category === category
    );
}

const allProducts =
    filterByCategory(products);

const laptopProducts =
    filterByCategory(products, "laptops");

console.log("\n=== DEFAULT PARAMETER ===");
console.log("Semua produk:", allProducts.length);
console.log("Produk kategori laptops:", laptopProducts.length);


// ==========================================
// LATIHAN 20.1
// Refactor getStatistics dari Bagian 5
// ==========================================

function getStatistics(products) {

    const prices = products.map(
        ({ price }) => price
    );

    const totalPrice = prices.reduce(
        (total, price) => total + price,
        0
    );

    const averagePrice =
        totalPrice / prices.length;

    const highestPrice =
        Math.max(...prices);

    const lowestPrice =
        Math.min(...prices);

    // Optional chaining
    const firstCategory =
        products[0]?.category ?? "Tidak diketahui";

    return {
        averagePrice,
        highestPrice,
        lowestPrice,
        firstCategory
    };
}


const statistics =
    getStatistics(products);

console.log("\n=== LATIHAN 20.1 ===");
console.log("Rata-rata harga:", statistics.averagePrice);
console.log("Harga tertinggi:", statistics.highestPrice);
console.log("Harga terendah:", statistics.lowestPrice);
console.log("Kategori pertama:", statistics.firstCategory);