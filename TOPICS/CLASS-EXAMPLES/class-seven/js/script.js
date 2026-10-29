/**
 * ClassEx1
 * Mark Sernio
 * 
 *
 */

"use strict";

let arrayOfOddNumbers = [1,3,5,7,9,11,13,15,17];
let currentArrayPosition = 0;

let sentence = "Hello World";
let answerOpt = ["yes", "likely", "maybe", "not likely", "no"];

let answerOptIndex = 0;


let square = {
    x: 200,
    y: 100,
    w: 20,
    h:50
}

function createSquare(temp_x, temp_y){
    let tempSquare = {
        x: temp_x,
        y: temp_y,
        w: 20,
        h:50
    }

    return tempSquare;

}


function setup() {
    createCanvas(500,500);
    background(0);

    // // length
    // console.log(arrayOfOddNumbers.length); // DO NOT FORGET
    // console.log(arrayOfOddNumbers[8])

    // // overwriting an array number
    // arrayOfOddNumbers[3] = 21;
    // console.log(arrayOfOddNumbers[3]);
    // console.log(arrayOfOddNumbers[currentArrayPosition])

    console.log(answerOpt.length);

}


function draw() {
    background('skyblue');

    // displayText(sentence);
    // displayText(answerOpt[answerOptIndex]);

    let newSquare = createSquare();
    drawSquareTwo(newSquare);

}


function displayText (referenceString){
    push();
        fill(255);
        textSize(32);
        textAlign(CENTER, CENTER);
        text(referenceString, width/2, height/2);

        text(answerOptIndex, width/2, height/2+100);
    pop()
}

function mousePressed() {

    if (answerOptIndex>answerOpt.length-1){
            answerOptIndex=answerOptIndex+1
    }

    else{
        answerOptIndex=0
    }
}

function keyPressed(){
    let newElement='*';
    //  answerOpt[answerOpt.length]= newElement;
    answerOpt.push(newElement)

}

function drawSquareTwo()