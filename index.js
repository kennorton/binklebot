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
    

})

client.on("messageCreate", (message) => {
    if (message.content == "algorithm"){
        console.log(`Logged in as $client.user.tag}`)
        let guild = guild.channels
        console.log(guild.name)
        console.log(guild.channels)

    for (let i = 1; i < length(guild); i++) {
        console.log(guild.channels[i])
    }
        /*const channel = message.member.voice.channel
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

        player.play(resource)
        connection.subscribe(player)

        player.on(voiceDiscord.AudioPlayerStatus.Idle, () => {
            connection.destroy()
        })*/
    }
})

client.login(process.env.TOKEN) // Start bot with TOKEN variable stored in .env file test
