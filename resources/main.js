/*! Medik | CC0 license | https://bitbucket.org/wikiskripta/medik */

/*
 * Hamburger menu
 * opens navigation sidebar and login/user menu
 */
$(".mw-hamb").click(function() {
  $("#mw-navigation nav").toggle("fast");
  $("#user-tools > button").toggle("fast");
});
    
/*
 * Medik main wrapper
 */
var Medik = {

  /*
   * Site navigation
   * adds proper Bootstrap CSS class to links added via mw.util.addPortletLink()
   */
  navigation : function() {
    $("#p-personal li a:not(.dropdown-item), aside li a:not(.dropdown-item)")
      .addClass("dropdown-item");
    $("#mw-navigation li a:not(.nav-link)")
      .addClass("nav-link");
  }

}

/*
 * Start functions from the wrapper
 */
 
// immediately
Medik.navigation();

// 10 s after DOM content loaded
$(function() {
  setTimeout(function () {
    Medik.navigation();
  }, 10000);
});
