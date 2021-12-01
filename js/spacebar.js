var count = 0;
var introshown = true;
var imagesPath = [
    'images/1.png',
    'images/2.png',
    'images/6.png',
    'images/7.png',
    'images/8.png',
    'images/image.png',
    'images/image1.png'
];

//pull images by dom
// var element = document.getElementById('myimages');
var imgDom = document.getElementById("myimages");
console.log( document.getElementById("myimage"))

//spacebar count
function countNumber() {
    count = count + 1;
} 

//pull image object key
function setImgSrc(){
    if (count === 6){
        count = 0
    }
    var imgDom = document.getElementById("myimages");
    console.log( document.getElementById("myimage"))
 
    console.log(imgDom)
    //replace image address
    imgDom.src = imagesPath[count]; 
    console.log(imgDom)
}

//keyup function
window.onkeyup = function (e) {
    console.log(e.keyCode)
    if (e.keyCode !== 32) {
        return;
    }
    if (introshown === true) {
        document.getElementById("introimage").style.display = "none";
        document.getElementById("myimages").style.display = "block";
        introshown = false;
    } else { 
        //keydown count number +1
        countNumber();
        setImgSrc(imagesPath);
    }
}
