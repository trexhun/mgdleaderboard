const RAW_PLAYERS = [
    "trexhun", "Leviax", "BlasterLizard", "Krisz", "Andras9912", "KMJFIRE", "AlexayMarton", 
    "kreno", "TrickyBonkers", "IlIIlllIlIlI", "GgDashie", "arkwada", "Szilu", "mag", 
    "ItzVmark", "Zsombi", "NotDarpy", "vcss", "gBen", "capaxl", "kri5z", "DiceXD3", 
    "Airaga", "64x", "AceandBlast", "SuBZeRO555", "Somniare", "Bendzsu89", "bodza", 
    "Leves", "Gaaboor", "Lorserix", "DARTSY1", "TheTrueRdam", "BLASTAHGD", "KZD78", 
    "GrandpaTom", "AppleIdkPen", "LeverEnd", "TinyMapCreator", "neitie", "MechanicGD", 
    "Keselowski2", "Massck", "7riPlays", "Ephyaltes", "Valkai123", "KeCsan01", "tonkesz11", 
    "Beatyoco", "Zodacx", "MZeno07", "aTsukiakari", "szebo210", "N1mr0d", "nebulatic", 
    "Gouldberg", "Solerix", "Avlaboba", "m3ndel", "Teddyx", "LenjoyGD", "Pongix", 
    "PepsiBong", "punor", "zBiscuit", "JocX", "adniW", "malvin166", "DrakeX5", "TRraim", 
    "RazorGMD11", "oniel1117", "CringeLord GD", "PulseN1nja", "BenikeGamer", "PetiGyerek", 
    "Migam8", "nytroW", "Palinka", "Galaxygamer1m1", "kovigregi", "semi42", "AdamTheGreat02", 
    "Interferent", "6almas5let", "averiee", "macoh", "Nevgelen", "Teyyo", "lalimatyuss", 
    "Goxikolid", "zZiizZy", "VRTGq", "9767", "Pigys", "whoiskeve", "garlicisbald", 
    "Phan7xm", "krisztianw", "Frixnipe", "Firelia", "apeti", "Csavesz", "Daewe", 
    "DaeweDash", "MarkiXonGD", "matyi0", "Gerimatod", "O10one", "gergo123456", "chirpie", 
    "kaministorm", "wMixy", "Serpentical", "Shyze", "ShiveringStars0", "pPaarketta", "Morzsika",
    "Libakoptato", "Kisgrofo", "kacsloz", "GDWaterGMD", "BVviktor", "Bandi006", "BaloghRicsi",
    "Balint1117", "AtiDaNub", "rolidemuth", "ErkBG", "Dgyerek", "Marci56", "SenetianVnares",
    "Petry", "Lemuno", "M4rciii", "BinshipGD", "Skillfuldoge", "G3ri", "Karesz2000", "Aroner2006", "Cleeper1125",
    "reggae929", "zZokni", "skibidizeti69", "DrFert", "koloska80", "csabadash", "Asabii", "NimrodHun", "therichest",
    "matek2448", "Furoka", "MoonsterAlex", "matee312"
];

