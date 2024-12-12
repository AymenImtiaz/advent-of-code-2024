const fs = require('fs');

const input = fs.readFileSync( __dirname + '/input data.txt', 'utf8' );

const lines = input.split('\n');

let safeReports = 0;

lines.forEach( line => {

	const report = line.trim().split(/\s+/);
	const sortedInAscendingOrder = [ ...report ].sort( ( a, b ) => a - b );
	const sortedInDescendingOrder = [ ...report ].sort( ( a, b ) => b - a );

	if( JSON.stringify( report ) === JSON.stringify( sortedInAscendingOrder ) || JSON.stringify( report ) === JSON.stringify( sortedInDescendingOrder ) ) {

		let isSafe = true;
		
		for ( let index = 0; index < report.length - 1; index++ ) {
			const difference = Math.abs( report[ index ] - report[ index + 1 ] );
			if( difference < 1 || difference > 3 ) {
				isSafe = false;
				break;
			}
		}	

		if( isSafe ) {
			safeReports++;
		}
	}	
});

console.log('safe reports: ', safeReports);
