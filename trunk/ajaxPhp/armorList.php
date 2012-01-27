<?php
/*
  Armature leggere
  Imbottita	5 mo	 			+1	+8	0	5%	9 m	6 m	5 kg
  Cuoio	10 mo	            	+2	+6	0	10%	9 m	6 m	7,5 kg
  Cuoio borchiato	25 mo		+3	+5	–1	15%	9 m	6 m	10 kg
  Giaco di maglia	100 mo		+4	+4	–2	20%	9 m	6 m	12,5 kg
Armature medie
  Pelle	15 mo					+4	+4	–3	20%	6 m	4,5 m	12,5 kg
  Corazza di scaglie	50 mo	+5	+3	–4	25%	6 m	4,5 m	15 kg
  Cotta di maglia	150 mo		+6	+2	–5	30%	6 m	4,5 m	20 kg
  Corazza di piastre	200 mo	+6	+3	–4	25%	6 m	4,5 m	15 kg
Armature pesanti
  Corazza a strisce	200 mo		+7	+0	–7	40%	6 m2	4,5 m2	22,5 kg
  Corazza di bande	250 mo		+7	+1	–6	35%	6 m2	4,5 m2	17,5 kg
  Mezza armatura	600 mo		+8	+0	–7	40%	6 m2	4,5 m2	25 kg
  Armatura completa	1.500 mo	+9	+1	–6	35%	6 m2	4,5 m2	25 kg
  */

  /**
   * L'array di ogni armatura è così composto:
   * [0]: Bonus Armatura
   * [1]: Mod Dex Max
   * [2]: Malus alla prova di abilità
   * [3]: Fallimento Incantesimi Arcani
   * [4]: Variazione sulla velocità corrente
   */

  $armor = array ('armors'=>array('nudo','imbottita','cuoio','cuoio borchiato','giacco di maglia','pelle','corazza di scaglie','cotta di maglia',
  								  'corazza di piastre','corazza a strisce','corazza di bande','mezza armatura','armatura completa'),
  				  
  				  'nudo'=>array (0,100,0,0,0),
  				  'imbottita'=>array (1,8,0,5,0),
				  'cuoio'=>array (2,6,0,10,0),
				  'cuoio_borchiato'=>array (3,5,-1,15,0),
				  'giacco_di_maglia'=>array (4,4,-2,20,0),
  
				  'pelle'=>array (4,4,-3,20,-3),
				  'corazza_di_scaglie'=>array (5,3,-4,25,-3),
				  'cotta_di_maglia'=>array (6,2,-4,30,-3),
				  'corazza_di_piastre'=>array (6,3,-5,25,-3),
  
				  'corazza_a_strisce'=>array (7,0,-7,40,-3),
				  'corazza_di_bande'=>array (7,1,-6,35,-3),
				  'mezza_armatura'=>array (8,0,-7,40,-3),
  				  'armatura_completa'=>array (9,1,-6,35,-3)
    );
	
	echo json_encode ($armor);

?>