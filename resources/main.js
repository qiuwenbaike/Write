/*! Medik | CC0 license | https://bitbucket.org/wikiskripta/medik */

/*
 * Hamburger menu
 * opens navigation sidebar and login/user menu
 */
$(".mw-hamb").click(function() {
  $("#mw-navigation nav").toggle("fast");
  $("#user-tools > button").toggle("fast");
});