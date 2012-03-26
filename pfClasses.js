
function pfClass(){
	this.level 				= 1; //Current class Level
	this.modSpeed			= 0; //Current class modifier for base speed (in meters)
	this.babBase			= new Array(); //Class bab category (warrior like, cleric like, spellcaster like)
	this.bab 				= 0;
	this.maxBab     		= 0; //Current Max Bab (equal to level for warrior type class)
	this.stCat				= 0; //Save Throw Category. Category is a list of type of starting ST (es. 2,0,0 for Warrior Like; 2,0,2 for Cleric etc...);
	this.stf				= 0; //Class Fortitude save throw
	this.str				= 0; //Class Reflex save throw
	this.stw				= 0; //Class Will save throw
	this.name				= "none";
	this.ld					= 0; //Class Life Dice
	this.damageBonus        = new Array(0,0,0,0,0); //some class add a specific value to damage when attack
	this.ARBonus            = new Array(0,0,0,0,0); //some class add a specific value to Attack Roll
	this.ACBonuc            = 0; //some class add a specific value to Armor Class
	this.initBonus          = 0;
	this.favouriteHP		= 0; //its the bonus due to favourite class if selected
	this.averageHP          = 0; //its the average HP of this class widthout any bonus (only dice counted)
	this.totalDiceHP		= 0;
	//Skill Section
	this.skillPointClass 	= 0; //Total Skill Point at current Level
	this.skillBase  		= 0; //Number of base Skill Point per level (es. warrior = 2, barbarian = 4 etc...)
	this.favouriteSkill     = 0; //its the bonus due to favourite class if selected
	//Spell Section
	this.spellCast  		= new Array();
	this.spellPerDay		= new Array();
	this.spellKnown			= new Array();
	this.maxSpellLevel 		= 0;  //current max spell level (due to level of primary class and a prestige class increment)
	this.bestSpellLevel 	= 0;  //best spell of class (ex. 9 for wizard, 4 for ranger etc....)
	this.spellSource		= ""; //its the spell source. It can be arcana, divine, psionic o alchemic
	this.spellStatsMod		= ""; //stats wich is based the spellcasting (es. int for wizard)
	this.spellKnowBonus	    = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0); //added spell bonus (es sorcerer has blood spell bonus)
	this.spellST			= new Array(0,0,0,0,0,0,0,0,0,0);
	this.spellManager		= new pfSpellsManager();
	this.lvSpellArcaneInc	= new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0); //increment of spell clasting level for arcane schools
	this.lvSpellDivineInc 	= new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0); //increment of spell clasting level for divine schools
	this.lvSpellPsionicInc 	= new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0); //increment of spell clasting level for psionic schools
	this.lvSpellAlchemicInc	= new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0); //increment of spell clasting level for alchemic schools
	this.lvSpellGenericInc 	= new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0); //increment of spell clasting level for generic (es. CDP)
	this.lvSpells			= new Array();
	this.lvSpells['arcana'] 	= 0;
	this.lvSpells['divine'] 	= 0;
	this.lvSpells['psionic'] 	= 0;
	this.lvSpells['alchemic'] 	= 0;
	/*
	this.lvSpellArcane		= 0; //current arcane 	spell level
    this.lvSpellDivine		= 0; //current divine 	spell level
    this.lvSpellPsionic		= 0; //current psionic 	spell level
    this.lvSpellAlchemic	= 0; //current alchemic spell level
    */
    this.lvSpellArcanaPrestigeInc 	= 0;
    this.lvSpellDivinePrestigeInc 	= 0;
    this.lvSpellPsionicPrestigeInc 	= 0;
    this.lvSpellAlchemicPrestigeInc = 0;
    this.lvSpellGenericPrestigeInc 	= 0;
    //its the current casting level. For pure class is equal to class level but some Prestige Class may add an increment to casting level
    //every class will initialize this with one of lvSpellXXXXX
    this.classCastingLevel	= 0; 
	
	this.feats				= new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0); //feats gained
	this.ACMods				= new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0); //armor class bonus (es monk every 4 levels)
	this.ARMods             = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0); //attack roll bonus
	this.damageMods         = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0); //damage bonus
	this.initMods           = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0); //initiative bonus
	this.classSkill			= new Array();
	this.totalFeats			= 0;
	this.favourite			= false;
	this.bonusHP       		= false; //true if HP bonus for favoruite class is selected
	this.bonusSkill         = false; //true if SKill bonus for favoruite class is selected
	this.classType          = "core"; //core or CDP
	this.maxLevel           = 20; //non CDP class has 20 level cap
	//this is the index from 0 to 4 that represent the numerical number of class
	//between the 5 an user can add
	//this index allow the pfClass to modify its own specific HTML tags
	this.index              = 0;
	
	//METHODS
	this.setLevel 	= function(level){ this.level = level; };
	this.setIndex   = function(index){ this.index = index; };
	this.setFavourite = function(favourite,bonusHP,bonusSkill){ 
	    this.favourite     = favourite; 
	    this.bonusHP       = bonusHP; 
	    this.bonusSkill    = bonusSkill;
	};
	
	this.calculateHP = function(){
		this.averageHP    = Math.floor(this.ld /2) * this.level;
		this.totalDiceHP  = this.level+"d"+this.ld;
		this.favouriteHP  = 0;
		//If favourite class and +1 HP per level bonus selected
		if (this.favourite && this.bonusHP) {
			this.favouriteHP = this.level;
		}
	};
	
	this.calculateDamageBonus  =   function(){
	    for (var i=0;i<5;i++)
	       this.damageBonus[i] = this.damageMods[this.level];
	};
	
	this.calculateARBonus  =   function(){
	    for (var i=0;i<5;i++)
            this.ARBonus[i] = this.ARMods[this.level];
    };
    
    this.calculateACBonus  =   function(){
        this.ACBonus = this.ACMods[this.level];
    };
    
    this.calculateInitBonus  =   function(){
        this.initBonus = this.initMods[this.level];
    };
    
    //Calcola il livello totale di una scuola di spell
    //gli array contengono l'incremento rispetto al livello precedente
    //E' utile per gestire le CDP che incrementano il lv corrente di una classe
    this.calculateSpellLevel = function(){
    	this.lvSpells['arcana']		= indexArraySum(this.lvSpellArcaneInc,1,this.level) 	+ this.lvSpellArcanaPrestigeInc;
    	this.lvSpells['divine']		= indexArraySum(this.lvSpellDivineInc,1,this.level) 	+ this.lvSpellDivinePrestigeInc;
    	this.lvSpells['psionic']	= indexArraySum(this.lvSpellPsionicInc,1,this.level) 	+ this.lvSpellPsionicPrestigeInc;
    	this.lvSpells['alchemic']	= indexArraySum(this.lvSpellAlchemicInc,1,this.level) 	+ this.lvSpellAlchemicPrestigeInc;
    	this.lvSpellGeneric			= indexArraySum(this.lvSpellGenericInc,1,this.level) 	+ this.lvSpellGenericPrestigeInc;
    	
    	//If prestige class increments a generic spell source without specific which, I have to add the increment
    	//to the highest source spell.
    	//If more than one source has the max lv casting, the order of adding is arcana->divine->psionic->alchemic
    	if (this.lvSpellGenericPrestigeInc > 0) {
    		this.lvSpells[this.spellSource] += this.lvSpellGenericPrestigeInc;
    	}
    };
	
	/**
	 * Return a formatted string with all bab bonus
	 * Input: integer (the total bab. Es. 16 for a 16th warrior)
	 * Output: String (the string formatted with "/")
	 */
	this.calculateBAB = function(){
		this.maxBab = this.babBase[this.level];
		var multiple = Math.ceil(this.maxBab / 5);
		this.bab = Array();
		var currentBab = this.maxBab;
		this.bab = addPlus(this.maxBab);
		for (var i = 1, currentBab = currentBab-5;i < multiple; i++,currentBab-=5){
			this.bab = this.bab + "/"+addPlus(currentBab);
		}
	};
	
	/**
	 * Calculate saving throw based on save category
	 * This is base class saving throw
	 */
	this.calculateST = function(){
		 var tsfinal = Array();
		 for (var i=0;i<3;i++){
			 if (this.stCat[i] == 2)
				 tsfinal[i] = Math.floor(this.level/2)+2;
			 else
				 tsfinal[i] = Math.floor(this.level/3);
			 
		 }
		 this.stf = tsfinal[0];
		 this.str = tsfinal[1];
		 this.stw = tsfinal[2];
	};
	
	this.calculateSpeed = function(){
		return this.modSpeed;
	};		
	
	this.calculateSkillPoint = function(){
	    //NB: Human skill bonus is added in pfCharacter
		this.skillPointClass = this.skillBase * this.level;
		//If favourite class and +1 skill point per level bonus selected
		if (this.favourite && this.bonusSkill){
		    this.favouriteSkill = this.level;
		}
		this.skillPointClass += this.favouriteSkill;
	};
	
	this.calculateMaxSpellLevel = function(){
		this.maxSpellLevel = 0;
	};
	
	this.calculateTotalFeats = function(){
		this.totalFeats = arrayCustomSum(this.feats,1,this.level);
	};
	
	this.calcolateBaseSpellStat = function(){
		
	};
	
	this.makeLevelOptions = function(){
		var id = 'class0'+this.index+'Level';
		var sel = $('#'+id);
		if ( ($('#'+id+' option').size()) > 0 ) return;
		for (var i=1;i<=this.maxLevel;i++)
			sel.append('<option value="'+i+'">'+i+'</option>');
	};
	
	//Adding spell bonus per day due to High stat
	this.updateSpellPerDay = function(){
		if (this.spellStatMod == null) return;
		this.calcolateBaseSpellStat();
		var statMods = globalStatsMods[this.spellStatMod].val()/1;
		for (var i=1;i<this.spellPerDay.length;i++){
			var temp = this.spellPerDay[i];
			for (j=1;j<temp.length;j++){
				bonus = this.spellManager.spellPerDayBonus(statMods,j);
				bonus = temp[j]/1+bonus/1;
				temp[j] = (isNaN(bonus)) ? 0 : bonus;
			}
			this.spellPerDay[i] = temp;
		}
	};
	
	this.updateSpellSt = function(){
		if (this.spellStatMod == null) return;
		var statMods = globalStatsMods[this.spellStatMod].val()/1;
		for (var i=0;i<this.spellST.length;i++)
			this.spellST[i] = 10 + statMods + i;
	};
	
	this.updateSpellKnown = function(){
		if (this.spellStatMod == null) return;
	};
	
	this.update = function(){
		this.makeLevelOptions();
	    this.calculateST(); //calculating save throw
	    this.calculateSkillPoint();
	    this.calculateInitBonus();
	    
	    this.calculateACBonus();
	    this.calculateBAB();
	    this.calculateHP();
	    this.calculateSpeed();
	    this.calculateTotalFeats();
	    this.calculateMaxSpellLevel();
	    this.updateSpellPerDay();
	    this.updateSpellSt();
	    this.calculateSpellLevel();
	    
	     for (var i=0;i<5;i++) {
	        this.calculateDamageBonus(i);
	        this.calculateARBonus(i);
	     }
	    
	    if (this.name.toLowerCase() == "monk")
            this.calculateBabFlurry();
        this.draw();
	};
	
	this.buildPrestigeClassReference = function(){ return;	};
	
	this.draw  = function(){
	    globalClassTSF[this.index].val(addPlus(this.stf));
	    globalClassTSR[this.index].val(addPlus(this.str));
	    globalClassTSW[this.index].val(addPlus(this.stw));
	    globalClassBAB[this.index].val(this.bab);
	    //The class reference select is only visibile to prestige class
	    this.buildPrestigeClassReference();
	    if (this.classType != 'prestige')
	    	globalClassReference[this.index].hide();
	    
	    globalACClass.val(this.ACBonus); //adding class modifier to AC
	    globalInitClass.val(addPlus(this.initBonus));
	    
	    //If this is a caster Class...
	    if (this.spellSource != ""){
	    	var spellSection 	= $('#'+this.name+'Spell');
	    	spellSection.show();
	    	this.hideSpellICantCast();
	    	this.spellManager.printWizardList(this.name); //print the list of spell divided by spell level
	    	
		    if (this.spellPerDay.length > 0)
			    for (var i=0;i<=this.bestSpellLevel;i++){
			    	var globalSpellPerDay 	= $('#perdaySpell'+i+this.name);
			    	var spd = this.spellPerDay[this.lvSpells[this.spellSource]][i];
			    	spd = (spd == '-1') ? 'oo': spd; 
			    	globalSpellPerDay.val(spd);
			    }
		    if (this.spellST.length > 0)
		    	for (var i=0;i<=this.bestSpellLevel;i++) {
		    		var globalSpellST 	= $('#stSpell'+i+this.name);
		    		globalSpellST.val(this.spellST[i]);
		    	}
		    
		    if (this.spellKnown.length > 0)
		    	for (var i=0;i<=this.bestSpellLevel;i++){
		    		var globalSpellKnown 	= $('#spellknown'+i+this.name);
		    		globalSpellKnown.val(this.spellKnown[this.lvSpells[this.spellSource]][i]);
		    	};
	    }
	};
	
	this.hideSpellICantCast = function(){
		for (var i=0;i<=this.bestSpellLevel;i++){
			if (i<=this.maxSpellLevel)
				$('#spellList'+i+this.name).attr("disabled",false);
			else
				$('#spellList'+i+this.name).attr("disabled",true);
		}
	};
	
}

