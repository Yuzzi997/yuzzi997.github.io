console.log("Hello bookshelf");

var Airtable = require("airtable");
console.log(Airtable);

var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyN5uN05SQ6KpI6g'}).base('app8QITorsk2f2Pf2');

base('books').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 10,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log('Retrieved', record.get('title'));
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});

//get the "books" table from the base, select ALL the records
// specify the functions that will receive the data
base("books").select({}).eachPage(gotPageOfBooks, gotAllBooks);

// an empty array to hold our book data
const books = [];

// callback function that receives our data
function gotPageOfBooks(records, fetchNextPage) {
  console.log("gotPageOfBooks()");
  // add the records from this page to our books array
  books.push(...records);
  // request more pages
  fetchNextPage();
}


// callback function that is used when all pages are loaded
function gotAllBooks(err) {
    console.log("gotAllBooks()");
  
    // report an error> this is what shows up if there's a problem
    if (err) {
      console.log("error loading books");
      console.error(err);
      return;
    }
  
    // call functions to log and show the books
    consoleLogBooks();
    showBooks();
  }
  
  // just loop through the books and console.log them
  function consoleLogBooks() {
    console.log("consoleLogBooks()");
    books.forEach((book) => {
      console.log("Book:", book);
    });
  }
  
  // loop through the books, create an h2 for each one, and add it to the page
  function showBooks() {
    console.log("showBooks()");
    books.forEach((book) => {
      const h2 = document.createElement("h2");
  //     try changing 'title' below to 'description' and your description will show instead of your title    
      h2.innerText = book.fields.title;
      document.body.appendChild(h2);
    });
  }