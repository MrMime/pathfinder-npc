//HELPER GOLBALS
var weaponHelperContainer;
var maneuversHelperContainer;
var skillsHelperContainer;
var featsHelperContainer;
var classesHelperContainer;

$().ready(bindHelper);

function bindHelper(){
	weaponHelperContainer 		= $('#weaponHelperContainer');
	maneuversHelperContainer 	= $('#maneuversHelperContainer');
	skillsHelperContainer		= $('#skillsHelperContainer');
	featsHelperContainer		= $('#featsHelperContainer');
	classesHelperContainer		= $('#classesHelperContainer');
}

function buildHelper(){
	var weaponHelpText 			= weaponHelperContainer.html();
	var maneuverHelpText 		= maneuversHelperContainer.html();
	var skillsHelpText 			= skillsHelperContainer.html();
	var featsHelpText 			= featsHelperContainer.html();
	var classesHelpText 		= classesHelperContainer.html();
	
	$('#weaponHelp').tipTip({content:weaponHelpText,maxWidth: "400px", keepAlive:false,defaultPosition:"bottom"});
	$('#maneuversHelp').tipTip({content:maneuverHelpText,maxWidth: "400px", keepAlive:false,defaultPosition:"bottom"});
	$('#skillsHelp').tipTip({content:skillsHelpText,maxWidth: "400px", keepAlive:false,defaultPosition:"bottom"});
	$('#featsHelp').tipTip({content:featsHelpText,maxWidth: "400px", keepAlive:false,defaultPosition:"bottom"});
	$('#classesHelp').tipTip({content:classesHelpText,maxWidth: "400px", keepAlive:false,defaultPosition:"bottom"});
	
}