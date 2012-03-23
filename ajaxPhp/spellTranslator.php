<?php 

	include ('tempSpell.php');
	
	$classes = array ('mago/stregone','chierico','druido','paladino','ranger','bardo','stregone');
	$spellLevels = array(0,1,2,3,4,5,6,7,8,9);
	$spellData 	 = array(array(),array(),array(),array(),array(),array(),array(),array(),array(),array());
	
	$spellPerLevel = array(array_combine($spellLevels,$spellData),
						   array_combine($spellLevels,$spellData),
						   array_combine($spellLevels,$spellData),
						   array_combine($spellLevels,$spellData),
						   array_combine($spellLevels,$spellData),
						   array_combine($spellLevels,$spellData),
						   array_combine($spellLevels,$spellData));
	$spellList = array_combine($classes,$spellPerLevel);
	
	
	foreach ($jos_content as $spell){
		$spellName = $spell['alias'];
		$text = $spell['introtext'];
		
		foreach ($classes as $className){
			$level = checkClass($className,$text);
			if ($level){
				$spellList[$className][$level][] = makeMySpell($spellName,$text);
			}	
		}
	}
	
	function checkClass($className,$content){
		preg_match('/'.str_replace('/','\/',$className).'(.*?)[0-9]+/',$content,$levels);
		//se settato, ho uno spell di qualche livello per la classe passata
		if (isset($levels[0])){
			return (int)strrev($levels[0]);
		}
		else {
			return false;
		}
	}
	
	function makeMySpell($alias,$text){
		$spell = array();
		$spell['name'] 			= $alias;
		$spell['description'] 	= utf8_decode($text);
		return $spell;
	}

	echo json_encode($spellList);

?>