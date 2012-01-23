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
				updateAllSheet();
			}
	);
	
	for (var i = 0; i < races.length ; i++){
		raceSelect.append($("<option></option>").attr("value",obj[races[i]]).text(races[i])); 
	}
}

//****************** ARMORS **************************//
function buildArmorSelect(obj){
    var armorSelect = $("#armorName");
    if ( ($('#armorName option').size()) > 0 ) return;
    var armors = obj.armors;
    
    armorSelect.change(
        function(){
            gpfArmor.setArmor(armorSelect.val());
            gpfArmor.update();      
            updateAllSheet();     
        }
    );
    
    for (var i = 0; i < armors.length ; i++){
        armorSelect.append($("<option></option>").attr("value",armors[i]).text(armors[i])); 
    }
}

//****************** SHIELDS **************************//
function buildShieldSelect(obj){
    var shieldSelect = $("#shieldName");
    if ( ($('#shieldName option').size()) > 0 ) return;
    var shields = obj.shields;
    
    shieldSelect.change(
        function(){
            gpfShield.setShield(shieldSelect.val());
            gpfShield.update();  
            updateAllSheet();     
        }
    );
    
    for (var i = 0; i < shields.length ; i++){
        shieldSelect.append($("<option></option>").attr("value",shields[i]).text(shields[i])); 
    }   
}

//******************** CLASSES ***************************//
function buildClassesList(obj){
    var sel0 = $("#class00Name");
    var sel1 = $("#class01Name");
    var sel2 = $("#class02Name");
    var sel3 = $("#class03Name");
    var sel4 = $("#class04Name");
    
    if ( ($('#class00Name option').size()) > 0 ) return;
    
    sel0.change(
            function(){
                if (sel0.val() != '--') {
                    $("#class00Level").removeAttr('disabled');
                    var cc = sel0.val();
                    gpfClass01 = eval ("new "+cc+"();");
                    updateAllSheet();
                }
                else 
                    $("#class00Level").attr('disabled',true);
            }
        );
    
    sel1.change(
            function(){
                if (sel1.val() != '--') {
                    $("#class01Level").removeAttr('disabled');
                    var cc = sel1.val();
                    gpfClass02 = eval ("new "+cc+"();");
                    updateAllSheet();
                }
                else 
                    $("#class01Level").attr('disabled',true);
            }
        );
    
    sel2.change(
            function(){
                if (sel2.val() != '--') {
                    $("#class02Level").removeAttr('disabled');
                    var cc = sel2.val();
                    gpfClass03 = eval ("new "+cc+"();");
                    updateAllSheet();
                }
                else 
                    $("#class02Level").attr('disabled',true);
            }
        );
    
    sel3.change(
            function(){
                if (sel3.val() != '--'){
                    $("#class03Level").removeAttr('disabled');
                    var cc = sel3.val();
                    gpfClass04 = eval ("new "+cc+"();");
                    updateAllSheet();
                }
                else 
                    $("#class03Level").attr('disabled',true);
            }
        );
        
     sel4.change(
            function(){
                if (sel4.val() != '--'){
                    $("#class04Level").removeAttr('disabled');
                    var cc = sel4.val();
                    gpfClass05 = eval ("new "+cc+"();");
                    updateAllSheet();
                }
                else 
                    $("#class04Level").attr('disabled',true);
            }
        );
    
    var classes = obj.classes;
    for (var i = 0; i < classes.length ; i++){
        sel0.append($("<option></option>").attr("value",globalClassList[classes[i]]).text(classes[i]));
        sel1.append($("<option></option>").attr("value",globalClassList[classes[i]]).text(classes[i])); 
        sel2.append($("<option></option>").attr("value",globalClassList[classes[i]]).text(classes[i]));
        sel3.append($("<option></option>").attr("value",globalClassList[classes[i]]).text(classes[i]));
        sel4.append($("<option></option>").attr("value",globalClassList[classes[i]]).text(classes[i]));
    }
}