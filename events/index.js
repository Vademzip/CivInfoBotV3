const {ThreadChannel, ThreadManager, SnowflakeUtil, User} = require("discord.js");
let FFAVanillaCount = 1016;
let FFABBGCount = 231;
let TeamsCount = 150;
let mode = 0;
let lastMessage = "hello";
let mentionArray = [];


let civList = {

    1: "Австралия",
    2: "Америка-ПР",
    3: "Америка-МВ",
    4: "Англия",
    5: "Аравия",
    6: "Ацтеки",
    7: "Бразилия",
    8: "Вавилон",
    9: "Венгрия",
    10: "Византия",
    11: "Вьетнам",
    12: "Галлы",
    13: "Германия",
    14: "Греция-П",
    15: "Греция-Г",
    16: "Грузия",
    17: "Египет",
    18: "Зулусы",
    19: "Индия-Г",
    20: "Индия-Ч",
    21: "Индонезия",
    22: "Инки",
    23: "Канада",
    24: "Китай-Х",
    25: "Китай-Ц",
    26: "Колумбия",
    27: "Конго",
    28: "Корея",
    29: "Кри",
    30: "Кхмеры",
    31: "Майя",
    32: "Македония",
    33: "Мали",
    34: "Маори",
    35: "Монголия-Ч",
    36: "Монголия-Х",
    37: "Мапуче",
    38: "Нидерланды",
    39: "Норвегия",
    40: "Нубия",
    41: "Оттоманы",
    42: "Персия",
    43: "Польша",
    44: "Португалия",
    45: "Рим",
    46: "Россия",
    47: "Скифия",
    48: "Финикия",
    49: "Франция-В",
    50: "Франция-Ч",
    51: "Швеция",
    52: "Шотландия",
    53: "Шумеры",
    54: "Эфиопия",
    55: "Япония",
    56: "Испания",
    57: "Англия-А",
    58: "Франция-А"
}

let civListArray = Object.values(civList);
let civListArr = civListArray.map(item => item.toLowerCase());

civList = {

    1: "<:Australia:1009996377452982393> Australia",
    2: "<:AmericaBM:1009978334131785788> America-BM",
    3: "<:AmericaRR:1009978654215897109> America-RR",
    4: "<:EnglandVictoria:1009978682510692373> England-Victoria",
    5: "<:Arabia:1009978656854114394> Arabia",
    6: "<:Aztec:1009978658909343744> Aztec",
    7: "<:Brazil:1009978660922609695> Brazil",
    8: "<:Babylon:1009996369517359185> Babylon",
    9: "<:Hungary:1009978703788388412> Hungary",
    10: "<:Byzantine:1009978663648886804> Byzantium",
    11: "<:Vietnam:1009994196385546280> Vietnam",
    12: "<:Ghaul:1009978697383690262> Gaul",
    13: "<:Germany:1009978695101993120> Germany",
    14: "<:GreecePericle:1009978701783498802> Greece-Pericle",
    15: "<:GreeceGorgo:1009978699191435305> Greece-Gorgo",
    16: "<:Georgia:1009978691914305706> Georgia",
    17: "<:Egypt:1009978677355876383> Egypt",
    18: "<:Zulu:1009994202572140595> Zulu",
    19: "<:India_Ghandi:1009978710272778342> India-Ghandi",
    20: "<:India_Chandragupta:1009978708465025024> India-Chandragupta ",
    21: "<:Indonesia:1009978713842135060> Indonesia",
    22: "<:Inca:1009978706221084752> Inca",
    23: "<:Canada:1009978666001903656> Canada",
    24: "<:ChinaKubilai:1009978668006772798> China-Kublai",
    25: "<:ChinaQ:1009978669969719387> China-Qin-Shi",
    26: "<:GranColumbia:1009996372210090014> Gran-Columbia",
    27: "<:Kongo:1009978720641105920> Kongo",
    28: "<:Korea:1009978722734055547> Korea",
    29: "<:Cree:1009978672519843890> Cree",
    30: "<:Khmer:1009978718216786031> Khmer",
    31: "<:Maya:1009978733010096188> Maya",
    32: "<:Macedon:1009978727003857007> Macedon",
    33: "<:Mali:1009978729772101673> Mali",
    34: "<:Kupe:1009978724940251238> Kupe",
    35: "<:Mongolia_Genghis:1009978735291797646> Mongolia-Genghis",
    36: "<:Mongolia_Kublai:1009978738299121835> Mongolia-Kublai",
    37: "<:Mapuche:1009996366661046323> Mapuche",
    38: "<:Dutch:1009978675506184244> Dutch",
    39: "<:Norway:1009978740509519903> Norway",
    40: "<:Nubia:1009978742862532670> Nubia",
    41: "<:Ottoman:1009978744917725340> Ottoman",
    42: "<:Persia:1009978747287523349> Persia",
    43: "<:Poland:1009978752698163240> Poland",
    44: "<:Portugal:1009978755030208624> Portugal",
    45: "<:Rome:1009978757710352507> Rome",
    46: "<:Russia:1009978760201773096> Russia",
    47: "<:Scythia:1009978764689678346> Scythia",
    48: "<:Phoenicia:1009978749808291851> Phoenicia",
    49: "<:FranceM:1009996374676349029> France-Magnificent",
    50: "<:FranceBQ:1009978686960836608> France-BQ",
    51: "<:Sweden:1009994189473321010> Sweden",
    52: "<:Scotland:1009978762265374822> Scotland",
    53: "<:Sumeria:1009978769584427050> Sumeria",
    54: "<:Ethiopia:1009978684821733376> Ethiopia",
    55: "<:Japan:1009978715922505838> Japan",
    56: "<:Spain:1009978766673575957> Spain",
    57: "<:EnglandEleonora:1009978679876669521> England-Eleonora",
    58: "<:FranceEleonora:1009978689490001980> France-Eleonora"
}


