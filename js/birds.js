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
    pronunciation: { pinyin: "lán guān shān què", jyutping: "laam4 saan1 zoek3" },
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
      "yue": "疣鼻天鵝",
      "fr": "Cygne tuberculé",
      "es": "Cisne vulgar"
    },
    pronunciation: { pinyin: "yóu bí tiān é", jyutping: "jau4 bei6 tin1 ngo4" },
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
      "zh-Hant": "最常見的鴨，雄鴨頭部閃閃發光的綠色。牠們最喜歡在池塘裡撲水，「呱呱」地叫。",
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
      "fr": "Avec son masque rouge et ses ailes dorées, le chardonneret est ravissant. En anglais, on appelle un groupe un « charme » — comme une volée magique !",
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
    sizeCm: 90,
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
      "fr": "Un minuscule pouillot vert olive dont le nom vient de son chant : « chiff-chaff, chiff-chaff » tout le printemps !",
      "es": "Un diminuto mosquitero verde-oliva cuyo nombre viene de su canto: «¡chiff-chaff, chiff-chaff!» durante toda la primavera."
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
      "fr": "Un verdier trapu aux plumes vert olive vif et jaunes. Il adore les graines de tournesol des mangeoires.",
      "es": "Un verderón rechoncho de plumas verde oliva y amarillas. Le encantan las pipas de girasol en los comederos."
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
      "es": "Un pequeño carbonero con la cabeza negra y una mancha blanca en la nuca. ¡Le encantan los pinos y los abetos!"
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
      "fr": "Plus grosse que sa cousine la grive musicienne. Elle chante du haut des grands arbres, même par temps d'orage — d'où son surnom de « chanteur des tempêtes » !",
      "es": "Más grande que su primo el zorzal común. Canta desde árboles muy altos, incluso con tormenta — ¡por eso se le llama «el cantor de las tormentas»!"
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
    pronunciation: { pinyin: "pǔ tōng kuáng", jyutping: "pou2 tung1 kwong4" },
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
      "es": "Un ave acuática negra y rechoncha con la cara blanca brillante — ¡parece que acaba de chocar contra una pared de pintura blanca!"
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
    pronunciation: { pinyin: "bái yāo sháo yù", jyutping: "baak6 jiu1 soek3 wat6" },
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
    pronunciation: { pinyin: "dà hù", jyutping: "daai6 wok6" },
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
  },

  /* ===== Batch 3: 24 more birds ===== */

  {
    id: "sandmartin",
    wiki: "Sand_martin",
    color: "#a08a6c",
    sizeCategory: "small",
    sizeCm: 12,
    where: ["Sandy river banks", "Quarries", "Coastal cliffs (summer colonies)"],
    names: {
      "en": "Sand Martin",
      "zh-Hant": "崖沙燕",
      "zh-Hans": "崖沙燕",
      "yue": "崖沙燕",
      "fr": "Hirondelle de rivage",
      "es": "Avión zapador"
    },
    pronunciation: { pinyin: "yá shā yàn", jyutping: "ngaai4 saa1 jin3" },
    latin: "Riparia riparia",
    description: {
      "en": "A small swallow-cousin that digs nest tunnels in sandy river banks. Hundreds nest together in cliff colonies!",
      "zh-Hant": "一隻燕子的小表親，會在沙質河岸挖出隧道做巢。數百隻會一起在崖邊聚居！",
      "zh-Hans": "一只燕子的小表亲，会在沙质河岸挖出隧道做巢。数百只会一起在崖边聚居！",
      "yue": "一隻燕子嘅小表親，會喺沙質河岸度挖隧道做窩。幾百隻會一齊喺崖邊群居！",
      "fr": "Une petite cousine de l'hirondelle qui creuse des tunnels-nids dans les rives sablonneuses. Elles nichent par centaines en colonies sur les falaises !",
      "es": "Una pequeña prima de la golondrina que excava nidos-túnel en riberas arenosas. ¡Cientos anidan juntas en colonias sobre acantilados!"
    }
  },
  {
    id: "sandpiper",
    wiki: "Common_sandpiper",
    color: "#7d6f5a",
    sizeCategory: "small",
    sizeCm: 19,
    where: ["River and lake edges", "Streamsides", "Reservoirs (summer)"],
    names: {
      "en": "Common Sandpiper",
      "zh-Hant": "磯鷸",
      "zh-Hans": "矶鹬",
      "yue": "磯鷸",
      "fr": "Chevalier guignette",
      "es": "Andarríos chico"
    },
    pronunciation: { pinyin: "jī yù", jyutping: "gei1 wat6" },
    latin: "Actitis hypoleucos",
    description: {
      "en": "A small wader that bobs its tail up and down. It flies low over rivers with stiff, flicking wings.",
      "zh-Hant": "一隻細小的涉禽，尾巴會一上一下地擺動。會用僵硬撲動的翅膀，貼著河面低飛。",
      "zh-Hans": "一只细小的涉禽，尾巴会一上一下地摆动。会用僵硬扑动的翅膀，贴着河面低飞。",
      "yue": "一隻細隻嘅涉禽，條尾會上上落落咁擺。會用硬硬嘅翅膀貼住河面低飛。",
      "fr": "Un petit limicole qui balance sa queue de haut en bas. Il vole bas au-dessus des rivières avec des battements d'ailes raides.",
      "es": "Un pequeño limícola que balancea la cola arriba y abajo. Vuela bajo sobre los ríos con aleteos rígidos y rápidos."
    }
  },
  {
    id: "redshank",
    wiki: "Common_redshank",
    color: "#d65a3a",
    sizeCategory: "medium",
    sizeCm: 28,
    where: ["Salt marshes", "Estuaries", "Wet meadows"],
    names: {
      "en": "Common Redshank",
      "zh-Hant": "紅腳鷸",
      "zh-Hans": "红脚鹬",
      "yue": "紅腳鷸",
      "fr": "Chevalier gambette",
      "es": "Archibebe común"
    },
    pronunciation: { pinyin: "hóng jiǎo yù", jyutping: "hung4 goek3 wat6" },
    latin: "Tringa totanus",
    description: {
      "en": "A medium wader with bright red-orange legs and a sharp, watchful \"tee-yew!\" call — the look-out of the saltmarsh!",
      "zh-Hant": "一隻中型涉禽，腳是亮紅橙色，會發出尖銳警戒的「tee-yew！」叫聲——是鹽沼的哨兵！",
      "zh-Hans": "一只中型涉禽，脚是亮红橙色，会发出尖锐警戒的「tee-yew！」叫声——是盐沼的哨兵！",
      "yue": "一隻中型涉禽，對腳係鮮紅橙色，會發出又尖又警惕嘅「tee-yew！」叫聲——係鹽沼嘅哨兵！",
      "fr": "Un limicole de taille moyenne aux pattes rouge-orange vif et au cri perçant « tee-yew ! » — la sentinelle des marais salants !",
      "es": "Un limícola mediano con patas rojo-naranja brillante y un agudo grito vigilante «¡tee-yew!» — ¡el centinela del salobral!"
    }
  },
  {
    id: "greenshank",
    wiki: "Common_greenshank",
    color: "#7a8a78",
    sizeCategory: "medium",
    sizeCm: 32,
    where: ["Estuaries and coastal pools", "Lake shores (autumn)", "Wexford Reserve"],
    names: {
      "en": "Common Greenshank",
      "zh-Hant": "青腳鷸",
      "zh-Hans": "青脚鹬",
      "yue": "青腳鷸",
      "fr": "Chevalier aboyeur",
      "es": "Archibebe claro"
    },
    pronunciation: { pinyin: "qīng jiǎo yù", jyutping: "cing1 goek3 wat6" },
    latin: "Tringa nebularia",
    description: {
      "en": "A taller cousin of the redshank, with green-grey legs and an upturned beak. Listen for its musical \"tew-tew-tew!\" call.",
      "zh-Hant": "紅腳鷸的高個子表親，腳是綠灰色，嘴巴微微向上翹。聽聽牠悅耳的「tew-tew-tew！」叫聲。",
      "zh-Hans": "红脚鹬的高个子表亲，脚是绿灰色，嘴巴微微向上翘。听听它悦耳的「tew-tew-tew！」叫声。",
      "yue": "紅腳鷸嘅高個子表親，對腳係綠灰色，個嘴微微向上翹。聽下佢動聽嘅「tew-tew-tew！」叫聲。",
      "fr": "Un cousin plus grand du chevalier gambette, aux pattes vert-gris et au bec légèrement retroussé. Écoute son « tew-tew-tew ! » mélodieux.",
      "es": "Un primo más alto del archibebe común, con patas verde-gris y pico ligeramente vuelto hacia arriba. ¡Escucha su melodioso «tew-tew-tew!»"
    }
  },
  {
    id: "commontern",
    wiki: "Common_tern",
    color: "#bdbdbd",
    sizeCategory: "medium",
    sizeCm: 35,
    where: ["Coasts", "Estuaries", "Coastal lakes (summer)"],
    names: {
      "en": "Common Tern",
      "zh-Hant": "普通燕鷗",
      "zh-Hans": "普通燕鸥",
      "yue": "普通燕鷗",
      "fr": "Sterne pierregarin",
      "es": "Charrán común"
    },
    pronunciation: { pinyin: "pǔ tōng yàn ōu", jyutping: "pou2 tung1 jin3 au1" },
    latin: "Sterna hirundo",
    description: {
      "en": "Sometimes called a \"sea swallow\" because of its forked tail. It hovers and dives for tiny fish — splash!",
      "zh-Hant": "因為有分叉的尾巴，有時被稱為「海上的燕子」。會懸停然後俯衝抓小魚——啪嗒！",
      "zh-Hans": "因为有分叉的尾巴，有时被称为「海上的燕子」。会悬停然后俯冲抓小鱼——啪嗒！",
      "yue": "因為有條分叉嘅尾巴，有時叫做「海上嘅燕子」。會懸停然後俯衝捉細魚——啪嗒！",
      "fr": "Parfois appelée « hirondelle de mer » à cause de sa queue fourchue. Elle fait du surplace puis plonge sur les petits poissons — plouf !",
      "es": "A veces llamado «golondrina de mar» por su cola ahorquillada. Se cierne y se zambulle a por pececitos — ¡plaf!"
    }
  },
  {
    id: "sandwichtern",
    wiki: "Sandwich_tern",
    color: "#cfcfcf",
    sizeCategory: "medium",
    sizeCm: 40,
    where: ["Coasts", "Estuaries", "Sandy beaches (summer)"],
    names: {
      "en": "Sandwich Tern",
      "zh-Hant": "白嘴端鳳頭燕鷗",
      "zh-Hans": "白嘴端凤头燕鸥",
      "yue": "白嘴端鳳頭燕鷗",
      "fr": "Sterne caugek",
      "es": "Charrán patinegro"
    },
    pronunciation: { pinyin: "bái zuǐ duān fèng tóu yàn ōu", jyutping: "baak6 zeoi2 dyun1 fung6 tau4 jin3 au1" },
    latin: "Thalasseus sandvicensis",
    description: {
      "en": "A tern with a black \"punk\" crest and a yellow-tipped black beak — like it's been dipped in mustard!",
      "zh-Hant": "一隻有黑色「龐克」冠羽的燕鷗，黑色嘴巴的尖端是黃色的——好像沾過芥末！",
      "zh-Hans": "一只有黑色「朋克」冠羽的燕鸥，黑色嘴巴的尖端是黄色的——好像沾过芥末！",
      "yue": "一隻有黑色「龐克」冠羽嘅燕鷗，黑色嘴嘅尖端係黃色——好似沾過芥末咁！",
      "fr": "Une sterne avec une crête noire « punk » et un bec noir à pointe jaune — comme s'il avait été trempé dans la moutarde !",
      "es": "Un charrán con una cresta negra «punk» y un pico negro con la punta amarilla — ¡como si lo hubieran metido en mostaza!"
    }
  },
  {
    id: "arctictern",
    wiki: "Arctic_tern",
    color: "#c5c5c5",
    sizeCategory: "medium",
    sizeCm: 35,
    where: ["Sea cliffs and islands (summer)", "Rockabill Island (Dublin)"],
    names: {
      "en": "Arctic Tern",
      "zh-Hant": "北極燕鷗",
      "zh-Hans": "北极燕鸥",
      "yue": "北極燕鷗",
      "fr": "Sterne arctique",
      "es": "Charrán ártico"
    },
    pronunciation: { pinyin: "běi jí yàn ōu", jyutping: "bak1 gik6 jin3 au1" },
    latin: "Sterna paradisaea",
    description: {
      "en": "Champion traveller of the bird world! Flies from the Arctic to Antarctica every year — that's 70,000 km, more than any other animal!",
      "zh-Hant": "鳥類世界的冠軍旅行家！每年從北極飛到南極——足足7萬公里，比任何動物都遠！",
      "zh-Hans": "鸟类世界的冠军旅行家！每年从北极飞到南极——足足7万公里，比任何动物都远！",
      "yue": "鳥類世界嘅冠軍旅行家！每年從北極飛到南極——成7萬公里，比任何動物都遠！",
      "fr": "Champion voyageur du monde des oiseaux ! Elle vole de l'Arctique à l'Antarctique chaque année — 70 000 km, plus que n'importe quel autre animal !",
      "es": "¡Campeón viajero del mundo de las aves! Vuela del Ártico a la Antártida cada año — ¡70 000 km, más que cualquier otro animal!"
    }
  },
  {
    id: "peregrine",
    wiki: "Peregrine_falcon",
    color: "#3a4a5a",
    sizeCategory: "medium",
    sizeCm: 45,
    where: ["Sea cliffs", "Mountain crags", "City centres (some pairs nest on tall buildings)"],
    names: {
      "en": "Peregrine Falcon",
      "zh-Hant": "遊隼",
      "zh-Hans": "游隼",
      "yue": "遊隼",
      "fr": "Faucon pèlerin",
      "es": "Halcón peregrino"
    },
    pronunciation: { pinyin: "yóu sǔn", jyutping: "jau4 zeon2" },
    latin: "Falco peregrinus",
    description: {
      "en": "The fastest animal on Earth! It dives at over 320 km/h to catch other birds in the air. Sometimes nests on cliffs and city buildings.",
      "zh-Hant": "地球上最快的動物！俯衝時速度超過320公里，會在空中抓住其他鳥兒。有時會在懸崖和城市大樓上築巢。",
      "zh-Hans": "地球上最快的动物！俯冲时速度超过320公里，会在空中抓住其他鸟儿。有时会在悬崖和城市大楼上筑巢。",
      "yue": "地球上最快嘅動物！俯衝時速超過每小時320公里，會喺空中捉其他雀仔。有時會喺懸崖同城市大廈上面做窩。",
      "fr": "L'animal le plus rapide de la Terre ! Il pique à plus de 320 km/h pour attraper d'autres oiseaux en plein vol. Niche parfois sur les falaises et les immeubles.",
      "es": "¡El animal más rápido de la Tierra! Se zambulle a más de 320 km/h para atrapar otras aves en el aire. A veces anida en acantilados y edificios urbanos."
    }
  },
  {
    id: "greylag",
    wiki: "Greylag_goose",
    color: "#8a8470",
    sizeCategory: "large",
    sizeCm: 85,
    where: ["Lakes and marshes", "Farmland", "Estuaries (winter)"],
    names: {
      "en": "Greylag Goose",
      "zh-Hant": "灰雁",
      "zh-Hans": "灰雁",
      "yue": "灰雁",
      "fr": "Oie cendrée",
      "es": "Ánsar común"
    },
    pronunciation: { pinyin: "huī yàn", jyutping: "fui1 ngaan6" },
    latin: "Anser anser",
    description: {
      "en": "A big grey-brown goose with an orange beak. Most farmyard geese in the world come from this wild ancestor!",
      "zh-Hant": "一隻大型的灰啡色雁，配上橙色嘴巴。世界上大部分的家鵝都是來自這個野生祖先！",
      "zh-Hans": "一只大型的灰啡色雁，配上橙色嘴巴。世界上大部分的家鹅都是来自这个野生祖先！",
      "yue": "一隻大型嘅灰啡色雁，配住橙色嘴。世界上大部分嘅家鵝都係嚟自呢個野生祖先！",
      "fr": "Une grosse oie gris-brun au bec orange. La plupart des oies de basse-cour du monde descendent de cette ancêtre sauvage !",
      "es": "Una gran oca gris-marrón con el pico naranja. ¡La mayoría de las ocas domésticas del mundo desciende de este antepasado salvaje!"
    }
  },
  {
    id: "blackguillemot",
    wiki: "Black_guillemot",
    color: "#1c1c1c",
    sizeCategory: "medium",
    sizeCm: 32,
    where: ["Rocky coasts", "Harbours (often Northern Ireland)", "Sea piers"],
    names: {
      "en": "Black Guillemot",
      "zh-Hant": "黑海鴿",
      "zh-Hans": "黑海鸽",
      "yue": "黑海鴿",
      "fr": "Guillemot à miroir",
      "es": "Arao aliblanco"
    },
    pronunciation: { pinyin: "hēi hǎi gē", jyutping: "hak1 hoi2 gap3" },
    latin: "Cepphus grylle",
    description: {
      "en": "A small black seabird with a snow-white wing patch and BRIGHT RED feet — and a bright red mouth too! Lives along rocky coasts.",
      "zh-Hant": "一隻細小的黑色海鳥，翅膀上有雪白色斑塊，腳是鮮紅色的——口腔內也是鮮紅色！住在岩岸邊。",
      "zh-Hans": "一只细小的黑色海鸟，翅膀上有雪白色斑块，脚是鲜红色的——口腔内也是鲜红色！住在岩岸边。",
      "yue": "一隻細隻嘅黑色海鳥，對翼有塊雪白色斑紋，對腳係鮮紅色——個口入面都係鮮紅色！住喺岩岸邊。",
      "fr": "Un petit oiseau marin noir avec une tache blanc neige sur l'aile et des pattes ROUGE VIF — et une bouche rouge vif aussi ! Il vit sur les côtes rocheuses.",
      "es": "Un pequeño ave marina negra con una mancha blanca en el ala y patas ROJO BRILLANTE — ¡y la boca también roja! Vive en costas rocosas."
    }
  },
  {
    id: "reedbunting",
    wiki: "Reed_bunting",
    color: "#5a4a3a",
    sizeCategory: "small",
    sizeCm: 15,
    where: ["Reedbeds", "Wet bushy fields", "Lake edges"],
    names: {
      "en": "Reed Bunting",
      "zh-Hant": "蘆鵐",
      "zh-Hans": "芦鹀",
      "yue": "蘆鵐",
      "fr": "Bruant des roseaux",
      "es": "Escribano palustre"
    },
    pronunciation: { pinyin: "lú wú", jyutping: "lou4 mou4" },
    latin: "Emberiza schoeniclus",
    description: {
      "en": "A streaky brown bird that lives in reedbeds. Males in spring have a smart black head with a white moustache!",
      "zh-Hant": "一隻有條紋的棕色小鳥，住在蘆葦叢裡。雄鳥春天頭部黑色，配上白色「鬍子」，超有型！",
      "zh-Hans": "一只有条纹的棕色小鸟，住在芦苇丛里。雄鸟春天头部黑色，配上白色「胡子」，超有型！",
      "yue": "一隻有條紋嘅啡色小鳥，住喺蘆葦叢度。雄鳥春天個頭黑色，仲有白色「鬍鬚」，超型！",
      "fr": "Un petit oiseau brun rayé qui vit dans les roselières. Au printemps, les mâles ont une tête noire chic avec une moustache blanche !",
      "es": "Un pajarito marrón rayado que vive en cañaverales. ¡Los machos en primavera tienen una elegante cabeza negra con un bigote blanco!"
    }
  },
  {
    id: "linnet",
    wiki: "Common_linnet",
    color: "#d2546e",
    sizeCategory: "small",
    sizeCm: 14,
    where: ["Gorse and bramble bushes", "Coastal heathland", "Weedy fields"],
    names: {
      "en": "Common Linnet",
      "zh-Hant": "赤胸朱頂雀",
      "zh-Hans": "赤胸朱顶雀",
      "yue": "赤胸朱頂雀",
      "fr": "Linotte mélodieuse",
      "es": "Pardillo común"
    },
    pronunciation: { pinyin: "chì xiōng zhū dǐng què", jyutping: "cek3 hung1 zyu1 ding2 zoek3" },
    latin: "Linaria cannabina",
    description: {
      "en": "A small finch with a strawberry-pink chest and forehead in summer males. Loves seedy fields and grassy hillsides.",
      "zh-Hant": "一隻細小的雀，雄鳥夏天胸口和額頭是草莓粉紅色。最愛多種子的田野和長草的山坡。",
      "zh-Hans": "一只细小的雀，雄鸟夏天胸口和额头是草莓粉红色。最爱多种子的田野和长草的山坡。",
      "yue": "一隻細隻嘅雀仔，雄鳥夏天胸口同額頭係士多啤梨粉紅色。最鍾意多種子嘅田野同長草嘅山坡。",
      "fr": "Une petite linotte dont les mâles ont la poitrine et le front rose fraise en été. Elle adore les champs à graines et les collines herbeuses.",
      "es": "Un pequeño pardillo cuyos machos en verano tienen el pecho y la frente rosa fresa. Le encantan los campos con semillas y las laderas cubiertas de hierba."
    }
  },
  {
    id: "treecreeper",
    wiki: "Eurasian_treecreeper",
    color: "#7a6a52",
    sizeCategory: "small",
    sizeCm: 13,
    where: ["Woodlands with mature trees", "Parks", "Mossy oak forests"],
    names: {
      "en": "Eurasian Treecreeper",
      "zh-Hant": "旋木雀",
      "zh-Hans": "旋木雀",
      "yue": "旋木雀",
      "fr": "Grimpereau des bois",
      "es": "Agateador euroasiático"
    },
    pronunciation: { pinyin: "xuán mù què", jyutping: "syun4 muk6 zoek3" },
    latin: "Certhia familiaris",
    description: {
      "en": "A tiny brown bird with a curved beak that climbs UP tree trunks like a mouse, looking for tiny insects in the bark.",
      "zh-Hant": "一隻細小的棕色小鳥，有彎彎的嘴巴，會像老鼠一樣往上爬樹幹，在樹皮裡找小蟲吃。",
      "zh-Hans": "一只细小的棕色小鸟，有弯弯的嘴巴，会像老鼠一样往上爬树干，在树皮里找小虫吃。",
      "yue": "一隻細隻嘅啡色小鳥，個嘴彎彎哋，會好似老鼠咁向上爬樹幹，喺樹皮入面搵蟲仔食。",
      "fr": "Un minuscule oiseau brun au bec courbe qui monte le long des troncs d'arbres comme une souris, en cherchant de petits insectes dans l'écorce.",
      "es": "Un pajarito marrón con pico curvo que trepa por los troncos como un ratón, buscando insectos diminutos en la corteza."
    }
  },
  {
    id: "firecrest",
    wiki: "Common_firecrest",
    color: "#e09030",
    sizeCategory: "small",
    sizeCm: 9,
    where: ["Woodlands (especially with holly and conifers)", "Parks (winter)"],
    names: {
      "en": "Common Firecrest",
      "zh-Hant": "火冠戴菊",
      "zh-Hans": "火冠戴菊",
      "yue": "火冠戴菊",
      "fr": "Roitelet à triple bandeau",
      "es": "Reyezuelo listado"
    },
    pronunciation: { pinyin: "huǒ guān dài jú", jyutping: "fo2 gun1 daai3 guk1" },
    latin: "Regulus ignicapilla",
    description: {
      "en": "Like the goldcrest's even more colourful cousin — orange crown, white eyebrow, bronze \"shoulders\". A jewel of a bird!",
      "zh-Hant": "戴菊更加色彩繽紛的表親——橙色頭冠、白色眉紋、青銅色「肩膀」。簡直是隻寶石小鳥！",
      "zh-Hans": "戴菊更加色彩缤纷的表亲——橙色头冠、白色眉纹、青铜色「肩膀」。简直是只宝石小鸟！",
      "yue": "戴菊嘅更加多彩表親——橙色頭冠、白色眉紋、青銅色「膊頭」。簡直係粒寶石咁靚！",
      "fr": "Comme le cousin encore plus coloré du roitelet huppé — couronne orange, sourcil blanc, « épaules » bronze. Un vrai bijou d'oiseau !",
      "es": "Como el primo aún más colorido del reyezuelo sencillo — corona naranja, ceja blanca, «hombros» bronce. ¡Un ave joya!"
    }
  },
  {
    id: "wheatear",
    wiki: "Northern_wheatear",
    color: "#b0aab2",
    sizeCategory: "small",
    sizeCm: 15,
    where: ["Mountainsides", "Coastal grassland", "Bog edges (summer)"],
    names: {
      "en": "Northern Wheatear",
      "zh-Hant": "穗鵖",
      "zh-Hans": "穗䳭",
      "yue": "穗鵖",
      "fr": "Traquet motteux",
      "es": "Collalba gris"
    },
    pronunciation: { pinyin: "suì bī", jyutping: "seoi6 bik1" },
    latin: "Oenanthe oenanthe",
    description: {
      "en": "A summer visitor with a flashing white bottom that's easy to spot when it flies away. The name means \"white arse\" in Old English!",
      "zh-Hant": "一隻夏天才出現的訪客，飛走時可以看到牠閃閃的白色屁股。名字在古英文中其實就是「白屁股」的意思！",
      "zh-Hans": "一只夏天才出现的访客，飞走时可以看到它闪闪的白色屁股。名字在古英文中其实就是「白屁股」的意思！",
      "yue": "一隻夏天先嚟嘅訪客，飛走嘅時候會見到佢個閃白嘅籮。個名喺古英文入面其實就係「白屎忽」嘅意思！",
      "fr": "Un visiteur d'été au croupion blanc éclatant, facile à repérer quand il s'envole. Son nom vient du vieil anglais et signifie « cul blanc » !",
      "es": "Un visitante estival con la rabadilla blanca brillante, fácil de ver cuando alza el vuelo. ¡Su nombre en inglés antiguo significaba literalmente «culo blanco»!"
    }
  },
  {
    id: "cuckoo",
    wiki: "Common_cuckoo",
    color: "#7a8590",
    sizeCategory: "medium",
    sizeCm: 33,
    where: ["Open countryside (April–July)", "Bogs and moors", "Mostly heard, rarely seen"],
    names: {
      "en": "Common Cuckoo",
      "zh-Hant": "大杜鵑",
      "zh-Hans": "大杜鹃",
      "yue": "大杜鵑",
      "fr": "Coucou gris",
      "es": "Cuco común"
    },
    pronunciation: { pinyin: "dà dù juān", jyutping: "daai6 dou6 gyun1" },
    latin: "Cuculus canorus",
    description: {
      "en": "The famous bird that says \"cuck-oo!\" Mother cuckoos sneak their eggs into other birds' nests so other parents raise their babies!",
      "zh-Hant": "著名會叫「咕咕！」的鳥兒。母杜鵑會偷偷把蛋下在其他鳥的巢裡，讓別家父母幫忙養大寶寶！",
      "zh-Hans": "著名会叫「咕咕！」的鸟儿。母杜鹃会偷偷把蛋下在其他鸟的巢里，让别家父母帮忙养大宝宝！",
      "yue": "著名會叫「咕咕！」嘅雀仔。母杜鵑會靜雞雞咁將自己嘅蛋落喺其他雀嘅窩裡面，等人哋幫佢養大BB！",
      "fr": "Le célèbre oiseau qui dit « cou-cou ! » Les femelles glissent leurs œufs dans les nids d'autres oiseaux pour qu'ils élèvent leurs petits à leur place !",
      "es": "El famoso pájaro que canta «¡cu-cú!». Las hembras del cuco meten a escondidas sus huevos en nidos de otras aves para que ¡otros padres críen a sus polluelos!"
    }
  },
  {
    id: "snipe",
    wiki: "Common_snipe",
    color: "#6f5a3a",
    sizeCategory: "medium",
    sizeCm: 27,
    where: ["Wet boggy fields", "Marshes", "Rushy meadows"],
    names: {
      "en": "Common Snipe",
      "zh-Hant": "扇尾沙錐",
      "zh-Hans": "扇尾沙锥",
      "yue": "扇尾沙錐",
      "fr": "Bécassine des marais",
      "es": "Agachadiza común"
    },
    pronunciation: { pinyin: "shàn wěi shā zhuī", jyutping: "sin3 mei5 saa1 zeoi1" },
    latin: "Gallinago gallinago",
    description: {
      "en": "A long-beaked wader that hides in wet fields. In spring males dive through the air making a magical \"drumming\" sound with their tail feathers!",
      "zh-Hant": "一隻長嘴的涉禽，會躲在濕地裡。春天雄鳥會在空中俯衝，用尾羽發出神奇的「鼓聲」！",
      "zh-Hans": "一只长嘴的涉禽，会躲在湿地里。春天雄鸟会在空中俯冲，用尾羽发出神奇的「鼓声」！",
      "yue": "一隻長嘴嘅涉禽，會匿喺濕地度。春天雄鳥會喺空中俯衝，用尾羽整出神奇嘅「鼓聲」！",
      "fr": "Un limicole au long bec qui se cache dans les champs humides. Au printemps, les mâles plongent dans les airs en faisant un « tambourinage » magique avec leurs plumes de queue !",
      "es": "Un limícola de pico largo que se esconde en campos húmedos. ¡En primavera los machos se zambullen en el aire haciendo un mágico «tamborileo» con las plumas de la cola!"
    }
  },
  {
    id: "longearedowl",
    wiki: "Long-eared_owl",
    color: "#9a7a4a",
    sizeCategory: "medium",
    sizeCm: 36,
    where: ["Conifer plantations", "Woodlands", "Hunts over fields and bogs at night"],
    names: {
      "en": "Long-eared Owl",
      "zh-Hant": "長耳鴞",
      "zh-Hans": "长耳鸮",
      "yue": "長耳鴞",
      "fr": "Hibou moyen-duc",
      "es": "Búho chico"
    },
    pronunciation: { pinyin: "cháng ěr xiāo", jyutping: "coeng4 ji5 hiu1" },
    latin: "Asio otus",
    description: {
      "en": "A slender owl with long \"ears\" (actually feather tufts) that point straight up when it's alert. Hunts mice in the dark.",
      "zh-Hant": "一隻苗條的貓頭鷹，有長長的「耳朵」（其實是羽毛），警戒時會直直豎起來。在黑夜裡獵捕老鼠。",
      "zh-Hans": "一只苗条的猫头鹰，有长长的「耳朵」（其实是羽毛），警戒时会直直竖起来。在黑夜里猎捕老鼠。",
      "yue": "一隻又瘦又長嘅貓頭鷹，有長長嘅「耳仔」（其實係羽毛），警戒嘅時候會直直豎起。喺黑夜入面捉老鼠。",
      "fr": "Une chouette élancée aux longues « oreilles » (en fait des touffes de plumes) qui se dressent quand elle est en alerte. Elle chasse les souris dans le noir.",
      "es": "Un búho esbelto con largas «orejas» (en realidad penachos de plumas) que apuntan rectas hacia arriba cuando está alerta. Caza ratones en la oscuridad."
    }
  },
  {
    id: "jackdaw",
    wiki: "Western_jackdaw",
    color: "#3a3a4a",
    sizeCategory: "medium",
    sizeCm: 34,
    where: ["Towns", "Old buildings & church towers", "Farmland", "Cliffs"],
    names: {
      "en": "Western Jackdaw",
      "zh-Hant": "寒鴉",
      "zh-Hans": "寒鸦",
      "yue": "寒鴉",
      "fr": "Choucas des tours",
      "es": "Grajilla occidental"
    },
    pronunciation: { pinyin: "hán yā", jyutping: "hon4 aa1" },
    latin: "Coloeus monedula",
    description: {
      "en": "A small smart crow with sparkling pale-grey eyes. Jackdaws form lifelong pairs and remember faces — they know who feeds them!",
      "zh-Hant": "一隻細小聰明的烏鴉，有一雙閃亮的淡灰色眼睛。寒鴉一生只配對一次，還會記住人臉——牠們認得誰餵過牠們！",
      "zh-Hans": "一只细小聪明的乌鸦，有一双闪亮的淡灰色眼睛。寒鸦一生只配对一次，还会记住人脸——它们认得谁喂过它们！",
      "yue": "一隻細隻又醒目嘅烏鴉，有對閃閃淡灰色眼。寒鴉一生只係配對一次，仲記得人哋嘅樣——佢哋知邊個餵過佢哋！",
      "fr": "Une petite corneille intelligente aux yeux gris clair étincelants. Les choucas forment des couples pour la vie et reconnaissent les visages — ils savent qui les nourrit !",
      "es": "Una pequeña corneja inteligente con ojos brillantes gris claro. ¡Las grajillas forman parejas de por vida y recuerdan caras — saben quién las alimenta!"
    }
  },
  {
    id: "raven",
    wiki: "Common_raven",
    color: "#0f0f0f",
    sizeCategory: "large",
    sizeCm: 65,
    where: ["Mountains", "Sea cliffs", "Wild upland country"],
    names: {
      "en": "Common Raven",
      "zh-Hant": "渡鴉",
      "zh-Hans": "渡鸦",
      "yue": "渡鴉",
      "fr": "Grand Corbeau",
      "es": "Cuervo grande"
    },
    pronunciation: { pinyin: "dù yā", jyutping: "dou6 aa1" },
    latin: "Corvus corax",
    description: {
      "en": "The biggest crow of all, with a deep \"kronk!\" call. Ravens are super clever — they can solve puzzles and even play games!",
      "zh-Hant": "最大隻的烏鴉，會發出深沉的「kronk！」叫聲。渡鴉非常聰明——能夠解謎，甚至會玩遊戲！",
      "zh-Hans": "最大只的乌鸦，会发出深沉的「kronk！」叫声。渡鸦非常聪明——能够解谜，甚至会玩游戏！",
      "yue": "最大隻嘅烏鴉，會發出深沉嘅「kronk！」叫聲。渡鴉超醒目——識解謎，仲識玩遊戲！",
      "fr": "Le plus grand des corvidés, au cri profond « kronk ! » Les grands corbeaux sont super malins — ils résolvent des énigmes et jouent même à des jeux !",
      "es": "¡El mayor de los córvidos, con un grave «kronk!». Los cuervos son listísimos — resuelven puzzles e incluso juegan!"
    }
  },
  {
    id: "pheasant",
    wiki: "Common_pheasant",
    color: "#9a4a2a",
    sizeCategory: "large",
    sizeCm: 80,
    where: ["Farmland with hedgerows", "Woodland edges", "Country lanes"],
    names: {
      "en": "Common Pheasant",
      "zh-Hant": "環頸雉",
      "zh-Hans": "环颈雉",
      "yue": "環頸雉",
      "fr": "Faisan de Colchide",
      "es": "Faisán común"
    },
    pronunciation: { pinyin: "huán jǐng zhì", jyutping: "waan4 geng2 zi6" },
    latin: "Phasianus colchicus",
    description: {
      "en": "A big colourful chicken-like bird from Asia, brought to Ireland long ago. Males have shiny green heads and long stripy tails.",
      "zh-Hant": "一隻大型色彩繽紛、像雞的鳥，很久以前從亞洲被帶到愛爾蘭。雄鳥頭部閃綠，尾巴又長又有條紋。",
      "zh-Hans": "一只大型色彩缤纷、像鸡的鸟，很久以前从亚洲被带到爱尔兰。雄鸟头部闪绿，尾巴又长又有条纹。",
      "yue": "一隻大型多彩、似雞嘅雀，好耐之前由亞洲帶嚟愛爾蘭。雄鳥個頭閃綠，條尾又長又有條紋。",
      "fr": "Un grand oiseau coloré ressemblant à un poulet, importé d'Asie il y a longtemps. Les mâles ont la tête vert brillant et une longue queue rayée.",
      "es": "Una gran ave colorida parecida a una gallina, traída de Asia hace mucho tiempo. Los machos tienen la cabeza verde brillante y la cola larga y rayada."
    }
  },
  {
    id: "blackcap",
    wiki: "Eurasian_blackcap",
    color: "#5a5a6a",
    sizeCategory: "small",
    sizeCm: 14,
    where: ["Woodlands and gardens", "Hedgerows (summer)", "More gardens in winter"],
    names: {
      "en": "Eurasian Blackcap",
      "zh-Hant": "黑頂林鶯",
      "zh-Hans": "黑顶林莺",
      "yue": "黑頂林鶯",
      "fr": "Fauvette à tête noire",
      "es": "Curruca capirotada"
    },
    pronunciation: { pinyin: "hēi dǐng lín yīng", jyutping: "hak1 ding2 lam4 ang1" },
    latin: "Sylvia atricapilla",
    description: {
      "en": "A grey warbler whose beautiful song is sometimes called \"the nightingale of Ireland\". Males have a black cap, females a chestnut one!",
      "zh-Hant": "一隻灰色的鶯，美妙的歌聲有時被稱為「愛爾蘭的夜鶯」。雄鳥頭頂是黑色的小帽，雌鳥是栗色的！",
      "zh-Hans": "一只灰色的莺，美妙的歌声有时被称为「爱尔兰的夜莺」。雄鸟头顶是黑色的小帽，雌鸟是栗色的！",
      "yue": "一隻灰色嘅鶯，美妙嘅歌聲有時被稱為「愛爾蘭嘅夜鶯」。雄鳥頭頂係黑色小帽，雌鳥係栗色嘅！",
      "fr": "Une fauvette grise dont le beau chant est parfois appelé « le rossignol d'Irlande ». Les mâles portent une calotte noire, les femelles une calotte châtain !",
      "es": "Una curruca gris cuyo precioso canto se llama a veces «el ruiseñor de Irlanda». ¡Los machos tienen un gorrito negro, las hembras uno castaño!"
    }
  },
  {
    id: "lbbgull",
    wiki: "Lesser_black-backed_gull",
    color: "#6a6a72",
    sizeCategory: "large",
    sizeCm: 58,
    where: ["Coasts and harbours", "Inland lakes", "Rooftops in cities"],
    names: {
      "en": "Lesser Black-backed Gull",
      "zh-Hant": "小黑背鷗",
      "zh-Hans": "小黑背鸥",
      "yue": "小黑背鷗",
      "fr": "Goéland brun",
      "es": "Gaviota sombría"
    },
    pronunciation: { pinyin: "xiǎo hēi bèi ōu", jyutping: "siu2 hak1 bui3 au1" },
    latin: "Larus fuscus",
    description: {
      "en": "A large gull with a slate-grey back and yellow legs. Many fly to Africa for winter — Irish chips are just a stop on the way!",
      "zh-Hant": "一隻大型海鷗，背部是石板灰，腳是黃色的。很多會飛到非洲過冬——愛爾蘭的薯條只是路上的一站！",
      "zh-Hans": "一只大型海鸥，背部是石板灰，脚是黄色的。很多会飞到非洲过冬——爱尔兰的薯条只是路上的一站！",
      "yue": "一隻大型海鷗，個背係石板灰色，對腳係黃色。好多會飛到非洲過冬——愛爾蘭嘅薯條只係順便嘅一站！",
      "fr": "Un grand goéland au dos gris ardoise et aux pattes jaunes. Beaucoup vont passer l'hiver en Afrique — les frites irlandaises ne sont qu'une étape !",
      "es": "Una gran gaviota con el dorso gris pizarra y patas amarillas. ¡Muchas vuelan a África para invernar — las patatas irlandesas son solo una parada en el camino!"
    }
  },
  {
    id: "gbbgull",
    wiki: "Great_black-backed_gull",
    color: "#202020",
    sizeCategory: "large",
    sizeCm: 75,
    where: ["Sea coasts", "Harbours", "Offshore islands"],
    names: {
      "en": "Great Black-backed Gull",
      "zh-Hant": "大黑背鷗",
      "zh-Hans": "大黑背鸥",
      "yue": "大黑背鷗",
      "fr": "Goéland marin",
      "es": "Gavión atlántico"
    },
    pronunciation: { pinyin: "dà hēi bèi ōu", jyutping: "daai6 hak1 bui3 au1" },
    latin: "Larus marinus",
    description: {
      "en": "The biggest gull in the world! Black-backed and powerful, with a heavy yellow beak. It can swallow a whole rabbit if it wants to!",
      "zh-Hant": "世界上最大隻的海鷗！背部黑色、體型強壯，配上厚重的黃色嘴巴。如果想的話，可以一口吞下整隻兔子！",
      "zh-Hans": "世界上最大只的海鸥！背部黑色、体型强壮，配上厚重的黄色嘴巴。如果想的话，可以一口吞下整只兔子！",
      "yue": "世界上最大隻嘅海鷗！個背黑色、又夠強壯，配住厚厚嘅黃色嘴。如果佢想嘅話，可以一啖吞落成隻兔仔！",
      "fr": "Le plus grand goéland du monde ! Dos noir et puissant, avec un gros bec jaune. Il peut avaler un lapin entier s'il en a envie !",
      "es": "¡La gaviota más grande del mundo! De dorso negro y poderosa, con un robusto pico amarillo. ¡Puede tragarse un conejo entero si quiere!"
    }
  },

  /* ===== Batch 4: 20 more birds (→ 100 total) ===== */

  {
    id: "stockdove",
    wiki: "Stock_dove",
    color: "#7a8090",
    sizeCategory: "medium",
    sizeCm: 33,
    where: ["Old parkland with hollow trees", "Cliffs", "Farmland"],
    names: {
      "en": "Stock Dove",
      "zh-Hant": "歐鴿",
      "zh-Hans": "欧鸽",
      "yue": "歐鴿",
      "fr": "Pigeon colombin",
      "es": "Paloma zurita"
    },
    pronunciation: { pinyin: "ōu gē", jyutping: "au1 gap3" },
    latin: "Columba oenas",
    description: {
      "en": "A neat blue-grey pigeon with shiny green neck patches. Nests in tree holes — never on buildings, unlike its city cousins.",
      "zh-Hant": "一隻整潔的藍灰色鴿子，頸上有閃綠色斑塊。會在樹洞裡做巢——不像城市親戚，從不在建築物上築巢。",
      "zh-Hans": "一只整洁的蓝灰色鸽子，颈上有闪绿色斑块。会在树洞里做巢——不像城市亲戚，从不在建筑物上筑巢。",
      "yue": "一隻整齊嘅藍灰色鴿子，頸上有閃綠色斑紋。會喺樹窿做窩——同城市嗰啲親戚唔同，從來唔會喺建築物上面做窩。",
      "fr": "Un joli pigeon bleu-gris avec des taches vert brillant sur le cou. Niche dans les trous d'arbres — jamais sur les bâtiments, contrairement à ses cousins urbains.",
      "es": "Una bonita paloma azul-gris con manchas verde brillante en el cuello. Anida en huecos de árboles — nunca en edificios, a diferencia de sus primas urbanas."
    }
  },
  {
    id: "collareddove",
    wiki: "Eurasian_collared_dove",
    color: "#cdb59a",
    sizeCategory: "medium",
    sizeCm: 32,
    where: ["Gardens", "Towns and villages", "Farmyards"],
    names: {
      "en": "Eurasian Collared Dove",
      "zh-Hant": "灰斑鳩",
      "zh-Hans": "灰斑鸠",
      "yue": "灰斑鳩",
      "fr": "Tourterelle turque",
      "es": "Tórtola turca"
    },
    pronunciation: { pinyin: "huī bān jiū", jyutping: "fui1 baan1 kau1" },
    latin: "Streptopelia decaocto",
    description: {
      "en": "A pale dove with a thin black collar at the back of its neck. Sings a soft \"coo-coo-cuk\" all year round, even in winter!",
      "zh-Hant": "一隻淺色的鴿子，頸後有一條細細的黑色項圈。一年四季都會輕輕唱「咕咕—咕」，連冬天都會！",
      "zh-Hans": "一只浅色的鸽子，颈后有一条细细的黑色项圈。一年四季都会轻轻唱「咕咕—咕」，连冬天都会！",
      "yue": "一隻淺色嘅鴿子，頸後面有條幼黑色頸圈。一年四季都會細細聲咁唱「咕咕—咕」，連冬天都唱！",
      "fr": "Une tourterelle pâle avec un fin collier noir derrière le cou. Elle roucoule un doux « cou-cou-cou » toute l'année, même en hiver !",
      "es": "Una tórtola pálida con un fino collar negro en la nuca. ¡Canta un suave «cu-cu-cú» todo el año, incluso en invierno!"
    }
  },
  {
    id: "sedgewarbler",
    wiki: "Sedge_warbler",
    color: "#9a8255",
    sizeCategory: "small",
    sizeCm: 13,
    where: ["Reedbeds", "Wet bushes near water", "Marshes (summer)"],
    names: {
      "en": "Sedge Warbler",
      "zh-Hant": "水蒲葦鶯",
      "zh-Hans": "水蒲苇莺",
      "yue": "水蒲葦鶯",
      "fr": "Phragmite des joncs",
      "es": "Carricerín común"
    },
    pronunciation: { pinyin: "shuǐ pú wěi yīng", jyutping: "seoi2 pou4 wai5 ang1" },
    latin: "Acrocephalus schoenobaenus",
    description: {
      "en": "A streaky brown warbler with a creamy eyebrow. Males sing a wild, bubbly mix of squeaks and whistles from reedbeds — and never repeat the same song twice!",
      "zh-Hant": "一隻有條紋的棕色鶯，眉紋是奶油色。雄鳥會在蘆葦叢中發出狂野又活潑的吱吱聲和哨聲——而且從不重複同一首歌！",
      "zh-Hans": "一只有条纹的棕色莺，眉纹是奶油色。雄鸟会在芦苇丛中发出狂野又活泼的吱吱声和哨声——而且从不重复同一首歌！",
      "yue": "一隻有條紋嘅啡色鶯，眉紋係忌廉色。雄鳥會喺蘆葦叢度發出狂野又活潑嘅吱吱聲同口哨聲——而且從唔重複同一首歌！",
      "fr": "Une fauvette brune rayée avec un sourcil crème. Les mâles chantent un mélange fou de couics et de sifflements depuis les roselières — et ne répètent jamais deux fois la même chanson !",
      "es": "Una curruca marrón rayada con una ceja crema. ¡Los machos cantan una mezcla loca de chirridos y silbidos desde los cañaverales — y nunca repiten la misma canción dos veces!"
    }
  },
  {
    id: "reedwarbler",
    wiki: "Eurasian_reed_warbler",
    color: "#8a7a5a",
    sizeCategory: "small",
    sizeCm: 13,
    where: ["Reedbeds (summer)", "Lake edges", "Wexford Wildfowl Reserve"],
    names: {
      "en": "Eurasian Reed Warbler",
      "zh-Hant": "歐葦鶯",
      "zh-Hans": "欧苇莺",
      "yue": "歐葦鶯",
      "fr": "Rousserolle effarvatte",
      "es": "Carricero común"
    },
    pronunciation: { pinyin: "ōu wěi yīng", jyutping: "au1 wai5 ang1" },
    latin: "Acrocephalus scirpaceus",
    description: {
      "en": "A plain brown warbler that hides in the reeds. Sometimes ends up raising a baby cuckoo that's twice its size — what a surprise!",
      "zh-Hant": "一隻樸素的棕色鶯，會躲在蘆葦中。有時候會養大一隻比自己大兩倍的杜鵑寶寶——多大的驚喜！",
      "zh-Hans": "一只朴素的棕色莺，会躲在芦苇中。有时候会养大一只比自己大两倍的杜鹃宝宝——多大的惊喜！",
      "yue": "一隻樸素嘅啡色鶯，會匿喺蘆葦度。有時仲會養大一隻比自己大兩倍嘅杜鵑BB——真係嚇親！",
      "fr": "Une fauvette brune toute simple qui se cache dans les roseaux. Elle finit parfois par élever un bébé coucou deux fois plus gros qu'elle — quelle surprise !",
      "es": "Una curruca marrón sencilla que se esconde en los juncos. ¡A veces acaba criando a un bebé cuco el doble de grande que ella — vaya sorpresa!"
    }
  },
  {
    id: "spottedflycatcher",
    wiki: "Spotted_flycatcher",
    color: "#7d6a52",
    sizeCategory: "small",
    sizeCm: 14,
    where: ["Old gardens with mature trees", "Woodland edges", "Parks (summer)"],
    names: {
      "en": "Spotted Flycatcher",
      "zh-Hant": "斑鶲",
      "zh-Hans": "斑鹟",
      "yue": "斑鶲",
      "fr": "Gobemouche gris",
      "es": "Papamoscas gris"
    },
    pronunciation: { pinyin: "bān wēng", jyutping: "baan1 jung1" },
    latin: "Muscicapa striata",
    description: {
      "en": "A grey-brown bird that sits very still on a perch, then SHOOTS out to grab a flying insect — and lands back on the same spot!",
      "zh-Hant": "一隻灰啡色的鳥，會靜靜地停在樹枝上，然後咻一聲衝出去抓飛蟲——再回到同一個位置！",
      "zh-Hans": "一只灰啡色的鸟，会静静地停在树枝上，然后咻一声冲出去抓飞虫——再回到同一个位置！",
      "yue": "一隻灰啡色嘅雀，會靜靜地停喺樹枝上，跟住「咻」一聲衝出去捉飛蟲——再返到同一個位！",
      "fr": "Un oiseau gris-brun qui reste immobile sur une branche, puis FILE attraper un insecte en plein vol — et revient se poser au même endroit !",
      "es": "Un ave gris-marrón que se queda muy quieta en una percha, luego SALE DISPARADA a por un insecto en vuelo — ¡y vuelve al mismo sitio!"
    }
  },
  {
    id: "medgull",
    wiki: "Mediterranean_gull",
    color: "#1a1a2a",
    sizeCategory: "medium",
    sizeCm: 38,
    where: ["Coasts and harbours", "Coastal lakes (winter visitor)"],
    names: {
      "en": "Mediterranean Gull",
      "zh-Hant": "地中海鷗",
      "zh-Hans": "地中海鸥",
      "yue": "地中海鷗",
      "fr": "Mouette mélanocéphale",
      "es": "Gaviota cabecinegra"
    },
    pronunciation: { pinyin: "dì zhōng hǎi ōu", jyutping: "dei6 zung1 hoi2 au1" },
    latin: "Ichthyaetus melanocephalus",
    description: {
      "en": "Looks like a black-headed gull but with a darker, fully black hood in summer. Called \"the laughing gull\" in many languages because of its yodelling call!",
      "zh-Hant": "看起來像紅嘴鷗，但夏天頭部會變成全黑的更深「兜帽」。在許多語言中被稱為「笑鷗」，因為牠會發出像吆喝的叫聲！",
      "zh-Hans": "看起来像红嘴鸥，但夏天头部会变成全黑的更深「兜帽」。在许多语言中被称为「笑鸥」，因为它会发出像吆喝的叫声！",
      "yue": "似紅嘴鷗，但夏天個頭會變成全黑嘅深色「兜帽」。喺好多語言入面叫做「笑鷗」，因為佢嘅叫聲好似吆喝咁！",
      "fr": "Ressemble à la mouette rieuse mais avec un capuchon entièrement noir en été. On l'appelle « la mouette qui rit » dans plusieurs langues à cause de son cri yodlé !",
      "es": "Se parece a la gaviota reidora, pero con un capirote totalmente negro en verano. ¡Se le llama «gaviota que ríe» en muchos idiomas por su grito yodelado!"
    }
  },
  {
    id: "redkite",
    wiki: "Red_kite",
    color: "#a04030",
    sizeCategory: "large",
    sizeCm: 65,
    where: ["Wicklow Mountains", "County Dublin uplands", "County Down (reintroduced from 2007)"],
    names: {
      "en": "Red Kite",
      "zh-Hant": "赤鳶",
      "zh-Hans": "赤鸢",
      "yue": "赤鳶",
      "fr": "Milan royal",
      "es": "Milano real"
    },
    pronunciation: { pinyin: "chì yuān", jyutping: "cek3 jyun1" },
    latin: "Milvus milvus",
    description: {
      "en": "A graceful rusty-red bird of prey with a deeply forked tail. Wiped out in Ireland for over 200 years — brought back from Wales in 2007!",
      "zh-Hant": "一隻優雅的鏽紅色猛禽，尾巴深深分叉。曾在愛爾蘭絕跡超過200年——2007年從威爾斯重新引入！",
      "zh-Hans": "一只优雅的锈红色猛禽，尾巴深深分叉。曾在爱尔兰绝迹超过200年——2007年从威尔士重新引入！",
      "yue": "一隻優雅嘅鏽紅色猛禽，尾巴分叉得好深。喺愛爾蘭絕咗種超過200年——2007年從威爾斯重新引入返！",
      "fr": "Un rapace gracieux roux à la queue profondément fourchue. Disparu d'Irlande pendant plus de 200 ans — réintroduit du pays de Galles en 2007 !",
      "es": "Un grácil rapaz rojizo con la cola profundamente ahorquillada. ¡Desapareció de Irlanda durante más de 200 años — reintroducido desde Gales en 2007!"
    }
  },
  {
    id: "chough",
    wiki: "Red-billed_chough",
    color: "#1a1a1a",
    sizeCategory: "medium",
    sizeCm: 40,
    where: ["Sea cliffs of Donegal, Mayo, Kerry, Cork", "Coastal cliffs in the west"],
    names: {
      "en": "Red-billed Chough",
      "zh-Hant": "紅嘴山鴉",
      "zh-Hans": "红嘴山鸦",
      "yue": "紅嘴山鴉",
      "fr": "Crave à bec rouge",
      "es": "Chova piquirroja"
    },
    pronunciation: { pinyin: "hóng zuǐ shān yā", jyutping: "hung4 zeoi2 saan1 aa1" },
    latin: "Pyrrhocorax pyrrhocorax",
    description: {
      "en": "A glossy black crow with a curved bright-red beak and red legs! Found mostly along Ireland's wild west and south coasts. They tumble and twirl in the sea wind for fun.",
      "zh-Hant": "一隻黑亮的烏鴉，配上彎彎的鮮紅色嘴和紅色腳！主要在愛爾蘭野性的西岸和南岸找到。牠們會在海風中翻滾旋轉，純粹為了好玩。",
      "zh-Hans": "一只黑亮的乌鸦，配上弯弯的鲜红色嘴和红色脚！主要在爱尔兰野性的西岸和南岸找到。它们会在海风中翻滚旋转，纯粹为了好玩。",
      "yue": "一隻烏卒卒、發光嘅烏鴉，配住彎彎嘅鮮紅嘴同紅色腳！主要喺愛爾蘭嘅西岸同南岸見到。佢哋會喺海風中翻滾打轉，純粹為咗玩！",
      "fr": "Un corvidé noir luisant avec un bec rouge vif courbé et des pattes rouges ! On le trouve surtout le long des côtes sauvages de l'ouest et du sud de l'Irlande. Ils font des cabrioles dans le vent marin, juste pour s'amuser.",
      "es": "¡Un córvido negro brillante con un pico rojo brillante y curvado y patas rojas! Se encuentra sobre todo en las costas salvajes del oeste y sur de Irlanda. Hacen cabriolas en el viento marino solo por diversión."
    }
  },
  {
    id: "twite",
    wiki: "Twite",
    color: "#a07a4a",
    sizeCategory: "small",
    sizeCm: 14,
    where: ["Mountains and uplands", "Coastal saltmarshes (winter)", "Mostly western Ireland"],
    names: {
      "en": "Twite",
      "zh-Hant": "黃嘴朱頂雀",
      "zh-Hans": "黄嘴朱顶雀",
      "yue": "黃嘴朱頂雀",
      "fr": "Linotte à bec jaune",
      "es": "Pardillo piquigualdo"
    },
    pronunciation: { pinyin: "huáng zuǐ zhū dǐng què", jyutping: "wong4 zeoi2 zyu1 ding2 zoek3" },
    latin: "Linaria flavirostris",
    description: {
      "en": "Like the linnet's mountain cousin — streaky brown with a tiny yellow beak in winter. Lives in some of Ireland's wildest places.",
      "zh-Hant": "像紅腹朱頂雀的山區表親——身上有條紋的啡色，冬天會有小小的黃色嘴。住在愛爾蘭最荒野的地方。",
      "zh-Hans": "像红腹朱顶雀的山区表亲——身上有条纹的啡色，冬天会有小小的黄色嘴。住在爱尔兰最荒野的地方。",
      "yue": "好似赤胸朱頂雀嘅山區表親——身上有條紋嘅啡色，冬天會有細細嘅黃色嘴。住喺愛爾蘭最荒野嘅地方。",
      "fr": "Comme la cousine montagnarde de la linotte — striée de brun avec un petit bec jaune en hiver. Elle vit dans les endroits les plus sauvages d'Irlande.",
      "es": "Como la prima de montaña del pardillo — rayado de marrón con un piquito amarillo en invierno. Vive en los lugares más salvajes de Irlanda."
    }
  },
  {
    id: "crossbill",
    wiki: "Common_crossbill",
    color: "#c64a3a",
    sizeCategory: "small",
    sizeCm: 16,
    where: ["Conifer forests (Wicklow, Killarney)", "Spruce and pine plantations"],
    names: {
      "en": "Common Crossbill",
      "zh-Hant": "紅交嘴雀",
      "zh-Hans": "红交嘴雀",
      "yue": "紅交嘴雀",
      "fr": "Bec-croisé des sapins",
      "es": "Piquituerto común"
    },
    pronunciation: { pinyin: "hóng jiāo zuǐ què", jyutping: "hung4 gaau1 zeoi2 zoek3" },
    latin: "Loxia curvirostra",
    description: {
      "en": "A finch with the strangest beak in the bird world — the top and bottom CROSS over each other! Perfect for prying seeds out of pine cones.",
      "zh-Hant": "一隻擁有鳥類世界最奇特嘴巴的雀——上下嘴會交叉！正好用來撬出松果裡的種子。",
      "zh-Hans": "一只拥有鸟类世界最奇特嘴巴的雀——上下嘴会交叉！正好用来撬出松果里的种子。",
      "yue": "一隻擁有雀鳥世界最奇特嘴嘅雀——上下嘴會交叉！啱晒用嚟撬出松塔入面嘅種子。",
      "fr": "Un pinson au bec le plus étrange du monde des oiseaux — le haut et le bas se CROISENT l'un sur l'autre ! Parfait pour extraire les graines des pommes de pin.",
      "es": "Un pinzón con el pico más raro del mundo de las aves — ¡el de arriba y el de abajo se CRUZAN! Perfecto para extraer semillas de las piñas."
    }
  },
  {
    id: "greywagtail",
    wiki: "Grey_wagtail",
    color: "#e5c542",
    sizeCategory: "small",
    sizeCm: 19,
    where: ["Fast-flowing rivers and streams", "Stony riverbanks", "Mountain streams"],
    names: {
      "en": "Grey Wagtail",
      "zh-Hant": "灰鶺鴒",
      "zh-Hans": "灰鹡鸰",
      "yue": "灰鶺鴒",
      "fr": "Bergeronnette des ruisseaux",
      "es": "Lavandera cascadeña"
    },
    pronunciation: { pinyin: "huī jí líng", jyutping: "fui1 zik3 ling4" },
    latin: "Motacilla cinerea",
    description: {
      "en": "Don't let the name fool you — this wagtail has a bright lemon-yellow belly and a very long tail that it bobs constantly by mountain streams!",
      "zh-Hant": "別被名字騙了——這隻鶺鴒肚子是亮檸檬黃色，尾巴很長，在山間溪流邊不停地擺動！",
      "zh-Hans": "别被名字骗了——这只鹡鸰肚子是亮柠檬黄色，尾巴很长，在山间溪流边不停地摆动！",
      "yue": "唔好俾個名呃到——呢隻鶺鴒個肚係鮮檸黃色，尾巴又長，喺山溪邊不停咁擺！",
      "fr": "Ne te laisse pas tromper par son nom — cette bergeronnette a un ventre jaune citron vif et une très longue queue qu'elle agite sans cesse au bord des ruisseaux de montagne !",
      "es": "¡No te dejes engañar por el nombre — esta lavandera tiene la barriga amarillo limón y una cola larguísima que mueve sin parar junto a los arroyos de montaña!"
    }
  },
  {
    id: "yellowwagtail",
    wiki: "Western_yellow_wagtail",
    color: "#f0c63a",
    sizeCategory: "small",
    sizeCm: 17,
    where: ["Wet meadows", "Cattle pastures (rare summer visitor in Ireland)"],
    names: {
      "en": "Western Yellow Wagtail",
      "zh-Hant": "黃鶺鴒",
      "zh-Hans": "黄鹡鸰",
      "yue": "黃鶺鴒",
      "fr": "Bergeronnette printanière",
      "es": "Lavandera boyera"
    },
    pronunciation: { pinyin: "huáng jí líng", jyutping: "wong4 zik3 ling4" },
    latin: "Motacilla flava",
    description: {
      "en": "A rare summer visitor — bright canary-yellow underneath, olive on top. Often follows cows around to catch the flies they stir up!",
      "zh-Hant": "一隻稀有的夏候鳥——下面是鮮明的金絲雀黃色，上面是橄欖色。常常跟著牛走，捉牠們腳邊驚起的蒼蠅！",
      "zh-Hans": "一只稀有的夏候鸟——下面是鲜明的金丝雀黄色，上面是橄榄色。常常跟着牛走，捉它们脚边惊起的苍蝇！",
      "yue": "一隻稀有嘅夏候鳥——下面係鮮金絲雀黃色，上面橄欖色。成日跟住牛行，捉佢哋腳邊驚起嘅烏蠅！",
      "fr": "Un rare visiteur d'été — jaune canari vif dessous, vert olive dessus. Elle suit souvent les vaches pour attraper les mouches qu'elles font lever !",
      "es": "Un raro visitante de verano — amarillo canario brillante por debajo, verde oliva por encima. ¡A menudo sigue a las vacas para atrapar las moscas que levantan!"
    }
  },
  {
    id: "goosander",
    wiki: "Common_merganser",
    color: "#1a4a6a",
    sizeCategory: "large",
    sizeCm: 65,
    where: ["Rivers and lakes (rare in Ireland)", "Northern lakes (winter)"],
    names: {
      "en": "Goosander",
      "zh-Hant": "普通秋沙鴨",
      "zh-Hans": "普通秋沙鸭",
      "yue": "普通秋沙鴨",
      "fr": "Harle bièvre",
      "es": "Serreta grande"
    },
    pronunciation: { pinyin: "pǔ tōng qiū shā yā", jyutping: "pou2 tung1 cau1 saa1 aap3" },
    latin: "Mergus merganser",
    description: {
      "en": "A long, sleek diving duck with a saw-toothed beak for gripping slippery fish. Males have a glossy dark-green head and pinkish-cream body.",
      "zh-Hant": "一隻又長又流線型的潛水鴨，嘴像鋸子一樣有齒，方便抓住滑溜的魚。雄鳥頭部是閃亮的深綠色，身體是粉奶油色。",
      "zh-Hans": "一只又长又流线型的潜水鸭，嘴像锯子一样有齿，方便抓住滑溜的鱼。雄鸟头部是闪亮的深绿色，身体是粉奶油色。",
      "yue": "一隻又長又流線型嘅潛水鴨，個嘴好似鋸咁有齒，啱啱好用嚟捉滑溜溜嘅魚。雄鳥個頭係閃亮嘅深綠色，身體係粉忌廉色。",
      "fr": "Un canard plongeur long et élancé avec un bec en dents de scie pour attraper les poissons glissants. Les mâles ont une tête vert foncé brillante et un corps rosé crème.",
      "es": "Un pato buceador largo y esbelto con un pico dentado para agarrar peces resbaladizos. Los machos tienen la cabeza verde oscuro brillante y el cuerpo rosado-crema."
    }
  },
  {
    id: "gcgrebe",
    wiki: "Great_crested_grebe",
    color: "#7a4a30",
    sizeCategory: "medium",
    sizeCm: 50,
    where: ["Lakes and reservoirs", "Slow rivers", "Coastal bays in winter"],
    names: {
      "en": "Great Crested Grebe",
      "zh-Hant": "鳳頭鸊鷉",
      "zh-Hans": "凤头䴙䴘",
      "yue": "鳳頭鸊鷉",
      "fr": "Grèbe huppé",
      "es": "Somormujo lavanco"
    },
    pronunciation: { pinyin: "fèng tóu pì tī", jyutping: "fung6 tau4 pik1 tai1" },
    latin: "Podiceps cristatus",
    description: {
      "en": "An elegant water bird with a punky black-and-orange head crest. Pairs do an amazing \"weed dance\" on water in spring — they bring waterweed to each other as a gift!",
      "zh-Hant": "一隻優雅的水鳥，頭上有龐克風格的黑色和橙色冠羽。配對的鳳頭鸊鷉春天會在水面上跳令人驚嘆的「水草舞」——互相獻上水草作為禮物！",
      "zh-Hans": "一只优雅的水鸟，头上有朋克风格的黑色和橙色冠羽。配对的凤头䴙䴘春天会在水面上跳令人惊叹的「水草舞」——互相献上水草作为礼物！",
      "yue": "一隻優雅嘅水鳥，頭頂有龐克風嘅黑色同橙色冠羽。一對對鳳頭鸊鷉春天會喺水面上跳令人嘩然嘅「水草舞」——互相送水草做禮物！",
      "fr": "Un oiseau d'eau élégant avec une crête punk noire et orange. Au printemps, les couples font une incroyable « danse de l'algue » sur l'eau — ils s'offrent des herbes aquatiques !",
      "es": "Un elegante ave acuática con una cresta punk negra y naranja. ¡Las parejas hacen una asombrosa «danza del alga» sobre el agua en primavera — se regalan plantas acuáticas!"
    }
  },
  {
    id: "littlegrebe",
    wiki: "Little_grebe",
    color: "#7a3520",
    sizeCategory: "small",
    sizeCm: 26,
    where: ["Park ponds", "Reedy lakes", "Slow rivers"],
    names: {
      "en": "Little Grebe",
      "zh-Hant": "小鸊鷉",
      "zh-Hans": "小䴙䴘",
      "yue": "小鸊鷉",
      "fr": "Grèbe castagneux",
      "es": "Zampullín común"
    },
    pronunciation: { pinyin: "xiǎo pì tī", jyutping: "siu2 pik1 tai1" },
    latin: "Tachybaptus ruficollis",
    description: {
      "en": "Sometimes called \"dabchick\" — a tiny round diving bird that pops up like a bath toy! Disappears under water for ages chasing fish.",
      "zh-Hant": "有時被稱為「dabchick」——一隻圓圓的小潛水鳥，會像浴缸玩具一樣冒出水面！會在水下消失好久，追著魚跑。",
      "zh-Hans": "有时被称为「dabchick」——一只圆圆的小潜水鸟，会像浴缸玩具一样冒出水面！会在水下消失好久，追着鱼跑。",
      "yue": "有時被叫做「dabchick」——一隻圓碌碌嘅小潛水鳥，會好似浴缸玩具咁彈出水面！會喺水底消失好耐，追住魚仔捉。",
      "fr": "Parfois appelé « plongeon » — un minuscule oiseau plongeur tout rond qui ressort comme un jouet de bain ! Disparaît longtemps sous l'eau pour chasser le poisson.",
      "es": "A veces llamado «zampullín» — un diminuto ave buceadora redonda que sale a la superficie como un juguete de bañera. ¡Se sumerge un buen rato persiguiendo peces!"
    }
  },
  {
    id: "waterrail",
    wiki: "Water_rail",
    color: "#6a4a2a",
    sizeCategory: "small",
    sizeCm: 26,
    where: ["Reedbeds", "Marshy edges of lakes and rivers", "Wet boglands"],
    names: {
      "en": "Water Rail",
      "zh-Hant": "西方秧雞",
      "zh-Hans": "西方秧鸡",
      "yue": "西方秧雞",
      "fr": "Râle d'eau",
      "es": "Rascón europeo"
    },
    pronunciation: { pinyin: "xī fāng yāng jī", jyutping: "sai1 fong1 joeng1 gai1" },
    latin: "Rallus aquaticus",
    description: {
      "en": "A super shy bird that makes spooky pig-like \"squealing\" sounds from deep in the reeds. Heard far more often than seen!",
      "zh-Hant": "一隻超級害羞的鳥，會在蘆葦深處發出像小豬一樣詭異的「吱吱」叫聲。被聽見的次數比被看到的多得多！",
      "zh-Hans": "一只超级害羞的鸟，会在芦苇深处发出像小猪一样诡异的「吱吱」叫声。被听见的次数比被看到的多得多！",
      "yue": "一隻超級怕醜嘅雀，會喺蘆葦深處發出好似小豬咁嘅怪異「吱吱」聲。聽到嘅次數比見到嘅多好多！",
      "fr": "Un oiseau hyper timide qui pousse des cris étranges de cochonnet depuis le fond des roseaux. Bien plus souvent entendu que vu !",
      "es": "Un ave hiper-tímida que emite chillidos espeluznantes como un cerdito desde el fondo de los juncos. ¡Mucho más oído que visto!"
    }
  },
  {
    id: "moorhen",
    wiki: "Common_moorhen",
    color: "#1f1f1f",
    sizeCategory: "medium",
    sizeCm: 33,
    where: ["Park ponds", "Slow rivers and canals", "Reedy lake edges"],
    names: {
      "en": "Common Moorhen",
      "zh-Hant": "黑水雞",
      "zh-Hans": "黑水鸡",
      "yue": "黑水雞",
      "fr": "Gallinule poule-d'eau",
      "es": "Gallineta común"
    },
    pronunciation: { pinyin: "hēi shuǐ jī", jyutping: "hak1 seoi2 gai1" },
    latin: "Gallinula chloropus",
    description: {
      "en": "A black water-chicken with a bright red-and-yellow beak and big green feet. Flicks its tail to show a flash of white as it walks.",
      "zh-Hant": "一隻黑色的水雞，有鮮紅黃相間的嘴和大大的綠色腳。走路時會擺尾，露出白色閃光。",
      "zh-Hans": "一只黑色的水鸡，有鲜红黄相间的嘴和大大的绿色脚。走路时会摆尾，露出白色闪光。",
      "yue": "一隻黑色嘅水雞，個嘴鮮紅黃色，仲有對大大隻嘅綠色腳。行路嘅時候會搖尾巴，露出白色閃光。",
      "fr": "Un poulet d'eau noir au bec rouge vif et jaune et aux grandes pattes vertes. Quand elle marche, elle agite la queue pour montrer un éclair blanc.",
      "es": "Una gallina de agua negra con un pico rojo y amarillo brillante y unas grandes patas verdes. ¡Mueve la cola y muestra un destello blanco al andar!"
    }
  },
  {
    id: "whinchat",
    wiki: "Whinchat",
    color: "#c08a4a",
    sizeCategory: "small",
    sizeCm: 13,
    where: ["Bogs and rough grassland (summer)", "Uplands", "Coastal heath"],
    names: {
      "en": "Whinchat",
      "zh-Hant": "草原石䳭",
      "zh-Hans": "草原石䳭",
      "yue": "草原石䳭",
      "fr": "Tarier des prés",
      "es": "Tarabilla norteña"
    },
    pronunciation: { pinyin: "cǎo yuán shí jí", jyutping: "cou2 jyun4 sek6 zik1" },
    latin: "Saxicola rubetra",
    description: {
      "en": "A summer cousin of the stonechat, with a pale eye-stripe and a peachy chest. Flies all the way from Africa to nest in Irish bogs!",
      "zh-Hant": "黑喉鴝的夏天表親，有淺色的眉紋和桃色的胸口。每年從非洲飛到愛爾蘭，在沼澤地築巢！",
      "zh-Hans": "黑喉鸲的夏天表亲，有浅色的眉纹和桃色的胸口。每年从非洲飞到爱尔兰，在沼泽地筑巢！",
      "yue": "黑喉鴝嘅夏天表親，有淺色嘅眉紋同桃色嘅胸口。每年從非洲飛嚟愛爾蘭，喺沼澤地做窩！",
      "fr": "Cousin estival du tarier pâtre, avec un sourcil pâle et une poitrine pêche. Il vole depuis l'Afrique pour nicher dans les tourbières irlandaises !",
      "es": "Primo veraniego de la tarabilla común, con una ceja pálida y el pecho color melocotón. ¡Vuela desde África para anidar en las turberas irlandesas!"
    }
  },
  {
    id: "redstart",
    wiki: "Common_redstart",
    color: "#d04a30",
    sizeCategory: "small",
    sizeCm: 14,
    where: ["Mature oak woodlands (summer)", "Mostly the west and south"],
    names: {
      "en": "Common Redstart",
      "zh-Hant": "歐亞紅尾鴝",
      "zh-Hans": "欧亚红尾鸲",
      "yue": "歐亞紅尾鴝",
      "fr": "Rougequeue à front blanc",
      "es": "Colirrojo real"
    },
    pronunciation: { pinyin: "ōu yà hóng wěi qú", jyutping: "au1 aa3 hung4 mei5 keoi4" },
    latin: "Phoenicurus phoenicurus",
    description: {
      "en": "A handsome summer visitor with a fiery orange-red tail it shivers like a flame! Males also have a black mask and a white forehead.",
      "zh-Hant": "一隻俊俏的夏候鳥，尾巴是火焰般的橙紅色，會像火苗一樣顫動！雄鳥還有黑色面罩和白色額頭。",
      "zh-Hans": "一只俊俏的夏候鸟，尾巴是火焰般的橙红色，会像火苗一样颤动！雄鸟还有黑色面罩和白色额头。",
      "yue": "一隻靚仔嘅夏候鳥，條尾係火焰般嘅橙紅色，仲會好似火舌咁顫動！雄鳥仲有黑色面罩同白色額頭。",
      "fr": "Un beau visiteur d'été à la queue rouge-orange flamboyante qu'il fait frémir comme une flamme ! Les mâles ont aussi un masque noir et un front blanc.",
      "es": "Un guapo visitante de verano con una cola rojo-naranja que tiembla como una llama. ¡Los machos también tienen una máscara negra y la frente blanca!"
    }
  },
  {
    id: "redthroateddiver",
    wiki: "Red-throated_loon",
    color: "#7a3030",
    sizeCategory: "large",
    sizeCm: 60,
    where: ["Coastal waters (winter)", "Sea bays around Ireland in winter"],
    names: {
      "en": "Red-throated Diver",
      "zh-Hant": "紅喉潛鳥",
      "zh-Hans": "红喉潜鸟",
      "yue": "紅喉潛鳥",
      "fr": "Plongeon catmarin",
      "es": "Colimbo chico"
    },
    pronunciation: { pinyin: "hóng hóu qián niǎo", jyutping: "hung4 hau4 cim4 niu5" },
    latin: "Gavia stellata",
    description: {
      "en": "A long, low-bodied diving bird that swims like a submarine. In summer they have a beautiful red throat patch — but most Irish ones are seen in winter at sea, in plain grey-and-white.",
      "zh-Hant": "一隻又長又貼水的潛水鳥，游泳的樣子像潛艇。夏天牠們有漂亮的紅色喉部斑塊——但愛爾蘭大多在冬天看到，海上灰白相間。",
      "zh-Hans": "一只又长又贴水的潜水鸟，游泳的样子像潜艇。夏天它们有漂亮的红色喉部斑块——但爱尔兰大多在冬天看到，海上灰白相间。",
      "yue": "一隻又長又貼水嘅潛水鳥，游水似潛艇咁。夏天佢哋有靚靚嘅紅色喉嚨斑——但喺愛爾蘭多數冬天先見到，海上面係灰白色。",
      "fr": "Un oiseau plongeur long et bas sur l'eau qui nage comme un sous-marin. En été, il a une jolie tache rouge à la gorge — mais en Irlande, on le voit surtout en hiver en mer, en gris et blanc.",
      "es": "Un ave buceadora larga y baja en el agua que nada como un submarino. En verano tiene una bonita mancha roja en la garganta — ¡pero en Irlanda se ve sobre todo en invierno en el mar, gris y blanco!"
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
    birds: ["puffin", "gannet", "manxshearwater", "razorbill", "guillemot", "kittiwake", "blackguillemot", "peregrine"]
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
    birds: ["heron", "mallard", "muteswan", "oystercatcher", "brentgoose", "littleegret", "curlew", "redshank", "blackheadedgull", "commontern"]
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
    birds: ["whooperswan", "muteswan", "brentgoose", "mallard", "lapwing", "curlew", "snipe", "greenshank", "greylag", "reedwarbler", "moorhen"]
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
    birds: ["puffin", "gannet", "razorbill", "guillemot", "kittiwake", "cormorant", "blackguillemot", "raven"]
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
    birds: ["wtailedeagle", "buzzard", "raven", "jay", "songthrush", "blackcap", "treecreeper", "robin", "wren", "heron", "crossbill", "redstart"]
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
    birds: ["mallard", "robin", "magpie", "hoodedcrow", "jackdaw", "woodpigeon", "greattit", "bluetit", "sparrowhawk", "blackbird", "songthrush", "swift", "collareddove", "spottedflycatcher"]
  },
  {
    id: "cliffsmoher",
    name: "Cliffs of Moher",
    region: "County Clare",
    description: {
      "en": "Towering sea cliffs along the wild Atlantic coast. Look for puffins on the grass at the cliff top in summer, with thousands of guillemots and razorbills below.",
      "zh-Hant": "野性大西洋海岸邊高聳的海崖。夏天可以在崖頂草地上找到海鸚，下方還有成千上萬隻海鴉和刀嘴海雀。",
      "zh-Hans": "野性大西洋海岸边高耸的海崖。夏天可以在崖顶草地上找到海鹦，下方还有成千上万只海鸦和刀嘴海雀。",
      "yue": "野性大西洋海岸邊嘅高聳海崖。夏天可以喺崖頂草地度搵到海鸚，下面仲有成千上萬隻海鴉同刀嘴海雀。",
      "fr": "Falaises maritimes spectaculaires au bord de l'Atlantique sauvage. Cherche les macareux dans l'herbe en haut des falaises en été, avec des milliers de guillemots et pingouins en bas.",
      "es": "Imponentes acantilados frente al Atlántico salvaje. En verano busca frailecillos sobre la hierba en lo alto, con miles de araos y alcas debajo."
    },
    birds: ["puffin", "gannet", "razorbill", "guillemot", "kittiwake", "cormorant", "peregrine", "raven", "chough"]
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
    birds: ["muteswan", "whooperswan", "mallard", "tuftedduck", "coot", "swallow", "greylag", "commontern", "gcgrebe", "moorhen", "littlegrebe"]
  }
];
