errorTemplate = require("./alerts-error.hbs")
warningTemplate = require("./alerts-warning.hbs")
successTemplate = require("./alerts-success.hbs")
Bacon = require 'baconjs'

module.exports = do ->
  alertBus = new Bacon.Bus()

  {
    showIn: ($element) ->
      alertBus.onValue (alert) ->
        template = switch alert.type
          when 'error' then errorTemplate
          when 'warning' then warningTemplate
          when 'success' then successTemplate
          else throw new Error('Unknown alert type')
        $element.html template(alert)

    error: (msg) -> alertBus.push({type: "error", message: msg})
    warning: (msg) -> alertBus.push({type: "warning", message: msg})
    success: (msg) -> alertBus.push({type: "success", message: msg})
  }