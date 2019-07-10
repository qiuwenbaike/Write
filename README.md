# Medik

_MediaWiki skin for WikiSkripta.eu._

The Medik skin is a simple Bootstrap-based skin originally created for [WikiSkripta](https://www.wikiskripta.eu).

## Installation

* Download and place the file(s) in a directory called Medik in your `skins/` folder.
* Add the following code at the bottom of your `LocalSettings.php`:

		wfLoadSkin( 'Medik' );

* Done - Navigate to `Special:Version` on your wiki to verify that the skin is successfully installed.

## Customization

It is possible to set the color theme by inserting `$wgMedikColor` to your `LocalSettings.php`:

    $wgMedikColor = "#FF0000";
    
Possible values are either hex values of HTML colors, or named values as used in CSS.

    $wgMedikColor = "blue";
    
Default value is `#ffbe00` as used in WikiSkripta project.
    
Moreover, every user is able to change the default font size in his/her user settings. It's found in `Special:Preferences` under the skin preferences.

## License

Created by Petr Kajzar, 1st Faculty of Medicine, Charles University, 2019.

This skin is:

* based on [Bootstrap](https://getbootstrap.com/) (licensed under MIT license),
* using [popper.js](https://popper.js.org/) (licensed under MIT license),
* based on [Skin:Example](https://www.mediawiki.org/wiki/Skin:Example) (licensed under CC0),
* created for [WikiSkripta](https://www.wikiskripta.eu) medical wiki
* and released under Creative Commons Zero v1.0 Universal license.

To the extent possible under law, I have dedicated all copyright and related and neighboring rights to this software to the public domain worldwide. This software is distributed without any warranty.