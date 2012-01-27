
window.onload = loadAll;

function loadAll(){
	setAll();
	
	//GLOBAL VARIABLES RELATED
	//This globals need the GLOBALS properties defined in global.js
	
	 $.ajax({
		type: "GET",
		url: "ajaxPhp/raceList.php",
		data: "id=1",
		success: function(response){
			var obj = JSON.parse(response);
			globalRacesList = obj;
			buildRaceSelect(obj);
		}
	});
	
	$.ajax({
        type: "GET",
        url: "ajaxPhp/armorList.php",
        data: "id=1",
        success: function(response){
            var obj = JSON.parse(response);
            globalArmorList = obj;
            buildArmorSelect(obj);
        }
    });
	 
	$.ajax({
        type: "GET",
        url: "ajaxPhp/shieldList.php",
        data: "id=1",
        success: function(response){
            var obj = JSON.parse(response);
            globalShieldList = obj;
            buildShieldSelect(obj);
        }
    }); 
    
    $.ajax({
        type: "GET",
        url: "ajaxPhp/classesList.php",
        data: "id=1",
        success: function(response){
            var obj = JSON.parse(response);
            globalClassList = obj;
            buildClassesList(obj);
        }
    }); 
    
     $.ajax({
        type: "GET",
        url: "ajaxPhp/weaponsList.php",
        data: "id=1",
        success: function(response){
            var obj = JSON.parse(response);
            globalWeaponList = obj;
            buildWeaponList(obj);
        }
    }); 
	 
    updateAllSheet();
}

function updateClassLevel(index,level){
    globalClassLevels[index] = parseInt(level);
}

function manageFavourite(index){
    var pref = hp = skill = pfClass = skillCheck = hpcheck = null;
    switch (index){
        case 0: pref = globalC1Preferred; hpcheck = globalC1PrefHP; skillCheck = globalC1PrefSkill; hp = globalC1PrefHP.is(':checked'); skill = globalC1PrefSkill.is(':checked'); pfClass = gpfClass01; break;
        case 1: pref = globalC2Preferred; hpcheck = globalC2PrefHP; skillCheck = globalC2PrefSkill; hp = globalC2PrefHP.is(':checked'); skill = globalC2PrefSkill.is(':checked'); pfClass = gpfClass02; break;
        case 2: pref = globalC3Preferred; hpcheck = globalC3PrefHP; skillCheck = globalC3PrefSkill; hp = globalC3PrefHP.is(':checked'); skill = globalC3PrefSkill.is(':checked'); pfClass = gpfClass03; break;
        case 3: pref = globalC4Preferred; hpcheck = globalC4PrefHP; skillCheck = globalC4PrefSkill; hp = globalC4PrefHP.is(':checked'); skill = globalC4PrefSkill.is(':checked'); pfClass = gpfClass04; break;
        case 4: pref = globalC5Preferred; hpcheck = globalC5PrefHP; skillCheck = globalC5PrefSkill; hp = globalC5PrefHP.is(':checked'); skill = globalC5PrefSkill.is(':checked'); pfClass = gpfClass05; break;
    }
    
    if (pref.is(':checked')){
        pfClass.setFavourite(true,hp,skill);
    }
    else {
        pfClass.setFavourite(false,false,false);
        hpcheck.prop('checked', false);
        skillCheck.prop('checked', false);
    }
    
}

function updateAllSheet(){
    updateSize();
    updateRace();
    updateClasses();
	updateStats();
	updateMovement();
	updateAC();
	updateInitiative();
	updateManeuvers();
}

function updateClasses(){
    
    gpfCharacter.eraseAllClasses();
    
    gpfClass01.setIndex(0);
    gpfClass01.setLevel(globalClassLevels[0]);
    gpfClass01.update();
    
    gpfClass02.setIndex(1);
    gpfClass02.setLevel(globalClassLevels[1]);
    gpfClass02.update();
    
    gpfClass03.setIndex(2);
    gpfClass03.setLevel(globalClassLevels[2]);
    gpfClass03.update();
    
    gpfClass04.setIndex(3);
    gpfClass04.setLevel(globalClassLevels[3]);
    gpfClass04.update();
    
    gpfClass05.setIndex(4);
    gpfClass05.setLevel(globalClassLevels[4]);
    gpfClass05.update();
    
    gpfCharacter.addPfClass(gpfClass01);
    gpfCharacter.addPfClass(gpfClass02);
    gpfCharacter.addPfClass(gpfClass03);
    gpfCharacter.addPfClass(gpfClass04);
    gpfCharacter.addPfClass(gpfClass05);
    
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

