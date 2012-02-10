function pfSkill()
{

	this.name			= null;
	this.stat 			= null;
	this.id				= null;
	this.isArmorPenalty	= false;
	this.armorPenalty	= 0;
	
	this.points			= 0;
	this.pointsInput	= null;
	this.mod			= 0;
	this.featBonus		= 0;
	this.classBonus  	= 0;
	this.requireTrain	= false;
	this.skillClass		= false;
	this.otherBonus		= 0;
	
	this.totalCheck		= null;

	this.getMods = function(){
		this.mod	= globalStatsMods[this.stat].val()/1;
	};
	
	this.setName = function (name){this.name = name;};
	
	this.update = function(){
		
    	this.getMods(); //retrieve mod stat for current skill
    	this.armorPenalty = globalCurrentArmorSkillPenalty;
    	this.armorPenalty = (this.isArmorPenalty) ? this.armorPenalty : 0;
    	this.points		  = $('#skillPoints'+this.name).val()/1;
    	this.otherBonus   = $('#skillMisc'+this.name).val()/1;
    	
    	if ( ($.inArray(this.name,globalClassesSkills) != -1) && this.points > 0)
    		this.classBonus	= 3;
    	else
    		this.classBonus = 0;
    	
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
		
		if ($.inArray(this.name,globalClassesSkills) != -1)
			$('#skillName'+this.name).addClass('featEvidence');
		else
			$('#skillName'+this.name).removeClass('featEvidence');
	};
	
}

function pfAcrobatics(){
	this.inheritFrom = pfSkill;
    this.inheritFrom();
    this.setName("acrobatics");
    this.isArmorPenalty = true;
    this.stat	= "dex";
}
globalSkillList.push(new pfAcrobatics());

function pfAppraise(){
	this.inheritFrom = pfSkill;
    this.inheritFrom();
    this.setName("appraise");
    this.stat			= "int";
}
globalSkillList.push(new pfAppraise());

function pfBluff(){
	this.inheritFrom = pfSkill;
    this.inheritFrom();
    this.setName("bluff");
    this.stat			= "cha";
}
globalSkillList.push(new pfBluff());


function pfClimb(){
	this.inheritFrom = pfSkill;
    this.inheritFrom();
    this.setName("climb");
    this.stat			= "str";
    this.isArmorPenalty = true;
}
 globalSkillList.push(new pfClimb());
 

function pfCraft(){
	this.inheritFrom = pfSkill;
    this.inheritFrom();
    this.setName("craft");
    this.stat			= "int";
}
 globalSkillList.push(new pfCraft());

function pfDimplomacy(){
	this.inheritFrom = pfSkill;
    this.inheritFrom();
    this.setName("diplomacy");
    this.stat			= "cha";
}
globalSkillList.push(new pfDimplomacy());

function pfDisableDevice(){
	this.inheritFrom = pfSkill;
    this.inheritFrom();
    this.setName("disable_device");
    this.stat			= "dex";
    this.requireTrain	= true;
    this.isArmorPenalty = true;
}
 globalSkillList.push(new pfDisableDevice());

function pfDisguise(){
	this.inheritFrom = pfSkill;
    this.inheritFrom();
    this.setName("disguise");
    this.stat			= "cha";
}
 globalSkillList.push(new pfDisguise());

function pfEscapeArtist(){
	this.inheritFrom = pfSkill;
    this.inheritFrom();
    this.setName("escape_artist");
    this.stat			= "dex";
    this.isArmorPenalty = true;
}
 globalSkillList.push(new pfEscapeArtist());

function pfFly(){
	this.inheritFrom = pfSkill;
    this.inheritFrom();
    this.setName("fly");
    this.stat			= "dex";
    this.isArmorPenalty = true;
}
 globalSkillList.push(new pfFly());

function pfHandleAnimal(){
	this.inheritFrom = pfSkill;
    this.inheritFrom();
    this.setName("handle_animal");
    this.stat			= "cha";
    this.requireTrain	= true;
}
 globalSkillList.push(new pfHandleAnimal());

function pfHeal(){
	this.inheritFrom = pfSkill;
    this.inheritFrom();
    this.setName("heal");
    this.stat			= "wis";
}
 globalSkillList.push(new pfHeal());

function pfIntimidate(){
	this.inheritFrom = pfSkill;
    this.inheritFrom();
    this.setName("intimidate");
    this.stat			= "cha";
}
 globalSkillList.push(new pfIntimidate());

function pfGenericKnowledge(){
	this.inheritFrom = pfSkill;
    this.inheritFrom();
    this.stat			= "int";
    this.requireTrain	= true;
}
 globalSkillList.push(new pfGenericKnowledge());

function pfKnowledgeArcana(){
	this.inheritFrom = pfGenericKnowledge;
    this.inheritFrom();
    this.setName("knowledge_arcana");
}
 globalSkillList.push(new pfKnowledgeArcana());

