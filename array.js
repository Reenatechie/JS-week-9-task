//Build a simple loop, inside a function that takes an array and prints the value of an array to the console.

function printArrayValues (num){
    for ( let i = 0; i < num.length; i++) {
        console.log(num[i]);
    } 
}

let numArray = [30, 40, 50, 60,70, 80];
printArrayValues(numArray);