function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function DraftMode(m, indexList) {
    let civDraft = [];
    let n = 0;
    while (n < m) {
        const rndInt = randomIntFromInterval(1, 58)
        if (!indexList.includes(rndInt)) {
            if (!civDraft.includes(rndInt)) {
                civDraft.push(rndInt);
                n++;
            }
        }

    }

    let team1 = [];
    let team2 = [];
    let t1Count = 0;
    let t2Count = 0;
    let x = 1;

    civDraft.forEach((item) => {
        if (t1Count <= t2Count) {
            if (item == "56") {
                if (team1.includes("\n<:Portugal:1009978755030208624> Portugal")) {
                    team2.push("\n" + civList[item])
                    t2Count++;
                } else {
                    team1.push("\n" + civList[item])
                    t1Count++
                }
            } else if (item == "44") {
                if (team1.includes("\n<:Spain:1009978766673575957> Spain")) {
                    team2.push("\n" + civList[item])
                    t2Count++
                } else {
                    team1.push("\n" + civList[item])
                    t1Count++
                }
            } else if (item == "48") {
                if (team1.includes("\n<:EnglandVictoria:1009978682510692373> England-Victoria")) {
                    team2.push("\n" + civList[item])
                    t2Count++
                } else {
                    team1.push("\n" + civList[item])
                    t1Count++
                }
            } else if (item == "4") {
                if (team1.includes("\n<:Phoenicia:1009978749808291851> Phoenicia")) {
                    team2.push("\n" + civList[item])
                    t2Count++
                } else {
                    team1.push("\n" + civList[item])
                    t1Count++
                }
            } else if (item == "1") {
                if (team1.includes("\n<:Indonesia:1009978713842135060> Indonesia")) {
                    team2.push("\n" + civList[item])
                    t2Count++
                } else {
                    team1.push("\n" + civList[item])
                    t1Count++
                }
            } else if (item == "21") {
                if (team1.includes("\n<:Australia:1009996377452982393> Australia")) {
                    team2.push("\n" + civList[item])
                    t2Count++
                } else {
                    team1.push("\n" + civList[item])
                    t1Count++
                }
            } else if (item == "35") {
                if (team1.includes("\n<:FranceBQ:1009978686960836608> France-BQ")) {
                    team2.push("\n" + civList[item])
                    t2Count++
                } else {
                    team1.push("\n" + civList[item])
                    t1Count++
                }
            } else if (item == "50") {
                if (team1.includes("\n<:Mongolia_Genghis:1009978735291797646> Mongolia-Genghis")) {
                    team2.push("\n" + civList[item])
                    t2Count++
                } else {
                    team1.push("\n" + civList[item])
                    t1Count++
                }
            } else {
                team1.push("\n" + civList[item])
                t1Count++;
            }
        } else {
            if (item == "56") {
                if (team2.includes("\n<:Portugal:1009978755030208624> Portugal")) {
                    team1.push("\n" + civList[item])
                    t1Count++;
                } else {
                    team2.push("\n" + civList[item])
                    t2Count++
                }
            } else if (item == "44") {
                if (team2.includes("\n<:Spain:1009978766673575957> Spain")) {
                    team1.push("\n" + civList[item])
                    t1Count++
                } else {
                    team2.push("\n" + civList[item])
                    t2Count++
                }
            } else if (item == "48") {
                if (team2.includes("\n<:EnglandVictoria:1009978682510692373> England-Victoria")) {
                    team1.push("\n" + civList[item])
                    t1Count++
                } else {
                    team2.push("\n" + civList[item])
                    t2Count++;
                }
            } else if (item == "4") {
                if (team2.includes("\n<:Phoenicia:1009978749808291851> Phoenicia")) {
                    team1.push("\n" + civList[item])
                    t1Count++
                } else {
                    team2.push("\n" + civList[item])
                    t2Count++
                }
            } else if (item == "1") {
                if (team2.includes("\n<:Indonesia:1009978713842135060> Indonesia")) {
                    team1.push("\n" + civList[item])
                    t1Count++
                } else {
                    team2.push("\n" + civList[item])
                    t2Count++
                }
            } else if (item == "21") {
                if (team2.includes("\n<:Australia:1009996377452982393> Australia")) {
                    team1.push("\n" + civList[item])
                    t1Count++
                } else {
                    team2.push("\n" + civList[item])
                    t2Count++
                }
            } else if (item == "35") {
                if (team2.includes("\n<:FranceBQ:1009978686960836608> France-BQ")) {
                    team1.push("\n" + civList[item])
                    t1Count++
                } else {
                    team2.push("\n" + civList[item])
                    t2Count++
                }
            } else if (item == "50") {
                if (team2.includes("\n<:Mongolia_Genghis:1009978735291797646> Mongolia-Genghis")) {
                    team1.push("\n" + civList[item])
                    t1Count++
                } else {
                    team2.push("\n" + civList[item])
                    t2Count++
                }
            } else {
                team2.push("\n" + civList[item])
                t2Count++;
            }
        }

    })

    let finalDraft = [team1, team2]
    return finalDraft

}


