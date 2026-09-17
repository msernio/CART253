/**
 * Class one    
 * Mark Sernio
 * 
 */

"use strict";


function setup() {
    createCanvas(500, 500);

}

function draw() {
    background(0,0,0);
    // call the function - run the code
    drawRoof();
    drawHouseBody();
  

}

 // function to draw roof
function drawRoof() {
    push();
    fill(155, 155, 155);
    triangle(30,75,65,20,100,75);
    pop();

}
// function to draw house body
function drawHouseBody() {
    push();
    fill(255, 0, 0);
    rect(30, 75, 70, 50);
    pop();
}