// BAGIAN 13 - STACK (LIFO)

// LATIHAN 13.1
// IMPLEMENTASI STACK MENGGUNAKAN ARRAY

class Stack {

    constructor() {
        this.items = [];
    }

    // Menambahkan item ke dalam Stack
    push(item) {
        this.items.push(item);
    }

    // Menghapus dan mengambil item terakhir
    pop() {
        return this.items.pop();
    }

    // Melihat item paling atas tanpa menghapusnya
    peek() {
        return this.items[this.items.length - 1];
    }

    // Mengecek apakah Stack kosong
    isEmpty() {
        return this.items.length === 0;
    }
}

// CONTOH PENGGUNAAN STACK


const stack = new Stack();

stack.push("laptop");
stack.push("phone");
stack.push("tablet");

console.log("=== LATIHAN 13.1 ===");
console.log("Isi Stack:", stack.items);

console.log("Peek:", stack.peek());

console.log("Pop:", stack.pop());

console.log("Isi Stack setelah pop:", stack.items);

console.log("Apakah Stack kosong?", stack.isEmpty());

// LATIHAN 13.2
// SEARCH HISTORY PRODUCT EXPLORER

const searchHistory = new Stack();


// Function untuk menambahkan pencarian
function search(keyword) {
    searchHistory.push(keyword);

    console.log("Mencari:", keyword);
}


// Function untuk undo pencarian
function undoSearch() {

    if (searchHistory.isEmpty()) {
        console.log("Tidak ada riwayat pencarian.");
        return;
    }

    const removedSearch = searchHistory.pop();

    console.log("Undo pencarian:", removedSearch);

    if (!searchHistory.isEmpty()) {
        console.log(
            "Kembali ke pencarian sebelumnya:",
            searchHistory.peek()
        );
    } else {
        console.log("Tidak ada pencarian sebelumnya.");
    }
}

// SIMULASI SEARCH HISTORY

console.log("=== LATIHAN 13.2 ===");

search("laptop");
search("phone");
search("tablet");

console.log("Search History:", searchHistory.items);


// Undo pencarian terakhir
undoSearch();

console.log("Search History setelah undo:", searchHistory.items);


// Undo lagi
undoSearch();

console.log("Search History setelah undo kedua:", searchHistory.items);