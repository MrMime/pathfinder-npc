
function pfCharacter(){
	//CONSTRUCTOR
	this.inheritFrom 		= pfClass;
    this.inheritFrom();    		
	this.classes 			= new Array();
	this.totalClasses 		= 0;
	//SETTING LOCAL PROPERTIES WITH GLOBAL VARIABLES
	this.stats 		= null;
	this.race		= null;
	this.alignment	= null;
	this.size		= null;
	this.movement	= null;
	
	/**
	 * Adding a Pf Class to total
	 */
	this.addPfClass = function(pfClass){
		this.classes.push(pfClass);
		this.level += pfClass.level;
		this.totalClasses = this.classes.length;
		
		//When Adding a class, I have to sum every single properties of the new class
		this.modSpeed 			+= pfClass.modSpeed;
		this.maxBab   			+= pfClass.maxBab;
		this.stf		 		+= pfClass.stf;
		this.str		 		+= pfClass.str;
		this.stw		 		+= pfClass.stw;
		this.skillPointClass 	+= pfClass.skillPointClass;
		this.stringHP 			+= pfClass.level +"d"+pfClass.ld;
		this.averageHP 			+= "+ "+pfClass.averageHP;
		
		this.babBase[this.level] = this.maxBab;
		this.calculateBAB();
	};
	
	this.setRace = function (pfRace){
		this.race = pfRace;
		
		this.stf += pfRace.modStf;
		this.str += pfRace.modStr;
		this.stw += pfRace.modStw;
		
		this.totalFeats = this.totalFeats + arrayCustomSum(pfRace.extraFeats,1,this.level);
	};
	
	this.rollStats = function(high){
		str.val(rollStat(high));
		cos.val(rollStat(high));
		dex.val(rollStat(high));
		int.val(rollStat(high));
		wis.val(rollStat(high));
		cha.val(rollStat(high));
	};
	
}