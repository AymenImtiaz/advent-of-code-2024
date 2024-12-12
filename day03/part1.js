const fs = require('fs');

const input = fs.readFileSync( __dirname + '/input data.txt', 'utf8' );

const validMulipliers = input.match( /mul\(\b[0-9]{1,3}\b,\b[0-9]{1,3}\b\)/g);

let total = 0;

validMulipliers.forEach( multiplier => {
	const multiples = multiplier.match(/\b[0-9]{1,3}\b/g);
	total += multiples[0] * multiples[1];
});

console.log('total: ', total);