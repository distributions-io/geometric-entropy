'use strict';

// MODULES //

var isNumber = require( 'validate.io-number-primitive' );


// FUNCTIONS //

/**
* FUNCTION log2( x )
*	Returns the logarithm of `x` with base 2.
*
* @param {Number} x - input value
* @returns {Number} logarithm of x with respect to base 2
*/
function log2( x ) {
	return Math.log( x ) / Math.log( 2 );
} // end FUNCTION log2()


// ENTROPY //

/**
* FUNCTION entropy( p )
*	Computes the distribution entropy for a geometric distribution with parameter p.
*
* @param {Number} p - success probability
* @returns {Number} distribution entropy
*/
function entropy( p ) {
	if ( !( isNumber(p) && 0 <= p && p <= 1) ) {
		return NaN;
	}
	var q = 1 - p;
	return ( - q * log2( q ) - p * log2( p ) ) / p;
} // end FUNCTION entropy()


// EXPORTS

module.exports =  entropy;
