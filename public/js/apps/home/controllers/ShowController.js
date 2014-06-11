define( function ( require ) {
	'use strict';

	var App                       = require( 'App' );
	var Marionette                = require( 'marionette' );
	var classies                  = require( 'classie' );
	var ConfessionsCollection     = require( 'apps/home/collections/ConfessionsCollection' );
	var ConfessionsCollectionView = require( 'apps/home/views/ConfessionsCollectionView' );
	var ConfessionItemView        = require( 'apps/home/views/ConfessionItemView' );
	var SubmissionItemView        = require( 'apps/home/views/SubmissionItemView' );
	var LoginPageView             = require( 'apps/home/views/ModalItemView' );

	App.module( 'Home.Controller', function ( Controller ) {
		var layout = new App.Home.Views.PageLayout();
		console.log ( 'App.Home.Controller' );
		console.log ( App.Home.Views );
		Controller.Show = {

			'showHome' : function () {
				var a      = new ConfessionsCollection();

				a.fetch( {
					success : function ( data ) {
						var confessions = new App.Home.Views.ConfessionsCollectionView( {
							collection : data
						} );
						App.content.show( layout );
						layout.trendingRegion.show( confessions );
						layout.submissionRegion.show( new SubmissionItemView() );
						console.log('the history' + Backbone.history.length);
					}
				} );
			},

			'showConfession' : function ( id ) {

				var a = new ConfessionsCollection();
				a = new a.model();
				a.fetch( {

					url : '/confessions/' + id ,

					success : function ( data ) {

						App.content.show( layout );
						classies.remove( $( '#msgOverlay' )[0], 'overlay-closed' );
						classies.remove( $( '.wrapper' )[0], 'sendtoForward' );
						classies.add( $( '#msgOverlay' )[0], 'overlay-open' );
						classies.add( $( '.wrapper' )[0], 'sendtoBack');

						var confession = new App.Home.Views.ModalItemView( { model : data } );
						layout.modalRegion.show( confession );

					},
					error : function () {
						alert( 'An error has occured! Please try again later.' );
					}

				} );

			},

			'showLoginPage' : function () {

				App.content.show( layout );
				var login = new App.Home.Views.LoginPageView();
				App.content.show( login );
			}

		};

	} );

} );
