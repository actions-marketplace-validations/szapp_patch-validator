export interface ExternalList {
  [key: string]: Record<string, string[]>
}

const basic = {
  CONTENT: [
    'INTTOSTRING',
    'FLOATTOSTRING',
    'FLOATTOINT',
    'INTTOFLOAT',
    'CONCATSTRINGS',
    'PRINT',
    'PRINTDEBUG',
    'PRINTSCREEN',
    'PRINTDIALOG',
    'PRINTDEBUGINST',
    'PRINTDEBUGINSTCH',
    'PRINTDEBUGCH',
    'PRINTMULTI',
    'EXITGAME',
    'PLAYVIDEO',
    'SETPERCENTDONE',
    'INTRODUCECHAPTER',
    'NPC_MEMORYENTRY',
    'NPC_MEMORYENTRYGUILD',
    'NPC_HASNEWS',
    'NPC_GETNEWSWITNESS',
    'NPC_GETNEWSOFFENDER',
    'NPC_GETNEWSVICTIM',
    'NPC_ISNEWSGOSSIP',
    'NPC_DELETENEWS',
    'NPC_GETGUILDATTITUDE',
    'NPC_GETACTIVESPELL',
    'NPC_GETACTIVESPELLCAT',
    'NPC_GETACTIVESPELLLEVEL',
    'NPC_SETACTIVESPELLINFO',
    'WLD_DETECTITEM',
    'WLD_DETECTPLAYER',
    'WLD_DETECTNPC',
    'WLD_DETECTNPCEX',
    'WLD_SETGUILDATTITUDE',
    'WLD_GETGUILDATTITUDE',
    'WLD_ISMOBAVAILABLE',
    'WLD_ISFPAVAILABLE',
    'WLD_ISNEXTFPAVAILABLE',
    'NPC_CREATESPELL',
    'NPC_LEARNSPELL',
    'NPC_HASITEMS',
    'NPC_GIVEITEM',
    'CREATEINVITEM',
    'CREATEINVITEMS',
    'NPC_GETINVITEM',
    'NPC_GETINVITEMBYSLOT',
    'NPC_REMOVEINVITEM',
    'NPC_REMOVEINVITEMS',
    'NPC_ISINSTATE',
    'NPC_WASINSTATE',
    'NPC_ISINROUTINE',
    'AI_SETNPCSTOSTATE',
    'NPC_HASDETECTEDNPC',
    'NPC_SETATTITUDE',
    'NPC_SETTEMPATTITUDE',
    'NPC_GETATTITUDE',
    'NPC_GETPERMATTITUDE',
    'NPC_CHANGEATTRIBUTE',
    'NPC_GETCOMRADES',
    'NPC_ISNEAR',
    'NPC_GETDISTTONPC',
    'NPC_GETDISTTOPLAYER',
    'NPC_GETDISTTOITEM',
    'NPC_GETDISTTOWP',
    'NPC_CANSEENPC',
    'NPC_CANSEENPCFREELOS',
    'NPC_CANSEEITEM',
    'NPC_ISPLAYER',
    'NPC_KNOWSPLAYER',
    'NPC_SETKNOWSPLAYER',
    'NPC_ISINFIGHTMODE',
    'NPC_ISAIMING',
    'NPC_STARTITEMREACTMODULES',
    'NPC_HASOFFERED',
    'EQUIPITEM',
    'NPC_SETTOFISTMODE',
    'NPC_SETTOFIGHTMODE',
    'NPC_ISDEAD',
    'AI_STARTSTATE',
    'AI_CONTINUEROUTINE',
    'NPC_GETSTATETIME',
    'NPC_SETSTATETIME',
    'AI_OUTPUT',
    'AI_OUTPUTSVM',
    'AI_OUTPUTSVM_OVERLAY',
    'AI_PLAYCUTSCENE',
    'AI_CANSEENPC',
    'AI_WAIT',
    'AI_WAITMS',
    'AI_WAITTILLEND',
    'AI_ALIGNTOWP',
    'AI_SETWALKMODE',
    'AI_PLAYANI',
    'AI_PLAYANIBS',
    'AI_GOTOWP',
    'AI_TELEPORT',
    'AI_GOTOITEM',
    'AI_GOTONPC',
    'AI_ALIGNTOFP',
    'AI_GOTOFP',
    'NPC_ISONFP',
    'AI_GOTONEXTFP',
    'AI_GOTOSOUND',
    'AI_TAKEITEM',
    'AI_DROPITEM',
    'AI_DRAWWEAPON',
    'AI_REMOVEWEAPON',
    'NPC_HASRANGEDWEAPONWITHAMMO',
    'NPC_HASEQUIPPEDWEAPON',
    'NPC_HASEQUIPPEDMELEEWEAPON',
    'NPC_HASEQUIPPEDRANGEDWEAPON',
    'NPC_HASEQUIPPEDARMOR',
    'NPC_HASREADIEDWEAPON',
    'NPC_HASREADIEDMELEEWEAPON',
    'NPC_HASREADIEDRANGEDWEAPON',
    'NPC_GETTRUEGUILD',
    'NPC_SETTRUEGUILD',
    'NPC_AREWESTRONGER',
    'NPC_GETTARGET',
    'NPC_GETNEXTTARGET',
    'NPC_ISNEXTTARGETAVAILABLE',
    'NPC_SETTARGET',
    'NPC_GETBODYSTATE',
    'NPC_HASBODYFLAG',
    'NPC_ISINCUTSCENE',
    'NPC_ISVOICEACTIVE',
    'NPC_GETDETECTEDMOB',
    'NPC_PLAYANI',
    'NPC_ISDETECTEDMOBOWNEDBYNPC',
    'NPC_ISDETECTEDMOBOWNEDBYGUILD',
    'WLD_GETMOBSTATE',
    'NPC_CLEARAIQUEUE',
    'INFOMANAGER_HASFINISHED',
    'AI_STOPPROCESSINFOS',
    'AI_PROCESSINFOS',
    'INFO_ADDCHOICE',
    'INFO_CLEARCHOICES',
    'NPC_KNOWSINFO',
    'NPC_CHECKINFO',
    'NPC_GIVEINFO',
    'NPC_GETTALENTSKILL',
    'NPC_GETTALENTVALUE',
    'NPC_SETTALENTSKILL',
    'NPC_SETTALENTVALUE',
    'TAL_CONFIGURE',
    'NPC_GETNEARESTWP',
    'NPC_GETNEXTWP',
    'NPC_ISWAYBLOCKED',
    'NPC_GETREADIEDWEAPON',
    'NPC_GETEQUIPPEDMELEEWEAPON',
    'NPC_GETEQUIPPEDRANGEDWEAPON',
    'NPC_GETEQUIPPEDARMOR',
    'AI_EQUIPBESTMELEEWEAPON',
    'AI_EQUIPBESTRANGEDWEAPON',
    'AI_EQUIPBESTARMOR',
    'AI_UNEQUIPWEAPONS',
    'AI_UNEQUIPARMOR',
    'AI_EQUIPARMOR',
    'AI_READYMELEEWEAPON',
    'AI_READYRANGEDWEAPON',
    'AI_TURNAWAY',
    'AI_TURNTONPC',
    'AI_WHIRLAROUND',
    'AI_WHIRLAROUNDTOSOURCE',
    'AI_TURNTOSOUND',
    'AI_QUICKLOOK',
    'AI_LOOKAT',
    'AI_LOOKATNPC',
    'AI_STOPLOOKAT',
    'AI_POINTAT',
    'AI_POINTATNPC',
    'AI_STOPPOINTAT',
    'AI_STANDUP',
    'AI_STANDUPQUICK',
    'AI_FLEE',
    'AI_AIMAT',
    'AI_STOPAIM',
    'AI_SHOOTAT',
    'AI_DEFEND',
    'AI_COMBATREACTTODAMAGE',
    'AI_READYSPELL',
    'AI_UNREADYSPELL',
    'NPC_HASSPELL',
    'AI_ATTACK',
    'AI_FINISHINGMOVE',
    'AI_DODGE',
    'AI_USEITEM',
    'AI_USEITEMTOSTATE',
    'NPC_REFUSETALK',
    'NPC_SETREFUSETALK',
    'AI_ASK',
    'AI_ASKTEXT',
    'AI_WAITFORQUESTION',
    'HLP_ISITEM',
    'HLP_GETINSTANCEID',
    'HLP_RANDOM',
    'HLP_STRCMP',
    'HLP_GETNPC',
    'HLP_ISVALIDNPC',
    'HLP_ISVALIDITEM',
    'SND_PLAY',
    'SND_PLAY3D',
    'SND_GETDISTTOSOURCE',
    'SND_ISSOURCENPC',
    'SND_ISSOURCEITEM',
    'NPC_CANSEESOURCE',
    'MIS_GETSTATUS',
    'MIS_SETSTATUS',
    'MIS_ONTIME',
    'LOG_CREATETOPIC',
    'LOG_ADDENTRY',
    'LOG_SETTOPICSTATUS',
    'MIS_ADDMISSIONENTRY',
    'MIS_REMOVEMISSION',
    'NPC_CHECKAVAILABLEMISSION',
    'NPC_CHECKRUNNINGMISSION',
    'NPC_CHECKOFFERMISSION',
    'MDL_SETVISUAL',
    'MDL_SETVISUALBODY',
    'MDL_APPLYOVERLAYMDS',
    'MDL_APPLYOVERLAYMDSTIMED',
    'MDL_REMOVEOVERLAYMDS',
    'MDL_APPLYRANDOMANI',
    'MDL_APPLYRANDOMANIFREQ',
    'MDL_SETMODELSCALE',
    'MDL_SETMODELFATNESS',
    'MDL_STARTFACEANI',
    'MDL_APPLYRANDOMFACEANI',
    'WLD_ISTIME',
    'WLD_GETDAY',
    'WLD_SETTIME',
    'WLD_INSERTNPC',
    'WLD_SPAWNNPCRANGE',
    'WLD_PLAYEFFECT',
    'WLD_REMOVENPC',
    'WLD_INSERTNPCANDRESPAWN',
    'WLD_INSERTITEM',
    'WLD_INSERTOBJECT',
    'WLD_REMOVEITEM',
    'WLD_EXCHANGEGUILDATTITUDES',
    'WLD_SETOBJECTROUTINE',
    'WLD_SETMOBROUTINE',
    'WLD_SENDTRIGGER',
    'WLD_SENDUNTRIGGER',
    'NPC_OWNEDBYNPC',
    'NPC_OWNEDBYGUILD',
    'AI_TAKEMOB',
    'AI_DROPMOB',
    'AI_USEMOB',
    'MOB_CREATEITEMS',
    'MOB_HASITEMS',
    'DOC_CREATE',
    'DOC_CREATEMAP',
    'DOC_SETPAGES',
    'DOC_SETPAGE',
    'DOC_SETFONT',
    'DOC_SETLEVEL',
    'DOC_SETMARGINS',
    'DOC_PRINTLINE',
    'DOC_PRINTLINES',
    'DOC_SHOW',
    'DOC_OPEN',
    'DOC_FONT',
    'DOC_PRINT',
    'DOC_MAPCOORDINATES',
    'TA',
    'TA_MIN',
    'TA_CS',
    'TA_BEGINOVERLAY',
    'TA_ENDOVERLAY',
    'TA_REMOVEOVERLAY',
    'NPC_EXCHANGEROUTINE',
    'RTN_EXCHANGE',
    'PERC_SETRANGE',
    'NPC_SETPERCTIME',
    'NPC_PERCENABLE',
    'NPC_PERCDISABLE',
    'NPC_SENDPASSIVEPERC',
    'NPC_SENDSINGLEPERC',
    'NPC_PERCEIVEALL',
    'WLD_ASSIGNROOMTOGUILD',
    'WLD_ASSIGNROOMTONPC',
    'WLD_GETPLAYERPORTALOWNER',
    'WLD_GETPLAYERPORTALGUILD',
    'WLD_GETFORMERPLAYERPORTALOWNER',
    'WLD_GETFORMERPLAYERPORTALGUILD',
    'NPC_ISPLAYERINMYROOM',
    'NPC_WASPLAYERINMYROOM',
    'HLP_CUTSCENEPLAYED',
  ],
  MENU: [
    'UPDATE_CHOICEBOX',
    'APPLY_OPTIONS_PERFORMANCE',
    'APPLY_OPTIONS_VIDEO',
    'APPLY_OPTIONS_AUDIO',
    'APPLY_OPTIONS_GAME',
    'APPLY_OPTIONS_CONTROLS',
    'PLAYVIDEO',
  ],
}

