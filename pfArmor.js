
function pfArmor(){
	this.ac				= 0;
	this.category		= "light";
	this.maxDex			= 0;
	this.penalty		= 0;
	this.spellFailure 	= 0;
	this.speedMod		= 0;
	
	this.setCategory 		= function(category){ this.category = category; };
	this.setMaxDex 			= function(maxDex){ this.maxDex = maxDex; };
	this.setPenalty 		= function(penalty){ this.penalty = penalty; };
	this.setSpellFailure 	= function(spellFailure){ this.spellFailure = spellFailure; };
	this.speedMod 			= function(speedMod){ this.speedMod = speedMod; };
	
} 

function pfShield(){
	this.inheritFrom = pfArmor;
    this.inheritFrom();
}