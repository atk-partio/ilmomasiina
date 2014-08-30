template = require("./main.hbs")
events   = require('../events/events')
Bacon    = require('baconjs')

module.exports = ($element) ->
  $element.html do template
  events($element.find ".events")