const Command = require("../lib/command")

module.exports = new Command({
    "name": "ping",
    "description": "Pong!!!"
},(u,c) => {
    c("Pong",true)
})