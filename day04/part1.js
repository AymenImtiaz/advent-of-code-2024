const fs = require('fs');
const input = fs.readFileSync( __dirname + '/input data.txt', 'utf8' );

const rows = input.split('\n');
let columns = [];
let leftDiagonals = [];
let rightDiagonals = [];

rows.forEach(( row, rowIndex ) => {
	row.split('').forEach(( char, columnIndex ) => {
		//populate columns
		if ( !columns[ columnIndex ] ) {
			columns[ columnIndex ] = '';
		}
		columns[ columnIndex ] += char;

		//populate leftDiagonals
		if ( !leftDiagonals[ rowIndex + columnIndex ] ) {
			leftDiagonals[ rowIndex + columnIndex ] = '';
		}
		leftDiagonals[ rowIndex + columnIndex ] += char;

		//populate rightDiagonals
		if ( !rightDiagonals[ rowIndex - columnIndex + rows.length - 1 ] ) {
			rightDiagonals[ rowIndex - columnIndex  + rows.length - 1 ] = '';
		}
		rightDiagonals[ rowIndex - columnIndex  + rows.length - 1 ] += char
	});
});

const allArraysCombined = rows.concat(columns).concat(leftDiagonals).concat(rightDiagonals);
let xmasCount = 0;

allArraysCombined.forEach(( row ) => {
	xmasCount += ( row.match(/XMAS/g) || [] ).length;
	xmasCount += ( row.match(/SAMX/g) || [] ).length;
});

console.log('xmasCount: ', xmasCount);