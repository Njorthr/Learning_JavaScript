// ES6 Classes
class Book_3 {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} is written by ${this.author} \
in ${this.year}`;
    }
}

// Magazine Subclass
class Magazine_2 extends Book_3 {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }
}

// Instantiate Magazine

const mag2 = new Magazine_2("Mag One", "John Doe", "2018", "Jan");

console.log(mag2);                   // you can use methods of parent
console.log(mag2.getSummary());      // in subclasses with ES6 Class
