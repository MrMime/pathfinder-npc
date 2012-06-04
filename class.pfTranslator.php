<?php
	require (ROOT_PATH.'languages/sheet_language.php');
	require (ROOT_PATH.'languages/skill_language.php');
	require (ROOT_PATH.'languages/class_language.php');
	require (ROOT_PATH.'languages/armor_language.php');
	require (ROOT_PATH.'languages/race_language.php');
	require (ROOT_PATH.'languages/shield_language.php');
	require (ROOT_PATH.'languages/weapon_language.php');	

class pfTranslator
{
	protected $_lang = null;
	
	function __construct(){
		global $lang;
				
	}
	
	public function setLang($lang){
		$this->_lang = $lang;
	}
	
	public function translate(){
		global $pfArmor, $pfClasses, $pfRaces, $pfNpcSheet, $pfShield, $skillLanguage, $pfWeapon;
		$totalLang = array_merge($pfArmor[$this->_lang],$pfClasses[$this->_lang],$pfRaces[$this->_lang],$pfNpcSheet[$this->_lang],
								 $pfShield[$this->_lang],$skillLanguage[$this->_lang],$pfWeapon[$this->_lang]);
		
		//$totalLang = $totalLang[$this->_lang];
		foreach ($totalLang as $label=>$value){
			$this->_content = preg_replace('/{'.$label.'}/', $value, $this->_content);
		}
	}

	public function setContent($content){
		$this->_content = $content;
	}
	
	public function getContent(){
		return $this->_content;
	}
	
}



?>