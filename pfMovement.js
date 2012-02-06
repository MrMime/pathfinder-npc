
function pfMovement(){
	
	this.totalMovement 		= 0;
	
	this.update = function() {
		var armorPenalty 	= parseFloat(globalArmorPenaltyMovement.val());
		var actualSpeed 	= parseInt(globalRaceBaseMovement.val()) +
							  parseInt(globalClassBonusMovement.val()) + 
							  parseInt(globalBonusMovement1.val()) + 
							  parseInt(globalBonusMovement2.val()) + 
							  parseInt(globalItemMovement.val()) +
							  parseFloat(globalFeatsBonusMovement.val());
			
		this.totalMovement 		= Math.max(gpfRace.speedHeavy,actualSpeed+armorPenalty);
		this.draw();
	};
	
	this.draw = function() {
	    globalTotalMovement.val(this.totalMovement);
	};
}