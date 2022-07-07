function rule() {
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
        }

        export default rule;