/**
 * DUELLANTE
 */
function pfDuelling(){
    this.inheritFrom = pfClass;
    this.inheritFrom();
    this.classType = "cdp";   
    this.maxLevel   = 10;
    
    this.name       =   "dueling";
    this.skillBase  = 4;
    this.ld         = 10;
    
    this.babBase    = new Array(0,1,2,3,4,5,6,7,8,9,10);
    this.stCat      = new Array(0,2,0);
    this.initMods   = new Array(0,0,2,2,2,2,2,2,4,4,4); //initiative bonus
    
    
    //If wearing a light armor and no shield, a duel fighter may add one mod int bonus every level to mod-dex
    //to calculate AC. For this reason, bonus has to consider globalMaxDex
    this.calculateACBonus  =   function(){
        var category = gpfArmor.category;
        if (category == "light" && gpfShield.ac==0){
            var modInt  = totalModInt.val()/1;
            var modDex  = totalModDex.val()/1;
            var bonus   = Math.min(this.level,modInt);
            
            this.ACBonus = Math.min(bonus,(globalCurrentMaxDex-modDex));
        }
    };
    
    //If main weapon is a one-hand weapon or the category is light and type P, dueling class add its level
    //to damage
    this.calculateDamageBonus = function(index){
        var curentWeapon = gpfWeapon[index];
        if ( (curentWeapon.category == "light" && inArray("P",curentWeapon.damageType)) || !curentWeapon.twoHand)
            this.damageBonus[index]    = this.level;
    };
    
}

