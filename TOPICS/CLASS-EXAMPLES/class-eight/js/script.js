/**
 * Class-Ex 2 - Week 7
 * Mark Sernio
 * 
 * 
 */

"use strict";

let startColor = undefined;
let endColor = undefined;
let gradientIndex = undefined;
let y = undefined;
let i = undefined;

const ELLIPSE_NUM = 20;


/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
async function setup() {
    createCanvas(500, 500);
    imageMode(CENTER);

    startColor = color(255, 0, 255);
    endColor = color(0, 255, 0);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background('skyblue');
    for (let i = 0; i<ELLIPSE_NUM; i++){
        drawEllipse();
    }

    // gradientIndex = 0;
    // y=0;

    // while(gradientIndex < 1) {
    //     let rectColor = 
    //     lerpColor(startColor, endColor, gradientIndex);
    //     noStroke();
    //     fill(rectColor);
    //     rect(0,y, width, 2);
    //     // change colour to next colour
    //     gradientIndex += 0.004;
    //     // change Y according to height of rect
    //     y+= 2;
    // }




    // i=0;
    // y = height/2;
    // while(i < 9) {

    //     text(i,width/2, y);
    //     y+= 20;

    //     i=i+1 //i++
    // }

    // y = height/2;
    // for(let i = 0; i<9; i++){
    //     text(i,20, y);
    //     y+= 20;
    // }
}

function drawEllipse() {
    push();
        let x = random(0, width);
        let y = random(0, height);
        fill(0, 255, 0);
        ellipse(x, y, 50, 50);
    pop();  
}