
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
	this.acRace			= null;
	
	this.totalModDexAvaiable   =   0;
	
	this.acString      = "";
	
	this.update = function(){
	    gpfArmor.update();
	    gpfShield.update();
	    //CA Types are:
	    //Armor Type Bonus
	    var armorBonus         = Math.max(globalACArmor.val()/1,globalACArmorMagic.val()/1);
	    //Shield Bonus
	    var shieldBonus        = globalACShield.val()/1;
	    //Natural Armor Bonus
	    var naturalArmorBonus  = this.acNat + globalACNatMagic.val()/1;
	    //Mod Dex Bonus
	    this.acDex     = totalModDex.val()/1; //this is the only value I read outside the AC section
	    this.totalModDexAvaiable = Math.min(this.acDex,gpfArmor.maxDex,gpfShield.maxDex);
	    globalCurrentMaxDex = Math.min(gpfArmor.maxDex,gpfShield.maxDex);
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
	    //Race Bonus
	    this.acRace	   = globalACRace.val()/1;
	    
	    this.totalAC       = 10 + armorBonus + shieldBonus + naturalArmorBonus + this.totalModDexAvaiable + this.acRace +
                              this.acFeats + this.acWis + this.acOther + this.acClass + this.acSize; 
                              
        this.totalTouchAC   = this.totalAC - armorBonus - shieldBonus - naturalArmorBonus;
        this.totalFlatAC    = this.totalAC - this.totalModDexAvaiable - this.acFeats;
	    
	    var acString = new Array();
	    acString.push(this.totalAC);
	    acString.push("{touch} "+this.totalTouchAC);
	    acString.push("{flatfooted} "+this.totalFlatAC);
	    
	    var acStringComponent = new Array();
        if (armorBonus > 0)
	       acStringComponent.push(addPlus(armorBonus)+" {armor}");
	    if (shieldBonus > 0)
	       acStringComponent.push(addPlus(shieldBonus)+" {shield}");
	    if (naturalArmorBonus > 0)
	       acStringComponent.push(addPlus(naturalArmorBonus)+" {natural}");
	    if (this.totalModDexAvaiable > 0)
	       acStringComponent.push(addPlus(this.totalModDexAvaiable)+" {dex}");
	    if (this.acWis > 0)
	       acStringComponent.push(addPlus(this.acWis)+" {wil}");
	    if (this.acOther > 0)   
	       acStringComponent.push(addPlus(this.acOther)+" {other}");
	    if (this.acSize > 0)
	       acStringComponent.push(addPlus(this.acSize)+" {size}");
	    if (this.acFeats > 0)
	       acStringComponent.push(addPlus(this.acFeats)+" {feats}");
	       
	    this.acString = implode(",",acString) + " ("+implode (",",acStringComponent)+")";
		
		this.draw();
		
	};
	
	this.draw = function() {
	    globalACModDex.val(addPlus(this.totalModDexAvaiable));
	    globalACTotal.val(addPlus(this.totalAC));
	    globalACFlatFooted.val(addPlus(this.totalFlatAC));
	    globalACTouch.val(addPlus(this.totalTouchAC));
	    
	    globalACString.val(this.acString);
	    
	};
	
}