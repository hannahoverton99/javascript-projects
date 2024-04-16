// Define your Book class here:
class Book {
constructor(title, author, copyright, isbn, numPages,
timesCheckedOut, discarded){
    this.title = title;
    this.author= author;
    this.copyright = copyright;
    this.isbn= isbn;
    this.numPages = numPages;
    this.timesCheckedOut= timesCheckedOut;
    this.discarded = discarded;
    }
    checkout(uses = 1) {
        this.timesCheckedOut += uses;
    }
}

// Define your Manual and Novel classes here:
class Manual extends Book {
constructor(title, author, copyright, isbn, numPages,
timesCheckedOut, discarded){
    super(title,author, copyright, isbn, numPages,
    timesCheckedOut, discarded)
}
dispose(currentYear){
    if(currentYear-this.copyright > 5){
        this.discarded = "Yes";
    }
}
}


class Novel extends Book{
constructor(title, author, copyright, isbn, numPages,
timesCheckedOut, discarded){
    super(title, author, copyright, isbn, numPages,
    timesCheckedOut, discarded)
}
 dispose(){
    if(this.timesCheckedOut > 100){
        this.discarded= "Yes";
    }
}
}
// Declare the objects for exercises 2 and 3 here:
let pride = new Novel("Pride and Prejudice", "Jane Austen", 1813, "1111111111111", 432, 32, "No");

let shuttle = new Manual("Top Secret Shuttle Manual", "Redacted", 2013,	"0000000000000", 1147, 1, "No");

// Code exercises 4 & 5 here:
pride.checkout(5);

shuttle.dispose(2024);

console.log(pride);
console.log(shuttle);