
function pfAlignment(){
	this.align		= 0;
	this.alignment  = new Array ("Legal Good","Legal Neutral","Legal Evil","Nutral Good","Neutral","Neutral Evil","Chaotic Good","Chaotic Neutral","Chaotic Evil");
	
	this.getAlignment 	= function(align){ return this.alignment[align];};		
}