
function pfInitiative(){
	
	this.totalInitative		= 0;
	
	this.update = function() {
		totalInitiative = 	parseInt(totalModDex.val()) +
							parseInt(globalInitImprove.val()) +
							parseInt(globalInitClass.val()) +
							parseInt(globalInitBonus1.val()) +
							parseInt(globalInitBonus2.val());
		
		globalInitModDex.val(parseInt(totalModDex.val()));
		
		globalInitTotal.val(totalInitiative);
		
	};
	
}