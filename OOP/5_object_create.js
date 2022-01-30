// Object Of Protos

const bookProtos = {
    getSummary: function() {
        return `${this.title} is written by ${this.author} \
in ${this.year}`;
    },
    getAge: function() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;    
    } 
}

// Create Object

// const book4 = Object.create(bookProtos);
// book4.title = "Book Four";
// book4.author = "Micheal Smith";
// book4.year = "2013";

const book4 = Object.create(bookProtos, {
    title: {value : "Book Four"},
    author: {value : "Micheal Smith"},
    year: {value : "2013"},
});


console.log(book4);