/*! Medik | CC0 license | https://bitbucket.org/wikiskripta/medik */

var Medik = {

  /*
   * Hamburger menu
   * opens navigation sidebar and login/user menu
   */
  hamburger : function() {
    $(".mw-hamb").click(function() {
      $("#mw-navigation nav").toggle("fast");
      $("#user-tools > button").toggle("fast");
    });
  },

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
 * Start functions
 */
$(function() {
  
  // immediately
  Medik.hamburger();
  Medik.navigation();

  // after 10 s
  setTimeout(function () {
    Medik.navigation();
  }, 10000);

});
