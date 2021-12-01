

window.addEventListener("load", function() {
    //event
    //--- "keydown" event
    //--- "keyup" event

    //function
    //--- change to the next image 

    //function
    //--- count the finish percentage of each press 

    //function
    //--- document the times of space pressed

    
    // var title = document.getElementById('title');
    // var homeImage = document.getElementById('home-image');
    var count = 0;
    // var number = document.getElementById('number');
    // var started = 0;
    //count variable set to 0

    //make variables for images
    // var spacebar = document.getElementById("home-image");
    // var one = document.getElementById("myimages");

    //event listeners
    // document.addEventListener('keydown', onKeyDown);
    // document.addEventListener('keyup', onKeyUp);
    // document.body.onkeydown = function (event) {
    //     var e = window.event || event;
    //     if(e.preventDefault){
    //         e.preventDefault();
    //     }else{
    //         window.event.returnValue = false;
    //     }
    // }


    var imagesPath = {
        1: 'images/1.png',
        2: 'images/2.png',
        3: 'images/6.png',
        4: 'images/7.png',
        5: 'images/8.png',
        6: 'images/image.png',
        7: 'images/image1.png'
    };

    // imagesPath[key]
    // object = {
    //     key: value,
    //     key: value
    // }

    // var a = [0 , 1, 2, 3];
    // var b = ['a', 'b', 'c'];
    // var c = [1, 2, 3];
    // console.log(a[0])
    // console.log(b[0])
    // var d = c[2]

    /*
    数字： 0 1 2 3
    字符（字符串）： a image as
        pull images by dom
    布尔值：T F true false
    数组： []
    对象： {}
    */



    //pull images by dom
    // var element = document.getElementById('myimages');
    var imgDom = document.getElementById("myimages")

    //spacebar count
    function countNumber() {
        count = count + 1;
    } 

    //keydown function
    // function onKeyDown() {
        
    // }

    //keyup function
    function onKeyUp() {
        //keydown count number +1
        countNumber()
        setImgSrc(imagesPath);

    }

        //pull image object key
        function setImgSrc(){
            var objectKey = count % 7 + 1;
        }

        

        //replace image address
        imgDom.src = imagesPath[objectKey]; 
})

    function countNumber() {
        count = count + 1;
        number.textContent = count;

    };
