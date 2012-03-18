function pfPcClass(){
	this.inheritFrom = pfClass;
    this.inheritFrom();
    this.classType 	= "prestige";
    this.maxLevel	= 10;
    this.referenceClassName = ""; //this is the name of class base this prestige class will referred. Utile for increasing spell casting
    
    
    /**
	 * Calculate saving throw based on save category
	 * This is base class saving throw
	 * Prestige class category has something like 1 0 1 etc...
	 */
	this.calculateST = function(){
		 var tsfinal = new Array(0,0,0);
		 for (var i=0;i<3;i++){
			 if (this.stCat[i] == 1)
				 tsfinal[i] = Math.ceil(this.level/2);
			 if (this.stCat[i] == 0)
				 tsfinal[i] = Math.ceil((this.level-1)/3);
			 
		 }
		 this.stf = tsfinal[0];
		 this.str = tsfinal[1];
		 this.stw = tsfinal[2];
	};
	
	 this.resetPrestigeReferenceClass = function(){
	    	for (var i=maxMulticlass;i<maxSupportedClass;i++){
	    		var option = "<option>--</option>";
	    		$('#class0'+this.index+'reference').children().remove().end().append(option);
	    	}
	    };
	
	//Creating reference class for prestige class
    //by reading current global class if not prestige class
    this.buildPrestigeClassReference = function(){
    	this.resetPrestigeReferenceClass();
   		var options = "";
        for (var j=0;j<maxMulticlass;j++)
      	   if (gpfClasses[j].classType != 'prestige' && gpfClasses[j].name != 'none'){
      		   var selected = "";
       		   if (gpfClassesReference[i] == gpfClasses[j].name)
       			  selected = 'selected="selected"';
       		   options += "<option value=\""+gpfClasses[j].name+"\" "+selected+">"+gpfClasses[j].name+"</option>";
       	    }	
    		var select = $('#class0'+this.index+'reference').append(options);
    };
	
}

function pfArcaneArcher(){
	this.inheritFrom = pfPcClass;
	this.inheritFrom();
	this.maxLevel	=	10;
	
	this.name 		= "arcane_archer";
	this.ld			= 10;
	this.skillBase	= 4;
	
	this.babBase    = new Array(0,1,2,3,4,5,6,7,8,9,10);
	this.stCat      = new Array(1,1,0);
	
	this.lvSpellArcaneInc	= new Array(0,0,1,1,1,1,1,1,1,1,1);
	
}