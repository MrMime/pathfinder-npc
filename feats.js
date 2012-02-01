function pfFeat(){
	this.check	 = null;
	this.checked = false;
	this.id	     = null;
	this.bonus 	 = 0;
	
	this.checkStatus = function(){
		this.check = $('#'+this.id);
		this.checked = false;
		if (this.check.is(':checked'))
			this.checked = true;
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
		globalFeatsBonusMovement.val(addPlus(this.bonus));
	}
}

globalMovementFeats.push(new pfAgile());