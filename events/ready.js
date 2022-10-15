let civList = {

    1 : "Австралия",
    2 : "Америка-ПР",
    3 : "Америка-МВ",
    4 : "Англия",
    5 : "Аравия",
    6 : "Ацтеки",
    7 : "Бразилия",
    8 : "Вавилон",
    9 : "Венгрия",
    10 : "Византия",
    11 : "Вьетнам",
    12 : "Галлы",
    13 : "Германия",
    14 : "Греция-П",
    15 : "Греция-Г",
    16 : "Грузия",
    17 : "Египет",
    18 : "Зулусы",
    19 : "Индия-Г",
    20 : "Индия-Ч",
    21 : "Индонезия",
    22 : "Инки",
    23 : "Канада",
    24 : "Китай-Х",
    25 : "Китай-Ц",
    26 : "Колумбия",
    27 : "Конго",
    28 : "Корея",
    29 : "Кри",
    30 : "Кхмеры",
    31 : "Майя",
    32 : "Македония",
    33 : "Мали",
    34 : "Маори",
    35 : "Монголия-Ч",
    36 : "Монголия-Х",
    37 : "Мапуче",
    38 : "Нидерланды",
    39 : "Норвегия",
    40 : "Нубия",
    41 : "Оттоманы",
    42 : "Персия",
    43 : "Польша",
    44 : "Португалия",
    45 : "Рим",
    46 : "Россия",
    47 : "Скифия",
    48 : "Финикия",
    49 : "Франция-В",
    50 : "Франция-Ч",
    51 : "Швеция",
    52 : "Шотландия",
    53 : "Шумеры",
    54 : "Эфиопия",
    55 : "Япония",
    56 : "Испания",
    57 : "Англия-А",
    58 : "Франция-А"
}

let civListArray = Object.values(civList);
let civListArr = civListArray.map(item => item.toLowerCase());

civList = {

    1 : "<:Australia:1009996377452982393> Australia",
    2 : "<:AmericaBM:1009978334131785788> America-BM",
    3 : "<:AmericaRR:1009978654215897109> America-RR",
    4 : "<:EnglandVictoria:1009978682510692373> England-Victoria",
    5 : "<:Arabia:1009978656854114394> Arabia",
    6 : "<:Aztec:1009978658909343744> Aztec",
    7 : "<:Brazil:1009978660922609695> Brazil",
    8 : "<:Babylon:1009996369517359185> Babylon",
    9 : "<:Hungary:1009978703788388412> Hungary",
    10 : "<:Byzantine:1009978663648886804> Byzantium",
    11 : "<:Vietnam:1009994196385546280> Vietnam",
    12 : "<:Ghaul:1009978697383690262> Gaul",
    13 : "<:Germany:1009978695101993120> Germany",
    14 : "<:GreecePericle:1009978701783498802> Greece-Pericle",
    15 : "<:GreeceGorgo:1009978699191435305> Greece-Gorgo",
    16 : "<:Georgia:1009978691914305706> Georgia",
    17 : "<:Egypt:1009978677355876383> Egypt",
    18 : "<:Zulu:1009994202572140595> Zulu",
    19 : "<:India_Ghandi:1009978710272778342> India-Ghandi",
    20 : "<:India_Chandragupta:1009978708465025024> India-Chandragupta ",
    21 : "<:Indonesia:1009978713842135060> Indonesia",
    22 : "<:Inca:1009978706221084752> Inca",
    23 : "<:Canada:1009978666001903656> Canada",
    24 : "<:ChinaKubilai:1009978668006772798> China-Kublai",
    25 : "<:ChinaQ:1009978669969719387> China-Qin-Shi",
    26 : "<:GranColumbia:1009996372210090014> Gran-Columbia",
    27 : "<:Kongo:1009978720641105920> Kongo",
    28 : "<:Korea:1009978722734055547> Korea",
    29 : "<:Cree:1009978672519843890> Cree",
    30 : "<:Khmer:1009978718216786031> Khmer",
    31 : "<:Maya:1009978733010096188> Maya",
    32 : "<:Macedon:1009978727003857007> Macedon",
    33 : "<:Mali:1009978729772101673> Mali",
    34 : "<:Kupe:1009978724940251238> Kupe",
    35 : "<:Mongolia_Genghis:1009978735291797646> Mongolia-Genghis",
    36 : "<:Mongolia_Kublai:1009978738299121835> Mongolia-Kublai",
    37 : "<:Mapuche:1009996366661046323> Mapuche",
    38 : "<:Dutch:1009978675506184244> Dutch",
    39 : "<:Norway:1009978740509519903> Norway",
    40 : "<:Nubia:1009978742862532670> Nubia",
    41 : "<:Ottoman:1009978744917725340> Ottoman",
    42 : "<:Persia:1009978747287523349> Persia",
    43 : "<:Poland:1009978752698163240> Poland",
    44 : "<:Portugal:1009978755030208624> Portugal",
    45 : "<:Rome:1009978757710352507> Rome",
    46 : "<:Russia:1009978760201773096> Russia",
    47 : "<:Scythia:1009978764689678346> Scythia",
    48 : "<:Phoenicia:1009978749808291851> Phoenicia",
    49 : "<:FranceM:1009996374676349029> France-Magnificent",
    50 : "<:FranceBQ:1009978686960836608> France-BQ",
    51 : "<:Sweden:1009994189473321010> Sweden",
    52 : "<:Scotland:1009978762265374822> Scotland",
    53 : "<:Sumeria:1009978769584427050> Sumeria",
    54 : "<:Ethiopia:1009978684821733376> Ethiopia",
    55 : "<:Japan:1009978715922505838> Japan",
    56 : "<:Spain:1009978766673575957> Spain",
    57 : "<:EnglandEleonora:1009978679876669521> England-Eleonora",
    58 : "<:FranceEleonora:1009978689490001980> France-Eleonora"
}


