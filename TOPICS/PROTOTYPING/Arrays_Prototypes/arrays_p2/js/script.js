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

let fortunes = ["YES","CERTAINLY", "NO", "MAYBE", "DONT COUNT ON IT", "UNLIKELY", "POSSIBLY"];

let fortuneIndex = 0;

let shaking = false;

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(500, 500)

     // // length
    console.log(fortuneIndex.length); // DO NOT FORGET
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background('black');

    push()
        fill('white');
        noStroke();
        ellipse(height/2, width/2, 250);
    pop()

    push()
        fill(0);
        textSize(22);
        textAlign(CENTER, CENTER);
        text(fortunes[fortuneIndex], width/2, height/2);
    pop()


}


// random(7) gives a decimal like 3.4, and floor() rounds it down to 3, which is a valid position. 
// Because it uses fortunes.length, it still works if you add more fortunes later.

function mousePressed() {

    fortuneIndex = floor(random(fortunes.length));

    shaking = true;
    setTimeout(stopShake, 500);
}

function stopShake() {
    shaking = false;

}