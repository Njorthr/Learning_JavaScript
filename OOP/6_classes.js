// ES6 Classes
class Book_2 {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} is written by ${this.author} \
in ${this.year}`;
    }

    getAge() {
    const years = new Date().getFullYear() - this.year;
        if(years === 0) {
            return "This book is brand new!";
        } else {
        return `${this.title} is ${years} years old`;
        }
    }
    revise(newYear) {
        this.year = newYear;
        this.revised = true;    
    }
    static topBookStore() {
        return "Barnes & Noble";
    }
}

// Instantiate Object

const book5 = new Book_2("Book Five", "Melih Guven", 
"2022");
console.log(book5);
console.log(book5.getSummary());
console.log(book5.getAge());
book5.revise("2011");
console.log(book5);
console.log(book5.getAge());

console.log(Book_2.topBookStore()); 