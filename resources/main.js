/* Write | CC0 license | https://git.qiuwen.wiki/qiuwen/Write */
/* eslint-disable no-jquery/no-global-selector, no-jquery/no-animate-toggle */

$( function () {
	/*
	 * Site navigation
	 * adds proper Bootstrap CSS class to links added via mw.util.addPortletLink()
	 */
	var writeNavigation = function () {
		$(
			'#p-personal li a:not(.dropdown-item), aside li a:not(.dropdown-item)'
		).addClass( 'dropdown-item' );
		$( '#mw-navigation li a:not(.nav-link)' ).addClass( 'nav-link' );
	};

	/*
	 * Hide aside menu with no dropdown items
	 */
	var hideAsideDropdown = function () {
		$( 'aside .dropdown' ).has( 'div:empty' ).hide();
	};

	/*
	 * Remove echo notifications popup on smaller screens
	 */
	var writeRemoveEchoPopup = function () {
		if ( $( window ).width() <= 650 ) {
			$( 'a.mw-echo-notifications-badge' ).off( 'click' );
		}
	};

	/*
	 * Hamburger menu
	 * opens navigation sidebar and login/user menu
	 */
	var writeTogglehamb = function () {
		$( '#mw-navigation nav' ).toggle( 'fast' );
	};

	/*
	 * Start functions from the wrapper
	 */

	// immediately
	writeNavigation();
	writeRemoveEchoPopup();
	hideAsideDropdown();
	$( '.mw-hamb' ).on( 'click', writeTogglehamb );

	// repeat every 1 s for 10 s after DOM content loaded
	window.writeVarI = 0;
	window.writeTimer = window.setInterval( function () {
		writeNavigation();
		writeRemoveEchoPopup();
		window.writeVarI++;
		if ( window.writeVarI === 10 ) {
			window.clearInterval( window.writeTimer );
		}
	}, 1000 );
} );
