template = require './main.hbs'
events = require '../events/events'
alerts = require '../common/alerts'

module.exports = 
  init: ($element) ->
    $element.html do template
    events.init $element.find('.events')
    alerts.showIn $element.find('.alert')
