const { ThreadChannel, ThreadManager, SnowflakeUtil, User } = require("discord.js");
let FFAVanillaCount = 0;
let FFABBGCount = 0;
let TeamsCount = 0;
let mode = 0;
let lastMessage = "hello";
module.exports = (bot) => {

    bot
        .on('ready', (client)=>{
            console.log("Ready");
        }   )
        .on('messageCreate', (message)=>{
            lastMessage = message;
        console.log(message.content);
        // console.log(message.channel.id);
        // console.log(message.channel.isThread());        
        let x = message.channel.isThread();
        let y = message.channel.id;



            // if ((message.channel.id === "590963477817065474") && (message.content == "!help"))
            //     message.channel.send("вы написали в общалки!")


            if (message.content == "mylife кто?")
                message.channel.send("Я думаю что он gay")

            if (message.content == "_vadya_queen кто?")
                message.channel.send("Тигр, машина, филантроп, стронг и просто хороший админ. ")

            if (message.content == "!cc" || message.content == "!CC"|| message.content == "!сс"|| message.content == "!СС") {
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

            if (message.content == "!scrap"|| message.content == "!скрап") {
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

            if (message.content == "!ремап"|| message.content == "!remap") {
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
            if (message.content == "!veto"|| message.content == "!вето") {
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
            };

            if (message.content == "Карта : 1️⃣ - пангея 2️⃣ - континенты 3️⃣ - архипелаги 4️⃣ - нагорье 5️⃣ - озёра 6️⃣ - фрактал  7️⃣ - семь морей \n" +
            "**Можно голосовать только за одну карту.**"){
                message.channel.send("Военный союз : ✅ - разрешён ❎ - запрещён");
                message.react('1️⃣');
                message.react('2️⃣');
                message.react('3️⃣');
                message.react('4️⃣');
                message.react('5️⃣');
                message.react('6️⃣');
                message.react('7️⃣');

            };

            if (message.content == "Военный союз : ✅ - разрешён ❎ - запрещён"){
                message.channel.send("Пропуск великих людей : ✅ - разрешён ❎ - запрещён");
                message.react('✅');
                message.react('❎');}

            if (message.content == "Пропуск великих людей : ✅ - разрешён ❎ - запрещён"){
                    message.channel.send("Термоядерные устройства: 🚀 - разрешены ⛔ - запрещены");
                    message.react('✅');
                    message.react('❎');}    

                if (message.content == "Термоядерные устройства: 🚀 - разрешены ⛔ - запрещены"){
                message.channel.send("Количество дружб и союзов : ♾️ - не ограничено 2️⃣ - не более двух");
                message.react('🚀');
                message.react('⛔');
            }

            if (message.content == "Количество дружб и союзов : ♾️ - не ограничено 2️⃣ - не более двух"){
                message.channel.send("Торговля золотом и стратегическими ресурсами : ✅ - разрешена ❎ - запрещена 💰 - только золотом ⚙ - только стратегическими ресурсами");
                message.react('♾️');
                message.react('2️⃣');
            }

            if (message.content == "Торговля золотом и стратегическими ресурсами : ✅ - разрешена ❎ - запрещена 💰 - только золотом ⚙ - только стратегическими ресурсами"){
                message.channel.send("Ресурсы: 🥦 - скудные 🍏 - стандартные 🍉 - изобильные");
                message.react('✅');
                message.react('❎');
                message.react('💰');
                message.react('⚙');
            }

            if (message.content == "Ресурсы: 🥦 - скудные 🍏 - стандартные 🍉 - изобильные"){
                message.channel.send("Стратегические ресурсы: 🛐 - стандартные 🐴 - изобильные ✅ - гарантированные");
                message.react('🥦');
                message.react('🍏');
                message.react('🍉');
            }

            if ((message.content == "Стратегические ресурсы: 🛐 - стандартные 🐴 - изобильные ✅ - гарантированные") && (message.channel.id != "962840941490753586")){
                if (mode === 1)
                message.channel.send("Ограничение по количеству ходов : ♾️- нет 1️⃣ - 150 ходов 2️⃣ - 160 ходов 3️⃣ - 170 ходов");
                else if (mode === 2)
                message.channel.send("Ограничение по количеству ходов : ♾️- нет 1️⃣ - 130 ходов 2️⃣ - 140 ходов 3️⃣ - 150 ходов");
                message.react('🛐');
                message.react('🐴');
                message.react('✅');
            }

            if ((message.content == "Ограничение по количеству ходов : ♾️- нет 1️⃣ - 150 ходов 2️⃣ - 160 ходов 3️⃣ - 170 ходов") || ((message.content == "Ограничение по количеству ходов : ♾️- нет 1️⃣ - 130 ходов 2️⃣ - 140 ходов 3️⃣ - 150 ходов")) && (message.channel.id != "962840941490753586")){
                if (mode === 1)
                message.channel.send("Таймер после 30 - ого хода : 🐢 - динамический (не слишком быстрый, не слишком медленный), 🐇 - стандартный (более быстрый)\nПо умолчанию таймер динамический, для стандартного необходимо 6 голосов для FFA8 и 7 для FFA10.");
                else if (mode === 2)
                message.channel.send("Таймер : 1️⃣ - Competitive (быстрый) 2️⃣ - Classic - обычный 3️⃣ - Moderate (очень быстрый)");
                message.react('♾️');
                message.react('1️⃣');
                message.react('2️⃣');
                message.react('3️⃣');
            }

            if ((message.content == "Таймер после 30 - ого хода : 🐢 - динамический (не слишком быстрый, не слишком медленный), 🐇 - стандартный (более быстрый)\nПо умолчанию таймер динамический, для стандартного необходимо 6 голосов для FFA8 и 7 для FFA10.") || (message.content == "Таймер : 1️⃣ - Competitive (быстрый) 2️⃣ - Classic - обычный 3️⃣ - Moderate (очень быстрый)")){
                message.channel.send("Отметьте, что вы готовы!");
                if (mode === 1){
                message.react('🐢');
                message.react('🐇');
                }
                else if (mode === 2){
                message.react('1️⃣');
                message.react('2️⃣');
                message.react('3️⃣');
                }
                          }


            if (message.content == "Отметьте, что вы готовы!"){
                message.react('⚔️');
            }

            if ((message.content == "!reg" & (x)))
                message.channel.send("Нажмите на реакцию, чтобы забронировать себе место в лобби.\nПосле того, как наберётся достаточное количество игроков, у вас есть 5 минут, чтобы зайти в лобби.")

            if(message.content == "Нажмите на реакцию, чтобы забронировать себе место в лобби.\nПосле того, как наберётся достаточное количество игроков, у вас есть 5 минут, чтобы зайти в лобби.")
                message.react('😐')

            if (message.content == "!баны" || message.content == "!автобаны"|| message.content == "!bans") {
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

            if (message.content == "Бан пантеона \"Бог Моря\""){
                message.channel.send ("Бан чуда света \"Венецианский Арсенал\" ");
                message.react('✅');
                message.react('❎');
            }

            if (((message.content == "!new") || (message.content == "!NEW")) && (x) && (message.channel.id == "962840941490753586"))
            message.channel.send("Карта : 1️⃣ - пангея 2️⃣ - континенты 3️⃣ - архипелаги 4️⃣ - нагорье 5️⃣ - озёра 6️⃣ - фрактал  7️⃣ - семь морей \n" +
            "**Можно голосовать только за одну карту.**")

            if ((message.content == "Скорость таймера : 1️⃣ - classic (стандартный) 2️⃣ - competitive (быстрый) 3️⃣ - casual (медленный)")){
                message.channel.send("Отметьте, что вы готовы!");
                message.react('1️⃣');
                message.react('2️⃣');
                message.react('3️⃣');
            }
            
            if (message.content == "Бан чуда света \"Венецианский Арсенал\""){
                message.react('✅');
                message.react('❎');
            }

            let c = message.channel;
            let hello = message.id;
            let zzz = message.channel.isThread()
            let ThreadName = 0;

            if (message.content == "!tnew" && !x){
                if (message.channel.id === "915892658059243521"){
                mode = 1;
                FFAVanillaCount = FFAVanillaCount + 1;
                ThreadName = FFAVanillaCount;
                }
                else if (message.channel.id === "962840893717643275"){
                    mode = 2;
                FFABBGCount = FFABBGCount + 1;
                ThreadName = FFABBGCount;
                }
                else if (message.channel.id === "931490554959757312"){
                    mode = 3;
                TeamsCount = TeamsCount + 1;
                ThreadName = TeamsCount;
                }
                c.threads
                        .create({
                            name: ThreadName,
                            autoArchiveDuration: 60,
                            reason: 'Needed a separate thread for food',
                        }, )
                        .then(threadChannel => console.log(threadChannel))
                        .catch(console.error);
            }

            if (message.content == "Карта : 1️⃣ - Пангея 2️⃣ - 7 морей 3️⃣ - Нагорье 4️⃣ - Внутреннее море"){
                message.channel.send("Драфт : 1️⃣ - обычный 2️⃣ - FFA Драфт  3️⃣ - Рандомные цивилизации 4️⃣ - обратный драфт")
                message.react('1️⃣');
                message.react('2️⃣');
                message.react('3️⃣');
                message.react('4️⃣');
            }

            if (message.content == "Драфт : 1️⃣ - обычный 2️⃣ - FFA Драфт  3️⃣ - Рандомные цивилизации 4️⃣ - обратный драфт"){
                message.channel.send("✅ - С ремапами ❎ - Без ремапов")
               // message.send("Драфт : 1️⃣ - обычный 2️⃣ - FFA Драфт  3️⃣ - Рандомные цивилизации 4️⃣ - обратный драфт")
                message.react('1️⃣');
                message.react('2️⃣');
                message.react('3️⃣');
                message.react('4️⃣');
            }

            if (message.content == "✅ - С ремапами ❎ - Без ремапов"){
                message.react('✅');
                message.react('❎');
            }
           
        })

        .on('threadCreate',(thread)=>{
            if (mode === 1){
                thread.send(`Здравствуйте, ваша ветка ${FFAVanillaCount}`); 
                thread.send("Режимы игры : 1️⃣ - случайные технологии 2️⃣ - монополии и корпорации 3️⃣ - варварские кланы, 4️⃣ - случайные цивилизации 5️⃣ - без автобанов цивилизаций  0️⃣ - при отсутствии желания играть с этими режимами"); 
                    }    
            if (mode === 2){
        thread.send(`Здравствуйте, ваша ветка ${FFABBGCount}`); 
        thread.send("Карта : 1️⃣ - пангея 2️⃣ - континенты 3️⃣ - архипелаги 4️⃣ - нагорье 5️⃣ - озёра 6️⃣ - фрактал  7️⃣ - семь морей \n" +
        "**Можно голосовать только за одну карту.**"); 
            }    
            if (mode === 3){
                thread.send(`Здравствуйте, ваша ветка ${TeamsCount}`); 
                thread.send("Карта : 1️⃣ - Пангея 2️⃣ - 7 морей 3️⃣ - Нагорье 4️⃣ - Внутреннее море"); 
                    }

            
    })

    console.log(lastMessage);
    if (lastMessage == "!delete"){
        //thread.delete();
        console.log("Ветка успешно удалена!");
    }

};

