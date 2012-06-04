<?php

	require ('./languages/sheet_language.php');
	require ('./languages/skill_language.php');
	require ('./languages/class_language.php');
	require ('./languages/armor_language.php');
	require ('./languages/race_language.php');
	require ('./languages/shield_language.php');
	require ('./languages/weapon_language.php');

	global $pfArmor, $pfClasses, $pfRaces, $pfNpcSheet, $pfShield, $skillLanguage, $pfWeapon;
	$totalLang = array_merge($pfArmor,$pfClasses,$pfRaces,$pfNpcSheet,$pfShield,$skillLanguage,$pfWeapon);

	$totalLang = $totalLang[$_GET['lang']];
		

?>