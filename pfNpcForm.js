
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
	 
    updateAllSheet();
}

function updateClassLevel(index,level){
    globalClassLevels[index] = level;
}

function updateAllSheet(){
    updateSize();
    updateRace();
    updateClasses();
	updateStats();
	updateMovement();
	updateInitiative();
	updateAC();
}

function updateClasses(){
    
    gpfCharacter.eraseAllClasses();
    
    gpfClass01.setIndex(0);
    gpfClass01.update();
    
    gpfClass02.setLevel(globalC2Level.val()/1);
    gpfClass02.update();
    
    gpfClass03.setLevel(globalC3Level.val()/1);
    gpfClass03.update();
    
    gpfClass04.setLevel(globalC4Level.val()/1);
    gpfClass04.update();
    
    gpfClass05.setLevel(globalC5Level.val()/1);
    gpfClass05.update();
    
    gpfCharacter.addClass(gpfClass01);
    gpfCharacter.addClass(gpfClass02);
    gpfCharacter.addClass(gpfClass03);
    gpfCharacter.addClass(gpfClass04);
    gpfCharacter.addClass(gpfClass05);
    
    gpfCharacter.update();
}

function updateSize(){
    gpfSize.update();
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

