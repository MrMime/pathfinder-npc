<?php

	
	require ('./languages/sheet_language.php');
	
	global $pfNpcSheet;
	
	if (!isset($_GET['lang']))
		$_GET['lang'] = 'ita';
	
	/*
	echo '<pre>';
	print_r ($_POST);
	echo '</pre>';
	*/
		
	$code = file_get_contents('npcSheet.html');
	$code = str_replace ('[[action]]',$_SERVER['REQUEST_URI'],$code);
	$code = preg_replace('/{lang}/', $_GET['lang'], $code);
	
	//Translating sheets
	foreach ($pfNpcSheet[$_GET['lang']] as $index=>$translate){
		$code = preg_replace('/{'.$index.'}/', $translate, $code);
	}
		
	echo $code;
	
?>