const HUNGARIAN_LEVELS_UNSORTED = [
    { name: "colorful born", id: "11640836", creator: "Palinka" },
    { name: "Spectrum Drop", id: "13792093", creator: "Palinka" },
    { name: "Unknown seas", id: "25711231", creator: "capaxl" },
    { name: "Skylake", id: "28940538", creator: "Palinka" },
    { name: "Disoriented", id: "54488483", creator: "krisz" },
    { name: "D y s a n i a", id: "57567541", creator: "krisz" },
    { name: "laguna", id: "55922858", creator: "Szilu" },
    { name: "Jeff", id: "55145261", creator: "Szilu" },
    { name: "Aether", id: "58658447", creator: "Szilu" },
    { name: "pasta", id: "58976047", creator: "Szilu" },
    { name: "Reigning Power", id: "56923112", creator: "Lorserix" },
    { name: "Kuki", id: "60215264", creator: "Szilu" },
    { name: "Superiority", id: "60415539", creator: "Lorserix" },
    { name: "sunder", id: "60765811", creator: "Szilu" },
    { name: "Parallaxis", id: "60973537", creator: "krisz" },
    { name: "Funkey", id: "61792084", creator: "krisz" },
    { name: "Machinery", id: "61792235", creator: "Lorserix" },
    { name: "jumiper", id: "60674995", creator: "Pongix" },
    { name: "Octarine", id: "62294737", creator: "Szilu" },
    { name: "Antiquity", id: "62537732", creator: "Lorserix" },
    { name: "Swwft", id: "62702124", creator: "Lorserix" },
    { name: "Flashbreaker", id: "56934502", creator: "capaxl" },
    { name: "Bright rush", id: "60940989", creator: "capaxl" },
    { name: "Citrom", id: "63445515", creator: "Lorserix" },
    { name: "FluNk", id: "63713427", creator: "Pongix" },
    { name: "Swamp of Swans", id: "63741773", creator: "Lorserix" },
    { name: "Wait For Me", id: "63852841", creator: "krisz" },
    { name: "BobTop", id: "64030931", creator: "Szilu" },
    { name: "True Fire", id: "64228495", creator: "Lorserix" },
    { name: "bitter", id: "64860179", creator: "Szilu" },
    { name: "kofola", id: "65048683", creator: "Szilu" },
    { name: "Fancy", id: "65546984", creator: "Lorserix" },
    { name: "very rainy level", id: "65639557", creator: "Szilu" },
    { name: "Pongix AdveNtures", id: "66538981", creator: "Pongix" },
    { name: "this is the track", id: "66682928", creator: "Pongix" },
    { name: "Hiver", id: "66717823", creator: "macoh" },
    { name: "snov", id: "66010642", creator: "krenogd" },
    { name: "Franchise", id: "67420165", creator: "krisz" },
    { name: "jumpIger", id: "67475773", creator: "Pongix" },
    { name: "Sparky", id: "67228346", creator: "Lorserix" },
    { name: "woOoO", id: "68131349", creator: "Zodacx" },
    { name: "glitcherer", id: "69223432", creator: "Szilu" },
    { name: "heLvan", id: "69052219", creator: "Pongix" },
    { name: "Blessing", id: "72710298", creator: "krisz" },
    { name: "Plump it up", id: "72413015", creator: "Pongix" },
    { name: "bHjflBrhObvgrHu", id: "72828395", creator: "krenogd" },
    { name: "make it", id: "68350875", creator: "macoh" },
    { name: "gYnter", id: "68286312", creator: "Pongix" },
    { name: "10HEX", id: "75199399", creator: "krenogd" },
    { name: "Despicable XX", id: "76142451", creator: "VRTGq" },
    { name: "Radioactive", id: "76260506", creator: "64x" },
    { name: "be gawne", id: "77312976", creator: "Szilu" },
    { name: "Ethereum", id: "77467098", creator: "krisz" },
    { name: "Final Battle", id: "8611862", creator: "Palinka" },
    { name: "Beautiful Dimension", id: "10058879", creator: "Palinka" },
    { name: "Sytrus", id: "9547559", creator: "Palinka" },
    { name: "HOME", id: "78367764", creator: "Migam8" },
    { name: "Resurgence", id: "78444747", creator: "Leviax" },
    { name: "Kalubinabi", id: "78489458", creator: "Pongix" },
    { name: "Glow Up", id: "79201271", creator: "Interferent" },
    { name: "Midnight", id: "79904901", creator: "64x" },
    { name: "Sakupen Circles", id: "79178142", creator: "krenogd" },
    { name: "64X ADVENTURES", id: "80011704", creator: "64x" },
    { name: "Nunri", id: "81107735", creator: "Szilu" },
    { name: "1HEX", id: "81880832", creator: "krenogd" },
    { name: "MEADOW", id: "82476291", creator: "krenogd" },
    { name: "fjWhfHeNmwj", id: "83673983", creator: "krenogd" },
    { name: "GW Hungary", id: "83236821", creator: "krenogd" },
    { name: "ThumpGrinder", id: "83434113", creator: "64x" },
    { name: "YOU GOTTA", id: "84355265", creator: "KMJFIRE" },
    { name: "REPETITION", id: "82367599", creator: "KMJFIRE" },
    { name: "KRENO DEFAULT MAP", id: "85552127", creator: "krenogd" },
    { name: "Fructus Seperatus", id: "85171538", creator: "ItzVmark" },
    { name: "HIDEAWAYYY", id: "85549357", creator: "KMJFIRE" },
    { name: "Astral Prism", id: "85624519", creator: "Szilu" },
    { name: "TouchDown", id: "86237239", creator: "Lorserix" },
    { name: "sorrov snovstorm", id: "86998656", creator: "krenogd" },
    { name: "Nokedlis Csirke", id: "86893952", creator: "krenogd" },
    { name: "VIRTUE", id: "87338911", creator: "krenogd" },
    { name: "POTENTIAL", id: "87550411", creator: "KMJFIRE" },
    { name: "Argentum", id: "68351414", creator: "Lorserix" },
    { name: "turbulence", id: "69097068", creator: "Szilu" },
    { name: "GANGIMARI", id: "85698971", creator: "64x" },
    { name: "Blue Drift", id: "87640664", creator: "Szilu" },
    { name: "KYOSHI", id: "88000913", creator: "KMJFIRE" },
    { name: "Reminiscence", id: "89041620", creator: "krenogd" },
    { name: "Rohadt Eletbe", id: "89171482", creator: "Szilu" },
    { name: "FLARELIGHTS", id: "89301259", creator: "KMJFIRE" },
    { name: "SGR 1806 20", id: "89081606", creator: "CringeLord GD" },
    { name: "CATAPULT", id: "89833134", creator: "krenogd" },
    { name: "WARNING ZONE", id: "89825940", creator: "KMJFIRE" },
    { name: "snovy landscape", id: "90172661", creator: "krenogd" },
    { name: "System", id: "88673149", creator: "Frixnipe" },
    { name: "FISH FISH GODMODE", id: "89807521", creator: "whoiskeve" },
    { name: "PUKIFING", id: "90213067", creator: "Szilu" },
    { name: "DIMOUT", id: "89577199", creator: "whoiskeve" },
    { name: "ZENIUXHASNOEYEBROWS", id: "90612222", creator: "KMJFIRE" },
    { name: "INNER CELL", id: "90888140", creator: "krenogd" },
    { name: "CringeStep", id: "90523485", creator: "CringeLord GD" },
    { name: "pupu", id: "90960310", creator: "Szilu" },
    { name: "UNCONDITIONAL", id: "91228641", creator: "krenogd" },
    { name: "Northern Sector", id: "90742274", creator: "krenogd" },
    { name: "THEARMYANTS", id: "91440624", creator: "KMJFIRE" },
    { name: "EFEU", id: "90267991", creator: "krenogd" },
    { name: "105 TIMETRAVL", id: "91974787", creator: "KMJFIRE" },
    { name: "LIE 2 ME", id: "91920373", creator: "KMJFIRE" },
    { name: "BREAKAWAY", id: "91967003", creator: "KMJFIRE" },
    { name: "Space Drifter", id: "92306694", creator: "krenogd" },
    { name: "open water", id: "92292854", creator: "krenogd" },
    { name: "Striker 2019", id: "91929602", creator: "krenogd" },
    { name: "Friendly", id: "92445166", creator: "krenogd" },
    { name: "BLOWLAND", id: "92715710", creator: "krenogd" },
    { name: "Aerodeck", id: "92752932", creator: "64x" },
    { name: "ELEVATE", id: "92276415", creator: "64x" },
    { name: "CITY", id: "93076605", creator: "KMJFIRE" },
    { name: "Haha Yippie", id: "93083895", creator: "krenogd" },
    { name: "KMJFIRE SIMPLE MAP", id: "93022408", creator: "KMJFIRE" },
    { name: "Hot Air", id: "93382584", creator: "64x" },
    { name: "SHIMMER", id: "93329363", creator: "KMJFIRE" },
    { name: "Polestar", id: "93580357", creator: "64x" },
    { name: "Glooming Burg", id: "93659978", creator: "Szilu" },
    { name: "Sherbet Sky", id: "93751864", creator: "64x" },
    { name: "ElectroBonkers", id: "93761830", creator: "TrickyBonkers" },
    { name: "Wacky McWhackface v2", id: "93019675", creator: "Szilu" },
    { name: "Nincs", id: "94057157", creator: "krenogd" },
    { name: "Subterranean Plant", id: "94116045", creator: "Szilu" },
    { name: "Heavy Cash", id: "94378236", creator: "Szilu" },
    { name: "Where Roads End", id: "94305588", creator: "64x" },
    { name: "Freezer", id: "94635913", creator: "Szilu" },
    { name: "supermode", id: "93958258", creator: "Daewe" },
    { name: "Arboretum", id: "94937722", creator: "64x" },
    { name: "Orgovany", id: "94969955", creator: "krenogd" },
    { name: "OVERCAST", id: "94841429", creator: "KMJFIRE" },
    { name: "Reedswamp", id: "95383756", creator: "64x" },
    { name: "Space Drifter II", id: "94713619", creator: "krenogd" },
    { name: "FALL WITH ME", id: "95727598", creator: "KMJFIRE" },
    { name: "Instinct", id: "96001777", creator: "krenogd" },
    { name: "rumumu", id: "94883295", creator: "Szilu" },
    { name: "BYPASS", id: "96187595", creator: "krenogd" },
    { name: "vulg", id: "96238040", creator: "Szilu" },
    { name: "nebular", id: "96504286", creator: "Szilu" },
    { name: "Epilouge", id: "96752458", creator: "Szilu" },
    { name: "Broken side", id: "96919956", creator: "NotDarpy" },
    { name: "mad bug", id: "96340087", creator: "krenogd" },
    { name: "Lyeg", id: "97155541", creator: "krenog" },
    { name: "Change", id: "94950277", creator: "NotDarpy" },
    { name: "Vivid memories", id: "96358359", creator: "NotDarpy" },
    { name: "concrete basin", id: "97452274", creator: "64x" },
    { name: "BLUR", id: "96410452", creator: "64x" },
    { name: "Ruined Tower", id: "97832190", creator: "BLASTAHGD" },
    { name: "Prologue", id: "97945595", creator: "Szilu" },
    { name: "Retro Space", id: "97787790", creator: "Pongix" },
    { name: "SNOWBOWL", id: "98070635", creator: "KMJFIRE" },
    { name: "Farewell", id: "98434290", creator: "BLASTAHGD" },
    { name: "Torn", id: "99607760", creator: "Szilu" },
    { name: "All i had", id: "99520426", creator: "NotDarpy" },
    { name: "I feel colorous", id: "89406811", creator: "krenogd" },
    { name: "HILLS", id: "96884529", creator: "KMJFIRE" },
    { name: "SIXTEEN", id: "100784500", creator: "KMJFIRE" },
    { name: "vivid daydream", id: "101934329", creator: "krenogd" },
    { name: "BMPmap", id: "99986024", creator: "9767" },
    { name: "Glowy Glowstorm", id: "102178139", creator: "Szilu" },
    { name: "HYPOTHETICAL", id: "102781083", creator: "KMJFIRE" },
    { name: "cube", id: "102921449", creator: "Pongix" },
    { name: "dBghFuhfBeuR", id: "93956657", creator: "krenogd" },
    { name: "umumur by", id: "103461927", creator: "Szilu" },
    { name: "mimosa", id: "103501269", creator: "by 64x" },
    { name: "i wish to be kreno", id: "103323134", creator: "krenogd" },
    { name: "right", id: "104098064", creator: "krenogd" },
    { name: "255 forint", id: "102954127", creator: "trexhun" },
    { name: "Voculized", id: "104172811", creator: "gBen" },
    { name: "station", id: "104187729", creator: "krenogd" },
    { name: "LAREA", id: "100037627", creator: "Daewe" },
    { name: "CLOUD CITY", id: "104439419", creator: "KMJFIRE" },
    { name: "Gravity Glide", id: "105050528", creator: "btwmag" },
    { name: "Ascension", id: "103265381", creator: "Frixnipe" },
    { name: "Elevating Elevator", id: "105005297", creator: "NotDarpy" },
    { name: "slinky", id: "105480279", creator: "krenogd" },
    { name: "Vaulted Heights", id: "105608980", creator: "btwmag" },
    { name: "DOWNTOWN", id: "105922898", creator: "KMJFIRE" },
    { name: "UPPIES", id: "106226014", creator: "btwmag" },
    { name: "Deserted Dunes", id: "106509446", creator: "krenogd" },
    { name: "paper flyer", id: "106578473", creator: "krenogd" },
    { name: "FLAMETHROWER", id: "106588541", creator: "krenogd" },
    { name: "rime ice desert", id: "106833389", creator: "64x" },
    { name: "limit", id: "106896121", creator: "krenogd" },
    { name: "flower field", id: "107010343", creator: "krenogd" },
    { name: "CLING", id: "107176342", creator: "btwmag" },
    { name: "Small Venture", id: "101937906", creator: "garlicisbald" },
    { name: "champagne", id: "107440260", creator: "64x" },
    { name: "la naither", id: "107401997", creator: "Szilu" },
    { name: "ARID", id: "107412405", creator: "KMJFIRE" },
    { name: "ECHOING SANDS", id: "90876323", creator: "64x" },
    { name: "Jumpy Jungel", id: "107561067", creator: "NotDarpy" },
    { name: "arch", id: "107842068", creator: "64x" },
    { name: "Rules", id: "97575899", creator: "NotDarpy" },
    { name: "Flipbreak", id: "107847446", creator: "btwmag" },
    { name: "KILL THE LIGHTS", id: "108163433", creator: "krenogd" },
    { name: "jumbo shrimp", id: "108525340", creator: "krenogd" },
    { name: "Miskolc", id: "108374637", creator: "gBen" },
    { name: "upwards", id: "108687228", creator: "krenogd" },
    { name: "BITTERSWEET", id: "108745134", creator: "KMJFIRE" },
    { name: "loveyoulessloveyoule", id: "108783618", creator: "VRTGq" },
    { name: "SleekTrials", id: "98070422", creator: "btwmag" },
    { name: "tombola", id: "108777485", creator: "trexhun" },
    { name: "Operation EVOLUTION", id: "108570682", creator: "Pongix" },
    { name: "dusk to dawn", id: "109566554", creator: "krenogd" },
    { name: "Savage", id: "109539965", creator: "NotDarpy" },
    { name: "Sandy Springs", id: "109589714", creator: "btwmag" },
    { name: "WALKWAY", id: "109735355", creator: "KMJFIRE" },
    { name: "Final Impact", id: "109748007", creator: "btwmag" },
    { name: "Aphotic", id: "109915836", creator: "Szilu" },
    { name: "dirt road", id: "109951281", creator: "64x" },
    { name: "ANTICIPATION", id: "110051475", creator: "KMJFIRE" },
    { name: "DJ BABY BENZ", id: "110268124", creator: "btwmag" },
    { name: "Yonder Sky Temple", id: "110360378", creator: "btwmag" },
    { name: "Swoopfield", id: "110452453", creator: "btwmag" },
    { name: "Dormant", id: "83543340", creator: "64x" },
    { name: "scorpion", id: "110774148", creator: "64x" },
    { name: "PERIHELION", id: "110881425", creator: "krenogd" },
    { name: "Desolate District", id: "110979458", creator: "btwmag" },
    { name: "Fading In", id: "110701202", creator: "garlicisbald" },
    { name: "Christmas Eve", id: "97931111", creator: "krisztianw" },
    { name: "Obselete", id: "111176564", creator: "Szilu" },
    { name: "Rythion", id: "88290385", creator: "CringeLord GD" },
    { name: "Budapest", id: "111248738", creator: "gBen" },
    { name: "selaphobia", id: "111249494", creator: "Pongix" },
    { name: "hungarikum", id: "111294342", creator: "trexhun" },
    { name: "signal", id: "111424728", creator: "krenogd" },
    { name: "100HEX", id: "96996017", creator: "krenogd" },
    { name: "Flipside Skyline", id: "111321868", creator: "btwmag" },
    { name: "late night walk", id: "111613717", creator: "Pongix" },
    { name: "15 darab szint", id: "111626765", creator: "krenogd" },
    { name: "Slips", id: "111785439", creator: "Szilu" },
    { name: "khalifa", id: "111935388", creator: "64x" },
    { name: "KMJFIRE BY KMJFIRE", id: "111943441", creator: "KMJFIRE" },
    { name: "FOREVER", id: "112025935", creator: "KMJFIRE" },
    { name: "NIGHTSCAPE", id: "112079491", creator: "KMJFIRE" },
    { name: "Rakott krumpli", id: "104172646", creator: "trexhun" },
    { name: "Stimmungsbilder", id: "112119035", creator: "Szilu" },
    { name: "realm", id: "112215178", creator: "krenogd" },
    { name: "Cloid", id: "94937825", creator: "Pongix" },
    { name: "NRG", id: "112344749", creator: "btwmag" },
    { name: "DXRK BLUE", id: "80798994", creator: "64x" },
    { name: "szilulu", id: "112578044", creator: "krenogd" },
    { name: "krenono", id: "112578043", creator: "Szilu" },
    { name: "diffract", id: "109516939", creator: "krenogd" },
    { name: "Oramel Carange", id: "108536076", creator: "Szilu" },
    { name: "snovglobe", id: "112832022", creator: "krenogd" },
    { name: "sznov by", id: "112751178", creator: "Szilu" },
    { name: "Anticlimax", id: "112488957", creator: "NotDarpy" },
    { name: "yep2025", id: "113654010", creator: "Szilu" },
    { name: "stroll", id: "113462340", creator: "krenogd" },
    { name: "GRIDLOCK MACHINE", id: "113572545", creator: "btwmag" },
    { name: "GLITTER", id: "114151888", creator: "KMJFIRE" },
    { name: "GREENHOUSE ZERO", id: "114251606", creator: "btwmag" },
    { name: "heyyeh", id: "110613015", creator: "Szilu" },
    { name: "EDGERUNNER", id: "113672255", creator: "KMJFIRE" },
    { name: "HSTORMHASNOMAIDENS", id: "94296909", creator: "KMJFIRE" },
    { name: "von altfrau", id: "114605082", creator: "Szilu" },
    { name: "Belial", id: "111799025", creator: "NotDarpy" },
    { name: "minden rendben", id: "114882183", creator: "trexhun" },
    { name: "Xupar", id: "114714146", creator: "Daewe" },
    { name: "SEVENTEEN", id: "115070574", creator: "KMJFIRE" },
    { name: "Dashing Speed", id: "115451587", creator: "NotDarpy" },
    { name: "Marquee", id: "115582977", creator: "btwmag" },
    { name: "Kreno Kaizo I", id: "115678378", creator: "krenogd" },
    { name: "egy hideg este", id: "115787473", creator: "trexhun" },
    { name: "allure", id: "115825602", creator: "Pigys" },
    { name: "Space Drifter iv", id: "116009035", creator: "Szilu" },
    { name: "Spraypaint", id: "116110332", creator: "btwmag" },
    { name: "Drift or Die", id: "114847662", creator: "Pigys" },
    { name: "Seal", id: "116618790", creator: "Szilu" },
    { name: "Pass By", id: "116387913", creator: "NotDarpy" },
    { name: "ROBTOP DROP", id: "116808488", creator: "KMJFIRE" },
    { name: "hard map", id: "117507843", creator: "Szilu" },
    { name: "Stellux", id: "113282836", creator: "gBen" },
    { name: "lebbencs leves", id: "117781836", creator: "trexhun" },
    { name: "sleeping city", id: "118284440", creator: "krenogd" },
    { name: "Backyard egg hunt", id: "103417219", creator: "Gerimatod" },
    { name: "Turtlefuzz", id: "118595185", creator: "Szilu" },
    { name: "INDEXERROR", id: "118246516", creator: "KMJFIRE" },
    { name: "HI TWIXIN", id: "117372340", creator: "KMJFIRE" },
    { name: "Zinnias", id: "118664283", creator: "btwmag" },
    { name: "Irodansu", id: "118291861", creator: "NotDarpy" },
    { name: "VENUS FLY TRAP", id: "116186742", creator: "KMJFIRE" },
    { name: "ne add fel", id: "118531509", creator: "trexhun" },
    { name: "cellulose", id: "116770383", creator: "Daewe" },
    { name: "Pale Visions", id: "115102215", creator: "NotDarpy" },
    { name: "serenity", id: "117081000", creator: "btwmag" },
    { name: "Gyor by", id: "119592149", creator: "gBen" },
    { name: "drift", id: "119573740", creator: "krenogd" },
    { name: "Strange Springs", id: "119885732", creator: "NotDarpy" },
    { name: "ESCHATON", id: "120104218", creator: "KMJFIRE" },
    { name: "adventure of light", id: "86803784", creator: "capaxl" },
    { name: "elveszve valahol", id: "120368532", creator: "trexhun" },
    { name: "53 Frost blh", id: "120278613", creator: "krenogd" },
    { name: "Voidpath", id: "121682682", creator: "Phan7xm" },
    { name: "Revo", id: "121682682", creator: "NotDarpy" },
    { name: "semmi sem ugyanaz", id: "122011251", creator: "trexhun" },
    { name: "GRN", id: "111076996", creator: "64x" },
    { name: "Enigma", id: "110028704", creator: "64x" },
    { name: "a walk in the park", id: "123332659", creator: "krenogd" },
    { name: "DRILL DIG", id: "123314092", creator: "btwmag" },
    { name: "Music level", id: "123498258", creator: "Szilu" },
    { name: "ENTER THE GRID", id: "123314320", creator: "btwmag" },
    { name: "Theque", id: "121266197", creator: "Firelia" },
    { name: "Specthys", id: "123501215", creator: "gBen" },
    { name: "Kumulonimbus", id: "122992192", creator: "NotDarpy" },
    { name: "THRU THE RED PLANET", id: "111077002", creator: "64x" },
    { name: "demon II", id: "122979017", creator: "Zodacx" },
    { name: "Koantaoh", id: "121727506", creator: "Szilu" },
    { name: "gear panic", id: "124340305", creator: "krenogd" },
    { name: "Solar Wind", id: "110028635", creator: "64x" },
    { name: "posion factory", id: "115324712", creator: "gergo123456" },
    { name: "Ohoo Highway", id: "124931788", creator: "Szilu" },
    { name: "Liminal Dystopia", id: "123726816", creator: "Pongix" },
    { name: "Manchester United", id: "116835676", creator: "Leves" },
    { name: "Blooming Haze", id: "125882496", creator: "gBen" },
    { name: "magyaroszaurusz", id: "126029753", creator: "trexhun" },
    { name: "Kamah", id: "125601191", creator: "NotDarpy" },
    { name: "mesmerize", id: "125762551", creator: "kreno" },
    { name: "birds i view", id: "126243788", creator: "kreno" },
    { name: "Treasure Isles", id: "126562348", creator: "NotDarpy" },
    { name: "Overworld", id: "124021936", creator: "semi42" },
    { name: "make or break", id: "126837424", creator: "mag" },
    { name: "like clockwork", id: "118993504", creator: "kreno" },
    { name: "isolate", id: "126969756", creator: "kreno" },
    { name: "1 egy almafa", id: "126979132", creator: "semi42" },
    { name: "Aeoff", id: "127217779", creator: "Szilu" },
    { name: "NEONDREAMS", id: "127375147", creator: "KMJFIRE" },
    { name: "INTERVAL", id: "127523283", creator: "KMJFIRE" },
    { name: "Fallen Sanctuary", id: "127577051", creator: "mag" },
    { name: "Orb Bypass", id: "127703785", creator: "kreno" },
    { name: "SKYLANE", id: "127777522", creator: "KMJFIRE" },
    { name: "AYY LMAO", id: "127943318", creator: "kreno" },
    { name: "distant", id: "128163607", creator: "kreno" }
];

