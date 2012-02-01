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
                    gpfClasses[0] = eval ("new "+cc+"();");
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
                    gpfClasses[1] = eval ("new "+cc+"();");
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
                    gpfClasses[2] = eval ("new "+cc+"();");
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
                    gpfClasses[3] = eval ("new "+cc+"();");
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
                    gpfClasses[4] = eval ("new "+cc+"();");
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

//FEATS
function buildFeatsList(){
    var container = $('#featsContents');
    
    if (container.children().length!=0) return;
    
    var rows = "";
    var cols = "";
    var input = "";
    
    var fCode = new Array(); 
    var cLetter = "#";
    var keys = new Array();
    var cleanFeatsName =  new Array();
    
    for (i=0,j=0;i<globalFeatsList.length;i++,j++){
        var fName = globalFeatsList[i];
        if (cLetter != fName.substring(0,1)){
            cLetter = fName.substring(0,1);
            keys.push(cLetter);
            j=0;
            fCode[cLetter] = new Array();
        }
        fName = cleanFeatName(fName);
        fCode[cLetter][j] = '<td class="left" style="text-align:left;cursor:pointer;" id="td_'+fName+'"><input type="checkbox" id="'+fName+'" name="feats['+fName+']" onClick="updateAllSheet();" />'+fName.replace(/_/ig,' ')+'</td>';
    }
    
    var totalTable = "";
    for (i=0;i<keys.length;i++){
        totalTable += '<table class="feats"><tr><th colspan="1" id="trigger_'+keys[i]+'" onClick="toggle(\'feats_'+keys[i]+'\')">'+keys[i]+'</th></tr><tr><td>'+buildTable(fCode[keys[i]],featsCols,'feats_'+keys[i])+'</td></tr></table>';
    }
    
    container.html(totalTable);
    
    for (var i=0;i<globalFeatsList.length;i++){
        var sheet = "";
        var fName = globalFeatsList[i];
        
        sheet = '<tr><td>descrizione</td><td>'+globalFeats[globalFeatsList[i]].descrizione+'</td></tr>';
        sheet += '<tr><td>beneficio</td><td>'+globalFeats[globalFeatsList[i]].beneficio+'</td></tr>';  
        if (globalFeats[globalFeatsList[i]].requisito > 0)
            sheet += '<tr><td>prerequisito</td><td>'+globalFeats[globalFeatsList[i]].requisito+'</td></tr>';
        if (globalFeats[globalFeatsList[i]].normale != undefined)
            sheet += '<tr><td>normale</td><td>'+globalFeats[globalFeatsList[i]].normale+'</td></tr>';
        if (globalFeats[globalFeatsList[i]].speciale != undefined)
            sheet += '<tr><td>speciale</td><td>'+globalFeats[globalFeatsList[i]].speciale+'</td></tr>';
        
        sheet = '<table style="width:400px;">'+sheet+'</table>';
        $("#td_"+cleanFeatName(fName)).tipTip({content:sheet,maxWidth: "400px", keepAlive:false});
    }
    
}