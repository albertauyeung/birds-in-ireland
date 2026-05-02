/* Bird data for "Birds in Ireland" kids app.
 * Photos load live from Wikipedia REST API (Wikimedia Commons, CC-licensed).
 * Descriptions are written for kids aged 5-12 in 6 languages.
 * Pronunciations: pinyin (for Mandarin/Trad+Simp Chinese) and jyutping (for Cantonese).
 */
window.BIRDS = [
  {
    id: "puffin",
    wiki: "Atlantic_puffin",
    color: "#ff7a59",
    sizeCategory: "medium",
    sizeCm: 28,
    where: ["Skellig Islands (Kerry)", "Rathlin Island (Antrim)", "Saltee Islands (Wexford)", "Cliffs of Moher (Clare)"],
    names: {
      "en": "Atlantic Puffin",
      "zh-Hant": "大西洋海鸚",
      "zh-Hans": "大西洋海鹦",
      "yue": "大西洋海鸚",
      "fr": "Macareux moine",
      "es": "Frailecillo atlántico"
    },
    pronunciation: { pinyin: "dà xī yáng hǎi yīng", jyutping: "daai6 sai1 joeng4 hoi2 jing1" },
    latin: "Fratercula arctica",
    description: {
      "en": "With its bright, colourful beak in summer, the puffin looks like a sea parrot! It nests in burrows on grassy cliffs and eats little fish.",
      "zh-Hant": "海鸚有彩色的大嘴巴，看起來像海上的鸚鵡！牠們在草地懸崖挖洞做巢，喜歡吃小魚。",
      "zh-Hans": "海鹦有彩色的大嘴巴，看起来像海上的鹦鹉！它们在草地悬崖挖洞做巢，喜欢吃小鱼。",
      "yue": "海鸚個嘴又大又鮮色，好似一隻海上嘅鸚鵡咁！佢哋會喺草地懸崖度挖窿做窩，鍾意食細魚。",
      "fr": "Avec son bec coloré en été, le macareux ressemble à un perroquet de mer ! Il creuse un terrier dans les falaises herbeuses et mange de petits poissons.",
      "es": "Con su pico colorido en verano, el frailecillo parece un loro del mar. Anida en madrigueras en acantilados con hierba y come pececitos."
    }
  },
  {
    id: "robin",
    wiki: "European_robin",
    color: "#e0563f",
    sizeCategory: "small",
    sizeCm: 14,
    where: ["Any garden or park", "Hedgerows everywhere", "Woodland edges"],
    names: {
      "en": "European Robin",
      "zh-Hant": "知更鳥",
      "zh-Hans": "知更鸟",
      "yue": "知更鳥",
      "fr": "Rouge-gorge familier",
      "es": "Petirrojo europeo"
    },
    pronunciation: { pinyin: "zhī gēng niǎo", jyutping: "zi1 gang1 niu5" },
    latin: "Erithacus rubecula",
    description: {
      "en": "The friendly robin has a bright orange-red chest and sings even on snowy days. You'll often see one hopping right next to a gardener.",
      "zh-Hant": "知更鳥胸口紅紅橙橙，連下雪天都會唱歌。你常常會見到牠跟著園丁一起跳跳跳。",
      "zh-Hans": "知更鸟胸口红红橙橙，连下雪天都会唱歌。你经常会见到它跟着园丁一起跳跳跳。",
      "yue": "知更鳥胸口紅紅橙橙，落雪天都仲會唱歌。你成日見到佢跟住園丁周圍跳跳跳。",
      "fr": "Le rouge-gorge a une jolie poitrine orange et chante même les jours de neige. Il suit souvent les jardiniers dans le potager.",
      "es": "El petirrojo tiene un pecho naranja brillante y canta incluso en días de nieve. ¡Suele saltar cerca de los jardineros!"
    }
  },
  {
    id: "bluetit",
    wiki: "Eurasian_blue_tit",
    color: "#4a90e2",
    sizeCategory: "small",
    sizeCm: 12,
    where: ["Gardens with bird feeders", "Parks and woodlands", "Hedgerows"],
    names: {
      "en": "Blue Tit",
      "zh-Hant": "藍冠山雀",
      "zh-Hans": "蓝冠山雀",
      "yue": "藍山雀",
      "fr": "Mésange bleue",
      "es": "Herrerillo común"
    },
    pronunciation: { pinyin: "lán guàn shān què", jyutping: "laam4 saan1 zoek3" },
    latin: "Cyanistes caeruleus",
    description: {
      "en": "This tiny acrobat has a sky-blue cap and a bright yellow tummy. Watch them swing upside-down on bird feeders!",
      "zh-Hant": "這隻小小的雜技高手戴著天藍色的小帽，肚子是亮黃色。常常見到牠倒掛在餵鳥器上！",
      "zh-Hans": "这只小小的杂技高手戴着天蓝色的小帽，肚子是亮黄色。常常见到它倒挂在喂鸟器上！",
      "yue": "呢隻細細粒嘅雜技高手戴住一頂天藍色帽，個肚係鮮黃色。會吊起身倒掛喺餵鳥器度，超得意！",
      "fr": "Ce petit acrobate a une calotte bleu ciel et un ventre jaune vif. On le voit suspendu la tête en bas sur les mangeoires !",
      "es": "Este pequeño acróbata tiene la cabeza azul cielo y la barriga amarilla. ¡Mira cómo se cuelga boca abajo en los comederos!"
    }
  },
  {
    id: "greattit",
    wiki: "Great_tit",
    color: "#f4c430",
    sizeCategory: "small",
    sizeCm: 14,
    where: ["Gardens and bird feeders", "Woodlands", "Parks"],
    names: {
      "en": "Great Tit",
      "zh-Hant": "大山雀",
      "zh-Hans": "大山雀",
      "yue": "大山雀",
      "fr": "Mésange charbonnière",
      "es": "Carbonero común"
    },
    pronunciation: { pinyin: "dà shān què", jyutping: "daai6 saan1 zoek3" },
    latin: "Parus major",
    description: {
      "en": "Bigger than its blue cousin, the great tit wears a black necktie. Listen for its \"tea-cher, tea-cher\" song in spring.",
      "zh-Hant": "大山雀比藍山雀大隻一些，好像戴著一條黑色領帶。春天就會聽到牠「老師、老師」地叫。",
      "zh-Hans": "大山雀比蓝山雀大一些，好像戴着一条黑色领带。春天就会听到它「老师、老师」地叫。",
      "yue": "大山雀比藍山雀大粒少少，好似戴咗條黑色呔咁。春天就聽到佢「老師、老師」咁叫。",
      "fr": "Plus grosse que sa cousine bleue, la mésange charbonnière porte une cravate noire. Au printemps, elle chante « ti-tu, ti-tu ».",
      "es": "Más grande que su prima azul, el carbonero lleva una corbata negra. En primavera canta «ti-cher, ti-cher»."
    }
  },
  {
    id: "blackbird",
    wiki: "Common_blackbird",
    color: "#2d2d2d",
    sizeCategory: "medium",
    sizeCm: 25,
    where: ["Gardens and parks", "Hedgerows", "Woodland edges"],
    names: {
      "en": "Common Blackbird",
      "zh-Hant": "烏鶇",
      "zh-Hans": "乌鸫",
      "yue": "烏鶇",
      "fr": "Merle noir",
      "es": "Mirlo común"
    },
    pronunciation: { pinyin: "wū dōng", jyutping: "wu1 dung1" },
    latin: "Turdus merula",
    description: {
      "en": "The male is jet black with a sunny orange beak. His sweet song is one of the most beautiful in any garden.",
      "zh-Hant": "雄鳥全身漆黑，配上橙色的嘴巴。牠的歌聲是花園裡最美麗的旋律之一。",
      "zh-Hans": "雄鸟全身漆黑，配上橙色的嘴巴。它的歌声是花园里最美丽的旋律之一。",
      "yue": "雄鳥全身烏卒卒，配住一個橙色嘴。佢嘅歌聲係花園入面最動聽嘅其中之一。",
      "fr": "Le mâle est noir de jais avec un bec orange. Son chant flûté est l'un des plus beaux du jardin.",
      "es": "El macho es totalmente negro con el pico naranja. ¡Su canto es uno de los más bonitos del jardín!"
    }
  },
  {
    id: "sparrow",
    wiki: "House_sparrow",
    color: "#a07347",
    sizeCategory: "small",
    sizeCm: 15,
    where: ["Towns and villages", "Gardens", "Farms"],
    names: {
      "en": "House Sparrow",
      "zh-Hant": "家麻雀",
      "zh-Hans": "家麻雀",
      "yue": "家麻雀",
      "fr": "Moineau domestique",
      "es": "Gorrión común"
    },
    pronunciation: { pinyin: "jiā má què", jyutping: "gaa1 maa4 zoek3" },
    latin: "Passer domesticus",
    description: {
      "en": "A cheerful little brown bird that loves towns, parks and crumbs at picnics. Sparrows take dust baths to clean their feathers!",
      "zh-Hant": "一隻活潑的棕色小鳥，喜歡在城鎮、公園裡撿麵包屑吃。麻雀會用灰塵洗澡，把羽毛弄乾淨！",
      "zh-Hans": "一只活泼的棕色小鸟，喜欢在城镇、公园里捡面包屑吃。麻雀会用灰尘洗澡，把羽毛弄干净！",
      "yue": "一隻活潑嘅啡色小鳥，最鍾意喺城鎮同公園度執麵包碎食。麻雀仲會用沙嚟沖涼，幫毛清潔！",
      "fr": "Ce petit oiseau brun et joyeux adore les villes, les parcs et les miettes des pique-niques. Il se baigne dans la poussière pour se nettoyer !",
      "es": "Un pajarito marrón y alegre que vive en ciudades y parques. Los gorriones se bañan en polvo para limpiarse las plumas."
    }
  },
  {
    id: "magpie",
    wiki: "Eurasian_magpie",
    color: "#1f3a5f",
    sizeCategory: "medium",
    sizeCm: 45,
    where: ["Everywhere — towns, fields, parks", "Gardens", "Hedgerows"],
    names: {
      "en": "Eurasian Magpie",
      "zh-Hant": "喜鵲",
      "zh-Hans": "喜鹊",
      "yue": "喜鵲",
      "fr": "Pie bavarde",
      "es": "Urraca común"
    },
    pronunciation: { pinyin: "xǐ què", jyutping: "hei2 zoek3" },
    latin: "Pica pica",
    description: {
      "en": "Black and white with a flashy blue-green tail. Magpies are super clever — some can even recognise themselves in a mirror!",
      "zh-Hant": "黑白相間，配上閃閃藍綠色的尾巴。喜鵲非常聰明，有些甚至能認出鏡子裡的自己！",
      "zh-Hans": "黑白相间，配上闪闪蓝绿色的尾巴。喜鹊非常聪明，有些甚至能认出镜子里的自己！",
      "yue": "黑白相間，仲有條閃閃藍綠色嘅尾。喜鵲非常聰明，有啲仲識認得鏡入面嘅自己！",
      "fr": "Noire et blanche avec une longue queue bleu-vert. La pie est très maligne — certaines se reconnaissent même dans un miroir !",
      "es": "Negra y blanca con una cola brillante azul-verde. ¡Las urracas son muy listas y algunas hasta se reconocen en un espejo!"
    }
  },
  {
    id: "muteswan",
    wiki: "Mute_swan",
    color: "#f5f5f5",
    sizeCategory: "large",
    sizeCm: 150,
    where: ["Lakes and rivers", "Phoenix Park (Dublin)", "Lough Neagh"],
    names: {
      "en": "Mute Swan",
      "zh-Hant": "疣鼻天鵝",
      "zh-Hans": "疣鼻天鹅",
      "yue": "啞天鵝",
      "fr": "Cygne tuberculé",
      "es": "Cisne vulgar"
    },
    pronunciation: { pinyin: "yóu bí tiān é", jyutping: "aa2 tin1 ngo4" },
    latin: "Cygnus olor",
    description: {
      "en": "The big snow-white bird gliding on lakes and rivers. Swans pair up for life and protect their fluffy grey babies fiercely.",
      "zh-Hant": "在湖泊河流上優雅滑行的大白鳥。天鵝一生只配對一次，會勇敢守護毛茸茸的灰色寶寶。",
      "zh-Hans": "在湖泊河流上优雅滑行的大白鸟。天鹅一生只配对一次，会勇敢守护毛茸茸的灰色宝宝。",
      "yue": "喺湖同河上面滑行得好優雅嘅大白雀。天鵝一世只係配對一次，仲會好勇敢咁保護毛茸茸嘅灰色BB。",
      "fr": "Ce grand oiseau blanc glisse sur les lacs et les rivières. Les cygnes restent ensemble toute leur vie et protègent leurs bébés gris.",
      "es": "Esta gran ave blanca se desliza por lagos y ríos. Los cisnes se emparejan de por vida y protegen a sus crías grises con valentía."
    }
  },
  {
    id: "mallard",
    wiki: "Mallard",
    color: "#2e7d32",
    sizeCategory: "medium",
    sizeCm: 58,
    where: ["Any pond, river or lake", "St Stephen's Green (Dublin)", "Phoenix Park"],
    names: {
      "en": "Mallard",
      "zh-Hant": "綠頭鴨",
      "zh-Hans": "绿头鸭",
      "yue": "綠頭鴨",
      "fr": "Canard colvert",
      "es": "Ánade real"
    },
    pronunciation: { pinyin: "lǜ tóu yā", jyutping: "luk6 tau4 aap3" },
    latin: "Anas platyrhynchos",
    description: {
      "en": "The most common duck — males have a shiny green head. They love splashing in ponds and saying \"quack, quack!\"",
      "zh-Hant": "最常見的鴨，雄鴨頭部閃閃發光的綠色。牠們最喜歡在池塘裡撲水，「呷呷」地叫。",
      "zh-Hans": "最常见的鸭，雄鸭头部闪闪发光的绿色。它们最喜欢在池塘里扑水，「呱呱」地叫。",
      "yue": "最常見嘅鴨，公鴨個頭係閃閃綠色。佢哋最鍾意喺池塘度玩水，「呷呷」咁叫。",
      "fr": "Le canard le plus commun ; le mâle a la tête d'un vert brillant. Ils adorent barboter dans les étangs en faisant « coin coin ! »",
      "es": "El pato más común: los machos tienen la cabeza verde brillante. Les encanta chapotear en los estanques diciendo «¡cua, cua!»."
    }
  },
  {
    id: "heron",
    wiki: "Grey_heron",
    color: "#7f8c8d",
    sizeCategory: "large",
    sizeCm: 100,
    where: ["River banks", "Lake shores", "Wet fields and ponds"],
    names: {
      "en": "Grey Heron",
      "zh-Hant": "蒼鷺",
      "zh-Hans": "苍鹭",
      "yue": "灰鷺",
      "fr": "Héron cendré",
      "es": "Garza real"
    },
    pronunciation: { pinyin: "cāng lù", jyutping: "fui1 lou6" },
    latin: "Ardea cinerea",
    description: {
      "en": "A tall grey bird that stands as still as a statue, then SNAP! catches a fish with its lightning-fast beak.",
      "zh-Hant": "一隻高高的灰色鳥兒，會像雕像一樣靜靜站著，然後突然—啪！用閃電般的速度抓住魚。",
      "zh-Hans": "一只高高的灰色鸟儿，会像雕像一样静静站着，然后突然—啪！用闪电般的速度抓住鱼。",
      "yue": "一隻又高又灰嘅雀，會企到好似雕像咁，跟住「啪」一聲！用快過閃電嘅嘴叼住條魚。",
      "fr": "Ce grand oiseau gris reste immobile comme une statue, puis CLAC ! il attrape un poisson avec son bec ultra-rapide.",
      "es": "Una gran ave gris que se queda inmóvil como una estatua y, ¡zas!, atrapa un pez con su pico veloz."
    }
  },
  {
    id: "kingfisher",
    wiki: "Common_kingfisher",
    color: "#0a8ec0",
    sizeCategory: "small",
    sizeCm: 17,
    where: ["Slow rivers and canals", "Royal Canal (Dublin)", "River Dodder"],
    names: {
      "en": "Common Kingfisher",
      "zh-Hant": "普通翠鳥",
      "zh-Hans": "普通翠鸟",
      "yue": "翠鳥",
      "fr": "Martin-pêcheur d'Europe",
      "es": "Martín pescador común"
    },
    pronunciation: { pinyin: "pǔ tōng cuì niǎo", jyutping: "ceoi3 niu5" },
    latin: "Alcedo atthis",
    description: {
      "en": "A flash of bright blue and orange by the river! The kingfisher dives like an arrow to catch tiny fish.",
      "zh-Hant": "河邊一閃而過的亮藍橙色！翠鳥會像箭一樣插進水裡抓小魚。",
      "zh-Hans": "河边一闪而过的亮蓝橙色！翠鸟会像箭一样扎进水里抓小鱼。",
      "yue": "河邊閃過嘅亮藍同橙色！翠鳥會好似支箭咁射入水度捉細魚。",
      "fr": "Un éclair bleu et orange au bord de la rivière ! Le martin-pêcheur plonge comme une flèche pour attraper de petits poissons.",
      "es": "¡Un destello azul y naranja junto al río! El martín pescador se lanza como una flecha para atrapar pececitos."
    }
  },
  {
    id: "barnowl",
    wiki: "Western_barn_owl",
    color: "#d4b483",
    sizeCategory: "medium",
    sizeCm: 35,
    where: ["Old farmland", "Ruined buildings & barns", "Quiet countryside at night"],
    names: {
      "en": "Barn Owl",
      "zh-Hant": "倉鴞",
      "zh-Hans": "仓鸮",
      "yue": "倉鴞",
      "fr": "Effraie des clochers",
      "es": "Lechuza común"
    },
    pronunciation: { pinyin: "cāng xiāo", jyutping: "cong1 hiu1" },
    latin: "Tyto alba",
    description: {
      "en": "A ghostly white owl with a heart-shaped face. It flies silently at night to hunt mice in the fields.",
      "zh-Hant": "一隻幽靈般的白色貓頭鷹，有一張心形的臉。牠會在夜晚無聲地飛行，去田野獵捕老鼠。",
      "zh-Hans": "一只幽灵般的白色猫头鹰，有一张心形的脸。它会在夜晚无声地飞行，去田野猎捕老鼠。",
      "yue": "一隻好似幽靈咁嘅白色貓頭鷹，有張心形嘅面。佢會喺夜晚靜靜咁飛去田度捉老鼠。",
      "fr": "Une chouette blanche comme un fantôme, au visage en forme de cœur. Elle vole en silence la nuit pour chasser les souris.",
      "es": "Una lechuza blanca como un fantasma, con una cara en forma de corazón. Vuela en silencio por la noche para cazar ratones."
    }
  },
  {
    id: "gannet",
    wiki: "Northern_gannet",
    color: "#f0d97a",
    sizeCategory: "large",
    sizeCm: 95,
    where: ["Skellig Islands & Little Skellig (Kerry)", "Bull Rock (Cork)", "Sea cliffs around the coast"],
    names: {
      "en": "Northern Gannet",
      "zh-Hant": "北鰹鳥",
      "zh-Hans": "北鲣鸟",
      "yue": "北鰹鳥",
      "fr": "Fou de Bassan",
      "es": "Alcatraz atlántico"
    },
    pronunciation: { pinyin: "běi jiān niǎo", jyutping: "bak1 gin1 niu5" },
    latin: "Morus bassanus",
    description: {
      "en": "Big white seabird that dives from 30 metres high — straight into the ocean to grab a fish! Splash!",
      "zh-Hant": "一隻大型的白色海鳥，會從30米高俯衝直入海裡抓魚！噗通一聲！",
      "zh-Hans": "一只大型的白色海鸟，会从30米高俯冲直入海里抓鱼！扑通一声！",
      "yue": "一隻又大又白嘅海鳥，會從30米高直插落海裡捉魚！「噗通」一聲！",
      "fr": "Un grand oiseau marin blanc qui plonge de 30 mètres de haut, droit dans l'océan, pour attraper un poisson. Plouf !",
      "es": "Un gran ave marina blanca que se zambulle desde 30 metros de altura para atrapar peces. ¡Plaf!"
    }
  },
  {
    id: "goldfinch",
    wiki: "European_goldfinch",
    color: "#e2b53c",
    sizeCategory: "small",
    sizeCm: 13,
    where: ["Gardens with thistles", "Weedy fields", "Hedgerows"],
    names: {
      "en": "European Goldfinch",
      "zh-Hant": "紅額金翅雀",
      "zh-Hans": "红额金翅雀",
      "yue": "紅額金翅雀",
      "fr": "Chardonneret élégant",
      "es": "Jilguero europeo"
    },
    pronunciation: { pinyin: "hóng é jīn chì què", jyutping: "hung4 ngaak6 gam1 ci3 zoek3" },
    latin: "Carduelis carduelis",
    description: {
      "en": "With a red mask and gold wings, this little bird is a real beauty. A group of them is called a \"charm\"!",
      "zh-Hant": "有著紅色面罩和金色翅膀的小小美鳥。一群金翅雀英文叫做「charm」，意思是「魅力」！",
      "zh-Hans": "有着红色面罩和金色翅膀的小小美鸟。一群金翅雀英文叫做「charm」，意思是「魅力」！",
      "yue": "有住紅色面罩同金色翼嘅小小美麗雀仔。一群金翅雀英文叫做「charm」，即係「魅力」嘅意思！",
      "fr": "Avec son masque rouge et ses ailes dorées, le chardonneret est ravissant. Un groupe s'appelle une « volée magique » !",
      "es": "Con su antifaz rojo y alas doradas, el jilguero es precioso. ¡A un grupo se le llama «un encanto»!"
    }
  },
  {
    id: "wren",
    wiki: "Eurasian_wren",
    color: "#8b5e34",
    sizeCategory: "small",
    sizeCm: 9,
    where: ["Hedgerows", "Gardens", "Woodlands"],
    names: {
      "en": "Eurasian Wren",
      "zh-Hant": "鷦鷯",
      "zh-Hans": "鹪鹩",
      "yue": "鷦鷯",
      "fr": "Troglodyte mignon",
      "es": "Chochín común"
    },
    pronunciation: { pinyin: "jiāo liáo", jyutping: "ziu1 liu4" },
    latin: "Troglodytes troglodytes",
    description: {
      "en": "One of Ireland's tiniest birds — but its song is HUGE. In Irish folklore the wren is called \"the King of all Birds\".",
      "zh-Hant": "愛爾蘭最小的鳥之一——但歌聲超大聲！在愛爾蘭傳說中，鷦鷯被稱為「鳥中之王」。",
      "zh-Hans": "爱尔兰最小的鸟之一——但歌声超大声！在爱尔兰传说中，鹪鹩被称为「鸟中之王」。",
      "yue": "愛爾蘭最細隻嘅雀仔之一——但歌聲超大聲！愛爾蘭傳說入面叫佢做「百鳥之王」。",
      "fr": "L'un des plus petits oiseaux d'Irlande, mais quelle voix ! Dans le folklore irlandais, le troglodyte est « le roi de tous les oiseaux ».",
      "es": "Una de las aves más pequeñas de Irlanda, pero su canto es enorme. En el folclore irlandés es «el rey de las aves»."
    }
  },
  {
    id: "wtailedeagle",
    wiki: "White-tailed_eagle",
    color: "#7d5c34",
    sizeCategory: "large",
    sizeCm: 240,
    where: ["Killarney National Park (Kerry)", "Lough Derg", "West coast lakes & cliffs"],
    names: {
      "en": "White-tailed Eagle",
      "zh-Hant": "白尾海鵰",
      "zh-Hans": "白尾海雕",
      "yue": "白尾海鵰",
      "fr": "Pygargue à queue blanche",
      "es": "Pigargo europeo"
    },
    pronunciation: { pinyin: "bái wěi hǎi diāo", jyutping: "baak6 mei5 hoi2 diu1" },
    latin: "Haliaeetus albicilla",
    description: {
      "en": "Ireland's biggest eagle, with wings up to 2.4 metres wide. Once gone from Ireland, eagles have been brought back since 2007.",
      "zh-Hant": "愛爾蘭最大的鷹，翼展可達2.4米。曾經在愛爾蘭絕跡，從2007年起重新引入。",
      "zh-Hans": "爱尔兰最大的鹰，翼展可达2.4米。曾经在爱尔兰绝迹，自2007年起重新引入。",
      "yue": "愛爾蘭最大隻嘅鷹，翼展可以闊到2.4米。以前喺愛爾蘭絕咗種，2007年起再引入返。",
      "fr": "Le plus grand aigle d'Irlande, avec des ailes pouvant atteindre 2,4 m. Disparu autrefois, il a été réintroduit depuis 2007.",
      "es": "El águila más grande de Irlanda, con alas de hasta 2,4 metros. Desapareció una vez y se reintrodujo desde 2007."
    }
  },
  {
    id: "hoodedcrow",
    wiki: "Hooded_crow",
    color: "#6e7e8c",
    sizeCategory: "medium",
    sizeCm: 50,
    where: ["Towns and parks", "Farmland & coastlines", "All over Ireland"],
    names: {
      "en": "Hooded Crow",
      "zh-Hant": "冠小嘴烏鴉",
      "zh-Hans": "冠小嘴乌鸦",
      "yue": "冠小嘴烏鴉",
      "fr": "Corneille mantelée",
      "es": "Corneja cenicienta"
    },
    pronunciation: { pinyin: "guān xiǎo zuǐ wū yā", jyutping: "gun1 siu2 zeoi2 wu1 aa1" },
    latin: "Corvus cornix",
    description: {
      "en": "A clever grey-and-black crow seen everywhere in Ireland. Crows can solve puzzles to get food and even use sticks as tools.",
      "zh-Hant": "一隻聰明的灰黑色烏鴉，在愛爾蘭隨處可見。烏鴉懂得解謎找食物，還會用樹枝當工具！",
      "zh-Hans": "一只聪明的灰黑色乌鸦，在爱尔兰随处可见。乌鸦懂得解谜找食物，还会用树枝当工具！",
      "yue": "一隻好醒目嘅灰黑色烏鴉，喺愛爾蘭周圍都見到。烏鴉識解謎搵食物，仲識用樹枝做工具！",
      "fr": "Une corneille grise et noire très maligne qu'on voit partout en Irlande. Les corneilles savent résoudre des énigmes et utilisent même des bâtons comme outils !",
      "es": "Una corneja gris y negra muy lista que se ve por toda Irlanda. ¡Las cornejas resuelven puzzles para conseguir comida e incluso usan palitos como herramientas!"
    }
  },
  {
    id: "woodpigeon",
    wiki: "Common_wood_pigeon",
    color: "#8a8071",
    sizeCategory: "medium",
    sizeCm: 41,
    where: ["Parks and gardens", "Woodlands", "Farmland"],
    names: {
      "en": "Common Wood Pigeon",
      "zh-Hant": "斑尾林鴿",
      "zh-Hans": "斑尾林鸽",
      "yue": "斑尾林鴿",
      "fr": "Pigeon ramier",
      "es": "Paloma torcaz"
    },
    pronunciation: { pinyin: "bān wěi lín gē", jyutping: "baan1 mei5 lam4 gap3" },
    latin: "Columba palumbus",
    description: {
      "en": "A big plump pigeon with a white patch on its neck. You can hear it cooing \"coo-coo, coo, coo\" from tall trees.",
      "zh-Hant": "一隻又胖又大的鴿子，頸上有白色斑塊。常常聽到牠在大樹上「咕咕、咕、咕」地叫。",
      "zh-Hans": "一只又胖又大的鸽子，颈上有白色斑块。常常听到它在大树上「咕咕、咕、咕」地叫。",
      "yue": "一隻肥肥大大嘅鴿子，頸上有塊白色斑紋。成日聽到佢喺大樹上面「咕咕、咕、咕」咁叫。",
      "fr": "Un gros pigeon dodu avec une tache blanche sur le cou. On l'entend roucouler « cou-cou, cou, cou » dans les grands arbres.",
      "es": "Una paloma grande y rolliza con una mancha blanca en el cuello. Se la oye arrullando «cu-cu, cu, cu» desde los árboles altos."
    }
  },
  {
    id: "longtailedtit",
    wiki: "Long-tailed_tit",
    color: "#e8b8c4",
    sizeCategory: "small",
    sizeCm: 14,
    where: ["Woodlands", "Hedgerows", "Gardens"],
    names: {
      "en": "Long-tailed Tit",
      "zh-Hant": "銀喉長尾山雀",
      "zh-Hans": "银喉长尾山雀",
      "yue": "銀喉長尾山雀",
      "fr": "Mésange à longue queue",
      "es": "Mito común"
    },
    pronunciation: { pinyin: "yín hóu cháng wěi shān què", jyutping: "ngan4 hau4 coeng4 mei5 saan1 zoek3" },
    latin: "Aegithalos caudatus",
    description: {
      "en": "A tiny pink, white and black ball of fluff with a very long tail. They travel in chattering family groups through the trees.",
      "zh-Hant": "一團粉紅、白色和黑色的小毛球，配上長長的尾巴。牠們會一家人一起在樹上嘰嘰喳喳地飛。",
      "zh-Hans": "一团粉红、白色和黑色的小毛球，配上长长的尾巴。它们会一家人一起在树上叽叽喳喳地飞。",
      "yue": "一團粉紅、白同黑色嘅小毛球，仲有條好長嘅尾。佢哋會成家人一齊喺樹上面嘰嘰喳喳咁飛。",
      "fr": "Une petite boule de plumes roses, blanches et noires avec une très longue queue. Elles voyagent en familles qui pépient dans les arbres.",
      "es": "Una bolita esponjosa rosa, blanca y negra con una cola larguísima. Viajan en grupos familiares parlanchines por los árboles."
    }
  },
  {
    id: "bullfinch",
    wiki: "Eurasian_bullfinch",
    color: "#d65a7a",
    sizeCategory: "small",
    sizeCm: 16,
    where: ["Woodlands", "Hedgerows", "Quiet gardens"],
    names: {
      "en": "Eurasian Bullfinch",
      "zh-Hant": "紅腹灰雀",
      "zh-Hans": "红腹灰雀",
      "yue": "紅腹灰雀",
      "fr": "Bouvreuil pivoine",
      "es": "Camachuelo común"
    },
    pronunciation: { pinyin: "hóng fù huī què", jyutping: "hung4 fuk1 fui1 zoek3" },
    latin: "Pyrrhula pyrrhula",
    description: {
      "en": "The male has a brilliant pink-red chest and a black cap. He looks like he's wearing a smart little beret!",
      "zh-Hant": "雄鳥胸口是亮粉紅色，頭頂戴著一頂黑色小帽，好像戴著貝雷帽一樣！",
      "zh-Hans": "雄鸟胸口是亮粉红色，头顶戴着一顶黑色小帽，好像戴着贝雷帽一样！",
      "yue": "雄鳥嘅胸口係鮮粉紅色，頭頂戴住頂黑色小帽，好似戴咗頂貝雷帽咁！",
      "fr": "Le mâle a une poitrine rose vif et une calotte noire. On dirait qu'il porte un petit béret chic !",
      "es": "El macho tiene el pecho rosa intenso y un gorrito negro. ¡Parece que lleva una boina elegante!"
    }
  },
  {
    id: "chaffinch",
    wiki: "Common_chaffinch",
    color: "#c97a5a",
    sizeCategory: "small",
    sizeCm: 14,
    where: ["Gardens", "Woodlands", "Hedgerows"],
    names: {
      "en": "Common Chaffinch",
      "zh-Hant": "蒼頭燕雀",
      "zh-Hans": "苍头燕雀",
      "yue": "蒼頭燕雀",
      "fr": "Pinson des arbres",
      "es": "Pinzón vulgar"
    },
    pronunciation: { pinyin: "cāng tóu yàn què", jyutping: "cong1 tau4 jin3 zoek3" },
    latin: "Fringilla coelebs",
    description: {
      "en": "One of the most common songbirds in Ireland. Males have an orange chest and blue-grey head, and call out a cheerful \"pink, pink!\"",
      "zh-Hant": "愛爾蘭最常見的鳴鳥之一。雄鳥有橙色的胸口和藍灰色的頭，會發出歡快的「pink, pink!」叫聲。",
      "zh-Hans": "爱尔兰最常见的鸣鸟之一。雄鸟有橙色的胸口和蓝灰色的头，会发出欢快的「pink, pink!」叫声。",
      "yue": "愛爾蘭最常見嘅歌鳥之一。雄鳥有橙色胸口同藍灰色頭，會發出開心嘅「pink, pink!」叫聲。",
      "fr": "L'un des oiseaux chanteurs les plus communs d'Irlande. Les mâles ont la poitrine orange et la tête bleu-gris, et lancent un joyeux « pink, pink ! »",
      "es": "Una de las aves canoras más comunes de Irlanda. Los machos tienen el pecho naranja y la cabeza azul-grisácea, y cantan un alegre «¡pink, pink!»"
    }
  },
  {
    id: "starling",
    wiki: "Common_starling",
    color: "#5a4980",
    sizeCategory: "medium",
    sizeCm: 22,
    where: ["Towns and gardens", "Fields", "Reedbeds at sunset (autumn murmurations)"],
    names: {
      "en": "Common Starling",
      "zh-Hant": "紫翅椋鳥",
      "zh-Hans": "紫翅椋鸟",
      "yue": "紫翅椋鳥",
      "fr": "Étourneau sansonnet",
      "es": "Estornino pinto"
    },
    pronunciation: { pinyin: "zǐ chì liáng niǎo", jyutping: "zi2 ci3 loeng4 niu5" },
    latin: "Sturnus vulgaris",
    description: {
      "en": "From far they look black, but up close their feathers shine with purple and green. At sunset, thousands swirl together in beautiful clouds called murmurations.",
      "zh-Hant": "遠看是黑色的，但走近就會看到牠們的羽毛閃著紫色和綠色光澤。日落時，成千上萬隻會一起在天空盤旋成美麗的雲團，叫做「鳥浪」。",
      "zh-Hans": "远看是黑色的，但走近就会看到它们的羽毛闪着紫色和绿色光泽。日落时，成千上万只会一起在天空盘旋成美丽的云团，叫做「鸟浪」。",
      "yue": "遠遠望好似黑色，但行近啲就見到佢哋啲羽毛閃住紫色同綠色嘅光。日落時，成千上萬隻會一齊喺天空打圈飛，形成靚到嘩嘩聲嘅「鳥浪」。",
      "fr": "De loin, ils paraissent noirs, mais de près leurs plumes brillent de violet et de vert. Au coucher du soleil, des milliers tournoient en nuages magnifiques appelés « murmurations ».",
      "es": "De lejos parecen negros, pero de cerca sus plumas brillan en morado y verde. ¡Al atardecer, miles giran juntos en preciosas nubes llamadas «murmuraciones»!"
    }
  },
  {
    id: "swallow",
    wiki: "Barn_swallow",
    color: "#3a5599",
    sizeCategory: "small",
    sizeCm: 17,
    where: ["Farms with old barns", "Open countryside", "Near ponds and rivers"],
    names: {
      "en": "Barn Swallow",
      "zh-Hant": "家燕",
      "zh-Hans": "家燕",
      "yue": "家燕",
      "fr": "Hirondelle rustique",
      "es": "Golondrina común"
    },
    pronunciation: { pinyin: "jiā yàn", jyutping: "gaa1 jin3" },
    latin: "Hirundo rustica",
    description: {
      "en": "A summer visitor with a deep blue back and a forked tail. Swallows fly all the way from Africa each spring to nest in Irish barns and porches!",
      "zh-Hant": "一隻夏天才會出現的訪客，背部深藍色、尾巴分叉。家燕每年春天從非洲飛到愛爾蘭，在穀倉和門廊裡築巢。",
      "zh-Hans": "一只夏天才会出现的访客，背部深蓝色、尾巴分叉。家燕每年春天从非洲飞到爱尔兰，在谷仓和门廊里筑巢。",
      "yue": "一隻夏天先會嚟嘅訪客，個背深藍色、尾巴分叉。家燕每年春天從非洲飛嚟愛爾蘭，喺穀倉同門廊度做窩。",
      "fr": "Un visiteur d'été au dos bleu foncé et à la queue fourchue. Les hirondelles volent depuis l'Afrique chaque printemps pour nicher dans les granges irlandaises !",
      "es": "Un visitante de verano con la espalda azul oscuro y la cola ahorquillada. ¡Las golondrinas vuelan desde África cada primavera para anidar en los graneros de Irlanda!"
    }
  },
  {
    id: "oystercatcher",
    wiki: "Eurasian_oystercatcher",
    color: "#e87a3a",
    sizeCategory: "medium",
    sizeCm: 43,
    where: ["Beaches and rocky shores", "Estuaries", "All around the Irish coast"],
    names: {
      "en": "Eurasian Oystercatcher",
      "zh-Hant": "蠣鷸",
      "zh-Hans": "蛎鹬",
      "yue": "蠣鷸",
      "fr": "Huîtrier pie",
      "es": "Ostrero euroasiático"
    },
    pronunciation: { pinyin: "lì yù", jyutping: "lai6 wat6" },
    latin: "Haematopus ostralegus",
    description: {
      "en": "A striking black-and-white shorebird with a bright orange beak as long as its head. Its loud \"pic, pic!\" call is the soundtrack of Irish beaches.",
      "zh-Hant": "一隻醒目的黑白色海岸鳥，配上一個跟頭一樣長的鮮橙色嘴巴。牠響亮的「pic, pic!」叫聲就是愛爾蘭海灘的聲音。",
      "zh-Hans": "一只醒目的黑白色海岸鸟，配上一个跟头一样长的鲜橙色嘴巴。它响亮的「pic, pic!」叫声就是爱尔兰海滩的声音。",
      "yue": "一隻好搶眼嘅黑白色海岸鳥，個橙色嘴同個頭一樣咁長。佢「pic, pic!」嘅響亮叫聲就係愛爾蘭海灘嘅標誌聲音。",
      "fr": "Un limicole noir et blanc remarquable, avec un bec orange vif aussi long que sa tête. Son cri sonore « pic, pic ! » est la bande-son des plages d'Irlande.",
      "es": "Un ave costera blanca y negra impresionante, con un pico naranja brillante tan largo como su cabeza. ¡Su sonoro «pic, pic!» es la banda sonora de las playas irlandesas!"
    }
  },

  /* ===== New batch: 30 more birds ===== */

  {
    id: "goldcrest",
    wiki: "Goldcrest",
    color: "#c9a635",
    sizeCategory: "small",
    sizeCm: 9,
    where: ["Conifer woods", "Gardens with conifers", "Parks"],
    names: {
      "en": "Goldcrest",
      "zh-Hant": "戴菊",
      "zh-Hans": "戴菊",
      "yue": "戴菊",
      "fr": "Roitelet huppé",
      "es": "Reyezuelo sencillo"
    },
    pronunciation: { pinyin: "dài jú", jyutping: "daai3 guk1" },
    latin: "Regulus regulus",
    description: {
      "en": "Tied with the wren as Ireland's smallest bird! Has a tiny golden stripe on top of its head, like a little crown.",
      "zh-Hant": "和鷦鷯並列愛爾蘭最小的鳥！頭頂有一條小小的金色條紋，好像戴著一頂迷你皇冠。",
      "zh-Hans": "和鹪鹩并列爱尔兰最小的鸟！头顶有一条小小的金色条纹，好像戴着一顶迷你皇冠。",
      "yue": "同鷦鷯並列愛爾蘭最細隻嘅雀！頭頂有條金色細線，好似戴住頂迷你皇冠咁。",
      "fr": "Avec le troglodyte, c'est le plus petit oiseau d'Irlande ! Il a une petite raie dorée sur la tête, comme une mini-couronne.",
      "es": "¡Junto con el chochín, es el ave más pequeña de Irlanda! Tiene una rayita dorada en la cabeza, como una pequeña corona."
    }
  },
  {
    id: "piedwagtail",
    wiki: "White_wagtail",
    color: "#3a3a3a",
    sizeCategory: "small",
    sizeCm: 18,
    where: ["Rooftops", "Car parks", "River banks", "Fields"],
    names: {
      "en": "Pied Wagtail",
      "zh-Hant": "白鶺鴒",
      "zh-Hans": "白鹡鸰",
      "yue": "白鶺鴒",
      "fr": "Bergeronnette grise",
      "es": "Lavandera blanca"
    },
    pronunciation: { pinyin: "bái jí líng", jyutping: "baak6 zik3 ling4" },
    latin: "Motacilla alba yarrellii",
    description: {
      "en": "A perky black-and-white bird that runs across the ground wagging its long tail up and down.",
      "zh-Hant": "一隻活潑的黑白色小鳥，會在地上奔跑，長長的尾巴一上一下地搖擺。",
      "zh-Hans": "一只活泼的黑白色小鸟，会在地上奔跑，长长的尾巴一上一下地摇摆。",
      "yue": "一隻活潑嘅黑白色小鳥，會喺地下走嚟走去，條長尾上上落落咁擺。",
      "fr": "Un petit oiseau noir et blanc plein d'entrain qui court sur le sol en agitant sa longue queue de haut en bas.",
      "es": "Un pajarito blanco y negro muy animado que corre por el suelo moviendo su larga cola arriba y abajo."
    }
  },
  {
    id: "chiffchaff",
    wiki: "Common_chiffchaff",
    color: "#8a9a5b",
    sizeCategory: "small",
    sizeCm: 11,
    where: ["Woodlands", "Hedgerows", "Parks and gardens (spring/summer)"],
    names: {
      "en": "Common Chiffchaff",
      "zh-Hant": "嘰咋柳鶯",
      "zh-Hans": "叽咋柳莺",
      "yue": "嘰咋柳鶯",
      "fr": "Pouillot véloce",
      "es": "Mosquitero común"
    },
    pronunciation: { pinyin: "jī zhā liǔ yīng", jyutping: "gei1 zaa1 lau5 ang1" },
    latin: "Phylloscopus collybita",
    description: {
      "en": "A tiny olive-green warbler whose name comes from its song: \"chiff-chaff, chiff-chaff\" all spring long!",
      "zh-Hant": "一隻細小的橄欖綠色鶯，名字就是來自牠的歌聲：整個春天都「chiff-chaff、chiff-chaff」地叫！",
      "zh-Hans": "一只细小的橄榄绿色莺，名字就是来自它的歌声：整个春天都「chiff-chaff、chiff-chaff」地叫！",
      "yue": "一隻好細粒嘅橄欖綠鶯，個名就係嚟自佢嘅歌聲：成個春天都「chiff-chaff、chiff-chaff」咁叫！",
      "fr": "Une minuscule fauvette vert olive dont le nom vient de son chant : « chiff-chaff, chiff-chaff » tout le printemps !",
      "es": "Una diminuta curruca verde-oliva cuyo nombre viene de su canto: «¡chiff-chaff, chiff-chaff!» durante toda la primavera."
    }
  },
  {
    id: "greenfinch",
    wiki: "European_greenfinch",
    color: "#7da33d",
    sizeCategory: "small",
    sizeCm: 15,
    where: ["Gardens with feeders", "Parks", "Hedgerows", "Woodland edges"],
    names: {
      "en": "European Greenfinch",
      "zh-Hant": "歐洲金翅雀",
      "zh-Hans": "欧洲金翅雀",
      "yue": "歐洲金翅雀",
      "fr": "Verdier d'Europe",
      "es": "Verderón común"
    },
    pronunciation: { pinyin: "ōu zhōu jīn chì què", jyutping: "au1 zau1 gam1 ci3 zoek3" },
    latin: "Chloris chloris",
    description: {
      "en": "A chunky finch with bright olive-green and yellow feathers. Loves sunflower seeds at garden feeders.",
      "zh-Hant": "一隻胖胖的雀，羽毛是亮橄欖綠和黃色。最愛吃花園餵鳥器裡的葵花籽。",
      "zh-Hans": "一只胖胖的雀，羽毛是亮橄榄绿和黄色。最爱吃花园喂鸟器里的葵花籽。",
      "yue": "一隻肥肥嘅雀仔，羽毛係鮮橄欖綠同黃色。最鍾意食花園餵鳥器入面嘅葵花籽。",
      "fr": "Un pinson trapu aux plumes vert olive vif et jaunes. Il adore les graines de tournesol des mangeoires.",
      "es": "Un pinzón rechoncho de plumas verde oliva y amarillas. Le encantan las pipas de girasol en los comederos."
    }
  },
  {
    id: "coaltit",
    wiki: "Coal_tit",
    color: "#454545",
    sizeCategory: "small",
    sizeCm: 11,
    where: ["Conifer woods", "Gardens with conifers", "Parks"],
    names: {
      "en": "Coal Tit",
      "zh-Hant": "煤山雀",
      "zh-Hans": "煤山雀",
      "yue": "煤山雀",
      "fr": "Mésange noire",
      "es": "Carbonero garrapinos"
    },
    pronunciation: { pinyin: "méi shān què", jyutping: "mui4 saan1 zoek3" },
    latin: "Periparus ater",
    description: {
      "en": "A tiny tit with a black head and a white patch on the back of the neck. Loves pine and spruce trees!",
      "zh-Hant": "一隻細小的山雀，頭部黑色，頸後有白色斑塊。最喜歡松樹和雲杉！",
      "zh-Hans": "一只细小的山雀，头部黑色，颈后有白色斑块。最喜欢松树和云杉！",
      "yue": "一隻細粒山雀，個頭黑色，頸後面有塊白色斑紋。最鍾意松樹同雲杉！",
      "fr": "Une mésange minuscule à tête noire avec une tache blanche sur la nuque. Elle adore les pins et les épicéas !",
      "es": "Una pequeña paro con la cabeza negra y una mancha blanca en la nuca. ¡Le encantan los pinos y los abetos!"
    }
  },
  {
    id: "jay",
    wiki: "Eurasian_jay",
    color: "#b88060",
    sizeCategory: "medium",
    sizeCm: 35,
    where: ["Oak woodlands", "Parks with mature trees", "Killarney National Park"],
    names: {
      "en": "Eurasian Jay",
      "zh-Hant": "松鴉",
      "zh-Hans": "松鸦",
      "yue": "松鴉",
      "fr": "Geai des chênes",
      "es": "Arrendajo común"
    },
    pronunciation: { pinyin: "sōng yā", jyutping: "cung4 aa1" },
    latin: "Garrulus glandarius",
    description: {
      "en": "A pinkish-brown crow with bright blue wing patches. Jays bury thousands of acorns each autumn — and forget where some are, helping new oak trees grow!",
      "zh-Hant": "一隻粉啡色的烏鴉，翅膀有亮藍色斑塊。松鴉每年秋天會埋藏數千顆橡實，忘記其中一些的位置，幫助新橡樹生長！",
      "zh-Hans": "一只粉啡色的乌鸦，翅膀有亮蓝色斑块。松鸦每年秋天会埋藏数千颗橡实，忘记其中一些的位置，帮助新橡树生长！",
      "yue": "一隻粉啡色嘅烏鴉，對翼有鮮藍色斑紋。松鴉每年秋天會埋藏幾千粒橡實，唔記得其中一啲喺邊，反而幫到新橡樹生長！",
      "fr": "Un corvidé brun-rosé avec des plumes bleu vif sur les ailes. Les geais enterrent des milliers de glands chaque automne — et en oublient assez pour faire pousser de nouveaux chênes !",
      "es": "Un córvido marrón-rosado con manchas azul brillante en las alas. ¡Los arrendajos entierran miles de bellotas cada otoño y olvidan muchas, ayudando a crecer nuevos robles!"
    }
  },
  {
    id: "songthrush",
    wiki: "Song_thrush",
    color: "#a87850",
    sizeCategory: "medium",
    sizeCm: 23,
    where: ["Gardens", "Parks", "Hedgerows", "Woodlands"],
    names: {
      "en": "Song Thrush",
      "zh-Hant": "歐歌鶇",
      "zh-Hans": "欧歌鸫",
      "yue": "歐歌鶇",
      "fr": "Grive musicienne",
      "es": "Zorzal común"
    },
    pronunciation: { pinyin: "ōu gē dōng", jyutping: "au1 go1 dung1" },
    latin: "Turdus philomelos",
    description: {
      "en": "A brown bird with a speckled creamy chest. Famous for its beautiful song where it repeats each phrase three times!",
      "zh-Hant": "一隻棕色的鳥，胸口有奶油色斑點。以美妙的歌聲聞名，每個樂句都會重複三次！",
      "zh-Hans": "一只棕色的鸟，胸口有奶油色斑点。以美妙的歌声闻名，每个乐句都会重复三次！",
      "yue": "一隻啡色嘅雀，胸口有忌廉色斑點。以靚仔嘅歌聲出名，每句都會重複三次！",
      "fr": "Un oiseau brun à la poitrine crème mouchetée. Célèbre pour son beau chant où chaque phrase est répétée trois fois !",
      "es": "Un ave marrón con el pecho color crema moteado. ¡Famoso por su hermoso canto, donde repite cada frase tres veces!"
    }
  },
  {
    id: "mistlethrush",
    wiki: "Mistle_thrush",
    color: "#9b8264",
    sizeCategory: "medium",
    sizeCm: 28,
    where: ["Parks with tall trees", "Woodlands", "Farmland"],
    names: {
      "en": "Mistle Thrush",
      "zh-Hant": "槲鶇",
      "zh-Hans": "槲鸫",
      "yue": "槲鶇",
      "fr": "Grive draine",
      "es": "Zorzal charlo"
    },
    pronunciation: { pinyin: "hú dōng", jyutping: "huk6 dung1" },
    latin: "Turdus viscivorus",
    description: {
      "en": "Bigger than its song thrush cousin. Sings from very tall trees, even in stormy weather — sometimes called the \"storm cock\"!",
      "zh-Hant": "比歐歌鶇大一些。會在很高的樹上唱歌，連暴風雨天都不停，所以也被稱為「暴風雨之鳥」！",
      "zh-Hans": "比欧歌鸫大一些。会在很高的树上唱歌，连暴风雨天都不停，所以也被称为「暴风雨之鸟」！",
      "yue": "比歐歌鶇大粒少少。會企喺好高嘅樹上面唱歌，連風暴天都唔停，所以叫做「風暴鳥」！",
      "fr": "Plus grosse que sa cousine la grive musicienne. Elle chante du haut des grands arbres, même par temps d'orage — d'où son surnom de « fouineur de tempête » !",
      "es": "Más grande que su prima la zorzal común. Canta desde árboles muy altos, incluso con tormenta — ¡por eso se le llama «el cantor de las tormentas»!"
    }
  },
  {
    id: "dunnock",
    wiki: "Dunnock",
    color: "#7c6852",
    sizeCategory: "small",
    sizeCm: 14,
    where: ["Hedgerows", "Gardens", "Parks", "Woodland edges"],
    names: {
      "en": "Dunnock",
      "zh-Hant": "林岩鷚",
      "zh-Hans": "林岩鹨",
      "yue": "林岩鷚",
      "fr": "Accenteur mouchet",
      "es": "Acentor común"
    },
    pronunciation: { pinyin: "lín yán liù", jyutping: "lam4 ngaam4 lau6" },
    latin: "Prunella modularis",
    description: {
      "en": "A shy little brown bird often mistaken for a sparrow. Look closer to see its lovely grey head and chest.",
      "zh-Hant": "一隻害羞的棕色小鳥，常常被誤認為麻雀。仔細看會見到牠可愛的灰色頭部和胸部。",
      "zh-Hans": "一只害羞的棕色小鸟，常常被误认为麻雀。仔细看会见到它可爱的灰色头部和胸部。",
      "yue": "一隻怕醜嘅啡色小鳥，成日俾人當係麻雀。睇真啲就會見到佢可愛嘅灰色頭同胸。",
      "fr": "Un petit oiseau brun timide souvent pris pour un moineau. Regarde bien : il a une jolie tête et poitrine grises.",
      "es": "Un pajarito marrón tímido al que a menudo se confunde con un gorrión. Mira de cerca para ver su preciosa cabeza y pecho grises."
    }
  },
  {
    id: "buzzard",
    wiki: "Common_buzzard",
    color: "#7a5a3a",
    sizeCategory: "large",
    sizeCm: 55,
    where: ["Soaring high over woods, fields and hills", "Now common across most of Ireland"],
    names: {
      "en": "Common Buzzard",
      "zh-Hant": "普通鵟",
      "zh-Hans": "普通𫛢",
      "yue": "普通鵟",
      "fr": "Buse variable",
      "es": "Busardo ratonero"
    },
    pronunciation: { pinyin: "pǔ tōng kuáng", jyutping: "pou2 tung1 kong4" },
    latin: "Buteo buteo",
    description: {
      "en": "A large brown bird of prey that soars in wide circles, calling \"kee-yaw!\" Buzzards have made an amazing comeback in Ireland.",
      "zh-Hant": "一隻大型棕色猛禽，會在天空盤旋飛行，叫聲「kee-yaw！」鵟在愛爾蘭已經奇蹟般地回歸。",
      "zh-Hans": "一只大型棕色猛禽，会在天空盘旋飞行，叫声「kee-yaw！」𫛢在爱尔兰已经奇迹般地回归。",
      "yue": "一隻大型啡色猛禽，會喺天空打圈飛，叫聲「kee-yaw！」鵟喺愛爾蘭已經奇蹟般咁回歸返。",
      "fr": "Un grand rapace brun qui plane en larges cercles en criant « kee-yaw ! » La buse a fait un retour spectaculaire en Irlande.",
      "es": "Un gran rapaz marrón que planea en amplios círculos gritando «¡kee-yaw!». ¡El busardo ha hecho un regreso espectacular a Irlanda!"
    }
  },
  {
    id: "sparrowhawk",
    wiki: "Eurasian_sparrowhawk",
    color: "#8a8a8a",
    sizeCategory: "medium",
    sizeCm: 35,
    where: ["Gardens", "Parks", "Woodlands"],
    names: {
      "en": "Eurasian Sparrowhawk",
      "zh-Hant": "雀鷹",
      "zh-Hans": "雀鹰",
      "yue": "雀鷹",
      "fr": "Épervier d'Europe",
      "es": "Gavilán común"
    },
    pronunciation: { pinyin: "què yīng", jyutping: "zoek3 jing1" },
    latin: "Accipiter nisus",
    description: {
      "en": "A speedy hawk that hunts small birds at garden feeders. It zips through gardens like a streak of grey lightning!",
      "zh-Hant": "一隻飛得超快的鷹，會獵食花園餵鳥器旁的小鳥。牠會像灰色閃電一樣穿過花園！",
      "zh-Hans": "一只飞得超快的鹰，会猎食花园喂鸟器旁的小鸟。它会像灰色闪电一样穿过花园！",
      "yue": "一隻飛得超快嘅鷹，會獵食花園餵鳥器附近嘅小鳥。佢會好似灰色閃電咁穿過花園！",
      "fr": "Un rapace rapide qui chasse les petits oiseaux près des mangeoires. Il fend les jardins comme un éclair gris !",
      "es": "Un halcón veloz que caza pajaritos en los comederos del jardín. ¡Atraviesa los jardines como un rayo gris!"
    }
  },
  {
    id: "kestrel",
    wiki: "Common_kestrel",
    color: "#b46b3a",
    sizeCategory: "medium",
    sizeCm: 34,
    where: ["Roadside verges", "Open fields", "Motorway edges"],
    names: {
      "en": "Common Kestrel",
      "zh-Hant": "紅隼",
      "zh-Hans": "红隼",
      "yue": "紅隼",
      "fr": "Faucon crécerelle",
      "es": "Cernícalo vulgar"
    },
    pronunciation: { pinyin: "hóng sǔn", jyutping: "hung4 zeon2" },
    latin: "Falco tinnunculus",
    description: {
      "en": "A small falcon you can spot HOVERING perfectly still in the air, watching for mice in the grass below!",
      "zh-Hant": "一隻細小的隼，你可以看到牠在空中完美地懸停，注視著草地裡的老鼠！",
      "zh-Hans": "一只细小的隼，你可以看到它在空中完美地悬停，注视着草地里的老鼠！",
      "yue": "一隻細隻嘅隼，你會見到佢喺空中完美咁懸停，盯住下面草地嘅老鼠！",
      "fr": "Un petit faucon que tu peux voir suspendu en plein vol, immobile dans les airs, à l'affût d'une souris dans l'herbe !",
      "es": "Un pequeño halcón al que puedes ver cerniéndose perfectamente quieto en el aire, ¡vigilando ratones en la hierba!"
    }
  },
  {
    id: "whooperswan",
    wiki: "Whooper_swan",
    color: "#fff8e1",
    sizeCategory: "large",
    sizeCm: 155,
    where: ["Wexford Wildfowl Reserve", "Lough Foyle", "Lough Neagh in winter"],
    names: {
      "en": "Whooper Swan",
      "zh-Hant": "大天鵝",
      "zh-Hans": "大天鹅",
      "yue": "大天鵝",
      "fr": "Cygne chanteur",
      "es": "Cisne cantor"
    },
    pronunciation: { pinyin: "dà tiān é", jyutping: "daai6 tin1 ngo4" },
    latin: "Cygnus cygnus",
    description: {
      "en": "A big white swan that visits Ireland from Iceland every winter. Unlike the mute swan, it really honks loudly!",
      "zh-Hant": "一隻大型白色天鵝，每年冬天從冰島飛到愛爾蘭。和疣鼻天鵝不同，牠會大聲鳴叫！",
      "zh-Hans": "一只大型白色天鹅，每年冬天从冰岛飞到爱尔兰。和疣鼻天鹅不同，它会大声鸣叫！",
      "yue": "一隻大隻嘅白色天鵝，每年冬天會由冰島飛嚟愛爾蘭。同疣鼻天鵝唔同，佢會大聲叫㗎！",
      "fr": "Un grand cygne blanc qui arrive d'Islande chaque hiver. Contrairement au cygne tuberculé, il trompette très fort !",
      "es": "Un gran cisne blanco que visita Irlanda desde Islandia cada invierno. ¡A diferencia del cisne vulgar, este sí trompetea fuerte!"
    }
  },
  {
    id: "brentgoose",
    wiki: "Brant_(goose)",
    color: "#3a3a3a",
    sizeCategory: "medium",
    sizeCm: 60,
    where: ["Bull Island (Dublin) in winter", "Strangford Lough", "Coastal mudflats"],
    names: {
      "en": "Brent Goose",
      "zh-Hant": "黑雁",
      "zh-Hans": "黑雁",
      "yue": "黑雁",
      "fr": "Bernache cravant",
      "es": "Barnacla carinegra"
    },
    pronunciation: { pinyin: "hēi yàn", jyutping: "hak1 ngaan6" },
    latin: "Branta bernicla",
    description: {
      "en": "A small dark goose that flies all the way from Arctic Canada to spend winter on Irish coasts. Bull Island in Dublin gets thousands!",
      "zh-Hant": "一隻細小的深色雁，會從加拿大北極地區飛到愛爾蘭海岸過冬。都柏林的牛島每年會迎來成千上萬隻！",
      "zh-Hans": "一只细小的深色雁，会从加拿大北极地区飞到爱尔兰海岸过冬。都柏林的牛岛每年会迎来成千上万只！",
      "yue": "一隻細隻嘅深色雁，會從加拿大北極區飛嚟愛爾蘭海岸過冬。都柏林嘅牛島每年都會迎來成千上萬隻！",
      "fr": "Une petite oie sombre qui vole depuis l'Arctique canadien pour passer l'hiver sur les côtes irlandaises. Bull Island à Dublin en accueille des milliers !",
      "es": "Una pequeña barnacla oscura que vuela desde el Ártico canadiense para pasar el invierno en las costas irlandesas. ¡Bull Island en Dublín recibe miles!"
    }
  },
  {
    id: "tuftedduck",
    wiki: "Tufted_duck",
    color: "#1c1c1c",
    sizeCategory: "medium",
    sizeCm: 43,
    where: ["Lakes and reservoirs", "Large urban park lakes", "Lough Neagh"],
    names: {
      "en": "Tufted Duck",
      "zh-Hant": "鳳頭潛鴨",
      "zh-Hans": "凤头潜鸭",
      "yue": "鳳頭潛鴨",
      "fr": "Fuligule morillon",
      "es": "Porrón moñudo"
    },
    pronunciation: { pinyin: "fèng tóu qián yā", jyutping: "fung6 tau4 cim4 aap3" },
    latin: "Aythya fuligula",
    description: {
      "en": "A black-and-white diving duck with bright golden eyes and a funny little ponytail on its head!",
      "zh-Hant": "一隻黑白色的潛水鴨，有著亮金色的眼睛，頭上還有一條好笑的小馬尾！",
      "zh-Hans": "一只黑白色的潜水鸭，有着亮金色的眼睛，头上还有一条好笑的小马尾！",
      "yue": "一隻黑白色嘅潛水鴨，有對閃金色眼，頭頂仲有條好攪笑嘅小馬尾！",
      "fr": "Un canard plongeur noir et blanc aux yeux jaune vif et avec une drôle de petite queue de cheval sur la tête !",
      "es": "Un pato buceador blanco y negro con ojos amarillo brillante y ¡una graciosa coletita en la cabeza!"
    }
  },
  {
    id: "littleegret",
    wiki: "Little_egret",
    color: "#fafafa",
    sizeCategory: "medium",
    sizeCm: 60,
    where: ["Coastal estuaries", "River mouths", "Salt marshes (now widespread)"],
    names: {
      "en": "Little Egret",
      "zh-Hant": "小白鷺",
      "zh-Hans": "小白鹭",
      "yue": "小白鷺",
      "fr": "Aigrette garzette",
      "es": "Garceta común"
    },
    pronunciation: { pinyin: "xiǎo bái lù", jyutping: "siu2 baak6 lou6" },
    latin: "Egretta garzetta",
    description: {
      "en": "A small snow-white heron with black legs and bright yellow feet — like wearing yellow socks! It only arrived in Ireland in 1997.",
      "zh-Hant": "一隻雪白色的小鷺，有黑色的腳和亮黃色的腳趾——好像穿著黃色襪子！牠1997年才來到愛爾蘭。",
      "zh-Hans": "一只雪白色的小鹭，有黑色的脚和亮黄色的脚趾——好像穿着黄色袜子！它1997年才来到爱尔兰。",
      "yue": "一隻雪白色嘅細鷺，有黑色腳同鮮黃色腳趾——好似著住對黃色襪咁！佢1997年先嚟到愛爾蘭。",
      "fr": "Un petit héron blanc neige aux pattes noires et aux pieds jaune vif — comme des chaussettes jaunes ! Elle n'est arrivée en Irlande qu'en 1997.",
      "es": "Una pequeña garza blanca como la nieve, con patas negras y pies amarillo brillante, ¡como si llevara calcetines amarillos! Solo llegó a Irlanda en 1997."
    }
  },
  {
    id: "coot",
    wiki: "Eurasian_coot",
    color: "#2a2a2a",
    sizeCategory: "medium",
    sizeCm: 38,
    where: ["Park lakes", "Reservoirs", "Slow rivers"],
    names: {
      "en": "Eurasian Coot",
      "zh-Hant": "白骨頂",
      "zh-Hans": "白骨顶",
      "yue": "白骨頂",
      "fr": "Foulque macroule",
      "es": "Focha común"
    },
    pronunciation: { pinyin: "bái gǔ dǐng", jyutping: "baak6 gwat1 ding2" },
    latin: "Fulica atra",
    description: {
      "en": "A round black waterbird with a bright white face — looks like it just bumped into a wall of white paint!",
      "zh-Hant": "一隻圓滾滾的黑色水鳥，臉是亮白色——看起來好像剛剛撞上了白色油漆牆！",
      "zh-Hans": "一只圆滚滚的黑色水鸟，脸是亮白色——看起来好像刚刚撞上了白色油漆墙！",
      "yue": "一隻圓碌碌嘅黑色水鳥，個面係鮮白色——好似啱啱撞咗落白油漆牆度咁！",
      "fr": "Un oiseau d'eau noir et rond au visage blanc éclatant — on dirait qu'il vient de se cogner dans un mur de peinture blanche !",
      "es": "Un ave acuática negra y rechoncha con la cara blanco brillante — ¡parece que acaba de chocar contra una pared de pintura blanca!"
    }
  },
  {
    id: "curlew",
    wiki: "Eurasian_curlew",
    color: "#a08a6c",
    sizeCategory: "large",
    sizeCm: 55,
    where: ["Wet farmland", "Estuaries", "Mudflats"],
    names: {
      "en": "Eurasian Curlew",
      "zh-Hant": "白腰杓鷸",
      "zh-Hans": "白腰杓鹬",
      "yue": "白腰杓鷸",
      "fr": "Courlis cendré",
      "es": "Zarapito real"
    },
    pronunciation: { pinyin: "bái yāo sháo yù", jyutping: "baak6 jiu1 zoek3 wat6" },
    latin: "Numenius arquata",
    description: {
      "en": "A big brown wader with a long downward-curving beak. Its haunting \"cur-lew!\" call is a magical sound — sadly very rare in Ireland today.",
      "zh-Hant": "一隻大型棕色的涉禽，有一個長長的、向下彎曲的嘴巴。牠悠遠的「cur-lew！」叫聲非常神奇，但現在在愛爾蘭已經很稀有了。",
      "zh-Hans": "一只大型棕色的涉禽，有一个长长的、向下弯曲的嘴巴。它悠远的「cur-lew！」叫声非常神奇，但现在在爱尔兰已经很稀有了。",
      "yue": "一隻大型啡色嘅涉禽，有個長長嘅、向下彎嘅嘴。佢悠遠嘅「cur-lew！」叫聲好神奇，但宜家喺愛爾蘭好稀有。",
      "fr": "Un grand limicole brun au long bec recourbé. Son cri envoûtant « cour-lis ! » est magique, mais malheureusement très rare en Irlande aujourd'hui.",
      "es": "Un gran limícola marrón con un pico largo y curvado hacia abajo. Su evocador canto «¡cur-lew!» es mágico, pero por desgracia es muy raro en Irlanda hoy."
    }
  },
  {
    id: "lapwing",
    wiki: "Northern_lapwing",
    color: "#1a4f3f",
    sizeCategory: "medium",
    sizeCm: 30,
    where: ["Wet fields", "Farmland", "Coastal marshes"],
    names: {
      "en": "Northern Lapwing",
      "zh-Hant": "鳳頭麥雞",
      "zh-Hans": "凤头麦鸡",
      "yue": "鳳頭麥雞",
      "fr": "Vanneau huppé",
      "es": "Avefría europea"
    },
    pronunciation: { pinyin: "fèng tóu mài jī", jyutping: "fung6 tau4 mak6 gai1" },
    latin: "Vanellus vanellus",
    description: {
      "en": "A bird with a wonky punk hairstyle on its head and shimmering green wings! Its tumbling display flight is amazing in spring.",
      "zh-Hant": "頭上有一個彎彎的龐克髮型，配上閃閃綠色的翅膀！春天會做出令人驚嘆的翻滾求偶飛行表演。",
      "zh-Hans": "头上有一个弯弯的朋克发型，配上闪闪绿色的翅膀！春天会做出令人惊叹的翻滚求偶飞行表演。",
      "yue": "頭上有個彎彎嘅龐克頭髮型，配住閃閃綠色嘅翼！春天會表演令人嘩然嘅翻滾飛行。",
      "fr": "Un oiseau avec une drôle de coiffure punk sur la tête et des ailes vert iridescent ! Son vol de parade en culbutes au printemps est spectaculaire.",
      "es": "¡Un ave con un peinado punk torcido en la cabeza y unas alas verdes brillantes! Su acrobático vuelo nupcial en primavera es espectacular."
    }
  },
  {
    id: "cormorant",
    wiki: "Great_cormorant",
    color: "#1f1f1f",
    sizeCategory: "large",
    sizeCm: 90,
    where: ["Sea cliffs", "Coasts", "Lakes", "Rivers"],
    names: {
      "en": "Great Cormorant",
      "zh-Hant": "普通鸕鶿",
      "zh-Hans": "普通鸬鹚",
      "yue": "普通鸕鶿",
      "fr": "Grand Cormoran",
      "es": "Cormorán grande"
    },
    pronunciation: { pinyin: "pǔ tōng lú cí", jyutping: "pou2 tung1 lou4 ci4" },
    latin: "Phalacrocorax carbo",
    description: {
      "en": "A big black diving bird that catches fish underwater. After a swim it sits with wings spread wide to dry — like a bird-shaped umbrella!",
      "zh-Hant": "一隻大型黑色潛水鳥，會在水下抓魚。游泳後會張開翅膀坐著曬乾——好像一把鳥形雨傘！",
      "zh-Hans": "一只大型黑色潜水鸟，会在水下抓鱼。游泳后会张开翅膀坐着晒干——好像一把鸟形雨伞！",
      "yue": "一隻大型黑色潛水鳥，會喺水底捉魚。游完水之後會張開對翼坐喺度曬乾——好似一把鳥形遮咁！",
      "fr": "Un grand oiseau plongeur noir qui attrape des poissons sous l'eau. Après la baignade, il s'assied les ailes grandes ouvertes pour sécher — comme un parapluie en forme d'oiseau !",
      "es": "Una gran ave buceadora negra que pesca bajo el agua. ¡Después del chapuzón se sienta con las alas extendidas para secarse, como un paraguas con forma de pájaro!"
    }
  },
  {
    id: "razorbill",
    wiki: "Razorbill",
    color: "#1a1a1a",
    sizeCategory: "medium",
    sizeCm: 40,
    where: ["Skellig Islands", "Saltee Islands", "Cliffs of Moher", "Rathlin Island"],
    names: {
      "en": "Razorbill",
      "zh-Hant": "刀嘴海雀",
      "zh-Hans": "刀嘴海雀",
      "yue": "刀嘴海雀",
      "fr": "Pingouin torda",
      "es": "Alca común"
    },
    pronunciation: { pinyin: "dāo zuǐ hǎi què", jyutping: "dou1 zeoi2 hoi2 zoek3" },
    latin: "Alca torda",
    description: {
      "en": "A black-and-white seabird with a thick, blade-shaped beak. It looks a bit like a penguin but can fly — and dive deep to catch fish!",
      "zh-Hant": "一隻黑白色的海鳥，有又厚又像刀片的嘴巴。樣子有點像企鵝，但會飛——而且會潛得很深抓魚！",
      "zh-Hans": "一只黑白色的海鸟，有又厚又像刀片的嘴巴。样子有点像企鹅，但会飞——而且会潜得很深抓鱼！",
      "yue": "一隻黑白色嘅海鳥，有個又厚又似刀片嘅嘴。樣似企鵝，但會飛——仲會潛得好深去捉魚！",
      "fr": "Un oiseau marin noir et blanc au bec épais en forme de lame. Il ressemble un peu à un manchot mais sait voler — et plonger très profond !",
      "es": "Un ave marina blanca y negra con un pico grueso en forma de cuchilla. Se parece a un pingüino pero ¡sabe volar y bucear muy hondo!"
    }
  },
  {
    id: "guillemot",
    wiki: "Common_murre",
    color: "#3a3a3a",
    sizeCategory: "medium",
    sizeCm: 42,
    where: ["Crowded sea cliffs of Skelligs, Cliffs of Moher, Rathlin"],
    names: {
      "en": "Common Guillemot",
      "zh-Hant": "海鴉",
      "zh-Hans": "海鸦",
      "yue": "海鴉",
      "fr": "Guillemot de Troïl",
      "es": "Arao común"
    },
    pronunciation: { pinyin: "hǎi yā", jyutping: "hoi2 aa1" },
    latin: "Uria aalge",
    description: {
      "en": "Thousands pack onto narrow cliff ledges to nest, side by side. Babies leap off the cliff at just three weeks old to land in the sea!",
      "zh-Hant": "成千上萬隻會擠在狹窄的懸崖架上築巢，一隻挨一隻。雛鳥才三週大就會從懸崖跳下來，落入大海！",
      "zh-Hans": "成千上万只会挤在狭窄的悬崖架上筑巢，一只挨一只。雏鸟才三周大就会从悬崖跳下来，落入大海！",
      "yue": "成千上萬隻會擠喺好窄嘅懸崖架上面做窩，一隻貼住一隻。BB先三個禮拜大就會從懸崖跳落去海度！",
      "fr": "Des milliers se serrent sur d'étroites corniches de falaise pour nicher, côte à côte. Les bébés sautent de la falaise à seulement trois semaines pour atterrir dans la mer !",
      "es": "Miles se apretujan en estrechas cornisas de los acantilados para anidar, uno junto a otro. ¡Las crías saltan del acantilado al mar con solo tres semanas!"
    }
  },
  {
    id: "manxshearwater",
    wiki: "Manx_shearwater",
    color: "#2a2a2a",
    sizeCategory: "medium",
    sizeCm: 35,
    where: ["Skellig Islands", "Other islands; only ashore at night"],
    names: {
      "en": "Manx Shearwater",
      "zh-Hant": "大鸌",
      "zh-Hans": "大鹱",
      "yue": "大鸌",
      "fr": "Puffin des Anglais",
      "es": "Pardela pichoneta"
    },
    pronunciation: { pinyin: "dà huò", jyutping: "daai6 fok6" },
    latin: "Puffinus puffinus",
    description: {
      "en": "A magical seabird that flies low over the waves on stiff wings. Visits its cliff burrow only at night to hide from predators!",
      "zh-Hant": "一隻神奇的海鳥，會用僵硬的翅膀貼著海浪低飛。只會在晚上回到懸崖上的巢穴，避免被天敵發現！",
      "zh-Hans": "一只神奇的海鸟，会用僵硬的翅膀贴着海浪低飞。只会在晚上回到悬崖上的巢穴，避免被天敌发现！",
      "yue": "一隻神奇嘅海鳥，會用硬硬嘅翼貼住海浪低飛。只會喺夜晚先返窩，等天敵搵唔到佢！",
      "fr": "Un oiseau marin magique qui rase les vagues avec ses ailes raides. Il ne rentre à son terrier sur la falaise que la nuit pour échapper aux prédateurs !",
      "es": "Una mágica ave marina que vuela bajo sobre las olas con alas rígidas. ¡Solo vuelve a su madriguera del acantilado de noche para esconderse de los depredadores!"
    }
  },
  {
    id: "herringgull",
    wiki: "European_herring_gull",
    color: "#bababa",
    sizeCategory: "large",
    sizeCm: 60,
    where: ["Coasts and harbours", "Towns", "Even your chip shop!"],
    names: {
      "en": "European Herring Gull",
      "zh-Hant": "銀鷗",
      "zh-Hans": "银鸥",
      "yue": "銀鷗",
      "fr": "Goéland argenté",
      "es": "Gaviota argéntea"
    },
    pronunciation: { pinyin: "yín ōu", jyutping: "ngan4 au1" },
    latin: "Larus argentatus",
    description: {
      "en": "The big noisy seagull that might steal your chips at the seaside! Smart birds that can copy raindrops to trick worms out of the ground.",
      "zh-Hant": "那隻會在海邊偷你薯條的大型嘈吵海鷗！牠們很聰明，會模仿雨滴的聲音來騙地下的蟲子出來。",
      "zh-Hans": "那只会在海边偷你薯条的大型嘈杂海鸥！它们很聪明，会模仿雨滴的声音来骗地下的虫子出来。",
      "yue": "嗰隻會喺海邊偷你薯條嘅大型嘈耳海鷗！佢哋好醒目，會模仿落雨嘅聲音呃地底嘅蟲出嚟。",
      "fr": "La grande mouette bruyante qui pourrait voler tes frites au bord de la mer ! Très maligne, elle imite le bruit de la pluie pour faire sortir les vers du sol.",
      "es": "¡La gran y ruidosa gaviota que puede robarte las patatas en la playa! Son muy listas y copian el sonido de la lluvia para engañar a los gusanos."
    }
  },
  {
    id: "blackheadedgull",
    wiki: "Black-headed_gull",
    color: "#7a4a4a",
    sizeCategory: "medium",
    sizeCm: 38,
    where: ["Coasts", "Lakes", "Parks", "Often inland in fields"],
    names: {
      "en": "Black-headed Gull",
      "zh-Hant": "紅嘴鷗",
      "zh-Hans": "红嘴鸥",
      "yue": "紅嘴鷗",
      "fr": "Mouette rieuse",
      "es": "Gaviota reidora"
    },
    pronunciation: { pinyin: "hóng zuǐ ōu", jyutping: "hung4 zeoi2 au1" },
    latin: "Chroicocephalus ridibundus",
    description: {
      "en": "Smaller than the herring gull. In summer it has a chocolate-brown head — not actually black! In winter the head turns mostly white.",
      "zh-Hant": "比銀鷗小。夏天頭部是巧克力棕色——其實不是黑色！冬天頭部會變成大部分白色。",
      "zh-Hans": "比银鸥小。夏天头部是巧克力棕色——其实不是黑色！冬天头部会变成大部分白色。",
      "yue": "比銀鷗細隻。夏天個頭係朱古力啡色——其實唔係黑色！冬天個頭就會變到大部份白色。",
      "fr": "Plus petite que le goéland argenté. En été elle a la tête brun chocolat — pas vraiment noire ! En hiver la tête devient presque toute blanche.",
      "es": "Más pequeña que la gaviota argéntea. En verano tiene la cabeza marrón chocolate — ¡no es negra de verdad! En invierno la cabeza se vuelve casi blanca."
    }
  },
  {
    id: "swift",
    wiki: "Common_swift",
    color: "#3a3a3a",
    sizeCategory: "small",
    sizeCm: 17,
    where: ["Skies above towns and cities, May to August"],
    names: {
      "en": "Common Swift",
      "zh-Hant": "普通雨燕",
      "zh-Hans": "普通雨燕",
      "yue": "普通雨燕",
      "fr": "Martinet noir",
      "es": "Vencejo común"
    },
    pronunciation: { pinyin: "pǔ tōng yǔ yàn", jyutping: "pou2 tung1 jyu5 jin3" },
    latin: "Apus apus",
    description: {
      "en": "Screaming summer visitors that fly faster than any other small bird! Swifts even SLEEP while flying, only landing to nest.",
      "zh-Hant": "夏天會尖叫著飛來的訪客，比任何其他小鳥都飛得快！雨燕甚至會邊飛邊睡覺，只在築巢時才降落。",
      "zh-Hans": "夏天会尖叫着飞来的访客，比任何其他小鸟都飞得快！雨燕甚至会边飞边睡觉，只在筑巢时才降落。",
      "yue": "夏天會尖叫住飛嚟嘅訪客，飛得比任何細小鳥都快！雨燕仲會一邊飛一邊瞓覺，只係做窩先會落地。",
      "fr": "Des visiteurs estivaux criards qui volent plus vite que tout autre petit oiseau ! Les martinets dorment même en volant, et ne se posent que pour nicher.",
      "es": "¡Visitantes estivales que vuelan gritando más rápido que cualquier otra ave pequeña! Los vencejos hasta DUERMEN volando y solo se posan para anidar."
    }
  },
  {
    id: "henharrier",
    wiki: "Hen_harrier",
    color: "#a0a8b0",
    sizeCategory: "large",
    sizeCm: 50,
    where: ["Open boglands and moors (Wicklow & Kerry uplands)", "Young forestry"],
    names: {
      "en": "Hen Harrier",
      "zh-Hant": "白尾鷂",
      "zh-Hans": "白尾鹞",
      "yue": "白尾鷂",
      "fr": "Busard Saint-Martin",
      "es": "Aguilucho pálido"
    },
    pronunciation: { pinyin: "bái wěi yào", jyutping: "baak6 mei5 jiu5" },
    latin: "Circus cyaneus",
    description: {
      "en": "A graceful bird of prey that floats low over moorland with wings held in a V-shape. Males are pale grey \"ghost birds\" — sadly rare now.",
      "zh-Hant": "一隻優雅的猛禽，會以V字形的翅膀低飛掠過荒野。雄鳥呈淡灰色，被稱為「幽靈鳥」——可惜現在很稀有。",
      "zh-Hans": "一只优雅的猛禽，会以V字形的翅膀低飞掠过荒野。雄鸟呈淡灰色，被称为「幽灵鸟」——可惜现在很稀有。",
      "yue": "一隻優雅嘅猛禽，會用V字形嘅翼貼住荒原低飛。雄鳥係淡灰色，叫做「幽靈鳥」——可惜宜家好稀有。",
      "fr": "Un rapace gracieux qui plane bas au-dessus des landes, ailes en V. Les mâles, gris pâle, sont surnommés « oiseaux fantômes » — hélas devenus rares.",
      "es": "Un elegante rapaz que vuela bajo sobre los brezales con las alas en forma de V. Los machos son gris pálido, los «pájaros fantasma» — por desgracia hoy son raros."
    }
  },
  {
    id: "skylark",
    wiki: "Eurasian_skylark",
    color: "#9a8460",
    sizeCategory: "small",
    sizeCm: 18,
    where: ["Open farmland", "Sand dunes", "Moorland"],
    names: {
      "en": "Eurasian Skylark",
      "zh-Hant": "雲雀",
      "zh-Hans": "云雀",
      "yue": "雲雀",
      "fr": "Alouette des champs",
      "es": "Alondra común"
    },
    pronunciation: { pinyin: "yún què", jyutping: "wan4 zoek3" },
    latin: "Alauda arvensis",
    description: {
      "en": "A brown bird that climbs higher and higher into the sky, singing nonstop for minutes — sometimes so high you can barely see it!",
      "zh-Hant": "一隻棕色的小鳥，會越飛越高、越飛越高，連續唱歌好幾分鐘——有時候飛得太高，你幾乎看不到牠！",
      "zh-Hans": "一只棕色的小鸟，会越飞越高、越飞越高，连续唱歌好几分钟——有时候飞得太高，你几乎看不到它！",
      "yue": "一隻啡色嘅小鳥，會越飛越高，唱歌唱足幾分鐘——有時飛到太高，你幾乎見唔到佢！",
      "fr": "Un petit oiseau brun qui monte de plus en plus haut dans le ciel en chantant sans s'arrêter — parfois si haut qu'on ne le voit presque plus !",
      "es": "Un pajarito marrón que sube cada vez más alto al cielo cantando sin parar durante minutos — ¡a veces tan alto que apenas se ve!"
    }
  },
  {
    id: "yellowhammer",
    wiki: "Yellowhammer",
    color: "#f0c93d",
    sizeCategory: "small",
    sizeCm: 16,
    where: ["Hedgerows on tilled farmland", "Especially east coast"],
    names: {
      "en": "Yellowhammer",
      "zh-Hant": "黃鵐",
      "zh-Hans": "黄鹀",
      "yue": "黃鵐",
      "fr": "Bruant jaune",
      "es": "Escribano cerillo"
    },
    pronunciation: { pinyin: "huáng wú", jyutping: "wong4 mou4" },
    latin: "Emberiza citrinella",
    description: {
      "en": "A bright yellow bunting whose song sounds like \"a little bit of bread and no cheese!\" Sadly becoming rare on Irish farmland.",
      "zh-Hant": "一隻亮黃色的鵐，叫聲聽起來像「a little bit of bread and no cheese！」可惜在愛爾蘭農地越來越少見。",
      "zh-Hans": "一只亮黄色的鹀，叫声听起来像「a little bit of bread and no cheese！」可惜在爱尔兰农地越来越少见。",
      "yue": "一隻鮮黃色嘅鵐，叫聲好似「a little bit of bread and no cheese！」可惜喺愛爾蘭農地越嚟越少見。",
      "fr": "Un bruant jaune vif dont le chant ressemble à « un p'tit bout d'pain et pas d'fromage ! » Hélas, il devient rare dans les campagnes irlandaises.",
      "es": "Un escribano amarillo brillante cuyo canto suena como «¡a little bit of bread and no cheese!» Por desgracia se está volviendo raro en el campo irlandés."
    }
  },
  {
    id: "stonechat",
    wiki: "European_stonechat",
    color: "#c25a3a",
    sizeCategory: "small",
    sizeCm: 12,
    where: ["Coastal heathland", "Gorse bushes", "Moorland", "Bogs"],
    names: {
      "en": "European Stonechat",
      "zh-Hant": "黑喉鴝",
      "zh-Hans": "黑喉鸲",
      "yue": "黑喉鴝",
      "fr": "Tarier pâtre",
      "es": "Tarabilla común"
    },
    pronunciation: { pinyin: "hēi hóu qú", jyutping: "hak1 hau4 keoi4" },
    latin: "Saxicola rubicola",
    description: {
      "en": "A perky little bird with a black head and orange chest. Sits on top of gorse bushes calling \"tsak, tsak!\" like two stones being knocked together.",
      "zh-Hant": "一隻活潑的小鳥，頭部黑色，胸口橙色。會站在荊豆叢頂上叫「tsak、tsak！」像兩塊石頭撞在一起的聲音。",
      "zh-Hans": "一只活泼的小鸟，头部黑色，胸口橙色。会站在荆豆丛顶上叫「tsak、tsak！」像两块石头撞在一起的声音。",
      "yue": "一隻活潑嘅小鳥，個頭黑色，胸口橙色。會企喺荊豆叢頂叫「tsak、tsak！」好似兩粒石頭撞埋一齊嘅聲咁。",
      "fr": "Un petit oiseau vif à tête noire et poitrine orange. Il se perche sur les ajoncs en lançant « tsak, tsak ! » comme deux cailloux qu'on entrechoque.",
      "es": "Un pajarito vivaracho con la cabeza negra y el pecho naranja. Se posa en lo alto de los aulagares cantando «¡tsak, tsak!» como dos piedras chocando."
    }
  },
  {
    id: "kittiwake",
    wiki: "Black-legged_kittiwake",
    color: "#d8d8d8",
    sizeCategory: "medium",
    sizeCm: 40,
    where: ["Sea cliffs", "Skellig Islands", "Cliffs of Moher", "Rathlin Island"],
    names: {
      "en": "Black-legged Kittiwake",
      "zh-Hant": "三趾鷗",
      "zh-Hans": "三趾鸥",
      "yue": "三趾鷗",
      "fr": "Mouette tridactyle",
      "es": "Gaviota tridáctila"
    },
    pronunciation: { pinyin: "sān zhǐ ōu", jyutping: "saam1 zi2 au1" },
    latin: "Rissa tridactyla",
    description: {
      "en": "A small white-and-grey gull that nests on tiny cliff ledges over the sea. Its name comes from its noisy \"kitti-waaaake!\" call.",
      "zh-Hant": "一隻細小的白灰色海鷗，會在海上的懸崖小架上築巢。名字來自牠嘈吵的「kitti-waaaake！」叫聲。",
      "zh-Hans": "一只细小的白灰色海鸥，会在海上的悬崖小架上筑巢。名字来自它嘈杂的「kitti-waaaake！」叫声。",
      "yue": "一隻細隻嘅白灰色海鷗，會喺海上面嘅懸崖細架做窩。個名嚟自佢嘈耳嘅「kitti-waaaake！」叫聲。",
      "fr": "Une petite mouette blanche et grise qui niche sur d'étroites corniches au-dessus de la mer. Son nom vient de son cri bruyant « kitti-waaake ! »",
      "es": "Una pequeña gaviota blanca y gris que anida en estrechas cornisas sobre el mar. Su nombre viene de su ruidoso «¡kitti-waaaake!»"
    }
  },
  {
    id: "housemartin",
    wiki: "Common_house_martin",
    color: "#3a4a8a",
    sizeCategory: "small",
    sizeCm: 14,
    where: ["Town and village houses (under eaves)", "Open countryside, summer"],
    names: {
      "en": "Common House Martin",
      "zh-Hant": "白腹毛腳燕",
      "zh-Hans": "白腹毛脚燕",
      "yue": "白腹毛腳燕",
      "fr": "Hirondelle de fenêtre",
      "es": "Avión común"
    },
    pronunciation: { pinyin: "bái fù máo jiǎo yàn", jyutping: "baak6 fuk1 mou4 goek3 jin3" },
    latin: "Delichon urbicum",
    description: {
      "en": "A summer visitor that builds neat mud nests stuck under house roofs. Has a snowy white bottom and steel-blue back!",
      "zh-Hant": "一隻夏天才會出現的訪客，會在屋簷下用泥巴築出整齊的小巢。屁股雪白，背部鋼藍色！",
      "zh-Hans": "一只夏天才会出现的访客，会在屋檐下用泥巴筑出整齐的小巢。屁股雪白，背部钢蓝色！",
      "yue": "一隻夏天先嚟嘅訪客，會喺屋簷下面用泥造出整齊嘅小窩。個籮係雪白色，背脊係鋼藍色！",
      "fr": "Un visiteur d'été qui construit de jolis nids en boue sous les toits des maisons. Il a un croupion blanc neige et un dos bleu acier !",
      "es": "Un visitante estival que construye prolijos nidos de barro bajo los aleros de las casas. ¡Tiene la rabadilla blanco nieve y el dorso azul acero!"
    }
  }
];

