<?php
	require('../languages/race_language.php');
	global $pfRaces;
	
	$races = array('core'=>array(
					 	'pfHuman'=>'{human}',
						'pfElf'=>'{elf}',
						'pfDwarf'=>'{dwarf}',
						'pfHalfling'=>'{halfing}',
						'pfHalfOrc'=>'{half-orc}',
						'pfHalfElf'=>'{half-elf}'
					),
					'advanced'=>array(
				 		'pfAasimar'=>'{aasimar}'
					)
				   );
	
	$json = json_encode ($races);
					
	//Translating races names
	foreach ($pfRaces[$_GET['lang']] as $index=>$translate){
		$json = preg_replace('/{'.$index.'}/', $translate, $json);
	}
	
	echo $json;
	
?>
