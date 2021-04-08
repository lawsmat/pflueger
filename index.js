const Discord = require("discord.js")
const fs = require('fs').promises
const path = require("path")
const client = new Discord.Client({
    disableMentions: "everyone" // no @everyone ping exploits!
})

// register commands
fs.readdir(path.join(__dirname, "commands")).then((files) => {
    files.forEach((f) => {
        // load em' up!
        /**
         * @type {import("./lib/command")}
         */
        const command = require(path.join(__dirname, "commands", f))
        // register to discord
        if(process.env.DEBUG_GUILD) {
            
        }
    })
})