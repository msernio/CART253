// /**
//  * Class-Ex 1 - Week 9
//  * Mark Sernio
//  * 
//  */

// "use strict";

// let x_f1=100;
// let f1_width = 20;
// let f1_height = 150;
// let y_f1 = 500-f1_height;
// let f1_petal_width = 75;

// let x_f2=200;
// let f2_width = 20;
// let f2_height = 80;
// let y_f2 = 500-f2_height;
// let f2_petal_width = 50;

// let x_f3=350;
// let f3_width = 20;
// let f3_height = 100;
// let y_f3 = 500-f3_height;
// let f3_petal_width = 60;


// /**
//  * OH LOOK I DIDN'T DESCRIBE SETUP!!
// */
// function setup() {
//     createCanvas(500, 500);
    
// }


// /**
//  * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
// */
// function draw() {
//     background('DodgerBlue');

//     // stem
//     push();
//         noStroke();
//         fill("DarkMagenta");
//         rect(x_f1, y_f1, f1_width, f1_height);
//     pop();

//     //petal
//     push();
//         strokeWeight(4);
//         stroke("DarkOrchid");
//         fill("HotPink");
//         ellipse(x_f1 + f1_width/2, y_f1 - f1_petal_width/2, f1_petal_width, f1_petal_width);
//     pop();

//     // Flower 2
//      // stem
//         push();
//             noStroke();
//             fill("DarkMagenta");
//             rect(x_f2, y_f2, f2_width, f2_height);
//         pop();

//         //petal
//         push();
//             strokeWeight(4);
//             stroke("DarkTurquoise");
//             fill("HotPink");
//             ellipse(x_f2 + f2_width/2, y_f2 - f2_petal_width/2, f2_petal_width, f2_petal_width);
//         pop();


//         // Flower 3
//             // stem
//                 push();
//                     noStroke();
//                     fill("DarkMagenta");
//                     rect(x_f3, y_f3, f3_width, f3_height);
//                 pop();

//                 //petal
//                 push();
//                     strokeWeight(4);
//                     stroke("Red");
//                     fill("HotPink");
//                     ellipse(x_f3 + f3_width/2, y_f3 - f3_petal_width/2, f3_petal_width, f3_petal_width);
//                 pop();


// }



// /**
//  * Class-Ex 1 - Week 9
//  * Mark Sernio
//  * 
//  */

// "use strict";

// let flowerOne = {
//     x: 100,
//     y: 500 - 150,
//     width: 20,
//     height: 150,
//     petal_width: 75,
//     fillStem: "DarkMagenta",
//     strokePetal: "DarkOrchid",
//     fillPetal: "HotPink",
// }

// let flowerTwo = {
//     x: 200,
//     y: 500 - 80,
//     width: 20,
//     height: 80,
//     petal_width: 75,
//     fillStem: "DarkMagenta",
//     strokePetal: "DarkOrchid",
//     fillPetal: "HotPink",}

// let flowerThree = {
//     x: 350,
//     y: 500 - 120,
//     width: 20,
//     height: 120,
//     petal_width: 90,
//     fillStem: "DarkMagenta",
//     strokePetal: "DarkOrchid",
//     fillPetal: "HotPink",
// }


// /**
//  * OH LOOK I DIDN'T DESCRIBE SETUP!!
// */
// function setup() {
//     createCanvas(500, 500);
    
// }


// /**
//  * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
// */
// function draw() {
//     background('DodgerBlue');

//     //Flower 1
//     // stem
//     push();
//         noStroke();
//         fill(flowerOne.fillStem);
//         rect(flowerOne.x, flowerOne.y, flowerOne.width, flowerOne.height);
//     pop();

//     //petal
//     push();
//         strokeWeight(4);
//         stroke(flowerOne.strokePetal);
//         fill(flowerOne.fillPetal);
//         ellipse(flowerOne.x + flowerOne.width/2, flowerOne.y - flowerOne.petal_width/2, flowerOne.petal_width, flowerOne.petal_width);
//     pop();

