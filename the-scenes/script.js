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

    consoleLogPhotos();

    // call function to show the data
    showData();
  }



  function showData() {
    console.log("showData()");
    scenes.forEach((scene) => {
        console.log("work");
        var sceneImage = document.createElement("img");
        var imgContainer = document.querySelector('#container')
        imgContainer.append(sceneImage);
        // document.querySelector('body').append(sceneImage)
        sceneImage.src = scene.fields.image[0].url;
        
        var photoActions = scene.fields.category;
        photoActions.forEach(function (b) {
            sceneImage.classList.add(b);

            var button1 = document.querySelector("#showPublicButton");
            button1.addEventListener("click", function () {
              if (sceneImage.classList.contains("public")) {
                  sceneImage.style.display = "flex";
              } else {
                  sceneImage.style.display = "none";
              }
            })
            
            var button2 = document.querySelector("#showPrivateButton");
            button2.addEventListener("click", function () {
            if (sceneImage.classList.contains("private")) {
              console.log('hi')
              sceneImage.style.display = "flex";
            } else {
              sceneImage.style.display = "none";
            }
            });
          })

          var button3 = document.querySelector("#showGodsEyesButton");
          button3.addEventListener("click", function () {
            if (sceneImage.classList.contains("godseyes")) {
                sceneImage.style.display = "flex";
            } else {
                sceneImage.style.display = "none";
            }
          })

          var button4 = document.querySelector("#showGodsEyesButton");
          button4.addEventListener("click", function () {
            if (sceneImage.classList.contains("god's_eyes")) {
                sceneImage.style.display = "flex";
            } else {
                sceneImage.style.display = "none";
            }
          })

          var button5 = document.querySelector("#showLongShotButton");
          button5.addEventListener("click", function () {
            if (sceneImage.classList.contains("longshot")) {
                sceneImage.style.display = "flex";
            } else {
                sceneImage.style.display = "none";
            }
          })

          var button6 = document.querySelector("#showCloseShotButton");
          button6.addEventListener("click", function () {
            if (sceneImage.classList.contains("closeshot")) {
                sceneImage.style.display = "flex";
            } else {
                sceneImage.style.display = "none";
            }
          })

          var button7 = document.querySelector("#showNoVictimButton");
          button7.addEventListener("click", function () {
            if (sceneImage.classList.contains("novictim")) {
                sceneImage.style.display = "flex";
            } else {
                sceneImage.style.display = "none";
            }
          })

          var button8 = document.querySelector("#showSingleVictimButton");
          button8.addEventListener("click", function () {
            if (sceneImage.classList.contains("singular")) {
                sceneImage.style.display = "flex";
            } else {
                sceneImage.style.display = "none";
            }
          })

          var button9 = document.querySelector("#showMultipleVictimButton");
          button9.addEventListener("click", function () {
            if (sceneImage.classList.contains("plural")) {
                sceneImage.style.display = "flex";
            } else {
                sceneImage.style.display = "none";
            }
          })

          // var button10 = document.querySelector
          // ("#showResetButton");
          // button10.addEventListener("click", function () {
          //   if (sceneImage.classList.contains("plural, singular,novictim,closeshot,longshot,godseyes,private,public")) {
          //     sceneImage.style.display = "flex";
          //   }
          // })

      })
    }

  function consoleLogPhotos() {
    // console.log("consoleLogPhotos()");
    scenes.forEach((photo) => {
      console.log(photo);
    });
  }

  
