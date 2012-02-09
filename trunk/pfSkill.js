
function pfSkill()
{

	this.name			= null;
	this.stat 			= null;
	this.id				= null;
	this.isArmorPenalty	= false;
	this.armorPenalty	= 0;
	
	this.points			= null;
	this.mod			= null;
	this.featBonus		= null;
	this.classBonus  	= 0;
	this.requireTrain	= null;
	this.skillClass		= null;
	this.otherBonus		= null;
	
	this.totalCheck		= null;

	this.getMods = function(){
		this.mod	= globalStatsMods[this.stat].val()/1;
	};
	
	this.update = function(){
    	this.getMods(); //retrieve mod stat for current skill
    	this.armorPenalty = globalCurrentArmorSkillPenalty;
    	this.armorPenalty = (this.isArmorPenalty) ? this.armorPenalty : 0;
    	this.points		  = $('#skillPoints'+this.name).val()/1;
    	this.otherBonus   = $('#skillMisc'+this.name).val()/1;
    	
    	if ( ($.inArray(this.name,globalClassesSkills) == 0) && this.points > 0)
    		this.classBonus	= 3;
    	
    	if (this.requireTrain && this.points == 0)
    		  this.totalCheck = "NA";
    	else
    		  this.totalCheck = this.mod + this.points + this.featBonus + this.armorPenalty + this.classBonus + this.otherBonus;
    	this.draw();
    };
	
	this.draw = function(){
		$('#skillMod'+this.name).val(addPlus(this.mod));
		$('#skillTotal'+this.name).val((this.totalCheck=="NA") ? this.totalCheck:addPlus(this.totalCheck));
		$('#skillArmorPenalty'+this.name).val(addPlus(this.armorPenalty));
		$('#skillTrained'+this.name).val(addPlus(this.classBonus));
		
		if ($.inArray(this.name,globalClassesSkills) == 0)
			$('#skillName'+this.name).addClass('featEvidence');
		else
			$('#skillName'+this.name).removeClass('featEvidence');
	};

}

function pfAcrobatics(){
	this.inheritFrom = pfSkill;
    this.inheritFrom();
    this.name = "acrobatics";
    this.isArmorPenalty = true;
    this.stat	= "dex";
}

function pfHandleAnimal(){
	this.inheritFrom = pfSkill;
    this.inheritFrom();
    this.name 			= "handle_animal";
    this.requireTrain 	= true;
    this.stat			= "cha";
}

function pfCraft(){
	this.inheritFrom = pfSkill;
    this.inheritFrom();
    this.name 			= "craft";
    this.stat			= "int";
}

globalSkillList.push(new pfAcrobatics());
globalSkillList.push(new pfHandleAnimal());