window.SPOTS = [
  {
    id: "skelligs",
    name: "Skellig Islands",
    region: "County Kerry",
    description: {
      "en": "Two amazing rocky islands rising from the sea. Home to puffins, gannets, kittiwakes and Manx shearwaters.",
      "zh-Hant": "兩座從海中升起的奇妙岩石島嶼。是海鸚、北鰹鳥、三趾鷗和大鸌的家。",
      "zh-Hans": "两座从海中升起的奇妙岩石岛屿。是海鹦、北鲣鸟、三趾鸥和大鹱的家。",
      "yue": "兩個從海中升起嘅奇妙岩石島，係海鸚、北鰹鳥、三趾鷗同大鸌嘅屋企。",
      "fr": "Deux îles rocheuses extraordinaires qui surgissent de la mer. Macareux, fous de Bassan, mouettes tridactyles et puffins y nichent.",
      "es": "Dos asombrosas islas rocosas que se alzan sobre el mar. Hogar de frailecillos, alcatraces, gaviotas tridáctilas y pardelas."
    },
    birds: ["puffin", "gannet", "manxshearwater", "razorbill", "guillemot", "kittiwake"]
  },
  {
    id: "bullisland",
    name: "North Bull Island",
    region: "Dublin",
    description: {
      "en": "Ireland's first National Bird Sanctuary. A short bus ride from Dublin city centre — perfect for spotting waders, ducks and winter geese.",
      "zh-Hant": "愛爾蘭第一個國家鳥類保護區。從都柏林市中心搭巴士很快到達——是觀察涉禽、野鴨和冬候雁的好地方。",
      "zh-Hans": "爱尔兰第一个国家鸟类保护区。从都柏林市中心搭巴士很快到达——是观察涉禽、野鸭和冬候雁的好地方。",
      "yue": "愛爾蘭第一個國家鳥類保護區。由都柏林市中心搭巴士好快就到——係觀察涉禽、野鴨同冬候雁嘅好地方。",
      "fr": "La première réserve ornithologique nationale d'Irlande. À deux pas du centre de Dublin — parfait pour observer limicoles, canards et oies hivernantes.",
      "es": "El primer santuario nacional de aves de Irlanda. A un corto trayecto en bus del centro de Dublín — ideal para ver limícolas, patos y gansos invernantes."
    },
    birds: ["heron", "mallard", "muteswan", "oystercatcher", "brentgoose", "littleegret", "curlew", "blackheadedgull"]
  },
  {
    id: "wexfordreserve",
    name: "Wexford Wildfowl Reserve",
    region: "County Wexford",
    description: {
      "en": "Around 250 species recorded here. In winter, thousands of geese and swans gather on the wet meadows.",
      "zh-Hant": "這裡記錄了約250種鳥類。冬天有成千上萬的雁和天鵝聚集在濕草地上。",
      "zh-Hans": "这里记录了约250种鸟类。冬天有成千上万的雁和天鹅聚集在湿草地上。",
      "yue": "呢度錄得大約250種鳥。冬天有成千上萬嘅雁同天鵝聚集喺濕草地度。",
      "fr": "Environ 250 espèces y sont recensées. En hiver, des milliers d'oies et de cygnes se rassemblent dans les prés humides.",
      "es": "Aquí se han registrado unas 250 especies. En invierno, miles de gansos y cisnes se reúnen en los prados húmedos."
    },
    birds: ["whooperswan", "muteswan", "brentgoose", "mallard", "lapwing", "curlew"]
  },
  {
    id: "rathlin",
    name: "Rathlin Island",
    region: "County Antrim",
    description: {
      "en": "An RSPB nature reserve off the north coast — easier to reach than the Skelligs and full of seabirds in summer.",
      "zh-Hant": "北海岸外的RSPB自然保護區——比斯凱利格群島更容易到達，夏天滿是海鳥。",
      "zh-Hans": "北海岸外的RSPB自然保护区——比斯凯利格群岛更容易到达，夏天满是海鸟。",
      "yue": "北海岸外面嘅RSPB自然保護區——比斯凱利格群島容易去得多，夏天好多海鳥。",
      "fr": "Réserve naturelle de la RSPB au large de la côte nord — plus accessible que les Skelligs, et pleine d'oiseaux marins en été.",
      "es": "Una reserva natural de la RSPB frente a la costa norte — más fácil de visitar que las Skelligs, y llena de aves marinas en verano."
    },
    birds: ["puffin", "gannet", "razorbill", "guillemot", "kittiwake", "cormorant"]
  },
  {
    id: "killarneynp",
    name: "Killarney National Park",
    region: "County Kerry",
    description: {
      "en": "Ancient oak woods and big lakes. Watch the sky for white-tailed eagles, brought back to Ireland from 2007. The oak woods buzz with songbirds.",
      "zh-Hant": "古老的橡木森林和大湖。仰望天空找找白尾海鵰——牠們從2007年起重新被引入愛爾蘭。橡木林裡到處是鳴鳥。",
      "zh-Hans": "古老的橡木森林和大湖。仰望天空找找白尾海雕——它们从2007年起重新被引入爱尔兰。橡木林里到处是鸣鸟。",
      "yue": "古老嘅橡木森林同大湖。望住天空搵下白尾海鵰——佢哋由2007年起重新引入返愛爾蘭。橡木林入面到處都係歌鳥。",
      "fr": "Forêts de chênes anciennes et grands lacs. Regarde le ciel : les pygargues à queue blanche y ont été réintroduits depuis 2007. Les chênaies fourmillent d'oiseaux chanteurs.",
      "es": "Antiguos bosques de robles y grandes lagos. Mira al cielo para ver pigargos, reintroducidos en Irlanda desde 2007. Los robledales bullen de aves cantoras."
    },
    birds: ["wtailedeagle", "buzzard", "jay", "songthrush", "robin", "wren", "heron"]
  },
  {
    id: "phoenixpark",
    name: "Phoenix Park",
    region: "Dublin",
    description: {
      "en": "One of the biggest city parks in Europe. Ducks on the ponds, robins in the trees, magpies on the lawns — and a herd of fallow deer too!",
      "zh-Hant": "歐洲最大的城市公園之一。池塘有鴨子、樹上有知更鳥、草坪上有喜鵲——仲有一群黇鹿！",
      "zh-Hans": "欧洲最大的城市公园之一。池塘有鸭子、树上有知更鸟、草坪上有喜鹊——还有一群黇鹿！",
      "yue": "歐洲最大嘅市內公園之一。池塘有鴨仔、樹上有知更鳥、草坪上有喜鵲——仲有一群黇鹿添！",
      "fr": "L'un des plus grands parcs urbains d'Europe. Des canards sur les étangs, des rouges-gorges dans les arbres, des pies sur les pelouses — et même un troupeau de daims !",
      "es": "Uno de los mayores parques urbanos de Europa. Patos en los estanques, petirrojos en los árboles, urracas en el césped — ¡y hasta una manada de gamos!"
    },
    birds: ["mallard", "robin", "magpie", "hoodedcrow", "woodpigeon", "greattit", "bluetit", "sparrowhawk", "blackbird"]
  },
  {
    id: "cliffsmoher",
    name: "Cliffs of Moher",
    region: "County Clare",
    description: {
      "en": "Towering sea cliffs along the wild Atlantic coast. Look for puffins on the grass at the cliff top in summer, with thousands of guillemots and razorbills below.",
      "zh-Hant": "野生大西洋海岸邊高聳的海崖。夏天可以在崖頂草地上找到海鸚，下方還有成千上萬隻海鴉和刀嘴海雀。",
      "zh-Hans": "野生大西洋海岸边高耸的海崖。夏天可以在崖顶草地上找到海鹦，下方还有成千上万只海鸦和刀嘴海雀。",
      "yue": "野性大西洋海岸邊嘅高聳海崖。夏天可以喺崖頂草地度搵到海鸚，下面仲有成千上萬隻海鴉同刀嘴海雀。",
      "fr": "Falaises maritimes spectaculaires au bord de l'Atlantique sauvage. Cherche les macareux dans l'herbe en haut des falaises en été, avec des milliers de guillemots et pingouins en bas.",
      "es": "Imponentes acantilados frente al Atlántico salvaje. En verano busca frailecillos sobre la hierba en lo alto, con miles de araos y alcas debajo."
    },
    birds: ["puffin", "gannet", "razorbill", "guillemot", "kittiwake", "cormorant"]
  },
  {
    id: "loughneagh",
    name: "Lough Neagh",
    region: "Counties Antrim/Down/Armagh/Tyrone/Derry",
    description: {
      "en": "The biggest lake on the island of Ireland. Home to swans, ducks, terns and waders all year round.",
      "zh-Hant": "愛爾蘭島上最大的湖泊。一年四季都是天鵝、野鴨、燕鷗和涉禽的家。",
      "zh-Hans": "爱尔兰岛上最大的湖泊。一年四季都是天鹅、野鸭、燕鸥和涉禽的家。",
      "yue": "愛爾蘭島上最大嘅湖。一年四季都係天鵝、野鴨、燕鷗同涉禽嘅屋企。",
      "fr": "Le plus grand lac de l'île d'Irlande. Cygnes, canards, sternes et limicoles y vivent toute l'année.",
      "es": "El lago más grande de la isla de Irlanda. Cisnes, patos, charranes y limícolas viven aquí todo el año."
    },
    birds: ["muteswan", "whooperswan", "mallard", "tuftedduck", "coot", "swallow"]
  }
];
