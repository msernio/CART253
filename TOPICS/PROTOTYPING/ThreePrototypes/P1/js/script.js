/**
 * P1 - Representational
 * Mark Sernio
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";


function setup() {
    createCanvas(750, 750);

}

function draw() {
    // call the function - run the code
    background(109,111,161);

    drawHill();
    drawRoof();
    drawHouseBody();
    drawHouseDoor();
    drawSun();
    drawHouseWindows();
    drawHandle();

}

 // function to draw roof
function drawRoof() {
    push();
    fill(155, 155, 155);
    triangle(270, 475, 375, 390, 480, 475);
    pop();

}
// function to draw house body
function drawHouseBody() {
    push();
    fill(253, 217, 8);
    rect(285, 475, 180, 120);
    pop();
}


function drawHill() {
    push();
    fill(0, 128, 0);
    ellipse(375, 800, 800, 500);
    pop();
}


function drawHouseDoor() {
    push();
    fill(128, 64, 0);
    rect(352.5, 525, 40, 70);
    pop();
}

function drawHouseWindows() {
    push();
    fill(173, 216, 230);
    rect(405, 500, 40, 40);
    rect(300, 500, 40, 40);
    pop();
}

function drawSun() {
    push();
    fill(255,205,58);
    stroke(255, 255, 255);
    ellipse(25, 50, 300, 300);
    fill(255, 190, 0);
    stroke(255, 255, 255);
    ellipse(25, 50, 200, 200);
    pop();
}

function drawHandle() {
    push();
    fill(160, 64, 0);
    ellipse(385, 560, 10, 10);
    pop();
}