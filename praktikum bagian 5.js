// BAGIAN 5 - MAP, FILTER, REDUCE
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
        title: "Gaming Laptop",
        price: 1500,
        category: "laptops",
        stock: 5
    },
    {
        id: 3,
        title: "Smartphone",
        price: 800,
        category: "phones",
        stock: 15
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
        title: "Headphones",
        price: 100,
        category: "audio",
        stock: 20
    }
];

// LATIHAN 5.1

const laptopPrices = products
    .filter(product => product.category === "laptops")
    .map(product => product.price);

const averageLaptopPrice =
    laptopPrices.reduce((total, price) => total + price, 0)
    / laptopPrices.length;

console.log("=== LATIHAN 5.1 ===");
console.log("Harga laptop:", laptopPrices);
console.log("Rata-rata harga laptop:", averageLaptopPrice);

// LATIHAN 5.2

function getStatistics(products) {
    const prices = products.map(product => product.price);

    const totalPrice = prices.reduce(
        (total, price) => total + price,
        0
    );

    const averagePrice = totalPrice / prices.length;

    const highestPrice = Math.max(...prices);

    const lowestPrice = Math.min(...prices);

    return {
        averagePrice: averagePrice,
        highestPrice: highestPrice,
        lowestPrice: lowestPrice
    };
}

const statistics = getStatistics(products);

console.log("=== LATIHAN 5.2 ===");
console.log(statistics);