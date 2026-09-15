import { state } from "./state.js";

import { products as localProducts }
    from "./data.js";

import { fetchProducts }
    from "./api.js";

import {
    linearSearch,
    groupByCategory,
    sortProducts
} from "./algorithms.js";

import { renderProducts }
    from "./ui.js";

import { getStatistics }
    from "./utils.js";


// ==========================================
// SETUP CATEGORY
// ==========================================

function setupCategories() {

    const categorySelect =
        document.querySelector("#category");

    categorySelect.innerHTML = `
        <option value="all">
            Semua Kategori
        </option>
    `;

    const categories = [
        ...new Set(
            state.products.map(
                product => product.category
            )
        )
    ];

    categories.forEach(category => {

        const option =
            document.createElement("option");

        option.value = category;

        option.textContent = category;

        categorySelect.append(option);
    });
}


// ==========================================
// RENDER
// ==========================================

function render() {

    let result = state.products;


    // SEARCH
    if (state.search !== "") {

        result = result.filter(product =>
            product.title
                .toLowerCase()
                .includes(
                    state.search.toLowerCase()
                )
        );
    }


    // CATEGORY
    if (state.category !== "all") {

        result = result.filter(product =>
            product.category === state.category
        );
    }


    // SORT
    result = sortProducts(
        result,
        state.sortBy
    );


    renderProducts(result);
}


// ==========================================
// LOAD DATA
// ==========================================

async function loadProducts() {

    state.status = "loading";

    try {

        const products =
            await fetchProducts();

        state.products = products;

        state.status = "success";

        setupCategories();

        console.log(
            "Linear Search:",
            linearSearch(state.products, 3)
        );

        console.log(
            "Grouping:",
            groupByCategory(state.products)
        );

        console.log(
            "Statistics:",
            getStatistics(state.products)
        );

        render();

    } catch (error) {

        console.error(
            "API gagal. Menggunakan data lokal."
        );

        state.products = localProducts;

        state.status = "error";

        setupCategories();

        render();
    }
}


// ==========================================
// SEARCH EVENT
// ==========================================

const searchInput =
    document.querySelector("#search");

searchInput.addEventListener(
    "input",
    event => {

        state.search =
            event.target.value;

        render();
    }
);


// ==========================================
// CATEGORY EVENT
// ==========================================

const categorySelect =
    document.querySelector("#category");

categorySelect.addEventListener(
    "change",
    event => {

        state.category =
            event.target.value;

        render();
    }
);


// ==========================================
// SORT EVENT
// ==========================================

const sortSelect =
    document.querySelector("#sort");

sortSelect.addEventListener(
    "change",
    event => {

        state.sortBy =
            event.target.value;

        render();
    }
);


// ==========================================
// JALANKAN APLIKASI
// ==========================================

loadProducts();