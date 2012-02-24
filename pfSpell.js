function pfSpellsManager()
{
	this.st 	= new Array(10,10,10,10,10,10,10,10,10,10);
	this.perDay = new Array();
	this.known	= new Array();
	
	var castingCategory = new Array();
	
	this.fullCast = "3,1,-,-,-,-,-,-,-,-;4,2,-,-,-,-,-,-,-,-;4,2,1,-,-,-,-,-,-,-;4,3,2,-,-,-,-,-,-,-;4,3,2,1,-,-,-,-,-,-;4,3,3,2,-,-,-,-,-,-;4,4,3,2,1,-,-,-,-,-;4,4,3,3,2,-,-,-,-,-;4,4,4,3,2,1,-,-,-,-;4,4,4,3,3,2,-,-,-,-;4,4,4,4,3,2,1,-,-,-;4,4,4,4,3,3,2,-,-,-;4,4,4,4,4,3,2,1,-,-;4,4,4,4,4,3,3,2,-,-;4,4,4,4,4,4,3,2,1,-;4,4,4,4,4,4,3,3,2,-;4,4,4,4,4,4,4,3,2,1;4,4,4,4,4,4,4,3,3,2;4,4,4,4,4,4,4,4,3,3;4,4,4,4,4,4,4,4,4,4";
	this.medCast  = "-1,3,-,-,-,-,-,-,-,-;-1,4,-,-,-,-,-,-,-,-;-1,5,-,-,-,-,-,-,-,-;-1,6,3,-,-,-,-,-,-,-;-1,6,4,-,-,-,-,-,-,-;-1,6,5,3,-,-,-,-,-,-;-1,6,6,4,-,-,-,-,-,-;-1,6,6,5,3,-,-,-,-,-;-1,6,6,6,4,-,-,-,-,-;-1,6,6,6,5,3,-,-,-,-;-1,6,6,6,6,4,-,-,-,-;-1,6,6,6,6,5,3,-,-,-;-1,6,6,6,6,6,4,-,-,-;-1,6,6,6,6,6,5,3,-,-;-1,6,6,6,6,6,6,4,-,-;-1,6,6,6,6,6,6,5,3,-;-1,6,6,6,6,6,6,6,4,-;-1,6,6,6,6,6,6,6,5,3;-1,6,6,6,6,6,6,6,6,4;-1,6,6,6,6,6,6,6,6,6";
	this.lowCast  = "-,-,-,-,-;-,-,-,-,-;-,-,-,-,-;-,0,-,-,-;-,1,-,-,-;-,1,-,-,-;-,1,0,-,-;-,1,1,-,-;-,2,1,-,-;-,2,1,0,-;-,2,1,1,-;-,2,2,1,-;-,3,2,1,0;-,3,2,1,1;-,3,2,2,1;-,3,3,2,1;-,4,3,2,1;-,4,3,2,2;-,4,3,3,2;-,4,4,3,3";
	
	this.buildSpellMatrix = function(castType){
		var levels = castType.split(/;/g);
		for (var i=0;i<levels.length;i++){
			this.perDay[i+1] = levels[i].split(/,/g);
		}
	};
	
	this.baseSpelKnown = "4,2,-,-,-,-,-,-,-,-;5,2,-,-,-,-,-,-,-,-;5,3,-,-,-,-,-,-,-,-;6,3,1,-,-,-,-,-,-,-;6,4,2,-,-,-,-,-,-,-;7,4,2,1,-,-,-,-,-,-;7,5,3,2,-,-,-,-,-,-;8,5,3,2,1,-,-,-,-,-;8,5,4,3,2,-,-,-,-,-;9,5,4,3,2,1,-,-,-,-;9,5,5,4,3,2,-,-,-,-;9,5,5,4,3,2,1,-,-,-;9,5,5,4,4,3,2,-,-,-;9,5,5,4,4,3,2,1,-,-;9,5,5,4,4,4,3,2,-,-;9,5,5,4,4,4,3,2,1,-;9,5,5,4,4,4,3,3,2,-;9,5,5,4,4,4,3,3,2,1;9,5,5,4,4,4,3,3,3,2;9,5,5,4,4,4,3,3,3,3";
	
	this.buildSpellKnow = function(spellKnowCategory){
		var levels = spellKnowCategory.split(/;/g);
		for (var i=0;i<levels.length;i++){
			this.known[i+1] = levels[i].split(/,/g);
		}
	};
	
	//Calculatin spell bonus per day due to high point of stats
	this.spellPerDayBonus = function(mod,lv){
		if (mod < lv) return 0;
		var resto = (mod-1)%4;
		var bonus = 1;
		if (resto == 0)
		  bonus = Math.floor (mod/4)+1;
		else
		  bonus = Math.floor (mod/4);
		bonus = Math.max(1,bonus-(lv-1));
		return bonus;
	};
	
}

function pfSpell(){
	
	this.name			= null;
	this.level 			= 0;
	this.schools		= new Array();
	
	this.castingTime	= 0;
	this.effect			= null;
	this.range			= null;
	this.target			= null;
	this.component		= new Array();
	this.duration		= 0;
	this.description	= null;
	
	this.saveThrow		= false;
	this.resistance		= false;

}