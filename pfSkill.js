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
	this.raceMod		= 0;
	
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
    	this.raceMod	  = $('#skillRaceMod'+this.name).val()/1;
    	
    	if ( ($.inArray(this.name,globalClassesSkills) != -1) && this.points > 0)
    		this.classBonus	= 3;
    	else
    		this.classBonus = 0;
    	
    	if (this.requireTrain && this.points == 0)
    		  this.totalCheck = "NA";
    	else
    		  this.totalCheck = this.mod + this.points + this.featBonus + this.armorPenalty + this.classBonus + this.otherBonus + this.raceMod;
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
globalRaceModSkill[new pfAcrobatics().name] = 0; //setting base race mod for this skill

function pfAppraise(){
	this.inheritFrom = pfSkill;
    this.inheritFrom();
    this.setName("appraise");
    this.stat			= "int";
}
globalSkillList.push(new pfAppraise());
globalRaceModSkill[new pfAppraise().name] = 0; //setting base race mod for this skill

function pfBluff(){
	this.inheritFrom = pfSkill;
    this.inheritFrom();
    this.setName("bluff");
    this.stat			= "cha";
}
globalSkillList.push(new pfBluff());
globalRaceModSkill[new pfBluff().name] = 0; //setting base race mod for this skill


function pfClimb(){
	this.inheritFrom = pfSkill;
    this.inheritFrom();
    this.setName("climb");
    this.stat			= "str";
    this.isArmorPenalty = true;
}
 globalSkillList.push(new pfClimb());
 globalRaceModSkill[new pfClimb().name] = 0; //setting base race mod for this skill

function pfCraft(){
	this.inheritFrom = pfSkill;
    this.inheritFrom();
    this.setName("craft");
    this.stat			= "int";
}
 globalSkillList.push(new pfCraft());
 globalRaceModSkill[new pfCraft().name] = 0; //setting base race mod for this skill
function pfDimplomacy(){
	this.inheritFrom = pfSkill;
    this.inheritFrom();
    this.setName("diplomacy");
    this.stat			= "cha";
}
globalSkillList.push(new pfDimplomacy());
globalRaceModSkill[new pfDimplomacy().name] = 0; //setting base race mod for this skill
function pfDisableDevice(){
	this.inheritFrom = pfSkill;
    this.inheritFrom();
    this.setName("disable_device");
    this.stat			= "dex";
    this.requireTrain	= true;
    this.isArmorPenalty = true;
}
 globalSkillList.push(new pfDisableDevice());
 globalRaceModSkill[new pfDisableDevice().name] = 0; //setting base race mod for this skill
 
function pfDisguise(){
	this.inheritFrom = pfSkill;
    this.inheritFrom();
    this.setName("disguise");
    this.stat			= "cha";
}
 globalSkillList.push(new pfDisguise());
 globalRaceModSkill[new pfDisguise().name] = 0; //setting base race mod for this skill
 
function pfEscapeArtist(){
	this.inheritFrom = pfSkill;
    this.inheritFrom();
    this.setName("escape_artist");
    this.stat			= "dex";
    this.isArmorPenalty = true;
}
 globalSkillList.push(new pfEscapeArtist());
 globalRaceModSkill[new pfEscapeArtist().name] = 0; //setting base race mod for this skill
 
function pfFly(){
	this.inheritFrom = pfSkill;
    this.inheritFrom();
    this.setName("fly");
    this.stat			= "dex";
    this.isArmorPenalty = true;
}
 globalSkillList.push(new pfFly());
 globalRaceModSkill[new pfFly().name] = 0; //setting base race mod for this skill
 
function pfHandleAnimal(){
	this.inheritFrom = pfSkill;
    this.inheritFrom();
    this.setName("handle_animal");
    this.stat			= "cha";
    this.requireTrain	= true;
}
 globalSkillList.push(new pfHandleAnimal());
 globalRaceModSkill[new pfHandleAnimal().name] = 0; //setting base race mod for this skill
 
function pfHeal(){
	this.inheritFrom = pfSkill;
    this.inheritFrom();
    this.setName("heal");
    this.stat			= "wis";
}
 globalSkillList.push(new pfHeal());
 globalRaceModSkill[new pfHeal().name] = 0; //setting base race mod for this skill
 
