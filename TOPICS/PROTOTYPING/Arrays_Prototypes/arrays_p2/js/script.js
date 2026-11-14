/**
 * Arrays Prototype 2
 * Mark Sernio
 * 
 * 
 * 
 * Uses:
 * p5.js
 * https://p5js.org
 */

"use strict";

let fortunes = ["", "YES","CERTAINLY", "NO", "MAYBE", "DONT COUNT ON IT", "UNLIKELY", "POSSIBLY"];

let fortuneIndex = 0;

let shaking = false;

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(500, 500)

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background('black');


    let shakeX = 0;

    if (shaking) {
        shakeX = random(-6,6)
    }
   
    push()
        fill('white');
        noStroke();
        ellipse(height/2  + shakeX, width/2, 250);
    pop()

    push()
        fill(0);
        textSize(22);
        textAlign(CENTER, CENTER);
        text(fortunes[fortuneIndex], width/2 + shakeX, height/2);
    pop()


}


function mousePressed() {

    fortuneIndex = floor(random(1, fortunes.length));

    shaking = true;
    setTimeout(stopShake, 500);
}

function stopShake() {
    shaking = false;

}