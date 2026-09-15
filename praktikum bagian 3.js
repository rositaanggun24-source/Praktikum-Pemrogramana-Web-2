// BAGIAN 3 - NESTED DATA

const products = [
    {
        id: 1,
        title: "Laptop",
        price: 1200,
        rating: 4.5,
        stock: 10,
        category: "laptops",

        tags: [
            "computer",
            "electronics",
            "office"
        ],

        dimensions: {
            width: 30,
            height: 2,
            depth: 20
        },

        reviews: [
            {
                user: "A",
                rating: 5,
                comment: "Good product"
            },
            {
                user: "B",
                rating: 4,
                comment: "Worth it"
            }
        ]
    },

    {
        id: 2,
        title: "Smartphone",
        price: 800,
        rating: 4.2,
        stock: 15,
        category: "phones",

        tags: [
            "mobile",
            "electronics"
        ],

        dimensions: {
            width: 7,
            height: 0.8,
            depth: 15
        },

        reviews: [
            {
                user: "C",
                rating: 4,
                comment: "Nice camera"
            },
            {
                user: "D",
                rating: 5,
                comment: "Fast"
            },
            {
                user: "E",
                rating: 3,
                comment: "Battery so-so"
            }
        ]
    }
];
// LATIHAN 1
const allTags = products.map(product => product.tags);

console.log("=== LATIHAN 1 ===");
console.log(allTags);

// LATIHAN 2
function findProductsByTag(products, tag) {
    return products.filter(product =>
        product.tags.includes(tag)
    );
}

const resultTag = findProductsByTag(products, "electronics");

console.log("=== LATIHAN 2 ===");
console.log(resultTag);

// LATIHAN 3
const reviewCounts = products.map(product => {
    return {
        id: product.id,
        title: product.title,
        totalReviews: product.reviews.length
    };
});

console.log("=== LATIHAN 3 ===");
console.log(reviewCounts);

// LATIHAN 4
const fiveStarReviews = products.flatMap(product =>
    product.reviews.filter(review => review.rating === 5)
);

console.log("=== LATIHAN 4 ===");
console.log(fiveStarReviews);

// LATIHAN 5
const averageRatings = products.map(product => {
    const totalRating = product.reviews.reduce(
        (total, review) => total + review.rating,
        0
    );

    const averageRating =
        totalRating / product.reviews.length;

    return {
        id: product.id,
        title: product.title,
        averageRating: averageRating
    };
});

console.log("=== LATIHAN 5 ===");
console.log(averageRatings);

// LATIHAN 6
const productWithMostReviews = products.reduce(
    (most, product) => {
        return product.reviews.length > most.reviews.length
            ? product
            : most;
    }
);

console.log("=== LATIHAN 6 ===");
console.log(productWithMostReviews);

// LATIHAN 7
const allReviewRatings = products.flatMap(product =>
    product.reviews.map(review => review.rating)
);

console.log("=== LATIHAN 7 ===");
console.log(allReviewRatings);