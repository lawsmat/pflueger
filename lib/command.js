const Discord = require("discord.js")

class Response {
    /**
     * @param {*} interaction
     * @param {Discord.Client} client
     */
    constructor(interaction, client) {
        this.interaction = interaction
        this.client = client;
        this.whook = client.api.webhooks(client.user.id, interaction.token).messages("@original")
    }

    interaction
    client

    edit(msg) {
        this.whook.patch({
            data: {
                content: msg
            }
        })
    }
}

// extend this!
class Command {
    /**
     * @callback Respond
     * @param {"thinking"|"message"} type
     * @param {boolean} ephermal
     * @param {string} msg
     * @returns {Response}
     */

    /**
     * @callback CommandCallback
     * @param {Respond} respond
     * @param {Discord.Client} client
     * @param {Discord.User|Discord.GuildMember} who
     * @param {Discord.Guild} guild
     * @param {Discord.Channel} channel
     * @param {[]} options
     */

    /**
     * Command constructor
     * @param {{name: string, description: string, options: Array}} commandData 
     * @param {CommandCallback} handler 
     */
    constructor(commandData, handler) {
        this.commandData = commandData;
        this.handler = handler
    }

    handler

    commandData

    /**
     * @param {*} interaction interaction data
     * @param {Discord.Client} client discord bot client
     */
    async onInteraction(interaction, client) {
        let user, member, guild, channel
        if(interaction.user) {
            user = await client.users.fetch(interaction.user.id)
        } else {
            guild = await client.guilds.fetch(interaction.guild_id)
            member = await guild.members.fetch(interaction.member.user.id)
            channel = guild.channels.cache.get(interaction.channel_id)
        }
        this.handler(function(type, ephermal, msg) {
            client.api.interactions(interaction.id, interaction.token).callback.post({data: {
                data: {
                    content: type == "message" ? msg : null,
                    allowedMentions: { parse: ["users"] },
                    flags: ephermal ? 64 : 0 
                },
                type: type == "thinking" ? 5 : 4,
            }})
            return new Response(interaction,client)
        },
        client,
        user || member, guild || null, channel || null, interaction.data.options)
    }
}

module.exports = Command