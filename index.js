const Discord = require("discord.js")
const TOKEN = "MTAzNjM1MTkyNzIwNzg1ODM1Nw.GWH5Yz.jdCLEedPUAZs4hsCsBW5KkXHuKPsLLU5gldO2k"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS",
        "GUILD_BANS"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as $client.user.tag}`) // butt fart haha
})

client.login(TOKEN)