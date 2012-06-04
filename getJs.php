<?php

	require ('class.pfTranslator.php');

	$content = file_get_contents('./'.$_GET['js'].'.js');
	
	$translator = new pfTranslator();
	$translator->setLang($_GET['lang']);
	$translator->setContent($content);
	$translator->translate();
	
	echo $translator->getContent();


?>