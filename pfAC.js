
function pfAC(){
	this.totalAC 		= 0;
	this.totalTouchAC	= 0;
	this.totalFlatAC	= 0;
	 
	this.acSize    		= 0;
	this.acDex		    = 0;
	this.acWis          = 0;
	this.acNat		    = 0;
	this.acFeats		= 0; 
	
	this.acClass        = null;
	this.acOther        = null;
	
	this.totalModDexAvaiable   =   0;
	
	this.update = function(){
	    
	    //CA Types are:
	    //Armor Type Bonus
	    var armorBonus         = Math.max(gpfArmor.ac,globalACArmorMagic.val()/1);
	    //Shield Bonus
	    var shieldBonus        = gpfShield.ac;
	    //Natural Armor Bonus
	    var naturalArmorBonus  = this.acNat + globalACNatMagic.val()/1;
	    //Mod Dex Bonus
	    this.acDex     = totalModDex.val()/1; //this is the only value I read outside the AC section
	    this.totalModDexAvaiable = Math.min(this.acDex,gpfArmor.maxDex,gpfShield.maxDex);
        //Wisdom Bonus	    
	    this.acWis     = globalACWis.val()/1; //this value is places by class
	    //Feats Bonus (dodge Bonus) 
	    this.acFeats   = globalACFeats.val()/1; //this value is places by feats system
	    //Class bonus (es. monk)
	    this.acClass   = globalACClass.val()/1; //this value is places by class
	    //Other bonus
	    this.acOther   = globalACOther.val()/1; //this value is places by user
	    //Size Bonus
	    this.acSize    = globalACSize.val()/1; //this value is places by pfSize
	    
		this.totalAC 		= 10 + armorBonus + shieldBonus + naturalArmorBonus + this.totalModDexAvaiable +
		                      this.acFeats + this.acWis + this.acOther + this.acClass + this.acSize; 
		                      
		this.totalTouchAC 	= this.totalAC - armorBonus - shieldBonus - naturalArmorBonus;
		this.totalFlatAC	= this.totalAC - this.totalModDexAvaiable - this.acFeats;
		
		this.draw();
		
	};
	
	this.draw = function() {
	    globalACModDex.val(addPlus(this.totalModDexAvaiable));
	    globalACTotal.val(addPlus(this.totalAC));
	    globalACFlatFooted.val(addPlus(this.totalFlatAC));
	    globalACTouch.val(addPlus(this.totalTouchAC));
	    
	}
	
}