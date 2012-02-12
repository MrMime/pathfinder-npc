
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
	this.legs       = 2; //number of legs. Usefull for Manouvers
	
	this.bullRace   = 0;
	this.tripRace   = 0;
	
	this.modSaveFor 	= 0; //race modifier to fortitude save throw
	this.modSaveRef 	= 0; //race modifier to reflex save throw
	this.modSaveWil 	= 0; //race modifier to will save throw
	
	this.ACMod			= 0;
	this.BMCMod			= 0; //not used yet
	this.DMCMod			= 0; //not used yet
	this.maneuversMod	= 0; //used
	
	this.ARMod			= 0;
	
	this.language   		= new Array();
	this.learnableLanguage 	= new Array();
	
	this.extraFeats = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0); //number of extra feats per level
	this.extraSkill = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0); //number of extra skill point per level
	
	this.setModStr 	= function(mod){this.modStr = mod;};
	this.setModCos 	= function(mod){this.modCos = mod;};
	this.setModDex 	= function(mod){this.modDex = mod;};
	this.setModInt 	= function(mod){this.modInt = mod;};
	this.setModWis 	= function(mod){this.modWis = mod;};
	this.setModCha 	= function(mod){this.modCha = mod;};
	
	this.buildLanguage = function(){
		var sel = $('#raceLanguage');
		if (globalCurrentRaceName != this.name){
			sel.empty();
			for (var i=0;i<this.learnableLanguage.length;i++)
				sel.append ('<option value="'+this.learnableLanguage[i]+'">'+this.learnableLanguage[i]+'</option>');
		}
	};
	
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
		this.buildLanguage();
	    var legsBonus = (this.legs-2) * 2;
	    this.tripRace = Math.max(this.tripRace,legsBonus);
	    this.bullRace = Math.max(this.bullRace,legsBonus);
	    globalCurrentRaceName = this.name;
	    this.draw();
	};
	
	this.draw = function(){
	    globalRaceBaseMovement.val(addPlus(this.speed));
	    modRaceStr.val(this.modStr);
        modRaceCos.val(this.modCos);
        modRaceDex.val(this.modDex);
        modRaceInt.val(this.modInt);
        modRaceWis.val(this.modWis);
        modRaceCha.val(this.modCha);
        modRaceCus.val(this.modCus);
        
        globalRaceTSF.val(this.modSaveFor);
        globalRaceTSR.val(this.modSaveRef);
        globalRaceTSW.val(this.modSaveWil);
        
        //Settings race mod to maneuvers
        globalManeuversBullRace.val(addPlus(this.bullRace));
        globalManeuversTripRace.val(addPlus(this.tripRace));
        
        globalACRace.val(addPlus(this.ACMod));
        globalManeuversRaceMod.val(addPlus(this.maneuversMod));
        for (var i=0;i<globalWeaponRace.length;i++)
        	globalWeaponRace[i].val(addPlus(this.ARMod));
	};
	
}

function pfHuman(){
	this.inheritFrom = pfRace;
    this.inheritFrom();
    
    this.name = "{human}";
    this.language.push("{common}");
	this.extraFeats[1] = 1;
	this.extraSkill = new Array(0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);	
	this.modCus = 2;
	this.speedHeavy = 6;
}

function pfHalfOrc(){
	this.inheritFrom = pfRace;
    this.inheritFrom();
    
    this.name = "{half-orc}";
    this.language.push("{orc-lang}","{common}");
    this.learnableLanguage = new Array("{abyssal-lang}","{draconic-lang}","{giant-lang}","{gnoll-lang}","{goblin-lang}");
	this.modCus = 2;
	this.speedHeavy = 6;
}

function pfHalfElf(){
	this.inheritFrom = pfRace;
    this.inheritFrom();
    
    this.name = "{half-elf}";
    this.language.push("{elf-lang}","{common}");
	this.modCus = 2;
	this.speedHeavy = 6;
}


function pfDwarf(){
	this.inheritFrom = pfRace;
    this.inheritFrom();
    
    this.name = "{dwarf}";
	this.language.push("{dwarf-lang}","{common}");
	this.learnableLanguage = new Array("{giant-lang}","{gnome-lang}","{orc-lang}","{terran-lang}","{undercommon-lang}");
	this.modCos = 2;
	this.modWis = 2;
	this.modCha = -2;
	
	this.speed 		= 6;
	this.speedHeavy = 6;
	
	this.bullRace   = 4;
	this.tripRace   = 4;
}

function pfGnome(){
	this.inheritFrom = pfRace;
    this.inheritFrom();
    
	this.modCos = 2;
	this.modCha = 2;
	this.modStr = -2;
	
	this.ACMod = 1;
	this.ARMod = 1;
	this.maneuversMod   = -1;
	
	this.speed 		= 6;
	this.speedHeavy = 4.5;
	
	this.language.push("{gnome-lang}","{common}","{sylvan-lang}");
	this.learnableLanguage = new Array("{draconic-lang}","{dwarf-lang}","{elf-lang}","{giant-lang}","{goblin-lang}","{orc-lang}");
}

function pfElf(){
	this.inheritFrom = pfRace;
    this.inheritFrom();
    
	this.modDex	= 2;
	this.modInt = 2;
	this.modCos	= -2;
	this.name	= "{elf}";
	this.language.push("{elven}","{common}");
	this.learnableLanguage = new Array("{celestial-lang}","{draconic-lang}","{gnoll-lang}","{gnome-lang}","{goblin-lang}","{orc-lang}","{sylvan-lang}");
}

function pfHalfling(){
	this.inheritFrom = pfRace;
    this.inheritFrom();
    
    this.name = "Halfling";
    
	this.language.push("{halfing}","{common}");
	this.learnableLanguage = new Array("{elven}","{gnome-lang}","{goblin-lang}","{dwarf-lang}");
	
	this.modStr		= -2;
	this.modDex		= 2;
	this.modCha		= 2;
	
	this.modSaveFor = 1;
	this.modSaveRef = 1;
	this.modSaveWil = 1;
	
	this.speed 		= 6;
	this.speedHeavy = 4.5;
	
	this.ACMod			= 1;
	this.BMCMod			= -1;
	this.DMCMod			= -1;
	this.maneuversMod   = -1;
	this.ARMod			= 1;
}