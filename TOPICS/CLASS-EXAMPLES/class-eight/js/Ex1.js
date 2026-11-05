/**
 * Class-Ex 1 - Week 7
 * Mark Sernio
 * 
 * 
 */

"use strict";

let clownImage = undefined;

let x = 20;
let y = 20;
let imageWidth = 40;

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
async function setup() {
    createCanvas(500, 500);
    clownImage = await loadImage('assets/images/clown.png')
    imageMode(CENTER);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background('skyblue');
    //  reset x
    x=20;
    y=20;
    // while x is less than the width, do...
    while(x < width) {
        image(clownImage, x, y, imageWidth, imageWidth);
        
            // while(y < height) {
            // image(clownImage, x, y, imageWidth, imageWidth);
            // y = y + imageWidth;
            // }

        x = x + imageWidth;
        // y = 20;

    }


}