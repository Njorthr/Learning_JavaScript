// Constructor

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

// getSummary
Book.prototype.getSummary = function() {
    return `${this.title} is written by ${this.author} \
in ${this.year}`;
};

// getAge
Book.prototype.getAge =  function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
};

// Revise / change the year

Book.prototype.revise = function(newYear) {
    this.year = newYear;
    this.revised = true;
};

const book2 = new Book("Book one", "John Doe", "2013");
const book3 = new Book("Book Two", "Jane Doe", "2016");


console.log(book2);
console.log(book3.getSummary());
console.log(book3.getAge());
book2.revise("2018")
console.log(book2);
