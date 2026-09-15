// BAGIAN 2 - DATA REPRESENTATION
// Dataset Produk
const products = [
    {
        id: 1,
        title: "Laptop",
        price: 1200,
        category: "laptops",
        stock: 5
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
        stock: 3
    },
    {
        id: 4,
        title: "Tablet",
        price: 500,
        category: "tablets",
        stock: 8
    },
    {
        id: 5,
        title: "Smartwatch",
        price: 250,
        category: "wearables",
        stock: 12
    },
    {
        id: 6,
        title: "Keyboard",
        price: 75,
        category: "computer-accessories",
        stock: 20
    },
    {
        id: 7,
        title: "Mouse",
        price: 40,
        category: "computer-accessories",
        stock: 7
    },
    {
        id: 8,
        title: "Monitor",
        price: 300,
        category: "monitors",
        stock: 6
    },
    {
        id: 9,
        title: "Webcam",
        price: 90,
        category: "computer-accessories",
        stock: 14
    },
    {
        id: 10,
        title: "Speaker",
        price: 120,
        category: "audio",
        stock: 4
    },
    {
        id: 11,
        title: "Gaming Chair",
        price: 350,
        category: "furniture",
        stock: 9
    },
    {
        id: 12,
        title: "Power Bank",
        price: 60,
        category: "accessories",
        stock: 25
    },
    {
        id: 13,
        title: "USB Cable",
        price: 15,
        category: "accessories",
        stock: 30
    },
    {
        id: 14,
        title: "External Hard Drive",
        price: 110,
        category: "storage",
        stock: 5
    },
    {
        id: 15,
        title: "SSD",
        price: 150,
        category: "storage",
        stock: 11
    },
    {
        id: 16,
        title: "Microphone",
        price: 130,
        category: "audio",
        stock: 7
    },
    {
        id: 17,
        title: "Printer",
        price: 200,
        category: "office",
        stock: 10
    },
    {
        id: 18,
        title: "Router",
        price: 85,
        category: "networking",
        stock: 16
    },
    {
        id: 19,
        title: "Flash Drive",
        price: 25,
        category: "storage",
        stock: 22
    },
    {
        id: 20,
        title: "Game Controller",
        price: 70,
        category: "gaming",
        stock: 6
    },
    {
        id: 21,
        title: "Gaming Headset",
        price: 95,
        category: "gaming",
        stock: 13
    },
    {
        id: 22,
        title: "Graphics Card",
        price: 600,
        category: "computer-components",
        stock: 4
    },
    {
        id: 23,
        title: "RAM 16GB",
        price: 80,
        category: "computer-components",
        stock: 18
    },
    {
        id: 24,
        title: "CPU",
        price: 300,
        category: "computer-components",
        stock: 8
    },
    {
        id: 25,
        title: "Laptop Stand",
        price: 45,
        category: "accessories",
        stock: 17
    },
    {
        id: 26,
        title: "Phone Charger",
        price: 35,
        category: "accessories",
        stock: 28
    },
    {
        id: 27,
        title: "Bluetooth Earbuds",
        price: 80,
        category: "audio",
        stock: 9
    },
    {
        id: 28,
        title: "Smart TV",
        price: 700,
        category: "televisions",
        stock: 5
    },
    {
        id: 29,
        title: "Projector",
        price: 450,
        category: "office",
        stock: 12
    },
    {
        id: 30,
        title: "Mechanical Keyboard",
        price: 100,
        category: "computer-accessories",
        stock: 6
    }
];
// LATIHAN 2.1 - Mencari Produk

function findProductById(products, id) {
    return products.find(product => product.id === id);
}

const product = findProductById(products, 2);

console.log("=== LATIHAN 2.1 ===");
console.log(product);

// LATIHAN 2.2 - Stok Menipis

function getLowStockProducts(products) {
    return products.filter(product => product.stock < 10);
}

const lowStockProducts = getLowStockProducts(products);

console.log("=== LATIHAN 2.2 ===");
console.log(lowStockProducts);