// console.log(...team1);
// console.log(...team2);


module.exports = (bot) => {

    bot
        .on('ready', (client) => {
            console.log("Ready");
        })

        .on('messageCreate', (message) => {
            lastMessage = message;
            console.log(message.content);
            // console.log(message.channel.id);
            // console.log(message.channel.isThread());
            let x = message.channel.isThread();
            let y = message.channel.id;

            let words = message.content.split(' ')
            console.log(...words)
            if (words.includes('!draft')) {
                if (words.includes('1')) {
                    words = ['Мапуче', 'Вавилон', 'Мали', 'Византия', 'Маори']
                } else if (words.includes('2')) {
                    words = ['Мапуче', 'Вавилон', 'Мали', 'Византия', 'Маори', 'Норвегия', 'Япония', 'Бразилия']
                } else if (words.includes('3')) {
                    words = ['Мапуче', 'Вавилон', 'Мали', 'Византия', 'Маори', 'Португалия', 'Галлы', 'Кри', 'Корея', 'Эфиопия']
                }
                let m = 58;
                let bannedCivs = [];

                words.forEach((item) => {
                    if (item.toLowerCase == "семь") {
                        if (civListArr.includes(item.toLowerCase())) {
                            bannedCivs.push(item);
                            m--;
                        }
                    } else if (civListArr.includes(item.toLowerCase())) {
                        bannedCivs.push(item);
                        m--;
                    }
                })

                let indexNumber = [];
                bannedCivs.forEach((item) => {
                    indexNumber.push(civListArr.indexOf(item.toLowerCase()) + 1)
                })

                let finalDraft = DraftMode(m, indexNumber);
                let team1 = finalDraft[0];
                let team2 = finalDraft[1];
                message.channel.send("*Забаненные цивилизации :* " + bannedCivs);
                message.channel.send("**Команда 1** " + team1.sort().join(""))
                message.channel.send("**Команда 2** " + team2.sort().join(""))
            }

            if (message.content == "list") {
                const emojilist = message.guild.emojis.cache.map(emoji => emoji.toString()).join(" ")
                message.channel.send(emojilist);
            }


            // if ((message.channel.id === "590963477817065474") && (message.content == "!help"))
            //     message.channel.send("вы написали в общалки!")


            if (message.content == "mylife кто?")
                message.channel.send("Я думаю что он gay")

            if (message.content == "_vadya_queen кто?")
                message.channel.send("Тигр, машина, филантроп, стронг и просто хороший админ. ")

            if (message.content == "!cc" || message.content == "!CC" || message.content == "!сс" || message.content == "!СС") {
                message.channel.send({
                    embeds: [
                        {
                            title: "ПРАВИЛА СС",
                            description: "СС - досрочное завершение игры с определенным победителем (напр., \"СС Рим\") " +
                                "\n\n Количество голосов \"за\" для успешного голосования:" +
                                "\n\n  *- 1-79 ход – единогласно* \n*- 80+ ход – 100% - 1 игрок*",
                            color: "GOLD"
                        }

                    ]
                });
            }

            if (message.content == "!scrap" || message.content == "!скрап") {
                message.channel.send({
                    embeds: [
                        {
                            title: "ПРАВИЛА СКРАПА",
                            description: "Количество голосов  для успешного голосования:\n\n - 1-29 ход – 100% - 3 игрока\n - 30-59 ход – 100% - 2 игрока\n - 60-79 ход – все, кроме 1 игрока.\n - 80+ ход – единогласно.",
                            color: "RED"
                        }

                    ]
                });
            }

            if (message.content == "!ремап" || message.content == "!remap") {
                message.channel.send({
                    embeds: [
                        {
                            title: "ПРАВИЛА РЕМАПА",
                            description: "Голосование за ремап проводится на 15 ход.\n\n *Для успешного голосования необходимо согласие всех игроков, кроме двух.*\n\n За одну игру возможен только один ремап.\n\n" +
                                " \n **Правила технического ремапа :** " +
                                "\n\n**На картах Пангея, Нагорье, 7 морей** у вас должна быть возможность поставить 3 доп. города  (помимо столицы) в радиусе 5 клеток от места появления, на остальных картах должна быть возможность поставить 2 доп. города. В случае, если данные условия не выполняются, вы можете потребовать технический ремап до 15 хода включительно (С приложением скриншота). Важно! Города не обязательно должны быть рядом с водой. 5 клеток от места появления отсчитывается не по прямой, а по траектории движения поселенца.\n" +
                                "\n**Если в игре установлены неправильные настройки**, то Вы также можете потребовать технический ремап до 15 хода включительно. \n",
                            color: "BLUE"
                        }

                    ]
                });
            }
            if (message.content == "!veto" || message.content == "!вето") {
                message.channel.send({
                    embeds: [
                        {
                            title: "ПРАВИЛО ВЕТО",
                            description: "Это правило, позволяющее игроку, обладающим правом вето \"Отменить\"  голосование за CC и Скрап \n\n 1) Вето по очкам : Игроки, имеющие больше всего очков в таблице счёта. Для FFA8 первые 2 игрока. Для FFA10 первые три игрока. \n " +
                                "\n2) Научное вето : \n - игрок, изучивший наибольшое количество технологий. \n - игрок,имеющий наибольшее кол-во науки в ход \n - игрок, выполнивший проект \" запуск искусственного спутника\" (первый проект в космической гонке).\n\n" +
                                "3) Культурное вето :\n - игрок, имеющий наибольшое количество культуры за ход \n - игрок, имеющий, как минимум 500 очков туризма в ход. \n\n" +
                                "4) Военное вето : игрок, захвативший наибольшее количество столиц других цивилизаций. При одинаковом количестве захваченных столиц, правом вето обладает игрок с наибольшей военной мощью. \n\n" +
                                "5) Религиозное вето : игрок, обративший большинство других цивилизаций в свою религию, но как минимум 1/3 от количества всех цивилизаций. \n\n" +
                                "6) Дипломатическое вето : игрок, имеющий наибольшее количество очков дип. победы, но как минимум 10.",
                            color: "PURPLE"
                        }

                    ]
                });
            }
            // if (((message.content == "!new") || (message.content == "!NEW") || (message.content == "!туц    ")) && (x) && (message.channel.id != "962840941490753586"))
            // message.channel.send("Режимы игры : 1️⃣ - случайные технологии 2️⃣ - монополии и корпорации 3️⃣ - варварские кланы, 4️⃣ - случайные цивилизации 5️⃣ - без автобанов цивилизаций  0️⃣ - при отсутствии желания играть с этими режимами")


            if (message.content == "Режимы игры : 1️⃣ - случайные технологии 2️⃣ - монополии и корпорации 3️⃣ - варварские кланы, 4️⃣ - случайные цивилизации 5️⃣ - без автобанов цивилизаций  0️⃣ - при отсутствии желания играть с этими режимами") {
                //  message.channel.send("Возраст мира: 🏨 - новый 🏠 - стандартный")
                message.channel.send("Карта : 1️⃣ - пангея 2️⃣ - континенты 3️⃣ - архипелаги 4️⃣ - нагорье 5️⃣ - озёра 6️⃣ - фрактал  7️⃣ - семь морей \n" +
                    "**Можно голосовать только за одну карту.**")
                message.react('1️⃣');
                message.react('2️⃣');
                message.react('3️⃣');
                message.react('4️⃣');
                message.react('5️⃣');
                message.react('0️⃣');
            }
            ;

            if (message.content == "Карта : 1️⃣ - пангея 2️⃣ - континенты 3️⃣ - архипелаги 4️⃣ - нагорье 5️⃣ - озёра 6️⃣ - фрактал  7️⃣ - семь морей \n" +
                "**Можно голосовать только за одну карту.**") {
                message.channel.send("Военный союз : ✅ - разрешён ❎ - запрещён");
                message.react('1️⃣');
                message.react('2️⃣');
                message.react('3️⃣');
                message.react('4️⃣');
                message.react('5️⃣');
                message.react('6️⃣');
                message.react('7️⃣');

            }
            ;

            if (message.content == "Военный союз : ✅ - разрешён ❎ - запрещён") {
                message.channel.send("Пропуск великих людей : ✅ - разрешён ❎ - запрещён");
                message.react('✅');
                message.react('❎');
            }

            if (message.content == "Пропуск великих людей : ✅ - разрешён ❎ - запрещён") {
                message.channel.send("Термоядерные устройства: 🚀 - разрешены ⛔ - запрещены");
                message.react('✅');
                message.react('❎');
            }

            if (message.content == "Термоядерные устройства: 🚀 - разрешены ⛔ - запрещены") {
                message.channel.send("Количество дружб и союзов : ♾️ - не ограничено 2️⃣ - не более двух");
                message.react('🚀');
                message.react('⛔');
            }

            if (message.content == "Количество дружб и союзов : ♾️ - не ограничено 2️⃣ - не более двух") {
                message.channel.send("Торговля золотом и стратегическими ресурсами : ✅ - разрешена ❎ - запрещена 💰 - только золотом ⚙ - только стратегическими ресурсами");
                message.react('♾️');
                message.react('2️⃣');
            }

            if (message.content == "Торговля золотом и стратегическими ресурсами : ✅ - разрешена ❎ - запрещена 💰 - только золотом ⚙ - только стратегическими ресурсами") {
                message.channel.send("Ресурсы: 🥦 - скудные 🍏 - стандартные 🍉 - изобильные");
                message.react('✅');
                message.react('❎');
                message.react('💰');
                message.react('⚙');
            }

            if (message.content == "Ресурсы: 🥦 - скудные 🍏 - стандартные 🍉 - изобильные") {
                message.channel.send("Стратегические ресурсы: 🛐 - стандартные 🐴 - изобильные ✅ - гарантированные");
                message.react('🥦');
                message.react('🍏');
                message.react('🍉');
            }

            if ((message.content == "Стратегические ресурсы: 🛐 - стандартные 🐴 - изобильные ✅ - гарантированные") && (message.channel.id != "962840941490753586")) {
                if (mode === 1)
                    message.channel.send("Ограничение по количеству ходов : ♾️- нет 1️⃣ - 150 ходов 2️⃣ - 160 ходов 3️⃣ - 170 ходов");
                else if (mode === 2)
                    message.channel.send("Ограничение по количеству ходов : ♾️- нет 1️⃣ - 130 ходов 2️⃣ - 140 ходов 3️⃣ - 150 ходов");
                message.react('🛐');
                message.react('🐴');
                message.react('✅');
            }

            if ((message.content == "Ограничение по количеству ходов : ♾️- нет 1️⃣ - 150 ходов 2️⃣ - 160 ходов 3️⃣ - 170 ходов") || ((message.content == "Ограничение по количеству ходов : ♾️- нет 1️⃣ - 130 ходов 2️⃣ - 140 ходов 3️⃣ - 150 ходов")) && (message.channel.id != "962840941490753586")) {
                if (mode === 1)
                    message.channel.send("Таймер после 30 - ого хода : 🐢 - динамический (не слишком быстрый, не слишком медленный), 🐇 - стандартный (более быстрый)\nПо умолчанию таймер динамический, для стандартного необходимо 6 голосов для FFA8 и 7 для FFA10.");
                else if (mode === 2)
                    message.channel.send("Таймер : 1️⃣ - Competitive (быстрый) 2️⃣ - Classic - обычный 3️⃣ - Moderate (очень быстрый)");
                message.react('♾️');
                message.react('1️⃣');
                message.react('2️⃣');
                message.react('3️⃣');
            }

            if ((message.content == "Таймер после 30 - ого хода : 🐢 - динамический (не слишком быстрый, не слишком медленный), 🐇 - стандартный (более быстрый)\nПо умолчанию таймер динамический, для стандартного необходимо 6 голосов для FFA8 и 7 для FFA10.") || (message.content == "Таймер : 1️⃣ - Competitive (быстрый) 2️⃣ - Classic - обычный 3️⃣ - Moderate (очень быстрый)")) {
                message.channel.send("Отметьте, что вы готовы!");
                if (mode === 1) {
                    message.react('🐢');
                    message.react('🐇');
                } else if (mode === 2) {
                    message.react('1️⃣');
                    message.react('2️⃣');
                    message.react('3️⃣');
                }
            }


            if (message.content == "Отметьте, что вы готовы!") {
                message.react('⚔️');
            }

            if ((message.content == "!reg" & (x)))
                message.channel.send("Нажмите на реакцию, чтобы забронировать себе место в лобби.\nПосле того, как наберётся достаточное количество игроков, у вас есть 5 минут, чтобы зайти в лобби.")

            if (message.content == "Нажмите на реакцию, чтобы забронировать себе место в лобби.\nПосле того, как наберётся достаточное количество игроков, у вас есть 5 минут, чтобы зайти в лобби.")
                message.react('😐')

            if (message.content == "!баны" || message.content == "!автобаны" || message.content == "!bans") {
                message.channel.send({
                    embeds: [
                        {
                            title: "Автобаны",
                            description: "Цивилизации, которые находятся в бане в каждой игре" +
                                "\n\n Австралия, Вавилон, Колумбия, Мапуче, Византия",
                            color: "BLACK"
                        }

                    ]
                });

            }

            if ((message.content == "!mnew") && (x))
                message.channel.send("Бан пантеона \"Бог Моря\" ")

            if (message.content == "Бан пантеона \"Бог Моря\"") {
                message.channel.send("Бан чуда света \"Венецианский Арсенал\" ");
                message.react('✅');
                message.react('❎');
            }

            if (((message.content == "!new") || (message.content == "!NEW")) && (x) && (message.channel.id == "962840941490753586"))
                message.channel.send("Карта : 1️⃣ - пангея 2️⃣ - континенты 3️⃣ - архипелаги 4️⃣ - нагорье 5️⃣ - озёра 6️⃣ - фрактал  7️⃣ - семь морей \n" +
                    "**Можно голосовать только за одну карту.**")

            if ((message.content == "Скорость таймера : 1️⃣ - classic (стандартный) 2️⃣ - competitive (быстрый) 3️⃣ - casual (медленный)")) {
                message.channel.send("Отметьте, что вы готовы!");
                message.react('1️⃣');
                message.react('2️⃣');
                message.react('3️⃣');
            }

            if (message.content == "Бан чуда света \"Венецианский Арсенал\"") {
                message.react('✅');
                message.react('❎');
            }

            let c = message.channel;
            let hello = message.id;
            let zzz = message.channel.isThread()
            let ThreadName = 0;

            if (message.content == "!new" && !x) {
                console.log(message.member.voice.channel == null)
                if (message.member.voice.channel != null) {
                    mentionArray = [];
                    let voiceMemb = message.member.voice.channel.members;
                    let membArray = []
                    voiceMemb.forEach((item) => {
                        membArray.push(item);
                    })
                    membArray.forEach((item) => {
                        mentionArray.push("<@" + item.user.id + ">")
                    })
                }
                if (message.channel.id === "884501493410054154") {
                    mode = 1;
                    FFAVanillaCount = FFAVanillaCount + 1;
                    ThreadName = FFAVanillaCount;
                } else if (message.channel.id === "945793835835981875") {
                    mode = 2;
                    FFABBGCount = FFABBGCount + 1;
                    ThreadName = FFABBGCount;
                } else if (message.channel.id === "931490554959757312") {
                    mode = 3;
                    TeamsCount = TeamsCount + 1;
                    ThreadName = TeamsCount;
                } else if (message.channel.id === "1013151212285206568") {
                    mode = 3;
                    TeamsCount = TeamsCount + 1;
                    ThreadName = TeamsCount;
                }

                c.threads
                    .create({
                        name: ThreadName,
                        autoArchiveDuration: 60,
                        reason: 'Needed a separate thread for food',
                    },)
                    // .then(threadChannel => console.log(threadChannel))
                    .catch(console.error);
            }

            if (message.content == "Карта : 1️⃣ - Пангея 2️⃣ - Нагорье 3️⃣ - Наклонная Ось 4️⃣ - Внутреннее море 5️⃣ - Первобытная древность 7️⃣ - семь морей") {
                message.channel.send("Драфт : 1️⃣ - обычный 2️⃣ - CWC Драфт  3️⃣ - Рандомные цивилизации 4️⃣ - обратный драфт")
                message.react('1️⃣');
                message.react('2️⃣');
                message.react('3️⃣');
                message.react('4️⃣');
                message.react('5️⃣');
                message.react('7️⃣');
            }

            if (message.content == "Драфт : 1️⃣ - обычный 2️⃣ - CWC Драфт  3️⃣ - Рандомные цивилизации 4️⃣ - обратный драфт") {
                message.channel.send("✅ - С ремапами ❎ - Без ремапов")
                // message.send("Драфт : 1️⃣ - обычный 2️⃣ - FFA Драфт  3️⃣ - Рандомные цивилизации 4️⃣ - обратный драфт")
                message.react('1️⃣');
                message.react('2️⃣');
                message.react('3️⃣');
                message.react('4️⃣');
            }

            if (message.content == "✅ - С ремапами ❎ - Без ремапов") {
                message.react('✅');
                message.react('❎');
            }

            if (message.content == "!tag") {
                if (mentionArray) {
                    mentionArray.forEach((item) => {
                        message.channel.send(item);
                    })
                }
                mentionArray = []
            }

        })

        .on('threadCreate', (thread) => {
            if (mode === 1) {
                thread.send(`Здравствуйте, ваша ветка ${FFAVanillaCount}`);
                thread.send("Режимы игры : 1️⃣ - случайные технологии 2️⃣ - монополии и корпорации 3️⃣ - варварские кланы, 4️⃣ - случайные цивилизации 5️⃣ - без автобанов цивилизаций  0️⃣ - при отсутствии желания играть с этими режимами");
            }
            if (mode === 2) {
                thread.send(`Здравствуйте, ваша ветка ${FFABBGCount}`);
                thread.send("Карта : 1️⃣ - пангея 2️⃣ - континенты 3️⃣ - архипелаги 4️⃣ - нагорье 5️⃣ - озёра 6️⃣ - фрактал  7️⃣ - семь морей \n" +
                    "**Можно голосовать только за одну карту.**");
            }
            if (mode === 3) {
                thread.send(`Здравствуйте, ваша ветка ${TeamsCount}`);
                thread.send("Карта : 1️⃣ - Пангея 2️⃣ - Нагорье 3️⃣ - Наклонная Ось 4️⃣ - Внутреннее море 5️⃣ - Первобытная древность 7️⃣ - семь морей");
            }


        })

    console.log(lastMessage);
    if (lastMessage == "!delete") {
        //thread.delete();
        console.log("Ветка успешно удалена!");
    }

};

