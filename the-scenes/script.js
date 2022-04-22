/* globals require */
console.log("Hello, Airtable");

var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyN5uN05SQ6KpI6g'}).base('appKxL9aU5QyWGFe6');

base('scenes').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 3,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log('Retrieved', record.get('Scenes'));
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

// }, function done(err) {
//     if (err) { console.error(err); return; }
// });

// // an empty array to hold our people data
// let scenes = [];

// callback function that receives each page of data (considered here as records) and adds them to our list of songs
// function gotPageOfData(records, fetchNextPage) {
//     console.log("gotPageOfData()");
//     console.log("There are " + records.length + " items in records");
//     // This takes the list of records and add them to the songs array
//     image.push(...records);
//     // request more pages
//     fetchNextPage();
//   }

// // call back function that is called when ALL pages are loaded
// function gotAllData(err) {
//     console.log("gotAllData()");



//   // call function to show the data
//   showData();
// }

// // show the data on the page
// function showData() {
//     console.log("showData()");}

// // find the shelf element
// const imageContainer = document.querySelector("#container");

// // loop through all the people listed in the Airtable data. Inside is the code we are applying for EACH person in the list of people.
// scenes.forEach((scenes) => {
//     // Print out what a single songs's data feidls looks like
//     console.log("SHOWING THE SCENES");
//     console.log(scenes.fields);})

//     /** CREATE CONTAINER */
//     const scenesContainer = document.createElement("div");
//     scenesContainer.classList.add("scenesStyleContainer");

//     /*******************
//     ADD THE Environment
//     *******************/

//     const environmentElement = document.createElement("p");
//     environmentElement.innerText = scenes.fields.Environment;
//     scenesContainer.appendChild(environmentElement);

//     /*******************
//     ADD Angle
//     *******************/

//     const angleElement = document.createElement("p");
//     angleElement.innerText = scenes.fields.angle;
//     scenesContainer.appendChild(angleElement);

//     /*******************
//     ADD number of victim
//     *******************/

//     let victimElement = document.createElement("p");
//     victimElement.innerText = "Victim: " + scenes.fields.victim;

//     scenesContainer.appendChild(victimElement);



//     /***********
//      TODO: CREATE FILTER-BY-GENRE FUNCTIONALITY
//      **********/
//     let ScenesElement = scenes_image.cloneNode(true)
//     albumArtELement.classList.add("scenes")
//     console.log(document)
    