const HUNGARIAN_PLAYERS = [...new Set(RAW_PLAYERS)]; 
const HUNGARIAN_LEVELS = HUNGARIAN_LEVELS_UNSORTED; 
const API_BASE = "https://gdbrowser.com/api/profile";
const MODERATORS = ["kreno", "mag"];

const categoryConfig = {
    stars: { 
        apiType: 'stars', 
        icon: '<img src="src/star.png" class="value-icon-img" alt="Stars">', 
        animColor: 'var(--color-stars)', 
        animIcon: '<img src="src/star.png" alt="Star">' 
    },
    hun_levels: { 
        apiType: 'levels', 
        icon: '<img src="src/safe.png" class="value-icon-img" alt="Levels">', 
        animColor: 'var(--color-levels)', 
        animIcon: '<img src="src/safe.png" alt="Level">' 
    },
    moons: { 
        apiType: 'moons', 
        icon: '<img src="src/moon.png" class="value-icon-img" alt="Moons">', 
        animColor: 'var(--color-moons)', 
        animIcon: '<img src="src/moon.png" alt="Moon">' 
    },
    diamonds: { 
        apiType: 'diamonds', 
        icon: '<img src="src/diamond.png" class="value-icon-img" alt="Diamonds">', 
        animColor: 'var(--color-diamonds)', 
        animIcon: '<img src="src/diamond.png" alt="Diamond">' 
    },
    usercoins: { 
        apiType: 'userCoins', 
        icon: '<img src="src/silvercoin.png" class="value-icon-img" alt="User Coins">', 
        animColor: 'var(--color-coins)', 
        animIcon: '<img src="src/silvercoin.png" alt="Coin">' 
    },
    demons: { 
        apiType: 'demons', 
        icon: '<img src="src/demon-hard.png" class="value-icon-img" alt="Demons">', 
        animColor: 'var(--color-demons)', 
        animIcon: '<img src="src/demon-hard.png" alt="Demon">' 
    },
    creator: { 
        apiType: 'cp', 
        icon: '<img src="src/creator_points.png" class="value-icon-img" alt="Creator Points">', 
        animColor: 'var(--color-creator)', 
        animIcon: '<img src="src/creator_points.png" alt="Hammer">' 
    }
};

