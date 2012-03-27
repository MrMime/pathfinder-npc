//HELPER GOLBALS
var weaponHelperContainer;

$().ready(bindHelper);

function bindHelper(){
	weaponHelperContainer = $('#weaponHelperContainer');
}

function buildHelper(){
	var weaponHelpText = weaponHelperContainer.html();
	$('#weaponHelp').tipTip({content:weaponHelpText,maxWidth: "400px", keepAlive:false,defaultPosition:"bottom"});
}