<?php
/**
 * SkinTemplate class for the Write skin
 * https://git.qiuwen.wiki/qiuwen/Write
 *
 * @ingroup Skins
 * @author Petr Kajzar (1st Faculty of Medicine, Charles University, Czech Republic)
 * @modified by Qiuwen Baike Contributors * @license https://creativecommons.org/publicdomain/zero/1.0/ CC0-1.0
 */
namespace MediaWiki\Skin\Write;

use SkinTemplate;

class SkinWrite extends SkinTemplate {
	/** @var string lowercase skin name */
	public $skinname = 'write';
	/** @var string full skin name */
	public $stylename = 'Write';
	/** @var string skin template */
	public $template = 'WriteTemplate';

	/**
	 * Add CSS via ResourceLoader
	 *
	 * @param OutputPage $out OutputPage
	 */
	public function initPage( OutputPage $out ) {
		$out->addMeta( 'theme-color', RequestContext::getMain()->getConfig()->get( 'WriteColor' ) );
		$out->addMeta( 'viewport', 'width=device-width, initial-scale=1' );
	}

	/**
	 * Add user preferences
	 *
	 * @param User $user
	 * @param array &$preferences
	 */
	public static function onGetPreferences( User $user, array &$preferences ) {
		if ( $user->getOption( 'skin' ) === 'write' ) {
			$preferences[ 'write-font' ] = [
				'type' => 'select',
				'label-message' => 'write-font-label',
				'section' => 'rendering/skin',
				'options' => [
					'80%' => '0.8em',
					'85%' => '0.85em',
					'90%' => '0.9em',
					'95%' => '0.95em',
					'100% (' . wfMessage( 'write-default' )->text() . ')' => '1.0em',
					'105%' => '1.05em',
					'110%' => '1.1em'
				],
				'default' => '1em'
			];
		}
	}
}
