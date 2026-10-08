/**
 * Conditional Prototypes 1
 * Mark Sernio
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let width = 500;
let height = 500;

let circle = {
    x: width/4,
    y: height/4,
    size: 90,
    r: 255,
    g: 0,
    b: 0,

    lightFill: "#1ce21c",
    normalFill: "#ff0000",

    currentFill: "#ff0000"
}


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

    let distance = dist(circle.x, circle.y, mouseX, mouseY);


    push();
        fill(circle.currentFill);
        ellipse(circle.x, circle.y, circle.size, circle.size);

        fill(circle.currentFill);
        ellipse(circle.x+ width/2, circle.y, circle.size, circle.size);

        fill(circle.currentFill);
        ellipse(circle.x+ width/2, circle.y+ height/2, circle.size, circle.size);

        fill(circle.currentFill);
        ellipse(circle.x, circle.y+ height/2, circle.size, circle.size);
    pop();

    if(distance < circle.size/2) {
        circle.currentFill = circle.lightFill;
    }

    else {
        circle.currentFill = circle.normalFill;
    }

}


