console.log("hello");

var Airtable = require('airtable');
console.log(Airtable);

//use airtable library
var base = new Airtable({apiKey: 'keyN5uN05SQ6KpI6g'}).base(
    'app8QITorsk2f2Pf2');

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
        if (err) { console.error(err); return; }
    });


    function showscenes() {
        console.log("showimage()");
      
        // find the shelf element
        const image = document.getElementById("image")}


///////////////////////////////////////////////////////////////////////////////////////////////////
