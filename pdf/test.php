<?php

	define("ROOT_PATH",'../');

/*
	require_once (\'ufpdf.php\');
	require_once (\'class.pfNpcSheet.php\');
	require_once (\'class.dice.php\');
	*/
	/*
	echo \'Tiro un d6: \'.dice::d6();
	echo \'<br>\';
	echo \'Punteggi: \'.dice::bestOfFour();
	echo \'<br>\';
	echo \'Punteggi High: \'.dice::bestOfFourHigh();
	echo \'<br>\';
	echo \'HP Warrior: \'.dice::betterLifeDice(10);
	echo \'<br>\';
	echo \'HP Cleric: \'.dice::betterLifeDice(8);
	echo \'<br>\';
	echo \'HP Mage: \'.dice::betterLifeDice(6);
	echo \'<br>\';
	echo \'HP Barbarian: \'.dice::betterLifeDice(12);
	*/
	/*
	define(FPDF_FONTPATH,\'./font/\');

	$pf = new pfNpcSheet();
	$pf->makeGrid();
	
	$pf->pName(\'Ernesto de la Fluente\');
	
	$pf->getPdf()->Output(\'./pdf/test.pdf\',\'F\');
	
		*/

/*
 [classes] => Array
        (
            [0] => Array
                (
                    ['name'] => pfBarbarian
                    ['level'] => 4
                    ['fortitude'] => +4
                    ['reflex'] => +1
                    ['will'] => +1
                    ['bab'] => +4
                )

            [1] => Array
                (
                    ['name'] => pfClass
                    ['fortitude'] => +0
                    ['reflex'] => +0
                    ['will'] => +0
                    ['bab'] => +undefined
                )

            [2] => Array
                (
                    ['name'] => pfClass
                    ['fortitude'] => +0
                    ['reflex'] => +0
                    ['will'] => +0
                    ['bab'] => +undefined
                )

            [3] => Array
                (
                    ['name'] => pfClass
                    ['fortitude'] => +0
                    ['reflex'] => +0
                    ['will'] => +0
                    ['bab'] => +undefined
                )

            [4] => Array
                (
                    ['name'] => pfClass
                    ['fortitude'] => +0
                    ['reflex'] => +0
                    ['will'] => +0
                    ['bab'] => +undefined
                )

        )
  
  
   [cmb] => Array
        (
            [base] => +4
            [disarm] => +4
            [trick] => +4
            [bull] => +4
            [overrun] => +4
            [steel] => +4
            [drag] => +4
            [trip] => +4
            [reposition] => +4
            [grapple] => +4
            [sunder] => +4
        )
  
 */

	
	require_once ('../class.csvToSheet.php');
	$object = new arrayToSheet('ita');
	
	//TEST DATA
	$data = $_POST;
	$data['race']				= $_POST['race']; ///da gestire perché è pfDwarf
	$data['movement']			= $_POST['movementTotal'];
	$data['classes']			= $_POST['classes']; //da gestire
	$data['gender']				= (isset($_POST['gender'])) ? $_POST['gender'] : '{male}'; 
	$data['alignent']			= (isset($_POST['alignment'])) ? $_POST['alignment'] : '{neutral}';
	
	$object->setData($data);
	
	echo '<pre>';
	print_r ($data);
	
	
	/*
	$classes 						= array ('guerriero'=>5,'Hellknight'=>2);
	$ac								= array('armor'=>9,'moddex'=>1,'dodge'=>1);
	$attacks['melee'][] 			= array('long sword','13/8','1d10+3','20x3');
	$attacks['melee'][] 			= array('War Hammer','13/8','1d8+2','20x3');
	$attacks['ranged'][] 			= array('Short Bow','11/6','1d6','20x3');
	$abs[] 							= 'Aura della Legge';
	$abs[] 							= 'Rileva Caos';
	$abs[] 							= 'Aura della Legge';
	$abs[] 							= 'Aura della Legge';
	$feats[] 						= array ('Abilità Focalizzata','Intimidire');
	$feats[] 						= array ('Arma Focalizzata','Spada Lunga');
	$feats[] 						= array ('Attacco Poderoso');
	$skills[] 						= array ('Intimidire',18);
	$skills[] 						= array ('Percezione',10);
	$gears[] 						= 'Anello Protezione +1';
	$gears[] 						= 'Farhad\'s Shield';
	$items[] 						= array('Farhad\'s Shield','Uno scudo +2 con uncini che afferrano l\'arma avversaria');
	$languages[]					= array('Comune','Elfico');
	*/
	
	$object->writeContent();
	$content = $object->buildPageContent();
	
	echo $content;
	/*
	require_once(dirname(__FILE__).'/html2pdf/html2pdf.class.php');
    $html2pdf = new HTML2PDF('P','A4','it');
    $html2pdf->WriteHTML($content);
    $html2pdf->Output('./exemple.pdf');
	*/
	echo '</pre>';
?>