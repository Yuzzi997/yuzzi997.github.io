

let rOff = 0; // offset for red noise
let gOff = 1000; // offset for green noise
let bOff = 2000; // offset for blue noise
let preservedColors = []; // array to store preserved colors
let prevMouseX, prevMouseY; // stores the previous mouse position


function setup() {
  createCanvas(1200, 600);
  // create sliders for red, green, and blue values
  createSlider(0, 255, 0).input(updateR);
  createSlider(0, 255, 0).input(updateG);
  createSlider(0, 255, 0).input(updateB);
}

function draw() {
  // update the noise offsets based on the scroll amount
  let scrollAmount = 0;
  if (prevMouseX != undefined) {
    scrollAmount = Math.max(-3, Math.min(3, mouseX - prevMouseX)) * 0.01;
  }
  rOff += scrollAmount;
  gOff += scrollAmount;
  bOff += scrollAmount;

  // add Perlin noise to the RGB values
  let r = noise(rOff) * 255;
  let g = noise(gOff) * 255;
  let b = noise(bOff) * 255;

  background(r, g, b); // set the background color to the current RGB values

  // draw the color control bar with noisy colors
  fill(noise(rOff + 10) * 255, noise(gOff + 10) * 255, noise(bOff + 10) * 255); // red
  rect(10, height - 30, 30, 20);
  fill(noise(rOff + 20) * 255, noise(gOff + 20) * 255, noise(bOff + 20) * 255); // green
  rect(50, height - 30, 30, 20);
  fill(noise(rOff + 30) * 255, noise(gOff + 30) * 255, noise(bOff + 30) * 255); // blue
  rect(90, height - 30, 30, 20);

  // draw the preserved colors
  for (let i = 0; i < preservedColors.length; i++) {
    fill(preservedColors[i]);
    rect(140 + i * 40, height - 30, 30, 20);
  }

  // store the current mouse position for the next frame
  prevMouseX = mouseX;
  prevMouseY = mouseY;
}
function keyPressed() {
  // check if spacebar is pressed
  if (keyCode === 32) {
    // get the current RGB values
    let r = noise(rOff) * 255;
    let g = noise(gOff) * 255;
    let b = noise(bOff) * 255;

    noStroke(); // remove the stroke
    // add the current color to the array of preserved colors
    if (preservedColors.length < 4) {
      preservedColors.push(color(r, g, b));
    } else {
      preservedColors.shift();
      preservedColors.push(color(r, g, b));
    }
  }
}

function keyPressed() {
  // check if spacebar is pressed
  if (keyCode === 32) {
    // get the current RGB values
    let r = noise(rOff) * 255;
    let g = noise(gOff) * 255;
    let b = noise(bOff) * 255;

    noStroke(); // remove the stroke
    // add the current color to the array of preserved colors
    preservedColors.push(color(r, g, b));
  }
}

// update the red value when the red slider is moved
function updateR() {
  rOff = 0;
}

// update the green value when the green slider is moved
function updateG() {
  gOff = 1000;
}

// update the blue value when the blue slider is moved
function updateB() {
  bOff = 2000;
}
 




function keyPressed() {
  // check if spacebar is pressed
  if (keyCode === 32) {
    // get the current RGB values
    let r = noise(rOff) * 255;
    let g = noise(gOff) * 255;
    let b = noise(bOff) * 255;

    noStroke(); // remove the stroke
    // add the current color to the array of preserved colors
    if (preservedColors.length < 84) {
      preservedColors.push(color(r, g, b));
    } else {
      preservedColors.shift();
      preservedColors.push(color(r, g, b));
    }
  }
}

function draw() {
  // update the noise offsets based on the scroll amount
  let scrollAmount = 0;
  if (prevMouseX != undefined) {
    scrollAmount = Math.max(-3, Math.min(3, mouseX - prevMouseX)) * 0.01;
  }
  rOff += scrollAmount;
  gOff += scrollAmount;
  bOff += scrollAmount;

  // add Perlin noise to the RGB values
  let r = noise(rOff) * 255;
  let g = noise(gOff) * 255;
  let b = noise(bOff) * 255;

  background(r, g, b); // set the background color to the current RGB values

  // draw the color control bar with noisy colors
  fill(noise(rOff + 10) * 255, noise(gOff + 10) * 255, noise(bOff + 10) * 255); // red
  rect(10, height - 30, 30, 20);
  fill(noise(rOff + 20) * 255, noise(gOff + 20) * 255, noise(bOff + 20) * 255); // green
  rect(50, height - 30, 30, 20);
  fill(noise(rOff + 30) * 255, noise(gOff + 30) * 255, noise(bOff + 30) * 255); // blue
  rect(90, height - 30, 30, 20);

  // draw the preserved colors
  for (let i = preservedColors.length - 1; i >= 0; i--) {
    let size = 30 + i * 20; // calculate the size of the rectangle based on its index
    fill(preservedColors[i]);
    rect(width - 20 - size, height - 20 - size, size, size);
  }

  // store the current mouse position for the next frame
  prevMouseX = mouseX;
  prevMouseY = mouseY;
}

// Clear the sketch
function restartSketch() {
  // clear the canvas
  background(255);

  // reset the noise offsets
  rOff = 0;
  gOff = 0;
  bOff = 0;

  // clear the array of preserved colors
  preservedColors = [];
}
