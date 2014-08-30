template = require("./main.hbs")
events = require('../events/events')

module.exports = ($element) ->
  $element.html do template
  events($element.find ".events")