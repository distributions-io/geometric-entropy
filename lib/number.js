'use strict';

// MODULES //

var isNumber = require( 'validate.io-number-primitive' );


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
	return ( - q * log2( q ) - p * log2( p ) ) / p;
} // end FUNCTION entropy()


// EXPORTS

module.exports =  entropy;
