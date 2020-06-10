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

function getLetter(s) {
    let letter;
    // Write your code here
    const setA = 'aeiou';
    const setB = 'bcdfg';
    const setC = 'hjklm';
    const setD = 'npqrstvwxyz';

    switch(true) {
        case setA.includes(s[0]):
            letter = 'A';
            break;
        case setB.includes(s[0]):
            letter = 'B';
            break;
        case setC.includes(s[0]):
            letter = 'C';
            break;
        case setD.includes(s[0]):
            letter = 'D';
            break;
    }
    return letter;
}


function main() {
    const s = readLine();

    console.log(getLetter(s));
}