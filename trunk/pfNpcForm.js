
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

function updateFeatsOrSkills(list){
     var len = list.length;
     if (len == 0) return;
	 for (var i=0;i<len; i++)
		 list[i].update();
}

function updateMovementFeats(){
	updateFeatsOrSkills(globalMovementFeatsList);
}

function updateClassFeats(){
	updateFeatsOrSkills(globalClassesFeatsList);
}

function updateSizeFeats(){
	updateFeatsOrSkills(globalSizeFeatsList);
}

function updateRaceFeats(){
	updateFeatsOrSkills(globalRaceFeatsList);
}

function updateStatsFeats(){
	updateFeatsOrSkills(globalStatsFeatsList);
}

function updateACFeats(){
	updateFeatsOrSkills(globalACFeatsList);
}

function updateInitFeats(){
	updateFeatsOrSkills(globalInitFeatsList);
}

function updateWeaponFeats(){
	updateFeatsOrSkills(globalInitFeatsList);
}

function updateManeuverFeats(){
	updateFeatsOrSkills(globalManeuversFeatsList);
}

function updateAllSkills(){
	updateFeatsOrSkills(globalSkillList);
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
	//armor class
	updateACFeats();
	updateAC();
	//movement
    updateMovementFeats();
	updateMovement();
	//initiative
	updateInitFeats();
	updateInitiative();
	//weapons
	updateWeaponFeats();
    updateWeapons();
    //maneuvers
    updateManeuverFeats();
	updateManeuvers();
	//updating skills section
	updateAllSkills();
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
    
    for (var i=0;i<maxMulticlass;i++) {
        gpfClasses[i].setIndex(i);
        gpfClasses[i].setLevel(globalClassLevels[i]);
        gpfClasses[i].update();
    }
    
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
	gpfCharacter.eraseAllRaces();
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

