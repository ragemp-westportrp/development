const NativeUI = require(patch + 'nativeui');
const Menu = NativeUI.Menu;
const UIMenuItem = NativeUI.UIMenuItem;
const Point = NativeUI.Point;

const vehicles = [
    "adder",
    "airbus",
    "airtug",
    "akula",
    "akuma",
    "alpha",
    "alphaz1",
    "ambulance",
    "annihilator",
    "apc",
    "ardent",
    "armytanker",
    "armytrailer",
    "armytrailer2",
    "asbo",
    "asea",
    "asea2",
    "asterope",
    "autarch",
    "avarus",
    "avenger",
    "avenger2",
    "bagger",
    "baletrailer",
    "baller",
    "baller2",
    "baller3",
    "baller4",
    "baller5",
    "baller6",
    "banshee",
    "banshee2",
    "barracks",
    "barracks2",
    "barracks3",
    "barrage",
    "bati",
    "bati2",
    "benson",
    "besra",
    "bestiagts",
    "bf400",
    "bfinjection",
    "biff",
    "bifta",
    "bison",
    "bison2",
    "bison3",
    "bjxl",
    "blade",
    "blazer",
    "blazer2",
    "blazer3",
    "blazer4",
    "blazer5",
    "blimp",
    "blimp2",
    "blimp3",
    "blista",
    "blista2",
    "blista3",
    "bmx",
    "boattrailer",
    "bobcatxl",
    "bodhi2",
    "bombushka",
    "boxville",
    "boxville2",
    "boxville3",
    "boxville4",
    "boxville5",
    "brawler",
    "brickade",
    "brioso",
    "bruiser",
    "bruiser2",
    "bruiser3",
    "brutus",
    "brutus2",
    "brutus3",
    "btype",
    "btype2",
    "btype3",
    "buccaneer",
    "buccaneer2",
    "buffalo",
    "buffalo2",
    "buffalo3",
    "bulldozer",
    "bullet",
    "burrito",
    "burrito2",
    "burrito3",
    "burrito4",
    "burrito5",
    "bus",
    "buzzard",
    "buzzard2",
    "cablecar",
    "caddy",
    "caddy2",
    "caddy3",
    "camper",
    "caracara",
    "caracara2",
    "carbonizzare",
    "carbonrs",
    "cargobob",
    "cargobob2",
    "cargobob3",
    "cargobob4",
    "cargoplane",
    "casco",
    "cavalcade",
    "cavalcade2",
    "cerberus",
    "cerberus2",
    "cerberus3",
    "cheburek",
    "cheetah",
    "cheetah2",
    "chernobog",
    "chimera",
    "chino",
    "chino2",
    "cliffhanger",
    "clique",
    "coach",
    "cog55",
    "cog552",
    "cogcabrio",
    "cognoscenti",
    "cognoscenti2",
    "comet2",
    "comet3",
    "comet4",
    "comet5",
    "contender",
    "coquette",
    "coquette2",
    "coquette3",
    "cruiser",
    "crusader",
    "cuban800",
    "cutter",
    "cyclone",
    "daemon",
    "daemon2",
    "deathbike",
    "deathbike2",
    "deathbike3",
    "defiler",
    "deluxo",
    "deveste",
    "deviant",
    "diablous",
    "diablous2",
    "dilettante",
    "dilettante2",
    "dinghy",
    "dinghy2",
    "dinghy3",
    "dinghy4",
    "dloader",
    "docktrailer",
    "docktug",
    "dodo",
    "dominator",
    "dominator2",
    "dominator3",
    "dominator4",
    "dominator5",
    "dominator6",
    "double",
    "drafter",
    "dubsta",
    "dubsta2",
    "dubsta3",
    "dukes",
    "dukes2",
    "dump",
    "dune",
    "dune2",
    "dune3",
    "dune4",
    "dune5",
    "duster",
    "dynasty",
    "elegy",
    "elegy2",
    "ellie",
    "emerus",
    "emperor",
    "emperor2",
    "emperor3",
    "enduro",
    "entity2",
    "entityxf",
    "esskey",
    "everon",
    "exemplar",
    "f620",
    "faction",
    "faction2",
    "faction3",
    "fagaloa",
    "faggio",
    "faggio2",
    "faggio3",
    "fbi",
    "fbi2",
    "fcr",
    "fcr2",
    "felon",
    "felon2",
    "feltzer2",
    "feltzer3",
    "firetruk",
    "fixter",
    "flashgt",
    "flatbed",
    "fmj",
    "forklift",
    "formula",
    "formula2",
    "fq2",
    "freecrawler",
    "freight",
    "freightcar",
    "freightcont1",
    "freightcont2",
    "freightgrain",
    "freighttrailer",
    "frogger",
    "frogger2",
    "fugitive",
    "furia",
    "furoregt",
    "fusilade",
    "futo",
    "gargoyle",
    "gauntlet",
    "gauntlet2",
    "gauntlet3",
    "gauntlet4",
    "gb200",
    "gburrito",
    "gburrito2",
    "glendale",
    "gp1",
    "graintrailer",
    "granger",
    "gresley",
    "gt500",
    "guardian",
    "habanero",
    "hakuchou",
    "hakuchou2",
    "halftrack",
    "handler",
    "hauler",
    "hauler2",
    "havok",
    "hellion",
    "hermes",
    "hexer",
    "hotknife",
    "hotring",
    "howard",
    "hunter",
    "huntley",
    "hustler",
    "hydra",
    "imorgon",
    "impaler",
    "impaler2",
    "impaler3",
    "impaler4",
    "imperator",
    "imperator2",
    "imperator3",
    "infernus",
    "infernus2",
    "ingot",
    "innovation",
    "insurgent",
    "insurgent2",
    "insurgent3",
    "intruder",
    "issi2",
    "issi3",
    "issi4",
    "issi5",
    "issi6",
    "issi7",
    "italigtb",
    "italigtb2",
    "italigto",
    "jackal",
    "jb700",
    "jb7002",
    "jester",
    "jester2",
    "jester3",
    "jet",
    "jetmax",
    "journey",
    "jugular",
    "kalahari",
    "kamacho",
    "kanjo",
    "khamelion",
    "khanjali",
    "komoda",
    "krieger",
    "kuruma",
    "kuruma2",
    "landstalker",
    "lazer",
    "le7b",
    "lectro",
    "lguard",
    "limo2",
    "locust",
    "lurcher",
    "luxor",
    "luxor2",
    "lynx",
    "mamba",
    "mammatus",
    "manana",
    "manchez",
    "marquis",
    "marshall",
    "massacro",
    "massacro2",
    "maverick",
    "menacer",
    "mesa",
    "mesa2",
    "mesa3",
    "metrotrain",
    "michelli",
    "microlight",
    "miljet",
    "minitank",
    "minivan",
    "minivan2",
    "mixer",
    "mixer2",
    "mogul",
    "molotok",
    "monroe",
    "monster",
    "monster3",
    "monster4",
    "monster5",
    "moonbeam",
    "moonbeam2",
    "mower",
    "mule",
    "mule2",
    "mule3",
    "mule4",
    "nebula",
    "nemesis",
    "neo",
    "neon",
    "nero",
    "nero2",
    "nightblade",
    "nightshade",
    "nightshark",
    "nimbus",
    "ninef",
    "ninef2",
    "nokota",
    "novak",
    "omnis",
    "oppressor",
    "oppressor2",
    "oracle",
    "oracle2",
    "osiris",
    "outlaw",
    "packer",
    "panto",
    "paradise",
    "paragon",
    "paragon2",
    "pariah",
    "patriot",
    "patriot2",
    "pbus",
    "pbus2",
    "pcj",
    "penetrator",
    "penumbra",
    "peyote",
    "peyote2",
    "pfister811",
    "phantom",
    "phantom2",
    "phantom3",
    "phoenix",
    "picador",
    "pigalle",
    "police",
    "police2",
    "police3",
    "police4",
    "policeb",
    "policeold1",
    "policeold2",
    "policet",
    "polmav",
    "pony",
    "pony2",
    "pounder",
    "pounder2",
    "prairie",
    "pranger",
    "predator",
    "premier",
    "primo",
    "primo2",
    "proptrailer",
    "prototipo",
    "pyro",
    "radi",
    "raiden",
    "raketrailer",
    "rallytruck",
    "rancherxl",
    "rancherxl2",
    "rapidgt",
    "rapidgt2",
    "rapidgt3",
    "raptor",
    "ratbike",
    "ratloader",
    "ratloader2",
    "rcbandito",
    "reaper",
    "rebel",
    "rebel2",
    "rebla",
    "regina",
    "rentalbus",
    "retinue",
    "retinue2",
    "revolter",
    "rhapsody",
    "rhino",
    "riata",
    "riot",
    "riot2",
    "ripley",
    "rocoto",
    "rogue",
    "romero",
    "rrocket",
    "rubble",
    "ruffian",
    "ruiner",
    "ruiner2",
    "ruiner3",
    "rumpo",
    "rumpo2",
    "rumpo3",
    "ruston",
    "s80",
    "sabregt",
    "sabregt2",
    "sadler",
    "sadler2",
    "sanchez",
    "sanchez2",
    "sanctus",
    "sandking",
    "sandking2",
    "savage",
    "savestra",
    "sc1",
    "scarab",
    "scarab2",
    "scarab3",
    "schafter2",
    "schafter3",
    "schafter4",
    "schafter5",
    "schafter6",
    "schlagen",
    "schwarzer",
    "scorcher",
    "scramjet",
    "scrap",
    "seabreeze",
    "seashark",
    "seashark2",
    "seashark3",
    "seasparrow",
    "seminole",
    "sentinel",
    "sentinel2",
    "sentinel3",
    "serrano",
    "seven70",
    "shamal",
    "sheava",
    "sheriff",
    "sheriff2",
    "shotaro",
    "skylift",
    "slamvan",
    "slamvan2",
    "slamvan3",
    "slamvan4",
    "slamvan5",
    "slamvan6",
    "sovereign",
    "specter",
    "specter2",
    "speeder",
    "speeder2",
    "speedo",
    "speedo2",
    "speedo4",
    "squalo",
    "stafford",
    "stalion",
    "stalion2",
    "stanier",
    "starling",
    "stinger",
    "stingergt",
    "stockade",
    "stockade3",
    "stratum",
    "streiter",
    "stretch",
    "strikeforce",
    "stromberg",
    "stryder",
    "stunt",
    "submersible",
    "submersible2",
    "sugoi",
    "sultan",
    "sultan2",
    "sultanrs",
    "suntrap",
    "superd",
    "supervolito",
    "supervolito2",
    "surano",
    "surfer",
    "surfer2",
    "surge",
    "swift",
    "swift2",
    "swinger",
    "t20",
    "taco",
    "tailgater",
    "taipan",
    "tampa",
    "tampa2",
    "tampa3",
    "tanker",
    "tanker2",
    "tankercar",
    "taxi",
    "technical",
    "technical2",
    "technical3",
    "tempesta",
    "terbyte",
    "tezeract",
    "thrax",
    "thrust",
    "thruster",
    "tiptruck",
    "tiptruck2",
    "titan",
    "torero",
    "tornado",
    "tornado2",
    "tornado3",
    "tornado4",
    "tornado5",
    "tornado6",
    "toro",
    "toro2",
    "toros",
    "tourbus",
    "towtruck",
    "towtruck2",
    "tr2",
    "tr3",
    "tr4",
    "tractor",
    "tractor2",
    "tractor3",
    "trailerlarge",
    "trailerlogs",
    "trailers",
    "trailers2",
    "trailers3",
    "trailers4",
    "trailersmall",
    "trailersmall2",
    "trash",
    "trash2",
    "trflat",
    "tribike",
    "tribike2",
    "tribike3",
    "trophytruck",
    "trophytruck2",
    "tropic",
    "tropic2",
    "tropos",
    "tug",
    "tula",
    "tulip",
    "turismo2",
    "turismor",
    "tvtrailer",
    "tyrant",
    "tyrus",
    "utillitruck",
    "utillitruck2",
    "utillitruck3",
    "vacca",
    "vader",
    "vagner",
    "vagrant",
    "valkyrie",
    "valkyrie2",
    "vamos",
    "velum",
    "velum2",
    "verlierer2",
    "vestra",
    "vigero",
    "vigilante",
    "vindicator",
    "virgo",
    "virgo2",
    "virgo3",
    "viseris",
    "visione",
    "volatol",
    "volatus",
    "voltic",
    "voltic2",
    "voodoo",
    "voodoo2",
    "vortex",
    "vstr",
    "warrener",
    "washington",
    "wastelander",
    "windsor",
    "windsor2",
    "wolfsbane",
    "xa21",
    "xls",
    "xls2",
    "yosemite",
    "yosemite2",
    "youga",
    "youga2",
    "z190",
    "zentorno",
    "zhaba",
    "zion",
    "zion2",
    "zion3",
    "zombiea",
    "zombieb",
    "zorrusso",
    "zr380",
    "zr3802",
    "zr3803",
    "ztype"
];

