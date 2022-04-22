let myCursor =
document.querySelector("#customCursor");

window.addEventListener("mousemove", function(event)
{
    console.log(event);
    console.log("X: ");
    console.log(event.pageX);
    console.log("Y: ");
    console.log(event.pageY);
    myCursor.style.top = (event.pageY - 20)+ "px";
    myCursor.style.left = (event.pageX - 20)+ "px";
});

