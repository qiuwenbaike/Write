/*! Medik | CC0 license | https://bitbucket.org/wikiskripta/medik */

/*
 * Site navigation
 * adds proper Bootstrap CSS class to links added via mw.util.addPortletLink()
 */
function medik_navigation() {
    $("#p-personal li a:not(.dropdown-item), aside li a:not(.dropdown-item)")
      .addClass("dropdown-item");
    $("#mw-navigation li a:not(.nav-link)")
      .addClass("nav-link");
}

/*
 * Hamburger menu
 * opens navigation sidebar and login/user menu
 */
function medik_togglehamb() {
  $("#mw-navigation nav").toggle("fast");
}

/*
 * Start functions from the wrapper
 */
 
// immediately
medik_navigation();
$(".mw-hamb").click(medik_togglehamb);

// 10 s after DOM content loaded
$(function() {
  setTimeout(function () {
    medik_navigation();
  }, 10000);
});
