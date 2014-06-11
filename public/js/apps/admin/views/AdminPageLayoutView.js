define( function ( require ) {
	'use strict';

	var _          = require( 'underscore' );
	var Marionette = require( 'marionette' );

	var template = require( 'text!apps/admin/templates/AdminPageLayout.html' );

	return Marionette.Layout.extend( {

		'template' : _.template( template )
		/*'regions'  : {
			'trendingRegion'   : '#trendingConfessions',
			'submissionRegion' : '#submissionArea',
			'modalRegion'      : '#msgModal',
			'content'          : '#content'
		}*/

	} );

} );
