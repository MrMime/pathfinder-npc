<?php
/*
	$tsBase = array (
						array(0,0,2), //0
						array(0,2,0), //1
						array(2,0,0), //2
						array(2,0,2), //3
						array(0,2,2), //4
						array(2,2,0), //5
						array(2,2,2), //6
						array(0,0,0)  //7
					);
					
	$babBase = array (
						array(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20), 	//melee like
					  	array(0,0,1,2,3,3,4,5,6,6,7,8,9,9,10,11,12,12,13,14,15), 		//cleric like
					  	array(0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10),				//spellcaster like
					  	array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)					//empty
					  );
					*/

	$classes = array ('classes'=>array('--','barbaro','guerriero','bardo','chierico','druido','paladino','mago','stregone','monaco','ranger','duellante'),
					  '--'=>'pfClass',
					  'barbaro'=>'pfBarbarian',
					  'bardo'=>'pfBard',
					  'chierico'=>'pfCleric',
					  'druido'=>'pfDruid',
					  'guerriero'=>'pfWarrior',
				      'paladino'=>'pfPaladin',
					  'monaco'=>'pfMonk',
					  'mago'=>'pfWizard',
					  'stregone'=>'pfSorcerer',
					  'ranger'=>'pfRanger',
					  'duellante'=>'pfDuelling');
	
	echo json_encode ($classes);

?>