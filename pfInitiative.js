
function pfInitiative(){
	
	this.totalInitative		= 0;
	this.modDex             = 0;
	this.improve            = 0;
	this.bonus1             = 0;
	this.bonus2             = 0;
	this.classBonus         = 0;
	
	this.update = function() {
	    
	    this.modDex    = totalModDex.val()/1;
	    this.improve   = globalInitImprove.val()/1;
	    this.bonus1    = globalInitBonus1.val()/1;
	    this.bonus2    = globalInitBonus2.val()/1;
	    this.classBonus= globalInitClass.val()/1;
	    
	    var armorModDex    = globalACModDex.val()/1;
	    this.modDex = Math.min(this.modDex,armorModDex);
	    
		this.totalInitiative = this.modDex + this.improve + this.bonus1 + this.bonus2 + this.classBonus; 	
		
		this.draw();	
	};
	
	this.draw = function() {
	    globalInitModDex.val(addPlus(this.modDex));
        globalInitTotal.val(addPlus(this.totalInitiative));
	};
}