function pfIntimidate(){
	this.inheritFrom = pfSkill;
    this.inheritFrom();
    this.setName("intimidate");
    this.stat			= "cha";
}
 globalSkillList.push(new pfIntimidate());
 globalRaceModSkill[new pfIntimidate().name] = 0; //setting base race mod for this skill
 
function pfGenericKnowledge(){
	this.inheritFrom = pfSkill;
    this.inheritFrom();
    this.stat			= "int";
    this.requireTrain	= true;
}
 globalSkillList.push(new pfGenericKnowledge());
 globalRaceModSkill[new pfGenericKnowledge().name] = 0; //setting base race mod for this skill
 
function pfKnowledgeArcana(){
	this.inheritFrom = pfGenericKnowledge;
    this.inheritFrom();
    this.setName("knowledge_arcana");
}
 globalSkillList.push(new pfKnowledgeArcana());
 globalRaceModSkill[new pfKnowledgeArcana().name] = 0; //setting base race mod for this skill
 
function pfKnowledgeDungeoneering(){
	this.inheritFrom = pfGenericKnowledge;
    this.inheritFrom();
    this.setName("knowledge_dungeoneering");
}
 globalSkillList.push(new pfKnowledgeDungeoneering());
 globalRaceModSkill[new pfKnowledgeDungeoneering().name] = 0; //setting base race mod for this skill
 
function pfKnowledgeEngeneering(){
	this.inheritFrom = pfGenericKnowledge;
    this.inheritFrom();
    this.setName("knowledge_engineering");
}
 globalSkillList.push(new pfKnowledgeEngeneering());
 globalRaceModSkill[new pfKnowledgeEngeneering().name] = 0; //setting base race mod for this skill
 
function pfKnowledgeGeography(){
	this.inheritFrom = pfGenericKnowledge;
    this.inheritFrom();
    this.setName("knowledge_geography");
}
 globalSkillList.push(new pfKnowledgeGeography());
 globalRaceModSkill[new pfKnowledgeGeography().name] = 0; //setting base race mod for this skill
 
function pfKnowledgeHistory(){
	this.inheritFrom = pfGenericKnowledge;
    this.inheritFrom();
    this.setName("knowledge_history");
}
 globalSkillList.push(new pfKnowledgeHistory());
 globalRaceModSkill[new pfKnowledgeHistory().name] = 0; //setting base race mod for this skill
 
function pfKnowledgeLocal(){
	this.inheritFrom = pfGenericKnowledge;
    this.inheritFrom();
    this.setName("knowledge_local");
}
 globalSkillList.push(new pfKnowledgeLocal());
 globalRaceModSkill[new pfKnowledgeLocal().name] = 0; //setting base race mod for this skill
 
function pfKnowledgeNature(){
	this.inheritFrom = pfGenericKnowledge;
    this.inheritFrom();
    this.setName("knowledge_nature");
}
 globalSkillList.push(new pfKnowledgeNature());
 globalRaceModSkill[new pfKnowledgeNature().name] = 0; //setting base race mod for this skill
 
function pfKnowledgeNobility(){
	this.inheritFrom = pfGenericKnowledge;
    this.inheritFrom();
    this.setName("knowledge_nobility");
}
 globalSkillList.push(new pfKnowledgeNobility());
 globalRaceModSkill[new pfKnowledgeNobility().name] = 0; //setting base race mod for this skill
 
function pfKnowledgePlanes(){
	this.inheritFrom = pfGenericKnowledge;
    this.inheritFrom();
    this.setName("knowledge_planes");
}
 globalSkillList.push(new pfKnowledgePlanes());
 globalRaceModSkill[new pfKnowledgePlanes().name] = 0; //setting base race mod for this skill
 
function pfKnowledgeReligion(){
	this.inheritFrom = pfGenericKnowledge;
    this.inheritFrom();
    this.setName("knowledge_religion");
}
 globalSkillList.push(new pfKnowledgeReligion());
 globalRaceModSkill[new pfKnowledgeReligion().name] = 0; //setting base race mod for this skill
 
