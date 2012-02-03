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
	}
	
	this.evidence = function(){
		this.container = $('#td_'+this.id);
		this.container.addClass('featEvidence');
	}
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
	}
	this.draw = function(){
		this.evidence();
		globalFeatsBonusMovement.val(addPlus(this.bonus));
	}
}

globalMovementFeats.push(new pfAgile());