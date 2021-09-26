console.log("JavaScript is loaded");

// properties (the data) of a ball
var color = prompt("What color would you like?");
const radius = 10;
let xVelocity = 5; // the speed of a ball on the x-axis
let yVelocity = 6; // the speed of a ball on the y-axis

// Je kan kiezen uit: blue, orange, yellow, red, pink, purple, green, black

function colorBouncingBall() {
    switch (color) {
        case "blue":
            color = "blue";
            break;
        case "orange":
            color = "orange";
            break;
        case "yellow":
            color = "yellow";
            break;
        case "red":
            color = "red";
            break;
        case "pink":
            color = "pink";
            break;
        case "purple":
            color = "purple";
            break;
        case "purple":
            color = "purple";
            break;
        case "green":
            color = "green";
            break;
        case "black":
            color = "black";
            break;
        default:
            text = "I have never heard of that color";
    }
}

createNewBall(radius, color, xVelocity, yVelocity);