
function pfAC(){
	this.totalAC 		= 0;
	this.totalTouchAC	= 0;
	this.totalFlatAC	= 0;
	 
	this.sizeMod		= 0;
	this.modDex			= 0;
	this.natural		= 0;
	this.extra			= 0; //some feats increase AC 
	
	this.armor			= null;
	this.shield			= null;
	
	this.setArmor 	= function(armor) { this.armor = armor; };
	this.setShield 	= function(shield) { this.shield = shield; }; 
	
	this.calculateAC = function(){
		this.totalAC 		= 10 + this.armor.ac + this.sheald.ac + Math.min(this.modDex,this.armor.maxDex) + this.natural + Math.min(this.modDex,this.shield.maxDex) + this.extra;
		this.totalTouchAC 	= 10 + Math.min(this.modDex,this.armor.maxDex) + Math.min(this.modDex,this.shield.maxDex) + this.extra;
		this.totalFlatAC	= 10 + this.armor.ac + this.shield.ac + this.natural + this.extra;
	};
	
}