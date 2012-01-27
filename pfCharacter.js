
function pfCharacter(){
	//CONSTRUCTOR
	this.inheritFrom 		= pfClass;
    this.inheritFrom();    		
	this.classes 			= new Array();
	this.totalClasses 		= 0;
	//SETTING LOCAL PROPERTIES WITH GLOBAL VARIABLES
	this.size		        = 0;
	this.movement	        = 0;
	this.finalBAB           = 0;
	this.maxBab             = 0;
	this.totalLevel              = 0;
	this.stf                = 0;
    this.str                = 0;
    this.stw                = 0;
    this.skillPointClass    = 0;
    this.totalDiceHP        = new Array();
    this.averageHP          = 0;
    this.totalCosHP         = 0;
    this.favouriteHP        = 0;
    this.totalTSFMod        = 0;
    this.totalTSRMod        = 0;
    this.totalTSWMod        = 0;
	
	this.eraseAllClasses = function(){
	    this.classes = new Array();
	    this.size               = 0;
        this.movement           = 0;
        this.finalBAB           = 0;
        this.maxBab             = 0;
        this.totalLevel              = 0;
        this.stf                = 0;
        this.str                = 0;
        this.stw                = 0;
        this.skillPointClass    = 0;
        this.totalDiceHP        = new Array();
        this.averageHP          = 0;
        this.favouriteHP        = 0;
        this.totalCosHP         = 0;
	}
	
	/**
	 * Adding a Pathfinder Class to total
	 */
	this.addPfClass = function(pfClass){
	    if (pfClass.name == "none") return;
		this.classes.push(pfClass);
		this.totalLevel += parseInt(pfClass.level);
		this.totalClasses = this.classes.length;
		
		//When Adding a class, I have to sum every single properties of the new class
		this.modSpeed 			+= pfClass.modSpeed/1;
		this.maxBab   			+= pfClass.maxBab/1;
		this.stf		 		+= pfClass.stf/1;
		this.str		 		+= pfClass.str/1;
		this.stw		 		+= pfClass.stw/1;
		this.skillPointClass 	+= pfClass.skillPointClass/1;
		this.totalDiceHP.push(pfClass.totalDiceHP);
		this.favouriteHP        += pfClass.favouriteHP;
		this.averageHP 			+= pfClass.averageHP;
		
		this.babBase[this.totalLevel] = this.maxBab;
	};
	
	this.calculateHP   = function(){
	      this.totalCosHP = this.totalLevel * (totalModCos.val()/1);
	      this.averageHP += globalHPTotalFeats.val()/1;
	};
	
	this.calculateBAB = function(){
        var multiple = Math.ceil(this.maxBab / 5);
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
	   this.calculateBAB();
       this.calculateHP();
	    
	   for (var i = 0;i<this.totalClasses;i++){
	       this.classes[i].update();
	   }
	   
	   this.totalTSFMod = this.stf + globalExtraTSF.val()/1 + globalRaceTSF.val()/1;
	   this.totalTSRMod = this.str + globalExtraTSR.val()/1 + globalRaceTSR.val()/1;
	   this.totalTSWMod = this.stw + globalExtraTSW.val()/1 + globalRaceTSW.val()/1;
	   
	   this.draw();   
	}
	
	this.draw      = function(){
        globalTotalLevel.val(parseInt(this.totalLevel));
        globalTotalBAB.val(this.finalBab);
	    
	    globalTotalTSF.val(addPlus(this.stf));
	    globalTotalTSR.val(addPlus(this.str));
	    globalTotalTSW.val(addPlus(this.stw));
	    
	    globalTotalTSFMod.val(addPlus(this.totalTSFMod));
	    globalTotalTSRMod.val(addPlus(this.totalTSRMod));
	    globalTotalTSWMod.val(addPlus(this.totalTSWMod));
	    
	    var stringHP = implode(" + ",this.totalDiceHP);
	    globalHPTotal.val(stringHP + " ("+(this.averageHP+this.favouriteHP+this.totalCosHP)+" HP)");
	    
	     for (i=0;i<5;i++)
           globalWeaponBAB[i].val(addPlus(this.maxBab/1));
	    
	}
	
}