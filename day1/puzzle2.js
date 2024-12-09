const fs = require('fs');

const leftList = [];
const rightList = [];
const input = fs.readFileSync( __dirname + '/input data.txt', 'utf8' );

const lines = input.split('\n');

lines.forEach( line => {
	const [ left, right ] = line.trim().split(/\s+/);
	if ( left && right ) {
		leftList.push( left );
		rightList.push( right );
	}
});

let similarityScore = 0;

leftList.forEach( ( leftListItem ) => {
	similarityScore += leftListItem * rightList.filter( rightListItem => rightListItem === leftListItem ).length;
} );

console.log( 'similarityScore: ', similarityScore );
