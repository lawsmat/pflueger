const Discord = require("discord.js")
const c = require("../config.json")

class RoleSystem {
    /**
     * @param {Discord.User|Discord.GuildMember} user 
     * @param {Discord.Client} client
     */
    async isAdmin(user, client) {
        let id = user.id
        // fetch user
        let gm;
        try {
            const guild = await this.getRoleGuild(client)
            gm = await guild.members.fetch(id)
        }catch(e) {
            console.log(e)
            return false;
        }
        for (let i = 0; i < c.adminRoles.length; i++) {
            const rolekey = c.adminRoles[i];
            if(c.roles[rolekey]) {
                if(gm.roles.cache.has(c.roles[rolekey])) {
                    return true;
                }
            }
        }
        return false;
    }

    /**
     * gets the role guild
     * @param {Discord.Client} client
     * @returns {Promise<Discord.Guild>}
     */
    getRoleGuild(client) {
        return client.guilds.fetch(c.roleGuild)
    }
}

module.exports = Object.freeze(new RoleSystem())