/**
 * Conditional Prototypes 1
 * Mark Sernio
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let width = 750;
let height = 750;

let circle = {
    x: width/4,
    y: height/4,
    size: 90,
    r: 255,
    g: 0,
    b: 0,

    lightFill: (0, 100, 0),
    normalFill: (255, 0, 0)
}

let distance = dist(circle.x, circle.y, mouseX, mouseY);
let mouseIsMoving = (movedX >0 || movedY >0);

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(width, height);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0);


    push();
    fill(circle.r, circle.g, circle.b);
    ellipse(circle.x, circle.y, circle.size, circle.size);

    fill(circle.r, circle.g, circle.b);
    ellipse(circle.x+ width/2, circle.y, circle.size, circle.size);

    fill(circle.r, circle.g, circle.b);
    ellipse(circle.x+ width/2, circle.y+ height/2, circle.size, circle.size);

    fill(circle.r, circle.g, circle.b);
    ellipse(circle.x, circle.y+ height/2, circle.size, circle.size);
    pop();


    if(distance < circle.size/2 && mouseIsMoving) {
        circle.normalFill = circle.lightFill;
    }

    else{
        circle.normalFill = circle.normalFill;
    }


}
