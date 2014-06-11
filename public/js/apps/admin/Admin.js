define( function ( require ) {
	'use strict';

	return function () {

		var $        = require( 'jquery' );
		var Backbone = require( 'backbone' );
		var App      = require( 'App' );
		var Router   = require( 'Router' );

		require( 'apps/admin/views/AdminViews' );
		require( 'apps/admin/controllers/AdminAppController' );

		App.module( 'Admin', function ( Admin ) {

			require( 'apps/admin/views/AdminViews' );
			require( 'apps/admin/controllers/AdminAppController' );

			Admin.Router = Router.extend( {
				'appRoutes' : {

					'admin/:id' : 'showAdminPage'
				}
			} );

			var API = {

				'showAdminPage' : function ( id ) {
					console.log ( id + ' admin page' );
				}

			};

			App.addInitializer( function () {
				new Admin.Router( {
					'controller' : API
				} );
			} );

		} );

	};

} );
