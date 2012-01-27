
function pfWeapon(){
	this.name			= "";
	this.damageMod		= 0;
	this.damageDice		= 0;
	this.diceNumber		= 1;
	this.damageDiceString = "";
	this.damage         = 0;
	this.category       = "light";
	this.damageType     = new Array();
	this.damageList     = new Array("S","P","B"); //damage type S = Tagliente, B = Contundente, P = Perforante
	this.AR             = 0;
	this.ARString       = "";
	
	this.size			= 0;
	this.minCritic		= 20;
	this.criticMultiplier	= 2;
	this.criticMultiplierString = "";
	this.criticRange    = "20";
	this.twoHand		= false;
	this.hand           = "";
	this.type			= "";
	this.typeList		= new Array ("melee","ranged");
	this.secondHand     = false;
	this.mainWeapon     = false; //is the weapon the first choice?
	
	this.modMagic		= 0;
	this.perfect        = false;
	
	this.focus			= false;
	this.improveFocus	= false;
	
	this.spec			= false;
	this.improveSpec	= false;
	
	this.accuracy		= false;
	this.attackRollMod	= 0;
	
	this.index          = 0; //index allow the class to modify its own html tags
	
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
	this.setHand            = function(hand){
	    this.hand = hand;
	    if (hand == "twohand")
	       this.twoHand = true;
	    else
	       this.twoHand = false;
	};
	
	this.setIndex   = function(index){ this.index = index; };
	/**
	 * Convert a String link 4d6 in 2 integer
	 * rapresenting number of dice and damage dice
	 */
	this.setDamage 	= function(damage){
		this.diceNumber = parseInt(damage.match(/^[0-9]+/)[0]);
		this.damageDice = parseInt(damage.match(/[0-9]+$/)[0]);		
	};
	
	//Magic Mod is added to attack roll and damage
	this.setModMagic = function(modMagic){ this.modMagic = modMagic; this.attackRollMod = this.modMagic; this.damageMod = this.modMagic; };
	
	/**
	 * Size of creatures alters the damage dice
	 * Size can be: 0 = medium; 1 = small; -1 = big
	 * 
	 *  C  I   O
	 *  0  1  -1
	 *  0 -1  -1
	 *  1  0  -1
	 *  1 -1  -2
	 * -1  0  +1
	 * -1  1  +2
	 */
	this.setSize	= function(size) {
		if (size == this.size) return;
		var variation = size - this.size;
		//if variation > 0, increase weapong size
		if (variation > 0){
			
		}
		else {
			
		}
	};
	
	
	this.update    = function(){
	    this.buildStrings();
	    this.calculateAR();
	    this.calculateDamage();
	    
	    if (this.index == 1) {
	       mainWeaponCategory        = this.category;
	       mainWeaponDamageType      = this.damageType;
	       mainWeaponHands           = (this.twoHand)? 2:1;
	    }
	    this.draw();
	}
	
	this.draw      = function(){
	    globalWeaponDamageDice[this.index].val(this.damageDiceString);
	    globalWeaponCriticRange[this.index].val(this.criticRange);
	    globalWeaponCriticMultiplier[this.index].val(this.criticMultiplierString);
	    globalWeaponAR[this.index].val(this.ARString);
	    globalWeaponDamage[this.index].val(this.damage);
	}
	
	this.buildStrings = function(){
	    var diff = 20 - this.minCritic;
	    if (this.minCritic == 20) 
	       this.criticRange = this.minCritic;
	    else 	    
	       this.criticRange = this.minCritic+"-20";
	       
	    this.criticMultiplierString = "x"+this.criticMultiplier;
	    this.damageDiceString = this.diceNumber+"d"+this.damageDice;
	}
	
	this.calculateAR = function(){
	    var modDex = totalModDex.val()/1;
	    var modStr = totalModStr.val()/1;
	    
	    var mod = (this.accuracy) ? modDex : modStr;
        mod = (this.type == this.typeList[1]) ? modDex : mod;
	    
	    var feats = this.focus + this.improveFocus;
	    var other = Math.max(this.modMagic,((this.perfect)?1:0));
	    var bab   = globalWeaponBAB[this.index].val()/1;
	    var classBonus = globalWeaponClass[this.index].val()/1;
	    
	    this.AR = bab + mod + feats + other + classBonus;
	    this.ARString = "+"+this.AR;
	}
    
    this.calculateDamage = function(){
        var modStr  = totalModStr.val()/1;
        var mod     = (this.twoHands) ? Math.floor(modStr*1.5) : modStr;
        var feats   = (this.spec * 2) + (this.improveSpec*2);
        var other   = this.modMagic;
        var classBonus = globalWeaponClass[this.index].val()/1;
        var total   = mod + feats + other + classBonus;
        this.damage = this.damageDiceString+" + "+total;       
    }

}

function pfAspergillum(){
    this.inheritFrom = pfWeapon;
    this.inheritFrom();
    
    this.damageDice = 6;
    this.type = "melee";
}

function pfKnuckles(){
    this.inheritFrom = pfWeapon;
    this.inheritFrom();
    
    this.damageDice = 4;
    this.type = "melee";
}

function pfCestus(){
    this.inheritFrom = pfWeapon;
    this.inheritFrom();
    
    this.damageDice = 6;
    this.type = "melee";
}
