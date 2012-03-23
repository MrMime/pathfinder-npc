function pfFeat(){
	this.check	 = null;
	this.checked = false;
	this.id	     = null;
	this.bonus 	 = 0;
	this.ifTrue 	= 0;
	this.ifFalse 	= 0;
	this.container = 0;
	this.className = "center";
	
	this.init = function(){};
	
	this.checkStatus = function(){
		this.check = $('#'+this.id);
		this.checked = false;
		if (this.check.is(':checked'))
			this.checked = true;
		this.className = (this.checked) ? 'center separated' : 'center';
	};
	
	//A lot of feats simply add some bonus to something
	//The default behavior of update is check the checkbox and 
	//initialize the bonus with ifTrue or ifFalse
	this.update = function(){
		this.checkStatus();
		this.bonus = (this.checked) ? this.ifTrue : this.ifFalse;
		this.draw();
	};
	
	this.evidence = function(){
		$('#'+this.id).parent().addClass('featEvidence');
	};
	
	this.draw = function (){
		this.evidence();
	};
}

/*********************** GENERIC FEATS **************************/
function pfFeatRough(){
	this.inheritFrom = pfFeat;
    this.inheritFrom();
	this.id = 'robustezza';
	
	this.update = function(){
		this.checkStatus();
		var totalLevel = globalTotalLevel.val()/1;
		var levelBonus = totalLevel-3;
		levelBonus = (levelBonus > 0) ? levelBonus : 0;
		this.bonus = (this.checked) ? 3 + levelBonus : 0;
		this.draw();
	};
	
	this.draw = function(){
		this.evidence();
		globalHPTotalFeats.val(addPlus(this.bonus));
		globalHPTotalFeats.parent().attr('class',this.className);    	
	};
}

function pfFeatDodge(){
	this.inheritFrom = pfFeat;
    this.inheritFrom();
    this.id = 'schivare';
    this.ifTrue = 1;
    
    this.draw = function(){
    	this.evidence();
    	globalACFeats.val(addPlus(this.bonus));
    	globalACFeats.parent().attr('class',this.className);
    };
}

function pfFeatImproveInitiative(){
	this.inheritFrom = pfFeat;
    this.inheritFrom();
    this.id = 'iniziativa_migliorata';
    this.ifTrue = 4;
    
    this.draw = function(){
    	this.evidence();
    	globalInitImprove.val(addPlus(this.bonus));
    	globalInitImprove.parent().attr('class',this.className);
    };
    
}



function pfFeatAgile()
{
	this.inheritFrom = pfFeat;
    this.inheritFrom();
	
	this.id ='agile';
	this.update = function(){
		this.checkStatus();
		this.bonus = (this.checked  && globalCurrentArmorCategory == 'light') ? 1.5 : 0;
		this.draw();
	};
	
	this.draw = function(){
		this.evidence();
		globalFeatsBonusMovement.val(addPlus(this.bonus));
	};
}

function pfFeatLightningReflexes(){
	this.inheritFrom = pfFeat;
    this.inheritFrom();
	this.id = 'riflessi_fulminei';
	this.ifTrue = 2;
	
	this.draw = function(){
		this.evidence();
		globalFeatTSR.val(addPlus(this.bonus));
	};
	
}

/*************************** SKILLS IMPROVE FEATS ****************************/

//Several feats add a +2 or +4 to two specific skills
//With this superclass I will manage every feats with this
//type of action
function pfFeatSkillBaseFeat(){
	this.inheritFrom = pfFeat;
    this.inheritFrom();
    
    this.id = '';
    this.skillName01 = '';
    this.skillName02 = '';
    
    this.update = function(){
    	this.checkStatus();
    	this.bonus = new Array();
    	if (this.checked) {
    		this.bonus[0] = ($('#skillPoints'+this.skillName01).val() >= 10) ? 4:2; 
    		this.bonus[1] = ($('#skillPoints'+this.skillName02).val() >= 10) ? 4:2;
    	}
    	else 
    		this.bonus = new Array(0,0);
    	this.draw();
    };
    
    this.draw = function(){
    	this.evidence();
    	$('#skillFeat'+this.skillName01).val(this.bonus[0]);
    	$('#skillFeat'+this.skillName02).val(this.bonus[1]);
    	$('#skillFeat'+this.skillName01).parent().attr('class',this.className);    	
    	$('#skillFeat'+this.skillName02).parent().attr('class',this.className);
    };
}

