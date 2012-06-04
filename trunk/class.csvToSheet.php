<?php

include ('class.pfTranslator.php');

class arrayToSheet
{
	protected $_data  		= null;
	protected $_content 	= null;
	protected $_lang	 	= null;
	protected $_defaultKey  = null;
	protected $_translator	= null;
	
	public function __construct($lang = 'eng'){
		
		$this->_lang = $lang; //default value
		$this->_translator = new pfTranslator();
		$this->_translator->setLang($this->_lang);
		$this->_data = array();
		$this->_content = file_get_contents ('./baseSheet.html');
		//list of data not required
		$this->_defaultKey = array ('sense','tactics','cmb_description','cmd_description','special_items');  
		//self::__csvToArray();
	}
	
	public function setData($data){
		$this->_data = $data;
	}
	
	public function setLang($lang = 'eng'){
		$this->_lang = $lang;
	}
	
	private function __translateSheet(){
		$this->_translator->setContent($this->_content);
		$this->_translator->translate();
		$this->_content = $this->_translator->getContent();
	}
	
	private function __jsNameToName($name){
		$name = str_replace ('pf','',strtolower($name));
		return "{".$name."}";
	}
	/*
	public function __sheetToArray(){
		$this->_data['name'] 			= 'Braeger Sudiman';
		$this->_data['gender'] 			= 'maschio';
		$this->_data['race']   			= 'umano';
		$this->_data['classes'] 		= self::__manageClasses($classes);
		$this->_data['alignment'] 		= 'LM';
		$this->_data['size'] 			= 'medio';
		$this->_data['creature_type'] 	= 'umanoide';
		$this->_data['gender'] 			= 'maschio';
		$this->_data['init'] 			= arrayToSheet::n2s(1);
		$this->_data['perception']		= arrayToSheet::n2s(4);
		$this->_data['ac']				= 21;
		$this->_data['touch']			= 12;
		$this->_data['flatfooted']		= 20;
		$this->_data['ca_component']    = self::__manageAC($ac);
		$this->_data['hp']				= 55;
		$this->_data['life_dice']		= '7d10';
		$this->_data['total_hp_sum']	= arrayToSheet::n2s(12);
		$this->_data['fort']			= arrayToSheet::n2s(6);
		$this->_data['will']			= arrayToSheet::n2s(2);
		$this->_data['ref']				= arrayToSheet::n2s(3);
		$this->_data['speed']			= 9;
		$this->_data['melee_attacks']	= self::__manageAttacks($this->_sheet['attacks']['melee']);
		$this->_data['ranged_attacks']	= self::__manageAttacks($this->_sheet['attacks']['ranged']);
		$this->_data['abilities'] 		= self::__manageAbilities($abs);
		$this->_data['str'] 			= 18;
		$this->_data['cos'] 			= 12;
		$this->_data['dex'] 			= 12;
		$this->_data['int'] 			= 10;
		$this->_data['wis'] 			= 10;
		$this->_data['cha'] 			= 13;
		$this->_data['base_atk'] 		= arrayToSheet::n2s(7);
		$this->_data['cmb'] 	 		= arrayToSheet::n2s(11);
		$this->_data['cmb_description'] = self::__manageManovres(array ('+17 sbilanciare'));
		$this->_data['cmd'] 	 		= arrayToSheet::n2s(22);
		$this->_data['feats'] 			= self::__manageFeats($feats);
		$this->_data['skills'] 			= self::__manageSkills($skills);
		$this->_data['combat_gear'] 	= self::__manageGears($gears);
		$this->_data['special_items'] 	= self::__manageSpecialItems($items);
		$this->_data['personality'] 	= 'Molto Figo';
		
		self::__defaultData($this->_defaultKey);
	}
*/
	private function __defaultData($keys){
		foreach ($keys as $key)
			$this->_data[$key] = (isset($this->_data[$key])) ? $this->_data[$key] : "";
	}
	
	private function __manageFeats($feats){
		$output = array();
		foreach ($feats as $featInfo)
			if (count($featInfo) == 2)
				$output[] = $featInfo[0].' ('.$featInfo[1].')';
			else 
				$output[] = $featInfo[0];
				
		return implode (', ',$output);
	}
	
	private function __manageRace(){
		$this->_data['race'] = self::__jsNameToName($this->_data['race']);
	}
	
	private function __manageSpecialItems($items){
		$output = array();
		foreach ($items as $itemInfo){
			$output[] = '<strong>'.$itemInfo[0].'</strong> '.$itemInfo[1];
		}
		return implode ('<br />',$output);
	}
	
	private function __manageSkills($skills){
		$output = array();
		foreach ($skills as $skillInfo)
			$output[] = implode(' ',array($skillInfo[0],arrayToSheet::n2s($skillInfo[1]))) ;
		return implode (', ',$output);
	}
	
	private function __manageAbilities($abilities){
		return implode (', ',$abilities);
	}
	
	private function __manageGears($gears){
		return self::__manageAbilities($gears);
	}
	
	private function __manageManovres($manovre){
		$output = implode (', ',$manovre);
		return '('.$output.')';
	}
	
	private function __manageAttacks($attacks){
		$final = array();
		foreach ($attacks as $singleAttack) {
			$output 	= array();
			$output[]   = $singleAttack[0];
			$atks = explode ('/',$singleAttack[1]);
			$output[] 	= implode('/',array_map("arrayToSheet::n2s",$atks));
			$output[]	= '('.$singleAttack[2];
			$output[]	= $singleAttack[3].')';
			$final[] 	= implode (' ',$output);			
		}
		return implode (' <strong>{or}</strong> ',$final);
	}
	
	private function __manageClasses(){
		$str = "";
		foreach ($this->_data['classes'] as $index=>$info){
			$info = array_values($info);
			if ($info[0] != 'pfClass' && $info[0] != 'pfPcClass'){
				$tmp  = self::__jsNameToName($info[0]);
				$tmp .= " ".$info[1];
				$str[] = $tmp;
			} 
		}
		$this->_data['classes'] = implode(', ',$str);
	}
	
	private function __manageAC($component){
		$str = "";
		foreach ($component as $componentName=>$value)
			$str[] = $this->_language[$componentName].' '.arrayToSheet::n2s($value); 
		return implode (', ',$str);
	}
	
	public static function n2s($value){
		if (is_numeric($value) && $value > 0)
			return '+'.$value;
		return $value;
	}
	
	public function writeContent(){
		self::__manageRace();
		self::__manageClasses();
		
		foreach ($this->_data as $key=>$value)
			$this->_content = str_replace ('[['.$key.']]',$value,$this->_content);
		self::__translateSheet();
	}
	
	public function buildPageContent(){
		return '<page>'.$this->_content.'</page>';
	}
	
}