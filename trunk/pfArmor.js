
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
	
	this.setStats = function(armorStats){
        this.ac             = armorStats[0];
        this.maxDex         = armorStats[1];
        this.penalty        = armorStats[2];
        this.spellFailure   = armorStats[3];
        this.speedMod       = armorStats[4];
	};
	
	this.update = function(){
	    globalCurrentArmorCategory = this.category;
        this.draw();
	};
	
	this.draw  = function(){
	    globalArmorPenaltyMovement.val(this.speedMod);
	    globalACArmor.val(addPlus(this.ac));
	};
} 

function pfNake(){
    this.inheritFrom = pfArmor;
    this.inheritFrom();
    this.setStats(Array (0,100,0,0,0));
}

function pfPadded(){
    this.inheritFrom = pfArmor;
    this.inheritFrom();
    this.setStats(Array (1,8,0,5,0));
} 

function pfQuiltedCloth(){
    this.inheritFrom = pfArmor;
    this.inheritFrom();
    this.setStats(Array (1,8,0,10,0));
}

function pfLeather(){
    this.inheritFrom = pfArmor;
    this.inheritFrom();
    this.setStats(Array (2,6,0,10,0));
}

function pfRosewoodArmor(){
    this.inheritFrom = pfArmor;
    this.inheritFrom();
    this.setStats(Array (2,6,0,10,0));
}

function pfLeafArmor(){
    this.inheritFrom = pfArmor;
    this.inheritFrom();
    this.setStats(Array (3,5,0,15,0));
}

function pfParadeArmor(){
    this.inheritFrom = pfArmor;
    this.inheritFrom();
    this.setStats(Array (3,5,-1,15,0));
}

function pfStuddedLeather(){
    this.inheritFrom = pfArmor;
    this.inheritFrom();
    this.setStats(Array (3,5,-1,15,0));
}

function pfWooden(){
    this.inheritFrom = pfArmor;
    this.inheritFrom();
    this.setStats(Array (3,3,-1,15,0));
}

function pfChainShirt(){
    this.inheritFrom = pfArmor;
    this.inheritFrom();
    this.setStats(Array (4,4,-2,20,0));
}

function pfHideShirt(){
    this.inheritFrom = pfArmor;
    this.inheritFrom();
    this.setStats(Array (4,4,-3,20,0));
}

function pfArmoredCoat(){
    this.inheritFrom = pfArmor;
    this.inheritFrom();
    this.setStats(Array (4,3,-2,20,-3));
    this.category = "medium";
}

function pfHide(){
    this.inheritFrom = pfArmor;
    this.inheritFrom();
    this.setStats(Array (4,4,-3,20,-3));
    this.category = "medium";
}

function pfScaleMail(){
    this.inheritFrom = pfArmor;
    this.inheritFrom();
    this.setStats(Array (5,3,-4,25,-3));
    this.category = "medium";
}

function pfChainmail(){
    this.inheritFrom = pfArmor;
    this.inheritFrom();
    this.setStats(Array (6,2,-5,30,-3));
    this.category = "medium";
}

function pfBreastPlate(){
    this.inheritFrom = pfArmor;
    this.inheritFrom();
    this.setStats(Array (6,3,-4,25,-3));
    this.category = "medium";
}

function pfBreastPlateAgile(){
    this.inheritFrom = pfArmor;
    this.inheritFrom();
    this.setStats(Array (6,3,-4,25,-3));
    this.category = "medium";
}

function pfSplintMail(){
    this.inheritFrom = pfArmor;
    this.inheritFrom();
    this.setStats(Array (7,0,-7,40,-3));
    this.category = "heavy";
}

function pfBandedMail(){
    this.inheritFrom = pfArmor;
    this.inheritFrom();
    this.setStats(Array (7,1,-6,35,-3));
    this.category = "heavy";
}

function pfFieldPlate(){
    this.inheritFrom = pfArmor;
    this.inheritFrom();
    this.setStats(Array (7,1,-5,35,-3));
    this.category = "heavy";
}

function pfHalfPlate(){
    this.inheritFrom = pfArmor;
    this.inheritFrom();
    this.setStats(Array (8,0,-7,40,-3));
    this.category = "heavy";
}

function pfFullPlate(){
    this.inheritFrom = pfArmor;
    this.inheritFrom();
    this.setStats(Array (9,1,-6,35,-3));
    this.category = "heavy";
}

function pfHellknightPlate(){
    this.inheritFrom = pfArmor;
    this.inheritFrom();
    this.setStats(Array (9,1,-5,35,-3));
    this.category = "heavy";
}

function pfStonePlate(){
    this.inheritFrom = pfArmor;
    this.inheritFrom();
    this.setStats(Array (9,1,-6,35,-4.5));
    this.category = "heavy";
}

//***********************************************************************//

function pfShield(){
	this.inheritFrom = pfArmor;
    this.inheritFrom();
    
    this.update = function(){
        this.draw();
    };
    this.draw  = function(){
        globalACShield.val(addPlus(this.ac));
    };
}

function pfBuckler(){
    this.inheritFrom = pfShield;
    this.inheritFrom();
    this.setStats(Array (1,100,-1,5,0));
}

function pfKlar(){
    this.inheritFrom = pfShield;
    this.inheritFrom();
    this.setStats(Array (1,100,-1,5,0));
}

function pfMaduLeather(){
    this.inheritFrom = pfShield;
    this.inheritFrom();
    this.setStats(Array (1,100,-2,5,0));
}

function pfMaduSteel(){
    this.inheritFrom = pfShield;
    this.inheritFrom();
    this.setStats(Array (1,100,-2,5,0));
}

function pfLightWooden(){
    this.inheritFrom = pfShield;
    this.inheritFrom();
    this.setStats(Array (1,100,-2,5,0));
}

function pfLightWoodenQuickdraw(){
    this.inheritFrom = pfShield;
    this.inheritFrom();
    this.setStats(Array (1,100,-2,5,0));
}

function pfLightSteel(){
    this.inheritFrom = pfShield;
    this.inheritFrom();
    this.setStats(Array (1,100,-1,5,0));
}

function pfLightSteelQuickdraw(){
    this.inheritFrom = pfShield;
    this.inheritFrom();
    this.setStats(Array (1,100,-2,5,0));
}

function pfHeavyWooden(){
    this.inheritFrom = pfShield;
    this.inheritFrom();
    this.setStats(Array (2,100,-2,5,0));
}

function pfHeavySteel(){
    this.inheritFrom = pfShield;
    this.inheritFrom();
    this.setStats(Array (2,100,-2,5,0));
}

function pfTower(){
    this.inheritFrom = pfShield;
    this.inheritFrom();
    this.setStats(Array (4,2,-10,50,0));
}