function pfKnowledgeDungeoneering(){
	this.inheritFrom = pfGenericKnowledge;
    this.inheritFrom();
    this.setName("knowledge_dungeoneering");
}
 globalSkillList.push(new pfKnowledgeDungeoneering());

function pfKnowledgeEngeneering(){
	this.inheritFrom = pfGenericKnowledge;
    this.inheritFrom();
    this.setName("knowledge_engineering");
}
 globalSkillList.push(new pfKnowledgeEngeneering());

function pfKnowledgeGeography(){
	this.inheritFrom = pfGenericKnowledge;
    this.inheritFrom();
    this.setName("knowledge_geography");
}
 globalSkillList.push(new pfKnowledgeGeography());

function pfKnowledgeHistory(){
	this.inheritFrom = pfGenericKnowledge;
    this.inheritFrom();
    this.setName("knowledge_history");
}
 globalSkillList.push(new pfKnowledgeHistory());

function pfKnowledgeLocal(){
	this.inheritFrom = pfGenericKnowledge;
    this.inheritFrom();
    this.setName("knowledge_local");
}
 globalSkillList.push(new pfKnowledgeLocal());

function pfKnowledgeNature(){
	this.inheritFrom = pfGenericKnowledge;
    this.inheritFrom();
    this.setName("knowledge_nature");
}
 globalSkillList.push(new pfKnowledgeNature());

function pfKnowledgeNobility(){
	this.inheritFrom = pfGenericKnowledge;
    this.inheritFrom();
    this.setName("knowledge_nobility");
}
 globalSkillList.push(new pfKnowledgeNobility());

function pfKnowledgePlanes(){
	this.inheritFrom = pfGenericKnowledge;
    this.inheritFrom();
    this.setName("knowledge_planes");
}
 globalSkillList.push(new pfKnowledgePlanes());

function pfKnowledgeReligion(){
	this.inheritFrom = pfGenericKnowledge;
    this.inheritFrom();
    this.setName("knowledge_religion");
}
 globalSkillList.push(new pfKnowledgeReligion());

function pfKnowledgePsionic(){
	this.inheritFrom = pfGenericKnowledge;
    this.inheritFrom();
    this.setName("knowledge_psionic");
}
 globalSkillList.push(new pfKnowledgePsionic());

function pfLinguistics(){
	this.inheritFrom = pfSkill;
    this.inheritFrom();
    this.setName("linguistics");
    this.stat			= "int";
    this.requireTrain	= true;
}
 globalSkillList.push(new pfLinguistics());

function pfPerception(){
	this.inheritFrom = pfSkill;
    this.inheritFrom();
    this.setName("perception");
    this.stat			= "wis";
}
 globalSkillList.push(new pfPerception());

function pfPerform(){
	this.inheritFrom = pfSkill;
    this.inheritFrom();
    this.setName("perform");
    this.stat			= "cha";
    this.requireTrain	= true;
}
 globalSkillList.push(new pfPerform());

function pfProfession(){
	this.inheritFrom = pfSkill;
    this.inheritFrom();
    this.setName("profession");
    this.stat			= "wis";
    this.requireTrain	= true;
}
 globalSkillList.push(new pfProfession());

function pfRide(){
	this.inheritFrom = pfSkill;
    this.inheritFrom();
    this.setName("ride");
    this.stat			= "dex";
    this.armorPenalty 	= true;
}
 globalSkillList.push(new pfRide());

function pfSenseMotive(){
	this.inheritFrom = pfSkill;
    this.inheritFrom();
    this.setName("sense_motive");
    this.stat			= "wis";
}
 globalSkillList.push(new pfSenseMotive());

function pfSleightOfHand(){
	this.inheritFrom = pfSkill;
    this.inheritFrom();
    this.setName("sleight_of_hand");
    this.stat			= "dex";
    this.armorPenalty 	= true;
    this.requireTrain	= true;
}
 globalSkillList.push(new pfSleightOfHand());

function pfSpellcraft(){
	this.inheritFrom = pfSkill;
    this.inheritFrom();
    this.setName("spellcraft");
    this.stat			= "int";
    this.requireTrain	= true;
}
 globalSkillList.push(new pfSpellcraft());

function pfStealth(){
	this.inheritFrom = pfSkill;
    this.inheritFrom();
    this.setName("stealth");
    this.stat			= "dex";
    this.armorPenalty 	= true;
}
 globalSkillList.push(new pfStealth());

function pfSurvival(){
	this.inheritFrom = pfSkill;
    this.inheritFrom();
    this.setName("survival");
    this.stat			= "wis";
}
 globalSkillList.push(new pfSurvival());

function pfSwim(){
	this.inheritFrom = pfSkill;
    this.inheritFrom();
    this.setName("swim");
    this.stat			= "str";
    this.armorPenalty 	= true;
}
 globalSkillList.push(new pfSwim());

function pfUseMagicDevice(){
	this.inheritFrom = pfSkill;
    this.inheritFrom();
    this.setName("use_magic_device");
    this.stat			= "cha";
    this.requireTrain	= true;
}
 globalSkillList.push(new pfUseMagicDevice());