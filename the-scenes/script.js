/* globals require */
console.log("Hello, Airtable");

var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyN5uN05SQ6KpI6g'}).base('appKxL9aU5QyWGFe6');

base('scenes').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 106,
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
    if (err) { console.error(err); return; }
});

// Get the "songs" table from the base, specify the view to be "View 2" (which is FILTERED for indie songs and SORTED by rating) and specify the callback functions that will receive each page of data
base("scenes")
  .select({
    // add your view in here
    view: "Grid view",
  })
  .eachPage(gotPageOfData, gotAllData);

// an empty array to hold our people data
let scenes = [];


// callback function that receives each page of data (considered here as records) and adds them to our list of songs
function gotPageOfData(records, fetchNextPage) {
    console.log("gotPageOfData()");
    console.log("There are " + records.length + " items in records");
    // This takes the list of records and add them to the songs array
    scenes.push(...records);
    // request more pages
    
    fetchNextPage();
  }

// call back function that is called when ALL pages are loaded
function gotAllData(err) {
    console.log("gotAllData()");
  
    // report an error, you'd want to do something better than this in production
    if (err) {
      console.log("error loading data");
      console.error(err);
      return;
    }
  
    // call function to show the data
    showData();
  }



//   function showData() {
//     console.log("showData()");
   
