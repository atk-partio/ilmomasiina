'use strict';

var angular = require('angular')

require('angular-route')
require('angular-animate')
require('angular-resource')

require('../bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js')
require('../bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js')
require('../bower_components/angular-i18n/angular-locale_fi.js')

window.marked = require('marked')
require('../bower_components/angular-marked/angular-marked.js')

require('./common/services')
require('./common/directives')

// templates.js contains project's all templates
// combined by "templates" gulp task
require('./templates')

var app = angular.module('ilmomasiina',
  ['ngRoute', 'templates', 'ui.bootstrap', 'ilmomasiinaServices', 'hc.marked']
)

app.config(['markedProvider', function(markedProvider) {
  markedProvider.setOptions({gfm: true});
}]);

app.config(function($locationProvider, $routeProvider) {
  $locationProvider.html5Mode(false)
  $routeProvider
    .otherwise({ redirectTo: '/' });
});

require('./public')
require('./admin')