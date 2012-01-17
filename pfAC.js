
function pfAC(){
	this.totalAC 		= 0;
	this.totalTouchAC	= 0;
	this.totalFlatAC	= 0;
	 
	this.acSize    		= 0;
	this.acDex		    = 0;
	this.acWis          = 0;
	this.acNat		    = 0;
	this.acFeats		= 0; 
	this.acArmor		= 0;
	this.acShield		= 0;
	this.armor          = new pfArmor();
	this.shield         = new pfShield();
	this.armorMaxDex    = 100;
	this.shieldMaxDex   = 100;
	
	this.acClass        = null;
	this.acMagic        = null;
	
	this.setArmor 	= function(armor) { this.armor = armor; this.acArmor = armor.ac; this.armorMaxDex = armor.maxDex; };
	this.setShield 	= function(shield) { this.shield = shield; this.acShield = shield.ac; this.shieldMaxDex = shield.maxDex; }; 
	
	this.update = function(){
	    
	    this.acDex     = totalModDex.val()/1; //this is the only value I read outside the AC section
	    this.acWis     = globalACWis.val()/1; //this value is places by class 
	    this.acFeats   = globalACFeats.val()/1; //this value is places by feats system
	    this.acNat     = globalACNat.val()/1; //this values is places by user
	    this.acClass   = globalACClass.val()/1; //this value is places by class
	    this.acMagic   = globalACMagic.val()/1; //this value is places by user
	    this.acSize    = globalACSize.val()/1; //this value is places by pfSize
	    
	    var totalModDexAvaiable = Math.min(this.acDex,this.armorMaxDex,this.shieldMaxDex);
	    
		this.totalAC 		= 10 + this.acArmor + this.acShield + totalModDexAvaiable + this.acFeats + 
		                      this.acNat + this.acWis + this.acMagic + this.acClass + this.acSize; 
		                      
		this.totalTouchAC 	= this.totalAC - this.acNat - this.acArmor - this.acShield;
		this.totalFlatAC	= this.totalAC - totalModDexAvaiable - this.acFeats;
		
		this.draw();
		
	};
	
	this.draw = function() {
	    globalACTotal.val(addPlus(this.totalAC));
	    globalACFlatFooted.val(addPlus(this.totalFlatAC));
	    globalACTouch.val(addPlus(this.totalTouchAC));
	    
	}
	
}