const Keys= {
    drink: {
        biere:{
               guiness : [
                    {name:'Petite Guiness'},{code: 'pg',stock: 35, prix:1000},
                    {name:'Grande Guiness'},{code: 'gg',stock: 1, prix:1500},
                    {name:'Ice Black'},{code: 'ib',stock: 13, prix:1000},
                    {name:'Ice Ananas'},{code: 'ia',stock: 16, prix:1000},
                    {name:'Smooth'},{code: 'sm',stock: 6, prix:1000},
                    {name:'Harp'},{code: 'hrp',stock: 4, prix:1000},
                    {name:'Origin'},{code: 'og',stock: 4, prix:1000},
                    {name:'Malta'},{code: 'mlta',stock: 15, prix:1000},
                ],
              brasserie : [
                    {name:'Tonic'},{code: 'tc',stock: 18, prix:1000},
                    {name:'Beaufort Ordinaire'},{code: 'bo',stock: 6, prix:1000},
                    {name:'Beaufort Light'},{code: 'bl',stock: 6, prix:1000},
                    {name:'Beaufort Tango'},{code: 'bt',stock: 6, prix:1000},
                    {name:'33 Export'},{code: 'exp',stock: 6, prix:1000},
                    {name:'Castel'},{code: 'cast',stock: 3, prix:1000},
                    {name:'Chill'},{code: 'chl',stock: 7, prix:1000},
                    {name:'Soda'},{code: 'sda',stock: 4, prix:1000},
                    {name:'Booster'},{code: 'bster',stock: 4, prix:1000},
                    {name:'Mutzig'},{code: 'mtz',stock: 4, prix:1000},
                    {name:'UCB'},{code: 'ucb',stock: 4, prix:1000},
                    {name:'Magnan'},{code: 'mgn',stock: 4, prix:1000},
                ],
                ucb : [
                    {name:'Kadji'},{code: 'kj',stock: 4, prix:1000},
                ],
        },
        top:{
            ucb:[ {name:'pamplemouse'},{code: 'pmpls',stock: 7, prix:1000},],
            brasserie:[
                {name:'Ananas'},{code: 'ananas',stock: 7, prix:1000},
                {name:'Coca Cola'},{code: 'coca',stock: 7, prix:1000},
                {name:'Orange'},{code: 'org',stock: 7, prix:1000},
                {name:'Grenadine'},{code: 'grde',stock: 7, prix:1000},
                {name:'Vimto'},{code: 'vmt',stock: 7, prix:1000},
                {name:'Djino'},{code: 'djin',stock: 7, prix:1000},
                {name:'pamplemouse'},{code: 'pmpls',stock: 7, prix:1000},
                {name:'Orangina'},{code: 'orgina',stock: 7, prix:1000},
            ],
            
    },
        etrangere: [
            {name:'Heineken'},{code: 'hnk',stock: 7, prix:1000},
            {name:'1664'},{code: 'sz',stock: 4, prix:1000},
        ],
        eau:[
            {name:'Supermont'},{code: 'sprmt',stock: 7, prix:1000},
        ],
        jus:[
            {name:'Fleur d"oseil- Folere'},{code: 'oseil',stock: 7, prix:500},
            {name:'Gingenbre'},{code: 'djindja',stock: 7, prix:500},
            {name:'Ananas'},{code: 'ananas',stock: 7, prix:1000/1500},
            {name:'Goyave'},{code: 'gyve',stock: 7, prix:1000/1500},
            {name:'Mangue'},{code: 'mgue',stock: 7, prix:1000/1500},
            {name:'Papaye'},{code: 'ppy',stock: 7, prix:1000/1500},
            {name:'Orange'},{code: 'org',stock: 7, prix:1000/1500},
            {name:'Citron'},{code: 'ctr',stock: 7, prix:1000/1500},
            {name:'Limonade'},{code: 'lmd',stock: 7, prix:1000/1500},
            {name:'Pasteque'},{code: 'pstk',stock: 7, prix:1000/1500},
        ],
        liqueur :
           { guiness :[
                    {name:'JW Black'},{code: 'blk',stock: 7, prix:25000},
                    {name:'Baileys 75 CL'},{code: 'blk',stock: 7, prix:15000},
                    {name:'Baileys Delight'},{code: 'blk',stock: 7, prix:15000},
                    {name:'J&B 75 Cl'},{code: 'jnb',stock: 7, prix:15000},
                    {name:'JW Red 75 CL'},{code: 'red',stock: 7, prix:15000},
                    {name:'JW Platinum'},{code: 'pltnm ',stock: 7, prix:90000},
                    {name:'JW Gold Reserved '},{code: 'gld',stock: 7, prix:70000},
                    {name:'DTown-Singleton'},{code: 'sglt',stock: 7, prix:35000},
                    {name:'Zapaca'},{code: 'zpca',stock: 7, prix:90000},
                    {name:'Cardhuc'},{code: 'crdc',stock: 7, prix:50000},
                    {name:'Blue Label'},{code: 'blue-lbl',stock: 7, prix:20000},
                    {name:'Ciroc'},{code: 'crc',stock: 7, prix:35000},
                    {name:'Black & White '},{code: 'blk-white',stock: 7, prix:15000},
                    {name:'Gordon Gin Dry'},{code: 'gin',stock: 7, prix:15000},
                    {name:'Tanqueray'},{code: 'tqr',stock: 7, prix:25000},
                    {name:'White Horse'},{code: 'w-hrs',stock: 7, prix:15000},
                    {name:'VAT 69'},{code: 'vat',stock: 7, prix:15000},
                    {name:'Dimple '},{code: 'dmpl',stock: 7, prix:50000},
                    {name:'Captain Morgan'},{code: 'mrg',stock: 7, prix:15000},
                    {name:'Smirnoff Red '},{code: 'smr-red',stock: 7, prix:15000},
                    {name:'Smirnoff  Black'},{code: 'smr-blk',stock: 7, prix:15000},
                    {name:'Captain Morgan'},{code: 'mrg',stock: 7, prix:15000},
                    {name:'Green Label'},{code: 'grn-lbl',stock: 7, prix:70000},
                    {name:'Guiness  Triple Black'},{code: 'gns-triple-blk',stock: 7, prix:15000},
                ]
            },
        vin: [],
    },
    pdj:{
        etranger:[
            {name:'Classique'},{code: 'clsq',stock: 7, prix:1000,description:'Brioche + Tartine + Boisson chaude'},
            {name:'Continental'},{code: 'cntl',stock: 7, prix:1500,description:'classique + Omelette '},
            {name:'Chapallo'},{code: 'chaplo',stock: 7, prix:2000,description:'continental + Boissoon. froide ou fruits'},
            {name:'5etoiles'},{code: 'star',stock: 7, prix:3000,description:'Chapallo + Crudites '},
            {name:'Classique'},{code: 'clsq',stock: 7, prix:1000,description:'Brioche + Tartine + Boisson chaude'},
            {name:'Classique'},{code: 'clsq',stock: 7, prix:1000,description:'Brioche + Tartine + Boisson chaude'},
            {name:'Classique'},{code: 'clsq',stock: 7, prix:1000,description:'Brioche + Tartine + Boisson chaude'},
            {name:'Classique'},{code: 'clsq',stock: 7, prix:1000,description:'Brioche + Tartine + Boisson chaude'},
            {name:'Classique'},{code: 'clsq',stock: 7, prix:1000,description:'Brioche + Tartine + Boisson chaude'},
        ],
        local:[
            {name:'Beignets-Haricots-Bouillie'},{code: 'bhb',stock: 7, prix:500,description:'Beignets + Haricot + Bouilie'},
            {name:'Sapghetti Saute'},{code: 'spgt-ste',stock: 7, prix:600,description:'Spaghetti saute + pain'},
            {name:'Puree d"Avocat'},{code: 'pree-avcat',stock: 7, prix:600,description:'Puree d"avocat + pain'},
            {name:'Omelette Spaghetti garnie'},{code: 'omelette',stock: 7, prix:600,description:'Omelette + Spaghetti/haricot'},
            {name:'Bouillon'},{code: 'clsq',stock: 7, prix:1000,description:'Bouillon de Pattes de Boeuf ou Poisson'},
            {name:'Classique'},{code: 'clsq',stock: 7, prix:1000,description:'Brioche + Tartine + Boisson chaude'},
            {name:'Classique'},{code: 'clsq',stock: 7, prix:1000,description:'Brioche + Tartine + Boisson chaude'},
        ],
        boissonsChaude: [
            {name:'Caféasasdasdsa   '},{code: 'kfe',stock: 7, prix:500,description:'Brioche + Tartine + Boisson chaude'},
            {name:'Nescafe'},{code: 'nskf',stock: 7, prix:500,description:'Brioche + Tartine + Boisson chaude'},
            {name:'Lait'},{code: 'lait',stock: 7, prix:500,description:'Brioche + Tartine + Boisson chaude'},
            {name:'Chocolat'},{code: 'chlt',stock: 7, prix:500,description:'Ovaltine /Matinal'},
        ],
        infusion:[
            {name:'The'},{code: 'T',stock: 7, prix:500,description:'The menthe ou autres....'},
            {name:'Tisane'},{code: 'Tsane',stock: 7, prix:500,description:'Tisane'},
            {name:'Bantou'},{code: 'btu',stock: 7, prix:500,description:'Bantou'},
        ],
    },
    plats:{
       accompagnement : [
            {name:'Riz'},{code: 'ri',stock: 7, prix:500,description:'Vapeur/Coco Channel'},
            {name:'Plantain'},{code: 'plt',stock: 7, prix:500,description:'Plantain vapeur'},
            {name:'Pommes'},{code: 'pm',stock: 7, prix:500,description:'frits/vapeurs'},
            {name:'Ignames'},{code: 'ign',stock: 7, prix:500,description:'Vapeur'},
            {name:'Patates'},{code: 'ptt',stock: 7, prix:500,description:'frits/vapeur'},
            {name:'Spaghetti'},{code: 'spgt',stock: 7, prix:500,description:'spaghetti vapeur'},
            {name:'Banane'},{code: 'bnn',stock: 7, prix:500,description:'frits/vapeur'},
       ],
       chaud:[
        {name:'Pommes viandes'},{code: 'pm-vde',stock: 7, prix:1500,description:'Pommes sautes + Viandes'},
        {name:'Macaroni plantain'},{code: 'mkroni-pltn',stock: 7, prix:1500,description:'Macaroni + Plantains'},
        {name:'Legumes sautes'},{code: 'lgm-ste',stock: 7, prix:1500,description:'Legumes sautes'},
        {name:'poisson fume'},{code: 'pssn-fme',stock: 7, prix:1500,description:'poisson fume'},
        {name:'Roti de Boeuf  a la cammerounaise'},{code: 'Rti-bf',stock: 7, prix:1500,description:'Roti de Boeuf  a la cammerounaise + Plantain/Pommes'},

        {name:'Poisson poele a la basquaise'},{code: 'pssn-bsqz',stock: 7, prix:1500-5000,description:'frits/vapeur'},
        {name:' Cotellettes de Porc à la Dijonnaise'},{code: 'ctlette-prc',stock: 7, prix:2000,description:'frits/vapeur'},
        {name:'Medaillon de Porc'},{code: 'medaillon-prc',stock: 7, prix:2000,description:' Porc + plantain/ Pommes'},
        {name:'Rognons Miboule'},{code: 'Rgn',stock: 7, prix:2000,description:' Rognon +  complements'},
        {name:'Ndole des princes Sawa'},{code: 'ndl',stock: 7, prix:2000,description:'Ndole + arachides + crevettes'},
        {name:'1/4 Poulet yassa'},{code: 'plt-yssa',stock: 7, prix:2500-3000,description:'Poulet Yassa'},
        {name:'Steak à la crême  champignons'},{code: 'crm-chmpgn',stock: 7, prix:3000,description:'Steak à la crême  champignons'},
        {name:'Gambas Chapallo'},{code: 'gms-chplo',stock: 7, prix:5000-10000,description:'Gambas Chapallo'},
        {name:'Poulet Dolce Gabana'},{code: 'gms-chplo',stock: 7, prix:10000,description:'Gambas Chapallo'},
        ],
        traditionel:[
                {name:'Sauce jaune avec du Taro pilé'},{code: 'tro',stock: 7, prix:3500,description:'Taro Pilé + sauces Jaunes '},
                {name:'Banane malaxée aux arachides trempées'},{code: 'bnn-mlx',stock: 7, prix:1500,description:'Banane + arachides trempées '},
                {name:'Banane malaxée aux arachides grillés'},{code: 'bnn-grl',stock: 7, prix:1500,description:'Banane +  arachides grillés'},
                {name:'Sauce Mbongo Tchobi'},{code: 'mbgo',stock: 7, prix:2500,description:'Mbongo Tchobi'},
                {name:'Sauce Gombo'},{code: 'gmbo',stock: 7, prix:1500,description:'Gombo'},
                {name:'Sauce Pistache gombo'},{code: 'pstch-gmbo',stock: 7, prix:1500,description:'Pistaches + gombo'},
                {name:'Sauce Pistache'},{code: 'pstch',stock: 7, prix:2000,description:' Pistaches + ....+'},
                {name:'Couscous Djamts"eu'},{code: 'cscs-djm',stock: 7, prix:2000,description:'Couscous + Djamts"eu'},
                {name:'Macabo rapé aux arachides grillés'},{code: 'mkbo-rpe-grl',stock: 7, prix:1500,description:'Macabo rape + arachides grillés'},
                {name:'Macabo rapé aux arachides trempées'},{code: 'mkbo-rpe-trmp',stock: 7, prix:1500,description:'Macabo rape + arachides trempées'},
                {name:'Ekwang'},{code: 'ekwg',stock: 7, prix:3000,description:' Macabo + feuilles de taro'},
                {name:'Macabo malaxé au Ndole'},{code: 'mkbo-mlxe-ndl',stock: 7, prix:2500,description:'Macabo + Ndole'},
                {name:'Koki du Royaume Bamileke'},{code: 'kki',stock: 7, prix:1500,description:'Koki'},
                {name:'Tenue Militaire ou koki de Maïs'},{code: 'kki-ms',stock: 7, prix:2500,description:'Mais +  jeunes feuilles de taro'},
                {name:'Koki de Banane '},{code: 'kki-bnn',stock: 7, prix:3000,description:'Bananes + jeunes feuilles de Taro'},
                {name:'Koki de Patate'},{code: 'kki-ptt',stock: 7, prix:3000,description:'Patate + Jeunes feuilles de taro'},
                {name:'Kondre de la Royaute Bamileke'},{code: 'kndr',stock: 7, prix:2500,description:' Plantains +... '},
                {name:'Kontchap de Maïs'},{code: 'kntchp',stock: 7, prix:1500,description:' Maïs + haricots '},
                {name:'Pepe Soup aux plantains'},{code: 'pp-Pltn',stock: 7, prix:2500,description:'Plantains'},
                {name:'Pile Plantain'},{code: 'pl-pltn',stock: 7, prix:2000,description:' plantains'},
                {name:'Pile Pomme'},{code: 'pl-pm',stock: 7, prix:1500,description:'Pommes'},
                {name:'Pile patate'},{code: 'pl-ptt',stock: 7, prix:2500,description:'Patates'},
                {name:'Pile Macabo'},{code: 'pl-mkbo',stock: 7, prix:3000,description:' Macabos'},
                {name:'Pile Plantain'},{code: 'pl-pltn',stock: 7, prix:1500,description:'Pilés plantains'},
                {name:'Pepe Soup aux plantains'},{code: 'pp-Pltn',stock: 7, prix:2500,description:'Plantains'},
                {name:'Sauce Tomate'},{code: 'tmt',stock: 7, prix:2000,description:' plantains'},
                {name:'sauce d"arachide '},{code: 'archd',stock: 7, prix:1500,description:'Arachides grilles'},
            ],
                legume:[
                    {name:'Choux Facile'},{code: 'ch-fcl',stock: 7, prix:1.500,description:'Choux sautes'},
                    {name:'Choux aux arachides'},{code: 'ch-arachd',stock: 7, prix:1.500,description:'Choux + arachides grilles '},
                    {name:'Legumes Sautes'},{code: 'lgm-saut',stock: 7, prix:2.500,description:' Legumes '},
                    {name:'Eru'},{code: 'eru',stock: 7, prix:2000,description:'Eru'},
                    {name:'Ndole '},{code: 'ndl',stock: 7, prix:2500,description:'Ndole + arachides trempees'},
                    {name:'Okok sucre '},{code: 'okok-scr',stock: 7, prix:1500,description:'Okok + arachides grilles'},
                    {name:'okok salé'},{code: 'okok-sale',stock: 7, prix:1500,description:'okok + arachides trempés'},
                    {name:'Zom sautés'},{code: 'zm-saute',stock: 7, prix:2500,description:'Zom saute'},
            ],
    },
    desserts:[
        {name:'Kossan'},{code: 'ksam',stock: 7, prix:1000,description:'lait fermente'},
        {name:'Cascade de Fruits '},{code: 'cskd-frt',stock: 7, prix:1000,description:'Cascade de Fruits'},
        {name:'Farandone de fruits '},{code: 'frd-frt',stock: 7, prix:2000,description:'Farandone de Fruits'},
        {name:'Crepes'},{code: 'crp',stock: 7, prix:1000,description:'Crepes'},
        {name:'tartes'},{code: 'trte',stock: 7, prix:1000,description:'Tartes'},
        {name:'Moka'},{code: 'mk',stock: 7, prix:1000,description:'Moka'},

        {name:'Cremes'},{code: 'crm',stock: 7, prix:1000,description:'Cemes'},
        {name:'Cremes renversees au Caramel'},{code: 'crm-krml',stock: 7, prix:1000,description:' Cremes au Caramel'},
        {name:'Glaces '},{code: 'glc',stock: 7, prix:1000,description:' Chocolat / Vanille/fraise'},
        {name:'Crepes'},{code: 'crp',stock: 7, prix:1000,description:'Crepes'},
    ],
    grill:[
        {name:'Brochettes de Viandes'},{code: 'brchtte',stock: 7, prix:500,description:'Brochettes de Boeuf ou de Porc'},
        {name:'Poulet fume'},{code: 'plt-fm',stock: 7, prix:2000,description:'Poulet fume'},
        {name:'Poulet aux Champignons'},{code: 'plt-cmpgn',stock: 7, prix:10000,description:'Poulet + Champignon'},
        {name:'Poulet DG'},{code: 'plt-dg',stock: 7, prix:10000,description:'Poulet + plantain'},
        {name:'Poulet braise'},{code: 'plt-brz',stock: 7, prix:7.000,description:'Poulet braise sur charbon'},
        {name:'Poulet frit'},{code: 'plt-frit',stock: 7, prix:6.000,description:'Poulet frit a l"huile'},
        {name:'Poulet roti'},{code: 'plt-roti',stock: 7, prix:6.000,description:'Poulet roti en machine'},

    ],
    entrees:
     {   patisserie:[
            {name:'Pizza'},{code: 'pza',stock: 7, prix:1000,description:'Pizza '},
            {name:'Quiche'},{code: 'qche',stock: 7, prix:1000,description:'Quiches '},
            {name:'Hamurger'},{code: 'hmbgr',stock: 7, prix:1000,description:'Hamburger '},
            {name:'Mousse au Chocolat'},{code: 'msse-chlt',stock: 7, prix:1000,description:'Mousse chocolat '},
        ],
       
        oeuvre: [
            {name:'Oeufs  Mimosa'},{code: 'mimz',stock: 7, prix:1000,description:' Oeuf Bouillie accompagne des vegetaux'},
            {name:'Assiettes de crudites'},{code: 'crdt',stock: 7, prix:1000,description:' Salade + tomate +... '},
            {name:'Carottes Hawaienne'},{code: 'hawai',stock: 7, prix:1000,description:'Carottes rapes +.... '},
            {name:'Salade Mexicaine'},{code: 'mexicaine',stock: 7, prix:1500,description:'Salade + ... '},
            {name:'Cocktail d"avocat'},{code: 'cock',stock: 7, prix:2000,description:'Avocats + ... '},
            {name:'Salade Mexicaine'},{code: 'mexicaine',stock: 7, prix:1500,description:'Salade + ... '},
            {name:'Farci de Tomate'},{code: 'fr6',stock: 7, prix:1000,description:'Tomate + Oignons'},
            {name:'Macedoine'},{code: 'hawai',stock: 7, prix:1000,description:'Mais + ...+.... '},
            ]
        ,
        }
}