//         //Flower 2
//         // stem
//         push();
//             noStroke();
//             fill(flowerTwo.fillStem);
//             rect(flowerTwo.x, flowerTwo.y, flowerTwo.width, flowerTwo.height);
//         pop();

//         //petal
//         push();
//             strokeWeight(4);
//             stroke(flowerTwo.strokePetal);
//             fill(flowerTwo.fillPetal);
//             ellipse(flowerTwo.x + flowerTwo.width/2, flowerTwo.y - flowerTwo.petal_width/2, flowerTwo.petal_width, flowerTwo.petal_width);
//         pop();

//             //Flower 3
//             // stem
//             push();
//                 noStroke();
//                 fill(flowerThree.fillStem);
//                 rect(flowerThree.x, flowerThree.y, flowerThree.width, flowerThree.height);
//             pop();

//             //petal
//             push();
//                 strokeWeight(4);
//                 stroke(flowerThree.strokePetal);
//                 fill(flowerThree.fillPetal);
//                 ellipse(flowerThree.x + flowerThree.width/2, flowerThree.y - flowerThree.petal_width/2, flowerThree.petal_width, flowerThree.petal_width);
//             pop();

// }


// /**
//  * Class-Ex 1 - Week 9
//  * Mark Sernio
//  * 
//  * Functions
//  */

// "use strict";

// // flower Objects
// let flowerOne = {
//     x: 100,
//     y: 500 - 150,
//     width: 20,
//     height: 150,
//     petal_width: 75,
//     fillStem: "DarkMagenta",
//     strokePetal: "DarkOrchid",
//     fillPetal: "HotPink",
// }

// let flowerTwo = {
//     x: 200,
//     y: 500 - 80,
//     width: 20,
//     height: 80,
//     petal_width: 75,
//     fillStem: "DarkMagenta",
//     strokePetal: "DarkOrchid",
//     fillPetal: "HotPink",}

// let flowerThree = {
//     x: 350,
//     y: 500 - 120,
//     width: 20,
//     height: 120,
//     petal_width: 90,
//     fillStem: "DarkMagenta",
//     strokePetal: "DarkOrchid",
//     fillPetal: "HotPink",
// }

// /**
//  * OH LOOK I DIDN'T DESCRIBE SETUP!!
// */
// function setup() {
//     createCanvas(500, 500);
    
// }


// /**
//  * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
// */
// function draw() {
//     background('DodgerBlue');

//     drawFlower(flowerOne);
//     drawFlower(flowerTwo);
//     drawFlower(flowerThree);


// }

// // Passes the OBJECT through
// function drawFlower(flower) {
//     //Flower 1
//     // stem
//     push();
//         noStroke();
//         fill(flower.fillStem);
//         rect(flower.x, flower.y, flower.width, flower.height);
//     pop();

//     //petal
//     push();
//         strokeWeight(4);
//         stroke(flower.strokePetal);
//         fill(flower.fillPetal);
//         ellipse(flower.x + flower.width/2, flower.y - flower.petal_width/2, flower.petal_width, flower.petal_width);
//     pop();
// }


// /**
//  * Class-Ex 1 - Week 9
//  * Mark Sernio
//  * 
//  * Arrays
//  */

// "use strict";

// // flower Objects
// // let flowerOne = {
// //     x: 100,
// //     y: 500 - 150,
// //     width: 20,
// //     height: 150,
// //     petal_width: 75,
// //     fillStem: "DarkMagenta",
// //     strokePetal: "DarkOrchid",
// //     fillPetal: "HotPink",
// // }

// // let flowerTwo = {
// //     x: 200,
// //     y: 500 - 80,
// //     width: 20,
// //     height: 80,
// //     petal_width: 75,
// //     fillStem: "DarkMagenta",
// //     strokePetal: "DarkOrchid",
// //     fillPetal: "HotPink",}

