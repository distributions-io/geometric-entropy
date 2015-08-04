'use strict';

// MODULES //

var ENTROPY = require( './number.js' );


// ENTROPY //

/**
* FUNCTION: entropy( out, x )
*	Computes the distribution entropy for each parameter stored in a matrix.
*
* @param {Matrix} out - output matrix
* @param {Matrix} x - input matrix
* @returns {Matrix} output matrix
*/
function entropy( out, x ) {
	var len = x.length,
		i;
	if ( out.length !== len ) {
		throw new Error( 'entropy()::invalid input arguments. Input and output matrices must be the same length.' );
	}
	for ( i = 0; i < len; i++ ) {
		out.data[ i ] = ENTROPY( x.data[ i ] );
	}
	return out;
} // end FUNCTION entropy()


// EXPORTS //

module.exports = entropy;
