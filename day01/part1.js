const fs = require('fs');

const leftList = [];
const rightList = [];
const input = fs.readFileSync( __dirname + '/input data.txt', 'utf8' );

const lines = input.split('\n');

lines.forEach(line => {
	const [ left, right ] = line.trim().split(/\s+/);
	if ( left && right ) {
		leftList.push( left );
		rightList.push( right );
	}
});

leftList.sort( (a, b) => a - b );
rightList.sort( (a, b) => a - b );

let distance = 0;

leftList.forEach(( leftListItem, index ) => {
	distance += Math.abs( leftListItem - rightList[ index ] );
});

console.log('distance: ',  distance);

