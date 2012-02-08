<?php

	
	require ('./languages/sheet_language.php');
	require ('./ajaxPhp/skillList.php');
	global $pfNpcSheet, $skills;
	
	if (!isset($_GET['lang']))
		$_GET['lang'] = 'ita';
	/*
	echo '<pre>';
	print_r ($skills);
	echo '</pre>';
	*/
		
	$code = file_get_contents('npcSheet.html');
	$code = str_replace ('[[action]]',$_SERVER['REQUEST_URI'],$code);
	$code = preg_replace('/{lang}/', $_GET['lang'], $code);
	
	//Including HTML Sections
	$skillsBase = file_get_contents ('./html/skills.html');
	$skill 		= file_get_contents ('./html/singleSkill.html');
	$singleSkillCode = "";
	foreach ($skills as $skillKey=>$skillName){
		$singleSkillCode .= str_replace ('{skillname}',$skillKey,$skill);
		$singleSkillCode = str_replace ('{skillnamevalue}',$skillName,$singleSkillCode);
	}
	$skillsBase = str_replace ('[[skills]]',$singleSkillCode,$skillsBase);
	
	$code = str_replace('[[skills_html]]',$skillsBase,$code);
	
	//Translating sheets
	foreach ($pfNpcSheet[$_GET['lang']] as $index=>$translate){
		$code = preg_replace('/{'.$index.'}/', $translate, $code);
	}
		
	echo $code;
	
?>