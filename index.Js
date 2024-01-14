const Discord = require("discord.js")
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});
Client.on("ready", () => {
    console.log("bot opérationnnel")
});
Client.on("messageCreate", message => {
    if(message.content === 'bouton'){
        var row = new Discord.MessageActionRow()
            .addComponents(new Discord.MessageButton()
                .setCustomId("bouton1")
                .setLabel("bouton 1")
                .setStyle("DANGER")
            )
                .addComponents(new Discord.MessageButton()
                .setCustomId("bouton2")
                .setLabel("bouton 2")
                .setStyle("PRIMARY")
           );
        message.channel.send({content: "message avec bouton", components: [row]});
    }
});


Client.on('messageCreate', (message) => {
    if (message.content.startsWith('!help'))  {
        const helpembed = require("./src/embed/!help")();
        message.channel.send({ embeds: [helpembed]})
    }
});

Client.login("the-token")