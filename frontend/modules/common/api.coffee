_ = require "lodash"
Bacon    = require 'baconjs'
bjq      = require 'bacon.jquery'

module.exports = do -> 
  rootPath = "api/"

  apiCall = (type, path, params = {}) ->
    Bacon.$.ajax {
      type: type,
      url: rootPath + path,
      data: params
    }  
  {
    call: apiCall,
    get: (path, params) ->  apiCall "GET", path, params,
    post: (path, params) ->  apiCall "POST", path, params
  }