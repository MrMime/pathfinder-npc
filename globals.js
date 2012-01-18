//****************************************************************//
//****************************************************************//
//************************     GLOBALS    ************************//
//****************************************************************//
//****************************************************************//
//****************************************************************//
//GLOBAL VARIABLES NOT RELATED
var gpfRace				= new pfHuman();
var gpfStats			= new pfStats(new Array(10,10,10,10,10,10));
var gpfAlignment	= new pfAlignment();
var gpfSize				= new pfSize();
var gpfCharacter 	= new pfCharacter();
var gpfSheet 			= new pfSheet();
var gpfArmor 			= new pfArmor();
var gpfShield			= new pfShield();

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

	
//PREPARING GLOBALS
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

//ARMOR CLASS GLOBALS
var globalACTotal;
var globalACFlatFooted;
var globalACTouch;
var globalACBase;
var globalACArmor;
var globalACShield;
var globalACSize;
var globalACNat;
var globalACFeats;
var globalACWis;
var globalACClass;
var globalACMagic;

//CLASSES GLOBALS
var globalClassLevels			= new Array(0,0,0,0,0);
var globalClassPreferred 	= new Array();
var globalClassTSF 				= new Array();
var globalClassTSR 				= new Array();
var globalClassTSW 				= new Array();
var globalClassBAB 				= new Array();

var globalC1Preferred;
var globalC2Preferred;
var globalC3Preferred;
var globalC4Preferred;
var globalC5Preferred;

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
    
    //ARMOR CLASS
    globalACTotal               = $('#acTotal');
    globalACFlatFooted          = $('#acFlatFooted');
    globalACTouch             	= $('#acTouch');
    globalACBase                = $('#acBase');
    globalACArmor               = $('#acArmor');
    globalACShield              = $('#acShield');    
    globalACSize                = $('#acSize');
    globalACNat                 = $('#acNat');
    globalACFeats               = $('#acFeats');
    globalACWis                 = $('#acWis');
    globalACClass               = $('#acClass');
    globalACMagic               = $('#acMagic');
    
    //CLASSES
		
		globalC1Preferred = $('#class00Preferred');
		globalC2Preferred = $('#class01Preferred');
		globalC3Preferred = $('#class02Preferred');
		globalC4Preferred = $('#class03Preferred');
		globalC5Preferred = $('#class04Preferred');
		
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
		
		globalClassPreferred 	= Array(globalC1Preferred,globalC2Preferred,globalC3Preferred,globalC4Preferred,globalC5Preferred);
		globalClassTSF 				= Array(globalC1TSF,globalC2TSF,globalC3TSF,globalC4TSF,globalC5TSF);
		globalClassTSR 				= Array(globalC1TSR,globalC2TSR,globalC3TSR,globalC4TSR,globalC5TSR);
		globalClassTSW 				= Array(globalC1TSW,globalC2TSW,globalC3TSW,globalC4TSW,globalC5TSW);
		globalClassBAB 				= Array(globalC1BAB,globalC2BAB,globalC3BAB,globalC4BAB,globalC5BAB);
}

