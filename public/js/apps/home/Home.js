define( function ( require ) {
	'use strict';

	return function () {

		var $        = require( 'jquery' );
		var Backbone = require( 'backbone' );
		var App      = require( 'App' );
		var Router   = require( 'Router' );

		require( 'apps/home/views/Views' );
		require( 'apps/home/controllers/ShowController' );

		App.module( 'Home', function ( Home ) {

			require( 'apps/home/views/Views' );
			require( 'apps/home/controllers/ShowController' );

			Home.Router = Router.extend( {
				'appRoutes' : {

					''         : 'showHomePage',
					'show/:id' : 'showConfessionPost',
					'login'    : 'showLoginPage'
				}
			} );

			var API = {

				'showHomePage'       : function () {
					Home.Controller.Show.showHome();
				},
				'showConfessionPost' :  function ( id ) {
					Home.Controller.Show.showConfession(id);
				},
				'showLoginPage'      : function () {
					Home.Controller.Show.showLoginPage();
				}

			};

			App.addInitializer( function () {
				new Home.Router( {
					'controller' : API
				} );
			} );

		} );

	};

} );
