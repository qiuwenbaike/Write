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
	 * @param OutputPage $out OutputPage
	 */
	public function initPage( OutputPage $out ) {
		if ( RequestContext::getMain()->getConfig()->get( 'MedikResponsive' ) ) {
			$out->addMeta( 'viewport', 'width=device-width, initial-scale=1' );
			$out->addModuleStyles( [ 'skins.medik.responsive' ] );
		} else {
			$out->addModuleStyles( [ 'skins.medik.unresponsive' ] );
		}

		$out->addModuleStyles( [
			'mediawiki.skinning.interface',
			'mediawiki.skinning.content.externallinks',
			'skins.medik'
		] );

		$out->addModules( [ 'skins.medik.js' ] );
	}

	/**
	 * @param OutputPage $out OutputPage
	 */
	public function setupSkinUserCss( OutputPage $out ) {
		parent::setupSkinUserCss( $out );
	}

	/**
	 * Add user preferences
	 *
	 * @param User $user
	 * @param array &$preferences
	 */
	public static function onGetPreferences( $user, &$preferences ) {
		if ( $user->getOption( 'skin' ) === 'medik' ) {
			$preferences[ 'medik-font' ] = [
				'type' => 'select',
				'label-message' => 'medik-font-label',
				'section' => 'rendering/skin',
				'options' => [
					'80%' => '0.8em',
					'85%' => '0.85em',
					'90%' => '0.9em',
					'95%' => '0.95em',
					'100%' => '1.0em',
					'105%' => '1.05em',
					'110%' => '1.1em'
				]
			];
		}
	}
}
