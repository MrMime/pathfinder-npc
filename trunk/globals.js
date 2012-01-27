//****************************************************************//
//****************************************************************//
//************************     GLOBALS    ************************//
//****************************************************************//
//****************************************************************//
//****************************************************************//
//GLOBAL VARIABLES NOT RELATED
var gpfRace				= new pfHuman();
var gpfStats			= new pfStats(new Array(10,10,10,10,10,10));
var gpfAlignment	    = new pfAlignment();
var gpfSize				= new pfSize();
var gpfCharacter 	    = new pfCharacter();
var gpfSheet 			= new pfSheet();
var gpfArmor 			= new pfArmor();
var gpfShield			= new pfShield();
var gpfManeuvers        = new pfManeuvers();
//Global specific data to allow other class knows what is happening
var globalCurrentMaxDex = 0; //is the current mod dex max (armor and shield may add penalty)
var globalMaxBab        = 0;
var globalLevel         = 0;
/*
var mainWeaponDamageType = "";
var mainWeaponCategory   = "";
var mainWeaponHands      = 1;
*/

//GLOBALS specific for class
var globalWarriorLevel  = 0;

var gpfMovement     = new pfMovement(); //done
var gpfInitiative   = new pfInitiative(); //done
var gpfAC           = new pfAC();

var globalRacesList 	= new Array();
var globalArmorList 	= new Array();
var globalShieldList 	= new Array();
var globalClassList 	= new Array();

var gpfClass01	= new pfClass();
var gpfClass02	= new pfClass();
var gpfClass03	= new pfClass();
var gpfClass04	= new pfClass();
var gpfClass05	= new pfClass();

var gpfWeapon   = new Array()
gpfWeapon[0] = new pfWeapon();
gpfWeapon[1] = new pfWeapon();
gpfWeapon[2] = new pfWeapon();
gpfWeapon[3] = new pfWeapon();
gpfWeapon[4] = new pfWeapon();

//GLOBALS RELATED TO HTML TAGS
var str; 
var cos;
var dex;
var int;
var wis;
var cha;

var modRaceStr;
var modRaceCos;
var modRaceDex;
var modRaceInt;
var modRaceWis;
var modRaceCha;
var modRaceCus;

var totalStr;
var totalCos;
var totalDex;
var totalInt;
var totalWis;
var totalCha;
var totalCus;


var totalModStr;
var totalModCos;
var totalModDex;
var totalModInt;
var totalModWis;
var totalModCha;

//MOVEMENT GLOBALS
var globalTotalMovement;
var globalRaceBaseMovement;
var globalArmorPenaltyMovement;
var globalBonusMovement1;
var globalBonusMovement2;
var globalItemMovement;
var globalClassBonusMovement;

//INITIATIVE GLOBALS
var globalInitTotal;
var globalInitModDex;
var globalInitImprove;
var globalInitClass;
var globalInitBonus1;
var globalInitBonus2;

//HP
var globalHPTotal;
var globalHPTotalFeats;

//ARMOR CLASS GLOBALS
var globalACTotal;
var globalACModDex;
var globalACFlatFooted;
var globalACTouch;
var globalACBase;
var globalACArmor;
var globalACArmorMagic;
var globalACShield;
var globalACSize;
var globalACNat;
var globalACNatMagic;
var globalACFeats;
var globalACWis;
var globalACClass;
var globalACOther;

//CLASSES GLOBALS
var globalClassLevels           = new Array(0,0,0,0,0);
var globalClassPreferred        = new Array();
var globalClassTSF 							= new Array();
var globalClassTSR 							= new Array();
var globalClassTSW 							= new Array();
var globalClassBAB 							= new Array();

var globalC1Preferred;
var globalC2Preferred;
var globalC3Preferred;
var globalC4Preferred;
var globalC5Preferred;

var globalC1PrefHP;
var globalC2PrefHP;
var globalC3PrefHP;
var globalC4PrefHP;
var globalC5PrefHP;

