const Discord = require("discord.js")
const voiceDiscord = require('@discordjs/voice')
const createAudioPlayer = require('@discordjs/voice');
require("dotenv").config()

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS",
        "GUILD_VOICE_STATES",
        32767
    ]
})




function playsound() {
    const connection = voiceDiscord.joinVoiceChannel({ // Create a connection using grabbed ID
        channelId: idFetch,
        guildId: "1036360894281699479",
        adapterCreator: idFetch.guild.voiceAdapterCreator,
    });

    const player = voiceDiscord.createAudioPlayer(); // Create an audio player
    
    switch (Math.floor(Math.random() * 3)) { // Randomly select one of the files stored in ./sounds
        case 0:
            resource = voiceDiscord.createAudioResource('./sounds/algorithm.mp3')
            break
        case 1:
            resource = voiceDiscord.createAudioResource('./sounds/snoring.mp3')
            break
        case 2:
            resource = voiceDiscord.createAudioResource('./sounds/knock.wav')
            break
    }
    
    player.play(resource) // Play the selected randomly selected audio file
    connection.subscribe(player) // Subscribe everyone to the player
    player.on(voiceDiscord.AudioPlayerStatus.Idle, () => { // Leave the call once audio has been played
        connection.destroy()

    
    })
}

// START OF BOT CODE //
client.login(process.env.TOKEN) // Start bot with TOKEN variable stored in .env file test

client.on("ready", () => { // When bot starts, set status to 'invisible' and log to console
    client.user.setStatus("invisible")
    console.log(`Logged in as $client.user.tag`)

    
})

client.on("voiceStateUpdate", function(oldMember, newMember) { // Run playsound() every time somebody joins or interacts with the call
    const { joinVoiceChannel } = require('@discordjs/voice');
    joinVoiceChannel({
        channelId: "1036360894281699483",
        guildId: "1036360894281699479",
        adapterCreator: client.guilds.cache.get("1036360894281699479").voiceAdapterCreator
    })
    
    /*
    if (newMember.channelId !== null) { // Only If a user JOINS a channel
        idFetch= newMember.channelId
        console.log(idFetch)
        setTimeout(playsound, 5000)
    }*/
})