function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function DraftMode (m,indexList){
    let civDraft = [];
    let n = 0;
    while (n < m){
        const rndInt = randomIntFromInterval(1, 58)
        if (!indexList.includes(rndInt)){
            if (!civDraft.includes(rndInt)){
                civDraft.push(rndInt);
                n++;
            }}

    }

    let team1 = [];
    let team2 = [];
    let t1Count = 0;
    let t2Count = 0;
    let x = 1;

    civDraft.forEach((item) => {
        if (t1Count <= t2Count){
            if (item == "56"){
                if (team1.includes("\n<:Portugal:1009978755030208624> Portugal")){
                    team2.push("\n" + civList[item])
                    t2Count++;
                }
                else{
                    team1.push("\n" + civList[item])
                    t1Count++
                }
            }
            else if (item == "44"){
                if (team1.includes("\n<:Spain:1009978766673575957> Spain")){
                    team2.push("\n" + civList[item])
                    t2Count++
                }
                else{
                    team1.push("\n" + civList[item])
                    t1Count++
                }
            }
            else if (item == "48"){
                if (team1.includes("\n<:EnglandVictoria:1009978682510692373> England-Victoria")){
                    team2.push("\n" + civList[item])
                    t2Count++
                }
                else{
                    team1.push("\n" + civList[item])
                    t1Count++
                }
            }else if (item == "4"){
                if (team1.includes("\n<:Phoenicia:1009978749808291851> Phoenicia")){
                    team2.push("\n" + civList[item])
                    t2Count++
                }
                else{
                    team1.push("\n" + civList[item])
                    t1Count++
                }
            }else if (item == "1"){
                if (team1.includes("\n<:Indonesia:1009978713842135060> Indonesia")){
                    team2.push("\n" + civList[item])
                    t2Count++
                }
                else{
                    team1.push("\n" + civList[item])
                    t1Count++
                }
            }else if (item == "21"){
                if (team1.includes("\n<:Australia:1009996377452982393> Australia")){
                    team2.push("\n" + civList[item])
                    t2Count++
                }
                else{
                    team1.push("\n" + civList[item])
                    t1Count++
                }
            }
            else{
                team1.push("\n" + civList[item])
                t1Count++;
            }
        }


        else {
            if (item == "56"){
                if (team2.includes("\n<:Portugal:1009978755030208624> Portugal")){
                    team1.push("\n" + civList[item])
                    t1Count++;
                }
                else{
                    team2.push("\n" + civList[item])
                    t2Count++
                }
            }
            else if (item == "44"){
                if (team2.includes("\n<:Spain:1009978766673575957> Spain")){
                    team1.push("\n" + civList[item])
                    t1Count++
                }
                else{
                    team2.push("\n" + civList[item])
                    t2Count++
                }
            }
            else if (item == "48"){
                if (team2.includes("\n<:EnglandVictoria:1009978682510692373> England-Victoria")){
                    team1.push("\n" + civList[item])
                    t1Count++
                }
                else{
                    team2.push("\n" + civList[item])
                    t2Count++
                }

            }else if (item == "4"){
                if (team2.includes("\n<:Phoenicia:1009978749808291851> Phoenicia")){
                    team1.push("\n" + civList[item])
                    t1Count++
                }
                else{
                    team2.push("\n" + civList[item])
                    t2Count++
                }
            }else if (item == "1"){
                if (team2.includes("\n<:Indonesia:1009978713842135060> Indonesia")){
                    team1.push("\n" + civList[item])
                    t1Count++
                }
                else{
                    team2.push("\n" + civList[item])
                    t2Count++
                }
            }else if (item == "21"){
                if (team2.includes("\n<:Australia:1009996377452982393> Australia")){
                    team1.push("\n" + civList[item])
                    t1Count++
                }
                else{
                    team2.push("\n" + civList[item])
                    t2Count++
                }
            }
            else{
                team2.push("\n" + civList[item])
                t2Count++;
            }
        }

    })

    let finalDraft = [team1,team2]
    return finalDraft

}

let words = ['!draft', 'Персия', 'Япония', 'Мали', 'Конго'];
console.log (...words)
if (words.includes('!draft')){
    let m = 58;
    let bannedCivs = [];

    words.forEach((item) => {
            if (civListArr.includes(item.toLowerCase())) {
                bannedCivs.push(item);
                m--;
            }
        else if (civListArr.includes(item.toLowerCase())){
            bannedCivs.push(item);
            m--;
        }
    })

    let indexNumber = [];
    bannedCivs.forEach((item) => {
        indexNumber.push(civListArr.indexOf(item.toLowerCase()) + 1)
    })

    let finalDraft = DraftMode(m,indexNumber);
    let team1 = finalDraft[0];
    let team2 = finalDraft[1];
    // message.channel.send("Забаненные цивилизации :" + bannedCivs);
    // message.channel.send("Команда 1: " + team1.sort().join(""))
    // message.channel.send("Команда 2: " + team2.sort().join(""))
}