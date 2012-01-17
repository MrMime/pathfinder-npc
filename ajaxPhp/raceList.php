<?php

	$races = array ('races'		=>array('umano','elfo','nano','gnomo','halfing','half-orc','half-elf'),
					'umano'		=>pfHuman,
				    'nano'		=>pfDwarf,
				    'elfo'		=>pfElf,
				    'gnomo'		=>pfGnome,
				    'halfing'	=>pfHalfling,
				    'half-orc'	=>pfHalfOrc,
				    'half-elf'	=>pfHalfElf);
	
	echo json_encode ($races);
	
?>
