const Command = require("../lib/command")

module.exports = new Command({
    "name": "ping",
    "description": "Pong!"
},(reply) => {
    reply("message", false, "Hello, ping! I'm pong! 🏓")
})