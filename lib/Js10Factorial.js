'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}
/*
 * Create the function factorial here
 */
function factorial(number) {
    var factorial = 2;

    if(number < 3) {
        return number;
    }

    for(var i = 3 ; i <= number ; i++) {
        factorial *= i;
    }

    return factorial;
}

function main() {
    const n = +(readLine());

    console.log(factorial(n));
}