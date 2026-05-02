/* Bird data for "Birds in Ireland" kids app.
 * Photos load live from Wikipedia REST API (Wikimedia Commons, CC-licensed).
 * Descriptions are written for kids aged 5-12 in 6 languages.
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
      "zh-Hant": "歐亞鴝（知更鳥）",
      "zh-Hans": "欧亚鸲（知更鸟）",
      "yue": "知更鳥",
      "fr": "Rouge-gorge familier",
      "es": "Petirrojo europeo"
    },
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
    latin: "Haliaeetus albicilla",
    description: {
      "en": "Ireland's biggest eagle, with wings up to 2.4 metres wide. Once gone from Ireland, eagles have been brought back since 2007.",
      "zh-Hant": "愛爾蘭最大的鷹，翼展可達2.4米。曾經在愛爾蘭絕跡，從2007年起重新引入。",
      "zh-Hans": "爱尔兰最大的鹰，翼展可达2.4米。曾经在爱尔兰绝迹，自2007年起重新引入。",
      "yue": "愛爾蘭最大隻嘅鷹，翼展可以闊到2.4米。以前喺愛爾蘭絕咗種，2007年起再引入返。",
      "fr": "Le plus grand aigle d'Irlande, avec des ailes pouvant atteindre 2,4 m. Disparu autrefois, il a été réintroduit depuis 2007.",
      "es": "El águila más grande de Irlanda, con alas de hasta 2,4 metros. Desapareció una vez y se reintrodujo desde 2007."
    }
  }
];

window.SPOTS = [
  {
    id: "skelligs",
    name: "Skellig Islands",
    region: "County Kerry",
    description: {
      "en": "Two amazing rocky islands rising from the sea. Home to puffins, gannets, storm petrels and Manx shearwaters.",
      "zh-Hant": "兩座從海中升起的奇妙岩石島嶼。是海鸚、北鰹鳥、海燕和大鸌的家。",
      "zh-Hans": "两座从海中升起的奇妙岩石岛屿。是海鹦、北鲣鸟、海燕和大鹱的家。",
      "yue": "兩個從海中升起嘅奇妙岩石島，係海鸚、北鰹鳥、海燕同大鸌嘅屋企。",
      "fr": "Deux îles rocheuses extraordinaires qui surgissent de la mer. Macareux, fous de Bassan, pétrels et puffins y nichent.",
      "es": "Dos asombrosas islas rocosas que se alzan sobre el mar. Hogar de frailecillos, alcatraces, paíños y pardelas."
    },
    birds: ["puffin", "gannet"]
  },
  {
    id: "bullisland",
    name: "North Bull Island",
    region: "Dublin",
    description: {
      "en": "Ireland's first National Bird Sanctuary. A short bus ride from Dublin city centre — perfect for spotting waders and ducks.",
      "zh-Hant": "愛爾蘭第一個國家鳥類保護區。從都柏林市中心搭巴士很快到達——是觀察涉禽和野鴨的好地方。",
      "zh-Hans": "爱尔兰第一个国家鸟类保护区。从都柏林市中心搭巴士很快到达——是观察涉禽和野鸭的好地方。",
      "yue": "愛爾蘭第一個國家鳥類保護區。由都柏林市中心搭巴士好快就到——係觀察涉禽同野鴨嘅好地方。",
      "fr": "La première réserve ornithologique nationale d'Irlande. À deux pas du centre de Dublin — parfait pour observer limicoles et canards.",
      "es": "El primer santuario nacional de aves de Irlanda. A un corto trayecto en bus del centro de Dublín — ideal para ver limícolas y patos."
    },
    birds: ["heron", "mallard", "muteswan"]
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
    birds: ["muteswan", "mallard"]
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
    birds: ["puffin", "gannet"]
  },
  {
    id: "killarneynp",
    name: "Killarney National Park",
    region: "County Kerry",
    description: {
      "en": "Ancient oak woods and big lakes. Watch the sky for white-tailed eagles, brought back to Ireland from 2007.",
      "zh-Hant": "古老的橡木森林和大湖。仰望天空找找白尾海鵰——牠們從2007年起重新被引入愛爾蘭。",
      "zh-Hans": "古老的橡木森林和大湖。仰望天空找找白尾海雕——它们从2007年起重新被引入爱尔兰。",
      "yue": "古老嘅橡木森林同大湖。望住天空搵下白尾海鵰——佢哋由2007年起重新引入返愛爾蘭。",
      "fr": "Forêts de chênes anciennes et grands lacs. Regarde le ciel : les pygargues à queue blanche y ont été réintroduits depuis 2007.",
      "es": "Antiguos bosques de robles y grandes lagos. Mira al cielo para ver pigargos, reintroducidos en Irlanda desde 2007."
    },
    birds: ["wtailedeagle", "heron"]
  },
  {
    id: "phoenixpark",
    name: "Phoenix Park",
    region: "Dublin",
    description: {
      "en": "One of the biggest city parks in Europe. Ducks on the ponds, robins in the trees, and a herd of fallow deer too!",
      "zh-Hant": "歐洲最大的城市公園之一。池塘有鴨子、樹上有知更鳥，仲有一群黇鹿！",
      "zh-Hans": "欧洲最大的城市公园之一。池塘有鸭子、树上有知更鸟，还有一群黇鹿！",
      "yue": "歐洲最大嘅市內公園之一。池塘有鴨仔、樹上有知更鳥，仲有一群黇鹿添！",
      "fr": "L'un des plus grands parcs urbains d'Europe. Des canards sur les étangs, des rouges-gorges dans les arbres et même un troupeau de daims !",
      "es": "Uno de los mayores parques urbanos de Europa. Patos en los estanques, petirrojos en los árboles y ¡hasta una manada de gamos!"
    },
    birds: ["mallard", "robin", "magpie"]
  },
  {
    id: "cliffsmoher",
    name: "Cliffs of Moher",
    region: "County Clare",
    description: {
      "en": "Towering sea cliffs along the wild Atlantic coast. Look for puffins on the grass at the cliff top in summer.",
      "zh-Hant": "野生大西洋海岸邊高聳的海崖。夏天可以喺崖頂草地上找到海鸚。",
      "zh-Hans": "野生大西洋海岸边高耸的海崖。夏天可以在崖顶草地上找到海鹦。",
      "yue": "野性大西洋海岸邊嘅高聳海崖。夏天可以喺崖頂草地度搵到海鸚。",
      "fr": "Falaises maritimes spectaculaires au bord de l'Atlantique sauvage. Cherche les macareux dans l'herbe en haut des falaises en été.",
      "es": "Imponentes acantilados frente al Atlántico salvaje. En verano busca frailecillos sobre la hierba en lo alto."
    },
    birds: ["puffin", "gannet"]
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
    birds: ["muteswan", "mallard"]
  }
];
