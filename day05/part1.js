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
	let printable = true;

	const pages = update.trim().split(',');
	for( let i = 0; i < pages.length; i++ ) {
		const localXs = pages.slice( 0, i );
		const localYs = pages.slice( i + 1 );

		if( localXs.some( localX => globalYs.get( pages[i] )?.has( localX ) ) 
			|| 
			localYs.some( localY => globalXs.get( pages[i] )?.has( localY ) ) ) {
				printable = false;
				break;
		}
	}

	if( printable ) {
		sum += Number( pages[ Math.floor( pages.length / 2 ) ] );
	}
});

console.log('sum: ', sum);