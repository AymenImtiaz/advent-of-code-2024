const fs = require('fs');

const input = fs.readFileSync( __dirname + '/input data.txt', 'utf8' );

const instructions = input.match(/(mul\(\b[0-9]{1,3}\b,\b[0-9]{1,3}\b\)|do\(\)|don't\(\))/g);

let total = 0;
let enableMul = true;

instructions.forEach( instruction => {
  if ( instruction === 'do()' ) {
    enableMul = true; 
  } else if ( instruction === "don't()" ) {
    enableMul = false;
  } else if ( instruction.startsWith( 'mul(' ) && enableMul ) {
    const multiples = instruction.match(/\b[0-9]{1,3}\b/g);
    total += multiples[0] * multiples[1];
  }
});

console.log('total: ', total);