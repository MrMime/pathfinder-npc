
function pfWeapon(){
	this.name			= "";
	this.damageMod		= 0;
	this.damageDice		= 0;
	this.diceNumber		= 1;
	this.sizedDamageDice= 0;
	this.sizedDiceNumber= 0;
	this.damageDiceString = "";
	this.damage         = 0;
	this.category       = "light";
	this.damageType     = new Array();
	this.damageList     = new Array("S","P","B"); //damage type S = Tagliente, B = Contundente, P = Perforante
	this.AR             = 0;
	this.ARBonus        = 0; //special ability allow the weapon to sum its own ARBonus to BMC
	this.ARString       = "";
	
	this.size			= 0;
	this.minCritic		= 20;
	this.criticMultiplier	= 2;
	this.criticMultiplierString = "";
	this.criticRange    = "20";
	this.twoHand		= false;
	this.hand           = "";
	this.type			= "melee";
	this.typeList		= new Array ("melee","ranged");
	this.secondHand     = false;
	this.mainWeapon     = false; //is the weapon the first choice?
	this.special        = new Array(); //some weapons has special quality like disarm, trip etc....
	
	this.modMagic		= 0;
	this.perfect        = false;
	this.train          = false;
	
	this.focus			= false;
	this.improveFocus	= false;
	
	this.spec			= false;
	this.improveSpec	= false;
	
	this.accuracy		= false;
	this.attackRollMod	= 0;
	
	this.index          = 0; //index allow the class to modify its own html tags
	this.twoHandCombat  = false;
	this.twoHandCombatPenalty  = 0;
	
	this.disarmBonus    = 0;
	this.tripBonus      = 0;
	this.sunderBonus    = 0;
	
	this.setName 			= function(name){this.name = name;};
	this.setDamageMod 		= function(damageMod){this.damageMod = damageMod;};
	this.setTwoHand			= function(twoHand){this.twoHand = twoHand;};
	this.setType 			= function(type){this.type = type;};
	this.setFocus			= function(focus){this.focus = focus;};
	this.setImproveFocus	= function(improveFocus){this.improveFocus = improveFocus;};
	this.setSpec			= function(spec){this.spec = spec;};
	this.setImproveSpec		= function(improveSpec){this.improveSpec = improveSpec;};
	this.setAccuracy		= function(accuracy){this.accuracy = accuracy;};
	this.setPerfect         = function(perfect){this.perfect = perfect;};
	this.setTrain           = function(train){this.train = train;};
    this.setModMagic        = function(modMagic){ this.modMagic = modMagic;};
    this.setSize            = function(size) {this.size = size; };
    
    this.setTwoHandCombat   = function(twoHandCombat){
        this.twoHandCombat = twoHandCombat;
        if (twoHandCombat){
            if (this == globalMainWeapon || this == globalSecondWeapon) {
                globalMainWeaponFeatsCheck.attr('checked',true);
                globalSecondWeaponFeatsCheck.attr('checked',true);
            }
        }
        else {
            if (this == globalMainWeapon || this == globalSecondWeapon) {
                globalMainWeaponFeatsCheck.attr('checked',false);
                globalSecondWeaponFeatsCheck.attr('checked',false);
            }
        }
    };
    
    /**
     * Hands settings may be
     * 1 = main hand only
     * 2 = two hand weapon
     * 3 = main hand in a two hands combat style
     * 4 = second hand in a two hands combat style
     */
	this.setHand            = function(hand){
	    this.hand = hand/1;
	    if (this.hand == 1 || this.hand == 2) {
	        if (globalMainWeapon == this) {
	           globalMainWeapon = new pfWeapon();
	           globalWeaponTwoHandCombat[this.index].attr('disabled',true);
	           globalWeaponTwoHandCombat[globalSecondWeapon.index].attr('disabled',true);
	           globalWeaponTwoHandCombat[globalSecondWeapon.index].attr('checked',false);
	        }
	        
	        if (globalSecondWeapon == this) {
               globalSecondWeapon = new pfWeapon();
               globalWeaponTwoHandCombat[this.index].attr('disabled',true);
               globalWeaponTwoHandCombat[globalMainWeapon.index].attr('disabled',true);
               globalWeaponTwoHandCombat[globalMainWeapon.index].attr('checked',false);
            }
            
	        globalWeaponTwoHandCombat[this.index].attr('checked',false);
            globalWeaponTwoHandPenalty[this.index].val(0);
    	    
    	    if (this.hand == 2)
    	       this.twoHand = true;
    	    else
    	       this.twoHand = false;
    	}
	    
	    if (this.hand == 4) {
	       globalSecondWeaponType = this.category;
	       globalSecondWeaponFeatsCheck = globalWeaponTwoHandCombat[this.index];
	       globalSecondWeapon = this;
	       if (globalMainWeapon.name != "") {
	           globalWeaponTwoHandCombat[globalMainWeapon.index].removeAttr('disabled');
	           globalSecondWeaponFeatsCheck.removeAttr('disabled');
	       }
	    }
	    if (this.hand == 3) {
	       globalMainWeapon = this;	       
	       globalMainWeaponFeatsCheck   = globalWeaponTwoHandCombat[this.index];
	       if (globalSecondWeapon.name != "") {
	           globalMainWeaponFeatsCheck.removeAttr('disabled');
	           globalWeaponTwoHandCombat[globalSecondWeapon.index].removeAttr('disabled');
	       }
	    }
	    
	};
	
	/**
	 * If index == 0 im current in the main weapon.
	 * Main weapon is the only one to add some bonus to BMC and DMC
	 */
	this.setIndex   = function(index){ 
	    this.index = index;
	    if (this.index == 0) this.mainWeapon = true; 
	};
	/**
	 * Convert a String link 4d6 in 2 integer
	 * rapresenting number of dice and damage dice
	 */
	this.setDamage 	= function(damage){
		this.sizedDiceNumber = parseInt(damage.match(/^[0-9]+/)[0]);
		this.sizedDamageDice = parseInt(damage.match(/[0-9]+$/)[0]);		
	};
	
	this.update    = function(){
	    this.twoHandCombat = globalWeaponTwoHandCombat[this.index].is(':checked');
	    
	    this.calculateDamageDice();
	    this.buildStrings();
	    this.calculateAR();
	    this.calculateManeuversBonus();
	    this.calculateDamage();
	    this.draw();
	}
	
	this.draw      = function(){
	    globalWeaponAR[this.index].val(this.ARString);
	    globalWeaponDamage[this.index].val(this.damage);
	    globalWeaponTwoHandPenalty[this.index].val(this.twoHandCombatPenalty);
	    if (this.mainWeapon){
	        globalManeuversDisarmWeapon.val(addPlus(this.disarmBonus));
	        globalManeuversSunderWeapon.val(addPlus(this.sunderBonus));
	        globalManeuversTripWeapon.val(addPlus(this.tripBonus));
	    }
	};
	
	this.buildStrings = function(){
	    var diff = 20 - this.minCritic;
	    if (this.minCritic == 20) 
	       this.criticRange = this.minCritic;
	    else 	    
	       this.criticRange = this.minCritic+"-20";
	       
	    this.criticMultiplierString = "x"+this.criticMultiplier;
	    this.damageDiceString = this.sizedDiceNumber+"d"+this.sizedDamageDice;
	};
	
	this.ARToString = function(maxAR,maxBAB){
        var multiple = Math.ceil(maxAR / 5);
        var attacks  = Math.ceil(maxBAB / 5);
        var finalBab = Array();
    
        var currentBab = maxAR;
        finalBab = addPlus(maxAR);
        for (var i = 1, currentBab = currentBab-5;i < attacks; i++,currentBab-=5){
            finalBab = finalBab + "/"+addPlus(currentBab);
        }
        return finalBab;
    };
    
    this.calculateManeuversBonus = function(){
        this.disarmBonus    = 0;
        this.tripBonus      = 0;
        this.sunderBonus    = 0;
        if (!this.mainWeapon) return;
        
        if (inArray("trip",this.special) )
            this.tripBonus = this.ARBonus;
        
        this.disarmBonus = this.ARBonus;
        if (inArray("disarm",this.special) )
            this.disarmBonus += 2;
            
        this.sunderBonus = this.ARBonus;
        if (inArray("sunder",this.special) )
            this.sunderBonus += 2;
    };
	
	this.calculateAR = function(){
	    var modDex = totalModDex.val()/1;
	    var modStr = totalModStr.val()/1;
	    
	    var mod = (this.accuracy) ? modDex : modStr;
        mod = (this.type == this.typeList[1]) ? modDex : mod;
	    
	    var feats = this.focus + this.improveFocus;
	    var other = Math.max(this.modMagic,((this.perfect)?1:0));
	    var bab   = globalWeaponBAB[this.index].val()/1;
	    var classBonus = globalWeaponClassAR[this.index].val()/1;
	    var levelBonus = globalWeaponLevelAR[this.index].val()/1;
	    
	    var raceMod	= globalWeaponRace[this.index].val()/1;
	    
	    //Penalty from Two Hands
	    //First Hand
	    this.twoHandCombatPenalty = 0;
	    if (this.hand == 3){
	        var secondCategory = globalSecondWeaponType;
	        var light          = (secondCategory == "light") ? 2:0;
	        var twoHandsFeats  = (this.twoHandCombat) ? 2:0;
	        this.twoHandCombatPenalty = twoHandsFeats + light -6;
	    }
	    //Second Hand
	    if (this.hand == 4){
	        var twoHandsFeats  = (this.twoHandCombat) ? 6:0;
	        var light          = (this.category == "light") ? 2:0;
	        this.twoHandCombatPenalty = twoHandsFeats + light -10;
	    }

	    this.AR = bab + raceMod + mod + feats + other + classBonus + levelBonus + this.twoHandCombatPenalty;
	    this.ARString = this.ARToString(this.AR,bab);
	    this.ARBonus  = feats + other + classBonus + levelBonus;
	};
    
    this.calculateDamage = function(){
        var modStr  = totalModStr.val()/1;
        var mod     = (this.twoHands) ? Math.floor(modStr*1.5) : modStr; //if two hands, I have to sum 2 times the modstr
        var feats   = (this.spec * 2) + (this.improveSpec*2);
        var other   = globalWeaponMagic[this.index].val()/1;
        var classBonus = globalWeaponClassDamage[this.index].val()/1;
        var levelBonus = globalWeaponLevelDamage[this.index].val()/1;
        var total   = mod + feats + other + classBonus + levelBonus;
        
        this.damage = this.damageDiceString+" + "+total;       
    };
    
    //Calculate new Damage Form armor with size modifier
    this.calculateDamageDice = function(){
        var baseDamage = this.diceNumber+"d"+this.damageDice;
        var temp = this.diceRelation[baseDamage];
        if (this.size == -1) //small
            this.setDamage(temp[0]);
        if (this.size == 1) //big
            this.setDamage(temp[1]);
        if (this.size == 0) //normal
            this.setDamage(baseDamage);
    };
    
    //List of relationship between base dice damage and relative sized damage
    this.diceRelation = new Array ("1d2","1d3","1d4","1d6","1d8","1d10","1d12","2d4","2d6","2d8","2d10");
    this.diceRelation["1d2"]    = new Array("0","1d3");
    this.diceRelation["1d3"]    = new Array("1","1d4");
    this.diceRelation["1d4"]    = new Array("1d2","1d6");
    this.diceRelation["1d6"]    = new Array("1d3","1d8");
    this.diceRelation["1d8"]    = new Array("1d4","2d6");
    this.diceRelation["1d10"]   = new Array("1d6","2d8");
    this.diceRelation["1d12"]   = new Array("1d8","3d6");
    this.diceRelation["2d4"]    = new Array("1d4","2d6");
    this.diceRelation["2d6"]    = new Array("1d8","3d6");
    this.diceRelation["2d8"]    = new Array("1d10","3d8");
    this.diceRelation["2d10"]   = new Array("2d6","4d8");

}

function pfArms(){
    this.inheritFrom = pfWeapon;
    this.inheritFrom();
    this.damageDice = 3;
}

function pfGauntlet(){
    this.inheritFrom = pfWeapon;
    this.inheritFrom();
    this.damageDice = 3;
    this.name       = "gauntlet";
}

function pfSpikedGauntlet(){
    this.inheritFrom = pfWeapon;
    this.inheritFrom();
    this.damageDice = 4;
    this.name       = "spikedgauntlet";
}

function pfAspergillum(){
    this.inheritFrom = pfWeapon;
    this.inheritFrom();
    this.damageDice = 6;
    this.special.push("trip");
    this.name       = "aspergillum";
}

function pfKnuckles(){
    this.inheritFrom = pfWeapon;
    this.inheritFrom();
    this.damageDice = 4;
    this.name       = "knuckles";
}

function pfCestus(){
    this.inheritFrom = pfWeapon;
    this.inheritFrom();
    this.damageDice = 6;
    this.name       = "cestus";
}
