
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
    this.setSize    = function(size) {this.size = size; };
    
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
		this.sizedDiceNumber = parseInt(damage.match(/^[0-9]+/)[0]);
		this.sizedDamageDice = parseInt(damage.match(/[0-9]+$/)[0]);		
	};
	
	this.update    = function(){
	    this.calculateDamageDice();
	    this.buildStrings();
	    this.calculateAR();
	    this.calculateDamage();
	    this.draw();
	}
	
	this.draw      = function(){
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
	    this.damageDiceString = this.sizedDiceNumber+"d"+this.sizedDamageDice;
	}
	
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
    }
	
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

	    this.AR = bab + mod + feats + other + classBonus + levelBonus;
	    this.ARString = this.ARToString(this.AR,bab);
	}
    
    this.calculateDamage = function(){
        var modStr  = totalModStr.val()/1;
        var mod     = (this.twoHands) ? Math.floor(modStr*1.5) : modStr;
        var feats   = (this.spec * 2) + (this.improveSpec*2);
        var other   = globalWeaponMagic[this.index].val()/1;
        var classBonus = globalWeaponClassDamage[this.index].val()/1;
        var levelBonus = globalWeaponLevelDamage[this.index].val()/1;
        var total   = mod + feats + other + classBonus + levelBonus;
        
        this.damage = this.damageDiceString+" + "+total;       
    }
    
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
    }
    
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
}

function pfSpikedGauntlet(){
    this.inheritFrom = pfWeapon;
    this.inheritFrom();
    this.damageDice = 4;
}

function pfAspergillum(){
    this.inheritFrom = pfWeapon;
    this.inheritFrom();
    this.damageDice = 6;
}

function pfKnuckles(){
    this.inheritFrom = pfWeapon;
    this.inheritFrom();
    this.damageDice = 4;
}

function pfCestus(){
    this.inheritFrom = pfWeapon;
    this.inheritFrom();
    this.damageDice = 6;
}
