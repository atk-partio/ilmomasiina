Handlebars = require "hbsfy/runtime"
moment = require "moment" 

module.exports = {
  init: ->
    Handlebars.registerHelper "formatDate", (date) ->
      moment(date).format()
}