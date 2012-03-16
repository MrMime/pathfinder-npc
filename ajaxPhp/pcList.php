<?php
	require('../languages/class_language.php');
	global $pfClasses;

	$classes = array ('{prestige}'=>array(
							'pfPcClass'=>'--',
							'pfArcaneArcher'=>'{arcane_archer}'
							)
						);
	
	
	$json = json_encode ($classes);
					
	//Translating races names
	foreach ($pfClasses[$_GET['lang']] as $index=>$translate){
		$json = preg_replace('/{'.$index.'}/', $translate, $json);
	}
	
	echo $json;

?>