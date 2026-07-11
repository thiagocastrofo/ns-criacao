// ═══════════════════════════════════════════════════
//  FIREBASE CONFIG — preencha com seus dados
//  (firebase.google.com > seu projeto > configurações)
// ═══════════════════════════════════════════════════
const FIREBASE_CONFIG = {
  apiKey:            "",
  authDomain:        "",
  databaseURL:       "",   // ex: https://PROJETO-default-rtdb.firebaseio.com
  projectId:         "",
  storageBucket:     "",
  messagingSenderId: "",
  appId:             ""
};
const FB_PATH = "demandas"; // chave no Realtime Database

// ═══════════════════════════════════════════════════
//  CONSTANTES
// ═══════════════════════════════════════════════════
const CATS    = ['NSCO','CIDADE','EVENTOS','OUTROS'];
const SCYCLE  = ['pendente','em andamento','concluído'];
const PALETTE = ['#FF6B6B','#FF9F43','#F9CA24','#6AB04C','#4ECDC4','#45B7D1','#0A84FF','#BF5AF2','#FF453A','#636E72'];

// ═══════════════════════════════════════════════════
//  ESTADO
// ═══════════════════════════════════════════════════
let team = [
  {name:'Luiza',           color:'#FF6B6B', svg:null, startDate:'', role:''},
  {name:'Vitão',           color:'#FF9F43', svg:null, startDate:'', role:''},
  {name:'Thiago',          color:'#45B7D1', svg:null, startDate:'', role:''},
  {name:'Marcela',         color:'#BF5AF2', svg:null, startDate:'', role:''},
  {name:'Marcelo',         color:'#0A84FF', svg:null, startDate:'', role:''},
  {name:'Pedro Melo',      color:'#4ECDC4', svg:null, startDate:'', role:''},
  {name:'Gabs',            color:'#6AB04C', svg:null, startDate:'', role:''},
  {name:'Cris',            color:'#F9CA24', svg:null, startDate:'', role:''},
  {name:'Vitor Chalezinho',color:'#EE5A6F', svg:null, startDate:'', role:''},
];

const SIZES = ['P','M','G'];
const SIZE_LABELS = {P:'Pequeno', M:'Médio', G:'Grande'};
// workload weight per project size
const SIZE_WEIGHT = {P:1, M:2, G:3};

