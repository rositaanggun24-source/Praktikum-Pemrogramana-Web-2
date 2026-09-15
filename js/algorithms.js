export function linearSearch(array, target) {

    for (let i = 0; i < array.length; i++) {

        if (array[i].id === target) {
            return i;
        }
    }

    return -1;
}


export function binarySearch(array, target) {

    let left = 0;
    let right = array.length - 1;

    while (left <= right) {

        const mid =
            Math.floor((left + right) / 2);

        if (array[mid].id === target) {
            return mid;
        }

        if (array[mid].id < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}


export function groupByCategory(products) {

    return products.reduce(
        (groups, product) => {

            const key = product.category;

            if (!groups[key]) {
                groups[key] = [];
            }

            groups[key].push(product);

            return groups;

        },
        {}
    );
}


export function sortProducts(products, sortBy) {

    const result = [...products];

    if (sortBy === "price-low") {
        result.sort(
            (a, b) => a.price - b.price
        );
    }

    if (sortBy === "price-high") {
        result.sort(
            (a, b) => b.price - a.price
        );
    }

    if (sortBy === "rating") {
        result.sort(
            (a, b) => b.rating - a.rating
        );
    }

    return result;
}