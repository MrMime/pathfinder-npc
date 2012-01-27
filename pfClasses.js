
function pfClass(){
	this.level 				= 0; //Current class Level
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
	this.damageBonus        = 0; //some class add a specific value to damage when attack
	this.ARBonus            = 0; //some class add a specific value to Attack Roll
	this.ACBonuc            = 0; //some class add a specific value to Armor Class
	this.initBonus          = 0;
	this.favouriteHP		= 0; //its the bonus due to favourite class if selected
	this.averageHP          = 0; //its the average HP of this class widthout any bonus (only dice counted)
	this.totalDiceHP		= 0;
	this.skillPointClass 	= 0; //Total Skill Point at current Level
	this.skillBase  		= 0; //Number of base Skill Point per level (es. warrior = 2, barbarian = 4 etc...)
	this.favouriteSkill     = 0; //its the bonus due to favourite class if selected
	this.spellCast  		= new Array();
	this.spellPerDay		= new Array();
	this.maxSpellLevel 		= 0;
	this.bestSpellLevel 	= 0;
	this.feats				= new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0); //feats gained
	this.ACMods				= new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0); //armor class bonus (es monk every 4 levels)
	this.ARMods             = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0); //attack roll bonus
	this.damageMods         = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0); //damage bonus
	this.initMods           = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0); //initiative bonus
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
	    this.damageBonus = this.damageMods[this.level];
	}
	
	this.calculateARBonus  =   function(){
        this.arBonus = this.ARMods[this.level];
    }
    
    this.calculateACBonus  =   function(){
        this.ACBonus = this.ACMods[this.level];
    }
    
    this.calculateInitBonus  =   function(){
        this.initBonus = this.initMods[this.level];
    }
	
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
	    //TODO:Ci sarà da leggere anche il bonus degli umani in qualche modo
		this.skillPointClass = this.skillBase * this.level;
		//If favourite class and +1 skill point per level bonus selected
		if (this.favourite && this.bonusSkill){
		    this.favouriteSkill = this.level;
		}
		this.skillPointClass += this.favouriteSkill;
	}
	
	this.calculateMaxSpellLevel = function(){
		this.maxSpellLevel = 0;
	};
	
	this.calculateTotalFeats = function(){
		this.totalFeats = arrayCustomSum(this.feats,1,this.level);
	};
	
	
	this.update = function(){
	    this.calculateST(); //calculating save throw
	    this.calculateSkillPoint();
	    this.calculateInitBonus();
	    this.calculateARBonus();
	    this.calculateACBonus();
	    this.calculateBAB();
	    this.calculateHP();
	    this.calculateSpeed();
	    this.calculateTotalFeats();
	    this.calculateMaxSpellLevel();
	    this.calculateDamageBonus();
	    if (this.name.toLowerCase() == "monk")
            this.calculateBabFlurry();
        this.draw();
	}
	
	this.draw  = function(){
	    globalClassTSF[this.index].val(addPlus(this.stf));
	    globalClassTSR[this.index].val(addPlus(this.str));
	    globalClassTSW[this.index].val(addPlus(this.stw));
	    globalClassBAB[this.index].val(this.bab);
	    //TODO: modifica damage bonus e attack roll bonus
	    globalACClass.val(this.ACBonus); //adding class modifier to AC
	    
	    globalInitClass.val(addPlus(this.initBonus));
	}
	
	
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
    }
    
    //If main weapon is a one-hand weapon or the category is light and type P, dueling class add its level
    //to damage
    this.calculateDamageBonus = function(){
        if ( (mainWeaponCategory == "light" && mainWeaponDamageType =="P") || mainWeaponHands == 1)
            this.damageBonus    = this.level; 
    }
    
}

/**
 * BARBARIAN
 */
function pfBarbarian(){
	this.inheritFrom = pfClass;
    this.inheritFrom();
	this.name 			= "Barbarian";
	this.babBase 		= new Array(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20);
	this.stCat 			= new Array(2,0,0); 
	this.speed  		= 3;
	this.skillBase  	= 4;
	this.ld				= 12;
}

