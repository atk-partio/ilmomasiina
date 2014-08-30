template = require("./events.hbs")
api = require("../common/api")
alerts = require("../common/alerts")

module.exports = {
  init: ($element) ->
    eventsStream = api.get "events" 

    eventsStream.onValue (events) -> 
      $element.html(template({
        openEvents: events
      })) 

    eventsStream.onError ->
      alerts.error("Events loading failed")

}