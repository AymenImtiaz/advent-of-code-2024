const fs = require('fs');
const input = fs.readFileSync( __dirname + '/input data.txt', 'utf8' );

const rows = input.split('\n');

let xmasCount = 0;

rows.forEach(( row, rowIndex ) => {
	row.split('').forEach(( char, columnIndex ) => {
		if ( rowIndex > 0 && rowIndex < rows.length - 1 && columnIndex > 0 &&  columnIndex < row.length - 1 && char === 'A' ) {
			if( ( rows[ rowIndex - 1 ][ columnIndex - 1 ] === 'M' && rows[ rowIndex + 1 ][ columnIndex + 1 ] === 'S' ) 
				|| 
				( rows[ rowIndex - 1 ][ columnIndex - 1 ] === 'S' && rows[ rowIndex + 1 ][ columnIndex + 1 ] === 'M' ) ) {
					if( ( rows[ rowIndex - 1 ][ columnIndex + 1 ] === 'M' && rows[ rowIndex + 1 ][ columnIndex - 1 ] === 'S' ) 
						|| 
						( rows[ rowIndex - 1 ][ columnIndex + 1 ] === 'S' && rows[ rowIndex + 1 ][ columnIndex - 1 ] === 'M' ) ) {
						xmasCount++;
					}
				}			
		}
	});
});

console.log('xmasCount: ', xmasCount);