/**
 * BARBARIAN
 */
function pfBarbarian(){
	this.inheritFrom = pfClass;
    this.inheritFrom();
	this.name 			= "barbarian";
	this.babBase 		= new Array(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20);
	this.stCat 			= new Array(2,0,0); 
	this.speed  		= 3;
	this.skillBase  	= 4;
	this.ld				= 12;
	this.classSkill		= new Array('acrobatics','climb','craft','handle_animal','intimidate','knowledge_nature','perception','ride','survival','swim');
}

function pfPaladin(){
	this.inheritFrom = pfClass;
    this.inheritFrom();
	this.name 			= "paladin";
	this.babBase		= new Array(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20);
	this.stCat 			= new Array(2,0,2);
	this.skillBase		= 2;
	this.ld				= 10;
	this.bestSpellLevel	= 4;
	this.classSkill		= new Array('handle_animal','craft','intimidate','knowledge_nobility','knowledge_religion','diplomacy','ride','heal','spellcraft','profession');
	this.spellSource	= "divine";
	this.spellStatMod		= "cha";
	this.lvSpellDivineInc	= new Array(0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1); 
	
	this.calcolateBaseSpellStat = function() {
	    	this.spellManager.buildSpellMatrix(this.spellManager.lowCast);
	    	this.spellPerDay = this.spellManager.perDay;
	};
}