const maxCategory = 23;

// register custom user input title
mp.game.gxt.set("VSPAWNER_ENTER_MODEL", "Enter vehicle model name:");

// messes with chat because pressing T while using onscreen keyboard activates chat input
function getUserInput(maxLength) {
    mp.gui.chat.show(false);

    mp.game.gameplay.displayOnscreenKeyboard(1, "VSPAWNER_ENTER_MODEL", "", "", "", "", "", maxLength);
    while (mp.game.gameplay.updateOnscreenKeyboard() == 0) mp.game.wait(0);

    mp.gui.chat.show(false);
    return mp.game.gameplay.getOnscreenKeyboardResult();
}

// main menu
let mainMenu = new Menu("Vehicle Spawner", "", new Point(50, 50));
mainMenu.Visible = false;

mainMenu.ItemSelect.on((item, index) => {
    if (index === maxCategory) {
        let model = getUserInput(32);

        if (model.length > 0) {
            if (!mp.game.streaming.isModelAVehicle(mp.game.joaat(model))) {
                mp.gui.chat.push("Entered model was not a vehicle model.");
                return;
            }

            mp.events.callRemote("vspawner_Spawn", model);
        }
    } else {
        mainMenu.Visible = false;
        curCategory = index;
        categoryMenus[index].Visible = true;
        transition = true;
    }
});