var globalC1PrefSkill;
var globalC2PrefSkill;
var globalC3PrefSkill;
var globalC4PrefSkill;
var globalC5PrefSkill;

var globalC1TSF;
var globalC2TSF;
var globalC3TSF;
var globalC4TSF;
var globalC5TSF;

var globalC1TSR;
var globalC2TSR;
var globalC3TSR;
var globalC4TSR;
var globalC5TSR;

var globalC1TSW;
var globalC2TSW;
var globalC3TSW;
var globalC4TSW;
var globalC5TSW;

var globalC1BAB;
var globalC2BAB;
var globalC3BAB;
var globalC4BAB;
var globalC5BAB;

//CLASSES TOTALS GLOBALS
var globalTotalTSF;
var globalTotalTSR;
var globalTotalTSW;

var globalExtraTSF;
var globalExtraTSR;
var globalExtraTSW;

var globalTotalTSFMod;
var globalTotalTSRMod;
var globalTotalTSWMod;

var globalTotalLevel;
var globalTotalBAB;

var globalRaceTSF;
var globalRaceTSR;
var globalRaceTSW;

//Maneuver TOTALS GLOBALS
var globalCMBTotal;
var globalCMDTotal;

var globalManeuverBAB;
var globalManeuverLevel;
var globalManeuversLevelBabMod;

var globalManeuverModDex;
var globalManeuversFinalMod;
var globalManeuverModStr;
var globalManeuverSize;
var globalManeuversBullRace;
var globalManeuversTripRace;

var globalManeuversDisarmWeapon;
var globalManeuversSunderWeapon;
var globalManeuversTripWeapon;

var globalDisarmCMBTotal; 
var globalTrickCMBTotal;
var globalBullCMBTotal;
var globalOverrunCMBTotal;
var globalStealCMBTotal;
var globalDragCMBTotal;
var globalTripCMBTotal;
var globalRepositionCMBTotal;
var globalGrappleCMBTotal;
var globalSunderCMBTotal;

var globalDisarmCMDTotal;  //DISARMARE
var globalTrickCMDTotal; //IMBROGLIARE
var globalBullCMDTotal; //SPINGERE
var globalOverrunCMDTotal; //OLTREPASSARE
var globalStealCMDTotal; //RUBARE
var globalDragCMDTotal; //TRASCINARE
var globalTripCMDTotal; //SBILANCIARE
var globalRepositionCMDTotal; //SPOSTARE
var globalGrappleCMDTotal; //LOTTARE
var globalSunderCMDTotal; //SPEZZARE

var globalManeuversFeatDisarm;
var globalManeuversFeatTrick;
var globalManeuversFeatBull;
var globalManeuversFeatOverrun;
var globalManeuversFeatSteal ;		
var globalManeuversFeatDrag;	
var globalManeuversFeatTrip;	
var globalManeuversFeatReposition;
var globalManeuversFeatGrapple;
var globalManeuversFeatSunder ;


//GLOBAL WEAPONS 
var globalWeaponAR                  = new Array();
var globalWeaponBAB                 = new Array();
var globalWeaponDamage              = new Array();
var globalWeaponType                = new Array();
var globalWeaponName                = new Array();
var globalWeaponHand                = new Array();
var globalWeaponFocus1              = new Array();
var globalWeaponFocus2              = new Array();
var globalWeaponSpec1               = new Array();
var globalWeaponSpec2               = new Array();
var globalWeaponAccuracy            = new Array();
var globalWeaponPerfect             = new Array();
var globalWeaponTrain               = new Array();
var globalWeaponClassAR             = new Array();
var globalWeaponClassDamage         = new Array();
var globalWeaponLevelAR             = new Array();
var globalWeaponLevelDamage         = new Array();
var globalWeaponMagic               = new Array();
var globalWeaponEnchantment         = new Array();

