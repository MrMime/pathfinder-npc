
function pfSheet(){
	
	this.pfCharacter 	= null;
	this.pfAC			= null;
	this.weapons		= new Array();
	this.classes		= new Array();
	this.movements      = null;
	
	this.setAC 			= function (pfAC) { this.pfAC = pfAC; };
	this.setPfCharacter = function (pfCharacter) { this.pfCharacter = pfCharacter; };
	this.setMovements   = function (pfMovement) { this.movements = pfMovement; } ;
	
	/**
	 * WEAPONS
	 */
	this.addWeapon      = function (pfWeapon,index) {
		if (jQuery.inArray(pfWeapon,this.weapons) < 0) 
			this.weapons[index](pfWeapon); 
	};		
	this.removeWeapon   = function (pfWeapon) { 
		this.weapons[index] = null;
	};
	
	/**
	 * CLASSES
	 */
	this.addPfClass		= function (pfClass,index) {
		if (jQuery.inArray(pfClass,this.classes) < 0) 
			this.classes[index](pfClass);
	};
	
	this.removeClass	= function (index) { 
		this.classes[index] = null;
	};
	
	
	this.getAllStats	= function (){
		return this.pfCharacter.calculateStats();
	};
	
}