// Book Class: Represents a book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
// UI Class: Handle UI Tasks
class UI {
    static displayBooks() {
        const books = Store.getBooks();

        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.querySelector("#book-list");

        const row = document.createElement("tr");

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

        list.appendChild(row)
    }
    static deleteBook(el) {
        if(el.classList.contains("delete")) {
            el.parentElement.parentElement.remove();        }
    }

    static showAlert(message, className) {
        const div = document.createElement("div");
        const popUp = document.querySelector(".popUp");
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        // const container = document.querySelector(".container");    //access the parent
        // const form = document.querySelector("#book-form");         // access after
        // container.insertBefore(div, form);                         //insert before
        popUp.appendChild(div);
        // Vanish in 3 seconds
        setTimeout(() => document.querySelector(".alert").remove(),
        3000);
    }
    static clearFields() {
        document.querySelector("#title").value = "";
        document.querySelector("#author").value = "";
        document.querySelector("#isbn").value = "";
    }
}
// Store CLass: Handles Storage
class Store {
    static getBooks() {
        // you can only store strings not objects
        let books;
        if(localStorage.getItem("books") === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem("books"));
        }
        return books;
    }
    static addBook(book) {
        const books = Store.getBooks();        //getting data

        books.push(book);                      //adding data 

        localStorage.setItem("books", JSON.stringify(books));    //setting it to local storage
    }
    static removeBook(isbn) {
        const books = Store.getBooks();
        books.forEach((book, index) => {
            if(book.isbn === isbn) {            //checking if the book is right one
                books.splice(index, 1);
            }
        });

        localStorage.setItem("books", JSON.stringify(books));
    }
}
// Event: Display Books
document.addEventListener("DOMContentLoaded", UI.displayBooks);

// Event: Add a Book
document.querySelector("#book-form").addEventListener("submit", (e) => {
    // Prevent actual submit
    e.preventDefault();
   // Get form values
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const isbn = document.querySelector("#isbn").value;

    //Validate
    if(title === "" || author === "" || isbn === "") {
        UI.showAlert("Please fill in all fields", "danger");
    } else {
        
    // Instatiate book
    const book = new Book(title, author, isbn);

    // Add book to UI
    UI.addBookToList(book);

    // Add book to store
    Store.addBook(book);

    // Show success message
    UI.showAlert("Book Added", "success");
    //Clear fields
    UI.clearFields();
    }

});
// Event: Remove a Book
document.querySelector("#book-list").addEventListener("click", (e) => {
    //Remove book from UI
    UI.deleteBook(e.target);

    //Remove book from store
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    // Show success message
    UI.showAlert("Book Removed", "info");
});