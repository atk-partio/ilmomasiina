template = require("./events.hbs")
api = require("../common/api")

module.exports = ($element) ->
  $element.html do template
  stream = api.get "events" 
  stream.onValue (value) -> console.log value