/*
--- Part Two ---
While the Elves get to work printing the correctly-ordered updates, you have a little time to fix the rest of them.

For each of the incorrectly-ordered updates, use the page ordering rules to put the page numbers in the right order. For the above example, here are the three incorrectly-ordered updates and their correct orderings:

75,97,47,61,53 becomes 97,75,47,61,53.
61,13,29 becomes 61,29,13.
97,13,75,29,47 becomes 97,75,47,29,13.
After taking only the incorrectly-ordered updates and ordering them correctly, their middle page numbers are 47, 29, and 47. Adding these together produces 123.

Find the updates which are not in the correct order. What do you get if you add up the middle page numbers after correctly ordering just those updates?
*/

const fs = require('fs');
const input = fs.readFileSync( __dirname + '/input data.txt', 'utf8' );

const [ rules, updates ] = input.split('\n\n');
const globalXs = new Map();
const globalYs = new Map();

rules.split('\n').forEach( rule => {
	const [ X, Y ] = rule.trim().split('|');

	if ( !globalYs.has( X ) ) {
		globalYs.set( X, new Set() );
	}
	globalYs.get( X ).add( Y ); 

	if ( !globalXs.has( Y ) ) {
		globalXs.set( Y, new Set() );
	}
	globalXs.get(Y).add(X);
});

let sum = 0;

updates.split('\n').forEach( update => {
	const pages = update.trim().split(',');
	for( let i = 0; i < pages.length; i++ ) {
		const localXs = pages.slice( 0, i );
		const localYs = pages.slice( i + 1 );

		if( localXs.some( localX => globalYs.get( pages[i] )?.has( localX ) ) 
			|| 
			localYs.some( localY => globalXs.get( pages[i] )?.has( localY ) ) ) {
				
				let correctlyOrderedPages = [];
				for ( let j = 0; j < pages.length; j++ ) {
					const numberOfXs = pages.filter(item => globalXs?.get( pages[j] )?.has(item)).length;
					correctlyOrderedPages[ numberOfXs ] = pages[j];
				}
				sum += Number( correctlyOrderedPages[ Math.floor( correctlyOrderedPages.length / 2 ) ] );
				break;
		}
	}
});

console.log('sum: ', sum);