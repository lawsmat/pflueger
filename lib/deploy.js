// Command Deployment System

const Command = require("./command");
const roleSystem = require("./roleSystem");

module.exports = new Command({
    name: "deploy",
    description: "Deploys guild commands to all guilds."
},async (respond, client, user) => {
    let response = respond("thinking")
    if(await roleSystem.isAdmin(user, client)) {
        response = response.edit("Okay!")
    }else{
        return response.edit("You do not have permission to deploy!")
    }

    response
})