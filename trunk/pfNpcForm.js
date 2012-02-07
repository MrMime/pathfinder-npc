
window.onload = loadAll;

function loadAll(){
	setAll();
	
	//GLOBAL VARIABLES RELATED
	//This globals need the GLOBALS properties defined in global.js
	
	 $.ajax({
		type: "GET",
		url: "ajaxPhp/raceList.php",
		data: "lang="+globalLanguage,
		success: function(response){
			var obj = JSON.parse(response);
			globalRacesList = obj;
			buildRaceSelect(obj);
		}
	});
	
	$.ajax({
        type: "GET",
        url: "ajaxPhp/armorList.php",
        data: "lang="+globalLanguage,
        success: function(response){
            var obj = JSON.parse(response);
            globalArmorList = obj;
            buildArmorSelect(obj);
        }
    });
	 
	$.ajax({
        type: "GET",
        url: "ajaxPhp/shieldList.php",
        data: "lang="+globalLanguage,
        success: function(response){
            var obj = JSON.parse(response);
            globalShieldList = obj;
            buildShieldSelect(obj);
        }
    }); 
    
    $.ajax({
        type: "GET",
        url: "ajaxPhp/classesList.php",
        data: "lang="+globalLanguage,
        success: function(response){
            var obj = JSON.parse(response);
            globalClassList = obj;
            buildClassesList(obj);
        }
    }); 
    
     $.ajax({
        type: "GET",
        url: "ajaxPhp/weaponsList.php",
        data: "lang="+globalLanguage,
        success: function(response){
            var obj = JSON.parse(response);
            globalWeaponList = obj;
            buildWeaponList(obj);
        }
    });
    
    $.ajax({
        type: "GET",
        url: "ajaxPhp/featsList.php",
        data: "lang="+globalLanguage,
        success: function(response){
            var obj = JSON.parse(response);
            globalFeats = obj;
            globalFeatsList = obj.total_feats;
            buildFeatsList();
        }
    });
	 
    updateAllSheet();
}

function updateClassLevel(index,level){
    globalClassLevels[index] = parseInt(level);
}

function manageFavourite(index){
    var pref = hp = skill = pfClass = skillCheck = hpcheck = null;
    pref    = globalClassPreferred[index];
    hpcheck = globalClassPrefHP[index];
    skillCheck = globalClassPrefSkill[index];
    hp = hpcheck.is(':checked');
    skill = skillCheck.is(':checked');
    pfClass = gpfClasses[index];
     
    if (pref.is(':checked')){
        pfClass.setFavourite(true,hp,skill);
    }
    else {
        pfClass.setFavourite(false,false,false);
        hpcheck.prop('checked', false);
        skillCheck.prop('checked', false);
    }
    
}

function updateFeats(list){
     var len = list.length;
     if (len == 0) return;
	 for (var i=0;i<len; i++)
		 list[i].update();
}

function updateMovementFeats(){
	updateFeats(globalMovementFeatsList);
}

function updateClassFeats(){
	updateFeats(globalClassesFeatsList);
}

function updateSizeFeats(){
    updateFeats(globalSizeFeatsList);
}

function updateRaceFeats(){
    updateFeats(globalRaceFeatsList);
}

function updateStatsFeats(){
    updateFeats(globalStatsFeatsList);
}

function updateACFeats(){
    updateFeats(globalACFeatsList);
}

function updateInitFeats(){
    updateFeats(globalInitFeatsList);
}

function updateWeaponFeats(){
    updateFeats(globalInitFeatsList);
}

function updateManeuverFeats(){
    updateFeats(globalManeuversFeatsList);
}

function updateAllSheet(){
    //size
    updateSizeFeats();
    updateSize();
    //races
    updateRaceFeats();
    updateRace();
    //stats
    updateStatsFeats();
    updateStats();
    //classes
    updateClassFeats();
    updateClasses();
    //feats
    updateMovementFeats();
	updateMovement();
	//armor class
	updateACFeats();
	updateAC();
	//initiative
	updateInitFeats();
	updateInitiative();
	//weapons
	updateWeaponFeats();
    updateWeapons();
    //maneuvers
    updateManeuverFeats();
	updateManeuvers();
}

function updateWeapons(){
    gpfWeapon[0].setIndex(0);
    gpfWeapon[0].update();
    gpfWeapon[1].setIndex(1);
    gpfWeapon[1].update();
    gpfWeapon[2].setIndex(2);
    gpfWeapon[2].update();
    gpfWeapon[3].setIndex(3);
    gpfWeapon[3].update();
    gpfWeapon[4].setIndex(4);
    gpfWeapon[4].update();
}

function updateClasses(){
    
    gpfCharacter.eraseAllClasses();
    
    gpfClasses[0].setIndex(0);
    gpfClasses[0].setLevel(globalClassLevels[0]);
    gpfClasses[0].update();
    
    gpfClasses[1].setIndex(1);
    gpfClasses[1].setLevel(globalClassLevels[1]);
    gpfClasses[1].update();
    
    gpfClasses[2].setIndex(2);
    gpfClasses[2].setLevel(globalClassLevels[2]);
    gpfClasses[2].update();
    
    gpfClasses[3].setIndex(3);
    gpfClasses[3].setLevel(globalClassLevels[3]);
    gpfClasses[3].update();
    
    gpfClasses[4].setIndex(4);
    gpfClasses[4].setLevel(globalClassLevels[4]);
    gpfClasses[4].update();
    
    gpfCharacter.addPfClasses(gpfClasses);
    
    gpfCharacter.update();
}

function updateSize(){
    gpfSize.update();
}

function updateManeuvers(){
    gpfManeuvers.update();
}

function updateRace(){
    gpfRace.update();
}

function updateMovement(){
	gpfMovement.update();
}

function updateInitiative(){
    gpfInitiative.update();
}

function updateStats(){
    gpfStats.update();
}

function updateAC(){
    gpfAC.update();
}
