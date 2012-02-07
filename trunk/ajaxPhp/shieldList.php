<?php
/**
   * L'array di ogni scudo è così composto:
   * [0]: Bonus Armatura
   * [1]: Mod Dex Max
   * [2]: Malus alla prova di abilità
   * [3]: Fallimento Incantesimi Arcani
   * [4]: Variazione sulla velocità corrente
   */

  	require('../languages/shield_language.php');
	global $pfShield;
	
	 $shields = array('{light}'=>array(
	 					'pfShield'=>'--',
	 					'pfBuckler'=>'{blucker}',
						'pfKlar'=>'{klar}',
						'pfMaduLeather'=>'{maduleather}',
						'pfMaduSteel'=>'{madusteel}',
						'pfLightWooden'=>'{lightwooden}',
	 					'pfLightWoodenQuickdraw'=>'{lightwoodenquickdraw}',
						'pfLightSteel'=>'{lightsteel}',
						'pfLightSteelQuickdraw'=>'{lightsteelquickdraw}'),
					 '{heavy}'=>array(
					 		'pfHeavyWooden'=>'{heavywooden}',
					 		'pfHeavySteel'=>'{heavysteel}',
					 		'pfTower'=>'{tower}')
	 				 );
	
	$json = json_encode ($shields);
					
	//Translating races names
	foreach ($pfShield[$_GET['lang']] as $index=>$translate){
		$json = preg_replace('/{'.$index.'}/', $translate, $json);
	}
	
	echo $json;
	
?>