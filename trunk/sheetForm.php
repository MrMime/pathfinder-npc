<?php
	if (!isset($_GET['lang']))
		$_GET['lang'] = 'ita';
		
	$GLOBALS['lang'] = $_GET['lang'];
	
	require ('./languages/sheet_language.php');
	require ('./languages/skill_language.php');
	require ('./languages/class_language.php');
	require ('./ajaxPhp/skillList.php');
	global $pfNpcSheet, $skills, $lang, $skillLanguage, $pfClasses;
	define("MAX_MULTICLASS", 6);
	define("MAX_PRESTIGE_CLASS", 3);
	define("MAX_SUPPORTED_CLASS", MAX_MULTICLASS+MAX_PRESTIGE_CLASS);
	
	/*
	echo '<pre>';
	print_r ($skillLanguage[$lang]);
	echo '</pre>';
	*/
		
	$code = file_get_contents('npcSheet.html');
	$code = str_replace ('[[action]]',$_SERVER['REQUEST_URI'],$code);
	$code = preg_replace('/{lang}/', $_GET['lang'], $code);
	
	//Including HTML Sections
	//************************** RACE ******************************************//
	$htmlCode = file_get_contents ('./html/race.html');
    $code = str_replace('[[race_html]]',$htmlCode,$code);
	//************************** MOVEMENT ******************************************//
	$htmlCode = file_get_contents ('./html/movement.html');
	$code = str_replace('[[movement_html]]',$htmlCode,$code);
	//************************** STATS ******************************************//
	$htmlCode = file_get_contents ('./html/stats.html');
	$code = str_replace('[[stats_html]]',$htmlCode,$code);
	//************************** INITIATIVE***************************************//
	$htmlCode = file_get_contents ('./html/initiative.html');
	$code = str_replace('[[initiative_html]]',$htmlCode,$code);
	//************************** HP ***************************************//
	$htmlCode = file_get_contents ('./html/hp.html');
	$code = str_replace('[[hp_html]]',$htmlCode,$code);
	//************************** AC ***************************************//
	$htmlCode = file_get_contents ('./html/ac.html');
	$code = str_replace('[[ac_html]]',$htmlCode,$code);
	//************************** CLASSES ***************************************//
	$htmlCode = file_get_contents ('./html/classes.html');
	
	$regExp01 = '/\<repeatable\>(.*?)\<\/repeatable\>/s';
	$regExp02 = '/\<section\>(.*?)\<\/section\>/s';
	preg_match ($regExp01,$htmlCode,$singleClassCode);
	preg_match ($regExp02,$htmlCode,$sectionCode);
	
	$singleClassCode 	= $singleClassCode[1];
	$sectionCode 		= $sectionCode[1];
	
	$totalClassesCode = "";
	for ($i=0;$i<MAX_SUPPORTED_CLASS;$i++){
		if ($i == MAX_MULTICLASS)
			$totalClassesCode .= str_replace('[[sectionlabel]]','{prestige_class}',$sectionCode);
		$totalClassesCode .= str_replace('{index}',$i,$singleClassCode);
	}
	
	$totalClassesCode = preg_replace ($regExp01,$totalClassesCode,$htmlCode);
	$totalClassesCode = preg_replace ($regExp02,"",$totalClassesCode);
	$code = str_replace('[[classes_html]]',$totalClassesCode,$code);
	//************************** MANEUVERS ***************************************//
	$htmlCode = file_get_contents ('./html/maneuvers.html');
	$code = str_replace('[[maneuvers_html]]',$htmlCode,$code);
	//************************** MANEUVERS ***************************************//
	$htmlCode = file_get_contents ('./html/weapons.html');
	$code = str_replace('[[weapons_html]]',$htmlCode,$code);
	
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
	
	//************************** MANEUVERS ***************************************//
	$htmlCode = file_get_contents ('./html/spells.html');
	$code = str_replace('[[spells_html]]',$htmlCode,$code);
	
	//Translating sheets
	foreach ($pfNpcSheet[$lang] as $index=>$translate){
		$code = preg_replace('/{'.$index.'}/', $translate, $code);
	}
	
	foreach ($skillLanguage[$lang] as $index=>$translate){
		$code = preg_replace('/{'.$index.'}/', $translate, $code);
	}
	
	foreach ($pfClasses[$lang] as $index=>$translate){
		$code = preg_replace('/{'.$index.'}/', $translate, $code);
	}
	
	
	//************************ HELPER ****************************//
	$htmlCode = file_get_contents ('./languages/helper/it/weapon.html');
	$code = str_replace ('[[weaponHelper]]',$htmlCode,$code);
	
	$htmlCode = file_get_contents ('./languages/helper/it/maneuvers.html');
	$code = str_replace ('[[maneuversHelper]]',$htmlCode,$code);
	
	$htmlCode = file_get_contents ('./languages/helper/it/feats.html');
	$code = str_replace ('[[featsHelper]]',$htmlCode,$code);
	
	$htmlCode = file_get_contents ('./languages/helper/it/skills.html');
	$code = str_replace ('[[skillsHelper]]',$htmlCode,$code);
	
	$htmlCode = file_get_contents ('./languages/helper/it/classes.html');
	$code = str_replace ('[[classesHelper]]',$htmlCode,$code);
		
	echo $code;
	
?>