// IDEA: Make a "pixel" art image creator
//INPUT: 
        //Where I draw with my mouse
//OUTPUT: 
        //Make each "pixel" (or rather, square) black wherever I draw over
//STEP-BY-STEP process:
//1. How do I detect this input with JS?
    // Using mouse events
//2. How do I map, or translate, my input to the outcome that I want?
    //Whenever I draw with my mouse over a squarem that square should be black
//3. What do I need to add/remove/manipulate in my HTML using JS to achieve my desired outcome?
    //Change the background color of the square to black

let container = 
document.querySelector(".grid-container");

let clearDrawing = 
document.querySelector("#clearDrawing");

let isPainting = false;

for (let i = 0; i < 16 * 16; i++) {
    let newDiv = 
    document.createElement("div");
    newDiv.classList.add("pixel");

    // newDiv.addEventListener("click", function(){
    //     newDiv.style.backgroundColor = "black";
    // })

    newDiv.addEventListener("mousedown", function(){
        isPainting = true;
        newDiv.style.backgroundColor = "black";
    });

    newDiv.addEventListener("mouseenter", function(){
        if (isPainting){
            newDiv.style.backgroundColor = 
        "black";
        }
       
    });

    newDiv.addEventListener("mouseup", function(){
        isPainting = false;
    });

    clearDrawing.addEventListener("click", function(){
        newDiv.style.background = "white";
    });
    container.appendChild(newDiv);
}