const G1 = {
  ...basic,
  CONTENT: basic['CONTENT'].concat(['AI_LOOKFORITEM']),
}

const G112 = {
  ...basic,
  CONTENT: basic['CONTENT'].concat([
    'PRINTSCREENCOLORED',
    'AI_PRINTSCREEN',
    'WLD_ISFPAVAILINRANGE',
    'WLD_ISNEXTFPAVAILINRANGE',
    'NPC_CLEARINVENTORY',
    'NPC_CANSEEITEMFREELOS',
    'NPC_GETWALKMODE',
    'NPC_ISINTERACTINGWITH',
    'WLD_GETINTERACTMOBSTATE',
    'AI_LOOKFORITEM',
    'AI_SND_PLAY',
    'AI_SND_PLAY3D',
    'WLD_INSERTITEMS',
    'NPC_GETMOBGUILD',
    'CREATEITEMINSLOT',
    'REMOVEITEMFROMSLOT',
    'AI_CREATEITEMINSLOT',
    'AI_REMOVEITEMFROMSLOT',
  ]),
}

const G130 = {
  ...basic,
  CONTENT: basic['CONTENT'].concat([
    'AI_PRINTSCREEN',
    'EXITSESSION',
    'PLAYVIDEOEX',
    'WLD_DETECTNPCEXATT',
    'NPC_CLEARINVENTORY',
    'NPC_GETHEIGHTTONPC',
    'NPC_GETLOOKATTARGET',
    'NPC_STOPANI',
    'AI_SND_PLAY',
    'AI_SND_PLAY3D',
    'WLD_ISRAINING',
    'WLD_STOPEFFECT',
    'AI_PLAYFX',
    'AI_STOPFX',
    'DOC_SETLEVELCOORDS',
    'NPC_ISINPLAYERSROOM',
    'NPC_GETPORTALOWNER',
    'NPC_GETPORTALGUILD',
    'GAME_INITGERMAN',
    'GAME_INITENGLISH',
  ]),
}

