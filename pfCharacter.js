
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
	this.totalLevel         = 0;
	this.stf                = 0;
    this.str                = 0;
    this.stw                = 0;
    this.skillPointClass    = 0;
    this.humanBonusSkill	= 0; //its the bonus per levels of humans
    this.totalDiceHP        = new Array();
    this.averageHP          = 0;
    this.totalCosHP         = 0;
    this.totalFeatsHP       = 0;
    this.favouriteHP        = 0;
    this.totalTSFMod        = 0;
    this.totalTSRMod        = 0;
    this.totalTSWMod        = 0;
    //Spell Level stats
    this.lvSpellArcane			= 0; //sum of every level of arcana spell every classes may add
    this.lvSpellDivine			= 0; //as above
    this.lvSpellPsionic			= 0; //as above
    this.lvSpellAlchemic		= 0; //as above
    
    this.classesARBonus         = new Array(0,0,0,0,0);
    this.classesDamageBonus     = new Array(0,0,0,0,0);
    
    this.eraseAllRaces	= function(){
    	 for (var key in globalRaceModSkill) {
         	globalRaceModSkill[key] = 0;
 	    }
    };
    
    this.resetPrestigeReferenceClass = function(){
    	for (var i=maxMulticlass;i<maxSupportedClass;i++){
    		var option = "<option>--</option>";
    		$('#class0'+i+'reference').children().remove().end().append(option);
    	}
    };
    
    
    //Adding to reference select, the added core class
    //this allow the reference class select to contains ONLY core class previously selected
    this.addPrestigeReferenceClass = function(className){
    	for (var i=maxMulticlass;i<maxSupportedClass;i++){
    		var option = "<option value=\""+className+"\">"+className+"</option>";
    		var select = $('#class0'+i+'reference').append(option);
    	}
    };
	
	this.eraseAllClasses = function(){
	    this.classes = new Array();
	    this.size               = 0;
        this.movement           = 0;
        this.finalBAB           = 0;
        this.maxBab             = 0;
        this.totalLevel         = 0;
        this.stf                = 0;
        this.str                = 0;
        this.stw                = 0;
        this.skillPointClass    = 0;
        this.totalDiceHP        = new Array();
        this.averageHP          = 0;
        this.favouriteHP        = 0;
        this.totalCosHP         = 0;
        this.classesARBonus     = 0;
        this.classesDamageBonus = 0;
        
        globalClassesSkills		= new Array();
        
         //Updating cells in Weapons section
        for (i=0;i<5;i++) {
           globalWeaponBAB[i].val(addPlus(0));
           globalWeaponClassAR[i].val(addPlus(0));
           globalWeaponClassDamage[i].val(addPlus(0));
        }
        
        $('#sorcererSpell').hide();
        $('#wizardSpell').hide();
        $('#bardSpell').hide();
        $('#druiddSpell').hide();
        $('#paladinSpell').hide();
        $('#rangerSpell').hide();
        
        this.resetPrestigeReferenceClass();
	};
	
    this.addPfClasses = function(pfClasses){
        for (var i=0;i<pfClasses.length;i++)
            this.addPfClass(pfClasses[i]);    
    };
	/**
	 * Adding a Pathfinder Class to total
	 */
	this.addPfClass = function(pfClass){
	    if (pfClass.name == "none") return;
		this.classes.push(pfClass);
		this.totalLevel += parseInt(pfClass.level);
		this.totalClasses = this.classes.length;
		if (pfClass.name == "Warrior")  globalWarriorLevel = parseInt(pfClass.level);
		
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
		
		this.addPrestigeReferenceClass(pfClass.name);
	    
	    //If class has spell casting ability, the source is setted so
	    //I store in character spell category list, the caster list
	    //NOTE: No multiclass with same spell source is current supported
	    if (pfClass.spellSource != ""){
	    	this.spellPerDay[pfClass.spellSource] 	= pfClass.spellPerDay[pfClass.level];
	    	this.spellKnown[pfClass.spellSource]  	= pfClass.spellKnown[pfClass.level];
	    	this.spellST[pfClass.spellSource]   	= pfClass.spellST;
	    }
		
		//List of classes skills (es. acrobatics, handle_animal etc...)
		$.merge (globalClassesSkills,pfClass.classSkill);
		
		this.babBase[this.totalLevel] = this.maxBab;
		
		for (var i=0;i<5;i++) {
		    this.classesARBonus        += pfClass.ARBonus[i];
		    this.classesDamageBonus    += pfClass.damageBonus[i];
		}
		
	};
	
	this.calculateHP   = function(){
	      this.totalCosHP = this.totalLevel * (totalModCos.val()/1);
	      this.totalFeatsHP += globalHPTotalFeats.val()/1;
	};
	
	this.calculateBAB = function(){
	    this.finalBab = this.babToString(this.maxBab);
	};
	
	this.babToString = function(maxBab){
	    var multiple = Math.ceil(maxBab / 5);
        var finalBab = Array();
    
        var currentBab = maxBab;
        finalBab = addPlus(maxBab);
        for (var i = 1, currentBab = currentBab-5;i < multiple; i++,currentBab-=5){
            finalBab = finalBab + "/"+addPlus(currentBab);
        }
        return finalBab;
	};
	
	this.rollStats = function(high){
		strStat.val(rollStat(high));
		cosStat.val(rollStat(high));
		dexStat.val(rollStat(high));
		intStat.val(rollStat(high));
		wisStat.val(rollStat(high));
		chaStat.val(rollStat(high));
	};
	
	this.update   = function(){
	   globalLevel 			= this.totalLevel;
	   globalSkillPointsMax	= this.skillPointClass;
	   globalMaxExtraLanguage.html(totalModInt.val()/1);
	   
	   this.calculateBAB();
       this.calculateHP();
	    
	   for (var i = 0;i<this.classes.length;i++){
	       this.classes[i].update();
	   }
	   
	   this.totalTSFMod = this.stf + globalExtraTSF.val()/1 + globalRaceTSF.val()/1 + globalFeatTSF.val()/1;
	   this.totalTSRMod = this.str + globalExtraTSR.val()/1 + globalRaceTSR.val()/1 + globalFeatTSR.val()/1;
	   this.totalTSWMod = this.stw + globalExtraTSW.val()/1 + globalRaceTSW.val()/1 + globalFeatTSW.val()/1;
	   
	   this.humanBonusSkill = 0;
	   if (globalCurrentRaceName == '{human}')
		 this.humanBonusSkill = this.totalLevel;
	    
	   globalSkillPointAvaiable = this.skillPointClass + this.humanBonusSkill;
	   this.draw();   
	};
	
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
	    var averageHPTotal = this.averageHP+this.favouriteHP+this.totalCosHP+this.totalFeatsHP+this.favouriteHP;
	    globalHPTotal.val(averageHPTotal + " ("+stringHP +" "+(addPlus(this.totalCosHP+this.totalFeatsHP+this.favouriteHP))+")");
	    
	    //Updating cells in Weapons section
	    for (i=0;i<5;i++) {
           globalWeaponBAB[i].val(addPlus(this.maxBab/1));
           globalWeaponClassAR[i].val(addPlus(this.classesARBonus));
           globalWeaponClassDamage[i].val(addPlus(this.classesDamageBonus));
        }
	    
	    globalTotalSkillPointAvaiable.html(this.skillPointClass+this.humanBonusSkill);
	    
	    //Updating race skill mod stats
	    for (var key in globalRaceModSkill) {
	    	$('#skillRaceMod'+key).val(globalRaceModSkill[key]);
	    }
	    
	};
	
}