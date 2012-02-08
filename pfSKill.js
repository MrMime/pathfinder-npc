
function pfSkill()
{

	this.name			= null;
	this.stat 			= null;
	this.id				= null;
	this.armorPenalty	= false;
	
	this.points			= null;
	this.mod			= null;
	this.featBonus		= null;
	this.classBonus  	= null;
	this.trainRequire	= null;
	this.skillClass		= null;

	this.getMods = function(){
		this.mod	= globalStatsMods[this.stat].val()/1;
	};

}

function pfAcrobatics(){
	this.inheritFrom = pfFeat;
    this.inheritFrom();
    this.name = "acrobatics";
    this.armorPenalty = true;
    
    this.stat	= "dex";
    
    this.update = function(){
    	this.getMods();
    	
    	
    };
}