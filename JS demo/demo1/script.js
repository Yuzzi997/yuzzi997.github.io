/*** EVENT FOR CLICK ME ***/

let clickDiv = document.querySelector("#clickDiv")

//Click Event
clickDiv.addEventListener("click", function(event){
    console.log("Click")
    console.log(event);
});

//Mousedown Event
clickDiv.addEventListener("mousedown", function(e){
    console.log("mousedown!")
    console.log(e);
})

//Mouseup Event
clickDiv.addEventListener("mouseup", function(event)
{
    console.log("mouseup")
    console.log(e);
});
    
    
/**EVENT FOR HOVER ME  ***/
let hoverDiv = document.querySelector("#hoverDiv")

//Mouseover Event
hoverDiv.addEventListener("mouseover", function (event){
    console.log("Mouse over!")
    console.log(e);
});

//Mouseleave Event
hoverDiv.addEventListener("#mouseleave", function(){
    console.log("Mouse leave!")
    console.log(e);
});

/** EVENTS FOR MOVE OVER ME ***/
let moveDiv = document.querySelector("#moveDiv");

//Mouseover Event
moveDiv.addEventListener("mousemove", function(event){
    console.log("Mouse move!")
    console.log(e);
});

/*** EVENTS FOR SCROLL ON ME  ***/
let scrollDiv = document.querySelector("#scrollDiv");

//Wheel event

scrollDiv.addEventListener("wheel", function(event){
    console.log("Wheel!");
    console.log(e);
});

