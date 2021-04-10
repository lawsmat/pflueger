const { URL } = require("url")
const config = require("../../config.json")

/**
 * Generates an authentication url to begin the OAuth2 flow.
 */
export default (req, res) => {
  var origin = process.env.NEXT_PUBLIC_BASE_URL
  res.json({
    url: `https://discord.com/api/oauth2/authorize?client_id=${process.env.CLIENT_ID}&redirect_uri=${encodeURI(origin + "/launch")}&response_type=code&scope=${encodeURI(config.web.scopes.join(" "))}`
  })
}
