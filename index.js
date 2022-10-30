const Discord = require("discord.js")
require("dotenv").config()

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS",
        "GUILD_BANS"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as $client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "Binkle"){
        message.reply("Stinkle")
    }

    if (message.content == "algorithm"){
        const channel = message.member.voice.channel
        if(!channel) return message.channel.send('algorithm test')

        const player = Discord.createAudioPlayer();
        const resource = Discord.createAudioResource('./sounds/algorithm.mp3')

        const connection = Discord.joinVoiceChannel({
            channelId: channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.adapterCreator,
        })
    }
})

client.login(process.env.TOKEN) // Start bot with TOKEN variable stored in .env file

//neegy neener
