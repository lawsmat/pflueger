const Discord = require("discord.js")

// extend this!
class Command {
    /**
     * @callback Respond
     * @param {string} msg
     * @param {boolean} ephermal
     * @returns {void}
     */

    /**
     * @callback CommandCallback
     * @param {Discord.User} who
     * @param {Respond} respond
     */

    /**
     * Command constructor
     * @param {{name: string, description: string, options: Array}} commandData 
     * @param {CommandCallback} handler 
     */
    constructor(commandData, handler) {

    }

    runhandler() {

    }

    onInteraction(interaction) {
        
    }
}

module.exports = Command