let GLOBAL_PLAYER_DATA = null; 
let IS_FETCHING = false;
let currentCategoryType = 'stars';
let currentLevelPage = 0;
const levelsPerPage = 25;

let animationInterval;
const animContainer = document.getElementById('bg-animation-container');

function startBackgroundAnimation(category) {
    clearInterval(animationInterval);
    animContainer.innerHTML = '';
    const config = categoryConfig[category];
    if (!config) return;
    animationInterval = setInterval(() => { createFallingItem(config); }, 300);
}

function createFallingItem(config) {
    const item = document.createElement('div');
    item.classList.add('falling-item');
    
    // Mindig hópihe, de vegyesen használjuk a különböző FontAwesome stílusokat
    const snowType = Math.random();
    if (snowType < 0.33) {
        item.innerHTML = '<i class="fas fa-snowflake"></i>'; // Teli hópihe
    } else if (snowType < 0.66) {
        item.innerHTML = '<i class="far fa-snowflake"></i>'; // Üres hópihe
    } else {
        item.innerHTML = '<i class="fas fa-asterisk"></i>'; // Csillag alakú (sűrűbb hóhatás)
    }
    
    const left = Math.random() * 100;
    
    // LASSABB esés, hogy ne legyen zavaró, de folyamatos legyen
    const duration = Math.random() * 8 + 7; // 7 és 15 másodperc között
    
    // NAGYOBB méretek a kérésnek megfelelően
    // Most már 20px és 45px közötti méretűek lesznek
    const size = Math.random() * 25 + 20; 
    
    item.style.left = `${left}%`;
    item.style.animationDuration = `${duration}s`;
    item.style.fontSize = `${size}px`;
    item.style.width = `${size}px`;
    
    // Szín variáció: Tiszta fehér vagy nagyon halvány kék
    item.style.color = Math.random() > 0.8 ? '#e0f7fa' : '#ffffff';
    
    animContainer.appendChild(item);
    setTimeout(() => { item.remove(); }, duration * 1000);
}