function pfFeatAcrobatics(){
	this.inheritFrom = pfFeatSkillBaseFeat;
    this.inheritFrom();
    this.id = 'acrobatico';
    this.skillName01 = 'acrobatics';
    this.skillName02 = 'fly';
}

function pfFeatAnimalAffinity(){
	this.inheritFrom = pfFeatSkillBaseFeat;
    this.inheritFrom();
    this.id = 'affinita_animale';
    this.skillName01 = 'handle_animal';
    this.skillName02 = 'ride';
}

function pfFeatAllertness(){
	this.inheritFrom = pfFeatSkillBaseFeat;
    this.inheritFrom();
    this.id = 'allerta';
    this.skillName01 = 'perception';
    this.skillName02 = 'sense_motive';
}

function pfFeatAtletic(){
	this.inheritFrom = pfFeatSkillBaseFeat;
    this.inheritFrom();
    this.id = 'atletico';
    this.skillName01 = 'climb';
    this.skillName02 = 'swim';
}

function pfFeatSelfMade(){
	this.inheritFrom = pfFeatSkillBaseFeat;
    this.inheritFrom();
    this.id = 'autosufficiente';
    this.skillName01 = 'survival';
    this.skillName02 = 'heal';
}

function pfFeatStealth(){
	this.inheritFrom = pfFeatSkillBaseFeat;
    this.inheritFrom();
    this.id = 'furtivo';
    this.skillName01 = 'stealth';
    this.skillName02 = 'escape_artist';
}

function pfFeatDisguise(){
	this.inheritFrom = pfFeatSkillBaseFeat;
    this.inheritFrom();
    this.id = 'ingannevole';
    this.skillName01 = 'disguise';
    this.skillName02 = 'bluff';
}

function pfFeatSleightHand(){
	this.inheritFrom = pfFeatSkillBaseFeat;
    this.inheritFrom();
    this.id = 'manolesta';
    this.skillName01 = 'sleight_of_hand';
    this.skillName02 = 'disable_device';
}

function pfFeatDiplomacy(){
	this.inheritFrom = pfFeatSkillBaseFeat;
    this.inheritFrom();
    this.id = 'persuasivo';
    this.skillName01 = 'diplomacy';
    this.skillName02 = 'intimidate';
}

//This feat add modStr to modCha to determinate
//intimidate bonus
function pfFeatForceIntimidate(){
	this.inheritFrom = pfFeat;
    this.inheritFrom();
    this.id = 'prodezza_intimidatrice';
    
    this.update = function(){
    	this.checkStatus();
    	var modStr = totalModStr.val()/1;
    	var cMod   = $('#skillFeatintimidate').val()/1;
		this.bonus = (this.checked) ? (modStr+cMod) : cMod; 
		this.draw();
    };
    
    this.draw = function(){
    	this.evidence();
    	$('#skillFeatintimidate').val(addPlus(this.bonus));
    };
    
}

/*************************** MANEUVERS FEATS ****************************/

function pfFeatCombatDefenceTrained(){
	this.inheritFrom = pfFeat;
    this.inheritFrom();
    this.id = 'addestramento_nel_combattimento_difensivo';
    
    
    this.init = function(){
    	this.ifTrue  = globalManeuverLevel.val()/1;
    	this.ifFalse = 0;
    };
    
    this.draw = function(){
    	this.evidence();
    	globalManeuversLevelBabMod.val(this.bonus);
    	var className = (this.bonus != 0) ? 'center separated' : 'center';
    	globalManeuversLevelBabMod.parent().attr('class',className);
    	var className = (this.bonus != 0) ? 'center' : 'center separated';
    	globalManeuverBAB.parent().attr('class',className);
    };
}

function pfFeatManeuversAgile(){
	this.inheritFrom = pfFeat;
    this.inheritFrom();
    this.id = 'manovre_agili';
    
    this.init = function(){
    	this.ifTrue 	= globalManeuverModDex.val()/1;
    	this.ifFalse	= globalManeuverModStr.val()/1;
    };
    
    this.draw = function(){
    	this.evidence();
    	globalManeuversFinalMod.val(addPlus(this.bonus));
    };
	
}

function pfFeatImproveManeuversBase(){
	this.inheritFrom = pfFeat;
    this.inheritFrom();
    this.ifTrue = 2;
    
}

