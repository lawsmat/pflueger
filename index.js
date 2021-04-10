const Discord = require("discord.js")
const fs = require('fs').promises
const path = require("path")
const client = new Discord.Client({
    disableMentions: "everyone" // no @everyone ping exploits!
})
require("dotenv").config()

/**
 * Container for all of the commands. Useful for getting/executing specific ones automatically.
 * @type {import("./lib/command")[]}
 */
let commands = []

// register commands
client.on("ready",() => {
    fs.readdir(path.join(__dirname, "commands")).then((files) => {
        if(process.env.DEBUG_GUILD) {
            console.log("Automatically registering commands to debug guild...")
            // register the deploy command
            const deploy = require("./lib/deploy")
            client.api.applications(client.user.id).guilds(process.env.DEBUG_GUILD).commands.post({data: deploy.commandData})
            commands.push(deploy)
        }
        files.forEach((f) => {
            // load em' up!
            /**
             * @type {import("./lib/command")}
             */
            const command = require(path.join(__dirname, "commands", f))
            // register to array
            commands.push(command)
            // register to discord
            if(process.env.DEBUG_GUILD) {
                // register to guild
                client.api.applications(client.user.id).guilds(process.env.DEBUG_GUILD).commands.post({data: command.commandData})
            }
        })
    })
})
// slash commands
client.ws.on('INTERACTION_CREATE', async interaction => {
    commands.find(c => c.commandData.name == interaction.data.name).onInteraction(
        interaction,
        client
    )
})

client.login(process.env.TOKEN).then(() => {
    console.log("Bot logged in.")
}).catch(e => {
    console.error("There was an issue logging into Discord.",e)
})