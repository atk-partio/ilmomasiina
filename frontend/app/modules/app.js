'use strict';

var angular = require('angular')

require('angular-route')
require('angular-animate')
require('angular-resource')

require('../bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js')

require('./common/services')
require('./common/directives')

// templates.js contains project's all templates
// combined by "templates" gulp task
require('./templates')

var app = angular.module('ilmomasiina', ['ngRoute', 'templates', 'ui.bootstrap', 'ilmomasiinaServices'])

app.config(function($locationProvider, $routeProvider) {
  $locationProvider.html5Mode(true)
  $routeProvider
    .otherwise({ redirectTo: '/' });
});

require('./public')
require('./admin')