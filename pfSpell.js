function pfSpellsManager()
{
	this.st 	= new Array(10,10,10,10,10,10,10,10,10,10);
	this.perDay = new Array();
	this.known	= new Array();
	
	var castingCategory = new Array();
	//List of Spell Per Day Casting Level
	//If 0 it means a caster has accesso to that level of spell but only with an High STAT he can cast it
	//If -1 it means a caster may cast "at will". It usually limited by spell known list
	//like wizard
	this.fullCast = "3,1,-,-,-,-,-,-,-,-;" +
			        "4,2,-,-,-,-,-,-,-,-;" +
			        "4,2,1,-,-,-,-,-,-,-;" +
			        "4,3,2,-,-,-,-,-,-,-;" +
			        "4,3,2,1,-,-,-,-,-,-;" +
			        "4,3,3,2,-,-,-,-,-,-;" +
			        "4,4,3,2,1,-,-,-,-,-;" +
			        "4,4,3,3,2,-,-,-,-,-;" +
			        "4,4,4,3,2,1,-,-,-,-;" +
			        "4,4,4,3,3,2,-,-,-,-;" +
			        "4,4,4,4,3,2,1,-,-,-;" +
			        "4,4,4,4,3,3,2,-,-,-;" +
			        "4,4,4,4,4,3,2,1,-,-;" +
			        "4,4,4,4,4,3,3,2,-,-;" +
			        "4,4,4,4,4,4,3,2,1,-;" +
			        "4,4,4,4,4,4,3,3,2,-;" +
			        "4,4,4,4,4,4,4,3,2,1;" +
			        "4,4,4,4,4,4,4,3,3,2;" +
			        "4,4,4,4,4,4,4,4,3,3;" +
			        "4,4,4,4,4,4,4,4,4,4";
	//like Sorcerer
	this.medCast  = "-1,3,-,-,-,-,-,-,-,-;" +
					"-1,4,-,-,-,-,-,-,-,-;" +
					"-1,5,-,-,-,-,-,-,-,-;" +
					"-1,6,3,-,-,-,-,-,-,-;" +
					"-1,6,4,-,-,-,-,-,-,-;" +
					"-1,6,5,3,-,-,-,-,-,-;" +
					"-1,6,6,4,-,-,-,-,-,-;" +
					"-1,6,6,5,3,-,-,-,-,-;" +
					"-1,6,6,6,4,-,-,-,-,-;" +
					"-1,6,6,6,5,3,-,-,-,-;" +
					"-1,6,6,6,6,4,-,-,-,-;" +
					"-1,6,6,6,6,5,3,-,-,-;" +
					"-1,6,6,6,6,6,4,-,-,-;" +
					"-1,6,6,6,6,6,5,3,-,-;" +
					"-1,6,6,6,6,6,6,4,-,-;" +
					"-1,6,6,6,6,6,6,5,3,-;" +
					"-1,6,6,6,6,6,6,6,4,-;" +
					"-1,6,6,6,6,6,6,6,5,3;" +
					"-1,6,6,6,6,6,6,6,6,4;" +
					"-1,6,6,6,6,6,6,6,6,6";
	
	//Like Paladin, Ranger
	this.lowCast  = "-,-,-,-,-;" +
					"-,-,-,-,-;" +
					"-,-,-,-,-;" +
					"-,0,-,-,-;" +
					"-,1,-,-,-;" +
					"-,1,-,-,-;" +
					"-,1,0,-,-;" +
					"-,1,1,-,-;" +
					"-,2,1,-,-;" +
					"-,2,1,0,-;" +
					"-,2,1,1,-;" +
					"-,2,2,1,-;" +
					"-,3,2,1,0;" +
					"-,3,2,1,1;" +
					"-,3,2,2,1;" +
					"-,3,3,2,1;" +
					"-,4,3,2,1;" +
					"-,4,3,2,2;" +
					"-,4,3,3,2;" +
					"-,4,4,3,3";
	
	//Bard Cast Like
	this.bardCast = "1,1,-,-,-,-,-;" +
					"1,2,-,-,-,-,-;" +
					"1,3,-,-,-,-,-;" +
					"1,3,1,-,-,-,-;" +
					"1,4,2,-,-,-,-;" +
					"1,4,3,-,-,-,-;" +
					"1,4,3,1,-,-,-;" +
					"1,4,4,2,-,-,-;" +
					"1,5,4,3,-,-,-;" +
					"1,5,4,3,1,-,-;" +
					"1,5,4,4,2,-,-;" +
					"1,5,5,4,3,-,-;" +
					"1,5,5,4,3,1,-;" +
					"1,5,5,4,4,2,-;" +
					"1,5,5,5,4,3,-;" +
					"1,5,5,5,4,3,1;" +
					"1,5,5,5,4,4,2;" +
					"1,5,5,5,5,4,3;" +
					"1,5,5,5,5,5,4;" +
					"1,5,5,5,5,5,5";
	
	this.buildSpellMatrix = function(castType){
		var levels = castType.split(/;/g);
		for (var i=0;i<levels.length;i++){
			this.perDay[i+1] = levels[i].split(/,/g);
		}
	};
	
	//Sorcerer Like
	this.baseSpelKnown = "4,2,-,-,-,-,-,-,-,-;" +
						 "5,2,-,-,-,-,-,-,-,-;" +
						 "5,3,-,-,-,-,-,-,-,-;" +
						 "6,3,1,-,-,-,-,-,-,-;" +
						 "6,4,2,-,-,-,-,-,-,-;" +
						 "7,4,2,1,-,-,-,-,-,-;" +
						 "7,5,3,2,-,-,-,-,-,-;" +
						 "8,5,3,2,1,-,-,-,-,-;" +
						 "8,5,4,3,2,-,-,-,-,-;" +
						 "9,5,4,3,2,1,-,-,-,-;" +
						 "9,5,5,4,3,2,-,-,-,-;" +
						 "9,5,5,4,3,2,1,-,-,-;" +
						 "9,5,5,4,4,3,2,-,-,-;" +
						 "9,5,5,4,4,3,2,1,-,-;" +
						 "9,5,5,4,4,4,3,2,-,-;" +
						 "9,5,5,4,4,4,3,2,1,-;" +
						 "9,5,5,4,4,4,3,3,2,-;" +
						 "9,5,5,4,4,4,3,3,2,1;" +
						 "9,5,5,4,4,4,3,3,3,2;" +
						 "9,5,5,4,4,4,3,3,3,3";
	//Bard Like
	this.bardSpelKnown = "4,2,-,-,-,-,-;" +
						 "5,3,-,-,-,-,-;" +
						 "6,4,-,-,-,-,-;" +
						 "6,4,2,-,-,-,-;" +
						 "6,4,3,-,-,-,-;" +
						 "6,4,4,-,-,-,-;" +
						 "6,5,4,2,-,-,-;" +
						 "6,5,4,3,-,-,-;" +
						 "6,5,4,4,-,-,-;" +
						 "6,5,5,4,2,-,-;" +
						 "6,6,5,4,3,-,-;" +
						 "6,6,5,4,4,-,-;" +
						 "6,6,5,5,4,2,-;" +
						 "6,6,6,5,4,3,-;" +
						 "6,6,6,5,4,4,-;" +
						 "6,6,6,5,5,4,2;" +
						 "6,6,6,6,5,4,3;" +
						 "6,6,6,6,5,4,4;" +
						 "6,6,6,6,5,5,4;" +
						 "6,6,6,6,6,5,5";
	
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
	
	this.printWizardList = function(className){
		 $.ajax({
				type: "GET",
				url: "ajaxPhp/spells/"+className+".php",
				data: "class="+className,
				success: function(response){
					var obj = JSON.parse(response);
					for (var lv in obj){
						var options = new Array();
						while (spell = obj[lv].pop()){
							var spellName = spell.name;
							options.push(spellName+": "+spell.description);
						}
						options.sort();
						var fOptions = "";
						for (var j=0;j<options.length;j++) {
							var idd = options[j].toLowerCase().replace(/ /ig,'_').replace(/\//ig,'_');
							var option = new Option(options[j].toLowerCase(),idd);
							$('#spellList'+lv+className).append(option);
						}
						
					}
				}
			});
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