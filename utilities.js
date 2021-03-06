/**
 * Convert Int to String with "+" char if > 0
 * @intege: Integer value
 * @string: String value (es. 5 => "+5")
 */
function addPlus(value){
	if (value < 0) return value;
	return "+"+value;
}

function indexArraySum(list,a,b){
	if (a==0 && b==0)
		b=list.lenght;
	var sum = 0;
	for (var i=a;i<=b;i++){
		sum += parseInt(list[i]);
	}
	return sum;
}

//Check che hihest spell school
//0 = arcane
//1 = divine
//2 = psionic
//3 = alchemic
function checkHighestSpellSchool(a){
	var index 	= 0;
	var current = -1;
	for (var i=0;i<a.length;i++){
		if (current < a[i]){
		  current = a[i];
		  index = i;
		}
	}
	return index;
}

function arraySum(list){
	indexArraySum(list,0,0);
}

function inArray(value,a){
	for (var i=0;i<a.length;i++)
		if (value == a[i]) return true;
	return false;
}

function getCheck(obj){
	if (obj.is(':checked')) return 1;
	return 0;
}

function manageSkillPoint(skillname,increment){
	var pointInputs = $('#skillPoints'+skillname);
	var currentPoint = pointInputs.val()/1;
	
	//I cannot add a new skill if reached the max point avaiable
	if ( (globalSkillPointUsed == globalSkillPointAvaiable) && increment == 1)
		return;
	
	switch(increment){
		case 1:  pointInputs.val(Math.min(currentPoint+1,globalLevel)); break;
		case -1: pointInputs.val(Math.max(currentPoint-1,0)); break;
		case 0: pointInputs.val(0); globalSkillPointUsed -= (currentPoint-1); break;
	}
	
	var newPoint = pointInputs.val()/1;
	if (newPoint > currentPoint)
		globalSkillPointUsed++;
	if (newPoint < currentPoint)
		globalSkillPointUsed--;
	//Updating global skill points HTML
	globalTotalSkillPointUsed.html((globalSkillPointUsed));
	updateAllSheet();
}

/**
 * Implode an Array into a string with a token separator
 * es. a = {1,2,3,4} token = ";"
 * return "1;2;3;4";
 */
function implode(token,a){
	var total = "";
	for (var i=0;i<a.length;i++){
		total += token+a[i];
	}
	return total.replace(token,'');
}

function arrayMergeSum(a1,a2){
	var a3 = new Array();
	var limit = Math.max(a1.length,a2.length);
	for (var i=0;i<limit;i++){
		a1value = (a1[i] == null) ? 0:a1[i];
		a2value = (a2[i] == null) ? 0:a2[i];
		a3[i] = a1value + a2value;
	}	
	return a3;
}

function arrayCustomSum(a1,start,number){
	var limit = a1.length;
	if (start == null) start = 0;
	if (number == null) number = limit-start;
	var sum = 0;
	for (var i=0,j=number;i<limit,j>0;i++){
		if (i >= start) {
			sum += a1[i];
			j--;
		}
	}
	return sum;
}

function rollDice(face){
	return Math.floor(Math.random()*face)+1;
}

function rollHighDice(face){
	return Math.min(6,(Math.floor(Math.random()*(face-1))+3));
}

function rollStat(high){
	if (high)
		var rolled = Array (rollHighDice(6),rollHighDice(6),rollHighDice(6),rollHighDice(6));
	else
		var rolled = Array (rollDice(6),rollDice(6),rollDice(6),rollDice(6));
	
	var minor = 100;
	for (var i = 0,total = 0; i < 4 ; i++){
		minor = Math.min (minor,rolled[i]);
		total += rolled[i];
	}
	return total-minor;
}

function cleanFeatName(fName){
	fName = fName.replace (/_combattimento_critico$/g,'');
	fName = fName.replace (/_combattimento$/g,'');
	$.trim(fName);
	return fName;
}

function buildTable(list,count,id){
	var rows = "";
	var cols = "";
	for (var i=0;i<list.length;i++){
		
		if ((i%count) == 0 && i >= count){
			rows += "<tr>"+cols+"</tr>";
			cols = "";
		}
		
		cols += list[i];
		
	}
	rows += "<tr>"+cols+"</tr>";
	return '<table id='+id+' class="featsList">'+rows+'</table>';
}

//Converts meters to feets
function metersToFeets(meter){
	return Math.ceil(meter*3.2808399);
}
//Converts feets to meters
function feetsToMeters(feets){
	return Math.floor (feets*0.3048);
}