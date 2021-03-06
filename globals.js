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
var globalCurrentMaxDex 	= 0; //is the current mod dex max (armor and shield may add penalty)
var globalMaxBab        	= 0;
var globalLevel         	= 0;
var	globalSkillPointsMax	= 0; //max skill point avaiable (sum of single class current skillpoint)
var globalCurrentRaceName   = "{human}";
var globalMaxExtraLanguage	= null;
//Globals to know what appening
var featsCols           	= 2;
var maxMulticlass			= 6;
var maxPrestigeClass		= 3;
var maxSupportedClass		= maxMulticlass + maxPrestigeClass;
var globalCurrentArmorCategory    = "light"; //current category of armor
var globalCurrentArmorSkillPenalty	= 0; //Usefull for Skills. Every skill will take this value to calculate total skill check
var globalLanguage; 
var globalStatsMods				  = new Array();
var globalClassesSkills			  = new Array();
var globalSkillPointAvaiable	  = 0; //Max point to distribuite (sum of classes skill point and bonus
var globalSkillPointUsed		  = 0; //Point already distribuited

var globalMaxCurrentLevelCasting  = 0;
var globalNumberSpellPerDay		  = new Array(0,0,0,0,0,0,0,0,0,0);
var gobalMaxLevelCasting		  = 0;
var globalKnowSpells			  = new Array(0,0,0,0,0,0,0,0,0,0);

//List of feats categorized by section influence
var globalSizeFeatsList       = new Array();
var globalRaceFeatsList       = new Array();
var globalStatsFeatsList      = new Array();
var globalClassesFeatsList    = new Array();
var globalMovementFeatsList   = new Array();
var globalACFeatsList         = new Array();
var globalInitFeatsList       = new Array();
var globalSkillFeatsList      = new Array();
var globalWeaponsFeatsList    = new Array();
var globalManeuversFeatsList  = new Array();
var globalGenericFeatsList	  = new Array();

//List of Skills
var globalSkillList			  	= new Array();
var globalRaceModSkill		  	= new Array();

//MANAGING TWO HANDS COMBAT
var globalSecondWeaponType           = "";
var globalMainWeapon                 = new pfWeapon();
var globalSecondWeapon               = new pfWeapon();
var globalMainWeaponFeatsCheck       = null;
var globalSecondWeaponFeatsCheck     = null;

//GLOBALS specific for class
var globalWarriorLevel  = 0;

var gpfMovement     = new pfMovement(); //done
var gpfInitiative   = new pfInitiative(); //done
var gpfAC           = new pfAC();

var globalRacesList 	= new Array();
var globalArmorList 	= new Array();
var globalShieldList 	= new Array();
var globalClassList 	= new Array();
var globalFeatsList     = new Array();

var gpfClasses = new Array();
//From 0 to maxMulticlass the object is pfClass
//above maxMulticlass the object is pfPcClass (prestige class)
for (var i=0;i<maxSupportedClass;i++){
	if (i < maxMulticlass)
		gpfClasses[i] = new pfClass();
	else 
		gpfClasses[i] = new pfPcClass();
}

var gpfClassesReference = new Array();
for (var i=maxMulticlass;i<maxSupportedClass;i++){
	gpfClassesReference[i] = 'none';
}

var gpfWeapon   = new Array();
gpfWeapon[0] = new pfWeapon();
gpfWeapon[1] = new pfWeapon();
gpfWeapon[2] = new pfWeapon();
gpfWeapon[3] = new pfWeapon();
gpfWeapon[4] = new pfWeapon();

//GLOBALS RELATED TO HTML TAGS
var strStat; 
var cosStat;
var dexStat;
var intStat;
var wisStat;
var chaStat;

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
var globalFeatsBonusMovement;

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
var globalACString;
var globalACTotal;
var globalACModDex;
var globalACFlatFooted;
var globalACTouch;
var globalACRace;
var globalACBase;
var globalACArmor;
var globalACArmorMagic;
var globalACShield;
var globalACShieldFocus; //to manage shield focus feat
var globalACSize;
var globalACNat;
var globalACNatMagic;
var globalACFeats;
var globalACWis;
var globalACClass;
var globalACOther;

//CLASSES GLOBALS
var globalClassLevels                       = new Array();
for (var i=0;i<maxSupportedClass;i++)
	globalClassLevels[i] = 0;
var globalClassPreferred                    = new Array();
var globalClassPrefHP                       = new Array();
var globalClassPrefSkill                    = new Array();
var globalClassTSF 							= new Array();
var globalClassTSR 							= new Array();
var globalClassTSW 							= new Array();
var globalClassBAB 							= new Array();
//this is used by prestige class to connect prestige class to a base class
//to allow, for example, the increase of spell casting level
var globalClassReference					= new Array(); 

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

