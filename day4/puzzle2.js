/*
--- Part Two ---
The Elf looks quizzically at you. Did you misunderstand the assignment?

Looking for the instructions, you flip over the word search to find that this isn't actually an XMAS puzzle; it's an X-MAS puzzle in which you're supposed to find two MAS in the shape of an X. One way to achieve that is like this:

M.S
.A.
M.S
Irrelevant characters have again been replaced with . in the above diagram. Within the X, each MAS can be written forwards or backwards.

Here's the same example from before, but this time all of the X-MASes have been kept instead:

.M.S......
..A..MSMS.
.M.S.MAA..
..A.ASMSM.
.M.S.M....
..........
S.S.S.S.S.
.A.A.A.A..
M.M.M.M.M.
..........
In this example, an X-MAS appears 9 times.

Flip the word search from the instructions back over to the word search side and try again. How many times does an X-MAS appear?
*/

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
