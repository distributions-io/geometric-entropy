/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),
	
	// Deep close to:
	deepCloseTo = require( './utils/deepcloseto.js' ),

	// Module to be tested:
	entropy = require( './../lib/deepset.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'deepset entropy', function tests() {

	it( 'should export a function', function test() {
		expect( entropy ).to.be.a( 'function' );
	});

	it( 'should compute the distribution entropy and deep set', function test() {
		var data, expected;

		data = [
			{'x':0.2},
			{'x':0.4},
			{'x':0.6},
			{'x':0.8}
		];

		data = entropy( data, 'x' );
		expected = [
			{'x':3.6096405},
			{'x':2.4273765},
			{'x':1.6182510},
			{'x':0.9024101}
		];

		assert.deepEqual( data, expected );

		// Custom separator...
		data = [
			{'x':[9,0.2]},
			{'x':[9,0.4]},
			{'x':[9,0.6]},
			{'x':[9,0.8]}
		];

		data = entropy( data, 'x/1', '/' );
		expected = [
			{'x':[9,3.6096405]},
			{'x':[9,2.4273765]},
			{'x':[9,1.6182510]},
			{'x':[9,0.9024101]}
		];

		assert.deepEqual( data, expected, 'custom separator' );
	});

	it( 'should return an empty array if provided an empty array', function test() {
		assert.deepEqual( entropy( [], 'x' ), [] );
		assert.deepEqual( entropy( [], 'x', '/' ), [] );
	});

	it( 'should handle non-numeric values by setting the element to NaN', function test() {
		var data, actual, expected;

		data = [
			{'x':true},
			{'x':null},
			{'x':[]},
			{'x':{}}
		];
		actual = entropy( data, 'x' );

		expected = [
			{'x':NaN},
			{'x':NaN},
			{'x':NaN},
			{'x':NaN}
		];

		assert.deepEqual( data, expected );
	});

});