function pfWarrior(){
	this.inheritFrom = pfClass;
    this.inheritFrom();
	this.name 			= "Warrior";
	this.babBase 		= new Array(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20);
	this.stCat 			= new Array(2,0,0); 
	this.speed  		= 0;
	this.skillBase  	= 2;
	this.ld				= 10;
	this.feats			= new Array(0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1);
}

function pfCleric(){
	this.inheritFrom = pfClass;
    this.inheritFrom();
	this.name 			= "Cleric";
	this.babBase  		= new Array(0,0,1,2,3,3,4,5,6,6,7,8,9,9,10,11,12,12,13,14,15);
	this.stCat 			= new Array(2,0,2); 
	this.speed  		= 0;
	this.skillBase  	= 2;
	this.ld 			= 8;
	this.maxSpellLevel 	= 0;
	this.bestSpellLevel = 9;
	
	this.calculateMaxSpellLevel = function(){
		this.maxSpellLevel = Math.floor((this.level+1)/2);
	};
}

function pfBard(){
	this.inheritFrom = pfClass;
    this.inheritFrom();
	this.name 			= "Bard";
	this.babBase  		= new Array(0,0,1,2,3,3,4,5,6,6,7,8,9,9,10,11,12,12,13,14,15);
	this.stCat 			= new Array(0,2,2); 
	this.speed  		= 0;
	this.skillBase  	= 6;
	this.ld 			= 8;
	this.maxSpellLevel 	= 0;
	this.bestSpellLevel = 6; 
	
	this.calculateMaxSpellLevel = function(){
		this.maxSpellLevel = 1+(Math.floor((this.level-1)/3));
	};
}

function pfDruid(){
	this.inheritFrom = pfClass;
    this.inheritFrom();
	this.name 			= "Druid";
	this.babBase  		= new Array(0,0,1,2,3,3,4,5,6,6,7,8,9,9,10,11,12,12,13,14,15);
	this.stCat 			= new Array(2,0,2); 
	this.speed  		= 0;
	this.skillBase  	= 4;
	this.ld 			= 8;
	this.maxSpellLevel 	= 0;
	this.bestSpellLevel = 9;
	
	this.calculateMaxSpellLevel = function(){
		this.maxSpellLevel = Math.floor((this.level+1)/2);
	};
}

function pfWizard(){
	this.inheritFrom = pfClass;
    this.inheritFrom();
	this.name 			= "Wizard";
	this.babBase  		= new Array(0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10);
	this.stCat 			= new Array(0,0,2); 
	this.speed  		= 0;
	this.skillBase  	= 2;
	this.ld 			= 6;
	this.maxSpellLevel 	= 0;
	this.bestSpellLevel = 9;
	this.feats			= new Array(0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);
	
	this.calculateMaxSpellLevel = function(){
		this.maxSpellLevel = Math.floor((this.level+1)/2);
	};
}

function pfSorcerer(){
	this.inheritFrom = pfClass;
    this.inheritFrom();
	this.name 			= "Socerer";
	this.babBase  		= new Array(0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10);
	this.stCat 			= new Array(0,0,2); 
	this.speed  		= 0;
	this.skillBase  	= 2;
	this.ld 			= 6;
	this.maxSpellLevel 	= 0;
	this.bestSpellLevel = 9;
	this.feats			= new Array(0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0);
	
	this.calculateMaxSpellLevel = function(){
		this.maxSpellLevel = Math.max(1,(Math.floor((this.level+1)/2))-1);
	};
}

/**
 * MONK
 */
function pfMonk(){
	this.inheritFrom = pfClass;
    this.inheritFrom();
	this.name 			= "Monk";
	this.babFlurryBase 	= new Array(0,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18);
	this.babFlurry 		= 0;
	this.babBase  		= new Array(0,0,1,2,3,3,4,5,6,6,7,8,9,9,10,11,12,12,13,14,15);
	this.stCat			= new Array(2,2,2);
	this.ld				= 8;
	this.ACMods			= new Array(0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5);
	
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