let tasks = [
  {id:1,title:"PPT Nestlé",category:"NSCO",description:"",responsible:["—"],dueDate:"",presentDate:"",status:"concluído",size:"M",won:false},
  {id:2,title:"PPT Tribe Accor",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"",presentDate:"",status:"concluído",size:"M",won:false},
  {id:3,title:"Sympla Ação Junina",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"",presentDate:"",status:"concluído",size:"M",won:false},
  {id:4,title:"Red Bull Sarará",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"",presentDate:"",status:"concluído",size:"M",won:false},
  {id:5,title:"Alterações Thomaz Bellucci",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"",presentDate:"",status:"concluído",size:"M",won:false},
  {id:6,title:"Localiza",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"",presentDate:"",status:"concluído",size:"M",won:false},
  {id:7,title:"Red Bull Sarará Ajuste QR",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"",presentDate:"",status:"concluído",size:"M",won:false},
  {id:8,title:"Sympla Circuito Junino",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"",presentDate:"",status:"concluído",size:"M",won:false},
  {id:9,title:"IFF / FCE Pharma Copo / Bottom Tag / Cordinha ajustes",category:"NSCO",description:"",responsible:["Marcelo","Pedro Melo"],dueDate:"",presentDate:"",status:"concluído",size:"M",won:false},
  {id:10,title:"IFF / Novos Ajustes",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"",presentDate:"",status:"concluído",size:"M",won:false},
  {id:11,title:"Globo Brinde Fim de Ano Apresentação",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"",presentDate:"",status:"concluído",size:"M",won:false},
  {id:12,title:"Globo Dona de Mim IDV + Simulação",category:"NSCO",description:"",responsible:["Pedro Melo","Vitão"],dueDate:"",presentDate:"",status:"concluído",size:"M",won:false},
  {id:13,title:"Arcelor Mockup",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"",presentDate:"",status:"concluído",size:"M",won:false},
  {id:14,title:"BudZone Fifa Ceno",category:"NSCO",description:"",responsible:["Pedro Melo","Vitão"],dueDate:"",presentDate:"",status:"concluído",size:"M",won:false},
  {id:15,title:"Cidade Camisas",category:"NSCO",description:"",responsible:["—"],dueDate:"",presentDate:"",status:"concluído",size:"M",won:false},
  {id:16,title:"Bernoulli | Moyra 22/05",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2026-05-22",presentDate:"",status:"concluído",size:"M",won:false},
  {id:17,title:"Hot n Code Sacola e elevador 27/05",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-05-27",presentDate:"",status:"concluído",size:"M",won:false},
  {id:18,title:"3 Lambes Cidade 26/05",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-05-26",presentDate:"",status:"concluído",size:"M",won:false},
  {id:19,title:"Hot n Code Credenciais 27/05",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-05-27",presentDate:"",status:"concluído",size:"M",won:false},
  {id:20,title:"OBoticário Cidade 27/05 Ativações pt1",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-05-27",presentDate:"",status:"concluído",size:"M",won:false},
  {id:21,title:"OBoticário Cidade 27/05 Convite Save the Date",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-05-27",presentDate:"",status:"concluído",size:"M",won:false},
  {id:22,title:"Arcelor ativações 28/05",category:"NSCO",description:"",responsible:["Pedro Melo","Marcelo"],dueDate:"2026-05-28",presentDate:"",status:"concluído",size:"M",won:false},
  {id:23,title:"Hotmart Lolla Meets Fire 28/05 Cardápio",category:"NSCO",description:"",responsible:["Pedro Melo","Vitão"],dueDate:"2026-05-28",presentDate:"",status:"concluído",size:"M",won:false},
  {id:24,title:"CIDADE Displays PDVs Nephew",category:"NSCO",description:"",responsible:["—"],dueDate:"",presentDate:"",status:"concluído",size:"M",won:false},
  {id:25,title:"OBoticário Her Code 30/05",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2026-05-30",presentDate:"",status:"concluído",size:"M",won:false},
  {id:26,title:"Cadiveu 30/05 IDV, Apresentação e Brindes",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2026-05-30",presentDate:"",status:"concluído",size:"M",won:false},
  {id:27,title:"OBoticário Cidade GB Encontro de Líderes 30/05",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2026-05-30",presentDate:"",status:"concluído",size:"M",won:false},
  {id:28,title:"Feira VR Floripa 30/05",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2026-05-30",presentDate:"",status:"concluído",size:"M",won:false},
  {id:29,title:"Red Bull Zero Ação 30/05",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2026-05-30",presentDate:"",status:"concluído",size:"M",won:false},
  {id:30,title:"Cardápio Hot N'Code 02/06",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-06-02",presentDate:"",status:"concluído",size:"M",won:false},
  {id:31,title:"CIDADE Carrinho 02/06",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-06-02",presentDate:"",status:"concluído",size:"M",won:false},
  {id:32,title:"OBoticário artes virtuais 02/06",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-06-02",presentDate:"",status:"concluído",size:"M",won:false},
  {id:33,title:"CIDADE campanhas das marcas patrocinadoras Vivo / Mccain 02/06",category:"NSCO",description:"",responsible:["—"],dueDate:"2026-06-02",presentDate:"",status:"concluído",size:"M",won:false},
  {id:34,title:"Tardezinha Convite nSco. 02/06",category:"NSCO",description:"",responsible:["—"],dueDate:"2026-06-02",presentDate:"",status:"concluído",size:"M",won:false},
  {id:35,title:"Kopenhagen apresentação + campanha 02/06 ref dia dos namorados + cereja",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2026-06-02",presentDate:"",status:"concluído",size:"M",won:false},
  {id:36,title:"Budweiser FIFA saídas 04/06",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2026-06-04",presentDate:"",status:"concluído",size:"M",won:false},
  {id:37,title:"CIDADE campanhas das marcas patrocinadoras principais + base geral 06/06",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-06-06",presentDate:"",status:"concluído",size:"M",won:false},
  {id:38,title:"Quintal Sessions by Budweiser FIFA postagem trio feed + Avatar 06/06",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-06-06",presentDate:"",status:"concluído",size:"M",won:false},
  {id:39,title:"Hotmart WarmUp Fire 09/06",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2026-06-09",presentDate:"",status:"concluído",size:"M",won:false},
  {id:40,title:"Roleta Vale Tudo Globo 09/06",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2026-06-09",presentDate:"",status:"concluído",size:"M",won:false},
  {id:41,title:"Cenografia Mangalarga Expo 09/06",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-06-09",presentDate:"",status:"concluído",size:"M",won:false},
  {id:42,title:"Arcelor chamada vídeo 09/06",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2026-06-09",presentDate:"",status:"concluído",size:"M",won:false},
  {id:43,title:"CIDADE Ceno 09/06",category:"NSCO",description:"",responsible:["Cris","Marcelo"],dueDate:"2026-06-09",presentDate:"",status:"concluído",size:"M",won:false},
  {id:44,title:"Arte Contratação Produção Tuffy 09/06",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-06-09",presentDate:"",status:"concluído",size:"M",won:false},
  {id:45,title:"Prêmio Live 10/06",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-06-10",presentDate:"",status:"concluído",size:"M",won:false},
  {id:46,title:"Arcelor Stand Made in Minas 10/06",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2026-06-10",presentDate:"",status:"concluído",size:"M",won:false},
  {id:47,title:"CIDADE Molduras Vivo 11/06",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-06-11",presentDate:"",status:"concluído",size:"M",won:false},
  {id:48,title:"O Boticário Quadros e Números Ativações 12/06",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-06-12",presentDate:"",status:"concluído",size:"M",won:false},
  {id:49,title:"Uniforme Promotoras Bud 12/06",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-06-12",presentDate:"",status:"concluído",size:"M",won:false},
  {id:50,title:"Tardezinha Ajuste de Arte 12/06",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-06-12",presentDate:"",status:"concluído",size:"M",won:false},
  {id:51,title:"Bernoulli 360° 12/06",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2026-06-12",presentDate:"",status:"concluído",size:"M",won:false},
  {id:52,title:"Localiza / Cinemark Presentation 13/06",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2026-06-13",presentDate:"",status:"concluído",size:"M",won:false},
  {id:53,title:"Budweiser Camisa Kit 13/06",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-06-13",presentDate:"",status:"concluído",size:"M",won:false},
  {id:54,title:"CIDADE Card Zig 13/06",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-06-13",presentDate:"",status:"concluído",size:"M",won:false},
  {id:55,title:"HotMart 8 Dígitos Backlight 13/06",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-06-13",presentDate:"",status:"concluído",size:"M",won:false},
  {id:56,title:"Aura Community 13/06",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-06-13",presentDate:"",status:"concluído",size:"M",won:false},
  {id:57,title:"Fini Apresentação 16/06",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2026-06-16",presentDate:"",status:"concluído",size:"M",won:false},
  {id:58,title:"Aura Dia Dos Namorados 17/06",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-06-17",presentDate:"",status:"concluído",size:"M",won:false},
  {id:59,title:"Cimento Nacional 16/06 - 18/06",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2026-06-16",presentDate:"",status:"concluído",size:"M",won:false},
  {id:60,title:"Aura ação Dia dos Namorados 18/06",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-06-18",presentDate:"",status:"concluído",size:"M",won:false},
  {id:61,title:"O Boticário CIDADE Convites 18/06",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-06-18",presentDate:"",status:"concluído",size:"M",won:false},
  {id:62,title:"Mockups Ludo 18/06",category:"NSCO",description:"",responsible:["Vitão","Ju"],dueDate:"2026-06-18",presentDate:"",status:"concluído",size:"M",won:false},
  {id:63,title:"Arcelor KV Base 18/06",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-06-18",presentDate:"",status:"concluído",size:"M",won:false},
  {id:64,title:"Card Palco Hotmart 18/06",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2026-06-18",presentDate:"",status:"concluído",size:"M",won:false},
  {id:65,title:"O Boticário CIDADE Intruções 20/06",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-06-20",presentDate:"",status:"concluído",size:"M",won:false},
  {id:66,title:"Cardápio Hotmart 20/06",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2026-06-20",presentDate:"",status:"concluído",size:"M",won:false},
  {id:67,title:"Cardápios GLOBO Triedro 10x21cm 23/06",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-06-23",presentDate:"",status:"concluído",size:"M",won:false},
  {id:68,title:"Conacarne 23/06",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2026-06-23",presentDate:"",status:"concluído",size:"M",won:false},
  {id:69,title:"Melissa Grendene 23/06",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2026-06-23",presentDate:"",status:"concluído",size:"M",won:false},
  {id:70,title:"Quintal Sessions Convites Virtuais + Capa Ambev e Influs 23/06",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-06-23",presentDate:"",status:"concluído",size:"M",won:false},
  {id:71,title:"Aura Moletom e Conteúdo Leds Ação Dia dos Namorados 24/06",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-06-24",presentDate:"",status:"concluído",size:"M",won:false},
  {id:72,title:"Bud Convite QR Code Influx & Ambev 24/06",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-06-24",presentDate:"",status:"concluído",size:"M",won:false},
  {id:73,title:"O Boticário CIDADE Cardápio 25/06",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2026-06-25",presentDate:"",status:"concluído",size:"M",won:false},
  {id:74,title:"O Boticário CIDADE Instruções convites 24/06",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-06-24",presentDate:"",status:"concluído",size:"M",won:false},
  {id:75,title:"Stellantis Backdrop Tardezinha 25/06",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2026-06-25",presentDate:"",status:"concluído",size:"M",won:false},
  {id:76,title:"Arcelor Concorrência 25/06",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2026-06-25",presentDate:"",status:"concluído",size:"M",won:false},
  {id:77,title:"Her Code VS2 25/06",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2026-06-25",presentDate:"",status:"concluído",size:"M",won:false},
  {id:78,title:"Hotmart Troopers 26/06 KV",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-06-26",presentDate:"",status:"concluído",size:"M",won:false},
  {id:79,title:"CIDADE ASSAÍ 27/06",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-06-27",presentDate:"",status:"concluído",size:"M",won:false},
  {id:80,title:"Lindt + Chalezinho 30/06",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2026-06-30",presentDate:"",status:"concluído",size:"M",won:false},
  {id:81,title:"Artes Tardezinha Camarote Citroen 01/07",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-07-01",presentDate:"",status:"concluído",size:"M",won:false},
  {id:82,title:"Bud Selo 5x5cm 01/07",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-07-01",presentDate:"",status:"concluído",size:"M",won:false},
  {id:83,title:"Conacarne 02/07",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-07-02",presentDate:"",status:"concluído",size:"M",won:false},
  {id:84,title:"Cardápio Hotmart 03/07",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-07-03",presentDate:"",status:"concluído",size:"M",won:false},
  {id:85,title:"Cardápio Hotmart 03/07 BSB",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-07-03",presentDate:"",status:"concluído",size:"M",won:false},
  {id:86,title:"Budweiser Card Influs 03/07",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-07-03",presentDate:"",status:"concluído",size:"M",won:false},
  {id:87,title:"Card / Tag / Voucher nSco. 04/07",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-07-04",presentDate:"",status:"concluído",size:"M",won:false},
  {id:88,title:"Cactus Layout 04/07",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-07-04",presentDate:"",status:"concluído",size:"M",won:false},
  {id:89,title:"Núcleo Metropolitano Premiação 04/07",category:"NSCO",description:"",responsible:["Vitão","Pedro Melo"],dueDate:"2025-07-04",presentDate:"",status:"concluído",size:"M",won:false},
  {id:90,title:"Hotmart Fire 10 anos Layout Cenografia 04/07",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-07-04",presentDate:"",status:"concluído",size:"M",won:false},
  {id:91,title:"Mockup Her Code Uniforme 07/07",category:"NSCO",description:"",responsible:["—"],dueDate:"2025-07-07",presentDate:"",status:"concluído",size:"M",won:false},
  {id:92,title:"Minas Máquinas 08/07",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-07-08",presentDate:"",status:"concluído",size:"M",won:false},
  {id:93,title:"Arcelor Fim de Ano 08/07",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-07-08",presentDate:"",status:"concluído",size:"M",won:false},
  {id:94,title:"Cadiveu Beauty Fair 10/07",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-07-10",presentDate:"",status:"concluído",size:"M",won:false},
  {id:95,title:"RedBull Ação Ativação Academias 10/07",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-07-10",presentDate:"",status:"concluído",size:"M",won:false},
  {id:96,title:"RedBull Ação Apresentação Academias 10/07",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-07-10",presentDate:"",status:"concluído",size:"M",won:false},
  {id:97,title:"O Boticário Convite Franqueados Tiradentes 09/07",category:"NSCO",description:"",responsible:["—"],dueDate:"2025-07-09",presentDate:"",status:"concluído",size:"M",won:false},
  {id:98,title:"Mangalarga ajustes cenografia 09/07",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-07-09",presentDate:"",status:"concluído",size:"M",won:false},
  {id:99,title:"Camiseta Amstel 10/07",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-07-10",presentDate:"",status:"concluído",size:"M",won:false},
  {id:100,title:"Mangalarga Calçada 11/07",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-07-11",presentDate:"",status:"concluído",size:"M",won:false},
  {id:101,title:"Localiza Fartura 11/07",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-07-11",presentDate:"",status:"concluído",size:"M",won:false},
  {id:102,title:"Moodboard nSco. 11/07",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-07-11",presentDate:"",status:"concluído",size:"M",won:false},
  {id:103,title:"Complex 11/07",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-07-11",presentDate:"",status:"concluído",size:"M",won:false},
  {id:104,title:"Mangalarga Ballena Peças 11/07",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-07-11",presentDate:"",status:"concluído",size:"M",won:false},
  {id:105,title:"Arte Boas-Vindas Marcela 14/07",category:"NSCO",description:"",responsible:["—"],dueDate:"2025-07-14",presentDate:"",status:"concluído",size:"M",won:false},
  {id:106,title:"Card Institucional nSco 14/07",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-07-14",presentDate:"",status:"concluído",size:"M",won:false},
  {id:107,title:"Mangalarga Igreja 14/07",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-07-14",presentDate:"",status:"concluído",size:"M",won:false},
  {id:108,title:"CIDADE flyer 14/07",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2025-07-14",presentDate:"",status:"concluído",size:"M",won:false},
  {id:109,title:"H2 Poker 15/07",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-07-15",presentDate:"",status:"concluído",size:"M",won:false},
  {id:110,title:"FAEMG Conacarne 16/07",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-07-16",presentDate:"",status:"concluído",size:"M",won:false},
  {id:111,title:"RedBelt 17/07",category:"NSCO",description:"",responsible:["—"],dueDate:"2025-07-17",presentDate:"",status:"concluído",size:"M",won:false},
  {id:112,title:"Camiseta HotMart Arte Brownie Troopers 17/07",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-07-17",presentDate:"",status:"concluído",size:"M",won:false},
  {id:113,title:"Mangalarga Amstel Bares 16/07",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-07-16",presentDate:"",status:"concluído",size:"M",won:false},
  {id:114,title:"Mangalarga Bar Autosserviço 17/07",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-07-17",presentDate:"",status:"concluído",size:"M",won:false},
  {id:115,title:"Purify Orange Day - Save The Date 18/07",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2025-07-18",presentDate:"",status:"concluído",size:"M",won:false},
  {id:116,title:"Boticário Confraria 18/07",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-07-18",presentDate:"",status:"concluído",size:"M",won:false},
  {id:117,title:"Arcelor Economia Circular 21/07",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-07-21",presentDate:"",status:"concluído",size:"M",won:false},
  {id:118,title:"COPASA Memórias das Águas 22/07",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2025-07-22",presentDate:"",status:"concluído",size:"M",won:false},
  {id:119,title:"Concorrência Hotmart Troopers Party 22/07",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-07-22",presentDate:"",status:"concluído",size:"M",won:false},
  {id:120,title:"Henrique & Juliano Save The Date 22/07",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-07-22",presentDate:"",status:"concluído",size:"M",won:false},
  {id:121,title:"Globo Produção / Cenografia 22/07",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-07-22",presentDate:"",status:"concluído",size:"M",won:false},
  {id:122,title:"CIDADE Relatório Templates 23/07",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-07-23",presentDate:"",status:"concluído",size:"M",won:false},
  {id:123,title:"Boticário Her Code 24/07 Apresentação",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-07-24",presentDate:"",status:"concluído",size:"M",won:false},
  {id:124,title:"Hotmart Experience 24/07 Produção",category:"NSCO",description:"",responsible:["Pedro Melo","Marcela"],dueDate:"2025-07-24",presentDate:"",status:"concluído",size:"M",won:false},
  {id:125,title:"Invest Festuris e ABAV 24/07",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-07-24",presentDate:"",status:"concluído",size:"M",won:false},
  {id:126,title:"AMCHAM 24/07",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2025-07-24",presentDate:"",status:"concluído",size:"M",won:false},
  {id:127,title:"Guaraná Propositivo 25/07",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-07-25",presentDate:"",status:"concluído",size:"M",won:false},
  {id:128,title:"Guaraná Cenografia 25/07",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-07-25",presentDate:"",status:"concluído",size:"M",won:false},
  {id:129,title:"Purify Orange Day Convite + Agradecimento 25/07",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2025-07-25",presentDate:"",status:"concluído",size:"M",won:false},
  {id:130,title:"Nuvem Shop 28/07",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-07-28",presentDate:"",status:"concluído",size:"M",won:false},
  {id:131,title:"Omelete + TikTok IDV 29/07",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-07-29",presentDate:"",status:"concluído",size:"M",won:false},
  {id:132,title:"Conacarne Guia 30/07",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2025-07-30",presentDate:"",status:"concluído",size:"M",won:false},
  {id:133,title:"Casa Lindt Mockups 30/07",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-07-30",presentDate:"",status:"concluído",size:"M",won:false},
  {id:134,title:"Purify Lambes 30/07",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2025-07-30",presentDate:"",status:"concluído",size:"M",won:false},
  {id:135,title:"Her Code Mockups 31/07",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-07-31",presentDate:"",status:"concluído",size:"M",won:false},
  {id:136,title:"CIDADE manipulação posters 31/07",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-07-31",presentDate:"",status:"concluído",size:"M",won:false},
  {id:137,title:"Vollumens 5 Painéis",category:"NSCO",description:"",responsible:["Pedro Melo","Marcela"],dueDate:"",presentDate:"",status:"concluído",size:"M",won:false},
  {id:138,title:"Conacarne Ajustes Guia e Apresentação 31/07",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-07-31",presentDate:"",status:"concluído",size:"M",won:false},
  {id:139,title:"Sigraweb 01/08",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-08-01",presentDate:"",status:"concluído",size:"M",won:false},
  {id:140,title:"Casa Lindt Mockups Ajustes 01/08",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-08-01",presentDate:"",status:"concluído",size:"M",won:false},
  {id:141,title:"EXA Fim de Ano 01/08",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-08-01",presentDate:"",status:"concluído",size:"M",won:false},
  {id:142,title:"Vollmens 01/08",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2025-08-01",presentDate:"",status:"concluído",size:"M",won:false},
  {id:143,title:"Sigraweb Ajustes 01/08",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-08-01",presentDate:"",status:"concluído",size:"M",won:false},
  {id:144,title:"Omelete + TikTok 01/08",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-08-01",presentDate:"",status:"concluído",size:"M",won:false},
  {id:145,title:"Copasa 04/08",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2025-08-04",presentDate:"",status:"concluído",size:"M",won:false},
  {id:146,title:"Complex Slides 04/08",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-08-04",presentDate:"",status:"concluído",size:"M",won:false},
  {id:147,title:"RAM Layout Apresentação 04/08",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2025-08-04",presentDate:"",status:"concluído",size:"M",won:false},
  {id:148,title:"Boticário Fartura Tiradentes 05/08",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-08-05",presentDate:"",status:"concluído",size:"M",won:false},
  {id:149,title:"O Boticário Encontro de Líderes GB Ajustes 05/08",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-08-05",presentDate:"",status:"concluído",size:"M",won:false},
  {id:150,title:"Hotmart Manipulação Fotos 05/08",category:"NSCO",description:"",responsible:["Pedro Melo","Marcelo"],dueDate:"2025-08-05",presentDate:"",status:"concluído",size:"M",won:false},
  {id:151,title:"Purify Peças Restantes - Confirmação / Lembrete e Agradecimento 05/08",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2025-08-05",presentDate:"",status:"concluído",size:"M",won:false},
  {id:152,title:"Arcelor Corrida KV + Apresentação 07/08",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-08-07",presentDate:"",status:"concluído",size:"M",won:false},
  {id:153,title:"Vaga Arquitetura 07/08",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-08-07",presentDate:"",status:"concluído",size:"M",won:false},
  {id:154,title:"Bradesco 08/08",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-08-08",presentDate:"",status:"concluído",size:"M",won:false},
  {id:155,title:"Cidade Vídeo 08/08",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-08-08",presentDate:"",status:"concluído",size:"M",won:false},
  {id:156,title:"Guia Conacarne Alterações V5 11/08",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-08-11",presentDate:"",status:"concluído",size:"M",won:false},
  {id:157,title:"Purefy Ceno 11/08",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-08-11",presentDate:"",status:"concluído",size:"M",won:false},
  {id:158,title:"Fire WarmUp Refação Completa da IDV 11/08",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-08-11",presentDate:"",status:"concluído",size:"M",won:false},
  {id:159,title:"Vollmens In Cosmetics 11/08",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2025-08-11",presentDate:"",status:"concluído",size:"M",won:false},
  {id:160,title:"CNBC Brindes 11/08",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-08-11",presentDate:"",status:"concluído",size:"M",won:false},
  {id:161,title:"Select 12/08",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-08-12",presentDate:"",status:"concluído",size:"M",won:false},
  {id:162,title:"Her Code Mockups e refino de slides 13/08",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-08-13",presentDate:"",status:"concluído",size:"M",won:false},
  {id:163,title:"Park Shopping 14/08",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-08-14",presentDate:"",status:"concluído",size:"M",won:false},
  {id:164,title:"CNN 14/08",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2025-08-14",presentDate:"",status:"concluído",size:"M",won:false},
  {id:165,title:"Localiza Meeo Ceno 14/08",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-08-14",presentDate:"",status:"concluído",size:"M",won:false},
  {id:166,title:"Syngenta 14/08",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-08-14",presentDate:"",status:"concluído",size:"M",won:false},
  {id:167,title:"Grupo Boticário 14/08",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-08-14",presentDate:"",status:"concluído",size:"M",won:false},
  {id:168,title:"CNBC Backdrops 14/08",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-08-14",presentDate:"",status:"concluído",size:"M",won:false},
  {id:169,title:"Countdown Fire Cenografia 14/08",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-08-14",presentDate:"",status:"concluído",size:"M",won:false},
  {id:170,title:"Alteração TVs Demanda Kiko 14/08",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-08-14",presentDate:"",status:"concluído",size:"M",won:false},
  {id:171,title:"Guaraná Novos Mockups e Slides 18/08",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-08-18",presentDate:"",status:"concluído",size:"M",won:false},
  {id:172,title:"nSco. Marca v1 18/08",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-08-18",presentDate:"",status:"concluído",size:"M",won:false},
  {id:173,title:"Red Bull Fire 18/08",category:"NSCO",description:"",responsible:["Marcelo","Pedro Melo"],dueDate:"2025-08-18",presentDate:"",status:"concluído",size:"M",won:false},
  {id:174,title:"Localiza Ação Mastercard 18/08",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-08-18",presentDate:"",status:"concluído",size:"M",won:false},
  {id:175,title:"Boticário Her Code alterações 18/08",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-08-18",presentDate:"",status:"concluído",size:"M",won:false},
  {id:176,title:"Purefy Agradecimento Foto BH 19/08",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2025-08-19",presentDate:"",status:"concluído",size:"M",won:false},
  {id:177,title:"Guaraná Ação Cabine SP Wandinha 19/08",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-08-19",presentDate:"",status:"concluído",size:"M",won:false},
  {id:178,title:"Boticário Malbec 19/08",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-08-19",presentDate:"",status:"concluído",size:"M",won:false},
  {id:179,title:"Conacarne Brindes 19/08",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-08-19",presentDate:"",status:"concluído",size:"M",won:false},
  {id:180,title:"Boticário Her Code Alterações 19/08",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-08-19",presentDate:"",status:"concluído",size:"M",won:false},
  {id:181,title:"EstrelaBet 20/08",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2025-08-20",presentDate:"",status:"concluído",size:"M",won:false},
  {id:182,title:"Hotmart Warmup Cardápio 20/08",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-08-20",presentDate:"",status:"concluído",size:"M",won:false},
  {id:183,title:"Localiza Fartura Adesivo Pousadas 20/08",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-08-20",presentDate:"",status:"concluído",size:"M",won:false},
  {id:184,title:"Boticário Her Code Mockups Alterações 20/08",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-08-20",presentDate:"",status:"concluído",size:"M",won:false},
  {id:185,title:"Hotmart Countdown Cardápio Triedro 21/08",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-08-21",presentDate:"",status:"concluído",size:"M",won:false},
  {id:186,title:"Conarcarne Guia Alteração V6 21/08",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-08-21",presentDate:"",status:"concluído",size:"M",won:false},
  {id:187,title:"Arcelor Corrida Alteração Logo 21/08",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-08-21",presentDate:"",status:"concluído",size:"M",won:false},
  {id:188,title:"Boticário Her Code Mockups Alterações V4 21/08",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-08-21",presentDate:"",status:"concluído",size:"M",won:false},
  {id:189,title:"Hotmart Fire 9 Cardápios 22/08",category:"NSCO",description:"",responsible:["Vitão","Gabs"],dueDate:"2025-08-22",presentDate:"",status:"concluído",size:"M",won:false},
  {id:190,title:"Omelete + TikTok Virtuais 22/08",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2025-08-22",presentDate:"",status:"concluído",size:"M",won:false},
  {id:191,title:"CIMED Cenografia 25/08",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-08-25",presentDate:"",status:"concluído",size:"M",won:false},
  {id:192,title:"Omelete + TikTok Ceno 25/08",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-08-25",presentDate:"",status:"concluído",size:"M",won:false},
  {id:193,title:"Omelete + TikTok Brindes 25/08",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-08-25",presentDate:"",status:"concluído",size:"M",won:false},
  {id:194,title:"Hotmart Fire Warmup Cardápio Alterações 25/08",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-08-25",presentDate:"",status:"concluído",size:"M",won:false},
  {id:195,title:"Ram Festival 25/08 Apresentação",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2025-08-25",presentDate:"",status:"concluído",size:"M",won:false},
  {id:196,title:"Ram Chalezinho Ceno Totem + Tag Porta 25/08",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-08-25",presentDate:"",status:"concluído",size:"M",won:false},
  {id:197,title:"Boticário Her Code Mockups Alterações 25/08",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-08-25",presentDate:"",status:"concluído",size:"M",won:false},
  {id:198,title:"Carta Hotmart Fire 26/08",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-08-26",presentDate:"",status:"concluído",size:"M",won:false},
  {id:199,title:"Boticário Confraria Malbec Ajustes 26/08",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-08-26",presentDate:"",status:"concluído",size:"M",won:false},
  {id:200,title:"Hotmart Fire Cardápio Área Vip Ajuste 26/08",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-08-26",presentDate:"",status:"concluído",size:"M",won:false},
  {id:201,title:"Conceito KV Halloween Moodboard 26/08",category:"NSCO",description:"",responsible:["Vitão","Pedro Melo"],dueDate:"2025-08-26",presentDate:"",status:"concluído",size:"M",won:false},
  {id:202,title:"Boticário Her Code Mockups Alterações 26/08",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-08-26",presentDate:"",status:"concluído",size:"M",won:false},
  {id:203,title:"Aura Beauty Fair Camiseta Promo 26/08",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-08-26",presentDate:"",status:"concluído",size:"M",won:false},
  {id:204,title:"Omelete + TikTok RSVP 26/08",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2025-08-26",presentDate:"",status:"concluído",size:"M",won:false},
  {id:205,title:"Ram Cuiabá Backdrop 26/08",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2025-08-26",presentDate:"",status:"concluído",size:"M",won:false},
  {id:206,title:"Omelete + TikTok Apresentação Roteiro 26/08",category:"NSCO",description:"",responsible:["Gabs"],dueDate:"2025-08-26",presentDate:"",status:"concluído",size:"M",won:false},
  {id:207,title:"Halloween IDV Base - Logo Edição + Cores + Fontes 26/08",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-08-26",presentDate:"",status:"concluído",size:"M",won:false},
  {id:208,title:"Boticário Her Code Mockups Alterações 27/08",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-08-27",presentDate:"",status:"concluído",size:"M",won:false},
  {id:209,title:"Ram Ativação Promoters 27/08",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-08-27",presentDate:"",status:"concluído",size:"M",won:false},
  {id:210,title:"Omelete + TikTok Ceno Ajustes e Brindes 28/08",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-08-28",presentDate:"",status:"concluído",size:"M",won:false},
  {id:211,title:"Conacarne Avental 27/08",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-08-27",presentDate:"",status:"concluído",size:"M",won:false},
  {id:212,title:"Halloween SaveTheDate Motion + Estático + Sympla 28/08",category:"NSCO",description:"",responsible:["Pedro Melo","Vitão"],dueDate:"2025-08-28",presentDate:"",status:"concluído",size:"M",won:false},
  {id:213,title:"Hotmart Fire Display e Fichas 28/08",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-08-28",presentDate:"",status:"concluído",size:"M",won:false},
  {id:214,title:"nSco. Apresentação Marca V2 28/08",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-08-28",presentDate:"",status:"concluído",size:"M",won:false},
  {id:215,title:"Ram Cuiabá 28/08 Apresentação + RSVP",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2025-08-28",presentDate:"",status:"concluído",size:"M",won:false},
  {id:216,title:"Boticário Her Code Mockups Alterações V9 28/08",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-08-28",presentDate:"",status:"concluído",size:"M",won:false},
  {id:217,title:"Conacarne Crachás 29/09",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-09-29",presentDate:"",status:"concluído",size:"M",won:false},
  {id:218,title:"Boticário Her Code Mockups Alterações V10 29/08",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-08-29",presentDate:"",status:"concluído",size:"M",won:false},
  {id:219,title:"Aura Beauty Fair Fichas + Totem 01/09",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-09-01",presentDate:"",status:"concluído",size:"M",won:false},
  {id:220,title:"Hotmart Fire Carta Agradecimento + Tampa Caixa + Tag 01/09",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-09-01",presentDate:"",status:"concluído",size:"M",won:false},
  {id:221,title:"Cimento Nacional 01/09",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-09-01",presentDate:"",status:"concluído",size:"M",won:false},
  {id:222,title:"Halloween Faltam 10 Dias Abertura de Vendas 01/09",category:"NSCO",description:"",responsible:["Vitão","Pedro Melo"],dueDate:"2025-09-01",presentDate:"",status:"concluído",size:"M",won:false},
  {id:223,title:"RAM Cuiabá Ajustes 01/09",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2025-09-01",presentDate:"",status:"concluído",size:"M",won:false},
  {id:224,title:"SABESP KV 01/09",category:"NSCO",description:"",responsible:["Gabs"],dueDate:"2025-09-01",presentDate:"",status:"concluído",size:"M",won:false},
  {id:225,title:"CIMED Apresentação 02/09",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-09-02",presentDate:"",status:"concluído",size:"M",won:false},
  {id:226,title:"Halloween Geral 02/09",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-09-02",presentDate:"",status:"concluído",size:"M",won:false},
  {id:227,title:"Fire Festival Agradecimento Pós-Evento Ajustes 03/09",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-09-03",presentDate:"",status:"concluído",size:"M",won:false},
  {id:228,title:"Ram Alterações + Rótulo 03/09",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2025-09-03",presentDate:"",status:"concluído",size:"M",won:false},
  {id:229,title:"Dominguinho Estática 04/09",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-09-04",presentDate:"",status:"concluído",size:"M",won:false},
  {id:230,title:"Guaraná Propositivo Carrinho, Ceno e Camiseta 05/09",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-09-05",presentDate:"",status:"concluído",size:"M",won:false},
  {id:231,title:"Boticário Trade Mission Ceno e Mockups 05/09",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-09-05",presentDate:"",status:"concluído",size:"M",won:false},
  {id:232,title:"Boticário Trade Mission Apresentação e Mockups 05/09",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-09-05",presentDate:"",status:"concluído",size:"M",won:false},
  {id:233,title:"Conacarne 05/09",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-09-05",presentDate:"",status:"concluído",size:"M",won:false},
  {id:234,title:"Dominguinho Reels 05/09 - 08/09",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-09-05",presentDate:"",status:"concluído",size:"M",won:false},
  {id:235,title:"Arcelor ENATS 08/09",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2025-09-08",presentDate:"",status:"concluído",size:"M",won:false},
  {id:236,title:"Boticário Trade Mission Ajustes 08/09",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-09-08",presentDate:"",status:"concluído",size:"M",won:false},
  {id:237,title:"Arcelor Semana Valores 09/09",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-09-09",presentDate:"",status:"concluído",size:"M",won:false},
  {id:238,title:"Syngenta Seeds Premiação de Vendas / Nexus 09/09",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-09-09",presentDate:"",status:"concluído",size:"M",won:false},
  {id:239,title:"Grupo Boticário - Pontapé Curitiba 10/09",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-09-10",presentDate:"",status:"concluído",size:"M",won:false},
  {id:240,title:"Bradesco Apresentação + Mockups 10/09",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-09-10",presentDate:"",status:"concluído",size:"M",won:false},
  {id:241,title:"Arcelor Globo Premiação Led Patrocínios 10/09",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-09-10",presentDate:"",status:"concluído",size:"M",won:false},
  {id:242,title:"Omelete Cartaz 11/09",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2025-09-11",presentDate:"",status:"concluído",size:"M",won:false},
  {id:243,title:"Hotmart Cardápios Wendel Day + Micha 11/09",category:"NSCO",description:"",responsible:["Gabs"],dueDate:"2025-09-11",presentDate:"",status:"concluído",size:"M",won:false},
  {id:244,title:"Syngenta Seeds Premiação de Vendas / Nexus 11/09",category:"NSCO",description:"",responsible:["Pedro Melo","Vitão"],dueDate:"2025-09-11",presentDate:"",status:"concluído",size:"M",won:false},
  {id:245,title:"Syngenta Golden Harvest 11/09",category:"NSCO",description:"",responsible:["Marcelo","Marcela"],dueDate:"2025-09-11",presentDate:"",status:"concluído",size:"M",won:false},
  {id:246,title:"Capa Linkedin 12/09",category:"NSCO",description:"",responsible:["Gabs"],dueDate:"2025-09-12",presentDate:"",status:"concluído",size:"M",won:false},
  {id:247,title:"Boas-Vindas Sofia 12/09",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-09-12",presentDate:"",status:"concluído",size:"M",won:false},
  {id:248,title:"Criação de peças base Chalezinho Canva 12/09",category:"NSCO",description:"",responsible:["Gabs"],dueDate:"2025-09-12",presentDate:"",status:"concluído",size:"M",won:false},
  {id:249,title:"Guaraná Impresso 10x20cm 15/09",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-09-15",presentDate:"",status:"concluído",size:"M",won:false},
  {id:250,title:"Bradesco Ajustes 15/09",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-09-15",presentDate:"",status:"concluído",size:"M",won:false},
  {id:251,title:"Butantan 125 Anos Ceno 15/09",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2025-09-15",presentDate:"",status:"concluído",size:"M",won:false},
  {id:252,title:"Conacarne Ajustes 15/09",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-09-15",presentDate:"",status:"concluído",size:"M",won:false},
  {id:253,title:"Dominguinho Estática 15/09",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-09-15",presentDate:"",status:"concluído",size:"M",won:false},
  {id:254,title:"Boticário Pontapé Certificado 15/09",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-09-15",presentDate:"",status:"concluído",size:"M",won:false},
  {id:255,title:"Brahma Peças 16/09",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-09-16",presentDate:"",status:"concluído",size:"M",won:false},
  {id:256,title:"Arcelor Globo Premiação Led 16/09",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-09-16",presentDate:"",status:"concluído",size:"M",won:false},
  {id:257,title:"Dominguinho peça de reaquecimento Estáticas + Reels 17/09",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-09-17",presentDate:"",status:"concluído",size:"M",won:false},
  {id:258,title:"Dominguinho Book Captação 17/09",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-09-17",presentDate:"",status:"concluído",size:"M",won:false},
  {id:259,title:"Syngenta Apoio Ceno 17/09",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-09-17",presentDate:"",status:"concluído",size:"M",won:false},
  {id:260,title:"Conacarne Ajustes 17/09",category:"NSCO",description:"",responsible:["Marcelo","Pedro Melo"],dueDate:"2025-09-17",presentDate:"",status:"concluído",size:"M",won:false},
  {id:261,title:"Bradesco Experience Ajustes 18/09",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-09-18",presentDate:"",status:"concluído",size:"M",won:false},
  {id:262,title:"Butantan 125 Anos Apresentação 18/09",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2025-09-18",presentDate:"",status:"concluído",size:"M",won:false},
  {id:263,title:"JSL IDV 19/09",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-09-19",presentDate:"",status:"concluído",size:"M",won:false},
  {id:264,title:"Localiza Fenauto Leds 19/09",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-09-19",presentDate:"",status:"concluído",size:"M",won:false},
  {id:265,title:"SABESP Apresentação 19/09",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2025-09-19",presentDate:"",status:"concluído",size:"M",won:false},
  {id:266,title:"Arcelor Cenografia 22/09",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-09-22",presentDate:"",status:"concluído",size:"M",won:false},
  {id:267,title:"Ram Ajustes apresentação 23/09",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2025-09-23",presentDate:"",status:"concluído",size:"M",won:false},
  {id:268,title:"Localiza Fenauto 23/09",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-09-23",presentDate:"",status:"concluído",size:"M",won:false},
  {id:269,title:"Strategicos Ceno 24/09",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-09-24",presentDate:"",status:"concluído",size:"M",won:false},
  {id:270,title:"Localiza GF SP 24/09",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-09-24",presentDate:"",status:"concluído",size:"M",won:false},
  {id:271,title:"Dominguinho Ajuste Proposta 24/09",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-09-24",presentDate:"",status:"concluído",size:"M",won:false},
  {id:272,title:"Golden Harvest Logo 24/09",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-09-24",presentDate:"",status:"concluído",size:"M",won:false},
  {id:273,title:"Strategicos Ajustes 25/09",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-09-25",presentDate:"",status:"concluído",size:"M",won:false},
  {id:274,title:"Natal Liberdade 25/09",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-09-25",presentDate:"",status:"concluído",size:"M",won:false},
  {id:275,title:"Hotmart Hot Heroes 25/09",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-09-25",presentDate:"",status:"concluído",size:"M",won:false},
  {id:276,title:"Globo Novela 3 Graças 25/09",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2025-09-25",presentDate:"",status:"concluído",size:"M",won:false},
  {id:277,title:"Projeto Led Ajustes 25/09",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-09-25",presentDate:"",status:"concluído",size:"M",won:false},
  {id:278,title:"Bradesco Experience Lançamento + Ajustes 26/09",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-09-26",presentDate:"",status:"concluído",size:"M",won:false},
  {id:279,title:"Minas Máquinas 26/09 KV",category:"NSCO",description:"",responsible:["Gabs"],dueDate:"2025-09-26",presentDate:"",status:"concluído",size:"M",won:false},
  {id:280,title:"Syngenta Seeds Feiras Agrícolas 26/09",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-09-26",presentDate:"",status:"concluído",size:"M",won:false},
  {id:281,title:"Purefy Cardápio, Convite, Agradecimento e totem 29/09",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-09-29",presentDate:"",status:"concluído",size:"M",won:false},
  {id:282,title:"Omelete Tik Tok saída materiais 29/09",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-09-29",presentDate:"",status:"concluído",size:"M",won:false},
  {id:283,title:"Supermercados BH Ceno 29/09",category:"NSCO",description:"",responsible:["Marcelo","Vitão"],dueDate:"2025-09-29",presentDate:"",status:"concluído",size:"M",won:false},
  {id:284,title:"Boticário Lidere-se Convite RJ 29/09",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-09-29",presentDate:"",status:"concluído",size:"M",won:false},
  {id:285,title:"Globo 3 Graças Ajustes 30/09",category:"NSCO",description:"",responsible:["Marcela","Marcelo"],dueDate:"2025-09-30",presentDate:"",status:"concluído",size:"M",won:false},
  {id:286,title:"Arcelor Queima Diária 30/09",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-09-30",presentDate:"",status:"concluído",size:"M",won:false},
  {id:287,title:"O Boticário Carrinho 30/09",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-09-30",presentDate:"",status:"concluído",size:"M",won:false},
  {id:288,title:"Prêmio LED Ajustes 30/09",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-09-30",presentDate:"",status:"concluído",size:"M",won:false},
  {id:289,title:"Purefy Ajustes 30/09",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-09-30",presentDate:"",status:"concluído",size:"M",won:false},
  {id:290,title:"Strategicos Ajustes Banner 30/09",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-09-30",presentDate:"",status:"concluído",size:"M",won:false},
  {id:291,title:"Bel Next 01/10",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-10-01",presentDate:"",status:"concluído",size:"M",won:false},
  {id:292,title:"Purefy Ajustes Totem 01/10",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-10-01",presentDate:"",status:"concluído",size:"M",won:false},
  {id:293,title:"Queima Diária Ajustes 01/10",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-10-01",presentDate:"",status:"concluído",size:"M",won:false},
  {id:294,title:"Hotmart Mission 01/10",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-10-01",presentDate:"",status:"concluído",size:"M",won:false},
  {id:295,title:"Prêmio Led Ajustes 01/10",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-10-01",presentDate:"",status:"concluído",size:"M",won:false},
  {id:296,title:"JSL 70 Anos Vinheta 02/09",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-09-02",presentDate:"",status:"concluído",size:"M",won:false},
  {id:297,title:"JSL 70 Anos 02/10",category:"NSCO",description:"",responsible:["Marcela","Gabs"],dueDate:"2025-10-02",presentDate:"",status:"concluído",size:"M",won:false},
  {id:298,title:"Roda IDV Ajustes 02/10",category:"NSCO",description:"",responsible:["Pedro Melo","Vitor Chalezinho"],dueDate:"2025-10-02",presentDate:"",status:"concluído",size:"M",won:false},
  {id:299,title:"Casa Marun Mil Sorrisos 03/10",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2025-10-03",presentDate:"",status:"concluído",size:"M",won:false},
  {id:300,title:"Dominguinho Carrossel 03/10",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-10-03",presentDate:"",status:"concluído",size:"M",won:false},
  {id:301,title:"Supermercados BH Apresentação 06/10",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-10-06",presentDate:"",status:"concluído",size:"M",won:false},
  {id:302,title:"Localiza Meeo Mockups Ajustes 06/10",category:"NSCO",description:"",responsible:["Vitão","Pedro Melo"],dueDate:"2025-10-06",presentDate:"",status:"concluído",size:"M",won:false},
  {id:303,title:"Bel Next Ajustes PPT 07/10",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-10-07",presentDate:"",status:"concluído",size:"M",won:false},
  {id:304,title:"Minas Máquinas Apresentação 07/10",category:"NSCO",description:"",responsible:["Gabs"],dueDate:"2025-10-07",presentDate:"",status:"concluído",size:"M",won:false},
  {id:305,title:"Globo Três Graças Ajuste 07/10",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2025-10-07",presentDate:"",status:"concluído",size:"M",won:false},
  {id:306,title:"Syngenta Feiras Médias 07/10",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-10-07",presentDate:"",status:"concluído",size:"M",won:false},
  {id:307,title:"Arcelor Economia Circular Ajuste Moleskine 07/10",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-10-07",presentDate:"",status:"concluído",size:"M",won:false},
  {id:308,title:"Bradesco Principal 09/10",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-10-09",presentDate:"",status:"concluído",size:"M",won:false},
  {id:309,title:"Bradeco Ajustes 09/10",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-10-09",presentDate:"",status:"concluído",size:"M",won:false},
  {id:310,title:"Halloween RedBull 10/10",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-10-10",presentDate:"",status:"concluído",size:"M",won:false},
  {id:311,title:"Dominguinho Carrossel de Músicas 10/10",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-10-10",presentDate:"",status:"concluído",size:"M",won:false},
  {id:312,title:"Dominguinho Carrossel Frases 10/10",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-10-10",presentDate:"",status:"concluído",size:"M",won:false},
  {id:313,title:"Golden Harvest Papelaria 13/10",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-10-13",presentDate:"",status:"concluído",size:"M",won:false},
  {id:314,title:"Projeto Kiko + Marcellinho 13/10",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-10-13",presentDate:"",status:"concluído",size:"M",won:false},
  {id:315,title:"Halloween CENO 13/10",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-10-13",presentDate:"",status:"concluído",size:"M",won:false},
  {id:316,title:"Localiza Ação de Venda Zarp 13/10",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-10-13",presentDate:"",status:"concluído",size:"M",won:false},
  {id:317,title:"Prêmio Led Ajustes 1 13/10",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-10-13",presentDate:"",status:"concluído",size:"M",won:false},
  {id:318,title:"Localiza COP30 14/10",category:"NSCO",description:"",responsible:["Vitão","Gabs"],dueDate:"2025-10-14",presentDate:"",status:"concluído",size:"M",won:false},
  {id:319,title:"Diamond Mall Halloween 14/10",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-10-14",presentDate:"",status:"concluído",size:"M",won:false},
  {id:320,title:"Boticário Her Code Ajustes 14/10",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-10-14",presentDate:"",status:"concluído",size:"M",won:false},
  {id:321,title:"Projeto Kiko + Marcellinho Ajustes 14/10",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-10-14",presentDate:"",status:"concluído",size:"M",won:false},
  {id:322,title:"Queima Diária Ajustes 15/10",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-10-15",presentDate:"",status:"concluído",size:"M",won:false},
  {id:323,title:"Prêmio Led Ajustes 2 15/10",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-10-15",presentDate:"",status:"concluído",size:"M",won:false},
  {id:324,title:"Dominguinho Mídia OOH 15/10",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-10-15",presentDate:"",status:"concluído",size:"M",won:false},
  {id:325,title:"Dominguinho Vídeo Show 15/10",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-10-15",presentDate:"",status:"concluído",size:"M",won:false},
  {id:326,title:"Chalezinho Itaim SP Adesivo Neve Fachada 16/10",category:"NSCO",description:"",responsible:["Gabs"],dueDate:"2025-10-16",presentDate:"",status:"concluído",size:"M",won:false},
  {id:327,title:"Diamond Natal 16/10",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-10-16",presentDate:"",status:"concluído",size:"M",won:false},
  {id:328,title:"Concentrix Apresentação 16/10",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2025-10-16",presentDate:"",status:"concluído",size:"M",won:false},
  {id:329,title:"Hotmart Experience Cardápio 17/10",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-10-17",presentDate:"",status:"concluído",size:"M",won:false},
  {id:330,title:"Ajuste Prêmio Led 1 20/10",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-10-20",presentDate:"",status:"concluído",size:"M",won:false},
  {id:331,title:"Ajuste Queima Diária 20/10",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-10-20",presentDate:"",status:"concluído",size:"M",won:false},
  {id:332,title:"Bradesco Principal Cartão 20/10",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-10-20",presentDate:"",status:"concluído",size:"M",won:false},
  {id:333,title:"Estrela Bet 21/10",category:"NSCO",description:"",responsible:["Marcela","Gabs"],dueDate:"2025-10-21",presentDate:"",status:"concluído",size:"M",won:false},
  {id:334,title:"Era um Vez Chalezinho Demanda Kiko 22/10",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-10-22",presentDate:"",status:"concluído",size:"M",won:false},
  {id:335,title:"Globo Três Graças Ajustes 22/10",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2025-10-22",presentDate:"",status:"concluído",size:"M",won:false},
  {id:336,title:"Beats Propositivo PPT e Mockups 22/10",category:"NSCO",description:"",responsible:["Gabs"],dueDate:"2025-10-22",presentDate:"",status:"concluído",size:"M",won:false},
  {id:337,title:"CIDADE nova IDV Book Captação 24/10",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-10-24",presentDate:"",status:"concluído",size:"M",won:false},
  {id:338,title:"Bradesco Principal Lona 24/10",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-10-24",presentDate:"",status:"concluído",size:"M",won:false},
  {id:339,title:"Ajuste Prêmio Led 2 24/10",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-10-24",presentDate:"",status:"concluído",size:"M",won:false},
  {id:340,title:"Chalezinho SP Kit Convite 24/10",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-10-24",presentDate:"",status:"concluído",size:"M",won:false},
  {id:341,title:"Globo Lambes Plim Plim 24/10",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2025-10-24",presentDate:"",status:"concluído",size:"M",won:false},
  {id:342,title:"Concentrix Ajustes 24/10",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2025-10-24",presentDate:"",status:"concluído",size:"M",won:false},
  {id:343,title:"Halloween Ceno 24/10",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-10-24",presentDate:"",status:"concluído",size:"M",won:false},
  {id:344,title:"O Boticário Convite 27/10",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-10-27",presentDate:"",status:"concluído",size:"M",won:false},
  {id:345,title:"Hotmart Cardápios 27/10",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-10-27",presentDate:"",status:"concluído",size:"M",won:false},
  {id:346,title:"Ajustes Omelete 27/10",category:"NSCO",description:"",responsible:["Gabs"],dueDate:"2025-10-27",presentDate:"",status:"concluído",size:"M",won:false},
  {id:347,title:"Ajustes Premio Led 3 27/10",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-10-27",presentDate:"",status:"concluído",size:"M",won:false},
  {id:348,title:"Ajustes Estrela Bet 27/10",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2025-10-27",presentDate:"",status:"concluído",size:"M",won:false},
  {id:349,title:"Halloween Ceno 27/10",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-10-27",presentDate:"",status:"concluído",size:"M",won:false},
  {id:350,title:"Halloween Ceno - Bares Beats + Tanqueray 28/10",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-10-28",presentDate:"",status:"concluído",size:"M",won:false},
  {id:351,title:"Ajustes Premio Led 4 28/10",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-10-28",presentDate:"",status:"concluído",size:"M",won:false},
  {id:352,title:"Localiza Elevo 28/10",category:"NSCO",description:"",responsible:["Gabs"],dueDate:"2025-10-28",presentDate:"",status:"concluído",size:"M",won:false},
  {id:353,title:"Techbiz 29/10",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-10-29",presentDate:"",status:"concluído",size:"M",won:false},
  {id:354,title:"Hotmart Totem 29/10",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-10-29",presentDate:"",status:"concluído",size:"M",won:false},
  {id:355,title:"Complex Avatares 29/10",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-10-29",presentDate:"",status:"concluído",size:"M",won:false},
  {id:356,title:"Ajustes JSL 30/10",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2025-10-30",presentDate:"",status:"concluído",size:"M",won:false},
  {id:357,title:"Ajustes Book Cidade 31/10",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-10-31",presentDate:"",status:"concluído",size:"M",won:false},
  {id:358,title:"Syngenta Virtuais 31/10",category:"NSCO",description:"",responsible:["Gabs"],dueDate:"2025-10-31",presentDate:"",status:"concluído",size:"M",won:false},
  {id:359,title:"Natal Vetores 31/10",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2025-10-31",presentDate:"",status:"concluído",size:"M",won:false},
  {id:360,title:"Halloween Vídeos Internos + Videos de Abertura 31/10",category:"NSCO",description:"",responsible:["Pedro Melo","Marcelo","Vitão"],dueDate:"2025-10-31",presentDate:"",status:"concluído",size:"M",won:false},
  {id:361,title:"Bernoulli Ceno 03/11",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-11-03",presentDate:"",status:"concluído",size:"M",won:false},
  {id:362,title:"Faciso 03/11",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-11-03",presentDate:"",status:"concluído",size:"M",won:false},
  {id:363,title:"Lô Borges 03/11",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2025-11-03",presentDate:"",status:"concluído",size:"M",won:false},
  {id:364,title:"RD Station Prêmio Limitless 04/11",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-11-04",presentDate:"",status:"concluído",size:"M",won:false},
  {id:365,title:"Omelete Copo Café Saída 04/11",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-11-04",presentDate:"",status:"concluído",size:"M",won:false},
  {id:366,title:"Dominguinho Post Estático 04/11",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2025-11-04",presentDate:"",status:"concluído",size:"M",won:false},
  {id:367,title:"Localiza Concorrência 05/11",category:"NSCO",description:"",responsible:["Gabs"],dueDate:"2025-11-05",presentDate:"",status:"concluído",size:"M",won:false},
  {id:368,title:"Diamond Mall Natal 07/11",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-11-07",presentDate:"",status:"concluído",size:"M",won:false},
  {id:369,title:"Syngenta Ajustes 07/11",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-11-07",presentDate:"",status:"concluído",size:"M",won:false},
  {id:370,title:"NaSala Logos Aplicações 07/11",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-11-07",presentDate:"",status:"concluído",size:"M",won:false},
  {id:371,title:"Complex IDV V2 10/11",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-11-10",presentDate:"",status:"concluído",size:"M",won:false},
  {id:372,title:"Complex Virtuais IG 11/11",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-11-11",presentDate:"",status:"concluído",size:"M",won:false},
  {id:373,title:"Roda Camiseta Promoção 11/11",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-11-11",presentDate:"",status:"concluído",size:"M",won:false},
  {id:374,title:"O Boticário Carta Palavra 11/11",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-11-11",presentDate:"",status:"concluído",size:"M",won:false},
  {id:375,title:"O Boticário Peças da semana + Save The Date 11/11",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-11-11",presentDate:"",status:"concluído",size:"M",won:false},
  {id:376,title:"O Boticário Backdrop / Lona 11/11",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-11-11",presentDate:"",status:"concluído",size:"M",won:false},
  {id:377,title:"O Boticário Natal 11/11",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2025-11-11",presentDate:"",status:"concluído",size:"M",won:false},
  {id:378,title:"Localiza Ajustes 11/11",category:"NSCO",description:"",responsible:["Gabs"],dueDate:"2025-11-11",presentDate:"",status:"concluído",size:"M",won:false},
  {id:379,title:"Arcelor Excelência em Logística 12/11",category:"NSCO",description:"",responsible:["Marcela","Gabs"],dueDate:"2025-11-12",presentDate:"",status:"concluído",size:"M",won:false},
  {id:380,title:"O Boticário Ajuste Envelope PMR 12/11",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-11-12",presentDate:"",status:"concluído",size:"M",won:false},
  {id:381,title:"Stellar Nova Proposta de Copo 12/11",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-11-12",presentDate:"",status:"concluído",size:"M",won:false},
  {id:382,title:"Ram Ajustes 12/11",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2025-11-12",presentDate:"",status:"concluído",size:"M",won:false},
  {id:383,title:"Natal Mineiridade Praça da Liberdade 13/11",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-11-13",presentDate:"",status:"concluído",size:"M",won:false},
  {id:384,title:"O Boticário Árvore 13/11",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2025-11-13",presentDate:"",status:"concluído",size:"M",won:false},
  {id:385,title:"O Boticário Natal Peças e Ajustes 13/11",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-11-13",presentDate:"",status:"concluído",size:"M",won:false},
  {id:386,title:"Red Bull Confra IDV 13/11",category:"NSCO",description:"",responsible:["—"],dueDate:"2025-11-13",presentDate:"",status:"concluído",size:"M",won:false},
  {id:387,title:"Red Bull Confra PPT 14/11",category:"NSCO",description:"",responsible:["—"],dueDate:"2025-11-14",presentDate:"",status:"concluído",size:"M",won:false},
  {id:388,title:"Natal Mineiridade Praça da Liberdade Peças Novas 14/11",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-11-14",presentDate:"",status:"concluído",size:"M",won:false},
  {id:389,title:"CIDADE Sistema IDV Ceno 14/11",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-11-14",presentDate:"",status:"concluído",size:"M",won:false},
  {id:390,title:"Isaac - Apresentação 17/11",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-11-17",presentDate:"",status:"concluído",size:"M",won:false},
  {id:391,title:"ACELERA.AI Ficha de Palco A5 18/11",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-11-18",presentDate:"",status:"concluído",size:"M",won:false},
  {id:392,title:"O Boticário TOTEM Vitória 18/11",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-11-18",presentDate:"",status:"concluído",size:"M",won:false},
  {id:393,title:"Belgo Impacta 19/11",category:"NSCO",description:"",responsible:["Marcela","Marcelo"],dueDate:"2025-11-19",presentDate:"",status:"concluído",size:"M",won:false},
  {id:394,title:"Natal Mineiridade Post 20/11",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-11-20",presentDate:"",status:"concluído",size:"M",won:false},
  {id:395,title:"O Boticário DET Vitória 21/11",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-11-21",presentDate:"",status:"concluído",size:"M",won:false},
  {id:396,title:"O Boticário DET Gramado 21/11",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2025-11-21",presentDate:"",status:"concluído",size:"M",won:false},
  {id:397,title:"O Boticário DET BH 21/11",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-11-21",presentDate:"",status:"concluído",size:"M",won:false},
  {id:398,title:"O Boticário Outras Cidades 22/11",category:"NSCO",description:"",responsible:["Pedro Melo","Marcela","Marcelo"],dueDate:"2025-11-22",presentDate:"",status:"concluído",size:"M",won:false},
  {id:399,title:"Hotmart Troopers Party / Kickoff V1 24/11",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-11-24",presentDate:"",status:"concluído",size:"M",won:false},
  {id:400,title:"Arcelor Aceler.Ai Ativação 24/11",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-11-24",presentDate:"",status:"concluído",size:"M",won:false},
  {id:401,title:"Syngenta Ajustes 24/11",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-11-24",presentDate:"",status:"concluído",size:"M",won:false},
  {id:402,title:"Estrela Bet Ativações 24/11",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-11-24",presentDate:"",status:"concluído",size:"M",won:false},
  {id:403,title:"O Boticário DET Volta Redonda 25/11",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-11-25",presentDate:"",status:"concluído",size:"M",won:false},
  {id:404,title:"O Boticário Jurídico para Impressão 25/11",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2025-11-25",presentDate:"",status:"concluído",size:"M",won:false},
  {id:405,title:"Arcelor Cubo 25/11",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2025-11-25",presentDate:"",status:"concluído",size:"M",won:false},
  {id:406,title:"BLIP PPT 30 páginas 25/11",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2025-11-25",presentDate:"",status:"concluído",size:"M",won:false},
  {id:407,title:"BLIP PPT MIL páginas 25/11",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-11-25",presentDate:"",status:"concluído",size:"M",won:false},
  {id:408,title:"Hotmart Troopers Party / Kickoff V2 25/11",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-11-25",presentDate:"",status:"concluído",size:"M",won:false},
  {id:409,title:"Natal Mineiridade 2 vídeos 27/11",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-11-27",presentDate:"",status:"concluído",size:"M",won:false},
  {id:410,title:"Hotmart Troopers Party / Kickoff V3 27/11",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-11-27",presentDate:"",status:"concluído",size:"M",won:false},
  {id:411,title:"Complex Containers V1 27/11",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-11-27",presentDate:"",status:"concluído",size:"M",won:false},
  {id:412,title:"Complex Containers V2 28/11",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-11-28",presentDate:"",status:"concluído",size:"M",won:false},
  {id:413,title:"Hotmart Troopers Party / Kickoff V4 28/11",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-11-28",presentDate:"",status:"concluído",size:"M",won:false},
  {id:414,title:"Top Perfomance Syngenta 28/11",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-11-28",presentDate:"",status:"concluído",size:"M",won:false},
  {id:415,title:"O Boticário Natal Gramado + Diversos 28/11",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2025-11-28",presentDate:"",status:"concluído",size:"M",won:false},
  {id:416,title:"Estrela Bet Peças Avulsas 28/12",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2025-12-28",presentDate:"",status:"concluído",size:"M",won:false},
  {id:417,title:"O Boticário Natal GV 30/11",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-11-30",presentDate:"",status:"concluído",size:"M",won:false},
  {id:418,title:"O Boticário Natal GV 01/12 Reajustes",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-12-01",presentDate:"",status:"concluído",size:"M",won:false},
  {id:419,title:"O Boticário Jantar Franqueados 01/12",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2025-12-01",presentDate:"",status:"concluído",size:"M",won:false},
  {id:420,title:"Top Perfomance Syngenta 01/12",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-12-01",presentDate:"",status:"concluído",size:"M",won:false},
  {id:421,title:"Hotmart Troopers Party / Kickoff V5 02/12",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-12-02",presentDate:"",status:"concluído",size:"M",won:false},
  {id:422,title:"IDV naSala de Verão 03/12",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-12-03",presentDate:"",status:"concluído",size:"M",won:false},
  {id:423,title:"Save the Date naSala de Verão 03/12",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-12-03",presentDate:"",status:"concluído",size:"M",won:false},
  {id:424,title:"Minas Máquinas Entrega V1 03/12",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-12-03",presentDate:"",status:"concluído",size:"M",won:false},
  {id:425,title:"Captação Bud Copa 03/12",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-12-03",presentDate:"",status:"concluído",size:"M",won:false},
  {id:426,title:"Dominguinho Peças 03/12",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-12-03",presentDate:"",status:"concluído",size:"M",won:false},
  {id:427,title:"Estrela Bet Leds 04/12",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-12-04",presentDate:"",status:"concluído",size:"M",won:false},
  {id:428,title:"Hotmart Troopers Peças Finais 04/12",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-12-04",presentDate:"",status:"concluído",size:"M",won:false},
  {id:429,title:"Verão save the date e base 04/12",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-12-04",presentDate:"",status:"concluído",size:"M",won:false},
  {id:430,title:"Blip Ajustes 04/12",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-12-04",presentDate:"",status:"concluído",size:"M",won:false},
  {id:431,title:"Dominguinho Peças 04/12",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-12-04",presentDate:"",status:"concluído",size:"M",won:false},
  {id:432,title:"O Boticário Jantar Franqueados Peças 04/12",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2025-12-04",presentDate:"",status:"concluído",size:"M",won:false},
  {id:433,title:"O Boticário Totem Sinalização 04/12",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2025-12-04",presentDate:"",status:"concluído",size:"M",won:false},
  {id:434,title:"naSala de Verão Enxoval impresso + Sympla + Programação 05/12",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-12-05",presentDate:"",status:"concluído",size:"M",won:false},
  {id:435,title:"DELTA Sementes 05/12",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2025-12-05",presentDate:"",status:"concluído",size:"M",won:false},
  {id:436,title:"Minas Máquinas Entrega V2 05/12",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-12-05",presentDate:"",status:"concluído",size:"M",won:false},
  {id:437,title:"naSala de Verão motion 07/12",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-12-07",presentDate:"",status:"concluído",size:"M",won:false},
  {id:438,title:"EXA Carnaval 08/12",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-12-08",presentDate:"",status:"concluído",size:"M",won:false},
  {id:439,title:"CIDADE Verão IDV 12/12",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-12-12",presentDate:"",status:"concluído",size:"M",won:false},
  {id:440,title:"CIDADE Verão Peças Modelo 12/12",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-12-12",presentDate:"",status:"concluído",size:"M",won:false},
  {id:441,title:"Concentrix Brindes Arte e PPT 15/12",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-12-15",presentDate:"",status:"concluído",size:"M",won:false},
  {id:442,title:"NaSala de Verão Lineup 15/12",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-12-15",presentDate:"",status:"concluído",size:"M",won:false},
  {id:443,title:"Mensagem + Kit naSala 16/12",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-12-16",presentDate:"",status:"concluído",size:"M",won:false},
  {id:444,title:"Caveo KV PPT 17/12",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2025-12-17",presentDate:"",status:"concluído",size:"M",won:false},
  {id:445,title:"Lidero Syngenta 17/12",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-12-17",presentDate:"",status:"concluído",size:"M",won:false},
  {id:446,title:"Propositivo AMBEV 18/12",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-12-18",presentDate:"",status:"concluído",size:"M",won:false},
  {id:447,title:"Caveo PPT 18/12",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2025-12-18",presentDate:"",status:"concluído",size:"M",won:false},
  {id:448,title:"Arcelor Barra Mansa 19/12 PPT institucional",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-12-19",presentDate:"",status:"concluído",size:"M",won:false},
  {id:449,title:"Exa Ajustes 22/12",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-12-22",presentDate:"",status:"concluído",size:"M",won:false},
  {id:450,title:"Hotmart Nova Sede 29/12",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-12-29",presentDate:"",status:"concluído",size:"M",won:false},
  {id:451,title:"Hotmart 8D",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"",presentDate:"",status:"concluído",size:"M",won:false},
  {id:452,title:"Concentrix Mockups Aplicados 08/01",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2026-01-08",presentDate:"",status:"concluído",size:"M",won:false},
  {id:453,title:"BTG 08/01",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2026-01-08",presentDate:"",status:"concluído",size:"M",won:false},
  {id:454,title:"Escritório Complex 08/01",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-01-08",presentDate:"",status:"concluído",size:"M",won:false},
  {id:455,title:"Localiza Carnaval 09/01",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2026-01-09",presentDate:"",status:"concluído",size:"M",won:false},
  {id:456,title:"Fiat 50 Anos 12/01",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2026-01-12",presentDate:"",status:"concluído",size:"M",won:false},
  {id:457,title:"CNBC Ajustes Brindes 13/01",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-01-13",presentDate:"",status:"concluído",size:"M",won:false},
  {id:458,title:"Park Shopping Páscoa e Copa KV 14/01",category:"NSCO",description:"",responsible:["Vitão","Marcelo"],dueDate:"2026-01-14",presentDate:"",status:"concluído",size:"M",won:false},
  {id:459,title:"Cartão e Agenda Complex 14/01",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-01-14",presentDate:"",status:"concluído",size:"M",won:false},
  {id:460,title:"CEMIG + Carnaval QCSL 15/01",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2026-01-15",presentDate:"",status:"concluído",size:"M",won:false},
  {id:461,title:"Caveo Summit com IDV 15/01",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2026-01-15",presentDate:"",status:"concluído",size:"M",won:false},
  {id:462,title:"Fiat 50 Anos 16/01 Ajustes",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2026-01-16",presentDate:"",status:"concluído",size:"M",won:false},
  {id:463,title:"Bradesco 16/01",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2026-01-16",presentDate:"",status:"concluído",size:"M",won:false},
  {id:464,title:"Be naSalest Logo 16/01",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-01-16",presentDate:"",status:"concluído",size:"M",won:false},
  {id:465,title:"McCain + Carnaval MBQSP 19/01",category:"NSCO",description:"",responsible:["Thiago"],dueDate:"2026-01-19",presentDate:"",status:"concluído",size:"M",won:false},
  {id:466,title:"Syngenta 19/01",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2026-01-19",presentDate:"",status:"concluído",size:"M",won:false},
  {id:467,title:"Bradesco Ajustes 19/01",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2026-01-19",presentDate:"",status:"concluído",size:"M",won:false},
  {id:468,title:"Komatsu 20/01",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-01-20",presentDate:"",status:"concluído",size:"M",won:false},
  {id:469,title:"Localiza Carnaval 20/01",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2026-01-20",presentDate:"",status:"concluído",size:"M",won:false},
  {id:470,title:"Boticário Carnaval 20/01",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2026-01-20",presentDate:"",status:"concluído",size:"M",won:false},
  {id:471,title:"BE.NASALEST Logo 21/01",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-01-21",presentDate:"",status:"concluído",size:"M",won:false},
  {id:472,title:"nSco. Vagas 21/01",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-01-21",presentDate:"",status:"concluído",size:"M",won:false},
  {id:473,title:"nSco. Institucional Bday Cards 21/01",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-01-21",presentDate:"",status:"concluído",size:"M",won:false},
  {id:474,title:"naSala Vagas 22/01",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-01-22",presentDate:"",status:"concluído",size:"M",won:false},
  {id:475,title:"EXA Artes 22/01",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2026-01-22",presentDate:"",status:"concluído",size:"M",won:false},
  {id:476,title:"CEMIG template PPT Institucional 22/01",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2026-01-22",presentDate:"",status:"concluído",size:"M",won:false},
  {id:477,title:"Arcelor Exc. Logística 23/01",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2026-01-23",presentDate:"",status:"concluído",size:"M",won:false},
  {id:478,title:"Caveo Summit 27/01",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2026-01-27",presentDate:"",status:"concluído",size:"M",won:false},
  {id:479,title:"Fiat Cidade + 50 Anos 27/01",category:"NSCO",description:"",responsible:["—"],dueDate:"2026-01-27",presentDate:"",status:"concluído",size:"M",won:false},
  {id:480,title:"nSco. Institucional Bday Cards Opção V2 27/01",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-01-27",presentDate:"",status:"concluído",size:"M",won:false},
  {id:481,title:"Swile MASP Planeta Firma 28/01",category:"NSCO",description:"",responsible:["Marcela","Luiza"],dueDate:"2026-01-28",presentDate:"",status:"concluído",size:"M",won:false},
  {id:482,title:"McCain Peças Produção 30/01",category:"NSCO",description:"",responsible:["Thiago"],dueDate:"2026-01-30",presentDate:"",status:"concluído",size:"M",won:false},
  {id:483,title:"Boticário + Carnaval QCSL Ceno 30/01",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-01-30",presentDate:"",status:"concluído",size:"M",won:false},
  {id:484,title:"CEMIG + Carnaval QCSL Bandeirão 02/02",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-02-02",presentDate:"",status:"concluído",size:"M",won:false},
  {id:485,title:"Boas-Vindas Nicole 02/02",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-02-02",presentDate:"",status:"concluído",size:"M",won:false},
  {id:486,title:"HOTMART 7D Cardápio e Ficha de Palco 02/02",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-02-02",presentDate:"",status:"concluído",size:"M",won:false},
  {id:487,title:"Boticário + Carnaval QCSL Ceno Ajustes 02/02",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-02-02",presentDate:"",status:"concluído",size:"M",won:false},
  {id:488,title:"Boticário + Carnaval QCSL Peças 03/02",category:"NSCO",description:"",responsible:["Pedro Melo","Luiza"],dueDate:"2026-02-03",presentDate:"",status:"concluído",size:"M",won:false},
  {id:489,title:"Parque Vila Lobos Páscoa 03/02",category:"NSCO",description:"",responsible:["Luiza"],dueDate:"2026-02-03",presentDate:"",status:"concluído",size:"M",won:false},
  {id:490,title:"CEMIG + Carnaval QCSL Carrinho Açaí 04/02",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-02-04",presentDate:"",status:"concluído",size:"M",won:false},
  {id:491,title:"Localiza ABAV 04/02",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2026-02-04",presentDate:"",status:"concluído",size:"M",won:false},
  {id:492,title:"Card Bday 04/02",category:"NSCO",description:"",responsible:["Luiza"],dueDate:"2026-02-04",presentDate:"",status:"concluído",size:"M",won:false},
  {id:493,title:"CEMIG + Carnaval QCSL Comunicados & Impressos 05/02",category:"NSCO",description:"",responsible:["Luiza"],dueDate:"2026-02-05",presentDate:"",status:"concluído",size:"M",won:false},
  {id:494,title:"CEMIG + Carnaval QCSL Ativações 05/02",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-02-05",presentDate:"",status:"concluído",size:"M",won:false},
  {id:495,title:"McCain MBQSP Bandeja 05/02",category:"NSCO",description:"",responsible:["Thiago"],dueDate:"2026-02-05",presentDate:"",status:"concluído",size:"M",won:false},
  {id:496,title:"Swile Nova Era PPT + Emailmkt e RSVP 05/02",category:"NSCO",description:"",responsible:["Marcela","Luiza"],dueDate:"2026-02-05",presentDate:"",status:"concluído",size:"M",won:false},
  {id:497,title:"AgroCP 06/02",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2026-02-06",presentDate:"",status:"concluído",size:"M",won:false},
  {id:498,title:"Bett Arcoplus Nave à Vela Mar Alto 06/02",category:"NSCO",description:"",responsible:["Marcelo","Luiza"],dueDate:"2026-02-06",presentDate:"",status:"concluído",size:"M",won:false},
  {id:499,title:"Boticário + Carnaval QCSL Ceno Ajustes Trio 06/02",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-02-06",presentDate:"",status:"concluído",size:"M",won:false},
  {id:500,title:"CEMIG + Carnaval QCSL Ceno Trio 06/02",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-02-06",presentDate:"",status:"concluído",size:"M",won:false},
  {id:501,title:"McCain MBQSP Trio Cenografia 06/02",category:"NSCO",description:"",responsible:["Thiago"],dueDate:"2026-02-06",presentDate:"",status:"concluído",size:"M",won:false},
  {id:502,title:"Boticário + Carnaval QCSL Crachás, Bandeja Maquiagem, Tinas 10/02",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-02-10",presentDate:"",status:"concluído",size:"M",won:false},
  {id:503,title:"Boticário + Carnaval QCSL Ceno Ajustes 10/02",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-02-10",presentDate:"",status:"concluído",size:"M",won:false},
  {id:504,title:"Boticário + Carnaval QCSL Virtuais Ajustes 10/02",category:"NSCO",description:"",responsible:["Luiza"],dueDate:"2026-02-10",presentDate:"",status:"concluído",size:"M",won:false},
  {id:505,title:"CEMIG + Carnaval QCSL Tinas, Crachás 10/02",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-02-10",presentDate:"",status:"concluído",size:"M",won:false},
  {id:506,title:"CEMIG + Carnaval QCSL Ceno Ajustes 10/02",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-02-10",presentDate:"",status:"concluído",size:"M",won:false},
  {id:507,title:"Torcida naSala Ambev 10/02",category:"NSCO",description:"",responsible:["Thiago"],dueDate:"2026-02-10",presentDate:"",status:"concluído",size:"M",won:false},
  {id:508,title:"Syngenta Lidero Brindes e Impressos 10/02",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2026-02-10",presentDate:"",status:"concluído",size:"M",won:false},
  {id:509,title:"CNBC Mockups 11/02",category:"NSCO",description:"",responsible:["Thiago"],dueDate:"2026-02-11",presentDate:"",status:"concluído",size:"M",won:false},
  {id:510,title:"Concentrix Mockups 11/02",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2026-02-11",presentDate:"",status:"concluído",size:"M",won:false},
  {id:511,title:"nSco. Assinaturas E-mail 12/02",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-02-12",presentDate:"",status:"concluído",size:"M",won:false},
  {id:512,title:"CEMIG + Carnaval QCSL Leds 12/02",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2026-02-12",presentDate:"",status:"concluído",size:"M",won:false},
  {id:513,title:"Boticário Dia das Mães 12/02",category:"NSCO",description:"",responsible:["Pedro Melo","Marcela","Luiza"],dueDate:"2026-02-12",presentDate:"",status:"concluído",size:"M",won:false},
  {id:514,title:"Bett Arcoplus International School 13/02",category:"NSCO",description:"",responsible:["Luiza"],dueDate:"2026-02-13",presentDate:"",status:"concluído",size:"M",won:false},
  {id:515,title:"Bett Arcoplus Meu Arco Educação 13/02",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2026-02-13",presentDate:"",status:"concluído",size:"M",won:false},
  {id:516,title:"Bett Arcoplus Pleno + Genio 13/02",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2026-02-13",presentDate:"",status:"concluído",size:"M",won:false},
  {id:517,title:"Bett Arcoplus IE-PES 13/02",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2026-02-13",presentDate:"",status:"concluído",size:"M",won:false},
  {id:518,title:"Arcelor Mittal Encontro Produtores + Ponto Focal 13/02",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2026-02-13",presentDate:"",status:"concluído",size:"M",won:false},
  {id:519,title:"Torcida naSala Ambev PPT 13/02",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2026-02-13",presentDate:"",status:"concluído",size:"M",won:false},
  {id:520,title:"IFF Leagal 20/02",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2026-02-20",presentDate:"",status:"concluído",size:"M",won:false},
  {id:521,title:"Cinemark 24/02",category:"NSCO",description:"",responsible:["Luiza"],dueDate:"2026-02-24",presentDate:"",status:"concluído",size:"M",won:false},
  {id:522,title:"CNBC Mockup Brinde 25/02",category:"NSCO",description:"",responsible:["Thiago"],dueDate:"2026-02-25",presentDate:"",status:"concluído",size:"M",won:false},
  {id:523,title:"nSco. Planejamento Invite 27/02",category:"NSCO",description:"",responsible:["Luiza"],dueDate:"2026-02-27",presentDate:"",status:"concluído",size:"M",won:false},
  {id:524,title:"Complex / naSala Camisa Hostess 27/02",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-02-27",presentDate:"",status:"concluído",size:"M",won:false},
  {id:525,title:"Swile Nova Era Ajustes PPT 27/02",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2026-02-27",presentDate:"",status:"concluído",size:"M",won:false},
  {id:526,title:"SWLX Ajustes PPT Primeira Semana de Março",category:"NSCO",description:"",responsible:["Luiza"],dueDate:"",presentDate:"",status:"concluído",size:"M",won:false},
  {id:527,title:"SWLX Digitais Templates e Interno Start 02/03",category:"NSCO",description:"",responsible:["Luiza"],dueDate:"2026-03-02",presentDate:"",status:"concluído",size:"M",won:false},
  {id:528,title:"SWLX Digitais Templates Motion Interno Start 02/03",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2026-03-02",presentDate:"",status:"concluído",size:"M",won:false},
  {id:529,title:"Swile Bradesco 03/03",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2026-03-03",presentDate:"",status:"concluído",size:"M",won:false},
  {id:530,title:"Martminas 25 Anos 04/03",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2026-03-04",presentDate:"",status:"concluído",size:"M",won:false},
  {id:531,title:"Cactus 04/03",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2026-03-04",presentDate:"",status:"concluído",size:"M",won:false},
  {id:532,title:"nSco. Caixa Luminária 05/03",category:"NSCO",description:"",responsible:["Thiago"],dueDate:"2026-03-05",presentDate:"",status:"concluído",size:"M",won:false},
  {id:533,title:"RD Off Site 05/03",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2026-03-05",presentDate:"",status:"concluído",size:"M",won:false},
  {id:534,title:"Localiza WTM LA 05/03",category:"NSCO",description:"",responsible:["Luiza"],dueDate:"2026-03-05",presentDate:"",status:"concluído",size:"M",won:false},
  {id:535,title:"Skeelo Brindes Relacionamento 06/03",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2026-03-06",presentDate:"",status:"concluído",size:"M",won:false},
  {id:536,title:"Xeque Mate APAS 06/03",category:"NSCO",description:"",responsible:["Luiza"],dueDate:"2026-03-06",presentDate:"",status:"concluído",size:"M",won:false},
  {id:537,title:"CEMIG Fim de Ano 09/03",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2026-03-09",presentDate:"",status:"concluído",size:"M",won:false},
  {id:538,title:"CNBC Brindes 10/03",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-03-10",presentDate:"",status:"concluído",size:"M",won:false},
  {id:539,title:"RD Station Ajustes 17/03",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2026-03-17",presentDate:"",status:"concluído",size:"M",won:false},
  {id:540,title:"Arena Brasileira de Estrelas / DSP KV 18/03",category:"NSCO",description:"",responsible:["Pedro Melo","Marcela"],dueDate:"2026-03-18",presentDate:"",status:"concluído",size:"M",won:false},
  {id:541,title:"Fiat 50 anos Funcionários 20/03",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2026-03-20",presentDate:"",status:"concluído",size:"M",won:false},
  {id:542,title:"Arena Brasileira de Estrelas / DSP PPT 20/03",category:"NSCO",description:"",responsible:["Pedro Melo","Marcela"],dueDate:"2026-03-20",presentDate:"",status:"concluído",size:"M",won:false},
  {id:543,title:"Átrio Festival 23/03",category:"NSCO",description:"",responsible:["Luiza"],dueDate:"2026-03-23",presentDate:"",status:"concluído",size:"M",won:false},
  {id:544,title:"Syngenta CoperCitrus 23/03",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2026-03-23",presentDate:"",status:"concluído",size:"M",won:false},
  {id:545,title:"XP Concorrência 24/03",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2026-03-24",presentDate:"",status:"concluído",size:"M",won:false},
  {id:546,title:"Syngenta Synergia 24/03",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2026-03-24",presentDate:"",status:"concluído",size:"M",won:false},
  {id:547,title:"Swile Nova Era Convite Ministros 24/03",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-03-24",presentDate:"",status:"concluído",size:"M",won:false},
  {id:548,title:"Swile Nova Era Convite Convidados Caixa 25/03",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-03-25",presentDate:"",status:"concluído",size:"M",won:false},
  {id:549,title:"Swile Nova Era PPT Mapa de Convidados 25/02",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2026-02-25",presentDate:"",status:"concluído",size:"M",won:false},
  {id:550,title:"Swile Nova Era Cinta, Tag e Sacola Convidados Caixa 26/03",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-03-26",presentDate:"",status:"concluído",size:"M",won:false},
  {id:551,title:"Bradesco + Cidade 26/03",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2026-03-26",presentDate:"",status:"concluído",size:"M",won:false},
  {id:552,title:"Banco Stellantis 26/03",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2026-03-26",presentDate:"",status:"concluído",size:"M",won:false},
  {id:553,title:"XP Viagem 31/03",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-03-31",presentDate:"",status:"concluído",size:"M",won:false},
  {id:554,title:"Sympla Início Ano Fiscal 31/03",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2026-03-31",presentDate:"",status:"concluído",size:"M",won:false},
  {id:555,title:"Bradesco e Diabo Veste Prada 06/04",category:"NSCO",description:"",responsible:["Luiza"],dueDate:"2026-04-06",presentDate:"",status:"concluído",size:"M",won:false},
  {id:556,title:"MRV Encontro de Fornecedores 06/04",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2026-04-06",presentDate:"",status:"concluído",size:"M",won:false},
  {id:557,title:"Strategicos Group Backdrops 06/04",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-04-06",presentDate:"",status:"concluído",size:"M",won:false},
  {id:558,title:"Strategicos Group APAS 07/04",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-04-07",presentDate:"",status:"concluído",size:"M",won:false},
  {id:559,title:"Bradesco Ajustes PPT 07/04",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-04-07",presentDate:"",status:"concluído",size:"M",won:false},
  {id:560,title:"Syngenta Camisas Ajustes 08/04",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-04-08",presentDate:"",status:"concluído",size:"M",won:false},
  {id:561,title:"Cidade Araujo 08/04",category:"NSCO",description:"",responsible:["Thiago"],dueDate:"2026-04-08",presentDate:"",status:"concluído",size:"M",won:false},
  {id:562,title:"Swile Ajustes 08/04",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2026-04-08",presentDate:"",status:"concluído",size:"M",won:false},
  {id:563,title:"nSco. Happy Hour 08/04",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2026-04-08",presentDate:"",status:"concluído",size:"M",won:false},
  {id:564,title:"Natal das Montanhas 08/04",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2026-04-08",presentDate:"",status:"concluído",size:"M",won:false},
  {id:565,title:"Bradesco Camisa Ajustes 09/04",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-04-09",presentDate:"",status:"concluído",size:"M",won:false},
  {id:566,title:"Arcelor Mittal Concrete Show e Fenasucro 09/04",category:"NSCO",description:"",responsible:["Luiza"],dueDate:"2026-04-09",presentDate:"",status:"concluído",size:"M",won:false},
  {id:567,title:"99Food Cidade 10/04",category:"NSCO",description:"",responsible:["Thiago"],dueDate:"2026-04-10",presentDate:"",status:"concluído",size:"M",won:false},
  {id:568,title:"Bradesco Ingressos 10/04",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-04-10",presentDate:"",status:"concluído",size:"M",won:false},
  {id:569,title:"XP Viagem Ajustes 10/04",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-04-10",presentDate:"",status:"concluído",size:"M",won:false},
  {id:570,title:"Arcelor Mittal Fundação Diversão em Cena 10/04",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2026-04-10",presentDate:"",status:"concluído",size:"M",won:false},
  {id:571,title:"CDL DLI 13/04",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2026-04-13",presentDate:"",status:"concluído",size:"M",won:false},
  {id:572,title:"Bradesco Ajuste Ingressos 14/04",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-04-14",presentDate:"",status:"concluído",size:"M",won:false},
  {id:573,title:"FIAT 50 ANOS V2 15/04",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2026-04-15",presentDate:"",status:"concluído",size:"M",won:false},
  {id:574,title:"Syngenta Cenografia e Impressos 15/04",category:"NSCO",description:"",responsible:["Luiza","Marcelo"],dueDate:"2026-04-15",presentDate:"",status:"concluído",size:"M",won:false},
  {id:575,title:"CDL DLI - Novo PPT 15/04",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2026-04-15",presentDate:"",status:"concluído",size:"M",won:false},
  {id:576,title:"Globo BBB26 16/04",category:"NSCO",description:"",responsible:["Pedro Melo","Marcela"],dueDate:"2026-04-16",presentDate:"",status:"concluído",size:"M",won:false},
  {id:577,title:"Bradesco Ajustes PPT 16/04",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2026-04-16",presentDate:"",status:"concluído",size:"M",won:false},
  {id:578,title:"O Boticário Crachás 16/04",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2026-04-16",presentDate:"",status:"concluído",size:"M",won:false},
  {id:579,title:"MRV Integralize 16/04",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2026-04-16",presentDate:"",status:"concluído",size:"M",won:false},
  {id:580,title:"Globo BBB26 Restante Ceno 17/04",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-04-17",presentDate:"",status:"concluído",size:"M",won:false},
  {id:581,title:"Bradesco Experience Pulseiras 17/04",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-04-17",presentDate:"",status:"concluído",size:"M",won:false},
  {id:582,title:"Natal das Montanhas PT2 17/04",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2026-04-17",presentDate:"",status:"concluído",size:"M",won:false},
  {id:583,title:"SWLX Start 17/04",category:"NSCO",description:"",responsible:["Luiza"],dueDate:"2026-04-17",presentDate:"",status:"concluído",size:"M",won:false},
  {id:584,title:"Bradesco Prime Ajustes PPT 20/04",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-04-20",presentDate:"",status:"concluído",size:"M",won:false},
  {id:585,title:"Mangalarga 43a Exposição IDV 22/04 V1",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-04-22",presentDate:"",status:"concluído",size:"M",won:false},
  {id:586,title:"Mangalarga 43a Exposição IDV 24/04 V2",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-04-24",presentDate:"",status:"concluído",size:"M",won:false},
  {id:587,title:"Syngenta Além do Limite Agenda Dias, Adesivos, Convites Virtuais 25/04",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-04-25",presentDate:"",status:"concluído",size:"M",won:false},
  {id:588,title:"Mangalarga 43a Exposição IDV 28/04 V3",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-04-28",presentDate:"",status:"concluído",size:"M",won:false},
  {id:589,title:"Syngenta Além do Limite Ajustes 28/04",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-04-28",presentDate:"",status:"concluído",size:"M",won:false},
  {id:590,title:"nSco. Slide SP 29/04",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-04-29",presentDate:"",status:"concluído",size:"M",won:false},
  {id:591,title:"O Boticário Ceno 29/04",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2026-04-29",presentDate:"",status:"concluído",size:"M",won:false},
  {id:592,title:"Xeque Mate Stand 30/04",category:"NSCO",description:"",responsible:["Luiza"],dueDate:"2026-04-30",presentDate:"",status:"concluído",size:"M",won:false},
  {id:593,title:"nSco. Presentation Marca + Mockups 04/05",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-05-04",presentDate:"",status:"concluído",size:"M",won:false},
  {id:594,title:"Localiza Brindes Meoo 06/05",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-05-06",presentDate:"",status:"concluído",size:"M",won:false},
  {id:595,title:"Mangalarga 43a Exposição Manual + KVs 06/05",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-05-06",presentDate:"",status:"concluído",size:"M",won:false},
  {id:596,title:"Mangalarga 43a Exposição PPT 06/05",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2026-05-06",presentDate:"",status:"concluído",size:"M",won:false},
  {id:597,title:"Swile Peças Emergenciais 11/05",category:"NSCO",description:"",responsible:["Luiza"],dueDate:"2026-05-11",presentDate:"",status:"concluído",size:"M",won:false},
  {id:598,title:"Globo Ceno e PPT 12/05",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2026-05-12",presentDate:"",status:"concluído",size:"M",won:false},
  {id:599,title:"Bradesco Camisa de Time 12/05",category:"NSCO",description:"",responsible:["Luiza"],dueDate:"2026-05-12",presentDate:"",status:"concluído",size:"M",won:false},
  {id:600,title:"XP Concorrência 12/05",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-05-12",presentDate:"",status:"concluído",size:"M",won:false},
  {id:601,title:"Bradesco Mockups 13/05",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2026-05-13",presentDate:"",status:"concluído",size:"M",won:false},
  {id:602,title:"O Boticário Ceno e Peças Complementares 13/05",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2026-05-13",presentDate:"",status:"concluído",size:"M",won:false},
  {id:603,title:"Localiza Zarp 13/05",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2026-05-13",presentDate:"",status:"concluído",size:"M",won:false},
  {id:604,title:"Syngenta Ajustes e Novas Peças 13/05",category:"NSCO",description:"",responsible:["Luiza"],dueDate:"2026-05-13",presentDate:"",status:"concluído",size:"M",won:false},
  {id:605,title:"Mangalarga 43a Exposição Ajustes 15/05",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-05-15",presentDate:"",status:"concluído",size:"M",won:false},
  {id:606,title:"Bradesco BEX Peças 15/05",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-05-15",presentDate:"",status:"concluído",size:"M",won:false},
  {id:607,title:"Onfly PPT 15/05",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-05-15",presentDate:"",status:"concluído",size:"M",won:false},
  {id:608,title:"Cinemark 15/05",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2026-05-15",presentDate:"",status:"concluído",size:"M",won:false},
  {id:609,title:"Arcelor Mittal Top 18/05",category:"NSCO",description:"",responsible:["Vitão","Marcelo"],dueDate:"2026-05-18",presentDate:"",status:"concluído",size:"M",won:false},
  {id:610,title:"Convites Clientes Cidade 20/05",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-05-20",presentDate:"",status:"concluído",size:"M",won:false},
  {id:611,title:"ABM Week 20/05",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2026-05-20",presentDate:"",status:"concluído",size:"M",won:false},
  {id:612,title:"Syngenta Synergia 22/05",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2026-05-22",presentDate:"",status:"concluído",size:"M",won:false},
  {id:613,title:"Bradesco Copa 25/05",category:"NSCO",description:"",responsible:["Luiza"],dueDate:"2026-05-25",presentDate:"",status:"concluído",size:"M",won:false},
  {id:614,title:"Átrio Festival Ceno 25/05",category:"NSCO",description:"",responsible:["Luiza"],dueDate:"2026-05-25",presentDate:"",status:"concluído",size:"M",won:false},
  {id:615,title:"DSP Brindes Mockups 26/05",category:"NSCO",description:"",responsible:["Pedro Melo","Thiago"],dueDate:"2026-05-26",presentDate:"",status:"concluído",size:"M",won:false},
  {id:616,title:"Cinemark PPT 26/05",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2026-05-26",presentDate:"",status:"concluído",size:"M",won:false},
  {id:617,title:"DSP Ceno Ajustes 27/05",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-05-27",presentDate:"",status:"concluído",size:"M",won:false},
  {id:618,title:"DSP Brindes Mockups Ajustes 27/05",category:"NSCO",description:"",responsible:["Pedro Melo","Thiago"],dueDate:"2026-05-27",presentDate:"",status:"concluído",size:"M",won:false},
  {id:619,title:"Convites Clientes Era Uma Vez Um Chalezinho 27/05",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2026-05-27",presentDate:"",status:"concluído",size:"M",won:false},
  {id:620,title:"Syngenta Camisa Copa Ajustes 27/05",category:"NSCO",description:"",responsible:["Luiza"],dueDate:"2026-05-27",presentDate:"",status:"concluído",size:"M",won:false},
  {id:621,title:"Michelob PPT V1 27/05",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-05-27",presentDate:"",status:"concluído",size:"M",won:false},
  {id:622,title:"Átrio Festival 27/05",category:"NSCO",description:"",responsible:["Luiza"],dueDate:"2026-05-27",presentDate:"",status:"concluído",size:"M",won:false},
  {id:623,title:"Complex PPT 28/05 Layout V1",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-05-28",presentDate:"",status:"concluído",size:"M",won:false},
  {id:624,title:"DSP Ceno Saída V1 28/05",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-05-28",presentDate:"",status:"concluído",size:"M",won:false},
  {id:625,title:"NSCO. Contratação Arquitetura Pleno 28/05",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-05-28",presentDate:"",status:"concluído",size:"M",won:false},
  {id:626,title:"DSP Brindes Saída 29/05",category:"NSCO",description:"",responsible:["Pedro Melo","Thiago"],dueDate:"2026-05-29",presentDate:"",status:"concluído",size:"M",won:false},
  {id:627,title:"Delta Sementes Ajustes 01/06",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2026-06-01",presentDate:"",status:"concluído",size:"M",won:false},
  {id:628,title:"Localiza Meeo Expert 01/06",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2026-06-01",presentDate:"",status:"concluído",size:"M",won:false},
  {id:629,title:"DSP Nova Camisa Saída 01/06",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-06-01",presentDate:"",status:"concluído",size:"M",won:false},
  {id:630,title:"Bradesco Maracanã 01/06",category:"NSCO",description:"",responsible:["Luiza"],dueDate:"2026-06-01",presentDate:"",status:"concluído",size:"M",won:false},
  {id:631,title:"CEMIG Ajustes 02/06",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2026-06-02",presentDate:"",status:"concluído",size:"M",won:false},
  {id:632,title:"Michelob PPT V2 02/06",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-06-02",presentDate:"",status:"concluído",size:"M",won:false},
  {id:633,title:"DSP Ceno Saída V2 03/06",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-06-03",presentDate:"",status:"concluído",size:"M",won:false},
  {id:634,title:"DSP + NSCO. Camisas 03/06",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-06-03",presentDate:"",status:"concluído",size:"M",won:false},
  {id:635,title:"Syngenta Andav 03/06",category:"NSCO",description:"",responsible:["Luiza"],dueDate:"2026-06-03",presentDate:"",status:"concluído",size:"M",won:false},
  {id:636,title:"DSP Balcão Engov Ajustes 08/06",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-06-08",presentDate:"",status:"concluído",size:"M",won:false},
  {id:637,title:"Michelob Ajustes 09/06",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-06-09",presentDate:"",status:"concluído",size:"M",won:false},
  {id:638,title:"Localiza Offsite 09/06",category:"NSCO",description:"",responsible:["Luiza"],dueDate:"2026-06-09",presentDate:"",status:"concluído",size:"M",won:false},
  {id:639,title:"FIAT 50 ANOS Ajustes 10/06",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2026-06-10",presentDate:"",status:"concluído",size:"M",won:false},
  {id:640,title:"FIAT 50 ANOS Ajustes 11/06",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2026-06-11",presentDate:"",status:"concluído",size:"M",won:false},
  {id:641,title:"Bradesco Toy Story 12/06",category:"NSCO",description:"",responsible:["Luiza"],dueDate:"2026-06-12",presentDate:"",status:"concluído",size:"M",won:false},
  {id:642,title:"Bradesco Camisas 12/06",category:"NSCO",description:"",responsible:["Luiza"],dueDate:"2026-06-12",presentDate:"",status:"concluído",size:"M",won:false},
  {id:643,title:"MRV + nSco. PPT IDV 12/06",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2026-06-12",presentDate:"",status:"concluído",size:"M",won:false},
  {id:644,title:"DSP Motions 12/06",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2026-06-12",presentDate:"",status:"concluído",size:"M",won:false},
  {id:645,title:"Syngenta Era da Transformação 12/06",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2026-06-12",presentDate:"",status:"concluído",size:"M",won:false},
  {id:646,title:"Syngenta GTEC Integração 12/06",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2026-06-12",presentDate:"",status:"concluído",size:"M",won:false},
  {id:647,title:"Stellar Gaming 12-15/06",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2026-06-15",presentDate:"",status:"concluído",size:"M",won:false},
  {id:648,title:"FIAT 50 ANOS Ajustes 15/06",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2026-06-15",presentDate:"",status:"concluído",size:"M",won:false},
  {id:649,title:"Localiza Minions 15/06",category:"NSCO",description:"",responsible:["Luiza"],dueDate:"2026-06-15",presentDate:"",status:"concluído",size:"M",won:false},
  {id:650,title:"Syngenta Lidero",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"",presentDate:"",status:"concluído",size:"M",won:false},
  {id:651,title:"Like Bananas Carrinho Ceno 15/06",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-06-15",presentDate:"",status:"concluído",size:"M",won:false},
  {id:652,title:"Bradesco Ajustes 15/06",category:"NSCO",description:"",responsible:["Luiza"],dueDate:"2026-06-15",presentDate:"",status:"concluído",size:"M",won:false},
  {id:653,title:"Red Bull Feira Abrafarma 16/06",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-06-16",presentDate:"",status:"concluído",size:"M",won:false},
  {id:654,title:"MRV 16/06",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2026-06-16",presentDate:"",status:"concluído",size:"M",won:false},
  {id:655,title:"O Boticário Cidade 18/06",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2026-06-18",presentDate:"",status:"concluído",size:"M",won:false},
  {id:656,title:"nSco. + Vallourec 18/06",category:"NSCO",description:"",responsible:["Luiza"],dueDate:"2026-06-18",presentDate:"",status:"concluído",size:"M",won:false},
  {id:657,title:"Bradesco Camisas Diretoria 19/06",category:"NSCO",description:"",responsible:["Luiza"],dueDate:"2026-06-19",presentDate:"",status:"concluído",size:"M",won:false},
  {id:658,title:"Stellar Bet Ajustes 19/06",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2026-06-19",presentDate:"",status:"concluído",size:"M",won:false},
  {id:659,title:"Cimento Nacional Dia da Família 22/06",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2026-06-22",presentDate:"",status:"concluído",size:"M",won:false},
  {id:660,title:"Red Bull F1 KV V1 22/06",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2026-06-22",presentDate:"",status:"concluído",size:"M",won:false},
  {id:661,title:"Red Bull F1 KV V2 23/06",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2026-06-23",presentDate:"",status:"concluído",size:"M",won:false},
  {id:662,title:"Bradesco Ajustes 23/06",category:"NSCO",description:"",responsible:["Luiza"],dueDate:"2026-06-23",presentDate:"",status:"concluído",size:"M",won:false},
  {id:663,title:"Swile Natal Árvore 24/06 PPT - Ceno",category:"NSCO",description:"",responsible:["Luiza"],dueDate:"2026-06-24",presentDate:"",status:"concluído",size:"M",won:false},
  {id:664,title:"Bradesco Ajustes 25/06",category:"NSCO",description:"",responsible:["Luiza","Marcelo"],dueDate:"2026-06-25",presentDate:"",status:"concluído",size:"M",won:false},
  {id:665,title:"Bradesco Ajustes 26/06",category:"NSCO",description:"",responsible:["Luiza","Marcelo"],dueDate:"2026-06-26",presentDate:"",status:"concluído",size:"M",won:false},
  {id:666,title:"Complex PPT Comercial 26/06",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2026-06-26",presentDate:"",status:"concluído",size:"M",won:false},
  {id:667,title:"Frebrabram 30/06",category:"NSCO",description:"",responsible:["Marcelo","Luiza"],dueDate:"2026-06-30",presentDate:"",status:"concluído",size:"M",won:false},
  {id:668,title:"Red Bull Lounge Stellantis / FIAT PPT 02/07",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-07-02",presentDate:"",status:"concluído",size:"M",won:false},
  {id:669,title:"Amstel Bar Mangalarga Ajustes 02/07",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-07-02",presentDate:"",status:"concluído",size:"M",won:false},
  {id:670,title:"Red Bull Lounge Stellantis / FIAT PPT Ajustes 03/07",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-07-03",presentDate:"",status:"concluído",size:"M",won:false},
  {id:671,title:"Red Bull F1 PPT 03/07",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"2025-07-03",presentDate:"",status:"concluído",size:"M",won:false},
  {id:672,title:"Bradesco Sessão Alta Renda Homem Aranha 07/07",category:"NSCO",description:"",responsible:["Marcelo"],dueDate:"2025-07-07",presentDate:"",status:"concluído",size:"M",won:false},
  {id:673,title:"O Boticário 10 Milhas Corrida Garoto 08/07",category:"NSCO",description:"",responsible:["Vitão","Marcelo","Pedro Melo"],dueDate:"2025-07-08",presentDate:"",status:"concluído",size:"M",won:false},
  {id:674,title:"nSco. PPT 08/07",category:"NSCO",description:"",responsible:["Marcelo","Luiza","Marcela"],dueDate:"2025-07-08",presentDate:"",status:"concluído",size:"M",won:false},
  {id:675,title:"Complex PPT Comercial Ajustes V3 e PPT Vendas 10/07",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"2025-07-10",presentDate:"",status:"pendente",size:"M",won:false},
  {id:676,title:"Swile Viagem França 27/07",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2025-07-27",presentDate:"",status:"pendente",size:"M",won:false},
  {id:677,title:"Sesc Arraial de Belo 14/07",category:"NSCO",description:"",responsible:["Luiza"],dueDate:"2025-07-14",presentDate:"",status:"pendente",size:"M",won:false},
  {id:678,title:"O Boticário C14 13/07 Planejamento Touchpoint + Moodboard",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"2025-07-13",presentDate:"",status:"pendente",size:"M",won:false},
  {id:679,title:"Techbiz",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"",presentDate:"",status:"pendente",size:"M",won:false},
  {id:680,title:"Superminas",category:"NSCO",description:"",responsible:["Luiza"],dueDate:"",presentDate:"",status:"pendente",size:"M",won:false},
  {id:681,title:"Red Bull Lounge Stellantis / FIAT PPT Ajustes",category:"NSCO",description:"",responsible:["Pedro Melo"],dueDate:"",presentDate:"",status:"pendente",size:"M",won:false},
  {id:682,title:"RD OffSite",category:"NSCO",description:"",responsible:["Vitão"],dueDate:"",presentDate:"",status:"pendente",size:"M",won:false},
  {id:683,title:"Natal Parque Villa Lobos Até Dezembro",category:"NSCO",description:"",responsible:["Luiza","Marcelo"],dueDate:"",presentDate:"",status:"pendente",size:"M",won:false},
  {id:684,title:"Natal dos Sonhos Até Dezembro",category:"NSCO",description:"",responsible:["Marcela"],dueDate:"",presentDate:"",status:"pendente",size:"M",won:false},
  {id:685,title:"CIDADE Natal Book 09/01",category:"CIDADE",description:"",responsible:["Thiago"],dueDate:"2026-01-09",presentDate:"",status:"concluído",size:"M",won:false},
  {id:686,title:"CIDADE Verão IDV 12/01",category:"CIDADE",description:"",responsible:["Pedro Melo"],dueDate:"2026-01-12",presentDate:"",status:"concluído",size:"M",won:false},
  {id:687,title:"PPT VIVO 14/01",category:"CIDADE",description:"",responsible:["Thiago"],dueDate:"2026-01-14",presentDate:"",status:"concluído",size:"M",won:false},
  {id:688,title:"CIDADE Verão IDV Ajustes 15/01",category:"CIDADE",description:"",responsible:["Pedro Melo"],dueDate:"2026-01-15",presentDate:"",status:"concluído",size:"M",won:false},
  {id:689,title:"CIDADE Junina IDV Ajustes 21/01",category:"CIDADE",description:"",responsible:["Pedro Melo"],dueDate:"2026-01-21",presentDate:"",status:"concluído",size:"M",won:false},
  {id:690,title:"CIDADE Verão Peças Iniciais 21/01",category:"CIDADE",description:"",responsible:["Thiago"],dueDate:"2026-01-21",presentDate:"",status:"concluído",size:"M",won:false},
  {id:691,title:"CIDADE Junina 3 Peças Base Iniciais 23/01",category:"CIDADE",description:"",responsible:["Pedro Melo"],dueDate:"2026-01-23",presentDate:"",status:"concluído",size:"M",won:false},
  {id:692,title:"CIDADE Verão Start Comunicação 26/01",category:"CIDADE",description:"",responsible:["Thiago"],dueDate:"2026-01-26",presentDate:"",status:"concluído",size:"M",won:false},
  {id:693,title:"CIDADE Verão Carrossel 27/01",category:"CIDADE",description:"",responsible:["Thiago"],dueDate:"2026-01-27",presentDate:"",status:"concluído",size:"M",won:false},
  {id:694,title:"CIDADE Calendário Novo - Start Quarta-feira de Cinzas",category:"CIDADE",description:"",responsible:["Thiago"],dueDate:"",presentDate:"",status:"concluído",size:"M",won:false},
  {id:695,title:"CIDADE JUNINA troca de logo 23/02",category:"CIDADE",description:"",responsible:["Thiago"],dueDate:"2026-02-23",presentDate:"",status:"concluído",size:"M",won:false},
  {id:696,title:"CIDADEZINHA IDV 03/03",category:"CIDADE",description:"",responsible:["Pedro Melo"],dueDate:"2026-03-03",presentDate:"",status:"concluído",size:"M",won:false},
  {id:697,title:"CIDADE JUNINA SITE LP BASE 04/03",category:"CIDADE",description:"",responsible:["Pedro Melo","Thiago"],dueDate:"2026-03-04",presentDate:"",status:"concluído",size:"M",won:false},
  {id:698,title:"CIDADEZINHA IDV AJUSTES 11/03",category:"CIDADE",description:"",responsible:["Pedro Melo"],dueDate:"2026-03-11",presentDate:"",status:"concluído",size:"M",won:false},
  {id:699,title:"CIDADE JUNINA CENO 13/03",category:"CIDADE",description:"",responsible:["Thiago"],dueDate:"2026-03-13",presentDate:"",status:"concluído",size:"M",won:false},
  {id:700,title:"CIDADE JUNINA LP AJUSTES 18/03",category:"CIDADE",description:"",responsible:["Thiago"],dueDate:"2026-03-18",presentDate:"",status:"concluído",size:"M",won:false},
  {id:701,title:"CIDADE JUNINA Pré-Venda 18/03",category:"CIDADE",description:"",responsible:["Thiago"],dueDate:"2026-03-18",presentDate:"",status:"concluído",size:"M",won:false},
  {id:702,title:"CIDADE JUNINA FOLDER ARTISTAS 24/04",category:"CIDADE",description:"",responsible:["Thiago"],dueDate:"2026-04-24",presentDate:"",status:"concluído",size:"M",won:false},
  {id:703,title:"CIDADE JUNINA RÉGUA DE PATROCÍNIO",category:"CIDADE",description:"",responsible:["—"],dueDate:"",presentDate:"",status:"concluído",size:"M",won:false},
  {id:704,title:"CIDADE JUNINA KV 20/06",category:"CIDADE",description:"",responsible:["Pedro Melo"],dueDate:"2026-06-20",presentDate:"",status:"concluído",size:"M",won:false},
  {id:705,title:"CIDADE JUNINA VIDEO ABERTURA 23/05",category:"CIDADE",description:"",responsible:["Marcelo"],dueDate:"2026-05-23",presentDate:"",status:"concluído",size:"M",won:false},
  {id:706,title:"CIDADE JUNINA VINHETAS (Vitor Chalezinho)",category:"CIDADE",description:"",responsible:["—"],dueDate:"",presentDate:"",status:"concluído",size:"M",won:false},
  {id:707,title:"CIDADE JUNINA ASSETS CIDADEZINHA 26/05",category:"CIDADE",description:"",responsible:["Pedro Melo"],dueDate:"2026-05-26",presentDate:"",status:"concluído",size:"M",won:false},
  {id:708,title:"CIDADE JUNINA O BOTICÁRIO 29/05",category:"CIDADE",description:"",responsible:["Marcela"],dueDate:"2026-05-29",presentDate:"",status:"concluído",size:"M",won:false},
  {id:709,title:"CIDADE JUNINA BOTICÁRIO 12/06",category:"CIDADE",description:"",responsible:["Marcela"],dueDate:"2026-06-12",presentDate:"",status:"concluído",size:"M",won:false},
  {id:710,title:"HENRIQUE & JULIANO CONVITE 15/06",category:"CIDADE",description:"",responsible:["—"],dueDate:"2026-06-15",presentDate:"",status:"concluído",size:"M",won:false},
  {id:711,title:"CIDADE JUNINA PEÇAS ATÉ 04/07",category:"CIDADE",description:"",responsible:["Thiago","Equipe"],dueDate:"2025-07-04",presentDate:"",status:"concluído",size:"M",won:false},
  {id:712,title:"Dominguinho Ajustes 12/01",category:"EVENTOS",description:"",responsible:["Thiago"],dueDate:"2026-01-12",presentDate:"",status:"concluído",size:"M",won:false},
  {id:713,title:"Dominguinho Reabertura de Vendas 13/01",category:"EVENTOS",description:"",responsible:["Thiago"],dueDate:"2026-01-13",presentDate:"",status:"concluído",size:"M",won:false},
  {id:714,title:"Dominguinho Mídias OOH 13/01",category:"EVENTOS",description:"",responsible:["Thiago"],dueDate:"2026-01-13",presentDate:"",status:"concluído",size:"M",won:false},
  {id:715,title:"naSala Verão Camiseta 13/01",category:"EVENTOS",description:"",responsible:["Pedro Melo"],dueDate:"2026-01-13",presentDate:"",status:"concluído",size:"M",won:false},
  {id:716,title:"naSala Verão Cenografia 16/01",category:"EVENTOS",description:"",responsible:["Thiago"],dueDate:"2026-01-16",presentDate:"",status:"concluído",size:"M",won:false},
  {id:717,title:"naSala de Verão Cenografia 23/01",category:"EVENTOS",description:"",responsible:["Thiago"],dueDate:"2026-01-23",presentDate:"",status:"concluído",size:"M",won:false},
  {id:718,title:"naSala de Verão dia 31 27/01",category:"EVENTOS",description:"",responsible:["Thiago"],dueDate:"2026-01-27",presentDate:"",status:"concluído",size:"M",won:false},
  {id:719,title:"Dominguinho: copo, tirante e balcão",category:"EVENTOS",description:"",responsible:["Thiago"],dueDate:"",presentDate:"",status:"concluído",size:"M",won:false},
  {id:720,title:"naSala de Verão peças antecipadas",category:"EVENTOS",description:"",responsible:["Thiago"],dueDate:"",presentDate:"",status:"concluído",size:"M",won:false},
  {id:721,title:"Dominguinho Cenografia 30/01",category:"EVENTOS",description:"",responsible:["Pedro Melo","Thiago"],dueDate:"2026-01-30",presentDate:"",status:"concluído",size:"M",won:false},
  {id:722,title:"Dominguinho Cenografia Ajustes 02/02",category:"EVENTOS",description:"",responsible:["Pedro Melo"],dueDate:"2026-02-02",presentDate:"",status:"concluído",size:"M",won:false},
  {id:723,title:"naSala de Verão peças antecipadas da semana 02/02",category:"EVENTOS",description:"",responsible:["Thiago"],dueDate:"2026-02-02",presentDate:"",status:"concluído",size:"M",won:false},
  {id:724,title:"Dominguinho Cenografia Ajustes 03/02",category:"EVENTOS",description:"",responsible:["Pedro Melo"],dueDate:"2026-02-03",presentDate:"",status:"concluído",size:"M",won:false},
  {id:725,title:"Dominguinho Cenografia Bar Red Bull 03/02",category:"EVENTOS",description:"",responsible:["Pedro Melo"],dueDate:"2026-02-03",presentDate:"",status:"concluído",size:"M",won:false},
  {id:726,title:"Dominguinho Cenografia Bar Brahma 03/02",category:"EVENTOS",description:"",responsible:["Pedro Melo"],dueDate:"2026-02-03",presentDate:"",status:"concluído",size:"M",won:false},
  {id:727,title:"Dominguinho Cenografia Ajustes 04/02",category:"EVENTOS",description:"",responsible:["Pedro Melo"],dueDate:"2026-02-04",presentDate:"",status:"concluído",size:"M",won:false},
  {id:728,title:"Dominguinho Fake Tattoo, Pulseira Senhor do Bonfim e Adesivo 04/02",category:"EVENTOS",description:"",responsible:["Thiago"],dueDate:"2026-02-04",presentDate:"",status:"concluído",size:"M",won:false},
  {id:729,title:"nsEventos Highlights 30/01",category:"EVENTOS",description:"",responsible:["Thiago"],dueDate:"2026-01-30",presentDate:"",status:"concluído",size:"M",won:false},
  {id:730,title:"Dominguinho Cenografia Ajustes 05/02",category:"EVENTOS",description:"",responsible:["Pedro Melo"],dueDate:"2026-02-05",presentDate:"",status:"concluído",size:"M",won:false},
  {id:731,title:"Dominguinho LEDS 06/02",category:"EVENTOS",description:"",responsible:["Thiago"],dueDate:"2026-02-06",presentDate:"",status:"concluído",size:"M",won:false},
  {id:732,title:"naSala de Verão Peças Semana 07/02",category:"EVENTOS",description:"",responsible:["Thiago"],dueDate:"2026-02-07",presentDate:"",status:"concluído",size:"M",won:false},
  {id:733,title:"Torcida naSala IDV 10/02",category:"EVENTOS",description:"",responsible:["Thiago"],dueDate:"2026-02-10",presentDate:"",status:"concluído",size:"M",won:false},
  {id:734,title:"Torcida naSala Save the Date 23/02",category:"EVENTOS",description:"",responsible:["Thiago"],dueDate:"2026-02-23",presentDate:"",status:"concluído",size:"M",won:false},
  {id:735,title:"naSala de Verão Save the Date 23/03",category:"EVENTOS",description:"",responsible:["Thiago"],dueDate:"2026-03-23",presentDate:"",status:"concluído",size:"M",won:false},
  {id:736,title:"Copa naSala IDV Ajuste 04/02",category:"EVENTOS",description:"",responsible:["Thiago"],dueDate:"2026-02-04",presentDate:"",status:"concluído",size:"M",won:false},
  {id:737,title:"RODA Ajustes 13/03",category:"EVENTOS",description:"",responsible:["Thiago"],dueDate:"2026-03-13",presentDate:"",status:"concluído",size:"M",won:false},
  {id:738,title:"RODA 23/03 - 18/04",category:"EVENTOS",description:"",responsible:["Thiago"],dueDate:"2026-03-23",presentDate:"",status:"concluído",size:"M",won:false},
  {id:739,title:"Dominguinho Mapa 16/06",category:"EVENTOS",description:"",responsible:["Thiago"],dueDate:"2026-06-16",presentDate:"",status:"concluído",size:"M",won:false},
  {id:740,title:"Above IDV 22/06",category:"EVENTOS",description:"",responsible:["Thiago"],dueDate:"2026-06-22",presentDate:"",status:"concluído",size:"M",won:false},
  {id:741,title:"Sona IDV 24/06",category:"EVENTOS",description:"",responsible:["Thiago"],dueDate:"2026-06-24",presentDate:"",status:"concluído",size:"M",won:false},
  {id:742,title:"Copa naSala 05/07 BRxNOR",category:"EVENTOS",description:"",responsible:["Thiago"],dueDate:"2025-07-05",presentDate:"",status:"concluído",size:"M",won:false},
  {id:743,title:"Mangalarga Ceno 06/07",category:"EVENTOS",description:"",responsible:["Pedro Melo"],dueDate:"2025-07-06",presentDate:"",status:"concluído",size:"M",won:false},
  {id:744,title:"Mangalarga Ceno Calçada da Fama Ajustes 08/07",category:"EVENTOS",description:"",responsible:["Marcelo"],dueDate:"2025-07-08",presentDate:"",status:"concluído",size:"M",won:false},
  {id:745,title:"Henrique e Juliano Ceno 18/07",category:"EVENTOS",description:"",responsible:["Thiago"],dueDate:"2025-07-18",presentDate:"",status:"pendente",size:"M",won:false},
  {id:746,title:"naSala + nSeventos + nSessions KV Guide 30/07",category:"EVENTOS",description:"",responsible:["Thiago","Pedro Melo"],dueDate:"2025-07-30",presentDate:"",status:"pendente",size:"M",won:false},
];

let dark       = true;
let hideDone   = false;
let fCat       = 'CASAS';
let fResp      = 'TIME';
let appTitle   = 'Gestão de Demandas';
let collapsed  = {NSCO:false, CIDADE:false, EVENTOS:false, OUTROS:false};
let catOpen    = true;
let respOpen   = true;
let srchOpen   = false;
let log        = [];
let selectedResp  = [];
let editingAvIdx  = null;
let avEditContext = 'team';
let avDraftColor  = '';
let avDraftSvg    = null;
let draftTeam     = [];

// Firebase handles
let fbApp = null, fbDb = null, fbRef = null;
let fbReady = false;
let syncTimeout = null;

// ═══════════════════════════════════════════════════
//  FIREBASE INIT
// ═══════════════════════════════════════════════════
function isFirebaseConfigured() {
  return FIREBASE_CONFIG.databaseURL && FIREBASE_CONFIG.apiKey;
}

async function initFirebase() {
  if (!isFirebaseConfigured()) return false;
  try {
    const { initializeApp }     = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js');
    const { getDatabase, ref, onValue, set } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js');
    fbApp = initializeApp(FIREBASE_CONFIG);
    fbDb  = getDatabase(fbApp);
    fbRef = ref(fbDb, FB_PATH);
    window._fbSet = set;
    window._fbRef = fbRef;

    // Real-time listener
    onValue(fbRef, (snapshot) => {
      const data = snapshot.val();
      if (!data) return;
      applyRemoteData(data);
    });

    fbReady = true;
    showSync('ok', 'Sincronizado');
    return true;
  } catch(e) {
    console.error('Firebase error:', e);
    showSync('error', 'Erro de conexão');
    return false;
  }
}

function applyRemoteData(data) {
  if (data.tasks)    tasks     = data.tasks.map(t => ({...t, responsible: Array.isArray(t.responsible) ? t.responsible : [t.responsible].filter(Boolean)}));
  if (data.team)     team      = data.team.map(m => typeof m === 'string' ? {name:m,color:'#888',svg:null} : m);
  if (data.log)      log       = data.log;
  if (data.appTitle) appTitle  = data.appTitle;
  if (data.collapsed) collapsed = {...collapsed, ...data.collapsed};
  if (data.dark !== undefined) dark = data.dark;
  document.getElementById('titleDisplay').textContent = appTitle;
  applyTheme();
  buildFilters();
  render();
}

// ═══════════════════════════════════════════════════
//  SYNC BANNER
// ═══════════════════════════════════════════════════
function showSync(state, msg) {
  const banner = document.getElementById('syncBanner');
  const dot    = banner.querySelector('.sync-dot');
  const lbl    = banner.querySelector('.sync-label');
  dot.className = 'sync-dot ' + state;
  lbl.textContent = msg;
  banner.classList.remove('hidden');
  clearTimeout(syncTimeout);
  if (state === 'ok') syncTimeout = setTimeout(() => banner.classList.add('hidden'), 2000);
}

// ═══════════════════════════════════════════════════
//  PERSIST
// ═══════════════════════════════════════════════════
function persist() {
  const data = {tasks, team, dark, appTitle, collapsed, log};
  // Always save to localStorage as fallback
  try { localStorage.setItem('demandas-data', JSON.stringify(data)); } catch(_) {}
  // Save to Firebase if available
  if (fbReady && window._fbSet && window._fbRef) {
    showSync('saving', 'Salvando…');
    window._fbSet(window._fbRef, data)
      .then(() => showSync('ok', 'Salvo'))
      .catch(() => showSync('error', 'Erro ao salvar'));
  }
}

async function load() {
  const hasFb = await initFirebase();
  if (!hasFb) {
    // Fallback to localStorage
    try {
      const raw = localStorage.getItem('demandas-data');
      if (raw) {
        const p = JSON.parse(raw);
        if (p.tasks)    tasks     = p.tasks.map(t => ({...t, responsible: Array.isArray(t.responsible) ? t.responsible : [t.responsible].filter(Boolean)}));
        if (p.team)     team      = p.team.map(m => typeof m === 'string' ? {name:m,color:'#888',svg:null} : m);
        if (p.log)      log       = p.log;
        if (p.appTitle) appTitle  = p.appTitle;
        if (p.collapsed) collapsed = {...collapsed, ...p.collapsed};
        if (typeof p.dark === 'boolean') dark = p.dark;
      }
    } catch(_) {}
    document.getElementById('titleDisplay').textContent = appTitle;
    if (log.length) { const b = document.getElementById('btnLog'); if (b) b.style.color = 'var(--acc)'; }
    applyTheme();
    buildFilters();
    render();
  } else {
    // Firebase onValue handles the render
    document.getElementById('titleDisplay').textContent = appTitle;
    if (log.length) { const b = document.getElementById('btnLog'); if (b) b.style.color = 'var(--acc)'; }
  }
}

// ═══════════════════════════════════════════════════
//  SETUP SCREEN
// ═══════════════════════════════════════════════════
function checkSetup() {
  if (!isFirebaseConfigured()) {
    document.getElementById('setupScreen').classList.remove('hidden');
  }
}

function saveSetupConfig() {
  const url = document.getElementById('setupDbUrl').value.trim();
  const key = document.getElementById('setupApiKey').value.trim();
  if (!url || !key) { alert('Preencha os dois campos.'); return; }
  // Write to a config comment — instruct user to edit the file
  alert('Para ativar o sync:\n\n1. Abra o arquivo assets/app.js\n2. Preencha o objeto FIREBASE_CONFIG com seus dados\n3. Faça o commit no GitHub\n\nOs dados digitados aqui foram copiados para sua área de transferência.');
  navigator.clipboard?.writeText(`apiKey: "${key}",\ndatabaseURL: "${url}"`);
}

function skipSetup() {
  document.getElementById('setupScreen').classList.add('hidden');
  load();
}

// ═══════════════════════════════════════════════════
//  UTILS
// ═══════════════════════════════════════════════════
function today() { const d = new Date(); d.setHours(0,0,0,0); return d; }
function parseLocalDate(s) { const [y,m,d] = s.split('-').map(Number); return new Date(y,m-1,d); }
function isDueToday(d, s) {
  if (!d || s === 'concluído') return false;
  return parseLocalDate(d).getTime() === today().getTime();
}
// Classify a due date relative to today. Returns 'overdue' | 'near' | 'normal' | null.
// 'near' = due within the next NEAR_DAYS days (inclusive of today).
const NEAR_DAYS = 3;
function dueStatus(d, s) {
  if (!d || s === 'concluído') return null;
  const diffDays = Math.round((parseLocalDate(d).getTime() - today().getTime()) / 86400000);
  if (diffDays < 0) return 'overdue';
  if (diffDays <= NEAR_DAYS) return 'near';
  return 'normal';
}
function fmtDate(d) {
  if (!d) return null;
  const [y,m,day] = d.split('-');
  return `${day}/${m}/${y}`;
}
function memberOf(name) { return team.find(m => m.name === name) || {name, color:'#888', svg:null}; }
function avInits(name)  { return (name||'?').split(' ').map(w => w[0]).join('').slice(0,2).toUpperCase(); }

// Calculate tenure from a start date (YYYY-MM-DD) to today, in pt-BR
function calcTenure(startStr) {
  if (!startStr) return '—';
  const start = parseLocalDate(startStr);
  const now = today();
  if (start > now) return '—';
  let years  = now.getFullYear()  - start.getFullYear();
  let months = now.getMonth()     - start.getMonth();
  let days   = now.getDate()      - start.getDate();
  if (days < 0)   { months -= 1; }
  if (months < 0) { months += 12; years -= 1; }
  const parts = [];
  if (years  > 0) parts.push(years  + (years  === 1 ? ' ano'  : ' anos'));
  if (months > 0) parts.push(months + (months === 1 ? ' mês'  : ' meses'));
  if (parts.length === 0) {
    // less than a month → show days
    const diffDays = Math.floor((now - start) / 86400000);
    return diffDays <= 0 ? 'Hoje' : diffDays + (diffDays === 1 ? ' dia' : ' dias');
  }
  return parts.join(' e ');
}

function avHTML(name, sz, surfColor) {
  const m = memberOf(name);
  const border = surfColor ? `border-color:${surfColor}` : 'border-color:var(--surf)';
  const click  = `onclick="openAvForName('${name.replace(/'/g,"\\'")}')"`;
  if (m.svg) {
    return `<div class="av" style="width:${sz}px;height:${sz}px;background:${m.color};${border}" ${click}>
      <img src="${m.svg}" style="width:100%;height:100%;object-fit:cover"/></div>`;
  }
  return `<div class="av" style="width:${sz}px;height:${sz}px;font-size:${Math.round(sz*.36)}px;background:${m.color};${border}" ${click}>
    ${avInits(name)}</div>`;
}

// ═══════════════════════════════════════════════════
//  THEME
// ═══════════════════════════════════════════════════
function applyTheme() {
  document.body.className = dark ? '' : 'light';
  const ic = document.getElementById('themeIcon');
  if (dark) {
    ic.innerHTML = `<circle cx="7" cy="7" r="2.6" stroke="currentColor" stroke-width="1.1"/>
      <line x1="7" y1=".5" x2="7" y2="2" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/>
      <line x1="7" y1="12" x2="7" y2="13.5" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/>
      <line x1=".5" y1="7" x2="2" y2="7" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/>
      <line x1="12" y1="7" x2="13.5" y2="7" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/>
      <line x1="2.4" y1="2.4" x2="3.5" y2="3.5" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/>
      <line x1="10.5" y1="10.5" x2="11.6" y2="11.6" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/>
      <line x1="11.6" y1="2.4" x2="10.5" y2="3.5" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/>
      <line x1="3.5" y1="10.5" x2="2.4" y2="11.6" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/>`;
  } else {
    ic.innerHTML = `<path d="M8 2a5.5 5.5 0 1 0 4 4.5 4 4 0 0 1-4-4.5z" stroke="currentColor" stroke-width="1.1" stroke-linejoin="round"/>`;
  }
}
function toggleTheme() { dark = !dark; applyTheme(); persist(); }

// ═══════════════════════════════════════════════════
//  EDITABLE TITLE
// ═══════════════════════════════════════════════════
function startTitleEdit() {
  document.getElementById('titleDisplay').style.display = 'none';
  const inp = document.getElementById('titleInput');
  inp.value = appTitle;
  inp.style.display = 'block';
  inp.focus(); inp.select();
}
function saveTitleEdit() {
  const inp = document.getElementById('titleInput');
  appTitle = inp.value.trim() || 'Gestão de Demandas';
  document.getElementById('titleDisplay').textContent = appTitle;
  inp.style.display = 'none';
  document.getElementById('titleDisplay').style.display = '';
  persist();
}

// ═══════════════════════════════════════════════════
//  HIDE DONE
// ═══════════════════════════════════════════════════
function toggleHide() {
  hideDone = !hideDone;
  const b = document.getElementById('btnHide');
  b.className = 'pill-btn' + (hideDone ? ' on' : '');
  b.innerHTML = hideDone
    ? `<svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M1 6.5s2-4 5.5-4 5.5 4 5.5 4-2 4-5.5 4-5.5-4-5.5-4z" stroke="currentColor" stroke-width="1.1"/></svg> Ver concluídas`
    : `<svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M1 6.5s2-4 5.5-4 5.5 4 5.5 4-2 4-5.5 4-5.5-4-5.5-4z" stroke="currentColor" stroke-width="1.1"/><line x1="2" y1="11" x2="11" y2="2" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/></svg> Ocultar concluídas`;
  render();
}

// ═══════════════════════════════════════════════════
//  FILTER BAR
// ═══════════════════════════════════════════════════
function toggleCatOpen() {
  catOpen = !catOpen;
  document.getElementById('fgroupCat').classList.toggle('closed', !catOpen);
  document.getElementById('catPills').classList.toggle('closed', !catOpen);
  buildCatChip();
}
function toggleRespOpen() {
  respOpen = !respOpen;
  document.getElementById('fgroupResp').classList.toggle('closed', !respOpen);
  document.getElementById('respPills').classList.toggle('closed', !respOpen);
  buildRespChip();
}
function toggleSearch() {
  srchOpen = !srchOpen;
  const wrap = document.getElementById('srchWrap');
  const inp  = document.getElementById('srch');
  wrap.classList.toggle('open', srchOpen);
  if (srchOpen) { setTimeout(() => inp.focus(), 60); }
  else { inp.value = ''; render(); }
}

function buildFilters() {
  // Category pills
  const cp = document.getElementById('catPills');
  cp.innerHTML = CATS.map(c => `<button class="fp${fCat===c?' on':''}" onclick="setCat('${c}')">${c}</button>`).join('');
  const gc = document.getElementById('fgroupCat');
  gc.classList.toggle('closed', !catOpen);
  cp.classList.toggle('closed', !catOpen);
  gc.classList.toggle('has-sel', fCat !== 'CASAS');
  buildCatChip();

  // Resp pills
  const rp = document.getElementById('respPills');
  rp.innerHTML = team.map(m => {
    const av = avHTML(m.name, 16, 'var(--surf)');
    return `<button class="fp${fResp===m.name?' on':''}" onclick="setResp('${m.name.replace(/'/g,"\\'")}')">
      <span style="display:flex;align-items:center;gap:4px;pointer-events:none">${av}${m.name.split(' ')[0]}</span>
    </button>`;
  }).join('');
  const gr = document.getElementById('fgroupResp');
  gr.classList.toggle('closed', !respOpen);
  rp.classList.toggle('closed', !respOpen);
  gr.classList.toggle('has-sel', fResp !== 'TIME');
  buildRespChip();
}

function buildCatChip() {
  const el = document.getElementById('catChip');
  const gc = document.getElementById('fgroupCat');
  if (!catOpen && fCat !== 'CASAS') {
    el.innerHTML = `<span class="sel-chip">${fCat}<button class="chip-clear" onclick="setCat('CASAS')" title="Limpar">×</button></span>`;
    gc.classList.add('has-sel');
  } else {
    el.innerHTML = '';
    gc.classList.toggle('has-sel', fCat !== 'CASAS');
  }
}
function buildRespChip() {
  const el = document.getElementById('respChip');
  const gr = document.getElementById('fgroupResp');
  if (!respOpen && fResp !== 'TIME') {
    const m  = memberOf(fResp);
    const av = avHTML(fResp, 18, 'rgba(255,255,255,.2)');
    el.innerHTML = `<span class="sel-chip" style="background:${m.color}">${av}
      <span style="margin-left:2px">${fResp.split(' ')[0]}</span>
      <button class="chip-clear" onclick="setResp('TIME')" title="Limpar">×</button></span>`;
    gr.classList.add('has-sel');
  } else {
    el.innerHTML = '';
    gr.classList.toggle('has-sel', fResp !== 'TIME');
  }
}

function setCat(c)  { fCat  = (fCat  === c ? 'CASAS' : c); buildFilters(); render(); }
function setResp(r) { fResp = (fResp === r ? 'TIME'  : r); buildFilters(); render(); }

// ═══════════════════════════════════════════════════
//  SECTION COLLAPSE
// ═══════════════════════════════════════════════════
function toggleSection(cat) {
  collapsed[cat] = !collapsed[cat];
  persist(); render();
}

// ═══════════════════════════════════════════════════
//  RENDER
// ═══════════════════════════════════════════════════
function render() {
  const q = (document.getElementById('srch').value || '').toLowerCase();
  const fil = tasks.filter(t => {
    if (hideDone && t.status === 'concluído') return false;
    if (fCat  !== 'CASAS' && t.category !== fCat) return false;
    if (fResp !== 'TIME'  && !(t.responsible||[]).includes(fResp)) return false;
    if (q && !t.title.toLowerCase().includes(q) && !(t.description||'').toLowerCase().includes(q)) return false;
    return true;
  });

  const tot  = tasks.length;
  const don  = tasks.filter(t => t.status === 'concluído').length;
  const pend = tasks.filter(t => t.status === 'pendente').length;
  const due  = tasks.filter(t => isDueToday(t.dueDate, t.status)).length;

  document.getElementById('sub').textContent =
    `${don}/${tot} concluídas${due > 0 ? ` · ${due} vencendo hoje` : ' · tudo em dia'}`;

  document.getElementById('stats').innerHTML = [
    ['Total',     tot,  'var(--tx)'],
    ['Concluídas',don,  'var(--grn)'],
    ['Pendentes', pend, 'var(--org)'],
    ['Vencendo',  due,  due ? 'var(--red)' : 'var(--txt)'],
  ].map(([l,v,c]) => `<div class="sc"><div class="sl">${l}</div><div class="sv" style="color:${c}">${v}</div></div>`).join('');

  const grp = {};
  CATS.forEach(c => { const its = fil.filter(t => t.category === c); if (its.length) grp[c] = its; });

  const el = document.getElementById('taskList');
  if (!Object.keys(grp).length) {
    el.innerHTML = '<div style="text-align:center;padding:60px 0;color:var(--txt);font-size:14px">Nenhuma demanda encontrada.</div>';
    return;
  }
  el.innerHTML = Object.entries(grp).map(([cat, its]) => {
    const dc     = its.filter(t => t.status === 'concluído').length;
    const isOpen = !collapsed[cat];
    return `<div class="cat-sec">
      <div class="cat-hdr" onclick="toggleSection('${cat}')">
        <span class="cat-lbl">${cat}</span>
        <span class="cat-cnt">${dc}/${its.length}</span>
        <div class="cat-line"></div>
        <span class="cat-arrow ${isOpen?'open':'closed'}">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 5l4 4 4-4" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </span>
      </div>
      <div class="cat-body${isOpen?'':' collapsed'}">${its.map(cardHTML).join('')}</div>
    </div>`;
  }).join('');
}

function cardHTML(t) {
  const done = t.status === 'concluído';
  const prog = t.status === 'em andamento';

  const resp = Array.isArray(t.responsible) ? t.responsible : [t.responsible].filter(Boolean);
  const avs  = resp.map(n => avHTML(n, 22, '')).join('');
  const names = resp.length > 2
    ? resp[0].split(' ')[0] + ` +${resp.length-1}`
    : resp.map(n => n.split(' ')[0]).join(', ');

  // due-date urgency for this task (based on the delivery date)
  const ds = dueStatus(t.dueDate, t.status);

  // status dropdown (pendente → em andamento → concluído, and back freely)
  const statusOpts = [
    ['pendente','Pendente'],
    ['em andamento','Em andamento'],
    ['concluído','Concluído'],
  ];
  const statusColor = done ? 'var(--grn)' : prog ? 'var(--acc)' : 'var(--org)';
  const statusBg    = done ? 'var(--pg)'  : prog ? 'var(--pb)'  : 'var(--po)';
  const statusSelect = `<span class="status-select-wrap" style="--sc:${statusColor};--sbg:${statusBg}">
    <select class="status-select" onchange="setStatus(${t.id}, this.value)">
      ${statusOpts.map(([v,l]) => `<option value="${v}"${t.status===v?' selected':''}>${l}</option>`).join('')}
    </select>
    <svg class="status-caret" width="9" height="9" viewBox="0 0 9 9" fill="none"><path d="M1.5 3l3 3 3-3" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
  </span>`;

  // urgency alert tag (only for non-done tasks with a due date)
  let alertTag = '';
  if (ds === 'overdue') {
    alertTag = `<span class="alert-tag alert-overdue">
      <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M6 1.5L11 10.5H1L6 1.5z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/><line x1="6" y1="5" x2="6" y2="7.3" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/><circle cx="6" cy="8.8" r=".65" fill="currentColor"/></svg>
      ATRASADO</span>`;
  } else if (ds === 'near') {
    alertTag = `<span class="alert-tag alert-near">
      <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" stroke="currentColor" stroke-width="1.2"/><path d="M6 3.2V6l1.9 1.1" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      Entrega próxima</span>`;
  }

  // dates: delivery + presentation
  function dateChip(label, val, isDue) {
    if (!val) return '';
    // color by urgency only for the delivery date
    let color = 'var(--txt)';
    let icon = '';
    if (isDue && ds === 'overdue') {
      color = 'var(--red)';
    } else if (isDue && ds === 'near') {
      color = 'var(--org)';
    } else if (isDueToday(val, t.status)) {
      color = 'var(--red)';
    }
    return `<span style="display:flex;align-items:center;gap:3px;font-size:12px;color:${color}">${label} ${fmtDate(val)}</span>`;
  }
  const dueHtml     = dateChip('Entrega', t.dueDate, true);
  const presentHtml = dateChip('Apres.',  t.presentDate, false);

  // size badge
  const sizeColors = {P:'var(--grn)', M:'var(--org)', G:'var(--red)'};
  const sz = t.size || 'M';
  const sizeBadge = `<span style="font-size:10px;font-weight:600;padding:2px 7px;border-radius:20px;color:${sizeColors[sz]};background:color-mix(in srgb, ${sizeColors[sz]} 14%, transparent);letter-spacing:.02em">${SIZE_LABELS[sz]}</span>`;

  // won badge
  const wonBadge = t.won
    ? `<span style="display:inline-flex;align-items:center;gap:3px;font-size:10px;font-weight:600;padding:2px 7px;border-radius:20px;color:var(--pur);background:color-mix(in srgb, var(--pur) 14%, transparent)">
        <svg width="9" height="9" viewBox="0 0 10 10" fill="none"><path d="M2 3h6l-.5 3.5h-5L2 3z" stroke="currentColor" stroke-width="1" stroke-linejoin="round"/><line x1="3.5" y1="7" x2="6.5" y2="7" stroke="currentColor" stroke-width="1" stroke-linecap="round"/><path d="M2 3.5C1 3.5 .8 5 2 5M8 3.5c1 0 1.2 1.5 0 1.5" stroke="currentColor" stroke-width="1"/></svg>
        Ganha</span>`
    : '';

  const editIco = `<svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M9 1.5l2.5 2.5-7.5 7.5H1.5v-2.5l7.5-7.5z" stroke="currentColor" stroke-width="1.1" stroke-linejoin="round"/></svg>`;
  const delIco  = `<svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 3.5h9M5 3.5V2h3v1.5M5 6v4M8 6v4M3 3.5l.5 7h6l.5-7" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

  return `<div class="card${done?' done-card':''}">
    <div class="card-row">
      <div class="card-body">
        <div class="title-row"><span class="card-title">${t.title}</span>${sizeBadge}${wonBadge}${alertTag}</div>
        ${t.description ? `<div class="card-desc">${t.description}</div>` : ''}
        <div class="card-meta">
          ${statusSelect}
          <div style="display:flex;align-items:center;gap:4px">
            <div class="avatars">${avs}</div>
            <span class="resp-names">${names}</span>
          </div>
          ${dueHtml}
          ${presentHtml}
        </div>
      </div>
      <div class="card-acts">
        <button class="act" onclick="openModal(${t.id})" title="Editar">${editIco}</button>
        <button class="act" onclick="delTask(${t.id})"  title="Remover">${delIco}</button>
      </div>
    </div>
  </div>`;
}

// ═══════════════════════════════════════════════════
//  TASK ACTIONS
// ═══════════════════════════════════════════════════
function setStatus(id, value) {
  const prev = tasks.find(t => t.id === id);
  if (!prev || prev.status === value) return;
  tasks = tasks.map(t => t.id === id ? {...t, status: value} : t);
  const lbl = {pendente:'Pendente','em andamento':'Em andamento',concluído:'Concluído'};
  addLog('status', `"${prev.title}" → <b>${lbl[value]}</b>`);
  persist(); render();
}

function delTask(id) {
  const t = tasks.find(x => x.id === id);
  if (!confirm(`Remover "${t?.title}"?`)) return;
  addLog('delete', `Tarefa removida: "${t?.title}"`);
  tasks = tasks.filter(x => x.id !== id);
  persist(); render();
}

// ═══════════════════════════════════════════════════
//  TASK MODAL
// ═══════════════════════════════════════════════════
function openModal(id) {
  const t = id ? tasks.find(x => x.id === id) : null;
  document.getElementById('taskModalTitle').textContent = t ? 'Editar demanda' : 'Nova demanda';
  document.getElementById('eId').value       = t ? t.id : '';
  document.getElementById('fTitle').value    = t ? t.title : '';
  document.getElementById('fDesc').value     = t ? t.description : '';
  document.getElementById('fDate').value     = t ? t.dueDate : '';
  document.getElementById('fPresent').value  = t ? (t.presentDate||'') : '';
  document.getElementById('fStatus').value   = t ? t.status : 'pendente';
  document.getElementById('fSize').value     = t ? (t.size||'M') : 'M';
  document.getElementById('fWon').checked    = t ? !!t.won : false;
  document.getElementById('fCat').innerHTML = CATS.map(c => `<option${t&&t.category===c?' selected':''}>${c}</option>`).join('');
  selectedResp = t ? [...(Array.isArray(t.responsible) ? t.responsible : [t.responsible].filter(Boolean))] : [];
  renderMulti();
  document.getElementById('taskOverlay').classList.remove('hidden');
}
function closeTask() { document.getElementById('taskOverlay').classList.add('hidden'); }

function renderMulti() {
  const wrap = document.getElementById('multiWrap');
  const drop = document.getElementById('multiDrop');
  wrap.innerHTML = selectedResp.length
    ? selectedResp.map(n => `<span class="chip">${avInits(n)} ${n.split(' ')[0]}<button class="chip-x" onclick="rmResp('${n.replace(/'/g,"\\'")}');event.stopPropagation()">×</button></span>`).join('')
    : '<span style="color:var(--txt);font-size:13px;padding:3px 2px">Selecionar responsáveis…</span>';
  drop.innerHTML = team.map(m => `<div class="mopt${selectedResp.includes(m.name)?' sel':''}" onclick="togResp('${m.name.replace(/'/g,"\\'")}')">
    <div class="mopt-check">${selectedResp.includes(m.name)?'<svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1.5 5l2.5 2.5 5-5" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>':''}</div>
    ${avHTML(m.name, 22, '')} ${m.name}
  </div>`).join('');
}
function toggleDrop() {
  const d = document.getElementById('multiDrop');
  d.className = 'multi-dropdown' + (d.classList.contains('open') ? '' : ' open');
}
function togResp(n)  { selectedResp = selectedResp.includes(n) ? selectedResp.filter(x => x !== n) : [...selectedResp, n]; renderMulti(); }
function rmResp(n)   { selectedResp = selectedResp.filter(x => x !== n); renderMulti(); }

document.addEventListener('click', e => {
  const d = document.getElementById('multiDrop');
  const w = document.getElementById('multiWrap');
  if (d && !d.contains(e.target) && w && !w.contains(e.target)) d.className = 'multi-dropdown';
});

function saveTask() {
  const title = document.getElementById('fTitle').value.trim();
  if (!title) return;
  const id = document.getElementById('eId').value;
  const task = {
    id: id ? parseInt(id) : Date.now(),
    title,
    description: document.getElementById('fDesc').value,
    category:    document.getElementById('fCat').value,
    responsible: selectedResp.length ? selectedResp : [team[0]?.name || '—'],
    status:      document.getElementById('fStatus').value,
    dueDate:     document.getElementById('fDate').value,
    presentDate: document.getElementById('fPresent').value,
    size:        document.getElementById('fSize').value,
    won:         document.getElementById('fWon').checked,
  };
  if (id) {
    const old = tasks.find(t => t.id === parseInt(id));
    const changes = [];
    if (old.title !== task.title)   changes.push(`título: "${old.title}" → "${task.title}"`);
    if (old.status !== task.status) changes.push(`status: ${old.status} → ${task.status}`);
    if (old.category !== task.category) changes.push(`categoria: ${old.category} → ${task.category}`);
    if ((old.dueDate||'') !== (task.dueDate||'')) changes.push(`entrega: ${old.dueDate||'—'} → ${task.dueDate||'—'}`);
    if ((old.presentDate||'') !== (task.presentDate||'')) changes.push(`apresentação: ${old.presentDate||'—'} → ${task.presentDate||'—'}`);
    if ((old.size||'') !== (task.size||'')) changes.push(`porte: ${SIZE_LABELS[old.size]||'—'} → ${SIZE_LABELS[task.size]}`);
    if (!!old.won !== !!task.won) changes.push(`concorrência: ${task.won?'ganha':'não ganha'}`);
    if (JSON.stringify(old.responsible) !== JSON.stringify(task.responsible))
      changes.push(`responsáveis: ${old.responsible.join(', ')} → ${task.responsible.join(', ')}`);
    addLog('edit', `"${task.title}" editada${changes.length ? ' · '+changes.join(' · ') : ''}`);
    tasks = tasks.map(t => t.id === parseInt(id) ? task : t);
  } else {
    addLog('create', `Nova tarefa: "${task.title}" [${task.category}] · ${SIZE_LABELS[task.size]}${task.won?' · concorrência ganha':''} → ${task.responsible.join(', ')}`);
    tasks = [...tasks, task];
  }
  persist(); closeTask(); render();
}

// ═══════════════════════════════════════════════════
//  TEAM MODAL
// ═══════════════════════════════════════════════════
function openTeam() {
  draftTeam = team.map(m => ({...m}));
  renderTeamList();
  document.getElementById('teamOverlay').classList.remove('hidden');
}
function closeTeam() { document.getElementById('teamOverlay').classList.add('hidden'); }

function renderTeamList() {
  document.getElementById('teamList').innerHTML = draftTeam.map((m, i) => `
    <div class="team-item">
      <div style="cursor:pointer;flex-shrink:0" onclick="openAvEdit(${i},'team')">
        ${m.svg
          ? `<div style="width:32px;height:32px;border-radius:50%;background:${m.color};overflow:hidden;border:1.5px solid var(--bord)"><img src="${m.svg}" style="width:100%;height:100%;object-fit:cover"/></div>`
          : `<div style="width:32px;height:32px;border-radius:50%;background:${m.color};display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#fff;border:1.5px solid var(--bord)">${avInits(m.name)}</div>`}
      </div>
      <input type="text" value="${m.name.replace(/"/g,'&quot;')}" oninput="draftTeam[${i}].name=this.value" placeholder="Nome"/>
      <button class="team-del" onclick="draftTeam.splice(${i},1);renderTeamList()">×</button>
    </div>`).join('');
}

function addMember() {
  draftTeam.push({name:'', color:PALETTE[draftTeam.length % PALETTE.length], svg:null, startDate:'', role:''});
  renderTeamList();
  setTimeout(() => { const ins = document.querySelectorAll('.team-item input'); if (ins.length) ins[ins.length-1].focus(); }, 50);
}

function saveTeam() {
  const newTeam  = draftTeam.map(m => ({...m, name:m.name.trim()})).filter(m => m.name);
  const added    = newTeam.filter(m => !team.find(o => o.name === m.name)).map(m => m.name);
  const removed  = team.filter(o => !newTeam.find(m => m.name === o.name)).map(m => m.name);
  if (added.length)   addLog('team', `Membro(s) adicionado(s): ${added.join(', ')}`);
  if (removed.length) addLog('team', `Membro(s) removido(s): ${removed.join(', ')}`);
  team = newTeam;
  persist(); closeTeam(); catOpen = true; respOpen = true; buildFilters(); render();
}

// ═══════════════════════════════════════════════════
//  AVATAR EDITOR
// ═══════════════════════════════════════════════════
function openAvForName(name) {
  const idx = team.findIndex(m => m.name === name);
  if (idx < 0) return;
  openAvEdit(idx, 'direct');
}

function openAvEdit(idx, ctx) {
  editingAvIdx  = idx;
  avEditContext = ctx;
  const m = (ctx === 'team' ? draftTeam : team)[idx];
  avDraftColor  = m.color;
  avDraftSvg    = m.svg || null;
  document.getElementById('colorSwatches').innerHTML = PALETTE.map(c =>
    `<div class="swatch${avDraftColor===c?' active':''}" style="background:${c}" onclick="setAvColor('${c}')"></div>`).join('');
  document.getElementById('customColor').value = avDraftColor;
  document.getElementById('removeSvgBtn').style.display = avDraftSvg ? '' : 'none';
  updateAvPreview();
  document.getElementById('avOverlay').classList.remove('hidden');
}
function closeAv() { document.getElementById('avOverlay').classList.add('hidden'); }

function setAvColor(c) {
  avDraftColor = c;
  document.getElementById('customColor').value = c;
  document.querySelectorAll('.swatch').forEach(s => s.classList.toggle('active', s.style.background === c));
  updateAvPreview();
}
function updateAvPreview() {
  const m  = (avEditContext === 'team' ? draftTeam : team)[editingAvIdx];
  const el = document.getElementById('avPreviewLg');
  el.style.background = avDraftColor;
  if (avDraftSvg) { el.innerHTML = `<img src="${avDraftSvg}" style="width:100%;height:100%;object-fit:cover"/>`; }
  else { el.style.fontSize = '28px'; el.style.fontWeight = '700'; el.innerHTML = avInits(m.name); }
}
function removeAvSvg() { avDraftSvg = null; document.getElementById('removeSvgBtn').style.display = 'none'; updateAvPreview(); }
function handleSvg(e) {
  const f = e.target.files[0]; if (!f) return;
  const reader = new FileReader();
  reader.onload = ev => { avDraftSvg = ev.target.result; document.getElementById('removeSvgBtn').style.display = ''; updateAvPreview(); };
  reader.readAsDataURL(f);
}
function saveAv() {
  const arr = avEditContext === 'team' ? draftTeam : team;
  arr[editingAvIdx] = {...arr[editingAvIdx], color:avDraftColor, svg:avDraftSvg};
  if (avEditContext === 'direct') {
    persist(); buildFilters(); render();
    if (!document.getElementById('profilesOverlay').classList.contains('hidden')) renderProfiles();
    if (!document.getElementById('workloadOverlay').classList.contains('hidden')) renderWorkload();
  } else { renderTeamList(); }
  closeAv();
}

// ═══════════════════════════════════════════════════
//  LOG
// ═══════════════════════════════════════════════════
const LOG_COLORS = {create:'var(--grn)', edit:'var(--acc)', status:'var(--org)', delete:'var(--red)', team:'var(--pur)'};

function addLog(type, msg) {
  const now = new Date();
  const ts  = now.toLocaleDateString('pt-BR',{day:'2-digit',month:'2-digit'}) + ' ' + now.toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'});
  log.unshift({type, msg, ts});
  if (log.length > 200) log = log.slice(0, 200);
  const btn = document.getElementById('btnLog');
  if (btn) btn.style.color = 'var(--acc)';
}
function openLog() {
  const list = document.getElementById('logList');
  document.getElementById('logCount').textContent = log.length ? `${log.length} entradas` : '';
  list.innerHTML = log.length
    ? log.map(e => `<div class="log-entry">
        <div class="log-dot" style="background:${LOG_COLORS[e.type]||'var(--txt)'}"></div>
        <div class="log-msg">${e.msg}</div>
        <div class="log-ts">${e.ts}</div>
      </div>`).join('')
    : '<div class="log-empty">Nenhuma atividade registrada ainda.</div>';
  document.getElementById('logOverlay').classList.remove('hidden');
}
function closeLog() { document.getElementById('logOverlay').classList.add('hidden'); }
function clearLog() {
  if (!confirm('Limpar todo o histórico?')) return;
  log = []; persist();
  document.getElementById('logList').innerHTML = '<div class="log-empty">Nenhuma atividade registrada ainda.</div>';
  document.getElementById('logCount').textContent = '';
  const btn = document.getElementById('btnLog');
  if (btn) btn.style.color = '';
}

// ═══════════════════════════════════════════════════
//  PROFILE CARDS
// ═══════════════════════════════════════════════════
function memberStats(name) {
  const mine = tasks.filter(t => (t.responsible||[]).includes(name));
  const active = mine.filter(t => t.status !== 'concluído');
  const done   = mine.filter(t => t.status === 'concluído');
  const won    = mine.filter(t => t.won);
  const weight = active.reduce((s,t) => s + (SIZE_WEIGHT[t.size]||2), 0);
  return {total:mine.length, active:active.length, done:done.length, won:won.length, weight};
}

function openProfiles() {
  renderProfiles();
  document.getElementById('profilesOverlay').classList.remove('hidden');
}
function closeProfiles() { document.getElementById('profilesOverlay').classList.add('hidden'); }

function renderProfiles() {
  document.getElementById('profilesGrid').innerHTML = team.map((m, i) => {
    const st = memberStats(m.name);
    const avatarBig = m.svg
      ? `<div style="width:48px;height:48px;border-radius:50%;background:${m.color};overflow:hidden;flex-shrink:0"><img src="${m.svg}" style="width:100%;height:100%;object-fit:cover"/></div>`
      : `<div style="width:48px;height:48px;border-radius:50%;background:${m.color};display:flex;align-items:center;justify-content:center;font-size:17px;font-weight:700;color:#fff;flex-shrink:0">${avInits(m.name)}</div>`;
    return `<div style="background:var(--surf2);border:.5px solid var(--bord);border-radius:14px;padding:16px">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
        <div style="cursor:pointer" onclick="openAvForNameFromProfile('${m.name.replace(/'/g,"\\'")}')">${avatarBig}</div>
        <div style="min-width:0">
          <div style="font-size:15px;font-weight:600;color:var(--tx);letter-spacing:-.01em">${m.name}</div>
          <input type="text" value="${(m.role||'').replace(/"/g,'&quot;')}" placeholder="Cargo / função"
            oninput="team[${i}].role=this.value" onblur="persist()"
            style="width:100%;background:none;border:none;outline:none;font-size:12px;color:var(--txs);font-family:inherit;padding:2px 0;margin-top:1px"/>
        </div>
      </div>

      <div style="display:flex;flex-direction:column;gap:8px">
        <div>
          <div style="font-size:11px;color:var(--txs);margin-bottom:5px">Data de início</div>
          <input type="date" value="${m.startDate||''}"
            onchange="team[${i}].startDate=this.value;persist();renderProfiles()"
            style="width:100%;background:var(--surf);border:.5px solid var(--bord);border-radius:8px;outline:none;font-size:12px;color:var(--tx);font-family:inherit;padding:7px 10px"/>
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between;background:color-mix(in srgb, var(--acc) 10%, transparent);border:.5px solid color-mix(in srgb, var(--acc) 25%, transparent);border-radius:9px;padding:8px 12px">
          <span style="font-size:12px;color:var(--txs);display:flex;align-items:center;gap:5px">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" stroke="currentColor" stroke-width="1"/><path d="M6 3v3l2 1" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Tempo de casa
          </span>
          <span style="font-size:13px;font-weight:700;color:var(--acc);letter-spacing:-.01em">${calcTenure(m.startDate)}</span>
        </div>
        <div style="height:.5px;background:var(--bord);margin:2px 0"></div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
          ${profileMetric('Ativas', st.active, 'var(--org)')}
          ${profileMetric('Concluídas', st.done, 'var(--grn)')}
          ${profileMetric('Total', st.total, 'var(--tx)')}
          ${profileMetric('Concorrências', st.won, 'var(--pur)')}
        </div>
      </div>
    </div>`;
  }).join('');
}

function profileMetric(label, val, color) {
  return `<div style="background:var(--surf);border-radius:9px;padding:8px 10px">
    <div style="font-size:19px;font-weight:700;color:${color};letter-spacing:-.03em;line-height:1">${val}</div>
    <div style="font-size:10px;color:var(--txt);margin-top:2px;letter-spacing:.02em">${label}</div>
  </div>`;
}

// avatar edit from profile card → edit live team + refresh profiles
function openAvForNameFromProfile(name) {
  const idx = team.findIndex(m => m.name === name);
  if (idx < 0) return;
  openAvEdit(idx, 'direct');
}

// ═══════════════════════════════════════════════════
//  WORKLOAD DASHBOARD
// ═══════════════════════════════════════════════════
function openWorkload() {
  renderWorkload();
  document.getElementById('workloadOverlay').classList.remove('hidden');
}
function closeWorkload() { document.getElementById('workloadOverlay').classList.add('hidden'); }

function renderWorkload() {
  const rows = team.map(m => {
    const st = memberStats(m.name);
    return {name:m.name, color:m.color, svg:m.svg, val: st.active};
  }).sort((a,b) => b.val - a.val);

  const max = Math.max(1, ...rows.map(r => r.val));
  const avg = rows.reduce((s,r) => s + r.val, 0) / (rows.length || 1);

  // heat color: green (light) → orange → red (heavy) based on ratio to max
  function heatColor(ratio) {
    if (ratio >= 0.85) return 'var(--red)';
    if (ratio >= 0.55) return 'var(--org)';
    if (ratio >= 0.30) return '#F9CA24';
    return 'var(--grn)';
  }

  document.getElementById('workloadBars').innerHTML = rows.map(r => {
    const ratio = r.val / max;
    const pct = Math.round(ratio * 100);
    const color = heatColor(ratio);
    const av = r.svg
      ? `<div style="width:26px;height:26px;border-radius:50%;background:${r.color};overflow:hidden;flex-shrink:0"><img src="${r.svg}" style="width:100%;height:100%;object-fit:cover"/></div>`
      : `<div style="width:26px;height:26px;border-radius:50%;background:${r.color};display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:700;color:#fff;flex-shrink:0">${avInits(r.name)}</div>`;
    return `<div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
      ${av}
      <div style="flex:1;min-width:0">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px">
          <span style="font-size:12px;color:var(--tx);font-weight:500">${r.name.split(' ')[0]}</span>
          <span style="font-size:12px;color:${color};font-weight:700">${r.val}</span>
        </div>
        <div style="height:8px;background:var(--surf2);border-radius:5px;overflow:hidden">
          <div style="height:100%;width:${pct}%;background:${color};border-radius:5px;transition:width .4s cubic-bezier(.4,0,.2,1)"></div>
        </div>
      </div>
    </div>`;
  }).join('') + `
    <div style="display:flex;align-items:center;margin-top:16px;padding-top:14px;border-top:.5px solid var(--bord);font-size:11px;color:var(--txt)">
      <span style="margin-left:auto">Média: ${avg.toFixed(1)} demandas ativas</span>
    </div>`;
}

// ═══════════════════════════════════════════════════
//  TUTORIAL
// ═══════════════════════════════════════════════════
function openTut()  { document.getElementById('tutOverlay').classList.remove('hidden'); }
function closeTut() { document.getElementById('tutOverlay').classList.add('hidden'); }

// ═══════════════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  if (!isFirebaseConfigured()) {
    document.getElementById('setupScreen').classList.remove('hidden');
  } else {
    document.getElementById('setupScreen').classList.add('hidden');
    load();
  }
});