function setAll(){
	//ASSOCIATION BETWEEN GLOBALS AND HTML INPUTS
	
	//STATS
	str 		= $('#str');
	cos 		= $('#cos');
	dex 		= $('#dex');
	int 		= $('#int');
	wis 		= $('#wis');
	cha 		= $('#cha');
	
	totalModStr = $('#totalModStr');
	totalModCos = $('#totalModCos');
	totalModDex	= $('#totalModDex');
	totalModInt	= $('#totalModInt');
	totalModWis = $('#totalModWis');
	totalModCha = $('#totalModCha');
	
	modRaceStr 	= $('#modRaceStr');
	modRaceCos 	= $('#modRaceCos');
	modRaceDex 	= $('#modRaceDex');
	modRaceInt 	= $('#modRaceInt');
	modRaceWis 	= $('#modRaceWis');
	modRaceCha 	= $('#modRaceCha');
	modRaceCus 	= $('#modRaceCus');
	
	totalStr 	= $('#totalStr');
	totalCos 	= $('#totalCos');
	totalDex 	= $('#totalDex');
	totalInt 	= $('#totalInt');
	totalWis 	= $('#totalWis');
	totalCha 	= $('#totalCha');
	totalCus 	= $('#totalCus');
	
	//MOVEMENTS
	globalTotalMovement        = $('#movementTotal');
	globalRaceBaseMovement     = $('#raceBaseMovement');
	globalArmorPenaltyMovement = $('#armorMovementPenalty');
	globalBonusMovement1       = $('#movementBonus1');
	globalBonusMovement2       = $('#movementBonus2');
	globalItemMovement         = $('#movementItem');
	globalClassBonusMovement   = $('#classBonusMovement');
	
	//INITIATIVE
	globalInitTotal             = $('#initTotal');
	globalInitModDex            = $('#initModDex');
    globalInitImprove           = $('#initImprove');
    globalInitClass             = $('#initClass');
    globalInitBonus1            = $('#initBonus1');
    globalInitBonus2            = $('#initBonus2');
    
    //HP
    globalHPTotal								= $('#hpTotal');
    globalHPTotalFeats					= $('#hpTotalFeats');
    
    //ARMOR CLASS
    globalACTotal               = $('#acTotal');
    globalACModDex              = $('#acModDex');
    globalACFlatFooted          = $('#acFlatFooted');
    globalACTouch             	= $('#acTouch');
    globalACBase                = $('#acBase');
    globalACArmor               = $('#acArmor');
    globalACArmorMagic          = $('#acArmorMagic');
    globalACShield              = $('#acShield');    
    globalACSize                = $('#acSize');
    globalACNat                 = $('#acNat');
    globalACNatMagic						= $('#acNatMagic');
    globalACFeats               = $('#acFeats');
    globalACWis                 = $('#acWis');
    globalACClass               = $('#acClass');
    globalACOther								= $('#acOther');
        
    //CLASSES
		
		globalC1Preferred = $('#class00Preferred');
		globalC2Preferred = $('#class01Preferred');
		globalC3Preferred = $('#class02Preferred');
		globalC4Preferred = $('#class03Preferred');
		globalC5Preferred = $('#class04Preferred');
		
		globalC1PrefHP	= $('#class00PrefHP');
		globalC2PrefHP	= $('#class01PrefHP');
		globalC3PrefHP	= $('#class02PrefHP');
		globalC4PrefHP	= $('#class03PrefHP');
		globalC5PrefHP	= $('#class04PrefHP');
		
		globalC1PrefSkill	= $('#class00PrefSkill');
		globalC2PrefSkill	= $('#class01PrefSkill');
		globalC3PrefSkill	= $('#class02PrefSkill');
		globalC4PrefSkill	= $('#class03PrefSkill');
		globalC5PrefSkill	= $('#class04PrefSkill');
		
		globalC1TSF = $('#class00fortitude');
		globalC2TSF = $('#class01fortitude');
		globalC3TSF = $('#class02fortitude');
		globalC4TSF = $('#class03fortitude');
		globalC5TSF = $('#class04fortitude');
		
		globalC1TSR = $('#class00reflex');
		globalC2TSR = $('#class01reflex');
		globalC3TSR = $('#class02reflex');
		globalC4TSR = $('#class03reflex');
		globalC5TSR = $('#class04reflex');
		
		globalC1TSW = $('#class00will');
		globalC2TSW = $('#class01will');
		globalC3TSW = $('#class02will');
		globalC4TSW = $('#class03will');
		globalC5TSW = $('#class04will');
		
		globalC1BAB = $('#class00bab');
		globalC2BAB = $('#class01bab');
		globalC3BAB = $('#class02bab');
		globalC4BAB = $('#class03bab');
		globalC5BAB = $('#class04bab');
		
		globalClassPreferred 	    = Array(globalC1Preferred,globalC2Preferred,globalC3Preferred,globalC4Preferred,globalC5Preferred);
		globalClassTSF 				= Array(globalC1TSF,globalC2TSF,globalC3TSF,globalC4TSF,globalC5TSF);
		globalClassTSR 				= Array(globalC1TSR,globalC2TSR,globalC3TSR,globalC4TSR,globalC5TSR);
		globalClassTSW 				= Array(globalC1TSW,globalC2TSW,globalC3TSW,globalC4TSW,globalC5TSW);
		globalClassBAB 				= Array(globalC1BAB,globalC2BAB,globalC3BAB,globalC4BAB,globalC5BAB);
		
		globalTotalTSF = $('#totalTSF');
		globalTotalTSR = $('#totalTSR');
		globalTotalTSW = $('#totalTSW');
	  
		globalTotalTSFMod = $('#totalTSFMod');
		globalTotalTSRMod = $('#totalTSRMod');
		globalTotalTSWMod = $('#totalTSWMod');
		
		globalTotalLevel  = $('#totalLevel');
		globalTotalBAB	  = $('#totalBab');
		
		globalExtraTSF = $('#extraTSF');
		globalExtraTSR = $('#extraTSR');
		globalExtraTSW = $('#extraTSW');

		globalRaceTSF = $('#raceTSF');
		globalRaceTSR = $('#raceTSR');
		globalRaceTSW = $('#raceTSW');
		
		
		//MANEUVERS
		globalCMBTotal        = $('#CMBTotal');
		globalCMDTotal        = $('#CMDTotal');

		globalManeuverBAB             = $('#maneuversBAB');
		globalManeuverLevel           = $('#maneuversLevel');

		globalManeuverModDex          = $('#maneuversModDex');
		globalManeuverModStr          = $('#maneuversModStr');
		globalManeuversFinalMod       = $('#maneuversFinalMod');
		globalManeuverSize            = $('#maneuversSize');
		globalManeuversBullRace       = $('#maneuversBullRace');
		globalManeuversTripRace       = $('#maneuversTripRace');

		globalManeuversDisarmWeapon   = $('#maneuversDisarmWeapon');
		globalManeuversSunderWeapon   = $('#maneuversSunderWeapon');
		globalManeuversTripWeapon     = $('#maneuversTripWeapon');
		
		globalDisarmCMBTotal      = $('#disarmCMBTotal');  //DISARMARE
		globalTrickCMBTotal       = $('#trickCMBTotal'); //IMBROGLIARE
		globalBullCMBTotal        = $('#bullCMBTotal'); //SPINGERE
		globalOverrunCMBTotal     = $('#overrunCMBTotal'); //OLTREPASSARE
		globalStealCMBTotal       = $('#stealCMBTotal'); //RUBARE
		globalDragCMBTotal        = $('#dragCMBTotal'); //TRASCINARE
		globalTripCMBTotal        = $('#tripCMBTotal'); //SBILANCIARE
		globalRepositionCMBTotal  = $('#repositionCMBTotal'); //SPOSTARE
		globalGrappleCMBTotal     = $('#grappleCMBTotal'); //LOTTARE
		globalSunderCMBTotal      = $('#sunderCMBTotal'); //SPEZZARE
		
		globalDisarmCMDTotal      = $('#disarmCMDTotal');  //DISARMARE
		globalTrickCMDTotal       = $('#trickCMDTotal'); //IMBROGLIARE
		globalBullCMDTotal        = $('#bullCMDTotal'); //SPINGERE
		globalOverrunCMDTotal     = $('#overrunCMDTotal'); //OLTREPASSARE
		globalStealCMDTotal       = $('#stealCMDTotal'); //RUBARE
		globalDragCMDTotal        = $('#dragCMDTotal'); //TRASCINARE
		globalTripCMDTotal        = $('#tripCMDTotal'); //SBILANCIARE
		globalRepositionCMDTotal  = $('#repositionCMDTotal'); //SPOSTARE
		globalGrappleCMDTotal     = $('#grappleCMDTotal'); //LOTTARE
		globalSunderCMDTotal      = $('#sunderCMDTotal'); //SPEZZARE

		globalManeuversFeatDisarm         = $('#maneuversFeatDisarm');
		globalManeuversFeatTrick          = $('#maneuversFeatTrick');
		globalManeuversFeatBull           = $('#maneuversFeatBull');
		globalManeuversFeatOverrun        = $('#maneuversFeatOverrun');
		globalManeuversFeatSteal          = $('#maneuversFeatSteal');		
		globalManeuversFeatDrag           = $('#maneuversFeatDrag');	
		globalManeuversFeatTrip           = $('#maneuversFeatTrip');	
		globalManeuversFeatReposition     = $('#maneuversFeatReposition');
		globalManeuversFeatGrapple        = $('#maneuversFeatGrapple');
		globalManeuversFeatSunder         = $('#maneuversFeatSunder');
		
		globalManeuversLevelBabMod        = $('#maneuversLevelBabMod');
		
		//GLOBALS WEAPONS
		for (var i=1;i<6;i++){
		    globalWeaponAR[i-1]                  = $('#weapon0'+i+'AR');
		    globalWeaponBAB[i-1]                 = $('#weapon0'+i+'BAB');
            globalWeaponDamage[i-1]              = $('#weapon0'+i+'Damage');
            globalWeaponType[i-1]                = $('#weapon0'+i+'Type');
            globalWeaponName[i-1]                = $('#weapon0'+i+'Name');
            globalWeaponHand[i-1]                = $('#weapon0'+i+'Hand');
            globalWeaponFocus1 [i-1]             = $('#weapon0'+i+'Focus1');
            globalWeaponFocus2[i-1]              = $('#weapon0'+i+'Focus2');
            globalWeaponSpec1[i-1]               = $('#weapon0'+i+'Spec1');
            globalWeaponSpec2[i-1]               = $('#weapon0'+i+'Spec2');
            globalWeaponAccuracy[i-1]            = $('#weapon0'+i+'Accuracy');
            globalWeaponPerfect[i-1]             = $('#weapon0'+i+'Perfect');
            globalWeaponTrain[i-1]               = $('#weapon0'+i+'Train');
            globalWeaponClassAR[i-1]             = $('#weapon0'+i+'ClassAR');
            globalWeaponClassDamage[i-1]         = $('#weapon0'+i+'ClassDamage');
            globalWeaponLevelAR[i-1]             = $('#weapon0'+i+'LevelAR');
            globalWeaponLevelDamage[i-1]         = $('#weapon0'+i+'LevelDamage');
            globalWeaponMagic[i-1]               = $('#weapon0'+i+'Magic');
            globalWeaponEnchantment[i-1]         = $('#weapon0'+i+'Enchantment');
		    
		}
		
		
}

