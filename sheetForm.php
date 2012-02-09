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