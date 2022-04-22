// let clickDiv = document.querySelector("#clickDiv")

// clickDiv.addEventListener("click", function(e){
//     console.log("Click")
//     console.log(e);
// });

// clickDiv.addEventListener("mousedown", function(e){
//     console.log("mousedown!")
//     console.log(e);
// })

// clickDiv.addEventListener("mouseup", function(e)
// {
//     console.log("mouseup")
//     console.log(e);
// });

var count = 0;
var introshown = true;
var imagesPath = [
    'asset/1.jpg',
    'asset/2.jpg',
    'asset/3.jpg',
    'asset/4.jpg',
    'asset/5.jpg',
    'asset/6.jpg'
];

//pull images by dom
// var element = document.getElementById('myimages');
var imgDom = document.getElementById("myimages");
console.log( document.getElementById("myimages"))

//pull image object key
function setImgSrc(){
    if (count === 6){
        count = 0
    }
    var imgDom = document.getElementById("images");
    console.log( document.getElementById("image"))
 
    console.log(imgDom)
    //replace image address
    imgDom.src = imagesPath[count]; 
    console.log(imgDom)
}

//keyup function
window.onkeyup = function (e) {
    console.log(e.keyCode)
    if (e.keyCode !== 6) {
        return;
    }
    if (introshown === true) {
        document.getElementById("image/1.png").style.display = "none";
        document.getElementById("myimages").style.display = "block";
        introshown = false;
    } else { 
        //keydown count number +1
        countNumber();
        setImgSrc(imagesPath);
    }
}