function pfFeatImproveFight(){
	this.inheritFrom = pfFeatImproveManeuversBase;
    this.inheritFrom();
    this.id = 'lottare_migliorato';
    
    this.draw = function(){
    	this.evidence();
    	globalManeuversFeatGrapple.val(addPlus(this.bonus));
    };
}

function pfFeatImproveHighFight(){
	this.inheritFrom = pfFeatImproveManeuversBase;
    this.inheritFrom();
    this.id = 'lottare_superiore';
    this.ifTrue 	= 4;
    
    this.init = function(){
    	this.ifFalse 	= globalManeuversFeatGrapple.val()/1; 
    };
    
    this.draw = function(){
    	this.evidence();
    	globalManeuversFeatGrapple.val(addPlus(this.bonus));
    };
}

function pfFeatImproveTrip(){
	this.inheritFrom = pfFeatImproveManeuversBase;
    this.inheritFrom();
    this.id = 'sbilanciare_migliorato';
    
    this.draw = function(){
    	this.evidence();
    	globalManeuversFeatTrip.val(addPlus(this.bonus));
    };
}

function pfFeatImproveHighTrip(){
	this.inheritFrom = pfFeatImproveTrip;
    this.inheritFrom();
    this.id = 'sbilanciare_superiore';
    this.ifTrue 	= 4;
    
    this.init = function(){
    	this.ifFalse 	= globalManeuversFeatTrip.val()/1;
    };
    
}

function pfFeatImproveOverrun(){
	this.inheritFrom = pfFeatImproveManeuversBase;
    this.inheritFrom();
    this.id = 'oltrepassare_migliorato';
    
    this.draw = function(){
    	this.evidence();
    	globalManeuversFeatOverrun.val(addPlus(this.bonus));
    };
}

function pfFeatImproveHighOverrun(){
	this.inheritFrom = pfFeatImproveOverrun;
    this.inheritFrom();
    this.id = 'oltrepassare_superiore';
    this.ifTrue 	= 4;
    
    this.init = function(){
    	this.ifFalse 	= globalManeuversFeatOverrun.val()/1;
    };
}


/********************* AC FEATS ***********************/
function pfFeatFocusShield(){
	this.inheritFrom = pfFeat;
    this.inheritFrom();
    this.id = 'scudo_focalizzato';
    this.ifTrue 	= 1;
    this.ifFalse 	= 0;
    
    this.draw = function(){
    	this.evidence();
    	globalACShieldFocus.val(addPlus(this.bonus));
    	globalACShieldFocus.parent().attr('class',this.className);
    };
}

//INSERT FEATS in GLOBAL FEATS UPDATER
globalMovementFeatsList.push(new pfFeatAgile());

globalClassesFeatsList.push(new pfFeatLightningReflexes());
globalClassesFeatsList.push(new pfFeatImproveInitiative());

globalGenericFeatsList.push(new pfFeatRough());
globalGenericFeatsList.push(new pfFeatDodge());
globalACFeatsList.push(new pfFeatFocusShield());

globalSkillFeatsList.push(new pfFeatAcrobatics());
globalSkillFeatsList.push(new pfFeatAnimalAffinity());
globalSkillFeatsList.push(new pfFeatAllertness());
globalSkillFeatsList.push(new pfFeatAtletic());
globalSkillFeatsList.push(new pfFeatSelfMade());
globalSkillFeatsList.push(new pfFeatStealth());
globalSkillFeatsList.push(new pfFeatDisguise());
globalSkillFeatsList.push(new pfFeatSleightHand());
globalSkillFeatsList.push(new pfFeatDiplomacy());
globalSkillFeatsList.push(new pfFeatForceIntimidate());

//If a feat is the high version of a previous one, its good to put after the first one
globalManeuversFeatsList.push(new pfFeatCombatDefenceTrained());
globalManeuversFeatsList.push(new pfFeatImproveFight());
globalManeuversFeatsList.push(new pfFeatImproveHighFight());
globalManeuversFeatsList.push(new pfFeatManeuversAgile());
globalManeuversFeatsList.push(new pfFeatImproveOverrun());
globalManeuversFeatsList.push(new pfFeatImproveHighOverrun());
globalManeuversFeatsList.push(new pfFeatImproveTrip());
globalManeuversFeatsList.push(new pfFeatImproveHighTrip());


