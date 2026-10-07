/**
 * class-five Ex1
 * Mark Sernio
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/

let mouseTriggerBall ={
    x: 200,
    y: 200,
    size: 50,
    speed: 0,
    fillColour:{
        r: 0,
        g: 0,
        b: 255
    }
}

function setup() {
    createCanvas(500,500);
    background(0);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0);
    fill(mouseTriggerBall.fillColour.r, mouseTriggerBall.fillColour.g, mouseTriggerBall.fillColour.b);
    ellipse(mouseTriggerBall.x, mouseTriggerBall.y, mouseTriggerBall.size, mouseTriggerBall.size);

    moveBall();
}

function moveBall(){
    mouseTriggerBall.x = mouseTriggerBall.x + mouseTriggerBall.speed;
}

function mousePressed(){
    mouseTriggerBall.speed = 1;
}

function mouseReleased(){
    mouseTriggerBall.speed = 0;

}

// function mousePressed(){
//     fill(random(0, 225), random(0, 225), random(0, 225));
//     ellipse(mouseX, mouseY, mouseTriggerBall.size);
// }
