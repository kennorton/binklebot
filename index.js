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
})

client.login(process.env.TOKEN) // Start bot with TOKEN variable stored in .env file
