/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Validate a value is NaN:
	isnan = require( 'validate.io-nan' ),

	// Module to be tested:
	entropy = require( './../lib/number.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'number entropy', function tests() {

	it( 'should export a function', function test() {
		expect( entropy ).to.be.a( 'function' );
	});

	it( 'should compute the distribution entropy', function test() {
		assert.closeTo( entropy( 0.2 ), 3.6096405, 1e-5 );
		assert.closeTo( entropy( 0.4  ), 2.4273765, 1e-5 );
		assert.closeTo( entropy( 0.6  ), 1.6182510, 1e-5 );
		assert.closeTo( entropy( 0.8  ), 0.9024101, 1e-5 );
	});

	it( 'should return `NaN` for invalid values of parameter p', function test() {
		assert.isTrue( isnan( entropy( -1 ) ) );
		assert.isTrue( isnan( entropy( 1.1 ) ) );
	});

});
