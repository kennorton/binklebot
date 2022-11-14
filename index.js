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

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

myGuildID = "794443094518005780";


// START OF BOT CODE //
client.login(process.env.TOKEN) // Start bot with TOKEN variable stored in .env file test

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

client.on("ready", () => { // When bot starts, set status to 'invisible' and log to console
    client.user.setStatus("invisible")
    console.log(`Logged in as $client.user.tag`)
    console.log("Hello");
    
    memberLoop();
})

async function memberLoop() {
    // [ #==#==#==#==#==# Iterates Through All Members #==#==#==#==#==# ]
    while (true) {
        loopFlag = false;
        const list = client.guilds.cache.get(myGuildID);

        // Member loop
        list.members.cache.each(member => {
            if (member.voice.channelId != null && loopFlag == false) {
                if (Math.floor(Math.random() * 2) == 0) {
                    console.log(member.voice.channelId);
                    playSound(member.voice.channelId);
                    console.log("Called playsound");
                    loopFlag = true;
                }
                else {
                    console.log("Unsuccessful roll");
                }
            }
            else {
                console.log("Member is not in a voice channel");
            }
        });
        await sleep(60000);
        console.log("");
    }
    return;
}
function playSound(channelToJoin) {
    // [ #==#==#==#==#==# Joins Call #==#==#==#==#==# ]
    const { joinVoiceChannel } = require('@discordjs/voice');
    const connection = joinVoiceChannel({
        channelId: channelToJoin,
        guildId: myGuildID,
        adapterCreator: client.guilds.cache.get(myGuildID).voiceAdapterCreator
    })

    // [ #==#==#==#==#==# Sound Functionality #==#==#==#==#==# ]
    const player = voiceDiscord.createAudioPlayer();
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

    return;
}