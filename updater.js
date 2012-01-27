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


//******************** CLASSES ***************************//
function buildWeaponList(obj){
    var sel0 = $("#weapon01Name");
    var sel1 = $("#weapon02Name");
    var sel2 = $("#weapon03Name");
    var sel3 = $("#weapon04Name");
    var sel4 = $("#weapon05Name");
    
    if ( ($('#weapon01Name option').size()) > 0 ) return;
    
    sel0.change(
            function(){
                if (sel0.val() != '--') {
                    $("#weapon01Name").removeAttr('disabled');
                    var cc = sel0.val();
                    gpfWeapon[0] = eval ("new "+cc+"();");
                    gpfWeapon[0].setIndex(0);
                    updateAllSheet();
                }
            }
        );
    
    sel1.change(
            function(){
                if (sel1.val() != '--') {
                    $("#weapon02Name").removeAttr('disabled');
                    var cc = sel1.val();
                    gpfWeapon[1] = eval ("new "+cc+"();");
                    gpfWeapon[1].setIndex(1);
                    updateAllSheet();
                }
            }
        );
    
    sel2.change(
            function(){
                if (sel2.val() != '--') {
                    $("#weapon03Name").removeAttr('disabled');
                    var cc = sel2.val();
                    gpfWeapon[2] = eval ("new "+cc+"();");
                    gpfWeapon[2].setIndex(2);
                    updateAllSheet();
                }
            }
        );
    
    sel3.change(
            function(){
                if (sel3.val() != '--'){
                    $("#weapon04Name").removeAttr('disabled');
                    var cc = sel3.val();
                    gpfWeapon[3] = eval ("new "+cc+"();");
                    gpfWeapon[3].setIndex(3);
                    updateAllSheet();
                }
            }
        );
        
     sel4.change(
            function(){
                if (sel4.val() != '--'){
                    $("#weapon05Name").removeAttr('disabled');
                    var cc = sel4.val();
                    gpfWeapon[4] = eval ("new "+cc+"();");
                    gpfWeapon[4].setIndex(4);
                    updateAllSheet();
                }
            }
        );
    
    var group = obj.group;
    for (var i = 0; i < group.length ; i++){
        var string = JSON.stringify(globalWeaponList[group[i]]);
        string = string.replace("{","");
        string = string.replace("}","");
        string = string.replace(/\"/g,'');
        var weaponList = string.split(",");
        var wl = "";
        for (var j=0;j< weaponList.length;j++){
            var value = weaponList[j].split(":");
            wl += "<option value=\""+value[1]+"\">"+value[0]+"</option>";
        }
        
        sel0.append($("<optgroup id=\"wGroup"+i+"\"></optgroup>").attr("label",group[i])).append(wl);
        sel1.append($("<optgroup id=\"wGroup"+i+"\"></optgroup>").attr("label",group[i])).append(wl); 
        sel2.append($("<optgroup id=\"wGroup"+i+"\"></optgroup>").attr("label",group[i])).append(wl);
        sel3.append($("<optgroup id=\"wGroup"+i+"\"></optgroup>").attr("label",group[i])).append(wl);
        sel4.append($("<optgroup id=\"wGroup"+i+"\"></optgroup>").attr("label",group[i])).append(wl);
        
    }
}