<?php
/*
 Buckler	15 mo					+1	—	–1	5%	—	—	2,5 kg
  Scudo leggero di legno	3 mo	+1	—	–1	5%	—	—	2,5 kg
  Scudo leggero di metallo	9 mo	+1	—	–1	5%	—	—	3 kg
  Scudo pesante di legno	7 mo	+2	—	–2	15%	—	—	5 kg
  Scudo pesante di metallo	20 mo	+2	—	–2	15%	—	—	7,5 kg
  Scudo torre	30 mo				+4	+2	–10	50%	—	—	22,5 kg
*/

/**
   * L'array di ogni scudo è così composto:
   * [0]: Bonus Armatura
   * [1]: Mod Dex Max
   * [2]: Malus alla prova di abilità
   * [3]: Fallimento Incantesimi Arcani
   * [4]: Variazione sulla velocità corrente
   */

	$shield = array ('shields'=>array('nessuno','buckler','scudo leggero di legno','scudo leggero di metallo','scudo pesante di legno',
					'scudo pesante di metallo','scudo torre'),
  				  'nessuno'=>array (0,100,0,0,0),
  				  
  				  'buckler'					=>array (1,-1,-1,5,0),
				  'scudo_leggero_di_legno'	=>array (1,-1,-1,5,0),
				  'scudo_leggero_di_metallo'=>array (1,-1,-1,5,0),
				  
				  'scudo_pesante_di_legno'	=>array (2,-1,-2,15,0),
				  'scudo_pesante_di_metallo'	=>array (2,-1,-2,15,0),
				  
				  'scudo_torre'				=>array (4,2,-10,50,0)
					);
	
	echo json_encode ($shield);

?>