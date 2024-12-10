const fs = require('fs');
const input = fs.readFileSync( __dirname + '/input data.txt', 'utf8' );

const rows = input.split('\n');

let column = rows[0][0] + rows[1][0] + rows[2][0] + rows[3][0] + rows[4][0];
console.log('column: ', column);

column += rows[5][0];

console.log('column: ', column);