var globalFeatTSF;
var globalFeatTSR;
var globalFeatTSW;

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
var globalWeaponRace                = new Array();
var globalWeaponDamage              = new Array();
var globalWeaponType                = new Array();
var globalWeaponName                = new Array();
var globalWeaponHand                = new Array();
var globalWeaponTwoHandCombat       = new Array();
var globalWeaponTwoHandPenalty      = new Array();
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

//GLOBAL SKILLS
var globalTotalSkillPointAvaiable;
var globalTotalSkillPointUsed;

/////////////////////////////////////////////////////////////////////////////////
/////					INIZIALIZAZTION                                    //////
/////////////////////////////////////////////////////////////////////////////////
function setAll(){
    globalLanguage = $('#language').val();
    
	//ASSOCIATION BETWEEN GLOBALS AND HTML INPUTS
	globalMaxExtraLanguage = $('#maxExtraLanguage');
	
	strStat 		= $('#str');
	cosStat 		= $('#cos');
	dexStat 		= $('#dex');
	intStat 		= $('#int');
	wisStat 		= $('#wis');
	chaStat 		= $('#cha');
	
	totalModStr = $('#totalModStr');
	totalModCos = $('#totalModCos');
	totalModDex	= $('#totalModDex');
	totalModInt	= $('#totalModInt');
	totalModWis = $('#totalModWis');
	totalModCha = $('#totalModCha');
	
	globalStatsMods["str"] = totalModStr;
	globalStatsMods["dex"] = totalModDex;
	globalStatsMods["cos"] = totalModCos;
	globalStatsMods["int"] = totalModInt;
	globalStatsMods["wis"] = totalModWis;
	globalStatsMods["cha"] = totalModCha;
	
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
	globalFeatsBonusMovement   = $('#featsBonusMovement');
	
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
    globalACString              = $('#ACString');
    globalACTotal               = $('#acTotal');
    globalACModDex              = $('#acModDex');
    globalACFlatFooted          = $('#acFlatFooted');
    globalACTouch             	= $('#acTouch');
    globalACRace				= $('#acRace');
    globalACBase                = $('#acBase');
    globalACArmor               = $('#acArmor');
    globalACArmorMagic          = $('#acArmorMagic');
    globalACShield              = $('#acShield');
    globalACShieldFocus         = $('#acShieldFocus');
    globalACSize                = $('#acSize');
    globalACNat                 = $('#acNat');
    globalACNatMagic			= $('#acNatMagic');
    globalACFeats               = $('#acFeats');
    globalACWis                 = $('#acWis');
    globalACClass               = $('#acClass');
    globalACOther				= $('#acOther');
        
    //CLASSES
    for (var i=0;i<maxSupportedClass;i++){
        globalClassPreferred[i]   = $('#class0'+i+'Preferred');
        globalClassPrefHP[i]      = $('#class0'+i+'PrefHP');
        globalClassPrefSkill[i]   = $('#class0'+i+'PrefSkill');
        globalClassTSF[i]         = $('#class0'+i+'fortitude');
        globalClassTSR[i]         = $('#class0'+i+'reflex');
        globalClassTSW[i]         = $('#class0'+i+'will');
        globalClassBAB[i]         = $('#class0'+i+'bab');
        globalClassReference[i]	  = $('#class0'+i+'reference');
    }
		
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
		
		globalFeatTSF	= $('#featTSF');
		globalFeatTSR	= $('#featTSR');
		globalFeatTSW	= $('#featTSW');
		
		
		//MANEUVERS
		globalCMBTotal        = $('#CMBTotal');
		globalCMDTotal        = $('#CMDTotal');
		globalManeuversRaceMod = $('#maneuversRaceMod');

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
		
		globalTotalSkillPointAvaiable	  		= $('#totalSkillPointAvaiable');
		globalTotalSkillPointUsed		  		= $('#totalSkillPointUsed');
		
		//GLOBALS WEAPONS
		for (var i=1;i<6;i++){
		    globalWeaponAR[i-1]                  = $('#weapon0'+i+'AR');
		    globalWeaponBAB[i-1]                 = $('#weapon0'+i+'BAB');
		    globalWeaponRace[i-1]				 = $('#weapon0'+i+'Race');
            globalWeaponDamage[i-1]              = $('#weapon0'+i+'Damage');
            globalWeaponType[i-1]                = $('#weapon0'+i+'Type');
            globalWeaponName[i-1]                = $('#weapon0'+i+'Name');
            globalWeaponHand[i-1]                = $('#weapon0'+i+'Hand');
            globalWeaponTwoHandCombat[i-1]       = $('#weapon0'+i+'TwoHandCombat');
            globalWeaponTwoHandPenalty[i-1]      = $('#weapon0'+i+'TwoHandPenalty');
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