const G2 = {
  ...basic,
  CONTENT: basic['CONTENT'].concat([
    'AI_PRINTSCREEN',
    'EXITSESSION',
    'PLAYVIDEOEX',
    'NPC_GETLASTHITSPELLID',
    'NPC_GETLASTHITSPELLCAT',
    'NPC_GETACTIVESPELLISSCROLL',
    'WLD_DETECTNPCEXATT',
    'NPC_CLEARINVENTORY',
    'NPC_GETHEIGHTTONPC',
    'NPC_GETHEIGHTTOITEM',
    'NPC_GETLOOKATTARGET',
    'NPC_STOPANI',
    'AI_SND_PLAY',
    'AI_SND_PLAY3D',
    'NPC_ISDRAWINGWEAPON',
    'NPC_ISDRAWINGSPELL',
    'WLD_ISRAINING',
    'WLD_STOPEFFECT',
    'AI_PLAYFX',
    'AI_STOPFX',
    'DOC_SETLEVELCOORDS',
    'NPC_ISINPLAYERSROOM',
    'NPC_GETPORTALOWNER',
    'NPC_GETPORTALGUILD',
    'GAME_INITGERMAN',
    'GAME_INITENGLISH',
    'GAME_INITENGINTL',
  ]),
}

const list: ExternalList = {
  G1,
  G112,
  G130,
  G2,
}

export default list
