const Discord = require("discord.js")
const voiceDiscord = require('@discordjs/voice')
require("dotenv").config()

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS",
        "GUILD_BANS",
        32767
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

        const player = voiceDiscord.createAudioPlayer();
        const resource = voiceDiscord.createAudioResource('./sounds/algorithm.mp3')

        const connection = voiceDiscord.joinVoiceChannel({
            channelId: channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.adapterCreator,
        })

        player.play()
        connection.subscribe(player)

        player.on(voiceDiscord.AudioPlayerStatus.Idle, () => {
            connection.destroy()
        })
    }
})

client.login(process.env.TOKEN) // Start bot with TOKEN variable stored in .env file test
