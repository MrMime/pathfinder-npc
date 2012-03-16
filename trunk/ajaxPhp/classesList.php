<?php
	require('../languages/class_language.php');
	global $pfClasses;

	$classes = array ('{core}'=>array(
						'pfClass'=>'--',
						'pfBarbarian'=>'{barbarian}',
						'pfBard'=>'{bard}',
						'pfRogue'=>'{rogue}',
						'pfCleric'=>'{cleric}',
						'pfDruid'=>'{druid}',
						'pfWarrior'=>'{warrior}',
						'pfPaladin'=>'{paladin}',
						'pfMonk'=>'{monk}',					
						'pfWizard'=>'{wizard}',
						'pfSorcerer'=>'{sorcerer}',
						'pfRanger'=>'{ranger}'
						),
						'{advanced}'=>array(
							'pfAlchemist'=>'{alchemist}',
							'pfCavalier'=>'{cavalier}',
							'pfGunslinger'=>'{gunslinger}',
							'pfInquisitor'=>'{inquisitor}',
							'pfMagus'=>'{magus}',
							'pfOracle'=>'{oracle}',
							'pfSummoner'=>'{summoner}',
							'pfWitch'=>'{witch}'
						)
						);
	
	
	$json = json_encode ($classes);
					
	//Translating races names
	foreach ($pfClasses[$_GET['lang']] as $index=>$translate){
		$json = preg_replace('/{'.$index.'}/', $translate, $json);
	}
	
	echo $json;

?>