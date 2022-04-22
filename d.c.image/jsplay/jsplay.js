var count = 0;
var introshown = true;
var imagesPath = [
    '/asset/1.jpg',
    '/asset/2.jpg',
    '/asset/3.jpg',
    '/asset/4.jpg',
    '/asset/5.jpg',
    '/asset/6.jpg'
];

//pull images by dom
// var element = document.getElementById('myimages');
var imgDom = document.getElementById("myimages");
console.log( document.getElementById("image"))

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
