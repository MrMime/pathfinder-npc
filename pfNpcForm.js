
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
	 
    updateAllSheet();
}

function updateAllSheet(){
    updateRace();
	updateStats();
	updateMovement();
	updateInitiative();
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

