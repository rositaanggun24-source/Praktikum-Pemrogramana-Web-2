export function getStatistics(products) {

    const prices = products.map(
        ({ price }) => price
    );

    if (prices.length === 0) {

        return {
            averagePrice: 0,
            highestPrice: 0,
            lowestPrice: 0,
            firstCategory: "Tidak diketahui"
        };
    }

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

    const firstCategory =
        products[0]?.category ?? "Tidak diketahui";

    return {
        averagePrice,
        highestPrice,
        lowestPrice,
        firstCategory
    };
}