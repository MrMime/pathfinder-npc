
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
	updateStats (gpfSheet.getAllStats());
	updateMovement();
	updateInitiative();
}

function updateMovement(){
	gpfMovement.update();
}

function updateInitiative(){
    gpfInitiative.update();
}

function updateStats(stats){
	//Setting TOTAL STATS
	totalStr.val(stats.totalStr);
	totalCos.val(stats.totalCos);
	totalDex.val(stats.totalDex);
	totalInt.val(stats.totalInt);
	totalWis.val(stats.totalWis);
	totalCha.val(stats.totalCha);
	//SETTING TOTAL MODS
	totalModStr.val(addPlus(stats.modStr));
	totalModCos.val(addPlus(stats.modCos));
	totalModDex.val(addPlus(stats.modDex));
	totalModInt.val(addPlus(stats.modInt));
	totalModWis.val(addPlus(stats.modWis));
	totalModCha.val(addPlus(stats.modCha));
	//SETTING RACE MODS
	modRaceStr.val(stats.raceStr);
	modRaceCos.val(stats.raceCos);
	modRaceDex.val(stats.raceDex);
	modRaceInt.val(stats.raceInt);
	modRaceWis.val(stats.raceWis);
	modRaceCha.val(stats.raceCha);
	modRaceCus.val(stats.raceCus);
	
}

