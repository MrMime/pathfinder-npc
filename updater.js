/// BUILDING DYNAMIC INPUT
//******************** RACES ***************************//
function buildRaceSelect(obj){
	var raceSelect = $("#race");
	if ( ($('#race option').size()) > 0 ) return;
	
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
	
	var optGroups = buildGenericSelect(obj,'races');
	for (var i = 0; i < optGroups.length ; i++){
		raceSelect.append(optGroups[i]); 
	}
}


//****************** ARMORS **************************//
function buildArmorSelect(obj){
    var armorSelect = $("#armorName");
    if ( ($('#armorName option').size()) > 0 ) return;
    var armors = obj.armors;
    
    armorSelect.change(
        function(){
            var armor = armorSelect.val();
            gpfArmor =  eval ("new "+armor+"();"); //this is the global Armor
            updateAllSheet();     
        }
    );
    
    var optGroups = buildGenericSelect(obj,'armors');
    for (var i = 0; i < optGroups.length ; i++){
        armorSelect.append(optGroups[i]); 
    }
}

//****************** SHIELDS **************************//
function buildShieldSelect(obj){
    var shieldSelect = $("#shieldName");
    if ( ($('#shieldName option').size()) > 0 ) return;
    
    shieldSelect.change(
        function(){
        	 var shield = shieldSelect.val();
             gpfShield =  eval ("new "+shield+"();"); //this is the global Armor
             updateAllSheet(); 
        }
    );
    
    var optGroups = buildGenericSelect(obj,'shields');
	for (var i = 0; i < optGroups.length ; i++){
		shieldSelect.append(optGroups[i]); 
	}
    
}

//******************** CLASSES ***************************//
function buildClassesList(obj,start,end){
	if ( ($('#class0'+start+'Name option').size()) > 0 ) return;
	
	var classSelects = new Array();
	var classReferenceSelects = new Array();
	var optGroups	= buildGenericSelect(obj,'classes');
	
	for (var i=start;i<end;i++){
		classSelects[i] = $("#class0"+i+"Name");
		classSelects[i].change(
	            function(){
	                if ($(this).val() != '--') {
	                	var index = $(this).attr('index');
	                	var level = $("#class0"+index+"Level");
	                	level.removeAttr('disabled');
	                    var selectedPfClass = $(this).val();
	                    gpfClasses[index] = eval ("new "+selectedPfClass+"();");	                    
	                    globalClassLevels[index] = level.val()/1;
	                    updateAllSheet();
	                }
	                else 
	                    $("#class0"+index+"Level").attr('disabled',true);
	            }
	        ); 
		for (var h = 0; h < optGroups.length; h++){
			classSelects[i].append(optGroups[h].clone());
	    }
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
        
        
    var optGroups = buildGenericSelect(obj,'weapons');
    for (var i = 0; i < optGroups.length ; i++){
        sel0.append(optGroups[i].clone());
        sel1.append(optGroups[i].clone()); 
        sel2.append(optGroups[i].clone());
        sel3.append(optGroups[i].clone());
        sel4.append(optGroups[i].clone());
    }
        
}


function buildGenericSelectGroupFilter(obj,id,valids){
	 var optGroups   = Array();
	    var count = 0;
	    for (var key in obj) {
	    	if (valids.length > 0 && !$.inArray(key,valids)) continue;
	        var options = "";
	        var children = eval('obj.'+key);
	        for (var son in children) {
	            var val = children[son];
	            options  += "<option value=\""+son+"\">"+val+"</option>";
	        }
	        optGroups[count] = $("<optgroup id=\""+id+"_"+count+"\"></optgroup>").attr("label",key).append(options);
	        count++;
	    }
	    return optGroups;
}

function buildGenericSelect(obj,id){
	return buildGenericSelectGroupFilter(obj,id,new Array());
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
        totalTable += '<table class="feats"><tr><th colspan="1" id="trigger_'+keys[i]+'" onClick="$(\'#feats_'+keys[i]+'\').fadeToggle(\'slow\');">'+keys[i]+'</th></tr><tr><td>'+buildTable(fCode[keys[i]],featsCols,'feats_'+keys[i])+'</td></tr></table>';
    }
    
    container.html(totalTable);
    //Building the tooltip to explain what feats do
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
        $("#td_"+cleanFeatName(fName)).tipTip({content:sheet,maxWidth: "300px", keepAlive:false,defaultPosition:"bottom"});
    }
    
}