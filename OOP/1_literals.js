const book1 = {
    title: "Book One",
    author: "John Doe",
    year: "2013",
    getSummary: function(){
        return `${this.title} is written by ${this.author} \
        in ${this.year}`;
    }
};

// what if you wanted to create objects dynamically?


console.log(book1.getSummary());