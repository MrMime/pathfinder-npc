/**
 * Convert Int to String with "+" char if > 0
 * @intege: Integer value
 * @string: String value (es. 5 => "+5")
 */
function addPlus(value){
	if (value < 0) return value;
	return "+"+value;
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
	return Math.floor(Math.random()*(face-1))+2;
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