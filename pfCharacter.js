
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
	this.finalBAB   = null;
	
	this.eraseAllClasses = function(){
	    this.classes = new Array();
	}
	
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
	
	this.calculateBAB = function(){
        var multiple = Math.ceil(maxBab / 5);
        this.finalBab = Array();
    
        var currentBab = this.maxBab;
        this.finalBab = addPlus(this.maxBab);
        for (var i = 1, currentBab = currentBab-5;i < multiple; i++,currentBab-=5){
            this.finalBab = this.finalBab + "/"+addPlus(currentBab);
        }
	}
	
	this.rollStats = function(high){
		str.val(rollStat(high));
		cos.val(rollStat(high));
		dex.val(rollStat(high));
		int.val(rollStat(high));
		wis.val(rollStat(high));
		cha.val(rollStat(high));
	};
	
	this.update   = function(){
	    
	   this.draw();   
	}
	
	this.draw      = function(){
	    
	}
	
}