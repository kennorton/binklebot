const Discord = require("discord.js")
const TOKEN = "MTAzNjM1MTkyNzIwNzg1ODM1Nw.GiORUP.xlXB3izNj9wpKEp2lKZ5zaSJNxPJ5atsAEYZHM"

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

client.login(TOKEN)