// // let flowerThree = {
// //     x: 350,
// //     y: 500 - 120,
// //     width: 20,
// //     height: 120,
// //     petal_width: 90,
// //     fillStem: "DarkMagenta",
// //     strokePetal: "DarkOrchid",
// //     fillPetal: "HotPink",
// // }


// // let flower = [flowerOne, flowerTwo, flowerThree, ];

// /**
//  * OH LOOK I DIDN'T DESCRIBE SETUP!!
// */
// function setup() {
//     createCanvas(500, 500);
//     let fourthFlower = createFlower(350, 200, 20, 100, 80);
//     flower.push(fourthFlower);
//     console.log(flower);
// }


// /**
//  * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
// */
// function draw() {
//     background('DodgerBlue');

//     // for(let i=0; i<3; i++) {
//     //     drawFlower(flower[i])
//     // }

//     for(let i=0; i<flower.length; i++) {
//         drawFlower(flower[i])
//     }

// }

// //'Flower' passes the OBJECT through
// function drawFlower(flower) {
//     //Flower 1
//     // stem
//     push();
//         noStroke();
//         fill(flower.fillStem);
//         rect(flower.x, flower.y, flower.width, flower.height);
//     pop();

//     //petal
//     push();
//         strokeWeight(4);
//         stroke(flower.strokePetal);
//         fill(flower.fillPetal);
//         ellipse(flower.x + flower.width/2, flower.y - flower.petal_width/2, flower.petal_width, flower.petal_width);
//     pop();
// }

// function createFlower(stemX, stemY, stemW, stemH, petalW) {
//     let tempFlower = {
//         x: stemX,
//         y: stemY,
//         width: stemW,
//         height: stemH,
//         petal_width: petalW,
//         fillStem: "DarkMagenta",
//         strokePetal: "DarkOrchid",
//         fillPetal: "HotPink",
//     }

//     return tempFlower;
// }


// function mousePressed() {{
//     let fifthFlower = createFlower(mouseX, mouseY-100, 20, 100, 80);
//     flower.push(fifthFlower);
//     }

// }



/**
//  * Class-Ex 1 - Week 9
//  * Mark Sernio
//  * 
//  * Using a JSON
//  */

"use strict";

let flower = [];

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
async function setup() {
    createCanvas(500, 500);

    let jsonData = await loadJSON("assets/data/flowers.json");
    flower = jsonData.flowers;

    // let fourthFlower = createFlower(350, 200, 20, 100, 80);
    // flower.push(fourthFlower);
    // console.log(flower);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background('DodgerBlue');

    // for(let i=0; i<3; i++) {
    //     drawFlower(flower[i])
    // }

    for(let i=0; i<flower.length; i++) {
        drawFlower(flower[i])
    }

}

//'Flower' passes the OBJECT through
function drawFlower(flower) {
    //Flower 1
    // stem
    push();
        noStroke();
        fill(flower.fillStem);
        rect(flower.x, flower.y, flower.width, flower.height);
    pop();

    //petal
    push();
        strokeWeight(4);
        stroke(flower.strokePetal);
        fill(flower.fillPetal);
        ellipse(flower.x + flower.width/2, flower.y - flower.petal_width/2, flower.petal_width, flower.petal_width);
    pop();
}

function createFlower(stemX, stemY, stemW, stemH, petalW) {
    let tempFlower = {
        x: stemX,
        y: stemY,
        width: stemW,
        height: stemH,
        petal_width: petalW,
        fillStem: "DarkMagenta",
        strokePetal: "DarkOrchid",
        fillPetal: "HotPink",
    }

    return tempFlower;
}


function mousePressed() {{
    let fifthFlower = createFlower(mouseX, mouseY-100, 20, 100, 80);
    flower.push(fifthFlower);
    }

}