let categoryMenus = [];
let curCategory = -1;
let transition = false;

// categories
for (let i = 0; i < maxCategory; i++) {
    const categoryTitle = mp.game.ui.getLabelText(`VEH_CLASS_${i}`);
    mainMenu.AddItem(new UIMenuItem(categoryTitle, ""));

    let categoryMenu = new Menu(categoryTitle, "", new Point(50, 50));
    categoryMenu.Visible = false;

    categoryMenu.ItemSelect.on((item, index) => {
        if (!transition) mp.events.callRemote("vspawner_Spawn", item.Text);
        transition = false;
    });

    categoryMenu.MenuClose.on(() => {
        curCategory = -1;
        mainMenu.Visible = true;
        mp.gui.chat.show(true);
        mp.gui.cursor.visible = false;
    });

    categoryMenus.push(categoryMenu);
}

// vehicles
for (let name of vehicles) {
    let vehicleHash = mp.game.joaat(name);
    let vehicleName = mp.game.ui.getLabelText(mp.game.vehicle.getDisplayNameFromVehicleModel(vehicleHash));
    let vehicleItem = new UIMenuItem(name, "");
    vehicleItem.SetRightLabel(vehicleName == "NULL" ? "" : vehicleName);
    categoryMenus[ mp.game.vehicle.getVehicleClassFromName(vehicleHash) ].AddItem(vehicleItem);
}

// spawn by model
mainMenu.AddItem(new UIMenuItem("Spawn by Model", "Write a vehicle model name to spawn it."));

// f4 key - toggle menu visibility
mp.keys.bind(0x73, false, () => {
    if (curCategory > -1) {
        categoryMenus[curCategory].Visible = !categoryMenus[curCategory].Visible;
    } else {
        mainMenu.Visible = !mainMenu.Visible;
        mp.gui.chat.show(false);
        mp.gui.cursor.visible = false;
    }
});