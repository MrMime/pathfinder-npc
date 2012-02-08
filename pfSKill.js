
function pfSkill()
{

	this.name			= null;
	this.stat 			= null;
	this.points			= null;
	this.mod			= null;
	this.featBonus		= null;
	this.classBonus  	= null;
	this.id				= null;

}

function pfAcrobatics(){
	this.inheritFrom = pfFeat;
    this.inheritFrom();
    this.name = "acrobatics";
    
    this.stat	= "dex";
    
}