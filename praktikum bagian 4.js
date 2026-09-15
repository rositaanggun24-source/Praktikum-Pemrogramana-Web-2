// BAGIAN 4 - FLATTENING DATA

const products = [
    {
        title: "Laptop",
        tags: ["computer", "office"],
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
        title: "Smartphone",
        tags: ["mobile"],
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

// LATIHAN 4.1
const allTags = products.flatMap(product => product.tags);

console.log("=== LATIHAN 4.1 ===");
console.log(allTags);

// LATIHAN 4.2
const allComments = products.flatMap(product =>
    product.reviews.map(review => review.comment)
);

console.log("=== LATIHAN 4.2 ===");
console.log(allComments);