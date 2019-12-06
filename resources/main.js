/* Medik | CC0 license | https://bitbucket.org/wikiskripta/medik */
$( function () {

	/*
	* Site navigation
	* adds proper Bootstrap CSS class to links added via mw.util.addPortletLink()
	*/
	function medikNavigation() {
		$( '#p-personal li a:not(.dropdown-item), aside li a:not(.dropdown-item)' )
			.addClass( 'dropdown-item' );
		$( '#mw-navigation li a:not(.nav-link)' )
			.addClass( 'nav-link' );
	}

	/*
	* Hamburger menu
	* opens navigation sidebar and login/user menu
	*/
	function medikTogglehamb() {
		$( '#mw-navigation nav' ).toggle( 'fast' );
	}

	/*
	* Start functions from the wrapper
	*/

	// immediately
	medikNavigation();
	$( '.mw-hamb' ).on( 'click', medikTogglehamb );

	// 10 s after DOM content loaded
	$( function () {
		setTimeout( function () {
			medikNavigation();
		}, 10000 );
	} );

} );
