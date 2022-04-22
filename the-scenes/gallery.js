console.log("hello");

var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyN5uN05SQ6KpI6g'}).base('appKxL9aU5QyWGFe6');

base('scenes').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 3,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log('Retrieved', record.get('image'));
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { 
        console.error(err); 
        return; }
});

/////////////////////

//get the "books" table from the base, select ALL the records
// specify the functions that will receive the data
base("scenes").select({}).eachPage(gotPageOfScenes, gotAllScenes);

// an empty array to hold our book data
const scenes = [];



// callback function that is used when all pages are loaded
function gotAllScenes(err) {
    console.log("gotAllScenes()");
  
    // report an error> this is what shows up if there's a problem
    if (err) {
      console.log("error loading scenes");
      console.error(err);
      return;
    }
  
    // call functions to log and show the books
    consoleLogScenes();
    showScenes();
  }


function consoleLogScenes() {
    console.log("consoleLogScenes()");
    books.forEach((scene) => {
      console.log("Scene:", image);
    });
  }


// loop through the books, create an h2 for each one, and add it to the page
function showScenes() {
    console.log("showScenes()");
    books.forEach((scene) => {
      const h2 = document.createElement("h2");
  
//     try changing 'title' below to 'description' and your description will show instead of your title    
h2.innerText = scenes.fields.image;
document.body.appendChild(h2);
});
}