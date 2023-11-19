/* Write | CC0 license | https://git.qiuwen.net.cn/Qiuwen/mediawiki-skins-Write */

$( () => {
	/*
	 * Site navigation
	 * adds proper Bootstrap CSS class to links added via mw.util.addPortletLink()
	 */
	const writeNavigation = () => {
		$(
			'#p-personal li a:not(.dropdown-item), aside li a:not(.dropdown-item)'
		).addClass( 'dropdown-item' );
		$( '#mw-navigation li a:not(.nav-link)' ).addClass( 'nav-link' );
	};

	/*
	 * Hide aside menu with no dropdown items
	 */
	const hideAsideDropdown = () => {
		$( 'aside .dropdown' ).has( 'div:empty' ).hide();
	};

	/*
	 * Remove echo notifications popup on smaller screens
	 */
	const writeRemoveEchoPopup = () => {
		if ( $( window ).width() <= 650 ) {
			$( 'a.mw-echo-notifications-badge' ).off( 'click' );
		}
	};

	/*
	 * Hamburger menu
	 * opens navigation sidebar and login/user menu
	 */
	const writeTogglehamb = () => {
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
	window.writeTimer = window.setInterval( () => {
		writeNavigation();
		writeRemoveEchoPopup();
		window.writeVarI++;
		if ( window.writeVarI === 10 ) {
			window.clearInterval( window.writeTimer );
		}
	}, 1000 );
} );
