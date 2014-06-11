define( function ( require ) {
	'use strict';

	var App = require( 'App' );

	var homes  = require( 'home/Home' );
	var admin = require( 'admin/Admin' );

	homes( );
	admin( );

} );
