<?php

	require('../languages/weapon_language.php');
	global $pfWeapon;
	
	$weapons = array('{noWeapon}'=>array('pfWeapon'=>'--',
										  'pfArms'=>'{barehands}',
									      'pfGauntlet'=>'{gauntlet}'
										 ),
					             '{simpleMeleeWeapon}'=>array('pfAspergillum'=>'{aspergillum}',
										 		  'pfKnuckles'=>'{knucles}',
										 		  'pfCestus'=>'{cestus}'));	

/*
	$wCategory['group'] = array('Senza_Armi','Armi_Semplici_Mischia','Armi_Semplici_Distanza','Armi_Da_Guerra_Mischia','Armi_Da_Guerra_Distanza','Armi_Esotiche_Mischia','Armi_Esotiche_Distanza');
	
	$wCategory['group'] = array('Senza_Armi','Armi_Semplici_Mischia');
		
	$wCategory['Senza_Armi']	=array("--"=>"pfWeapon","Colpo senz'armi"=>"pfArms", "Guanto d'arme"=>"pfGauntlet");
	
	$wCategory['Armi_Semplici_Mischia'] = array("Falcetto"=>"pfAspergillum",
												"Guanto d'arme chiodato"=>"pfKnuckles",
												"Mazza Leggera"=>"pfCestus");
												
												*/

	/*
	$wCategory['Armi_Semplici_Mischia'] = array("Falcetto"=>"pfArms",
												"Guanto d'arme chiodato"=>"pfArms",
												"Mazza leggera"=>"pfArms",
												"Pugnale"=>"pfArms",
												"Pugnale da mischia"=>"pfArms",
												"Lancia Corta"=>"pfArms",
												"Mazza Pesante"=>"pfArms",
												"Morning Star"=>"pfArms",
												"Randello"=>"pfArms",
												"Bastone Ferrato"=>"pfArms",
												"Lancia"=>"pfArms",
												"Lancia Lunga"=>"pfArms");
	
	$wCategory['Armi_Semplici_Distanza'] = array("Balestra leggera",
											   "Balestra Pesante",
											   "Cerbottana",
											   "Fionda",
											   "Giavellotto");
	
	
	$wCategory['Armi_Da_Guerra_Mischia'] = array("Armatura Chiodata",
	"Ascia",
	"Astrum",
	"Ascia da lancio",
	"Kukri",
	"Manganello",
	"Martello Leggero",
	"Piccone Leggero",
	"Scudo chiodato leggero",
	"Scudo leggero",
	"Spada corta");
	*/
	
	$json = json_encode ($weapons);
					
	//Translating races names
	foreach ($pfWeapon[$_GET['lang']] as $index=>$translate){
		$json = preg_replace('/{'.$index.'}/', $translate, $json);
	}
	
	echo $json;
	

?>