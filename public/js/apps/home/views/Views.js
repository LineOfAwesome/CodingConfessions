define( function ( require ) {
	'use strict';

	var App = require( 'App' );

	App.module( 'Home.Views', function ( Views ) {
		console.log ( 'Views!!!' );
		Views.PageLayout                = require( 'apps/home/views/HomePageLayoutView' );
		Views.ConfessionItemView        = require( 'apps/home/views/ConfessionItemView' );
		Views.ConfessionsCollectionView = require( 'apps/home/views/ConfessionsCollectionView' );
		Views.ModalItemView             = require( 'apps/home/views/ModalItemView' );
		Views.LoginPageView             = require( 'apps/home/views/LoginPageView' );

	} );

} );
