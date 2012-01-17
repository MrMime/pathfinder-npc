
function pfSize(){
	this.name 	= "medium";	
	this.acMod	= new Array();
	this.acMod["small"]		= 1;
	this.acMod["medium"]	= 0;
	this.acMod["big"]		= -1;
	
	this.current = 0;
	
	this.setSize = function(size) { this.current = size; };
	
	this.update = function() {
	    this.draw();
	}
	
	this.draw = function() {
	    globalACSize.val(addPlus(this.current));
	}
}