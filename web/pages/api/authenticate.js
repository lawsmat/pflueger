const url = require("url")

/**
 * Generates an authentication url to begin the OAuth2 flow.
 */
export default (req, res) => {
  res.status(200).json({ name: 'John Doe' })
}
