
function pfMovement(){
	
	this.totalMovement 		= 0;
	this.unit               = 0;
	this.classMovement      = 0;
	this.raceBaseMovement   = 0;
	this.bonusMovement1     = 0;
	this.bonusMovement2     = 0;
	this.itemMovement       = 0;
	this.featMovement       = 0;
	this.armorPenalty       = 0;
	this.raceSpeedHeavy     = 0;
	
	this.update = function() {
	    
	    this.classMovement      = globalClassBonusMovement.val()/1;
	    this.raceBaseMovement   = globalRaceBaseMovement.val()/1;
        this.bonusMovement1     = globalBonusMovement1.val()/1;
        this.bonusMovement2     = globalBonusMovement2.val()/1;
        this.itemMovement       = globalItemMovement.val()/1;
        this.featMovement       = parseFloat(globalFeatsBonusMovement.val());
        this.armorPenalty       = parseFloat(globalArmorPenaltyMovement.val());
        
        this.raceSpeedHeavy     = gpfRace.speedHeavy;
	    
		var actualSpeed 	= this.classMovement + this.raceBaseMovement + 
		                      this.bonusMovement1 + this.bonusMovement2 + 
		                      this.itemMovement + this.featMovement;
			
		this.totalMovement 		= Math.max(this.raceSpeedHeavy,actualSpeed+this.armorPenalty);
		
		this.updateUnit();
		this.draw();
	};
	
	this.updateUnit = function(){
	     if (globalLanguage == 'eng'){
            this.totalMovement      = metersToFeets(this.totalMovement);
            this.classMovement      = metersToFeets(this.classMovement);
            this.raceBaseMovement   = metersToFeets(this.raceBaseMovement);
            this.bonusMovement1     = metersToFeets(this.bonusMovement1);
            this.bonusMovement2     = metersToFeets(this.bonusMovement2);
            this.itemMovement       = metersToFeets(this.itemMovement);
            this.featMovement       = metersToFeets(this.featMovement);
        }
	};
	
	this.draw = function() {
	    globalTotalMovement.val(this.totalMovement);
	    globalClassBonusMovement.val(this.classMovement);
        globalRaceBaseMovement.val(this.raceBaseMovement);
        globalBonusMovement1.val(this.bonusMovement1);
        globalBonusMovement2.val(this.bonusMovement2);
        globalItemMovement.val(this.itemMovement);
        globalFeatsBonusMovement.val(this.featMovement);
	};
}