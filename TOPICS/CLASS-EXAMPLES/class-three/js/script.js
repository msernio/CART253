/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/


// let ellipse_Size = 150;
// let rect_Size = 10;


let sun = {
     sunX:20,
     sunY:50,
     sunSize:50,
     r:255,
     g:255,
     b:0
}

let bird = {
     x:100,
     y:100,
     size:30,
     r:0,
     g:255,
     b:0
}

let backGroundColor = 0;

function setup() {
    createCanvas(400,400);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(backGroundColor, backGroundColor, backGroundColor);

    fill(sun.r, sun.g, sun.b);
    ellipse(sun.sunX, sun.sunY, sun.sunSize, sun.sunSize);

    fill(bird.r, bird.g, bird.b);
    ellipse(bird.x, bird.y, bird.size, bird.size);

    bird.x = bird.x + 1;
    // bird.x = constrain(bird.x, 0, width-100);
    bird.x = constrain(bird.x,0,width-100);
    console.log(bird.x);
    backGroundColor= backGroundColor+1;
   
}


// Test lines of code
    // fill(random(0,255), 0, 0);
    
    // Will always draw a circle in the center of the canvas
        // ellipse(width/2, height/2, 50, 50);

    // Will keep the circle in the center of wherever the mouse is
        // ellipse(mouseX, mouseY, ellipse_Size, ellipse_Size);




        // ellipse(250, 250, ellipse_Size, ellipse_Size);

// fill(0, 0, 255);
// rect(rect_Size, height/2, rect_Size, rect_Size);

// ellipse_Size = ellipse_Size-1;
// rect_Size = rect_Size+0.25;