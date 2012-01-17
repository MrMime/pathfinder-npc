
function pfWeapon(){
	this.name			= "";
	this.damageMod		= 0;
	this.damageDice		= 0;
	this.diceNumber		= 0;
	
	this.size			= 0;
	this.minCritic		= 20;
	this.multiplier		= 2;
	this.twoHand		= false;
	this.type			= "";
	this.typeList		= new Array ("melee","ranged");
	
	this.modMagic		= 0;
	
	this.focus			= false;
	this.improveFocus	= false;
	
	this.spec			= false;
	this.improveSpec	= false;
	
	this.accuracy		= false;
	this.attackRollMod	= 0;
	
	this.setName 			= function(name){this.name = name;};
	this.setDamageMod 		= function(damageMod){this.damageMod = damageMod;};
	this.setTwoHand			= function(twoHand){this.twoHand = twoHand;};
	this.setType 			= function(type){this.type = type;};
	this.setFocus			= function(focus){this.focus = focus;};
	this.setImproveFocus	= function(improveFocus){this.improveFocus = improveFocus;};
	this.setSpec			= function(spec){this.spec = spec;};
	this.setImproveSpec		= function(improveSpec){this.improveSpec = improveSpec;};
	this.setAccuracy		= function(accuracy){this.accuracy = accuracy;};
	
	/**
	 * Convert a String link 4d6 in 2 integer
	 * rapresenting number of dice and damage dice
	 */
	this.setDamage 	= function(damage){
		this.diceNumber = parseInt(damage.match(/^[0-9]+/)[0]);
		this.damageDice = parseInt(damage.match(/[0-9]+$/)[0]);		
	};
	
	//Magic Mod is added to attack roll and damage
	this.setModMagic = function(modMagic){ this.modMagic = modMagic; this.attackRollMod = this.modMagic; this.damageMod = this.modMagic; };
	
	/**
	 * Size of creatures alters the damage dice
	 * Size can be: 0 = medium; 1 = small; -1 = big
	 * 
	 *  C  I   O
	 *  0  1  -1
	 *  0 -1  -1
	 *  1  0  -1
	 *  1 -1  -2
	 * -1  0  +1
	 * -1  1  +2
	 */
	this.setSize	= function(size) {
		if (size == this.size) return;
		var variation = size - this.size;
		//if variation > 0, increase weapong size
		if (variation > 0){
			
		}
		else {
			
		}
		
	};
	
}