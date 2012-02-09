<?php
	if (!isset($_GET['lang']))
		$_GET['lang'] = 'ita';
		
	$GLOBALS['lang'] = $_GET['lang'];
	
	require ('./languages/sheet_language.php');
	require ('./languages/skill_language.php');
	require ('./ajaxPhp/skillList.php');
	global $pfNpcSheet, $skills, $lang, $skillLanguage;
	
	
	/*
	echo '<pre>';
	print_r ($skillLanguage[$lang]);
	echo '</pre>';
	*/
		
	$code = file_get_contents('npcSheet.html');
	$code = str_replace ('[[action]]',$_SERVER['REQUEST_URI'],$code);
	$code = preg_replace('/{lang}/', $_GET['lang'], $code);

	
	//Including HTML Sections
	//************************** MOVEMENT ******************************************//
	$alignmentCode = file_get_contents ('./html/movement.html');
	$code = str_replace('[[movement_html]]',$alignmentCode,$code);
	//************************** STATS ******************************************//
	$alignmentCode = file_get_contents ('./html/stats.html');
	$code = str_replace('[[stats_html]]',$alignmentCode,$code);
	//************************** INITIATIVE***************************************//
	$alignmentCode = file_get_contents ('./html/initiative.html');
	$code = str_replace('[[initiative_html]]',$alignmentCode,$code);
	//************************** HP ***************************************//
	$alignmentCode = file_get_contents ('./html/hp.html');
	$code = str_replace('[[hp_html]]',$alignmentCode,$code);
	//************************** AC ***************************************//
	$alignmentCode = file_get_contents ('./html/ac.html');
	$code = str_replace('[[ac_html]]',$alignmentCode,$code);
	//************************** CLASSES ***************************************//
	$alignmentCode = file_get_contents ('./html/classes.html');
	$code = str_replace('[[classes_html]]',$alignmentCode,$code);
	//************************** MANEUVERS ***************************************//
	$alignmentCode = file_get_contents ('./html/maneuvers.html');
	$code = str_replace('[[maneuvers_html]]',$alignmentCode,$code);
	//************************** MANEUVERS ***************************************//
	$alignmentCode = file_get_contents ('./html/weapons.html');
	$code = str_replace('[[weapons_html]]',$alignmentCode,$code);
	
	//************************** SKILLS *********************************************//
	$skillsCode = file_get_contents ('./html/skills.html');
	$regExp = '/\<repeatable\>(.*?)\<\/repeatable\>/s';
	preg_match ($regExp,$skillsCode,$singleSkillCode);
	$singleSkillCode = $singleSkillCode[1];

	$totalSkillsCode = "";
	$orderedSkills = array();
	foreach ($skills as $skillKey=>$skillName){
		$orderedSkills[$skillKey] = $skillLanguage[$lang][$skillName];
	}
	
	asort($orderedSkills);
	foreach ($orderedSkills as $skillKey=>$skillName){
		$totalSkillsCode   .= str_replace ('{skillname}',$skillKey,$singleSkillCode);
		$totalSkillsCode 	= str_replace ('{skillnamevalue}',$skillName,$totalSkillsCode);
	}
	$skillsCode = preg_replace ($regExp,$totalSkillsCode,$skillsCode);
	$code = str_replace('[[skills_html]]',$skillsCode,$code);
	//****************************** END SKILLS SECTIONS ******************************//
	
	//Translating sheets
	foreach ($pfNpcSheet[$lang] as $index=>$translate){
		$code = preg_replace('/{'.$index.'}/', $translate, $code);
	}
	
	foreach ($skillLanguage[$lang] as $index=>$translate){
		$code = preg_replace('/{'.$index.'}/', $translate, $code);
	}
	
		
	echo $code;
	
?>