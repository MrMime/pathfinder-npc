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
	$regExp = '/\<repeatable\>(.*?)\<\/repeatable\>/s';
	preg_match ($regExp,$htmlCode,$singleClassCode);
	$singleClassCode = $singleClassCode[1];
	$totalClassesCode = "";
	for ($i=0;$i<6;$i++)
		$totalClassesCode .= str_replace('{index}',$i,$singleClassCode);
	
	$totalClassesCode = preg_replace ($regExp,$totalClassesCode,$htmlCode);
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
	
	//Translating sheets
	foreach ($pfNpcSheet[$lang] as $index=>$translate){
		$code = preg_replace('/{'.$index.'}/', $translate, $code);
	}
	
	foreach ($skillLanguage[$lang] as $index=>$translate){
		$code = preg_replace('/{'.$index.'}/', $translate, $code);
	}
	
		
	echo $code;
	
?>