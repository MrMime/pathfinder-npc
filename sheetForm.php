<?php

	
	require ('sheet_language.php');
	global $pfNpcSheet;
	
	$lang = 'ita';
/*
	echo '<pre>';
	print_r ($_POST);
	echo '</pre>';
	*/
	$code = file_get_contents('npcSheet.html');
	$code = str_replace ('[[action]]',$_SERVER['REQUEST_URI'],$code);
	
	foreach ($pfNpcSheet[$lang] as $index=>$translate){
		$code = preg_replace('/{'.$index.'}/', $translate, $code);
	}
	
	echo $code;

?>