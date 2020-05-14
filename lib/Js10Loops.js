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
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 * A better solution (bnyancat) */
function vowelsAndConsonants(s) {
	const vowels = 'aeiou';
	var consonants = '';

	for(var i = 0; i < s.length ; i++) {
		if(vowels.includes(s[i])) {
			console.log(s[i]);
		} else {
			consonants += s[i] + '\n';
		}
	}

	console.log(consonants.trim());
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 * My solution
function vowelsAndConsonants(s) {
    var vowels = true;

    for(var i = 0 ; i < 2 ; i++) {
        for(var j = 0 ; j < s.length ; j++) {
		const letter = s.charAt(j);
		if(vowels && isVowel(letter)){
			console.log(letter);
		} else if (!vowels && !isVowel(letter)) {
			console.log(letter);
		}
	}
	vowels = false;
    }
}

function isVowel(c) {
	return ['a', 'e', 'i', 'o', 'u'].
		indexOf(c.toLowerCase()) !== -1;
}
*/


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}
