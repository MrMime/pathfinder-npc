
function pfArmor(){
	this.ac				= 0;
	this.category		= "light";
	this.maxDex			= 100;
	this.penalty		= 0;
	this.spellFailure 	= 0;
	this.speedMod		= 0;
	
	this.setCategory 		= function(category){ this.category = category; };
	this.setMaxDex 			= function(maxDex){ this.maxDex = maxDex; };
	this.setPenalty 		= function(penalty){ this.penalty = penalty; };
	this.setSpellFailure 	= function(spellFailure){ this.spellFailure = spellFailure; };
	this.speedMod 			= function(speedMod){ this.speedMod = speedMod; };
	
	this.setArmor = function(armor){
	    var armorKey = armor.replace(/ /g,"_");
        var armorStats = globalArmorList[armorKey];
        
        this.ac             = armorStats[0];
        this.maxDex         = armorStats[1];
        this.penalty        = armorStats[2];
        this.spellFailure   = armorStats[3];
        this.speedMod       = armorStats[4];
	}
	
	this.update = function(){
        this.draw();
	}
	
	this.draw  = function(){
	    globalArmorPenaltyMovement.val(this.speedMod);
	    globalACArmor.val(addPlus(this.ac));
	}
	
} 

//***********************************************************************//

function pfShield(){
	this.inheritFrom = pfArmor;
    this.inheritFrom();
    
    this.setShield = function(shield){
        var shieldKey   = shield.replace(/ /g,"_");
        var shieldStats = globalShieldList[shieldKey];
        
        this.ac             = shieldStats[0];
        this.maxDex         = shieldStats[1];
        this.penalty        = shieldStats[2];
        this.spellFailure   = shieldStats[3];
        this.speedMod       = shieldStats[4];
    }
    
    this.update = function(){
        this.draw();
    }
    
    this.draw  = function(){
        globalACShield.val(addPlus(this.ac));
    }
    
}