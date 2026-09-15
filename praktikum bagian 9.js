// BAGIAN 9 - GROUPING DAN AGGREGATION

// DATA PRODUCTS
const products = [
    {
        id: 1,
        title: "Laptop",
        price: 1200,
        category: "electronics"
    },
    {
        id: 2,
        title: "Smartphone",
        price: 800,
        category: "electronics"
    },
    {
        id: 3,
        title: "Shampoo",
        price: 50,
        category: "beauty"
    },
    {
        id: 4,
        title: "Lipstick",
        price: 30,
        category: "beauty"
    },
    {
        id: 5,
        title: "Rice",
        price: 20,
        category: "groceries"
    },
    {
        id: 6,
        title: "Milk",
        price: 15,
        category: "groceries"
    },
    {
        id: 7,
        title: "Headphones",
        price: 100,
        category: "electronics"
    }
];


// ==========================================
// LATIHAN 9.1
// GROUPING BERDASARKAN CATEGORY
// ==========================================

function groupByCategory(products) {
    return products.reduce((groups, product) => {

        const key = product.category;

        if (!groups[key]) {
            groups[key] = [];
        }

        groups[key].push(product);

        return groups;

    }, {});
}

const groupedProducts = groupByCategory(products);

console.log("=== LATIHAN 9.1 ===");
console.log(groupedProducts);

// LATIHAN 9.2
// JUMLAH PRODUK PER KATEGORI

const categorySummary = Object.entries(groupedProducts).map(
    ([category, products]) => ({
        category: category,
        totalProducts: products.length
    })
);

console.log("=== LATIHAN 9.2 ===");
console.table(categorySummary);