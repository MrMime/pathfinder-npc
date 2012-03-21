
function pfManeuvers(){
	//GENERIC MODIFIERS
	this.totalCMB  = 0;
	this.totalCMD  = 0;
	this.modDex    = 0;
	this.modStr    = 0;
	this.finalMod  = 0;
	this.finalLevelBabMod = 0;
	this.bab       = 0;
	this.level     = 0;
	this.raceMod   = 0;
	//SPECIFIC MODIFIERS
	this.bullRace  = 0;
	this.tripRace  = 0;
	this.size      = 0;
	this.disarmWeapon  = 0;
	this.sunderWeapon  = 0;
	this.tripWeapon    = 0;
	
	//TOTALS
	this.totalCMBDisarm        = 0;
	this.totalCMBTrick         = 0;
	this.totalCMBBull          = 0;
	this.totalCMBOverrun       = 0;
	this.totalCMBSteal         = 0;
	this.totalCMBDrag          = 0;
	this.totalCMBTrip          = 0;
	this.totalCMBReposition    = 0;
	this.totalCMBGrapple       = 0;
	this.totalCMBSunder        = 0;
	
	this.totalCMDDisarm        = 0;
    this.totalCMDTrick         = 0;
    this.totalCMDBull          = 0;
    this.totalCMDOverrun       = 0;
    this.totalCMDSteal         = 0;
    this.totalCMDDrag          = 0;
    this.totalCMDTrip          = 0;
    this.totalCMDReposition    = 0;
    this.totalCMDGrapple       = 0;
    this.totalCMDSunder        = 0;
    
    //FEATS MODIFIERS
	this.disarmFeat;
	this.trickFeat;
	this.bullFeat;
	this.overrunFeat;
	this.stealFeat;
	this.dragFeat;
	this.tripFeat;
	this.repositionFeat;
	this.grappleFeat;
	this.sunderFeat;
	
	this.update = function(){
	    this.finalMod  = globalManeuversFinalMod.val()/1;
	    this.modDex    = globalACModDex.val()/1;
	    this.modStr    = totalModStr.val()/1;
	    
	    this.size      = globalManeuverSize.val()/1;
        this.bab       = globalTotalBAB.val().split("/"); //total bab is a string like "+6/+1"
        this.bab       = parseInt(this.bab[0]);  //taking the hihest bab
	    this.level     = globalTotalLevel.val()/1;
	    
	    this.raceMod   = globalManeuversRaceMod.val()/1;
	    
	    var featLevelBabMod = globalManeuversLevelBabMod.val()/1;
	    //If == 0, no feat is selected to dedice wich bonus has to be applied
	    if (featLevelBabMod == 0){
            this.finalLevelBabMod = this.bab;
        }
        else {
            this.finalLevelBabMod = featLevelBabMod;
        }
	    
	    this.disarmWeapon  = globalManeuversDisarmWeapon.val()/1;
        this.sunderWeapon  = globalManeuversSunderWeapon.val()/1;
        this.tripWeapon    = globalManeuversTripWeapon.val()/1;
        
        this.bullRace       = globalManeuversBullRace.val()/1;
        this.tripRace       = globalManeuversTripRace.val()/1;
	    
	    this.disarmFeat     = globalManeuversFeatDisarm.val()/1;
        this.trickFeat      = globalManeuversFeatTrick.val()/1;
        this.bullFeat       = globalManeuversFeatBull.val()/1;
        this.overrunFeat    = globalManeuversFeatOverrun.val()/1;
        this.stealFeat      = globalManeuversFeatSteal.val()/1;
        this.dragFeat       = globalManeuversFeatDrag.val()/1 ;
        this.tripFeat       = globalManeuversFeatTrip.val()/1;
        this.repositionFeat = globalManeuversFeatReposition.val()/1;
        this.grappleFeat    = globalManeuversFeatGrapple.val()/1;
        this.sunderFeat     = globalManeuversFeatSunder.val()/1;
	    
	    this.totalCMB       = this.bab + this.finalMod + this.size + this.raceMod;
	    this.totalCMD       = 10 + this.finalLevelBabMod + this.modStr + this.modDex + this.size + this.raceMod;
	    
	    this.totalCMBDisarm        = this.totalCMB + this.disarmFeat + this.disarmWeapon;
        this.totalCMBTrick         = this.totalCMB + this.trickFeat;
        this.totalCMBBull          = this.totalCMB + this.bullFeat;
        this.totalCMBOverrun       = this.totalCMB + this.overrunFeat;
        this.totalCMBSteal         = this.totalCMB + this.stealFeat;
        this.totalCMBDrag          = this.totalCMB + this.dragFeat;
        this.totalCMBTrip          = this.totalCMB + this.tripFeat + this.tripWeapon;
        this.totalCMBReposition    = this.totalCMB + this.repositionFeat;
        this.totalCMBGrapple       = this.totalCMB + this.grappleFeat;
        this.totalCMBSunder        = this.totalCMB + this.sunderFeat + this.sunderWeapon;
        
        this.totalCMDDisarm        = this.totalCMD + this.disarmFeat;
        this.totalCMDTrick         = this.totalCMD + this.trickFeat;
        this.totalCMDBull          = this.totalCMD + this.bullFeat + this.bullRace;
        this.totalCMDOverrun       = this.totalCMD + this.overrunFeat;
        this.totalCMDSteal         = this.totalCMD + this.stealFeat;
        this.totalCMDDrag          = this.totalCMD + this.dragFeat;
        this.totalCMDTrip          = this.totalCMD + this.tripFeat + this.tripRace;
        this.totalCMDReposition    = this.totalCMD + this.repositionFeat;
        this.totalCMDGrapple       = this.totalCMD + this.grappleFeat;
        this.totalCMDSunder        = this.totalCMD + this.sunderFeat;
	 
	    this.draw();   
	};
	
	this.draw  =   function(){
	    globalManeuverModDex.val(addPlus(this.modDex));
	    globalManeuverModStr.val(addPlus(this.modStr));
	    globalManeuverBAB.val(addPlus(this.bab));
	    globalManeuverLevel.val(this.level);
	    globalManeuversFinalMod.val(addPlus(this.finalMod));
	    
	    globalCMBTotal.val(addPlus(this.totalCMB));
	    globalCMDTotal.val(addPlus(this.totalCMD));
	    
	    
	    globalDisarmCMBTotal.val(addPlus(this.totalCMBDisarm));    
        globalTrickCMBTotal.val(addPlus(this.totalCMBTrick));       
        globalBullCMBTotal.val(addPlus(this.totalCMBBull));        
        globalOverrunCMBTotal.val(addPlus(this.totalCMBOverrun));     
        globalStealCMBTotal.val(addPlus(this.totalCMBSteal));      
        globalDragCMBTotal.val(addPlus(this.totalCMBDrag));      
        globalTripCMBTotal.val(addPlus(this.totalCMBTrip));       
        globalRepositionCMBTotal.val(addPlus(this.totalCMBReposition));
        globalGrappleCMBTotal.val(addPlus(this.totalCMBGrapple));    
        globalSunderCMBTotal.val(addPlus(this.totalCMBSunder));     
        
        
        globalDisarmCMDTotal.val(addPlus(this.totalCMDDisarm));    
        globalTrickCMDTotal.val(addPlus(this.totalCMDTrick));       
        globalBullCMDTotal.val(addPlus(this.totalCMDBull));        
        globalOverrunCMDTotal.val(addPlus(this.totalCMDOverrun));     
        globalStealCMDTotal.val(addPlus(this.totalCMDSteal));      
        globalDragCMDTotal.val(addPlus(this.totalCMDDrag));      
        globalTripCMDTotal.val(addPlus(this.totalCMDTrip));       
        globalRepositionCMDTotal.val(addPlus(this.totalCMDReposition));
        globalGrappleCMDTotal.val(addPlus(this.totalCMDGrapple));    
        globalSunderCMDTotal.val(addPlus(this.totalCMDSunder));     
	};
	
	
}