async function fetchAllPlayers(playerList) {
    const batchSize = 15; 
    const delay = 1000; 
    let results = [];
    
    const refreshBtn = document.getElementById('force-refresh');
    if(refreshBtn) refreshBtn.disabled = true;
    
    for (let i = 0; i < playerList.length; i += batchSize) {
        const batch = playerList.slice(i, i + batchSize);
        updateLoadingText(`Adatok betöltése... (${i}/${playerList.length})`);
        
        const promises = batch.map(username => {
            const targetUrl = `${API_BASE}/${username}`;
            const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(targetUrl)}`;

            return fetch(proxyUrl)
                .then(res => {
                    if(!res.ok) return null; 
                    return res.json();
                })
                .catch(err => null);
        });
        
        const batchResults = await Promise.all(promises);
        results = results.concat(batchResults);

        if (i + batchSize < playerList.length) {
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }
    
    if(refreshBtn) refreshBtn.disabled = false;
    return results.filter(p => p !== null);
}

function updateLoadingText(text) {
    document.querySelectorAll('.loading-container').forEach(div => {
        if(div.style.display === 'block') {
            div.innerHTML = `<i class="fas fa-circle-notch"></i> ${text}`;
        }
    });
}

function loadIconsGradually() {
    const images = document.querySelectorAll('.lazy-skin[data-src]');
    images.forEach((img, index) => {
        setTimeout(() => {
            const realUrl = img.getAttribute('data-src');
            if (realUrl) {
                img.src = realUrl; 
                img.removeAttribute('data-src');
            }
        }, index * 50); 
    });
}

function generatePlayerCard(player, rank, value, iconHtml, borderColor) {
    const isTopThree = rank <= 3;
    const cardClass = `player-card ${isTopThree ? 'top-three' : ''} ${isTopThree ? 'rank-' + rank : ''}`;
    const nameClass = isTopThree ? 'top-three' : '';
    
    const styleAttr = borderColor ? `style="border-color: ${borderColor}; box-shadow: 0 0 10px ${borderColor}30;"` : '';

    let trophyHtml = '';
    if (rank === 1) trophyHtml = '<i class="fas fa-trophy trophy-icon"></i>';
    else if (rank === 2 || rank === 3) trophyHtml = '<i class="fas fa-medal trophy-icon"></i>';

    const formattedValue = new Intl.NumberFormat('en-US').format(value || 0);

    const glowVal = player.glow ? 1 : 0;
    const rawUrl = `https://gdbrowser.com/icon/${player.username}?icon=${player.icon}&col1=${player.col1}&col2=${player.col2}&glow=${glowVal}`;
    const cachedUrl = `https://wsrv.nl/?url=${encodeURIComponent(rawUrl)}&output=png&t=${Date.now()}`;

    let badgesHtml = '<div class="card-badges">';
    if (MODERATORS.includes(player.username)) {
         badgesHtml += '<img src="src/mod.png" class="badge-icon" title="Moderator" alt="Mod">';
    }
    if (player.cp > 0) {
         badgesHtml += '<img src="src/creator_points.png" class="badge-icon" title="Creator" alt="CP">';
    }
    badgesHtml += '</div>';

    return `
        <div class="${cardClass}" ${styleAttr} onclick="openModal('${player.username}')">
            ${badgesHtml}
            <div class="player-rank">#${rank}</div>
            <div class="player-info">
                ${trophyHtml}
                <img src="https://gdbrowser.com/icon/1" 
                        data-src="${cachedUrl}" 
                        class="player-skin lazy-skin" 
                        alt="${player.username}"
                        onerror="this.onerror=null; this.src='https://gdbrowser.com/icon/1';">
                <span class="player-name ${nameClass}" title="${player.username}">${player.username}</span>
            </div>
            
            <div class="player-value">
                ${iconHtml}
                <span>${formattedValue}</span>
            </div>
        </div>
    `;
}

function generateLevelCard(level, rank) {
    return `
        <div class="player-card" onclick="copyLevelId('${level.id}')">
            <div class="level-card-content">
                <div class="level-details">
                    <div class="level-name" title="${level.name}">${level.name}</div>
                    <div class="level-creator"><i class="fas fa-user-edit"></i> ${level.creator}</div>
                </div>
            </div>
            <div class="level-id-chip">ID: ${level.id}</div>
        </div>
    `;
}

function renderPlayers(players, category, searchTerm = "") {
    const grid = document.getElementById(`grid-${category}`);
    if (!grid) return;

    grid.innerHTML = '';

    if (category === 'hun_levels') {
        renderLevelPage(currentLevelPage, searchTerm);
        return;
    }

    let config = categoryConfig[category];
    let sortKey = config.apiType;
    let displayIcon = config.icon;
    let customColor = null;

    if (category === 'demons') {
        sortKey = 'demons'; 
        customColor = '#ff4040'; 
    }

    let sortedList = [...players].sort((a, b) => (b[sortKey] || 0) - (a[sortKey] || 0));

    let displayPlayers = sortedList.map((player, index) => ({
        ...player, 
        _realRank: index + 1 
    }));

    const cleanSearch = searchTerm ? searchTerm.trim().toLowerCase() : "";
    if (cleanSearch.length > 0) {
        displayPlayers = displayPlayers.filter(p => p.username.toLowerCase().includes(cleanSearch));
    } else {
        const limit = (category === 'creator') ? 40 : 50;
        displayPlayers = displayPlayers.slice(0, limit);
    }

    if (displayPlayers.length === 0) {
        grid.innerHTML = '<div class="empty-message">Nincs találat.</div>';
        return;
    }

    let htmlContent = '';
    displayPlayers.forEach((player) => {
        let val = player[sortKey];
        htmlContent += generatePlayerCard(player, player._realRank, val, displayIcon, customColor);
    });

    grid.innerHTML = htmlContent;
    loadIconsGradually();
}

function renderLevelPage(pageIndex, searchTerm = "") {
    const grid = document.getElementById('grid-hun_levels');
    if (!grid) return;
    
    let displayLevels = HUNGARIAN_LEVELS;
    const cleanSearch = searchTerm.trim().toLowerCase();

    if (cleanSearch.length > 0) {
        displayLevels = displayLevels.filter(l => 
            l.name.toLowerCase().includes(cleanSearch) || 
            l.creator.toLowerCase().includes(cleanSearch) ||
            l.id.includes(cleanSearch)
        );
    }

    const totalPages = Math.ceil(displayLevels.length / levelsPerPage);
    
    if (pageIndex < 0) pageIndex = 0;
    if (pageIndex >= totalPages && totalPages > 0) pageIndex = totalPages - 1;
    currentLevelPage = pageIndex;

    const startIndex = pageIndex * levelsPerPage;
    const endIndex = startIndex + levelsPerPage;
    const pageItems = displayLevels.slice(startIndex, endIndex);

    if (pageItems.length === 0) {
        grid.innerHTML = '<div class="empty-message">Nincs találat.</div>';
        updatePaginationControls(0, 0);
        return;
    }

    let htmlContent = '';
    pageItems.forEach((lvl, index) => {
        const globalRank = startIndex + index + 1;
        htmlContent += generateLevelCard(lvl, globalRank);
    });
    grid.innerHTML = htmlContent;
    
    updatePaginationControls(currentLevelPage + 1, totalPages);
}

function updatePaginationControls(current, total) {
    const ids = ['top', 'bottom'];
    ids.forEach(pos => {
        const prevBtn = document.getElementById(`prev-page-${pos}`);
        const nextBtn = document.getElementById(`next-page-${pos}`);
        const indicator = document.getElementById(`page-indicator-${pos}`);
        const container = document.getElementById(`pagination-${pos}`);

        if (total <= 1) {
            container.style.display = 'none';
        } else {
            container.style.display = 'flex';
            indicator.innerText = `${current} / ${total}`;
            prevBtn.disabled = current <= 1;
            nextBtn.disabled = current >= total;
        }
    });
}

['top', 'bottom'].forEach(pos => {
    const prevBtn = document.getElementById(`prev-page-${pos}`);
    const nextBtn = document.getElementById(`next-page-${pos}`);
    
    if(prevBtn) {
        prevBtn.addEventListener('click', () => {
            renderLevelPage(currentLevelPage - 1, document.getElementById('player-search').value);
            window.scrollTo({ top: document.getElementById('hun_levels').offsetTop - 100, behavior: 'smooth' });
        });
    }
    if(nextBtn) {
        nextBtn.addEventListener('click', () => {
            renderLevelPage(currentLevelPage + 1, document.getElementById('player-search').value);
            window.scrollTo({ top: document.getElementById('hun_levels').offsetTop - 100, behavior: 'smooth' });
        });
    }
});

function openModal(username) {
    const playerData = GLOBAL_PLAYER_DATA.find(p => p.username === username);
    if (!playerData) return;

    const modalBody = document.getElementById('modal-body');
    
    const getRank = (statKey) => {
        const sorted = [...GLOBAL_PLAYER_DATA].sort((a, b) => (b[statKey] || 0) - (a[statKey] || 0));
        return sorted.findIndex(p => p.username === username) + 1;
    };

    const rankStars = getRank('stars');
    const rankMoons = getRank('moons');
    const rankDiamonds = getRank('diamonds');
    const rankCoins = getRank('userCoins');
    const rankDemons = getRank('demons');
    const rankCp = getRank('cp');

    const getIconUrl = (formName, iconIndex) => {
        const glowVal = playerData.glow ? 1 : 0;
        const rawUrl = `https://gdbrowser.com/icon/${playerData.username}?form=${formName}&icon=${iconIndex}&col1=${playerData.col1}&col2=${playerData.col2}&glow=${glowVal}`;
        return `https://wsrv.nl/?url=${encodeURIComponent(rawUrl)}&output=png&t=${Date.now()}&n=-1`;
    };
    
    const mainIconUrl = getIconUrl('icon', playerData.icon);

    const vehiclesArr = [
        { name: 'Cube', form: 'icon', prop: 'icon' },
        { name: 'Ship', form: 'ship', prop: 'ship' },
        { name: 'Ball', form: 'ball', prop: 'ball' },
        { name: 'UFO', form: 'ufo', prop: 'ufo' },
        { name: 'Wave', form: 'wave', prop: 'wave' },
        { name: 'Robot', form: 'robot', prop: 'robot' },
        { name: 'Spider', form: 'spider', prop: 'spider' },
        { name: 'Swing', form: 'swing', prop: 'swing' },
        { name: 'Jetpack', form: 'jetpack', prop: 'jetpack' }
    ];

    let socialLinksHtml = '';
    if (playerData.youtube) {
        const ytUrl = playerData.youtube.startsWith('UC') 
            ? `https://www.youtube.com/channel/${playerData.youtube}` 
            : `https://www.youtube.com/@${playerData.youtube}`;
            
        socialLinksHtml += `
            <a href="${ytUrl}" target="_blank" class="social-link" title="YouTube Channel">
                <img src="src/youtube.png" alt="YouTube" class="social-icon-img">
            </a>`;
    }
    if (playerData.twitch) {
        socialLinksHtml += `
            <a href="https://www.twitch.tv/${playerData.twitch}" target="_blank" class="social-link" title="Twitch Stream">
                <img src="src/twitch.png" alt="Twitch" class="social-icon-img">
            </a>`;
    }

    let nameBadges = '';
    if (MODERATORS.includes(playerData.username)) {
        nameBadges += '<img src="src/mod.png" class="modal-badge" title="Moderator" alt="Mod">';
    }
    if (playerData.cp > 0) {
        nameBadges += '<img src="src/creator_points.png" class="modal-badge" title="Creator" alt="CP">';
    }

    modalBody.innerHTML = `
        <div class="modal-header-user">
            <img src="${mainIconUrl}" alt="${playerData.username}" class="modal-main-icon">
            <div class="modal-header-content">
                <h2 class="modal-username">${playerData.username} ${nameBadges}</h2>
            </div>
        </div>

        <div id="tab-stats" style="display: block;">
            <div class="modal-subtitle"><i class="fas fa-info-circle me-2"></i>Statistics</div>
            <div class="modal-stats-grid">
                <div class="modal-stat-item" style="color: var(--color-stars);">
                    <div class="modal-stat-val-group"><img src="src/star.png" class="value-icon-img"> ${new Intl.NumberFormat().format(playerData.stars)} Stars</div>
                    <span class="modal-stat-rank">#${rankStars}</span>
                </div>
                <div class="modal-stat-item" style="color: var(--color-moons);">
                    <div class="modal-stat-val-group"><img src="src/moon.png" class="value-icon-img"> ${new Intl.NumberFormat().format(playerData.moons)} Moons</div>
                    <span class="modal-stat-rank">#${rankMoons}</span>
                </div>
                <div class="modal-stat-item" style="color: var(--color-diamonds);">
                    <div class="modal-stat-val-group"><img src="src/diamond.png" class="value-icon-img"> ${new Intl.NumberFormat().format(playerData.diamonds)} Diamonds</div>
                    <span class="modal-stat-rank">#${rankDiamonds}</span>
                </div>
                <div class="modal-stat-item" style="color: var(--color-coins);">
                    <div class="modal-stat-val-group"><img src="src/silvercoin.png" class="value-icon-img"> ${new Intl.NumberFormat().format(playerData.userCoins)} User Coins</div>
                    <span class="modal-stat-rank">#${rankCoins}</span>
                </div>
                <div class="modal-stat-item" style="color: var(--color-demons);">
                    <div class="modal-stat-val-group"><img src="src/demon-hard.png" class="value-icon-img"> ${new Intl.NumberFormat().format(playerData.demons)} Demons</div>
                    <span class="modal-stat-rank">#${rankDemons}</span>
                </div>
                <div class="modal-stat-item" style="color: var(--color-creator);">
                    <div class="modal-stat-val-group"><img src="src/creator_points.png" class="value-icon-img"> ${new Intl.NumberFormat().format(playerData.cp)} Creator Points</div>
                    <span class="modal-stat-rank">#${rankCp}</span>
                </div>
            </div>

            <div class="modal-icons-container">
                 <div class="modal-subtitle"><i class="fas fa-shapes me-2"></i>Icon Set</div>
                 <div class="icon-set-row">
                    ${vehiclesArr.map(v => `
                        <div class="icon-set-item" title="${v.name}">
                            <img src="${getIconUrl(v.form, playerData[v.prop])}" alt="${v.name}">
                            <span class="icon-label">${v.name}</span>
                        </div>
                    `).join('')}
                 </div>
            </div>
            
            <div class="modal-socials">
                 ${socialLinksHtml}
            </div>
        </div>
    `;

    document.getElementById('profile-modal').style.display = 'flex';
    document.body.classList.add('modal-open');
}

async function handleCategoryChange(category) {
    currentCategoryType = category;
    
    const grid = document.getElementById(`grid-${category}`);
    const loading = document.getElementById(`loading-${category}`);
    const searchInput = document.getElementById('player-search');

    if(loading) loading.style.display = 'block';
    
    try {
        if (category === 'hun_levels') {
             if(loading) loading.style.display = 'none';
             currentLevelPage = 0;
             renderPlayers([], category, searchInput ? searchInput.value : "");
             return;
        }

        if (!GLOBAL_PLAYER_DATA) {
            if (!IS_FETCHING) {
                IS_FETCHING = true;
                const data = await fetchAllPlayers(HUNGARIAN_PLAYERS);
                if (data.length === 0) throw new Error("Üres lista jött vissza");
                GLOBAL_PLAYER_DATA = data;
                IS_FETCHING = false;
            } else {
                while(IS_FETCHING) await new Promise(r => setTimeout(r, 500));
            }
        }

        if(GLOBAL_PLAYER_DATA && GLOBAL_PLAYER_DATA.length > 0) {
            const currentSearchTerm = searchInput ? searchInput.value.trim() : "";
            renderPlayers(GLOBAL_PLAYER_DATA, category, currentSearchTerm);
        }

    } catch (error) {
        console.error(error);
        if(grid) {
            grid.innerHTML = `
                <div class="error-msg">
                    Hiba történt az adatok lekérésekor.<br>
                    <small>${error.message}</small><br>
                    <button class="retry-btn" onclick="retryFetch()">Újrapróbálkozás</button>
                </div>`;
        }
    } finally {
        if(loading) loading.style.display = 'none';
    }
}

function retryFetch() {
    handleCategoryChange(currentCategoryType);
}

function forceRefresh() {
    if(IS_FETCHING) return; 
    
    const modal = document.getElementById('confirmation-modal');
    modal.style.display = 'flex';
    modal.querySelector('.confirmation-box').style.animation = 'slideUpModal 0.3s ease';
}

function closeConfirmationModal() {
    const modal = document.getElementById('confirmation-modal');
    modal.style.display = 'none';
}

function executeRefresh() {
    closeConfirmationModal();
    
    GLOBAL_PLAYER_DATA = null;
    const grids = document.querySelectorAll('.player-grid');
    grids.forEach(g => g.innerHTML = '');
    handleCategoryChange(currentCategoryType);
}

document.getElementById('confirmation-modal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeConfirmationModal();
    }
});