function pfRanger(){
	this.inheritFrom = pfClass;
    this.inheritFrom();
    this.name = "ranger";
    this.babBase 		= new Array(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20);
    this.stCat 			= new Array(2,2,0);
    this.skillBase  	= 6;
    this.bestSpellLevel	= 6;
    this.ld				= 10;
    this.spellSource	= "divine";
    this.classSkill		= new Array('handle_animal','craft','ride','knowledge_dungeoneering','knowledge_geography','knowledge_nature','stealth','heal','intimidate','swim','perception','profession','spellcraft','climb','survival');
    this.lvSpellDivineInc	= new Array(0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
    
    this.calcolateBaseSpellStat = function() {
    	this.spellManager.buildSpellMatrix(this.spellManager.lowCast);
    	this.spellPerDay = this.spellManager.perDay;
    };
}

function pfWarrior(){
	this.inheritFrom = pfClass;
    this.inheritFrom();
	this.name 			= "warrior";
	this.babBase 		= new Array(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20);
	this.stCat 			= new Array(2,0,0); 
	this.speed  		= 0;
	this.skillBase  	= 2;
	this.ld				= 10;
	this.feats			= new Array(0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1);
	this.classSkill		= new Array('climb','craft','handle_animal','knowledge_dungeoneering','knowledge_engeneering','profession','ride','survival','swim');
	
	//from 3th level, reduce the penalty of dex of armor by 1 every 4 levels
	//due to impossibility to modify max-mod-dex of armor, I can compensate with
	//a class bonus to CA
	this.calculateACBonus  =   function(){
	    var modDex = totalModDex.val()/1;
	    var difference = modDex-globalCurrentMaxDex; //different between modDex total and Armor Max Dex
	    if (difference > 0 && this.level >= 3){
	        var rest = this.level % 4;
	        this.ACBonus = Math.floor(this.level / 4);
	        if (rest==3)
	           this.ACBonus++;
	        this.ACBonus = Math.min(this.ACBonus,difference);
	    }
	};
	
	//CALCULATING CLASS BONUS TO ATTACK ROLL WITH INDEX WEAPON
	this.calculateARBonus = function(index){
	        var trainingARBonus = 0;
	        var train = globalWeaponTrain[index].is(':checked');
            if (train && this.level >=5){
               var rest = this.level % 5;
               trainingARBonus = Math.floor(this.level / 5);
                if (rest==4) 
                   trainingARBonus++;
            }
            this.ARBonus[index] = trainingARBonus;
	};
	
	//CALCULATING CLASS BONUS TO DAMAGE WITH INDEX WEAPON
	this.calculateDamageBonus = function(index){
            var trainingDamageBonus = 0;
            var train = globalWeaponTrain[index].is(':checked');
            if (train && this.level >=5){
               var rest = this.level % 5;
               trainingDamageBonus = Math.floor(this.level / 5);
                if (rest==4) 
                   trainingDamageBonus++;
            }
            this.damageBonus[index] = trainingDamageBonus;
    };
	
}

function pfCleric(){
	this.inheritFrom = pfClass;
    this.inheritFrom();
	this.name 			= "cleric";
	this.babBase  		= new Array(0,0,1,2,3,3,4,5,6,6,7,8,9,9,10,11,12,12,13,14,15);
	this.stCat 			= new Array(2,0,2); 
	this.speed  		= 0;
	this.skillBase  	= 2;
	this.ld 			= 8;
	this.maxSpellLevel 	= 0;
	this.bestSpellLevel = 9;
	this.spellStatMod		= "wis";
	this.spellSource		= "divine";
	this.lvSpellDivineInc	= new Array(0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	
	this.classSkill		= new Array('apprise','craft','diplomacy','knowledge_arcana','knowledge_history','knowledge_nobility','knowledge_planes','knowledge_religion','heal','linguistics','profession','sense_motive','spellcraft');
	
	this.calculateMaxSpellLevel = function(){
		this.maxSpellLevel = Math.floor((this.level+1)/2);
	};
}

function pfBard(){
	this.inheritFrom = pfClass;
    this.inheritFrom();
	this.name 			= "bard";
	this.babBase  		= new Array(0,0,1,2,3,3,4,5,6,6,7,8,9,9,10,11,12,12,13,14,15);
	this.stCat 			= new Array(0,2,2); 
	this.speed  		= 0;
	this.skillBase  	= 6;
	this.ld 			= 8;
	this.maxSpellLevel 	= 0;
	this.bestSpellLevel = 6; 
	this.spellStatMod		= "cha";
	this.spellSource		= "arcana";
	this.lvSpellArcaneInc	= new Array(0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	
	this.classSkill		= new Array('acrobatics','apprise','bluff','climb','craft','diplomacy','disguise','escape_artist','intimidate','knowledge_arcana',
									'knowledge_dungeoneering','knowledge_engineering','knowledge_geography','knowledge_history','knowledge_local','knowledge_nature',
									'knowledge_nobility','knowledge_planes','knowledge_religion','knowledge_psionic','linguistics','perception','perform','profession',
									'sense_motive','sleight_of_hand','spellcraft','use_magic_device');
	
	this.calculateMaxSpellLevel = function(){
		this.maxSpellLevel = 1+(Math.floor((this.level-1)/3));
	};
	
	this.spellManager.buildSpellMatrix(this.spellManager.bardCast);
	this.spellPerDay = this.spellManager.perDay;
	
	this.spellManager.buildSpellKnow(this.spellManager.bardSpelKnown);
	this.spellKnown	= this.spellManager.known;
}

function pfDruid(){
	this.inheritFrom = pfClass;
    this.inheritFrom();
	this.name 			= "druid";
	this.babBase  		= new Array(0,0,1,2,3,3,4,5,6,6,7,8,9,9,10,11,12,12,13,14,15);
	this.stCat 			= new Array(2,0,2); 
	this.speed  		= 0;
	this.skillBase  	= 4;
	this.ld 			= 8;
	this.maxSpellLevel 	= 0;
	this.bestSpellLevel = 9;
	this.spellStatMod	= "wis";
	this.spellSource	= "divine";
	
	this.classSkill		= new Array('climb','craft','fly','handle_animal','heal','knowledge_geography','knowledge_nature','perception','profession','ride',
									'spellcraft','survival','swim');
	
	this.calculateMaxSpellLevel = function(){
		this.maxSpellLevel = Math.floor((this.level+1)/2);
	};
	
	this.calcolateBaseSpellStat = function() {
		this.spellManager.buildSpellMatrix(this.spellManager.fullCast);
		this.spellPerDay = this.spellManager.perDay;
	};
}

function pfWizard(){
	this.inheritFrom = pfClass;
    this.inheritFrom();
	this.name 			= "wizard";
	this.babBase  		= new Array(0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10);
	this.stCat 			= new Array(0,0,2); 
	this.speed  		= 0;
	this.skillBase  	= 2;
	this.ld 			= 6;
	this.maxSpellLevel 	= 0;
	this.bestSpellLevel = 9;
	this.feats				= new Array(0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);
	this.lvSpellArcaneInc	= new Array(0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1); 
	this.spellStatMod		= "int";
	this.spellSource		= "arcana";
	
	this.classSkill		= new Array('appraise','craft','fly','linguistics','profession','spellcraft','knowledge_arcana',
									'knowledge_dungeoneering','knowledge_engineering','knowledge_geography','knowledge_history','knowledge_local','knowledge_nature',
									'knowledge_nobility','knowledge_planes','knowledge_religion','knowledge_psionic');
	
	this.calculateMaxSpellLevel = function(){
		this.maxSpellLevel = Math.floor((this.level+1)/2);
	};
	
	this.calcolateBaseSpellStat = function() {
		this.spellManager.buildSpellMatrix(this.spellManager.fullCast);
		this.spellPerDay = this.spellManager.perDay;
	};
}

function pfSorcerer(){
	this.inheritFrom = pfClass;
    this.inheritFrom();
	this.name 			= "sorcerer";
	this.babBase  		= new Array(0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10);
	this.stCat 			= new Array(0,0,2); 
	this.speed  		= 0;
	this.skillBase  	= 2;
	this.ld 			= 6;
	this.maxSpellLevel 	= 0;
	this.bestSpellLevel = 9;
	this.feats				= new Array(0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0);
	this.lvSpellArcaneInc	= new Array(0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	this.spellStatMod		= "cha";
	this.spellSource		= "arcana";
	
	this.classSkill		= new Array('appraise','bluff','craft','fly','intimidate','knowledge_arcana','profession','spellcraft','use_device_magic');
	
	this.calculateMaxSpellLevel = function(){
		this.maxSpellLevel = Math.max(1,(Math.ceil((this.lvSpells['arcana']+1)/2))-1);
	};
	
	this.spellKnowBonus = new Array(0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0);
	
	this.calcolateBaseSpellStat = function() {
		this.spellManager.buildSpellMatrix(this.spellManager.medCast);
		this.spellPerDay = this.spellManager.perDay;
	
		this.spellManager.buildSpellKnow(this.spellManager.baseSpelKnown);
		this.spellKnown	= this.spellManager.known;
	};
}

/**
 * MONK
 */
function pfMonk(){
	this.inheritFrom = pfClass;
    this.inheritFrom();
	this.name 			= "monk";
	this.babFlurryBase 	= new Array(0,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18);
	this.babFlurry 		= 0;
	this.babBase  		= new Array(0,0,1,2,3,3,4,5,6,6,7,8,9,9,10,11,12,12,13,14,15);
	this.stCat			= new Array(2,2,2);
	this.ld				= 8;
	this.ACMods			= new Array(0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5);
	
	this.classSkill		= new Array('acrobatics','climb','craft','escape_artist','intimidate','perception','perform','profession','ride','sense_motive','stealth','swim','knowledge_history','knowledge_religion');
	
	this.calculateSpeed = function(){
		this.modSpeed = Math.floor(this.level/3);
	};
	
	//Calculate Bab Flurry
	this.calculateBabFlurry = function(maxBab){
		if (maxBab != null)
			this.maxBab = maxBab;
		babMultiple = Math.floor(this.maxBab / 6);
		
		maxBabFlurry = this.babFlurryBase[this.level];
		var flurryMultiple = Math.floor(this.maxBab / 4);
		this.babFlurry = Array();
		
		//I always add 2x Max Flurry Base Attack
		this.babFlurry.push(addPlus(maxBabFlurry));
		this.babFlurry.push(addPlus(maxBabFlurry));
		//max number of attack beyond the base two
		var iteration = babMultiple + flurryMultiple; 
		for (var i = 0,j=1,h=1;i < iteration;i++,j++){
			lowestAttack = maxBabFlurry-(h*5);
			if (lowestAttack >= -1)
			this.babFlurry.push(addPlus(lowestAttack));
			if (j%2 == 0) h++;
		}
		this.babFlurry = implode("/",this.babFlurry);
	};
}