<?php 


	$content = file_get_contents ('listeIncantesimi.html');
	$classList = explode('<h2>',$content);
	
	$baseSpellLevel = array("ranger"=>1,"mago_stregone"=>0,"bardo"=>0,"paladino"=>1,"chierico"=>0,"druido"=>0);
	
	$finalSpell = array();
	
	foreach ($classList as $spells){
		$spellPerLevel = explode("<h3>",$spells);
		$className = trim(strip_tags(nl2br(addslashes(strtolower(preg_replace('/Incantesimi da /',"",$spellPerLevel[0]))))));
		$className = str_replace ("/","_",$className);
		$finalSpell[$className] = array();
			for ($i = 1;$i<count($spellPerLevel);$i++){
				$sLevel = $baseSpellLevel[$className] + $i - 1;
				preg_match_all('/\<p\>(.*?)\<\/p\>/',$spellPerLevel[$i],$spells);
				foreach ($spells[1] as $index=>$spellDescription){
					$finalSpellDescription = explode(":",strip_tags($spellDescription));
					$finalSpell[$className][$sLevel][$index]['name'] = $finalSpellDescription[0];
					$finalSpell[$className][$sLevel][$index]['description'] = htmlentities(utf8_decode($finalSpellDescription[1]));				
				}
			}
	}
	
	echo '<pre>';
	//print_r ($finalSpell);
	//echo json_encode($finalSpell['bardo']);
	file_put_contents ('spells/druid.php',"<?php \n \$test = ".arrayToCode($finalSpell['druido'])."; \n echo json_encode(\$test); ?>");
	echo '</pre>';

	function arrayToCode($vector,$deep=1){
		$code = array();
		foreach ($vector as $key=>$value){
			if (is_array($value)){
				$rvalue = arrayToCode($value,$deep++);
			}
			else {
				$rvalue = enclose($value);
			}
			$rkey = $key;
			if (!is_numeric($key))
				$rkey = enclose($key); 
			$code[] = "\n".nTab($deep).$rkey."=>".$rvalue;
		}
		$code = implode (",",$code);
		return nTab($deep)."Array(".$code.")";
	}
	
	function enclose($str){
		return "'".addslashes($str)."'";
	}
	
	function nTab($n){
		return implode("",array_fill(0,$n,"\t"));
	}
	
	
?>