function pfFeat(){
	this.check	 = null;
	this.checked = false;
	this.id	     = null;
	this.bonus 	 = 0;
	this.container = 0;
	
	this.checkStatus = function(){
		this.check = $('#'+this.id);
		this.checked = false;
		if (this.check.is(':checked'))
			this.checked = true;
	};
	
	this.evidence = function(){
		$('#'+this.id).parent().addClass('featEvidence');
	};
}

function pfFeatAgile()
{
	this.inheritFrom = pfFeat;
    this.inheritFrom();
	
	this.id ='agile';
	this.update = function(){
		this.checkStatus();
		if (this.checked  && globalCurrentArmorCategory == 'light') { 
			this.bonus = 1.5;
		}
		else { 
			this.bonus = 0; 
		}
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
	this.update = function(){
		this.checkStatus();
		if (this.checked) this.bonus = 2;
		else this.bonus = 0;
		this.draw();
	};
	
	this.draw = function(){
		this.evidence();
		globalFeatTSR.val(addPlus(this.bonus));
	};
	
}

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
    }
    
    this.draw = function(){
    	this.evidence();
    	$('#skillFeat'+this.skillName01).val(this.bonus[0]);
    	$('#skillFeat'+this.skillName02).val(this.bonus[1]);
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

function pfFeatImproveInitiative(){
	this.inheritFrom = pfFeat;
    this.inheritFrom();
    this.id = 'iniziativa_migliorata';
    
    this.update = function(){
    	this.checkStatus();
    	if (this.checked) {
    		globalInitImprove.val(4);
    	}
    	else {
    		globalInitImprove.val(0);
    	}
    	this.draw();
    }
    
    this.draw = function(){
    	this.evidence();
    	var className = (this.checked) ? 'center separated' : 'center';
    	globalInitImprove.parent().attr('class',className);
    };
    
}

function pfFeatCombatDefenceTrained(){
	this.inheritFrom = pfFeat;
    this.inheritFrom();
    this.id = 'addestramento_nel_combattimento_difensivo';
    
    this.update = function(){
    	this.checkStatus();
    	if (this.checked)
    		this.bonus = globalManeuverLevel.val();
    	else
    		this.bonus = 0;
    	this.draw();
    };
    
    this.draw = function(){
    	this.evidence();
    	globalManeuversLevelBabMod.val(this.bonus);
    	var className = (this.bonus != 0) ? 'center separated' : 'center';
    	globalManeuversLevelBabMod.parent().attr('class',className);
    	var className = (this.bonus != 0) ? 'center' : 'center separated';
    	globalManeuverBAB.parent().attr('class',className);
    }
}

function pfFeatImproveFight(){
	this.inheritFrom = pfFeat;
    this.inheritFrom();
    this.id = 'lottare_migliorato';
    
    this.update = function(){
    	this.checkStatus();
    	this.bonus = (this.checked) ? 2:0;
    	this.draw();
    }
    
    this.draw = function(){
    	this.evidence();
    	globalManeuversFeatGrapple.val(this.bonus);
    }
}

function pfFeatManeuversAgile(){
	this.inheritFrom = pfFeat;
    this.inheritFrom();
    this.id = 'manovre_agili';
    
    this.update = function(){
    	this.checkStatus();
    	this.bonus = (this.checked) ? globalManeuverModDex.val()/1 : globalManeuverModStr.val()/1;
    	this.draw();
    }
	
    this.draw = function(){
    	this.evidence();
    	globalManeuversFinalMod.val(addPlus(this.bonus));
    }
	
}

//INSERT FEATS in GLOBAL FEATS UPDATER
globalMovementFeatsList.push(new pfFeatAgile());
globalClassesFeatsList.push(new pfFeatLightningReflexes());
globalClassesFeatsList.push(new pfFeatImproveInitiative());
globalSkillFeatsList.push(new pfFeatAcrobatics());
globalSkillFeatsList.push(new pfFeatAnimalAffinity());
globalSkillFeatsList.push(new pfFeatAllertness());
globalSkillFeatsList.push(new pfFeatAtletic());
globalSkillFeatsList.push(new pfFeatSelfMade());
globalSkillFeatsList.push(new pfFeatStealth());
globalSkillFeatsList.push(new pfFeatDisguise());
globalSkillFeatsList.push(new pfFeatSleightHand());
globalManeuversFeatsList.push(new pfFeatCombatDefenceTrained());
globalManeuversFeatsList.push(new pfFeatImproveFight());
globalManeuversFeatsList.push(new pfFeatManeuversAgile());