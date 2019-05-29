<?php
/**
 * SkinTemplate class for the Medik skin
 * https://bitbucket.org/wikiskripta/medik
 *
 * @ingroup Skins
 * @author Petr Kajzar
 * @copyright 1st Faculty of Medicine, Charles University, Czech Republic
 * @license https://creativecommons.org/publicdomain/zero/1.0/ CC0-1.0
 */
class SkinMedik extends SkinTemplate {
	public $skinname = 'medik',
		$stylename = 'Medik',
		$template = 'MedikTemplate';

	/**
	 * Add CSS via ResourceLoader
	 *
	 * @param $out OutputPage
	 */
	public function initPage( OutputPage $out ) {
		$out->addMeta( 'viewport',
			'width=device-width, initial-scale=1'
		);

		$out->addModuleStyles( [
			'mediawiki.skinning.interface',
			'mediawiki.skinning.content.externallinks',
			'skins.medik'
		] );
		$out->addModules( [
			'skins.medik.js'
		] );
	}

	/**
	 * @param $out OutputPage
	 */
	function setupSkinUserCss( OutputPage $out ) {
		parent::setupSkinUserCss( $out );
	}
}
