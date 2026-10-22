/**
 * class-six Ex1
 * Mark Sernio
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let circleX = 250;
let circleY = 250;

let circle_X_2 = 220;
let circle_Y_2 = 10;


/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/


function setup() {
    createCanvas(500,500);
    background('skyblue');
    let newVal = squareNum(2);
    let newVal_2 = squareNum(5);
    console.log(newVal);
    console.log(newVal_2);
 
}

function changeY() {
    circleY = circleY-1;
    console.log(circleY);
}


function squareNum(num){
    let sqaureNumValue = num*num;
    return sqaureNumValue;
}

function calculateCloseness(objX,objY){
    let d = dist(mouseX,mouseY,objX,objY)
    let mappedVal = map(d,0,250,0,255)
    return mappedVal;

}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/

function draw() {
    background('skyblue');

    // complexCircles()
    // complexCircles_2()
    // complexCircles_3()
    let newVal = calculateCloseness(circleX,circleY);
    console.log(newVal);

    complexCircles_P(circleX,circleY, 80, 80, newVal);
    changeY
    complexCircles_P(circle_X_2,circle_Y_2, 100, 100, 0);


}


function complexCircles_P(x,y,w,h,newVal){
    push();
        console.log(newVal);
        fill(255,191,0);
        ellipse(x,y,w,h);

        fill(255,2,255);
        ellipse(x,y,w-20,h-20);

        fill(255,191,0);
        ellipse(x,y,w-40,h-40);
    pop();
}

// function complexCircles(){
//     push();
//         fill(255,191,0);
//         ellipse(width/2,height/2,80,80);

//         fill(255,2,255);
//         ellipse(width/2,height/2,60,60);

//         fill(255,191,0);
//         ellipse(width/2,height/2,40,40);
//     pop();
// }

// function complexCircles_2(){
//     push();
//         fill(255,191,0);
//         ellipse(width/2-100,height/2,80,80);

//         fill(255,2,255);
//         ellipse(width/2-100,height/2,60,60);

//         fill(255,191,0);
//         ellipse(width/2-100,height/2,40,40);
//     pop();
// }

// function complexCircles_3(){
//     push();
//         fill(255,191,0);
//         ellipse(width/2-100,height/2-100,80,80);

//         fill(255,2,255);
//         ellipse(width/2-100,height/2-100,60,60);

//         fill(255,191,0);
//         ellipse(width/2-100,height/2-100,40,40);
//     pop();
// }