function pfKnowledgePsionic(){
	this.inheritFrom = pfGenericKnowledge;
    this.inheritFrom();
    this.setName("knowledge_psionic");
}
 globalSkillList.push(new pfKnowledgePsionic());
 globalRaceModSkill[new pfKnowledgePsionic().name] = 0; //setting base race mod for this skill
 
function pfLinguistics(){
	this.inheritFrom = pfSkill;
    this.inheritFrom();
    this.setName("linguistics");
    this.stat			= "int";
    this.requireTrain	= true;
}
 globalSkillList.push(new pfLinguistics());
 globalRaceModSkill[new pfLinguistics().name] = 0; //setting base race mod for this skill
 
function pfPerception(){
	this.inheritFrom = pfSkill;
    this.inheritFrom();
    this.setName("perception");
    this.stat			= "wis";
}
 globalSkillList.push(new pfPerception());
 globalRaceModSkill[new pfPerception().name] = 0; //setting base race mod for this skill
 
function pfPerform(){
	this.inheritFrom = pfSkill;
    this.inheritFrom();
    this.setName("perform");
    this.stat			= "cha";
    this.requireTrain	= true;
}
 globalSkillList.push(new pfPerform());
 globalRaceModSkill[new pfPerform().name] = 0; //setting base race mod for this skill
 
function pfProfession(){
	this.inheritFrom = pfSkill;
    this.inheritFrom();
    this.setName("profession");
    this.stat			= "wis";
    this.requireTrain	= true;
}
 globalSkillList.push(new pfProfession());
 globalRaceModSkill[new pfProfession().name] = 0; //setting base race mod for this skill
 
function pfRide(){
	this.inheritFrom = pfSkill;
    this.inheritFrom();
    this.setName("ride");
    this.stat			= "dex";
    this.armorPenalty 	= true;
}
 globalSkillList.push(new pfRide());
 globalRaceModSkill[new pfRide().name] = 0; //setting base race mod for this skill
 
function pfSenseMotive(){
	this.inheritFrom = pfSkill;
    this.inheritFrom();
    this.setName("sense_motive");
    this.stat			= "wis";
}
 globalSkillList.push(new pfSenseMotive());
 globalRaceModSkill[new pfSenseMotive().name] = 0; //setting base race mod for this skill
 
function pfSleightOfHand(){
	this.inheritFrom = pfSkill;
    this.inheritFrom();
    this.setName("sleight_of_hand");
    this.stat			= "dex";
    this.armorPenalty 	= true;
    this.requireTrain	= true;
}
 globalSkillList.push(new pfSleightOfHand());
 globalRaceModSkill[new pfSleightOfHand().name] = 0; //setting base race mod for this skill
 
function pfSpellcraft(){
	this.inheritFrom = pfSkill;
    this.inheritFrom();
    this.setName("spellcraft");
    this.stat			= "int";
    this.requireTrain	= true;
}
 globalSkillList.push(new pfSpellcraft());
 globalRaceModSkill[new pfSpellcraft().name] = 0; //setting base race mod for this skill
 
function pfStealth(){
	this.inheritFrom = pfSkill;
    this.inheritFrom();
    this.setName("stealth");
    this.stat			= "dex";
    this.armorPenalty 	= true;
}
 globalSkillList.push(new pfStealth());
 globalRaceModSkill[new pfStealth().name] = 0; //setting base race mod for this skill
 
function pfSurvival(){
	this.inheritFrom = pfSkill;
    this.inheritFrom();
    this.setName("survival");
    this.stat			= "wis";
}
 globalSkillList.push(new pfSurvival());
 globalRaceModSkill[new pfSurvival().name] = 0; //setting base race mod for this skill
 
function pfSwim(){
	this.inheritFrom = pfSkill;
    this.inheritFrom();
    this.setName("swim");
    this.stat			= "str";
    this.armorPenalty 	= true;
}
 globalSkillList.push(new pfSwim());
 globalRaceModSkill[new pfSwim().name] = 0; //setting base race mod for this skill
 
function pfUseMagicDevice(){
	this.inheritFrom = pfSkill;
    this.inheritFrom();
    this.setName("use_magic_device");
    this.stat			= "cha";
    this.requireTrain	= true;
}
 globalSkillList.push(new pfUseMagicDevice());
 globalRaceModSkill[new pfUseMagicDevice().name] = 0; //setting base race mod for this skill