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
    if (message.content == "algorithm"){
        const channel = message.member.voice.channel
        if(!channel) return message.channel.send('algorithm test')

        const player = voiceDiscord.createAudioPlayer();

        let resource = voiceDiscord.createAudioResource('./sounds/algorithm.mp3')
        switch (Math.floor(Math.random() * 2)) {
            case 0:
                resource = voiceDiscord.createAudioResource('./sounds/algorithm.mp3')
                break
            case 1:
                resource = voiceDiscord.createAudioResource('./sounds/snoring.mp3')
                break
        }

        const connection = voiceDiscord.joinVoiceChannel({
            channelId: channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
        })
        console.log(channel.id)
        console.log(message.guild.id)

        player.play(resource)
        connection.subscribe(player)

        player.on(voiceDiscord.AudioPlayerStatus.Idle, () => {
            connection.destroy()
        })
    }
})

client.login(process.env.TOKEN) // Start bot with TOKEN variable stored in .env file test