document.getElementById('player-search').addEventListener('input', function(e) {
    const searchTerm = e.target.value;
    if (currentCategoryType === 'hun_levels') {
        currentLevelPage = 0; 
        renderPlayers([], 'hun_levels', searchTerm);
    } else if (GLOBAL_PLAYER_DATA) {
        renderPlayers(GLOBAL_PLAYER_DATA, currentCategoryType, searchTerm);
    }
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');

        document.querySelectorAll('.category-section').forEach(section => {
            section.classList.remove('active');
        });
        
        const category = this.getAttribute('data-category');
        const targetSection = document.getElementById(category);
        if (targetSection) targetSection.classList.add('active');

        startBackgroundAnimation(category);
        handleCategoryChange(category);
    });
});

window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s';
        document.body.style.opacity = '1';
    }, 100);

    startBackgroundAnimation('stars');
    handleCategoryChange('stars');
});

function closeModal() {
    document.getElementById('profile-modal').style.display = 'none';
    document.body.classList.remove('modal-open');
}

document.getElementById('profile-modal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

function copyLevelId(id) {
    navigator.clipboard.writeText(id).then(() => {
        showToast(`A pálya azonosítója a vágólapra másolva!`);
    }).catch(err => {
        console.error('Hiba a másoláskor:', err);
        showToast('Sikertelen másolás');
    });
}

let toastTimeout;
function showToast(message) {
    const toast = document.getElementById('toast-notification');
    const msgSpan = document.getElementById('toast-message');

    msgSpan.innerText = message;
    toast.classList.add('show');

    if (toastTimeout) clearTimeout(toastTimeout);

    toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 5000);
}