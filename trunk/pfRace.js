
function pfRace(){
	this.name 		= "";
	
	this.modStr 	= 0;
	this.modCos 	= 0;
	this.modDex 	= 0;
	this.modInt 	= 0;
	this.modWis 	= 0;
	this.modCha 	= 0;
	this.modCus 	= 0;
	
	this.speed		= 9; //race base speed (meter)
	this.speedHeavy = 6; //race speed with heavy weight (es. armor)
	
	this.modSaveFor 	= 0; //race modifier to fortitude save throw
	this.modSaveRef 	= 0; //race modifier to reflex save throw
	this.modSaveWil 	= 0; //race modifier to will save throw
	
	this.language   		= new Array("common");
	this.learnableLanguage 	= new Array();
	
	this.extraFeats = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0); //number of extra feats per level
	this.extraSkill = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0); //number of extra skill point per level
	
	this.setModStr 	= function(mod){this.modStr = mod;};
	this.setModCos 	= function(mod){this.modCos = mod;};
	this.setModDex 	= function(mod){this.modDex = mod;};
	this.setModInt 	= function(mod){this.modInt = mod;};
	this.setModWis 	= function(mod){this.modWis = mod;};
	this.setModCha 	= function(mod){this.modCha = mod;};
	
	//SETTING WICH STATS HAS THE CUSTOM MOD +2 
	this.setCustomModStat = function(stat){
		this.clearRaceMods();
		stat = statTest(stat); //converting string to integer		
		switch (stat){
			case 1: this.modStr = this.modCus; break;
			case 2: this.modCos = this.modCus; break;
			case 3: this.modDex = this.modCus; break;
			case 4: this.modInt = this.modCus; break;
			case 5: this.modWis = this.modCus; break;
			case 6: this.modCha = this.modCus; break;	
		}
	};
	
	//Clearing race mods when changing race to a new one
	this.clearRaceMods = function(){
		this.modStr = 0;
		this.modCos = 0;
		this.modDex = 0;
		this.modInt = 0;
		this.modWis = 0;
		this.modCha = 0;
	}; 
	
	this.update = function() {
	    this.draw();
	}
	
	this.draw = function(){
	    globalRaceBaseMovement.val(addPlus(this.speed));
	    modRaceStr.val(this.modStr);
        modRaceCos.val(this.modCos);
        modRaceDex.val(this.modDex);
        modRaceInt.val(this.modInt);
        modRaceWis.val(this.modWis);
        modRaceCha.val(this.modCha);
        modRaceCus.val(this.modCus);
	}
	
}

function pfHuman(){
	this.inheritFrom = pfRace;
    this.inheritFrom();
    
    this.name = "Human";
	this.extraFeats[1] = 1;
	this.extraSkill = new Array(0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);	
	this.modCus = 2;
	this.speedHeavy = 6;
}

function pfHalfOrc(){
	this.inheritFrom = pfRace;
    this.inheritFrom();
    
    this.name = "Half-Orc";
	this.modCus = 2;
	this.speedHeavy = 6;
}

function pfDwarf(){
	this.inheritFrom = pfRace;
    this.inheritFrom();
    
    this.name = "Dwarf";
	this.language.push("dwarf");
	
	this.modCos = 2;
	this.modWis = 2;
	this.modCha = -2;
	
	this.speed 		= 6;
	this.speedHeavy = 6;
}

function pfHalfling(){
	this.inheritFrom = pfRace;
    this.inheritFrom();
    
    this.name = "Halfling";
    
	this.language.push("halfing");
	this.learnableLanguage = new Array("Elf","Gnome","Globin","Dwarf");
	
	this.modStr		= -2;
	this.modDex		= 2;
	this.modCha		= 2;
	
	this.modSaveFor = 1;
	this.modSaveRef = 1;
	this.modSaveWil = 1;
	
	this.speed 		= 6;
	this.speedHeavy = 4.5;
}