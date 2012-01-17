
function pfStats(stats){
	//BASE STATS DEPENDING ON ROLLED DICES
	//THIS STATS CHANGE ONLY WHEN ROLLED
	this.str 			= 0;
	this.cos 			= 0;
	this.dex 			= 0;
	this.int 			= 0;
	this.wis 			= 0;
	this.cha 			= 0;
	this.cus 			= 0; //custom modifier for Human Like Race
	//TOTAL MODIFIERS BASE STATS
	this.modStr			= 0;
	this.modCos			= 0;
	this.modDex			= 0;
	this.modInt			= 0;
	this.modWis			= 0;
	this.modCha			= 0;
	//RACE STATS MOD
	this.raceStr		= 0;
	this.raceCos		= 0;
	this.raceDex		= 0;
	this.raceInt		= 0;
	this.raceWis		= 0;
	this.raceCha		= 0;
	this.raceCus		= 0;
	//TOTAL STATS (BASE + RACE)
	this.totalStr		= 0;
	this.totalCos		= 0;
	this.totalDex		= 0;
	this.totalInt		= 0;
	this.totalWis		= 0;
	this.totalCha		= 0;
	
	//METHODS
	
	//CONSTRUCTOR SETTING
	this.str = stats[0];
	this.cos = stats[1];
	this.dex = stats[2];
	this.int = stats[3];
	this.wis = stats[4];
	this.cha = stats[5];
	
	//CALCULATE STAT MODS
	this.calculateStatsMod = function() {
		this.modStr = Math.floor((this.totalStr-10)/2);
		this.modCos = Math.floor((this.totalCos-10)/2);
		this.modDex = Math.floor((this.totalDex-10)/2);
		this.modInt = Math.floor((this.totalInt-10)/2);
		this.modWis = Math.floor((this.totalWis-10)/2);
		this.modCha = Math.floor((this.totalCha-10)/2);
	};
	
	this.calculateTotals = function(){
		this.totalStr = this.str + this.raceStr;
		this.totalCos = this.cos + this.raceCos;
		this.totalDex = this.dex + this.raceDex;
		this.totalInt = this.int + this.raceInt;
		this.totalWis = this.wis + this.raceWis;
		this.totalCha = this.cha + this.raceCha;
		
	};
	
	//SETTING RACE STAT MODIFIER
	this.setRaceStr = function(race){ this.raceStr = race;};
	this.setRaceCos = function(race){ this.raceCos = race;};
	this.setRaceDex = function(race){ this.raceDex = race;};
	this.setRaceInt = function(race){ this.raceInt = race;};
	this.setRaceWis = function(race){ this.raceWis = race;};
	this.setRaceCha = function(race){ this.raceCha = race;};
	this.setRaceCus = function(race){ this.raceCus = race;};
	
	this.calculateStats = function() {
		this.calculateTotals();
		this.calculateStatsMod();
	};
	
	
}


function statTest(statName) {
    switch (true) {
      case /str/.test(statName):
        return 1;
        break;
      case /cos/.test(statName):
        return 2;
        break;
      case /dex/.test(statName):
        return 3;
        break;
      case /int/.test(statName):
        return 4;
        break;
      case /wis/.test(statName):
        return 5;
        break;  
     case /cha/.test(statName):
        return 6;
        break; 
    }
 }