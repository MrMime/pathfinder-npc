<?php 
	
	//this is not a real Ajax called php. Its simply included in sheetForm.php to get the proper array of skills

			$skillKey = array('acrobatics',
							'appraise',
							'bluff',
							'climb',
							'craft',
							'diplomacy',
							'disable_device',
							'disguise',
							'escape_artist',
							'fly',
							'handle_animal',
							'heal',
							'intimidate',
							'knowledge_arcana',
							'knowledge_dungeoneering',
							'knowledge_engineering',
							'knowledge_geography',
							'knowledge_history',
							'knowledge_local',
							'knowledge_nature',
							'knowledge_nobility',	
							'knowledge_planes',
							'knowledge_religion',
							'knowledge_psionic',
							'linguistics',
							'perception',
							'perform',
							'profession',
							'ride',
							'sense_motive',
							'sleight_of_hand',
							'spellcraft',
							'stealth',
							'survival',
							'swim',
							'use_magic_device');

			$skillName = array('{acrobatics}',
							'{appraise}',
							'{bluff}',
							'{vlimb}',
							'{vraft}',
							'{diplomacy}',
							'{disable Device}',
							'{disguise}',
							'{escape Artist}',
							'{fly}',
							'{handle_animal}',
							'{heal}',
							'{intimidate}',
							'{knowledge_arcana}',
							'{knowledge_dungeoneering}',
							'{knowledge_engineering}',
							'{knowledge_geography}',
							'{knowledge_history}',
							'{knowledge_local}',
							'{knowledge_nature}',
							'{knowledge_nobility}',	
							'{knowledge_planes}',
							'{knowledge_religion}',
							'{knowledge_religion}',
							'{linguistics}',
							'{perception}',
							'{perform}',
							'{profession}',
							'{ride}',
							'{sense_motive}',
							'{sleight_of_hand}',
							'{spellcraft}',
							'{stealth}',
							'{survival}',
							'{swim}',
							'{use_magic_device}');

			$GLOBALS['skills'] = array_combine($skillKey,$skillName);


			
?>