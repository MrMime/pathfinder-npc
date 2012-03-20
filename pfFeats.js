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
		this.container = $('#td_'+this.id);
		this.container.addClass('featEvidence');
	};
}

function pfAgile()
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

function pfLightningReflexes(){
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

function pfAcrobatics(){
	this.inheritFrom = pfFeat;
    this.inheritFrom();
    this.id = 'acrobatico';
    this.update = function(){
    	this.checkStatus();
    	this.bonus = new Array();
    	if (this.checked) {
    		this.bonus[0] = ($('#skillPointsacrobatics').val() >= 10) ? 4:2; 
    		this.bonus[1] = ($('#skillPointsfly').val() >= 10) ? 4:2;
    	}
    	else 
    		this.bonus = new Array(0,0);
    	this.draw();
    }
    this.draw = function(){
    	this.evidence();
    	$('#skillFeatacrobatics').val(this.bonus[0]);
    	$('#skillPointsfly').val(this.bonus[0]);
    };
}

function pfCombatDefenceTrained(){
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

//INSERT FEATS in GLOBAL FEATS UPDATER
globalMovementFeatsList.push(new pfAgile());
globalClassesFeatsList.push(new pfLightningReflexes());
globalSkillFeatsList.push(new pfAcrobatics());
globalManeuversFeatsList.push(new pfCombatDefenceTrained());
