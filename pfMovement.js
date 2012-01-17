
function pfMovement(){
	
	this.totalMovement 		= 0;
	this.totalHeavyMovement = 0;
	
	this.update = function() {
		var armorPenalty 	= parseFloat(globalArmorPenaltyMovement.val());
		var actualSpeed 	= parseInt(globalRaceBaseMovement.val()) +
							  parseInt(globalClassBonusMovement.val()) + 
							  parseInt(globalBonusMovement1.val()) + 
							  parseInt(globalBonusMovement2.val()) + 
							  parseInt(globalItemMovement.val()) ;
			
		totalMovement 		= Math.max(gpfRace.speedHeavy,actualSpeed-armorPenalty);
		globalTotalMovement.val(totalMovement);
	};
	
}