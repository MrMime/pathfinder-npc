/// BUILDING DYNAMIC INPUT
//******************** RACES ***************************//
function buildRaceSelect(obj){
	var raceSelect = $("#race");
	if ( ($('#race option').size()) > 0 ) return;
	var races = obj.races;
	
	raceSelect.change(
		function(){
				var race = raceSelect.val();
				gpfRace = eval ("new "+race+"();"); //this is the global Race
				var row = $('#customChoiceRadio');
				if (gpfRace.modCus == 2)
					row.show();
				else {
					row.hide();
					$('#modRaceCusCus').attr("checked","true");
				}
				//updating base race movement (es. 6 meters for Dwarf)
				globalRaceBaseMovement.val(gpfRace.speed);
					
				gpfCharacter.setRace(gpfRace); //this is the global pfCharacter
				gpfSheet.setPfCharacter(gpfCharacter);
				updateAllSheet();
			}
	);
	
	for (var i = 0; i < races.length ; i++){
		raceSelect.append($("<option></option>").attr("value",obj[races[i]]).text(races[i])); 
	}
}