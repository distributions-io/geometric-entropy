'use strict';

// MODULES //

var ENTROPY = require( './number.js' );


// ENTROPY //

/**
* FUNCTION: entropy( out, p )
*	Computes the distribution entropy for parameters stored in a typed array.
*
* @param {Array|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} out - output array
* @param {Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} p - input array
* @returns {Number[]|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} output array
*/
function entropy( out, p ) {
	var len = p.length,
		i;
	for ( i = 0; i < len; i++ ) {
		out[ i ] = ENTROPY( p[ i ] );
	}
	return out;
} // end FUNCTION entropy()


// EXPORTS //

module.exports = entropy;
